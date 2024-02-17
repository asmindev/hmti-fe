"use client";
import React from "react";
import { motion } from "framer-motion";
import StaggerAnimate from "@/utils/StaggerAnimate";
import Leader from "./Leader";
import Sekjen from "./Sekjen";
import Ministry, { MinistryDesc } from "./Ministry";
import PopHover from "./PopHover";

export default function Container({ ministries }) {
    return (
        <section>
            <motion.div
                variants={StaggerAnimate.parent}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-20 flex flex-col gap-y-4"
            >
                <motion.h1
                    variants={StaggerAnimate.children}
                    className="uppercase text-xl md:text-3xl lg:text-6xl font-bold text-center text-gray-600"
                >
                    Pengurus
                </motion.h1>
                <motion.h2
                    variants={StaggerAnimate.children}
                    className="text-3xl md:text-6xl lg:text-8xl font-black text-center text-gray-700"
                >
                    Himpunan Mahasiswa Teknik Informatika
                </motion.h2>
                <motion.h3
                    variants={StaggerAnimate.children}
                    className="text-md md:text-xl lg:text-3xl font-medium text-center"
                >
                    Periode 2023/2024
                </motion.h3>
            </motion.div>
            <div className="mt-12 w-full lg:w-1/2 mx-auto text-center">
                <h1 className="text-3xl md:text-6xl font-black uppercase">
                    Kabinet Infinity
                </h1>
                <blockquote className="mt-4 text-xl font-semibold italic text-center text-slate-900">
                    Melangkah Menuju Masa Depan
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                        <span className="relative text-white">
                            Tak Terbatas
                        </span>
                    </span>
                    dengan Inovasi, Kreativitas, dan Kolaborasi
                </blockquote>
            </div>
            <div className="mt-12 w-full lg:w-1/2 mx-auto flex flex-col gap-y-6 items-center justify-center">
                <Leader />
                <Sekjen />
            </div>
            <div className="mt-12 w-full flex flex-wrap justify-center">
                {ministries.map((ministry, i) => (
                    <div
                        className="p-4 w-full md:w-1/2 lg:w-1/4 flex items-center justify-center"
                        key={i}
                    >
                        <div className="w-full border rounded p-4 bg-white">
                            <PopHover
                                content={
                                    <MinistryDesc
                                        name={ministry.name}
                                        desc={ministry.description}
                                    />
                                }
                            >
                                <Ministry
                                    name={ministry.name}
                                    chairman={ministry.chairman}
                                    secretary={ministry.secretary}
                                    member={ministry.member}
                                />
                            </PopHover>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
