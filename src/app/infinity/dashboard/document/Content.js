"use client";
import React, { lazy } from "react";
import Form from "./Form";
import { useDisclosure } from "@nextui-org/react";
import TableUI from "./Table";

export default function Content({ items }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="p-4 bg-stone-50 mt-4 rounded-xl">
            <div className="flex justify-between py-4 border-b mb-4">
                <div>
                    <h1 className="font-bold text-2xl">Arsip HMTI</h1>
                </div>
                <button
                    onClick={onOpen}
                    className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                    Tambah Arsip
                </button>
            </div>
            <Form isOpen={isOpen} onOpenChange={onOpenChange} onOpen={onOpen} />
            <TableUI data={items} />
        </div>
    );
}
