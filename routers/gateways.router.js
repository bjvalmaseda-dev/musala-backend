const { Router } = require('express');
const GatewayService = require('./../services/gateway.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  getGatewaySchema,
  createGatewaySchema,
  updateGatewaySchema,
} = require('./../schemas/gateway.schema');

const router = Router();
const service = new GatewayService();

router.get('/', async (req, res, next) => {
  try {
    const gateways = await service.find();
    res.json(gateways);
  } catch (e) {
    next(e);
  }
});

router.get(
  '/:id',
  validatorHandler(getGatewaySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const gateway = await service.findOne(id);
      res.json(gateway);
    } catch (e) {
      next(e);
    }
  }
);

router.post(
  '/',
  validatorHandler(createGatewaySchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newGateway = await service.create(data);
      res.status(201).json(newGateway);
    } catch (e) {
      next(e);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getGatewaySchema, 'params'),
  validatorHandler(updateGatewaySchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const gateway = await service.update(id, data);
      res.json(gateway);
    } catch (e) {
      next(e);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getGatewaySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ message: 'Gateway deleted', id });
    } catch (e) {
      next(e);
    }
  }
);

module.exports = router;
