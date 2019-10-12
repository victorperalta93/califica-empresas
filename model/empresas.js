class Empresas{
    constructor(db){
        this.db = db
    }

    createTable(){
        const sql = `CREATE TABLE IF NOT EXISTS empresas(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nombre TEXT
        )`

        return this.db.conn.run(sql)
    }

    add(nombre){
        return this.db.conn.run(`INSERT INTO empresas (nombre) VALUES (?)`
                                ,[nombre])
    }

    delete(nombre){
        return this.db.conn.run('DELETE FROM empresas WHERE nombre=?',
                                [nombre])
    }

    getAll(){
        const sql = `SELECT * FROM empresas`

        this.db.conn.all(sql,(err, rows) => {
            if (err) 
                throw err;
            else
                callback(rows);
        });
    }
}

module.exports = Empresas