import { getCurrentUser } from "@/app/actions/users";
import { redirect } from "next/navigation";
import React from "react";

const MyBoardPage = async ({
  params,
}: {
  params: { boardId: string };
}) => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  console.log("board id", params.boardId);

  return <div>MyBoardPage {params.boardId}</div>;
};

export default MyBoardPage;
