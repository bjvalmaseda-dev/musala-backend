const express = require('express');
const { config } = require('./config/config');
const cors = require('cors');

const routerApi = require('./routers');
const {
  logErrors,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/errors.handler');

const app = express();
const PORT = config.port || 3000;

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({ message: "everything's is OK, we are aboard" });
});

routerApi(app);

app.use([logErrors, boomErrorHandler, ormErrorHandler, errorHandler]);
app.listen(PORT, () => {
  console.info(`API listen at port ${PORT}`);
});
