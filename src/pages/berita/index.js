import { motion } from 'framer-motion'
import Layout from '@/components/Layouts'
import Link from 'next/link'
import Card from './Card'

const cards = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
}

export default function index() {
    return (
        <Layout title="HMTI - Berita">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-24">
                <div className="h-[50vh] lg:h-[50vh] flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center uppercase">
                        Berita
                    </h1>
                    <p className="text-center text-gray-300">
                        Berita terbaru dari HMTI
                    </p>
                </div>
                {/* display 5 cols on lg and 3 coll in md and 2 cols on sm use grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {cards.map((card) => (
                        <motion.div key={card.id} variants={cardVariants}>
                            <Link href={`/berita/${card.id}`}>
                                <Card />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Layout>
    )
}
