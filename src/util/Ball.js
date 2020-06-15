const isTouchingBottom = require('./isTouchingBottom');
const isOutsideHorizontalFrame = require('./isOutsideHorizontalFrame');

/**
 * Draw a circle in a 2D canvas rendering context
 * @param {Object} ctx canvas 2d context
 * @param {number} positionX - horizontal position
 * @param {number} positionY - vertical position
 * @param {number} radius
 * @param {string} fillStyle - style/colour
 */
const drawCircleInContext = (ctx, positionX, positionY, radius, fillStyle) => {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.arc(positionX, positionY, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}

const MIN_MOMENTUM = 0.01;
const DECAY_MOMENTUM_X = 0.995;
const DECAY_MOMENTUM_Y = 0.5;

class Ball {
  /**
   * Initialise a new Ball instance
   * @param {number} xPosition - initial horizontal position
   * @param {number} yPosition - initial vertical position
   * @param {number} radius - size of ball
   * @param {number} horizontalMomentum - initial horizontal momentum
   * @param {number} verticalMomentum - initial vertical momentum (negative == upward)
   * @param {string} fillStyle - ball colour/style
   */
  constructor(canvas, xPosition, yPosition, radius, horizontalMomentum, verticalMomentum, fillStyle) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.x = xPosition;
    this.y = yPosition;
    this.radius = radius;

    this.momentumY = verticalMomentum;
    this.momentumX = horizontalMomentum;

    // colour for the ball
    this.fillStyle = fillStyle;

    // adjust gravity relative to radius
    this.gravity = radius * 0.05;
  }

  /**
   * @public Check whether this ball is horizontally outside the frame (left & right) boundaries
   * @returns {boolean} whether the ball is no longer horizontally visible
   */
  isOutsideHorizontalScreen() {
    return isOutsideHorizontalFrame(this.x, this.radius, this.canvas.width);
  }

  /**
   * @public Render a circle in the current canvas context
   */
  draw() {
    drawCircleInContext(this.ctx, this.x, this.y, this.radius, this.fillStyle);
    return this;
  }

  /**
   * Update rendered object's x/y position
   */
  renderUpdate() {
    const didMoveVertically = this.checkVerticalMove();
    const didMoveHorizontally = this.checkHorizontalMove();

    this.draw();
  }

  /**
   * @private Handle horizontal movement and momentum
   * @returns {boolean} true if horizontally moved
   */
  checkHorizontalMove() {
    const hasHorizontalMomentum = Math.abs(this.momentumX) >= MIN_MOMENTUM;
    if (!hasHorizontalMomentum || this.isOutsideHorizontalScreen()) {
      return false;
    }

    this.x += this.momentumX;
    this.momentumX = this.momentumX * DECAY_MOMENTUM_X;

    // if vertical momentum has been lost, introduce more horizontal friction
    if (this.momentumY == 0) {
      this.momentumX = this.momentumX * (DECAY_MOMENTUM_X - 0.005);
    }

    return true;
  }

  /**
   * @private Handle vertical movement and momentum. If touching bottom boundary, handle bounce.
   * @returns {boolean} true if vertically moved
   */
  checkVerticalMove() {
    const momentumY = this.momentumY;

    const radius = this.radius;
    const canvasHeight = this.canvas.height;

    // If ball isn't touching bottom boundary yet, move it further down
    if (!isTouchingBottom(this.y, radius, canvasHeight)) {
      this.momentumY += this.gravity;
      this.y += momentumY;

      // if we've now crossed the bottom, make sure we don't exceed it
      if (isTouchingBottom(this.y, radius, canvasHeight)) {
        this.y = canvasHeight - radius;
      }
      return true;
    }

    // Ball is touching bottom boundary - check if emough momentum remains for a bounce
    const hasVerticalMomentum = Math.abs(momentumY) >= radius / 3;
    if (!hasVerticalMomentum) {
      this.momentumY = 0;
      this.y = canvasHeight - radius;
      return false;
    }

    // Trigger bounce : Flip momentum direction while reducing total momentum
    this.momentumY = -(momentumY * DECAY_MOMENTUM_Y);
    this.y += this.momentumY;
    return true;
  }
}

module.exports = Ball;