import React from "react";
import Wrapper from "@/components/Wrapper";

export default function page() {
    return (
        <Wrapper>
            <div className="w-full flex items-center h-full justify-center">
                <div>
                    <div className="mt-20 flex flex-col gap-y-4">
                        <h1 className="uppercase text-xl md:text-3xl lg:text-6xl font-black text-center text-gray-600">
                            Pengurus
                        </h1>
                        <h2 className="text-3xl md:text-6xl lg:text-8xl font-bold text-center text-gray-700">
                            Himpunan Mahasiswa Teknik Informatika
                        </h2>
                        <h3 className="text-md md:text-xl lg:text-3xl font-medium text-center">
                            Periode 2023/2024
                        </h3>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
