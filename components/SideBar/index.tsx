import { FC } from "react";
import { useRouter } from "next/router";
import {
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
import { NavLink } from "../../components";

import en from "../../locales/en";
import fr from "../../locales/fr";

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
      <nav
        aria-label="Sidebar"
        className="sticky top-4 divide-y divide-gray-300"
      >
        <div className="pb-8 space-y-1">
          <NavLink name={t.NavLinkHome} icon={<HomeIcon />} href="/home" />
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
          <NavLink name={t.NavLinkTeam} icon={<UserGroupIcon />} href="/team" />
          <NavLink
            name={t.NavLinkReports}
            icon={<DocumentReportIcon />}
            href="/reports"
          />
        </div>
        <div className="pt-10">
          <p
            className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider"
            id="more-headline"
          >
            More
          </p>
          <div className="mt-3 space-y-2" aria-labelledby="more-headline">
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
  );
};

export default SideBar;
