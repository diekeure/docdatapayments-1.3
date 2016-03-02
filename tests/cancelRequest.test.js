import Docdata from '../lib/docdata';
import Config from './config';
import CreateStubs from './createRequest.stubs';
import StartStubs from './startRequest.stubs';
import CancelStubs from './cancelRequest.stubs';

var sinon = require('sinon');
var soapStub = require('soap/soap-stub');
var chai = require("chai");
var should = chai.should();
var assert = require('assert');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

describe('Docdata Payments Cancel', function() {
    let client;

    beforeEach(function(done) {
        client = new Docdata.SoapClient(Config.wsdl, Config.merchant.name, Config.merchant.password)
        done();
    });

    it('should return a cancel response NO_PAYMENTS', function(){
        this.timeout(10000);
        let request = client.create(CreateStubs.getValidCreateRequest()).then(
            function (createResult) {
                request.should.be.fulfilled,
                    createResult.should.be.an('object'),
                    createResult.should.have.property('key'),
                    createResult.should.have.property('success')

                //start cancel request
                let cancelRequest = CancelStubs.getCancelRequestWithKey(createResult.key);
                let cancelResult = client.cancel(cancelRequest);

                cancelResult.then(function(){}, function(err){
                    "use strict";
                    console.log(err);
                })
                return Promise.all([
                    cancelResult.should.eventually.be.fulfilled,
                    cancelResult.should.eventually.be.an('object'),
                    cancelResult.should.eventually.have.property('result').and.equal('NO_PAYMENTS')
                ]);
            },
            function (e) {
                assert.fail("Expected to pass.");
            }
        );
        return request;
    });

    it('should return a cancel response SUCCESS', function(){
        this.timeout(10000);
        let request = client.create(CreateStubs.getValidCreateRequest()).then(
            function (createResult) {
                request.should.be.fulfilled,
                    createResult.should.be.an('object'),
                    createResult.should.have.property('key'),
                    createResult.should.have.property('success')


                //start statusrequest
                let startRequest = StartStubs.getStartRequestWithKey(createResult.key);
                let startResult = client.start(startRequest);

                startResult.then(function(){}, function(err){
                    "use strict";
                    console.log(err);
                })
                return Promise.all([
                    startResult.should.eventually.be.fulfilled,
                    startResult.should.eventually.be.an('object'),
                    startResult.should.eventually.have.property('paymentResponse'),
                    startResult.should.eventually.have.deep.property('paymentResponse.paymentSuccess'),
                    startResult.should.eventually.have.deep.property('paymentResponse.paymentSuccess.status').and.equal('AUTHORIZED'),
                ]).then(function(){
                    "use strict";
                    //start cancel request
                    let cancelRequest = CancelStubs.getCancelRequestWithKey(createResult.key);
                    let cancelResult = client.cancel(cancelRequest);

                    cancelResult.then(function(){}, function(err){
                        "use strict";
                        console.log(err);
                    })
                    return Promise.all([
                        cancelResult.should.eventually.be.fulfilled,
                        cancelResult.should.eventually.be.an('object'),
                        cancelResult.should.eventually.have.property('result').and.equal('SUCCESS')
                    ]);
                });

            },
            function (e) {
                assert.fail("Expected to pass.");
            }
        );
        return request;
    });

});