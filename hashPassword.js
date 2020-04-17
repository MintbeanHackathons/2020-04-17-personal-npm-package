/* 
The hashPassword method hashes a password using bcrypt.
@param {String} password - The password to be hashed
@param {Number} saltLength - The length of the desired salt
@return {Promise} - Returns the hashed password if successful, otherwise returns the error
*/
const bcrypt = require('bcryptjs');
const to = require('./to');

const hashPassword = async (password, saltLength = 10) => {
  const [saltError, salt] = to(await bcrypt.genSalt(saltLength));
  if (saltError) {
    return saltError;
  }
  const [hashError, hashedPassword] = to(await bcrypt.hash(password, salt));
  if (hashError) {
    return hashError;
  }
  return hashedPassword;
};

module.exports = hashPassword;
