'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _country = require('./country');

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Address = function Address(street, houseNumber, city, postalCode, country) {
    _classCallCheck(this, Address);

    if (street) this.street = street;
    if (houseNumber) this.houseNumber = houseNumber;
    if (postalCode) this.postalCode = postalCode;
    if (city) this.city = city;
    if (country) this.country = country;
};

exports.default = Address;