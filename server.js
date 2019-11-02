const express = require('express');
const app     = express();
const DB      = require('./model/db')
const calificaciones = require('./model/calificaciones')
const empresas       = require('./model/empresas')

const PORT = process.env.PORT || 5000;

const db = new DB('./model/database.sqlite3')
const calif = new calificaciones(db)
const empr  = new empresas(db)

// crear tablas
calif.createTable();
empr.createTable();

// Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/empresa/:nombre',(req,res) => {
    let salida_sql = empr.add(req.params.nombre)
    res.send(salida_sql); 
}); 

app.get('/empresas',(req,res) =>{
    empr.getAll(function(tabla){
        res.send(tabla)
    });
});

app.get('/datos',(req,res) =>{
    calif.getAll(function(tabla){
        res.send(tabla)
    });
});

app.post('/calificacion/:usuario/:empresa/:valor',(req,res) =>{
    res.send(calif.add(req.params.usuario,req.params.empresa,req.params.valor));
});

app.put('/calificacion/:usuario/:empresa/:valor', (req,res) =>{
    res.send(calif.actualizar(req.params.usuario,req.params.empresa,req.params.valor))
})

app.delete('/calificacion/:id',(req,res) =>{
    res.send(calif.delete(req.params.id));
});

app.delete('/empresa/:nombre',(req,res) =>{
    res.send(empr.delete(req.body.nombre));
});


app.listen(PORT, () => console.log(`Servidor iniciado en puerto: ${PORT}`));

module.exports = app;