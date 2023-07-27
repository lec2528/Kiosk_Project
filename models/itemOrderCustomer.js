'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itemOrderCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  itemOrderCustomer.init(
    {
      itemId: DataTypes.INTEGER,
      orderCustomerId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'itemOrderCustomer',
    }
  );
  return itemOrderCustomer;
};
