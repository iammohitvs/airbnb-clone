import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import CreationSubmit from "./SubmitButtons";

export default function CreationBottomBar() {
    return (
        <div className="fixed bottom-0 z-10 w-full h-24 bg-white border-t">
            <div className="flex items-center justify-between h-full px-5 mx-auto lg:px-10">
                <Button variant="secondary" size="lg">
                    <Link href="/">Cancel</Link>
                </Button>
                <CreationSubmit />
            </div>
        </div>
    );
}
