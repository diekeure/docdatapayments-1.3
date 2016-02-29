'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CaptureRequest = function CaptureRequest() {
    _classCallCheck(this, CaptureRequest);

    this.merchant = null;
    this.paymentId = null;
    this.merchantCaptureReference = null;
    this.amount = null;
    this.itemCode = null;
    this.description = null;
    this.finalCapture = null;
    this.cancelReserved = null;
    this.requiredCaptureDate = null;
    this.integrationInfo = null;
    this.attributes = {
        'version': '1.3',
        'testExtensibility': false
    };
};

exports.default = CaptureRequest;