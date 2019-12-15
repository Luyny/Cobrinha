import {game} from "./main.js"
export default function keyListener (event){
    var key = event.key
    var snake = game.snakes[0]
    switch (key) {
        case 'ArrowLeft':
            snake.move['left'](snake)
            console.log('Left')
            break;
    
        case 'ArrowUp':
            snake.move['up'](snake)
            console.log('Up')
            break;
    
        case 'ArrowRight':
            snake.move['right'](snake)
            console.log('Right')
            break;
    
        case 'ArrowDown':
            snake.move['down'](snake)
            console.log('Down')
            break;
    }
}