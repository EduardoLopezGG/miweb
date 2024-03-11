function showFullName(){
	return 'Ryan Ray'
}

const user = {
	name: 'pepe', //properties
	lastname: 'Perez', //properties
	age: 30, //properties
	showFullName() {
		return this.name + " " + this.lastname
	}
}
console.log(user.showFullName());

//toda funcion que este dentro de 
//un objeto (Object)
//se convierte en metodo (Methods)

const account = {
	number : "123456789",
	amount: 100,
	deposit(quantity) {
		this.amount = this.amount + quantity
	},
	withdraw(quantity) {
		this.amount = this.amount - quantity
	}
}

account.deposit(100)
account.deposit(10)
account.deposit(50)
console.log(account)

account.withdraw(10)
account.withdraw(200)
console.log(account)