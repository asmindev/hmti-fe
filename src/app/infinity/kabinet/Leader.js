"use client";
import React from "react";
import { motion } from "framer-motion";
import StaggerAnimate from "@/utils/StaggerAnimate";
import Image from "next/image";
import ketua from "@/public/images/ketua.png";
import wakil from "@/public/images/wakil.png";

export default function Leader() {
    return (
        <div className="mt-8">
            <motion.div
                variants={StaggerAnimate.parent}
                initial="initial"
                whileInView="animate"
                exit="exit"
                className="relative flex items-end after:absolute after:content-[''] after:w-full after:h-1/4 after:bg-gradient-to-t after:from-stone-100 after:via-stone/50 after:to-transparent"
            >
                <motion.div
                    className="w-full h-full"
                    variants={StaggerAnimate.children}
                >
                    <Image
                        src={ketua}
                        alt="kabinet"
                        width={200}
                        height={200}
                        quality={100}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <motion.div
                    className="w-full h-full"
                    variants={StaggerAnimate.children}
                >
                    <Image
                        src={wakil}
                        alt="kabinet"
                        width={200}
                        height={200}
                        quality={100}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>
            <div className="w-full flex justify-between">
                <motion.div
                    variants={StaggerAnimate.parent}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    className="flex flex-col items-start"
                >
                    <motion.h1
                        variants={StaggerAnimate.children}
                        className="text-base md:text-xl font-bold underline"
                    >
                        Muhamad Fadli
                    </motion.h1>
                    <motion.h2 variants={StaggerAnimate.children}>
                        Ketua
                    </motion.h2>
                </motion.div>
                <motion.div
                    variants={StaggerAnimate.parent}
                    initial="initial"
                    whileInView="animate"
                    exit="exit"
                    className="flex flex-col items-start"
                >
                    <motion.h1
                        variants={StaggerAnimate.children}
                        className="text-base md:text-xl font-bold w-full text-end underline"
                    >
                        Annisa Tarimana
                    </motion.h1>
                    <motion.h2
                        variants={StaggerAnimate.children}
                        className="w-full text-end"
                    >
                        Wakil Ketua
                    </motion.h2>
                </motion.div>
            </div>
        </div>
    );
}
