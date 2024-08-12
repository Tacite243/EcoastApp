const { createInvoice, getInvoiceById, getAllInvoices, updateInvoice, deleteInvoice } = require('../services/invoiceService');

const createInvoiceController = async (req, res) => {
    const { orderId, clientId, userId, amount, dueDate, status, products } = req.body;

    try {
        const newInvoice = await createInvoice(orderId, clientId, userId, amount, dueDate, status, products);
        res.status(201).json(newInvoice);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de la facture.' });
    }
};



const getInvoiceByIdController = async (req, res) => {
    const invoiceId = req.params.id;

    try {
        const invoice = await getInvoiceById(invoiceId);
        if (!invoice) {
            return res.status(404).json({ error: 'Facture non trouvée.' });
        }
        res.json(invoice);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de la facture.' });
    }
};

const getAllInvoicesController = async (req, res) => {
    try {
        const invoices = await getAllInvoices();
        res.json(invoices);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des factures.' });
    }
};

const updateInvoiceController = async (req, res) => {
    const invoiceId = req.params.id;
    const updateData = req.body;

    try {
        const updatedInvoice = await updateInvoice(invoiceId, updateData);
        res.json(updatedInvoice);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de la facture.' });
    }
};

const deleteInvoiceController = async (req, res) => {
    const invoiceId = req.params.id;

    try {
        await deleteInvoice(invoiceId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de la facture.' });
    }
};

module.exports = {
    createInvoiceController,
    getInvoiceByIdController,
    getAllInvoicesController,
    updateInvoiceController,
    deleteInvoiceController,
};