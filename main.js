import Game from './Game.js';
import Snake from './Snake.js';
import keyListener from './keyListener.js'
export { game }
var canvas = document.getElementById('canvas');
var score = document.getElementById('score');
var ctx = canvas.getContext('2d');
var game = new Game(40, canvas, ctx)

window.game = game
document.addEventListener("keydown", (e)=> {
    if (keyListener[e.key]) keyListener[e.key]()
})

game.snake = new Snake('Luyny', 'white')
game.spawnFruit()

setInterval(gameLoop, 1000 / 18)

function gameLoop() {
    game.drawBackground('grey')
    game.snake.draw()
    game.drawFruits()
    score.innerHTML = game.snake.score
    game.checkFruitCollision()
    if (!game.isPaused) 
    {
        game.snake.move()
        game.snake.growTail()
    game.checkFruitCollision()
        game.checkTailCollision()
    }
}

