'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.items, {
        sourceKey: 'optionId',
        foreignKey: 'optionId',
      });
    }
  }
  option.init(
    {
      optionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      extraPrice: {
        type: DataTypes.INTEGER,
      },
      shotPrice: {
        type: DataTypes.INTEGER,
      },
      hot: {
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'option',
    }
  );
  return option;
};
