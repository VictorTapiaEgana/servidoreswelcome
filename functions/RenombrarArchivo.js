const fs = require('fs');
const path = require('path');
const { ArchivoCreados } = require('../assets/globales');


module.exports =  function RenombrarArchivos(nAnterior,nNuevo){

    fs.rename( path.join(process.cwd(),`/ArchivosTxt/${nAnterior}`),
               path.join(process.cwd(),`/ArchivosTxt/${nNuevo}`), ()=>{
                
    });
}