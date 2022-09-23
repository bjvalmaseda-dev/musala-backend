require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUrl: process.env.URL_DATABASE,
};

module.exports = { config };
