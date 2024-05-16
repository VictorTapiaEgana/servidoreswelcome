# Video del proyecto.

https://www.loom.com/share/9b5e96a3425d49f7b83c52feb505fc2a?sid=0b577113-6379-4e7c-82e2-5097511adc55

# Servidores Welcome World spa.

Generacionde paginas Web dinamicas desde el backend con Handlebars y Bootstrap, creacion,modificacion y eliminacion de archivos planos con FileSystem de nodeJs.  

![](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white)
![](https://img.shields.io/badge/Handlebars.js-000000.svg?style=for-the-badge&logo=handlebarsdotjs&logoColor=white)
![](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white)
![](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)


## Estructura de Carpetas:
```
    📁Servidores Welcome World        
    └── 📁ArchivosTxt        
    └── 📁assets         
        └── globales.js
    └── 📁functions
        └── CrearArchivo.js
        └── EliminarArchivo.js
        └── LleerArchivo.js
        └── RenombrarArchivo.js    
    └── 📁public
        └── 📁images            
            └── logo.png    
    └── 📁routes
        └── getRoutes.js
        └── postRoutes.js
    └── server.js
    └── 📁views
        └── 📁componentes
            └── body_fin.hbs
            └── body_inicio.hbs
            └── navbar.hbs
            └── styles.hbs
        └── creararchivo.hbs
        └── eliminararchivo.hbs
        └── index.hbs
        └── leerarchivo.hbs
        └── renombrararchivos.hbs
```

## Dependencias
```
{
  "dependencies": {
    "bootstrap": "^5.3.3",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-handlebars": "^7.1.2",
    "fs": "^0.0.1-security",
    "jquery": "^3.7.1",   
  }
}

```

## instalacion
```
 git clone https://github.com/VictorTapiaEgana/servidoreswelcome.git
 npm install
 npm start
```

## Menu:

![Crear_Archivo](https://raw.githubusercontent.com/VictorTapiaEgana/servidoreswelcome/master/assets/github/crear.png)
- La aplicacion recuerda los archivos generados.

![Leer_Archivo](https://raw.githubusercontent.com/VictorTapiaEgana/servidoreswelcome/master/assets/github/leer_2.png)

![Leer_Archivos2](https://raw.githubusercontent.com/VictorTapiaEgana/servidoreswelcome/master/assets/github/leer_3.png)

- Renombrar Archivo, en base a los archivos Generados anteriormente.
![Renombrar_Archivo](https://raw.githubusercontent.com/VictorTapiaEgana/servidoreswelcome/master/assets/github/renombrar_1.png)

- Renombrar Archivo, en base a los archivos Generados anteriormente.
![Borrar_ARchivo](https://raw.githubusercontent.com/VictorTapiaEgana/servidoreswelcome/master/assets/github/eliminar.png)
