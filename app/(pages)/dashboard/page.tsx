import { getCurrentUser } from "@/app/actions/users";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const DashboardPage = async () => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className='min-h-screen w-full'>
      <h1>Dashboard</h1>
      <Button variant={"destructive"} asChild>
        <Link href={"/dashboard/myBoards"}>
          Create a Memory
        </Link>
      </Button>
    </div>
  );
};

export default DashboardPage;
