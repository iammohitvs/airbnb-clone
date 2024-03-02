import React from "react";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import NoItems from "../components/NoItems";
import ListingCard from "../components/ListingCard";

async function getData(userId: string) {
    const data = await prisma.reservation.findMany({
        where: {
            userId: userId,
        },
        select: {
            Home: {
                select: {
                    photo: true,
                    id: true,
                    Favorite: {
                        where: {
                            userId: userId,
                        },
                    },
                    price: true,
                    country: true,
                    description: true,
                },
            },
        },
    });

    return data;
}

export default async function ReservationsPageRoute() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user) return redirect("/");

    const data = await getData(user.id);

    return (
        <section className="px-5 mx-auto mt-10 lg:px-10 continer">
            <h2 className="text-3xl font-semibold tracking-tight">
                Your Reservations
            </h2>

            {data.length === 0 ? (
                <NoItems
                    title="You have not made any reservations"
                    description="Please make reservations to see them listed here..."
                />
            ) : (
                <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                    {data.map((item) => (
                        <ListingCard
                            key={item.Home?.id}
                            description={item.Home?.description as string}
                            location={item.Home?.country as string}
                            pathName="/my-reservations"
                            homeId={item.Home?.id as string}
                            imagePath={item.Home?.photo as string}
                            price={item.Home?.price as number}
                            userId={user.id}
                            favoriteId={item.Home?.Favorite[0]?.id as string}
                            isInFavoriteList={
                                (item.Home?.Favorite.length as number) > 0
                                    ? true
                                    : false
                            }
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
