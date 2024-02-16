import Wrapper from "@/components/Wrapper";
import React from "react";

export default function Profile() {
    return (
        <Wrapper>
            <div className="mt-12 w-full flex flex-col items-center justify-center">
                <h2 className="uppercase text-xl md:text-3xl lg:text-6xl font-bold text-gray-600">
                    Profile
                </h2>
                <h1 className="text-3xl md:text-6xl lg:text-8xl font-black text-gray-700 ml-4 text-center">
                    Himpunan Mahasiswa Teknik Informatika
                </h1>
            </div>
        </Wrapper>
    );
}
