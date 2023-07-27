'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.option, {
        sourceKey: 'itemId',
        foreignKey: 'itemId',
      });
    }
  }
  items.init(
    {
      itemId: DataTypes.INTEGER,
      optionId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      type: DataTypes.ENUM('coffee', 'juice', 'food'),
    },
    {
      sequelize,
      modelName: 'items',
    }
  );
  return items;
};
