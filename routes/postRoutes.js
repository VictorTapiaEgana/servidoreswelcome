const express = require('express');
const CrearArchivo = require('../functions/CrearArchivo');
const LleerArchivo = require('../functions/LleerArchivo');
const RenombrarArchivo = require('../functions/RenombrarArchivo');
const EliminarArchivo = require('../functions/EliminarArchivo');

const { ArchivoCreados } = require('../assets/globales');


const router = express.Router();

router.post('/creararchivo',(req,res)=>{

    const { nombreArchivo,contenidoArchivo } = req.body;    
    
    const Existe =  ArchivoCreados.find(fil => fil == nombreArchivo)    

    if(Existe != undefined) {
        
        res.render('creararchivo.hbs',{
            resultado: `❌ El archivo "${nombreArchivo}" ya existe.`
        })

    }else{

        const resultado = CrearArchivo(nombreArchivo,contenidoArchivo) 

        ArchivoCreados.push(nombreArchivo)
        
        res.render('creararchivo.hbs',{
            resultado: `${resultado} ✨`
        })
    }    

});

router.post('/leerarchivo',(req,res)=>{

        const { archivoALeer } = req.body;        

        if(archivoALeer != undefined){

          LleerArchivo(archivoALeer)
            .then(datos => {              
              
                res.render('leerarchivo.hbs',{
                    ArchivoCreados:ArchivoCreados,
                    datos: datos
                })

            })
      
            .catch(error => {
                console.error(error);
             });

        }   

});

router.post('/renombrararchivos',(req,res)=>{
    const { archivoALeer,nuevoNombre } = req.body;

    RenombrarArchivo (archivoALeer,nuevoNombre)

    var indice = ArchivoCreados.indexOf(archivoALeer);
    
    if (indice !== -1) {
        ArchivoCreados[indice] = nuevoNombre;
    }    

    res.render('renombrararchivos.hbs',{
        ArchivoCreados:ArchivoCreados,
        mensaje:`Archivo "${archivoALeer}" Renombrado a "${nuevoNombre}"`
    })

});

router.post('/eliminararchivo',(req,res)=>{

    const { archivoeliminar } = req.body;
    
    EliminarArchivo(archivoeliminar)

    const indice = ArchivoCreados.indexOf(archivoeliminar)

    ArchivoCreados.splice(indice,1)

    res.render('eliminararchivo.hbs',{
        ArchivoCreados:ArchivoCreados,
        mensaje:`Archivo "${archivoeliminar}" eliminado exitosamente`
    })
});

module.exports = router;