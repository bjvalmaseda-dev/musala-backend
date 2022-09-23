const { Router } = require('express');
const gatewaysRouter = require('./gateways.router');
const devicesRouter = require('./devices.router');

const routerApi = (app) => {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/gateways', gatewaysRouter);
  router.use('/devices', devicesRouter);
};

module.exports = routerApi;
