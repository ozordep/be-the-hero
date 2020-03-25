const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({

        "evento": "Semana Omnistack",
        "aluno": "João Pedro Lindo"

    });
});

app.listen(3333);