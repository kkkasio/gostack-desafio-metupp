module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('frontend_skills', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      bootstrap: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      angular: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      react: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      vue: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      jquery: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: [1, 2, 3, 4, 5],
      },
      outro_front: {
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
    return queryInterface.dropTable('frontend_skills');
  },
};
