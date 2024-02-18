import { Inter } from "next/font/google";
import "@/public/css/globals.css";
import NextUIProviders from "./providers";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
/**
 * @type {import('next').Metadata}
 */
export const metadata = {
    title: {
        default: "HMTI-UHO",
        template: "%s | HMTI-UHO",
    },
    description: {
        default:
            "Website Himpunan Mahasiswa Teknik Informatika Universitas Haluoleo",
        template:
            "%s | Website Himpunan Mahasiswa Teknik Informatika Universitas Haluoleo",
    },
    icons: {
        icon: "/hmti-logo.png",
        shortcut: "/hmti-logo.png",
        apple: "/hmti-logo.png",
    },
    keywords: [
        "hmti",
        "haluoleo",
        "himpunan",
        "mahasiswa",
        "teknik",
        "informatika",
        "universitas",
        "uho",
        "website",
        "hmti-uho",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth antialiased">
            <body className={`${inter.className} bg-white text-gray-700`}>
                <NextUIProviders>{children}</NextUIProviders>
            </body>
        </html>
    );
}
