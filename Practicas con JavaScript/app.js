const user = {
	name : 'ryan',
	lastname : 'perez',
	age : 20,
	address : {
		country : 'colombia',
		city : 'bogota',
		street : 'main street 123',
	},
	friends : ['brandon', 'elena'],
	active : true,
	sendMail : function (){
		return 'sending email...';
	}
}
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail())