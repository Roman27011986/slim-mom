;(this['webpackJsonpslim-mom'] = this['webpackJsonpslim-mom'] || []).push([
  [7],
  {
    137: function (t, e, n) {
      t.exports = {
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
    139: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return c
      }),
        n.d(e, 'b', function () {
          return a
        }),
        n.d(e, 'c', function () {
          return r
        }),
        n.d(e, 'd', function () {
          return o
        }),
        n.d(e, 'e', function () {
          return i
        })
      var c = function (t) {
          return t.products.diaryInfo.products
        },
        a = function (t) {
          return t.products.diaryInfo.date
        },
        r = function (t) {
          return t.products.diaryInfo.productsNotRecommended
        },
        o = function (t) {
          return t.products.diaryInfo
        },
        i = function (t) {
          return t.products.loading
        }
    },
    141: function (t, e, n) {
      'use strict'
      n.d(e, 'd', function () {
        return r
      }),
        n.d(e, 'a', function () {
          return o
        }),
        n.d(e, 'c', function () {
          return i
        }),
        n.d(e, 'b', function () {
          return s
        })
      var c = n(20),
        a = n(32),
        r = function (t) {
          return a.a
            .get('/products/search?product='.concat(t))
            .then(function (t) {
              return t.data
            })
            .catch(function (t) {
              return t
            })
        },
        o = function (t) {
          var e = t.title,
            n = t.weight,
            r = t.kcal
          return function (t) {
            var o = { kcal: r, title: e, weight: n },
              i = new Date().toLocaleDateString('fr-CA')
            t(c.a.addProductRequest()),
              a.a
                .post('/products', o)
                .then(function (e) {
                  var n = e.data
                  t(c.a.addProductSuccess(n)), t(s(i))
                })
                .catch(function (e) {
                  return t(c.a.addProductError(e))
                })
          }
        },
        i = function (t) {
          return function (e) {
            e(c.a.deleteProductIdRequest())
            var n = new Date().toLocaleDateString('fr-CA')
            a.a
              .delete('/products/'.concat(t))
              .then(function () {
                e(c.a.deleteProductIdSuccess(t)), e(s(n))
              })
              .catch(function (t) {
                return e(c.a.deleteProductIdError(t.messages))
              })
          }
        },
        s = function (t) {
          return function (e) {
            e(c.a.dateEatenProductsRequest()),
              a.a
                .get('/products/'.concat(t))
                .then(function (t) {
                  e(c.a.dateEatenProductsSuccess(t.data))
                })
                .catch(function (t) {
                  return e(c.a.dateEatenProductsError(t))
                })
          }
        }
    },
    142: function (t, e, n) {
      'use strict'
      var c = n(246),
        a = n(41),
        r = n(47),
        o = Object(r.a)({
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
            '&:hover': { backgroundColor: a.a[900] },
          },
        })(c.a)
      e.a = o
    },
    144: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return a
      })
      var c = n(2)
      function a(t) {
        var e = t.children
        return Object(c.jsx)('div', { className: 'container', children: e })
      }
    },
    152: function (t, e, n) {
      'use strict'
      n(0)
      var c = n(21),
        a = n(49),
        r = n(28),
        o = n(137),
        i = n.n(o),
        s = n(2)
      e.a = function () {
        var t = Object(c.c)(r.b),
          e = Object(c.c)(r.a),
          n = Object(c.b)()
        return Object(s.jsx)(s.Fragment, {
          children:
            e &&
            Object(s.jsxs)('div', {
              className: i.a.userInfo,
              children: [
                Object(s.jsxs)('span', {
                  className: i.a.userLogin,
                  children: [' ', t, ' '],
                }),
                Object(s.jsx)('button', {
                  type: 'button',
                  className: i.a.exitButton,
                  onClick: function (t) {
                    n(Object(a.c)())
                  },
                  children: '\u0412\u044b\u0439\u0442\u0438',
                }),
              ],
            }),
        })
      }
    },
    157: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return v
      })
      var c = n(135),
        a = n(0),
        r = n(30),
        o = n(137),
        i = n.n(o),
        s = n(170),
        u = n(171),
        l = n(177),
        d = n(173),
        b = n(172),
        j = n.n(b),
        f = n(2),
        m = (function (t) {
          Object(l.a)(n, t)
          var e = Object(d.a)(n)
          function n() {
            var t
            Object(s.a)(this, n)
            for (var c = arguments.length, a = new Array(c), r = 0; r < c; r++)
              a[r] = arguments[r]
            return (
              ((t = e.call.apply(e, [this].concat(a))).handleEsc = function (
                e,
              ) {
                'Escape' === e.code && t.props.hideModal()
              }),
              (t.onHandleClick = function () {
                t.props.hideModal()
              }),
              (t.handleBackdropClick = function (e) {
                e.target === e.currentTarget && t.props.hideModal()
              }),
              t
            )
          }
          return (
            Object(u.a)(n, [
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
                  return Object(f.jsx)('div', {
                    className: j.a.Overlay,
                    onClick: this.handleBackdropClick,
                    children: Object(f.jsx)('div', {
                      className: j.a.Modal,
                      children: this.props.children,
                    }),
                  })
                },
              },
            ]),
            n
          )
        })(a.Component),
        p = n(21),
        _ = n(28),
        O = n(152),
        h = n(138),
        x = function (t) {
          var e = t.isModalOpen,
            n = t.setModalState,
            c = Object(p.c)(_.a),
            a = Object(h.a)()
          return Object(f.jsxs)(f.Fragment, {
            children: [
              !c &&
                Object(f.jsxs)('div', {
                  className: i.a.nav,
                  children: [
                    Object(f.jsx)(r.b, {
                      to: '/',
                      exact: !0,
                      className: i.a.logo,
                    }),
                    Object(f.jsxs)('div', {
                      children: [
                        Object(f.jsx)(r.b, {
                          to: '/auth',
                          exact: !0,
                          className: i.a.authLink,
                          activeClassName: i.a.linkActive,
                          children: '\u0412\u0425\u041e\u0414',
                        }),
                        Object(f.jsx)(r.b, {
                          to: '/registration',
                          exact: !0,
                          className: i.a.link,
                          activeClassName: i.a.linkActive,
                          children:
                            '\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f',
                        }),
                      ],
                    }),
                  ],
                }),
              c &&
                Object(f.jsxs)(f.Fragment, {
                  children: [
                    Object(f.jsxs)('div', {
                      className: i.a.nav,
                      children: [
                        Object(f.jsx)(r.b, {
                          to: '/',
                          exact: !0,
                          className: a < 780 ? i.a.BigLogo : i.a.logo,
                        }),
                        a < 768
                          ? Object(f.jsx)('button', {
                              className: e ? i.a.closeButton : i.a.menuButton,
                              onClick: function () {
                                return n()
                              },
                            })
                          : null,
                        a >= 1280
                          ? Object(f.jsxs)(f.Fragment, {
                              children: [
                                Object(f.jsx)(r.b, {
                                  to: '/diary',
                                  exact: !0,
                                  className: i.a.link,
                                  activeClassName: i.a.active,
                                  children:
                                    '\u0414\u041d\u0415\u0412\u041d\u0418\u041a',
                                }),
                                Object(f.jsx)(r.b, {
                                  to: '/calculator',
                                  exact: !0,
                                  className: i.a.link,
                                  activeClassName: i.a.active,
                                  children:
                                    '\u041a\u0410\u041b\u042c\u041a\u0423\u041b\u042f\u0422\u041e\u0420',
                                }),
                              ],
                            })
                          : null,
                        a >= 768 && a < 1280
                          ? Object(f.jsxs)('div', {
                              className: i.a.userInfoNav,
                              children: [
                                Object(f.jsx)(O.a, {}),
                                Object(f.jsx)('button', {
                                  className: e
                                    ? i.a.closeButton
                                    : i.a.menuButton,
                                  onClick: function () {
                                    return n()
                                  },
                                }),
                              ],
                            })
                          : null,
                      ],
                    }),
                    a < 768
                      ? Object(f.jsx)('div', {
                          className: i.a.userInfoNav,
                          children: Object(f.jsx)(O.a, {}),
                        })
                      : null,
                  ],
                }),
            ],
          })
        },
        v = function () {
          var t = Object(h.a)(),
            e = Object(a.useState)(!1),
            n = Object(c.a)(e, 2),
            o = n[0],
            s = n[1],
            u = function () {
              return s(function (t) {
                return { isModalOpen: !t.isModalOpen }
              })
            },
            l = o.isModalOpen
          return Object(f.jsxs)(f.Fragment, {
            children: [
              Object(f.jsx)(x, { isModalOpen: l, setModalState: u }),
              l && t < 1280
                ? Object(f.jsx)(m, {
                    children: Object(f.jsxs)('div', {
                      className: i.a.listBurger,
                      children: [
                        Object(f.jsx)('div', {
                          className: i.a.listBurgerItem,
                          children: Object(f.jsx)(r.b, {
                            className: i.a.linkBurger,
                            activeClassName: i.a.linkActiveWhite,
                            to: '/diary',
                            onClick: u,
                            children:
                              '\u0414\u041d\u0415\u0412\u041d\u0418\u041a',
                          }),
                        }),
                        Object(f.jsx)('div', {
                          className: i.a.listBurgerItem,
                          children: Object(f.jsx)(r.b, {
                            className: i.a.linkBurger,
                            activeClassName: i.a.linkActiveWhite,
                            to: '/calculator',
                            onClick: u,
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
    166: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return d
      }),
        n.d(e, 'b', function () {
          return b
        })
      var c = n(43),
        a = n.n(c),
        r = n(52),
        o = n(53),
        i = n.n(o),
        s = n(29),
        u = n(141),
        l = new Date().toLocaleDateString('fr-CA'),
        d = function (t) {
          return (function () {
            var e = Object(r.a)(
              a.a.mark(function e(n) {
                var c, r
                return a.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            n(Object(s.b)()),
                            (e.next = 4),
                            i.a.post(
                              'https://slim-mom-backend.herokuapp.com/users/public',
                              t,
                            )
                          )
                        case 4:
                          ;(c = e.sent),
                            (r = c.data),
                            localStorage.setItem(
                              'calcFormParams',
                              JSON.stringify(t),
                            ),
                            n(Object(s.c)(r)),
                            (e.next = 13)
                          break
                        case 10:
                          ;(e.prev = 10),
                            (e.t0 = e.catch(0)),
                            n(Object(s.a)(e.t0.message))
                        case 13:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [[0, 10]],
                )
              }),
            )
            return function (t) {
              return e.apply(this, arguments)
            }
          })()
        },
        b = function (t, e) {
          return (function () {
            var n = Object(r.a)(
              a.a.mark(function n(c) {
                var r, o
                return a.a.wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.prev = 0),
                            (n.next = 3),
                            i.a.post(
                              'https://slim-mom-backend.herokuapp.com/users/private',
                              t,
                              {
                                headers: { Authorization: 'Bearer '.concat(e) },
                              },
                            )
                          )
                        case 3:
                          ;(r = n.sent),
                            (o = r.data),
                            c(Object(s.c)(o)),
                            c(Object(u.b)(l)),
                            (n.next = 12)
                          break
                        case 9:
                          ;(n.prev = 9),
                            (n.t0 = n.catch(0)),
                            c(Object(s.a)(n.t0.message))
                        case 12:
                        case 'end':
                          return n.stop()
                      }
                  },
                  n,
                  null,
                  [[0, 9]],
                )
              }),
            )
            return function (t) {
              return n.apply(this, arguments)
            }
          })()
        }
    },
    168: function (t, e, n) {
      t.exports = { list: 's_list__Q7D4t', ul: 's_ul__3BAc7' }
    },
    169: function (t, e, n) {
      t.exports = {
        section: 'RightSideBar_section__3uxU5',
        container: 'RightSideBar_container__3zW4Q',
        box: 'RightSideBar_box__3xM0y',
        title: 'RightSideBar_title__1dOgS',
        list: 'RightSideBar_list__1D0K1',
        ul: 'RightSideBar_ul__1mLmQ',
        text: 'RightSideBar_text__AJLXj',
      }
    },
    170: function (t, e, n) {
      'use strict'
      function c(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
      n.d(e, 'a', function () {
        return c
      })
    },
    171: function (t, e, n) {
      'use strict'
      function c(t, e) {
        for (var n = 0; n < e.length; n++) {
          var c = e[n]
          ;(c.enumerable = c.enumerable || !1),
            (c.configurable = !0),
            'value' in c && (c.writable = !0),
            Object.defineProperty(t, c.key, c)
        }
      }
      function a(t, e, n) {
        return e && c(t.prototype, e), n && c(t, n), t
      }
      n.d(e, 'a', function () {
        return a
      })
    },
    172: function (t, e, n) {
      t.exports = {
        Overlay: 'BurgerMenu_Overlay__1R7Y0',
        Modal: 'BurgerMenu_Modal__1IW1U',
      }
    },
    173: function (t, e, n) {
      'use strict'
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
      }
      function a(t) {
        return (a =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (t) {
                return typeof t
              }
            : function (t) {
                return t &&
                  'function' === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t
              })(t)
      }
      function r(t, e) {
        return !e || ('object' !== a(e) && 'function' !== typeof e)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                )
              return t
            })(t)
          : e
      }
      function o(t) {
        var e = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1
          if (Reflect.construct.sham) return !1
          if ('function' === typeof Proxy) return !0
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            )
          } catch (t) {
            return !1
          }
        })()
        return function () {
          var n,
            a = c(t)
          if (e) {
            var o = c(this).constructor
            n = Reflect.construct(a, arguments, o)
          } else n = a.apply(this, arguments)
          return r(this, n)
        }
      }
      n.d(e, 'a', function () {
        return o
      })
    },
    174: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return j
      })
      var c = n(135),
        a = n(0),
        r = n(21),
        o = n(168),
        i = n.n(o),
        s = n(2),
        u = function (t) {
          var e = t.info
          return Object(s.jsxs)('ul', {
            className: i.a.ul,
            children: [
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children:
                      '\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.kcalRemain, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children:
                      '\u0423\u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u043e',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.totalKcalPerDay, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children:
                      '\u0414\u043d\u0435\u0432\u043d\u0430\u044f \u043d\u043e\u0440\u043c\u0430',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.dayNorm, ' \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
              Object(s.jsxs)('li', {
                className: i.a.list,
                children: [
                  Object(s.jsx)('p', {
                    className: i.a.ul,
                    children: 'n% \u043e\u0442 \u043d\u043e\u0440\u043c\u044b',
                  }),
                  ' ',
                  Object(s.jsxs)('p', {
                    className: i.a.ul,
                    children: [e.percentage, ' % \u043a\u043a\u0430\u043b'],
                  }),
                ],
              }),
            ],
          })
        },
        l = n(139),
        d = n(169),
        b = n.n(d)
      var j = function () {
        var t = Object(r.c)(l.d),
          e = Object(r.c)(l.c),
          n = Object(a.useState)([]),
          o = Object(c.a)(n, 2),
          i = o[0],
          d = o[1],
          j = Object(a.useState)(0),
          f = Object(c.a)(j, 2),
          m = f[0],
          p = f[1]
        return (
          Object(a.useEffect)(
            function () {
              t && p(t)
            },
            [t],
          ),
          Object(a.useEffect)(
            function () {
              e && d(e)
            },
            [e],
          ),
          Object(s.jsx)('div', {
            children: Object(s.jsx)('section', {
              className: b.a.section,
              children: Object(s.jsxs)('div', {
                className: b.a.container,
                children: [
                  Object(s.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(s.jsxs)('h3', {
                        className: b.a.title,
                        children: [
                          '\u0421\u0432\u043e\u0434\u043a\u0430 \u0437\u0430 \u0434\u0430\u0442\u0443 ',
                          m.date,
                          ' ',
                        ],
                      }),
                      Object(s.jsx)(u, { info: m }),
                    ],
                  }),
                  Object(s.jsxs)('div', {
                    className: b.a.box,
                    children: [
                      Object(s.jsx)('h3', {
                        className: b.a.title,
                        children:
                          '\u041d\u0435\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c\u044b\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
                      }),
                      i.length > 0
                        ? Object(s.jsxs)('p', {
                            className: b.a.list,
                            children: [' ', i.join(', '), ' '],
                          })
                        : Object(s.jsx)('p', {
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
    176: function (t, e, n) {
      'use strict'
      n.d(e, 'a', function () {
        return o
      })
      var c = n(186),
        a = n(2),
        r = Object(c.a)({
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
      function o(t) {
        var e = t.children,
          n = r()
        return Object(a.jsx)('div', {
          className: n.containerSideBar,
          children: e,
        })
      }
    },
    177: function (t, e, n) {
      'use strict'
      function c(t, e) {
        return (c =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t
          })(t, e)
      }
      function a(t, e) {
        if ('function' !== typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function',
          )
        ;(t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          e && c(t, e)
      }
      n.d(e, 'a', function () {
        return a
      })
    },
    216: function (t, e, n) {
      t.exports = {
        product_Item: 'DiaryProductListItem_product_Item__iU-ph',
        product_name: 'DiaryProductListItem_product_name__2kRjQ',
        product_weight:
          'DiaryProductListItem_product_weight__1Cuh5 DiaryProductListItem_product_name__2kRjQ',
        product_kCal:
          'DiaryProductListItem_product_kCal__30vvC DiaryProductListItem_product_name__2kRjQ DiaryProductListItem_product_weight__1Cuh5 DiaryProductListItem_product_name__2kRjQ',
        product_button: 'DiaryProductListItem_product_button__17KIB',
        product_button_dis: 'DiaryProductListItem_product_button_dis__13XDD',
      }
    },
    217: function (t, e, n) {
      t.exports = {
        container: 'DiaryProductsList_container__2ePBD',
        list: 'DiaryProductsList_list__XlHlq',
        mobilButton: 'DiaryProductsList_mobilButton__-m_yk',
      }
    },
    218: function (t, e, n) {
      ;(function (e) {
        var n = /^\s+|\s+$/g,
          c = /^[-+]0x[0-9a-f]+$/i,
          a = /^0b[01]+$/i,
          r = /^0o[0-7]+$/i,
          o = parseInt,
          i = 'object' == typeof e && e && e.Object === Object && e,
          s = 'object' == typeof self && self && self.Object === Object && self,
          u = i || s || Function('return this')(),
          l = Object.prototype.toString,
          d = Math.max,
          b = Math.min,
          j = function () {
            return u.Date.now()
          }
        function f(t) {
          var e = typeof t
          return !!t && ('object' == e || 'function' == e)
        }
        function m(t) {
          if ('number' == typeof t) return t
          if (
            (function (t) {
              return (
                'symbol' == typeof t ||
                ((function (t) {
                  return !!t && 'object' == typeof t
                })(t) &&
                  '[object Symbol]' == l.call(t))
              )
            })(t)
          )
            return NaN
          if (f(t)) {
            var e = 'function' == typeof t.valueOf ? t.valueOf() : t
            t = f(e) ? e + '' : e
          }
          if ('string' != typeof t) return 0 === t ? t : +t
          t = t.replace(n, '')
          var i = a.test(t)
          return i || r.test(t)
            ? o(t.slice(2), i ? 2 : 8)
            : c.test(t)
            ? NaN
            : +t
        }
        t.exports = function (t, e, n) {
          var c,
            a,
            r,
            o,
            i,
            s,
            u = 0,
            l = !1,
            p = !1,
            _ = !0
          if ('function' != typeof t) throw new TypeError('Expected a function')
          function O(e) {
            var n = c,
              r = a
            return (c = a = void 0), (u = e), (o = t.apply(r, n))
          }
          function h(t) {
            return (u = t), (i = setTimeout(v, e)), l ? O(t) : o
          }
          function x(t) {
            var n = t - s
            return void 0 === s || n >= e || n < 0 || (p && t - u >= r)
          }
          function v() {
            var t = j()
            if (x(t)) return g(t)
            i = setTimeout(
              v,
              (function (t) {
                var n = e - (t - s)
                return p ? b(n, r - (t - u)) : n
              })(t),
            )
          }
          function g(t) {
            return (i = void 0), _ && c ? O(t) : ((c = a = void 0), o)
          }
          function y() {
            var t = j(),
              n = x(t)
            if (((c = arguments), (a = this), (s = t), n)) {
              if (void 0 === i) return h(s)
              if (p) return (i = setTimeout(v, e)), O(s)
            }
            return void 0 === i && (i = setTimeout(v, e)), o
          }
          return (
            (e = m(e) || 0),
            f(n) &&
              ((l = !!n.leading),
              (r = (p = 'maxWait' in n) ? d(m(n.maxWait) || 0, e) : r),
              (_ = 'trailing' in n ? !!n.trailing : _)),
            (y.cancel = function () {
              void 0 !== i && clearTimeout(i), (u = 0), (c = s = a = i = void 0)
            }),
            (y.flush = function () {
              return void 0 === i ? o : g(j())
            }),
            y
          )
        }
      }.call(this, n(79)))
    },
    219: function (t, e, n) {
      t.exports = {
        form: 'DiaryAddProductForm_form__10tYS',
        form_Mobile: 'DiaryAddProductForm_form_Mobile__3AAsw',
        input: 'DiaryAddProductForm_input__SCwLl',
        btn: 'DiaryAddProductForm_btn__2z-1F',
        btn_Add: 'DiaryAddProductForm_btn_Add__2gI2S',
      }
    },
    220: function (t, e, n) {
      t.exports = {
        btn: 'ModalDiaryAddProductForm_btn__x1qZ5',
        btn_dis:
          'ModalDiaryAddProductForm_btn_dis__1YHZn ModalDiaryAddProductForm_btn__x1qZ5',
      }
    },
    221: function (t, e, n) {
      t.exports = {
        open: 'Modal_open__2Crr8',
        close: 'Modal_close__2c9it',
        overlay: 'Modal_overlay__3i5B2',
        modal: 'Modal_modal__2K_Z1',
        closeButton: 'Modal_closeButton__10NZ2',
        arrowCloseButton: 'Modal_arrowCloseButton__3E0xY',
      }
    },
    222: function (t, e, n) {
      t.exports = {
        container: 'DiaryPage_container__2sFCy',
        containerError: 'DiaryPage_containerError__iuwv3',
        container_page: 'DiaryPage_container_page__3lF-Q',
        container_list: 'DiaryPage_container_list__2ay_X',
      }
    },
    223: function (t, e, n) {
      t.exports = {
        wrapper: 'styless_wrapper__3bWPY',
        section: 'styless_section__3-mYi',
        box: 'styless_box__2NYQd',
        header: 'styless_header__1KpoF',
        headerBox: 'styless_headerBox__rhW-a',
      }
    },
    249: function (t, e, n) {
      'use strict'
      n.r(e)
      var c = n(176),
        a = n(144),
        r = n(174),
        o = n(166),
        i = n(0),
        s = n(138),
        u = n(21),
        l = n(17),
        d = n(70),
        b = n(135),
        j = n(139),
        f = n(141),
        m = n(216),
        p = n.n(m),
        _ = n(2)
      function O(t) {
        var e = t.title,
          n = t.weight,
          c = t.kcal,
          a = t.id,
          r = Object(u.b)(),
          o = c,
          i = Object(u.c)(j.b),
          s = new Date().toLocaleDateString('fr-CA')
        return Object(_.jsxs)('li', {
          className: p.a.product_Item,
          children: [
            Object(_.jsx)('span', { className: p.a.product_name, children: e }),
            Object(_.jsxs)('span', {
              className: p.a.product_weight,
              children: [n, ' \u0433'],
            }),
            Object(_.jsxs)('span', {
              className: p.a.product_kCal,
              children: [o, ' \u043a\u043a\u0430\u043b'],
            }),
            Object(_.jsx)('button', {
              className: s === i ? p.a.product_button : p.a.product_button_dis,
              type: 'button',
              onClick: function () {
                return (
                  r(Object(f.b)(i)), r(Object(f.c)(a)), void r(Object(f.b)(i))
                )
              },
            }),
          ],
        })
      }
      var h = n(217),
        x = n.n(h),
        v = ['id']
      function g() {
        var t = Object(u.c)(j.a),
          e = Object(i.useState)([]),
          n = Object(b.a)(e, 2),
          c = n[0],
          a = n[1],
          r = Object(u.b)()
        return (
          Object(i.useEffect)(
            function () {
              t && a(t)
            },
            [r, t],
          ),
          Object(_.jsx)(_.Fragment, {
            children: Object(_.jsx)('div', {
              className: x.a.container,
              children:
                (null === c || void 0 === c ? void 0 : c.length) > 0
                  ? Object(_.jsx)('ul', {
                      className: x.a.list,
                      children: c.map(function (t) {
                        var e = t.id,
                          n = Object(d.a)(t, v)
                        return Object(_.jsx)(O, Object(l.a)({ id: e }, n), e)
                      }),
                    })
                  : null,
            }),
          })
        )
      }
      var y = n(4),
        N = n(117),
        k = n(248),
        w = n(51),
        B = Object(N.a)(function (t) {
          var e
          return {
            textField:
              ((e = {
                marginLeft: t.spacing(1),
                marginRight: t.spacing(1),
                marginBottom: t.spacing(4),
                width: '188px',
              }),
              Object(y.a)(e, t.breakpoints.up('768'), { width: '259px' }),
              Object(y.a)(
                e,
                '& input',
                Object(y.a)(
                  {
                    fontSize: '18px',
                    fontWeight: '700',
                    fontFamily: 'Verdana',
                  },
                  t.breakpoints.up('768'),
                  { fontSize: '26px' },
                ),
              ),
              e),
            underline: {
              '&&&:before': { borderBottom: 'none' },
              '&&:after': { borderBottom: 'none' },
            },
          }
        })
      function S() {
        var t = Object(i.useState)(new Date().toLocaleDateString('fr-CA')),
          e = Object(b.a)(t, 2),
          n = e[0],
          c = e[1],
          a = Object(u.c)(j.e),
          r = Object(u.b)()
        Object(i.useEffect)(
          function () {
            r(Object(f.b)(n))
          },
          [n, r],
        )
        var o = B()
        return Object(_.jsx)(_.Fragment, {
          children: a
            ? Object(_.jsx)(w.a, {})
            : Object(_.jsx)('form', {
                className: o.container,
                noValidate: !0,
                children: Object(_.jsx)(k.a, {
                  InputProps: { classes: o },
                  id: 'date',
                  type: 'date',
                  defaultValue: n,
                  onChange: function (t) {
                    return (function (t) {
                      var e = t.target.value
                      c(e)
                    })(t)
                  },
                  className: o.textField,
                  InputLabelProps: { shrink: !0 },
                }),
              }),
        })
      }
      var D = n(54),
        C = n(218),
        P = n.n(C),
        L = n(219),
        I = n.n(L),
        F = n(142)
      n(78)
      function M() {
        var t = Object(i.useState)(''),
          e = Object(b.a)(t, 2),
          n = e[0],
          c = e[1],
          a = Object(i.useState)(''),
          r = Object(b.a)(a, 2),
          o = r[0],
          l = r[1],
          d = Object(i.useState)(''),
          m = Object(b.a)(d, 2),
          p = m[0],
          O = m[1],
          h = Object(i.useState)([]),
          x = Object(b.a)(h, 2),
          v = x[0],
          g = x[1],
          y = Object(i.useState)(!1),
          N = Object(b.a)(y, 2),
          k = N[0],
          B = N[1],
          S = Object(u.b)(),
          C = Object(u.c)(j.b)
        Object(i.useEffect)(
          P()(function () {
            n.length >= 3 &&
              Object(f.d)(n)
                .then(B(!0))
                .then(function (t) {
                  g(t)
                })
                .finally(function () {
                  return B(!1)
                })
          }, 300),
          [n],
        )
        var L = Object(i.useCallback)(function (t) {
            var e = t.target.value
            if (e > 5e3) {
              return (
                l(''),
                D.b.warn(
                  '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0432\u0435\u0441',
                )
              )
            }
            l(Number(e))
          }),
          M = function () {
            c(''), l('')
          },
          E = Object(s.a)()
        return Object(_.jsxs)(_.Fragment, {
          children: [
            k ? Object(_.jsx)(w.a, {}) : null,
            Object(_.jsxs)('form', {
              className: E >= 768 ? I.a.form : I.a.form_Mobile,
              onSubmit: function (t) {
                if ((t.preventDefault(), 0 === v.length)) {
                  return (
                    c(''),
                    D.b.warn(
                      '\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0438\u043b\u0438 \u0432\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430',
                    )
                  )
                }
                if (
                  !(null === v || void 0 === v
                    ? void 0
                    : v.find(function (t) {
                        return t.title === n
                      }))
                ) {
                  return (
                    c(''),
                    D.b.warn(
                      '\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430',
                    )
                  )
                }
                S(Object(f.b)(C)),
                  S(
                    Object(f.a)({
                      kcal: Number(p),
                      weight: Number(o),
                      title: n,
                    }),
                  ),
                  S(Object(f.b)(C)),
                  M()
              },
              children: [
                Object(_.jsx)('input', {
                  className: I.a.input,
                  list: 'cookies',
                  name: 'product',
                  value: n,
                  placeholder:
                    '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430',
                  type: 'text',
                  autoComplete: 'off',
                  onChange: function (t) {
                    var e = t.target.value
                    if ((c(e), !v)) return null
                    var n =
                        null === v || void 0 === v
                          ? void 0
                          : v.find(function (t) {
                              return t.title === e
                            }),
                      a = null === n || void 0 === n ? void 0 : n.kcal
                    O(a)
                  },
                  required: !0,
                }),
                (null === v || void 0 === v ? void 0 : v.length) > 0 &&
                  Object(_.jsx)('datalist', {
                    id: 'cookies',
                    children: v.map(function (t) {
                      var e = t.id,
                        n = t.title
                      return Object(_.jsx)(
                        'option',
                        { value: n, children: n },
                        e,
                      )
                    }),
                  }),
                Object(_.jsx)('input', {
                  className: I.a.input,
                  name: 'weight',
                  value: o,
                  placeholder: '\u0413\u0440\u0430\u043c\u043c\u044b',
                  type: 'number',
                  min: '0',
                  onChange: L,
                  required: !0,
                }),
                E >= 768
                  ? Object(_.jsx)('button', {
                      type: 'submit',
                      className: I.a.btn,
                    })
                  : '',
                E < 768
                  ? Object(_.jsx)(F.a, {
                      type: 'submit',
                      className: I.a.btn_Add,
                      children:
                        '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c',
                    })
                  : null,
              ],
            }),
          ],
        })
      }
      var E = n(220),
        A = n.n(E),
        R = n(221),
        H = n.n(R),
        q = function (t) {
          var e = t.children,
            n = t.openModal,
            c = t.toggleModal,
            a = Object(s.a)()
          Object(i.useEffect)(function () {
            var t = function (t) {
              'Escape' === t.code && c()
            }
            return (
              window.addEventListener('keydown', t),
              function () {
                window.removeEventListener('keydown', t)
              }
            )
          }, []),
            Object(i.useEffect)(
              function () {
                document.body.className = n ? H.a.open : H.a.close
              },
              [n],
            )
          return Object(_.jsx)(_.Fragment, {
            children:
              n &&
              Object(_.jsx)('div', {
                className: H.a.overlay,
                onClick: function (t) {
                  'overlay' === t.target.dataset.name && c()
                },
                'data-name': 'overlay',
                children: Object(_.jsxs)('div', {
                  className: H.a.modal,
                  'data-name': 'modal',
                  children: [
                    Object(_.jsx)('button', {
                      className:
                        a < 768 ? H.a.arrowCloseButton : H.a.closeButton,
                      type: 'button',
                      onClick: c,
                    }),
                    e,
                  ],
                }),
              }),
          })
        },
        T = function () {
          var t = Object(i.useState)(!1),
            e = Object(b.a)(t, 2),
            n = e[0],
            c = e[1],
            a = function () {
              c(!n)
            },
            r = Object(u.c)(j.b),
            o = new Date().toLocaleDateString('fr-CA')
          return Object(_.jsxs)(_.Fragment, {
            children: [
              o === r
                ? Object(_.jsx)('button', {
                    type: 'button',
                    className: A.a.btn,
                    onClick: a,
                  })
                : null,
              Object(_.jsx)(q, {
                arrowVisible: !0,
                toggleModal: a,
                openModal: n,
                children: Object(_.jsx)(M, { toggleModal: a }),
              }),
            ],
          })
        },
        W = n(222),
        z = n.n(W)
      function Q() {
        var t = Object(u.b)(),
          e = localStorage.getItem('token'),
          n = localStorage.getItem('calcFormParams')
        Object(i.useEffect)(function () {
          n && t(Object(o.b)(JSON.parse(n), e))
        }, [])
        var c = Object(s.a)(),
          a = Object(u.c)(j.b),
          r = new Date().toLocaleDateString('fr-CA')
        return Object(_.jsx)(_.Fragment, {
          children:
            c >= 768
              ? Object(_.jsxs)('div', {
                  className: z.a.container_page,
                  children: [
                    Object(_.jsx)(S, {}),
                    r === a ? Object(_.jsx)(M, {}) : null,
                    Object(_.jsx)('div', {
                      className: z.a.container_list,
                      children: Object(_.jsx)(g, {}),
                    }),
                  ],
                })
              : Object(_.jsxs)('div', {
                  className: z.a.containerError,
                  children: [
                    Object(_.jsx)(S, {}),
                    Object(_.jsx)('div', { children: Object(_.jsx)(g, {}) }),
                    c <= 768 ? Object(_.jsx)(T, {}) : Object(_.jsx)(M, {}),
                  ],
                }),
        })
      }
      var X = n(157),
        J = n(152),
        K = n(223),
        Y = n.n(K),
        V = function () {
          var t = Object(s.a)()
          return Object(_.jsx)(_.Fragment, {
            children:
              t >= 1280
                ? Object(_.jsx)('div', {
                    className: Y.a.wrapper,
                    children: Object(_.jsxs)('div', {
                      className: Y.a.section,
                      children: [
                        Object(_.jsxs)('div', {
                          className: Y.a.header,
                          children: [
                            Object(_.jsx)(X.a, {}),
                            Object(_.jsx)('div', {
                              className: Y.a.headerBox,
                              children: t >= 1280 ? Object(_.jsx)(J.a, {}) : '',
                            }),
                          ],
                        }),
                        Object(_.jsxs)('div', {
                          className: Y.a.box,
                          children: [
                            Object(_.jsx)('div', {
                              className: Y.a.case,
                              children: Object(_.jsx)(Q, {}),
                            }),
                            Object(_.jsx)(r.a, {}),
                          ],
                        }),
                      ],
                    }),
                  })
                : Object(_.jsxs)('div', {
                    className: Y.a.box,
                    children: [
                      Object(_.jsxs)(a.a, {
                        children: [
                          Object(_.jsx)(X.a, {}),
                          Object(_.jsx)(Q, {}),
                        ],
                      }),
                      Object(_.jsxs)(c.a, {
                        children: [
                          t >= 1280 ? Object(_.jsx)(J.a, {}) : '',
                          Object(_.jsx)(r.a, {}),
                        ],
                      }),
                    ],
                  }),
          })
        }
      e.default = function () {
        return Object(_.jsx)(V, {})
      }
    },
  },
])
//# sourceMappingURL=7.1067a898.chunk.js.map
