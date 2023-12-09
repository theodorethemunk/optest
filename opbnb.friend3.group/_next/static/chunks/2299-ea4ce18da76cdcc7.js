"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2299], {
        44643: function(e, t, s) {
            s.d(t, {
                Lt: function() {
                    return c
                },
                UT: function() {
                    return d
                },
                Xm: function() {
                    return o
                },
                _E: function() {
                    return u
                },
                cF: function() {
                    return n
                },
                jc: function() {
                    return r
                },
                v_: function() {
                    return i
                },
                yY: function() {
                    return l
                }
            });
            var a = s(18424);
            let n = async () => {
                    let e = await a.n.get("/recently_trade");
                    return e
                },
                r = async () => {
                    let e = await a.n.get("/recently_active");
                    return e
                },
                l = async e => {
                    let t = "/tx_sync_status?hash=".concat(e);
                    return await a.n.get(t)
                },
                i = async e => {
                    let t = "/donation_tx_sync_status?hash=".concat(e);
                    return await a.n.get(t)
                },
                d = async () => {
                    let e = await a.n.get("/ranking_da");
                    return e
                },
                c = async () => {
                    let e = await a.n.get("/ranking_dr");
                    return e
                },
                o = async e => {
                    let t = await a.n.get("/recommend_user?s=".concat(e));
                    return t
                },
                u = async e => {
                    let t = await a.n.get("/search?keyword=".concat(e));
                    return t
                }
        },
        41835: function(e, t, s) {
            var a = s(64618),
                n = s(69469),
                r = s(36915),
                l = s(52960),
                i = s(26920),
                d = s(34738),
                c = s(44643),
                o = s(27024),
                u = s(75978),
                m = s(49070),
                x = s(73051),
                h = s(1028),
                p = s(8518),
                j = s(26479),
                v = s(98684),
                y = s(39617),
                g = s(68216),
                f = s(29069);
            let b = n.ZP.create(e => {
                let {
                    refresh: t
                } = e, s = (0, n.dd)(), [b, N] = (0, o.useState)(!1), w = (0, u.R)(e => e.currentChatGroup), [k, C] = (0, o.useState)("1"), [P, T] = (0, o.useState)(!1), [O, S] = (0, o.useState)(""), F = (0, u.R)(e => e.reloadCurrentChatGroup), {
                    data: Z
                } = (0, m.j4)(null == w ? void 0 : w.subjectId, BigInt(k)), {
                    writeAsync: A
                } = (0, m.O)(), I = async () => {
                    try {
                        T(!0);
                        let {
                            hash: e
                        } = await A({
                            args: [null == w ? void 0 : w.subjectId, BigInt(k)],
                            value: Z
                        }), s = await (0, x.Mn)({
                            hash: e
                        });
                        t && t(), await (0, h.EB)(s.transactionHash), S(s.transactionHash), N(!0)
                    } catch (e) {
                        p.Am.error((0, j.j)(e))
                    } finally {
                        T(!1)
                    }
                };
                return (0, d.Yz)(async () => {
                    try {
                        let e = await (0, c.yY)(O);
                        e.status && (F(), S(""), N(!1), s.remove())
                    } catch (e) {
                        console.log(e)
                    }
                }, b ? 2e3 : null), (0, a.jsx)(r.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, a.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[400px]",
                            children: [(0, a.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Buy tickets"
                            }), (0, a.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, a.jsx)(l.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, a.jsx)(y.oc, {
                                mask: Number,
                                radix: ".",
                                min: 1,
                                scale: 0,
                                value: k,
                                className: "border p-2 rounded-lg w-full",
                                placeholder: "0",
                                onAccept: e => C(e)
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-4 my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1 text-center py-1 border text-lg rounded-lg cursor-pointer hover:bg-gray-50",
                                    onClick: () => {
                                        2 > BigInt(k) || C((BigInt(k) - 1 n).toString())
                                    },
                                    children: "-"
                                }), (0, a.jsx)("div", {
                                    className: "flex-1 text-center py-1 border text-lg rounded-lg cursor-pointer hover:bg-gray-50",
                                    onClick: () => {
                                        C((BigInt(k) + 1 n).toString())
                                    },
                                    children: "+"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "text-sm text-gray-500 my-4 text-center",
                                children: [(0, a.jsx)("span", {
                                    children: "Buy"
                                }), (0, a.jsx)("span", {
                                    className: "font-bold text-black mx-1",
                                    children: k
                                }), (0, a.jsxs)("span", {
                                    children: ["ticket", BigInt(k) > 1 ? "s" : "", " for"]
                                }), (0, a.jsx)("span", {
                                    className: "font-bold text-black mx-1",
                                    children: Z ? (0, g.d)(Z) : ""
                                }), (0, a.jsx)("span", {
                                    children: f.Q6
                                })]
                            }), (0, a.jsx)(v.fl, {
                                onClick: I,
                                className: "font-bold px-10 rounded-full w-full py-6",
                                disabled: 1 > BigInt(k),
                                loading: P,
                                variant: "secondary",
                                children: "Buy"
                            }), b && (0, a.jsxs)("div", {
                                className: "mt-4 text-sm text-gray-500 flex items-center gap-1",
                                children: [(0, a.jsx)(i.Z, {
                                    className: "w-3 h-3 animate-spin"
                                }), (0, a.jsx)("span", {
                                    children: "Syncing trade data..."
                                })]
                            })]
                        })
                    })
                })
            });
            t.Z = b
        },
        56335: function(e, t, s) {
            var a = s(64618),
                n = s(69469),
                r = s(36915),
                l = s(52960),
                i = s(26920),
                d = s(34738),
                c = s(44643),
                o = s(27024),
                u = s(75978),
                m = s(49070),
                x = s(73051),
                h = s(1028),
                p = s(8518),
                j = s(26479),
                v = s(98684),
                y = s(39617),
                g = s(68216),
                f = s(29069),
                b = s(43970);
            let N = n.ZP.create(e => {
                let {
                    refresh: t
                } = e, s = (0, n.dd)(), [N, w] = (0, o.useState)(!1), k = (0, u.R)(e => e.currentChatGroup), [C, P] = (0, o.useState)("1"), [T, O] = (0, o.useState)(!1), [S, F] = (0, o.useState)(""), Z = (0, b.Og)(e => e.me), A = (0, u.R)(e => e.reloadCurrentChatGroup), {
                    data: I
                } = (0, m.Qs)(null == k ? void 0 : k.subjectId, BigInt(C)), {
                    writeAsync: R
                } = (0, m.le)(), {
                    data: M
                } = (0, m.jP)(null == k ? void 0 : k.subjectId, null == Z ? void 0 : Z.address), z = async () => {
                    try {
                        O(!0);
                        let {
                            hash: e
                        } = await R({
                            args: [null == k ? void 0 : k.subjectId, BigInt(C)]
                        }), s = await (0, x.Mn)({
                            hash: e
                        });
                        t(), await (0, h.EB)(s.transactionHash), F(s.transactionHash), w(!0)
                    } catch (e) {
                        p.Am.error((0, j.j)(e))
                    } finally {
                        O(!1)
                    }
                };
                return (0, d.Yz)(async () => {
                    try {
                        let e = await (0, c.yY)(S);
                        e.status && (A(), F(""), w(!1), s.remove())
                    } catch (e) {
                        console.log(e)
                    }
                }, N ? 2e3 : null), (0, a.jsx)(r.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, a.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[400px]",
                            children: [(0, a.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Sell tickets"
                            }), (0, a.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, a.jsx)(l.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, a.jsx)(y.oc, {
                                mask: Number,
                                radix: ".",
                                min: 1,
                                max: Number(M) || 1,
                                scale: 0,
                                value: C,
                                className: "border p-2 rounded-lg w-full",
                                placeholder: "0",
                                onAccept: e => P(e)
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-4 my-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-1 text-center py-1 border text-lg rounded-lg cursor-pointer hover:bg-gray-50",
                                    onClick: () => {
                                        2 > BigInt(C) || P((BigInt(C) - 1 n).toString())
                                    },
                                    children: "-"
                                }), (0, a.jsx)("div", {
                                    className: "flex-1 text-center py-1 border text-lg rounded-lg cursor-pointer hover:bg-gray-50",
                                    onClick: () => {
                                        BigInt(C) >= M || P((BigInt(C) + 1 n).toString())
                                    },
                                    children: "+"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "text-sm text-gray-500 my-4 text-center",
                                children: [(0, a.jsx)("span", {
                                    children: "Sell"
                                }), (0, a.jsx)("span", {
                                    className: "font-bold text-black mx-1",
                                    children: C
                                }), (0, a.jsxs)("span", {
                                    children: ["ticket", BigInt(C) > 1 ? "s" : "", " for"]
                                }), (0, a.jsx)("span", {
                                    className: "font-bold text-black mx-1",
                                    children: I ? (0, g.d)(I) : ""
                                }), (0, a.jsx)("span", {
                                    children: f.Q6
                                })]
                            }), (0, a.jsx)(v.fl, {
                                onClick: z,
                                className: "font-bold px-10 rounded-full w-full py-6",
                                disabled: 1 > BigInt(C),
                                loading: T,
                                variant: "destructive",
                                children: "Sell"
                            }), N && (0, a.jsxs)("div", {
                                className: "mt-4 text-sm text-gray-500 flex items-center gap-1",
                                children: [(0, a.jsx)(i.Z, {
                                    className: "w-3 h-3 animate-spin"
                                }), (0, a.jsx)("span", {
                                    children: "Syncing trade data..."
                                })]
                            })]
                        })
                    })
                })
            });
            t.Z = N
        },
        62876: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return s0
                }
            });
            var a, n, r, l, i, d, c, o, u, m, x, h, p, j, v = s(64618),
                y = s(27024),
                g = s(29069),
                f = s(75978),
                b = s(44748),
                N = s(44643),
                w = s(49070),
                k = s(45834),
                C = s(68216);

            function P() {
                let {
                    data: e
                } = (0, k.a)({
                    queryKey: ["recommendUser", "search"],
                    queryFn: () => (0, N.Xm)("search")
                }), t = (0, f.R)(e => e.setCurrentChatGroup), s = (null == e ? void 0 : e.map(e => e.group.subjectId)) || [], {
                    data: a
                } = (0, w.sh)(s), n = e => {
                    if (!a) return "";
                    let t = a[e];
                    return "success" !== t.status ? "" : (0, C.d)(t.result)
                };
                return e && 0 !== e.length ? (0, v.jsxs)("div", {
                    className: "mt-6 px-4 border-t",
                    children: [(0, v.jsx)("div", {
                        className: "my-2 font-bold text-lg",
                        children: "Recommend"
                    }), null == e ? void 0 : e.map((e, s) => {
                        var a, r;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6",
                            onClick: () => {
                                var s;
                                return t(null === (s = e.group) || void 0 === s ? void 0 : s.id)
                            },
                            children: [(0, v.jsx)("img", {
                                src: e.avatar || g.tU,
                                className: "rounded-2xl w-12 h-12 cursor-pointer object-cover"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h3", {
                                    className: "mb-1 font-medium truncate",
                                    children: e.name
                                }), e.bio && (0, v.jsx)("p", {
                                    className: "text-sm text-gray-700 truncate",
                                    children: e.bio
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [null === (a = e.group) || void 0 === a ? void 0 : a.supply, " tickets, ", null === (r = e.group) || void 0 === r ? void 0 : r.memberAmount, " members, ", n(s), " ", g.Q6, " price"]
                                })]
                            })]
                        }, e.id)
                    })]
                }) : (0, v.jsx)(v.Fragment, {})
            }

            function T() {
                let [e, t] = (0, y.useState)(""), s = (0, f.R)(e => e.setCurrentChatGroup), [a, n] = (0, y.useState)(), r = async () => {
                    if (!e.trim()) {
                        n(void 0);
                        return
                    }
                    let t = await (0, N._E)(e);
                    n(t)
                };
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsx)("div", {
                        className: "text-2xl font-bold px-4 py-6",
                        children: "Search"
                    }), (0, v.jsxs)("div", {
                        className: "px-4 relative",
                        children: [(0, v.jsx)("input", {
                            className: "flex-1 border-2 rounded-full py-2 px-4 border-gray-200 outline-0 border-solid w-full",
                            value: e,
                            onChange: e => t(e.target.value),
                            placeholder: "Search"
                        }), (0, v.jsx)("div", {
                            className: "absolute right-6 top-1.5 rounded-full p-2 bg-primary text-white hover:bg-primary/80 cursor-pointer",
                            onClick: r,
                            children: (0, v.jsx)(b.Z, {
                                className: "w-4 h-4"
                            })
                        })]
                    }), a ? (0, v.jsx)("div", {
                        className: "mt-4 px-4",
                        children: a.map((e, t) => (0, v.jsxs)("div", {
                            className: "my-4 flex gap-4 cursor-pointer",
                            onClick: () => {
                                var t;
                                return s(null === (t = e.group) || void 0 === t ? void 0 : t.id)
                            },
                            children: [(0, v.jsx)("div", {
                                className: "text-center",
                                children: void 0 !== e.inviter ? (0, v.jsxs)(v.Fragment, {
                                    children: [(0, v.jsx)("img", {
                                        src: e.avatar || g.tU,
                                        className: "rounded-2xl w-12 h-12 object-cover"
                                    }), (0, v.jsx)("span", {
                                        className: "text-xs rounded bg-[#1296db] text-white px-1 py-0.5",
                                        children: "Spot"
                                    })]
                                }) : (0, v.jsxs)(v.Fragment, {
                                    children: [(0, v.jsx)("img", {
                                        src: e.twitterAvatar || g.tU,
                                        className: "rounded-2xl w-12 h-12 object-cover"
                                    }), (0, v.jsx)("span", {
                                        className: "text-xs rounded bg-[#d4237a] text-white px-1 py-0.5",
                                        children: "Futures"
                                    })]
                                })
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h5", {
                                    className: "font-medium truncate",
                                    children: e.name || e.twitterName
                                }), (0, v.jsx)("h6", {
                                    className: "text-sm text-gray-500",
                                    children: e.twitterUsername
                                })]
                            })]
                        }, t))
                    }) : (0, v.jsx)(P, {})]
                })
            }
            var O = s(1028),
                S = s(43970),
                F = s(81225),
                Z = s(63148),
                A = s(72908);

            function I(e) {
                var t, s, a, n, r;
                let {
                    group: l,
                    fetchUnread: i
                } = e, d = (0, f.R)(e => e.setCurrentChatGroup), c = (0, f.R)(e => e.unreadFetched), o = (0, f.R)(e => e.setUnreadFetched), u = (0, f.R)(e => e.currentChatGroup), m = (0, f.R)(e => e.cachedChannels)[l.id], x = (0, f.R)(e => e.addCachedChannel), h = (0, f.R)(e => e.streamConnected), [p, j] = (0, y.useState)(), b = e => {
                    l.id !== (null == u ? void 0 : u.id) && j(e.unread_count)
                };
                return (0, y.useEffect)(() => {
                    let e;
                    if (h) return async function() {
                        if (m) e = m.on("message.new", b);
                        else {
                            let t = A.A.channel("messaging", l.id);
                            e = t.on("message.new", b), await t.watch(), x(t, l.id), !c && i && (j(t.countUnread()), o(!0))
                        }
                    }(), () => {
                        var t;
                        null === (t = e) || void 0 === t || t.unsubscribe()
                    }
                }, [l, c, h]), (0, v.jsx)("div", {
                    onClick: () => {
                        d(l.id), null == m || m.markRead(), j(0)
                    },
                    className: "pl-3 pr-4 cursor-pointer hover:bg-gray-50 pt-6 pb-1 hover:border-l-primary border-l-4 border-l-white",
                    children: (0, v.jsxs)("div", {
                        className: "flex w-full justify-between",
                        children: [(0, v.jsxs)("div", {
                            className: "relative text-center",
                            children: [!!p && (0, v.jsx)("div", {
                                className: "absolute -right-1 -top-1 bg-red-600 text-white text-xs px-1 rounded-full",
                                children: p
                            }), l.user ? (0, v.jsxs)(v.Fragment, {
                                children: [(0, v.jsx)("img", {
                                    className: "rounded-2xl w-12 h-12 object-cover",
                                    src: (null === (t = l.user) || void 0 === t ? void 0 : t.avatar) || g.tU,
                                    alt: ""
                                }), (0, v.jsx)("span", {
                                    className: "text-xs rounded bg-[#1296db] text-white px-1 py-0.5",
                                    children: "Spot"
                                })]
                            }) : (0, v.jsxs)(v.Fragment, {
                                children: [(0, v.jsx)("img", {
                                    className: "rounded-2xl w-12 h-12 object-cover",
                                    src: (null === (s = l.future) || void 0 === s ? void 0 : s.twitterAvatar) || g.tU,
                                    alt: ""
                                }), (0, v.jsx)("span", {
                                    className: "text-xs rounded bg-[#d4237a] text-white px-1 py-0.5",
                                    children: "Futures"
                                })]
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "w-[calc(100%-60px)]",
                            children: [(0, v.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [(0, v.jsx)("span", {
                                    className: "font-bold truncate flex-1",
                                    children: (null === (a = l.user) || void 0 === a ? void 0 : a.name) || (null === (n = l.future) || void 0 === n ? void 0 : n.twitterName)
                                }), (0, v.jsxs)("div", {
                                    className: "flex items-center min-w-[80px] justify-end",
                                    children: [null === (r = l.recently) || void 0 === r ? void 0 : r.map((e, t) => (0, v.jsx)("img", {
                                        className: "rounded-full w-6 h-6 border-2 border-white ".concat(t > 0 ? "-ml-2" : ""),
                                        src: e || g.tU
                                    }, t)), (0, v.jsxs)("span", {
                                        className: "text-sm ml-1",
                                        children: ["+", l.memberAmount]
                                    })]
                                })]
                            }), l.groupRecentlyStreamMessage && (0, v.jsxs)("div", {
                                className: "text-sm text-gray-700 flex gap-0.5 items-center",
                                children: [(0, v.jsx)("img", {
                                    src: l.groupRecentlyStreamMessage.senderAvatar,
                                    className: "w-4 h-4 rounded-full"
                                }), (0, v.jsxs)("span", {
                                    className: "flex-1 truncate",
                                    children: [l.groupRecentlyStreamMessage.senderName, ": ", l.groupRecentlyStreamMessage.content]
                                })]
                            })]
                        })]
                    })
                })
            }

            function R() {
                let e = (0, S.Og)(e => e.me),
                    {
                        data: t,
                        fetchNextPage: s,
                        isFetchingNextPage: a,
                        hasNextPage: n
                    } = (0, F.N)({
                        queryKey: ["chatList"],
                        queryFn: e => {
                            let {
                                pageParam: t = ""
                            } = e;
                            return (0, O.Ag)(t)
                        },
                        getNextPageParam: e => e.nextSinceId,
                        enabled: !!e
                    });
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsx)("div", {
                        className: "text-2xl font-bold px-4 pt-6",
                        children: "OnlyFriends"
                    }), (0, v.jsx)("div", {
                        className: "px-4 mb-6 text-sm text-gray-500 italic",
                        children: "Powered by GreenField"
                    }), !e && (0, v.jsxs)("h4", {
                        className: "p-4 text-gray-500 flex gap-2 items-center",
                        children: [(0, v.jsx)(Z.Z, {
                            className: "w-4 h-4"
                        }), (0, v.jsx)("span", {
                            children: "Please sign in to start a chat."
                        })]
                    }), null == t ? void 0 : t.pages.map((e, t) => e.list.map((e, s) => (0, v.jsx)(I, {
                        group: e,
                        fetchUnread: 50 * t + s < 20
                    }, e.id))), (0, v.jsx)("div", {
                        className: "mt-10 flex justify-center",
                        children: (0, v.jsx)("button", {
                            className: "py-2 px-4 border rounded-md bg-gray-50 cursor-pointer text-sm hover:bg-gray-100 disabled:bg-transparent disabled:text-gray-500 disabled:border-0 disabled:cursor-default disabled:hover:bg-transparent",
                            onClick: () => s(),
                            disabled: !n || a,
                            children: a ? "Loading more..." : n ? "Load More" : "No more to load."
                        })
                    })]
                })
            }
            var M = s(84774),
                z = s(6997),
                U = s(66185),
                G = s.n(U),
                _ = s(70948),
                B = s(40813),
                q = s(8518);

            function E(e) {
                var t;
                let {
                    goBack: s
                } = e, a = (0, S.Og)(e => e.me), {
                    data: n
                } = (0, k.a)({
                    queryKey: ["invitationCodes", null == a ? void 0 : a.address],
                    queryFn: O.x6,
                    enabled: !!a
                });
                return (0, v.jsxs)("div", {
                    className: "px-4",
                    children: [(0, v.jsx)("div", {
                        className: "flex justify-end my-4",
                        children: (0, v.jsx)("a", {
                            className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer",
                            onClick: () => s(),
                            children: (0, v.jsx)(_.Z, {
                                className: "w-5 h-5"
                            })
                        })
                    }), n && (0, v.jsxs)("div", {
                        children: [null === (t = n.codes) || void 0 === t ? void 0 : t.map(e => (0, v.jsxs)("div", {
                            className: "flex my-2 justify-between items-center text-sm",
                            children: [(0, v.jsx)("h5", {
                                className: "".concat("used" === e.status ? "line-through" : "", " text-gray-700"),
                                children: e.code
                            }), (0, v.jsx)(U.CopyToClipboard, {
                                text: e.code || "",
                                children: (0, v.jsx)("a", {
                                    onClick: () => q.Am.success("Code copied to clipboard!"),
                                    className: "hover:bg-gray-200 p-2 rounded-full cursor-pointer",
                                    children: (0, v.jsx)(B.Z, {
                                        className: "w-4 h-4 "
                                    })
                                })
                            })]
                        }, e.code)), n.codeV2 && (0, v.jsxs)(v.Fragment, {
                            children: [(0, v.jsx)("div", {
                                className: "mt-10 font-bold",
                                children: "Unlimited Time Invitation Code:"
                            }), (0, v.jsxs)("div", {
                                className: "flex my-2 justify-between items-center text-sm",
                                children: [(0, v.jsx)("h5", {
                                    className: "text-gray-700",
                                    children: n.codeV2
                                }), (0, v.jsx)(U.CopyToClipboard, {
                                    text: n.codeV2,
                                    children: (0, v.jsx)("a", {
                                        onClick: () => q.Am.success("Code copied to clipboard!"),
                                        className: "hover:bg-gray-200 p-2 rounded-full cursor-pointer",
                                        children: (0, v.jsx)(B.Z, {
                                            className: "w-4 h-4 "
                                        })
                                    })
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "text-gray-500 text-sm flex items-center gap-1",
                                children: [(0, v.jsx)(Z.Z, {
                                    className: "w-3.5 h-3.5"
                                }), (0, v.jsx)("span", {
                                    children: "This invitation code can be used unlimited times."
                                })]
                            })]
                        })]
                    })]
                })
            }
            var D = s(61477),
                L = s(34738);

            function K() {
                let [e, t] = (0, y.useState)(!1), s = (0, S.Og)(e => e.setMe), a = (0, S.Og)(e => e.me);
                (0, L.Yz)(async () => {
                    try {
                        let e = await (0, O.i$)();
                        (e.twitterUsername !== (null == a ? void 0 : a.twitterUsername) || e.avatar !== (null == a ? void 0 : a.avatar) || e.name !== (null == a ? void 0 : a.name)) && (s(e), t(!1))
                    } catch (e) {
                        console.log(e)
                    }
                }, e ? 2e3 : null);
                let n = async () => {
                    let e = await (0, O.Xo)();
                    window.open(e, "newwindow", "height=800, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no"), t(!0)
                };
                return (0, v.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [(0, v.jsx)("a", {
                        className: "border py-1 px-1 text-black bg-white hover:bg-gray-100 rounded cursor-pointer text-xs font-normal",
                        onClick: n,
                        children: "Update Profile"
                    }), (0, v.jsx)(D.ZP, {
                        content: "If your Twitter avatar or nickname has been modified, you can click this button to synchronize the latest personal information.",
                        children: (0, v.jsx)(Z.Z, {
                            className: "w-3 h-3 cursor-pointer text-gray-500"
                        })
                    })]
                })
            }
            var H = s(69469),
                V = s(98684),
                Q = s(36915),
                Y = s(52960);
            let J = H.ZP.create(() => {
                let e = (0, H.dd)(),
                    t = (0, S.Og)(e => e.me),
                    s = (0, S.Og)(e => e.setMe),
                    [a, n] = (0, y.useState)((null == t ? void 0 : t.bio) || ""),
                    r = async () => {
                        try {
                            await (0, O.rl)(a);
                            let e = await (0, O.i$)();
                            s(e)
                        } catch (e) {}
                        e.remove()
                    };
                return (0, v.jsx)(Q.V, {
                    open: e.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => e.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Bio"
                            }), (0, v.jsx)("textarea", {
                                className: "w-full border rounded-lg h-24 p-2 resize-none",
                                value: a,
                                onChange: e => {
                                    e.target.value.length > 160 ? n(e.target.value.substring(0, 160)) : n(e.target.value)
                                }
                            }), (0, v.jsxs)("div", {
                                className: "text-right text-sm text-gray-500",
                                children: [(null == a ? void 0 : a.length) || 0, "/160"]
                            }), (0, v.jsx)("div", {
                                className: "mt-4 flex justify-center items-center",
                                children: (0, v.jsx)(V.zx, {
                                    onClick: r,
                                    children: "Save"
                                })
                            })]
                        })
                    })
                })
            });
            var $ = s(64273),
                W = s(32496),
                X = s(17192);

            function ee() {
                return (0, v.jsxs)("div", {
                    className: "py-10 px-4 text-sm text-gray-500",
                    children: [(0, v.jsxs)("a", {
                        className: "flex items-center mb-2 gap-2",
                        href: "https://twitter.com/Friend3AI",
                        target: "_blank",
                        children: [(0, v.jsx)("div", {
                            className: "rounded-full p-3 bg-gray-50 hover:bg-gray-100",
                            children: (0, v.jsx)(W.LCd, {
                                className: "w-4 h-4"
                            })
                        }), (0, v.jsx)("span", {
                            className: "flex-1",
                            children: "X"
                        })]
                    }), (0, v.jsxs)("a", {
                        className: "flex items-center mb-2 gap-2",
                        href: "https://t.me/friend3group",
                        target: "_blank",
                        children: [(0, v.jsx)("div", {
                            className: "rounded-full p-3 inline-block bg-gray-50 hover:bg-gray-100",
                            children: (0, v.jsx)($.Gke, {
                                className: "w-4 h-4"
                            })
                        }), (0, v.jsx)("span", {
                            className: "flex-1",
                            children: "Telegram (News)"
                        })]
                    }), (0, v.jsxs)("a", {
                        className: "flex items-center mb-2 gap-2",
                        href: "https://t.me/friend3fam",
                        target: "_blank",
                        children: [(0, v.jsx)("div", {
                            className: "rounded-full p-3 inline-block bg-gray-50 hover:bg-gray-100",
                            children: (0, v.jsx)($.Gke, {
                                className: "w-4 h-4"
                            })
                        }), (0, v.jsx)("span", {
                            className: "flex-1 hover:text-black",
                            children: "Telegram (Chat)"
                        })]
                    }), (0, v.jsxs)("a", {
                        className: "flex items-center mb-2 gap-2",
                        href: "mailto:hello@friend3.group",
                        target: "_blank",
                        children: [(0, v.jsx)("div", {
                            className: "rounded-full p-3 inline-block bg-gray-50 hover:bg-gray-100",
                            children: (0, v.jsx)(X.Z, {
                                className: "w-4 h-4"
                            })
                        }), (0, v.jsx)("span", {
                            className: "flex-1",
                            children: "Email"
                        })]
                    })]
                })
            }
            var et = s(42815),
                es = s(39617);
            let ea = H.ZP.create(() => {
                let e = (0, H.dd)(),
                    t = (0, S.Og)(e => e.me),
                    s = (0, S.Og)(e => e.setMe),
                    [a, n] = (0, y.useState)(""),
                    [r, l] = (0, y.useState)(!1),
                    i = async () => {
                        try {
                            l(!0), await (0, O.XW)(a);
                            let t = await (0, O.i$)();
                            s(t), q.Am.success("Withdrawal request submitted"), e.remove()
                        } catch (e) {} finally {
                            l(!1)
                        }
                    };
                return (0, v.jsx)(Q.V, {
                    open: e.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => e.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Withdraw"
                            }), (0, v.jsxs)("div", {
                                className: "mb-1 text-sm text-gray-500",
                                children: [(0, v.jsx)("span", {
                                    children: "Your balance:"
                                }), (0, v.jsxs)("span", {
                                    className: "ml-1 text-black",
                                    children: [null == t ? void 0 : t.balance, " ", g.Q6]
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "relative",
                                children: [(0, v.jsx)(es.oc, {
                                    mask: Number,
                                    radix: ".",
                                    min: 0,
                                    max: parseFloat(null == t ? void 0 : t.balance),
                                    scale: 10,
                                    value: a,
                                    className: "border p-2 rounded-lg w-full",
                                    placeholder: "0",
                                    onAccept: e => n(e)
                                }), (0, v.jsx)("div", {
                                    className: "absolute right-2 top-2 bg-primary cursor-pointer hover:bg-primary/80 py-1 px-2 text-white rounded-lg text-sm",
                                    onClick: () => {
                                        n(null == t ? void 0 : t.balance)
                                    },
                                    children: "Max"
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "text-gray-500 text-sm mt-2",
                                children: [(0, v.jsx)("span", {
                                    children: "Withdrawals will be made to: "
                                }), (0, v.jsx)("span", {
                                    children: null == t ? void 0 : t.address
                                })]
                            }), (0, v.jsx)("div", {
                                className: "mt-4 flex justify-center items-center",
                                children: (0, v.jsx)(V.fl, {
                                    onClick: i,
                                    loading: r,
                                    disabled: !(() => {
                                        if (!a) return !1;
                                        try {
                                            if ((0, et.Z)(a).lt(.01)) return !1;
                                            return !0
                                        } catch (e) {
                                            return !1
                                        }
                                    })(),
                                    children: "Withdraw"
                                })
                            })]
                        })
                    })
                })
            });
            var en = s(35278),
                er = s(48510),
                el = s(12665),
                ei = s(73764);

            function ed(e) {
                let {
                    goBack: t
                } = e, s = (0, S.Og)(e => e.me), [a, n] = (0, y.useState)(1), {
                    data: r
                } = (0, k.a)({
                    queryKey: ["withdrawHistory", null == s ? void 0 : s.id, a],
                    queryFn: () => (0, O.mF)(a),
                    enabled: !!s
                }), l = (0, er.h)({
                    total: Math.ceil(((null == r ? void 0 : r.total) || 0) / 20),
                    initialPage: 1
                }), i = e => {
                    "dots" !== e && (l.setPage(e), n(e))
                };
                return (0, v.jsxs)("div", {
                    className: "px-4",
                    children: [(0, v.jsx)("div", {
                        className: "flex justify-end my-4",
                        children: (0, v.jsx)("a", {
                            className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer",
                            onClick: () => t(),
                            children: (0, v.jsx)(_.Z, {
                                className: "w-5 h-5"
                            })
                        })
                    }), r && (0, v.jsx)("div", {
                        className: "mb-8",
                        children: null == r ? void 0 : r.list.map(e => (0, v.jsxs)("div", {
                            className: "my-2 pb-2 border-b border-dashed",
                            children: [(0, v.jsxs)("div", {
                                className: "flex justify-between items-center text-sm",
                                children: [(0, v.jsxs)("a", {
                                    href: "".concat(g.ZM, "/tx/").concat(e.txHash),
                                    className: "flex items-center gap-1",
                                    target: "_blank",
                                    children: [(0, v.jsxs)("span", {
                                        children: [e.amount, " ", g.Q6]
                                    }), (0, v.jsx)(en.Z, {
                                        className: "w-3 h-3"
                                    })]
                                }), "success" === e.status && (0, v.jsx)("span", {
                                    className: "text-xs uppercase bg-green-500 rounded p-1 text-white",
                                    children: e.status
                                }), "pending" === e.status && (0, v.jsx)("span", {
                                    className: "text-xs uppercase bg-gray-200 rounded p-1",
                                    children: e.status
                                }), "failed" === e.status && (0, v.jsx)("span", {
                                    className: "text-xs uppercase bg-red-500 text-white rounded p-1",
                                    children: e.status
                                })]
                            }, e.id), (0, v.jsx)("span", {
                                className: "text-xs text-gray-500",
                                children: e.createdAt && (0, el.Z)((0, ei.Z)(e.createdAt), "dd/MM hh:mm aa")
                            })]
                        }))
                    }), (0, v.jsx)("div", {
                        className: "flex flex-wrap gap-1 justify-center items-center",
                        children: l.range.map(e => (0, v.jsx)("div", {
                            className: "p-1 px-2 min-w-[30px] text-center text-sm border cursor-pointer rounded hover:bg-gray-50 ".concat(e === l.active ? "text-primary border-primary/50" : ""),
                            onClick: () => i(e),
                            children: e
                        }, e))
                    })]
                })
            }
            let ec = {
                subject: "Subject Fee",
                holder: "Holder Fee",
                referral: "Referral Fee",
                futureSubject: "",
                claimFutureSubject: " Claim Your Future Trading Fee",
                futureSubjectRealToHolder: "Future History Trading Fee to Holders",
                claimFutureSubjectReferral: "Future Trading Fee For Inviter",
                futureSubjectDistributeToHolder: "Future Trading Fee to Holders"
            };

            function eo(e) {
                let {
                    goBack: t
                } = e, s = (0, S.Og)(e => e.me), [a, n] = (0, y.useState)(1), {
                    data: r
                } = (0, k.a)({
                    queryKey: ["profitHistory", null == s ? void 0 : s.id, a],
                    queryFn: () => (0, O.qM)(a),
                    enabled: !!s
                }), l = (0, er.h)({
                    total: Math.ceil(((null == r ? void 0 : r.total) || 0) / 20),
                    initialPage: 1
                }), i = e => {
                    "dots" !== e && (l.setPage(e), n(e))
                };
                return (0, v.jsxs)("div", {
                    className: "px-4",
                    children: [(0, v.jsx)("div", {
                        className: "flex justify-end my-4",
                        children: (0, v.jsx)("a", {
                            className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer",
                            onClick: () => t(),
                            children: (0, v.jsx)(_.Z, {
                                className: "w-5 h-5"
                            })
                        })
                    }), r && (0, v.jsx)("div", {
                        className: "mb-8",
                        children: null == r ? void 0 : r.list.map(e => (0, v.jsxs)("div", {
                            className: "flex my-2 pb-2 border-b border-dashed justify-between text-sm",
                            children: [(0, v.jsxs)("div", {
                                children: [(0, v.jsxs)("div", {
                                    children: [e.amount, " ", g.Q6]
                                }), ec[e.type] && (0, v.jsx)("span", {
                                    className: "bg-gray-200 px-1 py-0.5 rounded text-gray-500 text-xs",
                                    children: ec[e.type]
                                })]
                            }), (0, v.jsx)("span", {
                                className: "text-xs text-gray-500",
                                children: e.createdAt && (0, el.Z)((0, ei.Z)(e.createdAt), "dd/MM hh:mm aa")
                            })]
                        }, e.id))
                    }), (0, v.jsx)("div", {
                        className: "flex flex-wrap gap-1 justify-center items-center",
                        children: l.range.map(e => (0, v.jsx)("div", {
                            className: "p-1 px-2 min-w-[30px] text-center text-sm border cursor-pointer rounded hover:bg-gray-50 ".concat(e === l.active ? "text-primary border-primary/50" : ""),
                            onClick: () => i(e),
                            children: e
                        }, e))
                    })]
                })
            }

            function eu(e) {
                let {
                    goBack: t
                } = e;
                return (0, v.jsxs)("div", {
                    className: "px-4",
                    children: [(0, v.jsx)("div", {
                        className: "flex justify-end my-4",
                        children: (0, v.jsx)("a", {
                            className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer",
                            onClick: () => t(),
                            children: (0, v.jsx)(_.Z, {
                                className: "w-5 h-5"
                            })
                        })
                    }), (0, v.jsx)("div", {
                        className: "my-4",
                        children: "Please switch to the BNB chain and claim your airdrops tokens."
                    })]
                })
            }

            function em() {
                let [e, t] = (0, y.useState)(""), s = (0, S.Og)(e => e.me), a = (0, f.R)(e => e.setCurrentChatGroup), {
                    data: n
                } = (0, k.a)({
                    queryKey: ["myEarned", null == s ? void 0 : s.address],
                    queryFn: () => (0, O.xs)(),
                    enabled: !!s
                });
                return s ? (0, v.jsxs)("div", {
                    children: [(0, v.jsx)("div", {
                        className: "text-2xl font-bold px-4 py-6",
                        children: "Profile"
                    }), (0, v.jsxs)("div", {
                        className: "flex gap-2 items-center px-4",
                        children: [(0, v.jsx)("div", {
                            className: "relative w-[60px] h-[60px]",
                            onClick: () => {
                                var e;
                                return a(null === (e = s.group) || void 0 === e ? void 0 : e.id)
                            },
                            children: (0, v.jsx)("img", {
                                src: s.avatar || g.tU,
                                className: "w-[60px] h-[60px] object-cover rounded-2xl cursor-pointer"
                            })
                        }), (0, v.jsxs)("div", {
                            className: "flex-1 w-0",
                            children: [(0, v.jsx)("h3", {
                                className: "font-bold text-lg cursor-pointer truncate",
                                onClick: () => {
                                    var e;
                                    return a(null === (e = s.group) || void 0 === e ? void 0 : e.id)
                                },
                                children: s.name
                            }), (0, v.jsx)("div", {
                                className: "flex gap-2",
                                children: (0, v.jsx)(K, {})
                            })]
                        })]
                    }), (0, v.jsxs)("div", {
                        className: "border p-2 bg-gray-50 rounded-lg mt-2 mx-4 flex gap-2 justify-between",
                        children: [s.bio ? (0, v.jsx)("span", {
                            className: "flex-1 break-words text-sm text-gray-700 ",
                            children: s.bio
                        }) : (0, v.jsx)("span", {
                            className: "flex-1 break-words text-sm text-gray-300 ",
                            children: "Bio"
                        }), (0, v.jsx)(M.Z, {
                            className: "w-3 h-3 mt-1 cursor-pointer hover:text-black text-gray-500",
                            onClick: () => H.ZP.show(J)
                        })]
                    }), (0, v.jsxs)("div", {
                        className: "grid grid-cols-2 gap-2 px-4 mt-4",
                        children: [(0, v.jsxs)("div", {
                            className: "border p-2 rounded-lg col-span-2 relative",
                            children: [(0, v.jsxs)("div", {
                                className: "text-gray-500 text-sm flex gap-1 items-center",
                                children: ["Available for claim", (0, v.jsx)(D.ZP, {
                                    content: "All the rewards that you can claim. You need to wait until this value reaches 0.01 ".concat(g.Q6, " before you can claim it."),
                                    children: (0, v.jsx)(Z.Z, {
                                        className: "w-3 h-3 cursor-pointer"
                                    })
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "font-bold flex items-center gap-1 mt-2 text-sm",
                                children: [(0, v.jsx)("img", {
                                    src: "/assets/images/bnb.png",
                                    className: "w-4 h-4 rounded-full"
                                }), s.balance, " ", g.Q6]
                            }), (0, v.jsx)("div", {
                                className: "absolute right-2 top-3",
                                children: (0, v.jsx)(V.zx, {
                                    className: "rounded-lg",
                                    onClick: () => H.ZP.show(ea),
                                    children: "Claim"
                                })
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "border p-2 rounded-lg",
                            children: [(0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "Portfolio value"
                            }), (0, v.jsxs)("div", {
                                className: "font-bold flex items-center gap-1 mt-2 text-sm",
                                children: [(0, v.jsx)("img", {
                                    src: "/assets/images/bnb.png",
                                    className: "w-4 h-4 rounded-full"
                                }), null == n ? void 0 : n.portfolioValue, " ", g.Q6]
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "border p-2 rounded-lg",
                            children: [(0, v.jsxs)("div", {
                                className: "text-gray-500 text-sm flex items-center gap-1",
                                children: [(0, v.jsx)("span", {
                                    children: "Total earned"
                                }), (0, v.jsx)(D.ZP, {
                                    content: "You can check the details of all the money you've earned through Earning History.",
                                    children: (0, v.jsx)(Z.Z, {
                                        className: "w-3 h-3 cursor-pointer"
                                    })
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "font-bold flex items-center gap-1 mt-2 text-sm",
                                children: [(0, v.jsx)("img", {
                                    src: "/assets/images/bnb.png",
                                    className: "w-4 h-4 rounded-full"
                                }), null == n ? void 0 : n.tradingFeesEarned, " ", g.Q6]
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "border p-2 rounded-lg",
                            children: [(0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "Donation earned"
                            }), (0, v.jsxs)("div", {
                                className: "font-bold flex items-center gap-1 mt-2 text-sm",
                                children: ["$", null == n ? void 0 : n.donationEarned]
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "border p-2 rounded-lg",
                            children: [(0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "Number of invitations"
                            }), (0, v.jsx)("div", {
                                className: "font-bold flex items-center gap-1 mt-2 text-sm",
                                children: s.invitationAmount
                            })]
                        })]
                    }), !e && (0, v.jsxs)("div", {
                        className: "mt-4",
                        children: [(0, v.jsxs)("div", {
                            className: "flex items-center py-4 border-b px-4 cursor-pointer",
                            onClick: () => t("invite"),
                            children: [(0, v.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, v.jsx)("h3", {
                                    className: "font-bold text-lg",
                                    children: "Invitation Code"
                                }), (0, v.jsx)("h4", {
                                    className: "text-sm text-gray-500",
                                    children: "Invitation Code"
                                })]
                            }), (0, v.jsx)(z.Z, {})]
                        }), (0, v.jsxs)("div", {
                            className: "flex items-center py-4 border-b px-4 cursor-pointer",
                            onClick: () => t("earnings"),
                            children: [(0, v.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, v.jsx)("h3", {
                                    className: "font-bold text-lg",
                                    children: "Earning History"
                                }), (0, v.jsx)("h4", {
                                    className: "text-sm text-gray-500",
                                    children: "Earning History"
                                })]
                            }), (0, v.jsx)(z.Z, {})]
                        }), (0, v.jsxs)("div", {
                            className: "flex items-center py-4 border-b px-4 cursor-pointer",
                            onClick: () => t("withdraw"),
                            children: [(0, v.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, v.jsx)("h3", {
                                    className: "font-bold text-lg",
                                    children: "Claim History"
                                }), (0, v.jsx)("h4", {
                                    className: "text-sm text-gray-500",
                                    children: "Claim History"
                                })]
                            }), (0, v.jsx)(z.Z, {})]
                        }), (0, v.jsxs)("div", {
                            className: "flex items-center py-4 border-b px-4 cursor-pointer",
                            onClick: () => t("airdrop"),
                            children: [(0, v.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, v.jsx)("h3", {
                                    className: "font-bold text-lg",
                                    children: "Airdrop"
                                }), (0, v.jsx)("h4", {
                                    className: "text-sm text-gray-500",
                                    children: "Airdrop"
                                })]
                            }), (0, v.jsx)(z.Z, {})]
                        })]
                    }), "invite" === e && (0, v.jsx)(E, {
                        goBack: () => t("")
                    }), "earnings" === e && (0, v.jsx)(eo, {
                        goBack: () => t("")
                    }), "withdraw" === e && (0, v.jsx)(ed, {
                        goBack: () => t("")
                    }), "airdrop" === e && (0, v.jsx)(eu, {
                        goBack: () => t("")
                    }), (0, v.jsx)(ee, {})]
                }) : (0, v.jsx)(v.Fragment, {})
            }
            var ex = s(94662),
                eh = s(40148),
                ep = s(98197),
                ej = s(35042),
                ev = s(77612);

            function ey() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["rankingDa"],
                        queryFn: N.UT
                    });
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => (0, v.jsxs)("div", {
                        className: "flex gap-2 items-center mb-6",
                        onClick: () => {
                            var s;
                            return e(null === (s = t.user.group) || void 0 === s ? void 0 : s.id)
                        },
                        children: [(0, v.jsx)("img", {
                            src: t.user.avatar || g.tU,
                            className: "rounded-2xl w-12 h-12 cursor-pointer object-cover"
                        }), (0, v.jsxs)("div", {
                            className: "flex-1 w-0",
                            children: [(0, v.jsx)("h3", {
                                className: "mb-1 font-medium truncate",
                                children: t.user.name
                            }), (0, v.jsxs)("div", {
                                className: "text-sm text-gray-500",
                                children: ["$", t.amount]
                            })]
                        })]
                    }, s))
                })
            }

            function eg() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["rankingDr"],
                        queryFn: N.Lt
                    });
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => {
                        var a, n;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6",
                            onClick: () => e(t.group.id),
                            children: [(0, v.jsx)("img", {
                                src: (null === (a = t.group.user) || void 0 === a ? void 0 : a.avatar) || g.tU,
                                className: "rounded-2xl w-12 h-12 cursor-pointer object-cover"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h3", {
                                    className: "mb-1 font-medium truncate",
                                    children: null === (n = t.group.user) || void 0 === n ? void 0 : n.name
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: ["$", t.amount]
                                })]
                            })]
                        }, s)
                    })
                })
            }

            function ef(e) {
                let {
                    c: t
                } = e, s = (0, S.Og)(e => e.me), {
                    data: a,
                    isLoading: n
                } = (0, k.a)({
                    queryKey: ["myRanking", t, null == s ? void 0 : s.id],
                    queryFn: () => (0, O.Dx)(t),
                    enabled: !!s
                });
                return !s || n ? (0, v.jsx)(v.Fragment, {}) : (0, v.jsxs)("span", {
                    className: "text-sm font-normal text-gray-500",
                    children: ["My Rank: ", (0, v.jsxs)("span", {
                        className: "font-bold text-base text-black",
                        children: ["#", a || "None"]
                    })]
                })
            }
            var eb = s(90935);
            let eN = H.ZP.create(e => {
                let {
                    data: t
                } = e, s = (0, H.dd)();
                return (0, v.jsx)(Q.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold mb-4 flex items-center gap-2",
                                children: (0, v.jsx)("span", {
                                    className: "max-w-[80px] md:max-w-[200px] truncate",
                                    children: t.user.name
                                })
                            }), (0, v.jsxs)("div", {
                                className: "text-sm text-gray-500",
                                children: [(0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["First Trading: ", (0, v.jsxs)("span", {
                                        children: [t.firstTrading, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Original Tweet: ", (0, v.jsxs)("span", {
                                        children: [t.tweetOriginal, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Tweet Replies: ", (0, v.jsxs)("span", {
                                        children: [t.tweetReply, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1 items-end",
                                    children: [(0, v.jsxs)("span", {
                                        className: "block md:hidden",
                                        children: ["Views/Likes/", (0, v.jsx)("br", {}), "Quotes/Retweets:"]
                                    }), (0, v.jsx)("span", {
                                        className: "hidden md:block",
                                        children: "Views/Likes/Quotes/Retweets:"
                                    }), (0, v.jsxs)("span", {
                                        children: [t.tweetData, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Invitation: ", (0, v.jsxs)("span", {
                                        children: [" ", t.invitation, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Group Members: ", (0, v.jsxs)("span", {
                                        children: [" ", t.groupMember, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Joined Group: ", (0, v.jsxs)("span", {
                                        children: [" ", t.joinedGroup, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Trading Volume: ", (0, v.jsxs)("span", {
                                        children: [t.trade, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Donation Amount: ", (0, v.jsxs)("span", {
                                        children: [" ", t.donation, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Donation Received: ", (0, v.jsxs)("span", {
                                        children: [" ", t.donationReceived, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Total: ", (0, v.jsxs)("span", {
                                        className: "text-lg font-bold text-black",
                                        children: [t.total, " Points"]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            });
            var ew = s(18424);
            let ek = async () => await ew.n.get("/point/total_points"),
                eC = async () => {
                    let e = await ew.n.get("/point/ranking?");
                    return e
                },
                eP = async () => await ew.n.get("/point/ranking_no"),
                eT = async () => await ew.n.get("/point/points"),
                eO = async e => await ew.n.post("/point/submit_tweet", {
                    tweetId: e
                }),
                eS = async () => await ew.n.get("/point/today_epoch_status");

            function eF() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["epRanking", "ep"],
                        queryFn: eC
                    }),
                    {
                        data: s
                    } = (0, k.a)({
                        queryKey: ["totalPoints"],
                        queryFn: ek
                    }),
                    a = e => s ? (0, et.Z)(e).div((0, et.Z)(s)).multipliedBy(45).toFixed(4) : 0;
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => (0, v.jsxs)("div", {
                        className: "flex gap-2 items-center mb-6",
                        children: [(0, v.jsx)("img", {
                            src: t.user.avatar || g.tU,
                            className: "rounded-2xl w-12 h-12 cursor-pointer object-cover",
                            onClick: () => {
                                var s;
                                return e(null === (s = t.user.group) || void 0 === s ? void 0 : s.id)
                            }
                        }), (0, v.jsxs)("div", {
                            className: "flex-1 w-0",
                            children: [(0, v.jsx)("h3", {
                                className: "mb-1 font-medium cursor-pointer truncate",
                                onClick: () => {
                                    var s;
                                    return e(null === (s = t.user.group) || void 0 === s ? void 0 : s.id)
                                },
                                children: t.user.name
                            }), (0, v.jsxs)("div", {
                                className: "text-sm flex items-center gap-1",
                                children: [(0, v.jsx)("span", {
                                    className: "font-bold",
                                    children: (0, eb.uf)(t.total)
                                }), " ", (0, v.jsxs)("span", {
                                    className: "text-gray-500",
                                    children: ["~", (0, eb.uf)(a(t.total)), "BNB"]
                                }), (0, v.jsx)(Z.Z, {
                                    className: "w-4 h-4 cursor-pointer",
                                    onClick: () => H.ZP.show(eN, {
                                        data: t
                                    })
                                })]
                            })]
                        })]
                    }, s))
                })
            }
            var eZ = s(52292);

            function eA() {
                let e = (0, S.Og)(e => e.me),
                    {
                        data: t,
                        isLoading: s
                    } = (0, k.a)({
                        queryKey: ["myEpochRanking", null == e ? void 0 : e.id],
                        queryFn: eP,
                        enabled: !!e
                    });
                return !e || s ? (0, v.jsx)(v.Fragment, {}) : (0, v.jsxs)("span", {
                    className: "text-sm font-normal text-gray-500",
                    children: ["My Rank: ", (0, v.jsxs)("span", {
                        className: "font-bold text-base text-black",
                        children: ["#", t || "None"]
                    })]
                })
            }
            let eI = ["da", "dr"];

            function eR() {
                let [e, t] = (0, y.useState)(0), s = (0, S.Og)(e => e.setSelectedNav);
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsx)("div", {
                        className: "text-2xl font-bold px-4 py-6 flex justify-between items-end",
                        children: "Ranking"
                    }), (0, v.jsxs)("div", {
                        className: "flex justify-between px-4",
                        children: [(0, v.jsx)("div", {
                            className: "ml-0.5",
                            children: 0 === e ? (0, v.jsx)(eA, {}) : (0, v.jsx)(ef, {
                                c: eI[e]
                            })
                        }), (0, v.jsxs)("div", {
                            className: "pb-3 flex justify-end underline items-center text-black cursor-pointer font-bold",
                            onClick: () => s(S.ST.AIRDROP),
                            children: ["Farming Rule ", (0, v.jsx)(eZ.Z, {
                                className: "w-4 h-4 ml-1"
                            })]
                        })]
                    }), (0, v.jsx)("div", {
                        className: "px-4",
                        children: (0, v.jsxs)(ep.O.Group, {
                            onChange: t,
                            children: [(0, v.jsxs)(ep.O.List, {
                                className: "grid grid-cols-2 gap-4 mb-6 text-sm",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "outline-none col-span-2",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Points Farming #1"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Top Donor"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Top Donation Receiver"
                                    })
                                })]
                            }), (0, v.jsxs)(ep.O.Panels, {
                                children: [(0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(eF, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(ey, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(eg, {})
                                })]
                            })]
                        })
                    })]
                })
            }
            var eM = s(81319);

            function ez() {
                return (ez = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eU = function(e) {
                return y.createElement("svg", ez({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 64,
                    height: 64,
                    className: "rank_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), a || (a = y.createElement("path", {
                    d: "M682.48 511.949V97.417H339.371v209.466H63.904v616.733h893.327V511.949H682.479zM338.86 855.465H132.055V375.033H338.86v480.432zm68.663 0V165.567h206.805V511.95h-.204v343.516H407.523zm481.557 0h-206.6V580.202h206.6v275.263z"
                })))
            };

            function eG() {
                return (eG = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var e_ = function(e) {
                return y.createElement("svg", eG({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 64,
                    height: 64,
                    className: "rank-light_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), n || (n = y.createElement("path", {
                    fill: "#fff",
                    d: "M682.48 511.949V97.417H339.371v209.466H63.904v616.733h893.327V511.949H682.479zM338.86 855.465H132.055V375.033H338.86v480.432zm68.663 0V165.567h206.805V511.95h-.204v343.516H407.523zm481.557 0h-206.6V580.202h206.6v275.263z"
                })))
            };

            function eB() {
                return (eB = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eq = function(e) {
                return y.createElement("svg", eB({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 128,
                    height: 128,
                    className: "spot_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), r || (r = y.createElement("path", {
                    fill: "#2c2c2c",
                    d: "M513.536 978.688c-257.024 0-465.92-208.896-465.92-465.92s208.896-465.92 465.92-465.92 465.92 208.896 465.92 465.92-209.152 465.92-465.92 465.92zm0-870.4c-222.976 0-404.48 181.504-404.48 404.48s181.504 404.48 404.48 404.48 404.48-181.504 404.48-404.48-181.504-404.48-404.48-404.48z"
                })), l || (l = y.createElement("path", {
                    fill: "#2c2c2c",
                    d: "M512.768 722.944c-10.24 0-19.712-4.096-27.136-11.264L315.136 541.184c-14.848-14.848-14.848-39.168 0-54.016l170.496-170.496c7.168-7.168 16.896-11.264 27.136-11.264s19.712 4.096 27.136 11.264L710.4 487.168c7.168 7.168 11.264 16.896 11.264 27.136s-4.096 19.712-11.264 27.136L539.904 711.68c-7.168 7.168-16.896 11.264-27.136 11.264zm16.384-54.784zM375.296 514.304l137.472 137.472L650.24 514.304 512.768 376.832 375.296 514.304z"
                })))
            };

            function eE() {
                return (eE = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eD = function(e) {
                return y.createElement("svg", eE({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 128,
                    height: 128,
                    className: "spot-light_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), i || (i = y.createElement("path", {
                    fill: "#fff",
                    d: "M513.536 978.688c-257.024 0-465.92-208.896-465.92-465.92s208.896-465.92 465.92-465.92 465.92 208.896 465.92 465.92-209.152 465.92-465.92 465.92zm0-870.4c-222.976 0-404.48 181.504-404.48 404.48s181.504 404.48 404.48 404.48 404.48-181.504 404.48-404.48-181.504-404.48-404.48-404.48z"
                })), d || (d = y.createElement("path", {
                    fill: "#fff",
                    d: "M512.768 722.944c-10.24 0-19.712-4.096-27.136-11.264L315.136 541.184c-14.848-14.848-14.848-39.168 0-54.016l170.496-170.496c7.168-7.168 16.896-11.264 27.136-11.264s19.712 4.096 27.136 11.264L710.4 487.168c7.168 7.168 11.264 16.896 11.264 27.136s-4.096 19.712-11.264 27.136L539.904 711.68c-7.168 7.168-16.896 11.264-27.136 11.264zm16.384-54.784zM375.296 514.304l137.472 137.472L650.24 514.304 512.768 376.832 375.296 514.304z"
                })))
            };

            function eL() {
                return (eL = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eK = function(e) {
                return y.createElement("svg", eL({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 128,
                    height: 128,
                    className: "future_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), c || (c = y.createElement("path", {
                    fill: "#2c2c2c",
                    d: "M135.694 920.862c-33.567 0-60.866-27.298-60.866-60.853l.326-582.368c.31-2.377 1.981-5.604 4.669-7.869l191.416-162.885c3.325-2.831 5.377-3.453 7.443-3.511l2.859-.24 369.697.043c33.566 0 60.864 27.313 60.864 60.881v32.831c-4.201-.241-8.391-.396-12.651-.396-5.122 0-10.174.199-14.887.467v-32.901c0-18.072-15.27-33.342-33.326-33.342H312.179l-.114 214.03H205.278v-27.54h79.362V131.64L102.366 286.742V860.01c0 18.058 15.27 33.313 33.328 33.313h515.544c18.057 0 33.326-15.256 33.326-33.313v-27.298c4.713.269 9.765.467 14.887.467 4.261 0 8.45-.156 12.651-.397v27.229c0 33.555-27.298 60.853-60.864 60.853H135.694z"
                })), o || (o = y.createElement("path", {
                    fill: "#2c2c2c",
                    d: "M215.255 515.9c-7.585 0-13.77-6.172-13.77-13.771s6.185-13.77 13.77-13.77h167.173c-.892 9.511-1.301 18.129-1.301 26.479 0 .354 0 .707.013 1.063H215.255zm0 231.123c-7.585 0-13.77-6.17-13.77-13.77s6.185-13.77 13.77-13.77h241.001a327.113 327.113 0 0 0 26.011 27.539H215.255zm0-115.562c-7.585 0-13.77-6.17-13.77-13.77 0-7.599 6.185-13.77 13.77-13.77h178.877a313.038 313.038 0 0 0 9.48 27.539H215.255zm484.098 132.812c-137.752 0-249.818-112.066-249.818-249.818s112.066-249.804 249.818-249.804c137.753 0 249.819 112.052 249.819 249.804S837.105 764.273 699.353 764.273zm0-472.083c-122.567 0-222.278 99.712-222.278 222.265 0 122.567 99.711 222.279 222.278 222.279 122.568 0 222.28-99.712 222.28-222.279 0-122.553-99.712-222.265-222.28-222.265z"
                })), u || (u = y.createElement("path", {
                    fill: "#2c2c2c",
                    d: "m687.862 672.842-.028-37.616-10.698-1.075c-39.187-3.991-71.806-18.525-87.259-38.918l-3.341-4.387 28.898-7.075 1.415 1.188c12.086 10.331 33.609 18.396 57.555 21.581l13.442 1.811v-83.083l-10.004-1.586c-38.521-6.184-60.003-15.396-69.356-20.35l-1.601-.849c-10.217-6.963-26.789-21.454-26.789-42.78.015-32.506 40.828-60.215 97.066-65.876l10.684-1.076v-36.652h26.961l.013 36.822 10.53 1.217c35.024 3.991 64.46 16.444 80.735 34.133l3.734 4.047-27.821 9.808-1.557-1.175c-11.845-9-30.794-15.99-51.966-19.174l-13.656-2.053v86.028l9.779 1.769c27.795 4.954 50.365 11.349 65.296 18.481 6.283 3.028 11.122 6.029 14.351 8.916 1.174 1.075 2.291 2.264 3.311 3.354 7.924 9.1 12.07 19.401 12.07 29.916 0 31.8-39.651 59.396-94.276 65.622l-10.53 1.216-.013 37.815h-26.945zm26.958-64.702 13.687-2.094c31.104-4.755 64.147-19.615 64.147-37.857.1-18.184-32.985-32.986-64.178-37.699l-13.656-2.052v79.702zm-40.431-186.746c-37.671 5.038-67.248 21.808-67.347 38.21 0 16.416 29.592 33.241 67.347 38.252l13.458 1.811v-80.07l-13.458 1.797z"
                })))
            };

            function eH() {
                return (eH = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eV = function(e) {
                return y.createElement("svg", eH({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 128,
                    height: 128,
                    className: "future-light_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), m || (m = y.createElement("path", {
                    fill: "#fff",
                    d: "M135.694 920.862c-33.567 0-60.866-27.298-60.866-60.853l.326-582.368c.31-2.377 1.981-5.604 4.669-7.869l191.416-162.885c3.325-2.831 5.377-3.453 7.443-3.511l2.859-.24 369.697.043c33.566 0 60.864 27.313 60.864 60.881v32.831c-4.201-.241-8.391-.396-12.651-.396-5.122 0-10.174.199-14.887.467v-32.901c0-18.072-15.27-33.342-33.326-33.342H312.179l-.114 214.03H205.278v-27.54h79.362V131.64L102.366 286.742V860.01c0 18.058 15.27 33.313 33.328 33.313h515.544c18.057 0 33.326-15.256 33.326-33.313v-27.298c4.713.269 9.765.467 14.887.467 4.261 0 8.45-.156 12.651-.397v27.229c0 33.555-27.298 60.853-60.864 60.853H135.694z"
                })), x || (x = y.createElement("path", {
                    fill: "#fff",
                    d: "M215.255 515.9c-7.585 0-13.77-6.172-13.77-13.771s6.185-13.77 13.77-13.77h167.173c-.892 9.511-1.301 18.129-1.301 26.479 0 .354 0 .707.013 1.063H215.255zm0 231.123c-7.585 0-13.77-6.17-13.77-13.77s6.185-13.77 13.77-13.77h241.001a327.113 327.113 0 0 0 26.011 27.539H215.255zm0-115.562c-7.585 0-13.77-6.17-13.77-13.77 0-7.599 6.185-13.77 13.77-13.77h178.877a313.038 313.038 0 0 0 9.48 27.539H215.255zm484.098 132.812c-137.752 0-249.818-112.066-249.818-249.818s112.066-249.804 249.818-249.804c137.753 0 249.819 112.052 249.819 249.804S837.105 764.273 699.353 764.273zm0-472.083c-122.567 0-222.278 99.712-222.278 222.265 0 122.567 99.711 222.279 222.278 222.279 122.568 0 222.28-99.712 222.28-222.279 0-122.553-99.712-222.265-222.28-222.265z"
                })), h || (h = y.createElement("path", {
                    fill: "#fff",
                    d: "m687.862 672.842-.028-37.616-10.698-1.075c-39.187-3.991-71.806-18.525-87.259-38.918l-3.341-4.387 28.898-7.075 1.415 1.188c12.086 10.331 33.609 18.396 57.555 21.581l13.442 1.811v-83.083l-10.004-1.586c-38.521-6.184-60.003-15.396-69.356-20.35l-1.601-.849c-10.217-6.963-26.789-21.454-26.789-42.78.015-32.506 40.828-60.215 97.066-65.876l10.684-1.076v-36.652h26.961l.013 36.822 10.53 1.217c35.024 3.991 64.46 16.444 80.735 34.133l3.734 4.047-27.821 9.808-1.557-1.175c-11.845-9-30.794-15.99-51.966-19.174l-13.656-2.053v86.028l9.779 1.769c27.795 4.954 50.365 11.349 65.296 18.481 6.283 3.028 11.122 6.029 14.351 8.916 1.174 1.075 2.291 2.264 3.311 3.354 7.924 9.1 12.07 19.401 12.07 29.916 0 31.8-39.651 59.396-94.276 65.622l-10.53 1.216-.013 37.815h-26.945zm26.958-64.702 13.687-2.094c31.104-4.755 64.147-19.615 64.147-37.857.1-18.184-32.985-32.986-64.178-37.699l-13.656-2.052v79.702zm-40.431-186.746c-37.671 5.038-67.248 21.808-67.347 38.21 0 16.416 29.592 33.241 67.347 38.252l13.458 1.811v-80.07l-13.458 1.797z"
                })))
            };

            function eQ() {
                return (eQ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var eY = function(e) {
                return y.createElement("svg", eQ({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 128,
                    height: 128,
                    className: "post_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), p || (p = y.createElement("path", {
                    fill: "#2c2c2c",
                    d: "M467.316 548.399h75.637l10.193-76.335H477.51l-10.194 76.335zm-10.193 76.334-10.892 81.455a38.167 38.167 0 0 1-75.636-10.147l9.449-71.261h-60.742a38.167 38.167 0 0 1 0-76.335h70.935l10.194-76.381H319.3a38.167 38.167 0 0 1 0-76.381h91.276l10.939-81.455a38.167 38.167 0 0 1 75.636 10.194l-9.449 71.214h75.637l10.891-81.454a38.167 38.167 0 0 1 75.637 10.193l-9.45 71.261h60.696a38.167 38.167 0 0 1 0 76.335h-70.889l-10.193 76.381h81.082a38.167 38.167 0 0 1 0 76.335h-91.229l-10.938 81.454a38.167 38.167 0 0 1-75.636-10.147l9.448-71.26h-75.636zM87.319 795.695a1691.276 1691.276 0 0 1-26.065-45.15 509.114 509.114 0 1 1 187.531 196.562l-23.924-14.057-124.602 34.071a38.167 38.167 0 0 1-46.825-46.917L87.32 795.74v-.046zm77.87 4.561-20.572 75.59 75.59-20.62a38.167 38.167 0 0 1 29.23 3.817c12.94 7.447 25.786 15.034 38.633 22.621A432.733 432.733 0 1 0 128.605 714.38c4.375 8.285 15.453 27.275 32.675 56.413a38.167 38.167 0 0 1 3.91 29.463z"
                })))
            };

            function eJ() {
                return (eJ = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            var e$ = function(e) {
                return y.createElement("svg", eJ({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 128,
                    height: 128,
                    className: "post-light_svg__icon",
                    viewBox: "0 0 1024 1024"
                }, e), j || (j = y.createElement("path", {
                    fill: "#fff",
                    d: "M467.316 548.399h75.637l10.193-76.335H477.51l-10.194 76.335zm-10.193 76.334-10.892 81.455a38.167 38.167 0 0 1-75.636-10.147l9.449-71.261h-60.742a38.167 38.167 0 0 1 0-76.335h70.935l10.194-76.381H319.3a38.167 38.167 0 0 1 0-76.381h91.276l10.939-81.455a38.167 38.167 0 0 1 75.636 10.194l-9.449 71.214h75.637l10.891-81.454a38.167 38.167 0 0 1 75.637 10.193l-9.45 71.261h60.696a38.167 38.167 0 0 1 0 76.335h-70.889l-10.193 76.381h81.082a38.167 38.167 0 0 1 0 76.335h-91.229l-10.938 81.454a38.167 38.167 0 0 1-75.636-10.147l9.448-71.26h-75.636zM87.319 795.695a1691.276 1691.276 0 0 1-26.065-45.15 509.114 509.114 0 1 1 187.531 196.562l-23.924-14.057-124.602 34.071a38.167 38.167 0 0 1-46.825-46.917L87.32 795.74v-.046zm77.87 4.561-20.572 75.59 75.59-20.62a38.167 38.167 0 0 1 29.23 3.817c12.94 7.447 25.786 15.034 38.633 22.621A432.733 432.733 0 1 0 128.605 714.38c4.375 8.285 15.453 27.275 32.675 56.413a38.167 38.167 0 0 1 3.91 29.463z"
                })))
            };

            function eW() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["recentlyActive"],
                        queryFn: N.jc
                    });
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => {
                        var a, n, r, l;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6 w-full",
                            onClick: () => e(t.groupId),
                            children: [(0, v.jsx)("img", {
                                src: (null === (a = t.group.user) || void 0 === a ? void 0 : a.avatar) || (null === (n = t.group.future) || void 0 === n ? void 0 : n.twitterAvatar) || g.tU,
                                className: "rounded-2xl w-12 h-12 cursor-pointer object-cover"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 flex items-center justify-between gap-2",
                                children: [(0, v.jsxs)("div", {
                                    className: "flex-1 w-0",
                                    children: [(0, v.jsx)("h3", {
                                        className: "mb-0.5 font-medium truncate",
                                        children: (null === (r = t.group.user) || void 0 === r ? void 0 : r.name) || (null === (l = t.group.future) || void 0 === l ? void 0 : l.twitterName)
                                    }), t.content && (0, v.jsxs)("div", {
                                        className: "text-sm text-gray-700 flex gap-0.5 items-center",
                                        children: [(0, v.jsx)("img", {
                                            src: t.senderAvatar,
                                            className: "w-4 h-4 rounded-full"
                                        }), (0, v.jsxs)("span", {
                                            className: "flex-1 truncate",
                                            children: [t.senderName, ": ", t.content]
                                        })]
                                    })]
                                }), (0, v.jsx)("div", {
                                    className: "text-sm text-gray-500",
                                    children: (0, el.Z)((0, ei.Z)(t.updatedAt), "HH:mm")
                                })]
                            })]
                        }, t.groupId)
                    })
                })
            }
            var eX = s(82266);

            function e0(e) {
                return (0, eX.WU)(e, "short")
            }

            function e1() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["recentlyTrade"],
                        queryFn: N.cF
                    });
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map(t => {
                        var s, a, n, r, l, i, d, c, o, u, m;
                        return (0, v.jsxs)("div", {
                            className: "my-4 flex items-center gap-2",
                            children: [(0, v.jsxs)("div", {
                                className: "flex shrink-0 relative",
                                children: [(0, v.jsx)("img", {
                                    src: (null === (s = t.traderUser) || void 0 === s ? void 0 : s.avatar) || g.tU,
                                    className: "w-10 h-10 rounded-2xl cursor-pointer object-cover",
                                    onClick: () => {
                                        var s, a;
                                        return e(null === (a = t.traderUser) || void 0 === a ? void 0 : null === (s = a.group) || void 0 === s ? void 0 : s.id)
                                    }
                                }), (0, v.jsx)("img", {
                                    src: (null === (n = t.subjectGroup) || void 0 === n ? void 0 : null === (a = n.user) || void 0 === a ? void 0 : a.avatar) || (null === (l = t.subjectGroup) || void 0 === l ? void 0 : null === (r = l.future) || void 0 === r ? void 0 : r.twitterAvatar) || g.tU,
                                    className: "w-10 h-10 rounded-2xl -ml-2 cursor-pointer  object-cover",
                                    onClick: () => {
                                        var s;
                                        return e(null === (s = t.subjectGroup) || void 0 === s ? void 0 : s.id)
                                    }
                                }), (null === (i = t.subjectGroup) || void 0 === i ? void 0 : i.user) ? (0, v.jsx)("span", {
                                    className: "text-xs rounded bg-[#1296db] text-white px-1 py-0 absolute -bottom-5 left-4",
                                    children: "Spot"
                                }) : (0, v.jsx)("span", {
                                    className: "text-xs rounded bg-[#d4237a] text-white px-1 py-0 absolute -bottom-5 left-2",
                                    children: "Futures"
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h5", {
                                    className: "font-medium cursor-pointer truncate",
                                    onClick: () => {
                                        var s, a;
                                        return e(null === (a = t.traderUser) || void 0 === a ? void 0 : null === (s = a.group) || void 0 === s ? void 0 : s.id)
                                    },
                                    children: null === (d = t.traderUser) || void 0 === d ? void 0 : d.name
                                }), (0, v.jsxs)("h6", {
                                    className: "text-gray-500 text-sm",
                                    children: [t.isBuy ? "bought" : "sold", " ", t.ticketAmount, " ticket", "1" === t.ticketAmount ? "" : "s", " of", " "]
                                }), (0, v.jsx)("h5", {
                                    className: "font-medium cursor-pointer truncate",
                                    onClick: () => {
                                        var s;
                                        return e(null === (s = t.subjectGroup) || void 0 === s ? void 0 : s.id)
                                    },
                                    children: (null === (o = t.subjectGroup) || void 0 === o ? void 0 : null === (c = o.user) || void 0 === c ? void 0 : c.name) || (null === (m = t.subjectGroup) || void 0 === m ? void 0 : null === (u = m.future) || void 0 === u ? void 0 : u.twitterName)
                                }), (0, v.jsxs)("h6", {
                                    className: "text-gray-500 text-sm",
                                    children: [(0, C.d)(BigInt(t.tokenAmount)), " ", g.Q6, ", ", (0, v.jsx)("span", {
                                        children: e0(1e3 * t.createdAt)
                                    })]
                                })]
                            })]
                        }, t.id)
                    })
                })
            }

            function e2() {
                return (0, S.Og)(e => e.me), (0, v.jsxs)("div", {
                    children: [(0, v.jsx)("div", {
                        className: "text-2xl font-bold px-4 py-6",
                        children: "Global"
                    }), (0, v.jsx)("div", {
                        className: "px-4",
                        children: (0, v.jsxs)(ep.O.Group, {
                            children: [(0, v.jsxs)(ep.O.List, {
                                className: "grid grid-cols-2 gap-4 mb-6 text-sm",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Active Chats"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Recent Trading"
                                    })
                                })]
                            }), (0, v.jsxs)(ep.O.Panels, {
                                children: [(0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(eW, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(e1, {})
                                })]
                            })]
                        })
                    })]
                })
            }(0, eX.z2)("short", (e, t) => [
                ["now", "right now"],
                ["%ss", "in %ss"],
                ["1m", "in 1m"],
                ["%sm", "in %sm"],
                ["1h", "in 1h"],
                ["%sh", "in %sh"],
                ["1d", "in 1d"],
                ["%sd", "in %sd"],
                ["1w", "in 1w"],
                ["%sw", "in %sw"],
                ["1mo", "in 1mo"],
                ["%smo", "in %smo"],
                ["1yr", "in 1yr"],
                ["%syr", "in %syr"]
            ][t]);
            var e4 = s(50886);
            let e5 = async e => {
                    let t = await ew.n.get("/post?" + (e ? "sinceId=".concat(e) : ""));
                    return t
                },
                e6 = async e => {
                    let t = await ew.n.get("/post/".concat(e));
                    return t
                },
                e3 = async (e, t) => {
                    let s = await ew.n.get("/post/".concat(e, "/reply_list?") + (t ? "sinceId=".concat(t) : ""));
                    return s
                },
                e8 = async e => await ew.n.post("/post", e),
                e7 = async e => {
                    let t = "/post/".concat(e);
                    await ew.n.delete(t)
                },
                e9 = async e => {
                    let t = "/post/".concat(e, "/like");
                    return await ew.n.post(t)
                },
                te = async e => {
                    let t = "/post/".concat(e, "/cancel_like");
                    return await ew.n.post(t)
                },
                tt = async e => {
                    let t = "/post/".concat(e, "/repost");
                    return await ew.n.post(t)
                },
                ts = async e => {
                    let t = "/post/".concat(e, "/cancel_repost");
                    return await ew.n.post(t)
                },
                ta = async (e, t) => {
                    let s = "/post/".concat(e, "/quote");
                    return await ew.n.post(s, t)
                },
                tn = async (e, t) => {
                    let s = "/post/".concat(e, "/reply");
                    return await ew.n.post(s, t)
                },
                tr = async (e, t) => {
                    let s = "/post/search_mentions?trigger=".concat(encodeURIComponent(e), "&keyword=").concat(encodeURIComponent(t || "")),
                        a = await ew.n.get(s);
                    return a
                },
                tl = async e => {
                    let t = new FormData;
                    return t.append("file", e), await ew.n.post("/post/upload_image", t, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    })
                };
            var ti = s(9396),
                td = s(75241),
                tc = s(82900),
                to = s(98129);

            function tu(e) {
                let {
                    count: t,
                    postId: s,
                    liked: a
                } = e, [n, r] = (0, y.useState)(t), [l, i] = (0, y.useState)(a), d = (0, S.Og)(e => e.me);
                return (0, v.jsxs)("div", {
                    className: "flex items-center cursor-pointer text-sm",
                    onClick: e => {
                        if (!d) {
                            q.Am.info("Please sign in."), e.stopPropagation();
                            return
                        }
                        l ? (te(s), r(n > 0 ? n - 1 : 0), i(!1)) : (e9(s), r(n + 1), i(!0)), e.stopPropagation()
                    },
                    children: [(0, v.jsx)("div", {
                        className: "hover:bg-primary/30 p-2 rounded-full hover:text-primary ".concat(l ? "text-primary" : ""),
                        children: (0, v.jsx)(to.Z, {
                            className: "w-4 h-4"
                        })
                    }), (0, v.jsx)("span", {
                        className: "".concat(l ? "text-primary" : ""),
                        children: n > 0 ? n : ""
                    })]
                })
            }
            var tm = s(30488),
                tx = s(36371),
                th = s(43605),
                tp = s(62675),
                tj = s(53642),
                tv = s.n(tj),
                ty = s(86747),
                tg = s(5620);
            let tf = (0, y.forwardRef)((e, t) => {
                let {
                    trigger: s,
                    value: a,
                    children: n,
                    ...r
                } = e, l = (0, f.R)(e => e.setCurrentChatGroup);
                return (0, v.jsxs)("span", { ...r,
                    ref: t,
                    className: "mx-px text-blue-500 ".concat("@" === s ? "cursor-pointer" : ""),
                    onClick: e => {
                        if ("@" === s) {
                            var t;
                            let e = null == r ? void 0 : null === (t = r.data) || void 0 === t ? void 0 : t.id;
                            e && l({
                                id: e
                            })
                        }
                        e.stopPropagation()
                    },
                    children: [s, a]
                })
            });

            function tb(e) {
                let {
                    onChange: t
                } = e, [s] = (0, ty.useLexicalComposerContext)();
                return (0, y.useEffect)(() => s.registerUpdateListener(e => {
                    let {
                        editorState: s
                    } = e;
                    t(s)
                }), [s, t]), (0, v.jsx)(v.Fragment, {})
            }
            let tN = (0, y.forwardRef)((e, t) => {
                    let {
                        open: s,
                        loading: a,
                        ...n
                    } = e;
                    return (0, v.jsx)("ul", {
                        className: "m-0 mt-6 text-black rounded-lg overflow-hidden z-50 relative shadow",
                        ...n,
                        ref: t
                    })
                }),
                tw = (0, y.forwardRef)((e, t) => {
                    let {
                        selected: s,
                        label: a,
                        itemValue: n,
                        ...r
                    } = e;
                    return (0, v.jsx)("li", {
                        className: "m-0 flex px-3 py-2 cursor-pointer text-sm ".concat(s ? "bg-gray-100" : "bg-white"),
                        ...r,
                        ref: t
                    })
                }),
                tk = {
                    namespace: "Post",
                    onError: e => console.log(e),
                    nodes: [...(0, tg.bH)(tf)]
                };

            function tC(e) {
                let {
                    text: t,
                    textState: s
                } = e;
                return s ? (0, v.jsx)(tx.LexicalComposer, {
                    initialConfig: { ...tk,
                        editable: !1,
                        editorState: s
                    },
                    children: (0, v.jsx)(th.PlainTextPlugin, {
                        contentEditable: (0, v.jsx)(tp.ContentEditable, {
                            className: "outline-none"
                        }),
                        placeholder: (0, v.jsx)(v.Fragment, {}),
                        ErrorBoundary: tv()
                    })
                }) : t ? (0, v.jsx)("div", {
                    className: "break-words break-all",
                    dangerouslySetInnerHTML: {
                        __html: (0, eb.tx)(t)
                    }
                }) : (0, v.jsx)(v.Fragment, {})
            }
            var tP = s(4277);
            let tT = async (e, t) => {
                let s = await tr(e, t);
                return s
            };

            function tO(e) {
                let {
                    onInputChange: t,
                    placeholder: s
                } = e;
                return (0, v.jsx)("div", {
                    className: "relative z-50",
                    children: (0, v.jsxs)(tx.LexicalComposer, {
                        initialConfig: tk,
                        children: [(0, v.jsx)(th.PlainTextPlugin, {
                            contentEditable: (0, v.jsx)(tp.ContentEditable, {
                                className: "outline-none"
                            }),
                            placeholder: s ? (0, v.jsx)("div", {
                                className: "absolute top-0 left-0 select-none overflow-hidden text-gray-400 pointer-events-none",
                                children: s
                            }) : (0, v.jsx)(v.Fragment, {}),
                            ErrorBoundary: tv()
                        }), (0, v.jsx)(tb, {
                            onChange: function(e) {
                                let s = e.toJSON(),
                                    a = e.read(() => (0, tP.$getRoot)().getTextContent());
                                t(a, JSON.stringify(s))
                            }
                        }), (0, v.jsx)(tg.tr, {
                            creatable: {
                                "@": !1,
                                "#": !0
                            },
                            triggers: ["@", "#"],
                            onSearch: tT,
                            menuComponent: tN,
                            menuItemComponent: tw
                        })]
                    })
                })
            }
            var tS = s(90376),
                tF = s(4173),
                tZ = s.n(tF);

            function tA(e) {
                let {
                    onSelect: t
                } = e, [s, a] = (0, y.useState)([]);
                return (0, v.jsx)("div", {
                    children: (0, v.jsx)(tZ(), {
                        value: s,
                        multiple: !1,
                        onChange: e => {
                            a(e), t(e[0])
                        },
                        maxNumber: 3,
                        maxFileSize: 10485760,
                        acceptType: ["jpg", "gif", "png"],
                        children: e => {
                            let {
                                onImageUpload: t,
                                dragProps: s
                            } = e;
                            return (0, v.jsx)("div", {
                                onClick: t,
                                ...s,
                                className: "",
                                children: (0, v.jsx)("button", {
                                    className: "rounded-full bg-primary bg-opacity-20 hover:bg-opacity-50 text-primary font-bold p-2",
                                    children: (0, v.jsx)(tS.Z, {
                                        className: "w-4 h-4"
                                    })
                                })
                            })
                        }
                    })
                })
            }
            var tI = s(80003);

            function tR(e) {
                let {
                    image: t,
                    onRemove: s
                } = e;
                return (0, v.jsxs)("div", {
                    className: "flex justify-center relative bg-gray-50 p-4 rounded-lg my-2",
                    children: [(0, v.jsx)(tI.Z, {
                        className: "w-5 h-5 absolute right-2 top-2 hover:text-black text-gray-500 cursor-pointer",
                        onClick: () => s()
                    }), (0, v.jsx)("img", {
                        src: t,
                        alt: "",
                        className: "max-w-full max-h-40"
                    })]
                })
            }

            function tM(e) {
                let {
                    data: t
                } = e;
                return (0, v.jsx)(v.Fragment, {
                    children: t.map((e, t) => (0, v.jsx)("div", {
                        children: "image" === e.type && (0, v.jsx)("img", {
                            src: e.value,
                            alt: "",
                            className: "max-w-full max-h-52 border rounded-lg"
                        })
                    }, t))
                })
            }
            let tz = H.ZP.create(e => {
                let {
                    referencedPost: t
                } = e, s = (0, H.dd)(), a = (0, S.Og)(e => e.me), [n, r] = (0, y.useState)(""), [l, i] = (0, y.useState)(""), [d, c] = (0, y.useState)(!1), [o, u] = (0, y.useState)(), m = (0, e4.d)(e => e.push), x = async () => {
                    try {
                        let e;
                        c(!0), o && (e = await tl(o.file));
                        let a = await tn(t.id, {
                            text: (0, eb.yQ)(n),
                            textState: n ? l : "",
                            image: e
                        });
                        q.Am.success((0, v.jsxs)("div", {
                            className: "text-center",
                            children: [(0, v.jsx)("span", {
                                children: "Your post was sent."
                            }), (0, v.jsx)("span", {
                                className: "underline font-bold ml-1",
                                onClick: () => m({
                                    type: e4.P.postDetail,
                                    data: a
                                }),
                                children: "View"
                            })]
                        }), {
                            position: "top-center"
                        }), s.remove()
                    } catch (e) {} finally {
                        c(!1)
                    }
                };
                return (0, v.jsx)(Q.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-4 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsxs)("div", {
                                className: "flex gap-2 py-4",
                                children: [(0, v.jsxs)("div", {
                                    className: "flex justify-center flex-col items-center gap-2",
                                    children: [(0, v.jsx)("img", {
                                        src: t.user.avatar || g.tU,
                                        className: "w-8 h-8"
                                    }), (0, v.jsx)("div", {
                                        className: "w-0.5 bg-gray-300 flex-1"
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, v.jsxs)("div", {
                                        className: "text-sm text-gray-500 flex gap-1",
                                        children: [(0, v.jsx)("span", {
                                            className: "font-bold text-black truncate max-w-[100px]",
                                            children: t.user.name
                                        }), (0, v.jsxs)("span", {
                                            className: "truncate max-w-[100px]",
                                            children: ["@", t.user.twitterUsername]
                                        }), (0, v.jsx)("span", {
                                            children: e0(1e3 * t.createdAt)
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "my-2",
                                        children: [(0, v.jsx)(tC, {
                                            text: t.text,
                                            textState: t.textState
                                        }), t.attachments && (0, v.jsx)(tM, {
                                            data: t.attachments
                                        })]
                                    })]
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, v.jsx)("img", {
                                    className: "w-8 h-8 rounded-full",
                                    src: (null == a ? void 0 : a.avatar) || g.tU
                                }), (0, v.jsxs)("div", {
                                    className: "flex-1 my-1.5",
                                    children: [(0, v.jsx)(tO, {
                                        placeholder: "Post your reply",
                                        onInputChange: (e, t) => {
                                            r(e), i(t)
                                        }
                                    }), o && (0, v.jsx)(tR, {
                                        image: o.dataURL,
                                        onRemove: () => u(void 0)
                                    })]
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "mt-4 flex justify-end items-center gap-2",
                                children: [(0, v.jsx)("div", {
                                    className: "flex-1 justify-start flex",
                                    children: (0, v.jsx)(tA, {
                                        onSelect: e => {
                                            u(e)
                                        }
                                    })
                                }), n.length > 140 && (0, v.jsxs)("div", {
                                    className: "text-right text-sm text-gray-500",
                                    children: [(null == n ? void 0 : n.length) || 0, "/160"]
                                }), (0, v.jsx)(V.fl, {
                                    onClick: x,
                                    className: "rounded-full py-0 h-9",
                                    loading: d,
                                    disabled: "" === n && !o || n.length > 160,
                                    children: "Post"
                                })]
                            })]
                        })
                    })
                })
            });

            function tU(e) {
                let {
                    count: t,
                    post: s
                } = e, [a, n] = (0, y.useState)(t), r = (0, S.Og)(e => e.me);
                return (0, v.jsxs)("div", {
                    className: "flex items-center cursor-pointer text-sm",
                    onClick: e => {
                        if (!r) {
                            q.Am.info("Please sign in."), e.stopPropagation();
                            return
                        }
                        H.ZP.show(tz, {
                            referencedPost: s
                        }), e.stopPropagation()
                    },
                    children: [(0, v.jsx)("div", {
                        className: "hover:bg-primary/30 p-2 rounded-full hover:text-primary",
                        children: (0, v.jsx)(tm.Z, {
                            className: "w-4 h-4"
                        })
                    }), (0, v.jsx)("span", {
                        children: a > 0 ? a : ""
                    })]
                })
            }
            var tG = s(33548),
                t_ = s(92302),
                tB = s(75449);
            let tq = H.ZP.create(e => {
                let {
                    referencedPost: t
                } = e, s = (0, H.dd)(), a = (0, S.Og)(e => e.me), [n, r] = (0, y.useState)(""), [l, i] = (0, y.useState)(""), [d, c] = (0, y.useState)(!1), [o, u] = (0, y.useState)(), m = (0, e4.d)(e => e.push), x = async () => {
                    try {
                        let e;
                        c(!0), o && (e = await tl(o.file));
                        let a = await ta(t.id, {
                            text: (0, eb.yQ)(n),
                            textState: n ? l : "",
                            image: e
                        });
                        q.Am.success((0, v.jsxs)("div", {
                            className: "text-center",
                            children: [(0, v.jsx)("span", {
                                children: "Your post was sent."
                            }), (0, v.jsx)("span", {
                                className: "underline font-bold ml-1",
                                onClick: () => m({
                                    type: e4.P.postDetail,
                                    data: a
                                }),
                                children: "View"
                            })]
                        }), {
                            position: "top-center"
                        }), s.remove()
                    } catch (e) {} finally {
                        c(!1)
                    }
                };
                return (0, v.jsx)(Q.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-4 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsxs)("div", {
                                className: "flex gap-2 mt-10",
                                children: [(0, v.jsx)("img", {
                                    className: "w-8 h-8 rounded-full",
                                    src: (null == a ? void 0 : a.avatar) || g.tU
                                }), (0, v.jsxs)("div", {
                                    className: "flex-1 my-1.5",
                                    children: [(0, v.jsx)(tO, {
                                        placeholder: "Add a comment",
                                        onInputChange: (e, t) => {
                                            r(e), i(t)
                                        }
                                    }), o && (0, v.jsx)(tR, {
                                        image: o.dataURL,
                                        onRemove: () => u(void 0)
                                    }), (0, v.jsxs)("div", {
                                        className: "p-2 rounded-lg border my-2",
                                        children: [(0, v.jsxs)("div", {
                                            className: "flex gap-1 items-center text-gray-500",
                                            children: [(0, v.jsx)("img", {
                                                src: t.user.avatar || g.tU,
                                                className: "w-4 h-4"
                                            }), (0, v.jsx)("span", {
                                                className: "font-bold text-black truncate max-w-[100px]",
                                                children: t.user.name
                                            }), (0, v.jsxs)("span", {
                                                className: "truncate max-w-[100px]",
                                                children: ["@", t.user.twitterUsername]
                                            }), (0, v.jsx)("span", {
                                                children: e0(1e3 * t.createdAt)
                                            })]
                                        }), (0, v.jsx)(tC, {
                                            text: t.text,
                                            textState: t.textState
                                        }), t.attachments && (0, v.jsx)(tM, {
                                            data: t.attachments
                                        })]
                                    })]
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "mt-4 flex justify-end items-center gap-2",
                                children: [(0, v.jsx)("div", {
                                    className: "flex-1 justify-start flex",
                                    children: (0, v.jsx)(tA, {
                                        onSelect: e => {
                                            u(e)
                                        }
                                    })
                                }), n.length > 140 && (0, v.jsxs)("div", {
                                    className: "text-right text-sm text-gray-500",
                                    children: [(null == n ? void 0 : n.length) || 0, "/160"]
                                }), (0, v.jsx)(V.fl, {
                                    onClick: x,
                                    className: "rounded-full py-0 h-9",
                                    loading: d,
                                    disabled: "" === n && !o || n.length > 160,
                                    children: "Post"
                                })]
                            })]
                        })
                    })
                })
            });

            function tE(e) {
                let {
                    post: t,
                    postId: s,
                    count: a,
                    reposted: n
                } = e, [r, l] = (0, y.useState)(a), [i, d] = (0, y.useState)(n), c = (0, S.Og)(e => e.me), [o, u] = (0, y.useState)(), [m, x] = (0, y.useState)(), {
                    styles: h,
                    attributes: p
                } = (0, tB.D)(o, m);
                return (0, v.jsxs)(t_.J, {
                    children: [(0, v.jsx)(t_.J.Button, {
                        ref: u,
                        as: "div",
                        children: (0, v.jsxs)("div", {
                            className: "flex items-center cursor-pointer text-sm",
                            children: [(0, v.jsx)("div", {
                                className: "hover:bg-primary/30 p-2 rounded-full hover:text-primary ".concat(i ? "text-primary" : ""),
                                children: (0, v.jsx)(tG.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("span", {
                                className: "".concat(i ? "text-primary" : ""),
                                children: r > 0 ? r : ""
                            })]
                        })
                    }), (0, v.jsx)(t_.J.Panel, {
                        ref: x,
                        style: h.popper,
                        ...p.popper,
                        children: (0, v.jsxs)("div", {
                            className: "mx-2 bg-white rounded-lg border mt-1 z-10 text-sm",
                            children: [i ? (0, v.jsxs)(t_.J.Button, {
                                className: "flex w-full  items-center gap-1 py-2 px-4 hover:bg-gray-50 hover:text-black",
                                onClick: e => {
                                    if (!c) {
                                        q.Am.info("Please sign in."), e.stopPropagation();
                                        return
                                    }
                                    ts(s), l(r > 0 ? r - 1 : 0), d(!1), e.stopPropagation()
                                },
                                children: [(0, v.jsx)(tG.Z, {
                                    className: "w-4 h-4"
                                }), (0, v.jsx)("span", {
                                    children: "Undo repost"
                                })]
                            }) : (0, v.jsxs)(t_.J.Button, {
                                className: "flex w-full  items-center gap-1 py-2 px-4 hover:bg-gray-50 hover:text-black",
                                onClick: e => {
                                    if (!c) {
                                        q.Am.info("Please sign in."), e.stopPropagation();
                                        return
                                    }
                                    tt(s), l(r + 1), d(!0), e.stopPropagation()
                                },
                                children: [(0, v.jsx)(tG.Z, {
                                    className: "w-4 h-4"
                                }), (0, v.jsx)("span", {
                                    children: "Repost"
                                })]
                            }), (0, v.jsxs)(t_.J.Button, {
                                className: "flex w-full items-center gap-1 py-2 px-4 hover:bg-gray-50 hover:text-black",
                                onClick: e => {
                                    if (!c) {
                                        q.Am.info("Please sign in."), e.stopPropagation();
                                        return
                                    }
                                    H.ZP.show(tq, {
                                        referencedPost: t
                                    }), e.stopPropagation()
                                },
                                children: [(0, v.jsx)(M.Z, {
                                    className: "w-4 h-4"
                                }), (0, v.jsx)("span", {
                                    children: "Quote"
                                })]
                            })]
                        })
                    })]
                })
            }
            var tD = s(56897),
                tL = s(25818);
            let tK = H.ZP.create(e => {
                let {
                    postId: t
                } = e, s = (0, H.dd)(), [a, n] = (0, y.useState)(!1), r = async () => {
                    try {
                        n(!0), await e7(t), q.Am.success("Deleted!"), s.remove()
                    } catch (e) {} finally {
                        n(!1)
                    }
                };
                return (0, v.jsx)(Q.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-4 relative w-[80%] md:w-[320px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Delete"
                            }), (0, v.jsx)("div", {
                                children: "Do you want to delete the post?"
                            }), (0, v.jsx)("div", {
                                className: "mt-6 flex justify-center",
                                children: (0, v.jsx)(V.fl, {
                                    onClick: r,
                                    variant: "destructive",
                                    loading: a,
                                    children: "Delete"
                                })
                            })]
                        })
                    })
                })
            });

            function tH(e) {
                let {
                    postId: t
                } = e, s = (0, S.Og)(e => e.me), [a, n] = (0, y.useState)(), [r, l] = (0, y.useState)(), {
                    styles: i,
                    attributes: d
                } = (0, tB.D)(a, r, {
                    placement: "bottom-end"
                });
                return s ? (0, v.jsxs)(t_.J, {
                    children: [(0, v.jsx)(t_.J.Button, {
                        ref: n,
                        as: "div",
                        children: (0, v.jsx)("div", {
                            className: "p-2 cursor-pointer hover:bg-gray-200 rounded-full text-gray-500 -mt-2",
                            children: (0, v.jsx)(tD.Z, {
                                className: "w-4 h-4"
                            })
                        })
                    }), (0, v.jsx)(t_.J.Panel, {
                        ref: l,
                        style: i.popper,
                        ...d.popper,
                        children: (0, v.jsx)("div", {
                            className: "mx-2 bg-white rounded-lg border mt-1 z-10 text-sm",
                            children: (0, v.jsxs)(t_.J.Button, {
                                className: "flex w-full items-center gap-1 py-2 px-4 hover:text-red-600 text-red-500",
                                onClick: e => {
                                    H.ZP.show(tK, {
                                        postId: t
                                    }), e.stopPropagation()
                                },
                                children: [(0, v.jsx)(tL.Z, {
                                    className: "w-4 h-4"
                                }), (0, v.jsx)("span", {
                                    children: "Delete"
                                })]
                            })
                        })
                    })]
                }) : (0, v.jsx)(v.Fragment, {})
            }

            function tV(e) {
                let {
                    data: t,
                    repostUser: s
                } = e, a = (0, f.R)(e => e.setCurrentChatGroup), n = (0, e4.d)(e => e.push), r = e => {
                    n({
                        type: e4.P.postDetail,
                        data: t.id
                    }), e.stopPropagation()
                }, l = (e, t) => {
                    a(t.group.id), e.stopPropagation()
                };
                return (0, v.jsxs)("div", {
                    className: "hover:bg-gray-50",
                    children: [(0, v.jsxs)("div", {
                        className: "text-gray-500 text-sm ml-6 py-2 flex items-center gap-1 font-bold",
                        onClick: e => l(e, s),
                        children: [(0, v.jsx)(tG.Z, {
                            className: "w-3 h-3"
                        }), (0, v.jsxs)("span", {
                            children: [s.name, " reposted"]
                        })]
                    }), (0, v.jsxs)("div", {
                        className: "flex gap-2 px-4 pb-4 border-b cursor-pointer",
                        onClick: r,
                        children: [(0, v.jsx)("div", {
                            onClick: e => l(e, t.user),
                            children: (0, v.jsx)("img", {
                                src: t.user.avatar || g.tU,
                                className: "w-8 h-8 rounded-full"
                            })
                        }), (0, v.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, v.jsxs)("div", {
                                className: "flex justify-between",
                                children: [(0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500 flex gap-1",
                                    onClick: e => l(e, t.user),
                                    children: [(0, v.jsx)("span", {
                                        className: "font-bold text-black truncate max-w-[100px]",
                                        children: t.user.name
                                    }), (0, v.jsxs)("span", {
                                        className: "truncate max-w-[100px]",
                                        children: ["@", t.user.twitterUsername]
                                    }), (0, v.jsx)("span", {
                                        children: " \xb7 "
                                    }), (0, v.jsx)("span", {
                                        children: e0(1e3 * t.createdAt)
                                    })]
                                }), (0, v.jsx)(tH, {
                                    postId: t.id
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "py-2",
                                onClick: r,
                                children: [(0, v.jsx)(tC, {
                                    text: t.text,
                                    textState: t.textState
                                }), t.attachments && (0, v.jsx)(tM, {
                                    data: t.attachments
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "flex justify-between pt-1 text-gray-500 -ml-2 items-center",
                                children: [(0, v.jsx)(tU, {
                                    count: t.replyCount,
                                    post: t
                                }), (0, v.jsx)(tE, {
                                    count: t.repostCount,
                                    post: t,
                                    postId: t.id,
                                    reposted: t.isReposted
                                }), (0, v.jsx)(tu, {
                                    count: t.likeCount,
                                    postId: t.id,
                                    liked: t.isLiked
                                })]
                            })]
                        })]
                    })]
                })
            }

            function tQ(e) {
                let {
                    data: t
                } = e, s = (0, f.R)(e => e.setCurrentChatGroup), a = (0, e4.d)(e => e.push), n = e => {
                    a({
                        type: e4.P.postDetail,
                        data: t.id
                    }), e.stopPropagation()
                }, r = (e, t) => {
                    s(t.group.id), e.stopPropagation()
                };
                return (0, v.jsxs)("div", {
                    className: "flex gap-2 px-4 py-4 hover:bg-gray-50 border-b cursor-pointer",
                    onClick: n,
                    children: [(0, v.jsx)("div", {
                        onClick: e => r(e, t.user),
                        children: (0, v.jsx)("img", {
                            src: t.user.avatar || g.tU,
                            className: "w-8 h-8 rounded-full"
                        })
                    }), (0, v.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, v.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, v.jsxs)("div", {
                                className: "text-sm text-gray-500 flex gap-1",
                                onClick: e => r(e, t.user),
                                children: [(0, v.jsx)("span", {
                                    className: "font-bold text-black truncate max-w-[100px]",
                                    children: t.user.name
                                }), (0, v.jsxs)("span", {
                                    className: "truncate max-w-[100px]",
                                    children: ["@", t.user.twitterUsername]
                                }), (0, v.jsx)("span", {
                                    children: " \xb7 "
                                }), (0, v.jsx)("span", {
                                    children: e0(1e3 * t.createdAt)
                                })]
                            }), (0, v.jsx)(tH, {
                                postId: t.id
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "py-2",
                            onClick: n,
                            children: [(0, v.jsx)(tC, {
                                text: t.text,
                                textState: t.textState
                            }), t.attachments && (0, v.jsx)(tM, {
                                data: t.attachments
                            })]
                        }), t.referencedPost && (0, v.jsxs)("div", {
                            className: "p-2 rounded-lg border my-2 text-sm",
                            onClick: e => {
                                t.referencedId && (a({
                                    type: e4.P.postDetail,
                                    data: t.referencedId
                                }), e.stopPropagation())
                            },
                            children: [(0, v.jsxs)("div", {
                                className: "flex gap-1 items-center",
                                children: [(0, v.jsx)("img", {
                                    src: t.referencedPost.user.avatar || g.tU,
                                    className: "w-4 h-4 rounded-full"
                                }), (0, v.jsx)("span", {
                                    className: "font-bold text-black truncate max-w-[100px]",
                                    children: t.referencedPost.user.name
                                }), (0, v.jsxs)("span", {
                                    className: "truncate max-w-[100px]",
                                    children: ["@", t.referencedPost.user.twitterUsername]
                                }), (0, v.jsx)("span", {
                                    children: " \xb7 "
                                }), (0, v.jsx)("span", {
                                    children: e0(1e3 * t.referencedPost.createdAt)
                                })]
                            }), (0, v.jsx)(tC, {
                                text: t.referencedPost.text,
                                textState: t.referencedPost.textState
                            }), t.referencedPost.attachments && (0, v.jsx)(tM, {
                                data: t.referencedPost.attachments
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "flex justify-between pt-1 text-gray-500 -ml-2 items-center",
                            children: [(0, v.jsx)(tU, {
                                count: t.replyCount,
                                post: t
                            }), (0, v.jsx)(tE, {
                                count: t.repostCount,
                                post: t,
                                postId: t.id,
                                reposted: t.isReposted
                            }), (0, v.jsx)(tu, {
                                count: t.likeCount,
                                postId: t.id,
                                liked: t.isLiked
                            })]
                        })]
                    })]
                })
            }

            function tY(e) {
                let {
                    data: t
                } = e, s = (0, f.R)(e => e.setCurrentChatGroup), a = (0, e4.d)(e => e.push), n = e => {
                    a({
                        type: e4.P.postDetail,
                        data: t.id
                    }), e.stopPropagation()
                }, r = (e, t) => {
                    s(t.group.id), e.stopPropagation()
                };
                return "repost" === t.referencedType ? t.referencedPost ? (0, v.jsx)(tV, {
                    data: t.referencedPost,
                    repostUser: t.user
                }) : (0, v.jsx)(v.Fragment, {}) : "quote" === t.referencedType ? t.referencedPost ? (0, v.jsx)(tQ, {
                    data: t
                }) : (0, v.jsx)(v.Fragment, {}) : (0, v.jsxs)("div", {
                    className: "flex gap-2 px-4 py-4 hover:bg-gray-50 border-b cursor-pointer",
                    onClick: n,
                    children: [(0, v.jsx)("div", {
                        children: (0, v.jsx)("img", {
                            src: t.user.avatar || g.tU,
                            className: "w-8 h-8 rounded-full",
                            onClick: e => r(e, t.user)
                        })
                    }), (0, v.jsxs)("div", {
                        className: "flex-1",
                        children: [(0, v.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0, v.jsxs)("div", {
                                className: "flex-1 text-sm text-gray-500 flex gap-1",
                                onClick: e => r(e, t.user),
                                children: [(0, v.jsx)("span", {
                                    className: "font-bold text-black truncate max-w-[100px]",
                                    children: t.user.name
                                }), (0, v.jsxs)("span", {
                                    className: "truncate max-w-[100px]",
                                    children: ["@", t.user.twitterUsername]
                                }), (0, v.jsx)("span", {
                                    children: " \xb7 "
                                }), (0, v.jsx)("span", {
                                    children: e0(1e3 * t.createdAt)
                                })]
                            }), (0, v.jsx)(tH, {
                                postId: t.id
                            })]
                        }), "reply" === t.referencedType && t.referencedPost && (0, v.jsxs)("div", {
                            className: "text-sm text-gray-500",
                            children: ["Replying to", " ", (0, v.jsxs)("span", {
                                className: "text-blue-400 truncate max-w-[100px]",
                                onClick: e => {
                                    var s;
                                    return r(e, null === (s = t.referencedPost) || void 0 === s ? void 0 : s.user)
                                },
                                children: ["@", t.referencedPost.user.twitterUsername]
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "py-2",
                            onClick: n,
                            children: [(0, v.jsx)(tC, {
                                text: t.text,
                                textState: t.textState
                            }), t.attachments && (0, v.jsx)(tM, {
                                data: t.attachments
                            })]
                        }), t.greenfieldSaved && (0, v.jsxs)("div", {
                            className: "text-sm mt-4 text-gray-500 flex gap-2 items-center italic",
                            children: [(0, v.jsx)("span", {
                                children: "Stored in BNB Greenfield."
                            }), (0, v.jsx)("a", {
                                href: "".concat(g.fk, "/view/").concat(t.greenfieldBucket, "/").concat(t.id),
                                target: "_blank",
                                onClick: e => {
                                    e.stopPropagation()
                                },
                                children: (0, v.jsx)(td.Z, {
                                    className: "w-4 h-4 cursor-pointer hover:text-black"
                                })
                            }), (0, v.jsx)("a", {
                                href: "".concat(g.L0, "/tx/").concat(t.greenfieldTxHash),
                                target: "_blank",
                                onClick: e => {
                                    e.stopPropagation()
                                },
                                children: (0, v.jsx)(tc.Z, {
                                    className: "w-4 h-4 cursor-pointer hover:text-black"
                                })
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "flex justify-between pt-1 text-gray-500 -ml-2 items-center",
                            children: [(0, v.jsx)(tU, {
                                count: t.replyCount,
                                post: t
                            }), (0, v.jsx)(tE, {
                                count: t.repostCount,
                                post: t,
                                postId: t.id,
                                reposted: t.isReposted
                            }), (0, v.jsx)(tu, {
                                count: t.likeCount,
                                postId: t.id,
                                liked: t.isLiked
                            })]
                        })]
                    })]
                })
            }

            function tJ(e) {
                let {
                    postId: t
                } = e, {
                    data: s,
                    fetchNextPage: a,
                    isFetchingNextPage: n,
                    hasNextPage: r
                } = (0, F.N)({
                    queryKey: ["postReplyList", t],
                    queryFn: e => {
                        let {
                            pageParam: s = ""
                        } = e;
                        return e3(t, s)
                    },
                    getNextPageParam: e => 20 === e.length && e[e.length - 1].id
                });
                return (0, v.jsxs)("div", {
                    className: "pb-20",
                    children: [null == s ? void 0 : s.pages.map((e, t) => (0, v.jsx)("div", {
                        children: e.map(e => (0, v.jsx)(tY, {
                            data: e
                        }, e.id))
                    }, t)), (0, v.jsx)("div", {
                        className: "mt-10 flex justify-center",
                        children: (0, v.jsx)("button", {
                            className: "py-2 px-4 border rounded-md bg-gray-50 cursor-pointer text-sm hover:bg-gray-100 disabled:bg-transparent disabled:text-gray-500 disabled:border-0 disabled:cursor-default disabled:hover:bg-transparent",
                            onClick: () => a(),
                            disabled: !r || n,
                            children: n ? "Loading more..." : r ? "Load More" : "No more to load."
                        })
                    })]
                })
            }

            function t$(e) {
                let {
                    postId: t
                } = e, s = (0, f.R)(e => e.setCurrentChatGroup), a = (0, e4.d)(e => e.pop), n = (0, e4.d)(e => e.push), {
                    data: r,
                    isLoading: l
                } = (0, k.a)({
                    queryKey: ["postDetail", t],
                    queryFn: () => e6(t),
                    enabled: !!t
                }), i = (e, t) => {
                    s(t.group.id), e.stopPropagation()
                };
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsxs)("div", {
                        className: "flex px-2 pt-6 py-2 gap-1 items-center",
                        children: [(0, v.jsx)("div", {
                            className: "rounded-full hover:bg-gray-100 p-2 cursor-pointer",
                            onClick: () => a(),
                            children: (0, v.jsx)(ti.Z, {
                                className: "w-5 h-5"
                            })
                        }), (0, v.jsx)("h3", {
                            className: "text-xl font-bold",
                            children: "Post"
                        })]
                    }), !r && !l && (0, v.jsx)("div", {
                        className: "mx-4 my-2 text-gray-500",
                        children: "The post does not exist or has been deleted by the author."
                    }), r && (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsxs)("div", {
                            className: "flex gap-2 items-center p-4",
                            children: [(0, v.jsx)("div", {
                                onClick: e => i(e, r.user),
                                children: (0, v.jsx)("img", {
                                    src: r.user.avatar || g.tU,
                                    className: "w-8 h-8 rounded-full"
                                })
                            }), (0, v.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, v.jsx)("div", {
                                    className: "truncate max-w-[200px]",
                                    children: r.user.name
                                }), (0, v.jsxs)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: ["@", r.user.twitterUsername]
                                })]
                            }), (0, v.jsx)(tH, {
                                postId: r.id
                            })]
                        }), "reply" === r.referencedType && r.referencedPost && (0, v.jsxs)("div", {
                            className: "text-sm text-gray-500 px-4 pb-2",
                            children: ["Replying to", " ", (0, v.jsxs)("span", {
                                className: " text-blue-400",
                                onClick: e => {
                                    var t;
                                    return i(e, null === (t = r.referencedPost) || void 0 === t ? void 0 : t.user)
                                },
                                children: ["@", r.referencedPost.user.twitterUsername]
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "mx-4",
                            children: [(0, v.jsx)(tC, {
                                text: r.text,
                                textState: r.textState
                            }), r.attachments && (0, v.jsx)(tM, {
                                data: r.attachments
                            })]
                        }), r.referencedPost && "quote" === r.referencedType && (0, v.jsxs)("div", {
                            className: "p-2 rounded-lg border my-2 mx-4",
                            children: [(0, v.jsxs)("div", {
                                className: "flex gap-1 items-center text-sm cursor-pointer",
                                onClick: e => {
                                    var t;
                                    return i(e, null === (t = r.referencedPost) || void 0 === t ? void 0 : t.user)
                                },
                                children: [(0, v.jsx)("img", {
                                    src: r.referencedPost.user.avatar || g.tU,
                                    className: "w-4 h-4 rounded-full"
                                }), (0, v.jsx)("span", {
                                    className: "font-bold text-black truncate max-w-[100px]",
                                    children: r.referencedPost.user.name
                                }), (0, v.jsxs)("span", {
                                    className: "truncate max-w-[100px]",
                                    children: ["@", r.referencedPost.user.twitterUsername]
                                }), (0, v.jsx)("span", {
                                    children: e0(1e3 * r.referencedPost.createdAt)
                                })]
                            }), (0, v.jsxs)("div", {
                                onClick: e => {
                                    (null == r ? void 0 : r.referencedId) && (n({
                                        type: e4.P.postDetail,
                                        data: r.referencedId
                                    }), e.stopPropagation())
                                },
                                className: "cursor-pointer",
                                children: [(0, v.jsx)(tC, {
                                    text: r.referencedPost.text,
                                    textState: r.referencedPost.textState
                                }), r.referencedPost.attachments && (0, v.jsx)(tM, {
                                    data: r.referencedPost.attachments
                                })]
                            })]
                        }), r.greenfieldSaved && (0, v.jsxs)("div", {
                            className: "text-sm px-4 mt-4 text-gray-500 flex gap-2 items-center italic",
                            children: [(0, v.jsx)("span", {
                                children: "Stored in BNB Greenfield."
                            }), (0, v.jsx)("a", {
                                href: "".concat(g.fk, "/view/").concat(r.greenfieldBucket, "/").concat(r.id),
                                target: "_blank",
                                children: (0, v.jsx)(td.Z, {
                                    className: "w-4 h-4 cursor-pointer hover:text-black"
                                })
                            }), (0, v.jsx)("a", {
                                href: "".concat(g.L0, "/tx/").concat(r.greenfieldTxHash),
                                target: "_blank",
                                children: (0, v.jsx)(tc.Z, {
                                    className: "w-4 h-4 cursor-pointer hover:text-black"
                                })
                            })]
                        }), (0, v.jsx)("div", {
                            className: "text-sm px-4 mt-4 text-gray-500",
                            children: (0, el.Z)((0, ei.Z)(r.createdAt), "K:mm a \xb7 MMM d, yyyy")
                        }), (0, v.jsxs)("div", {
                            className: "flex justify-between border-t border-b mx-4 my-4 py-2",
                            children: [(0, v.jsx)(tU, {
                                count: r.replyCount,
                                post: r
                            }), (0, v.jsx)(tE, {
                                count: r.repostCount,
                                post: r,
                                postId: r.id,
                                reposted: r.isReposted
                            }), (0, v.jsx)(tu, {
                                count: r.likeCount,
                                postId: r.id,
                                liked: r.isLiked
                            })]
                        }), t && (0, v.jsx)(tJ, {
                            postId: t
                        })]
                    })]
                })
            }
            var tW = s(46501),
                tX = s(78439);

            function t0() {
                let e = (0, f.R)(e => e.currentChatGroup),
                    t = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: s
                    } = (0, k.a)({
                        queryKey: ["groupMembers", null == e ? void 0 : e.id],
                        queryFn: () => (0, tX.Zw)(null == e ? void 0 : e.id)
                    });
                return (0, v.jsx)("div", {
                    children: null == s ? void 0 : s.map((e, s) => (0, v.jsxs)("div", {
                        className: "flex gap-2 items-center mb-6",
                        onClick: () => {
                            var s;
                            return t(null === (s = e.user.group) || void 0 === s ? void 0 : s.id)
                        },
                        children: [(0, v.jsx)("img", {
                            src: e.user.avatar || g.tU,
                            className: "w-12 h-12 rounded-2xl cursor-pointer object-cover"
                        }), (0, v.jsxs)("div", {
                            className: "flex-1 w-0",
                            children: [(0, v.jsx)("h3", {
                                className: "mb-1 font-medium truncate",
                                children: e.user.name
                            }), (0, v.jsxs)("div", {
                                className: "text-sm text-gray-500",
                                children: [(0, v.jsx)("span", {
                                    className: "font-bold text-black",
                                    children: e.balance
                                }), " ticket", e.balance > 1 ? "" : "s"]
                            })]
                        })]
                    }, e.id))
                })
            }
            let t1 = async e => {
                    let t = "/user/".concat(e, "/joined_group");
                    return await ew.n.get(t)
                },
                t2 = async e => {
                    let t = "/user/".concat(e, "/trades");
                    return await ew.n.get(t)
                },
                t4 = async (e, t) => {
                    let s = await ew.n.get("/user/".concat(e, "/posts?") + (t ? "sinceId=".concat(t) : ""));
                    return s
                };

            function t5() {
                let e = (0, f.R)(e => e.currentChatGroup),
                    t = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: s
                    } = (0, k.a)({
                        queryKey: ["userJoinedGroup", null == e ? void 0 : e.userId],
                        queryFn: () => t1(null == e ? void 0 : e.userId)
                    }),
                    a = (null == s ? void 0 : s.map(e => e.group.subjectId)) || [],
                    {
                        data: n
                    } = (0, w.sh)(a),
                    r = e => {
                        if (!n) return "";
                        let t = n[e];
                        return "success" !== t.status ? "" : (0, C.d)(t.result)
                    };
                return (0, v.jsx)("div", {
                    children: null == s ? void 0 : s.map((e, s) => {
                        var a, n, l, i, d;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6",
                            onClick: () => t(e.groupId),
                            children: [(0, v.jsx)("img", {
                                src: (null === (a = e.group.user) || void 0 === a ? void 0 : a.avatar) || (null === (n = e.group.future) || void 0 === n ? void 0 : n.twitterAvatar) || g.tU,
                                className: "w-12 h-12 rounded-2xl cursor-pointer object-cover"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h3", {
                                    className: "mb-1 font-medium truncate",
                                    children: (null === (l = e.group.user) || void 0 === l ? void 0 : l.name) || (null === (i = e.group.future) || void 0 === i ? void 0 : i.twitterName)
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [(0, v.jsx)("span", {
                                        className: "font-bold text-black",
                                        children: e.balance
                                    }), " ticket", e.balance > 1 ? "" : "s", ", ", null === (d = e.group) || void 0 === d ? void 0 : d.memberAmount, " members, ", r(s), g.Q6, " price"]
                                })]
                            })]
                        }, e.id)
                    })
                })
            }

            function t6() {
                let e = (0, f.R)(e => e.currentChatGroup),
                    t = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: s
                    } = (0, k.a)({
                        queryKey: ["groupActivity", null == e ? void 0 : e.id],
                        queryFn: () => (0, tX.K3)(null == e ? void 0 : e.id)
                    });
                return (0, v.jsx)("div", {
                    children: (0, v.jsx)("div", {
                        className: "mt-4",
                        children: null == s ? void 0 : s.map(e => {
                            var s, a, n, r, l, i, d, c, o, u;
                            return (0, v.jsxs)("div", {
                                className: "my-4 flex items-center gap-2",
                                children: [(0, v.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, v.jsx)("img", {
                                        src: (null === (s = e.traderUser) || void 0 === s ? void 0 : s.avatar) || g.tU,
                                        className: "w-10 h-10 rounded-2xl cursor-pointer object-cover",
                                        onClick: () => {
                                            var s, a;
                                            return t(null === (a = e.traderUser) || void 0 === a ? void 0 : null === (s = a.group) || void 0 === s ? void 0 : s.id)
                                        }
                                    }), (0, v.jsx)("img", {
                                        src: (null === (n = e.subjectGroup) || void 0 === n ? void 0 : null === (a = n.user) || void 0 === a ? void 0 : a.avatar) || (null === (l = e.subjectGroup) || void 0 === l ? void 0 : null === (r = l.future) || void 0 === r ? void 0 : r.twitterAvatar) || g.tU,
                                        className: "w-10 h-10 rounded-2xl -ml-2 cursor-pointer object-cover",
                                        onClick: () => {
                                            var s;
                                            return t(null === (s = e.subjectGroup) || void 0 === s ? void 0 : s.id)
                                        }
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex-1 w-0",
                                    children: [(0, v.jsx)("h5", {
                                        className: "font-medium cursor-pointer truncate",
                                        onClick: () => {
                                            var s, a;
                                            return t(null === (a = e.traderUser) || void 0 === a ? void 0 : null === (s = a.group) || void 0 === s ? void 0 : s.id)
                                        },
                                        children: null === (i = e.traderUser) || void 0 === i ? void 0 : i.name
                                    }), (0, v.jsxs)("h6", {
                                        className: "text-gray-500 text-sm",
                                        children: [e.isBuy ? "bought" : "sold", " ", e.ticketAmount, " ticket", "1" === e.ticketAmount ? "" : "s", " of", " "]
                                    }), (0, v.jsx)("h5", {
                                        className: "font-medium cursor-pointer truncate",
                                        onClick: () => {
                                            var s;
                                            return t(null === (s = e.subjectGroup) || void 0 === s ? void 0 : s.id)
                                        },
                                        children: (null === (c = e.subjectGroup) || void 0 === c ? void 0 : null === (d = c.user) || void 0 === d ? void 0 : d.name) || (null === (u = e.subjectGroup) || void 0 === u ? void 0 : null === (o = u.future) || void 0 === o ? void 0 : o.twitterName)
                                    }), (0, v.jsxs)("h6", {
                                        className: "text-gray-500 text-sm",
                                        children: [(0, C.d)(BigInt(e.tokenAmount)), " ", g.Q6, ", ", (0, v.jsx)("span", {
                                            children: e0(1e3 * e.createdAt)
                                        })]
                                    })]
                                })]
                            }, e.id)
                        })
                    })
                })
            }

            function t3() {
                let e = (0, f.R)(e => e.currentChatGroup),
                    t = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: s
                    } = (0, k.a)({
                        queryKey: ["userTrades", null == e ? void 0 : e.userId],
                        queryFn: () => t2(null == e ? void 0 : e.userId)
                    });
                return (0, v.jsx)("div", {
                    children: (0, v.jsx)("div", {
                        className: "mt-4",
                        children: null == s ? void 0 : s.map(e => {
                            var s, a, n, r, l, i, d, c, o, u;
                            return (0, v.jsxs)("div", {
                                className: "my-4 flex items-center gap-2",
                                children: [(0, v.jsxs)("div", {
                                    className: "flex",
                                    children: [(0, v.jsx)("img", {
                                        src: (null === (s = e.traderUser) || void 0 === s ? void 0 : s.avatar) || g.tU,
                                        className: "w-10 h-10 rounded-2xl cursor-pointer object-cover",
                                        onClick: () => {
                                            var s, a;
                                            return t(null === (a = e.traderUser) || void 0 === a ? void 0 : null === (s = a.group) || void 0 === s ? void 0 : s.id)
                                        }
                                    }), (0, v.jsx)("img", {
                                        src: (null === (n = e.subjectGroup) || void 0 === n ? void 0 : null === (a = n.user) || void 0 === a ? void 0 : a.avatar) || (null === (l = e.subjectGroup) || void 0 === l ? void 0 : null === (r = l.future) || void 0 === r ? void 0 : r.twitterAvatar) || g.tU,
                                        className: "w-10 h-10 rounded-2xl -ml-2 cursor-pointer object-cover",
                                        onClick: () => {
                                            var s;
                                            return t(null === (s = e.subjectGroup) || void 0 === s ? void 0 : s.id)
                                        }
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex-1 w-0",
                                    children: [(0, v.jsx)("h5", {
                                        className: "font-medium cursor-pointer truncate",
                                        onClick: () => {
                                            var s, a;
                                            return t(null === (a = e.traderUser) || void 0 === a ? void 0 : null === (s = a.group) || void 0 === s ? void 0 : s.id)
                                        },
                                        children: null === (i = e.traderUser) || void 0 === i ? void 0 : i.name
                                    }), (0, v.jsxs)("h6", {
                                        className: "text-gray-500 text-sm",
                                        children: [e.isBuy ? "bought" : "sold", " ", e.ticketAmount, " ticket", "1" === e.ticketAmount ? "" : "s", " of", " "]
                                    }), (0, v.jsx)("h5", {
                                        className: "font-medium cursor-pointer truncate",
                                        onClick: () => {
                                            var s;
                                            return t(null === (s = e.subjectGroup) || void 0 === s ? void 0 : s.id)
                                        },
                                        children: (null === (c = e.subjectGroup) || void 0 === c ? void 0 : null === (d = c.user) || void 0 === d ? void 0 : d.name) || (null === (u = e.subjectGroup) || void 0 === u ? void 0 : null === (o = u.future) || void 0 === o ? void 0 : o.twitterName)
                                    }), (0, v.jsxs)("h6", {
                                        className: "text-gray-500 text-sm",
                                        children: [(0, C.d)(BigInt(e.tokenAmount)), " ", g.Q6, ", ", (0, v.jsx)("span", {
                                            children: e0(1e3 * e.createdAt)
                                        })]
                                    })]
                                })]
                            }, e.id)
                        })
                    })
                })
            }
            let t8 = H.ZP.create(e => {
                let {
                    groupId: t
                } = e, s = (0, H.dd)(), a = window.location.protocol + "//" + window.location.host + "/groups/" + t;
                return (0, v.jsx)(Q.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:max-w-xl",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Share"
                            }), (0, v.jsxs)("div", {
                                children: [(0, v.jsx)("div", {
                                    children: "Copy the link below to share the group."
                                }), (0, v.jsxs)("div", {
                                    className: "my-2",
                                    children: [(0, v.jsx)("span", {
                                        className: "text-gray-500 text-sm",
                                        children: a
                                    }), (0, v.jsx)(G(), {
                                        text: a || "",
                                        children: (0, v.jsx)("a", {
                                            onClick: () => q.Am.success("Link copied to clipboard!"),
                                            className: "hover:bg-gray-200 p-2 bg-gray-100 rounded-full cursor-pointer inline-block align-bottom ml-2",
                                            children: (0, v.jsx)(B.Z, {
                                                className: "w-3 h-3"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            });

            function t7() {
                let e = (0, f.R)(e => e.currentChatGroup),
                    {
                        data: t,
                        fetchNextPage: s,
                        isFetchingNextPage: a,
                        hasNextPage: n
                    } = (0, F.N)({
                        queryKey: ["userPosts", null == e ? void 0 : e.userId],
                        queryFn: t => {
                            let {
                                pageParam: s = ""
                            } = t;
                            return t4(null == e ? void 0 : e.userId, s)
                        },
                        getNextPageParam: e => 20 === e.length && e[e.length - 1].id,
                        enabled: !!(null == e ? void 0 : e.userId)
                    });
                return (0, v.jsxs)("div", {
                    className: "pb-20 -mx-4",
                    children: [null == t ? void 0 : t.pages.map((e, t) => (0, v.jsx)("div", {
                        children: e.map(e => (0, v.jsx)(tY, {
                            data: e
                        }, e.id))
                    }, t)), (0, v.jsx)("div", {
                        className: "mt-10 flex justify-center",
                        children: (0, v.jsx)("button", {
                            className: "py-2 px-4 border rounded-md bg-gray-50 cursor-pointer text-sm hover:bg-gray-100 disabled:bg-transparent disabled:text-gray-500 disabled:border-0 disabled:cursor-default disabled:hover:bg-transparent",
                            onClick: () => s(),
                            disabled: !n || a,
                            children: a ? "Loading more..." : n ? "Load More" : "No more to load."
                        })
                    })]
                })
            }
            var t9 = s(13231),
                se = s(38926),
                st = s(41835),
                ss = s(56335);

            function sa(e) {
                var t, s, a, n, r, l, i, d, c, o;
                let {
                    userId: u
                } = e, m = (0, S.Og)(e => e.setShowSidebar), x = (0, S.Og)(e => e.setShowNavBar), h = (0, S.Og)(e => e.me), {
                    chain: p
                } = (0, se.LN)(), j = (0, e4.d)(e => e.pop), {
                    data: y
                } = (0, k.a)({
                    queryKey: ["groupDetail", u],
                    queryFn: () => (0, tX.MC)(u),
                    enabled: !!u
                }), {
                    data: f
                } = (0, w.j4)(null == y ? void 0 : y.subjectId, 1 n);
                return y ? (0, v.jsxs)("div", {
                    className: "relative min-h-screen",
                    children: [(0, v.jsx)("div", {
                        className: "flex px-2 py-6 gap-1 items-center",
                        children: (0, v.jsx)("div", {
                            className: "rounded-full hover:bg-gray-100 p-2 cursor-pointer",
                            onClick: j,
                            children: (0, v.jsx)(ti.Z, {
                                className: "w-5 h-5"
                            })
                        })
                    }), (0, v.jsx)("div", {
                        className: "hidden md:block absolute top-6 right-4",
                        children: (0, v.jsx)("a", {
                            className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer",
                            onClick: () => H.ZP.show(t8, {
                                groupId: y.id
                            }),
                            children: (0, v.jsx)(tW.Z, {
                                className: "w-4 h-4"
                            })
                        })
                    }), (0, v.jsxs)("div", {
                        className: "flex gap-2 px-4",
                        children: [(0, v.jsx)("div", {
                            className: "text-center",
                            children: y.user ? (0, v.jsxs)(v.Fragment, {
                                children: [(0, v.jsx)("img", {
                                    src: (null === (t = y.user) || void 0 === t ? void 0 : t.avatar) || g.tU,
                                    className: "w-12 h-12 rounded-2xl object-cover"
                                }), (0, v.jsx)("span", {
                                    className: "text-xs rounded bg-[#1296db] text-white px-1 py-0.5",
                                    children: "Spot"
                                })]
                            }) : (0, v.jsxs)(v.Fragment, {
                                children: [(0, v.jsx)("img", {
                                    src: (null === (s = y.future) || void 0 === s ? void 0 : s.twitterAvatar) || g.tU,
                                    className: "w-12 h-12 rounded-2xl object-cover"
                                }), (0, v.jsx)("span", {
                                    className: "text-xs rounded bg-[#d4237a] text-white px-1 py-0.5",
                                    children: "Futures"
                                })]
                            })
                        }), (0, v.jsxs)("div", {
                            className: "flex-1",
                            children: [(0, v.jsx)("h4", {
                                className: "text-lg font-bold max-w-[240px] truncate",
                                children: (null === (a = y.user) || void 0 === a ? void 0 : a.name) || (null === (n = y.future) || void 0 === n ? void 0 : n.twitterName)
                            }), (0, v.jsxs)("h5", {
                                className: "text-sm text-gray-500",
                                children: ["Ticket Price ", void 0 !== f && (0, C.d)(f), " ", g.Q6]
                            })]
                        }), !y.user && (0, v.jsx)("div", {
                            className: "mt-1.5",
                            children: (0, v.jsx)(t9.Z, {
                                twitterUsername: null === (r = y.future) || void 0 === r ? void 0 : r.twitterUsername,
                                price: (0, C.d)(f || 0 n),
                                futureId: null === (l = y.future) || void 0 === l ? void 0 : l.id
                            })
                        })]
                    }), ((null === (i = y.user) || void 0 === i ? void 0 : i.bio) || (null === (d = y.future) || void 0 === d ? void 0 : d.twitterBio)) && (0, v.jsx)("div", {
                        className: "mt-4 mx-4 border p-2 bg-gray-50 rounded-lg",
                        children: (0, v.jsx)("span", {
                            className: "break-words text-sm",
                            children: (null === (c = y.user) || void 0 === c ? void 0 : c.bio) || (null === (o = y.future) || void 0 === o ? void 0 : o.twitterBio)
                        })
                    }), (0, v.jsxs)("div", {
                        className: "px-4 mt-4",
                        children: [y.user && (0, v.jsxs)(ep.O.Group, {
                            children: [(0, v.jsxs)(ep.O.List, {
                                className: "grid grid-cols-2 gap-4 mb-6 text-sm",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "outline-none col-span-2",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Posts"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Members"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Joined"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Activity"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Trades"
                                    })
                                })]
                            }), (0, v.jsxs)(ep.O.Panels, {
                                className: "pb-16",
                                children: [(0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(t7, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(t0, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(t5, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(t6, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(t3, {})
                                })]
                            })]
                        }), !y.user && y.future && (0, v.jsxs)(ep.O.Group, {
                            children: [(0, v.jsxs)(ep.O.List, {
                                className: "grid grid-cols-2 gap-4 mb-6 text-sm",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Members"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Activity"
                                    })
                                })]
                            }), (0, v.jsxs)(ep.O.Panels, {
                                className: "pb-16",
                                children: [(0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(t0, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(t6, {})
                                })]
                            })]
                        })]
                    }), (0, v.jsxs)("div", {
                        className: "fixed bottom-4 left-4 right-4 block md:hidden bg-white pt-2",
                        children: [(0, v.jsxs)("div", {
                            className: "flex gap-4 justify-between w-full mb-4",
                            children: [(0, v.jsx)(V.zx, {
                                disabled: !h || !p || (null == p ? void 0 : p.unsupported),
                                className: "font-bold px-10 rounded-full w-full",
                                onClick: () => H.ZP.show(st.Z),
                                variant: "secondary",
                                children: "Buy"
                            }), (0, v.jsx)(V.zx, {
                                disabled: !h || !p || (null == p ? void 0 : p.unsupported),
                                className: "font-bold px-10 rounded-full w-full",
                                onClick: () => H.ZP.show(ss.Z),
                                variant: "destructive",
                                children: "Sell"
                            })]
                        }), (0, v.jsx)(V.zx, {
                            onClick: () => {
                                m(!1), x(!1)
                            },
                            className: "w-full rounded-full text-lg py-6",
                            children: "Chat"
                        })]
                    })]
                }) : (0, v.jsx)(v.Fragment, {})
            }

            function sn(e) {
                let {
                    children: t
                } = e, [s, a] = (0, y.useState)(!1);
                return (0, y.useEffect)(() => {
                    a(!0)
                }, []), (0, v.jsx)(ej.u, {
                    show: s,
                    enter: "transition-all duration-300",
                    enterFrom: "opacity-0 -ml-40",
                    enterTo: "opacity-100 ml-0",
                    leave: "transition-opacity duration-150",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: t
                })
            }

            function sr() {
                let e = (0, e4.d)(e => e.views);
                return (0, v.jsx)("div", {
                    children: e.map((t, s) => (0, v.jsxs)("div", {
                        hidden: s !== e.length - 1,
                        children: [t.type === e4.P.postDetail && (0, v.jsx)(sn, {
                            children: (0, v.jsx)(t$, {
                                postId: t.data
                            })
                        }), t.type === e4.P.userDetail && (0, v.jsx)(sn, {
                            children: (0, v.jsx)(sa, {
                                userId: t.data
                            })
                        })]
                    }, s))
                })
            }

            function sl() {
                (0, S.Og)(e => e.me);
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["topGroup", "future"],
                        queryFn: () => (0, tX.Kz)("future")
                    }),
                    s = (null == t ? void 0 : t.map(e => e.subjectId)) || [],
                    {
                        data: a
                    } = (0, w.sh)(s),
                    n = e => {
                        if (!a) return "";
                        let t = a[e];
                        return "success" !== t.status ? "" : (0, C.d)(t.result)
                    };
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => {
                        var a, r, l, i, d, c;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6 w-full",
                            onClick: () => e(t.id),
                            children: [(0, v.jsx)("img", {
                                src: (null === (a = t.future) || void 0 === a ? void 0 : a.twitterAvatar) || g.tU,
                                className: "rounded-2xl w-12 h-12 cursor-pointer object-cover shrink-0"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h3", {
                                    className: "mb-0.5 font-medium truncate",
                                    children: null === (r = t.future) || void 0 === r ? void 0 : r.twitterName
                                }), (null === (l = t.future) || void 0 === l ? void 0 : l.twitterBio) && (0, v.jsx)("p", {
                                    className: "text-sm text-gray-700 truncate w-[250px]",
                                    children: null === (i = t.future) || void 0 === i ? void 0 : i.twitterBio
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [t.supply, " tickets, ", t.memberAmount, " members, ", n(s), " ", g.Q6, " price"]
                                })]
                            }), (0, v.jsx)(t9.Z, {
                                twitterUsername: null === (d = t.future) || void 0 === d ? void 0 : d.twitterUsername,
                                futureId: null === (c = t.future) || void 0 === c ? void 0 : c.id,
                                price: n(s)
                            })]
                        }, t.id)
                    })
                })
            }
            var si = s(26479),
                sd = s(73051),
                sc = s(15454);
            let so = [{
                    stateMutability: "nonpayable",
                    type: "constructor",
                    inputs: [{
                        name: "futureFee",
                        internalType: "uint256",
                        type: "uint256"
                    }]
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
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "claim",
                    outputs: []
                }, {
                    stateMutability: "payable",
                    type: "function",
                    inputs: [],
                    name: "createFuture",
                    outputs: []
                }, {
                    stateMutability: "view",
                    type: "function",
                    inputs: [],
                    name: "createFutureFee",
                    outputs: [{
                        name: "",
                        internalType: "uint256",
                        type: "uint256"
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
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [],
                    name: "renounceOwnership",
                    outputs: []
                }, {
                    stateMutability: "nonpayable",
                    type: "function",
                    inputs: [{
                        name: "futureFee",
                        internalType: "uint256",
                        type: "uint256"
                    }],
                    name: "setCreateFutureFee",
                    outputs: []
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
                }],
                su = H.ZP.create(() => {
                    var e, t, s, a;
                    let n = (0, H.dd)(),
                        [r, l] = (0, y.useState)(""),
                        [i, d] = (0, y.useState)(),
                        [c, o] = (0, y.useState)(),
                        [u, m] = (0, y.useState)(!1),
                        [x, h] = (0, y.useState)(!1),
                        [p, j] = (0, y.useState)(""),
                        {
                            data: N
                        } = (0, se.do)({
                            address: g.qk,
                            abi: so,
                            functionName: "createFutureFee"
                        }),
                        k = (0, f.R)(e => e.setCurrentChatGroup),
                        {
                            writeAsync: P
                        } = (0, w.lt)(),
                        {
                            writeAsync: T
                        } = (0, se.GG)({
                            address: g.qk,
                            abi: so,
                            functionName: "createFuture"
                        }),
                        S = async () => {
                            if (r.trim()) {
                                d(void 0), o(void 0), j("");
                                try {
                                    let e = await (0, sc.pY)(r);
                                    if (e.user) o(e);
                                    else {
                                        d(e);
                                        let t = await (0, sc.Hm)(e.id);
                                        t && j(t)
                                    }
                                } catch (e) {
                                    q.Am.error(e.message)
                                }
                            }
                        },
                        F = async () => {
                            if (i) try {
                                m(!0);
                                let {
                                    hash: e
                                } = await T({
                                    value: N
                                }), t = await (0, sd.Mn)({
                                    hash: e
                                }), s = await (0, sc.GA)(t.transactionHash, null == i ? void 0 : i.id);
                                j(s), q.Am.success("Paid.")
                            } catch (e) {
                                q.Am.error((0, si.j)(e))
                            } finally {
                                m(!1)
                            }
                        },
                        Z = async () => {
                            if (p) try {
                                h(!0);
                                let {
                                    hash: e
                                } = await P({
                                    args: [!1, p]
                                }), t = await (0, sd.Mn)({
                                    hash: e
                                });
                                await (0, O.Us)(t.transactionHash), q.Am.success("Future created."), n.remove()
                            } catch (e) {
                                q.Am.error((0, si.j)(e))
                            } finally {
                                h(!1)
                            }
                        },
                        A = e => {
                            k(e), n.remove()
                        };
                    return (0, v.jsx)(Q.V, {
                        open: n.visible,
                        onClose: () => {},
                        className: "relative z-50",
                        children: (0, v.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center bg-black/70",
                            children: (0, v.jsxs)("div", {
                                className: "bg-white rounded-2xl p-6 pb-10 relative w-[80%] md:w-[500px]",
                                children: [(0, v.jsx)("a", {
                                    className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                    onClick: () => n.remove(),
                                    children: (0, v.jsx)(Y.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), (0, v.jsx)("h3", {
                                    className: "font-bold text-lg mb-4",
                                    children: "Create Future"
                                }), (0, v.jsx)("div", {
                                    className: "mb-4 text-gray-500 text-sm",
                                    children: 'Please enter the Twitter username of the person you want to search for, without the "@" symbol, for example: BNBCHAIN.'
                                }), (0, v.jsxs)("div", {
                                    className: "relative",
                                    children: [(0, v.jsx)("input", {
                                        className: "flex-1 border-2 rounded-full py-2 px-4 border-gray-200 outline-0 border-solid w-full",
                                        value: r,
                                        onChange: e => l(e.target.value),
                                        placeholder: "Search"
                                    }), (0, v.jsx)("div", {
                                        className: "absolute right-2 top-1.5 rounded-full p-2 bg-primary text-white hover:bg-primary/80 cursor-pointer",
                                        onClick: S,
                                        children: (0, v.jsx)(b.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })]
                                }), i && (0, v.jsxs)("div", {
                                    className: "flex justify-center flex-col items-center py-4",
                                    children: [(0, v.jsx)("img", {
                                        src: i.twitterAvatar,
                                        alt: "",
                                        className: "w-10 h-10 rounded-full"
                                    }), i.group && (0, v.jsx)("span", {
                                        className: "text-xs rounded bg-[#d4237a] text-white px-1 py-0.5 mt-1",
                                        children: "Futures"
                                    }), (0, v.jsxs)("div", {
                                        className: "py-2",
                                        children: [(0, v.jsx)("span", {
                                            className: "font-bold",
                                            children: i.twitterName
                                        }), (0, v.jsxs)("span", {
                                            className: "text-gray-500",
                                            children: ["@", i.twitterUsername]
                                        })]
                                    }), (0, v.jsx)("div", {
                                        className: "px-10 pb-4 text-center text-gray-500 text-sm",
                                        children: i.twitterBio
                                    }), i.group && (0, v.jsx)("div", {
                                        children: (0, v.jsx)(V.zx, {
                                            onClick: () => {
                                                var e;
                                                return A(null == i ? void 0 : null === (e = i.group) || void 0 === e ? void 0 : e.id)
                                            },
                                            children: "View"
                                        })
                                    }), !i.group && (0, v.jsxs)(v.Fragment, {
                                        children: [(0, v.jsxs)("div", {
                                            className: "flex items-center gap-4",
                                            children: [(0, v.jsx)(V.fl, {
                                                loading: u,
                                                onClick: F,
                                                children: "Pay"
                                            }), (0, v.jsxs)("div", {
                                                className: "text-primary flex gap-1 items-center ml-1 ".concat(p ? "" : "opacity-50"),
                                                children: [(0, v.jsx)("div", {
                                                    className: "w-1 h-1 bg-primary rounded-full"
                                                }), (0, v.jsx)("div", {
                                                    className: "w-1 h-1 bg-primary rounded-full"
                                                }), (0, v.jsx)("div", {
                                                    className: "w-1 h-1 bg-primary rounded-full"
                                                }), (0, v.jsx)("div", {
                                                    className: "w-1 h-1 bg-primary rounded-full"
                                                }), (0, v.jsx)("div", {
                                                    className: "w-1 h-1 bg-primary rounded-full"
                                                }), (0, v.jsx)("div", {
                                                    className: "w-1 h-1 bg-primary rounded-full"
                                                }), (0, v.jsx)(eZ.Z, {})]
                                            }), (0, v.jsx)(V.fl, {
                                                loading: x,
                                                onClick: Z,
                                                disabled: !p,
                                                children: "Create"
                                            })]
                                        }), (0, v.jsxs)("div", {
                                            className: "text-sm text-gray-500 pt-4 text-center",
                                            children: ["We charge ", (0, C.d)(N || 0 n), " ", g.Q6, " for the creation of futures."]
                                        })]
                                    })]
                                }), c && (0, v.jsxs)("div", {
                                    className: "flex justify-center flex-col items-center py-4",
                                    children: [(0, v.jsx)("img", {
                                        src: null === (e = c.user) || void 0 === e ? void 0 : e.avatar,
                                        alt: "",
                                        className: "w-10 h-10 rounded-full"
                                    }), (0, v.jsx)("span", {
                                        className: "text-xs rounded bg-[#1296db] text-white px-1 py-0.5 mt-1",
                                        children: "Spot"
                                    }), (0, v.jsxs)("div", {
                                        className: "py-2",
                                        children: [(0, v.jsx)("span", {
                                            className: "font-bold",
                                            children: null === (t = c.user) || void 0 === t ? void 0 : t.name
                                        }), (0, v.jsxs)("span", {
                                            className: "text-gray-500",
                                            children: ["@", null === (s = c.user) || void 0 === s ? void 0 : s.twitterUsername]
                                        })]
                                    }), (0, v.jsx)("div", {
                                        className: "px-10 pb-4 text-center text-gray-500",
                                        children: null === (a = c.user) || void 0 === a ? void 0 : a.bio
                                    }), (0, v.jsx)("div", {
                                        children: (0, v.jsx)(V.zx, {
                                            onClick: () => A(c.id),
                                            children: "View"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                });

            function sm() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["recentlyCreatedGroup", "future"],
                        queryFn: () => (0, tX.ev)("future")
                    }),
                    s = (null == t ? void 0 : t.map(e => e.subjectId)) || [],
                    {
                        data: a
                    } = (0, w.sh)(s),
                    n = e => {
                        if (!a) return "";
                        let t = a[e];
                        return "success" !== t.status ? "" : (0, C.d)(t.result)
                    };
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => {
                        var a, r;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6",
                            onClick: () => e(t.id),
                            children: [(0, v.jsx)("img", {
                                src: (null === (a = t.future) || void 0 === a ? void 0 : a.twitterAvatar) || g.tU,
                                className: "rounded-2xl w-12 h-12 cursor-pointer object-cover shrink-0"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h3", {
                                    className: "mb-1 font-medium truncate",
                                    children: null === (r = t.future) || void 0 === r ? void 0 : r.twitterName
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [null == t ? void 0 : t.memberAmount, " members, ", n(s), " ", g.Q6, " price"]
                                })]
                            })]
                        }, t.id)
                    })
                })
            }
            var sx = s(66085);

            function sh() {
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsxs)("div", {
                        className: "my-4 text-sm",
                        children: [(0, v.jsx)("span", {
                            className: "pr-4",
                            children: "1."
                        }), "If a group subject has not signed up for Friend3 yet, you can still purchase Futures for the group subject which later turn in Spot when they register."]
                    }), (0, v.jsxs)("div", {
                        className: "my-4 text-sm",
                        children: [(0, v.jsx)("span", {
                            className: "pr-4",
                            children: "2."
                        }), "Everyone can create any futures you want to create, as long as the future subject has not registered on the platform or has not been created by someone else. Your creation is equivalent to automatically buying the future subject’s first ticket."]
                    }), (0, v.jsxs)("div", {
                        className: "my-4 text-sm",
                        children: [(0, v.jsx)("span", {
                            className: "pr-4",
                            children: "3."
                        }), "5% of each trading goes to the group owner, 1% goes to the inviter, 5% is divided among the ticket holders of the same group, and 4% goes to the protocol. If it is a futures, group owners' revenue is temporarily stored in the platform until the futures subject registers Friend3, then the futures subject can take all of this revenue. If six months have passed and the futures subject still hasn't come, the ticket holders of the group will divide this fee, and new trading fee afterwards will also be divided among the ticket holders of the group."]
                    }), (0, v.jsxs)("div", {
                        className: "my-4 text-sm",
                        children: [(0, v.jsx)("span", {
                            className: "pr-4",
                            children: "4."
                        }), "Invite future subject to join Friend3. They’ll get all the accumulated trading fees to date, and you’ll get a 20% reward(This 20% reward is an additional allocation from the platform's revenue)."]
                    })]
                })
            }

            function sp() {
                let e = (0, S.Og)(e => e.me),
                    t = (0, ev.ac)("only screen and (max-width : 768px)");
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsxs)("div", {
                        className: "text-2xl font-bold px-4 py-6 flex justify-between",
                        children: ["Futures", e && !t && (0, v.jsx)("div", {
                            className: "",
                            children: (0, v.jsxs)(V.zx, {
                                className: "rounded-full px-4 gap-2",
                                size: "sm",
                                onClick: () => H.ZP.show(su),
                                children: ["Create Futures", (0, v.jsx)(sx.Z, {
                                    className: "w-4 h-4"
                                })]
                            })
                        })]
                    }), (0, v.jsx)("div", {
                        className: "px-4",
                        children: (0, v.jsxs)(ep.O.Group, {
                            children: [(0, v.jsxs)(ep.O.List, {
                                className: "grid grid-cols-2 gap-4 mb-6 text-sm",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Top Futures"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Recently Created"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none col-span-2",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Rule"
                                    })
                                })]
                            }), (0, v.jsxs)(ep.O.Panels, {
                                children: [(0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(sl, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(sm, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(sh, {})
                                })]
                            })]
                        })
                    }), e && t && (0, v.jsx)("div", {
                        className: "fixed left-0 right-0 bottom-4 flex justify-center md:left-[240px] md:justify-start md:right-auto",
                        children: (0, v.jsxs)(V.zx, {
                            className: "rounded-full px-10 gap-2",
                            onClick: () => H.ZP.show(su),
                            children: ["Create Futures", (0, v.jsx)(sx.Z, {
                                className: "w-4 h-4"
                            })]
                        })
                    })]
                })
            }

            function sj() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["topGroup", "spot"],
                        queryFn: () => (0, tX.Kz)("spot")
                    }),
                    s = (null == t ? void 0 : t.map(e => e.subjectId)) || [],
                    {
                        data: a
                    } = (0, w.sh)(s),
                    n = e => {
                        if (!a) return "";
                        let t = a[e];
                        return "success" !== t.status ? "" : (0, C.d)(t.result)
                    };
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => {
                        var a, r, l, i;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6 w-full",
                            onClick: () => e(t.id),
                            children: [(0, v.jsx)("img", {
                                src: (null === (a = t.user) || void 0 === a ? void 0 : a.avatar) || g.tU,
                                className: "rounded-2xl w-12 h-12 cursor-pointer object-cover shrink-0"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h3", {
                                    className: "mb-0.5 font-medium truncate",
                                    children: null === (r = t.user) || void 0 === r ? void 0 : r.name
                                }), (null === (l = t.user) || void 0 === l ? void 0 : l.bio) && (0, v.jsx)("p", {
                                    className: "text-sm text-gray-700 truncate w-[280px]",
                                    children: null === (i = t.user) || void 0 === i ? void 0 : i.bio
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [t.supply, " tickets, ", t.memberAmount, " members, ", n(s), " ", g.Q6, " price"]
                                })]
                            })]
                        }, t.id)
                    })
                })
            }

            function sv() {
                let e = (0, f.R)(e => e.setCurrentChatGroup),
                    {
                        data: t
                    } = (0, k.a)({
                        queryKey: ["recentlyCreatedGroup", "spot"],
                        queryFn: () => (0, tX.ev)("spot")
                    }),
                    s = (null == t ? void 0 : t.map(e => e.subjectId)) || [],
                    {
                        data: a
                    } = (0, w.sh)(s),
                    n = e => {
                        if (!a) return "";
                        let t = a[e];
                        return "success" !== t.status ? "" : (0, C.d)(t.result)
                    };
                return (0, v.jsx)("div", {
                    children: null == t ? void 0 : t.map((t, s) => {
                        var a, r;
                        return (0, v.jsxs)("div", {
                            className: "flex gap-2 items-center mb-6",
                            onClick: () => e(t.id),
                            children: [(0, v.jsx)("img", {
                                src: (null === (a = t.user) || void 0 === a ? void 0 : a.avatar) || g.tU,
                                className: "rounded-2xl w-12 h-12 cursor-pointer object-cover shrink-0"
                            }), (0, v.jsxs)("div", {
                                className: "flex-1 w-0",
                                children: [(0, v.jsx)("h3", {
                                    className: "mb-1 font-medium truncate",
                                    children: null === (r = t.user) || void 0 === r ? void 0 : r.name
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [t.memberAmount, " members, ", n(s), " ", g.Q6, " price"]
                                })]
                            })]
                        }, t.id)
                    })
                })
            }
            var sy = s(29891),
                sg = s(82124);
            let sf = y.forwardRef((e, t) => {
                let {
                    className: s,
                    ...a
                } = e;
                return (0, v.jsxs)(sy.fC, {
                    ref: t,
                    className: (0, sg.cn)("relative flex w-full touch-none select-none items-center", s),
                    ...a,
                    children: [(0, v.jsx)(sy.fQ, {
                        className: "relative h-2 w-full grow overflow-hidden rounded-full bg-gray-100",
                        children: (0, v.jsx)(sy.e6, {
                            className: "absolute h-full bg-primary"
                        })
                    }), (0, v.jsx)(sy.bU, {
                        className: "block h-5 w-5 rounded-full border-2 border-primary bg-white ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
                    })]
                })
            });
            sf.displayName = sy.fC.displayName;
            var sb = s(15537),
                sN = s.n(sb),
                sw = s(80233),
                sk = s(67819),
                sC = s(29778),
                sP = s(69514),
                sT = s(2598);
            let sO = H.ZP.create(() => {
                let e = (0, H.dd)(),
                    [t, s] = (0, y.useState)(1600),
                    a = (0, ev.ac)("only screen and (max-width : 768px)"),
                    n = sN()(0, 41).map(e => {
                        let s = 0 === e ? 0 : (e - 1) * e * (2 * (e - 1) + 1) / 6,
                            a = 0 === e ? 0 : (e - 1 + 1) * (e + 1) * (2 * (e - 1 + 1) + 1) / 6,
                            n = a - s,
                            r = n / t;
                        return console.log(s, a, n, e * e, r, e * e / t), {
                            tickets: e,
                            price: r
                        }
                    });
                return (0, v.jsx)(Q.V, {
                    open: e.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 pb-10 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => e.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Add group"
                            }), (0, v.jsx)("div", {
                                className: "mb-2 text-gray-500 text-sm",
                                children: "Every qualified user can create multiple groups, create a new group for a specific topic, users can buy and sell new trophies for."
                            }), (0, v.jsxs)("div", {
                                className: "mb-2",
                                children: [(0, v.jsx)("h3", {
                                    children: "Group name"
                                }), (0, v.jsx)("input", {
                                    className: "border p-2 rounded-lg w-full text-sm md:text-base",
                                    type: "text",
                                    placeholder: "Example: Trading, Gossip, News"
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "mb-2",
                                children: [(0, v.jsx)("h3", {
                                    children: "Bonding curve"
                                }), (0, v.jsx)("div", {
                                    className: "text-sm text-gray-500",
                                    children: "A bonding curve is the rate which your tickets increase in price. The higher the bonding curve, the more expensive your tickets will be."
                                }), (0, v.jsx)("div", {
                                    className: "my-2",
                                    children: (0, v.jsxs)(sw.w, {
                                        width: a ? 250 : 400,
                                        height: a ? 200 : 250,
                                        data: n,
                                        children: [(0, v.jsx)(sk.q, {
                                            strokeDasharray: "3 3"
                                        }), (0, v.jsx)(sC.K, {
                                            dataKey: "tickets",
                                            className: "text-xs"
                                        }), (0, v.jsx)(sP.B, {
                                            className: "text-xs",
                                            ticks: [0, 1, 2, 3, 4]
                                        }), (0, v.jsx)(sT.x, {
                                            dataKey: "price",
                                            stroke: "#9b4aff",
                                            dot: !1
                                        })]
                                    })
                                }), (0, v.jsx)("div", {
                                    className: "font-bold",
                                    children: "Group Price (BNB) = S ^ 2 / k"
                                }), (0, v.jsxs)("div", {
                                    className: "my-2 flex gap-2 text-sm",
                                    children: [(0, v.jsx)("span", {
                                        children: "500"
                                    }), (0, v.jsx)(sf, {
                                        value: [t],
                                        onValueChange: e => s(e[0]),
                                        max: 3e3,
                                        min: 500,
                                        step: 1
                                    }), (0, v.jsx)("span", {
                                        children: "3000"
                                    })]
                                })]
                            }), (0, v.jsx)("div", {
                                className: "flex justify-center items-center mt-6",
                                children: (0, v.jsx)(V.zx, {
                                    onClick: () => q.Am.info("Coming soon!"),
                                    children: "Create"
                                })
                            })]
                        })
                    })
                })
            });

            function sS() {
                let e = (0, S.Og)(e => e.me),
                    t = (0, ev.ac)("only screen and (max-width : 768px)");
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsxs)("div", {
                        className: "text-2xl font-bold px-4 py-6 flex justify-between",
                        children: ["Spot", e && !t && (0, v.jsx)("div", {
                            className: "",
                            children: (0, v.jsxs)(V.zx, {
                                className: "rounded-full px-4 gap-2",
                                size: "sm",
                                onClick: () => H.ZP.show(sO),
                                children: ["Create Group", (0, v.jsx)(sx.Z, {
                                    className: "w-4 h-4"
                                })]
                            })
                        })]
                    }), (0, v.jsx)("div", {
                        className: "px-4",
                        children: (0, v.jsxs)(ep.O.Group, {
                            children: [(0, v.jsxs)(ep.O.List, {
                                className: "grid grid-cols-2 gap-4 mb-6 text-sm",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Top Spot"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("div", {
                                        className: "hl-selected:bg-primary hl-selected:text-white hl-selected:shadow-primary/50 hl-not-selected:bg-gray-100 hl-not-selected:text-gray-900 hl-not-selected:shadow-white/50 rounded-full py-1.5 font-bold shadow-md hover:bg-opacity-80 w-full",
                                        children: "Recently Joined"
                                    })
                                })]
                            }), (0, v.jsxs)(ep.O.Panels, {
                                children: [(0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(sj, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(sv, {})
                                })]
                            })]
                        })
                    }), e && t && (0, v.jsx)("div", {
                        className: "fixed left-0 right-0 bottom-4 flex justify-center md:left-[240px] md:justify-start md:right-auto",
                        children: (0, v.jsxs)(V.zx, {
                            className: "rounded-full px-10 gap-2",
                            onClick: () => H.ZP.show(sO),
                            children: ["Create Group", (0, v.jsx)(sx.Z, {
                                className: "w-4 h-4"
                            })]
                        })
                    })]
                })
            }
            let sF = H.ZP.create(() => {
                let e = (0, H.dd)(),
                    t = (0, S.Og)(e => e.me),
                    [s, a] = (0, y.useState)(""),
                    [n, r] = (0, y.useState)(""),
                    [l, i] = (0, y.useState)(!1),
                    [d, c] = (0, y.useState)(),
                    o = (0, e4.d)(e => e.push),
                    u = async () => {
                        try {
                            let t;
                            i(!0), d && (t = await tl(d.file));
                            let a = await e8({
                                text: (0, eb.yQ)(s),
                                textState: s ? n : "",
                                image: t
                            });
                            q.Am.success((0, v.jsxs)("div", {
                                className: "text-center",
                                children: [(0, v.jsx)("span", {
                                    children: "Your post was sent."
                                }), (0, v.jsx)("span", {
                                    className: "underline font-bold ml-1",
                                    onClick: () => o({
                                        type: e4.P.postDetail,
                                        data: a
                                    }),
                                    children: "View"
                                })]
                            }), {
                                position: "top-center"
                            }), e.remove()
                        } catch (e) {} finally {
                            i(!1)
                        }
                    };
                return (0, v.jsx)(Q.V, {
                    open: e.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-4 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => e.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsxs)("div", {
                                className: "flex gap-2 mt-10",
                                children: [(0, v.jsx)("img", {
                                    className: "w-8 h-8 rounded-full",
                                    src: (null == t ? void 0 : t.avatar) || g.tU
                                }), (0, v.jsx)("div", {
                                    className: "flex-1 py-1.5",
                                    children: (0, v.jsx)(tO, {
                                        onInputChange: (e, t) => {
                                            a(e), r(t)
                                        },
                                        placeholder: "What is happening?!"
                                    })
                                })]
                            }), d && (0, v.jsx)(tR, {
                                image: d.dataURL,
                                onRemove: () => c(void 0)
                            }), (0, v.jsxs)("div", {
                                className: "mt-4 flex justify-end items-center gap-2",
                                children: [(0, v.jsx)("div", {
                                    className: "flex-1 justify-start flex",
                                    children: (0, v.jsx)(tA, {
                                        onSelect: e => {
                                            c(e)
                                        }
                                    })
                                }), s.length > 140 && (0, v.jsxs)("div", {
                                    className: "text-right text-sm text-gray-500",
                                    children: [s.length, "/160"]
                                }), (0, v.jsx)(V.fl, {
                                    onClick: u,
                                    className: "rounded-full py-0 h-9",
                                    loading: l,
                                    disabled: "" === s && !d || s.length > 160,
                                    children: "Post"
                                })]
                            })]
                        })
                    })
                })
            });

            function sZ() {
                let {
                    data: e,
                    fetchNextPage: t,
                    isFetchingNextPage: s,
                    hasNextPage: a
                } = (0, F.N)({
                    queryKey: ["explorePosts"],
                    queryFn: e => {
                        let {
                            pageParam: t = ""
                        } = e;
                        return e5(t)
                    },
                    getNextPageParam: e => 20 === e.length && e[e.length - 1].id
                });
                return (0, v.jsxs)("div", {
                    className: "pb-20",
                    children: [null == e ? void 0 : e.pages.map((e, t) => (0, v.jsx)("div", {
                        children: e.map(e => (0, v.jsx)(tY, {
                            data: e
                        }, e.id))
                    }, t)), (0, v.jsx)("div", {
                        className: "mt-10 flex justify-center",
                        children: (0, v.jsx)("button", {
                            className: "py-2 px-4 border rounded-md bg-gray-50 cursor-pointer text-sm hover:bg-gray-100 disabled:bg-transparent disabled:text-gray-500 disabled:border-0 disabled:cursor-default disabled:hover:bg-transparent",
                            onClick: () => t(),
                            disabled: !a || s,
                            children: s ? "Loading more..." : a ? "Load More" : "No more to load."
                        })
                    })]
                })
            }

            function sA() {
                let e = (0, S.Og)(e => e.me),
                    {
                        data: t,
                        fetchNextPage: s,
                        isFetchingNextPage: a,
                        hasNextPage: n
                    } = (0, F.N)({
                        queryKey: ["myPosts", null == e ? void 0 : e.id],
                        queryFn: t => {
                            let {
                                pageParam: s = ""
                            } = t;
                            return t4(null == e ? void 0 : e.id, s)
                        },
                        getNextPageParam: e => 20 === e.length && e[e.length - 1].id,
                        enabled: !!e
                    });
                return e ? (0, v.jsxs)("div", {
                    className: "pb-20",
                    children: [null == t ? void 0 : t.pages.map((e, t) => (0, v.jsx)("div", {
                        children: e.map(e => (0, v.jsx)(tY, {
                            data: e
                        }, e.id))
                    }, t)), (0, v.jsx)("div", {
                        className: "mt-10 flex justify-center",
                        children: (0, v.jsx)("button", {
                            className: "py-2 px-4 border rounded-md bg-gray-50 cursor-pointer text-sm hover:bg-gray-100 disabled:bg-transparent disabled:text-gray-500 disabled:border-0 disabled:cursor-default disabled:hover:bg-transparent",
                            onClick: () => s(),
                            disabled: !n || a,
                            children: a ? "Loading more..." : n ? "Load More" : "No more to load."
                        })
                    })]
                }) : (0, v.jsx)("div", {
                    children: (0, v.jsxs)("h4", {
                        className: "py-6 justify-center text-gray-500 flex gap-2 items-center",
                        children: [(0, v.jsx)(Z.Z, {
                            className: "w-4 h-4"
                        }), (0, v.jsx)("span", {
                            children: "Please sign in."
                        })]
                    })
                })
            }

            function sI() {
                let e = (0, S.Og)(e => e.me);
                return (0, v.jsxs)("div", {
                    children: [(0, v.jsxs)("div", {
                        children: [(0, v.jsx)("div", {
                            className: "text-2xl font-bold px-4 py-6",
                            children: "Post"
                        }), (0, v.jsxs)(ep.O.Group, {
                            children: [(0, v.jsxs)(ep.O.List, {
                                className: "grid grid-cols-2 border-b font-bold text-gray-700",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("span", {
                                        className: "border-b-4 hl-selected:border-primary hl-not-selected:border-white inline-block pb-2",
                                        children: "Explore"
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "outline-none",
                                    children: (0, v.jsx)("span", {
                                        className: "border-b-4 hl-selected:border-primary hl-not-selected:border-white inline-block pb-2",
                                        children: "My Posts"
                                    })
                                })]
                            }), (0, v.jsxs)(ep.O.Panels, {
                                children: [(0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(sZ, {})
                                }), (0, v.jsx)(ep.O.Panel, {
                                    children: (0, v.jsx)(sA, {})
                                })]
                            })]
                        })]
                    }), e && (0, v.jsx)("div", {
                        className: "fixed left-0 right-0 bottom-4 flex justify-center md:left-[240px] md:justify-start md:right-auto",
                        children: (0, v.jsx)(V.zx, {
                            className: "rounded-full px-10",
                            onClick: () => H.ZP.show(sF),
                            children: "Post"
                        })
                    })]
                })
            }
            let sR = H.ZP.create(e => {
                let {
                    data: t
                } = e, s = (0, H.dd)();
                return (0, v.jsx)(Q.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "My Points Farming #1 Detail"
                            }), (0, v.jsxs)("div", {
                                className: "text-sm text-gray-500",
                                children: [(0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["First Trading: ", (0, v.jsxs)("span", {
                                        children: [t.firstTrading, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Original Tweet: ", (0, v.jsxs)("span", {
                                        children: [t.tweetOriginal, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Tweet Replies: ", (0, v.jsxs)("span", {
                                        children: [t.tweetReply, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1 items-end",
                                    children: [(0, v.jsxs)("span", {
                                        className: "block md:hidden",
                                        children: ["Views/Likes/", (0, v.jsx)("br", {}), "Quotes/Retweets:"]
                                    }), (0, v.jsx)("span", {
                                        className: "hidden md:block",
                                        children: "Views/Likes/Quotes/Retweets:"
                                    }), (0, v.jsxs)("span", {
                                        children: [t.tweetData, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Invitation: ", (0, v.jsxs)("span", {
                                        children: [" ", t.invitation, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Group Members: ", (0, v.jsxs)("span", {
                                        children: [" ", t.groupMember, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Joined Group: ", (0, v.jsxs)("span", {
                                        children: [" ", t.joinedGroup, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Trading Volume: ", (0, v.jsxs)("span", {
                                        children: [t.trade, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Donation Amount: ", (0, v.jsxs)("span", {
                                        children: [" ", t.donation, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Donation Received: ", (0, v.jsxs)("span", {
                                        children: [" ", t.donationReceived, " Points"]
                                    })]
                                }), (0, v.jsxs)("div", {
                                    className: "flex justify-between my-1",
                                    children: ["Total: ", (0, v.jsxs)("span", {
                                        className: "text-lg font-bold text-black",
                                        children: [t.total, " Points"]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            });
            var sM = s(45435);
            let sz = [{
                stateMutability: "nonpayable",
                type: "constructor",
                inputs: [{
                    name: "_stakingToken",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "_rewardsToken",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "_penaltyReceiver",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "_penaltyPercent",
                    internalType: "uint256",
                    type: "uint256"
                }, {
                    name: "_triggeringPenaltyPeriod",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                type: "error",
                inputs: [{
                    name: "owner",
                    internalType: "address",
                    type: "address"
                }],
                name: "OwnableInvalidOwner"
            }, {
                type: "error",
                inputs: [{
                    name: "account",
                    internalType: "address",
                    type: "address"
                }],
                name: "OwnableUnauthorizedAccount"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "user",
                    internalType: "address",
                    type: "address",
                    indexed: !0
                }, {
                    name: "amount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "GetReward"
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
                    name: "user",
                    internalType: "address",
                    type: "address",
                    indexed: !0
                }, {
                    name: "amount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "Stake"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "user",
                    internalType: "address",
                    type: "address",
                    indexed: !0
                }, {
                    name: "amount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "penaltyAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "Withdraw"
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "duration",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "_account",
                    internalType: "address",
                    type: "address"
                }],
                name: "earned",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "finishAt",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [],
                name: "getReward",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "hardCap",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "lastTimeRewardApplicable",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_amount",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "notifyRewardAmount",
                outputs: []
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
                name: "penaltyPercent",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "penaltyReceiver",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [],
                name: "renounceOwnership",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "rewardPerToken",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "rewardPerTokenStored",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "rewardRate",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }],
                name: "rewards",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "rewardsToken",
                outputs: [{
                    name: "",
                    internalType: "contract IERC20",
                    type: "address"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_hardCap",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setHardCap",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_percent",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setPenaltyPercent",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_receiver",
                    internalType: "address",
                    type: "address"
                }],
                name: "setPenaltyReceiver",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_duration",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setRewardsDuration",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_period",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "setTriggeringPenaltyPeriod",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_amount",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "stake",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "stakingToken",
                outputs: [{
                    name: "",
                    internalType: "contract IERC20",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "totalSupply",
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
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "triggeringPenaltyPeriod",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "updatedAt",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }],
                name: "userLastTimeStake",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }],
                name: "userRewardPerTokenPaid",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "_amount",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "withdraw",
                outputs: []
            }];
            var sU = s(8152),
                sG = s(95396),
                s_ = s(87733);

            function sB(e) {
                let t = async () => {
                    let t = (0, sU.v)({
                        chain: s_.e,
                        transport: (0, sG.d)()
                    });
                    return await t.readContract({
                        address: g.rK,
                        abi: sz,
                        functionName: "balanceOf",
                        args: [e]
                    })
                };
                return (0, k.a)({
                    queryKey: ["poolBalanceOf", e],
                    queryFn: t,
                    enabled: !!e
                })
            }
            let sq = H.ZP.create(() => {
                let e = (0, H.dd)(),
                    t = (0, S.Og)(e => e.me),
                    {
                        data: s
                    } = sB(null == t ? void 0 : t.address);
                return (0, v.jsx)(Q.V, {
                    open: e.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, v.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, v.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                            children: [(0, v.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => e.remove(),
                                children: (0, v.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, v.jsx)("h3", {
                                className: "font-bold text-lg mb-4"
                            }), (0, v.jsxs)("div", {
                                className: "text-sm text-gray-500",
                                children: [(0, v.jsxs)("div", {
                                    className: "flex my-1 font-bold text-black gap-2 text-lg",
                                    children: [(0, v.jsx)("span", {
                                        children: "My Staking Amount:"
                                    }), (0, v.jsxs)("span", {
                                        children: [void 0 === s ? "" : (0, et.Z)((0, C.d)(s)).toFixed(0), " $F3"]
                                    })]
                                }), (0, v.jsx)("div", {
                                    children: "Your multiplier is calculated according to the following corresponding rules based on the number of tokens staked in stake.friend3. group with the same address currently on the BNB chain:"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "0<=Staking Amount<=500:1x"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "500<=Staking Amount<=2000:2x"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "2000<=Staking Amount<=8000:4x"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "8000<=Staking Amount<=20000:8x"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "20000<=Staking Amount<=80000:16x"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "80000<=Staking Amount<=200000:32x"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "200000<=Staking Amount<=500000:64x"
                                }), (0, v.jsx)("div", {
                                    className: "my-1 font-bold text-black",
                                    children: "500000<=Staking Amount:128x"
                                })]
                            })]
                        })
                    })
                })
            });

            function sE() {
                let e = (0, S.Og)(e => e.me),
                    {
                        data: t,
                        isLoading: s
                    } = (0, k.a)({
                        queryKey: ["myPoints", null == e ? void 0 : e.id],
                        queryFn: () => eT(),
                        enabled: !!e
                    }),
                    {
                        data: a
                    } = (0, k.a)({
                        queryKey: ["totalPoints"],
                        queryFn: ek
                    }),
                    {
                        data: n
                    } = (0, k.a)({
                        queryKey: ["myTodayEpochStatus", null == e ? void 0 : e.id],
                        queryFn: eS
                    }),
                    {
                        data: r
                    } = sB(null == e ? void 0 : e.address),
                    l = null == t ? void 0 : t.find(e => 5 === e.epoch);
                return !e || s ? (0, v.jsx)(v.Fragment, {}) : (0, v.jsxs)("div", {
                    className: "p-3 border rounded-lg my-4",
                    children: [(0, v.jsx)("div", {
                        className: "text-gray-500 text-sm mb-2",
                        children: "My Points Farming"
                    }), (0, v.jsxs)("div", {
                        className: "flex justify-between",
                        children: [(0, v.jsxs)("div", {
                            children: [(0, v.jsx)("span", {
                                className: "text-xl font-bold",
                                children: (0, eb.uf)((null == l ? void 0 : l.total) || 0)
                            }), (0, v.jsxs)("span", {
                                className: "text-gray-500 text-sm ml-2",
                                children: ["~", (0, eb.uf)(l && a ? (0, et.Z)(l.total).div((0, et.Z)(a)).multipliedBy(45).toFixed(4) : 0), "BNB"]
                            })]
                        }), l && (0, v.jsx)("div", {
                            className: "text-sm underline cursor-pointer",
                            onClick: () => H.ZP.show(sR, {
                                data: l
                            }),
                            children: "Detail"
                        })]
                    }), n && (0, v.jsxs)("div", {
                        className: "text-sm mt-4",
                        children: [(0, v.jsxs)("div", {
                            className: "my-1 flex items-center gap-2",
                            children: [(0, v.jsx)("span", {
                                className: "text-gray-500",
                                children: "Net Joined Group:"
                            }), (0, v.jsx)("span", {
                                children: n.netJoinedGroup || "0"
                            }), (0, v.jsx)(D.ZP, {
                                content: "The number of new groups you join during $F3 Ignition's time period minus the number of groups that leave during $F3 Ignition period.",
                                children: (0, v.jsx)(sM.Z, {
                                    className: "w-4 h-4 cursor-pointer"
                                })
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "my-1 flex items-center gap-2",
                            children: [(0, v.jsx)("span", {
                                className: "text-gray-500",
                                children: "My Multiplier:"
                            }), (0, v.jsx)("span", {
                                children: (() => {
                                    if (void 0 === r) return "";
                                    let e = (0, et.Z)((0, C.d)(r));
                                    return e.lte(500) ? "1x" : e.lte(2e3) ? "2x" : e.lte(8e3) ? "4x" : e.lte(2e4) ? "8x" : e.lte(8e4) ? "16x" : e.lte(2e5) ? "32x" : e.lte(5e5) ? "64x" : "128x"
                                })()
                            }), (0, v.jsx)(sM.Z, {
                                className: "w-4 h-4 cursor-pointer",
                                onClick: () => H.ZP.show(sq)
                            })]
                        })]
                    })]
                })
            }
            let sD = H.ZP.create(() => {
                    let e = (0, H.dd)(),
                        [t, s] = (0, y.useState)(""),
                        [a, n] = (0, y.useState)(!1),
                        r = (0, eb.pu)(t),
                        l = async () => {
                            try {
                                n(!0), await eO(r), q.Am.success("Tweets submitted."), e.remove()
                            } catch (e) {
                                console.log(e)
                            } finally {
                                n(!1)
                            }
                        };
                    return (0, v.jsx)(Q.V, {
                        open: e.visible,
                        onClose: () => {},
                        className: "relative z-50",
                        children: (0, v.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center bg-black/70",
                            children: (0, v.jsxs)("div", {
                                className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                                children: [(0, v.jsx)("a", {
                                    className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                    onClick: () => e.remove(),
                                    children: (0, v.jsx)(Y.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), (0, v.jsx)("h3", {
                                    className: "font-bold text-lg mb-4",
                                    children: "Submit Your Tweet/Reply"
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [(0, v.jsx)("div", {
                                        children: "To make sure we don't miss your Tweet or Reply, please send us the link to your Tweet or Reply."
                                    }), (0, v.jsx)("input", {
                                        className: "p-2 rounded-lg border w-full text-sm my-2",
                                        placeholder: "Please enter the Twitter link.",
                                        value: t,
                                        onChange: e => s(e.target.value)
                                    }), (0, v.jsx)("div", {
                                        className: "flex justify-center mt-4",
                                        children: (0, v.jsx)(V.fl, {
                                            onClick: async () => {
                                                await l(), close()
                                            },
                                            disabled: !r,
                                            loading: a,
                                            children: "Submit"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                }),
                sL = H.ZP.create(() => {
                    let e = (0, H.dd)();
                    return (0, v.jsxs)(Q.V, {
                        open: e.visible,
                        onClose: () => {},
                        className: "relative z-50",
                        children: [(0, v.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center bg-black/70"
                        }), (0, v.jsx)("div", {
                            className: "fixed inset-0 w-screen overflow-y-auto md:flex md:items-center",
                            children: (0, v.jsxs)("div", {
                                className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[800px] mx-auto my-5",
                                children: [(0, v.jsx)("a", {
                                    className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                    onClick: () => e.remove(),
                                    children: (0, v.jsx)(Y.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), (0, v.jsx)("h3", {
                                    className: "font-bold text-lg mb-4",
                                    children: "Airdrop Terms & Rules"
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [(0, v.jsx)("div", {
                                        className: "font-bold text-base text-black",
                                        children: "How to Join:"
                                    }), (0, v.jsxs)("div", {
                                        children: [(0, v.jsx)("div", {
                                            className: "text-gray-700",
                                            children: "1. Account Setup:"
                                        }), (0, v.jsxs)("ul", {
                                            className: " list-disc pl-6",
                                            children: [(0, v.jsx)("li", {
                                                children: "Sign up on friend3.group."
                                            }), (0, v.jsx)("li", {
                                                children: "Link to Twitter."
                                            })]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        children: [(0, v.jsx)("div", {
                                            className: "text-gray-700",
                                            children: "2. Twitter Actions:"
                                        }), (0, v.jsxs)("ul", {
                                            className: " list-disc pl-6",
                                            children: [(0, v.jsx)("li", {
                                                children: "Original Tweet: Compose tweets mentioning $F3 @Friend3AI and using #Friend3 to earn points."
                                            }), (0, v.jsx)("li", {
                                                children: "Reply or Quote Tweets: Engage in conversations and mention $F3 @Friend3AI with #Friend3 for points."
                                            })]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        children: [(0, v.jsx)("div", {
                                            className: "text-gray-700",
                                            children: "3. Engagement on Friend3:"
                                        }), (0, v.jsxs)("ul", {
                                            className: " list-disc pl-6",
                                            children: [(0, v.jsx)("li", {
                                                children: "Invite people with your invitation code to accrue points."
                                            }), (0, v.jsx)("li", {
                                                children: "Buy/Sell Tickets, donate to the group owners to accrue points."
                                            })]
                                        })]
                                    }), (0, v.jsx)("div", {
                                        className: "font-bold text-base text-black",
                                        children: "Point Farming Rules:"
                                    }), (0, v.jsxs)("ul", {
                                        className: " list-disc pl-6",
                                        children: [(0, v.jsx)("li", {
                                            children: "Points are collected during point farming."
                                        }), (0, v.jsx)("li", {
                                            children: "The point value and limitations depend on special tasks specified for that point farming."
                                        })]
                                    }), (0, v.jsx)("div", {
                                        className: "font-bold text-base text-black",
                                        children: "Token Claims:"
                                    }), (0, v.jsx)("ul", {
                                        className: " list-disc pl-6",
                                        children: (0, v.jsx)("li", {
                                            children: "Earned points are tallied in point farming, but rewards are distributed post-campaign."
                                        })
                                    }), (0, v.jsx)("div", {
                                        className: "font-bold text-base text-black",
                                        children: "Ticket Strategy:"
                                    }), (0, v.jsxs)("ul", {
                                        className: " list-disc pl-6",
                                        children: [(0, v.jsx)("li", {
                                            children: "Purchase and hold tickets on friend3.group for more points."
                                        }), (0, v.jsx)("li", {
                                            children: "Invite people to buy your group tickets to increase your point potential."
                                        })]
                                    }), (0, v.jsx)("div", {
                                        className: "font-bold text-base text-black",
                                        children: "General Terms & Provisions"
                                    }), (0, v.jsxs)("ul", {
                                        className: " list-disc pl-6",
                                        children: [(0, v.jsxs)("li", {
                                            children: [(0, v.jsx)("span", {
                                                className: "font-bold",
                                                children: "Agreement"
                                            }), ": Participation in this campaign constitutes automatic acceptance of all rules and guidelines."]
                                        }), (0, v.jsxs)("li", {
                                            children: [(0, v.jsx)("span", {
                                                className: "font-bold",
                                                children: "Rule Amendments"
                                            }), ": We retain the right to alter or adjust these guidelines at any time without prior notice."]
                                        }), (0, v.jsxs)("li", {
                                            children: [(0, v.jsx)("span", {
                                                className: "font-bold",
                                                children: "Community Standards"
                                            }), ": Any breach of friend3.group's community policies may result in account suspension or forfeiture of accumulated points."]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                });

            function sK() {
                let e = (0, S.Og)(e => e.setSelectedNav);
                return (0, v.jsx)("div", {
                    children: (0, v.jsxs)("div", {
                        className: "px-4 pb-20",
                        children: [(0, v.jsx)("div", {
                            className: "font-bold text-xl mb-2 border-l-4 pl-2 border-primary",
                            children: "Active Points Farming"
                        }), (0, v.jsxs)("div", {
                            className: "flex justify-between text-sm my-4",
                            children: [(0, v.jsxs)("div", {
                                children: [(0, v.jsx)("p", {
                                    children: "Points Farming #1"
                                }), (0, v.jsx)("p", {
                                    className: "text-gray-500",
                                    children: "Dec 04 - Dec 14"
                                })]
                            }), (0, v.jsxs)("div", {
                                children: [(0, v.jsx)("p", {
                                    children: "45BNB"
                                }), (0, v.jsx)("p", {
                                    className: "text-gray-500",
                                    children: "Prize Pool"
                                })]
                            })]
                        }), (0, v.jsx)(sE, {}), (0, v.jsxs)("div", {
                            className: "border p-2 bg-red-50 border-red-100 rounded-lg mb-4 text-sm flex justify-between",
                            children: ["Your tweet/reply hasn’t been counted?", " ", (0, v.jsx)("div", {
                                className: "cursor-pointer underline",
                                onClick: () => H.ZP.show(sD),
                                children: "Submit"
                            })]
                        }), (0, v.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, v.jsxs)(V.zx, {
                                onClick: () => e(S.ST.RANKING),
                                children: [(0, v.jsx)(e_, {
                                    className: "w-4 h-4 mr-2"
                                }), " Leaderboard ", (0, v.jsx)(eZ.Z, {
                                    className: "w-4 h-4 ml-2"
                                })]
                            })
                        }), (0, v.jsxs)("div", {
                            className: "mt-8",
                            children: [(0, v.jsx)("h3", {
                                className: "text-xl font-bold mb-2 border-l-4 pl-2 border-primary",
                                children: "How Points Work"
                            }), (0, v.jsxs)("div", {
                                className: "text-gray-500 text-sm",
                                children: [(0, v.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: "To participate in the points farming, your twitter account must have been active for over 3 months, have more than 100 followers, and not be suspended. Otherwise, your points will be considered invalid."
                                }), (0, v.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: "Reply, quote, or tweet out mentioning $F3 @Friend3AI and #Friend3 to earn points!"
                                }), (0, v.jsx)("br", {}), (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: "Of course, you will also earn points by trading, donating, and inviting friends to friend3."
                                }), (0, v.jsx)("br", {}), (0, v.jsx)("br", {}), "Note:", (0, v.jsx)("br", {}), (0, v.jsx)("p", {
                                    className: "my-1",
                                    children: "1. If you are in the top 100 of the leaderboard, your score can be doubled at the end of campaign."
                                }), (0, v.jsx)("p", {
                                    className: "my-1",
                                    children: "2. To safeguard the interests of genuine participants and ensure fairness, we will filter out the score of tweets with less than 5 views, and filter out users whose trading times (Buy/Sell) is less than 3 times during the entire points farming period."
                                })]
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-8",
                                children: "First trade"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "50k points (once a day, reset at UTC 00:00)"
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-8",
                                children: "Original Tweet"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "5k points/tweet (5 tweets per day, reset at UTC 00:00)"
                            }), (0, v.jsx)(V.zx, {
                                size: "xs",
                                className: "rounded mt-1",
                                onClick: () => {
                                    let e = "https://twitter.com/intent/tweet?text=" + encodeURIComponent("Just found a potential project in SocialFi - @Friend3AI With 60K registered users,  $F3 has a circulating mcap of around $1.9M only. IDO presale sold out and no new unlocks this month. Worth keeping an eye on! #Friend3 Follow for updates: app.friend3.group");
                                    window.open(e, "newwindow", "height=800, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no")
                                },
                                children: "Tweet Now"
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-2",
                                children: "Tweet Replies"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "100 points/reply (5 replies per day, reset at UTC 00:00)"
                            }), (0, v.jsxs)("div", {
                                className: "border p-2 bg-gray-50 rounded-lg mt-2",
                                children: [(0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "7 points/view"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "150 points/like"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "400 points/reply"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "1500 points/retweet"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "3k points/quote"
                                }), (0, v.jsx)("div", {
                                    className: "text-sm mt-4",
                                    children: "Points from tweets and replies might take a few days to sync, but other data syncs in real time."
                                })]
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-2",
                                children: "Invite Friends"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "20k points/person (unlimited)"
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-2",
                                children: "Net Group Member Growth"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "50k points/member (unlimited)"
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-2",
                                children: "Net Joined Group Growth"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "20K points/group (unlimited)"
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-2",
                                children: "Trading Volume"
                            }), (0, v.jsxs)("div", {
                                className: "text-gray-500 text-sm",
                                children: ["300k points/", g.Q6, " reward (unlimited)"]
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-2",
                                children: "Donation Amount"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "2500 points/USD reward (unlimited)"
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-2",
                                children: "Donation Received"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "2500 points/USD reward (unlimited)"
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "mt-8",
                            children: [(0, v.jsx)("h3", {
                                className: "text-xl font-bold mb-2 border-l-4 pl-2 border-primary",
                                children: "How we process"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "The Points Farming will end on the 14th of Dec. Your earned points will be directly distributed according to the proportion of your points to the total platform earnings at the end of the event. At the same time, your total points will be multiplied in real time by the quantity of tokens you currently have staked in the Stake.friend3.group using the same address on the BNB chain."
                            }), (0, v.jsxs)("ul", {
                                className: "text-sm mt-8",
                                children: [(0, v.jsxs)("li", {
                                    className: "my-1",
                                    children: ["1. Earn Points: ", (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                        className: "text-gray-500",
                                        children: "Engage on both Friend3 and Twitter. Your interactions serve as the primary vehicle for point accrual."
                                    })]
                                }), (0, v.jsxs)("li", {
                                    className: "my-1",
                                    children: ["2. Point Calculations: ", (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                        className: "text-gray-500",
                                        children: "As Points Farming wraps up, we finalize your point count, reflecting all your interactions."
                                    })]
                                }), (0, v.jsxs)("li", {
                                    className: "my-1",
                                    children: ["3. Token Calculations: ", (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                        className: "text-gray-500",
                                        children: "Post-campaign, you can claim the corresponding rewards based on your score."
                                    })]
                                })]
                            })]
                        }), (0, v.jsx)("div", {
                            className: "mt-8 text-center",
                            children: (0, v.jsx)("a", {
                                className: "underline cursor-pointer",
                                onClick: () => H.ZP.show(sL),
                                children: "Airdrop Terms & Rules"
                            })
                        })]
                    })
                })
            }
            let sH = async () => await ew.n.get("/kol_point/profile"),
                sV = async e => await ew.n.post("/kol_point/submit_tweet", {
                    tweetId: e
                }),
                sQ = H.ZP.create(e => {
                    var t, s, a, n, r, l, i;
                    let {
                        data: d,
                        usd: c
                    } = e, o = (0, H.dd)();
                    return (0, v.jsx)(Q.V, {
                        open: o.visible,
                        onClose: () => {},
                        className: "relative z-50",
                        children: (0, v.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center bg-black/70",
                            children: (0, v.jsxs)("div", {
                                className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                                children: [(0, v.jsx)("a", {
                                    className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                    onClick: () => o.remove(),
                                    children: (0, v.jsx)(Y.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), (0, v.jsx)("h3", {
                                    className: "font-bold text-lg mb-4",
                                    children: "My KOL Program Points Detail"
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [(0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: [(0, v.jsxs)("span", {
                                            className: "flex items-center gap-1",
                                            children: [(0, v.jsx)("span", {
                                                children: "One-time Task:"
                                            }), (0, v.jsx)(D.ZP, {
                                                content: "If you just tweet mentioning @Friend3AI and #Friend3, and invite at least one user to Friend3, you can get $150 worth of tokens.",
                                                children: (0, v.jsx)(sM.Z, {
                                                    className: "w-3 h-3 cursor-pointer"
                                                })
                                            })]
                                        }), (0, v.jsxs)("span", {
                                            children: ["$", d.whitelist.isFirstOriginalTweetDone && d.whitelist.isFirstInvitationDone ? "150" : "0"]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: ["Original Tweet: ", (0, v.jsxs)("span", {
                                            children: [null === (t = d.counter) || void 0 === t ? void 0 : t.tweetOriginal, " Points"]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: ["Views: ", (0, v.jsxs)("span", {
                                            children: [null === (s = d.counter) || void 0 === s ? void 0 : s.viewData, " Points"]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: ["Likes: ", (0, v.jsxs)("span", {
                                            children: [null === (a = d.counter) || void 0 === a ? void 0 : a.likeData, " Points"]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: ["Reply: ", (0, v.jsxs)("span", {
                                            children: [null === (n = d.counter) || void 0 === n ? void 0 : n.replyData, " Points"]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: ["Retweets: ", (0, v.jsxs)("span", {
                                            children: [null === (r = d.counter) || void 0 === r ? void 0 : r.retweetData, " Points"]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: ["Quotes: ", (0, v.jsxs)("span", {
                                            children: [null === (l = d.counter) || void 0 === l ? void 0 : l.quoteData, " Points"]
                                        })]
                                    }), (0, v.jsxs)("div", {
                                        className: "flex justify-between my-1",
                                        children: ["Total:", " ", (0, v.jsxs)("span", {
                                            className: "text-lg font-bold text-black",
                                            children: [null === (i = d.counter) || void 0 === i ? void 0 : i.total, " Points(~$", c, ")"]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                });

            function sY(e) {
                var t;
                let {
                    data: s
                } = e, a = () => {
                    if (!s.counter) return "0";
                    let e = s.whitelist.isFirstOriginalTweetDone && s.whitelist.isFirstInvitationDone ? 150 : 0;
                    return 0 === s.totalPoints ? "0" : (e += parseInt(s.counter.total) / s.totalPoints * (s.pool.poolSize - s.pool.firstOriginalTweetDoneValue)).toFixed(4)
                };
                return (0, v.jsxs)("div", {
                    className: "p-3 border rounded-lg my-4",
                    children: [(0, v.jsx)("div", {
                        className: "text-gray-500 text-sm mb-2",
                        children: "My KOL program Points"
                    }), (0, v.jsxs)("div", {
                        className: "flex justify-between",
                        children: [(0, v.jsxs)("div", {
                            children: [(0, v.jsx)("span", {
                                className: "text-xl font-bold",
                                children: (0, eb.uf)((null === (t = s.counter) || void 0 === t ? void 0 : t.total) || 0)
                            }), (0, v.jsxs)("span", {
                                className: "text-gray-500 text-sm ml-2",
                                children: ["~$", (0, eb.uf)(a())]
                            })]
                        }), s.counter && (0, v.jsx)("div", {
                            className: "text-sm underline cursor-pointer",
                            onClick: () => H.ZP.show(sQ, {
                                data: s,
                                usd: a()
                            }),
                            children: "Detail"
                        })]
                    })]
                })
            }
            let sJ = H.ZP.create(() => {
                    let e = (0, H.dd)(),
                        [t, s] = (0, y.useState)(""),
                        [a, n] = (0, y.useState)(!1),
                        r = (0, eb.pu)(t),
                        l = async () => {
                            try {
                                n(!0), await sV(r), q.Am.success("Tweets submitted."), e.remove()
                            } catch (e) {
                                console.log(e)
                            } finally {
                                n(!1)
                            }
                        };
                    return (0, v.jsx)(Q.V, {
                        open: e.visible,
                        onClose: () => {},
                        className: "relative z-50",
                        children: (0, v.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center bg-black/70",
                            children: (0, v.jsxs)("div", {
                                className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                                children: [(0, v.jsx)("a", {
                                    className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                    onClick: () => e.remove(),
                                    children: (0, v.jsx)(Y.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), (0, v.jsx)("h3", {
                                    className: "font-bold text-lg mb-4",
                                    children: "Submit Your Tweet"
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [(0, v.jsx)("div", {
                                        children: "To make sure we don't miss your Tweet, please send us the link to your Tweet."
                                    }), (0, v.jsx)("input", {
                                        className: "p-2 rounded-lg border w-full text-sm my-2",
                                        placeholder: "Please enter the Twitter link.",
                                        value: t,
                                        onChange: e => s(e.target.value)
                                    }), (0, v.jsx)("div", {
                                        className: "flex justify-center mt-4",
                                        children: (0, v.jsx)(V.fl, {
                                            onClick: async () => {
                                                await l(), close()
                                            },
                                            disabled: !r,
                                            loading: a,
                                            children: "Submit"
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                }),
                s$ = H.ZP.create(() => {
                    let e = (0, H.dd)();
                    return (0, v.jsxs)(Q.V, {
                        open: e.visible,
                        onClose: () => {},
                        className: "relative z-50",
                        children: [(0, v.jsx)("div", {
                            className: "fixed inset-0 flex items-center justify-center bg-black/70"
                        }), (0, v.jsx)("div", {
                            className: "fixed inset-0 w-screen overflow-y-auto md:flex md:items-center",
                            children: (0, v.jsxs)("div", {
                                className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[800px] mx-auto my-5",
                                children: [(0, v.jsx)("a", {
                                    className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                    onClick: () => e.remove(),
                                    children: (0, v.jsx)(Y.Z, {
                                        className: "w-4 h-4"
                                    })
                                }), (0, v.jsx)("h3", {
                                    className: "font-bold text-lg mb-4",
                                    children: "Airdrop Terms"
                                }), (0, v.jsxs)("div", {
                                    className: "text-sm text-gray-500",
                                    children: [(0, v.jsx)("div", {
                                        className: "font-bold text-base text-black",
                                        children: "General Terms & Provisions"
                                    }), (0, v.jsxs)("ul", {
                                        className: " list-disc pl-6",
                                        children: [(0, v.jsxs)("li", {
                                            children: [(0, v.jsx)("span", {
                                                className: "font-bold",
                                                children: "Agreement"
                                            }), ": Participation in this campaign constitutes automatic acceptance of all rules and guidelines."]
                                        }), (0, v.jsxs)("li", {
                                            children: [(0, v.jsx)("span", {
                                                className: "font-bold",
                                                children: "Rule Amendments"
                                            }), ": We retain the right to alter or adjust these guidelines at any time without prior notice."]
                                        }), (0, v.jsxs)("li", {
                                            children: [(0, v.jsx)("span", {
                                                className: "font-bold",
                                                children: "Community Standards"
                                            }), ": Any breach of friend3.group's community policies may result in account suspension or forfeiture of accumulated points."]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                });

            function sW(e) {
                let {
                    data: t
                } = e, s = (0, S.Og)(e => e.me), {
                    data: a
                } = (0, k.a)({
                    queryKey: ["invitationCodes", null == s ? void 0 : s.address],
                    queryFn: O.x6,
                    enabled: !!s
                }), n = () => {
                    if (!a) return;
                    if (a.codeV2) return a.codeV2;
                    let e = a.codes.find(e => "unused" === e.status);
                    return null == e ? void 0 : e.code
                };
                return (0, v.jsx)("div", {
                    children: (0, v.jsxs)("div", {
                        className: "px-4 pb-20",
                        children: [(0, v.jsx)("div", {
                            className: "font-bold text-xl mb-2 border-l-4 pl-2 border-primary",
                            children: "Active Program"
                        }), (0, v.jsxs)("div", {
                            className: "flex justify-between text-sm my-4",
                            children: [(0, v.jsxs)("div", {
                                children: [(0, v.jsx)("p", {
                                    children: "Activity date"
                                }), (0, v.jsx)("p", {
                                    className: "text-gray-500",
                                    children: "Nov 10 - Nov 28"
                                })]
                            }), (0, v.jsxs)("div", {
                                children: [(0, v.jsxs)("p", {
                                    children: ["$", (0, eb.uf)(t.pool.poolSize)]
                                }), (0, v.jsx)("p", {
                                    className: "text-gray-500",
                                    children: "Prize Pool"
                                })]
                            })]
                        }), (0, v.jsx)(sY, {
                            data: t
                        }), (0, v.jsxs)("div", {
                            className: "border p-2 bg-red-50 border-red-100 rounded-lg mb-4 text-sm flex justify-between",
                            children: ["Your tweet/reply hasn’t been counted?", " ", (0, v.jsx)("div", {
                                className: "cursor-pointer underline",
                                onClick: () => H.ZP.show(sJ),
                                children: "Submit"
                            })]
                        }), (0, v.jsxs)("div", {
                            className: "mt-8",
                            children: [(0, v.jsx)("h3", {
                                className: "text-xl font-bold mb-2 border-l-4 pl-2 border-primary",
                                children: "How Points Work"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: (0, v.jsx)("span", {
                                    className: "font-bold text-gray-700",
                                    children: "Tweet out mentioning @Friend3AI and #Friend3 to earn points!"
                                })
                            }), (0, v.jsxs)("h4", {
                                className: "font-bold mt-8 flex items-center gap-1",
                                children: [(0, v.jsx)("span", {
                                    children: "One-time Task"
                                }), (0, v.jsx)(D.ZP, {
                                    content: "If you just tweet mentioning @Friend3AI and #Friend3, and invite at least one user to Friend3, you can get $150 worth of tokens.",
                                    children: (0, v.jsx)(sM.Z, {
                                        className: "w-4 h-4 cursor-pointer"
                                    })
                                })]
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "$150 (Guaranteed)"
                            }), (0, v.jsxs)("h4", {
                                className: "font-bold mt-8 flex items-center gap-1",
                                children: [(0, v.jsx)("span", {
                                    children: "Invite Friends"
                                }), (0, v.jsx)(D.ZP, {
                                    content: "During KOL Ignition, the number of new  invitees.",
                                    children: (0, v.jsx)(sM.Z, {
                                        className: "w-4 h-4 cursor-pointer"
                                    })
                                })]
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "15k points/person (unlimited)"
                            }), (0, v.jsx)("h4", {
                                className: "font-bold mt-8",
                                children: "Original Tweet"
                            }), (0, v.jsx)("div", {
                                className: "text-gray-500 text-sm",
                                children: "3k points/tweet (Up to 10 tweets per day, reset at UTC 00:00)"
                            }), (0, v.jsx)(V.zx, {
                                size: "xs",
                                className: "rounded mt-1",
                                onClick: () => {
                                    let e = "I'm bullish of @Friend3AI #Friend3, the top social dApp with 10 passive income streams on opBNB.\n$F3 #IDO is backed by @TrustSwap, @Chain_GPT and @Poolz__ with imcap of 262.5k.\nCome to app.friend3.group and earn $50,000 in $F3 with me. Invitation code: \n".concat(n()),
                                        t = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(e);
                                    window.open(t, "newwindow", "height=800, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no")
                                },
                                children: "Tweet Now"
                            }), (0, v.jsxs)("div", {
                                className: "border p-2 bg-gray-50 rounded-lg mt-2",
                                children: [(0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "5 points/view"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "100 points/like"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "250 points/reply"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "1k points/retweet"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "2k points/quote"
                                }), (0, v.jsx)("div", {
                                    className: "text-sm mt-4",
                                    children: "These points update every hour."
                                })]
                            }), (0, v.jsxs)("div", {
                                className: "mt-8",
                                children: [(0, v.jsx)("h3", {
                                    className: "text-xl font-bold mb-2 border-l-4 pl-2 border-primary",
                                    children: "How we process"
                                }), (0, v.jsx)("div", {
                                    className: "text-gray-500 text-sm",
                                    children: "The KOL program will end on the 28th of Nov. Points earned will be redeemable for Friend3 tokens upon the conclusion of the KOL program. Here's how it works:"
                                }), (0, v.jsxs)("ul", {
                                    className: "text-sm mt-8",
                                    children: [(0, v.jsxs)("li", {
                                        className: "my-1",
                                        children: ["1. Earn Points: ", (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                            className: "text-gray-500",
                                            children: "Engage on both Friend3 and Twitter. Your interactions serve as the primary vehicle for point accrual."
                                        })]
                                    }), (0, v.jsxs)("li", {
                                        className: "my-1",
                                        children: ["2. Point Calculations: ", (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                            className: "text-gray-500",
                                            children: "We will display your points in real time, as well as its corresponding value."
                                        })]
                                    }), (0, v.jsxs)("li", {
                                        className: "my-1",
                                        children: ["3. Token Calculations: ", (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                            className: "text-gray-500",
                                            children: "After the KOL program closes, your accumulated points are used to calculate your entitlement to $F3 tokens."
                                        })]
                                    }), (0, v.jsxs)("li", {
                                        className: "my-1",
                                        children: ["4. Token Claiming:", (0, v.jsx)("br", {}), (0, v.jsx)("span", {
                                            className: "text-gray-500",
                                            children: "On listing day, claim your tokens based on the points you've accrued throughout."
                                        })]
                                    })]
                                })]
                            }), (0, v.jsx)("div", {
                                className: "mt-8 text-center",
                                children: (0, v.jsx)("a", {
                                    className: "underline cursor-pointer",
                                    onClick: () => H.ZP.show(s$),
                                    children: "Airdrop Terms"
                                })
                            })]
                        })]
                    })
                })
            }

            function sX() {
                let e = (0, S.Og)(e => e.me),
                    {
                        data: t,
                        isLoading: s
                    } = (0, k.a)({
                        queryKey: ["kolPointProfile", null == e ? void 0 : e.id],
                        queryFn: sH,
                        enabled: !!e
                    });
                return e ? (0, v.jsxs)("div", {
                    children: [!t && !s && (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)("div", {
                            className: "text-2xl font-bold px-4 py-6",
                            children: "Farming"
                        }), (0, v.jsx)(sK, {})]
                    }), t && (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)("div", {
                            className: "text-2xl font-bold px-4 py-6",
                            children: "KOL Program"
                        }), (0, v.jsx)(sW, {
                            data: t
                        })]
                    })]
                }) : (0, v.jsx)(v.Fragment, {})
            }

            function s0() {
                let e = (0, S.Og)(e => e.me),
                    t = (0, S.Og)(e => e.showSidebar),
                    s = (0, S.Og)(e => e.showNavBar),
                    a = (0, S.Og)(e => e.setShowNavBar),
                    n = (0, S.Og)(e => e.setSelectedNav),
                    r = (0, e4.d)(e => e.views),
                    l = (0, e4.d)(e => e.empty),
                    i = (0, S.Og)(e => e.selectedNav),
                    [d, c] = (0, y.useState)(0),
                    o = (0, ev.ac)("only screen and (max-width : 768px)");
                return (0, y.useEffect)(() => {
                    a(!o)
                }, [o]), (0, y.useEffect)(() => {
                    let e = S.Fi.findIndex(e => e === i); - 1 !== e && e !== d && c(e)
                }, [i]), (0, v.jsxs)(ep.O.Group, {
                    selectedIndex: d,
                    onChange: e => {
                        l(), o && a(!1), c(e), n(S.Fi[e] || "")
                    },
                    children: [(0, v.jsx)(s2, {
                        children: (0, v.jsxs)("nav", {
                            className: "w-[100px] h-[100vh] overflow-x-hidden border-r py-6 absolute left-0 bg-white z-20 ".concat(s || !o ? "block" : "hidden"),
                            children: [(0, v.jsx)("div", {
                                className: "pb-6 border-b",
                                children: (0, v.jsx)("a", {
                                    href: "https://twitter.com/Friend3AI",
                                    target: "_blank",
                                    className: "flex justify-center",
                                    children: (0, v.jsx)("img", {
                                        src: "/assets/images/logo.png",
                                        alt: "logo",
                                        className: "h-16"
                                    })
                                })
                            }), (0, v.jsxs)(ep.O.List, {
                                className: "text-center flex-col flex pt-3",
                                children: [(0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: e => {
                                        let {
                                            selected: t
                                        } = e;
                                        return (0, v.jsx)(s4, {
                                            title: "Futures",
                                            useTip: !o,
                                            children: t ? (0, v.jsx)(eV, {
                                                className: "w-4 h-4"
                                            }) : (0, v.jsx)(eK, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    }
                                }), (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: e => {
                                        let {
                                            selected: t
                                        } = e;
                                        return (0, v.jsx)(s4, {
                                            title: "Spot",
                                            useTip: !o,
                                            children: t ? (0, v.jsx)(eD, {
                                                className: "w-4 h-4"
                                            }) : (0, v.jsx)(eq, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    }
                                }), (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: e => {
                                        let {
                                            selected: t
                                        } = e;
                                        return (0, v.jsx)(s4, {
                                            title: "Post",
                                            useTip: !o,
                                            children: t ? (0, v.jsx)(e$, {
                                                className: "w-4 h-4"
                                            }) : (0, v.jsx)(eY, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    }
                                }), (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: (0, v.jsx)(s4, {
                                        title: "Global",
                                        useTip: !o,
                                        children: (0, v.jsx)(eM.YlU, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: (0, v.jsx)(s4, {
                                        title: "Chat",
                                        useTip: !o,
                                        children: (0, v.jsx)(ex.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: (0, v.jsx)(s4, {
                                        title: "Search",
                                        useTip: !o,
                                        children: (0, v.jsx)(b.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: (0, v.jsx)(s4, {
                                        title: "Farming",
                                        useTip: !o,
                                        children: (0, v.jsx)(eM.aHt, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                }), (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: e => {
                                        let {
                                            selected: t
                                        } = e;
                                        return (0, v.jsx)(s4, {
                                            title: "Ranking",
                                            useTip: !o,
                                            children: t ? (0, v.jsx)(e_, {
                                                className: "w-4 h-4"
                                            }) : (0, v.jsx)(eU, {
                                                className: "w-4 h-4"
                                            })
                                        })
                                    }
                                }), e && (0, v.jsx)(ep.O, {
                                    className: "py-3 flex justify-center outline-none",
                                    children: (0, v.jsx)(s4, {
                                        title: "Profile",
                                        useTip: !o,
                                        children: (0, v.jsx)(eh.Z, {
                                            className: "w-4 h-4"
                                        })
                                    })
                                })]
                            })]
                        })
                    }), (0, v.jsxs)("aside", {
                        hidden: o && !t,
                        className: "w-full md:w-[400px] h-[100vh] overflow-y-auto overflow-x-hidden border-r md:ml-[100px]",
                        children: [r.length > 0 && (0, v.jsx)(sr, {}), (0, v.jsxs)(ep.O.Panels, {
                            hidden: r.length > 0,
                            children: [(0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(sp, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(sS, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(sI, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(e2, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(R, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(T, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(sX, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(eR, {})
                                })
                            }), (0, v.jsx)(ep.O.Panel, {
                                children: (0, v.jsx)(s1, {
                                    children: (0, v.jsx)(em, {})
                                })
                            })]
                        })]
                    })]
                })
            }

            function s1(e) {
                let {
                    children: t
                } = e, [s, a] = (0, y.useState)(!1);
                return (0, y.useEffect)(() => {
                    a(!0)
                }, []), (0, v.jsx)(ej.u, {
                    show: s,
                    enter: "transition-all duration-300",
                    enterFrom: "opacity-0 -ml-40",
                    enterTo: "opacity-100 ml-0",
                    leave: "transition-opacity duration-150",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: t
                })
            }

            function s2(e) {
                let {
                    children: t
                } = e, [s, a] = (0, y.useState)(!1);
                return (0, y.useEffect)(() => {
                    a(!0)
                }, []), (0, v.jsx)(ej.u, {
                    className: "absolute",
                    show: s,
                    enter: "transition-all duration-200",
                    enterFrom: "opacity-100 -left-40",
                    enterTo: "opacity-100 left-0",
                    leave: "transition-opacity duration-150",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: t
                })
            }

            function s4(e) {
                let {
                    children: t,
                    title: s,
                    useTip: a
                } = e;
                return a ? (0, v.jsx)(D.ZP, {
                    content: s,
                    children: (0, v.jsx)("div", {
                        className: "bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full p-4 hl-selected:bg-primary hl-selected:text-white hl-selected:hover:bg-primary/80",
                        children: t
                    })
                }) : (0, v.jsx)("div", {
                    className: "bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full p-4 hl-selected:bg-primary hl-selected:text-white hl-selected:hover:bg-primary/80",
                    children: t
                })
            }
        },
        26828: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return eS
                }
            });
            var a = s(64618),
                n = s(75978),
                r = s(98684),
                l = s(27024),
                i = s(39414),
                d = s(92302),
                c = s(40256),
                o = s(42992),
                u = s(75449);

            function m(e) {
                let {
                    onSelected: t
                } = e, [s, n] = (0, l.useState)([]), [r, i] = (0, l.useState)(), [m, x] = (0, l.useState)(), {
                    styles: h,
                    attributes: p
                } = (0, u.D)(r, m);
                return (0, l.useEffect)(() => {
                    c.Z.get("/data/emoji.json").then(e => n(e.data))
                }, []), (0, a.jsxs)(d.J, {
                    children: [(0, a.jsx)(d.J.Button, {
                        ref: i,
                        className: "rounded-full bg-primary bg-opacity-30 hover:bg-opacity-50 text-primary font-bold p-3 outline-none",
                        children: (0, a.jsx)(o.Z, {
                            className: "w-4 h-4"
                        })
                    }), (0, a.jsx)(d.J.Panel, {
                        ref: x,
                        style: h.popper,
                        ...p.popper,
                        children: (0, a.jsx)("div", {
                            className: "w-full",
                            children: (0, a.jsx)("ul", {
                                className: "flex mx-2 gap-3 flex-wrap w-[300px] bg-white rounded-lg py-4 px-2 border mb-2 z-10",
                                children: s.map((e, s) => (0, a.jsx)(d.J.Button, {
                                    as: "li",
                                    onClick: () => t(e.emoji),
                                    className: "cursor-pointer",
                                    children: e.emoji
                                }, s))
                            })
                        })
                    })]
                })
            }
            var x = s(72908),
                h = s(8518),
                p = s(98197),
                j = s(59988),
                v = s(90376),
                y = s(32882),
                g = s(68759),
                f = s(25818),
                b = s(26920),
                N = s(4173),
                w = s.n(N);

            function k(e) {
                let {
                    close: t
                } = e, [s, d] = (0, l.useState)([]), [c, o] = (0, l.useState)(!1), u = (0, n.R)(e => e.currentChatGroup), m = async () => {
                    try {
                        o(!0);
                        let e = x.A.channel("messaging", null == u ? void 0 : u.id),
                            t = [];
                        for (let a = 0; a < s.length; a++) {
                            let n = await e.sendImage(s[a].file);
                            t.push(n.file)
                        }
                        let a = t.map(e => ({
                            type: "image",
                            asset_url: e,
                            thumb_url: e
                        }));
                        await e.sendMessage({
                            text: "",
                            attachments: a
                        }), d([])
                    } catch (e) {
                        60 === e.code ? h.Am.error("You speak too fast") : h.Am.error(e.message)
                    } finally {
                        o(!1)
                    }
                };
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(w(), {
                        multiple: !0,
                        value: s,
                        onChange: e => {
                            d(e)
                        },
                        maxNumber: 3,
                        maxFileSize: 10485760,
                        acceptType: ["jpg", "gif", "png"],
                        children: e => {
                            let {
                                imageList: t,
                                onImageUpload: s,
                                onImageRemove: n,
                                isDragging: r,
                                dragProps: l
                            } = e;
                            return (0, a.jsxs)("div", {
                                children: [(0, a.jsx)("div", {
                                    onClick: s,
                                    ...l,
                                    className: "p-4 border-4 border-dashed text-gray-500 text-center mb-4",
                                    children: (0, a.jsx)("button", {
                                        className: r ? "font-bold text-black" : "",
                                        children: "Click or Drop here"
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "flex gap-4",
                                    children: t.map((e, t) => (0, a.jsxs)("div", {
                                        className: "w-16 h-16 rounded-lg overflow-hidden flex justify-center items-center relative bg-gray-50",
                                        children: [(0, a.jsx)("img", {
                                            src: e.dataURL,
                                            alt: "",
                                            className: "max-w-full"
                                        }), (0, a.jsx)("div", {
                                            className: "absolute right-0.5 bottom-0.5",
                                            children: (0, a.jsx)("button", {
                                                onClick: () => n(t),
                                                className: " bg-black bg-opacity-50 hover:bg-opacity-80 p-1 rounded-full",
                                                children: (0, a.jsx)(f.Z, {
                                                    className: "w-2.5 h-2.5 text-white"
                                                })
                                            })
                                        })]
                                    }, t))
                                })]
                            })
                        }
                    }), (0, a.jsxs)("div", {
                        className: "flex justify-end mt-4 items-center gap-2",
                        children: [(0, a.jsx)("span", {
                            className: "text-sm text-gray-500",
                            children: "Send up to 3 images each time, file size less than 10M, support PNG, JPG, GIF."
                        }), (0, a.jsx)(r.zx, {
                            className: "rounded-full p-2 md:p-3 h-auto",
                            onClick: async () => {
                                await m(), t()
                            },
                            disabled: 0 === s.length || c,
                            children: c ? (0, a.jsx)(b.Z, {
                                className: "w-4 h-4 animate-spin"
                            }) : (0, a.jsx)(i.Z, {
                                className: "w-4 h-4"
                            })
                        })]
                    })]
                })
            }
            var C = s(90935);

            function P(e) {
                let {
                    close: t
                } = e, [s, d] = (0, l.useState)(!1), c = (0, n.R)(e => e.currentChatGroup), [o, u] = (0, l.useState)(""), m = (0, C.Pt)(o), p = async () => {
                    try {
                        d(!0);
                        let e = x.A.channel("messaging", null == c ? void 0 : c.id),
                            t = [{
                                type: "youtube",
                                youtube_id: m
                            }];
                        await e.sendMessage({
                            text: "",
                            attachments: t
                        })
                    } catch (e) {
                        60 === e.code ? h.Am.error("You speak too fast") : h.Am.error(e.message)
                    } finally {
                        d(!1)
                    }
                };
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)("input", {
                        className: "p-2 rounded-lg border w-full text-sm",
                        placeholder: "Please enter the YouTube link.",
                        value: o,
                        onChange: e => u(e.target.value)
                    }), (0, a.jsx)("div", {
                        className: "flex justify-end mt-4 items-center gap-2 w-full",
                        children: (0, a.jsx)(r.zx, {
                            className: "rounded-full p-2 md:p-3 h-auto",
                            onClick: async () => {
                                await p(), t()
                            },
                            disabled: !m,
                            children: s ? (0, a.jsx)(b.Z, {
                                className: "w-4 h-4 animate-spin"
                            }) : (0, a.jsx)(i.Z, {
                                className: "w-4 h-4"
                            })
                        })
                    })]
                })
            }
            var T = s(63326);

            function O(e) {
                let {
                    close: t
                } = e, [s, d] = (0, l.useState)(!1), c = (0, n.R)(e => e.currentChatGroup), [o, u] = (0, l.useState)(), [m, p] = (0, l.useState)(""), j = async () => {
                    try {
                        d(!0);
                        let e = x.A.channel("messaging", null == c ? void 0 : c.id),
                            t = await e.sendFile(o),
                            s = [{
                                type: "video",
                                asset_url: t.file
                            }];
                        await e.sendMessage({
                            text: "",
                            attachments: s
                        })
                    } catch (e) {
                        60 === e.code ? h.Am.error("You speak too fast") : h.Am.error(e.message)
                    } finally {
                        d(!1)
                    }
                };
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(T.ZP, {
                        multiple: !1,
                        onDrop: e => {
                            0 !== e.length && (u(e[0]), p(URL.createObjectURL(e[0])))
                        },
                        accept: {
                            "video/mp4": [".mp4"]
                        },
                        maxSize: 31457280,
                        children: e => {
                            let {
                                getRootProps: t,
                                getInputProps: s,
                                isDragActive: n
                            } = e;
                            return (0, a.jsxs)("div", { ...t(),
                                className: "p-4 border-4 border-dashed text-gray-500 text-center mb-4",
                                children: [(0, a.jsx)("input", { ...s()
                                }), (0, a.jsx)("button", {
                                    className: n ? "font-bold text-black" : "",
                                    children: "Click or Drop here"
                                })]
                            })
                        }
                    }), m && (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("video", {
                            width: "100%",
                            height: "auto",
                            controls: !0,
                            src: m
                        }), (0, a.jsx)("div", {
                            className: "underline text-sm mt-2 text-gray-500 cursor-pointer",
                            onClick: () => {
                                u(void 0), p("")
                            },
                            children: "Remove"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "flex justify-end mt-8 items-center gap-2",
                        children: [(0, a.jsx)("span", {
                            className: "text-sm text-gray-500",
                            children: "Send up to one video each time, file size less than 30M, support MP4."
                        }), (0, a.jsx)(r.zx, {
                            className: "rounded-full p-2 md:p-3 h-auto",
                            onClick: async () => {
                                await j(), t()
                            },
                            disabled: !o || s,
                            children: s ? (0, a.jsx)(b.Z, {
                                className: "w-4 h-4 animate-spin"
                            }) : (0, a.jsx)(i.Z, {
                                className: "w-4 h-4"
                            })
                        })]
                    })]
                })
            }

            function S() {
                let [e, t] = (0, l.useState)(), [s, n] = (0, l.useState)(), {
                    styles: r,
                    attributes: i
                } = (0, u.D)(e, s);
                return (0, a.jsxs)(d.J, {
                    children: [(0, a.jsx)(d.J.Button, {
                        ref: t,
                        className: "rounded-full bg-primary bg-opacity-30 hover:bg-opacity-50 text-primary font-bold p-3 outline-none",
                        children: (0, a.jsx)(j.Z, {
                            className: "w-4 h-4"
                        })
                    }), (0, a.jsx)(d.J.Panel, {
                        ref: n,
                        style: r.popper,
                        ...i.popper,
                        className: "w-full md:w-[400px]",
                        children: e => {
                            let {
                                close: t
                            } = e;
                            return (0, a.jsx)("div", {
                                children: (0, a.jsx)("div", {
                                    className: "mx-2 bg-white rounded-lg py-4 px-3 border mb-2 z-10",
                                    children: (0, a.jsxs)(p.O.Group, {
                                        children: [(0, a.jsxs)(p.O.List, {
                                            className: "mb-2 text-sm flex gap-2 text-gray-500",
                                            children: [(0, a.jsxs)(p.O, {
                                                className: "p-2 hl-selected:bg-primary rounded-lg hl-selected:text-white outline-none hl-selected:shadow-md flex gap-1 items-center",
                                                children: [(0, a.jsx)(v.Z, {
                                                    className: "w-4 h-4"
                                                }), (0, a.jsx)("span", {
                                                    children: "Image"
                                                })]
                                            }), (0, a.jsxs)(p.O, {
                                                className: "p-2 hl-selected:bg-primary rounded-lg hl-selected:text-white outline-none hl-selected:shadow-md flex gap-1 items-center",
                                                children: [(0, a.jsx)(y.Z, {
                                                    className: "w-4 h-4"
                                                }), (0, a.jsx)("span", {
                                                    children: "Youtube"
                                                })]
                                            }), (0, a.jsxs)(p.O, {
                                                className: "p-2 hl-selected:bg-primary rounded-lg hl-selected:text-white outline-none hl-selected:shadow-md flex gap-1 items-center",
                                                children: [(0, a.jsx)(g.Z, {
                                                    className: "w-4 h-4"
                                                }), (0, a.jsx)("span", {
                                                    children: "Video"
                                                })]
                                            })]
                                        }), (0, a.jsxs)(p.O.Panels, {
                                            children: [(0, a.jsx)(p.O.Panel, {
                                                children: (0, a.jsx)(k, {
                                                    close: t
                                                })
                                            }), (0, a.jsx)(p.O.Panel, {
                                                children: (0, a.jsx)(P, {
                                                    close: t
                                                })
                                            }), (0, a.jsx)(p.O.Panel, {
                                                children: (0, a.jsx)(O, {
                                                    close: t
                                                })
                                            })]
                                        })]
                                    })
                                })
                            })
                        }
                    })]
                })
            }

            function F() {
                let [e, t] = (0, l.useState)(""), [s, d] = (0, l.useState)(!1), c = (0, n.R)(e => e.currentChatGroup), o = async () => {
                    if (e.trim() && c && !s) try {
                        d(!0), await x.A.channel("messaging", c.id).sendMessage({
                            text: e
                        }), t("")
                    } catch (e) {
                        60 === e.code ? h.Am.error("You speak too fast") : h.Am.error(e.message)
                    } finally {
                        d(!1)
                    }
                }, u = async e => {
                    "Enter" === e.code && o()
                };
                return (0, a.jsxs)("div", {
                    className: "flex items-center py-8 px-4 gap-2 fixed bottom-0 left-0 right-0 md:left-[500px] bg-white h-[80px] md:h-[100px]",
                    children: [s && (0, a.jsx)("div", {
                        className: "absolute top-2 left-[50%] -ml-4 bg-gray-200 px-2 text-gray-500 rounded-full text-xs animate-pulse",
                        children: "Sending..."
                    }), (0, a.jsx)(S, {}), (0, a.jsx)(m, {
                        onSelected: s => {
                            t(e + s)
                        }
                    }), (0, a.jsx)("input", {
                        className: "border-0 flex-1 p-4 outline-none",
                        value: e,
                        type: "text",
                        onChange: e => t(e.target.value),
                        placeholder: "Write your message...",
                        onKeyUp: u
                    }), (0, a.jsx)(r.zx, {
                        className: "rounded-full p-3 md:p-4 h-auto",
                        onClick: o,
                        children: (0, a.jsx)(i.Z, {
                            className: "w-4 h-4"
                        })
                    })]
                })
            }
            var Z = s(43970),
                A = s(77612),
                I = s(29069),
                R = s(12665),
                M = s(3911),
                z = s(34738);

            function U(e) {
                let {
                    src: t
                } = e, {
                    handleImageOnLoad: s,
                    css: n
                } = (0, z.E3)();
                return (0, a.jsxs)("div", {
                    className: "relative inline-block",
                    children: [(0, a.jsx)("svg", {
                        className: "absolute top-0 right-0 w-full h-full",
                        style: { ...n.thumbnail,
                            filter: "blur(2px)"
                        },
                        children: (0, a.jsx)("rect", {
                            width: "100%",
                            height: "100%",
                            fill: "#eee"
                        })
                    }), (0, a.jsx)("img", {
                        className: "max-w-[200px] md:max-w-xs inline-block",
                        onLoad: s,
                        src: t,
                        style: n.fullSize
                    })]
                })
            }
            var G = s(69469),
                _ = s(47185);
            let B = [{
                stateMutability: "nonpayable",
                type: "constructor",
                inputs: []
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "token",
                    internalType: "contract IERC20",
                    type: "address",
                    indexed: !1
                }],
                name: "AddSupportedToken"
            }, {
                type: "event",
                anonymous: !1,
                inputs: [{
                    name: "donor",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }, {
                    name: "donatedSubject",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }, {
                    name: "id",
                    internalType: "string",
                    type: "string",
                    indexed: !1
                }, {
                    name: "donateToken",
                    internalType: "contract IERC20",
                    type: "address",
                    indexed: !1
                }, {
                    name: "donateAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "protocolAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }, {
                    name: "donatedSubjectAmount",
                    internalType: "uint256",
                    type: "uint256",
                    indexed: !1
                }],
                name: "Donate"
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
                    name: "feeDestination",
                    internalType: "address",
                    type: "address",
                    indexed: !1
                }],
                name: "SetFeeDestination"
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
                name: "_NATIVE_TOKEN",
                outputs: [{
                    name: "",
                    internalType: "contract IERC20",
                    type: "address"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "_thisAddress",
                outputs: [{
                    name: "",
                    internalType: "address",
                    type: "address"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "token",
                    internalType: "contract IERC20",
                    type: "address"
                }],
                name: "addSupportedToken",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "donatedSubject",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "id",
                    internalType: "string",
                    type: "string"
                }, {
                    name: "donatedToken",
                    internalType: "contract IERC20",
                    type: "address"
                }, {
                    name: "amount",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "donateERC20",
                outputs: []
            }, {
                stateMutability: "payable",
                type: "function",
                inputs: [{
                    name: "donatedSubject",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "id",
                    internalType: "string",
                    type: "string"
                }, {
                    name: "amount",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "donateETH",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "donatedToken",
                    internalType: "contract IERC20",
                    type: "address"
                }, {
                    name: "id",
                    internalType: "string",
                    type: "string"
                }],
                name: "getDonatedAmount",
                outputs: [{
                    name: "",
                    internalType: "uint256",
                    type: "uint256"
                }]
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [],
                name: "getSupportedTokens",
                outputs: [{
                    name: "",
                    internalType: "contract IERC20[]",
                    type: "address[]"
                }]
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "protocolFeeDestination_",
                    internalType: "address",
                    type: "address"
                }, {
                    name: "protocolFeePercent_",
                    internalType: "uint256",
                    type: "uint256"
                }],
                name: "initialize",
                outputs: []
            }, {
                stateMutability: "view",
                type: "function",
                inputs: [{
                    name: "token",
                    internalType: "contract IERC20",
                    type: "address"
                }],
                name: "isSupportedToken",
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
                stateMutability: "nonpayable",
                type: "function",
                inputs: [],
                name: "renounceOwnership",
                outputs: []
            }, {
                stateMutability: "nonpayable",
                type: "function",
                inputs: [{
                    name: "feeDestination",
                    internalType: "address",
                    type: "address"
                }],
                name: "setFeeDestination",
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
                    name: "newOwner",
                    internalType: "address",
                    type: "address"
                }],
                name: "transferOwnership",
                outputs: []
            }];
            var q = s(45834),
                E = s(73051),
                D = s(81821),
                L = s.n(D);
            let K = {
                address: I.K8,
                symbol: I.Q6,
                decimals: 18
            };
            async function H(e, t, s, a) {
                return e.address === I.K8 ? await (0, E.n9)({
                    address: I.hq,
                    abi: B,
                    functionName: "donateETH",
                    args: [s, a, t],
                    value: t
                }) : await (0, E.n9)({
                    address: I.hq,
                    abi: B,
                    functionName: "donateERC20",
                    args: [s, a, e.address, t]
                })
            }
            var V = s(36915),
                Q = s(30416),
                Y = s(52960),
                J = s(55386),
                $ = s(39617),
                W = s(93386),
                X = s(26479),
                ee = s(1028),
                et = s(38926);
            async function es(e, t, s) {
                return (0, E.n9)({
                    address: s,
                    abi: E.em,
                    functionName: "approve",
                    args: [e, t]
                })
            }
            var ea = s(44643);
            let en = {
                USDT: 1,
                BUSD: 1
            };
            en[I.Q6] = .001;
            var er = s(78439);
            let el = G.ZP.create(e => {
                var t, s, i;
                let {
                    message: d
                } = e, c = (0, G.dd)(), {
                    data: o
                } = function() {
                    async function e() {
                        let e = await (0, E.a4)({
                                address: I.hq,
                                abi: B,
                                functionName: "getSupportedTokens"
                            }),
                            t = [];
                        e.forEach(e => {
                            t.push({
                                address: e,
                                abi: E.em,
                                functionName: "decimals"
                            }), t.push({
                                address: e,
                                abi: E.em,
                                functionName: "symbol"
                            })
                        });
                        let s = await (0, E.JH)({
                                contracts: t
                            }),
                            a = L()(s, 2),
                            n = a.map((t, s) => {
                                if ("success" === t[0].status && "success" === t[1].status) return {
                                    address: e[s],
                                    decimals: t[0].result,
                                    symbol: t[1].result
                                }
                            }).filter(e => !!e).filter(e => (null == e ? void 0 : e.symbol) !== "BUSD"),
                            r = [];
                        return r.push(n.find(e => (null == e ? void 0 : e.symbol) === "FLOKI")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "TOKEN")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "C98")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "POOLX")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "SWAP")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "USDT")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "ID")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "SFP")), r.push(n.find(e => (null == e ? void 0 : e.symbol) === "BAKE")), [K, ...r.filter(e => !!e)]
                    }
                    return (0, q.a)({
                        queryKey: ["donateSupportedTokens"],
                        queryFn: e
                    })
                }(), [u, m] = (0, l.useState)((null == o ? void 0 : o[0]) || K), [x, p] = (0, l.useState)(""), [j, v] = (0, l.useState)(!1), y = (0, n.R)(e => e.currentChatGroup), g = (0, Z.Og)(e => e.me), {
                    chain: f
                } = (0, et.LN)(), [N, w] = (0, l.useState)(!1), [k, P] = (0, l.useState)(""), T = (0, n.K)(e => e.updateSv), {
                    data: O,
                    refetch: S
                } = (t = null == g ? void 0 : g.address, s = I.hq, i = u.address, (0, et.do)({
                    address: i,
                    abi: E.em,
                    functionName: "allowance",
                    args: [t, s],
                    enabled: !!t && !!s && !!i && i !== I.K8
                })), F = async () => {
                    let e = 0 n;
                    try {
                        e = (0, W.v)(x, u.decimals)
                    } catch (e) {
                        return
                    }
                    try {
                        v(!0);
                        let {
                            hash: t
                        } = await es(I.hq, e, u.address);
                        await (0, E.Mn)({
                            hash: t
                        }), S()
                    } catch (e) {
                        h.Am.error((0, X.j)(e))
                    } finally {
                        v(!1)
                    }
                }, A = async () => {
                    if (!u) return;
                    let e = 0 n;
                    try {
                        e = (0, W.v)(x, u.decimals)
                    } catch (e) {
                        return
                    }
                    if (0 n !== e) try {
                        v(!0);
                        let t = await (0, er.yM)(null == y ? void 0 : y.id),
                            s = (0, C.pe)(t),
                            a = {
                                id: d.id,
                                cid: d.cid,
                                created_at: d.created_at,
                                text: d.text,
                                attachments: d.attachments
                            },
                            n = (0, C.ev)(null == y ? void 0 : y.subjectId, 0, d.id),
                            {
                                hash: r
                            } = await H(u, e, s, n),
                            l = await (0, E.Mn)({
                                hash: r
                            });
                        await (0, ee.iQ)(l.transactionHash, a), h.Am.success("Donated!"), P(l.transactionHash), w(!0)
                    } catch (e) {
                        h.Am.error((0, X.j)(e))
                    } finally {
                        v(!1)
                    }
                };
                (0, z.Yz)(async () => {
                    try {
                        let e = await (0, ea.v_)(k);
                        e.status && (P(""), w(!1), T(d.id), c.remove())
                    } catch (e) {
                        console.log(e)
                    }
                }, N ? 2e3 : null);
                let R = () => {
                        let e = en[u.symbol];
                        if (void 0 === e) return !1;
                        try {
                            return parseFloat(x) < e
                        } catch (e) {
                            return !1
                        }
                    },
                    M = e => "USDT" === e ? "https://www.binance.com/en/trade/BNB_USDT" : "TOKEN" === e ? "https://pancakeswap.finance/swap?outputCurrency=0x4507cef57c46789ef8d1a19ea45f4216bae2b528" : "POOLX" === e ? "https://pancakeswap.finance/swap?outputCurrency=0xbaea9aba1454df334943951d51116ae342eab255" : "SWAP" === e ? "https://pancakeswap.finance/swap?outputCurrency=0x82443a77684a7da92fdcb639c8d2bd068a596245" : "https://www.binance.com/en/trade/".concat(e, "_USDT");
                return (0, a.jsx)(V.V, {
                    open: c.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, a.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[300px]",
                            children: [(0, a.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => c.remove(),
                                children: (0, a.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, a.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Donate"
                            }), (0, a.jsxs)("div", {
                                children: [(0, a.jsx)("div", {
                                    className: "relative",
                                    children: (0, a.jsxs)(Q.R, {
                                        value: u,
                                        onChange: m,
                                        children: [(0, a.jsxs)(Q.R.Button, {
                                            as: "div",
                                            className: "border p-2 rounded-lg w-full flex justify-between cursor-pointer items-center",
                                            children: [u && (0, a.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/assets/images/icon/token/".concat(u.symbol.toLowerCase(), ".png"),
                                                    className: "w-5 h-5 rounded-full"
                                                }), (0, a.jsx)("span", {
                                                    children: u.symbol || "Select token"
                                                })]
                                            }), (0, a.jsx)(J.Z, {
                                                className: "w-5 h-5 text-gray-500 hover:text-gray-800"
                                            })]
                                        }), (0, a.jsx)(Q.R.Options, {
                                            className: "absolute outline-none mt-1 flex min-w-full flex-col gap-2 rounded-lg bg-white py-1 border z-10",
                                            children: null == o ? void 0 : o.map(e => (0, a.jsxs)(Q.R.Option, {
                                                value: e,
                                                className: "cursor-pointer hover:bg-primary hover:bg-opacity-30 hover:text-primary items-center text-gray-500 px-4 py-2 flex gap-2",
                                                children: [(0, a.jsx)("img", {
                                                    src: "/assets/images/icon/token/".concat(e.symbol.toLowerCase(), ".png"),
                                                    className: "w-5 h-5 rounded-full"
                                                }), (0, a.jsx)("span", {
                                                    className: "flex-1",
                                                    children: e.symbol
                                                }), (0, a.jsx)("a", {
                                                    href: M(e.symbol),
                                                    target: "_blank",
                                                    className: "text-sm underline",
                                                    children: "Buy"
                                                })]
                                            }, e.address))
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "my-4",
                                    children: [(0, a.jsx)($.oc, {
                                        mask: Number,
                                        radix: ".",
                                        min: 0,
                                        scale: (null == u ? void 0 : u.decimals) || 18,
                                        value: x,
                                        className: "border p-2 rounded-lg w-full",
                                        placeholder: "0.0",
                                        onAccept: e => p(e)
                                    }), R() && (0, a.jsxs)("div", {
                                        className: "text-sm text-red-500 mt-1",
                                        children: ["Sorry, the minimum donation value cannot be less than ", en[u.symbol], " ", u.symbol, "."]
                                    })]
                                }), (() => {
                                    if (!u || u.address === I.K8 || !x || void 0 === O) return !1;
                                    try {
                                        return (0, W.v)(x, u.decimals) > O
                                    } catch (e) {
                                        return !1
                                    }
                                })() ? (0, a.jsx)(r.fl, {
                                    className: "w-full",
                                    onClick: F,
                                    disabled: !u || !x || !f || (null == f ? void 0 : f.unsupported) || R(),
                                    loading: j,
                                    children: "Approve"
                                }) : (0, a.jsx)(r.fl, {
                                    className: "w-full",
                                    onClick: A,
                                    disabled: !u || !x || !f || (null == f ? void 0 : f.unsupported) || R(),
                                    loading: j,
                                    children: "Donate"
                                }), N && (0, a.jsxs)("div", {
                                    className: "mt-4 text-sm text-gray-500 flex items-center gap-1",
                                    children: [(0, a.jsx)(b.Z, {
                                        className: "w-3 h-3 animate-spin"
                                    }), (0, a.jsx)("span", {
                                        children: "Syncing donation data..."
                                    })]
                                })]
                            })]
                        })
                    })
                })
            });

            function ei(e) {
                let {
                    message: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "bg-yellow-400 hover:bg-yellow-500/80 rounded-full cursor-pointer p-1.5 -ml-18",
                    onClick: () => G.ZP.show(el, {
                        message: t
                    }),
                    children: (0, a.jsx)(_.Z, {
                        className: "w-3 h-3 text-black"
                    })
                })
            }
            let ed = G.ZP.create(e => {
                let {
                    donation: t
                } = e, s = (0, G.dd)(), {
                    data: n
                } = (0, et.dQ)({
                    address: t.donateToken,
                    enabled: t.donateToken !== I.K8
                });
                return (0, a.jsx)(V.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, a.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                            children: [(0, a.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, a.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col justify-center items-center gap-2 my-2",
                                children: [(0, a.jsx)("img", {
                                    src: t.donorUser.avatar || I.tU,
                                    className: "w-14 h-14 rounded-full object-cover"
                                }), (0, a.jsx)("p", {
                                    className: "text-sm text-gray-500",
                                    children: t.donorUser.name || "Unknow"
                                }), (0, a.jsxs)("p", {
                                    className: "font-bold",
                                    children: ["$", t.donateAmountInUsd, " ", (0, a.jsxs)("span", {
                                        className: "text-gray-500 font-normal",
                                        children: ["(", t.donateAmountFormat, " ", t.donateToken === I.K8 ? I.Q6 : n ? n.symbol : "", ")"]
                                    })]
                                })]
                            })]
                        })
                    })
                })
            });

            function ec(e) {
                let {
                    donations: t,
                    message: s
                } = e, r = (0, n.R)(e => e.currentChatGroup), l = (0, C.ev)(null == r ? void 0 : r.subjectId, 0, s.id), i = (0, n.K)(e => e.sv), d = (0, n.K)(e => e.messageId), {
                    data: c
                } = (0, q.a)({
                    queryKey: ["donationSummary", l],
                    queryFn: () => (0, er.c1)(null == r ? void 0 : r.id, l),
                    enabled: !!i && d === s.id
                }), o = c || t;
                return o ? (0, a.jsx)("div", {
                    className: "mt-1",
                    children: (0, a.jsxs)("div", {
                        className: "rounded-full bg-yellow-400 bg-opacity-30 p-1 inline-flex gap-1 items-center",
                        children: [(0, a.jsxs)("span", {
                            className: "text-xs mx-2 mt-0.5 font-bold",
                            children: ["+", o.length]
                        }), (0, a.jsx)("div", {
                            className: "flex",
                            children: o.map((e, t) => (0, a.jsx)("img", {
                                src: e.donorUser.avatar || I.tU,
                                className: "w-5 h-5 rounded-full -ml-1 first:ml-0 inline-block cursor-pointer object-cover",
                                onClick: () => G.ZP.show(ed, {
                                    donation: e
                                })
                            }, t))
                        })]
                    })
                }) : (0, a.jsx)(a.Fragment, {})
            }
            var eo = s(35952);

            function eu(e) {
                let {
                    youtubeId: t
                } = e, s = (0, A.ac)("only screen and (max-width : 768px)");
                return (0, a.jsx)("div", {
                    className: "relative inline-block max-w-[220px] md:max-w-xs",
                    children: (0, a.jsx)(eo.Z, {
                        videoId: t,
                        opts: {
                            width: s ? 220 : 320,
                            height: s ? 140 : 190
                        }
                    })
                })
            }

            function em(e) {
                let {
                    src: t
                } = e;
                return (0, a.jsx)("div", {
                    className: "relative inline-block max-w-[220px] md:max-w-xs",
                    children: (0, a.jsx)("video", {
                        className: "",
                        width: "100%",
                        height: "auto",
                        controls: !0,
                        src: t
                    })
                })
            }

            function ex(e) {
                var t;
                let {
                    me: s,
                    message: n,
                    isGroupOwnerMsg: r,
                    donations: l,
                    messageForGf: i
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex gap-4 flex-row-reverse mb-4 w-full",
                    children: [(0, a.jsx)("img", {
                        className: "w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover",
                        src: s.avatar || I.tU
                    }), (0, a.jsxs)("div", {
                        className: "text-right flex-1 w-0",
                        children: [(0, a.jsxs)("h5", {
                            className: "flex items-center justify-end md:mb-2 text-sm md:text-base text-right",
                            children: [(0, a.jsx)("span", {
                                className: "font-bold truncate max-w-[160px] md:max-w-[400px]",
                                children: s.name
                            }), (0, a.jsx)("span", {
                                className: "text-sm text-gray-500 font-normal ml-4",
                                children: n.created_at && (0, R.Z)((0, M.Z)(n.created_at), "dd/MM hh:mm aa")
                            })]
                        }), n.text && (0, a.jsxs)("div", {
                            className: "max-w-[90%] text-left inline-flex items-center gap-2",
                            children: [r && (0, a.jsx)(ei, {
                                message: n
                            }), (0, a.jsxs)("span", {
                                className: "bg-primary relative text-white px-4 md:px-6 py-2 md:py-3 rounded-[1.5rem] text-sm md:text-base break-all",
                                children: [n.text, i && i.greenfieldSaved && (0, a.jsx)("a", {
                                    className: "absolute -right-1 -top-1 cursor-pointer",
                                    href: "".concat(I.fk, "/view/").concat(i.greenfieldBucket, "/").concat(i.id),
                                    target: "_blank",
                                    children: (0, a.jsx)("img", {
                                        src: "/assets/images/greenfield.png",
                                        className: "w-5 h-5 block"
                                    })
                                })]
                            })]
                        }), null === (t = n.attachments) || void 0 === t ? void 0 : t.map((e, t) => {
                            var s;
                            return (0, a.jsx)("div", {
                                className: "mt-2 text-right",
                                children: (0, a.jsxs)("div", {
                                    className: "inline-flex items-center gap-2",
                                    children: [t === (null === (s = n.attachments) || void 0 === s ? void 0 : s.length) - 1 && r && (0, a.jsx)(ei, {
                                        message: n
                                    }), "image" === e.type && (0, a.jsx)(U, {
                                        src: e.thumb_url
                                    }), "youtube" === e.type && (0, a.jsx)(eu, {
                                        youtubeId: e.youtube_id
                                    }), "video" === e.type && (0, a.jsx)(em, {
                                        src: e.asset_url
                                    })]
                                })
                            }, t)
                        }), (0, a.jsx)(ec, {
                            donations: l,
                            message: n
                        })]
                    })]
                })
            }

            function eh(e) {
                var t, s, n;
                let {
                    message: r,
                    isGroupOwnerMsg: l,
                    donations: i,
                    messageForGf: d
                } = e;
                return (0, a.jsxs)("div", {
                    className: "flex gap-4 mb-4",
                    children: [(0, a.jsx)("img", {
                        className: "w-12 h-12 md:w-14 md:h-14 rounded-2xl object-cover",
                        src: (null === (t = r.user ? .data) || void 0 === t ? void 0 : t.avatar) || I.tU
                    }), (0, a.jsx)("div", {
                        className: "text-left",
                        children: (0, a.jsxs)("div", {
                            className: "contact-name",
                            children: [(0, a.jsxs)("h5", {
                                className: "md:mb-2 text-sm md:text-base flex items-center",
                                children: [(0, a.jsx)("span", {
                                    className: "font-bold truncate max-w-[160px] md:max-w-[400px]",
                                    children: null === (s = r.user) || void 0 === s ? void 0 : s.name
                                }), (0, a.jsx)("span", {
                                    className: "text-sm text-gray-500 font-normal ml-4",
                                    children: r.created_at && (0, R.Z)((0, M.Z)(r.created_at), "dd/MM hh:mm aa")
                                })]
                            }), r.text && (0, a.jsxs)("div", {
                                className: "max-w-[90%] text-left inline-flex items-center gap-2",
                                children: [(0, a.jsxs)("span", {
                                    className: "bg-primary relative text-white px-4 md:px-6 py-2 md:py-3 rounded-[1.5rem] text-sm md:text-base break-all",
                                    children: [r.text, d && d.greenfieldSaved && (0, a.jsx)("a", {
                                        className: "absolute -right-1 -top-1 cursor-pointer",
                                        href: "".concat(I.fk, "/view/").concat(d.greenfieldBucket, "/").concat(d.id),
                                        target: "_blank",
                                        children: (0, a.jsx)("img", {
                                            src: "/assets/images/greenfield.png",
                                            className: "w-5 h-5 block"
                                        })
                                    })]
                                }), l && (0, a.jsx)(ei, {
                                    message: r
                                })]
                            }), null === (n = r.attachments) || void 0 === n ? void 0 : n.map((e, t) => {
                                var s;
                                return (0, a.jsx)("div", {
                                    className: "mt-2",
                                    children: (0, a.jsxs)("div", {
                                        className: "inline-flex items-center gap-2",
                                        children: ["image" === e.type && (0, a.jsx)(U, {
                                            src: e.thumb_url
                                        }), "youtube" === e.type && (0, a.jsx)(eu, {
                                            youtubeId: e.youtube_id
                                        }), "video" === e.type && (0, a.jsx)(em, {
                                            src: e.asset_url
                                        }), t === (null === (s = r.attachments) || void 0 === s ? void 0 : s.length) - 1 && l && (0, a.jsx)(ei, {
                                            message: r
                                        })]
                                    })
                                }, t)
                            }), (0, a.jsx)(ec, {
                                donations: i,
                                message: r
                            })]
                        })
                    })]
                })
            }
            var ep = s(18424);
            let ej = async e => await ep.n.post("/message/get_messages", {
                ids: e
            });

            function ev() {
                let [e, t] = (0, l.useState)([]), s = (0, n.R)(e => e.currentMessageList), r = (0, Z.Og)(e => e.me), i = (0, n.R)(e => e.currentChatGroup), d = (0, l.useRef)(null), c = (0, A.D9)(i), [o, u] = (0, l.useState)([]), {
                    data: m
                } = (0, q.a)({
                    queryKey: ["groupDonationRecords", null == i ? void 0 : i.id],
                    queryFn: () => (0, er.Z5)(null == i ? void 0 : i.id),
                    enabled: !!(null == i ? void 0 : i.user)
                });
                return ((0, l.useEffect)(() => {
                    i && i.id === (null == c ? void 0 : c.id) && !1 !== i.canChat || t([]), i && i.canChat && async function() {
                        let e = await x.A.channel("messaging", i.id).query({
                            messages: {
                                limit: 100
                            }
                        });
                        t(e.messages)
                    }()
                }, [r, null == i ? void 0 : i.id]), (0, l.useEffect)(() => {
                    var e;
                    null === (e = d.current) || void 0 === e || e.scrollIntoView({
                        behavior: "smooth"
                    })
                }, [e, s]), (0, l.useEffect)(() => {
                    0 !== e.length && async function() {
                        let t = e.map(e => e.id),
                            s = await ej(t);
                        u(s)
                    }()
                }, [e]), r && i) ? (0, a.jsxs)("div", {
                    className: "px-3 md:px-12 overflow-y-auto h-[calc(100vh-85px)] md:h-[calc(100vh-105px)] pb-20 pt-[320px]",
                    children: [e.map((e, t) => {
                        var s, n, l;
                        return (0, a.jsx)("div", {
                            children: (null === (s = e.user) || void 0 === s ? void 0 : s.id) !== r.id ? (0, a.jsx)(eh, {
                                message: e,
                                isGroupOwnerMsg: (null === (n = e.user) || void 0 === n ? void 0 : n.id) === i.userId,
                                donations: null == m ? void 0 : m[e.id],
                                messageForGf: o.find(e => e.id == e.id)
                            }) : (0, a.jsx)(ex, {
                                message: e,
                                me: r,
                                isGroupOwnerMsg: (null === (l = e.user) || void 0 === l ? void 0 : l.id) === i.userId,
                                donations: null == m ? void 0 : m[e.id],
                                messageForGf: o.find(e => e.id == e.id)
                            })
                        }, t)
                    }), s.map((e, t) => {
                        var s, n, l;
                        return (0, a.jsx)("div", {
                            children: (null === (s = e.user) || void 0 === s ? void 0 : s.id) !== r.id ? (0, a.jsx)(eh, {
                                message: e,
                                isGroupOwnerMsg: (null === (n = e.user) || void 0 === n ? void 0 : n.id) === i.userId,
                                donations: null == m ? void 0 : m[e.id]
                            }) : (0, a.jsx)(ex, {
                                message: e,
                                me: r,
                                isGroupOwnerMsg: (null === (l = e.user) || void 0 === l ? void 0 : l.id) === i.userId,
                                donations: null == m ? void 0 : m[e.id]
                            })
                        }, t)
                    }), (0, a.jsx)("div", {
                        ref: d
                    })]
                }) : (0, a.jsx)(a.Fragment, {})
            }
            var ey = s(88879),
                eg = s(68216),
                ef = s(41835),
                eb = s(56335),
                eN = s(50886),
                ew = s(49070),
                ek = s(13231);

            function eC() {
                var e, t, s, l, i, d, c, o, u, m, x;
                let h = (0, n.R)(e => e.currentChatGroup),
                    p = (0, eN.d)(e => e.push),
                    j = (0, Z.Og)(e => e.me),
                    {
                        chain: v
                    } = (0, et.LN)(),
                    {
                        address: y
                    } = (0, et.mA)(),
                    {
                        data: g,
                        refetch: f
                    } = (0, ew.k)(null == h ? void 0 : h.subjectId, 1 n),
                    {
                        data: b,
                        refetch: N
                    } = (0, ew.j4)(null == h ? void 0 : h.subjectId, 1 n),
                    {
                        data: w,
                        refetch: k
                    } = (0, ew.Qs)(null == h ? void 0 : h.subjectId, 1 n),
                    {
                        data: C,
                        refetch: P
                    } = (0, ew.jP)(null == h ? void 0 : h.subjectId, y),
                    T = () => {
                        f(), N(), k(), P()
                    };
                return h ? (0, a.jsx)("div", {
                    className: "absolute top-0 left-1.5 right-1.5 bg-gray-100 pt-8 z-10",
                    children: (0, a.jsxs)("div", {
                        className: "flex justify-between gap-y-3 gap-x-2 flex-wrap 2xl:flex-nowrap items-center mx-2 md:mx-10 mt-8 md:mt-10 bg-white p-4 md:p-6 rounded-lg shadow-lg",
                        children: [(0, a.jsxs)("div", {
                            className: "flex gap-4 w-full md:w-auto",
                            children: [(0, a.jsx)("div", {
                                className: "text-center",
                                children: h.user ? (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("img", {
                                        src: (null === (e = h.user) || void 0 === e ? void 0 : e.avatar) || I.tU,
                                        className: "rounded-2xl w-12 h-12 cursor-pointer object-cover",
                                        onClick: () => p({
                                            type: eN.P.userDetail,
                                            data: h.id
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "text-xs rounded bg-[#1296db] text-white px-1 py-0.5",
                                        children: "Spot"
                                    })]
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("img", {
                                        src: (null === (t = h.future) || void 0 === t ? void 0 : t.twitterAvatar) || I.tU,
                                        className: "rounded-2xl w-12 h-12 cursor-pointer object-cover",
                                        onClick: () => p({
                                            type: eN.P.userDetail,
                                            data: h.id
                                        })
                                    }), (0, a.jsx)("span", {
                                        className: "text-xs rounded bg-[#d4237a] text-white px-1 py-0.5",
                                        children: "Futures"
                                    })]
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, a.jsx)("h5", {
                                    className: "font-bold md:text-xl max-w-[200px] truncate",
                                    children: (null === (s = h.user) || void 0 === s ? void 0 : s.name) || (null === (l = h.future) || void 0 === l ? void 0 : l.twitterName)
                                }), (0, a.jsxs)("h6", {
                                    className: "text-gray-500 text-sm",
                                    children: [(0, a.jsx)("span", {
                                        children: "You own"
                                    }), (0, a.jsx)("span", {
                                        className: "font-bold mx-1",
                                        children: null == C ? void 0 : C.toString()
                                    }), (0, a.jsx)("span", {
                                        children: "ticket"
                                    })]
                                }), !h.user && (0, a.jsx)("div", {
                                    className: "md:hidden",
                                    children: (0, a.jsx)(ek.Z, {
                                        twitterUsername: null === (i = h.future) || void 0 === i ? void 0 : i.twitterUsername,
                                        futureId: null === (d = h.future) || void 0 === d ? void 0 : d.id,
                                        price: (0, eg.d)(g || 0 n)
                                    })
                                })]
                            }), (0, a.jsx)("a", {
                                className: "bg-gray-100 rounded-full w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-200 mt-1",
                                href: "https://twitter.com/".concat((null === (c = h.user) || void 0 === c ? void 0 : c.twitterUsername) || (null === (o = h.future) || void 0 === o ? void 0 : o.twitterUsername)),
                                target: "_blank",
                                children: (0, a.jsx)(ey.Z, {
                                    className: "w-4 h-4"
                                })
                            }), !h.user && (0, a.jsx)("div", {
                                className: "mt-1.5 hidden md:block",
                                children: (0, a.jsx)(ek.Z, {
                                    twitterUsername: null === (u = h.future) || void 0 === u ? void 0 : u.twitterUsername,
                                    futureId: null === (m = h.future) || void 0 === m ? void 0 : m.id,
                                    price: (0, eg.d)(g || 0 n)
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex gap-x-4 gap-y-2 items-center text-sm flex-1 justify-center flex-wrap lg:flex-nowrap ml-0.5",
                            children: [(0, a.jsxs)("div", {
                                className: "text-gray-500 w-full flex gap-4 md:w-auto md:block",
                                children: [(0, a.jsxs)("h6", {
                                    children: [(0, a.jsx)("span", {
                                        className: "font-bold text-black mr-1",
                                        children: h.memberAmount || 0
                                    }), (0, a.jsx)("span", {
                                        children: "Members"
                                    })]
                                }), (0, a.jsxs)("h6", {
                                    children: [(0, a.jsx)("span", {
                                        className: "font-bold text-black mr-1",
                                        children: (null === (x = h.user) || void 0 === x ? void 0 : x.joinedAmount) || 0
                                    }), (0, a.jsx)("span", {
                                        children: "Joined"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "hidden lg:block",
                                children: [(0, a.jsxs)("h5", {
                                    children: [void 0 !== g && (0, eg.d)(g), " ", I.Q6]
                                }), (0, a.jsx)("h6", {
                                    className: "text-gray-500",
                                    children: "Ticket Price"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "w-full md:w-auto text-gray-500",
                                children: [(0, a.jsxs)("h5", {
                                    children: [(0, a.jsx)("span", {
                                        children: "Buy Price"
                                    }), (0, a.jsx)("span", {
                                        className: "text-black font-bold mx-1.5",
                                        children: void 0 !== b && (0, eg.d)(b)
                                    }), (0, a.jsx)("span", {
                                        children: I.Q6
                                    })]
                                }), (0, a.jsxs)("h5", {
                                    children: [(0, a.jsx)("span", {
                                        children: "Sell Price"
                                    }), (0, a.jsx)("span", {
                                        className: "text-black font-bold mx-1.5",
                                        children: void 0 !== w && (0, eg.d)(w)
                                    }), (0, a.jsx)("span", {
                                        children: I.Q6
                                    })]
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex gap-4 justify-between w-full md:w-auto",
                            children: [(0, a.jsx)(r.zx, {
                                disabled: !j || !v || (null == v ? void 0 : v.unsupported),
                                className: "font-bold px-10 rounded-full w-full",
                                onClick: () => G.ZP.show(ef.Z, {
                                    refresh: T
                                }),
                                variant: "secondary",
                                children: "Buy"
                            }), (0, a.jsx)(r.zx, {
                                disabled: !j || !v || (null == v ? void 0 : v.unsupported) || !C || C < 1,
                                className: "font-bold px-10 rounded-full w-full",
                                onClick: () => G.ZP.show(eb.Z, {
                                    refresh: T
                                }),
                                variant: "destructive",
                                children: "Sell"
                            })]
                        })]
                    })
                }) : (0, a.jsx)(a.Fragment, {})
            }
            var eP = s(6571);
            let eT = G.ZP.create(e => {
                let {
                    data: t
                } = e, s = (0, G.dd)();
                return (0, a.jsx)(V.V, {
                    open: s.visible,
                    onClose: () => {},
                    className: "relative z-50",
                    children: (0, a.jsx)("div", {
                        className: "fixed inset-0 flex items-center justify-center bg-black/70",
                        children: (0, a.jsxs)("div", {
                            className: "bg-white rounded-2xl p-6 relative w-[80%] md:w-[500px]",
                            children: [(0, a.jsx)("a", {
                                className: "bg-gray-100 hover:bg-gray-200 block rounded-full p-2 cursor-pointer absolute right-3 top-3",
                                onClick: () => s.remove(),
                                children: (0, a.jsx)(Y.Z, {
                                    className: "w-4 h-4"
                                })
                            }), (0, a.jsx)("h3", {
                                className: "font-bold text-lg mb-4",
                                children: "Top Donor"
                            }), (0, a.jsxs)("div", {
                                children: [null == t ? void 0 : t.map((e, t) => (0, a.jsxs)("div", {
                                    className: "flex gap-2 items-center my-2",
                                    children: [t < 3 ? (0, a.jsx)("img", {
                                        src: "/assets/images/icon/top".concat(t + 1, ".png"),
                                        className: "w-6 h-6"
                                    }) : (0, a.jsxs)("div", {
                                        className: "font-bold text-gray-400 text-lg w-6 h-6 flex justify-center items-center",
                                        children: ["0", t + 1]
                                    }), (0, a.jsx)("img", {
                                        src: e.user.avatar || I.tU,
                                        className: "w-6 h-6 rounded-full object-cover"
                                    }), (0, a.jsxs)("div", {
                                        className: "flex-1 w-0",
                                        children: [(0, a.jsx)("p", {
                                            className: "text-xs text-gray-500 truncate",
                                            children: e.user.name || "Unknow"
                                        }), (0, a.jsxs)("p", {
                                            className: "font-bold",
                                            children: ["$", e.valueInUsd]
                                        })]
                                    })]
                                }, t)), (!t || 0 === t.length) && (0, a.jsx)("span", {
                                    className: "text-gray-500",
                                    children: "No one has donated group owner yet. Come and donate to group owners then get on the leaderboard to unlock more benefits!"
                                })]
                            })]
                        })
                    })
                })
            });

            function eO() {
                let e = (0, n.R)(e => e.currentChatGroup),
                    t = (0, n.K)(e => e.sv),
                    {
                        data: s,
                        refetch: r
                    } = (0, q.a)({
                        queryKey: ["groupTopDonor", null == e ? void 0 : e.id],
                        queryFn: () => (0, er.M6)(null == e ? void 0 : e.id),
                        enabled: !!e
                    });
                return (0, l.useEffect)(() => {
                    t && r()
                }, [t]), (0, a.jsx)("div", {
                    className: "fixed bottom-[95px] md:bottom-[120px] left-0 right-0 md:left-[500px] justify-center flex",
                    children: (0, a.jsxs)("div", {
                        className: "flex items-center bg-white rounded-full shadow-md cursor-pointer",
                        onClick: () => G.ZP.show(eT, {
                            data: s
                        }),
                        children: [(0, a.jsx)("div", {
                            className: "p-1.5 bg-yellow-400 m-1 shadow-md rounded-full",
                            children: (0, a.jsx)("img", {
                                src: "/assets/images/icon/podium.svg",
                                className: "w-4 h-4"
                            })
                        }), s && s.length > 0 ? (0, a.jsxs)("div", {
                            className: "py-2 px-1 text-xs text-gray-500 pr-3 flex items-center gap-1",
                            children: [(0, a.jsx)("img", {
                                src: "/assets/images/icon/top1.png",
                                className: "w-5 h-5"
                            }), (0, a.jsx)("span", {
                                className: "truncate max-w-[100px] md:max-w-[300px]",
                                children: s[0].user.name || "Unknow"
                            }), (0, a.jsxs)("span", {
                                className: "font-bold text-black",
                                children: ["$", s[0].valueInUsd]
                            })]
                        }) : (0, a.jsx)("span", {
                            className: "mr-3 text-sm",
                            children: "Top Donor"
                        })]
                    })
                })
            }

            function eS() {
                let e = (0, n.R)(e => e.currentChatGroup),
                    t = (0, Z.Og)(e => e.showSidebar),
                    s = (0, n.R)(e => e.addMessage),
                    r = (0, n.R)(e => e.cachedChannels)[null == e ? void 0 : e.id],
                    i = (0, A.ac)("only screen and (max-width : 768px)"),
                    d = e => {
                        e.message && (s(e.message), null == r || r.markRead())
                    };
                return ((0, l.useEffect)(() => {
                    let t;
                    return async function() {
                        if (null == e ? void 0 : e.canChat) {
                            if (r) t = r.on("message.new", d);
                            else {
                                let s = x.A.channel("messaging", null == e ? void 0 : e.id);
                                t = s.on("message.new", d), await s.watch()
                            }
                        }
                    }(), () => {
                        var e;
                        null === (e = t) || void 0 === e || e.unsubscribe()
                    }
                }, [null == e ? void 0 : e.id, null == e ? void 0 : e.canChat]), i && t) ? (0, a.jsx)(a.Fragment, {}) : (0, a.jsxs)("div", {
                    className: "flex-1 relative",
                    children: [e && (0, a.jsxs)("div", {
                        className: "bg-gray-100 relative h-[100vh] overflow-hidden",
                        children: [(0, a.jsx)(eC, {}), e.canChat && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(ev, {}), e.user && (0, a.jsx)(eO, {}), (0, a.jsx)(F, {})]
                        }), !1 === e.canChat && (0, a.jsxs)("div", {
                            className: "h-full flex items-center justify-center text-lg text-gray-700 gap-2",
                            children: [(0, a.jsx)(eP.Z, {
                                className: "w-5 h-5"
                            }), (0, a.jsx)("span", {
                                children: "You need buy ticket first."
                            })]
                        })]
                    }), !e && !i && (0, a.jsx)("div", {
                        className: "bg-gray-100 flex justify-center items-center h-full",
                        children: (0, a.jsx)("h4", {
                            children: "Please select a group."
                        })
                    })]
                })
            }
        },
        13231: function(e, t, s) {
            s.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = s(64618),
                n = s(45834),
                r = s(98684),
                l = s(43970),
                i = s(1028),
                d = s(15454),
                c = s(29069);

            function o(e) {
                let {
                    twitterUsername: t,
                    price: s,
                    futureId: o
                } = e, u = (0, l.Og)(e => e.me), {
                    data: m
                } = (0, n.a)({
                    queryKey: ["invitationCodes", null == u ? void 0 : u.address],
                    queryFn: i.x6,
                    enabled: !!u
                }), x = () => {
                    if (!m) return;
                    if (m.codeV2) return m.codeV2;
                    let e = m.codes.find(e => "unused" === e.status);
                    return null == e ? void 0 : e.code
                }, h = async e => {
                    e.stopPropagation();
                    let a = await (0, d.Cz)(o),
                        n = x();
                    ! function(e, t, s, a) {
                        let n = "Hi @".concat(e, "\nYou are very popular on @Friend3AI. Many users have been buying and selling your futures,  your current price is ").concat(t, " ").concat(c.Q6, ". \nCome to https://opbnb.friend3.group to claim all the trading fees you earned, it's worth ").concat(s, " ").concat(c.Q6, ".\nInvitation code: ").concat(a),
                            r = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(n);
                        window.open(r, "newwindow", "height=800, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no,location=n o, status=no")
                    }(t, s, a, n)
                };
                return (0, a.jsx)(r.zx, {
                    size: "xs",
                    className: "rounded mt-1 text-xs",
                    onClick: h,
                    disabled: !u,
                    children: "Invite"
                })
            }
        },
        72908: function(e, t, s) {
            s.d(t, {
                A: function() {
                    return r
                }
            });
            var a = s(86460),
                n = s(29069);
            let r = a.c8.getInstance(n.Io)
        }
    }
]);