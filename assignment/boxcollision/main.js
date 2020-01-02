function Main() {
	var objArr = [];
	var that = this;
	this.intBox = function () {
		var noofbox = 5;
		var color = ["red", "blue"];		
		for (var i = 0; i < noofbox; i++) {
			var newX = Math.floor(Math.random() * (200 - 100));
			var newY = Math.floor(Math.random() * (350 - 100));
			var newWidth = Math.floor(Math.random() * (50 - 25) + 25);
			var newHeight = Math.floor(Math.random() * (100 - 25) + 25);
			var newdirectionX = Math.floor(Math.random() * (20 - 5) + 5);
			var newdirectionY = Math.floor(Math.random() * (20 - 5) + 5);
			var colorCode = Math.floor(Math.random() * color.length);
			var box = new Box(newX, newY, newWidth, newHeight, color[colorCode], newdirectionX, newdirectionY);
			objArr.push(box);
		}
	}
	this.checkCollision = function () {	
		for (var i = 0; i < objArr.length; i++) {
			for (var j = 0; j < objArr.length; j++) {	
				if(i!=j){
					if (objArr[i].x < (objArr[j].x + objArr[j].width) &&
						(objArr[i].x + objArr[i].width) > objArr[j].x && 
						objArr[i].y < (objArr[j].y + objArr[j].y) &&
						(objArr[i].y + objArr[i].height) > objArr[j].y) {
							objArr[i].color = "green";
							objArr[j].color = "green";
							objArr[i].dx *= -1;
							objArr[i].dy *= -1;
					}else{
						objArr[i].color = "red";
						objArr[j].color = "blue";
					}
				}
			}
		}
	}
	
	this.drawBox = function () {
		objArr.forEach(function (item) {
			item.draw();
		});
	}
	setInterval(function () {
		for(var i = 0; i<objArr.length;i++){	
			objArr[i].update();
			that.checkCollision();
		}	
	}, 100);
}
var newbox = new Main();
newbox.intBox();
newbox.drawBox();