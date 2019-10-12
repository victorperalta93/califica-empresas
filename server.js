const express = require('express');
const app = express();


// crear empresa
// listar datos
// añadir calificación
// borrar calificación
app.post('/crear-empresa',(req,res) => {
    
});

app.get('/listar-datos',(req,res) =>{

});

app.post('/add-calif',(req,res) =>{

});

app.delete('/rm-calif',(req,res) =>{

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));