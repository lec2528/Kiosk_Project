const express = require('express');
const router = express.Router();
const itemRouter = require('./item');
const userRouter = require('./user');
const orderItemRouter = require('./orderItem');
const orderCustomerRouter = require('./orderCustomer');
const itemOrderCustomerRouter = require('./itemOrderCustomer');
const optionRouter = require('./option');

router.use('/item', itemRouter);
router.use('/user', userRouter);
router.use('/order', orderItemRouter);
router.use('/ordercustomer', orderCustomerRouter);
router.use('/itemOrderCustomer', itemOrderCustomerRouter);
router.use('/option', optionRouter);

module.exports = router;
