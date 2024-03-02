import React from "react";
import SkeletonCard from "../components/SkeletonCard";

export default function FavoritesLoading() {
    return (
        <section className="container px-5 mx-auto mt-10 lg:px-10">
            <h2 className="text-3xl font-semibold tracking-tight">
                Your Favorites
            </h2>

            <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </section>
    );
}
