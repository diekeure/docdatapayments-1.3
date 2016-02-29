"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Payment = function Payment() {
    _classCallCheck(this, Payment);

    this.id = null;
    this.paymentMethod = null;
    this.authorization = null;
    this.extended = null;
    this.any = null;
    this.amexPaymentInput = null;
    this.masterCardPaymentInput = null;
    this.misterCashPaymentInput = null;
    this.maestroPaymentInput = null;
    this.visaPaymentInput = null;
    this.directDebitPaymentInput = null;
    this.bankTransferPaymentInput = null;
    this.pointOfSalePaymentInput = null;
    this.offlinePaymentInput = null;
    this.elvPaymentInput = null;
    this.iDealPaymentInput = null;
};

exports.default = Payment;