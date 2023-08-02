const express = require('express');
const router = express.Router();

const OrderCustomerController = require('../controller/orderCustomerController');
const orderCustomerController = new OrderCustomerController();

router.post('/', orderCustomerController.orderStateReturnId);
router.put('/:itemId/:orderCustomerId', orderCustomerController.orderComplete);
router.delete('/:itemId/:orderCustomerId', orderCustomerController.orderCancel);

module.exports = router;
