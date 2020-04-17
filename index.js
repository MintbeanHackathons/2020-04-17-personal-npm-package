/**
 * addOne returns input + 1
 * @param {number} num
 * @returns {number}
 */
const addOne = (num) => num + 1

/**
 * @param {string} str string to be left-padded
 * @param {number} len length of target string to be returned
 * @param {character} cha character or string to pad on left
 * @returns {string}
 */
const leftPad = (str, len, cha = ' ') => {
  if (str.length > len) throw new Error('cannot pad, argument is too long')
  return cha.repeat(len - str.toString().length) + str
}

module.exports = { addOne, leftPad }
