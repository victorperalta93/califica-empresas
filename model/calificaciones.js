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

    add(usuario,empresa,valor){
        return this.db.conn.run(`INSERT INTO calificaciones (usuario,empresa,valor) 
                                VALUES (?,?,?)`,[usuario,empresa,valor])
    }

    delete(id){
        return this.db.conn.run('DELETE FROM calificaciones WHERE id=?',
                                [id])
    }

    getAll(){
        return this.db.conn.all('SELECT * FROM calificaciones')
    }
}

module.exports = Calificaciones