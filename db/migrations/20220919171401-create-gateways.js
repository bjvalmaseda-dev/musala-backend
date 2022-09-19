/* eslint-disable no-unused-vars */
'use strict';
const { GATEWAYS_TABLE, GatewaySchema } = require('./../models/gateway.model');
const { DEVICES_TABLE, DeviceSchema } = require('./../models/device.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(GATEWAYS_TABLE, GatewaySchema);
    await queryInterface.createTable(DEVICES_TABLE, DeviceSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(DEVICES_TABLE);
    await queryInterface.dropTable(GATEWAYS_TABLE);
  },
};
