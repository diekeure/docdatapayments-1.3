'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CreateRequest = function CreateRequest(merchant, merchantOrderReference, paymentPreferences, shopper, totalGrossAmount, billTo) {
    _classCallCheck(this, CreateRequest);

    this.merchant = null;
    this.merchantOrderReference = 'test';
    this.paymentPreferences = null;
    this.menuPreferences = null;
    this.shopper = null;
    this.totalGrossAmount = null;
    this.billTo = null;
    this.description = null;
    this.receiptText = null;
    this.includeCosts = false;
    this.paymentRequest = null;
    this.invoice = null;
    this.integrationInfo = null;
    this.salesPerson = null;
    this.attributes = {
        'version': '1.3',
        'testExtensibility': false
    };

    if (merchant) this.merchant = merchant;
    if (merchantOrderReference) this.merchantOrderReference = merchantOrderReference;
    if (paymentPreferences) this.paymentPreferences = paymentPreferences;
    if (shopper) this.shopper = shopper;
    if (totalGrossAmount) this.totalGrossAmount = totalGrossAmount;
    if (billTo) this.billTo = billTo;
};

exports.default = CreateRequest;