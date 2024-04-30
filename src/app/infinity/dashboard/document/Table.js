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
    const onDelete = async (id) => {
        try {
            await destroy(id);
            setItems(items.filter((item) => item.id !== id));
            toast.success("Success delete document");
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
                <TableColumn key="title">Deskripsi</TableColumn>
                <TableColumn key="file">File</TableColumn>
                <TableColumn key="date" allowsSorting>
                    Tanggal
                </TableColumn>
                <TableColumn key="action">Actions</TableColumn>
            </TableHeader>
            <TableBody emptyContent="No Data" items={items}>
                {(item) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.title}</TableCell>
                        <TableCell className="w-10">
                            {item.description}
                        </TableCell>
                        <TableCell>
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <svg
                                    className="size-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                    <line x1="16" x2="8" y1="13" y2="13" />
                                    <line x1="16" x2="8" y1="17" y2="17" />
                                    <line x1="10" x2="8" y1="9" y2="9" />
                                </svg>
                            </a>
                        </TableCell>
                        <TableCell>{parseDate(item.date)}</TableCell>
                        <TableCell>
                            <div className="flex gap-2 items-center">
                                <Tooltip
                                    content="Hapus Kegiatan"
                                    color="danger"
                                >
                                    <button
                                        type="button"
                                        onClick={() => onDelete(item.id)}
                                    >
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
