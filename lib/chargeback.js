"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Chargeback = function Chargeback() {
    _classCallCheck(this, Chargeback);

    this.chargebackId = null;
    this.status = null;
    this.amount = null;
    this.reason = null;
    this.enquiryReason = null;
    this.any = null;
};

exports.default = Chargeback;