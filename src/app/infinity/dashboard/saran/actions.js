"use server";

import SuggestionController from "@/controllers/suggestion.controllers";

export const destroy = async (id) => {
    const suggestion = new SuggestionController();
    const destroy = await suggestion.delete(id);
    return destroy;
};
