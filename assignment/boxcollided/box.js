function Box(x, y, width, height, directionX) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dx = directionX;
    var box = document.createElement('img');
    this.draw = function () {
        box.style.left = this.x + 'px';
        box.style.top = this.y + 'px';       
        box.setAttribute("src","img.jpg");
        box.setAttribute("width",this.width);
        box.setAttribute("height", this.height);
       /*  box.style.backgroundImage = "url('image.jpg')";
        box.style.backgroundRepeat = "no-repeat";
        box.style.backgroundAttachment = "fixed";
        box.style.backgroundSize = "100%" */;
        box.style.position = "absolute";        
        document.body.appendChild(box);    
    }
    var box1 = document.createElement('div');
    this.borderBox = function (x,y,width,height) {
        box1.style.left = x + 'px';
        box1.style.top = y + 'px';
        box1.style.width = width + 'px';
        box1.style.height = height + 'px';
        box1.style.background = "#d3d3d3";
        box1.style.position = "absolute";
        document.body.appendChild(box1);
    }    
    this.update = function () {
        this.x += this.dx;        
        this.draw();    
        this.checkborderCollision();        
    }
    
    this.checkborderCollision = function () {        
        if (this.x > (parseInt(box1.style.width) - parseInt(box.width)) || this.x < 0) {
            this.dx *= -1;
        }        
    }

    this.borderBox(0, 0, 500, 500);
}