import Fruit from './Fruit.js';
import { game } from './main.js';
import keyListener from './keyListener.js'
import Snake from './Snake.js'

export default class Game {
    constructor(size, canvas, ctx) {
        this.size = size
        this.H = canvas.height
        this.W = canvas.width
        this.snake;
        this.fruits = []
        this.isPaused = true
        this.squareSize = this.H / this.size
        this.ctx = ctx
        this.loopInterval;
    }

    drawBackground(color = '#34495e') {
        this.ctx.fillStyle = color
        this.ctx.fillRect(0, 0, this.W, this.H)
    }

    drawFruits() {
        for (const fruit of this.fruits) {
            fruit.draw()
        }
    }

    checkTailCollision() {
        for (let i = 1; i < this.snake.trail.length; i++) {
            if (this.snake.x == this.snake.trail[i].x && this.snake.y == this.snake.trail[i].y) {
                this.isPaused = true
                this.end()
            }
        }
    }

    checkFruitCollision() {
        for (const fruit of this.fruits) {
            if (this.snake.x == fruit.x && this.snake.y == fruit.y) {
                this.snake.score += fruit.score
                this.fruits.splice(this.fruits.indexOf(fruit), 1);
                this.spawnFruit()
                this.snake.tailSize++
            }
        }
    }

    checkBorder = {
        left() { if (game.snake.x == 0) { return true } },
        up() { if (game.snake.y == 0) { return true } },
        right(size) { if (game.snake.x == size - 1) { return true } },
        down(size) { if (game.snake.y == size - 1) { return true } }
    }

    spawnFruit(fruitType = Math.floor(Math.random() * 3)) {
        let fruit;
        switch (fruitType) {
            case 0:
                fruit = 'orange'
                break;
            case 1:
                fruit = 'apple'
                break;
            case 2:
                fruit = 'cherry'
                break;
        }
        game.fruits.push(new Fruit(fruit))
    }

    loop() {
        game.drawBackground()
        game.snake.draw()
        game.drawFruits()
        game.checkFruitCollision()
        if (!game.isPaused) {
            game.snake.move()
            game.snake.growTail()
            game.checkTailCollision()
        }
    }

    verifyKey(e) {
        if (keyListener[e.key]) keyListener[e.key]()
    }

    start() {
        var e = document.getElementById("color");
        document.addEventListener("keydown", this.verifyKey)
        this.snake = new Snake('Luyny',e.options[e.selectedIndex].value)
        this.spawnFruit()
        this.loopInterval = setInterval(this.loop, 1000 / 12)
        start.style.display = 'none'
    }

    end() {
        document.removeEventListener("keydown", this.verifyKey)
        var tail = this.snake.trail.length - 1
        score.innerHTML = this.snake.score        
        var removeTail = setInterval(() => {
            tail = this.snake.trail.length - 1
            this.snake.trail.splice(tail, 1);
            if (tail == 0) {
                clearInterval(removeTail)
                this.fruits = []
                setTimeout(() => {
                    clearInterval(this.loopInterval)
                    this.snake = undefined
                    end.style.display = "grid"
                    // game.drawBackground('grey')
                    // game.chooseColor()

                }, 50)
                // setTimeout(() => {
                    // game.start()
                // }, 2000)
            }
        }, 40)
    }

    chooseColor(){
        start.style.display = 'block'
        end.style.display = 'none'
        var e = document.getElementById("color");
        this.ctx.fillStyle = e.options[e.selectedIndex].value;
        this.ctx.fillRect(game.W/2 - 25,game.H/4,50,50);
    }
}