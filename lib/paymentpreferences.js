"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentPreferences = function PaymentPreferences(profile, numberOfDaysToPay, exhortation, terminalId) {
    _classCallCheck(this, PaymentPreferences);

    this.profile = null;
    this.numberOfDaysToPay = null;
    this.exhortation = null;
    this.terminalId = null;

    if (profile) this.profile = profile;
    if (numberOfDaysToPay) this.numberOfDaysToPay = numberOfDaysToPay;
    if (exhortation) this.exhortation = exhortation;
    if (terminalId) this.terminalId = terminalId;
};

exports.default = PaymentPreferences;