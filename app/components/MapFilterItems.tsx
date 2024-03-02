"use client";

import React, { useCallback } from "react";

import { categoryItems } from "../lib/categoryItems";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export default function MapFilterItems() {
    const searchParams = useSearchParams();
    const search = searchParams.get("filter");
    const pathName = usePathname();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());

            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    return (
        <div className="flex flex-row justify-start w-full mt-5 overflow-x-scroll gap-x-10 no-scrollbar lg:justify-center">
            {categoryItems.map((item) => (
                <Link
                    key={item.id}
                    href={
                        pathName + "?" + createQueryString("filter", item.name)
                    }
                    className={cn(
                        search === item.name
                            ? "border-b-2 border-black pb-2 flex-shrink-0"
                            : "opacity-70 flex-shrink-0",
                        "flex flex-col gap-y-3 items-center"
                    )}
                >
                    <div className="relative w-6 h-6">
                        <Image
                            src={item.imageUrl}
                            alt="Category Image"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="text-xs font-medium">{item.title}</p>
                </Link>
            ))}
        </div>
    );
}
