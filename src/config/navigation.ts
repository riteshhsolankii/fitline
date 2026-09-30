import {
  Bell,
  CalendarCheck,
  ChartColumn,
  IdCard,
  LayoutDashboard,
  Settings,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export const mainNav: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "An overview of your gym at a glance.",
  },
  {
    title: "Members",
    href: "/members",
    icon: Users,
    description: "Manage member profiles and contact details.",
  },
  {
    title: "Memberships",
    href: "/memberships",
    icon: IdCard,
    description: "Configure membership plans and track subscriptions.",
  },
  {
    title: "Payments",
    href: "/payments",
    icon: Wallet,
    description: "Record payments and review billing history.",
  },
  {
    title: "Attendance",
    href: "/attendance",
    icon: CalendarCheck,
    description: "Track member check-ins and visit history.",
  },
  {
    title: "Notifications",
    href: "/notifications",
    icon: Bell,
    description: "Send reminders and announcements to members.",
  },
  {
    title: "Reports",
    href: "/reports",
    icon: ChartColumn,
    description: "Analyze revenue, growth, and attendance trends.",
  },
];

export const settingsNav: NavItem = {
  title: "Settings",
  href: "/settings",
  icon: Settings,
  description: "Manage gym details and app preferences.",
};

export const allNav: NavItem[] = [...mainNav, settingsNav];

export function isNavItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function findNavItem(pathname: string) {
  return allNav.find((item) => isNavItemActive(pathname, item.href));
}
