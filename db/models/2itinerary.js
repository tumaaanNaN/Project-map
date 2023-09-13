const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Itinerary extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Itinerary.init({
    rating: DataTypes.STRING,
    point1: DataTypes.STRING,
    point2: DataTypes.STRING,
    city: DataTypes.STRING,
    name: DataTypes.STRING,
    length: DataTypes.STRING,
    feedback: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Itinerary',
  });
  return Itinerary;
};
