"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Name = function Name(prefix, initials, first, middle, last, suffix) {
    _classCallCheck(this, Name);

    this.prefix = null;
    this.initials = null;
    this.first = null;
    this.middle = null;
    this.last = null;
    this.suffix = null;

    if (prefix) this.prefix = prefix;
    if (initials) this.initials = initials;
    if (first) this.first = first;
    if (middle) this.middle = middle;
    if (last) this.last = last;
    if (suffix) this.suffix = suffix;
};

exports.default = Name;