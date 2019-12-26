import Game from './Game.js';
import Snake from './Snake.js';
// import Fruit from './Fruit.js';
import keyListener from './keyListener.js'
export { game }
var canvas = document.getElementById('canvas');
var score = document.getElementById('score');
var ctx = canvas.getContext('2d');
var game = new Game(40, canvas, ctx)
window.game = game
document.addEventListener("keydown", keyListener)

game.snake = new Snake('Luyny', 'white')
game.spawnFruit()
game.drawBackground()
game.snake.draw()
setInterval(gameLoop, 1000 / 18)
function gameLoop() {
    game.drawBackground()
    game.snake.draw()
    game.drawFruits()
    score.innerHTML = game.snake.score
    if (game.isPaused) {
        game.pause()
    } else {
        game.snake.growTail()
        game.checkFruitCollision()
        game.checkTailCollision()
        game.snake.move[game.snake.direction](game.snake)
    }
}
// console.log(game)
