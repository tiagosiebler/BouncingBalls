const Ball = require('./Ball');

/**
 * Render a new canvas ball and return it
 *
 * @param {number} positionX - horizontal starting position of ball on screen
 * @param {number} positionY - vertical starting position of ball on screen
 * @param {number} ballRadius - size of ball
 * @returns {Object} Ball object
 */
function renderBall(canvas, positionX, positionY, ballRadius) {
  const ballFillStyle = 'black';

  const midCanvas = canvas.width / 2;
  const midCanvasToPointerRatio = 1 - (midCanvas / positionX);

  const horizontalMomentum = midCanvasToPointerRatio * 5;
  const verticalMomentum = -10;

  return new Ball(
    canvas,
    positionX,
    positionY,
    ballRadius,
    horizontalMomentum,
    verticalMomentum,
    ballFillStyle
  ).drawPlainCircle();
}

module.exports = renderBall;