const { Model, DataTypes, Sequelize } = require('sequelize');

const GATEWAYS_TABLE = 'gateways';

const GatewaySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Gateway extends Model {
  static associate(models) {
    this.hasMany(models.Device, { as: 'devices', foreignKey: 'gatewayId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GATEWAYS_TABLE,
      modelName: 'Gateway',
      timestamps: false,
    };
  }
}

module.exports = { GATEWAYS_TABLE, GatewaySchema, Gateway };
