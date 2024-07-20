"use client";

import { cn } from "@/lib/utils";
import {
  HomeIcon,
  Images,
  Settings2,
  User2,
  Command,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const dashboardNavLinks = [
  {
    label: "Home",
    href: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    label: "My Boards",
    href: "/dashboard/myBoards",
    icon: <Images />,
  },
  {
    label: "Profile",
    href: "/dashboard/profile",
    icon: <User2 />,
  },
  {
    label: "Settings",
    href: "dashboard/settings",
    icon: <Settings2 />,
  },
];

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className='hidden md:block w-full bg-white dark:bg-slate-900'>
      <aside
        id='sidebar'
        className='left-0 top-50 h-[calc(100vh-6rem)] w-fit xl:w-64 transition-transform'
        aria-label='Sidebar'
      >
        <div className='flex h-full flex-col overflow-y-auto border border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900'>
          <div className='mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white'>
            <Command />
            <span className='ml-3 text-base font-semibold'>
              Dashboard
            </span>
          </div>
          <ul className='space-y-2 text-sm font-medium'>
            {dashboardNavLinks.map(
              ({ href, icon, label }) => {
                const isActive = href === pathname;

                return (
                  <li key={label}>
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center rounded-lg px-3 py-2 text-slate-900 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-700",
                        isActive ? "bg-slate-100" : ""
                      )}
                    >
                      {icon}
                      <span className='ml-3 flex-1 whitespace-nowrap'>
                        {label}
                      </span>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
          <div className='mt-auto flex'>
            <div className='flex w-full justify-between'>
              <span className='text-sm font-medium text-black dark:text-white'>
                email@example.com
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
