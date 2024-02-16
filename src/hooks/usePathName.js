"use client";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function usePathName() {
    const path = usePathname();
    const [pathname, setPathname] = useState(null);
    useEffect(() => {
        setPathname(path.split("/").pop());
    }, [path]);
    return pathname;
}
