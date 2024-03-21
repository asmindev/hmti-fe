"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Timeline2 from "./Timeline2";
import StaggerAnimate from "@/utils/StaggerAnimate";
import PopHover from "../kabinet/PopHover";

const TimelineDetail = ({ title, description }) => {
    return (
        <div className="rounded-lg w-full">
            <div className="w-full bg-gray-100 py-2">
                <h1 className="text-lg font-semibold text-center">{title}</h1>
            </div>
            <div className="p-2 max-h-96 overflow-auto">
                <p className="text-sm text-justify leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

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
                        <PopHover content={<TimelineDetail {...item} />}>
                            <Timeline2
                                time={item.date}
                                title={item.title}
                                description={item.description}
                                author={item.author}
                            />
                        </PopHover>
                    </motion.div>
                ))}
            </motion.div>
        </AnimatePresence>
    );
}
