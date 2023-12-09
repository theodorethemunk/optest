(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2738], {
        50633: function() {},
        18424: function(e, t, n) {
            "use strict";
            n.d(t, {
                n: function() {
                    return r
                }
            });
            var a = n(40256),
                i = n(8518);
            let r = a.Z.create({
                baseURL: "/api/"
            });
            r.interceptors.request.use(e => {
                try {
                    let t = localStorage.getItem("app.token");
                    t && (e.headers.Authorization = "Bearer " + t)
                } catch (e) {}
                return e
            }, e => Promise.reject(e)), r.interceptors.response.use(e => {
                if (0 === e.data.code) return e.data.data; {
                    var t;
                    let n = null === (t = e.config) || void 0 === t ? void 0 : t.method;
                    throw "get" !== n && i.Am.error(e.data.msg), Error(e.data.msg)
                }
            }, e => {
                var t, n, a, r;
                let u = (null === (n = e.response) || void 0 === n ? void 0 : null === (t = n.data) || void 0 === t ? void 0 : t.msg) || e.message,
                    s = null === (r = e.response) || void 0 === r ? void 0 : null === (a = r.config) || void 0 === a ? void 0 : a.method;
                return "get" !== s && i.Am.error(u), Promise.reject(Error(u))
            })
        },
        15454: function(e, t, n) {
            "use strict";
            n.d(t, {
                Cz: function() {
                    return u
                },
                GA: function() {
                    return s
                },
                Hm: function() {
                    return o
                },
                pY: function() {
                    return i
                },
                wE: function() {
                    return r
                }
            });
            var a = n(18424);
            let i = async e => {
                    let t = "/future/get_future?twitterUsername=".concat(e);
                    return await a.n.get(t)
                },
                r = async () => await a.n.post("/future/claim_future"),
                u = async e => {
                    let t = "/future/".concat(e, "/can_claim_value");
                    return await a.n.get(t)
                },
                s = async (e, t) => await a.n.post("/future/pay_create_future_fee", {
                    hash: e,
                    futureId: t
                }),
                o = async e => {
                    let t = "/future/get_subject_id_for_create?futureId=".concat(e);
                    return await a.n.get(t)
                }
        },
        78439: function(e, t, n) {
            "use strict";
            n.d(t, {
                K3: function() {
                    return u
                },
                Kz: function() {
                    return c
                },
                M6: function() {
                    return s
                },
                MC: function() {
                    return i
                },
                Z5: function() {
                    return o
                },
                Zw: function() {
                    return r
                },
                c1: function() {
                    return p
                },
                ev: function() {
                    return d
                },
                yM: function() {
                    return y
                }
            });
            var a = n(18424);
            let i = async e => {
                    let t = "/group/".concat(e);
                    return await a.n.get(t)
                },
                r = async e => {
                    let t = "/group/".concat(e, "/members");
                    return await a.n.get(t)
                },
                u = async e => {
                    let t = "/group/".concat(e, "/activity");
                    return await a.n.get(t)
                },
                s = async e => {
                    let t = "/group/".concat(e, "/top_donor");
                    return await a.n.get(t)
                },
                o = async e => {
                    let t = await a.n.get("/group/".concat(e, "/received_donation_records"));
                    return t
                },
                p = async (e, t) => {
                    let n = "/group/".concat(e, "/received_donation_records_by_mid?mid=").concat(t),
                        i = await a.n.get(n);
                    return i
                },
                c = async e => {
                    let t = "/group/top?type=".concat(e);
                    return await a.n.get(t)
                },
                d = async e => {
                    let t = "/group/recently_created?type=".concat(e);
                    return await a.n.get(t)
                },
                y = async e => {
                    let t = "/group/".concat(e, "/aid");
                    return await a.n.get(t)
                }
        },
        1028: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ag: function() {
                    return d
                },
                Dx: function() {
                    return f
                },
                EB: function() {
                    return o
                },
                Us: function() {
                    return p
                },
                XW: function() {
                    return b
                },
                Xo: function() {
                    return u
                },
                i$: function() {
                    return i
                },
                iQ: function() {
                    return m
                },
                mF: function() {
                    return g
                },
                oV: function() {
                    return l
                },
                pn: function() {
                    return s
                },
                qM: function() {
                    return v
                },
                rl: function() {
                    return r
                },
                x6: function() {
                    return c
                },
                xs: function() {
                    return y
                }
            });
            var a = n(18424);
            let i = async () => await a.n.get("/me/profile"),
                r = async e => await a.n.post("/me/update_bio", {
                    bio: e
                }),
                u = async () => await a.n.get("/me/bind_twitter"),
                s = async e => await a.n.post("/me/bind_inviter", {
                    code: e
                }),
                o = async e => await a.n.post("/me/submit_trade", {
                    hash: e
                }),
                p = async e => await a.n.post("/me/submit_create_group", {
                    hash: e
                }),
                c = async () => await a.n.get("/me/invitation_code"),
                d = async e => {
                    let t = await a.n.get("/me/chat_list" + (e ? "?sinceId=".concat(e) : ""));
                    return t
                },
                y = async () => await a.n.get("/me/earned_data"),
                l = async e => {
                    let t = "/me/is_member?targetId=".concat(e);
                    return await a.n.get(t)
                },
                m = async (e, t) => await a.n.post("/me/submit_donate", {
                    hash: e,
                    raw: t
                }),
                f = async e => {
                    let t = "/me/ranking_no?c=".concat(e);
                    return await a.n.get(t)
                },
                b = async e => await a.n.post("/me/withdraw", {
                    amount: e
                }),
                g = async e => {
                    let t = "/me/withdraw_history" + (e ? "?page=".concat(e) : "");
                    return await a.n.get(t)
                },
                v = async e => {
                    let t = "/me/profit_history" + (e ? "?page=".concat(e) : "");
                    return await a.n.get(t)
                }
        },
        98684: function(e, t, n) {
            "use strict";
            n.d(t, {
                fl: function() {
                    return y
                },
                zx: function() {
                    return d
                }
            });
            var a = n(64618),
                i = n(27024),
                r = n(23888),
                u = n(40062),
                s = n(82124),
                o = n(26920);
            let p = (0, u.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background shadow-md", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary/30",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90  shadow-destructive/30",
                            outline: "border border-input hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-secondary/30",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "underline-offset-4 hover:underline text-primary"
                        },
                        size: {
                            default: "h-10 py-2 px-4",
                            sm: "h-9 px-3 rounded-md",
                            lg: "h-11 px-8 rounded-md",
                            xs: "h-7 px-2 rounded-sm"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                c = (0, u.j)("animate-spin", {
                    variants: {
                        size: {
                            default: "w-3 h-3 mr-2",
                            lg: "w-4 h-4 mr-2",
                            sm: "w-3 h-3 mr-1.5",
                            xs: "w-3 h-3 mr-1"
                        }
                    },
                    defaultVariants: {
                        size: "default"
                    }
                }),
                d = i.forwardRef((e, t) => {
                    let {
                        className: n,
                        variant: i,
                        size: u,
                        asChild: o = !1,
                        ...c
                    } = e, d = o ? r.g7 : "button";
                    return (0, a.jsx)(d, {
                        className: (0, s.cn)(p({
                            variant: i,
                            size: u,
                            className: n
                        })),
                        ref: t,
                        ...c
                    })
                });
            d.displayName = "Button";
            let y = i.forwardRef((e, t) => {
                let {
                    className: n,
                    variant: i,
                    size: u,
                    asChild: d = !1,
                    loading: y = !1,
                    disabled: l,
                    children: m,
                    ...f
                } = e, b = d ? r.g7 : "button";
                return (0, a.jsxs)(b, {
                    className: (0, s.cn)(p({
                        variant: i,
                        size: u,
                        className: n
                    })),
                    ref: t,
                    ...f,
                    disabled: l || y,
                    children: [y && (0, a.jsx)(o.Z, {
                        className: (0, s.cn)(c({
                            size: u
                        }))
                    }), m]
                })
            });
            y.displayName = "LoadingButton"
        },
        82124: function(e, t, n) {
            "use strict";
            n.d(t, {
                cn: function() {
                    return r
                }
            });
            var a = n(51723),
                i = n(1138);

            function r() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (0, i.m)((0, a.W)(t))
            }
        },
        29069: function(e, t, n) {
            "use strict";
            n.d(t, {
                Io: function() {
                    return p
                },
                K8: function() {
                    return c
                },
                L0: function() {
                    return y
                },
                Q6: function() {
                    return o
                },
                Ul: function() {
                    return i
                },
                ZM: function() {
                    return l
                },
                fk: function() {
                    return d
                },
                hq: function() {
                    return r
                },
                qk: function() {
                    return u
                },
                rK: function() {
                    return s
                },
                tU: function() {
                    return a
                }
            });
            let a = "/assets/images/default-avatar.png",
                i = "0x2C5bF6f0953ffcDE678A35AB7d6CaEBC8B6b29F0",
                r = "0x55F9045F1D33928bd978efA42aE77E0D3Ba0CA3B",
                u = "0xD4D7a6F50122A1bE12c40b725369a670CcE79D23",
                s = "0x0d7488DdaA59112cdbb15d0b964C8C6B4025B8CF",
                o = "BNB",
                p = "c3m7qdvpz72g",
                c = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                d = "https://greenfield-sp.bnbchain.org",
                y = "https://greenfieldscan.com",
                l = "https://opbnbscan.com"
        },
        49070: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return s
                },
                k: function() {
                    return p
                },
                j4: function() {
                    return c
                },
                sh: function() {
                    return y
                },
                lt: function() {
                    return u
                },
                le: function() {
                    return o
                },
                Qs: function() {
                    return d
                },
                jP: function() {
                    return l
                }
            });
            let a = [{
                stateMutability: "nonpayable",
                type: "constructor",
                inputs: []
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32",
                    indexed: !1
                }, {
                    name: "groupSubject",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }],
                name: "GroupActivated"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32",
                    indexed: !1
                }, {
                    name: "groupSubject",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }],
                name: "GroupCreated"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "previousOwner",
                    internalType: "address",
                    type: "address",
                    indexed: !0
                }, {
                    name: "newOwner",
                    internalType: "address",
                    type: "address",
                    indexed: !0
                }],
                name: "OwnershipTransferred"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "manager",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }],
                name: "SetGroupManager"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "feeDestination",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }],
                name: "SetHolderAndReferralFeeDestination"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "SetHolderFeePercent"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "feeDestination",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }],
                name: "SetProtocolFeeDestination"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "SetProtocolFeePercent"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "SetReferralFeePercent"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "feeDestination",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }],
                name: "SetSubjectFeeDestination"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "SetSubjectFeePercent"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "trader",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }, {
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32",
                    indexed: !1
                }, {
                    name: "isBuy",
                    internalType: "bool",
                    type: "bool",
                    indexed: !1
                }, {
                    name: "ticketAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "tokenAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "protocolAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "subjectAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "holderAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "referralAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "supply",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "Trade"
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "BASE_DENOMINATOR",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "MAX_FEE_PERCENT",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "QUADRATIC_PARAMETER",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "SETTLEMENT_TOKEN_DECIMALS",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "groupSubject",
                    internalType: "address",
                    type: "address"
                }],
                name: "activateGroup",
                outputs: []
            }, {
                stateMutability: "payable",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "tickets",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "buyTickets",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "activateNow",
                    internalType: "bool",
                    type: "bool"
                }, {
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }],
                name: "createGroup",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }],
                name: "fetchGroup",
                outputs: [{
                    name: "",
                    internalType: "struct IFriend3V2.Group",
                    type: "tuple",
                    components: [{
                        name: "groupSubject",
                        internalType: "address",
                        type: "address"
                    }, {
                        name: "ticketSupply",
                        internalType: "uint256",
                        type: "uint256"
                    }, {
                        name: "status",
                        internalType: "enum IFriend3V2.GroupStatus",
                        type: "uint8"
                    }]
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "tickets",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "getBuyPrice",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "tickets",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "getBuyPriceAfterFee",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "pure",
                type: "function",
                inputs: [{
                    name: "supply",
                    internalType: "uint256",
                    type: "uint256"
                }, {
                    name: "tickets",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "getPrice",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "tickets",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "getSellPrice",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "tickets",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "getSellPriceAfterFee",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "groupManager",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "holderAndReferralFeeDestination",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "holderFeePercent",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "groupManager_",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "protocolFeeDestination_",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "subjectFeeDestination_",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "holderAndReferralFeeDestination_",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "protocolFeePercent_",
                    internalType: "uint256",
                    type: "uint256"
                }, {
                    name: "subjectFeePercent_",
                    internalType: "uint256",
                    type: "uint256"
                }, {
                    name: "holderFeePercent_",
                    internalType: "uint256",
                    type: "uint256"
                }, {
                    name: "referralFeePercent_",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "initialize",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "initialized",
                outputs: [{
                    name: "",
                    internalType: "bool",
                    type: "bool"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }],
                name: "isActiveId",
                outputs: [{
                    name: "",
                    internalType: "bool",
                    type: "bool"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "owner",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "protocolFeeDestination",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "protocolFeePercent",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "referralFeePercent",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [],
                name: "renounceOwnership",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "tickets",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "sellTickets",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "manager",
                    internalType: "address",
                    type: "address"
                }],
                name: "setGroupManager",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feeDestination",
                    internalType: "address",
                    type: "address"
                }],
                name: "setHolderAndReferralFeeDestination",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setHolderFeePercent",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feeDestination",
                    internalType: "address",
                    type: "address"
                }],
                name: "setProtocolFeeDestination",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setProtocolFeePercent",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setReferralFeePercent",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feeDestination",
                    internalType: "address",
                    type: "address"
                }],
                name: "setSubjectFeeDestination",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feePercent",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setSubjectFeePercent",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "subjectFeeDestination",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "subjectFeePercent",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "thisAddress",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "subjectId",
                    internalType: "bytes32",
                    type: "bytes32"
                }, {
                    name: "holder",
                    internalType: "address",
                    type: "address"
                }],
                name: "ticketsBalance",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "newOwner",
                    internalType: "address",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: []
            }];
            var i = n(29069),
                r = n(38926);

            function u() {
                return (0, r.GG)({
                    address: i.Ul,
                    abi: a,
                    functionName: "createGroup"
                })
            }

            function s() {
                return (0, r.GG)({
                    address: i.Ul,
                    abi: a,
                    functionName: "buyTickets",
                    value: 0 n
                })
            }

            function o() {
                return (0, r.GG)({
                    address: i.Ul,
                    abi: a,
                    functionName: "sellTickets"
                })
            }

            function p(e, t) {
                return (0, r.do)({
                    address: i.Ul,
                    abi: a,
                    functionName: "getBuyPrice",
                    args: [e, t],
                    enabled: !!e
                })
            }

            function c(e, t) {
                return (0, r.do)({
                    address: i.Ul,
                    abi: a,
                    functionName: "getBuyPriceAfterFee",
                    args: [e, t],
                    enabled: !!e
                })
            }

            function d(e, t) {
                return (0, r.do)({
                    address: i.Ul,
                    abi: a,
                    functionName: "getSellPriceAfterFee",
                    args: [e, t],
                    enabled: !!e
                })
            }

            function y(e) {
                let t = null == e ? void 0 : e.map(e => ({
                    address: i.Ul,
                    abi: a,
                    functionName: "getBuyPrice",
                    args: [e, 1 n]
                }));
                return (0, r.Dm)({
                    contracts: t,
                    enabled: !!t && t.length > 0
                })
            }

            function l(e, t) {
                return (0, r.do)({
                    address: i.Ul,
                    abi: a,
                    functionName: "ticketsBalance",
                    args: [e, t],
                    enabled: !!e && !!t
                })
            }
        },
        75978: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return c
                },
                R: function() {
                    return p
                }
            });
            var a = n(64286),
                i = n(12965),
                r = n(1028),
                u = n(43970),
                s = n(50886),
                o = n(78439);
            let p = (0, a.Ue)((0, i.n)((e, t) => ({
                    currentMessageList: [],
                    unreadFetched: !1,
                    cachedChannels: {},
                    setCurrentChatGroup: async t => {
                        if (t) {
                            let n = await (0, o.MC)(t),
                                a = u.Og.getState().token,
                                i = !!a && await (0, r.oV)(t);
                            e(e => {
                                let t = e.currentChatGroup;
                                e.currentChatGroup = n, e.currentChatGroup.canChat = i, n && s.d.getState().push({
                                    type: s.P.userDetail,
                                    data: n.id
                                }), (null == t ? void 0 : t.id) !== (null == n ? void 0 : n.id) && (e.currentMessageList = [])
                            }), window.history.replaceState("", "", "/groups/".concat(t))
                        } else e(e => {
                            e.currentChatGroup = void 0, e.currentMessageList = []
                        })
                    },
                    addMessage: t => {
                        e(e => {
                            e.currentMessageList.push(t)
                        })
                    },
                    reloadCurrentChatGroup: async () => {
                        let n = u.Og.getState().me,
                            a = t().currentChatGroup;
                        if (a) {
                            let t = await (0, o.MC)(a.id),
                                i = !!n && await (0, r.oV)(a.id);
                            e(e => {
                                e.currentChatGroup && e.currentChatGroup.id === t.id && (e.currentChatGroup = t, e.currentChatGroup.canChat = i)
                            })
                        }
                    },
                    setUnreadFetched: t => {
                        e(e => {
                            e.unreadFetched = t
                        })
                    },
                    addCachedChannel: (t, n) => {
                        e(e => {
                            e.cachedChannels[n] = t
                        })
                    },
                    setStreamConnected: t => {
                        e(e => {
                            e.streamConnected = t
                        })
                    }
                }))),
                c = (0, a.Ue)((0, i.n)(e => ({
                    updateSv: t => {
                        e(e => {
                            e.sv = "".concat(Math.random()), e.messageId = t
                        })
                    }
                })))
        },
        43970: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fi: function() {
                    return o
                },
                Og: function() {
                    return p
                },
                ST: function() {
                    return i
                }
            });
            var a, i, r = n(64286),
                u = n(12965);
            let s = window.localStorage,
                o = ["future", "spot", "post", "global", "chat", "search", "airdrop", "ranking", "profile"];
            (a = i || (i = {})).FUTURE = "future", a.SPOT = "spot", a.POST = "post", a.GLOBAL = "global", a.CHAT = "chat", a.SEARCH = "search", a.AIRDROP = "airdrop", a.RANKING = "ranking", a.PROFILE = "profile";
            let p = (0, r.Ue)((0, u.n)((e, t) => ({
                token: null == s ? void 0 : s.getItem("app.token"),
                meAddress: (null == s ? void 0 : s.getItem("app.userAddress")) || void 0,
                showNavBar: !0,
                showSidebar: !0,
                setToken: t => e(e => {
                    localStorage.setItem("app.token", t || ""), e.token = t, e.me = void 0
                }),
                setMeAddress: t => e(e => {
                    e.meAddress !== t && (localStorage.setItem("app.userAddress", t || ""), localStorage.removeItem("app.token"), e.token = null, e.me = void 0, e.meAddress = t)
                }),
                isNeedAuth: () => {
                    if (!t().meAddress) return !1;
                    let e = t().token,
                        n = t().me;
                    return !e || !n || !n.inviter || !n.group
                },
                setMe: t => e(e => {
                    e.me = t
                }),
                setShowNavBar: t => e(e => {
                    e.showNavBar = t
                }),
                setSelectedNav: t => e(e => {
                    e.selectedNav = t, "home" === t && window.history.replaceState("", "", "/")
                }),
                setShowSidebar: t => {
                    e(e => {
                        e.showSidebar = t
                    })
                }
            })))
        },
        50886: function(e, t, n) {
            "use strict";
            n.d(t, {
                P: function() {
                    return i
                },
                d: function() {
                    return o
                }
            });
            var a, i, r = n(64286),
                u = n(12965),
                s = n(75978);
            (a = i || (i = {}))[a.userDetail = 0] = "userDetail", a[a.postDetail = 1] = "postDetail";
            let o = (0, r.Ue)((0, u.n)(e => ({
                views: [],
                push: t => {
                    e(e => {
                        let n = e.views.length > 0 ? e.views[e.views.length - 1] : void 0;
                        n && n.type === t.type && n.data === t.data || e.views.push(t)
                    })
                },
                pop: () => {
                    e(e => {
                        e.views.pop();
                        let t = e.views.length > 0 ? e.views[e.views.length - 1] : void 0;
                        t && t.type === i.userDetail && s.R.getState().setCurrentChatGroup(t.data)
                    })
                },
                empty: () => {
                    e(e => {
                        e.views = []
                    })
                }
            })))
        },
        26479: function(e, t, n) {
            "use strict";

            function a(e) {
                return e.shortMessage || e.message
            }
            n.d(t, {
                j: function() {
                    return a
                }
            })
        },
        90935: function(e, t, n) {
            "use strict";
            n.d(t, {
                Pt: function() {
                    return d
                },
                e_: function() {
                    return o
                },
                ev: function() {
                    return c
                },
                pe: function() {
                    return s
                },
                pu: function() {
                    return y
                },
                tx: function() {
                    return m
                },
                uf: function() {
                    return p
                },
                yQ: function() {
                    return l
                }
            });
            var a = n(42815),
                i = n(13817),
                r = n(24869),
                u = n(11933);

            function s(e) {
                return i.AES.decrypt(e, "e201dff31e4387709535ec6cee56697e").toString(i.enc.Utf8)
            }

            function o(e) {
                let t = e.split("."),
                    n = t.pop();
                return t.join(".").length > 24 ? "".concat(t.join(".").substring(0, 24), "...") : "".concat(t.join("."), ".").concat(n)
            }

            function p(e) {
                return (0, a.Z)(e).toFormat({
                    prefix: "",
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: " ",
                    fractionGroupSize: 0,
                    suffix: ""
                })
            }

            function c(e, t, n) {
                let a = "0x".concat(n.replaceAll("-", ""));
                return (0, u._)(["bytes32", "uint16", "bytes16"], [e, 0, a])
            }

            function d(e) {
                let t = e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
                return t && 11 === t[2].length ? t[2] : ""
            }

            function y(e) {
                if (e.includes("/status/")) {
                    let t = new RegExp(/\/status\/\d+/g),
                        n = e.match(t);
                    if (n) return n[0].replace("/status/", "")
                }
                return ""
            }

            function l(e) {
                if (!e) return e;
                let t = e.replaceAll(/\r\n/g, "<br/>");
                return (t = t.replaceAll(/\n/g, "<br/>")).replaceAll(/\r/g, "<br/>")
            }

            function m(e) {
                return (0, r.sanitize)(e)
            }
        }
    }
]);