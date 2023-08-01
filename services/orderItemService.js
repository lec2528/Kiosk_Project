const ErrorHandle = require('../apiErrorHandle');
const OrderItemRepository = require('../repositories/orderItemRepository');

class OrderItemService {
  orderItemRepository = new OrderItemRepository();

  orderItem = async (itemId, state) => {
    const isExistItem = await this.orderItemRepository.isExistItem(itemId);
    console.log(isExistItem);
    if (!isExistItem) {
      throw new ErrorHandle('존재하지 않는 상품내역입니다.', 400);
    }
    return await this.orderItemRepository.orderItem(itemId, state);
  };
  setOrderState = async (orderItemId, state) => {
    const findOrderstate = await this.orderItemRepository.findOrderstate(orderItemId);
    console.log(findOrderstate);
    if (!findOrderstate) {
      throw new ErrorHandle('존재하지 않는 발주 내역입니다.', 400);
    }
    await this.orderItemRepository.setOrderstate(orderItemId, state);

    return await this.orderItemRepository.findOrderstate(orderItemId);
  };
}
module.exports = OrderItemService;
