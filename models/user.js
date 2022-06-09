'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.UserAddress, {
        foreignKey: 'address',
        as: 'UserAddress',
      });
      User.hasMany(models.Card, {
        foreignKey: 'cardId',
        as: 'Card',
      });
      User.hasMany(models.Order, {
        foreignKey: 'orderId',
        as: 'Card',
      });
      User.belongsTo(models.Cart, {
        foreignKey: 'userId',
        as: 'Cart',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.INTEGER,
      cardId: DataTypes.INTEGER,
      cartId: DataTypes.INTEGER,
      mobile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
