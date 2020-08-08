'use strict';

// Получили canvas
let canvas = document.querySelector('.canvas_1');
// Получили контекст этого canvas
let ctx = canvas.getContext('2d');

const PI = Math.PI;
function getRadians(degrees) {
	return (Math.PI/180)*degrees;
}
