import { useRouter } from "next/router";
import PageHeading from "@components/ui/PageHeading";

import en from "@locales/en";
import fr from "@locales/fr";

const History = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="pb-5 flex items-center justify-between">
        <PageHeading title={t.HistoryPageTitle} />
      </div>
    </>
  );
};

export default History;
