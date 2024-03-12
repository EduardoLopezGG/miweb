function countItems(x) {
	return x.toString().length
}
console.log(countItems(10000))
console.log(countItems("hola mundo"))

function sumar(x = 0, y = 0, z = 0) {
	return x + y + z
}

console.log(sumar(10, 20))
console.log(sumar(10, 20, 30))