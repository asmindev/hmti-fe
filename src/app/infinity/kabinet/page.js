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
        name: "Advokasi dan Pergerakan",
        description:
            "Kementerian yang melakukan kajian terhadap isu - isu terkini yang berkembang, baik di HMTI, jurusan, fakultas ataupun universitas.",
        chairman: "LM. Hud Alfatanah",
        secretary: "Wa Ode Azzahra Astiani Hasiba",
        member: [
            "Putri elisyah",
            "Muh. Thariq Fayiz Syahputra A",
            "La Ode Pali Aqsan",
        ],
    },
    {
        name: "Seni dan Olahraga",
        description:
            "Kementrian yang berfokus untuk menaungi kegiatan serta minat dan bakat anggota Himpunan Mahasiswa Teknik Informatika di bidang seni dan olahraga.",
        chairman: "M. Aldi Saputra",
        secretary: "Reza",
        member: [
            "L.M Nuralal Hamdi Halu",
            "Laode Muhammad Firza Fahrezi",
            "Laode Yunus Abdillah Sandi ",
            "Bilal",
            "Fadit Al Fauzan",
            "Muh. Saleh Prasetya",
            "Muhammad Bintang Mulya Pratama",
            "Haudzan Zaky Syahrandi Lasaima",
            "Meutya Nathania",
            "Muh Fauzan Maulana",
        ],
    },
    {
        name: "Sumber Daya dan Penalaran",
        description:
            "Kementerian yang berfokus untuk mengelola dan menfasilitasi sumber daya sumber daya yang ada di masyarakat HMTI sehingga bisa meningkatkan kualitas serta pola pikir di bidang akademik menjadi lebih kritis, kreatif dan juga inovatif.",
        chairman: "Asmin",
        secretary: "Ahmad Fadli Ramadhan",
        member: [
            "Nirwana",
            "Muh Indrawan Pratama",
            "Hashimatul Zaria",
            "Rahma Damayanti",
            "Mutmainnah  Putri Kayla Kemala Raden",
            "Fabelina Agsaria",
        ],
    },
    {
        name: "Sosial dan Humas",
        description:
            " Kementrian dengan fungsi manajemen untuk menjalin hubungan dengan publik atau organisasi lain melalui komunikasi dan sarana lain dengan tujuan untuk menumbuhkan saling pengertian dan saling percaya, rasa simpati, memperoleh pengakuan, penerimaan dan dukungan, terhadap setiap kebijakan dan prosedur yang dikeluarkan oleh organisasi.",
        chairman: "Agrian Wahab",
        secretary: "Wahyu Nahda Putra",
        member: [
            "Salsabila Qodriyah",
            "Nurfatzma Ayu",
            "Nurul Azizah",
            "Elvi Saktiawati Salemaku",
            "Rafly Ahmad Zainur",
            "Harnelia",
            "Nurendro Hardjo Judanto",
        ],
    },
    {
        name: "Kesekretariatan",
        description:
            "kementerian yang menyelenggarakan dukungan teknis dan administrasi dalam HMTI.",
        chairman: "Fiqram Fatir",
        secretary: "Nasir Azis Jaelani",
        member: [
            "Teuku Razqy Sulaiman",
            "Muh.Ichwan Nur",
            "Fellonisa Suria",
            "Suci Wulandari",
            "Umar Faruq Manek",
            "Muhammad Bayanudin Fadillah",
        ],
    },
    {
        name: "Ekonomi Kreatif",
        description:
            "Kementerian yang bergerak dalamm pencarian atau pemasukan dana untuk himpunan yang digunakan untuk menunjang kegiatan atau proker himpunan serta mewadahi mahasiswa yang memiliki minat dan bakat dalam berwirausaha.",
        chairman: "Adza Aulia Salsabita",
        secretary: "Wilda Aryani",
        member: [
            "Anggun Lestari Arman Syah",
            "Nur Hikmah Wulandari",
            "Sri Ayu Ningsih",
            "Zahra Vebryan Maharani",
            "Windy Astuti",
            "Andi Nurhidaya",
            "Sumiartin",
            "Muhammad Faiz Alimuddin",
        ],
    },
    {
        name: "Media Komunikasi dan Informasi",
        description:
            "Kementerian ini memiliki jobdesk dalam pengolahan dan penyampaian informasi melalui media yang dimiliki HMTI FT UHO.",
        chairman: "Bayu Adi Wibowo",
        secretary: "M. Gibran Fitrah",
        member: [
            "Muhammad Yusran Adhiputra Raeba",
            "Rafli Balani",
            "Anisa Nur Fadilla",
            "Rafi Iyad Madani Chaidir",
            "Muhammad Luthfi",
            "Nawir",
            "Febri Haerani",
            "Agusriyati",
            "Ayustina Samudin",
            "Annisa Auliya Ramadhani",
            "Aulia Afifah Adnan Hakim",
        ],
    },
    {
        name: "Keagamaan",
        description:
            "Kementerian yang bergerak dalam ranah keagamaan. Kementerian agama ini memiliki tujuan untuk menumbuhkan nilai toleransi antar agama serta mengembangkan nilai-nilai agama yang ada di dalam lingkungan jurusan teknik informatika.",
        chairman: "Saleh Badawi",
        secretary: "Samsudin",
        member: [
            "Taufik Hidayat",
            "Thariq Asy Syamil",
            "Laode Ikhwanul Uzlah",
            "St. Nur'Afiah",
            "Muhammad Akram Abbas",
        ],
    },
    {
        name: "Kaderisasi",
        description:
            "Kementerian Kaderisasi adalah kementerian yang bertanggung jawab dalam pembentukan dan pengembangan kader - kader baru dari HMTI",
        chairman: "M. Aldi Ramadhan",
        secretary: "Dian Ramadhani L.",
        member: [
            "Laode Lukmana",
            "Muh. Rian Septian Fajar",
            "Ashabul",
            "Chalifahdien Hamud",
            "Dikhsan Dwirangga Tibong",
            "Farras Sida Toruntju",
            "Muhammad Lutfi Fausan",
            "Ahmad Al Ambiyah",
        ],
    },
    {
        name: "Riset dan Teknologi",
        description:
            "Kementerian adalah kementrian yang memiliki tujuan untuk mengembangkan kemampuan Mahasiswa Mengenai Riset dan teknologi serta menjadi wadah dalam membantu mahasiswa Teknik Informatika untuk berprestasi serta mengembangkan budaya ilmiah dilingkungan mahasiswa.",
        chairman: "M. Nabil Afkar",
        secretary: "Zahra Maharani Aulia",
        member: [
            "Fildzah Khalishah Ghassani",
            "Muhammad Azriel Saktiawan",
            "Rina",
            "Toga Abdi Hayat",
            "Muh. Afdal Ziqri Ranadhan",
            "Ade Sulastri",
            "Irfan",
            "Argitha Trihapsari",
        ],
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
