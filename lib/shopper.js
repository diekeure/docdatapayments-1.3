'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _name = require('./name');

var _name2 = _interopRequireDefault(_name);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shopper = function () {
    function Shopper(id, name, email, language, gender, dateOfBirth, phoneNumber, mobilePhoneNumber, ipAddress) {
        _classCallCheck(this, Shopper);

        this.name = null;
        this.email = null;
        this.language = null;
        this.gender = null;
        this.dateOfBirth = null;
        this.phoneNumber = null;
        this.mobilePhoneNumber = null;
        this.ipAddress = null;
        this.attributes = {
            'id': null
        };

        if (name) this.name = name;
        if (email) this.email = email;
        if (language) this.language = language;
        if (gender) this.gender = gender;
        if (dateOfBirth) this.setDateOfBirth(dateOfBirth);
        if (phoneNumber) this.phoneNumber = phoneNumber;
        if (mobilePhoneNumber) this.mobilePhoneNumber = mobilePhoneNumber;
        if (ipAddress) this.ipAddress = ipAddress;
        if (id) this.id = id;
    }

    _createClass(Shopper, [{
        key: 'setDateOfBirth',
        value: function setDateOfBirth(date) {
            if (date instanceof Date) {
                this.dateOfBirth = date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
            } else {
                this.dateOfBirth = date;
            }
        }
    }, {
        key: 'id',
        get: function get() {
            return this.attributes.id;
        },
        set: function set(val) {
            this.attributes.id = val;
        }
    }]);

    return Shopper;
}();

exports.default = Shopper;