var request = require('supertest');
app = require('../server.js');

describe("POST empresa", function(){
    it('deberia añadir una nueva empresa', function(done){
        request(app)
            .post('/empresa/nombre')
            .expect('Content-Type',/json/)
            .expect(200,done);
    });
});

describe("GET empresas", function(){
    it('deberia recibir una lista de las empresas', function(done){
        request(app)
            .get('/empresas')
            .expect('Content-Type',/json/)
            .expect(200,done);
    });

    it('deberia recibir todos los datos almacenados', function(done){
        request(app)
            .get('/datos')
            .expect('Content-Type',/json/)
            .expect(200,done);
    });
});

describe("POST calificacion", function(){
    it('deberia añadir una nueva calificación', function(done){
        request(app)
            .post('/calificacion/Juan/Northgate-Arinso/6')
            .expect('Content-Type',/json/)
            .expect(200,done);
    });
});

describe("PUT calificacion", function(){
    it('deberia actualizar una calificación existente', function(done){
        request(app)
            .put('/calificacion/Juan/Northgate-Arinso/8')
            .expect('Content-Type',/json/)
            .expect(200,done);
    });
});

describe("DELETE calificacion", function(){
    it('deberia eliminar una calificación existente', function(done){
        request(app)
            .delete('/calificacion/1')
            .expect('Content-Type',/json/)
            .expect(200,done);
    });
});
