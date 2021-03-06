import { game } from "./main.js"
var keyListener = {
    ArrowLeft() {
        game.isPaused = false
        game.snake.direction = 'left'
    },
    ArrowUp() {
        game.isPaused = false;
        game.snake.direction = 'up'
    },
    ArrowRight() {
        game.isPaused = false;
        game.snake.direction = 'right'
    },
    ArrowDown() {
        game.isPaused = false;
        game.snake.direction = 'down'
    },
    p() {
        game.isPaused = !game.isPaused
    }
}
export default keyListener