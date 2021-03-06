import { game } from "./main.js"

export default class Snake {
    constructor(name, color, x = Math.floor(Math.random() * game.size), y = Math.floor(Math.random() * game.size)) {
        this.name = name
        this.color = color
        this.x = x
        this.y = y
        this.direction = 'up';
        this.tailSize = 4;
        this.trail = [{ x: this.x, y: this.y }]
        this.score = 0
        this.moves = {
            left(snake) {
                if (game.checkBorder['left'](game.size)) { snake.x = game.size - 1 }
                else { snake.x -= 1 }
            },
            up(snake) {
                if (game.checkBorder['up'](game.size)) { snake.y = game.size - 1 }
                else { snake.y -= 1 }
            },
            right(snake) {
                if (game.checkBorder['right'](game.size)) { snake.x = 0 }
                else { snake.x += 1 }
            },
            down(snake) {
                if (game.checkBorder['down'](game.size)) { snake.y = 0 }
                else { snake.y += 1 }
            },
            undefined() {

            }
        }
    }

    move() {
        this.moves[this.direction](this)
    }

    draw() {
        var index = 0;
        for (const tailBlock of this.trail) {
            game.ctx.fillStyle = this.color;
            // else {
            game.ctx.fillRect(
                tailBlock.x * game.squareSize,
                tailBlock.y * game.squareSize,
                game.squareSize,
                game.squareSize
            )
            // }
            if (index == 0) {
                game.ctx.drawImage(document.getElementById(this.direction),
                    tailBlock.x * game.squareSize,
                    tailBlock.y * game.squareSize,
                    game.squareSize,
                    game.squareSize);

            }
            index = undefined
        }
    }

    growTail() {
        this.trail.unshift({ x: this.x, y: this.y })

        while (this.trail.length > this.tailSize) {
            this.trail.pop();
        }
    }
}