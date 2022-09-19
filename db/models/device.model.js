const { Model, DataTypes, Sequelize } = require('sequelize');
const { GATEWAYS_TABLE } = require('./gateway.model');

const DEVICES_TABLE = 'devices';

const DeviceSchema = {
  uid: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  vendor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  dateCreated: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'date_created',
    defaultValue: Sequelize.NOW,
  },
  gatewayId: {
    field: 'gateway_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: GATEWAYS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Device extends Model {
  static associate(models) {
    this.belongsTo(models.Gateway, { as: 'gateway' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DEVICES_TABLE,
      modelName: 'Device',
      timestamps: false,
    };
  }
}

module.exports = { DEVICES_TABLE, DeviceSchema, Device };
