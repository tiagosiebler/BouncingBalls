const getRandomNumberInRange = require('./getRandomNumberInRange');
const renderBall = require('./renderBall');

/**
 * @private Resize canvas dimensions based on window resize events. Called on resize event.
 * @param {object} canvas DOM reference
 */
function handleResizeCanvasEvent(canvas) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

/**
 * @public Register event handlers for click and resize
 * @param {object} canvas DOM reference
 */
function registerEventHandlers(canvas) {
  addEventListener('resize', function() { handleResizeCanvasEvent(canvas) });

  // On click anywhere, extract coordinates and render ball of random size
  addEventListener("click", function(event) {
    const randomRadius = getRandomNumberInRange(3, 30);

    animatedBalls.push(
      renderBall(canvas, event.offsetX, event.clientY, randomRadius)
    );
  });
}

module.exports = { registerEventHandlers, handleResizeCanvasEvent };