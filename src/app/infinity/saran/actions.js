"use server";
import SuggestionController from "@/controllers/suggestion.controllers";

export const store = async (data) => {
    const suggestion = new SuggestionController();
    const store = await suggestion.create(data);
    return store;
};
