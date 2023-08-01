const ItemRepository = require('../repositories/itemRepository');
const ErrorHandle = require('../apiErrorHandle');

const types = { COFFEE: 'coffee', ADE: 'ade', ICECREAM: 'icecream', JUICE: 'juice', DESSERT: 'dessert', FOOD: 'food' };

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

    if (!types.length === 0) {
      throw new ErrorHandle('해당하는 타입의 아이템이 존재하지 않습니다.', 404);
    }
    return itemType;
  };

  addItem = async (name, price, amount, type) => {
    if (!name || !price) {
      throw new ErrorHandle('이름 또는 가격을 입력해주세요', 404);
    }
    if (!types.length === types.value || !type.toLowerCase() in types) {
      throw new ErrorHandle('알맞은 타입을 입력해주세요', 404);
    }
    return await this.itemRepository.addItem(name, price, amount, type);
  };

  setItem = async (itemId, name, price, amount, type) => {
    const findItem = await this.itemRepository.findItem(itemId);
    if (!findItem) {
      throw new ErrorHandle('수정할 상품이 존재하지 않습니다.', 404);
    }
    if (!name) {
      throw new ErrorHandle('이름을 입력해주세요', 404);
    }

    if (price < 0) {
      throw new ErrorHandle('가격은 0보다 커야합니다.', 404);
    }

    const setItem = await this.itemRepository.setItem(itemId, name, price, amount, type);
    return setItem;
  };

  deleteItem = async (itemId) => {
    const findItem = await this.itemRepository.findItem(itemId);
    console.log(findItem);

    if (!itemId) {
      throw new ErrorHandle('이미 삭제되었거나 존재하지 않습니다.', 404);
    }
    if (findItem.amount > 0) {
      throw new ErrorHandle('현재 수량이 남아있습니다. 삭제하시겠습니까?', 200);
    }
    if (findItem.amount === 0) {
      const item = await this.itemRepository.deletItem(itemId);
      return item;
    }
  };
}

module.exports = ItemService;
