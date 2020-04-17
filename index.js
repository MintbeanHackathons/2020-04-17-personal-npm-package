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

/**
 * A happy number is a number defined by the
 * following process: Starting with any positive
 * integer, replace the number by the sum of the
 * squares of its digits, and repeat the process
 * until the number equals 1 (where it will stay),
 * or it loops endlessly in a cycle which does not
 * include 1. Those numbers for which this process
 * ends in 1 are happy numbers.
 *
 * @param {number} n number to evaluate happiness
 * @param {object} nSet memo
 * @returns {boolean} whether number is happy or not
 */
const isHappy = (n, nSet = new Set()) => {
  // when recursing, if we have already gotten to this number, we are in an endless cycle - return false :(
  if (nSet.has(n)) return false

  // get all digits
  const digitsArr = n
    .toString()
    .split('')
    .map((digit) => +digit)

  // find sum of squares of digits
  const digitSum = digitsArr.reduce((acc, cur) => (acc += Math.pow(cur, 2)), 0)

  // if all squares equal to 1, number is happy!
  if (digitSum === 1) return true
  else {
    nSet.add(n)
    return isHappy(digitSum, nSet)
  }
}

module.exports = { addOne, leftPad, leftPadAll, isHappy }
