"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("students", "last_name", {
      type: Sequelize.STRING,
    });

    await queryInterface.sequelize.query(
      `UPDATE students SET last_name = "Doe";`
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("students", "last_name");
  },
};
