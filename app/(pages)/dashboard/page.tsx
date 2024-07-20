import { getCurrentUser } from "@/app/actions/users";

import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className='h-[calc(100vh-6rem)] w-full grid grid-cols-3 grid-rows-3 border border-red-300 overflow-hidden'>
      <div className='col-span-2 bg-yellow-200'>1</div>
      <div className='bg-red-300'>3</div>
      <div className='bg-blue-100'>1</div>
      <div className='bg-purple-100'>2</div>
      <div className='bg-gray-100'>3</div>
      <div className='bg-green-100'>1</div>
      <div className='col-span-2 bg-orange-200'>3</div>
    </div>
  );
};

export default DashboardPage;
