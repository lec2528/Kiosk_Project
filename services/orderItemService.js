const ErrorHandle = require('../apiErrorHandle');
const OrderItemRepository = require('../repositories/orderItemRepository');
const state = {
  ORDERED: 0,
  PENDING: 1,
  COMPLETED: 2,
  CANCELED: 3,
};
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
    const orderAmount = await this.orderItemRepository.checkAmount();
    console.log(orderAmount);
    if (!findOrderstate) {
      throw new ErrorHandle('존재하지 않는 발주 내역입니다.', 400);
    }
    if (findOrderstate.amount) await this.orderItemRepository.setOrderstate(orderItemId, state);
    if (amount !== orderAmount.amout) {
      await this.orderItemRepository.resetState();
      throw new ErrorHandle('현재 수량이 발주 수량보다 적어 발주 취소가 불가능 합니다.', 402);
    }
    return await this.orderItemRepository.findOrderstate(orderItemId);
  };
}
module.exports = OrderItemService;
