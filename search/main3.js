var fruits = [{id:"1",name:"Apple",color:"red"},
				{id:"2",name:"Banana",color:"yellow"}];				
var div = '';
var key,itemkey,itemvalue = '';

	fruits.forEach(function(item)
	{
		key = Object.keys(item);
		div += key[0] +":"+ item.id +" ";
		div += key[1] +":"+ item.name+" ";
		div += key[2] +":"+ item.color+"<br>";
	});	
	document.getElementById('demo').innerHTML = div;
	function searchByKey() {
		var key = document.getElementById('key').value;
		var val = document.getElementById('item').value;
		var result = '';
		fruits.forEach(function(item){
			itemkey = Object.keys(item);
		});
		fruits.forEach(function(item){
			 itemvalue = Object.values(item);			
			for (var i = 0; i < itemkey.length; i++) {			
				if (itemkey[i] == key && itemvalue[i] == val) {
					result += itemvalue;							
				}					
			}
		});
		if (result == '') {
			document.getElementById('res').innerHTML = "No Data Found!!!";
		}else{
			document.getElementById('res').innerHTML = result;
		}
	}