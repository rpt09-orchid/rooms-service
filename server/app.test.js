const supertest = require('supertest');
const app = require('./app.js');

<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rooms');
const db = mongoose.connection;

=======
>>>>>>> master
const request = supertest(app);

function mockFunctions() {
  return {findByID: jest.fn()}
}
jest.mock('../database/models/room.js', () => mockFunctions());
const storage = require.requireMock('../database/models/room.js');

<<<<<<< HEAD

=======
>>>>>>> master
describe('server', () => {
  describe('requests to /', () => {
    test('it should respond to a GET request', (done) => {
      request.get('/').then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    test('it should respond with the index.html', (done) => {
      request.get('/').then((response) => {
        expect(response.text).toContain('id="details"');
        done();
      });
    });

    test('it should respond to a POST request with 404', (done) => {
      request.post('/').then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
    });
  });

  describe('requests to /details/:id', () => {
    test('it should return JSON with a \'data\' key for route \'1/details\'', (done) => {
<<<<<<< HEAD
      storage.findByID.mockImplementation((id, cb) => {
=======
      Room.findByID.mockImplementation((id, cb) => {
>>>>>>> master
        cb(null, [{ id: 'this is a test' }]);
      });
      request.get('/details/1').then((response) => {
        expect(response.body).toHaveProperty('data');
        done();
      });
    });

    test('it should only return a single item inside the data key', (done) => {
      request.get('/details/1').then((response) => {
        expect(response.body.data.length).toBe(1);
        done();
      });
    });

    if(app.databaseSelected) test('it should return 404 for an invalid endpoint', (done) => {
      storage.findByID.mockImplementation((id, cb) => {
          cb('error', null);
        });
        request.get('/details/1').then((response) => {
          expect(response.statusCode).toBe(404);
          done();
        });
      });

      if(app.databaseSelected) test('response message for the invalid message should contain the id', (done) => {
        request.get('/details/1').then((response) => {
          expect(response.body.error).toBe('ID 1 does not exist in database');
          done();
        });
      });
  });
<<<<<<< HEAD


=======
>>>>>>> master
});
