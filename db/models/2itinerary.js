'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itinerary extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' })
    }
  }
  Itinerary.init({
    rating: DataTypes.INTEGER,
    point1: DataTypes.STRING,
    point2: DataTypes.STRING,
    name: DataTypes.STRING,
    length: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Itinerary',
  });
  return Itinerary;
};