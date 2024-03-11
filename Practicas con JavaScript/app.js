function showFullName(){
	return 'Ryan Ray'
}

const user = {
	name: 'ryan', //properties
	lastname: 'ray', //properties
	age: 30, //properties
	showFullName() {
		return 'ryan ray'
	}
}
console.log(user.showFullName());

//toda funcion que este dentro de 
//un objeto (Object)
//se convierte en metodo (Methods)