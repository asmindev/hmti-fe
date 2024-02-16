import Wrapper from "@/components/Wrapper";
import React from "react";
import Form from "./Form";

export default function Suggest() {
    return (
        <Wrapper>
            <div className="mt-12 w-full flex flex-col justify-center items-center text-center">
                <h1 className="text-xl md:text-3xl lg:text-6xl font-black text-gray-600">
                    Saran dan Kritik
                </h1>
                <h2 className="text-3xl md:text-6xl lg:text-8xl font-black text-gray-700">
                    Himpunan Mahasiswa Teknik Informatika
                </h2>
            </div>
            <div className="mt-12 w-11/12 md:w-10/12 lg:w-3/4 mx-auto flex justify-center items-center text-center">
                <p className="text-md md:text-xl lg:text-3xl">
                    Jika anda ingin memberikan kritik dan saran anda dapat
                    mengisi form saran dan kritik di bawah ini
                </p>
            </div>
            <div className="mt-12 flex items-center justify-center">
                <Form />
            </div>
        </Wrapper>
    );
}
