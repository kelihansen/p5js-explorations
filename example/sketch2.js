const drops = [];

function Drop (xPosition, yPosition, dropColor, speed) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.dropColor = dropColor;
    this.speed = speed;
}

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('container');
    for (let dropNum = 0; dropNum < 25; dropNum++) {
        xPosition = (random(0, 400));
        yPosition = (random(0, 400));
        dropColor = (color(random(0, 100), random(175, 250), random(200, 255)));
        // speed range
        speed = (random(3, 8));
        drops.push(new Drop (xPosition, yPosition, dropColor, speed));
    }
}

const button = document.getElementById('button1');
button.addEventListener('click', function() {
    for (let i = 0; i < drops.length; i++) {
        drop = drops[i];
        drop.speed++;
    }
});

function draw() {
    background(233, 241, 242);
    for (let i = 0; i < drops.length; i++) {
        noStroke();
        drop = drops[i];
        fill(drop.dropColor);
        // drop size
        const dropSize = 10;
        triangle(drop.xPosition-dropSize/2, drop.yPosition-dropSize/9, drop.xPosition+dropSize/2, drop.yPosition-dropSize/9, drop.xPosition, drop.yPosition-dropSize);
        ellipse(drop.xPosition, drop.yPosition, dropSize, dropSize);
        drop.yPosition += drop.speed;
        // returns drop to top when it exits bottom
        if (drop.yPosition > 400) {
            drop.yPosition = 0;
        }
    }
    
};
