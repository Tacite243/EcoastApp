const { createOrder, getOrderById, getAllOrders } = require('../services/orderService');

const createOrderController = async (req, res) => {
    const { clientId, userId, orderItems } = req.body;
    console.log('creation await...');

    try {
        const newOrder = await createOrder(clientId, userId, orderItems);
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getOrderByIdController = async (req, res) => {
    const orderId = req.params.id;

    try {
        const order = await getOrderById(orderId);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const getAllOrdersController = async (req, res) => {
    try {
        const orders = await getAllOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createOrderController,
    getOrderByIdController,
    getAllOrdersController,
};
