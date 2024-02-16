"use client";
import React, { useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import StaggerAnimate from "@/utils/StaggerAnimate";

export default function Jumbotron() {
    return (
        <motion.div
            variants={StaggerAnimate.parent}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center"
        >
            <motion.h3
                variants={StaggerAnimate.children}
                className="text-lg md:text-xl lg:text-3xl text-gray-700"
            >
                Selamat Datang di website
            </motion.h3>

            <motion.h1
                variants={StaggerAnimate.children}
                className="text-3xl md:text-6xl lg:text-8xl font-black text-gray-800"
            >
                Himpunan Mahasiswa Teknik Informatika
            </motion.h1>
            <motion.h1
                variants={StaggerAnimate.children}
                className="mt-4 text-lg md:text-xl lg:text-3xl text-gray-700"
            >
                Fakultas Teknik, Universitas Haluoleo
            </motion.h1>
        </motion.div>
    );
}
