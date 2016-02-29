"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VisaPaymentInfo = function VisaPaymentInfo() {
    _classCallCheck(this, VisaPaymentInfo);

    this.cardHolder = null;
    this.cardCountry = null;
    this.panLast4 = null;
    this.refusalReason = null;
    this.mandateNumber = null;
    this.any = null;
};

exports.default = VisaPaymentInfo;