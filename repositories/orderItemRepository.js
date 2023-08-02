const { orderItem, items, sequelize } = require('../models');

class OrderItemRepository {
  isExistItem = async (itemId) => {
    return await items.findByPk(itemId);
  };
  findOrderstate = async (orderItemId) => {
    return await orderItem.findByPk(orderItemId);
  };

  orderItem = async (itemId, state) => {
    return await orderItem.create({ itemId, state });
  };

  checkAmount = async (itemid) => {
    return await items.findByPk({ where: { itemid } });
  };
  setOrderstate = async (orderItemId, state, amount) => {
    const t = await sequelize.transaction();

    try {
      const orderItemData = await orderItem.findByPk(orderItemId, { transaction: t });
      const newAmount = orderItemData.amount + 1;
      if (state === 2) {
        await orderItem.update({ amount: newAmount }, { where: { orderItemId } }, { transaction: t });
      }
      await t.commit();
      return await orderItem.update({ state }, { where: { orderItemId } });
    } catch (err) {
      await t.rollback();
    }
  };
}
module.exports = OrderItemRepository;
