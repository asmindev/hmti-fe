import Image from "next/image";
import React from "react";
import hmti from "@/public/images/hmti-logo.png";

export default function Timeline2({ time, icon, title, description, author }) {
    return (
        <div className="flex md:gap-x-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 p-2 rounded">
            <div className="w-16 min-w-16 text-end">
                <time
                    dateTime={time}
                    title={time}
                    className="text-sm text-gray-600"
                >
                    {time}
                </time>
            </div>
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-gray-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                    <div className="size-2 rounded-full bg-gray-400 dark:bg-gray-600 border border-white ring-1 ring-gray-400 dark:ring-gray-600"></div>
                </div>
            </div>
            <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                    <svg
                        className="flex-shrink-0 size-4 mt-1"
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
                    {title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 text-justify">
                    {description}
                </p>
                <button
                    type="button"
                    className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                    <Image
                        src={hmti}
                        alt="Himpunan Mahasiswa Teknik Informatika"
                        width={24}
                        height={24}
                        className="flex-shrink-0 size-4 rounded-full"
                    />
                    {author}
                </button>
            </div>
        </div>
    );
}
