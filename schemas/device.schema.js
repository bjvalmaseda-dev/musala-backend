const Joi = require('joi');

const uuid = Joi.string().guid({ version: ['uuidv4'] });
const vendor = Joi.string();
const status = Joi.boolean();
const gatewayId = Joi.number().integer();
const getDeviceSchema = Joi.object({
  uuid: uuid.required(),
});

const createDeviceSchema = Joi.object({
  vendor: vendor.required(),
  status,
  gatewayId: gatewayId.required(),
});

const updateDeviceSchema = Joi.object({
  status,
  vendor,
});

module.exports = { getDeviceSchema, createDeviceSchema, updateDeviceSchema };
