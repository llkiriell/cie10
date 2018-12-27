module.exports = function (type) {
	type = type || 'json';
	return require('./cie10-' + type + '.json');
};

var caps = require('./array/cie10-array-capitulos.json');
let cap1 = caps[0];
console.log(cap1.titulo);