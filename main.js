import Game from './Game.js';
export { game}

var canvas = document.getElementById('canvas');
    canvas.width = Math.min(window.innerHeight, window.innerWidth) -35
    canvas.height = canvas.width

var score = document.getElementById('score');

var ctx = canvas.getContext('2d');
var game = new Game(30, canvas, ctx)

window.game = game
game.drawBackground()
game.chooseColor()