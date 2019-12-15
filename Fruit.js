import {game} from "./main.js"

export default class Fruit{
    constructor(type,x = Math.floor(Math.random() * game.size),y = Math.floor(Math.random() * game.size)){
        this.x = x
        this.y = y
        this.type = type
        switch (type) {
            case 'apple':
                this.score = 3
                this.color = 'red'
                break;
        
            case 'orange':
                this.score = 1
                this.color = 'orange'
                break;
        }
    }

    draw(){
        game.ctx.fillStyle = this.color;
        game.ctx.fillRect(
            this.x * game.squareSize,
            this.y * game.squareSize,
            game.squareSize,
            game.squareSize)
    }
}