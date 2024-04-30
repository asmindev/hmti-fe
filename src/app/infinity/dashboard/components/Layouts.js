"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layouts({ children }) {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex w-full min-h-svh h-full divide-x">
            <aside
                className={`${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 fixed w-3/4  md:block md:w-1/5 h-svh md:sticky left-0 top-0 z-[9999999] transition-all duration-200 bg-gray-200`}
            >
                <Sidebar />
            </aside>
            <main className="flex-1 min-h-svh h-full">
                <header className="h-fit">
                    <div className="w-full flex justify-between bg-pink-500 p-8">
                        <div className="w-full h-full flex items-center">
                            <h1 className="text-3xl font-bold text-white">
                                Infinity
                            </h1>
                        </div>
                        <button
                            onClick={() => setOpen(!isOpen)}
                            className="md:hidden size-7 text-white relative"
                        >
                            <svg
                                className={`absolute top-0 ${
                                    isOpen
                                        ? "rotate-180 opacity-0"
                                        : "opacity-100"
                                }  transition-all duration-200`}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 8.5H21M3 15.5H21"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <svg
                                className={`absolute top-0 ${
                                    !isOpen
                                        ? "rotate-180 opacity-0"
                                        : "opacity-100"
                                }  transition-all duration-200`}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 6L6 18M6 6L18 18"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </header>
                <div className="w-full h-full p-4">{children}</div>
            </main>
        </div>
    );
}
