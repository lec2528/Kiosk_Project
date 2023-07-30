const express = require('express');
const router = express.Router();
const itemRouter = require('./item');
const userRouter = require('./user');
const orderItemRouter = require('./orderItem');

router.use('/item', itemRouter);
router.use('/user', userRouter);
router.use('/orderItem', orderItemRouter);

module.exports = router;
