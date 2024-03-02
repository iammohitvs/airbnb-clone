import Image from "next/image";
import Link from "next/link";
import React from "react";

import DesktopLogo from "../../public/airbnb-desktop.png";
import MobileLogo from "../../public/airbnb-mobile.webp";
import UserNav from "./UserNav";
import SearchComponent from "./SearchComponent";

export default function Navbar() {
    return (
        <header>
            <nav className="w-full border-b">
                <div className="container flex items-center justify-between px-5 py-5 mx-auto lg:px-10">
                    <Link href="/">
                        <Image
                            src={DesktopLogo}
                            alt="Desktop Logo"
                            className="hidden w-32 lg:block"
                        />
                        <Image
                            src={MobileLogo}
                            alt="Mobile Logo"
                            className="block w-12 lg:hidden"
                        />
                    </Link>

                    <SearchComponent />

                    <UserNav />
                </div>
            </nav>
        </header>
    );
}
