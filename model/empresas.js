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

    addEmpresa(nombre){
        return this.db.conn.run(`INSERT INTO empresas (nombre) VALUES (?)`
                                ,[nombre])
    }
}

module.exports = Empresas