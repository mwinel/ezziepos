import { useRouter } from "next/router";
import PageHeading from "@components/ui/PageHeading";
import ProductDetail from "@components/products/ProductDetail";

import en from "locales/en";
import fr from "locales/fr";

const Product = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="pb-5 flex items-center justify-between">
        <PageHeading title="Product Name will go here" />
        <ProductDetail />
      </div>
    </>
  );
};

export default Product;
