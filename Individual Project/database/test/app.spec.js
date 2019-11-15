

const chai = require('chai');
const chaiHTTP = require('chai-http');
const app = require('../server');

chai.use(chaiHTTP);

describe('server', () => {

    it('add property', (done) => {
        chai.request(app)
        .post('/listings/add')
        .send({
            "address": "455 Some Road",
            "postcode": "M50 2LB",
            "price": 129050,
            "Hold": "free"
        })
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.body.address).to.eq('455 Some Road');
            done();
        })  
    });

    it('delete property', () => {
        chai.request(app)
        .delete('/listings/delete/4')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.body).to.eq('deleted');
            done();        
        })
    });

    it('update property', () => {
        chai.request(app)
        .post('/listings/update')
        .send({
            "id": 1,
            "address": "124 Home Lane"
        })
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.body).to.eq('updated');
            done();
        })
    });

});