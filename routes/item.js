const express = require('express');
const router = express.Router();

const ItemController = require('../controller/itemController');
const itemController = new ItemController();

router.get('/', itemController.getItem);
router.get('/:type', itemController.typeByItem);
router.post('/', itemController.addItem);
router.put('/:itemId', itemController.setItem);
router.delete('/:itemId', itemController.deleteItem);

module.exports = router;
