const { itemOrderCustomer, items } = require('../models');

class ItemOrderCustomerRepository {
  totalPrice = async (itemId, orderCustomerId) => {
    const orderItems = await items.findAll({ where: { itemId } });
    const totalPrice = 0;
    for (const orderItem of orderItems) {
      totalPrice += orderItem.price * orderItem.amount;
    }
    return totalPrice;
  };
}
module.exports = ItemOrderCustomerRepository;
