var fruits = [{id:"1",name:"Apple",color:"red"},
				{id:"2",name:"Banana",color:"yellow"}];				
var div = '';
var key = '';
	fruits.forEach(function(item)
	{
		key = Object.keys(item);
		div += key[0] +":"+ item.id +" ";
		div += key[1] +":"+ item.name+" ";
		div += key[2] +":"+ item.color+"<br>";
	});	
	document.getElementById('demo').innerHTML = div;
	function searchByName() {
		var val = document.getElementById('item').value;
		var res = '';
		for (var i = 0; i < fruits.length; i++) {
			if(fruits[i].name == val)
			{
				res += fruits[i].id+" ";
				res += fruits[i].name+" ";
				res += fruits[i].color+"<br>";
			}
		}
		if (res != '') {
			document.getElementById('result').innerHTML = res;
		}else{
			document.getElementById('result').innerHTML = "No Fruits Found";
		}
	}