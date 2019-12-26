var firstRect = document.createElement("div");
firstRect.setAttribute("id","box1");
firstRect.style.width = "150px";
firstRect.style.height = "150px";
firstRect.style.background = "red";
firstRect.style.position = "absolute";
document.body.appendChild(firstRect);

var secondRect = document.createElement("div");
secondRect.setAttribute("id","box2");
secondRect.style.width = "150px";
secondRect.style.height = "150px";
secondRect.style.background = "blue";
firstRect.style.left = "160px";
secondRect.style.position = "absolute";
document.body.appendChild(secondRect);