import { DashboardLayout } from "../layout";
import {
  Header,
  Alert,
  BaseButton,
  OverviewCard,
  ActivityTable,
} from "../components";
import { cards } from "../data/cards";

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
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          Recent activity
        </h2>
        {/* Activity list */}
        {/* <ActivityTable transactions={transactions} /> */}
      </div>
    </DashboardLayout>
  );
};

export default Index;
