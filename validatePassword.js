/* 
The validatePassword method checks if a password is valid using bcrypt. Used in conjunction with the hashPassword method.
@param {String} password - The password to be checked
@param {String} hash - The hash to be checked
@return {Promise} 
*/
const bcrypt = require('bcryptjs');

const validatePassword = async (password, hash) => await bcrypt.compare(password, hash);

module.exports = validatePassword;