import React from "react";
import Wrapper from "@/components/Wrapper";
import Timeline from "./Timeline";
import { IconBulletFill } from "@irsyadadl/paranoid";

export default function Event() {
    const items = [
        {
            id: 1,
            time: "Februari, 2024",
            icon: "",
            title: "Pelantikan",
            description:
                "Pelantikan ketua dan wakil ketua HMTI periode 2023/2024",
            author: "HMTI - 2023/2024",
        },
        {
            id: 2,
            time: "Maret, 2024",
            icon: "",
            title: "Leadership Camp",
            description: "Kegiatan Leadership Camp HMTI periode 2023/2024",
            author: "HMTI - 2023/2024",
        },
        {
            id: 3,
            time: "April, 2024",
            icon: "",
            title: "Muswil 14",
            description: "Kegiatan Musyawarah wilayah 14 PERMIKOMNAS 2023/2024",
            author: "HMTI - 2023/2024",
        },
    ];
    return (
        <Wrapper className="bg-white">
            <div className="px-2 w-full h-full min-h-screen flex flex-col items-center justify-evenly">
                <div className="w-full h-full flex items-center justify-center">
                    <h1 className="text-3xl font-bold">
                        Timeline HMTI Periode 2023/2024
                    </h1>
                </div>
                <Timeline items={items} />
            </div>
        </Wrapper>
    );
}
