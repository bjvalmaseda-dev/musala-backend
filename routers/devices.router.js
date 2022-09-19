const { Router } = require('express');

const router = Router();

router.post('/', async (req, res) => {
  const data = req.body;
  res.json(data);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({ data, id });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

module.exports = router;
