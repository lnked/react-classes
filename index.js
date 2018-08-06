'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
    'use strict';

    var сlasses = {
        styler: function styler(css) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var r = [];

            if (args.length) {
                Object.keys(args).map(function (id) {
                    var item = args[id];

                    if (item) {
                        var type = typeof item === 'undefined' ? 'undefined' : _typeof(item);

                        if (['string', 'number'].indexOf(type)) {
                            r.push(item);
                        } else {
                            Object.keys(item).map(function (name) {
                                if (item[name]) {
                                    r.push(css[name]);
                                }
                            });
                        }
                    }
                });
            }

            return r.join(' ');
        },

        bind: function bind(css) {
            return сlasses.styler.bind(сlasses, css);
        }
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports.default = сlasses;
    } else if (typeof define === 'function' && _typeof(define.amd) === 'object' && define.amd) {
        define('сlasses', [], function () {
            return сlasses;
        });
    } else {
        window.сlasses = сlasses;
    }
})();