const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const productService = require('../services/productService');



const createProduct = async (req, res) => {
    const { name, description, price, stock, minimumStock, categoryName } = req.body;
    try {
        await prisma.category.findUniqueOrThrow({ where: { name: categoryName } });
        const product = await prisma.product.create({
            data: {
                name,
                description,
                price: parseFloat(price),
                stock: parseInt(stock),
                minimumStock: parseInt(minimumStock),
                category: { connect: { name: categoryName } }
            }
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getTotalStockValue = async (req, res) => {
    try {
        const totalStockValue = await productService.calculateTotalStockValue();
        res.json({ totalStockValue });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getTotalStockValue,
};