/* 
The connectToMongoDB method is intended to do exactly what it sounds like, connect to a mongoDB database.
@param {String} promise - Path of the config file
@return {Promise} - If error, returns error. Else, returns nothing.
*/

const mongoose = require('mongoose');
const to = require('./to');

const getURI = (configPath) => {
  const { mongoURI } = require(configPath);
  return mongoURI;
};

const connectToMongoDB = async (configPath) => {
  const [error] = await to(mongoose.connect(getURI(configPath), { useNewUrlParser: true }));
  if (error) {
    return error;
  }
};

module.exports = connectToMongoDB;
