const express = require('express');
const router = express.Router();

const OptionController = require('../controller/optionController');
const optionController = new OptionController();

router.post('/', optionController.createOption);
module.exports = router;
