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
import { Logo, NavLink } from "../../components";
import styles from "./SideBar.module.css";

import en from "../../locales/en";
import fr from "../../locales/fr";

const SideBar = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    // Static sidebar for desktop.
    <div className={styles.root}>
      <div className={styles.container}>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className={styles.sidebar}>
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
      </div>
    </div>
  );
};

export default SideBar;
