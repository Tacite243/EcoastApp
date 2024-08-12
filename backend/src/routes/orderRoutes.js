const express = require('express');
const {
    createOrderController,
    getOrderByIdController,
    getAllOrdersController
} = require('../controllers/orderController');


const router = express.Router();

router.post('/create', createOrderController);
router.get('/:id', getOrderByIdController);
router.get('/', getAllOrdersController);

module.exports = router;


// http://localhost:5000/api/orders/create