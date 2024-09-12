"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { dashboardNavLinks } from "@/app/constants";
import { cn } from "@/lib/utils";

export const MobileSideBar = () => {
  const pathname = usePathname();
  return (
    <div className='flex fixed bottom-0 z-50 md:hidden w-full bg-slate-100'>
      <ul className='text-sm font-medium flex w-full justify-center gap-10'>
        {dashboardNavLinks.map(({ href, icon, label }) => {
          const isActive = href === pathname;

          return (
            <li key={label}>
              <Link
                href={href}
                className={cn(
                  "flex items-center rounded-lg px-1 py-4 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700",
                  isActive ? "bg-slate-100" : ""
                )}
              >
                {icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
