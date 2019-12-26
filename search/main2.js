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
				if (itemkey[i] == key && itemvalue[i] == value) {
					result += itemvalue;							
				}
			}
			searchByKey('name','Apple');
		}
	});
	if (result == '') {
		document.write("No Data Found!!!");
	}else{
		document.write(result,"<br>");
	}