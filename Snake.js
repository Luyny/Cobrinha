import {game} from "./main.js"

export default class Snake {
    constructor(name,color,x = Math.floor(Math.random() * game.size),y = Math.floor(Math.random() * game.size)){
        this.name = name
        this.color = color
        this.x = x
        this.y = y
        this.acX ; 
        this.acY ;
        this.move = {
            left(snake){
                snake.x -= 1
            },
            up(snake){
                snake.y -= 1
            },
            right(snake){
                snake.x += 1
            },
            down(snake){
                snake.y += 1
            }
        }
    }

    draw(){
        game.ctx.fillStyle=this.color;
        game.ctx.fillRect(
            this.x * game.squareSize,
            this.y * game.squareSize,
            game.squareSize,
            game.squareSize)
    }
}