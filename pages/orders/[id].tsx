import { useRouter } from "next/router";
import DashboardLayout from "@components/layouts/DashboardLayout";
import PageHeading from "@components/ui/PageHeading";
import OrderDetail from "@components/orders/OrderDetail";

import en from "@locales/en";
import fr from "@locales/fr";

const Order = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <PageHeading title="Order Name will go here" />
        <OrderDetail />
      </div>
    </DashboardLayout>
  );
};

export default Order;
