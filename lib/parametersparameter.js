'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ParametersParameter = function () {
    function ParametersParameter() {
        _classCallCheck(this, ParametersParameter);

        this.attributes = {
            'name': ''
        };
    }

    _createClass(ParametersParameter, [{
        key: 'name',
        get: function get() {
            return this.attributes.name;
        },
        set: function set(value) {
            this.attributes.name = value;
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

    return ParametersParameter;
}();

exports.default = ParametersParameter;