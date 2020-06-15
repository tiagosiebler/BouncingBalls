/**
 * Check if a circle with radius is touching the bottom boundary of a given frame
 * @param {number} positionY - vertical position
 * @param {number} radius
 * @param {number} frameHeight
 */
const isTouchingBottom = (positionY, radius, frameHeight) => {
  return (positionY + radius) >= frameHeight;
}

module.exports = isTouchingBottom;