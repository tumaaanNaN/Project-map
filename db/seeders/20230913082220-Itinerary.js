'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Itineraries', [{
  rating: '5',
  point1: '55.75357453487968,37.62094149999997',
  point2: '55.734716013789836,37.60594260782075',
  city: 'Москва',
  name: 'Прогулка по Москве (Кремль-Новая Третьяковка)',
  length: '3',
  feedback: 'Отличный маршрут, удалось прокатиться по набережной и посмотреть здание Новой Третьяковки',
  user_id: 1,
  createdAt: new Date(),
  updatedAt:new Date(),

     },
     {
  rating: '4.7',
  point1: '55.79844160486778,49.10522733758439',
  point2: '55.780052330410456,49.13800111532455',
  city: 'Казань',
  name: 'Прогулка по Казани (Кул Шариф - Экият)',
  length: '3.7',
  feedback: 'Сам маршрут хороший, но учтите, что на территории Кремля нельзя передвигаться на велосипеде',
  user_id: 2,
  createdAt: new Date(),
  updatedAt:new Date(),
     },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Itineraries', null, {});
  }
};
