const { Sequelize } = require('sequelize');
const { config } = require('./../config/config');
const setupModels = require('./../db/models');

const URI = config.dbUrl;
let sequelize;

if (config.env === 'test') {
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.test.sqlite',
    logging: false,
  });
} else {
  sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
  });
}

setupModels(sequelize);

module.exports = sequelize;
