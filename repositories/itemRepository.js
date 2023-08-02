const { Op } = require('sequelize');
const { items, option } = require('../models');

class ItemRepository {
  getItem = async () => {
    const getByItem = await items.findAll({});
    return getByItem;
  };

  findItem = async (itemId) => {
    return await items.findOne({ where: { itemId } });
  };
  typeByItem = async (type) => {
    const typeByItem = await items.findAll({ where: { type: { [Op.like]: type } } });
    return typeByItem;
  };
  isExistOption = async (optionId) => {
    await option.findAll({ where: { optionId } });
  };
  addItem = async (name, price, amount, type) => {
    const addItem = await items.create({ name, price, amount, type });
    return addItem;
  };
  setItem = async (itemId, name, price, amount, type) => {
    await items.update({ name, price, amount, type }, { where: { itemId } });
    return await items.findByPk(itemId);
  };
  findByamount = async (amount) => {
    await items.findAll({ where: amount });
  };
  deletItem = async (itemId) => {
    await items.destroy({ where: { itemId } });
  };
}

module.exports = ItemRepository;
