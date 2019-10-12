const sqlite3 = require('sqlite3')

class DB{
    constructor(dbPath){
        this.conn = new sqlite3.Database(dbPath,(err) =>{
            if(err)
                console.log('No se pudo conectar a la base de datos.',err)
            else
                console.log('Conexión establecida con la base de datos.')
        });
    }
}

module.exports = DB