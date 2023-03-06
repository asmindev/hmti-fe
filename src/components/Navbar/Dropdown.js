/* eslint-disable operator-linebreak */
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function MenuItem({ title, href, delay }) {
    return (
        <motion.a
            href={href}
            className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-400 hover:text-white"
            custom={delay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: delay / 10 }}
        >
            {title}
        </motion.a>
    )
}

function DropdownMenu({ isOpen, setIsOpen }) {
    const items = [
        { title: 'Berita', href: '#' },
        { title: 'Pengumuman', href: '#' },
    ]

    return (
        <div
            className="absolute left-0 w-48 py-2 mt-2 rounded-md shadow-xl opacity-0 group-hover:opacity-100 backdrop-blur-xl bg-zinc-900"
            onMouseEnter={() => {
                if (!isOpen) {
                    setIsOpen(true)
                }
            }}
        >
            <AnimatePresence>
                {isOpen &&
                    items.map((item, index) => (
                        <MenuItem key={index} {...item} delay={index} />
                    ))}
            </AnimatePresence>
        </div>
    )
}

function Dropdown({ title }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative group " onMouseLeave={() => setIsOpen(false)}>
            <button
                type="button"
                className="flex items-center p-2 rounded-md"
                onMouseEnter={() => setIsOpen(true)}
            >
                <span className="mr-4">{title}</span>
            </button>
            <DropdownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

function IndexPage() {
    return (
        <div className="container flex justify-center mx-auto">
            <Dropdown title="Publikasi" />
        </div>
    )
}

export default IndexPage
