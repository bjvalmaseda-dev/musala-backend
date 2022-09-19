const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class GatewayService {
  constructor() {}

  async create(data) {
    const gateway = await models.Gateway.create(data);
    return gateway;
  }

  async find() {
    const gateways = await models.Gateway.findAll();
    return gateways;
  }

  async findOne(id) {
    const gateway = await models.Gateway.findByPk(id, { include: ['devices'] });
    if (!gateway) {
      throw boom.notFound('Gateway not found');
    }
    return gateway;
  }

  async update(id, changes) {
    const gateway = await this.findOne(id);
    const response = await gateway.update(changes);
    return response;
  }

  async delete(id) {
    const gateway = await this.findOne(id);
    await gateway.destroy();
  }
}

module.exports = GatewayService;
