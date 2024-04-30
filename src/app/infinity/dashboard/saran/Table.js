"use client";
import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Tooltip,
} from "@nextui-org/react";
import { parseDate } from "@/utils/parseDate";
import { destroy } from "./actions";
import { toast } from "sonner";

export default function TableUI({ data }) {
    const [items, setItems] = useState(data);
    const [loading, setLoading] = useState("");
    const onDelete = async (id) => {
        try {
            setLoading(id);
            await destroy(id);
            setItems(items.filter((item) => item.id !== id));
            toast.success("Success delete document");
            setLoading("");
        } catch (error) {
            toast.error("Failed delete document");
        }
    };
    return (
        <Table
            aria-label="Example table with dynamic content"
            className="table-auto"
            isCompact={false}
            isStriped={true}
            sortDescriptor={{ column: "date", direction: "descending" }}
            onSortChange={(ctx) => {
                if (ctx.direction === "ascending") {
                    setItems([...items].reverse());
                } else {
                    setItems([...items].reverse());
                }
            }}
        >
            <TableHeader>
                <TableColumn key="title">Judul</TableColumn>
                <TableColumn key="desc">Deskripsi</TableColumn>
                <TableColumn key="date" allowsSorting>
                    Tanggal
                </TableColumn>
                <TableColumn key="action">Actions</TableColumn>
            </TableHeader>
            <TableBody emptyContent="No data to display" items={items}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell className="w-1/2">
                            {item.description}
                        </TableCell>
                        <TableCell>{parseDate(item.date)}</TableCell>
                        <TableCell>
                            <div className="flex gap-2 items-center">
                                <Tooltip
                                    content="Hapus Kegiatan"
                                    color="danger"
                                >
                                    <button
                                        disabled={loading === item.id}
                                        type="button"
                                        onClick={() => onDelete(item.id)}
                                        className={`${
                                            item.id === loading &&
                                            "disabled:opacity-50"
                                        } flex items-center justify-center`}
                                    >
                                        {loading === item.id ? (
                                            <svg
                                                className="w-5 h-5 animate-spin"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="w-5 h-5"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        )}
                                    </button>
                                </Tooltip>
                            </div>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
