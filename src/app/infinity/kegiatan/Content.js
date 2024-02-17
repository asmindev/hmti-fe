"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline2 from "./Timeline2";
import StaggerAnimate from "@/utils/StaggerAnimate";

export default function Content({ items }) {
    return (
        <AnimatePresence>
            <motion.div
                variants={StaggerAnimate.parent}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-full h-full md:w-10/12 lg:w-8/12 mx-auto"
            >
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        variants={StaggerAnimate.children}
                    >
                        <Timeline2
                            time={item.time}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            author={item.author}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
