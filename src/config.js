const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  ENVIROMENT: process.env.ENV || 'dev',
  API_URL: process.env.API_URL || 'https://vehicle-api-test.herokuapp.com/api',
};
