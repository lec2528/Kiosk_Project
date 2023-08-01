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
      this.hasMany(models.orderItem, {
        sourceKey: 'itemId',
        foreignKey: 'itemId',
      });
      this.hasOne(models.itemOrderCustomer, {
        sourceKey: 'itemId',
        foreignKey: 'itemId',
      });
    }
  }
  items.init(
    {
      itemId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      optionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      amount: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      type: {
        allowNull: false,
        type: DataTypes.ENUM('coffee', 'juice', 'food'),
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: 'items',
    }
  );
  return items;
};
