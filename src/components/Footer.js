"use client";
import React, { useEffect, useState } from "react";

export default function Footer() {
    const [year, setYear] = useState(null);
    useEffect(() => {
        if (!year) {
            const date = new Date();
            const now = date.getFullYear();
            setYear(now);
        }
    }, [year]);
    return (
        <section className="bg-gray-800 text-white p-24">
            <div className="container mx-auto text-center">
                <p>&copy; {year} HMTI. All rights reserved.</p>
            </div>
        </section>
    );
}
