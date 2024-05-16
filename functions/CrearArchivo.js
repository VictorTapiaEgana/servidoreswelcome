const path = require("path");
const fs = require('fs')


module.exports = function CrearArchivo (nombreA,contenidoA){
    // console.log(path.join(process.cwd(),`ArchivosTxt/${nombreA}`))
    
    fs.writeFile(path.join(process.cwd(),`/ArchivosTxt/${nombreA}`), contenidoA, 'utf8',function (err) {
        if (err) throw err;
    });

    return `Archivo "${nombreA}" Creado Exitosamente`
}