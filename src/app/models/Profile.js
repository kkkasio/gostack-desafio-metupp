import Sequelize, { Model } from 'sequelize';

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        frase: Sequelize.STRING,
        linkedin: Sequelize.STRING,
        sobre: Sequelize.STRING,
        foto: Sequelize.STRING,
        user_id: Sequelize.INTEGER,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
    this.hasOne(models.BackendSkill);
    this.hasOne(models.FrontendSkill);
  }
}

export default Profile;
