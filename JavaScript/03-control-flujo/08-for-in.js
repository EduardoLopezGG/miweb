let user = {
	id: 1,
	name : 'chanchito feliz',
	age: 25,
};

for (let prop in user) {
	console.log(prop, ':', user[prop]);
}

//si quieres revisar los elementos de un array usa for of