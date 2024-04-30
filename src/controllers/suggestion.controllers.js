import { PrismaClient } from "@prisma/client";
class SuggestionController {
    constructor() {
        const prisma = new PrismaClient();
        this.suggestion = prisma.suggestion;
    }

    async all() {
        const suggestions = await this.suggestion.findMany({});
        return suggestions;
    }

    async find(id) {
        const suggestion = await this.suggestion.findUnique({ where: { id } });
        return suggestion;
    }

    async create(data) {
        const suggestion = await this.suggestion.create({ data });
        return suggestion;
    }

    async update(id, data) {
        const suggestion = await this.suggestion.update({
            where: { id },
            data,
        });
        return suggestion;
    }

    async delete(id) {
        const suggestion = await this.suggestion.delete({ where: { id } });
        return suggestion;
    }
}

export default SuggestionController;
