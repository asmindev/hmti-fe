import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
} from "@nextui-org/react";
import { IconChevronDown, IconCupHot } from "@irsyadadl/paranoid";
import { AnimatePresence, motion } from "framer-motion";
import StaggerAnimate from "@/utils/StaggerAnimate";
import usePathName from "@/hooks/usePathName";
import LargeScreen from "./LargeScreen";
import SmallScreen from "./SmallScreen";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
            <NavbarContent>
                <NavbarBrand>
                    <Link href="/infinity" className="font-bold text-2xl ">
                        HMTI
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="end">
                <LargeScreen />
            </NavbarContent>
            <NavbarContent justify="end" className="sm:hidden">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarMenu className="w-full h-full">
                <div className="relative h-full w-full">
                    <div className="absolute bottom-0 opacity-5">
                        <div className="flex flex-col justify-center items-center select-none">
                            <h1 className="text-8xl font-black">H</h1>
                            <h1 className="text-8xl font-black">M</h1>
                            <h1 className="text-8xl font-black">T</h1>
                            <h1 className="text-8xl font-black">I</h1>
                        </div>
                    </div>
                    <SmallScreen />
                </div>
            </NavbarMenu>
        </Navbar>
    );
}
