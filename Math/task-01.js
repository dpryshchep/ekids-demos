/*
		var a = parseInt(prompt());
		var b = parseInt(prompt());
		var c = parseInt(prompt());
		*/

		var a = +prompt();
		var b = +prompt();
		var c = +prompt();

		function calcSum(x, y, z){
			return x + y + z;
		}

		console.log(calcSum(a, b, c));