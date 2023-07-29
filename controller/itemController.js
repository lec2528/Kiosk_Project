const ItemService = require('../services/itemService');

class ItemController {
  itemService = new ItemService();

  getItem = async (req, res, next) => {
    const getItem = await this.itemService.getItem();

    res.status(200).json({
      result: getItem,
    });
  };
  typebyItem = async (req, res, next) => {
    const { type } = req.params;
    const typebyItem = await this.itemService.typebyItem(type);
  };
  addItem = async (req, res, next) => {
    const { name, price, amount, type } = req.body;
    console.log(type);
    await this.itemService.addItem(name, price, amount, type);
    res.status(200).json({
      message: '상품이 추가되었습니다.',
    });
  };

  setItem = async (req, res, next) => {
    const { itemId, optionId } = req.params;
    const { name, price, amount, type } = req.body;

    const setItemInfo = await this.itemService.setItem(itemId, optionId, name, price, amount, type);
    res.status(200).json({
      message: '상품이 수정되었습니다.',
      setItemInfo,
    });
  };

  deleteItem = async (req, res, next) => {
    const { itemId } = req.params;

    await this.itemService.deleteItem(itemId);
  };
}
module.exports = ItemController;
