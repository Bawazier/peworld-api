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
        skillId: 1
      },
      {
        workerId: 6,
        skillId: 3
      },
      {
        workerId: 6,
        skillId: 14
      },
      {
        workerId: 6,
        skillId: 2
      },
      {
        workerId: 6,
        skillId: 9
      },
      {
        workerId: 7,
        skillId: 3
      },
      {
        workerId: 7,
        skillId: 15
      },
      {
        workerId: 7,
        skillId: 6
      },
      {
        workerId: 7,
        skillId: 5
      },
      {
        workerId: 7,
        skillId: 4
      },
      {
        workerId: 8,
        skillId: 4
      },
      {
        workerId: 8,
        skillId: 7
      },
      {
        workerId: 8,
        skillId: 9
      },
      {
        workerId: 8,
        skillId: 10
      },
      {
        workerId: 8,
        skillId: 11
      },
      {
        workerId: 9,
        skillId: 11
      },
      {
        workerId: 9,
        skillId: 14
      },
      {
        workerId: 9,
        skillId: 5
      },
      {
        workerId: 9,
        skillId: 2
      },
      {
        workerId: 9,
        skillId: 1
      },
      {
        workerId: 10,
        skillId: 1
      },
      {
        workerId: 10,
        skillId: 15
      },
      {
        workerId: 10,
        skillId: 13
      },
      {
        workerId: 10,
        skillId: 3
      },
      {
        workerId: 10,
        skillId: 7
      },
      {
        workerId: 11,
        skillId: 8
      },
      {
        workerId: 11,
        skillId: 14
      },
      {
        workerId: 11,
        skillId: 12
      },
      {
        workerId: 11,
        skillId: 3
      },
      {
        workerId: 11,
        skillId: 4
      },
      {
        workerId: 12,
        skillId: 10
      },
      {
        workerId: 12,
        skillId: 14
      },
      {
        workerId: 12,
        skillId: 15
      },
      {
        workerId: 12,
        skillId: 1
      },
      {
        workerId: 12,
        skillId: 4
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
