'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PointOfSalePaymentReceiptValuesValue = function () {
    function PointOfSalePaymentReceiptValuesValue() {
        _classCallCheck(this, PointOfSalePaymentReceiptValuesValue);

        this.attributes = {
            'key': ''
        };
    }

    _createClass(PointOfSalePaymentReceiptValuesValue, [{
        key: 'key',
        get: function get() {
            return this.attributes.key;
        },
        set: function set(value) {
            this.attributes.key = value;
        }
    }, {
        key: 'value',
        get: function get() {
            return this.$value;
        },
        set: function set(value) {
            this.$value = value;
        }
    }]);

    return PointOfSalePaymentReceiptValuesValue;
}();

exports.default = PointOfSalePaymentReceiptValuesValue;