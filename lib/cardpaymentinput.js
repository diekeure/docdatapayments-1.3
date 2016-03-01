"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CardPaymentInput = function CardPaymentInput() {
    _classCallCheck(this, CardPaymentInput);

    this.cardHolderName = null;
    this.cardNumber = null;
    this.expiryDate = null;
    this.securityCode = null;
};

exports.default = CardPaymentInput;