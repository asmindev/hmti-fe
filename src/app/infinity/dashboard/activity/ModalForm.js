"use client";
import React, { useEffect, useReducer } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Textarea,
    Input,
} from "@nextui-org/react";
import { update, store } from "./actions.js";
import { toast } from "sonner";

export default function ModalForm({ tag = "new", data, isOpen, onOpenChange }) {
    const initialState = {
        leader: "",
        title: "",
        date: "",
        description: "",
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_LEADER":
                return { ...state, leader: action.payload };
            case "SET_TITLE":
                return { ...state, title: action.payload };
            case "SET_DATE":
                return { ...state, date: action.payload };
            case "SET_DESCRIPTION":
                return { ...state, description: action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const onLeaderChange = (e) => {
        dispatch({ type: "SET_LEADER", payload: e.target.value });
    };

    const onTitleChange = (e) => {
        dispatch({ type: "SET_TITLE", payload: e.target.value });
    };

    const onDateChange = (e) => {
        dispatch({ type: "SET_DATE", payload: e.target.value });
    };

    const onDescriptionChange = (e) => {
        dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (tag === "new") {
            const data = await store({ data: state });
            if (data) {
                onOpenChange(false);
                toast.success("Data berhasil ditambahkan");
                dispatch({ type: "SET_LEADER", payload: "" });
                dispatch({ type: "SET_TITLE", payload: "" });
                dispatch({ type: "SET_DATE", payload: "" });
                dispatch({ type: "SET_DESCRIPTION", payload: "" });
            }
        }
        if (tag === "update") {
            const item = {
                id: data.id,
                data: state,
            };
            const result = await update(item);
            if (result) {
                onOpenChange(false);
                toast.success("Data berhasil diubah");
            }
        }
    };

    useEffect(() => {
        if (tag === "update") {
            dispatch({ type: "SET_LEADER", payload: data.leader });
            dispatch({ type: "SET_TITLE", payload: data.title });
            dispatch({ type: "SET_DATE", payload: data.date });
            dispatch({ type: "SET_DESCRIPTION", payload: data.description });
        }
    }, [tag, data]);

    return (
        <Modal
            backdrop={"blur"}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
        >
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            {tag === "new"
                                ? "Tambah Kegiatan"
                                : "Edit Kegiatan"}
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={onSubmit}>
                                <div className="mt-5">
                                    <Input
                                        isRequired
                                        autoFocus
                                        label="Ketua"
                                        placeholder="Masukkan nama Ketua"
                                        variant="bordered"
                                        labelPlacement={"outside"}
                                        name="leader"
                                        value={state.leader}
                                        onChange={onLeaderChange}
                                    />
                                </div>
                                <div className="mt-5">
                                    <Input
                                        isRequired
                                        autoFocus
                                        label="Nama"
                                        placeholder="Masukkan nama kegiatan"
                                        variant="bordered"
                                        labelPlacement={"outside"}
                                        value={state.title}
                                        onChange={onTitleChange}
                                    />
                                </div>
                                <div className="mt-5">
                                    <Input
                                        isRequired
                                        label="Tanggal"
                                        placeholder="Masukkan "
                                        type="date"
                                        variant="bordered"
                                        labelPlacement={"outside"}
                                        value={
                                            state.date
                                                ? new Date(state.date)
                                                      .toISOString()
                                                      .slice(0, 10)
                                                : ""
                                        }
                                        onChange={onDateChange}
                                    />
                                </div>
                                <div className="mt-5">
                                    <Textarea
                                        isRequired
                                        label="Deskripsi"
                                        placeholder="Masukkan deskripsi"
                                        type="text"
                                        variant="bordered"
                                        labelPlacement={"outside"}
                                        value={state.description}
                                        onChange={onDescriptionChange}
                                    />
                                </div>
                                <ModalFooter>
                                    <Button
                                        color="danger"
                                        variant="flat"
                                        onPress={onClose}
                                    >
                                        Close
                                    </Button>
                                    <Button type={"submit"} color="primary">
                                        Submit
                                    </Button>
                                </ModalFooter>
                            </form>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
