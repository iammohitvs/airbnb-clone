/* eslint-disable @next/next/no-img-element */
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import {
    RegisterLink,
    LoginLink,
    LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import React from "react";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createAirbnbHome } from "../actions";

export default async function UserNav() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const createHomeWithId = createAirbnbHome.bind(null, {
        userId: user?.id as string,
    });

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center px-2 py-2 border rounded-full lg:px-4 lg:py-2 gap-x-3">
                    <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
                    <img
                        src={
                            user?.picture ??
                            "../../public/default user image.png"
                        }
                        alt="user image"
                        className="hidden w-8 h-8 rounded-full lg:block"
                    />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                {user ? (
                    <>
                        <DropdownMenuItem>
                            <form action={createHomeWithId} className="w-full">
                                <button
                                    type="submit"
                                    className="w-full text-start"
                                >
                                    Airbnb My Home
                                </button>
                            </form>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/my-homes" className="w-full">
                                My Listings
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/my-favorites" className="w-full">
                                My Favorites
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/my-reservations" className="w-full">
                                My Reservations
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <LogoutLink className="w-full">Logout</LogoutLink>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuItem>
                            <RegisterLink className="w-full">
                                Register
                            </RegisterLink>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LoginLink className="w-full">Login</LoginLink>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
