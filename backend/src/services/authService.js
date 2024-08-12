const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

const generateToken = (user) => {
    return jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
};
