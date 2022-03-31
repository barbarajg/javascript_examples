function spinalCase(str) {

	// Variable para los espacios y guiones bajos
	let regex = /\s+|_+/g;

	// Sustituye minúscula-mayúscula por minúscula-espacio-mayúscula
	str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

	// Sustituye espacios y guiones bajos por -
	return str.replace(regex, "-").toLowerCase();
}