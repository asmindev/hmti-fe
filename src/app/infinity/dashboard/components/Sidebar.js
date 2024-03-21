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
