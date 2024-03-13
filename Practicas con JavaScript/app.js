function Stack(){
	this.items = []

	this.push = function(item) {
		this.items.push(item)
	}
}

const stack = new Stack()
stack.push("asdfasdfasdfads")

const stack2 = new Stack()
stack2.push(10000)

console.log(stack)
console.log(stack2)