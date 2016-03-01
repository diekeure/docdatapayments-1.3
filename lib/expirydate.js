"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ExpiryDate = function () {
    function ExpiryDate(month, year) {
        "use strict";

        _classCallCheck(this, ExpiryDate);

        this.attributes = {
            month: null,
            year: null
        };
        this.month = month;
        this.year = year;
    }

    _createClass(ExpiryDate, [{
        key: "month",
        get: function get() {
            "use strict";

            return this.attributes.month;
        },
        set: function set(val) {
            "use strict";

            this.attributes.month = val;
        }
    }, {
        key: "year",
        get: function get() {
            "use strict";

            return this.attributes.year;
        },
        set: function set(val) {
            "use strict";

            this.attributes.year = val;
        }
    }]);

    return ExpiryDate;
}();

exports.default = ExpiryDate;