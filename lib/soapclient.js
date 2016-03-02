'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merchant = require('./merchant');

var _merchant2 = _interopRequireDefault(_merchant);

var _createrequest = require('./createrequest');

var _createrequest2 = _interopRequireDefault(_createrequest);

var _createerrors = require('./createerrors');

var _createerrors2 = _interopRequireDefault(_createerrors);

var _statusrequest = require('./statusrequest');

var _statusrequest2 = _interopRequireDefault(_statusrequest);

var _statuserrors = require('./statuserrors');

var _statuserrors2 = _interopRequireDefault(_statuserrors);

var _startrequest = require('./startrequest');

var _startrequest2 = _interopRequireDefault(_startrequest);

var _starterrors = require('./starterrors');

var _starterrors2 = _interopRequireDefault(_starterrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var soap = require('soap');
var debugSoap = require('debug')('docdata:soap');

var instance = null;

var SoapClient = function () {
    function SoapClient(wsdl) {
        _classCallCheck(this, SoapClient);

        this._client = null;
        this._stub = null;
        this._username = "";
        this._password = "";

        var self = this;
        this._wsdl = wsdl;

        if (!instance) {
            instance = self;
        }
        return instance;
    }

    _createClass(SoapClient, [{
        key: 'setStub',
        value: function setStub(stub) {
            this._stub = stub;
        }
    }, {
        key: 'restoreStub',
        value: function restoreStub() {
            this._stub = null;
        }
    }, {
        key: 'getClient',
        value: function getClient() {
            return new Promise(function (resolve, reject) {
                if (instance._stub !== null) {
                    return resolve(instance._stub);
                } else {
                    if (instance._client !== null) {
                        return resolve(instance._client);
                    } else {
                        soap.createClient(instance._wsdl, function (err, soapclient) {
                            if (err) return reject(err);

                            instance._client = soapclient;
                            instance.merchant = new _merchant2.default();
                            instance.merchant.name = instance._username;
                            instance.merchant.password = instance._password;
                            return resolve(soapclient);
                        });
                    }
                }
            });
        }
    }, {
        key: 'create',
        value: function create(request) {
            removeNulls(request);
            var self = this;
            return new Promise(function (resolve, reject) {
                self.getClient().then(function (c) {
                    c.create(request, function (err, createResult, raw) {
                        debugSoap(instance._client.lastRequest);
                        debugSoap(raw);
                        if (err) return reject(err);
                        if (createResult.createSuccess && createResult.createSuccess.key) {
                            return resolve(createResult.createSuccess);
                        } else if (createResult.createErrors) {
                            var _err = new _createerrors2.default();
                            _err.error = createResult.createErrors.error[0];
                            return reject(_err);
                        } else {
                            console.log(createResult);
                        }
                    });
                }, function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'start',
        value: function start(request) {
            removeNulls(request);
            var self = this;
            return new Promise(function (resolve, reject) {
                self.getClient().then(function (c) {
                    c.start(request, function (err, startResult, raw) {
                        debugSoap(instance._client.lastRequest);
                        debugSoap(raw);
                        if (err) return reject(err);
                        if (startResult.startSuccess) {
                            return resolve(startResult.startSuccess);
                        } else if (startResult.startErrors) {
                            var _err2 = new _starterrors2.default();
                            _err2.error = startResult.startErrors.error[0];
                            return reject(_err2);
                        } else {
                            return reject(startResult);
                        }
                    });
                }, function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'status',
        value: function status(request) {
            removeNulls(request);
            var self = this;
            return new Promise(function (resolve, reject) {
                self.getClient().then(function (c) {
                    c.status(request, function (err, statusResult, raw) {
                        debugSoap(instance._client.lastRequest);
                        debugSoap(raw);
                        if (err) return reject(err);
                        if (statusResult.statusSuccess) {
                            return resolve(statusResult.statusSuccess);
                        } else if (statusResult.statusErrors) {
                            var _err3 = new _statuserrors2.default();
                            _err3.error = statusResult.statusErrors.error[0];
                            return reject(_err3);
                        } else {
                            console.log(createResult);
                        }
                    });
                }, function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'cancel',
        value: function cancel(request) {
            removeNulls(request);
            var self = this;
            return new Promise(function (resolve, reject) {
                self.getClient().then(function (c) {
                    c.cancel(request, function (err, cancelResult, raw) {
                        debugSoap(instance._client.lastRequest);
                        debugSoap(raw);
                        if (err) return reject(err);
                        if (cancelResult.cancelSuccess) {
                            return resolve(cancelResult.cancelSuccess);
                        } else if (cancelResult.cancelErrors) {
                            var _err4 = new CancelErrors();
                            _err4.error = cancelResult.cancelErrors.error[0];
                            return reject(_err4);
                        } else {
                            return reject(cancelResult);
                        }
                    });
                }, function (err) {
                    reject(err);
                });
            });
        }
    }, {
        key: 'lastRequest',
        get: function get() {
            if (instance._client) {
                return instance._client.lastRequest;
            }
            return null;
        }
    }]);

    return SoapClient;
}();

function removeNulls(obj) {
    var isArray = obj instanceof Array;
    for (var k in obj) {
        if (obj[k] === null) isArray ? obj.splice(k, 1) : delete obj[k];else if (_typeof(obj[k]) == "object") removeNulls(obj[k]);
    }
}

exports.default = SoapClient;