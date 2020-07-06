const routes = require('express').Router();
const { getTracking } = require('./controller');

routes.get('/tracking/:code', getTracking);

module.exports = routes;