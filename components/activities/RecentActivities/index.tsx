import { FC } from "react";
import { Button, ActivityDot } from "../../../components";

interface RecentActivitiesProps {
  data: any;
}

const RecentActivities: FC<RecentActivitiesProps> = ({ data }) => {
  return (
    <section aria-labelledby="recent-activities">
      <div className="bg-white rounded-md shadow">
        <div className="p-6">
          <h2
            id="who-to-follow-heading"
            className="text-base font-medium text-gray-900"
          >
            Recent Activities
          </h2>
          <div className="mt-6 flow-root">
            <ul className="-my-4 divide-y divide-gray-200">
              {data.map((item) => (
                <li key={item.id} className="flex items-center py-4 space-x-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-900">
                      <a href={item.href}>{item.title}</a>
                    </p>
                    <p className="text-sm text-gray-600">
                      <a href={item.href}>By {item.createdBy}</a>
                    </p>
                    <p className="text-sm text-gray-600">
                      <a>{item.createdAt}</a>
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
            <Button variant="primary">View all</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivities;
