"use client";
import React from "react";
import { motion } from "framer-motion";
import StaggerAnimate from "@/utils/StaggerAnimate";
import Image from "next/image";
import sekjen from "@/public/images/sekjen.png";

export default function Sekjen() {
    return (
        <>
            <motion.div
                variants={StaggerAnimate.parent}
                initial="initial"
                whileInView="animate"
                exit="exit"
                className="relative flex items-end after:absolute after:content-[''] after:w-full after:h-1/4 after:bg-gradient-to-t after:from-white after:via-white/50 after:to-transparent"
            >
                <motion.div
                    className="w-full h-full"
                    variants={StaggerAnimate.children}
                >
                    <Image
                        src={sekjen}
                        alt="kabinet"
                        width={200}
                        height={200}
                        className="w-1/2 md:w-2/3 lg:w-4/5 h-full object-cover mx-auto"
                    />
                </motion.div>
            </motion.div>
            <motion.div
                variants={StaggerAnimate.parent}
                initial="initial"
                whileInView="animate"
                exit="exit"
                className="flex flex-col items-center justify-center"
            >
                <motion.h1
                    variants={StaggerAnimate.children}
                    className="text-xl font-bold underline"
                >
                    M. Ricky Aryansyah
                </motion.h1>
                <motion.h2 variants={StaggerAnimate.children}>
                    Sekretaris Jenderal
                </motion.h2>
            </motion.div>
        </>
    );
}
