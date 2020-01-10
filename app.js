// Requires
const argv = require('./config/yargs').argv;
var colors = require('colors');

//destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

// se usa: node app.js --base 5
let key = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (key) {
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(colors.green(`Archivo creado: ${archivo}`)))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(base, limite);
        break;
    default:
        'Comando no reconocido';
}