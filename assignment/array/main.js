var arr = ['Anil','Shrestha','Tusal','9849627149','KIST'];

//Print From console log
console.log("Array",arr);
console.log("First Name: ",arr[0]);
console.log("Last Name: ",arr[1]);
console.log("Address: ",arr[2]);
console.log("Contact: ",arr[3]);
console.log("College: ",arr[4]);
console.log("Total length of Array: ",arr.length);
console.log("Slice: ",arr.slice(2,3));
console.log("Push: ",arr.push("BIT"));
console.log("After push New Array: ",arr);
console.log("Index Of Tusal: ",arr.indexOf("Tusal"));



//Print from document write
document.write("Array: ",arr,"<br>");
document.write("First Name: ",arr[0],"<br>");
document.write("Last Name: ",arr[1],"<br>");
document.write("Address: ",arr[2],"<br>");
document.write("Contact: ",arr[3],"<br>");
document.write("College: ",arr[4],"<br>");
document.write("Total length of Array: ",arr.length,"<br>");
document.write("Slice: ",arr.slice(2,3),"<br>");
document.write("Push: ",arr.push("BIT"),"<br>");
document.write("After push New Array: ",arr,"<br>");
document.write("Index Of Tusal: ",arr.indexOf("Tusal"));