import React from 'react'

export default function Footer() {
    return (
        <div className="bg-zinc-900">
            <div className="w-full md:w-9/12 lg:w-8/12 mx-auto py-10">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-50 font-fira text-sm">
                                Himpunan Mahasiswa Teknik Informatika
                            </span>
                            <span className="text-gray-50 font-fira text-sm">
                                Universitas Haluoleo
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-4">
                        <div className="flex flex-col">
                            <span className="text-gray-50 font-fira text-sm">
                                Universitas Haluoleo
                            </span>
                            <span className="text-gray-50 font-fira text-sm">
                                +62 812-3456-7890
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-gray-50 font-fira text-sm">
                                <a
                                    href="mailto:hmti.uho@gmail.com"
                                    className="text-gray-50 font-fira text-sm"
                                >
                                    Email
                                </a>
                            </span>
                            <span className="text-gray-50 font-fira text-sm">
                                <a
                                    href="https://www.instagram.com/hmti.uho/"
                                    className="text-gray-50 font-fira text-sm"
                                >
                                    Instagram
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
