const connectToMongoDB = require('./connectToMongoDB');
const to = require('./to');
const hashPassword = require('./hashPassword');
const validatePassword = require('./validatePassword');

module.exports = {
  connectToMongoDB,
  to,
  hashPassword,
  validatePassword,
};
