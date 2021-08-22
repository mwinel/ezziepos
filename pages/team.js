import { useState } from "react";
import { useRouter } from "next/router";
// import { DashboardLayout } from "../layouts";
import {DashboardLayout, PageHeading, Button, TeamTable } from "../components";

import en from "../locales/en";
import fr from "../locales/fr";

const team = [
  {
    id: 1,
    firstName: "Jane",
    lastName: "Cooper",
    title: "Admin",
    department: "Adminstration",
    role: "Admin",
    email: "jane.cooper@example.com",
    isActive: true,
    image: "photo-1494790108377-be9c29b29330",
  },
  {
    id: 2,
    firstName: "Esther",
    lastName: "Howard",
    title: "Manager",
    department: "Adminstration",
    role: "Manager",
    email: "esther.howard@example.com",
    isActive: true,
    image: "photo-1520813792240-56fc4a3765a7",
  },
  {
    id: 3,
    firstName: "Cody",
    lastName: "Fisher",
    title: "Supervisor",
    department: "Sales",
    role: "Supervisor",
    email: "cody.fisher@example.com",
    isActive: false,
    image: "photo-1570295999919-56ceb5ecca61",
  },
  {
    id: 4,
    firstName: "Carol",
    lastName: "Nankya",
    title: "Till Attendant",
    department: "Sales",
    role: "Till Attendant",
    email: "carol.nankya@example.com",
    isActive: true,
    image: "photo-1532417344469-368f9ae6d187",
  },
];

const Team = () => {
  const [users] = useState(team);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="pb-5 flex items-center justify-between">
        <PageHeading title={t.TeamPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4">
          <Button variant="secondary">Add Team Member</Button>
        </div>
      </div>
      <TeamTable team={users} />
    </DashboardLayout>
  );
};

export default Team;
