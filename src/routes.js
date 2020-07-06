const routes = require('express').Router();
const trackingRoutes = require('./modules/tracking-correios/routes');

routes.get('/', (req, res) => {
    res.send('<h1>Bem-Vindo</h1><h2>O servidor está em execução.</h2>');
});

routes.use('/api', trackingRoutes);

module.exports = routes;