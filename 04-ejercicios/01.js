function cualEsMayor(a, b) {
	if (a < b) {
		return b;
	} else {
		return a;
	}
	//return (a < b) ? a : b;
}


let mayor = cualEsMayor(10, 5);

console.log(mayor);