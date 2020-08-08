'use strict';

// Получили canvas
let canvas = document.querySelector('.canvas_1');
// Получили контекст этого canvas
let ctx = canvas.getContext('2d');

const PI = Math.PI;
function getRadians(degrees) {
	return (Math.PI/180)*degrees;
}

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

// Круги, дуги
ctx.beginPath();
ctx.arc(60, 200, 40, 0, getRadians(360));
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.arc(160, 200, 40, 0, getRadians(360));
ctx.closePath();
ctx.stroke();
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(260, 200, 40, 0, getRadians(180));
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(360, 200, 40, 0, getRadians(180));
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(460, 200, 40, 0, getRadians(180));
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(20, 400);
ctx.quadraticCurveTo(140, 350, 80, 300);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(120, 400);
ctx.bezierCurveTo(180, 400, 180, 300, 120, 300);
ctx.stroke();
ctx.closePath();

// Градиенты
let grd1 = ctx.createLinearGradient(0, 0, 150, 0);
grd1.addColorStop(0, '#000');
grd1.addColorStop(0.5, '#fff');
grd1.addColorStop(0.6, 'red');
grd1.addColorStop(1, 'lime');

ctx.beginPath();
ctx.fillStyle = grd1;
ctx.rect(10, 430, 150, 100);
ctx.fill();
ctx.closePath();

// Не работает радиальный градиент по какой-то причине
let radgrd1 = ctx.createRadialGradient(75, 50, 5, 90, 60, 50);
radgrd1.addColorStop(0, 'blue');
radgrd1.addColorStop(0.5, '#fff');

ctx.beginPath();
ctx.fillStyle = radgrd1;
ctx.rect(200, 430, 150, 100);
ctx.fill();
ctx.closePath();


let img1 = new Image();
img1.src = './img/img_lamp.jpg';
img1.onload = () => {
    let pattr1 = ctx.createPattern(img1, 'repeat');
    ctx.fillStyle = pattr1;
    ctx.fillRect(400, 430, 150, 100);
};

ctx.font = '20px sans-serif';
ctx.fillStyle = '#000';
ctx.fillText('Hello World!', 10, 600);

// ctx.rotate(getRadians(90));

ctx.strokeRect(50, 610, 10, 10);
ctx.scale(2,2);
ctx.strokeRect(50, 610, 10, 10);