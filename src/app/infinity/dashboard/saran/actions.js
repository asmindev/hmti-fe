"use server";

import suggestion from "@/controllers/suggestion.controllers";

export const destroy = async (id) => {
    const destroy = await suggestion.delete(id);
    return destroy;
};
