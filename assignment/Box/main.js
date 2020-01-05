function Main() {	
	objArr = [];
	this.intBox = function () {
		newx = 10;
		var color = ["red","blue","yellow"];
		for (var i = 0; i < 100; i++) {
			var box = new Box((Math.random()*1000-1)+1,Math.random()*1000,Math.random()*50,Math.random()*10,color[Math.floor(Math.random()*color.length)]);
			objArr.push(box);
		}
	}
	this.drawBox = function(){
		objArr.forEach(function (item) {
			item.draw();
		});
	}
	/*this.render = function(){
		this.x += this.speedX;
		this.y += this.speedY;
	}*/
	setInterval(function (){
		for (var i = 0; i < objArr.length; i++) {
			objArr[i].x += 10;
			objArr[i].draw();
		}
	},1000);
}
var newbox = new Main();
newbox.intBox();
newbox.drawBox();