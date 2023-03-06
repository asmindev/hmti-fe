import React from 'react'

export default function Card() {
    return (
        <div className="bg-zinc-900 rounded-lg shadow-lg group h-full">
            <img
                src="https://source.unsplash.com/random?computer"
                alt=""
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <h1 className="text-lg font-bold">
                    Lorem ipsum dolor sit amet consectetur
                </h1>
                <p className="text-gray-500 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </p>
            </div>
            <div className="my-8 relative w-11/12 mx-auto flex items-center">
                <span className="opacity-0  group-hover:opacity-100 transition-all duration-300 absolute left-2 group-hover:left-0 text-gray-300 text-sm">
                    Lihat Selengkapnya
                </span>
                <button
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-6 group-hover:right-4"
                    type="button"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-orange-500"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
