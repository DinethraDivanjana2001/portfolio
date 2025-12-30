import * as React from "react";

import { cn } from "@/lib/utils";

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-center gap-8 mt-10 py-10 md:h-24">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dinethra Rajapaksha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
