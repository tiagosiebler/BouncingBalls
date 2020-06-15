/**
 * Generate a random whole number within a range
 * @param {number} min
 * @param {number} max
 * @returns {number} random whole number in range
 */
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = getRandomNumberInRange;