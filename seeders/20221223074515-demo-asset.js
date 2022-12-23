'use strict';
const { Family } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('asset', [
      {
      familyId: '2',
      name: 'Samsung Universe 9',
      price: 2999,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '2',
      name: 'Samsung Galaxy Book',
      price: 2099,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '6',
      name: 'iPhone 9',
      price: 1050,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '7',
      name: 'iPhone X',
      price: 1450,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '3',
      name: 'Huawei P30',
      price: 2570,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '8',
      name: 'Samsung Universe 9',
      price: 2999,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '9',
      name: 'Huawei P30',
      price: 2570,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '9',
      name: 'iPhone X',
      price: 1450,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '4',
      name: 'Samsung Universe 9',
      price: 2999,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '10',
      name: 'Samsung Galaxy Book',
      price: 2099,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '5',
      name: 'Huawei P30',
      price: 2570,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      familyId: '11',
      name: 'iPhone X',
      price: 1450,
      createdAt: new Date(),
      updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('asset', null, {});
  }
};
