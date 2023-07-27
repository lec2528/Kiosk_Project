const express = require('express');
const router = express.Router();
const itemRouter = require('./item');
const userRouter = require('./user');

router.use('/', itemRouter);
router.use('/user', userRouter);

module.exports = router;
