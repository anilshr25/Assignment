function pattern(num) {
	for (var i = num; i > 0; i--) {
		for (var j = 0; j < i; j++) {
			document.write("*");
		}
		document.write("<br>")
	}
}
pattern(5);