import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import TableTabs from "@components/ui/TableTabs";
import Badge from "@components/ui/Badge";
import PaginationNav from "@components/ui/PaginationNav";
import Table from "@components/ui/Table";
import TableHead from "@components/ui/TableHead";
import TableRow from "@components/ui/TableRow";
import TableHeader from "@components/ui/TableHeader";
import TableBody from "@components/ui/TableBody";
import TableCell from "@components/ui/TableCell";
import Checkbox from "@components/ui/Checkbox";

import en from "@locales/en";
import fr from "@locales/fr";

interface OrdersListProps {
  orders: any;
}

const tabs = [
  { name: "All", href: "#", count: "3", current: true },
  { name: "Completed", href: "#", count: "1", current: false },
  { name: "Open", href: "#", count: "1", current: false },
  { name: "Cancelled", href: "#", count: "1", current: false },
];

const OrdersList = ({ orders }: OrdersListProps) => {
  const [selectedOrders, setSelectedOrders] = useState([]);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const tabs = [
    { name: "All", href: "#", count: orders.length, current: true },
    {
      name: "Completed",
      href: "#",
      count: orders.filter((order) => order.status === "Completed").length,
      current: false,
    },
    {
      name: "Open",
      href: "#",
      count: orders.filter((order) => order.status === "Open").length,
      current: false,
    },
    {
      name: "Cancelled",
      href: "#",
      count: orders.filter((order) => order.status === "Cancelled").length,
      current: false,
    },
  ];

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
    <div className="mt-4 flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
            {/* tabs */}
            <TableTabs tabs={tabs} id="products-table" />
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
                {orders.map((order: any) => (
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
                    <TableCell className="text-sm font-medium text-gray-800">
                      <Link
                        href={{
                          pathname: "/orders/[id]",
                          query: { id: order.id },
                        }}
                        passHref
                      >
                        {order.orderNumber}
                      </Link>
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
              endCount={orders.length}
              totalCount={orders.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
