"use client";
import React from "react";
import TableUI from "./Table";

export default function Content({ items }) {
    return (
        <div className="p-4 bg-stone-50 mt-4 rounded-xl">
            <div className="flex justify-between py-4 border-b mb-4">
                <div>
                    <h1 className="font-bold text-2xl">Kotak Saran HMTI</h1>
                </div>
            </div>
            <TableUI data={items} />
        </div>
    );
}
