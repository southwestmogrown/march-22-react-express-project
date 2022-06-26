'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Channels', [
     {
      name: 'Test Channel1',
      serverId: 2
     },
     {
      name: 'Test Channel2',
      serverId: 1
     },
     {
      name: 'Test Channel3',
      serverId: 1
     },
     {
      name: 'Test Channel4',
      serverId: 2
     },
     {
      name: 'Test Channel5',
      serverId: 2
     },
     {
      name: 'Test Channel6',
      serverId: 3
     },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Channels', null, {});
  }
};
