(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1931], {
        32268: function(e, n, t) {
            Promise.resolve().then(t.bind(t, 72590))
        },
        72590: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                }
            });
            var c = t(64618),
                s = t(26828),
                r = t(62876),
                i = t(77291),
                o = t(43970),
                u = t(27024),
                a = t(72908),
                f = t(77612),
                l = t(75978);

            function d() {
                let e = (0, o.Og)(e => e.isNeedAuth()),
                    n = (0, o.Og)(e => e.me),
                    t = (0, l.R)(e => e.setStreamConnected),
                    d = (0, f.O_)();
                return (0, u.useEffect)(() => {
                    !e && n && async function() {
                        try {
                            await a.A.connectUser({
                                id: n.id
                            }, n.streamUser.token), t(!0)
                        } catch (e) {
                            console.log("info: connect failed ", e), i.Tb(e)
                        }
                    }()
                }, [e, n]), (0, c.jsx)(c.Fragment, {
                    children: (0, c.jsx)("div", {
                        className: "flex h-[100vh]",
                        children: d && (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(r.Z, {}), (0, c.jsx)(s.Z, {})]
                        })
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [2422, 4064, 5377, 5970, 3382, 6065, 2738, 2299, 4089, 87, 1744], function() {
            return e(e.s = 32268)
        }), _N_E = e.O()
    }
]);