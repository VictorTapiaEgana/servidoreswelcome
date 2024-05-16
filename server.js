const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const postRoutes = require('./routes/routes');
const getRoutes = require('./routes/getRoutes');

require('dotenv').config();

PORT = process.env.PORT || 3010;

const app = express()

app.use(express.urlencoded({ extended: true }));

app.engine('hbs',exphbs.engine({
                                extname: '.hbs',   
                                layoutsDir:path.join(process.cwd(),'/views') ,
                                partialsDir:path.join(process.cwd(),'/views/componentes') ,
                                defaultLayout:false
                            })
);

app.set('view engine', 'hbs');

app.use('/css',express.static(path.join(process.cwd(),'/node_modules/bootstrap/dist/css')));
app.use('/cssjs',express.static(path.join(process.cwd(),'/node_modules/bootstrap/dist/js')));
app.use('/assets',express.static(path.join(process.cwd(),'/public')));

app.use('/',postRoutes)
app.use('/',getRoutes)

app.listen(PORT,()=>{
    console.log(`Holiwis en el puerto: ${PORT}`)
});