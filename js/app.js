'use strict';

// Получили canvas
let canvas = document.querySelector('.canvas_1');
// Получили контекст этого canvas
let ctx = canvas.getContext('2d');

ctx.beginPath();
//1
ctx.moveTo(10, 10);
ctx.lineTo(50, 10);
// 2
ctx.moveTo(60, 10);
ctx.lineTo(60, 50);
// 3
ctx.moveTo(80, 10);
ctx.lineTo(115, 50);
ctx.moveTo(115, 10);
ctx.lineTo(80, 50);
// 4
ctx.strokeRect(130, 10, 50, 50);
// 5
ctx.moveTo(200, 10);
ctx.lineTo(300, 10);
ctx.lineTo(250, 60);
ctx.closePath();
ctx.stroke();

// 6
ctx.beginPath();
ctx.moveTo(320, 30);
ctx.lineTo(420, 30);
ctx.lineTo(400, 50);
ctx.moveTo(420, 30);
ctx.lineTo(400, 10);
ctx.closePath();
ctx.stroke();

// 7
ctx.beginPath();
ctx.fillRect(10, 70, 50, 50);
ctx.fillRect(70, 70, 50, 50);
ctx.clearRect(80, 80, 20, 20);
ctx.closePath();
ctx.stroke();