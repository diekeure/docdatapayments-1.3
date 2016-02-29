"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Refund = function Refund() {
    _classCallCheck(this, Refund);

    this.merchantRefundId = null;
    this.status = null;
    this.amount = null;
    this.reason = null;
    this.any = null;
};

exports.default = Refund;