const express = require('express');

const routerApi = require('./routers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "everything's is OK, we are aboard" });
});

routerApi(app);

app.listen(PORT, () => {
  console.info('Api listen at 3000');
});
