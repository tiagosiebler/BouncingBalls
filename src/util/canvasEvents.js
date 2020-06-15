
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
  // iOS Safari doesn't respond to click events outside buttons & links, but does respond to touchstart
  let clickEventName = navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform) ? 'touchstart' : 'click';
  addEventListener(clickEventName, event => {
    handleClickEventCallback && handleClickEventCallback(event.offsetX, event.clientY);
  });
}

module.exports = { registerEventHandlers, handleResizeCanvasEvent };