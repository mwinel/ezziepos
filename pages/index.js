import { useRouter } from "next/router";
import { DashboardLayout } from "../layout";
import {
  Header,
  Alert,
  BaseButton,
  OverviewCard,
  ActivityTable,
} from "../components";
import { cards } from "../data/cards";
import { Router } from "next/router";

const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "USD",
    status: "success",
    date: "July 13, 2020",
    datetime: "2020-07-13",
  },
  {
    id: 2,
    name: "Payment to John Peter",
    href: "#",
    amount: "$3,000",
    currency: "USD",
    status: "success",
    date: "July 12, 2020",
    datetime: "2020-07-12",
  },
  {
    id: 3,
    name: "Payment to Ruth Kajura",
    href: "#",
    amount: "$1,500",
    currency: "USD",
    status: "processing",
    date: "July 12, 2020",
    datetime: "2020-07-12",
  },
  {
    id: 4,
    name: "Payment to James Mudidi",
    href: "#",
    amount: "$4,560",
    currency: "USD",
    status: "failed",
    date: "July 10, 2020",
    datetime: "2020-07-10",
  },
  {
    id: 5,
    name: "Payment to Isaac Walas",
    href: "#",
    amount: "$560",
    currency: "USD",
    status: "failed",
    date: "July 10, 2020",
    datetime: "2020-07-10",
  },
  {
    id: 6,
    name: "Payment to Keith Ruhinda",
    href: "#",
    amount: "$60",
    currency: "USD",
    status: "success",
    date: "July 9, 2020",
    datetime: "2020-07-9",
  },
  // More transactions...
];

const Index = () => {
  const router = useRouter();

  return (
    <DashboardLayout>
      {/* Page header */}
      <Header>
        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="flex-1 w-full">
            <div className="flex items-center">
              <Alert
                text="You have not yet set up your store address."
                linkText="Go to settings to set up your store address."
                href="/settings"
                variant="warning" // this could be success, warning or danger.
              />
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <BaseButton title="Create Order" variant="secondary" />
            <BaseButton title="Add Product" variant="primary" />
          </div>
        </div>
      </Header>
      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Overview
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            {cards.map((card) => (
              <OverviewCard
                name={card.name}
                amount={card.amount}
                href={card.href}
                card={card}
              />
            ))}
          </div>
        </div>

        {/* Action Panel */}
        <div className="mt-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Payment method
                </h3>
                <div className="mt-5">
                  <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-start sm:justify-between">
                    <h4 className="sr-only">Visa</h4>
                    <div className="sm:flex sm:items-start">
                      <svg
                        className="h-8 w-auto sm:flex-shrink-0 sm:h-6"
                        viewBox="0 0 36 24"
                        aria-hidden="true"
                      >
                        <rect width={36} height={24} fill="#224DBA" rx={4} />
                        <path
                          fill="#fff"
                          d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                        />
                      </svg>
                      <div className="mt-3 sm:mt-0 sm:ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Ending with 4242
                        </div>
                        <div className="mt-1 text-sm text-gray-600 sm:flex sm:items-center">
                          <div>Expires 20/21</div>
                          <span
                            className="hidden sm:mx-2 sm:inline"
                            aria-hidden="true"
                          >
                            &middot;
                          </span>
                          <div className="mt-1 sm:mt-0">
                            Last updated on 22 Jun 2018
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                      <BaseButton
                        title="Edit"
                        type="button"
                        variant="secondary"
                        onClick={() => router.push("/settings")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          Recent activity
        </h2>
        {/* Activity list */}
        {/* <ActivityTable transactions={transactions} /> */}
        {/* Action Panel */}
        <div className="mt-6">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Your recent activities will show here
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    This is where you’ll view recent orders, collected payments,
                    and recently added products.
                  </p>
                </div>
                <div className="mt-5">
                  <BaseButton
                    title="Create your first order"
                    variant="secondary"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
