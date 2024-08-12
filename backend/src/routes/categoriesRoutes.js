const express = require('express');
const { createCategory, getAllCategories, getCategoryById } = require('../controllers/categoryControllers');

const router = express.Router();

router.post('/create', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);

module.exports = router;