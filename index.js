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
  if (cha.length > 1)
    throw new Error('third argument needs to be a single character')
  return cha.repeat(len - str.toString().length) + str
}

/**
 *
 * @param {array} arr array of strings or numbers to be left-padded
 * @param {number} len length of target string
 * @param {character} cha character or string to pad on left
 * @returns {array} array of left-padded strings
 */
const leftPadAll = (arr, len, cha = ' ') => {
  return arr.map((el) => leftPad(el, len, cha))
}

module.exports = { addOne, leftPad, leftPadAll }
