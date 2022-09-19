const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class DeviceService {
  constructor() {}

  async create(data) {
    const device = await models.Device.create(data);
    return device;
  }

  async findOne(uuid) {
    const device = await models.Device.findByPk(uuid, { include: ['gateway'] });
    if (!device) {
      throw boom.notFound('Device not found');
    }
    return device;
  }

  async update(uuid, changes) {
    const device = await this.findOne(uuid);
    const response = await device.update(changes);
    return response;
  }

  async delete(uuid) {
    const device = await this.findOne(uuid);
    await device.destroy();
  }
}

module.exports = DeviceService;
