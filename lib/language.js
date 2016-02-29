'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Language = function () {
    function Language(code) {
        _classCallCheck(this, Language);

        this.attributes = {
            'code': ''
        };

        if (code) this.code = code;
    }

    _createClass(Language, [{
        key: 'code',
        get: function get() {
            return this.attributes.code;
        },
        set: function set(value) {
            this.attributes.code = value;
        }
    }]);

    return Language;
}();

exports.default = Language;