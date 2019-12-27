var obj = {fname:"Anil",lname:"Shrestha",address:"Tusal",email:"anilshr25@gmail.com",
			interest:"Programming",education:
			[{name:"RIA",enRolledDate:"2070"},{name:"RIA",enRolledDate:"2073"}]
		};
	console.log("First Name: ",obj.fname);
	console.log("Last Name: ",obj.lname);
	console.log("Address: ",obj.address);
	console.log("Email: ",obj.email);
	console.log("Interest: ",obj.interest);
	console.log("Education:");
	obj.education.forEach(function(item){
		console.log("School/College: ",item.name);
		console.log("School/College: ",item.enRolledDate);
	});
	console.log("Join fname & lname: ",getFullname());
	function getFullname() {
		var name = [obj.fname,obj.lname].join(" ");
		return name;
	}



	document.write("First Name: ",obj.fname,"<br>");
	document.write("Last Name: ",obj.lname,"<br>");
	document.write("Address: ",obj.address,"<br>");
	document.write("Email: ",obj.email,"<br>");
	document.write("Interest: ",obj.interest,"<br>");
	document.write("Join fname & lname: ",getFullname(),"<br>");
	