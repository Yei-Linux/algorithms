import { expect } from 'chai';
import request from 'supertest';
import express from 'express';
import { AuthRouter } from '../../src/router/auth.route';

describe('Auth Router', () => {
  const app = express();
  app.use('/api/v1/auth', AuthRouter);

  it('Shold create new user', async () => {
    const response = await request(app).post('/sign-up');
    console.log(response);
  });
});
