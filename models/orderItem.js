'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_item extends Model {
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
    }
  }
  order_item.init(
    {
      itemId: { allowNull: false, type: DataTypes.INTEGER },
      orderItemId: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
      amount: DataTypes.INTEGER,
      state: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'orderItem',
    }
  );
  return order_item;
};
