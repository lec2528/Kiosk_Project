"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  option.init(
    {
      optionId: DataTypes.INTEGER,
      extraPrice: DataTypes.INTEGER,
      shotPrice: DataTypes.INTEGER,
      hot: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "option",
    }
  );
  return option;
};
