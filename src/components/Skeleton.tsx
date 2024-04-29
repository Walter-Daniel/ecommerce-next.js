import React from "react";
import { Card, Skeleton } from "@nextui-org/react";

export default function SkeletonProductDetail() {
  return (
    <div className="flex justify-center items-center">
      <Card className="rounded-md shadow-lg border-3 border-gray-200 p-4 md:my-12 md:w-4/5">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mr-8 mb-4 md:mb-0">
            <Skeleton className="rounded-lg">
              <div className="w-96 h-96 bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="md:w-1/2 flex flex-col space-y-6 justify-center">
            <Skeleton className="h-6 w-3/4 rounded-lg" />
            <Skeleton className="h-6 w-4/5 rounded-lg" />
            <Skeleton className="h-6 w-3/5 rounded-lg" />
            <Skeleton className="h-6 w-3/4 rounded-lg" />
            <Skeleton className="h-6 w-4/5 rounded-lg" />
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
        </div>
      </Card>
    </div>
  );
}
