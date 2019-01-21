var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var KeyBindings;
(function (KeyBindings) {
    KeyBindings[KeyBindings["UP"] = 38] = "UP";
    KeyBindings[KeyBindings["DOWN"] = 40] = "DOWN";
})(KeyBindings || (KeyBindings = {}));
var Game = /** @class */ (function () {
    function Game() {
        this.gameCanvas = document.getElementById("game-canvas");
        this.gameContext = this.gameCanvas.getContext("2d");
        this.gameContext.font = "30px Orbitron";
        window.addEventListener("keydown", function (e) {
            Game.keysPressed[e.which] = true;
        });
        window.addEventListener("keyup", function (e) {
            Game.keysPressed[e.which] = false;
        });
        var paddleWidth = 20, paddleHeight = 60, ballSize = 10, wallOffset = 20;
        this.player1 = new Paddle(paddleWidth, paddleHeight, wallOffset, this.gameCanvas.height / 2 - paddleHeight / 2);
        this.computerPlayer = new ComputerPaddle(paddleWidth, paddleHeight, this.gameCanvas.width - (wallOffset + paddleWidth), this.gameCanvas.height / 2 - paddleHeight / 2);
        this.ball = new Ball(ballSize, ballSize, this.gameCanvas.width / 2 - ballSize / 2, this.gameCanvas.height / 2 - ballSize / 2);
    }
    Game.prototype.drawBoardDetails = function () {
        //draw court outline
        this.gameContext.strokeStyle = "#fff";
        this.gameContext.lineWidth = 5;
        this.gameContext.strokeRect(10, 10, this.gameCanvas.width - 20, this.gameCanvas.height - 20);
        //draw center lines
        for (var i = 0; i + 30 < this.gameCanvas.height; i += 30) {
            this.gameContext.fillStyle = "#fff";
            this.gameContext.fillRect(this.gameCanvas.width / 2 - 10, i + 10, 15, 20);
        }
        //draw scores
        this.gameContext.fillText(Game.playerScore, 280, 50);
        this.gameContext.fillText(Game.computerScore, 390, 50);
    };
    Game.prototype.update = function () {
        this.player1.update(this.gameCanvas);
        this.computerPlayer.update(this.ball, this.gameCanvas);
        this.ball.update(this.player1, this.computerPlayer, this.gameCanvas);
    };
    Game.prototype.draw = function () {
        this.gameContext.fillStyle = "#000";
        this.gameContext.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
        this.drawBoardDetails();
        this.player1.draw(this.gameContext);
        this.computerPlayer.draw(this.gameContext);
        this.ball.draw(this.gameContext);
    };
    Game.prototype.gameLoop = function () {
        game.update();
        game.draw();
        requestAnimationFrame(game.gameLoop);
    };
    Game.keysPressed = [];
    Game.playerScore = 0;
    Game.computerScore = 0;
    return Game;
}());
var Entity = /** @class */ (function () {
    function Entity(w, h, x, y) {
        this.xVel = 0;
        this.yVel = 0;
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    Entity.prototype.draw = function (context) {
        context.fillStyle = "#fff";
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    return Entity;
}());
var Paddle = /** @class */ (function (_super) {
    __extends(Paddle, _super);
    function Paddle(w, h, x, y) {
        var _this = _super.call(this, w, h, x, y) || this;
        _this.speed = 10;
        return _this;
    }
    Paddle.prototype.update = function (canvas) {
        if (Game.keysPressed[KeyBindings.UP]) {
            this.yVel = -1;
            if (this.y <= 20) {
                this.yVel = 0;
            }
        }
        else if (Game.keysPressed[KeyBindings.DOWN]) {
            this.yVel = 1;
            if (this.y + this.height >= canvas.height - 20) {
                this.yVel = 0;
            }
        }
        else {
            this.yVel = 0;
        }
        this.y += this.yVel * this.speed;
    };
    return Paddle;
}(Entity));
var ComputerPaddle = /** @class */ (function (_super) {
    __extends(ComputerPaddle, _super);
    function ComputerPaddle(w, h, x, y) {
        var _this = _super.call(this, w, h, x, y) || this;
        _this.speed = 10;
        return _this;
    }
    ComputerPaddle.prototype.update = function (ball, canvas) {
        //chase ball
        if (ball.y < this.y && ball.xVel == 1) {
            this.yVel = -1;
            if (this.y <= 20) {
                this.yVel = 0;
            }
        }
        else if (ball.y > this.y + this.height && ball.xVel == 1) {
            this.yVel = 1;
            if (this.y + this.height >= canvas.height - 20) {
                this.yVel = 0;
            }
        }
        else {
            this.yVel = 0;
        }
        this.y += this.yVel * this.speed;
    };
    return ComputerPaddle;
}(Entity));
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball(w, h, x, y) {
        var _this = _super.call(this, w, h, x, y) || this;
        _this.speed = 5;
        var randomDirection = Math.floor(Math.random() * 2) + 1;
        if (randomDirection % 2) {
            _this.xVel = 1;
        }
        else {
            _this.xVel = -1;
        }
        _this.yVel = 1;
        return _this;
    }
    Ball.prototype.update = function (player, computer, canvas) {
        //check top canvas bounds
        if (this.y <= 10) {
            this.yVel = 1;
        }
        //check bottom canvas bounds
        if (this.y + this.height >= canvas.height - 10) {
            this.yVel = -1;
        }
        //check left canvas bounds
        if (this.x <= 0) {
            this.x = canvas.width / 2 - this.width / 2;
            Game.computerScore += 1;
        }
        //check right canvas bounds
        if (this.x + this.width >= canvas.width) {
            this.x = canvas.width / 2 - this.width / 2;
            Game.playerScore += 1;
        }
        //check player collision
        if (this.x <= player.x + player.width) {
            if (this.y >= player.y && this.y + this.height <= player.y + player.height) {
                this.xVel = 1;
            }
        }
        //check computer collision
        if (this.x + this.width >= computer.x) {
            if (this.y >= computer.y && this.y + this.height <= computer.y + computer.height) {
                this.xVel = -1;
            }
        }
        this.x += this.xVel * this.speed;
        this.y += this.yVel * this.speed;
    };
    return Ball;
}(Entity));
var game = new Game();
requestAnimationFrame(game.gameLoop);
//# sourceMappingURL=pingpong.js.map