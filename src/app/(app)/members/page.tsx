import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Members",
};

export default function MembersPage() {
  return <PagePlaceholder href="/members" />;
}
