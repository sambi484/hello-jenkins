var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
  it('respond with hello jenkin', function(done) {
    request(app).get('/').expect('hello jenkin', done);
  });
});
