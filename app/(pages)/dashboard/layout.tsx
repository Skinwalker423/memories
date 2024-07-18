import React from "react";
import { SideBar } from "./_components/SideBar";
import { MobileSideBar } from "./_components/MobileSideBar";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='sm:grid sm:grid-cols-4'>
      <div className='sm:grid-cols-1'>
        <SideBar />
      </div>
      <div className='sm:col-span-3'>{children}</div>
      <MobileSideBar />
    </div>
  );
};

export default DashboardLayout;
