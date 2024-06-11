const request = require('supertest');
const app = require('../src/app');
const req = request(app);

describe('GET all /lots', () => {
    it('should get all available lots', async () => {
        const res = await req.get('/lots');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

// describe('POST new /items', () => {
//     it('should create a new item', async () => {
//         const res = await req.post('/items')
//             .send({
//                 plat_nomor: 'B 123 31',
//                 warna: 'Biru',
//                 tipe: 'MPV'
//             });
        
//         expect(res.statusCode).toEqual(201);
//         expect(res.body).toBeInstanceOf(Object);
//     });
// });