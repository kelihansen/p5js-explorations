const canvasWidth = 800;
const canvasHeight = 400;

componentSize = 5;
componentColor = 255;
componentSpeed = 8;

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

function Rain(numOfComponents, backgroundColor) {
    Weather.call(this, numOfComponents, backgroundColor);
}

Rain.prototype = Object.create(Weather.prototype);

Rain.prototype.render = function() {
    background(this.backgroundColor);
    for (let i = 0; i < this.components.length; i++) {
        const drop = this.components[i];
        fill(0, 0, drop.color);
        ellipse(drop.xPosition, drop.yPosition, drop.size, drop.size);
        drop.yPosition += drop.speed;
        if (drop.yPosition > canvasHeight) {
            drop.yPosition = 0;
        }
    }
}

function Snow(numOfComponents, backgroundColor) {
    Weather.call(this, numOfComponents, backgroundColor);
}

Snow.prototype = Object.create(Weather.prototype);

Snow.prototype.render = function() {
    background(this.backgroundColor);
    for (let i = 0; i < this.components.length; i++) {
        const drop = this.components[i];
        fill(drop.color);
        ellipse(drop.xPosition, drop.yPosition, drop.size, drop.size);
        drop.yPosition += drop.speed;
        if (drop.yPosition > canvasHeight) {
            drop.yPosition = 0;
        }
    }
}

function Component(size, color, speed) {
    this.xPosition = random(0, canvasWidth);
    this.yPosition = random(0, canvasHeight);
    this.size = componentSize;
    this.color = componentColor;
    this.speed = componentSpeed;
}

let scene = new Rain(25, 0);

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('container');
    noStroke();
    scene.collectComponents();
}

function draw() {
    scene.render();
}

const slider = document.getElementById('slider1');
slider.addEventListener('input', function() {
    for (i = 0; i < scene.components.length; i++) {
        scene.components[i].color = (0, 0, parseInt(this.value));
    }
});

const dropdown = document.getElementById('choose');
dropdown.addEventListener('input', function() {
    if (this.value === 'value2') {
        scene = new Snow(30, 150);
        componentSize = 10;
        componentColor = 255;
        componentSpeed = 4;
        for (i = 0; i < scene.numOfComponents; i++) {
            scene.components.push(new Component(componentSize, componentColor, componentSpeed));
        }
    }
});