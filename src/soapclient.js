import Merchant from './merchant';
import CreateRequest from './createrequest';
import CreateErrors from './createerrors';
import StatusRequest from './statusrequest';
import StatusErrors from './statuserrors';
import StartRequest from './startrequest';
import StartErrors from './starterrors';


var soap = require('soap');
var debugSoap = require('debug')('docdata:soap');

let instance = null;

class SoapClient {

    _client = null;
    _stub = null;
    _username = "";
    _password = "";
    _wsdl;

    merchant;

    constructor(wsdl){
        var self = this;
        this._wsdl = wsdl;

        if(!instance){
            instance = self;
        }
        return instance;
    }

    setStub(stub){
        this._stub = stub;
    }

    restoreStub(){
        this._stub = null;
    }

    getClient(){
        return new Promise(function(resolve, reject){
            if(instance._stub !== null){
                return resolve(instance._stub);
            } else {
                if(instance._client !== null){
                    return resolve(instance._client);
                } else {
                    soap.createClient(instance._wsdl, function(err, soapclient) {
                        if(err) return reject(err);

                        instance._client = soapclient;
                        instance.merchant = new Merchant();
                        instance.merchant.name = instance._username;
                        instance.merchant.password = instance._password;
                        return resolve(soapclient);
                    });
                }

            }

        });
    }

    create(request){
        removeNulls(request);
        var self = this;
        return new Promise(function(resolve, reject){
            self.getClient().then(function(c){
                c.create(request, function(err, createResult, raw){
                    if(instance._client) debugSoap(instance._client.lastRequest);
                    debugSoap(raw);
                    if(err) return reject(err);
                    if(createResult.createSuccess && createResult.createSuccess.key){
                        return resolve(createResult.createSuccess);
                    } else if(createResult.createErrors) {
                        let err = new CreateErrors();
                        err.error = createResult.createErrors.error[0];
                        return reject(err);
                    } else {
                        console.log(createResult);
                    }
                });
            }, function(err){
                reject(err);
            });
        })
    }

    start(request){
        removeNulls(request);
        var self = this;
        return new Promise(function(resolve, reject){
            self.getClient().then(function(c){
                c.start(request, function(err, startResult, raw){
                    if(instance._client) debugSoap(instance._client.lastRequest);
                    debugSoap(raw);
                    if(err) return reject(err);
                    if(startResult.startSuccess){
                        return resolve(startResult.startSuccess);
                    } else if(startResult.startErrors) {
                        let err = new StartErrors();
                        err.error = startResult.startErrors.error[0];
                        return reject(err);
                    } else {
                        return reject(startResult);
                    }
                });
            }, function(err){
                reject(err);
            });
        })
    }

    status(request){
        removeNulls(request);
        let self = this;
        return new Promise(function(resolve, reject){
            self.getClient().then(function(c){
                c.status(request, function(err, statusResult, raw){
                    if(instance._client) debugSoap(instance._client.lastRequest);
                    debugSoap(raw);
                    if(err) return reject(err);
                    if(statusResult.statusSuccess){
                        return resolve(statusResult.statusSuccess);
                    } else if(statusResult.statusErrors) {
                        let err = new StatusErrors();
                        err.error = statusResult.statusErrors.error[0];
                        return reject(err);
                    } else {
                        console.log(statusResult);
                    }
                });
            }, function(err){
                reject(err);
            });
        })
    }

    cancel(request){
        removeNulls(request);
        var self = this;
        return new Promise(function(resolve, reject){
            self.getClient().then(function(c){
                c.cancel(request, function(err, cancelResult, raw){
                    if(instance._client) debugSoap(instance._client.lastRequest);
                    debugSoap(raw);
                    if(err) return reject(err);
                    if(cancelResult.cancelSuccess){
                        return resolve(cancelResult.cancelSuccess);
                    } else if(cancelResult.cancelErrors) {
                        let err = new CancelErrors();
                        err.error = cancelResult.cancelErrors.error[0];
                        return reject(err);
                    } else {
                        return reject(cancelResult);
                    }
                });
            }, function(err){
                reject(err);
            });
        })
    }

    get lastRequest(){
        if(instance._client){
            return instance._client.lastRequest;
        }
        return null;

    }

}

function removeNulls(obj){
    var isArray = obj instanceof Array;
    for (var k in obj){
        if (obj[k]===null) isArray ? obj.splice(k,1) : delete obj[k];
        else if (typeof obj[k]=="object") removeNulls(obj[k]);
    }
}

export default SoapClient;