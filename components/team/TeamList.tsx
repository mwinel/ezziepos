import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import TableTabs from "@components/ui/TableTabs";
import Badge from "@components/ui/Badge";
import PaginationNav from "@components/ui/PaginationNav";
import Table from "@components/ui/Table";
import TableHead from "@components/ui/TableHead";
import TableRow from "@components/ui/TableRow";
import TableHeader from "@components/ui/TableHeader";
import TableBody from "@components/ui/TableBody";
import TableCell from "@components/ui/TableCell";
import Checkbox from "@components/ui/Checkbox";

import en from "@locales/en";
import fr from "@locales/fr";

interface TeamListProps {
  team: any;
}

const myLoader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`;
};

const TeamList = ({ team }: TeamListProps) => {
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const tabs = [
    { name: "All", href: "#", count: team.length, current: true },
    {
      name: "Active",
      href: "#",
      count: team.filter((teamMember) => teamMember.isActive).length,
      current: false,
    },
    {
      name: "Not Active",
      href: "#",
      count: team.filter((teamMember) => !teamMember.isActive).length,
      current: false,
    },
  ];

  const handleSelectAllTeamMembers = () => {
    if (selectedTeamMembers.length < team.length) {
      setSelectedTeamMembers(team.map(({ id }: any) => id));
    } else {
      setSelectedTeamMembers([]);
    }
  };

  const handleSelectTeamMember = (id) => {
    if (!selectedTeamMembers.includes(id)) {
      setSelectedTeamMembers([...selectedTeamMembers, id]);
    } else {
      setSelectedTeamMembers(
        selectedTeamMembers.filter((selectedTeamMemberId) => {
          return selectedTeamMemberId !== id;
        })
      );
    }
  };

  return (
    <div className="mt-4 flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-md">
            {/* tabs */}
            <TableTabs tabs={tabs} id="team-table" />
            {/* table */}
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader className="px-6">
                    <Checkbox
                      id="select_all"
                      name="select_all"
                      checked={selectedTeamMembers.length === team.length}
                      onChange={handleSelectAllTeamMembers}
                    />
                  </TableHeader>
                  <TableHeader>{t.TeamTableName}</TableHeader>
                  <TableHeader>{t.TeamTableTitle}</TableHeader>
                  <TableHeader>{t.TeamTableStatus}</TableHeader>
                  <TableHeader>{t.TeamTableRole}</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {team.map((teamMember: any) => (
                  <TableRow
                    key={teamMember.id}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    <TableCell className="w-4">
                      <Checkbox
                        id="select_one"
                        name="select_one"
                        value={teamMember.id}
                        checked={selectedTeamMembers.includes(teamMember.id)}
                        onChange={() => handleSelectTeamMember(teamMember.id)}
                      />
                    </TableCell>
                    <TableCell className="text-sm font-medium text-gray-800">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          loader={myLoader}
                          src={teamMember.image}
                          alt={`${teamMember.firstName} ${teamMember.lastName} profile image`}
                          height={40}
                          width={40}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {teamMember.firstName} {teamMember.lastName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {teamMember.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-gray-800">
                      <div>
                        <div className="text-sm text-gray-900">
                          {teamMember.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {teamMember.department}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {teamMember.isActive ? (
                        <Badge title="Active" variant="success" />
                      ) : (
                        <Badge title="Not Active" variant="danger" />
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">
                      {teamMember.role}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {/* pagination */}
            <PaginationNav
              startCount={1}
              endCount={team.length}
              totalCount={team.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
