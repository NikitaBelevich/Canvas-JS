'use strict';

// Получили canvas
let canvas = document.querySelector('.canvas_1');
// Получили контекст этого canvas
let ctx = canvas.getContext('2d');

const PI = Math.PI;
function getRadians(degrees) {
	return (Math.PI/180)*degrees;
}

// TODO Центр окружности
ctx.beginPath();
ctx.arc(250, 250, 2, 0, getRadians(360));
ctx.stroke();
ctx.fill();
ctx.closePath();
// TODO Центр окружности

// TODO Дуга
ctx.beginPath();
ctx.arc(250, 250, 50, 0, getRadians(360));
ctx.stroke();
ctx.closePath();
// TODO Дуга

// Получили узлы управления дугой
const controlsPanel = document.querySelector('.controls-arc');
const arcRadiusInp = controlsPanel.querySelector('.radius-inp');
const startAngleInp = controlsPanel.querySelector('.start-angle-inp');
const endAngleInp = controlsPanel.querySelector('.end-angle-inp');
const anticlockwise = controlsPanel.querySelector('.anticlockwise-inp');
const strokeInp = controlsPanel.querySelector('.stroke-inp');
const fillArc = controlsPanel.querySelector('.fill-inp');
const lineWidthInp = controlsPanel.querySelector('.line-width-inp');
const fillColor = controlsPanel.querySelector('.fill-color-inp');
const strokeColor = controlsPanel.querySelector('.stroke-color-inp');

controlsPanel.addEventListener('input', paintArc);
function paintArc() {
    // Объект со всеми значениями для дуги из инпутов
    const arcParameters = {
        'Arc radius': +arcRadiusInp.value,
        'Start angle': +startAngleInp.value,
        'End angle': +endAngleInp.value,
        'Anticlockwise': anticlockwise.checked,
        'Stroke': strokeInp.checked,
        'Fill arc': fillArc.checked,
        'Line width': +lineWidthInp.value,
        'Fill color': fillColor.value,
        'Stroke color': strokeColor.value,
    }

    // Очистили холст
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    // TODO Центр окружности
    ctx.beginPath();
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#000';
    ctx.lineWidth = 1;
    ctx.arc(250, 250, 2, 0, getRadians(360));
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
    // TODO Центр окружности

    // TODO Дуга
    ctx.beginPath();
    ctx.fillStyle = arcParameters['Fill color'];
    ctx.strokeStyle = arcParameters['Stroke color'];
    ctx.lineWidth = arcParameters['Line width'];
    ctx.arc(250, 250,
        arcParameters['Arc radius'],
        getRadians(arcParameters['Start angle']),
        getRadians(arcParameters['End angle']),
        arcParameters['Anticlockwise']
    );
    ctx.stroke(); // Отрисовка дуги

    // Закрашиваем фигуру если включен чек
    if (arcParameters['Fill arc']) {
        ctx.fill();
    }
    // Если включен Stroke, тогда концы дуги соединены между собой
    if (arcParameters['Stroke']) {
        ctx.closePath();
        ctx.stroke();
    }

    ctx.closePath(); // После отрисовки закрыли контур
    // TODO Дуга
}

