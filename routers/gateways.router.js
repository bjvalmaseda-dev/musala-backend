const { Router } = require('express');
const GatewayService = require('./../services/gateway.service');

const router = Router();
const service = new GatewayService();

router.get('/', async (req, res) => {
  const gateways = await service.find();
  res.json(gateways);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const gateway = await service.findOne(id);
  res.json(gateway);
});

router.post('/', async (req, res) => {
  const data = req.body;
  const newGateway = await service.create(data);
  res.status(201).json(newGateway);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const gateway = await service.update(id, data);
  res.json(gateway);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await service.delete(id);
  res.status(201).json({ message: 'Gateway deleted', id });
});

module.exports = router;
