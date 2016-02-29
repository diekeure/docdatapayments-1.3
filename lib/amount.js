'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Amount = function () {
    function Amount(value, currency) {
        _classCallCheck(this, Amount);

        this.attributes = {
            'currency': 'EUR'
        };

        if (value) this.value = value;
        if (currency) this.currency = currency;
    }

    _createClass(Amount, [{
        key: 'value',
        get: function get() {
            return this.$value;
        },
        set: function set(val) {
            this.$value = val;
        }
    }, {
        key: 'currency',
        get: function get() {
            return this.attributes.currency;
        },
        set: function set(val) {
            this.attributes.currency = val;
        }
    }]);

    return Amount;
}();

exports.default = Amount;