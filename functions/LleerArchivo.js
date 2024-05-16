const path = require("path");
const fs = require('fs').promises;

module.exports = async function LleerArchivo (nArchivo){
    
    return fs.readFile(path.join(process.cwd(),`/ArchivosTxt/${nArchivo}` ), 'utf8')

        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error);
            throw error;
        });
  
}