# Bouncy Balls

Dynamic tag to render on-click bouncing balls on any web page.

## Requirements
#### Render a ball anytime a mouse click is detected
- Ball colour is black by default. This can be changed within src/util/getRandomBallAtPosition.js.
- Ball position is taken from the onclick event, anywhere on the page.
- Ball radius is random (within fixed range).
- Initial direction & speed is random (within a fixed range).

#### Each ball
- Bounces independently at the bottom of the page.
- Has a gravitational pull towards the bottom.
- Ball size increases the strength of this gravitational pull.
- Momentum decreases after each bounce.
- Is removed from memory once off screen (horizontally only).

## Usage

Include `bouncy.min.js` on any page:
```html
<script src="https://cdn.jsdelivr.net/gh/tiagosiebler/BouncingBalls@master/dist/bouncy.min.js" crossorigin="anonymous"></script>
```

Click anywhere to render bouncing balls.

Try it here: https://tiagosiebler.github.io/BouncingBalls/dist/circle-github.html

## Build

The build process is managed via webpack. To run it:
- Install dependencies: `npm i --dev`
- Run build process: `npm run build`

The optimised output can be found in the `dist` folder. Note: the default is a development build
