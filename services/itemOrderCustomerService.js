const ItemOrderCustomerRepository = require('../repositories/itemOrderCustomerRepository');

class ItemOrderCustomerService {
  itemOrderCustomerRepository = new ItemOrderCustomerRepository();
  totalPrice = async (itemId, orderCustomerId) => {
    return await this.itemOrderCustomerRepository.totalPrice(itemId, orderCustomerId);
  };
}

module.exports = ItemOrderCustomerService;
