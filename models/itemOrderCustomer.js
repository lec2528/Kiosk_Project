'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itemOrderCustomers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.items, {
        targetKey: 'itemId',
        foreignKey: 'itemId',
      });
      this.belongsTo(models.orderCustomer, {
        targetKey: 'orderCustomerId',
        foreignKey: 'orderCustomerId',
      });
    }
  }
  itemOrderCustomers.init(
    {
      itemId: DataTypes.INTEGER,
      orderCustomerId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'itemOrderCustomers',
    }
  );
  return itemOrderCustomers;
};
