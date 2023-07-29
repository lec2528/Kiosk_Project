const ItemRepository = require('../repositories/itemRepository');
const ErrorHandle = require('../apiErrorHandle');
class ItemService {
  itemRepository = new ItemRepository();

  getItem = async () => {
    const isExistItem = await this.itemRepository.getItem();
    if (!isExistItem) {
      throw new ErrorHandle('조회 할 상품이 없습니다.', 404);
    }
    return isExistItem;
  };

  addItem = async (name, price, amount, type) => {
    const createItem = await this.itemRepository.addItem(name, price, amount, type);
    if ((!type == 'coffee') | (!type == 'juice') | (!type == 'food')) {
      throw new ErrorHandle('알맞은 타입을 입력해주세요', 404);
    }
    return createItem;
  };

  setItem = async (itemId, name, price, amount, type) => {
    await this.itemRepository.setItem(itemId, name, price, amount, type);
  };

  deletItem = async (itemId) => {
    await this.itemRepository.deletItem(itemId);
  };
}

module.exports = ItemService;
