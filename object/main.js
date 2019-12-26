var obj = {fname:"Anil",lname:"Shrestha",address:"Tusal",email:"anilshr25@gmail.com",
			interest:"Programming",education:["KIST","2019-03-12"]};
	document.write("First Name: ",obj.fname,"<br>");
	document.write("Last Name: ",obj.lname,"<br>");
	document.write("Address: ",obj.address,"<br>");
	document.write("Email: ",obj.email,"<br>");
	document.write("Interest: ",obj.interest,"<br>");
	document.write("Education Name: ",obj.education[0],"<br>");
	document.write("Education EnRolledDate: ",obj.education[1],"<br>");
	document.write("Join fname & lname: ",getFullname(),"<br>");
	function getFullname() {
		var name = [obj.fname,obj.lname].join(" ");
		return name;
	}