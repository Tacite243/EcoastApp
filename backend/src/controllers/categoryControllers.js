const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createCategory = async (req, res) => {
    const { name } = req.body;

    try {
        const category = await prisma.category.create({
            data: {
                name
            }
        });
        res.status(201).json(category);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await prisma.category.findMany();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCategoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const categoryId = parseInt(id, 10);
        if(isNaN(categoryId)){
            return res.status(400).json({"Invalid category ID": error});
        }
        const category = await prisma.category.findUnique({ where: { id: categoryId } });
        if (!category) {
            res.status(404).json({ error: 'Category not found' });
        } else {
            res.json(category);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById
};
