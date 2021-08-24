import Button from "@components/ui/Button";
import ActivityDot from "@components/ui/ActivityDot";

interface RecentActivitiesProps {
  data: any;
}

const RecentActivities = ({ data }: RecentActivitiesProps) => {
  return (
    <section aria-labelledby="recent-activities">
      <div className="bg-white rounded-md shadow">
        <div className="p-6">
          <h2
            id="recent-activity-heading"
            className="text-base font-medium text-gray-800"
          >
            Recent Activities
          </h2>
          <div className="mt-6 flow-root">
            <ul className="-my-4 divide-y divide-gray-200">
              {data.map((item) => (
                <li key={item.id} className="flex items-center py-3 space-x-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm mb-2 text-gray-800">
                      <a href={item.href}>{item.title}</a>
                    </p>
                    <p className="text-xs text-gray-500">
                      <a href={item.href}>By {item.createdBy}</a>
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex items-center px-3"
                    >
                      {item.action === "create" ? (
                        <ActivityDot variant="primary" />
                      ) : item.action === "delete" ? (
                        <ActivityDot variant="danger" />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6">
            <Button className="w-full" variant="primary">
              View all
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
