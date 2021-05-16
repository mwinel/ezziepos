import { DashboardLayout } from "../layout";
import { Header, BaseButton, ProductsTable } from "../components";
import { products } from "../data/products";

const Products = () => {
  return (
    <DashboardLayout>
      <Header>
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="flex-1 w-full">
            <div className="flex items-center">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Products
              </h2>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <BaseButton title="Export" variant="secondary" />
            <BaseButton title="Add Product" variant="primary" />
          </div>
        </div>
      </Header>
      {/* Filter and Sort */}
      {/* <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="flex-1 w-full">
            <div className="flex items-center">
              <h2 className="text-lg leading-6 font-medium text-gray-900">
                Search Bar
              </h2>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <BaseButton title="Export" variant="secondary" />
            <BaseButton title="Export" variant="secondary" />
            <BaseButton title="Export" variant="secondary" />
            <BaseButton title="Export" variant="secondary" />
          </div>
        </div>
      </div> */}
      <ProductsTable products={products} />
    </DashboardLayout>
  );
};

export default Products;
