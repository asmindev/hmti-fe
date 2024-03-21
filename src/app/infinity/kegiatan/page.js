import React from "react";
import Wrapper from "@/components/Wrapper";
import Content from "./Content";
import { PrismaClient } from "@prisma/client";

export const metadata = {
    title: "Kegiatan",
    description:
        "Kegiatan Himpunan Mahasiswa Teknik Informatika periode 2023/2024",
};

export default async function Event() {
    const prisma = new PrismaClient();
    const activities = await prisma.activity.findMany({});

    return (
        <Wrapper className="bg-white">
            <div className="px-2 w-full h-full min-h-screen flex flex-col items-center justify-evenly">
                <div className="w-full h-full flex items-center justify-center">
                    <h2 className="text-3xl font-bold">Timeline Kegiatan</h2>
                </div>
                <Content items={activities} />
            </div>
        </Wrapper>
    );
}
