"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SepaDirectDebitPaymentInfo = function SepaDirectDebitPaymentInfo() {
    _classCallCheck(this, SepaDirectDebitPaymentInfo);

    this.bic = null;
    this.iban = null;
    this.country = null;
    this.mandateNumber = null;
    this.any = null;
};

exports.default = SepaDirectDebitPaymentInfo;