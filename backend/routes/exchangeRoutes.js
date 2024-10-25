const express = require('express');
const router = express.Router();
const { getCurrencies, createOrder } = require('..backend/controllers/exchangeController');

router.get('/currencies', getCurrencies);
router.post('/order', createOrder);

module.exports = router;
