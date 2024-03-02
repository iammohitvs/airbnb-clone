"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export default function Counter({name} : {name: string}) {
    const [amount, setAmount] = useState(0);

    function increase() {
        setAmount(amount + 1);
    }
    function decrease() {
        amount && setAmount(amount - 1);
    }

    return (
        <div className="flex items-center gap-x-4">
            <input type="hidden" name={name} value={amount} />
            <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={decrease}
            >
                <Minus className="w-4 h-4 text-primary" />
            </Button>
            <p className="text-lg font-medium">{amount}</p>
            <Button
                variant="outline"
                size="icon"
                type="button"
                onClick={increase}
            >
                <Plus className="w-4 h-4 text-primary" />
            </Button>
        </div>
    );
}
