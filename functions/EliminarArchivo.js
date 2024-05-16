const path = require('path');
const fs = require('fs');

module.exports = function EliminarArchivo (nArchivo){

    fs.unlink(path.join(process.cwd(),`/ArchivosTxt/${nArchivo}`),()=>{

    });

}