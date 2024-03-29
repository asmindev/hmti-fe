"use client";
import { Link, NavbarItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";
import Dropdownmenu from "./DropdownMenu";
import { IconCupHot } from "@irsyadadl/paranoid";

const ProfileItems = [
    {
        label: "Profile HMTI",
        icon: <IconCupHot />,
        href: "/infinity/profile",
    },
    {
        label: "Profile Pengurus",
        icon: <IconCupHot />,
        href: "/infinity/kabinet",
    },
];
const InformationItems = [
    {
        label: "Kegiatan",
        icon: <IconCupHot />,
        href: "/infinity/kegiatan",
    },
];
export default function LargeScreen() {
    const pathname = usePathname();
    return (
        <>
            <NavbarItem key={`home`}>
                <Link
                    color={"/infinity" === pathname ? "primary" : "foreground"}
                    className="w-full"
                    href={"/infinity"}
                    size={"sm"}
                >
                    Home
                </Link>
            </NavbarItem>
            <Dropdownmenu title={"Profile"} items={ProfileItems} />
            <Dropdownmenu title={"Informasi"} items={InformationItems} />
        </>
    );
}
