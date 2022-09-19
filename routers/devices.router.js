const { Router } = require('express');
const DeviceService = require('./../services/device.service');
const validatorHandler = require('./../middlewares/validator.handler');

const {
  getDeviceSchema,
  createDeviceSchema,
  updateDeviceSchema,
} = require('./../schemas/device.schema');

const router = Router();
const service = new DeviceService();

router.post(
  '/',
  validatorHandler(createDeviceSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newDevice = await service.create(data);
      res.status(201).json(newDevice);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:uuid',
  validatorHandler(getDeviceSchema, 'params'),
  validatorHandler(updateDeviceSchema, 'body'),
  async (req, res, next) => {
    try {
      const { uuid } = req.params;
      const data = req.body;
      const device = await service.update(uuid, data);
      res.json(device);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:uuid',
  validatorHandler(getDeviceSchema, 'params'),
  async (req, res, next) => {
    try {
      const { uuid } = req.params;
      await service.delete(uuid);
      res.status(201).json({ message: 'Device deleted', uuid });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
