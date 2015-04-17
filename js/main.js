window.onload = function init() {
    // Test draw a circle
    var stage = new createjs.Stage("demoCanvas");    
    var circle = new createjs.Shape();
    circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.update();
    // Load files
    var preload = new createjs.LoadQueue();
    preload.addEventListener("fileload", handleFileComplete);
    preload.loadFile("kenney-hexagon/Spritesheet/complete.png");
    // Handle input
    circle.addEventListener("click", handleClick);
    circle.addEventListener("mousedown", handlePress);
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
