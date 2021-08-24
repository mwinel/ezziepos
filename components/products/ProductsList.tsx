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
import ResultsPill from "@components/ui/ResultsPill";

import en from "@locales/en";
import fr from "@locales/fr";

interface ProductsListProps {
  products: any;
}

const FILTER_PRODUCTS_MAP = {
  All: () => true,
  Active: (product) => product.status === "active",
  Draft: (product) => product.status === "draft",
  Archived: (product) => product.status === "archived",
};

const FILTER_PRODUCTS_NAMES = Object.keys(FILTER_PRODUCTS_MAP);

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

  const filteredProducts = products
    .filter((product) => {
      if (!inputFilter) return true;
      if (
        product.name.toLowerCase().indexOf(inputFilter.toLocaleLowerCase()) > -1
      ) {
        return true;
      }
      if (
        product.type.toLowerCase().indexOf(inputFilter.toLocaleLowerCase()) > -1
      ) {
        return true;
      }
    })
    .filter(FILTER_PRODUCTS_MAP[filter]);

  return (
    <>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
        {/* filter tabs */}
        <FilterTabs
          filterNames={FILTER_PRODUCTS_NAMES}
          filter={filter}
          setFilter={setFilter}
        />
        {/* search */}
        <div className="bg-white">
          <div className="hidden sm:block">
            <div className="flex flex-row py-4 px-6 border-b border-gray-200">
              <SearchInput
                id="filter-products"
                name="filter-products"
                label="Filter Products"
                placeholder="Filter Products by name, status or type..."
                value={inputFilter}
                onChange={(e) => setInputFilter(e.target.value)}
              />
              {selectedProducts.length ? (
                <ResultsPill onClick={handleClearSelectedProducts}>
                  {selectedProducts.length} selected
                </ResultsPill>
              ) : (
                <p className="inline-flex items-center text-xs font-medium">
                  {filteredProducts.length} Products
                </p>
              )}
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
            {filteredProducts.map((product) => (
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
          endCount={filteredProducts.length}
          totalCount={products.length}
        />
      </div>
    </>
  );
};

export default ProductsList;
