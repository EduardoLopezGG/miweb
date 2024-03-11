const title = document.createElement('h1')
title.innerText = 'hola mundo';

const button = document.createElement('button');
button.innerText = 'click'

button.addEventListener('click', function(){
	title.innerText = 'texto actualizado con Js';
	alert('se realizo un click');
})

document.body.append(title);
document.body.append(button);