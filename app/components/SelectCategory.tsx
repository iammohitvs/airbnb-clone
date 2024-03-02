"use client";

import React, { useState } from "react";

import { categoryItems } from "../lib/categoryItems";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function SelectCategory() {
    const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
        undefined
    );

    return (
        <div className="grid w-3/5 grid-cols-4 gap-8 mx-auto mt-10 mb-36">
            <input
                type="hidden"
                name="categoryName"
                value={selectedCategory as string}
            />
            {categoryItems.map((item) => (
                <div key={item.id} className="cursor-pointer">
                    <Card
                        className={
                            selectedCategory === item.name
                                ? "border-primary"
                                : ""
                        }
                        onClick={() => {
                            setSelectedCategory(item.name);
                        }}
                    >
                        <CardHeader>
                            <Image
                                src={item.imageUrl}
                                alt={item.name}
                                width={32}
                                height={32}
                            />

                            <h3 className="font-medium">{item.title}</h3>
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
    );
}
