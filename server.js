const express = require('express');
const app     = express();
const DB      = require('./model/db')
const calificaciones = require('./model/calificaciones')
const empresas       = require('./model/empresas')

const db = new DB('./model/database.sqlite3')
const calif = new calificaciones(db)
const empr  = new empresas(db)

// crear tablas
calif.createTable();
empr.createTable();

// Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/crear-empresa',(req,res) => {
    let salida_sql = empr.add(req.body.nombre)
    res.send(salida_sql); 
}); 

app.get('/listar-empresas',(req,res) =>{
    res.send(empr.getAll());
});

app.get('/listar-datos',(req,res) =>{

});

app.post('/add-calif',(req,res) =>{

});

app.delete('/rm-calif',(req,res) =>{

});

app.delete('/rm-empresa',(req,res) =>{

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));