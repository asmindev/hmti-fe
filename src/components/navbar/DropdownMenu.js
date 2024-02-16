import { IconChevronDown } from "@irsyadadl/paranoid";
import {
    NavbarItem,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Button,
} from "@nextui-org/react";
import Link from "next/link";

export default function Dropdownmenu({ title, items }) {
    return (
        <Dropdown className="">
            <NavbarItem key={`dropdown-${title}`}>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="capitalize p-0 bg-transparent data-[hover=true]:bg-transparent w-full text-3xl font-bold py-4 lg:text-sm lg:font-normal"
                        endContent={<IconChevronDown />}
                        radius="sm"
                        variant={"light"}
                    >
                        {title}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu aria-label="ACME features" className="w-full">
                {items.map((item, index) => (
                    <DropdownItem key={`${item.label}-${index}`}>
                        <Link
                            href={item.href}
                            className="w-full flex gap-2 items-center"
                        >
                            {item.label}
                        </Link>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}
