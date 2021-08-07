;(this['webpackJsonpslim-mom'] = this['webpackJsonpslim-mom'] || []).push([
  [10],
  {
    168: function (e, s, t) {
      e.exports = { list: 's_list__Q7D4t', ul: 's_ul__3BAc7' }
    },
    169: function (e, s, t) {
      e.exports = {
        section: 'RightSideBar_section__3uxU5',
        container: 'RightSideBar_container__3zW4Q',
        box: 'RightSideBar_box__3xM0y',
        title: 'RightSideBar_title__1dOgS',
        list: 'RightSideBar_list__1D0K1',
        ul: 'RightSideBar_ul__1mLmQ',
        text: 'RightSideBar_text__AJLXj',
      }
    },
    174: function (e, s, t) {
      'use strict'
      t.d(s, 'a', function () {
        return x
      })
      var a = t(135),
        c = t(0),
        i = t(21),
        n = t(168),
        l = t.n(n),
        r = t(2),
        j = function (e) {
          var s = e.info
          return Object(r.jsxs)('ul', {
            className: l.a.ul,
            children: [
              Object(r.jsxs)('li', {
                className: l.a.list,
                children: [
                  Object(r.jsx)('p', {
                    className: l.a.ul,
                    children:
                      '\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
                  }),
                  ' ',
                  Object(r.jsxs)('p', {
                    className: l.a.ul,
                    children: [s.kcalRemain, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(r.jsxs)('li', {
                className: l.a.list,
                children: [
                  Object(r.jsx)('p', {
                    className: l.a.ul,
                    children:
                      '\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e',
                  }),
                  ' ',
                  Object(r.jsxs)('p', {
                    className: l.a.ul,
                    children: [s.totalKcalPerDay, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(r.jsxs)('li', {
                className: l.a.list,
                children: [
                  Object(r.jsx)('p', {
                    className: l.a.ul,
                    children:
                      '\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430',
                  }),
                  ' ',
                  Object(r.jsxs)('p', {
                    className: l.a.ul,
                    children: [s.dayNorm, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(r.jsxs)('li', {
                className: l.a.list,
                children: [
                  Object(r.jsx)('p', {
                    className: l.a.ul,
                    children: 'n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b',
                  }),
                  ' ',
                  Object(r.jsxs)('p', {
                    className: l.a.ul,
                    children: [s.percentage, ' % \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
            ],
          })
        },
        d = t(139),
        o = t(169),
        b = t.n(o)
      var x = function () {
        var e = Object(i.c)(d.d),
          s = Object(i.c)(d.c),
          t = Object(c.useState)([]),
          n = Object(a.a)(t, 2),
          l = n[0],
          o = n[1],
          x = Object(c.useState)(0),
          h = Object(a.a)(x, 2),
          u = h[0],
          O = h[1]
        return (
          Object(c.useEffect)(
            function () {
              e && O(e)
            },
            [e],
          ),
          Object(c.useEffect)(
            function () {
              s && o(s)
            },
            [s],
          ),
          Object(r.jsx)('div', {
            children: Object(r.jsx)('section', {
              className: b.a.section,
              children: Object(r.jsxs)('div', {
                className: b.a.container,
                children: [
                  Object(r.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(r.jsxs)('h3', {
                        className: b.a.title,
                        children: [
                          '\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 \u0434\u0430\u0442\u0443 ',
                          u.date,
                          ' ',
                        ],
                      }),
                      Object(r.jsx)(j, { info: u }),
                    ],
                  }),
                  Object(r.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(r.jsx)('h3', {
                        className: b.a.title,
                        children:
                          '\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
                      }),
                      l.length > 0
                        ? Object(r.jsxs)('p', {
                            className: b.a.list,
                            children: [' ', l.join(', '), ' '],
                          })
                        : Object(r.jsx)('p', {
                            className: b.a.list,
                            children:
                              ' \u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0412\u0430\u0448 \u0440\u0430\u0446\u0438\u043e\u043d ',
                          }),
                    ],
                  }),
                ],
              }),
            }),
          })
        )
      }
    },
    176: function (e, s, t) {
      'use strict'
      t.d(s, 'a', function () {
        return n
      })
      var a = t(186),
        c = t(2),
        i = Object(a.a)({
          containerSideBar: {
            position: 'relative',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: 15,
            paddingRight: 15,
            backgroundColor: '#F0F1F3',
            '@media screen and (max-width: 1279px) and (min-width: 768px)': {
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom right',
            },
            '@media (min-width: 1280px)': {
              backgroundPosition: 'right',
              backgroundRepeat: 'no-repeat',
              height: 850,
              width: 624,
            },
          },
        })
      function n(e) {
        var s = e.children,
          t = i()
        return Object(c.jsx)('div', {
          className: t.containerSideBar,
          children: s,
        })
      }
    },
    215: function (e, s, t) {
      e.exports = {
        wrapper: 'styless_wrapper__b8V2s',
        section: 'styless_section__1aAQs',
        box: 'styless_box__2R23N',
        header: 'styless_header__uocO5',
        headerBox: 'styless_headerBox__38TKm',
      }
    },
    253: function (e, s, t) {
      'use strict'
      t.r(s)
      var a = t(144),
        c = t(187),
        i = t(176),
        n = t(174),
        l = t(157),
        r = t(152),
        j = t(138),
        d = t(215),
        o = t.n(d),
        b = t(2),
        x = function () {
          var e = Object(j.a)()
          return Object(b.jsx)(b.Fragment, {
            children:
              e >= 1280
                ? Object(b.jsx)('div', {
                    className: o.a.wrapper,
                    children: Object(b.jsxs)('div', {
                      className: o.a.section,
                      children: [
                        Object(b.jsxs)('div', {
                          className: o.a.header,
                          children: [
                            Object(b.jsx)(l.a, {}),
                            Object(b.jsx)('div', {
                              className: o.a.headerBox,
                              children: e >= 1280 ? Object(b.jsx)(r.a, {}) : '',
                            }),
                          ],
                        }),
                        Object(b.jsxs)('div', {
                          className: o.a.box,
                          children: [
                            Object(b.jsx)(c.a, {}),
                            Object(b.jsx)(n.a, {}),
                          ],
                        }),
                      ],
                    }),
                  })
                : Object(b.jsxs)('div', {
                    className: o.a.box,
                    children: [
                      Object(b.jsxs)(a.a, {
                        children: [
                          Object(b.jsx)(l.a, {}),
                          Object(b.jsx)(c.a, {}),
                        ],
                      }),
                      Object(b.jsxs)(i.a, {
                        children: [
                          e >= 1280 ? Object(b.jsx)(r.a, {}) : '',
                          Object(b.jsx)(n.a, {}),
                        ],
                      }),
                    ],
                  }),
          })
        }
      s.default = function () {
        return Object(b.jsx)(x, {})
      }
    },
  },
])
//# sourceMappingURL=10.18586e0e.chunk.js.map
