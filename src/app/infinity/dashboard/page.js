import React from "react";
import Layouts from "./components/Layouts";
import Image from "next/image";

export default function page() {
    return (
        <Layouts>
            <div className="w-full border rounded-xl bg-white px-6 py-4">
                <div className="w-full flex justify-between">
                    <div className="w-fit flex items-end space-x-2">
                        <Image
                            src={"/hmti-logo.png"}
                            alt="logo"
                            width={200}
                            height={200}
                            className="w-10 h-auto border-2 border-pink-200 rounded-full p-0.5"
                        />
                        <h1 className="text-lg font-medium">Halo, admin</h1>
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
