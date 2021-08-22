import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
import TeamList from "@components/team/TeamList";

import testTeamMembers from "../data/team";

import en from "../locales/en";
import fr from "../locales/fr";

const Team = () => {
  const [team] = useState(testTeamMembers);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <>
      <div className="pb-5 flex items-center justify-between">
        <PageHeading title={t.TeamPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4">
          <Button variant="secondary">Add Team Member</Button>
        </div>
      </div>
      <TeamList team={team} />
    </>
  );
};

export default Team;
