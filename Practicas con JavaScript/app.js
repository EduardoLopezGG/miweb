class Person{
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname
	}
}

const john = new Person("john", "ray")
const maria = new Person("maria", "perez")

maria.parent = john

console.log(maria)
console.log(john)