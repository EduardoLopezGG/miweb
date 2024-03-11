const user = {
	name: 'joe',
	age: 30
}

function printInfo(user) {
	const {name, age} = user;

	console.log(name, age);
	return '<h1>hola ' + user.name + '</h1>';
}

console.log(printInfo(user));

document.body.innerHTML = printInfo(user);