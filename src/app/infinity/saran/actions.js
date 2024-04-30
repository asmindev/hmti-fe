"use server";
import suggestion from "@/controllers/suggestion.controllers";

export const store = async (data) => {
    const store = await suggestion.create(data);
    return store;
};
