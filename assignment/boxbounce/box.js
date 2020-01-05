function Boxborder(x, y, width, height) {
    this.box = document.createElement('div');
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.draw = function () {
        this.box.style.left = this.x + 'px';
        this.box.style.top = this.y + 'px';
        this.box.style.width = this.width + 'px';
        this.box.style.height = this.height + 'px';
        this.box.style.background = "#d3d3d3";
        this.box.style.position = "absolute";
        document.body.appendChild(this.box);
    }
}

function Box(radius, x, y, width, height, directionY) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.dy = directionY;
    this.gravity = 0.1;
    this.bounce = 0.6;
    this.box = document.createElement('div');
    this.draw = function () {
        this.box.style.borderRadius = this.radius + "px";
        this.box.style.left = this.x + "px";
        this.box.style.top = this.y + "px";
        this.box.style.width = this.width + "px";
        this.box.style.height = this.height + "px";
        this.box.style.background = "red";
        this.box.style.position = "absolute";
        document.body.appendChild(this.box);
    }

    this.update = function () {
        this.y += this.dy;
        this.draw();
        this.newPosition();
    }
    var borderBox = new Boxborder(0, 0, 500, 500);
    borderBox.draw();
    this.newPosition = function () {
        this.dy += this.gravity;        
        this.y += this.dy
        this.checkborderCollision();
    }
    this.checkborderCollision = function () {    
        var maxHeight = borderBox.height - this.height;       
        if (this.y > maxHeight) {
            this.y = maxHeight;
            this.dy = -(this.dy * this.bounce);               
        }    
    }
}