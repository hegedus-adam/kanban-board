import supertest from 'supertest';
import express from 'express';
import { router } from './router.mjs';

const app = express();
app.use(router);

describe('router', () => {
  beforeEach(() => {

  });

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
    expect(text).toBe('Identity service');
  });
});
