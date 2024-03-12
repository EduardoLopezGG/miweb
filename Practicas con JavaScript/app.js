class Person{
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname
	}

	greet() {
		return "hello i am " + this.name + " " + this.lastname
	}

}

const user = new Person("joe", "mcmillan")
const user2 = new Person("maria", "juana")

console.log(user.greet())
console.log(typeof user2.greet())