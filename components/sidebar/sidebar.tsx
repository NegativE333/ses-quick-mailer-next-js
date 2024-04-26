import { cn } from "@/lib/utils"
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { Nunito } from "next/font/google";

const font = Nunito({subsets: ['latin'], weight: ['600']});

type Props = {
    className?: string;
}

export const Sidebar = async ({
    className
}: Props) => {

    return(
        <div
            className={cn("h-full lg:w-[256px] lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col", className)}
        >
            <Link
                href="/"
            >
                <div className="pt-3 sm:pt-8 pl-1 sm:pl-4 pb-7 flex items-center gap-x-3">
                    <h1 className={cn("font-bold text-center border border-gray-400 py-1 rounded-full w-full text-xl", font.className)}>
                        SES QuickMailer
                    </h1>
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem 
                    label="Home"
                    href="/"
                />
                <SidebarItem 
                    label="Link template"
                    href="/temp-1"
                />
                <SidebarItem 
                    label="Image template"
                    href="/temp-2"
                />
                <SidebarItem 
                    label="Analytics"
                    href="/analytics"
                />
            </div>
        </div>
    )
}