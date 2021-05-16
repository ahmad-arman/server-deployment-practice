'use strict';

const server = require('../server.js');

const supertest = require('supertest');

const request = supertest(server.app);

describe('server', () => {
  it('should get 404  ', async () => {
    const response = await request.get('/foo');
    expect(response.status).toBe(404);
  });

  it('should get a server home page', async () => {
    //arrange
    let route = '/';
    //act
    const response = await request.get('/');
    //assert
    expect(response.status).toBe(200);
    expect(response.text).toBe('welcome to my server');
  });

  it('should get an error route', async () => {
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });


});