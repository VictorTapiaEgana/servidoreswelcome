
# Servidores Welcome World spa.

Generacionde paginas Web dinamicas desde el backend con Handlebars y Bootstrap, creacion,modificion y eliminacion de archivos planos con FileSystem de nodeJs.  

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
 node server.js
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
