//cuando referenciamos 
//los valores dentro de las funciones se 
//llaman parametros
function suma(a, b) {
	console.log(arguments);
	return a + b;
}
//los valores que le pasamos 
//cuando llamamos a la funcion son argumentos
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);
console.log(typeof suma);
//las funciones pueden tener varios parametros
//y varios argumentos