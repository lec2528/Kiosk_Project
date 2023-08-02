const ErrorHandle = require('../apiErrorHandle');
const OrderCustomerRepository = require('../repositories/orderCustomerRepository');

class OrderCustomerService {
  orderCustomerRepository = new OrderCustomerRepository();
  orderStateReturnId = async () => {
    return await this.orderCustomerRepository.orderStateReturnId();
  };
  orderComplete = async (itemId, orderCustomerId) => {
    const ComplettOrder = await this.orderCustomerRepository.orderComplete(itemId, orderCustomerId);
    return ComplettOrder;
  };
  orderCancel = async (itemId, orderCustomerId) => {
    if (state === true) {
      throw new ErrorHandle('완료된 주문은 취소할 수 없습니다', 402);
    }
    await this.orderCustomerRepository.orderCancel(itemId, orderCustomerId);
  };
}
module.exports = OrderCustomerService;
