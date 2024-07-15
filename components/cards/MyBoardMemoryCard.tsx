import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { MemoryBoard } from "@/app/types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { CheckCircle, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface MyBoardMemoryCardProps {
  board: MemoryBoard;
  isGameComplete: boolean;
}

export const MyBoardMemoryCard = ({
  board,
  isGameComplete,
}: MyBoardMemoryCardProps) => {
  const { id, images, title } = board;
  return (
    <Card
      role='listitem'
      key={id}
      className='w-[300px] h-fit'
    >
      <CardHeader>
        <CardTitle className='flex items-center justify-between gap-4 h-12 text-clip'>
          {title}
          <span>
            {isGameComplete ? (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <CheckCircle className='stroke-green-500' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Completed Memory. Ready to play.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <TriangleAlert className='stroke-yellow-500' />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Not complete. Need to add more images
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </span>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className='relative w-full h-auto aspect-video'>
        <Image
          src={images[0] || "/next.svg"}
          alt={`image representing the memory board of ${title}`}
          fill
          className='object-cover'
        />

        <Button
          className='absolute bottom-0 right-0 z-50'
          asChild
          variant={"destructive"}
        >
          <Link
            className='text-white'
            href={`/dashboard/myBoards/${id}`}
          >
            {isGameComplete ? "Customize" : "Add Images"}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
