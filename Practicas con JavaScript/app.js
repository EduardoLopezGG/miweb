class Person {
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname
		this.age = null
	}
}

class Programmer extends Person{
	constructor(name, lastname, language){
		super(name, lastname);
		this.language = language
	}
}

const person = new Person("maria", "perez")

console.log(person)

const programmer = new Programmer("joe", "mcmillan", "python")

console.log(programmer)