import { useRouter } from "next/router";
import DashboardLayout from "@components/layouts/DashboardLayout";
import PageHeading from "@components/ui/PageHeading";
import ProductDetail from "@components/products/ProductDetail";

import en from "locales/en";
import fr from "locales/fr";

const Product = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <PageHeading title="Product Name will go here" />
        <ProductDetail />
      </div>
    </DashboardLayout>
  );
};

export default Product;
