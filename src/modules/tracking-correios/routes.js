const routes = require('express').Router();
const { getTracking } = require('./controller');

routes.get('/:code', getTracking);

module.exports = routes;