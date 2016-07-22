import app from '../../src/app/app';
import request from 'supertest';

import finish from '../helpers/finish';

describe('Api version.', () => {
  describe('Get /api/version', () => {
    it('return version', (done) => {
      var info = {
        version: "1.0"
      };

      request(app)
        .get('/api/version')
        .expect('Content-Type', /json/)
        .expect(200, info, finish(done));
    });
  });
})
