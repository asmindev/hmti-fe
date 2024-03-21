"use client";

import React from "react";
import Sidebar from "./Sidebar";

export default function Layouts({ children }) {
    return (
        <div className="flex min-h-svh h-full divide-x">
            <aside className="w-0 md:w-[20%] h-svh sticky top-0 overflow-hidden">
                <Sidebar />
            </aside>
            <main className="flex-1 min-h-svh h-full w-full">
                <header>
                    <div className="w-full bg-pink-500 p-8">
                        <div className="w-full h-full flex items-center">
                            <h1 className="text-3xl font-bold text-white">
                                Infinity
                            </h1>
                        </div>
                    </div>
                </header>
                <div className="w-full min-h-full p-4">{children}</div>
            </main>
        </div>
    );
}
