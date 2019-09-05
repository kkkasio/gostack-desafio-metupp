require('dotenv/config');

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

module.exports = {
  dialect: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  define: {
    timestamps: true, // ativa timestamps
    underscored: true, // remove o padrão cammel case colocando underline
    underscoredAll: true, // remove o padrão cammel case para colunas e relacionamentos colocando underline
  },
};
