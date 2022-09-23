const { config } = require('./../config/config');

const URI = config.dbUrl;

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  test: {
    database: 'test',
    dialect: 'sqlite',
    storage: 'database.test.sqlite',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
