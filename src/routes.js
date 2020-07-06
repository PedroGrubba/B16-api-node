const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('<h1>Bem-Vindo</h1><h2>O servidor está em execução.</h2>');
});

//routes.use('/api', ongsRoute);

module.exports = routes;