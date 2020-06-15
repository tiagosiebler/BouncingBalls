/**
 * Check if a circle with radius is outside a horizontal frame
 * @param {number} positionX - horizontal position
 * @param {number} radius
 * @param {number} frameWidth
 */
const isOutsideHorizontalFrame = (positionX, radius, frameWidth) => {
  const isPastRightEdge = (positionX - radius) > frameWidth;
  const isPastLeftEdge = (positionX + radius) < 0;
  return isPastLeftEdge || isPastRightEdge;
}

module.exports = isOutsideHorizontalFrame;