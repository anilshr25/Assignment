var outsideBox = {

	boxId: document.createElement('div'),
	init:function () {
		this.boxId.style.width ="500px";
		this.boxId.style.height ="500px";
		this.boxId.style.position = "absolute";
		this.boxId.style.border = "2px solid";
		document.body.appendChild(this.boxId);
		}
	};
var insideBox = {

	boxId: document.createElement('div'),
	init:function () {
		this.boxId.style.left ="15px";
		this.boxId.style.top ="15px";
		this.boxId.style.background = "red";
		this.boxId.style.width ="15px";
		this.boxId.style.height ="15px";
		this.boxId.style.position = "absolute";
		this.boxId.style.border = "2px solid red";
		document.body.appendChild(this.boxId);
		}
};

var showInfo = {

	boxId: document.createElement('div'),
	init:function () {
		this.boxId.style.top = "55px";
		this.boxId.style.left = "525px";
		this.boxId.style.textAlign = "bold";
		this.boxId.innerHTML = "Use this key or arrow to move box.<br> MoveUp: W/&#x2191;<br> MoveDown: S/&#x2193;<br> MoveLeft: A/&#x2190; <br> MoveRight: D/&#x2192;";
		this.boxId.style.position = "absolute";
		document.body.appendChild(this.boxId);
	}
};
function show() {
	outsideBox.init();
	insideBox.init();
	showInfo.init();
}
show();
//var outwidth = parseInt(outsideBox.boxId.style.width) - parseInt(insideBox.boxId.style.top);
//var outheight = parseInt(outsideBox.boxId.style.height);
var intop = parseInt(insideBox.boxId.style.top);
var inleft = parseInt(insideBox.boxId.style.left);
//alert(intop);

window.onkeydown = function (event) {
	var key = event.keyCode;
	//alert(event.keyCode);

	//Up Move
	if (key === 38 || key === 87) {
		if(intop > 15){
		intop -= 10;		
		insideBox.boxId.style.top = intop + "px";
		}else{
			alert("You don't have Enough Space to move the box!!!");
		}
	}

	//down
	if (key === 40 || key === 83) {
		if(intop < 485){
			intop += 10;		
			insideBox.boxId.style.top = intop + "px";
		}else{
			alert("You don't have Enough Space to move the box!!!");
		}
	}
	
	//Right Move
	if(key === 39 || key === 68){
		if(inleft < 485){
			this.inleft += 10;
			insideBox.boxId.style.left = inleft + "px";
		}else{
			alert("You don't have Enough Space to move the box!!!");
		}
	}

	//Left Move
	if(key === 37 || key === 65){
		if(inleft > 15){
			this.inleft -= 10;
			insideBox.boxId.style.left = inleft + "px";
		}else{
			alert("You don't have Enough Space to move the box!!!");
		}
	}
}