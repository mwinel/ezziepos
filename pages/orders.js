import { DashboardLayout } from "../layout";
import { Header, BaseButton, OrdersTable } from "../components";
import { orders } from "../data/orders";

const Orders = () => {
  return (
    <DashboardLayout>
      <Header>
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="flex-1 w-full">
            <div className="flex items-center">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Orders
              </h2>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <BaseButton title="Export" variant="secondary" />
            <BaseButton title="Create Order" variant="primary" />
          </div>
        </div>
      </Header>
      <OrdersTable orders={orders} />
    </DashboardLayout>
  );
};

export default Orders;
