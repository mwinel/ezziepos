import { useRouter } from "next/router";
import DashboardLayout from "@components/layouts/DashboardLayout";
import PageHeading from "@components/ui/PageHeading";

import en from "@locales/en";
import fr from "@locales/fr";

const TeamMember = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="pb-5 flex items-center justify-between">
        <PageHeading title="Team member name will go here" />
      </div>
    </DashboardLayout>
  );
};

export default TeamMember;
