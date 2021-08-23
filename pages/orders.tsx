import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
import OrdersList from "@components/orders/OrdersList";

import testOrders from "../data/orders";

import en from "@locales/en";
import fr from "@locales/fr";

const Orders = () => {
  const [orders] = useState(testOrders);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeading title={t.OrdersPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4">
          <Button variant="secondary">Create Order</Button>
        </div>
      </div>
      <OrdersList orders={orders} />
    </>
  );
};

export default Orders;
