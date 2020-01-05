function Main() {
    var newX = Math.floor(Math.random() * (200 - 100));
    var newY = Math.floor(Math.random() * (350 - 100));
    var newRaduis = Math.floor(Math.random() * (350 - 300) + 300);
    var newWidth = Math.floor(Math.random() * (60 - 50) + 50);
    var newHeight = Math.floor(Math.random() * (60 - 50) + 50);
    var newdirectionY = Math.floor(Math.random() * (10 - 5) + 5);
    //var newdirectionY = Math.floor(Math.random() * (20 - 5) + 5);
    //var colorCode = Math.floor(Math.random() * color.length);
    var box = new Box(newRaduis, newX, newY, newWidth, newHeight, newdirectionY);
    
    setInterval(function () {
        box.update();        
    }, 100);

    
    
}
var newbox = new Main();