const express = require('express');
const {
    createInvoiceController,
    getAllInvoicesController,
    getInvoiceByIdController,
    updateInvoiceController,
    deleteInvoiceController
} = require('../controllers/invoiceController');

const router = express.Router();

router.post('/create', createInvoiceController);
router.get('/', getAllInvoicesController);
router.get('/:id', getInvoiceByIdController);
router.put('/:id', updateInvoiceController);
router.delete('/:id', deleteInvoiceController);

module.exports = router;