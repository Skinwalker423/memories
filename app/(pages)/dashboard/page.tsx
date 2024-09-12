import { getCurrentUser } from "@/app/actions/users";

import { redirect } from "next/navigation";
import React from "react";
import { BarChartDashboard } from "./_components/BarChart";
import { PieChartDashboard } from "./_components/PieChart";

const DashboardPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className='min-h-[calc(100vh-6rem)] w-full grid grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-2 border gap-3'>
      <div className='col-span-2 md:col-span-2 p-5 h-full'>
        <BarChartDashboard />
      </div>
      <div className='p-5 col-span-2 md:col-span-1'>
        <PieChartDashboard />
      </div>
      <div className='bg-blue-100'>1</div>
      <div className='bg-purple-100'>2</div>
      <div className='bg-gray-100'>3</div>
    </div>
  );
};

export default DashboardPage;
