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
        return this.db.conn.all('SELECT * FROM empresas')
    }
}

module.exports = Empresas