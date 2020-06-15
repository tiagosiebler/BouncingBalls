// Store for active balls on canvas
const animatedBalls = [];

const getRandomNumberInRange = require('./getRandomNumberInRange');
const { registerEventHandlers } = require('./registerEventHandlers');
const renderBall = require('./renderBall');

/**
 * @private Clear canvas back to a clean state, ready for new drawings. Called once per frame.
 * @param {Object} canvas DOM node
 * @param {Object} canvas 2d context
 */
function repaintCanvas(canvas, ctx) {
  // The last parameter of the fillStyle rgba value (opacity) creates a "trailing blur" style effect
  ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * @public Core rendering loop - iterate through each rendered ball and update position
 *
 * @param {Object} canvas DOM node
 * @param {Object} canvas 2d context
 */
function renderCanvasFrame(canvas, ctx) {
  repaintCanvas(canvas, ctx);

  // iterate each active ball and re-render
  animatedBalls.forEach(ball => ball.onFrame());

  // call next animation frame
  requestAnimationFrame(() => renderCanvasFrame(canvas, ctx));
}

/**
 * Callback handler for click events - renders new ball at position
 *
 * @param {Object} canvas DOM reference
 * @param {number} positionX
 * @param {number} positionY
 */
function handleClickEvent(canvas, positionX, positionY) {
  const randomRadius = getRandomNumberInRange(3, 30);
  animatedBalls.push(renderBall(canvas, positionX, positionY, randomRadius));
}

module.exports = function setupRenderer(canvas) {
  const ctx = canvas.getContext('2d');
  renderCanvasFrame(canvas, ctx);
  registerEventHandlers(
    canvas,
    (positionX, positionY) => handleClickEvent(canvas, positionX, positionY)
  );
};