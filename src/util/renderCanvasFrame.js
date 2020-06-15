// Store for active balls on canvas
const animatedBalls = [];

/**
 * @private Clear canvas back to a clean state, ready for new drawings. Called once per frame.
 */
function repaintCanvas(canvas, ctx) {
  // The last parameter of the fillStyle rgba value (opacity) creates a "trailing blur" style effect
  ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

/**
 * @public Core rendering loop - iterate through each rendered ball and update position
 *
 * @param {object} canvas DOM node
 * @param {object} canvas 2d context
 */
function renderCanvasFrame(canvas, ctx) {
  repaintCanvas(canvas, ctx);

  // iterate each active ball and re-render
  animatedBalls.forEach(ball => ball.onFrame());

  // call next animation frame
  requestAnimationFrame(() => renderCanvasFrame(canvas, ctx));
}

module.exports = renderCanvasFrame;