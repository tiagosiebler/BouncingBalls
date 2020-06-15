/**
 * Dynamically render a canvas tag
 * @returns {Object} canvas tag
 */
function createCanvasTag() {
  var canvas = document.createElement('canvas');
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style["z-index"] = "-1";
  return canvas;
}

module.exports = createCanvasTag;