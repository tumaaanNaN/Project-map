'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Itinerary }) {
      this.hasMany( Itinerary, { foreignKey: 'user_id' })
    }
  }
  User.init({
    login: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

// npx sequelize-cli model:generate --name Itinerary --attributes rating:integer,point1:string,point2:string,name:string,length:integer,user_id:integer
// ['55.752446', '37.599596']


// npx sequelize-cli model:generate --name Itinerary --attributes rating:integer,point1:string,point2:string,name:string,length:integer,user_id:integer

//json.stringify когда записываем в бд
//json.parse - когда забираем из 


