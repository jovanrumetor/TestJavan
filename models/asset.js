'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({family}) {
      // define association here
      this.belongsTo(family, {
        foreignKey: 'familyid'
      });
    }
  }
  asset.init({
    familyid: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    createdAt: {
      field: 'createdat',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updatedat',
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'asset',
  });
  return asset;
};