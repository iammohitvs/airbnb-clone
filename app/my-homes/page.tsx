import React from "react";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import NoItems from "../components/NoItems";
import ListingCard from "../components/ListingCard";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
    noStore();

    const data = await prisma?.home.findMany({
        where: {
            userId: userId,
            addedCategory: true,
            addedDescription: true,
            addedLocation: true,
        },
        select: {
            id: true,
            country: true,
            photo: true,
            description: true,
            price: true,
            Favorite: {
                where: {
                    userId: userId,
                },
            },
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

export default async function MyHomesRoute() {
    const { getUser } = await getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/");
    }

    const data = await getData(user?.id);

    return (
        <section className="container px-5 mx-auto mt-10 lg:px-10">
            <h2 className="text-3xl font-semibold tracking-tight">
                Your Homes
            </h2>

            {data.length === 0 ? (
                <NoItems
                    title="You Have no Listings"
                    description="Please add listings by registering your home"
                />
            ) : (
                <div className="grid gap-8 mt-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3">
                    {data.map((item) => (
                        <>
                            <ListingCard
                                key={item.id}
                                description={item.description as string}
                                imagePath={item.photo as string}
                                location={item.country as string}
                                price={item.price as number}
                                userId={user?.id}
                                favoriteId={item.Favorite[0]?.id}
                                isInFavoriteList={
                                    item.Favorite.length > 0 ? true : false
                                }
                                homeId={item.id}
                                pathName="/my-homes"
                            />
                        </>
                    ))}
                </div>
            )}
        </section>
    );
}
