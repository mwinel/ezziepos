import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
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
      <div className="pb-5 flex items-center justify-between">
        <PageHeading title={t.ProductsPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4">
          <Button variant="secondary">Add Product</Button>
        </div>
      </div>
      <ProductsList products={products} />
    </>
  );
};

export default Products;
