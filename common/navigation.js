import {
  ClockIcon,
  CogIcon,
  DocumentReportIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  InboxInIcon,
  TagIcon
} from "@heroicons/react/outline";

export const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Orders", href: "/orders", icon: InboxInIcon, current: false },
  { name: "Products", href: "/products", icon: TagIcon, current: false },
  { name: "History", href: "/history", icon: ClockIcon, current: false },
  { name: "Team", href: "/team", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "/reports", icon: DocumentReportIcon, current: false },
];

export const secondaryNavigation = [
  { name: "Settings", href: "/settings", icon: CogIcon },
  { name: "Help", href: "/help", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "/privacy", icon: ShieldCheckIcon },
];
