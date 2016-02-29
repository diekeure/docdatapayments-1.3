'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Merchant = function () {
    function Merchant(name, password) {
        _classCallCheck(this, Merchant);

        this.attributes = {
            'name': '',
            'password': ''
        };

        if (name) this.name = name;
        if (password) this.password = password;
    }

    _createClass(Merchant, [{
        key: 'name',
        get: function get() {
            return this.attributes.name;
        },
        set: function set(value) {
            this.attributes.name = value;
        }
    }, {
        key: 'password',
        get: function get() {
            return this.attributes.password;
        },
        set: function set(value) {
            this.attributes.password = value;
        }
    }]);

    return Merchant;
}();

exports.default = Merchant;