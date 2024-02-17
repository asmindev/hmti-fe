import React from "react";
import Wrapper from "@/components/Wrapper";
import Container from "./Container";

export const metadata = {
    title: "Kabinet",
    description:
        "Profile Pengurus Himpunan Mahasiswa Teknik Informatika periode 2023/2024",
};

const ministries = [
    {
        name: "Kaderisasi",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        sed tenetur et ipsam. Recusandae repudiandae voluptatibus, ab
        reprehenderit, dolor commodi ea nostrum ducimus eaque tenetur
        fugit natus neque quod! Molestiae libero odio, nesciunt aliquam
        magnam modi rerum necessitatibus ipsam ut, iste dicta
        perferendis neque eaque ducimus amet quas! Consequatur quaerat
        quia maiores nobis expedita, impedit ut animi fugit dolorum iste
        id asperiores, corporis eos consectetur? Architecto
        exercitationem eligendi nihil illum. Rerum commodi culpa fuga,
        quam rem nisi cum ullam minus veniam non. Iste esse, alias rerum
        quo suscipit molestias optio? Alias accusamus magnam veritatis
        illo hic voluptate corporis eos sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        sed tenetur et ipsam. Recusandae repudiandae voluptatibus, ab
        reprehenderit, dolor commodi ea nostrum ducimus eaque tenetur
        fugit natus neque quod! Molestiae libero odio, nesciunt aliquam
        magnam modi rerum necessitatibus ipsam ut, iste dicta
        perferendis neque eaque ducimus amet quas! Consequatur quaerat
        quia maiores nobis expedita, impedit ut animi fugit dolorum iste
        id asperiores, corporis eos consectetur? Architecto
        exercitationem eligendi nihil illum. Rerum commodi culpa fuga,
        quam rem nisi cum ullam minus veniam non. Iste esse, alias rerum
        quo suscipit molestias optio? Alias accusamus magnam veritatis
        illo hic voluptate corporis eos sequi.`,
        chairman: "LM. Fatanahaw",
        secretary: "Reza",
        member: ["Fikri", "Hafizh", "Nafis"],
    },
    {
        name: "Humas",
        description: "Menjalin hubungan dengan masyarakat HMTI",
        chairman: "Agrian Wahab",
        secretary: "Wahyu Nahda Putra",
        member: ["Fikri", "Hafizh", "Nafis"],
    },
    {
        name: "Sekretariat",
        description: "Mengatur dan mengorganisir sekretariat HMTI",
        chairman: "Fiki",
        secretary: "Nasir Azis Jaelani",
        member: ["Fikri", "Hafizh", "Nafis"],
    },
];

export default function page() {
    return (
        <Wrapper>
            <div className="w-full flex items-center h-full justify-center">
                <Container ministries={ministries} />
            </div>
        </Wrapper>
    );
}
