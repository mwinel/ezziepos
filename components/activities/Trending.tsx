import Button from "@components/ui/Button";
import ActivityDot from "@components/ui/ActivityDot";

interface TrendingProps {
  data: any;
}

const Trending = ({ data }: TrendingProps) => {
  return (
    <section aria-labelledby="trending-products">
      <div className="bg-white rounded-md shadow">
        <div className="p-6">
          <h2
            id="trending-products-heading"
            className="text-base font-medium text-gray-800"
          >
            Trending
          </h2>
          <div className="mt-6 flow-root">
            <ul className="-my-4 divide-y divide-gray-200">
              {data.map((item) => (
                <li key={item.id} className="flex items-center py-3 space-x-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm mb-2 text-gray-800">
                      <a href={item.href}>{item.name}</a>
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.totalOrders} orders this week
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Button className="w-full" textSize="sm" variant="primary">
              View all
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
