require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST, // '192.168.99.100',
  username: process.env.DB_USER, // 'postgres',
  password: process.env.DB_PASS, // 'docker',
  database: process.env.DB_NAME, // 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
