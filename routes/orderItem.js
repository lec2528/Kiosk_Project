const express = require('express');
const router = express.Router();

const OrderItemController = require('../controller/orderItemController');
const orderItemController = new OrderItemController();

router.post('/:itemId', orderItemController.orderItem);
router.put('/:orderItemId', orderItemController.setOrderStatus);
// router.delete('/:orderitemId', orderItemController.deleteOrderItem);
module.exports = router;
