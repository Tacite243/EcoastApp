const { getUserByEmail, createUser } = require('../services/userService');
const { generateToken, comparePassword } = require('../services/authService');

const register = async (req, res) => {
    const { email, password, userName } = req.body;

    try {
        const existingUser = await getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const newUser = await createUser(email, password, userName);
        const token = generateToken(newUser);
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const token = generateToken(user);
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    register,
    login,
};
