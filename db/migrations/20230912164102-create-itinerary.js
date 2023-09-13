'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Itineraries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.STRING
      },
      point1: {
        type: Sequelize.STRING
      },
      point2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.STRING
      },
      feedback: {
        type: Sequelize.TEXT
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id', 
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Itineraries');
  }
};