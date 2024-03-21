"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

export default function Wrapper({ className, children }) {
    const ref = useRef(null);
    const [cursorVariant] = useState("default");
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    });
    let mouseXPos = 0;
    let mouseYPos = 0;

    if (mouse.x) {
        mouseXPos = mouse.pageX;
    }
    if (mouse.y) {
        mouseYPos = mouse.pageY;
    }
    const mouseVariants = {
        initial: {
            height: 0,
            width: 0,
        },
        default: {
            opacity: mouseXPos ? 1 : 0,
            height: 40,
            width: 40,
            backgroundColor: "#fff",
            mixBlendMode: "difference",
            x: mouseXPos,
            y: mouseYPos,
            transition: {
                type: "spring",
                mass: 0.6,
            },
        },
    };
    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28,
    };

    return (
        <motion.section ref={ref} className={`box-wp`}>
            <motion.div
                variants={mouseVariants}
                initial="initial"
                className="hidden lg:block rounded-full z-[999] absolute w-full h-full pointer-events-none bg-black"
                animate={cursorVariant}
                transition={spring}
            >
                <span className="cursorText"></span>
            </motion.div>
            <nav className="sticky top-0 w-full z-[99]">
                <Navbar />
            </nav>
            <motion.section
                className={`w-full min-h-screen px-2 md:px-4 ${className}`}
            >
                {children}
            </motion.section>
            <footer>
                <Footer />
            </footer>
        </motion.section>
    );
}
