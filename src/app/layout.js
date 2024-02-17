import { Inter } from "next/font/google";
import "@/public/css/globals.css";
import NextUIProviders, { Providers } from "./providers";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: {
        default: "HMTI",
        template: "%s | HMTI",
    },
    description: "Website HMTI",
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
