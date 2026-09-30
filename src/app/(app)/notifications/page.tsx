import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Notifications",
};

export default function NotificationsPage() {
  return <PagePlaceholder href="/notifications" />;
}
