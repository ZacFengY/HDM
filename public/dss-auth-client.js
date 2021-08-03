!(function (e, n) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = n())
    : 'function' == typeof define && define.amd
    ? define([], n)
    : 'object' == typeof exports
    ? (exports.dssAuthClient = n())
    : (e.dssAuthClient = n())
})(this, function () {
  return (function (e) {
    var n = {}
    function t(o) {
      if (n[o]) return n[o].exports
      var r = (n[o] = { i: o, l: !1, exports: {} })
      return e[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports
    }
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o })
      }),
      (t.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      }),
      (t.t = function (e, n) {
        if ((1 & n && (e = t(e)), 8 & n)) return e
        if (4 & n && 'object' == typeof e && e && e.__esModule) return e
        var o = Object.create(null)
        if (
          (t.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & n && 'string' != typeof e)
        )
          for (var r in e)
            t.d(
              o,
              r,
              function (n) {
                return e[n]
              }.bind(null, r),
            )
        return o
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default
              }
            : function () {
                return e
              }
        return t.d(n, 'a', n), n
      }),
      (t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
      }),
      (t.p = ''),
      t((t.s = 0))
    )
  })([
    function (e, n, t) {
      'use strict'
      t.r(n),
        t.d(n, 'apiLink', function () {
          return a
        }),
        t.d(n, 'getProfile', function () {
          return f
        }),
        t.d(n, 'getToken', function () {
          return p
        }),
        t.d(n, 'getNT', function () {
          return g
        }),
        t.d(n, 'removeToken', function () {
          return m
        }),
        t.d(n, 'saveToken', function () {
          return _
        }),
        t.d(n, 'checkLogin', function () {
          return h
        }),
        t.d(n, 'redirectToLogin', function () {
          return w
        }),
        t.d(n, 'loginOnOSS', function () {
          return S
        })
      const o = {
          auth_end_point: 'https://ossserver6.dss.vip.ebay.com',
          client_id: 'b6ce9ee95160ebf336fe',
          wait_ms_before_login: 0,
          env: 'prod',
          mode: 'production',
        },
        r = 'true' === window.localStorage.getItem('DSS_DEBUG') || !1
      console.log('DEBUG: ' + r),
        r && console.log('dss-auth-client: profile = ' + JSON.stringify(o))
      const c = (
        document.currentScript || document.querySelector('script[src*="dss-auth-client.js"]')
      ).src
      console.log('myScriptURL = ' + c)
      const i = c.replace(/dss-auth-client\.js.*/, 'login_entry.html'),
        u = c.replace(/dss-auth-client\.js.*/, '../auth-client-service'),
        l = c.replace(/dss-auth-client\.js.*/, 'login_callback.html')
      c.replace(/dss-auth-client\.js.*/, 'config.js')
      let s = { token_name: 'dss-login-token-' + o.env, nt_name: 'dss-nt-' + o.env }
      function a() {
        return u
      }
      let d = w
      function f() {
        return o
      }
      function p() {
        return window.localStorage.getItem(s.token_name)
      }
      function g() {
        return window.localStorage.getItem(s.nt_name)
      }
      function m() {
        return window.localStorage.removeItem(s.token_name)
      }
      function _(e, n) {
        r && console.log('dss-auth-client: saveToken() ' + s.token_name),
          window.localStorage.setItem(s.token_name, e),
          window.localStorage.setItem(s.nt_name, n)
        try {
          !(function (e) {
            document.cookie = s.nt_name + '=' + e + '; max-age=86400000; path=/'
          })(n)
        } catch (e) {
          console.error('trackingEvent failed', e)
        }
      }
      function h(e, n) {
        const t = n || d
        try {
          const e = '_DEFENSOR_TEST_TOKEN_',
            n = '_DEFENSOR_TEST_USER_',
            t = new URLSearchParams(window.location.search),
            o = t.get(e),
            r = t.get(n)
          if (null != o) {
            const e = decodeURIComponent(o)
            null === r && (r = 'UNKNOWN_USER'),
              console.log('In test mode, user, token: ', r, e),
              _(e, r)
          }
        } catch (e) {
          console.error('test token failed:', e)
        }
        let o = window.localStorage.getItem(s.token_name)
        o
          ? (async function (e) {
              try {
                const n = await fetch(u + '/verifyToken?token=' + encodeURIComponent(e))
                if (n.ok) return
                {
                  const e = await n.text()
                  throw new Error('code[' + n.status + ']: ' + e)
                }
              } catch (e) {
                throw e
              }
            })(o)
              .then(() => {
                e && e()
              })
              .catch(e => {
                t(e)
              })
          : t('No Token found')
      }
      function w() {
        const e = window.location.href
        !(function (e, n) {
          const t = new URL(e),
            o = new URL(n)
          return t.origin === o.origin
        })(e, i)
          ? console.log(
              'Source URL: ' +
                e +
                '\nLoginEntry: ' +
                i +
                "\n Are NOT in the same origin, can't support the login.",
            )
          : (window.location.href = i + '?source_url=' + encodeURIComponent(e))
      }
      function S(e, n) {
        let t = o.auth_end_point
        n &&
          n.auth_end_point &&
          n.auth_end_point.toLowerCase().startsWith('http') &&
          (t = n.auth_end_point),
          r && console.log('auth_end_point = ' + t)
        const c =
          t +
          '?' +
          (function (e) {
            const n = []
            for (let t in e) n.push(encodeURIComponent(t) + '=' + encodeURIComponent(e[t]))
            return n.join('&')
          })({ callback: l + '?source_url=' + encodeURIComponent(e) })
        r && console.log('loginOnOSS(): redirect to loginURL = ' + c), (window.location.href = c)
      }
    },
  ])
})
