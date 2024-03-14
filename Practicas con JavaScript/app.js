const ul = document.createElement("ul")

let date = fetch("https://jsonplaceholder.typicode.com/posts")
	.then(function(response){
		return response.json()
	}).then(function(data){
		console.log(data)
		data.forEach(function(post){
			const li = document.createElement("li");
			li.innerText = post.title;
			ul.append(li);
		})
		document.body.append(ul);
	})

async function loadData() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts")
	const data = await response.json
	console.log(data)
}
loadData()
console.log("linea 2")