"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Invoice = function Invoice() {
    _classCallCheck(this, Invoice);

    this.totalNetAmount = null;
    this.totalVatAmount = null;
    this.item = null;
    this.shipTo = null;
    this.additionalDescription = null;
};

exports.default = Invoice;