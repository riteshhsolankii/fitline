import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Memberships",
};

export default function MembershipsPage() {
  return <PagePlaceholder href="/memberships" />;
}
