let arreglo = [{
	id:1,
	name:'nicolas',
}, {
	id:2,
	name:'felipe',
}, {
	id:3,
	name:'chanchito',
}];

let pares = [
	[1, { id: 1, name: "nicolas" }],
	[2, { id: 2, name: "felipe" }],
	[3, { id: 3, name: "chanchito" }],
];

function topairs(arreglo) {
	let pairs = [];
	for(idx  in arreglo) {
		let elemento = arreglo[idx];
		pairs[idx] = [elemento.id, elemento];
	}
	return pairs;
}

let resultado = topairs(arreglo);
console.log(resultado);