function nombreResolution(ancho, alto) {
	if (ancho > 7680 && alto > 4320) {
		return '8K';
	} else if (ancho >= 3840 && alto >= 2160) {
		return '4K';
	} else if (ancho >= 2560 && alto >= 1440) {
		return 'WQHD';
	} else if (ancho >= 1920 && alto >= 1080) {
		return 'FHD';
	} else if (ancho >= 1280 && alto >= 720) {
		return 'HD';
	} else {
		return false;
	}
}

let nombre = nombreResolution(1366, 768);
console.log(nombre);