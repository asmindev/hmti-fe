import React, { useReducer } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@nextui-org/react";
import { toast } from "sonner";
import { store } from "./actions";
import uploadInstanceFile from "@/utils/cloudinary";
export default function Form({ tag = "new", isOpen, onOpenChange }) {
    const initialState = {
        title: "",
        description: "",
        file: "",
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "TITLE":
                return { ...state, title: action.payload };
            case "DESCRIPTION":
                return { ...state, description: action.payload };
            case "FILE":
                return { ...state, file: action.payload };
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const onSubmit = async () => {
        if (tag === "new") {
            const upload = await uploadInstanceFile(state.file);
            if (upload.secure_url) {
                state.file = upload.secure_url;
                const data = await store(state);
                if (data) {
                    onOpenChange(false);
                    toast.success("Berhasil Menambah Document");
                    dispatch({ type: "FILE", payload: "" });
                    dispatch({ type: "TITLE", payload: "" });
                    dispatch({ type: "DESCRIPTION", payload: "" });
                }
            }
        }
    };
    const handleFile = (e) => {
        const file = e.target.files;
        dispatch({ type: "FILE", payload: file[0] });
    };
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
                backdrop={"blur"}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {tag === "new" ? "Arsip File" : "Edit Arsip"}
                            </ModalHeader>
                            <ModalBody>
                                <form className="flex flex-col gap-y-3">
                                    <Input
                                        autoFocus
                                        onChange={(e) =>
                                            dispatch({
                                                type: "TITLE",
                                                payload: e.target.value,
                                            })
                                        }
                                        label="Title"
                                        placeholder="Enter the title"
                                        variant="bordered"
                                        type="text"
                                    />
                                    <Input
                                        onChange={(e) =>
                                            dispatch({
                                                type: "DESCRIPTION",
                                                payload: e.target.value,
                                            })
                                        }
                                        label="Description"
                                        placeholder="Enter the description"
                                        variant="bordered"
                                    />
                                    <input
                                        type="file"
                                        className="file:px-4 file:py-2 file:text-sm file:rounded-lg file:bg-blue-600 file:text-white file:outline-none file:border-none"
                                        placeholder="Enter the description"
                                        onChange={handleFile}
                                    />
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    type={"button"}
                                    onClick={onSubmit}
                                >
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
