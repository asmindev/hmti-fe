"use client";
import React, { useRef } from "react";
import Wrapper from "@/components/Wrapper";
import Jumbotron from "./Jumbotron";
import Kabinet from "./Kabinet";
import { IconArrowDown } from "@irsyadadl/paranoid";
import Link from "next/link";

export default function Page() {
    const ref = useRef(null);
    return (
        <Wrapper>
            <div className="flex h-[90vh] items-center justify-center">
                <div className="flex">
                    <Jumbotron />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                <IconArrowDown className="animate-bounce" />
                <button
                    onClick={() =>
                        ref.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        })
                    }
                    className="text-base text-gray-700 bg-gray-200 px-4 py-1 rounded"
                >
                    Scroll Down
                </button>
            </div>
            <section ref={ref} className="w-full px-4 md:w-9/12 mx-auto">
                <Kabinet />
            </section>
            <section className="my-12">
                {/* suggest and critique */}

                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-black text-center">
                        Punya saran dan kritik?
                    </h1>
                    <Link
                        href="/infinity/suggest"
                        className="text-base text-blue-600"
                    >
                        Silahkan klik disini
                    </Link>
                </div>
            </section>
        </Wrapper>
    );
}
