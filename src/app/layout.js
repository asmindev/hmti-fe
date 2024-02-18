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
    metadataBase: new URL("https://hmti-uho.vercel.app"),
    title: {
        default: "HMTI-UHO",
        template: "%s | HMTI-UHO",
    },
    description:
        "Website Himpunan Mahasiswa Teknik Informatika, Fakultas Teknik, Universitas Haluoleo, HMTI menyediakan berbagai informasi mengenai Himpunan Mahasiswa Teknik Informatika",
    authors: [
        {
            name: "asmindev",
            url: "https://github.com/asmindev",
        },
    ],
    openGraph: {
        images: ["/hmti-logo.png"],
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
