import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import images from '@/helpers/images'
import Link from 'next/link'

const variants = {
    initial: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        // scale: 0.5,
    }),
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: 'spring', stiffness: 300, damping: 50 },
            opacity: { duration: 0.2 },
            duration: 0.5,
        },
    },
    exit: (direction) => ({
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: {
            x: { type: 'spring', stiffness: 300, damping: 50 },
            opacity: { duration: 0.2 },
            duration: 0.5,
        },
    }),
}
const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.9],
        },
    },
}
const stagger = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}

export default function Jumbotron() {
    // image slideshow use framer-motion
    const [imageIndex, setImageIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [image, setImage] = useState(images[imageIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((imageIndex + 1) % images.length)
            setImage(images[imageIndex])
            setDirection(imageIndex)
        }, 5000)
        return () => clearInterval(interval)
    }, [imageIndex])

    return (
        <section className="w-full h-screen font-palaquin">
            <div className="w-full h-full">
                <motion.div className="w-full h-full flex relative overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            className="w-full h-full object-cover absolute left-0 top-0"
                            variants={variants}
                            animate="animate"
                            initial="initial"
                            exit="exit"
                            src={image}
                            alt="image"
                            key={image}
                            custom={direction}
                        />
                        <div className="w-full h-full absolute bg-black/60" />
                    </AnimatePresence>
                    <div className="absolute w-full mx-auto h-full">
                        <div className="w-full lg:w-8/12 h-full mx-auto flex items-center">
                            <div className="h-full flex items-center">
                                <motion.div
                                    variants={stagger}
                                    animate="animate"
                                    initial="initial"
                                    className="w-fit m-12"
                                >
                                    <motion.h1
                                        variants={fadeInUp}
                                        className="bg-primary text-dark px-3 py-1 w-fit my-2"
                                    >
                                        Selamat Datang Di
                                    </motion.h1>
                                    <motion.h1
                                        variants={fadeInUp}
                                        className="uppercase font-black text-6xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 "
                                    >
                                        Website HMTI FT-UHO
                                    </motion.h1>
                                    <motion.h3
                                        variants={fadeInUp}
                                        className="font-medium font-poppins text-2xl lg:text-4xl text-white"
                                    >
                                        Himpunan Mahasiswa Teknik Informatika,
                                        Fakultas Teknik Universitas Halu Oleo
                                    </motion.h3>
                                    <motion.div
                                        variants={fadeInUp}
                                        className="my-12"
                                    >
                                        <Link href="/">
                                            <button
                                                type="button"
                                                className="bg-primary hover:bg-orange-600 text-white py-3 px-6 rounded-full mt-4 transition-all duration-300"
                                            >
                                                Explore
                                            </button>
                                        </Link>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
