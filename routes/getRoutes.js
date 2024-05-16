const express = require('express');
const router = express.Router();
const { ArchivoCreados } = require('../assets/globales')

router.get('/',(req,res)=>{   
    res.render('index.hbs')
});

router.get('/creararchivo',(req,res)=>{
    res.render('creararchivo.hbs')
});

router.get('/leerarchivo',(req,res)=>{
    res.render('leerarchivo.hbs',{
        ArchivoCreados:ArchivoCreados
    });
})

router.get('/renombrararchivos',(req,res)=>{
    res.render('renombrararchivos.hbs',{
        ArchivoCreados:ArchivoCreados
    })
})

router.get('/eliminararchivo',(req,res)=>{
    res.render('eliminararchivo.hbs',{
        ArchivoCreados:ArchivoCreados
    })
})

module.exports = router;