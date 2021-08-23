import { useState } from "react";
import { useRouter } from "next/router";
import Badge from "@components/ui/Badge";
import PaginationNav from "@components/ui/PaginationNav";
import Table from "@components/ui/Table";
import TableHead from "@components/ui/TableHead";
import TableRow from "@components/ui/TableRow";
import TableHeader from "@components/ui/TableHeader";
import TableBody from "@components/ui/TableBody";
import TableCell from "@components/ui/TableCell";
import Checkbox from "@components/ui/Checkbox";
import SearchInput from "@components/ui/SearchInput";
import FilterTabs from "@components/ui/FilterTabs";

import en from "@locales/en";
import fr from "@locales/fr";

interface OrdersListProps {
  orders: any;
}

const FILTER_ORDERS_MAP = {
  All: () => true,
  Completed: (order) => order.status === "Completed",
  Cancelled: (order) => order.status === "Cancelled",
  Open: (order) => order.status === "Open",
};

const FILTER_ORDERS_NAMES = Object.keys(FILTER_ORDERS_MAP);

const OrdersList = ({ orders }: OrdersListProps) => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [filter, setFilter] = useState("All");
  const [inputFilter, setInputFilter] = useState("");

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const handleSelectAllOrders = () => {
    if (selectedOrders.length < orders.length) {
      setSelectedOrders(orders.map(({ id }: any) => id));
    } else {
      setSelectedOrders([]);
    }
  };

  const handleSelectOrder = (id) => {
    if (!selectedOrders.includes(id)) {
      setSelectedOrders([...selectedOrders, id]);
    } else {
      setSelectedOrders(
        selectedOrders.filter((selectedOrderId) => {
          return selectedOrderId !== id;
        })
      );
    }
  };

  return (
    <div className="mt-6 flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
            {/* filter tabs */}
            <FilterTabs
              filterNames={FILTER_ORDERS_NAMES}
              filter={filter}
              setFilter={setFilter}
            />
            {/* search */}
            <div className="bg-white">
              <div className="hidden sm:block">
                <div className="flex flex-row py-4 px-6 border-b border-gray-200">
                  {/* Search */}
                  <SearchInput
                    id="filter-orders"
                    name="filter-orders"
                    label="Filter Orders"
                    placeholder="Filter by order number, customer name or status..."
                    value={inputFilter}
                    onChange={(e) => setInputFilter(e.target.value)}
                  />
                </div>
              </div>
            </div>
            {/* table */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader className="px-6">
                    <Checkbox
                      id="select_all"
                      name="select_all"
                      checked={selectedOrders.length === orders.length}
                      onChange={handleSelectAllOrders}
                    />
                  </TableHeader>
                  <TableHeader>{t.OrdersTableOrder}</TableHeader>
                  <TableHeader>{t.OrdersTableCustomer}</TableHeader>
                  <TableHeader>{t.OrdersTableDate}</TableHeader>
                  <TableHeader>{t.OrdersTableStatus}</TableHeader>
                  <TableHeader>{t.OrdersTableTotal}</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders
                  .filter((order) => {
                    if (!inputFilter) return true;
                    if (
                      order.orderNumber
                        .toLowerCase()
                        .indexOf(inputFilter.toLocaleLowerCase()) > -1 ||
                      order.status
                        .toLowerCase()
                        .indexOf(inputFilter.toLocaleLowerCase()) > -1 ||
                      order.customerName
                        .toLowerCase()
                        .indexOf(inputFilter.toLocaleLowerCase()) > -1
                    ) {
                      return true;
                    }
                  })
                  .filter(FILTER_ORDERS_MAP[filter])
                  .map((order: any) => (
                    <TableRow
                      key={order.id}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      <TableCell className="w-4">
                        <Checkbox
                          id="select_one"
                          name="select_one"
                          value={order.id}
                          checked={selectedOrders.includes(order.id)}
                          onChange={() => handleSelectOrder(order.id)}
                        />
                      </TableCell>
                      <TableCell
                        className="text-sm font-medium text-gray-800"
                        onClick={() => router.push("/orders/" + order.id)}
                      >
                        {order.orderNumber}
                      </TableCell>
                      <TableCell className="text-sm text-gray-800">
                        <div>
                          <div className="text-sm font-medium text-gray-800">
                            {order.customerName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {order.customerPhoneNumber}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {order.createdAt}
                      </TableCell>
                      <TableCell>
                        {order.status === "Completed" ? (
                          <Badge title={order.status} variant="success" />
                        ) : order.status === "Cancelled" ? (
                          <Badge title={order.status} variant="danger" />
                        ) : (
                          <Badge title={order.status} variant="secondary" />
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        ${order.total}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            {/* pagination */}
            <PaginationNav
              startCount={1}
              endCount={orders.filter(FILTER_ORDERS_MAP[filter]).length}
              totalCount={orders.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
