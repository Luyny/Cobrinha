import Game from './Game.js';
export { game}

var canvas = document.getElementById('canvas');
    canvas.width = Math.min(window.innerHeight, window.innerWidth) -35
    canvas.height = canvas.width
var score = document.getElementById('score');
var ctx = canvas.getContext('2d');
var game = new Game(40, canvas, ctx)

window.game = game
window.onload = game.start()