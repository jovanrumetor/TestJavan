'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Asset}) {
      // define association here
      this.hasMany(Asset, {
        foreignKey: 'familyId'
      });
      
    }
  }
  Family.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    parent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Family',
  });
  return Family;
};