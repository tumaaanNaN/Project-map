"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Infos",
      [
        {
          rating: '4.7',
          feedback: 'good router',
          routerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: '4.2',
          feedback: 'nice!',
          routerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: '4',
          feedback: 'good router2',
          routerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating: '5',
          feedback: 'nice!2',
          routerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
