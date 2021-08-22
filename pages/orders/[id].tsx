import { useRouter } from "next/router";
import PageHeading from "@components/ui/PageHeading";
import OrderDetail from "@components/orders/OrderDetail";

import en from "@locales/en";
import fr from "@locales/fr";

const Order = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="pb-5 flex items-center justify-between">
        <PageHeading title="Order Name will go here" />
        <OrderDetail />
      </div>
    </>
  );
};

export default Order;
