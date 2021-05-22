import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  SearchIcon,
  ClockIcon,
  CogIcon,
  DocumentReportIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  InboxInIcon,
  TagIcon,
} from "@heroicons/react/outline";
import { ProfileDropdown, Logo, NavLink } from "../../components";
import styles from "./TopHeader.module.css";

import en from "../../locales/en";
import fr from "../../locales/fr";

const TopHeader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  const handleLanguageChange = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <Logo />
              <nav className={styles.nav} aria-label="Sidebar">
                <div className="px-2 space-y-1">
                  <NavLink name={t.NavLinkHome} icon={<HomeIcon />} href="/" />
                  <NavLink
                    name={t.NavLinkOrders}
                    icon={<InboxInIcon />}
                    href="/orders"
                  />
                  <NavLink
                    name={t.NavLinkProducts}
                    icon={<TagIcon />}
                    href="/products"
                  />
                  <NavLink
                    name={t.NavLinkHistory}
                    icon={<ClockIcon />}
                    href="/history"
                  />
                  <NavLink
                    name={t.NavLinkTeam}
                    icon={<UserGroupIcon />}
                    href="/team"
                  />
                  <NavLink
                    name={t.NavLinkReports}
                    icon={<DocumentReportIcon />}
                    href="/reports"
                  />
                </div>
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    <NavLink
                      name={t.NavLinkSettings}
                      icon={<CogIcon />}
                      href="/settings"
                    />
                    <NavLink
                      name={t.NavLinkHelp}
                      icon={<QuestionMarkCircleIcon />}
                      href="/help"
                    />
                    <NavLink
                      name={t.NavLinkPrivacy}
                      icon={<ShieldCheckIcon />}
                      href="/privacy"
                    />
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      <div className={styles.root}>
        <button className={styles.button} onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        {/* Search bar */}
        <div className={styles.container}>
          <div className={styles.searchBar}>
            <form className={styles.form} action="#" method="GET">
              <label htmlFor="search_field" className="sr-only">
                Search
              </label>
              <div className={styles.searchIconContainer}>
                <div className={styles.searchIconBox} aria-hidden="true">
                  <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search_field"
                  name="search_field"
                  className={styles.input}
                  placeholder={t.SearchinputPlaceholder}
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className={styles.bellIconContainer}>
            <select
              id="locale"
              name="locale"
              className="mr-3 pl-3 pr-10 py-2 text-gray-700 text-base font-medium bg-white rounded-full border-none text-sm focus:outline-none focus:border-gray-50 active:outline-none active:border-none lg:rounded-md lg:hover:bg-gray-50 sm:text-sm"
              defaultValue={locale}
              onChange={handleLanguageChange}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
            <button className={styles.bellIconButton}>
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
