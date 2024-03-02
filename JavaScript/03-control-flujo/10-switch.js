let accion = 'actualizar';

switch (accion) {
	case 'listar':
		console.log('accion de listar');
		break;
	case 'guardar':
		console.log('accion de guardar');
		break;
	default:
		console.log('accion no reconocida');
}

if (accion == 'listar') {
	console.log('accion de listar');
} else if (accion == 'guardar') {
	console.log('accion de guardar');
} else {
	console.log('accion no reconocida');
}