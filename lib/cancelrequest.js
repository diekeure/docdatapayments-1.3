'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CancelRequest = function CancelRequest() {
    _classCallCheck(this, CancelRequest);

    this.merchant = null;
    this.paymentOrderKey = null;
    this.integrationInfo = null;
    this.attributes = {
        'version': '1.3',
        'testExtensibility': false
    };
};

exports.default = CancelRequest;