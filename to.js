/* 
The to method is intended to provide a better syntax for try/catch blocks.
It makes it so try/catch blocks are not necessary, especially to avoid nested try/catch blocks.
@param {Promise} promise - The promise that you'd like to use. 
@return {Promise} - If successful, returns array with null as error. Otherwise, returns array with err as error. This can be accessed with the first element of the array.
*/

const to = (promise) => {
  return promise.then((data) => [null, data]).catch((err) => [err]);
};

module.exports = to;
