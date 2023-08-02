const ItemOrderCustomerService = require('../services/itemOrderCustomerService');

class ItemOrderCustomerController {
  itemOrderCustomerService = new ItemOrderCustomerService();

  totalPrice = async (req, res, next) => {
    try {
      const { itemId, orderCustomerId } = req.params;
      const totalPrice = await this.itemOrderCustomerService.totalPrice(itemId, orderCustomerId);
      res.status(200).json({
        totalPrice: totalPrice,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };
}

module.exports = ItemOrderCustomerController;
