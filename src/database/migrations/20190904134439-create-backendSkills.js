module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('backend_skills', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      c_sharp: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      javascript: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      java: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      pyton: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      php: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      ruby: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      outro_back: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      profile_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'profiles',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('backend_skills');
  },
};
