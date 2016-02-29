"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MisterCashPaymentInfo = function MisterCashPaymentInfo() {
    _classCallCheck(this, MisterCashPaymentInfo);

    this.cardHolder = null;
    this.cardCountry = null;
    this.panLast4 = null;
    this.refusalReason = null;
    this.any = null;
};

exports.default = MisterCashPaymentInfo;