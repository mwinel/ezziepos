import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import en from "../../../locales/en";
import fr from "../../../locales/fr";

interface TeamTableProps {
  team: any;
}

const tabs = [
  { name: "All", href: "#", count: "52", current: true },
  { name: "Active", href: "#", count: "6", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const myLoader = ({ src, width, quality }) => {
  return `https://images.unsplash.com/${src}?w=${width}&q=${quality || 75}`;
};

const TeamTable = ({ team }: TeamTableProps) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const handleSelectAllUsers = () => {
    if (selectedUsers.length < team.length) {
      setSelectedUsers(team.map(({ id }) => id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (id) => {
    if (!selectedUsers.includes(id)) {
      setSelectedUsers([...selectedUsers, id]);
    } else {
      setSelectedUsers(
        selectedUsers.filter((selectedUserId) => {
          return selectedUserId !== id;
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
            <div className="bg-white">
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm rounded-md"
                  defaultValue={tabs.find((tab) => tab.current).name}
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
                    {tabs.map((tab) => (
                      <a
                        key={tab.name}
                        href="#"
                        className={classNames(
                          tab.current
                            ? "border-cyan-500 text-cyan-600"
                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200",
                          "whitespace-nowrap flex py-5 px-1 border-b-2 font-medium text-sm"
                        )}
                        aria-current={tab.current ? "page" : undefined}
                      >
                        {tab.name}
                        {tab.count ? (
                          <span
                            className={classNames(
                              tab.current
                                ? "bg-cyan-100 text-cyan-600"
                                : "bg-gray-100 text-gray-900",
                              "hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:inline-block"
                            )}
                          >
                            {tab.count}
                          </span>
                        ) : null}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>

            {/* table */}
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider"
                  >
                    {/* Checkbox */}
                    <input
                      id="select_all"
                      name="select_all"
                      type="checkbox"
                      checked={selectedUsers.length === team.length}
                      onChange={handleSelectAllUsers}
                      className="h-4 w-4 text-cyan-600 focus:outline-none border-gray-300 rounded-sm"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.TeamTableName}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.TeamTableTitle}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.TeamTableStatus}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {t.TeamTableRole}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {team.map((item) => (
                  <tr
                    key={item.id}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 w-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <input
                          id="select_one"
                          name="select_one"
                          type="checkbox"
                          value={item.id}
                          checked={selectedUsers.includes(item.id)}
                          onChange={() => handleSelectUser(item.id)}
                          className="h-4 w-4 text-cyan-600 focus:outline-none border-gray-300 rounded-sm"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <Link
                        href={{
                          pathname: "/team/[id]",
                          query: { id: item.id },
                        }}
                        passHref
                        key={item.id}
                      > */}
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            loader={myLoader}
                            src={item.image}
                            alt={`${item.firstName} ${item.lastName} profile image`}
                            height={40}
                            width={40}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {item.firstName} {item.lastName}
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.email}
                          </div>
                        </div>
                      </div>
                      {/* </Link> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">
                        {item.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.isActive ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 capitalize">
                          <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                          >
                            <circle cx={4} cy={4} r={3} />
                          </svg>
                          not active
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                      {item.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* pagination */}
            <div>
              <nav
                className="bg-white px-6 py-4 flex items-center justify-between border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
              >
                <div className="hidden sm:block">
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">20</span> results
                  </p>
                </div>
                <div className="flex-1 flex justify-between sm:justify-end">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTable;
