const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const ip = Joi.string().ip({ version: ['ipv4'] });

const getGatewaySchema = Joi.object({
  id: id.required(),
});

const createGatewaySchema = Joi.object({
  name: name.required(),
  ip: ip.required(),
});

const updateGatewaySchema = Joi.object({
  name,
  ip,
});

module.exports = { getGatewaySchema, createGatewaySchema, updateGatewaySchema };
