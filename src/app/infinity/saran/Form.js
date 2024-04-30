"use client";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/react";
import { toast } from "sonner";
import { store } from "./actions";
import Image from "next/image";

function InputEl({ onClose }) {
    const onSubmit = (e) => {
        e.preventDefault();
        // data from form data
        const data = new FormData(e.target);
        // to json
        const json = Object.fromEntries(data.entries());
        const save = store(json);
        console.log(save);
        toast.success("Saran anda telah terkirim");
        onClose();
    };
    return (
        <div className="w-full flex flex-col gap-4">
            <form
                onSubmit={onSubmit}
                className="w-full bg-gray-200 rounded-xl overflow-hidden border"
            >
                <input type="hidden" name="title" value={"saran"} />
                <textarea
                    autoFocus
                    className="w-full px-4 py-2 outline-none bg-gray-200"
                    placeholder="Saran anda"
                    cols={5}
                    name="description"
                />
                <div className="w-full bg-gray-50 px-4 py-1 flex justify-end">
                    <button
                        type="submit"
                        className="bg-lime-400 py-1 px-6 rounded-lg text-sm"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default function Form() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => onOpen()}
                    className="text-base px-8 py-4 rounded-xl bg-white group hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                    <div className="my-4">
                        <h1 className="text-2xl font-extrabold">Kotak Saran</h1>
                    </div>
                    <div className="w-full border px-8 py-2 rounded-lg border-dashed border-gray-600 group-hover:border-white">
                        <h1 className="font-medium">Masukkan saran</h1>
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
                                <InputEl isOpen={isOpen} onClose={onClose} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
