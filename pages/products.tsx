import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
import PagePanel from "@components/ui/PagePanel";
import EmptyState from "@components/ui/EmptyState";
import ProductsList from "@components/products/ProductsList";

import testProducts from "../data/products";

import en from "@locales/en";
import fr from "@locales/fr";

const Products = () => {
  const [products] = useState(testProducts);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeading title={t.ProductsPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4 items-center">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded text-gray-600 hover:bg-gray-200 focus:outline-none"
          >
            Export
          </button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded text-gray-600 hover:bg-gray-200 focus:outline-none"
          >
            Import
          </button>
          <Button variant="secondary" className="ml-2">
            Add Product
          </Button>
        </div>
      </div>
      <PagePanel>
        {products.length ? (
          <ProductsList products={products} />
        ) : (
          <EmptyState
            title="No Products"
            description="Get started by creating a new product."
            buttonText="New Product"
          />
        )}
      </PagePanel>
    </>
  );
};

export default Products;
