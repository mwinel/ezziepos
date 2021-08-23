import { useState } from "react";
import { useRouter } from "next/router";
import { XIcon } from "@heroicons/react/solid";
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

interface ProductsListProps {
  products: any;
}

const FILTER_MAP = {
  All: () => true,
  Active: (product) => product.status === "active",
  Draft: (product) => product.status === "draft",
  Archived: (product) => product.status === "archived",
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const ProductsList = ({ products }: ProductsListProps) => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [inputFilter, setInputFilter] = useState("");

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const handleSelectAllProducts = () => {
    if (selectedProducts.length < products.length) {
      setSelectedProducts(products.map(({ id }: any) => id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id) => {
    if (!selectedProducts.includes(id)) {
      setSelectedProducts([...selectedProducts, id]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((selectedProductId) => {
          return selectedProductId !== id;
        })
      );
    }
  };

  const handleClearSelectedProducts = () => {
    setSelectedProducts([]);
  };

  return (
    <div className="mt-6 flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
            {/* filter tabs */}
            <FilterTabs
              filterNames={FILTER_NAMES}
              filter={filter}
              setFilter={setFilter}
            />
            {/* results display */}
            <div className="bg-white">
              <div className="hidden sm:block">
                <div className="flex flex-row py-4 px-6 border-b border-gray-200">
                  {/* Search */}
                  <SearchInput
                    id="filter-products"
                    name="filter-products"
                    label="Filter Products"
                    placeholder="Filter Products"
                    value={inputFilter}
                    onChange={(e) => setInputFilter(e.target.value)}
                  />
                  <button
                    type="button"
                    className="mr-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-cyan-600 bg-cyan-50 hover:bg-cyan-200 focus:outline-none"
                  >
                    {products.filter(FILTER_MAP[filter]).length} Products
                  </button>
                  {selectedProducts.length ? (
                    <button
                      type="button"
                      className="mr-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-cyan-600 bg-cyan-50 hover:bg-cyan-200 focus:outline-none"
                    >
                      {selectedProducts.length} selected
                      <XIcon
                        className="ml-2 -mr-0.5 h-4 w-4"
                        aria-hidden="true"
                        onClick={handleClearSelectedProducts}
                      />
                    </button>
                  ) : null}
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
                      checked={selectedProducts.length === products.length}
                      onChange={handleSelectAllProducts}
                    />
                  </TableHeader>
                  <TableHeader>{t.ProductsTableProduct}</TableHeader>
                  <TableHeader>{t.ProductsTableInventory}</TableHeader>
                  <TableHeader>{t.ProductsTableStatus}</TableHeader>
                  <TableHeader>{t.ProductsTableType}</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {products
                  .filter((product) => {
                    if (!inputFilter) return true;
                    if (
                      product.name
                        .toLowerCase()
                        .indexOf(inputFilter.toLocaleLowerCase()) > -1
                    ) {
                      return true;
                    }
                  })
                  .filter(FILTER_MAP[filter])
                  .map((product) => (
                    <TableRow
                      key={product.id}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      <TableCell className="w-4">
                        <Checkbox
                          id="select_one"
                          name="select_one"
                          value={product.id}
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => handleSelectProduct(product.id)}
                        />
                      </TableCell>
                      <TableCell
                        className="text-sm font-medium text-gray-800"
                        onClick={() => router.push("/products/" + product.id)}
                      >
                        {product.name}
                      </TableCell>
                      <TableCell className="text-sm text-gray-800">
                        {product.inventory} in stock
                      </TableCell>
                      <TableCell>
                        {product.status === "active" ? (
                          <Badge title={product.status} variant="success" />
                        ) : product.status === "archived" ? (
                          <Badge title={product.status} variant="danger" />
                        ) : (
                          <Badge title={product.status} variant="secondary" />
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">
                        {product.type}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            {/* pagination */}
            <PaginationNav
              startCount={1}
              endCount={products.filter(FILTER_MAP[filter]).length}
              totalCount={products.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
