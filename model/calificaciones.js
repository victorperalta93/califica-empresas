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

        this.db.conn.run(sql,(err) => {
            if (err) 
                throw err;
        });
    }

    add(usuario,empresa,valor){
        return this.db.conn.run(`INSERT INTO calificaciones (usuario,empresa,valor) 
                                VALUES (?,?,?)`,[usuario,empresa,valor],(err) =>{
                                    if(err)
                                        throw err
                                })
    }

    delete(id){
        return this.db.conn.run('DELETE FROM calificaciones WHERE id=?',
                                [id],(err) =>{
                                    if(err)
                                        throw err
                                })
    }

    getAll(callback){
        this.db.conn.all('SELECT * FROM calificaciones',(err, rows) => {
            if (err) 
                throw err;
            else
                return callback(rows);
        });
    }
}

module.exports = Calificaciones