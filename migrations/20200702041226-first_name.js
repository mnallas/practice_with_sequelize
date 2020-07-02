"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("students", "fname", "first_name");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn("students", "first_name", "fname");
  },
};
