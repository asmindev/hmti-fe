import { PrismaClient } from "@prisma/client";

class DocumentController {
    /**
     * Constructor function that initializes a new Prisma client and sets the document property.
     */
    constructor() {
        const prisma = new PrismaClient();
        this.document = prisma.document;
    }
    async all() {
        const documents = await this.document.findMany({});
        return documents;
    }

    async find(id) {
        const document = await this.document.findUnique({ where: { id } });
        return document;
    }

    async create(data) {
        if (data.date) {
            data.date = new Date(data.date).toISOString();
        } else {
            delete data.date;
        }
        const document = await this.document.create({ data });
        return document;
    }

    async update(id, data) {
        const document = await this.document.update({
            where: { id },
            data,
        });
        return document;
    }

    async delete(id) {
        const document = await this.document.delete({ where: { id } });
        return document;
    }
}

export default DocumentController;
