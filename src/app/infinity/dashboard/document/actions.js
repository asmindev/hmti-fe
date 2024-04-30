"use server";
import DocumentController from "@/controllers/document.controllers";
const document = new DocumentController();

export const store = async (form) => {
    form.url = form.file;
    delete form.file;
    const store = await document.create(form);
    return store;
};

export const destroy = async (id) => {
    const destroy = await document.delete(id);
    return destroy;
};
