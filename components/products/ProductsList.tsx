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

interface ProductsListProps {
  products: any;
}

const ProductsList = ({ products }: ProductsListProps) => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const tabs = [
    { name: "All", href: "#", count: products.length, current: true },
    {
      name: "Active",
      href: "#",
      count: products.filter((product) => product.status === "active").length,
      current: false,
    },
    {
      name: "Draft",
      href: "#",
      count: products.filter((product) => product.status === "draft").length,
      current: false,
    },
    {
      name: "Archived",
      href: "#",
      count: products.filter((product) => product.status === "archived").length,
      current: false,
    },
  ];

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
                {products.map((product: any) => (
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
                    <TableCell className="text-sm font-medium text-gray-800">
                      <Link
                        href={{
                          pathname: "/products/[id]",
                          query: { id: product.id },
                        }}
                        passHref
                      >
                        {product.name}
                      </Link>
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
              endCount={products.length}
              totalCount={products.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
