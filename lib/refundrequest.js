'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RefundRequest = function RefundRequest() {
    _classCallCheck(this, RefundRequest);

    this.merchant = null;
    this.paymentId = null;
    this.merchantRefundReference = null;
    this.items = null;
    this.itemsElementName = null;
    this.cancelReserved = null;
    this.requiredRefundDate = null;
    this.refundBankAccount = null;
    this.integrationInfo = null;
    this.attributes = {
        'version': '1.3',
        'testExtensibility': false
    };
};

exports.default = RefundRequest;