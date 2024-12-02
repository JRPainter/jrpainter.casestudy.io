let angle;
let canvas;
let colorPicker;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(16);
    colorMode(HSB);
    background(75);
    angle = 0;
    canvas = createGraphics(window.innerWidth, window.innerHeight);
    colorPicker = createColorPicker("green")
    colorPicker.position(10, 10);
    
}

function draw() {
    //canvas.background(75);
    canvas.fill(colorPicker.color());
    canvas.noStroke();
    
    push();
    if(mouseIsPressed){
        canvas.ellipse(mouseX, mouseY, 10, 10);
    } else {
        canvas.clear();
    }
    translate(width / 2, height / 2);
    rotate(-angle);
    image(canvas, -width/2, -height/2);
    pop();
    angle++;
    text("Press space to clear the screen", width/7, height/25);
    
}

function keyPressed(){ 
    if(keyCode == 32){
        clear();
        background(75);
    }
}
