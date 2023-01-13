function Encriptar(cadena) {
	let cadenaEncriptada = [];

	const encriptado = {
		a: 'ai',
		e: 'enter',
		i: 'imes',
		o: 'ober',
		u: 'ufat',
	};

	for (let palabra of cadena) {
		if (palabra in encriptado) {
			cadenaEncriptada += encriptado[palabra];
		} else if (palabra === ' ') {
			cadenaEncriptada += ' ';
		} else {
			cadenaEncriptada += palabra;
		}
	}
	return cadenaEncriptada;
}

function Desencriptar(cadena) {
	const desEncriptado = {
		ai: 'a',
		enter: 'e',
		imes: 'i',
		ober: 'o',
		ufat: 'u',
	};

	for (const prop in desEncriptado) {
		cadena = cadena.replaceAll(new RegExp(prop, 'g'), desEncriptado[prop]);
	}
	return cadena;
}

let encriptar = document.getElementById('encriptar');
let texto;
let desencriptar = document.getElementById('desencriptar');
let desencriptado = document.getElementById('desencriptado');
let copiar = document.getElementById('copiar');
copiar.hidden = true;

function limpiarTextarea() {
	texto = document.getElementById('texto');
	texto.value = '';
}
encriptar.addEventListener('click', () => {
	texto = document.getElementById('texto').value.toLowerCase();
	desencriptado.textContent = Encriptar(texto);
	copiar.hidden = false;
	limpiarTextarea();
});

desencriptar.addEventListener('click', () => {
	texto = document.getElementById('texto').value.toLowerCase();
	desencriptado.textContent = Desencriptar(texto);
	limpiarTextarea();
});

copiar.addEventListener('click', () => {
	let textoEncriptado = desencriptado.innerText;
	navigator.clipboard.writeText(textoEncriptado);
});
