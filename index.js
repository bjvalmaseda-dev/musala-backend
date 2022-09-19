const express = require('express');

const routerApi = require('./routers');
const {
  logErrors,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/errors.handler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "everything's is OK, we are aboard" });
});

routerApi(app);

app.use([logErrors, boomErrorHandler, ormErrorHandler, errorHandler]);
app.listen(PORT, () => {
  console.info('Api listen at 3000');
});
