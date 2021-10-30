'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('WorkerSkills', [
      {
        workerId: 6,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 6,
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 6,
        skillId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 6,
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 6,
        skillId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 7,
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 7,
        skillId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 7,
        skillId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 7,
        skillId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 7,
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 8,
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 8,
        skillId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 8,
        skillId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 8,
        skillId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 8,
        skillId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 9,
        skillId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 9,
        skillId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 9,
        skillId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 9,
        skillId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 9,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 10,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 10,
        skillId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 10,
        skillId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 10,
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 10,
        skillId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 11,
        skillId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 11,
        skillId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 11,
        skillId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 11,
        skillId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 11,
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 12,
        skillId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 12,
        skillId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 12,
        skillId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 12,
        skillId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        workerId: 12,
        skillId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
