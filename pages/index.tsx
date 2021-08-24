import { useState } from "react";
import { useRouter } from "next/router";
import DashboardLayout from "@components/layouts/DashboardLayout";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
import PagePanel from "@components/ui/PagePanel";
import Aside from "@components/ui/Aside";
import RecentActivities from "@components/activities/RecentActivities";
import Trending from "@components/activities/Trending";

import testRecentActivities from "../data/recentActivities";
import testTrendingProducts from "../data/trending";

import en from "@locales/en";
import fr from "@locales/fr";

const Home = () => {
  const [recentActivities] = useState(testRecentActivities);
  const [trendingProducts] = useState(testTrendingProducts);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <PageHeading title={t.HomePageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4">
          <Button variant="primary">New Order</Button>
          <Button variant="secondary">New Product</Button>
        </div>
      </div>
      <PagePanel>
        <div className="grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <h2>Stats will go here.</h2>
          </div>
          <div>
            <Aside>
              {/* Recent Activities */}
              <RecentActivities data={recentActivities} />
              {/* Trending Products */}
              <Trending data={trendingProducts} />
            </Aside>
          </div>
        </div>
      </PagePanel>
    </DashboardLayout>
  );
};

export default Home;
