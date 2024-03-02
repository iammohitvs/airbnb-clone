"use client";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectLabel,
    SelectItem,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useCountries } from "../lib/getCountries";
import HomeMap from "./HomeMap";
import { Button } from "@/components/ui/button";
import CreationSubmit from "./SubmitButtons";
import { Card, CardHeader } from "@/components/ui/card";
import Counter from "./Counter";

export default function SearchComponent() {
    const [step, setStep] = useState(1);
    const [locationValue, setLocationValue] = useState("");

    const { getAllCountries } = useCountries();

    function SubmitButtonLocal() {
        if (step === 1) {
            return (
                <Button type="button" onClick={() => setStep(step + 1)}>
                    Next
                </Button>
            );
        } else if (step === 2) {
            return <CreationSubmit />;
        }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center px-5 py-2 border rounded-full cursor-pointer">
                    <div className="flex h-full font-medium divide-x">
                        <p className="px-4">Anywhere</p>
                        <p className="px-4">Any Week</p>
                        <p className="px-4">Add Guest</p>
                    </div>

                    <SearchIcon className="w-8 h-8 p-1 text-white rounded-full bg-primary" />
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form action="">
                    <input type="hidden" name="country" value={locationValue} />
                    
                    {step === 1 ? (
                        <>
                            <DialogHeader className="mb-4">
                                <DialogTitle>Select a Country</DialogTitle>
                                <DialogDescription>
                                    Please Choose a Country to help us narrow
                                    down your search
                                </DialogDescription>
                            </DialogHeader>

                            <Select
                                required
                                onValueChange={(value) =>
                                    setLocationValue(value)
                                }
                                value={locationValue}
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

                            <HomeMap locationValue={locationValue} />
                        </>
                    ) : (
                        <>
                            <DialogHeader className="mb-4">
                                <DialogTitle>Enter Specefics</DialogTitle>
                                <DialogDescription>
                                    This helps us narrow down the available
                                    homes
                                </DialogDescription>
                            </DialogHeader>

                            <Card>
                                <CardHeader className="flex flex-col gap-y-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="font-medium underline">
                                                Guests
                                            </h3>
                                            <p className="text-mute">
                                                How many guests do you want?
                                            </p>
                                        </div>
                                        <Counter name="guests" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="font-medium underline">
                                                Rooms
                                            </h3>
                                            <p className="text-mute">
                                                How many rooms do you have?
                                            </p>
                                        </div>
                                        <Counter name="rooms" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col">
                                            <h3 className="font-medium underline">
                                                Bathrooms
                                            </h3>
                                            <p className="text-mute">
                                                How many bathrooms do you have?
                                            </p>
                                        </div>
                                        <Counter name="bathrooms" />
                                    </div>
                                </CardHeader>
                            </Card>
                        </>
                    )}

                    <DialogFooter className="mt-8">
                        <SubmitButtonLocal />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
