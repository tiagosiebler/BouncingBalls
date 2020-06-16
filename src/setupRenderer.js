const getRandomBallAtPosition = require('./util/getRandomBallAtPosition');
const { registerEventHandlers, handleResizeCanvasEvent } = require('./util/canvasEvents');

/**
 * @private Clear canvas back to a clean state, ready for new drawings. Called once per frame.
 * @param {Object} canvas DOM node
 * @param {Object} canvas 2d context
 */
function repaintCanvas(canvas, ctx) {
  // The last parameter of the fillStyle rgba value (opacity) creates a "trailing blur" style effect
  ctx.fillStyle = `rgba(255, 255, 255, 0.8)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Store for active balls on canvas
const animatedBalls = [];

/**
 * @private Core rendering loop - iterate through each rendered ball and update position
 *
 * @param {Object} canvas DOM node
 * @param {Object} canvas 2d context
 */
function renderCanvasFrame(canvas, ctx) {
  // clear the background
  repaintCanvas(canvas, ctx);

  for (let i = 0;i < animatedBalls.length;i++) {
    const ball = animatedBalls[i];

    // if off screen we don't need to keep rendering it
    if (ball.isOutsideHorizontalScreen()) {
      animatedBalls.splice(i, 1);
      i--;
      continue;
    }

    // otherwise allow ball to move position
    ball.renderUpdate();
  }

  // call next animation frame
  requestAnimationFrame(() => renderCanvasFrame(canvas, ctx));
}

/**
 * @private Callback handler for click events - renders new random ball at position
 *
 * @param {Object} canvas DOM reference
 * @param {number} positionX
 * @param {number} positionY
 */
function handleClickEvent(canvas, positionX, positionY) {
  animatedBalls.push(getRandomBallAtPosition(canvas, positionX, positionY));
}

module.exports = function setupRenderer(canvas) {
  const ctx = canvas.getContext('2d');

  // Prepare canvas background & animation frame loop
  renderCanvasFrame(canvas, ctx);

  // Set initial canvas size
  handleResizeCanvasEvent(canvas);

  // Prepare event handlers (onclick & onresize)
  registerEventHandlers(
    canvas,
    (positionX, positionY) => handleClickEvent(canvas, positionX, positionY)
  );
};