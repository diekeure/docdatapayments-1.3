"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Destination = function Destination(name, address) {
    _classCallCheck(this, Destination);

    this.name = null;
    this.address = null;

    if (name) this.name = name;
    if (address) this.address = address;
};

exports.default = Destination;