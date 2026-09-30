import type { Metadata } from "next";

import { PagePlaceholder } from "@/components/layout/page-placeholder";

export const metadata: Metadata = {
  title: "Attendance",
};

export default function AttendancePage() {
  return <PagePlaceholder href="/attendance" />;
}
