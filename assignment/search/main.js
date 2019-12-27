var fruits = [{id:"1",name:"Apple",color:"red"},
				{id:"2",name:"Banana",color:"yellow"}];
	function searchByName(name) {
		for (var i = 0; i < fruits.length; i++) {
			if(fruits[i].name == name)
			{
				console.log(fruits[i].id);
				console.log(fruits[i].name);
				console.log(fruits[i].color);
				document.write(fruits[i].id,"<br>");
				document.write(fruits[i].name,"<br>");
				document.write(fruits[i].color,"<br>");
			}
		}
	}
searchByName("Apple");