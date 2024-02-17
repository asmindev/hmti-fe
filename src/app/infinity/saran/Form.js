"use client";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";

function InputEl() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-gray-200 rounded-xl overflow-hidden border">
                <textarea
                    className="w-full px-4 py-2 outline-none bg-gray-200"
                    placeholder="Saran anda"
                    cols={5}
                />
                <div className="w-full bg-gray-50 px-4 py-1 flex justify-end">
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 text-gray-500"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Form() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={() => onOpen()}
                    className="text-base px-4 py-1 rounded"
                >
                    <div className="my-4">
                        <h1 className="text-2xl font-bold">Kotak Saran</h1>
                    </div>
                    <div className="w-full border-b">
                        <p className="text-gray-500">Masukan saran</p>
                    </div>
                </button>
            </div>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
                <ModalContent className="h-fit mb-20 md:mb-0">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Kotak Saran
                            </ModalHeader>
                            <ModalBody>
                                <InputEl />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
