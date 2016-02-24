import Merchant from './merchant';
import CreateRequest from './createrequest';
import CreateErrors from './createerrors';

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

    constructor(wsdl, username, password){
        var self = this;
        this._wsdl = wsdl;
        this._username = username;
        this._password = password;

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

    create(merchantOrderReference, shopper, totalGrossAmount, billTo, paymentPreferences, description,
           receiptText, menuPreferences, paymentRequest, invoice, includeCosts){
        var self = this;
        var request = new CreateRequest(this.merchant);

        request.merchantOrderReference = merchantOrderReference;
        request.shopper = shopper;
        request.totalGrossAmount = totalGrossAmount;
        request.billTo = billTo;

        if (description !== undefined) {
            request.description = description;
        }
        if (receiptText !== undefined) {
            request.receiptText = receiptText;
        }
        if (paymentPreferences !== undefined) {
            request.paymentPreferences = paymentPreferences;
        }
        if (menuPreferences !== undefined) {
            request.menuPreferences = menuPreferences;
        }
        if (paymentRequest !== undefined) {
            request.paymentRequest = paymentRequest;
        }
        if (invoice !== undefined) {
            request.invoice = invoice;
        }
        if (includeCosts !== undefined) {
            request.includeCosts = includeCosts;
        }

        return new Promise(function(resolve, reject){
            self.getClient().then(function(c){
                c.create(request, function(err, createResult, raw){
                    debugSoap(raw);
                    if(err) return reject(err);
                    if(createResult.createSuccess && createResult.createSuccess.key){
                        return resolve(createResult);
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
}

export default SoapClient;