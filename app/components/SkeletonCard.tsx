import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="w-full rounded-lg h-72" />
            <div className="flex flex-col space-y-2">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-3/4 h-4" />
                <Skeleton className="w-1/2 h-4" />
            </div>
        </div>
    );
}
