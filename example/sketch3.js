const canvasWidth = 800;
const canvasHeight = 400;

componentSize = 10;
componentColor = 255;
componentSpeed = 4;

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Weather(numOfComponents, backgroundColor) {
    this.components = [];
    this.numOfComponents = numOfComponents;
    this.backgroundColor = backgroundColor;
}

Weather.prototype.collectComponents = function() {
    for (let i = 0; i < this.numOfComponents; i++) {
        this.components.push(new Component(componentSize, componentColor, componentSpeed));
    } 
}

const Rain = function(numOfComponents, backgroundColor) {
    Weather.call(this, numOfComponents, backgroundColor);
};

Rain.prototype = Object.create(Weather.prototype);

Rain.prototype.render = function() {
    background(this.backgroundColor);
    for (let i = 0; i < this.components.length; i++) {
        const drop = this.components[i];
        fill(drop.color);
        ellipse(drop.xPosition, drop.yPosition, drop.size, drop.size);
        drop.yPosition += drop.speed;
        if (drop.yPosition > 400) {
            drop.yPosition = 0;
        }
    }
}

function Component(size, color, speed) {
    this.xPosition = randomNum(0, canvasWidth);
    this.yPosition = randomNum(0, canvasHeight);
    this.size = componentSize;
    this.color = componentColor;
    this.speed = componentSpeed;
}

const storm = new Rain(25, 150);

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('container');
    noStroke();
    storm.collectComponents();
}

function draw() {
    storm.render();
}
