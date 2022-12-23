'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({asset}) {
      // define association here
      this.hasMany(asset, {
        foreignKey: 'familyid'
      });
      
    }
  }
  family.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    parent: DataTypes.STRING, 
    createdAt: {
      field: 'createdat',
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: 'updatedat',
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: 'family',
  });
  return family;
};