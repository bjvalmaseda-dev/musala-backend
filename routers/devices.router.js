const { Router } = require('express');
const DeviceService = require('./../services/device.service');

const router = Router();
const service = new DeviceService();

router.post('/', async (req, res) => {
  const data = req.body;
  const newDevice = await service.create(data);
  res.status(201).json(newDevice);
});

router.patch('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  const data = req.body;
  const device = await service.update(uuid, data);
  res.json(device);
});

router.delete('/:uuid', async (req, res) => {
  const { uuid } = req.params;
  await service.delete(uuid);
  res.status(201).json({ message: 'Device deleted', uuid });
});

module.exports = router;
