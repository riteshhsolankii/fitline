"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dumbbell } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  isNavItemActive,
  mainNav,
  settingsNav,
  type NavItem,
} from "@/config/navigation";

// Red icon + accent bar for the active item. Text stays white: small red
// text on black falls below WCAG AA contrast.
const activeItemClass =
  "relative data-active:before:absolute data-active:before:inset-y-1.5 data-active:before:left-0 data-active:before:w-0.5 data-active:before:rounded-full data-active:before:bg-primary data-active:[&_svg]:text-primary";

function NavMenuItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();
  const isActive = isNavItemActive(pathname, item.href);

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        isActive={isActive}
        tooltip={item.title}
        className={activeItemClass}
        render={
          <Link
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            onClick={() => setOpenMobile(false)}
          />
        }
      >
        <item.icon />
        <span>{item.title}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip="Fitline"
              render={
                <Link href="/dashboard" onClick={() => setOpenMobile(false)} />
              }
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Dumbbell className="size-4" aria-hidden />
              </div>
              <div className="grid flex-1 text-left leading-tight">
                <span className="font-heading text-lg font-bold tracking-wide uppercase">
                  Fit<span className="text-primary">line</span>
                </span>
                <span className="truncate text-xs text-muted-foreground">
                  Gym Management
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <NavMenuItem key={item.href} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <NavMenuItem item={settingsNav} />
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
