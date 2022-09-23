const { Device, DeviceSchema } = require('./device.model');
const { Gateway, GatewaySchema } = require('./gateway.model');

const setupModels = (sequelize) => {
  Gateway.init(GatewaySchema, Gateway.config(sequelize));
  Device.init(DeviceSchema, Device.config(sequelize));

  Gateway.associate(sequelize.models);
  Device.associate(sequelize.models);
};

module.exports = setupModels;
