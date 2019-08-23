module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true, // remove o padrão cammel case
    underscoredAll: true, // remove o padrão cammel case para colunas e relacionamentos
  },
};
