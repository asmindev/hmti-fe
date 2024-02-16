"use client";

import React from "react";
import { motion } from "framer-motion";
import StaggerAnimate from "@/utils/StaggerAnimate";
import Image from "next/image";
import ketua from "@/public/images/ketua.png";
import wakil from "@/public/images/wakil.png";

export default function Kabinet() {
    return (
        <section className="w-full my-24 min-h-screen h-full flex flex-col justify-center items-center">
            <div className="w-full ">
                <motion.div
                    variants={StaggerAnimate.parent}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    exit="exit"
                    className="text-center"
                >
                    <motion.h2
                        variants={StaggerAnimate.children}
                        className="text-xl md:text-3xl font-medium"
                    >
                        Kepengurusan Periode 2023/2024
                    </motion.h2>
                    <motion.h1
                        variants={StaggerAnimate.children}
                        className="mt-4 text-3xl md:text-5xl font-black text-gray-700 bg-gradient-to-b from-transparent via-white to-transparent"
                    >
                        Kabinet Infinity
                    </motion.h1>
                </motion.div>
            </div>
            <div className="mt-8">
                <div className="relative flex items-end after:absolute after:content-[''] after:w-full after:h-1/4 after:bg-gradient-to-t after:from-white after:via-white/50 after:to-transparent">
                    <Image
                        src={ketua}
                        alt="kabinet"
                        width={200}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                    <Image
                        src={wakil}
                        alt="kabinet"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full flex justify-between">
                    <div>
                        <h1 className="text-xl font-bold">Muhammad Fadli</h1>
                        <h2>Ketua</h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="text-xl font-bold">Anisa Tarimana</h1>
                        <h2>Wakil Ketua</h2>
                    </div>
                </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="w-full h-full flex flex-col gap-3 md:gap-5 lg:gap-6">
                    <h1 className="text-3xl font-bold">Visi</h1>
                    <p className="leading-relaxed text-left text-gray-500 text-sm bg-gradient-to-b from-transparent via-white to-transparent">
                        Menjadikan HMTI FT-UHO sebagai Organisasi Mahasiswa yang
                        Unggul, Berintegritas, dan Membumi: Menginspirasi
                        Perubahan Positif di dalam Kampus dengan Etika, Inovasi,
                        dan Kepemimpinan Berbasis Pengetahuan.
                    </p>
                </div>
                <div className="w-full h-full flex flex-col gap-3 md:gap-5 lg:gap-6">
                    <h1 className="text-3xl font-bold w-full text-right">
                        Misi
                    </h1>
                    <div className="text-gray-500 text-sm bg-gradient-to-b from-transparent via-white to-transparent">
                        <ul className="list-disc list-outside text-justify leading-relaxed">
                            <li>
                                Menjadikan HMTI FT-UHO forum terbuka yang
                                melibatkan mahasiswa, dosen, dan pihak
                                administrasi kampus untuk mendengar aspirasi,
                                mencari solusi atas polemik yang ada, dan
                                menciptakan ruang dialog yang inklusif dan
                                progresif.
                            </li>
                            <li>
                                Peningkatan Kritisitas Mahasiswa melalui
                                Diskusi, dan Eksplorasi Sudut Pandang untuk
                                Memperdalam Pemahaman Terhadap Isu-isu Sosial,
                                Politik, dan Teknologi, serta Mengembangkan
                                Kemampuan Berpikir Kritis dalam Menyikapi
                                Permasalahan Aktual.
                            </li>
                            <li>
                                Mewujudkan pemberdayaan melalui kegiatan
                                pengabdian kepada masyarakat menggunakan
                                teknologi informasi guna meningkatkan literasi
                                digital di kalangan masyarakat sekitar,
                                mendorong mahasiswa untuk aktif berperan dalam
                                membantu masyarakat.
                            </li>
                            <li>
                                Mengembangkan program kaderisasi yang
                                mengutamakan nilai-nilai integritas, etika, dan
                                kepemimpinan yang bertanggung jawab, membentuk
                                kader mahasiswa yang peduli, kritis, dan
                                berdedikasi. 5. Menjadikan HMTI FT-UHO menjadi
                                organisasi yang jujur, amanah dan berintegritas.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
