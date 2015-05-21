var stage, circle;

window.onload = function init() {
    // Test draw a circle
    stage = new createjs.Stage("demoCanvas");    
    circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
    // Load files
    var preload = new createjs.LoadQueue();
    preload.addEventListener("fileload", handleFileComplete);
    preload.loadFile("../bower_components/kenney-hexagon/Spritesheet/complete.png");
    // Handle input
    circle.addEventListener("click", handleClick);
    circle.addEventListener("mousedown", handlePress);
    this.document.onkeydown = keyPressed;	 
}

function handleFileComplete(event) {
    document.body.appendChild(event.result);
}

function handleClick(event){
    // Click happenened
    console.log('click');
}

function handlePress(event) {
    // A mouse press happened.
    // Listen for mouse move while the mouse is down:
    console.log('press');
    event.addEventListener("mousemove", handleMove);
}

function handleMove(event) {
     // Check out the DragAndDrop example in GitHub for more
    console.log('move');
}

function keyPressed(event) {
	var KEYCODE_LEFT = 37, 
		KEYCODE_RIGHT = 39,
		KEYCODE_UP = 38, 
		KEYCODE_DOWN = 40;
    switch(event.keyCode) {
        case KEYCODE_LEFT:	
            circle.x -= 5;
            break;
        case KEYCODE_RIGHT: 
            circle.x += 5; 
            break;
        case KEYCODE_UP: 
            circle.y -= 5;
            break;
        case KEYCODE_DOWN: 
            circle.y += 5;
            break;
    }
    stage.update();
}
