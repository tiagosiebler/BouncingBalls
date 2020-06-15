const { handleResizeCanvasEvent } = require('./util/registerEventHandlers');
const getCanvasTag = require('./util/getCanvasTag');
const setupRenderer = require('./util/setupRenderer');

(function() {
  // Prepare initial canvas tag
  const canvas = getCanvasTag();

  // Dynamically append tag to page body
  document.body.appendChild(canvas);

  // Set initial canvas size
  handleResizeCanvasEvent(canvas);

  // Setup core rendering loop
  setupRenderer(canvas);
})();
