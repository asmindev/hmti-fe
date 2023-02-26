import React from 'react'

export default function About() {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-12 my-12 ">
            <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2">
                    <div className="w-full flex flex-col items-center lg:items-start">
                        <h1 className="text-xl md:text-2xl font-bold text-white">
                            About Us
                        </h1>
                        <p className="text-white text-sm mt-4 text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam voluptatum, quod, quia, voluptas quae
                            voluptates quibusdam voluptatibus quos quas dolorum
                            quidem. Quisquam, quae. Quisquam voluptatum, quod,
                            quia, voluptas quae voluptates quibusdam
                            voluptatibus quos quas dolorum quidem. Quisquam,
                            quae.
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <div className="w-full flex flex-col items-center lg:items-start">
                        <h1 className="text-xl md:text-2xl font-bold text-white">
                            Our Mission
                        </h1>
                        <p className="text-white text-sm mt-4 text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam voluptatum, quod, quia, voluptas quae
                            voluptates quibusdam voluptatibus quos quas dolorum
                            quidem. Quisquam, quae. Quisquam voluptatum, quod,
                            quia, voluptas quae voluptates quibusdam
                            voluptatibus quos quas dolorum quidem. Quisquam,
                            quae.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
