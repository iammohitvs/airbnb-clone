import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCountries } from "../lib/getCountries";
import { AddToFavoriteButton, DeleteFromFavoriteButton } from "./SubmitButtons";
import { AddToFavorite, DeleteFromFavorite } from "../actions";

interface iAppProps {
    imagePath: string;
    description: string;
    location: string;
    price: number;
    userId: string | undefined;
    isInFavoriteList: boolean;
    favoriteId: string;
    homeId: string;
    pathName: string;
}

export default function ListingCard({
    imagePath,
    description,
    location,
    price,
    userId,
    isInFavoriteList,
    favoriteId,
    homeId,
    pathName,
}: iAppProps) {
    const { getCountryByValue } = useCountries();
    const country = getCountryByValue(location);

    return (
        <div className="flex flex-col">
            <div className="relative h-72">
                <Image
                    src={`https://hixeudfkkmarzngrouvc.supabase.co/storage/v1/object/public/images/${imagePath}`}
                    alt="Image of house"
                    fill
                    className="object-cover h-full rounded-lg"
                />

                {userId && (
                    <div className="absolute z-10 top-2 right-2">
                        {isInFavoriteList ? (
                            <form action={DeleteFromFavorite}>
                                <input
                                    type="hidden"
                                    name="favoriteId"
                                    value={favoriteId}
                                />
                                <input
                                    type="hidden"
                                    name="userId"
                                    value={userId}
                                />
                                <input
                                    type="hidden"
                                    name="pathName"
                                    value={pathName}
                                />
                                <DeleteFromFavoriteButton />
                            </form>
                        ) : (
                            <form action={AddToFavorite}>
                                <input
                                    type="hidden"
                                    name="homeId"
                                    value={homeId}
                                />
                                <input
                                    type="hidden"
                                    name="userId"
                                    value={userId}
                                />
                                <input
                                    type="hidden"
                                    name="pathName"
                                    value={pathName}
                                />
                                <AddToFavoriteButton />
                            </form>
                        )}
                    </div>
                )}
            </div>

            <Link href={`home/${homeId}`} className="mt-2">
                <h3 className="text-base font-medium">
                    {country?.flag} {country?.label} / {country?.region}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                    {description}
                </p>
                <p className="pt-2 text-muted-foreground">
                    <span className="font-medium text-black">${price}</span>{" "}
                    Night
                </p>
            </Link>
        </div>
    );
}
