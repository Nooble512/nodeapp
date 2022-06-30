const express = require('express');
const app = express();
const port = 8080

app.get('/integrantes', function(req, res) {
    res.json({
        Integrantes: [
            {
                Nombre: "Bryan Zunun Marto",
                Matricula:"183388",
                Grupo:"A"
            },
            {
                Nombre: "Jorge Roberto Aguirre Liy",
                Matricula:"183386",
                Grupo:"B"
            }
        ]
    });
});

app.get('/', async(_req, res, _next) => {
    try {
        res.send("Prueba pipeline clase");
    } catch (error) {
        healtcheck.message = error;
        res.status(503).send();
    }
});

app.listen(port, function(req, res) {
    console.log("Server is running at port ",port);
});