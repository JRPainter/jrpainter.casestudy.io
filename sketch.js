let angle;
let canvas;
let colorPicker;
let motion;

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
    motion = false;
    
}

function draw() {
    //canvas.background(75);
    canvas.fill(colorPicker.color());
    canvas.noStroke();
    
    push();
    if(mouseIsPressed){
        canvas.ellipse(mouseX, mouseY, 10, 10);
    } else if(!motion){
        canvas.clear();
    }
    translate(width / 2, height / 2);
    rotate(-angle);
    image(canvas, -width/2, -height/2);
    pop();
    angle++;
    text("Press space to clear the screen", width/7, height/25);
    text("Press M to toggle motion", width/7 - 25, height/25 + 20);
    if (motion){
        text("(ON)", width/7 + 90, height/25 + 20);
    } else if(!motion){
        text("(OFF)", width/7 + 90, height/25 + 20);
    }
}

function keyPressed(){ 
    if(keyCode == 32){
        clear();
        background(75);
    }
    if(keyCode == 77){
        motion = !motion;
        clear();
        background(75);
    }
}
