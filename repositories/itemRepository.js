const { items } = require('../models');

class ItemRepository {
  getItem = async () => {
    const getByItem = await items.findAll({});
    return getByItem;
  };
  addItem = async (name, price, amount, type) => {
    // if (amount) {
    //   return (amount += 1);
    // }
    await items.create({ name, price, amount, type });
  };
  setItem = async (name, price, amount, type) => {
    await items.update({ name, price, amount, type }, { where: { itemId } });
  };
  deletItem = async (itemId) => {
    await items.destroy({ where: { itemId } });
  };
}

module.exports = ItemRepository;
