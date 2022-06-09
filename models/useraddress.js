'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserAddress.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  UserAddress.init(
    {
      userId: DataTypes.INTEGER,
      useraddress: DataTypes.STRING,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      state: DataTypes.STRING,
      country: DataTypes.STRING,
      pincode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'UserAddress',
    }
  );
  return UserAddress;
};
