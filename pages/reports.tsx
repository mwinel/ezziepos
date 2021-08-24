import { useState } from "react";
import { useRouter } from "next/router";
import PageHeading from "@components/ui/PageHeading";
import PagePanel from "@components/ui/PagePanel";
import EmptyState from "@components/ui/EmptyState";

import en from "@locales/en";
import fr from "@locales/fr";

const Reports = () => {
  const [reports] = useState([]);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="flex items-center justify-between">
        <PageHeading title={t.ReportsPageTitle} />
      </div>
      <PagePanel>
        {reports.length ? (
          <div>Reports Componet</div>
        ) : (
          <EmptyState
            title="No Reports"
            description="Get started by creating a new product."
            buttonText="New Product"
          />
        )}
      </PagePanel>
    </>
  );
};

export default Reports;
