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
    preload.loadFile("../bower_components/kenney-hexagon/Spritesheet/complete.png");
}

function handleFileComplete(event) {
  document.body.appendChild(event.result);
}
