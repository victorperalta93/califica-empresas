class Empresas{
    constructor(db){
        this.db = db
    }

    createTable(){
        const sql = `CREATE TABLE IF NOT EXISTS empresas(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nombre TEXT
        )`

        this.db.conn.run(sql,(err) => {
            if (err) 
                throw err;
        });
    }

    add(nombre){
        return this.db.conn.run(`INSERT INTO empresas (nombre) VALUES (?)`
                                ,[nombre],(err) =>{
                                    if(err)
                                        throw err;
                                })
    }

    delete(nombre){
        return this.db.conn.run('DELETE FROM empresas WHERE nombre=?',
                                [nombre],(err) =>{
                                    if(err)
                                        throw err;
                                })
    }

    getAll(callback){
        const sql = `SELECT * FROM empresas`

        this.db.conn.all(sql,(err, rows) => {
            if (err) 
                throw err;
            else
                return callback(rows);
        });
    }
}

module.exports = Empresas