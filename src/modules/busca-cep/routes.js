const routes = require('express').Router();
const { consultacep } = require('./controller');

routes.get('/:cep', consultacep);

module.exports = routes;