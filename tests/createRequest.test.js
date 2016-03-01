import Docdata from '../lib/docdata';
import Config from './config';
import CreateStubs from './createRequest.stubs';

var sinon = require('sinon');
var soapStub = require('soap/soap-stub');
var chai = require("chai");
var should = chai.should();
var assert = require('assert');
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
        return client.create({}).then(
            function () {
                assert.fail("Expected to fail.");
            },
            function (e) {
                e.should.be.an.instanceof(Docdata.CreateErrors);
                e.should.have.property('error');
                e.error.should.have.property('attributes');
                e.error.attributes.should.have.property('code');
                e.error.attributes.code.should.equal('REQUEST_DATA_INCORRECT');
            }
        );
    });

    it('should reject on incorrect data', function() {
        let data = CreateStubs.getValidCreateRequest();
        delete data.billTo;
        this.timeout(10000); //first time wsdl is read
        return client.create(data).then(
            function () {
                assert.fail("Expected to fail.");
            },
            function (e) {
                e.should.be.an.instanceof(Docdata.CreateErrors);
                e.should.have.property('error');
                e.error.should.have.property('attributes');
                e.error.attributes.should.have.property('code');
                e.error.attributes.code.should.equal('REQUEST_DATA_INCORRECT');
            }
        );
    });

    it('should reject on incorrect merchant credentials', function() {
        let data = CreateStubs.getValidCreateRequest();
        data.merchant.password = 'test';
        this.timeout(10000); //first time wsdl is read
        return client.create(data).then(
            function () {
                assert.fail("Expected to fail.");
            },
            function (e) {
                e.should.be.an.instanceof(Docdata.CreateErrors);
                e.should.have.property('error');
                e.error.should.have.property('attributes');
                e.error.attributes.should.have.property('code');
                e.error.attributes.code.should.equal('SECURITY_ERROR');
            }
        );
    });

    it('should work with correct data', function(){
        let result = client.create(CreateStubs.getValidCreateRequest());
        return Promise.all([
            result.should.eventually.be.fulfilled,
            result.should.eventually.be.an('object'),
            result.should.eventually.have.property('key'),
            result.should.eventually.have.property('success')
        ]);
    });
    
});