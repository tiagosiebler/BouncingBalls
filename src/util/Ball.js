
class Ball {
  /**
   * Initialise a new Ball instance
   * @param {number} xPosition - initial horizontal position
   * @param {number} yPosition - initial vertical position
   * @param {number} radius - size of ball
   * @param {number} horizontalMomentum - initial horizontal momentum
   * @param {number} verticalMomentum - initial vertical momentum. Use negative value to initially bounce up.
   * @param {string} fillStyle - ball colour
   */
  constructor(canvas, xPosition, yPosition, radius, horizontalMomentum, verticalMomentum, fillStyle) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = xPosition;
    this.y = yPosition;
    this.radius = radius;

    this.dy = verticalMomentum;
    this.dx = horizontalMomentum;

    this.fillStyle = fillStyle;

    // adjust gravity relative to radius
    var radiusGravityOffset = radius * 1.5;
    this.gravity = Math.PI / 100 * radiusGravityOffset;
  }

  /**
   * Render a circle in the current canvas context
   */
  drawPlainCircle() {
    var ctx = this.ctx;
    ctx.beginPath();
    ctx.fillStyle = this.fillStyle;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
    return this;
  }

  /**
   * Update rendered object's x/y position
   */
  onFrame() {
    // move vertically with each frame. Offset movement rate by "gravity" strength
    this.dy += this.gravity;
    this.y += this.dy;

    // move horizontally with each frame
    this.x += this.dx;

    // Flip momentum and increase gravity when bottom page boundary is hit
    if (this.y >= this.canvas.height) {
      this.dy = -this.dy;
      this.gravity = this.gravity * 1.5;
    }

    this.drawPlainCircle();
  }
}

module.exports = Ball;