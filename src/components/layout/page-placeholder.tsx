import { notFound } from "next/navigation";

import { allNav } from "@/config/navigation";

export function PagePlaceholder({ href }: { href: string }) {
  const item = allNav.find((navItem) => navItem.href === href);
  if (!item) notFound();

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div>
        <h1 className="font-heading text-3xl font-bold tracking-wide uppercase">
          {item.title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
      </div>

      <div className="flex min-h-80 flex-1 flex-col items-center justify-center rounded-xl border border-dashed bg-card/40 p-8 text-center">
        <div className="flex size-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/10">
          <item.icon className="size-6 text-primary" aria-hidden />
        </div>
        <h2 className="mt-4 text-base font-semibold">Coming soon</h2>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          The {item.title.toLowerCase()} section hasn&apos;t been built yet.
        </p>
      </div>
    </div>
  );
}
