import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileNav() {
    const ref = useRef(null)
    const [open, setOpen] = useState(false)
    const container = {
        hidden: { height: 1, opacity: 0 },
        show: {
            height: 'auto',
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
        exit: {
            height: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
                delay: 0.1,
            },
        },
    }
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
    }
    // when scroll y > 100px, add background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                //  add class bg-dark shadow-lg
                ref.current.classList.add(
                    'bg-dark/30',
                    'backdrop-filter',
                    'backdrop-blur-lg'
                )
            } else {
                ref.current.classList.remove(
                    'bg-dark/30',
                    'backdrop-filter',
                    'backdrop-blur-lg'
                )
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <div
                ref={ref}
                className="flex justify-between items-center px-4 py-3 text-white transition-all duration-300"
            >
                <div className="flex items-center">
                    <h1 className="text-2xl font-medium font-fira">HMTI</h1>
                </div>
                <div className="flex items-center">
                    <button
                        id="button"
                        type="button"
                        onClick={() => setOpen(!open)}
                        className="focus:outline-none relative w-5 h-5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`w-5 h-5 absolute top-0 left-0 transition-all duration-200 ${
                                !open
                                    ? 'opacity-100 rotate-0 delay-150'
                                    : 'opacity-0 rotate-45'
                            }`}
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
                                className="fill-gray-100"
                            />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`w-5 h-5 absolute top-0 left-0 transition-all duration-200 ${
                                open
                                    ? 'opacity-100 rotate-0 delay-150'
                                    : 'opacity-0 rotate-45'
                            }`}
                        >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
                                className="fill-gray-100"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="text-sm font-fira bg-zinc-700/30 backdrop-blur-lg"
                    >
                        <motion.div variants={item} className="w-full">
                            <a
                                onClick={() => {
                                    setOpen(false)
                                }}
                                href="#"
                                className="px-4 py-3 block w-full text-gray-50 hover:text-emerald-400 transition duration-300 tracking-wider"
                            >
                                Beranda
                            </a>
                        </motion.div>
                        <motion.div variants={item} className="w-full">
                            <a
                                onClick={() => {
                                    setOpen(false)
                                }}
                                href="#about"
                                className="px-4 py-3 block w-full text-gray-50 hover:text-emerald-400 transition duration-300 tracking-wider"
                            >
                                Pengumuman
                            </a>
                        </motion.div>
                        <motion.div variants={item} className="w-full">
                            <a
                                onClick={() => {
                                    setOpen(false)
                                }}
                                href="#contact"
                                className="px-4 py-3 block w-full text-gray-50 hover:text-emerald-400 transition duration-300 tracking-wider"
                            >
                                Berita
                            </a>
                        </motion.div>
                        <motion.div variants={item} className="px-4 py-3">
                            <span className="flex gap-3 items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5"
                                >
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"
                                        className="fill-light"
                                    />
                                </svg>
                                <a
                                    href="https://instagram.com/hmti.uho"
                                    target="_blank"
                                    className="text-gray-50 hover:text-primary"
                                    rel="noreferrer"
                                >
                                    Instagram
                                </a>
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
