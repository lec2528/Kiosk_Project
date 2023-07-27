'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderCustomer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  orderCustomer.init(
    {
      state: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'orderCustomer',
    }
  );
  return orderCustomer;
};
