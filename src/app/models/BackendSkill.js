import Sequelize, { Model } from 'sequelize';

class BackendSkill extends Model {
  static init(sequelize) {
    super.init(
      {
        c_sharp: Sequelize.STRING,
        javascript: Sequelize.STRING,
        java: Sequelize.STRING,
        pyton: Sequelize.STRING,
        php: Sequelize.STRING,
        ruby: Sequelize.STRING,
        outro_back: Sequelize.STRING,
        profile_id: Sequelize.INTEGER,
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

export default BackendSkill;
