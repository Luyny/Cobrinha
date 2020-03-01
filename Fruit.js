import {game} from "./main.js"

export default class Fruit{
    constructor(type,x = Math.floor(Math.random() * game.size),y = Math.floor(Math.random() * game.size)){
        this.x = x
        this.y = y
        this.type = type
        this.image;
        switch (type) {
            case 'apple':
                this.score = 5
                this.image = document.getElementById('apple')
                break;
        
            case 'orange':
                this.score = 1
                this.image = document.getElementById('orange')
                break;
            case 'cherry':
                this.score = 3
                this.image = document.getElementById('cherry')

        }
    }

    draw(){
        game.ctx.drawImage(this.image,
            this.x * game.squareSize,
            this.y * game.squareSize,
            game.squareSize,
            game.squareSize)
    }
}