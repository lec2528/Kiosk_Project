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
  typebyItem = async (type) => {
    const itemType = await this.itemRepository.typeByItem(type);

    if (!itemType) {
      throw new ErrorHandle('해당하는 타입의 아이템이 존재하지 않습니다.', 404);
    }
    return itemType;
  };

  addItem = async (name, price, amount, type) => {
    const types = ['coffee', 'ade', 'icecream', 'juice', 'dessert', 'food'];
    const createItem = await this.itemRepository.addItem(name, price, amount, type);
    if (!name || !price) {
      throw new ErrorHandle('이름 또는 가격을 입력해주세요', 404);
    }
    if (!type || !types.includes(type.toLowerCase())) {
      throw new ErrorHandle('알맞은 타입을 입력해주세요', 404);
    }
    return createItem;
  };

  setItem = async (itemId, name, price, amount, type) => {
    const findItem = await this.itemRepository.findItem(itemId);

    const setItem = await this.itemRepository.setItem(itemId, name, price, amount, type);
    if (!findItem) {
      throw new ErrorHandle('수정할 상품이 존재하지 않습니다.', 404);
    }
    if (setItem.price < 0) {
      throw new ErrorHandle('가격은 0보다 커야합니다.', 404);
    }
    return setItem;
  };

  deleteItem = async (itemId) => {
    const findItem = await this.itemRepository.findItem(itemId);
    const item = await this.itemRepository.deletItem(itemId);
    if (!findItem) {
      throw new ErrorHandle('이미 삭제되었거나 존재하지 않습니다.', 404);
    }
    if (item.amount < 0) {
      throw new ErrorHandle('현재 수량이 남아있습니다. 삭제하시겠습니까?', 200);
    }
    return item;
  };
}

module.exports = ItemService;
