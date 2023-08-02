const { orderCustomer, sequelize, orderItem, itemOrderCustomer } = require('../models');

class OrderCustomerRepository {
  orderStateReturnId = async () => {
    return await orderCustomer.create({});
  };

  orderComplete = async (itemId, orderCustomerId, orderItemId) => {
    const t = sequelize.Transaction();
    try {
      const orderItemData = await orderItem.findByPk(orderItemId, { transaction: t });
      const completeAmount = orderItemData.amount - 1;

      await orderItem.update({ amount: completeAmount }, { where: { orderItemId } }, { Transaction: t });

      await orderCustomer.update({ state: true }, { where: { orderCustomerId } }, { Transaction: t });

      await await t.commit();
    } catch (err) {
      await t.rollback();
    }
  };
  orderCancel = async (orderCustomerId, itemOrderCustomerId) => {
    const t = sequelize.Transaction();
    try {
      if (state === true) {
        await t.rollback();
      }
      await itemOrderCustomer.destroy({ where: { itemOrderCustomerId } }, { Transaction: t });

      await orderCustomer.destroy({ where: { orderCustomerId } }, { Transaction: t });

      await await t.commit();
    } catch (err) {
      await t.rollback();
    }
  };
}
module.exports = OrderCustomerRepository;
