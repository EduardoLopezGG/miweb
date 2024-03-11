function Person(){
	this.name = ""
	this.lastname = ""
	this.age = 0
	this.showFullName = function(){
		return this.name + " "	+ this.lastname
	}
}

const user1 = new Person()
user1.name = "joe"
user1.lastname = "mcmillan"
console.log(user1.showFullName())
console.log(user1)