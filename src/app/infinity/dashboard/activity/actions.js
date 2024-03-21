"use server";
import ActivityController from "@/controllers/activity.controllers";
import { revalidatePath } from "next/cache";
const activity = new ActivityController();

export async function store({ data }) {
    const result = await activity.create(data);
    revalidatePath("/infinity/dashboard/activity");
    return result;
}

export async function update({ id, data }) {
    data.date = new Date(data.date).toISOString();
    const result = await activity.update(id, data);
    revalidatePath("/infinity/dashboard/activity");
    return result;
}

export async function destroy(id) {
    const result = await activity.delete(id);
    revalidatePath("/infinity/dashboard/activity");
    return result;
}
