/*!
 * Bootstrap-select v1.13.7 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2019 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

! function(e, t) {
    void 0 === e && void 0 !== window && (e = window), "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
}(this, function(e) {
    ! function(z) {
        "use strict";
        var d = ["sanitize", "whiteList", "sanitizeFn"],
            r = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            e = {
                "*": ["class", "dir", "id", "lang", "role", "tabindex", "style", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            l = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
            a = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

        function v(e, t) {
            var i = e.nodeName.toLowerCase();
            if (-1 !== z.inArray(i, t)) return -1 === z.inArray(i, r) || Boolean(e.nodeValue.match(l) || e.nodeValue.match(a));
            for (var n = z(t).filter(function(e, t) {
                    return t instanceof RegExp
                }), s = 0, o = n.length; s < o; s++)
                if (i.match(n[s])) return !0;
            return !1
        }

        function P(e, t, i) {
            if (i && "function" == typeof i) return i(e);
            for (var n = Object.keys(t), s = 0, o = e.length; s < o; s++)
                for (var r = e[s].querySelectorAll("*"), l = 0, a = r.length; l < a; l++) {
                    var c = r[l],
                        d = c.nodeName.toLowerCase();
                    if (-1 !== n.indexOf(d))
                        for (var h = [].slice.call(c.attributes), p = [].concat(t["*"] || [], t[d] || []), u = 0, f = h.length; u < f; u++) {
                            var m = h[u];
                            v(m, p) || c.removeAttribute(m.nodeName)
                        } else c.parentNode.removeChild(c)
                }
        }
        "classList" in document.createElement("_") || function(e) {
            if ("Element" in e) {
                var t = "classList",
                    i = "prototype",
                    n = e.Element[i],
                    s = Object,
                    o = function() {
                        var i = z(this);
                        return {
                            add: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), i.addClass(e)
                            },
                            remove: function(e) {
                                return e = Array.prototype.slice.call(arguments).join(" "), i.removeClass(e)
                            },
                            toggle: function(e, t) {
                                return i.toggleClass(e, t)
                            },
                            contains: function(e) {
                                return i.hasClass(e)
                            }
                        }
                    };
                if (s.defineProperty) {
                    var r = {
                        get: o,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        s.defineProperty(n, t, r)
                    } catch (e) {
                        void 0 !== e.number && -2146823252 !== e.number || (r.enumerable = !1, s.defineProperty(n, t, r))
                    }
                } else s[i].__defineGetter__ && n.__defineGetter__(t, o)
            }
        }(window);
        var t, c, i, n = document.createElement("_");
        if (n.classList.add("c1", "c2"), !n.classList.contains("c2")) {
            var s = DOMTokenList.prototype.add,
                o = DOMTokenList.prototype.remove;
            DOMTokenList.prototype.add = function() {
                Array.prototype.forEach.call(arguments, s.bind(this))
            }, DOMTokenList.prototype.remove = function() {
                Array.prototype.forEach.call(arguments, o.bind(this))
            }
        }
        if (n.classList.toggle("c3", !1), n.classList.contains("c3")) {
            var h = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(e, t) {
                return 1 in arguments && !this.contains(e) == !t ? t : h.call(this, e)
            }
        }

        function S(e) {
            var t, i = [],
                n = e.selectedOptions;
            if (e.multiple)
                for (var s = 0, o = n.length; s < o; s++) t = n[s], i.push(t.value || t.text);
            else i = e.value;
            return i
        }
        n = null, String.prototype.startsWith || (t = function() {
            try {
                var e = {},
                    t = Object.defineProperty,
                    i = t(e, e, e) && t
            } catch (e) {}
            return i
        }(), c = {}.toString, i = function(e) {
            if (null == this) throw new TypeError;
            var t = String(this);
            if (e && "[object RegExp]" == c.call(e)) throw new TypeError;
            var i = t.length,
                n = String(e),
                s = n.length,
                o = 1 < arguments.length ? arguments[1] : void 0,
                r = o ? Number(o) : 0;
            r != r && (r = 0);
            var l = Math.min(Math.max(r, 0), i);
            if (i < s + l) return !1;
            for (var a = -1; ++a < s;)
                if (t.charCodeAt(l + a) != n.charCodeAt(a)) return !1;
            return !0
        }, t ? t(String.prototype, "startsWith", {
            value: i,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = i), Object.keys || (Object.keys = function(e, t, i) {
            for (t in i = [], e) i.hasOwnProperty.call(e, t) && i.push(t);
            return i
        }), HTMLSelectElement.prototype.hasOwnProperty("selectedOptions") || Object.defineProperty(HTMLSelectElement.prototype, "selectedOptions", {
            get: function() {
                return this.querySelectorAll(":checked")
            }
        });
        var p = {
            useDefault: !1,
            _set: z.valHooks.select.set
        };
        z.valHooks.select.set = function(e, t) {
            return t && !p.useDefault && z(e).data("selected", !0), p._set.apply(this, arguments)
        };
        var E = null,
            u = function() {
                try {
                    return new Event("change"), !0
                } catch (e) {
                    return !1
                }
            }();

        function $(e, t, i, n) {
            for (var s = ["content", "subtext", "tokens"], o = !1, r = 0; r < s.length; r++) {
                var l = s[r],
                    a = e[l];
                if (a && (a = a.toString(), "content" === l && (a = a.replace(/<[^>]+>/g, "")), n && (a = w(a)), a = a.toUpperCase(), o = "contains" === i ? 0 <= a.indexOf(t) : a.startsWith(t))) break
            }
            return o
        }

        function L(e) {
            return parseInt(e, 10) || 0
        }
        z.fn.triggerNative = function(e) {
            var t, i = this[0];
            i.dispatchEvent ? (u ? t = new Event(e, {
                bubbles: !0
            }) : (t = document.createEvent("Event")).initEvent(e, !0, !1), i.dispatchEvent(t)) : i.fireEvent ? ((t = document.createEventObject()).eventType = e, i.fireEvent("on" + e, t)) : this.trigger(e)
        };
        var f = {
                "\xc0": "A",
                "\xc1": "A",
                "\xc2": "A",
                "\xc3": "A",
                "\xc4": "A",
                "\xc5": "A",
                "\xe0": "a",
                "\xe1": "a",
                "\xe2": "a",
                "\xe3": "a",
                "\xe4": "a",
                "\xe5": "a",
                "\xc7": "C",
                "\xe7": "c",
                "\xd0": "D",
                "\xf0": "d",
                "\xc8": "E",
                "\xc9": "E",
                "\xca": "E",
                "\xcb": "E",
                "\xe8": "e",
                "\xe9": "e",
                "\xea": "e",
                "\xeb": "e",
                "\xcc": "I",
                "\xcd": "I",
                "\xce": "I",
                "\xcf": "I",
                "\xec": "i",
                "\xed": "i",
                "\xee": "i",
                "\xef": "i",
                "\xd1": "N",
                "\xf1": "n",
                "\xd2": "O",
                "\xd3": "O",
                "\xd4": "O",
                "\xd5": "O",
                "\xd6": "O",
                "\xd8": "O",
                "\xf2": "o",
                "\xf3": "o",
                "\xf4": "o",
                "\xf5": "o",
                "\xf6": "o",
                "\xf8": "o",
                "\xd9": "U",
                "\xda": "U",
                "\xdb": "U",
                "\xdc": "U",
                "\xf9": "u",
                "\xfa": "u",
                "\xfb": "u",
                "\xfc": "u",
                "\xdd": "Y",
                "\xfd": "y",
                "\xff": "y",
                "\xc6": "Ae",
                "\xe6": "ae",
                "\xde": "Th",
                "\xfe": "th",
                "\xdf": "ss",
                "\u0100": "A",
                "\u0102": "A",
                "\u0104": "A",
                "\u0101": "a",
                "\u0103": "a",
                "\u0105": "a",
                "\u0106": "C",
                "\u0108": "C",
                "\u010a": "C",
                "\u010c": "C",
                "\u0107": "c",
                "\u0109": "c",
                "\u010b": "c",
                "\u010d": "c",
                "\u010e": "D",
                "\u0110": "D",
                "\u010f": "d",
                "\u0111": "d",
                "\u0112": "E",
                "\u0114": "E",
                "\u0116": "E",
                "\u0118": "E",
                "\u011a": "E",
                "\u0113": "e",
                "\u0115": "e",
                "\u0117": "e",
                "\u0119": "e",
                "\u011b": "e",
                "\u011c": "G",
                "\u011e": "G",
                "\u0120": "G",
                "\u0122": "G",
                "\u011d": "g",
                "\u011f": "g",
                "\u0121": "g",
                "\u0123": "g",
                "\u0124": "H",
                "\u0126": "H",
                "\u0125": "h",
                "\u0127": "h",
                "\u0128": "I",
                "\u012a": "I",
                "\u012c": "I",
                "\u012e": "I",
                "\u0130": "I",
                "\u0129": "i",
                "\u012b": "i",
                "\u012d": "i",
                "\u012f": "i",
                "\u0131": "i",
                "\u0134": "J",
                "\u0135": "j",
                "\u0136": "K",
                "\u0137": "k",
                "\u0138": "k",
                "\u0139": "L",
                "\u013b": "L",
                "\u013d": "L",
                "\u013f": "L",
                "\u0141": "L",
                "\u013a": "l",
                "\u013c": "l",
                "\u013e": "l",
                "\u0140": "l",
                "\u0142": "l",
                "\u0143": "N",
                "\u0145": "N",
                "\u0147": "N",
                "\u014a": "N",
                "\u0144": "n",
                "\u0146": "n",
                "\u0148": "n",
                "\u014b": "n",
                "\u014c": "O",
                "\u014e": "O",
                "\u0150": "O",
                "\u014d": "o",
                "\u014f": "o",
                "\u0151": "o",
                "\u0154": "R",
                "\u0156": "R",
                "\u0158": "R",
                "\u0155": "r",
                "\u0157": "r",
                "\u0159": "r",
                "\u015a": "S",
                "\u015c": "S",
                "\u015e": "S",
                "\u0160": "S",
                "\u015b": "s",
                "\u015d": "s",
                "\u015f": "s",
                "\u0161": "s",
                "\u0162": "T",
                "\u0164": "T",
                "\u0166": "T",
                "\u0163": "t",
                "\u0165": "t",
                "\u0167": "t",
                "\u0168": "U",
                "\u016a": "U",
                "\u016c": "U",
                "\u016e": "U",
                "\u0170": "U",
                "\u0172": "U",
                "\u0169": "u",
                "\u016b": "u",
                "\u016d": "u",
                "\u016f": "u",
                "\u0171": "u",
                "\u0173": "u",
                "\u0174": "W",
                "\u0175": "w",
                "\u0176": "Y",
                "\u0177": "y",
                "\u0178": "Y",
                "\u0179": "Z",
                "\u017b": "Z",
                "\u017d": "Z",
                "\u017a": "z",
                "\u017c": "z",
                "\u017e": "z",
                "\u0132": "IJ",
                "\u0133": "ij",
                "\u0152": "Oe",
                "\u0153": "oe",
                "\u0149": "'n",
                "\u017f": "s"
            },
            m = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            g = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]", "g");

        function b(e) {
            return f[e]
        }

        function w(e) {
            return (e = e.toString()) && e.replace(m, b).replace(g, "")
        }
        var x, I, k, y, C, U = (x = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, I = function(e) {
                return x[e]
            }, k = "(?:" + Object.keys(x).join("|") + ")", y = RegExp(k), C = RegExp(k, "g"), function(e) {
                return e = null == e ? "" : "" + e, y.test(e) ? e.replace(C, I) : e
            }),
            O = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "A",
                66: "B",
                67: "C",
                68: "D",
                69: "E",
                70: "F",
                71: "G",
                72: "H",
                73: "I",
                74: "J",
                75: "K",
                76: "L",
                77: "M",
                78: "N",
                79: "O",
                80: "P",
                81: "Q",
                82: "R",
                83: "S",
                84: "T",
                85: "U",
                86: "V",
                87: "W",
                88: "X",
                89: "Y",
                90: "Z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            },
            T = 27,
            A = 13,
            H = 32,
            D = 9,
            N = 38,
            R = 40,
            W = {
                success: !1,
                major: "3"
            };
        try {
            W.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split("."), W.major = W.full[0], W.success = !0
        } catch (e) {
            console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.", e)
        }
        var B = 0,
            M = ".bs.select",
            j = {
                DISABLED: "disabled",
                DIVIDER: "divider",
                SHOW: "open",
                DROPUP: "dropup",
                MENU: "dropdown-menu",
                MENURIGHT: "dropdown-menu-right",
                MENULEFT: "dropdown-menu-left",
                BUTTONCLASS: "btn-default",
                POPOVERHEADER: "popover-title"
            },
            V = {
                MENU: "." + j.MENU
            };
        "4" === W.major && (j.DIVIDER = "dropdown-divider", j.SHOW = "show", j.BUTTONCLASS = "btn-light", j.POPOVERHEADER = "popover-header");
        var F = {
            span: document.createElement("span"),
            i: document.createElement("i"),
            subtext: document.createElement("small"),
            a: document.createElement("a"),
            li: document.createElement("li"),
            whitespace: document.createTextNode("\xa0"),
            fragment: document.createDocumentFragment()
        };
        F.a.setAttribute("role", "option"), F.subtext.className = "text-muted", F.text = F.span.cloneNode(!1), F.text.className = "text";
        var _ = new RegExp(N + "|" + R),
            q = new RegExp("^" + D + "$|" + T),
            G = function(e, t, i) {
                var n = F.li.cloneNode(!1);
                return e && (1 === e.nodeType || 11 === e.nodeType ? n.appendChild(e) : n.innerHTML = e), void 0 !== t && "" !== t && (n.className = t), null != i && n.classList.add("optgroup-" + i), n
            },
            K = function(e, t, i) {
                var n = F.a.cloneNode(!0);
                return e && (11 === e.nodeType ? n.appendChild(e) : n.insertAdjacentHTML("beforeend", e)), void 0 !== t && "" !== t && (n.className = t), "4" === W.major && n.classList.add("dropdown-item"), i && n.setAttribute("style", i), n
            },
            Y = function(e, t) {
                var i, n, s = F.text.cloneNode(!1);
                if (e.optionContent) s.innerHTML = e.optionContent;
                else {
                    if (s.textContent = e.text, e.optionIcon) {
                        var o = F.whitespace.cloneNode(!1);
                        (n = (!0 === t ? F.i : F.span).cloneNode(!1)).className = e.iconBase + " " + e.optionIcon, F.fragment.appendChild(n), F.fragment.appendChild(o)
                    }
                    e.optionSubtext && ((i = F.subtext.cloneNode(!1)).textContent = e.optionSubtext, s.appendChild(i))
                }
                if (!0 === t)
                    for (; 0 < s.childNodes.length;) F.fragment.appendChild(s.childNodes[0]);
                else F.fragment.appendChild(s);
                return F.fragment
            },
            Z = function(e) {
                var t, i, n = F.text.cloneNode(!1);
                if (n.innerHTML = e.labelEscaped, e.labelIcon) {
                    var s = F.whitespace.cloneNode(!1);
                    (i = F.span.cloneNode(!1)).className = e.iconBase + " " + e.labelIcon, F.fragment.appendChild(i), F.fragment.appendChild(s)
                }
                return e.labelSubtext && ((t = F.subtext.cloneNode(!1)).textContent = e.labelSubtext, n.appendChild(t)), F.fragment.appendChild(n), F.fragment
            },
            J = function(e, t) {
                var i = this;
                p.useDefault || (z.valHooks.select.set = p._set, p.useDefault = !0), this.$element = z(e), this.$newElement = null, this.$button = null, this.$menu = null, this.options = t, this.selectpicker = {
                    main: {
                        map: {
                            newIndex: {},
                            originalIndex: {}
                        }
                    },
                    current: {
                        map: {}
                    },
                    search: {
                        map: {}
                    },
                    view: {},
                    keydown: {
                        keyHistory: "",
                        resetKeyHistory: {
                            start: function() {
                                return setTimeout(function() {
                                    i.selectpicker.keydown.keyHistory = ""
                                }, 800)
                            }
                        }
                    }
                }, null === this.options.title && (this.options.title = this.$element.attr("title"));
                var n = this.options.windowPadding;
                "number" == typeof n && (this.options.windowPadding = [n, n, n, n]), this.val = J.prototype.val, this.render = J.prototype.render, this.refresh = J.prototype.refresh, this.setStyle = J.prototype.setStyle, this.selectAll = J.prototype.selectAll, this.deselectAll = J.prototype.deselectAll, this.destroy = J.prototype.destroy, this.remove = J.prototype.remove, this.show = J.prototype.show, this.hide = J.prototype.hide, this.init()
            };

        function Q(e) {
            var l, a = arguments,
                c = e;
            if ([].shift.apply(a), !W.success) {
                try {
                    W.full = (z.fn.dropdown.Constructor.VERSION || "").split(" ")[0].split(".")
                } catch (e) {
                    W.full = J.BootstrapVersion.split(" ")[0].split(".")
                }
                W.major = W.full[0], W.success = !0, "4" === W.major && (j.DIVIDER = "dropdown-divider", j.SHOW = "show", j.BUTTONCLASS = "btn-light", J.DEFAULTS.style = j.BUTTONCLASS = "btn-light", j.POPOVERHEADER = "popover-header")
            }
            var t = this.each(function() {
                var e = z(this);
                if (e.is("select")) {
                    var t = e.data("selectpicker"),
                        i = "object" == typeof c && c;
                    if (t) {
                        if (i)
                            for (var n in i) i.hasOwnProperty(n) && (t.options[n] = i[n])
                    } else {
                        var s = e.data();
                        for (var o in s) s.hasOwnProperty(o) && -1 !== z.inArray(o, d) && delete s[o];
                        var r = z.extend({}, J.DEFAULTS, z.fn.selectpicker.defaults || {}, s, i);
                        r.template = z.extend({}, J.DEFAULTS.template, z.fn.selectpicker.defaults ? z.fn.selectpicker.defaults.template : {}, s.template, i.template), e.data("selectpicker", t = new J(this, r))
                    }
                    "string" == typeof c && (l = t[c] instanceof Function ? t[c].apply(t, a) : t.options[c])
                }
            });
            return void 0 !== l ? l : t
        }
        J.VERSION = "1.13.7", J.BootstrapVersion = W.major, J.DEFAULTS = {
            noneSelectedText: "Nothing selected",
            noneResultsText: "No hay resultados coincidentes {0}",
            countSelectedText: function(e, t) {
                return 1 == e ? "{0} item selected" : "{0} items selected"
            },
            maxOptionsText: function(e, t) {
                return [1 == e ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == t ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
            },
            selectAllText: "Select All",
            deselectAllText: "Deselect All",
            doneButton: !1,
            doneButtonText: "Close",
            multipleSeparator: ", ",
            styleBase: "btn",
            style: j.BUTTONCLASS,
            size: "auto",
            title: null,
            selectedTextFormat: "values",
            width: !1,
            container: !1,
            hideDisabled: !1,
            showSubtext: !1,
            showIcon: !0,
            showContent: !0,
            dropupAuto: !0,
            header: !1,
            liveSearch: !1,
            liveSearchPlaceholder: null,
            liveSearchNormalize: !1,
            liveSearchStyle: "contains",
            actionsBox: !1,
            iconBase: "glyphicon",
            tickIcon: "glyphicon-ok",
            showTick: !1,
            template: {
                caret: '<span class="caret"></span>'
            },
            maxOptions: !1,
            mobile: !1,
            selectOnTab: !1,
            dropdownAlignRight: !1,
            windowPadding: 0,
            virtualScroll: 600,
            display: !1,
            sanitize: !0,
            sanitizeFn: null,
            whiteList: e
        }, "4" === W.major && (J.DEFAULTS.style = "btn-light", J.DEFAULTS.iconBase = "", J.DEFAULTS.tickIcon = "bs-ok-default"), J.prototype = {
            constructor: J,
            init: function() {
                var i = this,
                    e = this.$element.attr("id");
                this.selectId = B++, this.$element[0].classList.add("bs-select-hidden"), this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createDropdown(), this.$element.after(this.$newElement).prependTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(V.MENU), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element[0].classList.remove("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu[0].classList.add(j.MENURIGHT), void 0 !== e && this.$button.attr("data-id", e), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.setStyle(), this.render(), this.setWidth(), this.options.container ? this.selectPosition() : this.$element.on("hide" + M, function() {
                    if (i.isVirtual()) {
                        var e = i.$menuInner[0],
                            t = e.firstChild.cloneNode(!1);
                        e.replaceChild(t, e.firstChild), e.scrollTop = 0
                    }
                }), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
                    "hide.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !1), i.$element.trigger("hide" + M, e)
                    },
                    "hidden.bs.dropdown": function(e) {
                        i.$element.trigger("hidden" + M, e)
                    },
                    "show.bs.dropdown": function(e) {
                        i.$menuInner.attr("aria-expanded", !0), i.$element.trigger("show" + M, e)
                    },
                    "shown.bs.dropdown": function(e) {
                        i.$element.trigger("shown" + M, e)
                    }
                }), i.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
                    i.$button[0].classList.add("bs-invalid"), i.$element.on("shown" + M + ".invalid", function() {
                        i.$element.val(i.$element.val()).off("shown" + M + ".invalid")
                    }).on("rendered" + M, function() {
                        this.validity.valid && i.$button[0].classList.remove("bs-invalid"), i.$element.off("rendered" + M)
                    }), i.$button.on("blur" + M, function() {
                        i.$element.trigger("focus").trigger("blur"), i.$button.off("blur" + M)
                    })
                }), setTimeout(function() {
                    i.createLi(), i.$element.trigger("loaded" + M)
                })
            },
            createDropdown: function() {
                var e, t = this.multiple || this.options.showTick ? " show-tick" : "",
                    i = this.autofocus ? " autofocus" : "",
                    n = "",
                    s = "",
                    o = "",
                    r = "";
                return this.options.header && (n = '<div class="' + j.POPOVERHEADER + '"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>"), this.options.liveSearch && (s = '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + U(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>'), this.multiple && this.options.actionsBox && (o = '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn ' + j.BUTTONCLASS + '">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn ' + j.BUTTONCLASS + '">' + this.options.deselectAllText + "</button></div></div>"), this.multiple && this.options.doneButton && (r = '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm ' + j.BUTTONCLASS + '">' + this.options.doneButtonText + "</button></div></div>"), e = '<div class="dropdown bootstrap-select' + t + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + ("static" === this.options.display ? 'data-display="static"' : "") + 'data-toggle="dropdown"' + i + ' role="button"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>' + ("4" === W.major ? "" : '<span class="bs-caret">' + this.options.template.caret + "</span>") + '</button><div class="' + j.MENU + " " + ("4" === W.major ? "" : j.SHOW) + '" role="combobox">' + n + s + o + '<div class="inner ' + j.SHOW + '" role="listbox" aria-expanded="false" tabindex="-1"><ul class="' + j.MENU + " inner " + ("4" === W.major ? j.SHOW : "") + '"></ul></div>' + r + "</div></div>", z(e)
            },
            setPositionData: function() {
                this.selectpicker.view.canHighlight = [];
                for (var e = 0; e < this.selectpicker.current.data.length; e++) {
                    var t = this.selectpicker.current.data[e],
                        i = !0;
                    "divider" === t.type ? (i = !1, t.height = this.sizeInfo.dividerHeight) : "optgroup-label" === t.type ? (i = !1, t.height = this.sizeInfo.dropdownHeaderHeight) : t.height = this.sizeInfo.liHeight, t.disabled && (i = !1), this.selectpicker.view.canHighlight.push(i), t.position = (0 === e ? 0 : this.selectpicker.current.data[e - 1].position) + t.height
                }
            },
            isVirtual: function() {
                return !1 !== this.options.virtualScroll && this.selectpicker.main.elements.length >= this.options.virtualScroll || !0 === this.options.virtualScroll
            },
            createView: function(T, e) {
                e = e || 0;
                var A = this;
                this.selectpicker.current = T ? this.selectpicker.search : this.selectpicker.main;
                var H, D, N = [];

                function i(e, t) {
                    var i, n, s, o, r, l, a, c, d, h, p = A.selectpicker.current.elements.length,
                        u = [],
                        f = !0,
                        m = A.isVirtual();
                    A.selectpicker.view.scrollTop = e, !0 === m && A.sizeInfo.hasScrollBar && A.$menu[0].offsetWidth > A.sizeInfo.totalMenuWidth && (A.sizeInfo.menuWidth = A.$menu[0].offsetWidth, A.sizeInfo.totalMenuWidth = A.sizeInfo.menuWidth + A.sizeInfo.scrollBarWidth, A.$menu.css("min-width", A.sizeInfo.menuWidth)), i = Math.ceil(A.sizeInfo.menuInnerHeight / A.sizeInfo.liHeight * 1.5), n = Math.round(p / i) || 1;
                    for (var v = 0; v < n; v++) {
                        var g = (v + 1) * i;
                        if (v === n - 1 && (g = p), u[v] = [v * i + (v ? 1 : 0), g], !p) break;
                        void 0 === r && e <= A.selectpicker.current.data[g - 1].position - A.sizeInfo.menuInnerHeight && (r = v)
                    }
                    if (void 0 === r && (r = 0), l = [A.selectpicker.view.position0, A.selectpicker.view.position1], s = Math.max(0, r - 1), o = Math.min(n - 1, r + 1), A.selectpicker.view.position0 = Math.max(0, u[s][0]) || 0, A.selectpicker.view.position1 = Math.min(p, u[o][1]) || 0, a = l[0] !== A.selectpicker.view.position0 || l[1] !== A.selectpicker.view.position1, void 0 !== A.activeIndex && (D = A.selectpicker.current.elements[A.selectpicker.current.map.newIndex[A.prevActiveIndex]], N = A.selectpicker.current.elements[A.selectpicker.current.map.newIndex[A.activeIndex]], H = A.selectpicker.current.elements[A.selectpicker.current.map.newIndex[A.selectedIndex]], t && (A.activeIndex !== A.selectedIndex && N && N.length && (N.classList.remove("active"), N.firstChild && N.firstChild.classList.remove("active")), A.activeIndex = void 0), A.activeIndex && A.activeIndex !== A.selectedIndex && H && H.length && (H.classList.remove("active"), H.firstChild && H.firstChild.classList.remove("active"))), void 0 !== A.prevActiveIndex && A.prevActiveIndex !== A.activeIndex && A.prevActiveIndex !== A.selectedIndex && D && D.length && (D.classList.remove("active"), D.firstChild && D.firstChild.classList.remove("active")), (t || a) && (c = A.selectpicker.view.visibleElements ? A.selectpicker.view.visibleElements.slice() : [], A.selectpicker.view.visibleElements = A.selectpicker.current.elements.slice(A.selectpicker.view.position0, A.selectpicker.view.position1), A.setOptionStatus(), (T || !1 === m && t) && (d = c, h = A.selectpicker.view.visibleElements, f = !(d.length === h.length && d.every(function(e, t) {
                            return e === h[t]
                        }))), (t || !0 === m) && f)) {
                        var b, w, x = A.$menuInner[0],
                            I = document.createDocumentFragment(),
                            k = x.firstChild.cloneNode(!1),
                            $ = !0 === m ? A.selectpicker.view.visibleElements : A.selectpicker.current.elements,
                            y = [];
                        x.replaceChild(k, x.firstChild);
                        v = 0;
                        for (var S = $.length; v < S; v++) {
                            var E, C, O = $[v];
                            A.options.sanitize && (E = O.lastChild) && (C = A.selectpicker.current.data[v + A.selectpicker.view.position0].data) && C.content && !C.sanitized && (y.push(E), C.sanitized = !0), I.appendChild(O)
                        }
                        A.options.sanitize && y.length && P(y, A.options.whiteList, A.options.sanitizeFn), !0 === m && (b = 0 === A.selectpicker.view.position0 ? 0 : A.selectpicker.current.data[A.selectpicker.view.position0 - 1].position, w = A.selectpicker.view.position1 > p - 1 ? 0 : A.selectpicker.current.data[p - 1].position - A.selectpicker.current.data[A.selectpicker.view.position1 - 1].position, x.firstChild.style.marginTop = b + "px", x.firstChild.style.marginBottom = w + "px"), x.firstChild.appendChild(I)
                    }
                    if (A.prevActiveIndex = A.activeIndex, A.options.liveSearch) {
                        if (T && t) {
                            var z, L = 0;
                            A.selectpicker.view.canHighlight[L] || (L = 1 + A.selectpicker.view.canHighlight.slice(1).indexOf(!0)), z = A.selectpicker.view.visibleElements[L], A.selectpicker.view.currentActive && (A.selectpicker.view.currentActive.classList.remove("active"), A.selectpicker.view.currentActive.firstChild && A.selectpicker.view.currentActive.firstChild.classList.remove("active")), z && (z.classList.add("active"), z.firstChild && z.firstChild.classList.add("active")), A.activeIndex = A.selectpicker.current.map.originalIndex[L]
                        }
                    } else A.$menuInner.trigger("focus")
                }
                this.setPositionData(), i(e, !0), this.$menuInner.off("scroll.createView").on("scroll.createView", function(e, t) {
                    A.noScroll || i(this.scrollTop, t), A.noScroll = !1
                }), z(window).off("resize" + M + "." + this.selectId + ".createView").on("resize" + M + "." + this.selectId + ".createView", function() {
                    A.$newElement.hasClass(j.SHOW) && i(A.$menuInner[0].scrollTop)
                })
            },
            setPlaceholder: function() {
                var e = !1;
                if (this.options.title && !this.multiple) {
                    this.selectpicker.view.titleOption || (this.selectpicker.view.titleOption = document.createElement("option")), e = !0;
                    var t = this.$element[0],
                        i = !1,
                        n = !this.selectpicker.view.titleOption.parentNode;
                    if (n) this.selectpicker.view.titleOption.className = "bs-title-option", this.selectpicker.view.titleOption.value = "", i = void 0 === z(t.options[t.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected");
                    (n || 0 !== this.selectpicker.view.titleOption.index) && t.insertBefore(this.selectpicker.view.titleOption, t.firstChild), i && (t.selectedIndex = 0)
                }
                return e
            },
            createLi: function() {
                var e, t, i = this,
                    n = i.options.iconBase,
                    s = ':not([hidden]):not([data-hidden="true"])',
                    o = [],
                    r = 0,
                    l = [],
                    a = 0,
                    c = 0,
                    d = -1;
                this.options.hideDisabled && (s += ":not(:disabled)"), (i.options.showTick || i.multiple) && ((e = F.span.cloneNode(!1)).className = n + " " + i.options.tickIcon + " check-mark", F.a.appendChild(e)), this.setPlaceholder() && d--;
                for (var h = this.$element[0].options, p = 0, u = h.length; p < u; p++) {
                    var f = h[p];
                    if (d++, !f.classList.contains("bs-title-option")) {
                        var m, v, g, b, w = {
                                content: f.getAttribute("data-content"),
                                tokens: f.getAttribute("data-tokens"),
                                subtext: f.getAttribute("data-subtext"),
                                icon: f.getAttribute("data-icon"),
                                hidden: "true" === f.getAttribute("data-hidden"),
                                divider: "true" === f.getAttribute("data-divider")
                            },
                            x = f.className || "",
                            I = f.style.cssText,
                            k = I ? U(I) : "",
                            $ = w.content,
                            y = f.textContent,
                            S = f.parentNode,
                            E = f.nextElementSibling,
                            C = f.previousElementSibling,
                            O = "OPTGROUP" === S.tagName,
                            z = O && S.disabled,
                            L = f.disabled || z,
                            T = C && "OPTGROUP" === C.tagName,
                            A = {
                                hidden: "true" === S.getAttribute("data-hidden")
                            };
                        if (!0 === w.hidden || f.hidden || O && (!0 === A.hidden || S.hidden) || i.options.hideDisabled && (L || z)) m = f.prevHiddenIndex, E && (E.prevHiddenIndex = void 0 !== m ? m : p), d--;
                        else {
                            if (E && void 0 !== E.prevHiddenIndex && (E.prevHiddenIndex = void 0), O && !0 !== w.divider) {
                                var H = " " + S.className || "",
                                    D = f.previousElementSibling;
                                if (void 0 !== (m = f.prevHiddenIndex) && (D = h[m].previousElementSibling), !D) {
                                    a += 1, A.subtext = S.getAttribute("data-subtext"), A.icon = S.getAttribute("data-icon");
                                    var N = S.label,
                                        P = U(N),
                                        R = A.subtext,
                                        W = A.icon;
                                    0 !== p && 0 < o.length && (d++, o.push(G(!1, j.DIVIDER, a + "div")), l.push({
                                        type: "divider",
                                        optID: a
                                    })), d++, g = Z({
                                        labelEscaped: P,
                                        labelSubtext: R,
                                        labelIcon: W,
                                        iconBase: n
                                    }), o.push(G(g, "dropdown-header" + H, a)), l.push({
                                        content: P,
                                        subtext: R,
                                        type: "optgroup-label",
                                        optID: a
                                    }), c = d - 1
                                }
                                v = Y({
                                    text: y,
                                    optionContent: $,
                                    optionSubtext: w.subtext,
                                    optionIcon: w.icon,
                                    iconBase: n
                                }), o.push(G(K(v, "opt " + x + H, k), "", a)), l.push({
                                    content: $ || y,
                                    subtext: w.subtext,
                                    tokens: w.tokens,
                                    type: "option",
                                    optID: a,
                                    headerIndex: c,
                                    lastIndex: c + S.querySelectorAll("option" + s).length,
                                    originalIndex: p,
                                    data: w
                                })
                            } else if (!0 === w.divider) o.push(G(!1, j.DIVIDER)), l.push({
                                type: "divider",
                                originalIndex: p,
                                data: w
                            });
                            else {
                                if (i.options.hideDisabled)
                                    if (T) C.querySelectorAll("option:disabled").length === C.children.length && (T = !1);
                                    else if (void 0 !== (m = f.prevHiddenIndex))
                                    if ((b = h[m].previousElementSibling) && "OPTGROUP" === b.tagName && !b.disabled) b.querySelectorAll("option:disabled").length < b.children.length && (T = !0);
                                T && l.length && "divider" !== l[l.length - 1].type && (d++, o.push(G(!1, j.DIVIDER, a + "div")), l.push({
                                    type: "divider",
                                    optID: a
                                })), v = Y({
                                    text: y,
                                    optionContent: $,
                                    optionSubtext: w.subtext,
                                    optionIcon: w.icon,
                                    iconBase: n
                                }), o.push(G(K(v, x, k))), l.push({
                                    content: $ || y,
                                    subtext: w.subtext,
                                    tokens: w.tokens,
                                    type: "option",
                                    originalIndex: p,
                                    data: w
                                })
                            }
                            i.selectpicker.main.map.newIndex[p] = d, i.selectpicker.main.map.originalIndex[d] = p;
                            var B = l[l.length - 1];
                            B.disabled = L;
                            var M = 0;
                            B.content && (M += B.content.length), B.subtext && (M += B.subtext.length), w.icon && (M += 1), r < M && (r = M, t = o[o.length - 1])
                        }
                    }
                }
                this.selectpicker.main.elements = o, this.selectpicker.main.data = l, this.selectpicker.current = this.selectpicker.main, this.selectpicker.view.widestOption = t
            },
            findLis: function() {
                return this.$menuInner.find(".inner > li")
            },
            render: function() {
                this.setPlaceholder();
                var e, t, i = this,
                    n = this.$element[0].selectedOptions,
                    s = n.length,
                    o = this.$button[0],
                    r = o.querySelector(".filter-option-inner-inner"),
                    l = document.createTextNode(this.options.multipleSeparator),
                    a = F.fragment.cloneNode(!1),
                    c = !1;
                if (this.togglePlaceholder(), this.tabIndex(), "static" === this.options.selectedTextFormat) a = Y({
                    text: this.options.title
                }, !0);
                else if ((e = this.multiple && -1 !== this.options.selectedTextFormat.indexOf("count") && 1 < s) && (e = 1 < (t = this.options.selectedTextFormat.split(">")).length && s > t[1] || 1 === t.length && 2 <= s), !1 === e) {
                    for (var d = 0; d < s && d < 50; d++) {
                        var h = n[d],
                            p = {},
                            u = {
                                content: h.getAttribute("data-content"),
                                subtext: h.getAttribute("data-subtext"),
                                icon: h.getAttribute("data-icon")
                            };
                        this.multiple && 0 < d && a.appendChild(l.cloneNode(!1)), h.title ? p.text = h.title : u.content && i.options.showContent ? (p.optionContent = u.content.toString(), c = !0) : (i.options.showIcon && (p.optionIcon = u.icon, p.iconBase = this.options.iconBase), i.options.showSubtext && !i.multiple && u.subtext && (p.optionSubtext = " " + u.subtext), p.text = h.textContent.trim()), a.appendChild(Y(p, !0))
                    }
                    49 < s && a.appendChild(document.createTextNode("..."))
                } else {
                    var f = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
                    this.options.hideDisabled && (f += ":not(:disabled)");
                    var m = this.$element[0].querySelectorAll("select > option" + f + ", optgroup" + f + " option" + f).length,
                        v = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(s, m) : this.options.countSelectedText;
                    a = Y({
                        text: v.replace("{0}", s.toString()).replace("{1}", m.toString())
                    }, !0)
                }
                if (null == this.options.title && (this.options.title = this.$element.attr("title")), a.childNodes.length || (a = Y({
                        text: void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText
                    }, !0)), o.title = a.textContent.replace(/<[^>]*>?/g, "").trim(), this.options.sanitize && c && P([a], i.options.whiteList, i.options.sanitizeFn), r.innerHTML = "", r.appendChild(a), W.major < 4 && this.$newElement[0].parentNode.classList.contains("input-group")) {
                    var g = o.querySelector(".filter-expand"),
                        b = r.cloneNode(!0);
                    b.className = "filter-expand", g ? o.replaceChild(b, g) : o.appendChild(b)
                }
                this.$element.trigger("rendered" + M)
            },
            setStyle: function(e, t) {
                var i, n = this.$button[0],
                    s = this.options.style.split(" ");
                this.$element.attr("class") && W.major < 4 && this.$newElement[0].classList.add("bs3"), i = e ? e.split(" ") : s, "add" == t ? n.classList.add.apply(n.classList, i) : "remove" == t ? n.classList.remove.apply(n.classList, i) : (n.classList.remove.apply(n.classList, s), n.classList.add.apply(n.classList, i))
            },
            liHeight: function(e) {
                if (e || !1 !== this.options.size && !this.sizeInfo) {
                    this.sizeInfo || (this.sizeInfo = {});
                    var t = document.createElement("div"),
                        i = document.createElement("div"),
                        n = document.createElement("div"),
                        s = document.createElement("ul"),
                        o = document.createElement("li"),
                        r = document.createElement("li"),
                        l = document.createElement("li"),
                        a = document.createElement("a"),
                        c = document.createElement("span"),
                        d = this.options.header && 0 < this.$menu.find("." + j.POPOVERHEADER).length ? this.$menu.find("." + j.POPOVERHEADER)[0].cloneNode(!0) : null,
                        h = this.options.liveSearch ? document.createElement("div") : null,
                        p = this.options.actionsBox && this.multiple && 0 < this.$menu.find(".bs-actionsbox").length ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        u = this.options.doneButton && this.multiple && 0 < this.$menu.find(".bs-donebutton").length ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null,
                        f = this.$element.find("option")[0];
                    if (this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth, c.className = "text", a.className = "dropdown-item " + (f ? f.className : ""), t.className = this.$menu[0].parentNode.className + " " + j.SHOW, t.style.width = this.sizeInfo.selectWidth + "px", "auto" === this.options.width && (i.style.minWidth = 0), i.className = j.MENU + " " + j.SHOW, n.className = "inner " + j.SHOW, s.className = j.MENU + " inner " + ("4" === W.major ? j.SHOW : ""), o.className = j.DIVIDER, r.className = "dropdown-header", c.appendChild(document.createTextNode("\u200b")), a.appendChild(c), l.appendChild(a), r.appendChild(c.cloneNode(!0)), this.selectpicker.view.widestOption && s.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)), s.appendChild(l), s.appendChild(o), s.appendChild(r), d && i.appendChild(d), h) {
                        var m = document.createElement("input");
                        h.className = "bs-searchbox", m.className = "form-control", h.appendChild(m), i.appendChild(h)
                    }
                    p && i.appendChild(p), n.appendChild(s), i.appendChild(n), u && i.appendChild(u), t.appendChild(i), document.body.appendChild(t);
                    var v, g = a.offsetHeight,
                        b = r ? r.offsetHeight : 0,
                        w = d ? d.offsetHeight : 0,
                        x = h ? h.offsetHeight : 0,
                        I = p ? p.offsetHeight : 0,
                        k = u ? u.offsetHeight : 0,
                        $ = z(o).outerHeight(!0),
                        y = !!window.getComputedStyle && window.getComputedStyle(i),
                        S = i.offsetWidth,
                        E = y ? null : z(i),
                        C = {
                            vert: L(y ? y.paddingTop : E.css("paddingTop")) + L(y ? y.paddingBottom : E.css("paddingBottom")) + L(y ? y.borderTopWidth : E.css("borderTopWidth")) + L(y ? y.borderBottomWidth : E.css("borderBottomWidth")),
                            horiz: L(y ? y.paddingLeft : E.css("paddingLeft")) + L(y ? y.paddingRight : E.css("paddingRight")) + L(y ? y.borderLeftWidth : E.css("borderLeftWidth")) + L(y ? y.borderRightWidth : E.css("borderRightWidth"))
                        },
                        O = {
                            vert: C.vert + L(y ? y.marginTop : E.css("marginTop")) + L(y ? y.marginBottom : E.css("marginBottom")) + 2,
                            horiz: C.horiz + L(y ? y.marginLeft : E.css("marginLeft")) + L(y ? y.marginRight : E.css("marginRight")) + 2
                        };
                    n.style.overflowY = "scroll", v = i.offsetWidth - S, document.body.removeChild(t), this.sizeInfo.liHeight = g, this.sizeInfo.dropdownHeaderHeight = b, this.sizeInfo.headerHeight = w, this.sizeInfo.searchHeight = x, this.sizeInfo.actionsHeight = I, this.sizeInfo.doneButtonHeight = k, this.sizeInfo.dividerHeight = $, this.sizeInfo.menuPadding = C, this.sizeInfo.menuExtras = O, this.sizeInfo.menuWidth = S, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth, this.sizeInfo.scrollBarWidth = v, this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight, this.setPositionData()
                }
            },
            getSelectPosition: function() {
                var e, t = z(window),
                    i = this.$newElement.offset(),
                    n = z(this.options.container);
                this.options.container && n.length && !n.is("body") ? ((e = n.offset()).top += parseInt(n.css("borderTopWidth")), e.left += parseInt(n.css("borderLeftWidth"))) : e = {
                    top: 0,
                    left: 0
                };
                var s = this.options.windowPadding;
                this.sizeInfo.selectOffsetTop = i.top - e.top - t.scrollTop(), this.sizeInfo.selectOffsetBot = t.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - e.top - s[2], this.sizeInfo.selectOffsetLeft = i.left - e.left - t.scrollLeft(), this.sizeInfo.selectOffsetRight = t.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - e.left - s[1], this.sizeInfo.selectOffsetTop -= s[0], this.sizeInfo.selectOffsetLeft -= s[3]
            },
            setMenuSize: function(e) {
                this.getSelectPosition();
                var t, i, n, s, o, r, l, a = this.sizeInfo.selectWidth,
                    c = this.sizeInfo.liHeight,
                    d = this.sizeInfo.headerHeight,
                    h = this.sizeInfo.searchHeight,
                    p = this.sizeInfo.actionsHeight,
                    u = this.sizeInfo.doneButtonHeight,
                    f = this.sizeInfo.dividerHeight,
                    m = this.sizeInfo.menuPadding,
                    v = 0;
                if (this.options.dropupAuto && (l = c * this.selectpicker.current.elements.length + m.vert, this.$newElement.toggleClass(j.DROPUP, this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && l + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot)), "auto" === this.options.size) s = 3 < this.selectpicker.current.elements.length ? 3 * this.sizeInfo.liHeight + this.sizeInfo.menuExtras.vert - 2 : 0, i = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert, n = s + d + h + p + u, r = Math.max(s - m.vert, 0), this.$newElement.hasClass(j.DROPUP) && (i = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert), t = (o = i) - d - h - p - u - m.vert;
                else if (this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size) {
                    for (var g = 0; g < this.options.size; g++) "divider" === this.selectpicker.current.data[g].type && v++;
                    t = (i = c * this.options.size + v * f + m.vert) - m.vert, o = i + d + h + p + u, n = r = ""
                }
                "auto" === this.options.dropdownAlignRight && this.$menu.toggleClass(j.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - a), this.$menu.css({
                    "max-height": o + "px",
                    overflow: "hidden",
                    "min-height": n + "px"
                }), this.$menuInner.css({
                    "max-height": t + "px",
                    "overflow-y": "auto",
                    "min-height": r + "px"
                }), this.sizeInfo.menuInnerHeight = Math.max(t, 1), this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight && (this.sizeInfo.hasScrollBar = !0, this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth, this.$menu.css("min-width", this.sizeInfo.totalMenuWidth)), this.dropdown && this.dropdown._popper && this.dropdown._popper.update()
            },
            setSize: function(e) {
                if (this.liHeight(e), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
                    var t, i = this,
                        n = z(window),
                        s = 0;
                    this.setMenuSize(), this.options.liveSearch && this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize", function() {
                        return i.setMenuSize()
                    }), "auto" === this.options.size ? n.off("resize" + M + "." + this.selectId + ".setMenuSize scroll" + M + "." + this.selectId + ".setMenuSize").on("resize" + M + "." + this.selectId + ".setMenuSize scroll" + M + "." + this.selectId + ".setMenuSize", function() {
                        return i.setMenuSize()
                    }) : this.options.size && "auto" != this.options.size && this.selectpicker.current.elements.length > this.options.size && n.off("resize" + M + "." + this.selectId + ".setMenuSize scroll" + M + "." + this.selectId + ".setMenuSize"), e ? s = this.$menuInner[0].scrollTop : i.multiple || "number" == typeof(t = i.selectpicker.main.map.newIndex[i.$element[0].selectedIndex]) && !1 !== i.options.size && (s = (s = i.sizeInfo.liHeight * t) - i.sizeInfo.menuInnerHeight / 2 + i.sizeInfo.liHeight / 2), i.createView(!1, s)
                }
            },
            setWidth: function() {
                var i = this;
                "auto" === this.options.width ? requestAnimationFrame(function() {
                    i.$menu.css("min-width", "0"), i.$element.on("loaded" + M, function() {
                        i.liHeight(), i.setMenuSize();
                        var e = i.$newElement.clone().appendTo("body"),
                            t = e.css("width", "auto").children("button").outerWidth();
                        e.remove(), i.sizeInfo.selectWidth = Math.max(i.sizeInfo.totalMenuWidth, t), i.$newElement.css("width", i.sizeInfo.selectWidth + "px")
                    })
                }) : "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", "")), this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement[0].classList.remove("fit-width")
            },
            selectPosition: function() {
                this.$bsContainer = z('<div class="bs-container" />');
                var n, s, o, r = this,
                    l = z(this.options.container),
                    e = function(e) {
                        var t = {},
                            i = r.options.display || !!z.fn.dropdown.Constructor.Default && z.fn.dropdown.Constructor.Default.display;
                        r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass(j.DROPUP, e.hasClass(j.DROPUP)), n = e.offset(), l.is("body") ? s = {
                            top: 0,
                            left: 0
                        } : ((s = l.offset()).top += parseInt(l.css("borderTopWidth")) - l.scrollTop(), s.left += parseInt(l.css("borderLeftWidth")) - l.scrollLeft()), o = e.hasClass(j.DROPUP) ? 0 : e[0].offsetHeight, (W.major < 4 || "static" === i) && (t.top = n.top - s.top + o, t.left = n.left - s.left), t.width = e[0].offsetWidth, r.$bsContainer.css(t)
                    };
                this.$button.on("click.bs.dropdown.data-api", function() {
                    r.isDisabled() || (e(r.$newElement), r.$bsContainer.appendTo(r.options.container).toggleClass(j.SHOW, !r.$button.hasClass(j.SHOW)).append(r.$menu))
                }), z(window).off("resize" + M + "." + this.selectId + " scroll" + M + "." + this.selectId).on("resize" + M + "." + this.selectId + " scroll" + M + "." + this.selectId, function() {
                    r.$newElement.hasClass(j.SHOW) && e(r.$newElement)
                }), this.$element.on("hide" + M, function() {
                    r.$menu.data("height", r.$menu.height()), r.$bsContainer.detach()
                })
            },
            setOptionStatus: function() {
                var e = this,
                    t = this.$element[0].options;
                if (e.noScroll = !1, e.selectpicker.view.visibleElements && e.selectpicker.view.visibleElements.length)
                    for (var i = 0; i < e.selectpicker.view.visibleElements.length; i++) {
                        var n = e.selectpicker.current.map.originalIndex[i + e.selectpicker.view.position0],
                            s = t[n];
                        if (s) {
                            var o = this.selectpicker.main.map.newIndex[n],
                                r = this.selectpicker.main.elements[o];
                            e.setDisabled(n, s.disabled || "OPTGROUP" === s.parentNode.tagName && s.parentNode.disabled, o, r), e.setSelected(n, s.selected, o, r)
                        }
                    }
            },
            setSelected: function(e, t, i, n) {
                var s, o, r, l = void 0 !== this.activeIndex,
                    a = this.activeIndex === e || t && !this.multiple && !l;
                i || (i = this.selectpicker.main.map.newIndex[e]), n || (n = this.selectpicker.main.elements[i]), r = n.firstChild, t && (this.selectedIndex = e), n.classList.toggle("selected", t), n.classList.toggle("active", a), a && (this.selectpicker.view.currentActive = n, this.activeIndex = e), r && (r.classList.toggle("selected", t), r.classList.toggle("active", a), r.setAttribute("aria-selected", t)), a || !l && t && void 0 !== this.prevActiveIndex && (s = this.selectpicker.main.map.newIndex[this.prevActiveIndex], (o = this.selectpicker.main.elements[s]).classList.remove("active"), o.firstChild && o.firstChild.classList.remove("active"))
            },
            setDisabled: function(e, t, i, n) {
                var s;
                i || (i = this.selectpicker.main.map.newIndex[e]), n || (n = this.selectpicker.main.elements[i]), s = n.firstChild, n.classList.toggle(j.DISABLED, t), s && ("4" === W.major && s.classList.toggle(j.DISABLED, t), s.setAttribute("aria-disabled", t), t ? s.setAttribute("tabindex", -1) : s.setAttribute("tabindex", 0))
            },
            isDisabled: function() {
                return this.$element[0].disabled
            },
            checkDisabled: function() {
                var e = this;
                this.isDisabled() ? (this.$newElement[0].classList.add(j.DISABLED), this.$button.addClass(j.DISABLED).attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button[0].classList.contains(j.DISABLED) && (this.$newElement[0].classList.remove(j.DISABLED), this.$button.removeClass(j.DISABLED).attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.on("click", function() {
                    return !e.isDisabled()
                })
            },
            togglePlaceholder: function() {
                var e = this.$element[0],
                    t = e.selectedIndex,
                    i = -1 === t;
                i || e.options[t].value || (i = !0), this.$button.toggleClass("bs-placeholder", i)
            },
            tabIndex: function() {
                this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
            },
            clickListener: function() {
                var y = this,
                    t = z(document);

                function e() {
                    y.options.liveSearch ? y.$searchbox.trigger("focus") : y.$menuInner.trigger("focus")
                }

                function i() {
                    y.dropdown && y.dropdown._popper && y.dropdown._popper.state.isCreated ? e() : requestAnimationFrame(i)
                }
                t.data("spaceSelect", !1), this.$button.on("keyup", function(e) {
                    /(32)/.test(e.keyCode.toString(10)) && t.data("spaceSelect") && (e.preventDefault(), t.data("spaceSelect", !1))
                }), this.$newElement.on("show.bs.dropdown", function() {
                    3 < W.major && !y.dropdown && (y.dropdown = y.$button.data("bs.dropdown"), y.dropdown._menu = y.$menu[0])
                }), this.$button.on("click.bs.dropdown.data-api", function() {
                    y.$newElement.hasClass(j.SHOW) || y.setSize()
                }), this.$element.on("shown" + M, function() {
                    y.$menuInner[0].scrollTop !== y.selectpicker.view.scrollTop && (y.$menuInner[0].scrollTop = y.selectpicker.view.scrollTop), 3 < W.major ? requestAnimationFrame(i) : e()
                }), this.$menuInner.on("click", "li a", function(e, t) {
                    var i = z(this),
                        n = y.isVirtual() ? y.selectpicker.view.position0 : 0,
                        s = y.selectpicker.current.map.originalIndex[i.parent().index() + n],
                        o = S(y.$element[0]),
                        r = y.$element.prop("selectedIndex"),
                        l = !0;
                    if (y.multiple && 1 !== y.options.maxOptions && e.stopPropagation(), e.preventDefault(), !y.isDisabled() && !i.parent().hasClass(j.DISABLED)) {
                        var a = y.$element.find("option"),
                            c = a.eq(s),
                            d = c.prop("selected"),
                            h = c.parent("optgroup"),
                            p = h.find("option"),
                            u = y.options.maxOptions,
                            f = h.data("maxOptions") || !1;
                        if (s === y.activeIndex && (t = !0), t || (y.prevActiveIndex = y.activeIndex, y.activeIndex = void 0), y.multiple) {
                            if (c.prop("selected", !d), y.setSelected(s, !d), i.trigger("blur"), !1 !== u || !1 !== f) {
                                var m = u < a.filter(":selected").length,
                                    v = f < h.find("option:selected").length;
                                if (u && m || f && v)
                                    if (u && 1 == u) {
                                        a.prop("selected", !1), c.prop("selected", !0);
                                        for (var g = 0; g < a.length; g++) y.setSelected(g, !1);
                                        y.setSelected(s, !0)
                                    } else if (f && 1 == f) {
                                    h.find("option:selected").prop("selected", !1), c.prop("selected", !0);
                                    for (g = 0; g < p.length; g++) {
                                        var b = p[g];
                                        y.setSelected(a.index(b), !1)
                                    }
                                    y.setSelected(s, !0)
                                } else {
                                    var w = "string" == typeof y.options.maxOptionsText ? [y.options.maxOptionsText, y.options.maxOptionsText] : y.options.maxOptionsText,
                                        x = "function" == typeof w ? w(u, f) : w,
                                        I = x[0].replace("{n}", u),
                                        k = x[1].replace("{n}", f),
                                        $ = z('<div class="notify"></div>');
                                    x[2] && (I = I.replace("{var}", x[2][1 < u ? 0 : 1]), k = k.replace("{var}", x[2][1 < f ? 0 : 1])), c.prop("selected", !1), y.$menu.append($), u && m && ($.append(z("<div>" + I + "</div>")), l = !1, y.$element.trigger("maxReached" + M)), f && v && ($.append(z("<div>" + k + "</div>")), l = !1, y.$element.trigger("maxReachedGrp" + M)), setTimeout(function() {
                                        y.setSelected(s, !1)
                                    }, 10), $.delay(750).fadeOut(300, function() {
                                        z(this).remove()
                                    })
                                }
                            }
                        } else a.prop("selected", !1), c.prop("selected", !0), y.setSelected(s, !0);
                        !y.multiple || y.multiple && 1 === y.options.maxOptions ? y.$button.trigger("focus") : y.options.liveSearch && y.$searchbox.trigger("focus"), l && (o != S(y.$element[0]) && y.multiple || r != y.$element.prop("selectedIndex") && !y.multiple) && (E = [s, c.prop("selected"), o], y.$element.triggerNative("change"))
                    }
                }), this.$menu.on("click", "li." + j.DISABLED + " a, ." + j.POPOVERHEADER + ", ." + j.POPOVERHEADER + " :not(.close)", function(e) {
                    e.currentTarget == this && (e.preventDefault(), e.stopPropagation(), y.options.liveSearch && !z(e.target).hasClass("close") ? y.$searchbox.trigger("focus") : y.$button.trigger("focus"))
                }), this.$menuInner.on("click", ".divider, .dropdown-header", function(e) {
                    e.preventDefault(), e.stopPropagation(), y.options.liveSearch ? y.$searchbox.trigger("focus") : y.$button.trigger("focus")
                }), this.$menu.on("click", "." + j.POPOVERHEADER + " .close", function() {
                    y.$button.trigger("click")
                }), this.$searchbox.on("click", function(e) {
                    e.stopPropagation()
                }), this.$menu.on("click", ".actions-btn", function(e) {
                    y.options.liveSearch ? y.$searchbox.trigger("focus") : y.$button.trigger("focus"), e.preventDefault(), e.stopPropagation(), z(this).hasClass("bs-select-all") ? y.selectAll() : y.deselectAll()
                }), this.$element.on({
                    change: function() {
                        y.render(), y.$element.trigger("changed" + M, E), E = null
                    },
                    focus: function() {
                        y.options.mobile || y.$button.trigger("focus")
                    }
                })
            },
            liveSearchListener: function() {
                var u = this,
                    f = document.createElement("li");
                this.$button.on("click.bs.dropdown.data-api", function() {
                    u.$searchbox.val() && u.$searchbox.val("")
                }), this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api", function(e) {
                    e.stopPropagation()
                }), this.$searchbox.on("input propertychange", function() {
                    var e = u.$searchbox.val();
                    if (u.selectpicker.search.map.newIndex = {}, u.selectpicker.search.map.originalIndex = {}, u.selectpicker.search.elements = [], u.selectpicker.search.data = [], e) {
                        var t = [],
                            i = e.toUpperCase(),
                            n = {},
                            s = [],
                            o = u._searchStyle(),
                            r = u.options.liveSearchNormalize;
                        r && (i = w(i)), u._$lisSelected = u.$menuInner.find(".selected");
                        for (var l = 0; l < u.selectpicker.main.data.length; l++) {
                            var a = u.selectpicker.main.data[l];
                            n[l] || (n[l] = $(a, i, o, r)), n[l] && void 0 !== a.headerIndex && -1 === s.indexOf(a.headerIndex) && (0 < a.headerIndex && (n[a.headerIndex - 1] = !0, s.push(a.headerIndex - 1)), n[a.headerIndex] = !0, s.push(a.headerIndex), n[a.lastIndex + 1] = !0), n[l] && "optgroup-label" !== a.type && s.push(l)
                        }
                        l = 0;
                        for (var c = s.length; l < c; l++) {
                            var d = s[l],
                                h = s[l - 1],
                                p = (a = u.selectpicker.main.data[d], u.selectpicker.main.data[h]);
                            ("divider" !== a.type || "divider" === a.type && p && "divider" !== p.type && c - 1 !== l) && (u.selectpicker.search.data.push(a), t.push(u.selectpicker.main.elements[d]), a.hasOwnProperty("originalIndex") && (u.selectpicker.search.map.newIndex[a.originalIndex] = t.length - 1, u.selectpicker.search.map.originalIndex[t.length - 1] = a.originalIndex))
                        }
                        u.activeIndex = void 0, u.noScroll = !0, u.$menuInner.scrollTop(0), u.selectpicker.search.elements = t, u.createView(!0), t.length || (f.className = "no-results", f.innerHTML = u.options.noneResultsText.replace("{0}", '"' + U(e) + '"'), u.$menuInner[0].firstChild.appendChild(f))
                    } else u.$menuInner.scrollTop(0), u.createView(!1)
                })
            },
            _searchStyle: function() {
                return this.options.liveSearchStyle || "contains"
            },
            val: function(e) {
                return void 0 !== e ? (this.$element.val(e).trigger("changed" + M, E), this.render(), E = null, this.$element) : this.$element.val()
            },
            changeAll: function(e) {
                if (this.multiple) {
                    void 0 === e && (e = !0);
                    var t = this.$element[0],
                        i = t.options,
                        n = 0,
                        s = 0,
                        o = S(t);
                    t.classList.add("bs-select-hidden");
                    for (var r = 0, l = this.selectpicker.current.elements.length; r < l; r++) {
                        var a = this.selectpicker.current.data[r],
                            c = i[this.selectpicker.current.map.originalIndex[r]];
                        c && !c.disabled && "divider" !== a.type && (c.selected && n++, (c.selected = e) && s++)
                    }
                    t.classList.remove("bs-select-hidden"), n !== s && (this.setOptionStatus(), this.togglePlaceholder(), E = [null, null, o], this.$element.triggerNative("change"))
                }
            },
            selectAll: function() {
                return this.changeAll(!0)
            },
            deselectAll: function() {
                return this.changeAll(!1)
            },
            toggle: function(e) {
                (e = e || window.event) && e.stopPropagation(), this.$button.trigger("click.bs.dropdown.data-api")
            },
            keydown: function(e) {
                var t, i, n, s, o, r = z(this),
                    l = r.hasClass("dropdown-toggle"),
                    a = (l ? r.closest(".dropdown") : r.closest(V.MENU)).data("this"),
                    c = a.findLis(),
                    d = !1,
                    h = e.which === D && !l && !a.options.selectOnTab,
                    p = _.test(e.which) || h,
                    u = a.$menuInner[0].scrollTop,
                    f = a.isVirtual(),
                    m = !0 === f ? a.selectpicker.view.position0 : 0;
                if (!(i = a.$newElement.hasClass(j.SHOW)) && (p || 48 <= e.which && e.which <= 57 || 96 <= e.which && e.which <= 105 || 65 <= e.which && e.which <= 90) && (a.$button.trigger("click.bs.dropdown.data-api"), a.options.liveSearch)) a.$searchbox.trigger("focus");
                else {
                    if (e.which === T && i && (e.preventDefault(), a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")), p) {
                        if (!c.length) return;
                        void 0 === (t = !0 === f ? c.index(c.filter(".active")) : a.selectpicker.current.map.newIndex[a.activeIndex]) && (t = -1), -1 !== t && ((n = a.selectpicker.current.elements[t + m]).classList.remove("active"), n.firstChild && n.firstChild.classList.remove("active")), e.which === N ? (-1 !== t && t--, t + m < 0 && (t += c.length), a.selectpicker.view.canHighlight[t + m] || -1 === (t = a.selectpicker.view.canHighlight.slice(0, t + m).lastIndexOf(!0) - m) && (t = c.length - 1)) : (e.which === R || h) && (++t + m >= a.selectpicker.view.canHighlight.length && (t = 0), a.selectpicker.view.canHighlight[t + m] || (t = t + 1 + a.selectpicker.view.canHighlight.slice(t + m + 1).indexOf(!0))), e.preventDefault();
                        var v = m + t;
                        e.which === N ? 0 === m && t === c.length - 1 ? (a.$menuInner[0].scrollTop = a.$menuInner[0].scrollHeight, v = a.selectpicker.current.elements.length - 1) : d = (o = (s = a.selectpicker.current.data[v]).position - s.height) < u : (e.which === R || h) && (0 === t ? v = a.$menuInner[0].scrollTop = 0 : d = u < (o = (s = a.selectpicker.current.data[v]).position - a.sizeInfo.menuInnerHeight)), (n = a.selectpicker.current.elements[v]) && (n.classList.add("active"), n.firstChild && n.firstChild.classList.add("active")), a.activeIndex = a.selectpicker.current.map.originalIndex[v], a.selectpicker.view.currentActive = n, d && (a.$menuInner[0].scrollTop = o), a.options.liveSearch ? a.$searchbox.trigger("focus") : r.trigger("focus")
                    } else if (!r.is("input") && !q.test(e.which) || e.which === H && a.selectpicker.keydown.keyHistory) {
                        var g, b, w = [];
                        e.preventDefault(), a.selectpicker.keydown.keyHistory += O[e.which], a.selectpicker.keydown.resetKeyHistory.cancel && clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel), a.selectpicker.keydown.resetKeyHistory.cancel = a.selectpicker.keydown.resetKeyHistory.start(), b = a.selectpicker.keydown.keyHistory, /^(.)\1+$/.test(b) && (b = b.charAt(0));
                        for (var x = 0; x < a.selectpicker.current.data.length; x++) {
                            var I = a.selectpicker.current.data[x];
                            $(I, b, "startsWith", !0) && a.selectpicker.view.canHighlight[x] && (I.index = x, w.push(I.originalIndex))
                        }
                        if (w.length) {
                            var k = 0;
                            c.removeClass("active").find("a").removeClass("active"), 1 === b.length && (-1 === (k = w.indexOf(a.activeIndex)) || k === w.length - 1 ? k = 0 : k++), g = a.selectpicker.current.map.newIndex[w[k]], d = 0 < u - (s = a.selectpicker.current.data[g]).position ? (o = s.position - s.height, !0) : (o = s.position - a.sizeInfo.menuInnerHeight, s.position > u + a.sizeInfo.menuInnerHeight), (n = a.selectpicker.current.elements[g]).classList.add("active"), n.firstChild && n.firstChild.classList.add("active"), a.activeIndex = w[k], n.firstChild.focus(), d && (a.$menuInner[0].scrollTop = o), r.trigger("focus")
                        }
                    }
                    i && (e.which === H && !a.selectpicker.keydown.keyHistory || e.which === A || e.which === D && a.options.selectOnTab) && (e.which !== H && e.preventDefault(), a.options.liveSearch && e.which === H || (a.$menuInner.find(".active a").trigger("click", !0), r.trigger("focus"), a.options.liveSearch || (e.preventDefault(), z(document).data("spaceSelect", !0))))
                }
            },
            mobile: function() {
                this.$element[0].classList.add("mobile-device")
            },
            refresh: function() {
                var e = z.extend({}, this.options, this.$element.data());
                this.options = e, this.selectpicker.main.map.newIndex = {}, this.selectpicker.main.map.originalIndex = {}, this.checkDisabled(), this.setStyle(), this.render(), this.createLi(), this.setWidth(), this.setSize(!0), this.$element.trigger("refreshed" + M)
            },
            hide: function() {
                this.$newElement.hide()
            },
            show: function() {
                this.$newElement.show()
            },
            remove: function() {
                this.$newElement.remove(), this.$element.remove()
            },
            destroy: function() {
                this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(M).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"), z(window).off(M + "." + this.selectId)
            }
        };
        var X = z.fn.selectpicker;
        z.fn.selectpicker = Q, z.fn.selectpicker.Constructor = J, z.fn.selectpicker.noConflict = function() {
            return z.fn.selectpicker = X, this
        }, z(document).off("keydown.bs.dropdown.data-api").on("keydown" + M, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', J.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function(e) {
            e.stopPropagation()
        }), z(window).on("load" + M + ".data-api", function() {
            z(".selectpicker").each(function() {
                var e = z(this);
                Q.call(e, e.data())
            })
        })
    }(e)
});
//# sourceMappingURL=bootstrap-select.min.js.map