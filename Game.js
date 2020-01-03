// import { Fruit } from "./Fruit.js";
import Fruit from './Fruit.js';
import { game } from './main.js';

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
    }
    drawBackground() {
        this.ctx.fillStyle = 'grey'
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
            }
        }
    }

    checkFruitCollision() {
            for (const fruit of this.fruits) {
                if (this.snake.x == fruit.x && this.snake.y == fruit.y) {
                    this.snake.score += fruit.score
                    console.log(`${this.snake.score}`)
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

    spawnFruit(fruitType = Math.floor(Math.random() * 2)) {
        let color;
        switch (fruitType) {
            case 0:
                color = 'orange'
                break;
            case 1:
                color = 'apple'
                break;
        }
        game.fruits.push(new Fruit(color))
    }
}