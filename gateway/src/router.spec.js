const supertest = require('supertest');
const express = require('express');
const { router } = require('./router');

const app = express();
app.use(router);

describe('router', () => {
  it('should send response to /', async () => {
    const response = await supertest(app)
      .get('/');

    const {
      status,
      text,
      header: {
        'content-type': contentType,
      },
    } = response;

    expect(status).toEqual(200);
    expect(contentType).toEqual('text/html; charset=utf-8');
    expect(text).toBe('API Gateway service');
  });
});
