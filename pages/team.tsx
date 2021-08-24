import { useState } from "react";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/solid";
import DashboardLayout from "@components/layouts/DashboardLayout";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
import PagePanel from "@components/ui/PagePanel";
import TeamList from "@components/team/TeamList";
import EmptyState from "@components/ui/EmptyState";

import testTeamMembers from "../data/team";

import en from "../locales/en";
import fr from "../locales/fr";

const Team = () => {
  const [team] = useState(testTeamMembers);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <PageHeading title={t.TeamPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4">
          <Button
            variant="secondary"
            textSize="sm"
            icon={
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            }
          >
            Invite User
          </Button>
        </div>
      </div>
      <PagePanel>
        {team.length ? (
          <TeamList team={team} />
        ) : (
          <EmptyState
            title="No Team Members"
            description="Get started by inviting new team members."
            buttonText="Invite User"
          />
        )}
      </PagePanel>
    </DashboardLayout>
  );
};

export default Team;
