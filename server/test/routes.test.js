let app = require('../server');
let testServer = require('supertest');

describe('Test server routes', () => {

    test('test if app connects', async () => {
        const response = await testServer(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('root');
    });

    test('check that the get route returns status OK', async () => {
        const response = await testServer(app).get('/koala');
        expect(response.statusCode).toBe(200);
    })
});