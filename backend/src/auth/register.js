const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { hashPassword, generateToken } = require('../services/authService');
const prisma = new PrismaClient();

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email, password, userName } = req.body;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        const hashedPassword = await hashPassword(password);

        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                userName,
            },
        });

        const token = generateToken(newUser);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;