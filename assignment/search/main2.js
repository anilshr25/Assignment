var fruits = [{id:"1",name:"Apple",color:"red"},
			{id:"2",name:"Banana",color:"yellow"}];
	var itemkey = '';
	var itemvalue = '';
	var result = '';
	fruits.forEach(function(item){
		itemkey = Object.keys(item);
	});
	fruits.forEach(function(item){
		 itemvalue = Object.values(item);
		for (var i = 0; i < itemkey.length; i++) {
			function searchByKey(key,value) {
				if (itemkey[i].toLowerCase() == key && itemvalue[i].toLowerCase() == value) {
					result += itemvalue;
				}
			}
			searchByKey('name','apple');
		}
	});
	if (result == '') {
		console.log("No Data Found!!!");
		document.write("No Data Found!!!");
	}else{
		console.log(result.toLowerCase());
		document.write(result.toLowerCase(),"<br>");
	}