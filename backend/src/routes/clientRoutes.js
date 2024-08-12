const express = require('express');
const {createClient, getAllClient} = require('../controllers/clientController');

const router = express.Router();

router.post('/create', createClient);
router.get('/', getAllClient);

module.exports =router;

// http://localhost:5000/api/client/create