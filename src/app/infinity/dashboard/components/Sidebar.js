import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Sidebar() {
    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex flex-col py-8 px-4">
                <div className="h-fit p-4 rounded-xl bg-gray-100 overflow-hidden">
                    <div className="flex flex-col items-center">
                        <Image
                            src={"/hmti-logo.png"}
                            alt="logo"
                            width={200}
                            height={200}
                            className="w-32 h-32"
                        />
                        <h1 className="mt-4 text-2xl font-bold">HMTI</h1>
                    </div>
                </div>
                <div className="mt-4 flex-1 h-full overflow-auto flex flex-col gap-y-2">
                    <Link href="/infinity/dashboard">
                        <div className="px-4 py-6 hover:bg-pink-50 cursor-pointer flex gap-x-4 rounded-xl group transition-all duration-100">
                            <svg
                                className="w-6 h-6 group-hover:text-pink-600 transition-all duration-100"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H9M9 21H15M9 21L9 4.6C9 4.03995 9 3.75992 9.10899 3.54601C9.20487 3.35785 9.35785 3.20487 9.54601 3.10899C9.75992 3 10.0399 3 10.6 3L13.4 3C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V21M15 11H19.4C19.9601 11 20.2401 11 20.454 11.109C20.6422 11.2049 20.7951 11.3578 20.891 11.546C21 11.7599 21 12.0399 21 12.6V19.4C21 19.9601 21 20.2401 20.891 20.454C20.7951 20.6422 20.6422 20.7951 20.454 20.891C20.2401 21 19.9601 21 19.4 21H15"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h1 className="text-lg group-hover:text-pink-600 transition-all duration-100">
                                Dashboard
                            </h1>
                        </div>
                    </Link>
                    <Link href="/infinity/dashboard/activity">
                        <div className="px-4 py-6 hover:bg-pink-50 cursor-pointer flex gap-x-4 rounded-xl group transition-all duration-100">
                            <svg
                                className="w-6 h-6 group-hover:text-pink-600 transition-all duration-100"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22 12H18L15 21L9 3L6 12H2"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h1 className="text-lg group-hover:text-pink-600 transition-all duration-100">
                                Kegiatan
                            </h1>
                        </div>
                    </Link>
                    <Link href="/infinity/dashboard/document">
                        <div className="px-4 py-6 hover:bg-pink-50 cursor-pointer flex gap-x-4 rounded-xl group transition-all duration-100">
                            <svg
                                className="flex-shrink-0 size-6 mt-1"
                                xmlns="http://www.w3.org/2000/svg"
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
                            <h1 className="text-lg group-hover:text-pink-600 transition-all duration-100">
                                Dokumen
                            </h1>
                        </div>
                    </Link>
                    <Link href="/infinity/dashboard/saran">
                        <div className="px-4 py-6 hover:bg-pink-50 cursor-pointer flex gap-x-4 rounded-xl group transition-all duration-100">
                            <svg
                                className="size-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.744 2.63358L21.272 7.52679C21.538 7.69969 21.671 7.78615 21.7674 7.90146C21.8527 8.00354 21.9167 8.12162 21.9558 8.24877C22 8.39241 22 8.55104 22 8.8683V16.2C22 17.8802 22 18.7202 21.673 19.362C21.3854 19.9265 20.9265 20.3854 20.362 20.673C19.7202 21 18.8802 21 17.2 21H6.8C5.11984 21 4.27976 21 3.63803 20.673C3.07354 20.3854 2.6146 19.9265 2.32698 19.362C2 18.7202 2 17.8802 2 16.2V8.8683C2 8.55104 2 8.39241 2.04417 8.24877C2.08327 8.12162 2.14735 8.00354 2.23265 7.90146C2.32901 7.78615 2.46201 7.69969 2.72802 7.52679L10.256 2.63358M13.744 2.63358C13.1127 2.22327 12.7971 2.01812 12.457 1.93829C12.1564 1.86774 11.8436 1.86774 11.543 1.93829C11.2029 2.01812 10.8873 2.22327 10.256 2.63358M13.744 2.63358L19.9361 6.65849C20.624 7.10559 20.9679 7.32915 21.087 7.61264C21.1911 7.86039 21.1911 8.13961 21.087 8.38737C20.9679 8.67086 20.624 8.89441 19.9361 9.34152L13.744 13.3664C13.1127 13.7767 12.7971 13.9819 12.457 14.0617C12.1564 14.1323 11.8436 14.1323 11.543 14.0617C11.2029 13.9819 10.8873 13.7767 10.256 13.3664L4.06386 9.34151C3.37601 8.89441 3.03209 8.67086 2.91297 8.38737C2.80888 8.13961 2.80888 7.86039 2.91297 7.61264C3.03209 7.32915 3.37601 7.1056 4.06386 6.65849L10.256 2.63358M21.5 19L14.8572 13M9.14282 13L2.5 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h1 className="text-lg group-hover:text-pink-600 transition-all duration-100">
                                Kotak Saran
                            </h1>
                        </div>
                    </Link>
                </div>
                <div className="h-16 text-center">
                    <Link href="/dashboard/saran">
                        <div className="px-4 py-6 hover:bg-gray-200 cursor-pointer rounded-xl">
                            <h1 className="text-base">Saran</h1>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
