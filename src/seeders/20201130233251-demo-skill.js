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
    return queryInterface.bulkInsert('Skills', [
      {
        name: 'HTML',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PHP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'C++',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Java',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'CSS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kotlin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Docker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'UI/UX Design',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Laravel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'React-Native',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'VS Code',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'RestAPI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'GRAPHQL',
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
