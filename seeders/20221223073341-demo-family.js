'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('family', [
      {
      name: 'Bani',
      gender: 'Male',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Budi',
      gender: 'Male',
      parent: 'Bani',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Nida',
      gender: 'Female',
      parent: 'Bani',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Andi',
      gender: 'Male',
      parent: 'Bani',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Sigit',
      gender: 'Male',
      parent: 'Bani',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Hari',
      gender: 'Male',
      parent: 'Budi',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Siti',
      gender: 'Female',
      parent: 'Budi',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Bila',
      gender: 'Female',
      parent: 'Nida',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Lesti',
      gender: 'Female',
      parent: 'Nida',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Diki',
      gender: 'Male',
      parent: 'Andi',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Doni',
      gender: 'Male',
      parent: 'Sigit',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Toni',
      gender: 'Male',
      parent: 'Sigit',
      createdAt: new Date(),
      updatedAt: new Date()
      }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('family', null, {});
  }
};
