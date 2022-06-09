'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Merchant.hasMany(models.Product, {
        foreignKey: 'merchantId',
        as: 'product',
      });
      Merchant.belongsToMany(models.Merchant_Category, {
        through: 'merchant_category',
        as: 'category',
        foreignKey: 'mId',
      });
    }
  }
  Merchant.init(
    {
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.STRING,
      address: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Merchant',
    }
  );
  return Merchant;
};
