class Calificaciones{
    constructor(db){
        this.db = db
    }

    createTable(){
        const sql = `CREATE TABLE IF NOT EXISTS calificaciones(
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        usuario TEXT,
                        empresa TEXT,
                        valor INTEGER,
                        FOREIGN KEY(empresa) REFERENCES empresas(nombre)
        )`
    }

    addCalificacion(usuario,empresa,valor){
        return this.db.conn.run(`INSERT INTO calificaciones (usuario,empresa,valor) 
                                VALUES (?,?,?)`,[usuario,empresa,valor])
    }
}

module.exports = Calificaciones