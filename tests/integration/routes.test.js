const request = require('supertest');
const app = require('../../graphe/app');

test('should respond with a 200 with no query parameters', () => {
  return request(app)
    .get('/')
    .expect(200);
});

test('should respond with a 404 with no query parameters', () => {
  return request(app)
    .get('/ddd')
    .expect(500);
});
