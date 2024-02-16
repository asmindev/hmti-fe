"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import StaggerAnimate from "@/utils/StaggerAnimate";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function SmallScreen() {
    const pathname = usePathname();
    const links = [
        {
            label: "Home",
            href: "/infinity",
        },
        {
            label: "Profile HMTI",
            href: "/infinity/profile",
        },
        {
            label: "Profile Pengurus",
            href: "/infinity/kabinet",
        },
        {
            label: "Timeline",
            href: "/infinity/timeline",
        },
    ];
    return (
        <motion.div
            variants={StaggerAnimate.parent}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full flex flex-col items-center justify-center"
        >
            <AnimatePresence>
                {links.map((link) => {
                    return (
                        <motion.div
                            variants={StaggerAnimate.children}
                            key={link.label}
                            className="py-4"
                        >
                            <Link
                                className={`w-full text-4xl font-bold ${
                                    pathname === link.href
                                        ? "text-primary"
                                        : "text-gray-700"
                                }`}
                                href={link.href}
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    );
                })}
            </AnimatePresence>
        </motion.div>
    );
}
