(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        77695: function() {},
        75477: function() {},
        78727: function(e, s, t) {
            Promise.resolve().then(t.t.bind(t, 99714, 23)), Promise.resolve().then(t.bind(t, 23089)), Promise.resolve().then(t.t.bind(t, 12748, 23)), Promise.resolve().then(t.t.bind(t, 61429, 23)), Promise.resolve().then(t.t.bind(t, 26576, 23))
        },
        23089: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                Providers: function() {
                    return eo
                }
            });
            var n = t(64618),
                a = (t(34933), t(57922), t(64030)),
                r = t(73051),
                l = t(38926),
                i = t(59343),
                c = t(11287),
                o = t(94213),
                d = t(79150),
                h = t(52588),
                m = t(58477),
                x = t(41363),
                u = t(53109),
                g = t(2183),
                f = t(6191),
                p = t(48865),
                j = t(69469),
                b = t(27024),
                w = t(36915),
                v = t(18424);
            let N = async e => {
                    let s = "/auth/nonce?address=".concat(e);
                    return await v.n.get(s)
                },
                y = async e => await v.n.post("/auth/sign_in", e);
            var k = t(43970),
                C = t(63307),
                B = t(98684);

            function O() {
                let {
                    address: e
                } = (0, l.mA)(), s = (0, l.xx)(), {
                    signMessageAsync: t
                } = (0, l.QW)(), a = (0, k.Og)(e => e.setToken), r = async () => {
                    if (!e) return;
                    let n = await N(e),
                        r = new C.SiweMessage({
                            domain: window.location.host,
                            address: e,
                            statement: "Sign in with Ethereum to the app.",
                            uri: window.location.origin,
                            version: "1",
                            chainId: s,
                            nonce: n
                        }),
                        l = await t({
                            message: r.prepareMessage()
                        }),
                        i = await y({
                            message: r.prepareMessage(),
                            signature: l
                        });
                    a(i)
                };
                return (0, n.jsxs)("div", {
                    className: "flex justify-center flex-col",
                    children: [(0, n.jsx)("h3", {
                        className: "font-bold text-lg text-center my-4",
                        children: "Please Sign In"
                    }), (0, n.jsx)(B.zx, {
                        className: "my-2 mx-4 md:mx-20",
                        size: "lg",
                        onClick: r,
                        children: "Sign In"
                    })]
                })
            }
            var S = t(26920),
                z = t(1028),
                M = t(34738);

            function P() {
                let [e, s] = (0, b.useState)(!1), t = (0, k.Og)(e => e.setMe), [a, r] = (0, b.useState)("");
                (0, M.Yz)(async () => {
                    try {
                        let e = await (0, z.i$)();
                        e.twitterId && t(e)
                    } catch (e) {
                        console.log(e)
                    }
                }, e ? 2e3 : null);
                let l = async () => {
                    r("");
                    let e = await (0, z.Xo)();
                    r(e), window.open(e, "newwindow", "height=800, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no"), s(!0)
                };
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, n.jsx)("h3", {
                        className: "font-bold text-lg text-center my-4",
                        children: "Bind Twitter"
                    }), (0, n.jsx)(B.zx, {
                        className: "my-2 mx-4 md:mx-20",
                        size: "lg",
                        onClick: l,
                        children: "Bind"
                    }), e && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center gap-2 justify-center mt-2 text-gray-500",
                            children: [(0, n.jsx)("h4", {
                                children: "Checking bind status..."
                            }), (0, n.jsx)(S.Z, {
                                className: "w-4 animate-spin"
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "text-gray-700 text-center mt-4",
                            children: ["Have trouble?", " ", (0, n.jsx)("a", {
                                href: a,
                                className: "text-blue-400 underline",
                                children: "Click here"
                            })]
                        })]
                    })]
                })
            }

            function I() {
                let [e, s] = (0, b.useState)(""), t = (0, k.Og)(e => e.setMe), a = async () => {
                    try {
                        await (0, z.pn)(e);
                        let s = await (0, z.i$)();
                        t(s)
                    } catch (e) {}
                };
                return (0, n.jsxs)("div", {
                    className: "flex flex-col justify-center",
                    children: [(0, n.jsx)("h3", {
                        className: "font-bold text-lg text-center my-2",
                        children: "Enter Invitation Code "
                    }), (0, n.jsx)("input", {
                        className: "p-2 border border-gray-200 border-solid rounded mx-4 md:mx-20 my-4",
                        value: e,
                        onChange: e => s(e.target.value),
                        placeholder: "Invitation Code"
                    }), (0, n.jsx)(B.zx, {
                        className: "my-2 mx-4 md:mx-20",
                        size: "lg",
                        onClick: a,
                        children: "Submit"
                    })]
                })
            }
            var Z = t(8518),
                A = t(26479),
                _ = t(49070);

            function F() {
                let [e, s] = (0, b.useState)(!1), t = (0, k.Og)(e => e.setMe), a = (0, k.Og)(e => e.me), [i, c] = (0, b.useState)(!1), {
                    writeAsync: o
                } = (0, _.lt)(), {
                    chain: d
                } = (0, l.LN)();
                (0, M.Yz)(async () => {
                    try {
                        let e = await (0, z.i$)();
                        e.group && t(e)
                    } catch (e) {
                        console.log(e)
                    }
                }, e ? 2e3 : null);
                let h = async () => {
                    try {
                        c(!0);
                        let {
                            hash: e
                        } = await o({
                            args: [!0, null == a ? void 0 : a.subjectId]
                        }), t = await (0, r.Mn)({
                            hash: e
                        });
                        await (0, z.Us)(t.transactionHash), s(!0)
                    } catch (e) {
                        Z.Am.error((0, A.j)(e))
                    } finally {
                        c(!1)
                    }
                };
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, n.jsx)("h3", {
                        className: "font-bold text-lg text-center my-2",
                        children: "Buy Your Ticket"
                    }), (0, n.jsxs)("div", {
                        className: "text-center",
                        children: ["For the first time using opBNB chain, please go to the", (0, n.jsx)("br", {}), (0, n.jsx)("a", {
                            href: "https://opbnb-bridge.bnbchain.org/deposit",
                            className: " underline text-blue-500",
                            target: "_blank",
                            children: "official cross-chain bridge"
                        })]
                    }), (0, n.jsx)(B.fl, {
                        className: "my-2 mx-4 md:mx-20",
                        size: "lg",
                        onClick: h,
                        disabled: !a || !d || (null == d ? void 0 : d.unsupported) || i,
                        loading: i,
                        children: "Buy"
                    }), e && (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 justify-center mt-2 text-gray-500",
                        children: [(0, n.jsx)("h4", {
                            children: "Checking buy result..."
                        }), (0, n.jsx)(S.Z, {
                            className: "w-4 animate-spin"
                        })]
                    })]
                })
            }
            var E = t(15454),
                W = t(29069);

            function Y() {
                let [e, s] = (0, b.useState)(!1), t = (0, k.Og)(e => e.setMe), a = (0, k.Og)(e => e.me), [r, i] = (0, b.useState)(!1), {
                    chain: c
                } = (0, l.LN)();
                (0, M.Yz)(async () => {
                    try {
                        let e = await (0, z.i$)();
                        e.group && t(e)
                    } catch (e) {
                        console.log(e)
                    }
                }, e ? 2e3 : null);
                let o = async () => {
                    try {
                        i(!0), await (0, E.wE)(), s(!0)
                    } catch (e) {} finally {
                        i(!1)
                    }
                };
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, n.jsx)("h3", {
                        className: "font-bold text-lg text-center my-2",
                        children: "Congratulations"
                    }), (0, n.jsxs)("div", {
                        className: "text-sm text-center text-gray-500",
                        children: ["You are very popular on @Friend3AI. Lots of users have been buying and selling your futures.", (0, n.jsx)("br", {}), "You can claim all the trading fees for your futures in your profile now, worth ", null == a ? void 0 : a.canClaimFeesForFuture, " ", W.Q6, "."]
                    }), (0, n.jsx)(B.fl, {
                        className: "my-2 mx-4 md:mx-20",
                        size: "lg",
                        onClick: o,
                        disabled: !a || !c || (null == c ? void 0 : c.unsupported) || r,
                        loading: r,
                        children: "Got it"
                    }), e && (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 justify-center mt-2 text-gray-500",
                        children: [(0, n.jsx)("h4", {
                            children: "Checking claim result..."
                        }), (0, n.jsx)(S.Z, {
                            className: "w-4 animate-spin"
                        })]
                    })]
                })
            }
            let $ = j.ZP.create(() => {
                let e = (0, j.dd)(),
                    [s, t] = (0, b.useState)(!1),
                    a = (0, k.Og)(e => e.token),
                    r = (0, k.Og)(e => e.me),
                    l = (0, k.Og)(e => e.setMe);
                return (0, b.useEffect)(() => {
                    !async function() {
                        if (a && !r) try {
                            t(!0);
                            let e = await (0, z.i$)();
                            l(e)
                        } catch (e) {
                            console.log(e)
                        } finally {
                            t(!1)
                        }
                    }()
                }, [a, r]), (0, n.jsx)(w.V, {
                    open: e.visible,
                    onClose: () => {},
                    className: "relative z-40",
                    children: (0, n.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, n.jsxs)("div", {
                            className: "bg-white rounded-2xl px-10 pb-10 pt-4 w-[320px] md:w-[500px] mx-4",
                            children: [(0, n.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, n.jsx)("img", {
                                    src: "/assets/images/logo.png",
                                    className: "w-24 h-24"
                                })
                            }), s ? (0, n.jsx)("div", {
                                className: "flex justify-center",
                                children: (0, n.jsx)(S.Z, {
                                    className: "w-5 animate-spin"
                                })
                            }) : r ? r.twitterId ? r.inviter ? r.group ? (0, n.jsx)(n.Fragment, {}) : r.future ? (0, n.jsx)(Y, {}) : (0, n.jsx)(F, {}) : (0, n.jsx)(I, {}) : (0, n.jsx)(P, {}) : (0, n.jsx)(O, {})]
                        })
                    })
                })
            });
            var L = t(75978),
                U = t(96963),
                q = t(9396),
                G = t(77612);
            let H = async e => {
                let s = "/spaceid/get_name?address=".concat(e);
                return await v.n.get(s)
            };
            var Q = t(45834),
                T = t(90935),
                R = t(55386);

            function V() {
                let e = (0, k.Og)(e => e.me),
                    {
                        address: s
                    } = (0, l.mA)(),
                    {
                        data: t
                    } = (0, Q.a)({
                        queryKey: ["spaceIdName", s],
                        queryFn: () => H(s),
                        enabled: !!s
                    });
                return (0, n.jsx)(o.NL.Custom, {
                    children: s => {
                        let {
                            account: a,
                            chain: r,
                            openAccountModal: l,
                            openChainModal: i,
                            openConnectModal: c,
                            mounted: o
                        } = s, d = o && a && r;
                        return (0, n.jsx)("div", { ...!o && {
                                "aria-hidden": !0,
                                style: {
                                    opacity: 0,
                                    pointerEvents: "none",
                                    userSelect: "none"
                                }
                            },
                            children: d ? r.unsupported ? (0, n.jsxs)("div", {
                                onClick: i,
                                className: "flex items-center gap-2 px-2.5 py-2 font-bold bg-red-500 text-white rounded-lg border border-red-500 shadow hover:bg-red-500/90 cursor-pointer",
                                children: [(0, n.jsx)("span", {
                                    children: "Wrong network"
                                }), (0, n.jsx)(R.Z, {
                                    className: "font-bold -mx-1",
                                    strokeWidth: 3
                                })]
                            }) : (0, n.jsxs)("div", {
                                className: "flex items-center gap-2 bg-white shadow border py-1.5 px-2.5 rounded-lg",
                                onClick: l,
                                children: [(0, n.jsx)("img", {
                                    src: (null == e ? void 0 : e.avatar) || W.tU,
                                    className: "rounded-full w-7 h-7 object-cover"
                                }), (0, n.jsx)("span", {
                                    className: "font-bold align-bottom pt-0.5 hidden md:block",
                                    children: t ? (0, T.e_)(t) : a.displayName
                                }), (0, n.jsx)(R.Z, {
                                    className: "font-bold -mx-1",
                                    strokeWidth: 3
                                })]
                            }) : (0, n.jsx)("div", {
                                onClick: c,
                                className: "px-2.5 py-2 font-bold bg-primary text-white rounded-lg border border-primary shadow hover:bg-primary/90 cursor-pointer",
                                children: (0, n.jsx)("span", {
                                    children: "Connect Wallet"
                                })
                            })
                        })
                    }
                })
            }
            var X = t(33450);

            function D() {
                let [e, s] = (0, b.useState)("opBNB");
                return (0, n.jsx)("div", {
                    className: "relative z-50",
                    children: (0, n.jsxs)(X.v, {
                        children: [(0, n.jsxs)(X.v.Button, {
                            className: "bg-white border shadow rounded-lg px-2 py-2 flex gap-2 items-center",
                            children: [(0, n.jsx)("img", {
                                src: "/assets/images/bnb.png",
                                className: "w-5 h-5 hidden md:block"
                            }), (0, n.jsx)("span", {
                                className: "font-bold",
                                children: e
                            }), (0, n.jsx)(R.Z, {
                                className: "font-bold -mx-1",
                                strokeWidth: 3
                            })]
                        }), (0, n.jsxs)(X.v.Items, {
                            className: "absolute border overflow-hidden shadow rounded-lg mt-1",
                            children: [(0, n.jsx)(X.v.Item, {
                                children: (0, n.jsxs)("a", {
                                    href: "https://opbnb.friend3.group/",
                                    className: "cursor-pointer bg-white px-4 py-2 w-40 flex items-center gap-2 hover:bg-gray-100",
                                    onClick: () => s("opBNB"),
                                    children: [(0, n.jsx)("img", {
                                        src: "/assets/images/bnb.png",
                                        className: "w-5 h-5"
                                    }), (0, n.jsx)("span", {
                                        className: "font-bold",
                                        children: "opBNB"
                                    })]
                                })
                            }), (0, n.jsx)(X.v.Item, {
                                children: (0, n.jsxs)("a", {
                                    href: "https://bnb.friend3.group/",
                                    className: "cursor-pointer bg-white px-4 py-2 w-40 flex items-center gap-2 hover:bg-gray-100",
                                    onClick: () => s("BNB"),
                                    children: [(0, n.jsx)("img", {
                                        src: "/assets/images/bnb.png",
                                        className: "w-5 h-5"
                                    }), (0, n.jsx)("span", {
                                        className: "font-bold",
                                        children: "BNB Chain"
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }

            function K() {
                let {
                    address: e
                } = (0, l.mA)(), s = (0, k.Og)(e => e.setMeAddress), t = (0, L.R)(e => e.setCurrentChatGroup), a = (0, L.R)(e => e.currentChatGroup), r = (0, k.Og)(e => e.setShowSidebar), i = (0, k.Og)(e => e.showSidebar), c = (0, k.Og)(e => e.showNavBar), o = (0, k.Og)(e => e.setShowNavBar), d = (0, G.O_)();
                return (0, b.useEffect)(() => {
                    s(e), t("")
                }, [e]), (0, n.jsx)("div", {
                    children: d && (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: "fixed top-3 right-3 pr-0.5 md:pr-0 md:right-12 z-50",
                            children: (0, n.jsxs)("div", {
                                className: "flex gap-2 items-center",
                                children: [i && (0, n.jsx)("div", {
                                    className: "p-3 rounded-full border  shadow-md bg-white text-gray-500 md:hidden",
                                    onClick: () => o(!c),
                                    children: (0, n.jsx)(U.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), a && !i && (0, n.jsx)("div", {
                                    className: "p-3 rounded-full bg-white shadow-lg md:hidden",
                                    onClick: () => r(!0),
                                    children: (0, n.jsx)(q.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), (0, n.jsx)("a", {
                                    href: "https://opbnb-bridge.bnbchain.org/deposit",
                                    className: "text-white bg-[#F2B71A] p-2 px-3 rounded-lg shadow hover:bg-[#F2B71A]/80",
                                    target: "_blank",
                                    children: "Bridge"
                                }), (0, n.jsx)(D, {}), (0, n.jsx)(V, {})]
                            })
                        }), (0, n.jsx)(J, {})]
                    })
                })
            }

            function J() {
                let e = (0, k.Og)(e => e.isNeedAuth());
                return (0, b.useEffect)(() => {
                    e ? j.ZP.show("AuthModal") : j.ZP.remove("AuthModal")
                }, [e]), (0, n.jsx)(n.Fragment, {})
            }
            j.ZP.register("AuthModal", $);
            var ee = t(8121),
                es = t(87040);
            t(97969), t(51047), t(34379), t(20982);
            let et = [];
            et = [a.V];
            let {
                chains: en,
                publicClient: ea
            } = (0, r.QB)(et, [(0, i.I)()]), er = "231101a0dff8fbf08c50bbf4dd906bf7", el = (0, c.a3)([{
                groupName: "Suggested",
                wallets: [(0, d.U)({
                    chains: en
                }), (0, h.c)({
                    projectId: er,
                    chains: en
                }), (0, m.P)({
                    projectId: er,
                    chains: en
                }), (0, x.P)({
                    projectId: er,
                    chains: en
                }), (0, u.M)({
                    projectId: er,
                    chains: en
                }), (0, g.X)({
                    projectId: er,
                    chains: en
                }), (0, f.u)({
                    projectId: er,
                    chains: en
                }), (0, p.D)({
                    projectId: er,
                    chains: en
                })]
            }]), ei = (0, l._g)({
                autoConnect: !0,
                connectors: el,
                publicClient: ea
            }), ec = new ee.S({
                defaultOptions: {
                    queries: {
                        retry: 0
                    }
                }
            });

            function eo(e) {
                let {
                    children: s
                } = e, t = (0, k.Og)(e => e.me);
                return (0, n.jsx)(l.eM, {
                    config: ei,
                    children: (0, n.jsx)(es.aH, {
                        client: ec,
                        children: (0, n.jsx)(j.ZP.Provider, {
                            children: (0, n.jsxs)(o.pj, {
                                chains: en,
                                locale: "en",
                                avatar: () => (0, n.jsx)("img", {
                                    src: (null == t ? void 0 : t.avatar) || W.tU,
                                    className: "rounded-full w-16 h-16 object-cover"
                                }),
                                children: [(0, n.jsx)(K, {}), s, (0, n.jsx)(Z.Ix, {})]
                            })
                        })
                    })
                })
            }
        },
        12748: function() {}
    },
    function(e) {
        e.O(0, [5469, 3382, 7894, 2738, 4089, 87, 1744], function() {
            return e(e.s = 78727)
        }), _N_E = e.O()
    }
]);