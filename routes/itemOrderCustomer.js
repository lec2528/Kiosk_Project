const express = require('express');
const router = express.Router();

const ItemOrderCustomerController = require('../controller/itemOrderCustomerController');
const itemOrderCustomerController = new ItemOrderCustomerController();

router.post('/:itemId/:orderCustomerId', itemOrderCustomerController.totalPrice);

module.exports = router;
