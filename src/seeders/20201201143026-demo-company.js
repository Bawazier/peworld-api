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
    return queryInterface.bulkInsert('Companies', [
      {
        name: 'Mitchell, Bailey and Parisian',
        field: '',
        city: 'Allan Union',
        photo: 'demo-recruiter-1.jpg',
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Weber - Konopelski',
        field: '',
        city: 'Gusikowski Streets',
        photo: 'demo-recruiter-2.jpg',
        authorId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hane Inc',
        field: '',
        city: 'Deontae Parkways',
        photo: 'demo-recruiter-3.jpg',
        authorId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Feil, Dickinson and Kassulke',
        field: '',
        city: 'Kunde Cliff',
        photo: 'demo-recruiter-4.jpg',
        authorId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Russel, Skiles and Bailey',
        field: '',
        city: 'Veda Falls',
        photo: 'demo-recruiter-5.jpg',
        authorId: 5,
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
