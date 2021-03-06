;(this['webpackJsonpslim-mom'] = this['webpackJsonpslim-mom'] || []).push([
  [2],
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
    139: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return n
      }),
        a.d(t, 'b', function () {
          return r
        }),
        a.d(t, 'c', function () {
          return c
        }),
        a.d(t, 'd', function () {
          return o
        }),
        a.d(t, 'e', function () {
          return s
        })
      var n = function (e) {
          return e.products.diaryInfo.products
        },
        r = function (e) {
          return e.products.diaryInfo.date
        },
        c = function (e) {
          return e.products.diaryInfo.productsNotRecommended
        },
        o = function (e) {
          return e.products.diaryInfo
        },
        s = function (e) {
          return e.products.loading
        }
    },
    141: function (e, t, a) {
      'use strict'
      a.d(t, 'd', function () {
        return c
      }),
        a.d(t, 'a', function () {
          return o
        }),
        a.d(t, 'c', function () {
          return s
        }),
        a.d(t, 'b', function () {
          return i
        })
      var n = a(20),
        r = a(32),
        c = function (e) {
          return r.a
            .get('/products/search?product='.concat(e))
            .then(function (e) {
              return e.data
            })
            .catch(function (e) {
              return e
            })
        },
        o = function (e) {
          var t = e.title,
            a = e.weight,
            c = e.kcal
          return function (e) {
            var o = { kcal: c, title: t, weight: a },
              s = new Date().toLocaleDateString('fr-CA')
            e(n.a.addProductRequest()),
              r.a
                .post('/products', o)
                .then(function (t) {
                  var a = t.data
                  e(n.a.addProductSuccess(a)), e(i(s))
                })
                .catch(function (t) {
                  return e(n.a.addProductError(t))
                })
          }
        },
        s = function (e) {
          return function (t) {
            t(n.a.deleteProductIdRequest())
            var a = new Date().toLocaleDateString('fr-CA')
            r.a
              .delete('/products/'.concat(e))
              .then(function () {
                t(n.a.deleteProductIdSuccess(e)), t(i(a))
              })
              .catch(function (e) {
                return t(n.a.deleteProductIdError(e.messages))
              })
          }
        },
        i = function (e) {
          return function (t) {
            t(n.a.dateEatenProductsRequest()),
              r.a
                .get('/products/'.concat(e))
                .then(function (e) {
                  t(n.a.dateEatenProductsSuccess(e.data))
                })
                .catch(function (e) {
                  return t(n.a.dateEatenProductsError(e))
                })
          }
        }
    },
    142: function (e, t, a) {
      'use strict'
      var n = a(246),
        r = a(41),
        c = a(47),
        o = Object(c.a)({
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
    152: function (e, t, a) {
      'use strict'
      a(0)
      var n = a(21),
        r = a(49),
        c = a(28),
        o = a(137),
        s = a.n(o),
        i = a(2)
      t.a = function () {
        var e = Object(n.c)(c.b),
          t = Object(n.c)(c.a),
          a = Object(n.b)()
        return Object(i.jsx)(i.Fragment, {
          children:
            t &&
            Object(i.jsxs)('div', {
              className: s.a.userInfo,
              children: [
                Object(i.jsxs)('span', {
                  className: s.a.userLogin,
                  children: [' ', e, ' '],
                }),
                Object(i.jsx)('button', {
                  type: 'button',
                  className: s.a.exitButton,
                  onClick: function (e) {
                    a(Object(r.c)())
                  },
                  children: '\u0412\u044b\u0439\u0442\u0438',
                }),
              ],
            }),
        })
      }
    },
    157: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return v
      })
      var n = a(135),
        r = a(0),
        c = a(30),
        o = a(137),
        s = a.n(o),
        i = a(170),
        l = a(171),
        u = a(177),
        d = a(173),
        b = a(172),
        j = a.n(b),
        m = a(2),
        f = (function (e) {
          Object(u.a)(a, e)
          var t = Object(d.a)(a)
          function a() {
            var e
            Object(i.a)(this, a)
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++)
              r[c] = arguments[c]
            return (
              ((e = t.call.apply(t, [this].concat(r))).handleEsc = function (
                t,
              ) {
                'Escape' === t.code && e.props.hideModal()
              }),
              (e.onHandleClick = function () {
                e.props.hideModal()
              }),
              (e.handleBackdropClick = function (t) {
                t.target === t.currentTarget && e.props.hideModal()
              }),
              e
            )
          }
          return (
            Object(l.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  window.addEventListener('keydown', this.handleEsc),
                    (document.querySelector('body').style.overflow = 'hidden')
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  window.removeEventListener('keydown', this.handleEsc),
                    (document.querySelector('body').style.overflow = 'auto')
                },
              },
              {
                key: 'render',
                value: function () {
                  return Object(m.jsx)('div', {
                    className: j.a.Overlay,
                    onClick: this.handleBackdropClick,
                    children: Object(m.jsx)('div', {
                      className: j.a.Modal,
                      children: this.props.children,
                    }),
                  })
                },
              },
            ]),
            a
          )
        })(r.Component),
        h = a(21),
        O = a(28),
        _ = a(152),
        p = a(138),
        x = function (e) {
          var t = e.isModalOpen,
            a = e.setModalState,
            n = Object(h.c)(O.a),
            r = Object(p.a)()
          return Object(m.jsxs)(m.Fragment, {
            children: [
              !n &&
                Object(m.jsxs)('div', {
                  className: s.a.nav,
                  children: [
                    Object(m.jsx)(c.b, {
                      to: '/',
                      exact: !0,
                      className: s.a.logo,
                    }),
                    Object(m.jsxs)('div', {
                      children: [
                        Object(m.jsx)(c.b, {
                          to: '/auth',
                          exact: !0,
                          className: s.a.authLink,
                          activeClassName: s.a.linkActive,
                          children: '\u0412\u0425\u041e\u0414',
                        }),
                        Object(m.jsx)(c.b, {
                          to: '/registration',
                          exact: !0,
                          className: s.a.link,
                          activeClassName: s.a.linkActive,
                          children:
                            '\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f',
                        }),
                      ],
                    }),
                  ],
                }),
              n &&
                Object(m.jsxs)(m.Fragment, {
                  children: [
                    Object(m.jsxs)('div', {
                      className: s.a.nav,
                      children: [
                        Object(m.jsx)(c.b, {
                          to: '/',
                          exact: !0,
                          className: r < 780 ? s.a.BigLogo : s.a.logo,
                        }),
                        r < 768
                          ? Object(m.jsx)('button', {
                              className: t ? s.a.closeButton : s.a.menuButton,
                              onClick: function () {
                                return a()
                              },
                            })
                          : null,
                        r >= 1280
                          ? Object(m.jsxs)(m.Fragment, {
                              children: [
                                Object(m.jsx)(c.b, {
                                  to: '/diary',
                                  exact: !0,
                                  className: s.a.link,
                                  activeClassName: s.a.active,
                                  children:
                                    '\u0414\u041d\u0415\u0412\u041d\u0418\u041a',
                                }),
                                Object(m.jsx)(c.b, {
                                  to: '/calculator',
                                  exact: !0,
                                  className: s.a.link,
                                  activeClassName: s.a.active,
                                  children:
                                    '\u041a\u0410\u041b\u042c\u041a\u0423\u041b\u042f\u0422\u041e\u0420',
                                }),
                              ],
                            })
                          : null,
                        r >= 768 && r < 1280
                          ? Object(m.jsxs)('div', {
                              className: s.a.userInfoNav,
                              children: [
                                Object(m.jsx)(_.a, {}),
                                Object(m.jsx)('button', {
                                  className: t
                                    ? s.a.closeButton
                                    : s.a.menuButton,
                                  onClick: function () {
                                    return a()
                                  },
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    r < 768
                      ? Object(m.jsx)('div', {
                          className: s.a.userInfoNav,
                          children: Object(m.jsx)(_.a, {}),
                        })
                      : null,
                  ],
                }),
            ],
          })
        },
        v = function () {
          var e = Object(p.a)(),
            t = Object(r.useState)(!1),
            a = Object(n.a)(t, 2),
            o = a[0],
            i = a[1],
            l = function () {
              return i(function (e) {
                return { isModalOpen: !e.isModalOpen }
              })
            },
            u = o.isModalOpen
          return Object(m.jsxs)(m.Fragment, {
            children: [
              Object(m.jsx)(x, { isModalOpen: u, setModalState: l }),
              u && e < 1280
                ? Object(m.jsx)(f, {
                    children: Object(m.jsxs)('div', {
                      className: s.a.listBurger,
                      children: [
                        Object(m.jsx)('div', {
                          className: s.a.listBurgerItem,
                          children: Object(m.jsx)(c.b, {
                            className: s.a.linkBurger,
                            activeClassName: s.a.linkActiveWhite,
                            to: '/diary',
                            onClick: l,
                            children:
                              '\u0414\u041d\u0415\u0412\u041d\u0418\u041a',
                          }),
                        }),
                        Object(m.jsx)('div', {
                          className: s.a.listBurgerItem,
                          children: Object(m.jsx)(c.b, {
                            className: s.a.linkBurger,
                            activeClassName: s.a.linkActiveWhite,
                            to: '/calculator',
                            onClick: l,
                            children:
                              '\u041a\u0410\u041b\u042c\u041a\u0423\u041b\u042f\u0422\u041e\u0420',
                          }),
                        }),
                      ],
                    }),
                  })
                : '',
            ],
          })
        }
    },
    166: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return d
      }),
        a.d(t, 'b', function () {
          return b
        })
      var n = a(43),
        r = a.n(n),
        c = a(52),
        o = a(53),
        s = a.n(o),
        i = a(29),
        l = a(141),
        u = new Date().toLocaleDateString('fr-CA'),
        d = function (e) {
          return (function () {
            var t = Object(c.a)(
              r.a.mark(function t(a) {
                var n, c
                return r.a.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            a(Object(i.b)()),
                            (t.next = 4),
                            s.a.post(
                              'https://slim-mom-backend.herokuapp.com/users/public',
                              e,
                            )
                          )
                        case 4:
                          ;(n = t.sent),
                            (c = n.data),
                            localStorage.setItem(
                              'calcFormParams',
                              JSON.stringify(e),
                            ),
                            a(Object(i.c)(c)),
                            (t.next = 13)
                          break
                        case 10:
                          ;(t.prev = 10),
                            (t.t0 = t.catch(0)),
                            a(Object(i.a)(t.t0.message))
                        case 13:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[0, 10]],
                )
              }),
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        b = function (e, t) {
          return (function () {
            var a = Object(c.a)(
              r.a.mark(function a(n) {
                var c, o
                return r.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            (a.next = 3),
                            s.a.post(
                              'https://slim-mom-backend.herokuapp.com/users/private',
                              e,
                              {
                                headers: { Authorization: 'Bearer '.concat(t) },
                              },
                            )
                          )
                        case 3:
                          ;(c = a.sent),
                            (o = c.data),
                            n(Object(i.c)(o)),
                            n(Object(l.b)(u)),
                            (a.next = 12)
                          break
                        case 9:
                          ;(a.prev = 9),
                            (a.t0 = a.catch(0)),
                            n(Object(i.a)(a.t0.message))
                        case 12:
                        case 'end':
                          return a.stop()
                      }
                  },
                  a,
                  null,
                  [[0, 9]],
                )
              }),
            )
            return function (e) {
              return a.apply(this, arguments)
            }
          })()
        }
    },
    172: function (e, t, a) {
      e.exports = {
        Overlay: 'BurgerMenu_Overlay__1R7Y0',
        Modal: 'BurgerMenu_Modal__1IW1U',
      }
    },
    187: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return V
      })
      var n = a(135),
        r = a(4),
        c = a(0),
        o = a(21),
        s = a(248),
        i = a(41),
        l = a(47),
        u = a(197),
        d = a.n(u),
        b = a(166),
        j = a(17),
        m = a(247),
        f = a(257),
        h = a(258),
        O = a(117),
        _ = a(250),
        p = a(2),
        x = Object(l.a)({
          root: { color: '#9b9faa', '&$checked': { color: i.a[600] } },
          checked: {},
        })(function (e) {
          return Object(p.jsx)(_.a, Object(j.a)({}, e))
        }),
        v = Object(O.a)(function (e) {
          return { formControl: { color: '#9b9faa' } }
        })
      function g(e) {
        var t = e.onChange,
          a = v()
        return Object(p.jsxs)(f.a, {
          row: !0,
          'aria-label': 'groupBlood',
          name: 'groupBlood',
          defaultValue: '1',
          onChange: t,
          style: { justifyContent: 'space-between' },
          children: [
            Object(p.jsx)(m.a, {
              required: !0,
              component: 'legend',
              style: {
                width: 240,
                fontSize: '17px',
                fontFamily: 'Verdana',
                color: '#9b9faa',
              },
              children:
                '\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u0440\u043e\u0432\u0438',
            }),
            Object(p.jsx)(h.a, {
              className: a.formControl,
              value: '1',
              control: Object(p.jsx)(x, {}),
              label: '1',
            }),
            Object(p.jsx)(h.a, {
              className: a.formControl,
              value: '2',
              control: Object(p.jsx)(x, {}),
              label: '2',
            }),
            Object(p.jsx)(h.a, {
              className: a.formControl,
              value: '3',
              control: Object(p.jsx)(x, {}),
              label: '3',
            }),
            Object(p.jsx)(h.a, {
              className: a.formControl,
              value: '4',
              control: Object(p.jsx)(x, {}),
              label: '4',
            }),
          ],
        })
      }
      var C = a(54),
        k = (a(78), a(142)),
        y = a(30),
        N = a(251),
        B = a(208),
        w = a.n(B),
        S = a(210),
        I = a.n(S),
        L = a(51),
        M = function (e) {
          return e.kcal.loading
        },
        H = function (e) {
          return e.kcal.calcData.kcal
        },
        F = function (e) {
          return e.kcal.calcData.productsNotRecommended
        },
        E = a(28),
        z = a(18),
        q = a(198),
        A = a.n(q),
        D = a(199),
        P = function (e) {
          var t = e.open,
            a = e.onClose,
            n = Object(o.c)(M),
            r = Object(o.c)(H),
            c = Object(o.c)(F),
            s = Object(o.c)(E.a),
            i = Object(p.jsxs)('div', {
              className: A.a.modalContainer,
              children: [
                Object(p.jsx)('button', {
                  className: A.a.modalContainer_closeBtn,
                  type: 'button',
                  onClick: a,
                  children: Object(p.jsx)(w.a, {}),
                }),
                Object(p.jsx)('button', {
                  className: A.a.modalContainer_backBtn,
                  type: 'button',
                  onClick: a,
                  children: Object(p.jsx)(I.a, {
                    style: { fontSize: 'inherit', marginLeft: 15 },
                  }),
                }),
                Object(p.jsx)('h3', {
                  className: A.a.modalContainer_title,
                  children:
                    ' \u0412\u0430\u0448\u0430 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u0430\u044f \u0441\u0443\u0442\u043e\u0447\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 ',
                }),
                Object(p.jsxs)('div', {
                  className: A.a.modalContainer_info,
                  children: [
                    Object(p.jsxs)('p', {
                      className: A.a.modalContainer_amount,
                      children: [
                        r,
                        ' ',
                        Object(p.jsx)('span', {
                          className: A.a.modalContainer_amount_word,
                          children: '\u043a\u043a\u0430\u043b',
                        }),
                        ' ',
                      ],
                    }),
                    Object(p.jsxs)('h4', {
                      className: A.a.modalList_title,
                      children: [
                        '\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c ',
                        Object(p.jsx)('br', {}),
                        ' \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0443\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u044f\u0442\u044c',
                      ],
                    }),
                    Object(p.jsx)('ol', {
                      className: A.a.modalList,
                      children:
                        c &&
                        c.map(function (e) {
                          return Object(p.jsx)(
                            'li',
                            { children: e },
                            Object(D.generate)(),
                          )
                        }),
                    }),
                  ],
                }),
                Object(p.jsx)(y.b, {
                  to: s ? z.a.diary : z.a.reg,
                  style: { textDecoration: 'none' },
                  children: Object(p.jsxs)(k.a, {
                    type: 'button',
                    children: [
                      '\u041d\u0430\u0447\u0430\u0442\u044c \xa0 ',
                      Object(p.jsx)('span', {
                        className: A.a.btn_word,
                        children: '\u0445\u0443\u0434\u0435\u0442\u044c',
                      }),
                    ],
                  }),
                }),
              ],
            })
          return Object(p.jsx)('div', {
            children: n
              ? Object(p.jsx)(L.a, {})
              : Object(p.jsx)(N.a, {
                  onClose: a,
                  'aria-labelledby': 'modal-title',
                  'aria-describedby': 'modal-description',
                  open: t,
                  children: i,
                }),
          })
        },
        W = a(141),
        R = a(139),
        X = Object(l.a)(function (e) {
          var t
          return {
            root:
              ((t = {
                '&:not(:last-child)': Object(r.a)(
                  { marginBottom: '4vh' },
                  e.breakpoints.down('768'),
                  { marginBottom: '10px' },
                ),
              }),
              Object(r.a)(t, e.breakpoints.down('768'), {
                marginBottom: '10px',
              }),
              Object(r.a)(t, 'width', 240),
              Object(r.a)(t, '& label', {
                fontSize: '17px',
                lineHeight: '1.21',
                letterSpacing: '0.04em',
                fontFamily: 'Verdana',
                color: '#9b9faa',
              }),
              Object(r.a)(t, '& label.Mui-focused', { color: i.a[500] }),
              Object(r.a)(t, '& .MuiInput-underline:after', {
                borderBottomColor: i.a[500],
              }),
              t),
          }
        })(s.a)
      function V() {
        var e = Object(c.useState)(!1),
          t = Object(n.a)(e, 2),
          a = t[0],
          r = t[1],
          s = Object(c.useState)(''),
          i = Object(n.a)(s, 2),
          l = i[0],
          u = i[1],
          j = Object(c.useState)(''),
          m = Object(n.a)(j, 2),
          f = m[0],
          h = m[1],
          O = Object(c.useState)(''),
          _ = Object(n.a)(O, 2),
          x = _[0],
          v = _[1],
          y = Object(c.useState)(''),
          N = Object(n.a)(y, 2),
          B = N[0],
          w = N[1],
          S = Object(c.useState)('1'),
          I = Object(n.a)(S, 2),
          L = I[0],
          M = I[1],
          H = Object(c.useState)(!1),
          F = Object(n.a)(H, 2),
          E = F[0],
          z = F[1],
          q = Object(o.b)()
        Object(c.useEffect)(function () {
          r(!0)
        }, [])
        var A = Object(o.c)(R.b),
          D = function (e) {
            var t = e.target,
              a = t.name,
              n = t.value,
              r = t.defaultValue
            switch (a) {
              case 'height':
                u(n)
                break
              case 'age':
                h(n)
                break
              case 'weight':
                v(n)
                break
              case 'desiredWeight':
                w(n)
                break
              case 'groupBlood':
                M(r)
            }
          },
          V = function () {
            u(''), h(''), v(''), w(''), M('')
          }
        return Object(p.jsxs)(p.Fragment, {
          children: [
            Object(p.jsxs)('form', {
              onSubmit: function (e) {
                if ((e.preventDefault(), l || f || x || B))
                  if (+l < 130 || +l > 220)
                    C.b.error(
                      '\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0420\u043e\u0441\u0442',
                    )
                  else if (+f < 18 || +f > 99)
                    C.b.error(
                      '\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0412\u043e\u0437\u0440\u0430\u0441\u0442',
                    )
                  else if (+x < 50 || +x > 200)
                    C.b.error(
                      '\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0412\u0435\u0441',
                    )
                  else if (+B < 45 || +B > 100)
                    C.b.error(
                      '\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e\u0435 \u043f\u043e\u043b\u0435 \u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441',
                    )
                  else {
                    var t = {
                        height: l,
                        age: f,
                        weight: x,
                        desiredWeight: B,
                        groupBlood: L,
                      },
                      a = localStorage.getItem('token')
                    a
                      ? (q(Object(b.b)(t, a)), q(Object(W.b)(A)))
                      : (q(Object(b.a)(t)), z(!0)),
                      q(Object(b.a)(t)),
                      z(!0),
                      V()
                  }
                else
                  C.b.error(
                    '\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f',
                  )
              },
              className: d.a.form,
              noValidate: !0,
              autoComplete: 'off',
              children: [
                Object(p.jsx)('h1', {
                  className: d.a.title,
                  style: {
                    transform: a ? 'translateY(0)' : 'translateY(-101%)',
                    opacity: a ? '1' : '0',
                  },
                  children:
                    '\u041f\u0440\u043e\u0441\u0447\u0438\u0442\u0430\u0439 \u0441\u0432\u043e\u044e \u0441\u0443\u0442\u043e\u0447\u043d\u0443\u044e \u043d\u043e\u0440\u043c\u0443 \u043a\u0430\u043b\u043e\u0440\u0438\u0439 \u043f\u0440\u044f\u043c\u043e \u0441\u0435\u0439\u0447\u0430\u0441',
                }),
                Object(p.jsxs)('div', {
                  className: d.a.formContainer,
                  style: {
                    transform: a ? 'translateX(0)' : 'translateX(-101%)',
                    opacity: a ? '1' : '0',
                  },
                  children: [
                    Object(p.jsxs)('div', {
                      children: [
                        Object(p.jsx)(X, {
                          id: 'standard-basic',
                          label: '\u0420\u043e\u0441\u0442',
                          name: 'height',
                          size: 'small',
                          required: !0,
                          placeholder:
                            '\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 130 \u0434\u043e 220',
                          value: l,
                          type: 'text',
                          onChange: D,
                        }),
                        Object(p.jsx)(X, {
                          id: 'standard-basic',
                          label: '\u0412\u043e\u0437\u0440\u0430\u0441\u0442',
                          size: 'small',
                          required: !0,
                          name: 'age',
                          placeholder:
                            '\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 18 \u0434\u043e 99',
                          value: f,
                          type: 'text',
                          onChange: D,
                        }),
                        Object(p.jsx)(X, {
                          id: 'standard-basic',
                          label:
                            '\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u0432\u0435\u0441',
                          size: 'small',
                          required: !0,
                          name: 'weight',
                          placeholder:
                            '\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 50 \u0434\u043e 200',
                          value: x,
                          type: 'text',
                          onChange: D,
                        }),
                      ],
                    }),
                    Object(p.jsxs)('div', {
                      children: [
                        Object(p.jsx)(X, {
                          id: 'standard-basic',
                          style: { marginBottom: '5vh' },
                          label:
                            '\u0416\u0435\u043b\u0430\u0435\u043c\u044b\u0439 \u0432\u0435\u0441',
                          size: 'small',
                          required: !0,
                          name: 'desiredWeight',
                          placeholder:
                            '\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0442 45 \u0434\u043e 100',
                          value: B,
                          type: 'text',
                          onChange: D,
                        }),
                        Object(p.jsx)(g, { onChange: D }),
                      ],
                    }),
                  ],
                }),
                Object(p.jsx)(k.a, {
                  id: d.a.btn,
                  style: {
                    transform: a ? 'translateX(0)' : 'translateX(-101%)',
                    opacity: a ? '1' : '0',
                  },
                  type: 'submit',
                  children: '\u041f\u043e\u0445\u0443\u0434\u0435\u0442\u044c',
                }),
              ],
            }),
            Object(p.jsx)(P, {
              open: E,
              onClose: function () {
                z(!1)
              },
            }),
          ],
        })
      }
    },
    197: function (e, t, a) {
      e.exports = {
        form: 'CalcForm_form__1aR6I',
        title: 'CalcForm_title__dOh1C',
        formContainer: 'CalcForm_formContainer__3qv5J',
        btn: 'CalcForm_btn__3zInn',
      }
    },
    198: function (e, t, a) {
      e.exports = {
        modalContainer: 'styles_modalContainer__326Ew',
        modalContainer_closeBtn: 'styles_modalContainer_closeBtn__3tUD1',
        modalContainer_backBtn: 'styles_modalContainer_backBtn__305SN',
        modalContainer_title: 'styles_modalContainer_title__1tE2t',
        modalContainer_info: 'styles_modalContainer_info__j5NdY',
        modalContainer_amount: 'styles_modalContainer_amount__k4gWp',
        modalContainer_amount_word: 'styles_modalContainer_amount_word__2z1kj',
        modalList: 'styles_modalList__2j0r0',
        modalList_title: 'styles_modalList_title__1UCqd',
        btn_word: 'styles_btn_word__2x_6Z',
      }
    },
  },
])
//# sourceMappingURL=2.23157a30.chunk.js.map
