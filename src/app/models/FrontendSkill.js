import Sequelize, { Model } from 'sequelize';

class FrontendSkill extends Model {
  static init(sequelize) {
    super.init(
      {
        bootstrap: Sequelize.STRING,
        angular: Sequelize.STRING,
        react: Sequelize.STRING,
        vue: Sequelize.STRING,
        jquery: Sequelize.STRING,
        outro_front: Sequelize.STRING,
        profile_id: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Profile, { foreignKey: 'profile_id' });
  }
}

export default FrontendSkill;
