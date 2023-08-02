const OrderCustomerService = require('../services/orderCustomerService');

class OrderCustomerController {
  orderCustomerService = new OrderCustomerService();
  orderStateReturnId = async (req, res, next) => {
    const orderCustomerId = await this.orderCustomerService.orderStateReturnId();
    res.status(200).json({
      orderCustomerId: orderCustomerId,
    });
  };
  orderComplete = async (req, res, next) => {
    try {
      const { itemId, orderCustomerId } = req.params;
      const CompletOrder = await this.orderCustomerService.orderComplete(itemId, orderCustomerId);
      res.status(200).json({
        message: '주문이 완료되었습니다.',
        CompletOrder: CompletOrder,
      });
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };
  orderCancel = async (req, res, next) => {
    try {
      const { itemId, orderCustomerId } = req.params;
      await this.orderCustomerService.orderCancel(itemId, orderCustomerId);
    } catch (err) {
      console.log(err);
      return res.status(err.status || 500).json({ message: err.message });
    }
  };
}
module.exports = OrderCustomerController;
