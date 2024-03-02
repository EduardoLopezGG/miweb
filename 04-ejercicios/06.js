let arreglo = [2, 5, 7, 15, -5, -100, 55];

function cuantospositivos(arreglo) {
	let c = 0;
	for (elemento of arreglo) {
		if (elemento > 0) {
			c++;
		}
	}
	return c;
}

let resultado = cuantospositivos(arreglo);
console.log(resultado);