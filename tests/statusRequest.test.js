import Docdata from '../lib/docdata';
import Config from './config';
import CreateStubs from './createRequest.stubs';
import StatusStubs from './statusRequest.stubs';

var sinon = require('sinon');
var soapStub = require('soap/soap-stub');
var chai = require("chai");
var should = chai.should();
var assert = require('assert');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

describe('Docdata Payments STATUS', function() {
    let client;

    beforeEach(function(done) {
        client = new Docdata.SoapClient(Config.wsdl, Config.merchant.name, Config.merchant.password)
        done();
    });


    it('should send a report without a payment, for a created order', function(){
        this.timeout(10000);
        let request = client.create(CreateStubs.getValidCreateRequest()).then(
            function (createResult) {
                request.should.be.fulfilled,
                createResult.should.be.an('object'),
                createResult.should.have.property('key'),
                createResult.should.have.property('success')

                //start statusrequest
                let statusRequest = StatusStubs.getStatusRequestWithKey(createResult.key);
                let statusResult = client.status(statusRequest);
                return Promise.all([
                    statusResult.should.eventually.be.fulfilled,
                    statusResult.should.eventually.be.an('object'),
                    statusResult.should.eventually.have.property('report'),
                    statusResult.should.eventually.have.deep.property('report.approximateTotals'),
                    statusResult.should.eventually.not.have.deep.property('report.payment')
                ]);
            },
            function (e) {
                assert.fail("Expected to pass.");
            }
        );
        return request;
    });

    it('should fail for a non-existing order', function(){
        this.timeout(10000);

        let statusRequest = StatusStubs.getStatusRequestWithKey('testje');
        return client.status(statusRequest).then(
            function () {
                assert.fail("Expected to fail.");
            },
            function (e) {
                e.should.be.an.instanceof(Docdata.StatusErrors);
                e.should.have.property('error');
                e.error.should.have.property('attributes');
                e.error.attributes.should.have.property('code');
                e.error.attributes.code.should.equal('REQUEST_DATA_INCORRECT');
            }
        );
    });

});