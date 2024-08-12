const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createOrder = async (clientId, userId, orderItems) => {
    console.log("Creating order with data:", { clientId, userId, orderItems });
    const newOrder = await prisma.order.create({
        data: {
            client: { connect: { id: clientId } },
            user: { connect: { id: userId } },
            orderItems: {
                create: orderItems.map(item => ({
                    product: { connect: { id: item.productId } },
                    quantity: item.quantity,
                    price: item.price,
                })),
            },
        },
    });
    console.log("Order created:", newOrder);
    return newOrder;
};

const getOrderById = async (id) => {
    return prisma.order.findUnique({ where: { id }, include: { orderItems: true } });
};

const getAllOrders = async () => {
    return prisma.order.findMany({ include: { orderItems: true } });
};

module.exports = {
    createOrder,
    getOrderById,
    getAllOrders,
};
