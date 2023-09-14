"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Itinerary, { foreignKey: "routerId" });
    }
  }
  Info.init(
    {
      rating: DataTypes.STRING,
      feedback: DataTypes.STRING,
      routerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Info",
    }
  );
  return Info;
};
