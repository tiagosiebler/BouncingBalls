/**
 * Dynamically render a canvas tag with predefined style properties
 * @returns {Object} canvas tag
 */
function createCanvasTag() {
  var canvas = document.createElement('canvas');

  // this allows the tag to cover the full screen without interfering with an existing website
  canvas.style.position = "absolute";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style["z-index"] = "-1";

  return canvas;
}

module.exports = createCanvasTag;