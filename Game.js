export default class Game {
    constructor(size,canvas,ctx) {
        this.size = size
        this.H = canvas.height
        this.W = canvas.width
        this.snakes = []
        this.fruits = []
        this.isPaused  = false
        this.squareSize = this.H/this.size
        this.ctx = ctx
    }
    drawBackground(){
        this.ctx.fillStyle= 'grey'
        this.ctx.fillRect(0,0,this.W,this.H)
    }
    
    drawFruits(){
        for (const fruit of this.fruits) {
            fruit.draw()
        }
    }

    drawSnakes(){
        for (const snake of this.snakes) {
            snake.draw()
        }
    }
}