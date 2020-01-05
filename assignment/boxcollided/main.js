function Main() {
    var objArr = [];        
    var that = this;
    this.intBox = function () {
        var noofbox = 2;
        //var color = ["red", "blue"];
        for (var i = 0; i < noofbox; i++) {
            var newX = Math.floor(Math.random() * (200 - 100));
            var newY = Math.floor(Math.random() * (350 - 100));
            var newWidth = Math.floor(Math.random() * (60 - 50) + 50);
            var newHeight = Math.floor(Math.random() * (60 - 50) + 50);
            var newdirectionX = Math.floor(Math.random() * (20 - 5) + 5);
            //var newdirectionY = Math.floor(Math.random() * (20 - 5) + 5);
            //var colorCode = Math.floor(Math.random() * color.length);
            var box = new Box(newX, newY, newWidth, newHeight, newdirectionX);
            objArr.push(box);
        }
    }
    this.checkCollision = function () {
        for (var i = 0; i < objArr.length; i++) {
            for (var j = 0; j < objArr.length; j++) {
                if (i != j) {
                    if ((objArr[i].x < (objArr[j].x + objArr[j].width) && (objArr[i].x + objArr[i].width) > objArr[j].x &&
                        objArr[i].y < (objArr[j].y + objArr[j].height) && (objArr[i].y + objArr[i].height) > objArr[j].y)) {
                            objArr[i].dx *= -1;
                            console.log(objArr[j].dx);
                    }
                }
            }
        }
    }    
    setInterval(function () {
        for (var i = 0; i < objArr.length; i++) {
            objArr[i].update();
            that.checkCollision();
        }
    }, 100);
}
var newbox = new Main();
newbox.intBox();