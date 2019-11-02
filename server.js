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

app.post('/crear-empresa',(req,res) => {
    let salida_sql = empr.add(req.body.nombre)
    res.send(salida_sql); 
}); 

app.get('/listar-empresas',(req,res) =>{
    empr.getAll(function(tabla){
        res.send(tabla)
    });
});

app.get('/listar-datos',(req,res) =>{
    calif.getAll(function(tabla){
        res.send(tabla)
    });
});

app.post('/add-calif',(req,res) =>{
    res.send(calif.add(req.body.usuario,req.body.empresa,req.body.valor));
});

app.put('/actualizar-calif/:usuario/:empresa/:valor', (req,res) =>{
    res.send(calif.actualizar(req.params.usuario,req.params.empresa,req.params.valor))
})

app.delete('/rm-calif',(req,res) =>{
    calif.delete(req.body.id);
});

app.delete('/rm-empresa',(req,res) =>{
    empr.delete(req.body.nombre)
});


app.listen(PORT, () => console.log(`Servidor iniciado en puerto: ${PORT}`));