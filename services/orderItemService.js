const OrderItemRepository = require('../repositories/orderItemRepository');

class OrderItemService {
  orderItemRepository = new OrderItemRepository();
}

module.exports = OrderItemService;
