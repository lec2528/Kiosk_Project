const OrderItemService = require('../services/orderItemService');

class OrderItemController {
  orderItemService = new OrderItemService();
  orderItem = async (req, res, next) => {
    const { itemId } = req.params;
    const { state } = req.body;
    try {
      const orderItem = await this.orderItemService.orderItem(itemId, state);
      res.status(200).json({
        message: '발주내역이 추가되었습니다.',
        orderItem: orderItem,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };

  setOrderStatus = async (req, res, next) => {
    const { orderItemId } = req.params;
    const { state } = req.body;
    try {
      const setOrderState = await this.orderItemService.setOrderState(orderItemId, state);
      res.status(200).json({
        message: '발주 내역이 수정되었습니다.',
        setOrderState,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };
}
module.exports = OrderItemController;
