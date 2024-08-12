const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createClient = async (req, res) => {
    const { prenom, email } = req.body;

    try {
        const client = await prisma.client.create({
            data: {
                prenom,
                email
            }
        });
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllClient = async (req, res) => {
    try {
        const clients = await prisma.client.findMany();
        res.json(clients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createClient,
    getAllClient
};