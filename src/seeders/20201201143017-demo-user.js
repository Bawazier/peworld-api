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
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Candace Goyette',
        email: 'example12@gmail.com',
        password: '12345678',
        phoneNumber: '45912122765',
        instagram: 'http://emery.biz',
        github: 'https://sammie.org',
        linkedin: 'http://baby.org',
        jobTitle: 'Investor Division Administrator',
        address: '405 Allan Union',
        company: 'Mitchell, Bailey and Parisian',
        bio: 'Itaque aut reiciendis magni illum eveniet sint provident ipsum. Facilis et ut sequi et odit voluptates voluptatem aut. Qui cupiditate et. Illum dolore sunt sed distinctio et minus est. Id molestiae voluptates illo.',
        photo: 'uploads/demo-recruiter-1.jpg',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Gordon Borer',
        email: 'example11@gmail.com',
        password: '12345678',
        phoneNumber: '39544983464',
        instagram: 'http://federico.net',
        github: 'http://elda.info',
        linkedin: 'http://lincoln.name',
        jobTitle: 'Forward Interactions Developer',
        address: '6654 Gusikowski Streets',
        company: 'Weber - Konopelski',
        bio: 'Et ut animi repudiandae numquam cum inventore. Dicta nostrum qui molestias ut harum ipsa. Error mollitia eius ex et. Consequatur est enim sed pariatur sint itaque. Deleniti eveniet ducimus amet adipisci fuga qui praesentium. Et sapiente et doloremque quo qui ut quis.',
        photo: 'uploads/demo-recruiter-2.jpg',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Natalie Goodwin',
        email: 'example10@gmail.com',
        password: '12345678',
        phoneNumber: '50871758211',
        instagram: 'https://herta.info',
        github: 'https://joan.org',
        linkedin: 'http://berneice.name',
        jobTitle: 'Investor Tactics Consultant',
        address: '993 Deontae Parkways',
        company: 'Hane Inc',
        bio: 'Occaecati libero ut cumque molestias. Distinctio et corporis corrupti ut et necessitatibus quo in. Aut magni consectetur eos sit facere eveniet dolore sunt. Vel est ad placeat itaque quod.',
        photo: 'uploads/demo-recruiter-3.jpg',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel Steuber',
        email: 'example9@gmail.com',
        password: '12345678',
        phoneNumber: '16936370453',
        instagram: 'http://kennith.name',
        github: 'http://jarrell.name',
        linkedin: 'http://janae.name',
        jobTitle: 'Investor Infrastructure Orchestrator',
        address: '54115 Kunde Cliff',
        company: 'Feil, Dickinson and Kassulke',
        bio: 'Eos consequatur ea dolorem voluptas esse ut. Nam atque et delectus fugiat. Ab earum reprehenderit sit nulla qui. Laudantium quasi architecto et tempora magni qui vero aut earum. Quo asperiores dolorem esse inventore vel voluptate ipsum.',
        photo: 'uploads/demo-recruiter-4.jpg',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dominick Stroman',
        email: 'example8@gmail.com',
        password: '12345678',
        phoneNumber: '5418376551',
        instagram: 'https://savanah.biz',
        github: 'http://justyn.info',
        linkedin: 'http://cristal.info',
        jobTitle: 'International Integration Architect',
        address: '6691 Veda Falls',
        company: 'Russel, Skiles and Bailey',
        bio: 'Asperiores excepturi inventore enim facilis. Deleniti doloremque aperiam voluptatem vero et atque quas. Quaerat non quas earum consequatur omnis. Tenetur ipsam nihil maxime necessitatibus. Voluptatibus dignissimos consequatur nihil voluptas hic.',
        photo: 'uploads/demo-recruiter-5.jpg',
        roleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Renee Sipes',
        email: 'example1@gmail.com',
        password: '12345678',
        phoneNumber: '6850392849',
        jobTitle: 'Central Solutions Associate',
        company: 'Cummings - Herzog',
        address: '6735 Hauck Road',
        instagram: 'http://robyn.org',
        github: 'http://antonia.biz',
        linkedin: 'https://laverna.net',
        bio: 'Beatae asperiores delectus sit. Molestiae ad adipisci similique sit. Culpa nostrum corrupti enim et ducimus sed deserunt inventore praesentium. Nihil sed magnam nulla ut voluptas exercitationem sunt at et.',
        photo: 'uploads/demo-worker-1.jpg',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Renee Sipes',
        email: 'example2@gmail.com',
        password: '12345678',
        phoneNumber: '6850392849',
        jobTitle: 'Central Solutions Associate',
        company: 'Cummings - Herzog',
        address: '6735 Hauck Road',
        instagram: 'http://robyn.org',
        github: 'http://antonia.biz',
        linkedin: 'https://laverna.net',
        bio: 'Beatae asperiores delectus sit. Molestiae ad adipisci similique sit. Culpa nostrum corrupti enim et ducimus sed deserunt inventore praesentium. Nihil sed magnam nulla ut voluptas exercitationem sunt at et.',
        photo: 'uploads/demo-worker-2.jpg',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sylvia Dicki',
        email: 'example3@gmail.com',
        password: '12345678',
        phoneNumber: '41459690156',
        jobTitle: 'District Identity Administrator',
        company: 'Parisian, Lubowitz and Smith',
        address: '2884 Wintheiser Court',
        instagram: 'http://zoe.com',
        github: 'https://tony.com',
        linkedin: 'https://abe.biz',
        bio: 'Neque quidem voluptatem praesentium quas id officia incidunt atque velit. Quae et est sint libero voluptas aliquam. Dolores earum velit. Ad quaerat expedita facilis esse quidem. Aliquam eius et similique explicabo in commodi id omnis quaerat. Provident ex atque eveniet alias voluptas cumque.',
        photo: 'uploads/demo-worker-3.jpg',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Julia Kassulke',
        email: 'example4@gmail.com',
        password: '12345678',
        phoneNumber: '46819283573',
        jobTitle: 'Legacy Optimization Producer',
        company: 'Rosenbaum and Sons',
        address: '790 Kiera Row',
        instagram: 'https://ashton.org',
        github: 'http://carli.org',
        linkedin: 'http://yesenia.info',
        bio: 'Sed consequatur nostrum consequatur quo odio reprehenderit quia tempora. Veritatis ipsa animi quis voluptas omnis voluptatem. Vero placeat dolor minima doloremque neque pariatur. Ut iure nostrum id sit est iusto iste. Quo neque quam quos quia voluptatum.',
        photo: 'uploads/demo-worker-4.jpg',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jenny Morissette',
        email: 'example5@gmail.com',
        password: '12345678',
        phoneNumber: '60723361414',
        jobTitle: 'Legacy Web Developer',
        company: 'Wolf Group',
        address: '14529 Beahan Light',
        instagram: 'http://doris.biz',
        github: 'http://alene.info',
        linkedin: 'https://laney.com',
        bio: 'Ullam est nihil aliquam id. Sed rerum quia. Ipsam et voluptate architecto veniam voluptatem libero est quis excepturi. Nesciunt quaerat voluptas est illum sint sunt omnis. Et illo totam eum.',
        photo: 'uploads/demo-worker-5.jpg',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leticia Abshire',
        email: 'example6@gmail.com',
        password: '12345678',
        phoneNumber: '71692523818',
        jobTitle: 'Corporate Brand Designer',
        company: 'Thiel and Sons',
        address: '5361 Doyle Trail',
        instagram: 'http://baby.net',
        github: 'http://rosetta.info',
        linkedin: 'https://gladyce.biz',
        bio: 'Itaque occaecati esse eveniet in ex numquam voluptatum molestiae odit. Molestiae et et est libero quis. Et sed pariatur explicabo culpa eos perferendis sint ipsa. Delectus voluptate magnam voluptatem maxime consectetur sed temporibus. Omnis itaque voluptas natus in sequi inventore voluptate at cumque. Nostrum totam perferendis praesentium dignissimos quae.',
        photo: 'uploads/demo-worker-6.jpg',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Andre Hansen',
        email: 'example7@gmail.com',
        password: '12345678',
        phoneNumber: '68301348799',
        jobTitle: 'Legacy Configuration Developer',
        company: 'Thiel, Langworth and Schuster',
        address: '86901 Koelpin Tunnel',
        instagram: 'https://ephraim.info',
        github: 'http://holly.net',
        linkedin: 'https://troy.com',
        bio: 'Tenetur ratione impedit quia temporibus quam. Suscipit et repellendus assumenda. Eum aut non optio consectetur eos qui quis tempora. Fugit sit iste iusto repudiandae. Suscipit quibusdam minima ab aliquam. Nihil aperiam quod.',
        photo: 'uploads/demo-worker-7.jpg',
        roleId: 2,
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
