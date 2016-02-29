"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SepaBankAccount = function SepaBankAccount() {
    _classCallCheck(this, SepaBankAccount);

    this.holderName = null;
    this.holderCity = null;
    this.holderCountry = null;
    this.bic = null;
    this.iban = null;
};

exports.default = SepaBankAccount;