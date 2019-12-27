function pattern(num) {
	for (var i = num; i > 0; i--) {
		var a = '';
		for (var j = 0; j < i; j++) {
			a += "*";
			document.write("*");			
		}
		console.log(a);
		document.write("<br>");
	}
}
pattern(5);