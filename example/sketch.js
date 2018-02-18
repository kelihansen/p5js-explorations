let gray;

function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('container');
    gray = color(227);
}

const button = document.getElementById('colorButton');
button.addEventListener('click', function() {
  gray = color(random(255));
});


function draw() {
  background(gray);
}