import React from "react";
import { SideBar } from "./_components/SideBar";
import { MobileSideBar } from "./_components/MobileSideBar";

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className='md:grid md:grid-cols-4'>
      <div className='grid-cols-1'>
        <SideBar />
      </div>
      <div className='md:col-span-3 mb-20'>{children}</div>
      <MobileSideBar />
    </div>
  );
};

export default DashboardLayout;
