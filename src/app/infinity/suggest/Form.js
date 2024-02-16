"use client";
import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
} from "@nextui-org/react";

function InputEl() {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="w-full bg-gray-200 rounded-xl overflow-hidden">
                <textarea
                    className="w-full px-4 py-2 outline-none bg-gray-200"
                    placeholder="Saran anda"
                    cols={5}
                />
                <div className="w-full bg-gray-300 px-4 py-1 flex justify-end">
                    <Button type="button" className="bg-blue-500 text-white">
                        kirim
                    </Button>
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
                <Button
                    variant="flat"
                    color="warning"
                    onPress={() => onOpen()}
                    className="capitalize"
                >
                    Form
                </Button>
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
