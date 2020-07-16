const routes = require('express').Router();
const trackingRoutes = require('./modules/tracking-correios/routes');
const cepRoutes = require('./modules/busca-cep/routes');
const cnpjRoutes     =  require('./modules/consulta-cnpj/routes');

routes.get('/', (req, res) => {
    res.send('<h1>Bem-Vindo</h1><h2>O servidor está em execução.</h2>');
});

routes.use('/api/consultacep', cepRoutes);

routes.use('/api/tracking', trackingRoutes);

routes.use('/api/consultacnpj', cnpjRoutes);

module.exports = routes;