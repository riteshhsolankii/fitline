"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { findNavItem } from "@/config/navigation";

export function AppHeader() {
  const pathname = usePathname();
  const current = findNavItem(pathname);

  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur supports-backdrop-filter:bg-background/60">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mx-1 h-4 self-center" />
      <span className="truncate text-sm font-medium">
        {current?.title ?? "Fitline"}
      </span>

      <div className="ml-auto flex items-center gap-2">
        <Link
          href="/notifications"
          aria-label="Notifications"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
        >
          <Bell />
        </Link>
        <Avatar className="size-8">
          <AvatarFallback className="bg-primary/15 text-xs font-semibold text-foreground">
            AD
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
