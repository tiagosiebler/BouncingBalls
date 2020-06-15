const { registerEventHandlers, handleResizeCanvasEvent } = require('./util/registerEventHandlers');
const getCanvasTag = require('./util/getCanvasTag');
const renderCanvasFrame = require('./util/renderCanvasFrame');

(function() {
  // Prepare initial canvas tag
  const canvas = getCanvasTag();

  // Dynamically append tag to page body
  document.body.appendChild(canvas);

  // Set initial canvas size
  handleResizeCanvasEvent(canvas);

  // Prepare event listeners for click & resize events
  registerEventHandlers(canvas);

  // Begin core rendering loop
  renderCanvasFrame(canvas, canvas.getContext('2d'));
})();
