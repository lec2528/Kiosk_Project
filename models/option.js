'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class options extends Model {
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
  options.init(
    {
      optionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      extraPrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shotPrice: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      hot: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      takeout: {
        allowNull: false,
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
      modelName: 'options',
    }
  );
  return options;
};
