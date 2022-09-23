const app = require('./../app');
const request = require('supertest');
const sequelize = require('./../libs/sequelize');

const data = {
  name: 'Gateway 1',
  ip: '192.168.1.1',
  devices: [
    {
      vendor: 'Vendor 1',
      status: true,
    },
    {
      vendor: 'Vendor 2',
      status: true,
    },
  ],
};

const badData = {
  name: 'Gateway 1',
  ip: '192.168.1.',
};

describe('Gateways API', () => {
  beforeAll(async () => {
    return await sequelize.sync();
  });

  afterAll(async () => {
    return await sequelize.drop();
  });

  it('create gateway', async () => {
    const res = await request(app).post('/api/v1/gateways').send(data);
    expect(res.statusCode).toEqual(201);
  });

  it('should show all gateways', async () => {
    const res = await request(app).get('/api/v1/gateways');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
  });

  it('should update gateway', async () => {
    const newIp = '1.1.1.1';
    const res = await request(app).patch('/api/v1/gateways/1').send({
      ip: newIp,
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.ip).toEqual(newIp);
  });

  it('delete a gateway', async () => {
    const res = await request(app).delete('/api/v1/gateways/1');
    expect(res.statusCode).toEqual(201);
    const gateways = await request(app).get('/api/v1/gateways');
    expect(gateways.body).toHaveLength(0);
  });
});

describe('Gateway eror handler', () => {
  beforeAll(async () => {
    return await sequelize.sync();
  });

  afterAll(async () => {
    return await sequelize.drop();
  });
  it('ip validation', async () => {
    const res = await request(app).post('/api/v1/gateways').send(badData);
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(
      '"ip" must be a valid ip address of one of the following versions [ipv4] with a optional CIDR'
    );
  });

  it('not found', async () => {
    const res = await request(app).get('/api/v1/gateways/21');
    expect(res.statusCode).toEqual(404);
  });
});

describe('Devices', () => {
  beforeAll(async () => {
    return await sequelize.sync();
  });

  afterAll(async () => {
    return await sequelize.drop();
  });

  it('create a new device', async () => {
    const {
      body: { id },
    } = await request(app).post('/api/v1/gateways').send(data);

    const res = await request(app).post('/api/v1/devices').send({
      gatewayId: id,
      vendor: 'Vendor',
      status: false,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body.vendor).toEqual('Vendor');
  });

  it('delete a device', async () => {
    const {
      body: { id, devices },
    } = await request(app).post('/api/v1/gateways').send(data);
    const res = await request(app).delete(`/api/v1/devices/${devices[0].uid}`);
    const gateway = await request(app).get(`/api/v1/gateways/${id}`);
    expect(res.statusCode).toEqual(200);
    expect(gateway.body.devices).toHaveLength(1);
  });

  it('update a device', async () => {
    const {
      body: { id, devices },
    } = await request(app).post('/api/v1/gateways').send(data);
    const res = await request(app)
      .patch(`/api/v1/devices/${devices[0].uid}`)
      .send({ vendor: 'Vendor updated' });
    const gateway = await request(app).get(`/api/v1/gateways/${id}`);
    const vendorIndex = gateway.body.devices.findIndex(
      (device) => device.uid === res.body.uid
    );
    expect(res.statusCode).toEqual(200);
    expect(gateway.body.devices[vendorIndex].vendor).toEqual('Vendor updated');
  });
});
