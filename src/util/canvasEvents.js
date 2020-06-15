
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
 * @param {function} callback handler when a click event is seen
 */
function registerEventHandlers(canvas, handleClickEventCallback) {
  addEventListener('resize', () => handleResizeCanvasEvent(canvas));
  addEventListener("click", event => {
    handleClickEventCallback && handleClickEventCallback(event.offsetX, event.clientY);
  });
}

module.exports = { registerEventHandlers, handleResizeCanvasEvent };