import { DashboardLayout } from "../layout";
import {
  SideBar,
  Container,
  Main,
  Aside,
  RecentActivities,
} from "../components";

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
    name: "Samsung Galaxy   A10",
    type: "Electronics",
    department: "Electronics",
    inventory: 11,
    price: 220,
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
          {/* Products Table */}
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
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
