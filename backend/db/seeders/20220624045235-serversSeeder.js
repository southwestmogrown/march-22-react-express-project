'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Servers', [
    {
     name: 'Demo server',
     ownerId: 1,
     icon: null
   },
   {
    name: 'Demo Server 2',
    ownerId: 1,
    icon: null
   },
   {
    name: 'Third time\'s a charm',
    ownerId: 1,
    icon: null
   }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Servers', null, {});
  }
};
