import { FileQuestion } from "lucide-react";
import React from "react";

interface IappProps {
    title: string;
    description: string;
}

export default function NoItems({ title, description }: IappProps) {
    return (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border-dashed p-8 text-center animate-in fade-in-50">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
                <FileQuestion className="w-10 h-10 text-primary" />
            </div>
            <h2 className="mt-6 text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-center text-muted-foreground">
                {description}
            </p>
        </div>
    );
}
