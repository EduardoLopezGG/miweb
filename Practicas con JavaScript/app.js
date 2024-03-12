const company = {
	name: "fazt tech",
	empleados: []
}

class Person{
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname
	}
}

const john = new Person("john", "ray")
const maria = new Person("maria", "perez")

company.empleados.push(john)
company.empleados.push(maria)

console.log(maria)
console.log(john)

console.log(company)