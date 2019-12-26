import {game} from "./main.js"
export default function keyListener (event){
    var key = event.key
    var snake = game.snake
    switch (key) {
        case 'p':
            game.isPaused = !game.isPaused
            break;
        case 'ArrowLeft' || 'a':
            game.isPaused = false;
            snake.direction = 'left'
            break;
    
        case 'ArrowUp':
            game.isPaused = false;
            snake.direction = 'up'
            break;
    
        case 'ArrowRight':
            game.isPaused = false;
            snake.direction = 'right'
            break;
    
        case 'ArrowDown':
            game.isPaused = false;
            snake.direction = 'down'
            break;

    }
}