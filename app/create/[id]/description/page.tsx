import { CreateDescription } from "@/app/actions";
import Counter from "@/app/components/Counter";
import CreationBottomBar from "@/app/components/CreationBottomBar";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function DescriptionPage({
    params,
}: {
    params: { id: string };
}) {
    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors">
                    Please describe your home as best you can
                </h2>
            </div>

            <form action={CreateDescription}>
                <input type="hidden" name="homeId" value={params.id} />
                <div className="flex flex-col w-3/5 mx-auto mt-10 gap-y-2 mb-36">
                    <div className="flex flex-col gap-y-2">
                        <Label>Title</Label>
                        <Input
                            name="title"
                            required
                            placeholder="Short and simple..."
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Description</Label>
                        <Textarea
                            name="description"
                            required
                            placeholder="Please describe your home..."
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Price</Label>
                        <Input
                            name="price"
                            required
                            type="number"
                            placeholder="Price per night in USD"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <Label>Image</Label>
                        <Input name="image" required type="file" />
                    </div>

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
                </div>

                <CreationBottomBar />
            </form>
        </>
    );
}
