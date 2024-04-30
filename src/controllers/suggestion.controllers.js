import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class SuggestionController {
    constructor() {
        this.suggestions = prisma.suggestion;
    }

    async all() {
        const suggestions = await this.suggestions.findMany({});
        return suggestions;
    }

    async find(id) {
        const suggestion = await this.suggestions.findUnique({ where: { id } });
        return suggestion;
    }

    async create(data) {
        const suggestion = await this.suggestions.create({ data });
        return suggestion;
    }

    async update(id, data) {
        const suggestion = await this.suggestions.update({
            where: { id },
            data,
        });
        return suggestion;
    }

    async delete(id) {
        const suggestion = await this.suggestions.delete({ where: { id } });
        return suggestion;
    }
}

const suggestion = new SuggestionController();
export default suggestion;