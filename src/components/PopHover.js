"use client";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";

export default function PopHover({ children, content }) {
    return (
        <div className="flex flex-wrap gap-4 w-full h-full">
            <Popover
                key={"blur"}
                showArrow={true}
                offset={10}
                placement={"bottom"}
                backdrop={"blur"}
                className="w-full h-full"
            >
                <PopoverTrigger>
                    <button type="button" className="focus:outline-none w-full">
                        {children}
                    </button>
                </PopoverTrigger>
                <PopoverContent className="w-11/12 h-full md:w-96 mx-auto p-0 overflow-hidden">
                    {content}
                </PopoverContent>
            </Popover>
        </div>
    );
}
