/* 
The hashPassword method hashes a password using bcrypt.
@param {String} password - The password to be hashed
@param {Number} saltLength - The length of the desired salt
@return {Promise} - Returns the hashed password if successful, otherwise returns the error
*/
const bcrypt = require('bcryptjs');

const hashPassword = async (password, saltLength = 10) => {
  const salt = await bcrypt.genSalt(saltLength);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

module.exports = hashPassword;
