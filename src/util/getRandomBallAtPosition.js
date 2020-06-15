const Ball = require('./Ball');
const getRandomNumberInRange = require('./getRandomNumberInRange');

/**
 * Generate a randomly sized canvas ball at position with random momentum
 * @param {Object} canvas DOM reference
 * @param {number} positionX
 * @param {number} positionY
 * @returns {Ball} canvas Ball
 */
const getRandomBallAtPosition = (canvas, positionX, positionY) => {
  const randomRadius = getRandomNumberInRange(3, 20);

  const horizontalMomentum = getRandomNumberInRange(-10, 10);
  const verticalMomentum = getRandomNumberInRange(-20, 0);

  const ballFillStyle = 'black';

  return new Ball(
    canvas,
    positionX,
    positionY,
    randomRadius,
    horizontalMomentum,
    verticalMomentum,
    ballFillStyle
  ).draw();
}

module.exports = getRandomBallAtPosition;