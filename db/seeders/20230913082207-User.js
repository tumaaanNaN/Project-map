'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
     login: 'max@mail.ru',
     name: "Max",
     password: "123",
     createdAt: new Date(),
    updatedAt:new Date(),
    },
    {
      login: 'kirill@mail.ru',
      name: "Kirill",
      password: "123",
      createdAt: new Date(),
      updatedAt:new Date(),
     },
     {
      login: 'nina@mail.ru',
      name: "Nina",
      password: "123",
      createdAt: new Date(),
      updatedAt:new Date(),
     }
  ], {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Users', null, {});
  }
};