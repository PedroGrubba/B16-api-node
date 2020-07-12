const routes = require('express').Router();
const { consultaCNPJ } = require('./controller');

routes.get('/:cnpj', consultaCNPJ);

module.exports = routes;