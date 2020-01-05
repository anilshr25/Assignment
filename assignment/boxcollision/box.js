function Box(x,y,width,height,color,directionX,directionY) {
	this.x = x;
	this.y =y;
	this.width = width;
	this.height = height;
	this.color = color;
	this.dx = directionX;
	this.dy = directionY;
	var box = document.createElement('div');

	this.draw = function () {
		box.style.left = this.x + 'px';
		box.style.top = this.y + 'px';
		box.style.width = this.width + 'px';
		box.style.height = this.height + 'px';
		box.style.background = this.color;
		box.style.position = "absolute";
		document.body.appendChild(box);
	}	
	this.update = function(){
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
		this.checkborderCollision();
	}
	this.checkborderCollision = function () {
		if (this.x > 500 || this.x <= 0) {

			this.dx *= -1;

		}
		if (this.y > 500 || this.y <= 0) {
			this.dy *= -1;
		}
	}
}
