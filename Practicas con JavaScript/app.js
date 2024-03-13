class Person{
	constructor(name, lastname){
		this.name = name
		this.lastname = lastname		
	}
}

class Programmer extends Person {
	constructor(language, name, lastname) {
		super(name, language);
		this.language = language
	}
}

const john = new Person("john", "ray")
const ryan = new Programmer("JavaScript", "ryan", "ray")

console.log(john)
console.log(ryan)

function writeFullName (p) {
	console.log(p.name + " " + p.lastname)
}

writeFullName(john)
writeFullName(ryan)