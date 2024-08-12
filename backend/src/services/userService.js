const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { hashPassword } = require('./authService');

const createUser = async (email, password, userName) => {
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            userName,
        },
    });
    return newUser;
};

const getUserByEmail = async (email) => {
    return prisma.user.findUnique({ where: { email } });
};

const getUserById = async (id) => {
    return prisma.user.findUnique({ where: { id } });
};

module.exports = {
    createUser,
    getUserByEmail,
    getUserById,
};
