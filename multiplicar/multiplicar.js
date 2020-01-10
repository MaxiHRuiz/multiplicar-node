const fs = require('fs');
var colors = require('colors');
//const fs = require('express'); librerias de terceros
//const fs = require('./fs'); libreria/paquetes propios


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor introducido no es un numero');
            return;
        }
        let contenido = '';
        for (let i = 0; i <= limite; i++) {
            contenido += base * i + '\n';
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {

    console.log('===================='.red);
    for (let index = 0; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base * index}`);
    }
    console.log('===================='.red);
}

// Exporto la logica para usar en app.js
module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}