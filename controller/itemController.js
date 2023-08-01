const ItemService = require('../services/itemService');

class ItemController {
  itemService = new ItemService();

  getItem = async (req, res, next) => {
    const getItem = await this.itemService.getItem();

    res.status(200).json({
      result: getItem,
    });
  };
  typeByItem = async (req, res, next) => {
    try {
      const { type } = req.params;
      const typebyItem = await this.itemService.typebyItem(type);
      return res.status(200).json({
        typebyItem,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };
  addItem = async (req, res, next) => {
    try {
      const { name, price, amount, type } = req.body;
      const addItem = await this.itemService.addItem(name, price, amount, type);
      return res.status(200).json({
        message: '상품이 추가되었습니다.',
        addItem,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };

  setItem = async (req, res, next) => {
    try {
      const { itemId } = req.params;
      const { name, price, amount, type } = req.body;

      const setItemInfo = await this.itemService.setItem(itemId, name, price, amount, type);
      return res.status(200).json({
        message: '상품이 수정되었습니다.',
        setItemInfo: setItemInfo,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };

  deleteItem = async (req, res, next) => {
    try {
      const { itemId } = req.params;

      await this.itemService.deleteItem(itemId);
      res.status(200).json({
        message: '상품이 삭제되었습니다.',
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };
}
module.exports = ItemController;
