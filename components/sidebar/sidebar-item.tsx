"use client";

import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { FileImage, HeartHandshake, Home, Library, Link2, LinkIcon, ListChecks, MessageSquareWarning, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
    label: string;
    href: string;
}

export const SidebarItem = ({
    label,
    href
}: Props) => {

    const pathName = usePathname();
    const active = pathName === href;
    let Icon;

    if (label === "Home") {
        Icon = <Home className={cn("h-6 w-6", active && "text-red-500")} />;
    }
    else if (label === "Link template") {
        Icon = <LinkIcon className={cn("h-6 w-6", active && "text-red-500")} />;
    }
    else if (label === "Image template") {
        Icon = <FileImage className={cn("h-6 w-6", active && "text-red-500")} />;
    }

    return (
        <Button
            variant={active ? "outline" : "ghost"}
            className="justify-start h-[52px]"
            asChild
        >
            <Link href={href} className="flex gap-3">
                {Icon}
                <p className="text-lg font-semibold">
                    {label}
                </p>
            </Link>
        </Button>
    )
}