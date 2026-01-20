'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        airportName : "Vadodara International Airport",
        address : "Civil Aerodrome, Harni Rd, Harni, Vadodara, Gujarat 390022",
        cityId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airportName : "Sardar Vallabhbhai Patel International Airport",
        address : "Hansol, Ahmedabad, Gujarat 380003",
        cityId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airportName : "Surat International Airport",
        address : "Surat - Dumas Rd, Gaviyer, Surat, Gujarat 395007",
        cityId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        airportName : "Devi Ahilyabai Holkar International Airport",
        address : "Indore, Madhya Pradesh 452005",
        cityId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
