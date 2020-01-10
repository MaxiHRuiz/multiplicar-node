const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'Crear en un txt la tabla de multiplicar en base al numero pasado.', opciones)
    .help() // permite dar una breve descripcion al usar el comando: node app --help
    .argv;


module.exports = {
    argv
}