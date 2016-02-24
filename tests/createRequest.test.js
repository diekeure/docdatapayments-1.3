import Docdata from '../lib/docdata';
import Config from './config';
import CreateStubs from './createRequest.stubs';

var sinon = require('sinon');
var soapStub = require('soap/soap-stub');
var chai = require("chai");
var should = chai.should();
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);


describe('Docdata Payments CREATE', function() {
    let client;

    beforeEach(function(done) {
        client = new Docdata.SoapClient(Config.wsdl, Config.merchant.name, Config.merchant.password)
        done();
    });

    it('should reject on empty data', function() {
        this.timeout(10000); //first time wsdl is read
        return client.create({}).should.be.rejectedWith(Docdata.CreateErrors);
    });

    it('should work with correct data', function(){
        let result = client.create(CreateStubs.getValidCreateRequest());
        return Promise.all([
            result.should.eventually.be.fulfilled,
            result.should.eventually.be.an('object'),
            result.should.eventually.have.property('createSuccess'),
            result.should.eventually.have.deep.property('createSuccess.key'),
            result.should.eventually.have.deep.property('createSuccess.success')
        ]);
    });
    
});