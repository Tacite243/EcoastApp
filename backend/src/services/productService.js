const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProduct = async (productData) => {
    return prisma.product.create({ data: productData });
};

const getProductById = async (id) => {
    return prisma.product.findUnique({ where: { id } });
};

const getAllProducts = async () => {
    return prisma.product.findMany();
};

const updateProduct = async (id, productData) => {
    return prisma.product.update({ where: { id }, data: productData });
};

const deleteProduct = async (id) => {
    return prisma.product.delete({ where: { id } });
};

const calculateTotalStockValue = async () => {
    const products = await prisma.product.findMany();
    const totalStockValue = products.reduce((acc, product) => acc + (product.price * product.stock), 0);
    return totalStockValue;
}

module.exports = {
    createProduct,
    getProductById,
    getAllProducts,
    updateProduct,
    deleteProduct,
    calculateTotalStockValue,
};
