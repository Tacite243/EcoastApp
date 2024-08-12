const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createInvoice = async (orderId, clientId, userId, amount, dueDate, status, products) => {
    // Commence une transaction pour garantir l'intégrité des opérations
    const newInvoice = await prisma.$transaction(async (prisma) => {
        // Créer la facture
        const invoice = await prisma.invoice.create({
            data: {
                order: { connect: { id: orderId } },
                client: { connect: { id: clientId } },
                user: { connect: { id: userId } },
                amount,
                dueDate,
                status,
                products: {
                    connect: products.map(product => ({ id: product.id }))
                }
            },
        });

        // Mise à jour du stock des produits
        for (const product of products) {
            await prisma.product.update({
                where: { id: product.id },
                data: {
                    stock: {
                        decrement: product.quantity
                    }
                }
            });
        }

        return invoice;
    });

    return newInvoice;
};

// Les autres méthodes restent inchangées
const getInvoiceById = async (id) => {
    return prisma.invoice.findUnique({ where: { id } });
};

const getAllInvoices = async () => {
    return prisma.invoice.findMany();
};

const updateInvoice = async (id, updateData) => {
    return prisma.invoice.update({
        where: { id },
        data: updateData,
    });
};

const deleteInvoice = async (id) => {
    return prisma.invoice.delete({ where: { id } });
};

module.exports = {
    createInvoice,
    getInvoiceById,
    getAllInvoices,
    updateInvoice,
    deleteInvoice,
};
