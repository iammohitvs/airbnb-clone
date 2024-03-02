"use client";

import { createLocation } from "@/app/actions";
import CreationBottomBar from "@/app/components/CreationBottomBar";
import { useCountries } from "@/app/lib/getCountries";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import React, { useState } from "react";

export default function AddressRoute({ params }: { params: { id: string } }) {
    const { getAllCountries } = useCountries();
    const [locationValue, setLocationValue] = useState("");

    const LazyMap = dynamic(() => import("@/app/components/Map"), {
        ssr: false,
        loading: () => <Skeleton className="h-[50vh] w-full" />,
    });
    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="mb-10 text-3xl font-semibold tracking-tight transition-colors">
                    Where is your home located
                </h2>
            </div>

            <form action={createLocation}>
                <input type="hidden" name="homeId" value={params.id} />
                <input type="hidden" name="countryValue" value={locationValue} />
                <div className="w-3/5 mx-auto">
                    <div className="mb-5">
                        <Select
                            required
                            onValueChange={(value) => setLocationValue(value)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Countries</SelectLabel>
                                    {getAllCountries().map((country) => (
                                        <SelectItem
                                            key={country.value}
                                            value={country.value}
                                        >
                                            {country.flag} {country.label}{" "}
                                            {country.region}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <LazyMap locationValue={locationValue} />
                </div>

                <CreationBottomBar />
            </form>
        </>
    );
}
