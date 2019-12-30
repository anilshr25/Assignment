function Box(x,y,width,height,color) {
	this.x = x;
	this.y =y;
	this.width = width;
	this.height = height;
	this.color = color;
	var box = document.createElement('div');
	this.draw = function () {
		box.style.left = this.x + 'px';
		box.style.top = this.y + 'px';
		box.style.width = this.width + 'px';
		box.style.height = this.height + 'px';
		box.style.background = this.color;
		box.style.position = "absolute";
		document.body.appendChild(box);
		//console.log(this);
	}
}
