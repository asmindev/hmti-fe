"use client";
import React from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import ModalForm from "./ModalForm.js";

export default function ButtonAdd() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <Button onPress={onOpen} color="primary" size={"sm"}>
                Tambah Data
            </Button>
            <ModalForm isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
}
