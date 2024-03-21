import { PrismaClient } from "@prisma/client";

class ActivityController {
    /**
     * Constructor function that initializes a new Prisma client and sets the activities property.
     */
    constructor() {
        const prisma = new PrismaClient();
        this.activities = prisma.activity;
    }
    async all() {
        const activities = await this.activities.findMany({});
        return activities;
    }

    async find(id) {
        const activity = await this.activities.findUnique({ where: { id } });
        return activity;
    }

    async create(data) {
        data.date = new Date(data.date).toISOString();
        const activity = await this.activities.create({ data });
        return activity;
    }

    async update(id, data) {
        const activity = await this.activities.update({
            where: { id },
            data,
        });
        return activity;
    }

    async delete(id) {
        const activity = await this.activities.delete({ where: { id } });
        return activity;
    }
}

export default ActivityController;
