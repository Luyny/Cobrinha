import Game from './Game.js';
import Snake from './Snake.js';
import Fruit from './Fruit.js';
import keyListener from './keyListener.js'
export { game }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var game = new Game(40, canvas, ctx)
document.addEventListener("keydown", keyListener)

game.snakes.push(new Snake('Luyny', 'blue'))
game.fruits.push(new Fruit('apple'))
game.fruits.push(new Fruit('orange'))

setInterval(gameLoop,1000/60)
function gameLoop(){
        game.drawBackground()
        game.drawFruits()
        game.drawSnakes()
}
console.log(game)
