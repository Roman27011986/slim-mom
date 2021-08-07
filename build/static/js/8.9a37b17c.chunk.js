;(this['webpackJsonpslim-mom'] = this['webpackJsonpslim-mom'] || []).push([
  [8],
  {
    137: function (e, t, a) {
      e.exports = {
        nav: 'Header_nav__2MxG6',
        logo: 'Header_logo__1jkXd',
        link: 'Header_link__3f2p0',
        active: 'Header_active__3ZzLK',
        authLink: 'Header_authLink__1by_B',
        linkActive: 'Header_linkActive__1X982',
        userInfo: 'Header_userInfo__1JFXa',
        userLogin: 'Header_userLogin__AwajG',
        exitButton: 'Header_exitButton__16am6',
        userInfoNav: 'Header_userInfoNav__TkFmp',
        linkBurger: 'Header_linkBurger__VGkbw',
        listBurger: 'Header_listBurger__1zjUv',
        listBurgerItem: 'Header_listBurgerItem__1nNnJ',
        menuButton: 'Header_menuButton__3K2tX',
        closeButton: 'Header_closeButton__155Fe',
        BigLogo: 'Header_BigLogo__3MqsE',
      }
    },
    142: function (e, t, a) {
      'use strict'
      var n = a(246),
        r = a(41),
        i = a(47),
        o = Object(i.a)({
          root: {
            borderRadius: '30px',
            width: '176px',
            height: '44px',
            color: 'white',
            backgroundColor: '#FC842D',
            boxShadow: '0px 4px 10px rgba(252, 132, 45, 0.5)',
            fontFamily: 'Verdana',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.04em',
            fontWeight: '700',
            textAlign: 'center',
            textTransform: 'capitalize',
            '&:hover': { backgroundColor: r.a[900] },
          },
        })(n.a)
      t.a = o
    },
    144: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return r
      })
      var n = a(2)
      function r(e) {
        var t = e.children
        return Object(n.jsx)('div', { className: 'container', children: t })
      }
    },
    160: function (e, t, a) {
      e.exports = {
        contentContainer: 'ContentImagesRegPage_contentContainer__2GZDW',
        DecoreLaptop: 'ContentImagesRegPage_DecoreLaptop__1M1C_',
        Banana: 'ContentImagesRegPage_Banana__3u9oG',
        Strawberry: 'ContentImagesRegPage_Strawberry__14HKi',
        Green: 'ContentImagesRegPage_Green__v11Th',
      }
    },
    165: function (e, t, a) {
      'use strict'
      a(0)
      var n = a(21),
        r = a(30),
        i = a(137),
        o = a.n(i),
        c = a(28),
        s = a(138),
        l = a(2)
      t.a = function () {
        var e = Object(n.c)(c.a),
          t = Object(s.a)()
        return Object(l.jsx)(l.Fragment, {
          children: Object(l.jsxs)('div', {
            className: o.a.nav,
            children: [
              Object(l.jsx)(r.b, { to: '/', exact: !0, className: o.a.logo }),
              !e &&
                t < 1280 &&
                Object(l.jsxs)('div', {
                  children: [
                    Object(l.jsx)(r.b, {
                      to: '/auth',
                      exact: !0,
                      className: o.a.authLink,
                      activeClassName: o.a.linkActive,
                      children: '\u0412\u0425\u041e\u0414',
                    }),
                    Object(l.jsx)(r.b, {
                      to: '/registration',
                      exact: !0,
                      className: o.a.link,
                      activeClassName: o.a.linkActive,
                      children:
                        '\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f',
                    }),
                  ],
                }),
            ],
          }),
        })
      }
    },
    175: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return s
      })
      var n = a(135),
        r = a(0),
        i = a(160),
        o = a.n(i),
        c = a(2)
      function s() {
        var e = Object(r.useState)(!1),
          t = Object(n.a)(e, 2),
          a = t[0],
          i = t[1]
        return (
          Object(r.useEffect)(function () {
            i(!0)
          }, []),
          Object(c.jsxs)('div', {
            className: o.a.contentContainer,
            children: [
              Object(c.jsx)('div', {
                className: o.a.Green,
                style: {
                  transform: a ? 'translateY(0)' : 'translateY(-101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: o.a.Banana,
                style: {
                  transform: a ? 'translateX(0)' : 'translateX(101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: o.a.Strawberry,
                style: {
                  transform: a ? 'translateX(0)' : 'translateX(101%)',
                  opacity: a ? '1' : '0',
                },
              }),
              Object(c.jsx)('div', {
                className: o.a.DecoreLaptop,
                style: { opacity: a ? '1' : '0' },
              }),
            ],
          })
        )
      }
    },
    195: function (e, t, a) {
      e.exports = {
        regBtn: 'styles_regBtn__3ZJG9',
        loginBtn: 'styles_loginBtn__1BnUh',
      }
    },
    255: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(144),
        r = a(175),
        i = a(135),
        o = a(4),
        c = a(0),
        s = a(21),
        l = a(30),
        u = a(117),
        b = a(248),
        d = a(41),
        j = a(47),
        p = a(49),
        _ = a(18),
        g = a(142),
        x = a(195),
        m = a.n(x),
        f = a(2),
        O = Object(u.a)(function (e) {
          var t, a
          return {
            root:
              ((t = {}),
              Object(o.a)(t, e.breakpoints.down('767'), {
                width: 289,
                margin: 0,
                marginLeft: 'auto',
                marginRight: 'auto',
              }),
              Object(o.a)(t, 'display', 'flex'),
              Object(o.a)(t, 'flexDirection', 'column'),
              Object(o.a)(t, 'alignItems', 'center'),
              Object(o.a)(t, 'width', '290px'),
              Object(o.a)(t, 'marginBottom', '30px'),
              Object(o.a)(t, 'justifyContent', 'space-between'),
              Object(o.a)(t, e.breakpoints.up('768'), {
                width: '382px',
                alignItems: 'start',
                marginLeft: '71',
              }),
              t),
            title:
              ((a = {
                fontWeight: 'bold',
                fontSize: '14px',
                lineHeight: '13px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textAlign: 'center',
                marginTop: '40px',
                color: d.a[600],
              }),
              Object(o.a)(a, e.breakpoints.up('768'), {
                marginTop: '157px',
                textAlign: 'left',
              }),
              Object(o.a)(a, e.breakpoints.up('1200'), { marginTop: '95px' }),
              a),
            button: Object(o.a)(
              { textAlign: 'center' },
              e.breakpoints.up('768'),
              {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '382px',
              },
            ),
          }
        }),
        h = Object(j.a)(function (e) {
          return {
            root: {
              marginBottom: '20px',
              '& label': { fontSize: '14px' },
              '& .MuiInput-underline': Object(o.a)(
                { width: '290px' },
                e.breakpoints.up('768'),
                { width: '239px' },
              ),
              '& label.Mui-focused': { color: d.a[500] },
              '& .MuiInput-underline:after': { borderBottomColor: d.a[500] },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: d.a[500] },
                '&:hover fieldset': { borderColor: d.a[500] },
                '&.Mui-focused fieldset': { borderColor: d.a[500] },
              },
            },
          }
        })(b.a)
      function v() {
        var e = Object(s.b)(),
          t = O(),
          a = Object(c.useState)(''),
          n = Object(i.a)(a, 2),
          r = n[0],
          o = n[1],
          u = Object(c.useState)(''),
          b = Object(i.a)(u, 2),
          d = b[0],
          j = b[1],
          x = Object(c.useState)(!1),
          v = Object(i.a)(x, 2),
          B = v[0],
          y = v[1]
        Object(c.useEffect)(function () {
          y(!0)
        }, [])
        return Object(f.jsx)('div', {
          style: {
            transform: B ? 'translateX(0)' : 'translateX(-101%)',
            opacity: B ? '1' : '0',
          },
          children: Object(f.jsxs)('div', {
            children: [
              Object(f.jsx)('h3', {
                className: t.title,
                children: '\u0432\u0445\u043e\u0434',
              }),
              Object(f.jsxs)('form', {
                className: t.root,
                noValidate: !0,
                autoComplete: 'off',
                onSubmit: function (t) {
                  t.preventDefault(),
                    e(Object(p.b)({ email: r, password: d })),
                    o(''),
                    j('')
                },
                children: [
                  Object(f.jsx)(h, {
                    required: !0,
                    id: 'standard-email-input',
                    label: 'Email ',
                    type: 'email',
                    value: r,
                    autoComplete: 'current-login',
                    onChange: function (e) {
                      var t = e.target
                      return o(t.value)
                    },
                  }),
                  Object(f.jsx)(h, {
                    required: !0,
                    id: 'standard-password-input',
                    label: '\u041f\u0430\u0440\u043e\u043b\u044c ',
                    type: 'password',
                    value: d,
                    autoComplete: 'current-password',
                    onChange: function (e) {
                      var t = e.target
                      return j(t.value)
                    },
                  }),
                  Object(f.jsxs)('div', {
                    className: t.button,
                    children: [
                      Object(f.jsx)(g.a, {
                        type: 'submit',
                        id: m.a.loginBtn,
                        children: '\u0412\u0445\u043e\u0434',
                      }),
                      Object(f.jsx)(l.b, {
                        to: _.a.reg,
                        style: { textDecoration: 'none' },
                        children: Object(f.jsxs)(g.a, {
                          id: m.a.regBtn,
                          type: 'button',
                          children: [
                            '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f',
                            ' ',
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      }
      var B = a(165)
      t.default = function () {
        return Object(f.jsxs)('div', {
          children: [
            Object(f.jsx)(r.a, {}),
            Object(f.jsx)(n.a, { children: Object(f.jsx)(B.a, {}) }),
            Object(f.jsx)(n.a, { children: Object(f.jsx)(v, {}) }),
          ],
        })
      }
    },
  },
])
//# sourceMappingURL=8.9a37b17c.chunk.js.map
