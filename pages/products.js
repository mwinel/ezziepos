import { DashboardLayout } from "../layout";
import {
  SideBar,
  Container,
  Main,
  Aside,
  RecentActivities,
  Tabs,
  Button,
} from "../components";

const tabs = [
  { name: "All", href: "#", current: true },
  { name: "Draft", href: "#", current: false },
  { name: "Archived", href: "#", current: false },
];

const recentActivities = [
  {
    id: 1,
    title: "A new product was added to your inventory.",
    createdAt: "June 30, 2021 03:24:00",
    createdBy: "Nelson M",
    action: "create",
  },
  {
    id: 2,
    title: "A product was deleted from your inventory.",
    createdAt: "June 21, 2021 02:24:00",
    createdBy: "Carol Nankya",
    action: "delete",
  },
];

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S10",
    type: "Electronics",
    department: "Electronics",
    inventory: 60,
    price: 350,
    discount: 0,
    status: "active",
  },
  {
    id: 2,
    name: "Samsung Galaxy S1",
    type: "Electronics",
    department: "Electronics",
    inventory: 160,
    price: 250,
    discount: 0,
    status: "active",
  },
  {
    id: 3,
    name: "Samsung Galaxy A10",
    type: "Electronics",
    department: "Electronics",
    inventory: 11,
    price: 220,
    discount: 0,
    status: "active",
  },
  {
    id: 4,
    name: "Samsung Galaxy A11",
    type: "Electronics",
    department: "Electronics",
    inventory: 11,
    price: 220,
    discount: 0,
    status: "active",
  },
  {
    id: 5,
    name: "Samsung Galaxy A01",
    type: "Electronics",
    department: "Electronics",
    inventory: 10,
    price: 120,
    discount: 0,
    status: "active",
  },
  {
    id: 6,
    name: "Nokia ZT20",
    type: "Electronics",
    department: "Electronics",
    inventory: 2,
    price: 1200,
    discount: 0,
    status: "active",
  },
  {
    id: 7,
    name: "MacBook Pro 13 inches 2018",
    type: "Computer",
    department: "Electronics",
    inventory: 26,
    price: 1800,
    discount: 0,
    status: "active",
  },
  {
    id: 8,
    name: "MacBook Pro 16 inches 2020",
    type: "Computer",
    department: "Electronics",
    inventory: 16,
    price: 2800,
    discount: 0,
    status: "active",
  },
  {
    id: 9,
    name: "Acer Pro-Book",
    type: "Computer",
    department: "Electronics",
    inventory: 116,
    price: 800,
    discount: 0,
    status: "active",
  },
  {
    id: 10,
    name: "Dell e Pro-Book",
    type: "Computer",
    department: "Electronics",
    inventory: 216,
    price: 800,
    discount: 0,
    status: "active",
  },
  {
    id: 11,
    name: "Samsung Note Book",
    type: "Computer",
    department: "Electronics",
    inventory: 19,
    price: 900,
    discount: 0,
    status: "active",
  },
  {
    id: 12,
    name: "Lenovo Titan Note Book",
    type: "Computer",
    department: "Electronics",
    inventory: 21,
    price: 600,
    discount: 0,
    status: "active",
  },
];

const Products = () => {
  return (
    <DashboardLayout>
      <Container>
        <SideBar />
        {/* Page content */}
        <Main>
          {/* Section Heading */}
          <div className="pb-5 mx-4 sm:flex sm:items-center sm:justify-between lg:mx-0">
            <h3 className="text-lg leading-6 font-medium text-gray-800">
              Products
            </h3>
            <div className="mt-3 sm:mt-0 sm:ml-4">
              <Button variant="secondary">Add Product</Button>
            </div>
          </div>
          <Tabs tabs={tabs} id="products-tabs" />
          {/* Products Table */}
          <div className="mt-4 flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-white">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                        >
                          {/* Checkbox */}
                          <input
                            id="select_all"
                            name="select_all"
                            type="checkbox"
                            className="h-4 w-4 text-cyan-600 focus:outline-none border-gray-300 rounded-sm"
                          />
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Inventory
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Type
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 w-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <input
                                id="select_one"
                                name="select_one"
                                type="checkbox"
                                className="h-4 w-4 text-cyan-600 focus:outline-none border-gray-300 rounded-sm"
                              />
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-800">
                                {product.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 inline-flex text-xs leading-5 font-semibold capitalize rounded-full bg-green-100 text-green-800">
                              {product.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-800">
                              {product.inventory}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {product.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Main>
        <Aside>
          <RecentActivities data={recentActivities} />
        </Aside>
      </Container>
    </DashboardLayout>
  );
};

export default Products;
