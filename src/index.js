const getCanvasTag = require('./util/getCanvasTag');
const setupRenderer = require('./setupRenderer');

(function() {
  // Prepare initial canvas tag
  const canvas = getCanvasTag();

  // Dynamically append tag to page body
  document.body.appendChild(canvas);

  // Setup core rendering loop
  setupRenderer(canvas);
})();
