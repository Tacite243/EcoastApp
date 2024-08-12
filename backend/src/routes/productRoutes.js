const express = require('express');
const { createProduct, getAllProducts, getTotalStockValue } = require('../controllers/productController')
// const authMiddleware = require('../middleware/authMiddleware');


const router = express.Router();


router.post('/create', createProduct);
router.get('/', getAllProducts);
// router.get('/:id', getProductById);
router.get('/total-stock-value', getTotalStockValue);

module.exports = router;