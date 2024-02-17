"use client";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

export default function PopHover({ children, content }) {
    return (
        <div className="flex flex-wrap gap-4">
            <Popover
                key={"blur"}
                showArrow={true}
                offset={10}
                placement={"bottom"}
                backdrop={"blur"}
            >
                <PopoverTrigger>
                    <button type="button" className="focus:outline-none w-full">
                        {children}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-96 p-0 overflow-hidden">
                    {content}
                </PopoverContent>
            </Popover>
        </div>
    );
}
