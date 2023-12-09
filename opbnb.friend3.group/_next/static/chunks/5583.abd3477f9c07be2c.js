(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5583], {
        4769: function(t, e, n) {
            "use strict";

            function r() {
                return (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) || (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) || {}
            }

            function o() {
                let t = r();
                return t.subtle || t.webkitSubtle
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowserCryptoAvailable = e.getSubtleCrypto = e.getBrowerCrypto = void 0, e.getBrowerCrypto = r, e.getSubtleCrypto = o, e.isBrowserCryptoAvailable = function() {
                return !!r() && !!o()
            }
        },
        78859: function(t, e, n) {
            "use strict";
            var r = n(20982);

            function o() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function i() {
                return void 0 !== r && void 0 !== r.versions && void 0 !== r.versions.node
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.isBrowser = e.isNode = e.isReactNative = void 0, e.isReactNative = o, e.isNode = i, e.isBrowser = function() {
                return !o() && !i()
            }
        },
        17414: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            let r = n(1775);
            r.__exportStar(n(4769), e), r.__exportStar(n(78859), e)
        },
        1775: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                __assign: function() {
                    return i
                },
                __asyncDelegator: function() {
                    return R
                },
                __asyncGenerator: function() {
                    return g
                },
                __asyncValues: function() {
                    return _
                },
                __await: function() {
                    return b
                },
                __awaiter: function() {
                    return f
                },
                __classPrivateFieldGet: function() {
                    return x
                },
                __classPrivateFieldSet: function() {
                    return P
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return u
                },
                __exportStar: function() {
                    return h
                },
                __extends: function() {
                    return o
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return O
                },
                __importStar: function() {
                    return E
                },
                __makeTemplateObject: function() {
                    return w
                },
                __metadata: function() {
                    return a
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return y
                },
                __rest: function() {
                    return s
                },
                __spread: function() {
                    return v
                },
                __spreadArrays: function() {
                    return m
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                })(t, e)
            };

            function o(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function() {
                return (i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };

            function s(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(t); o < r.length; o++) 0 > e.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]]);
                return n
            }

            function u(t, e, n, r) {
                var o, i = arguments.length,
                    s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
                else
                    for (var u = t.length - 1; u >= 0; u--)(o = t[u]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, n, s) : o(e, n)) || s);
                return i > 3 && s && Object.defineProperty(e, n, s), s
            }

            function c(t, e) {
                return function(n, r) {
                    e(n, r, t)
                }
            }

            function a(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function f(t, e, n, r) {
                return new(n || (n = Promise))(function(o, i) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(t) {
                        try {
                            c(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? o(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, u)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            }

            function l(t, e) {
                var n, r, o, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function u(i) {
                    return function(u) {
                        return function(i) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; s;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: i[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            s.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && s.label < o[1]) {
                                            s.label = o[1], o = i;
                                            break
                                        }
                                        if (o && s.label < o[2]) {
                                            s.label = o[2], s.ops.push(i);
                                            break
                                        }
                                        o[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                i = e.call(t, s)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {
                                value: i[0] ? i[1] : void 0,
                                done: !0
                            }
                        }([i, u])
                    }
                }
            }

            function p(t, e, n, r) {
                void 0 === r && (r = n), t[r] = e[n]
            }

            function h(t, e) {
                for (var n in t) "default" === n || e.hasOwnProperty(n) || (e[n] = t[n])
            }

            function d(t) {
                var e = "function" == typeof Symbol && Symbol.iterator,
                    n = e && t[e],
                    r = 0;
                if (n) return n.call(t);
                if (t && "number" == typeof t.length) return {
                    next: function() {
                        return t && r >= t.length && (t = void 0), {
                            value: t && t[r++],
                            done: !t
                        }
                    }
                };
                throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function y(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    s = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return s
            }

            function v() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(y(arguments[e]));
                return t
            }

            function m() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                for (var r = Array(t), o = 0, e = 0; e < n; e++)
                    for (var i = arguments[e], s = 0, u = i.length; s < u; s++, o++) r[o] = i[s];
                return r
            }

            function b(t) {
                return this instanceof b ? (this.v = t, this) : new b(t)
            }

            function g(t, e, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var r, o = n.apply(t, e || []),
                    i = [];
                return r = {}, s("next"), s("throw"), s("return"), r[Symbol.asyncIterator] = function() {
                    return this
                }, r;

                function s(t) {
                    o[t] && (r[t] = function(e) {
                        return new Promise(function(n, r) {
                            i.push([t, e, n, r]) > 1 || u(t, e)
                        })
                    })
                }

                function u(t, e) {
                    try {
                        var n;
                        (n = o[t](e)).value instanceof b ? Promise.resolve(n.value.v).then(c, a) : f(i[0][2], n)
                    } catch (t) {
                        f(i[0][3], t)
                    }
                }

                function c(t) {
                    u("next", t)
                }

                function a(t) {
                    u("throw", t)
                }

                function f(t, e) {
                    t(e), i.shift(), i.length && u(i[0][0], i[0][1])
                }
            }

            function R(t) {
                var e, n;
                return e = {}, r("next"), r("throw", function(t) {
                    throw t
                }), r("return"), e[Symbol.iterator] = function() {
                    return this
                }, e;

                function r(r, o) {
                    e[r] = t[r] ? function(e) {
                        return (n = !n) ? {
                            value: b(t[r](e)),
                            done: "return" === r
                        } : o ? o(e) : e
                    } : o
                }
            }

            function _(t) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var e, n = t[Symbol.asyncIterator];
                return n ? n.call(t) : (t = d(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function() {
                    return this
                }, e);

                function r(n) {
                    e[n] = t[n] && function(e) {
                        return new Promise(function(r, o) {
                            ! function(t, e, n, r) {
                                Promise.resolve(r).then(function(e) {
                                    t({
                                        value: e,
                                        done: n
                                    })
                                }, e)
                            }(r, o, (e = t[n](e)).done, e.value)
                        })
                    }
                }
            }

            function w(t, e) {
                return Object.defineProperty ? Object.defineProperty(t, "raw", {
                    value: e
                }) : t.raw = e, t
            }

            function E(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }

            function O(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function x(t, e) {
                if (!e.has(t)) throw TypeError("attempted to get private field on non-instance");
                return e.get(t)
            }

            function P(t, e, n) {
                if (!e.has(t)) throw TypeError("attempted to set private field on non-instance");
                return e.set(t, n), n
            }
        },
        49348: function(t, e, n) {
            "use strict";
            n.d(e, {
                k: function() {
                    return a
                },
                Z: function() {
                    return f
                }
            });
            var r = n(18678),
                o = n(52554),
                i = n.n(o),
                s = n(70846),
                u = n(39247);
            let c = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class a {
                constructor(t, e = !1) {
                    if (this.url = t, this.disableProviderPing = e, this.events = new r.EventEmitter, this.isAvailable = !1, this.registering = !1, !(0, u.isHttpUrl)(t)) throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    this.url = t, this.disableProviderPing = e
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async open(t = this.url) {
                    await this.register(t)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(t, e) {
                    this.isAvailable || await this.register();
                    try {
                        let e = (0, s.u)(t),
                            n = await i()(this.url, Object.assign(Object.assign({}, c), {
                                body: e
                            })),
                            r = await n.json();
                        this.onPayload({
                            data: r
                        })
                    } catch (e) {
                        this.onError(t.id, e)
                    }
                }
                async register(t = this.url) {
                    if (!(0, u.isHttpUrl)(t)) throw Error(`Provided URL is not compatible with HTTP connection: ${t}`);
                    if (this.registering) {
                        let t = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((t, e) => {
                            this.events.once("register_error", t => {
                                this.resetMaxListeners(), e(t)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return e(Error("HTTP connection is missing or invalid"));
                                t()
                            })
                        })
                    }
                    this.url = t, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let e = (0, s.u)({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await i()(t, Object.assign(Object.assign({}, c), {
                                body: e
                            }))
                        }
                        this.onOpen()
                    } catch (e) {
                        let t = this.parseError(e);
                        throw this.events.emit("register_error", t), this.onClose(), t
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(t) {
                    if (void 0 === t.data) return;
                    let e = "string" == typeof t.data ? (0, s.D)(t.data) : t.data;
                    this.events.emit("payload", e)
                }
                onError(t, e) {
                    let n = this.parseError(e),
                        r = n.message || n.toString(),
                        o = (0, u.formatJsonRpcError)(t, r);
                    this.events.emit("payload", o)
                }
                parseError(t, e = this.url) {
                    return (0, u.parseConnectionError)(t, e, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            var f = a
        },
        87778: function(t, e, n) {
            "use strict";
            n.d(e, {
                r: function() {
                    return i
                }
            });
            var r = n(18678),
                o = n(39247);
            class i extends o.IJsonRpcProvider {
                constructor(t) {
                    super(t), this.events = new r.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
                }
                async connect(t = this.connection) {
                    await this.open(t)
                }
                async disconnect() {
                    await this.close()
                }
                on(t, e) {
                    this.events.on(t, e)
                }
                once(t, e) {
                    this.events.once(t, e)
                }
                off(t, e) {
                    this.events.off(t, e)
                }
                removeListener(t, e) {
                    this.events.removeListener(t, e)
                }
                async request(t, e) {
                    return this.requestStrict((0, o.formatJsonRpcRequest)(t.method, t.params || [], t.id || (0, o.getBigIntRpcId)().toString()), e)
                }
                async requestStrict(t, e) {
                    return new Promise(async (n, r) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (t) {
                            r(t)
                        }
                        this.events.on(`${t.id}`, t => {
                            (0, o.isJsonRpcError)(t) ? r(t.error): n(t.result)
                        });
                        try {
                            await this.connection.send(t, e)
                        } catch (t) {
                            r(t)
                        }
                    })
                }
                setConnection(t = this.connection) {
                    return t
                }
                onPayload(t) {
                    this.events.emit("payload", t), (0, o.isJsonRpcResponse)(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
                        type: t.method,
                        data: t.params
                    })
                }
                onClose(t) {
                    t && 3e3 === t.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(t = this.connection) {
                    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof t && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
        },
        5618: function(t, e, n) {
            "use strict";
            n.d(e, {
                XR: function() {
                    return o
                },
                x0: function() {
                    return s
                }
            });
            class r {}
            class o extends r {
                constructor(t) {
                    super()
                }
            }
            class i extends r {
                constructor() {
                    super()
                }
            }
            class s extends i {
                constructor(t) {
                    super()
                }
            }
        },
        38613: function(t, e, n) {
            "use strict";
            n.d(e, {
                CA: function() {
                    return o
                },
                JV: function() {
                    return u
                },
                O4: function() {
                    return r
                },
                dQ: function() {
                    return i
                },
                xK: function() {
                    return s
                }
            });
            let r = "INTERNAL_ERROR",
                o = "SERVER_ERROR",
                i = [-32700, -32600, -32601, -32602, -32603],
                s = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [r]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [o]: {
                        code: -32e3,
                        message: "Server error"
                    }
                },
                u = o
        },
        28870: function(t, e, n) {
            "use strict";
            var r = n(17414);
            n.o(r, "IJsonRpcProvider") && n.d(e, {
                IJsonRpcProvider: function() {
                    return r.IJsonRpcProvider
                }
            }), n.o(r, "formatJsonRpcError") && n.d(e, {
                formatJsonRpcError: function() {
                    return r.formatJsonRpcError
                }
            }), n.o(r, "formatJsonRpcRequest") && n.d(e, {
                formatJsonRpcRequest: function() {
                    return r.formatJsonRpcRequest
                }
            }), n.o(r, "formatJsonRpcResult") && n.d(e, {
                formatJsonRpcResult: function() {
                    return r.formatJsonRpcResult
                }
            }), n.o(r, "getBigIntRpcId") && n.d(e, {
                getBigIntRpcId: function() {
                    return r.getBigIntRpcId
                }
            }), n.o(r, "isHttpUrl") && n.d(e, {
                isHttpUrl: function() {
                    return r.isHttpUrl
                }
            }), n.o(r, "isJsonRpcError") && n.d(e, {
                isJsonRpcError: function() {
                    return r.isJsonRpcError
                }
            }), n.o(r, "isJsonRpcRequest") && n.d(e, {
                isJsonRpcRequest: function() {
                    return r.isJsonRpcRequest
                }
            }), n.o(r, "isJsonRpcResponse") && n.d(e, {
                isJsonRpcResponse: function() {
                    return r.isJsonRpcResponse
                }
            }), n.o(r, "isJsonRpcResult") && n.d(e, {
                isJsonRpcResult: function() {
                    return r.isJsonRpcResult
                }
            }), n.o(r, "isLocalhostUrl") && n.d(e, {
                isLocalhostUrl: function() {
                    return r.isLocalhostUrl
                }
            }), n.o(r, "isReactNative") && n.d(e, {
                isReactNative: function() {
                    return r.isReactNative
                }
            }), n.o(r, "isWsUrl") && n.d(e, {
                isWsUrl: function() {
                    return r.isWsUrl
                }
            }), n.o(r, "payloadId") && n.d(e, {
                payloadId: function() {
                    return r.payloadId
                }
            })
        },
        36083: function(t, e, n) {
            "use strict";
            n.d(e, {
                CX: function() {
                    return u
                },
                L2: function() {
                    return s
                },
                by: function() {
                    return i
                },
                i5: function() {
                    return o
                }
            });
            var r = n(38613);

            function o(t) {
                return r.dQ.includes(t)
            }

            function i(t) {
                return Object.keys(r.xK).includes(t) ? r.xK[t] : r.xK[r.JV]
            }

            function s(t) {
                let e = Object.values(r.xK).find(e => e.code === t);
                return e || r.xK[r.JV]
            }

            function u(t, e, n) {
                return t.message.includes("getaddrinfo ENOTFOUND") || t.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${n} RPC url at ${e}`) : t
            }
        },
        13523: function(t, e, n) {
            "use strict";
            n.d(e, {
                CS: function() {
                    return s
                },
                RI: function() {
                    return a
                },
                o0: function() {
                    return i
                },
                sT: function() {
                    return u
                },
                tm: function() {
                    return c
                }
            });
            var r = n(36083),
                o = n(38613);

            function i(t = 3) {
                let e = Date.now() * Math.pow(10, t);
                return e + Math.floor(Math.random() * Math.pow(10, t))
            }

            function s(t = 6) {
                return BigInt(i(t))
            }

            function u(t, e, n) {
                return {
                    id: n || i(),
                    jsonrpc: "2.0",
                    method: t,
                    params: e
                }
            }

            function c(t, e) {
                return {
                    id: t,
                    jsonrpc: "2.0",
                    result: e
                }
            }

            function a(t, e, n) {
                var i;
                return {
                    id: t,
                    jsonrpc: "2.0",
                    error: void 0 === (i = e) ? (0, r.by)(o.O4) : ("string" == typeof i && (i = Object.assign(Object.assign({}, (0, r.by)(o.CA)), {
                        message: i
                    })), void 0 !== n && (i.data = n), (0, r.i5)(i.code) && (i = (0, r.L2)(i.code)), i)
                }
            }
        },
        39247: function(t, e, n) {
            "use strict";
            n.d(e, {
                IJsonRpcProvider: function() {
                    return s.x0
                },
                formatJsonRpcError: function() {
                    return i.RI
                },
                formatJsonRpcRequest: function() {
                    return i.sT
                },
                formatJsonRpcResult: function() {
                    return i.tm
                },
                getBigIntRpcId: function() {
                    return i.CS
                },
                isHttpUrl: function() {
                    return u.jK
                },
                isJsonRpcError: function() {
                    return c.jg
                },
                isJsonRpcRequest: function() {
                    return c.DW
                },
                isJsonRpcResponse: function() {
                    return c.u
                },
                isJsonRpcResult: function() {
                    return c.k4
                },
                isLocalhostUrl: function() {
                    return u.JF
                },
                isWsUrl: function() {
                    return u.UZ
                },
                parseConnectionError: function() {
                    return r.CX
                },
                payloadId: function() {
                    return i.o0
                }
            }), n(38613);
            var r = n(36083),
                o = n(28870);
            n.o(o, "IJsonRpcProvider") && n.d(e, {
                IJsonRpcProvider: function() {
                    return o.IJsonRpcProvider
                }
            }), n.o(o, "formatJsonRpcError") && n.d(e, {
                formatJsonRpcError: function() {
                    return o.formatJsonRpcError
                }
            }), n.o(o, "formatJsonRpcRequest") && n.d(e, {
                formatJsonRpcRequest: function() {
                    return o.formatJsonRpcRequest
                }
            }), n.o(o, "formatJsonRpcResult") && n.d(e, {
                formatJsonRpcResult: function() {
                    return o.formatJsonRpcResult
                }
            }), n.o(o, "getBigIntRpcId") && n.d(e, {
                getBigIntRpcId: function() {
                    return o.getBigIntRpcId
                }
            }), n.o(o, "isHttpUrl") && n.d(e, {
                isHttpUrl: function() {
                    return o.isHttpUrl
                }
            }), n.o(o, "isJsonRpcError") && n.d(e, {
                isJsonRpcError: function() {
                    return o.isJsonRpcError
                }
            }), n.o(o, "isJsonRpcRequest") && n.d(e, {
                isJsonRpcRequest: function() {
                    return o.isJsonRpcRequest
                }
            }), n.o(o, "isJsonRpcResponse") && n.d(e, {
                isJsonRpcResponse: function() {
                    return o.isJsonRpcResponse
                }
            }), n.o(o, "isJsonRpcResult") && n.d(e, {
                isJsonRpcResult: function() {
                    return o.isJsonRpcResult
                }
            }), n.o(o, "isLocalhostUrl") && n.d(e, {
                isLocalhostUrl: function() {
                    return o.isLocalhostUrl
                }
            }), n.o(o, "isReactNative") && n.d(e, {
                isReactNative: function() {
                    return o.isReactNative
                }
            }), n.o(o, "isWsUrl") && n.d(e, {
                isWsUrl: function() {
                    return o.isWsUrl
                }
            }), n.o(o, "payloadId") && n.d(e, {
                payloadId: function() {
                    return o.payloadId
                }
            });
            var i = n(13523),
                s = n(27438),
                u = n(99056),
                c = n(20827)
        },
        27438: function(t, e, n) {
            "use strict";
            n.d(e, {
                x0: function() {
                    return r.x0
                }
            });
            var r = n(5618)
        },
        99056: function(t, e, n) {
            "use strict";

            function r(t, e) {
                let n = function(t) {
                    let e = t.match(RegExp(/^\w+:/, "gi"));
                    if (e && e.length) return e[0]
                }(t);
                return void 0 !== n && new RegExp(e).test(n)
            }

            function o(t) {
                return r(t, "^https?:")
            }

            function i(t) {
                return r(t, "^wss?:")
            }

            function s(t) {
                return RegExp("wss?://localhost(:d{2,5})?").test(t)
            }
            n.d(e, {
                JF: function() {
                    return s
                },
                UZ: function() {
                    return i
                },
                jK: function() {
                    return o
                }
            })
        },
        20827: function(t, e, n) {
            "use strict";

            function r(t) {
                return "object" == typeof t && "id" in t && "jsonrpc" in t && "2.0" === t.jsonrpc
            }

            function o(t) {
                return r(t) && "method" in t
            }

            function i(t) {
                return r(t) && (s(t) || u(t))
            }

            function s(t) {
                return "result" in t
            }

            function u(t) {
                return "error" in t
            }
            n.d(e, {
                DW: function() {
                    return o
                },
                jg: function() {
                    return u
                },
                k4: function() {
                    return s
                },
                u: function() {
                    return i
                }
            })
        },
        70846: function(t, e, n) {
            "use strict";
            n.d(e, {
                D: function() {
                    return i
                },
                u: function() {
                    return s
                }
            });
            let r = t => JSON.stringify(t, (t, e) => "bigint" == typeof e ? e.toString() + "n" : e),
                o = t => {
                    let e = t.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(e, (t, e) => {
                        let n = "string" == typeof e && e.match(/^\d+n$/);
                        return n ? BigInt(e.substring(0, e.length - 1)) : e
                    })
                };

            function i(t) {
                if ("string" != typeof t) throw Error(`Cannot safe json parse value of type ${typeof t}`);
                try {
                    return o(t)
                } catch (e) {
                    return t
                }
            }

            function s(t) {
                return "string" == typeof t ? t : r(t) || ""
            }
        },
        52554: function(t, e) {
            var n = "undefined" != typeof self ? self : this,
                r = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = n.DOMException
                    }
                    return t.prototype = n, new t
                }();
            (function(t) {
                var e = {
                    searchParams: "URLSearchParams" in r,
                    iterable: "Symbol" in r && "iterator" in Symbol,
                    blob: "FileReader" in r && "Blob" in r && function() {
                        try {
                            return new Blob, !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in r,
                    arrayBuffer: "ArrayBuffer" in r
                };
                if (e.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    o = ArrayBuffer.isView || function(t) {
                        return t && n.indexOf(Object.prototype.toString.call(t)) > -1
                    };

                function i(t) {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }

                function s(t) {
                    return "string" != typeof t && (t = String(t)), t
                }

                function u(t) {
                    var n = {
                        next: function() {
                            var e = t.shift();
                            return {
                                done: void 0 === e,
                                value: e
                            }
                        }
                    };
                    return e.iterable && (n[Symbol.iterator] = function() {
                        return n
                    }), n
                }

                function c(t) {
                    this.map = {}, t instanceof c ? t.forEach(function(t, e) {
                        this.append(e, t)
                    }, this) : Array.isArray(t) ? t.forEach(function(t) {
                        this.append(t[0], t[1])
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                        this.append(e, t[e])
                    }, this)
                }

                function a(t) {
                    if (t.bodyUsed) return Promise.reject(TypeError("Already read"));
                    t.bodyUsed = !0
                }

                function f(t) {
                    return new Promise(function(e, n) {
                        t.onload = function() {
                            e(t.result)
                        }, t.onerror = function() {
                            n(t.error)
                        }
                    })
                }

                function l(t) {
                    var e = new FileReader,
                        n = f(e);
                    return e.readAsArrayBuffer(t), n
                }

                function p(t) {
                    if (t.slice) return t.slice(0);
                    var e = new Uint8Array(t.byteLength);
                    return e.set(new Uint8Array(t)), e.buffer
                }

                function h() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        if (this._bodyInit = t, t) {
                            if ("string" == typeof t) this._bodyText = t;
                            else if (e.blob && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                            else if (e.formData && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                            else if (e.searchParams && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                            else {
                                var n;
                                e.arrayBuffer && e.blob && (n = t) && DataView.prototype.isPrototypeOf(n) ? (this._bodyArrayBuffer = p(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : e.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || o(t)) ? this._bodyArrayBuffer = p(t) : this._bodyText = t = Object.prototype.toString.call(t)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, e.blob && (this.blob = function() {
                        var t = a(this);
                        if (t) return t;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? a(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(l)
                    }), this.text = function() {
                        var t, e, n, r = a(this);
                        if (r) return r;
                        if (this._bodyBlob) return t = this._bodyBlob, n = f(e = new FileReader), e.readAsText(t), n;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                            for (var e = new Uint8Array(t), n = Array(e.length), r = 0; r < e.length; r++) n[r] = String.fromCharCode(e[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, e.formData && (this.formData = function() {
                        return this.text().then(v)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                c.prototype.append = function(t, e) {
                    t = i(t), e = s(e);
                    var n = this.map[t];
                    this.map[t] = n ? n + ", " + e : e
                }, c.prototype.delete = function(t) {
                    delete this.map[i(t)]
                }, c.prototype.get = function(t) {
                    return t = i(t), this.has(t) ? this.map[t] : null
                }, c.prototype.has = function(t) {
                    return this.map.hasOwnProperty(i(t))
                }, c.prototype.set = function(t, e) {
                    this.map[i(t)] = s(e)
                }, c.prototype.forEach = function(t, e) {
                    for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                }, c.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push(n)
                    }), u(t)
                }, c.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(e) {
                        t.push(e)
                    }), u(t)
                }, c.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(e, n) {
                        t.push([n, e])
                    }), u(t)
                }, e.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function y(t, e) {
                    var n, r, o = (e = e || {}).body;
                    if (t instanceof y) {
                        if (t.bodyUsed) throw TypeError("Already read");
                        this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
                    } else this.url = String(t);
                    if (this.credentials = e.credentials || this.credentials || "same-origin", (e.headers || !this.headers) && (this.headers = new c(e.headers)), this.method = (r = (n = e.method || this.method || "GET").toUpperCase(), d.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(o)
                }

                function v(t) {
                    var e = new FormData;
                    return t.trim().split("&").forEach(function(t) {
                        if (t) {
                            var n = t.split("="),
                                r = n.shift().replace(/\+/g, " "),
                                o = n.join("=").replace(/\+/g, " ");
                            e.append(decodeURIComponent(r), decodeURIComponent(o))
                        }
                    }), e
                }

                function m(t, e) {
                    e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new c(e.headers), this.url = e.url || "", this._initBody(t)
                }
                y.prototype.clone = function() {
                    return new y(this, {
                        body: this._bodyInit
                    })
                }, h.call(y.prototype), h.call(m.prototype), m.prototype.clone = function() {
                    return new m(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new c(this.headers),
                        url: this.url
                    })
                }, m.error = function() {
                    var t = new m(null, {
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error", t
                };
                var b = [301, 302, 303, 307, 308];
                m.redirect = function(t, e) {
                    if (-1 === b.indexOf(e)) throw RangeError("Invalid status code");
                    return new m(null, {
                        status: e,
                        headers: {
                            location: t
                        }
                    })
                }, t.DOMException = r.DOMException;
                try {
                    new t.DOMException
                } catch (e) {
                    t.DOMException = function(t, e) {
                        this.message = t, this.name = e;
                        var n = Error(t);
                        this.stack = n.stack
                    }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                }

                function g(n, r) {
                    return new Promise(function(o, i) {
                        var s = new y(n, r);
                        if (s.signal && s.signal.aborted) return i(new t.DOMException("Aborted", "AbortError"));
                        var u = new XMLHttpRequest;

                        function a() {
                            u.abort()
                        }
                        u.onload = function() {
                            var t, e, n = {
                                status: u.status,
                                statusText: u.statusText,
                                headers: (t = u.getAllResponseHeaders() || "", e = new c, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                    var n = t.split(":"),
                                        r = n.shift().trim();
                                    if (r) {
                                        var o = n.join(":").trim();
                                        e.append(r, o)
                                    }
                                }), e)
                            };
                            n.url = "responseURL" in u ? u.responseURL : n.headers.get("X-Request-URL");
                            var r = "response" in u ? u.response : u.responseText;
                            o(new m(r, n))
                        }, u.onerror = function() {
                            i(TypeError("Network request failed"))
                        }, u.ontimeout = function() {
                            i(TypeError("Network request failed"))
                        }, u.onabort = function() {
                            i(new t.DOMException("Aborted", "AbortError"))
                        }, u.open(s.method, s.url, !0), "include" === s.credentials ? u.withCredentials = !0 : "omit" === s.credentials && (u.withCredentials = !1), "responseType" in u && e.blob && (u.responseType = "blob"), s.headers.forEach(function(t, e) {
                            u.setRequestHeader(e, t)
                        }), s.signal && (s.signal.addEventListener("abort", a), u.onreadystatechange = function() {
                            4 === u.readyState && s.signal.removeEventListener("abort", a)
                        }), u.send(void 0 === s._bodyInit ? null : s._bodyInit)
                    })
                }
                g.polyfill = !0, r.fetch || (r.fetch = g, r.Headers = c, r.Request = y, r.Response = m), t.Headers = c, t.Request = y, t.Response = m, t.fetch = g, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            })({}), r.fetch.ponyfill = !0, delete r.fetch.polyfill, (e = r.fetch).default = r.fetch, e.fetch = r.fetch, e.Headers = r.Headers, e.Request = r.Request, e.Response = r.Response, t.exports = e
        },
        18678: function(t) {
            "use strict";
            var e, n = "object" == typeof Reflect ? Reflect : null,
                r = n && "function" == typeof n.apply ? n.apply : function(t, e, n) {
                    return Function.prototype.apply.call(t, e, n)
                };
            e = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
            } : function(t) {
                return Object.getOwnPropertyNames(t)
            };
            var o = Number.isNaN || function(t) {
                return t != t
            };

            function i() {
                i.init.call(this)
            }
            t.exports = i, t.exports.once = function(t, e) {
                return new Promise(function(n, r) {
                    function o(n) {
                        t.removeListener(e, i), r(n)
                    }

                    function i() {
                        "function" == typeof t.removeListener && t.removeListener("error", o), n([].slice.call(arguments))
                    }
                    y(t, e, i, {
                        once: !0
                    }), "error" !== e && "function" == typeof t.on && y(t, "error", o, {
                        once: !0
                    })
                })
            }, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._eventsCount = 0, i.prototype._maxListeners = void 0;
            var s = 10;

            function u(t) {
                if ("function" != typeof t) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
            }

            function c(t) {
                return void 0 === t._maxListeners ? i.defaultMaxListeners : t._maxListeners
            }

            function a(t, e, n, r) {
                if (u(n), void 0 === (i = t._events) ? (i = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== i.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), i = t._events), s = i[e]), void 0 === s) s = i[e] = n, ++t._eventsCount;
                else if ("function" == typeof s ? s = i[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = c(t)) > 0 && s.length > o && !s.warned) {
                    s.warned = !0;
                    var o, i, s, a = Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, console && console.warn && console.warn(a)
                }
                return t
            }

            function f() {
                if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function l(t, e, n) {
                var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: t,
                        type: e,
                        listener: n
                    },
                    o = f.bind(r);
                return o.listener = n, r.wrapFn = o, o
            }

            function p(t, e, n) {
                var r = t._events;
                if (void 0 === r) return [];
                var o = r[e];
                return void 0 === o ? [] : "function" == typeof o ? n ? [o.listener || o] : [o] : n ? function(t) {
                    for (var e = Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                    return e
                }(o) : d(o, o.length)
            }

            function h(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var n = e[t];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function d(t, e) {
                for (var n = Array(e), r = 0; r < e; ++r) n[r] = t[r];
                return n
            }

            function y(t, e, n, r) {
                if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
                else if ("function" == typeof t.addEventListener) t.addEventListener(e, function o(i) {
                    r.once && t.removeEventListener(e, o), n(i)
                });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
            }
            Object.defineProperty(i, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || o(t)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    s = t
                }
            }), i.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, i.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || o(t)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this
            }, i.prototype.getMaxListeners = function() {
                return c(this)
            }, i.prototype.emit = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                var o = "error" === t,
                    i = this._events;
                if (void 0 !== i) o = o && void 0 === i.error;
                else if (!o) return !1;
                if (o) {
                    if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
                    var s, u = Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw u.context = s, u
                }
                var c = i[t];
                if (void 0 === c) return !1;
                if ("function" == typeof c) r(c, this, e);
                else
                    for (var a = c.length, f = d(c, a), n = 0; n < a; ++n) r(f[n], this, e);
                return !0
            }, i.prototype.addListener = function(t, e) {
                return a(this, t, e, !1)
            }, i.prototype.on = i.prototype.addListener, i.prototype.prependListener = function(t, e) {
                return a(this, t, e, !0)
            }, i.prototype.once = function(t, e) {
                return u(e), this.on(t, l(this, t, e)), this
            }, i.prototype.prependOnceListener = function(t, e) {
                return u(e), this.prependListener(t, l(this, t, e)), this
            }, i.prototype.removeListener = function(t, e) {
                var n, r, o, i, s;
                if (u(e), void 0 === (r = this._events) || void 0 === (n = r[t])) return this;
                if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
                else if ("function" != typeof n) {
                    for (o = -1, i = n.length - 1; i >= 0; i--)
                        if (n[i] === e || n[i].listener === e) {
                            s = n[i].listener, o = i;
                            break
                        }
                    if (o < 0) return this;
                    0 === o ? n.shift() : function(t, e) {
                        for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                        t.pop()
                    }(n, o), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || e)
                }
                return this
            }, i.prototype.off = i.prototype.removeListener, i.prototype.removeAllListeners = function(t) {
                var e, n, r;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
                if (0 == arguments.length) {
                    var o, i = Object.keys(n);
                    for (r = 0; r < i.length; ++r) "removeListener" !== (o = i[r]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(e = n[t])) this.removeListener(t, e);
                else if (void 0 !== e)
                    for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
                return this
            }, i.prototype.listeners = function(t) {
                return p(this, t, !0)
            }, i.prototype.rawListeners = function(t) {
                return p(this, t, !1)
            }, i.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : h.call(t, e)
            }, i.prototype.listenerCount = h, i.prototype.eventNames = function() {
                return this._eventsCount > 0 ? e(this._events) : []
            }
        },
        36584: function(t) {
            "use strict";
            t.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        }
    }
]);