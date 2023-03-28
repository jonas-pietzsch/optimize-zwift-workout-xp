function A0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function xm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function wm(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == "function") {
    var n = function r() {
      if (this instanceof r) {
        var o = [null];
        o.push.apply(o, arguments);
        var i = Function.bind.apply(t, o);
        return new i();
      }
      return t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, "__esModule", { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var o = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        o.get
          ? o
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var Ci = {},
  D0 = {
    get exports() {
      return Ci;
    },
    set exports(e) {
      Ci = e;
    },
  },
  Na = {},
  S = {},
  F0 = {
    get exports() {
      return S;
    },
    set exports(e) {
      S = e;
    },
  },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xi = Symbol.for("react.element"),
  B0 = Symbol.for("react.portal"),
  j0 = Symbol.for("react.fragment"),
  W0 = Symbol.for("react.strict_mode"),
  U0 = Symbol.for("react.profiler"),
  V0 = Symbol.for("react.provider"),
  H0 = Symbol.for("react.context"),
  K0 = Symbol.for("react.forward_ref"),
  G0 = Symbol.for("react.suspense"),
  Q0 = Symbol.for("react.memo"),
  X0 = Symbol.for("react.lazy"),
  mf = Symbol.iterator;
function Y0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (mf && e[mf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  km = Object.assign,
  bm = {};
function Mo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bm),
    (this.updater = n || Sm);
}
Mo.prototype.isReactComponent = {};
Mo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Mo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cm() {}
Cm.prototype = Mo.prototype;
function Dc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = bm),
    (this.updater = n || Sm);
}
var Fc = (Dc.prototype = new Cm());
Fc.constructor = Dc;
km(Fc, Mo.prototype);
Fc.isPureReactComponent = !0;
var hf = Array.isArray,
  Em = Object.prototype.hasOwnProperty,
  Bc = { current: null },
  Pm = { key: !0, ref: !0, __self: !0, __source: !0 };
function $m(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Em.call(t, r) && !Pm.hasOwnProperty(r) && (o[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) o.children = n;
  else if (1 < a) {
    for (var s = Array(a), u = 0; u < a; u++) s[u] = arguments[u + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) o[r] === void 0 && (o[r] = a[r]);
  return {
    $$typeof: Xi,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Bc.current,
  };
}
function q0(e, t) {
  return {
    $$typeof: Xi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function jc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xi;
}
function Z0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var vf = /\/+/g;
function js(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Z0("" + e.key)
    : t.toString(36);
}
function Bl(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xi:
          case B0:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + js(l, 0) : r),
      hf(o)
        ? ((n = ""),
          e != null && (n = e.replace(vf, "$&/") + "/"),
          Bl(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (jc(o) &&
            (o = q0(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(vf, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), hf(e)))
    for (var a = 0; a < e.length; a++) {
      i = e[a];
      var s = r + js(i, a);
      l += Bl(i, t, n, s, o);
    }
  else if (((s = Y0(e)), typeof s == "function"))
    for (e = s.call(e), a = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + js(i, a++)), (l += Bl(i, t, n, s, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function dl(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Bl(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function J0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ft = { current: null },
  jl = { transition: null },
  eg = {
    ReactCurrentDispatcher: ft,
    ReactCurrentBatchConfig: jl,
    ReactCurrentOwner: Bc,
  };
re.Children = {
  map: dl,
  forEach: function (e, t, n) {
    dl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      dl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      dl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!jc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
re.Component = Mo;
re.Fragment = j0;
re.Profiler = U0;
re.PureComponent = Dc;
re.StrictMode = W0;
re.Suspense = G0;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = km({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Bc.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (s in t)
      Em.call(t, s) &&
        !Pm.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && a !== void 0 ? a[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    a = Array(s);
    for (var u = 0; u < s; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Xi, type: e.type, key: o, ref: i, props: r, _owner: l };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: H0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: V0, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = $m;
re.createFactory = function (e) {
  var t = $m.bind(null, e);
  return (t.type = e), t;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: K0, render: e };
};
re.isValidElement = jc;
re.lazy = function (e) {
  return { $$typeof: X0, _payload: { _status: -1, _result: e }, _init: J0 };
};
re.memo = function (e, t) {
  return { $$typeof: Q0, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = jl.transition;
  jl.transition = {};
  try {
    e();
  } finally {
    jl.transition = t;
  }
};
re.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
re.useCallback = function (e, t) {
  return ft.current.useCallback(e, t);
};
re.useContext = function (e) {
  return ft.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return ft.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return ft.current.useEffect(e, t);
};
re.useId = function () {
  return ft.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return ft.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return ft.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return ft.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return ft.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return ft.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return ft.current.useRef(e);
};
re.useState = function (e) {
  return ft.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return ft.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return ft.current.useTransition();
};
re.version = "18.2.0";
(function (e) {
  e.exports = re;
})(F0);
const on = xm(S),
  Ru = A0({ __proto__: null, default: on }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tg = S,
  ng = Symbol.for("react.element"),
  rg = Symbol.for("react.fragment"),
  og = Object.prototype.hasOwnProperty,
  ig = tg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Tm(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) og.call(t, r) && !lg.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ng,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: ig.current,
  };
}
Na.Fragment = rg;
Na.jsx = Tm;
Na.jsxs = Tm;
(function (e) {
  e.exports = Na;
})(D0);
const br = Ci.Fragment,
  P = Ci.jsx,
  K = Ci.jsxs,
  ag = Object.freeze(
    Object.defineProperty(
      { __proto__: null, Fragment: br, jsx: P, jsxs: K },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
var _u = {},
  Ei = {},
  sg = {
    get exports() {
      return Ei;
    },
    set exports(e) {
      Ei = e;
    },
  },
  Nt = {},
  Ou = {},
  ug = {
    get exports() {
      return Ou;
    },
    set exports(e) {
      Ou = e;
    },
  },
  Rm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, M) {
    var N = R.length;
    R.push(M);
    e: for (; 0 < N; ) {
      var ee = (N - 1) >>> 1,
        te = R[ee];
      if (0 < o(te, M)) (R[ee] = M), (R[N] = te), (N = ee);
      else break e;
    }
  }
  function n(R) {
    return R.length === 0 ? null : R[0];
  }
  function r(R) {
    if (R.length === 0) return null;
    var M = R[0],
      N = R.pop();
    if (N !== M) {
      R[0] = N;
      e: for (var ee = 0, te = R.length, ue = te >>> 1; ee < ue; ) {
        var ae = 2 * (ee + 1) - 1,
          Se = R[ae],
          B = ae + 1,
          se = R[B];
        if (0 > o(Se, N))
          B < te && 0 > o(se, Se)
            ? ((R[ee] = se), (R[B] = N), (ee = B))
            : ((R[ee] = Se), (R[ae] = N), (ee = ae));
        else if (B < te && 0 > o(se, N)) (R[ee] = se), (R[B] = N), (ee = B);
        else break e;
      }
    }
    return M;
  }
  function o(R, M) {
    var N = R.sortIndex - M.sortIndex;
    return N !== 0 ? N : R.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      a = l.now();
    e.unstable_now = function () {
      return l.now() - a;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    p = 3,
    g = !1,
    y = !1,
    h = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(R) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= R)
        r(u), (M.sortIndex = M.expirationTime), t(s, M);
      else break;
      M = n(u);
    }
  }
  function x(R) {
    if (((h = !1), v(R), !y))
      if (n(s) !== null) (y = !0), U(k);
      else {
        var M = n(u);
        M !== null && H(x, M.startTime - R);
      }
  }
  function k(R, M) {
    (y = !1), h && ((h = !1), m($), ($ = -1)), (g = !0);
    var N = p;
    try {
      for (
        v(M), f = n(s);
        f !== null && (!(f.expirationTime > M) || (R && !z()));

      ) {
        var ee = f.callback;
        if (typeof ee == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var te = ee(f.expirationTime <= M);
          (M = e.unstable_now()),
            typeof te == "function" ? (f.callback = te) : f === n(s) && r(s),
            v(M);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var ue = !0;
      else {
        var ae = n(u);
        ae !== null && H(x, ae.startTime - M), (ue = !1);
      }
      return ue;
    } finally {
      (f = null), (p = N), (g = !1);
    }
  }
  var b = !1,
    C = null,
    $ = -1,
    _ = 5,
    T = -1;
  function z() {
    return !(e.unstable_now() - T < _);
  }
  function V() {
    if (C !== null) {
      var R = e.unstable_now();
      T = R;
      var M = !0;
      try {
        M = C(!0, R);
      } finally {
        M ? j() : ((b = !1), (C = null));
      }
    } else b = !1;
  }
  var j;
  if (typeof d == "function")
    j = function () {
      d(V);
    };
  else if (typeof MessageChannel < "u") {
    var W = new MessageChannel(),
      F = W.port2;
    (W.port1.onmessage = V),
      (j = function () {
        F.postMessage(null);
      });
  } else
    j = function () {
      E(V, 0);
    };
  function U(R) {
    (C = R), b || ((b = !0), j());
  }
  function H(R, M) {
    $ = E(function () {
      R(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), U(k));
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (_ = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (R) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = p;
      }
      var N = p;
      p = M;
      try {
        return R();
      } finally {
        p = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (R, M) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var N = p;
      p = R;
      try {
        return M();
      } finally {
        p = N;
      }
    }),
    (e.unstable_scheduleCallback = function (R, M, N) {
      var ee = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? ee + N : ee))
          : (N = ee),
        R)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = N + te),
        (R = {
          id: c++,
          callback: M,
          priorityLevel: R,
          startTime: N,
          expirationTime: te,
          sortIndex: -1,
        }),
        N > ee
          ? ((R.sortIndex = N),
            t(u, R),
            n(s) === null &&
              R === n(u) &&
              (h ? (m($), ($ = -1)) : (h = !0), H(x, N - ee)))
          : ((R.sortIndex = te), t(s, R), y || g || ((y = !0), U(k))),
        R
      );
    }),
    (e.unstable_shouldYield = z),
    (e.unstable_wrapCallback = function (R) {
      var M = p;
      return function () {
        var N = p;
        p = M;
        try {
          return R.apply(this, arguments);
        } finally {
          p = N;
        }
      };
    });
})(Rm);
(function (e) {
  e.exports = Rm;
})(ug);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _m = S,
  Lt = Ou;
function O(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Om = new Set(),
  Pi = {};
function Nr(e, t) {
  xo(e, t), xo(e + "Capture", t);
}
function xo(e, t) {
  for (Pi[e] = t, e = 0; e < t.length; e++) Om.add(t[e]);
}
var Ln = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Mu = Object.prototype.hasOwnProperty,
  cg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  gf = {},
  yf = {};
function dg(e) {
  return Mu.call(yf, e)
    ? !0
    : Mu.call(gf, e)
    ? !1
    : cg.test(e)
    ? (yf[e] = !0)
    : ((gf[e] = !0), !1);
}
function fg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function pg(e, t, n, r) {
  if (t === null || typeof t > "u" || fg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function pt(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var ot = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ot[t] = new pt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ot[e] = new pt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ot[e] = new pt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ot[e] = new pt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ot[e] = new pt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ot[e] = new pt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ot[e] = new pt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wc = /[\-:]([a-z])/g;
function Uc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wc, Uc);
    ot[t] = new pt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wc, Uc);
    ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wc, Uc);
  ot[t] = new pt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ot.xlinkHref = new pt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ot[e] = new pt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Vc(e, t, n, r) {
  var o = ot.hasOwnProperty(t) ? ot[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (pg(t, n, o, r) && (n = null),
    r || o === null
      ? dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Fn = _m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fl = Symbol.for("react.element"),
  qr = Symbol.for("react.portal"),
  Zr = Symbol.for("react.fragment"),
  Hc = Symbol.for("react.strict_mode"),
  Lu = Symbol.for("react.profiler"),
  Mm = Symbol.for("react.provider"),
  Lm = Symbol.for("react.context"),
  Kc = Symbol.for("react.forward_ref"),
  zu = Symbol.for("react.suspense"),
  Nu = Symbol.for("react.suspense_list"),
  Gc = Symbol.for("react.memo"),
  Wn = Symbol.for("react.lazy"),
  zm = Symbol.for("react.offscreen"),
  xf = Symbol.iterator;
function Uo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (xf && e[xf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Me = Object.assign,
  Ws;
function ri(e) {
  if (Ws === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ws = (t && t[1]) || "";
    }
  return (
    `
` +
    Ws +
    e
  );
}
var Us = !1;
function Vs(e, t) {
  if (!e || Us) return "";
  Us = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          a = i.length - 1;
        1 <= l && 0 <= a && o[l] !== i[a];

      )
        a--;
      for (; 1 <= l && 0 <= a; l--, a--)
        if (o[l] !== i[a]) {
          if (l !== 1 || a !== 1)
            do
              if ((l--, a--, 0 > a || o[l] !== i[a])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= a);
          break;
        }
    }
  } finally {
    (Us = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ri(e) : "";
}
function mg(e) {
  switch (e.tag) {
    case 5:
      return ri(e.type);
    case 16:
      return ri("Lazy");
    case 13:
      return ri("Suspense");
    case 19:
      return ri("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Vs(e.type, !1)), e;
    case 11:
      return (e = Vs(e.type.render, !1)), e;
    case 1:
      return (e = Vs(e.type, !0)), e;
    default:
      return "";
  }
}
function Iu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Zr:
      return "Fragment";
    case qr:
      return "Portal";
    case Lu:
      return "Profiler";
    case Hc:
      return "StrictMode";
    case zu:
      return "Suspense";
    case Nu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lm:
        return (e.displayName || "Context") + ".Consumer";
      case Mm:
        return (e._context.displayName || "Context") + ".Provider";
      case Kc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Gc:
        return (
          (t = e.displayName || null), t !== null ? t : Iu(e.type) || "Memo"
        );
      case Wn:
        (t = e._payload), (e = e._init);
        try {
          return Iu(e(t));
        } catch {}
    }
  return null;
}
function hg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Iu(t);
    case 8:
      return t === Hc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ir(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Nm(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function vg(e) {
  var t = Nm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function pl(e) {
  e._valueTracker || (e._valueTracker = vg(e));
}
function Im(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Nm(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ra(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Au(e, t) {
  var n = t.checked;
  return Me({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ir(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Am(e, t) {
  (t = t.checked), t != null && Vc(e, "checked", t, !1);
}
function Du(e, t) {
  Am(e, t);
  var n = ir(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Fu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Fu(e, t.type, ir(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Fu(e, t, n) {
  (t !== "number" || ra(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var oi = Array.isArray;
function co(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ir(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Bu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
  return Me({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function kf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(O(92));
      if (oi(n)) {
        if (1 < n.length) throw Error(O(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: ir(n) };
}
function Dm(e, t) {
  var n = ir(t.value),
    r = ir(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function bf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fm(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ju(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fm(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ml,
  Bm = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ml = ml || document.createElement("div"),
          ml.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ml.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function $i(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ui = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gg = ["Webkit", "ms", "Moz", "O"];
Object.keys(ui).forEach(function (e) {
  gg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ui[t] = ui[e]);
  });
});
function jm(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ui.hasOwnProperty(e) && ui[e])
    ? ("" + t).trim()
    : t + "px";
}
function Wm(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = jm(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var yg = Me(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Wu(e, t) {
  if (t) {
    if (yg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(O(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(O(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(O(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(O(62));
  }
}
function Uu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Vu = null;
function Qc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Hu = null,
  fo = null,
  po = null;
function Cf(e) {
  if ((e = Zi(e))) {
    if (typeof Hu != "function") throw Error(O(280));
    var t = e.stateNode;
    t && ((t = Ba(t)), Hu(e.stateNode, e.type, t));
  }
}
function Um(e) {
  fo ? (po ? po.push(e) : (po = [e])) : (fo = e);
}
function Vm() {
  if (fo) {
    var e = fo,
      t = po;
    if (((po = fo = null), Cf(e), t)) for (e = 0; e < t.length; e++) Cf(t[e]);
  }
}
function Hm(e, t) {
  return e(t);
}
function Km() {}
var Hs = !1;
function Gm(e, t, n) {
  if (Hs) return e(t, n);
  Hs = !0;
  try {
    return Hm(e, t, n);
  } finally {
    (Hs = !1), (fo !== null || po !== null) && (Km(), Vm());
  }
}
function Ti(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ba(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(O(231, t, typeof n));
  return n;
}
var Ku = !1;
if (Ln)
  try {
    var Vo = {};
    Object.defineProperty(Vo, "passive", {
      get: function () {
        Ku = !0;
      },
    }),
      window.addEventListener("test", Vo, Vo),
      window.removeEventListener("test", Vo, Vo);
  } catch {
    Ku = !1;
  }
function xg(e, t, n, r, o, i, l, a, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var ci = !1,
  oa = null,
  ia = !1,
  Gu = null,
  wg = {
    onError: function (e) {
      (ci = !0), (oa = e);
    },
  };
function Sg(e, t, n, r, o, i, l, a, s) {
  (ci = !1), (oa = null), xg.apply(wg, arguments);
}
function kg(e, t, n, r, o, i, l, a, s) {
  if ((Sg.apply(this, arguments), ci)) {
    if (ci) {
      var u = oa;
      (ci = !1), (oa = null);
    } else throw Error(O(198));
    ia || ((ia = !0), (Gu = u));
  }
}
function Ir(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Qm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ef(e) {
  if (Ir(e) !== e) throw Error(O(188));
}
function bg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ir(e)), t === null)) throw Error(O(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Ef(o), e;
        if (i === r) return Ef(o), t;
        i = i.sibling;
      }
      throw Error(O(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, a = o.child; a; ) {
        if (a === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (a === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        a = a.sibling;
      }
      if (!l) {
        for (a = i.child; a; ) {
          if (a === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (a === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          a = a.sibling;
        }
        if (!l) throw Error(O(189));
      }
    }
    if (n.alternate !== r) throw Error(O(190));
  }
  if (n.tag !== 3) throw Error(O(188));
  return n.stateNode.current === n ? e : t;
}
function Xm(e) {
  return (e = bg(e)), e !== null ? Ym(e) : null;
}
function Ym(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ym(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qm = Lt.unstable_scheduleCallback,
  Pf = Lt.unstable_cancelCallback,
  Cg = Lt.unstable_shouldYield,
  Eg = Lt.unstable_requestPaint,
  je = Lt.unstable_now,
  Pg = Lt.unstable_getCurrentPriorityLevel,
  Xc = Lt.unstable_ImmediatePriority,
  Zm = Lt.unstable_UserBlockingPriority,
  la = Lt.unstable_NormalPriority,
  $g = Lt.unstable_LowPriority,
  Jm = Lt.unstable_IdlePriority,
  Ia = null,
  yn = null;
function Tg(e) {
  if (yn && typeof yn.onCommitFiberRoot == "function")
    try {
      yn.onCommitFiberRoot(Ia, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var sn = Math.clz32 ? Math.clz32 : Og,
  Rg = Math.log,
  _g = Math.LN2;
function Og(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Rg(e) / _g) | 0)) | 0;
}
var hl = 64,
  vl = 4194304;
function ii(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function aa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var a = l & ~o;
    a !== 0 ? (r = ii(a)) : ((i &= l), i !== 0 && (r = ii(i)));
  } else (l = n & ~o), l !== 0 ? (r = ii(l)) : i !== 0 && (r = ii(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - sn(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Mg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Lg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - sn(i),
      a = 1 << l,
      s = o[l];
    s === -1
      ? (!(a & n) || a & r) && (o[l] = Mg(a, t))
      : s <= t && (e.expiredLanes |= a),
      (i &= ~a);
  }
}
function Qu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function eh() {
  var e = hl;
  return (hl <<= 1), !(hl & 4194240) && (hl = 64), e;
}
function Ks(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Yi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - sn(t)),
    (e[t] = n);
}
function zg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - sn(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Yc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - sn(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ve = 0;
function th(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var nh,
  qc,
  rh,
  oh,
  ih,
  Xu = !1,
  gl = [],
  Yn = null,
  qn = null,
  Zn = null,
  Ri = new Map(),
  _i = new Map(),
  Vn = [],
  Ng =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function $f(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Yn = null;
      break;
    case "dragenter":
    case "dragleave":
      qn = null;
      break;
    case "mouseover":
    case "mouseout":
      Zn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ri.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _i.delete(t.pointerId);
  }
}
function Ho(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Zi(t)), t !== null && qc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Ig(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Yn = Ho(Yn, e, t, n, r, o)), !0;
    case "dragenter":
      return (qn = Ho(qn, e, t, n, r, o)), !0;
    case "mouseover":
      return (Zn = Ho(Zn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Ri.set(i, Ho(Ri.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), _i.set(i, Ho(_i.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function lh(e) {
  var t = xr(e.target);
  if (t !== null) {
    var n = Ir(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Qm(n)), t !== null)) {
          (e.blockedOn = t),
            ih(e.priority, function () {
              rh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Yu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Vu = r), n.target.dispatchEvent(r), (Vu = null);
    } else return (t = Zi(n)), t !== null && qc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Tf(e, t, n) {
  Wl(e) && n.delete(t);
}
function Ag() {
  (Xu = !1),
    Yn !== null && Wl(Yn) && (Yn = null),
    qn !== null && Wl(qn) && (qn = null),
    Zn !== null && Wl(Zn) && (Zn = null),
    Ri.forEach(Tf),
    _i.forEach(Tf);
}
function Ko(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Xu ||
      ((Xu = !0),
      Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority, Ag)));
}
function Oi(e) {
  function t(o) {
    return Ko(o, e);
  }
  if (0 < gl.length) {
    Ko(gl[0], e);
    for (var n = 1; n < gl.length; n++) {
      var r = gl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Yn !== null && Ko(Yn, e),
      qn !== null && Ko(qn, e),
      Zn !== null && Ko(Zn, e),
      Ri.forEach(t),
      _i.forEach(t),
      n = 0;
    n < Vn.length;
    n++
  )
    (r = Vn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vn.length && ((n = Vn[0]), n.blockedOn === null); )
    lh(n), n.blockedOn === null && Vn.shift();
}
var mo = Fn.ReactCurrentBatchConfig,
  sa = !0;
function Dg(e, t, n, r) {
  var o = ve,
    i = mo.transition;
  mo.transition = null;
  try {
    (ve = 1), Zc(e, t, n, r);
  } finally {
    (ve = o), (mo.transition = i);
  }
}
function Fg(e, t, n, r) {
  var o = ve,
    i = mo.transition;
  mo.transition = null;
  try {
    (ve = 4), Zc(e, t, n, r);
  } finally {
    (ve = o), (mo.transition = i);
  }
}
function Zc(e, t, n, r) {
  if (sa) {
    var o = Yu(e, t, n, r);
    if (o === null) nu(e, t, r, ua, n), $f(e, r);
    else if (Ig(o, e, t, n, r)) r.stopPropagation();
    else if (($f(e, r), t & 4 && -1 < Ng.indexOf(e))) {
      for (; o !== null; ) {
        var i = Zi(o);
        if (
          (i !== null && nh(i),
          (i = Yu(e, t, n, r)),
          i === null && nu(e, t, r, ua, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else nu(e, t, r, null, n);
  }
}
var ua = null;
function Yu(e, t, n, r) {
  if (((ua = null), (e = Qc(r)), (e = xr(e)), e !== null))
    if (((t = Ir(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Qm(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ua = e), null;
}
function ah(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Pg()) {
        case Xc:
          return 1;
        case Zm:
          return 4;
        case la:
        case $g:
          return 16;
        case Jm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Kn = null,
  Jc = null,
  Ul = null;
function sh() {
  if (Ul) return Ul;
  var e,
    t = Jc,
    n = t.length,
    r,
    o = "value" in Kn ? Kn.value : Kn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Ul = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Vl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function yl() {
  return !0;
}
function Rf() {
  return !1;
}
function It(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? yl
        : Rf),
      (this.isPropagationStopped = Rf),
      this
    );
  }
  return (
    Me(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = yl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = yl));
      },
      persist: function () {},
      isPersistent: yl,
    }),
    t
  );
}
var Lo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ed = It(Lo),
  qi = Me({}, Lo, { view: 0, detail: 0 }),
  Bg = It(qi),
  Gs,
  Qs,
  Go,
  Aa = Me({}, qi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: td,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Go &&
            (Go && e.type === "mousemove"
              ? ((Gs = e.screenX - Go.screenX), (Qs = e.screenY - Go.screenY))
              : (Qs = Gs = 0),
            (Go = e)),
          Gs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Qs;
    },
  }),
  _f = It(Aa),
  jg = Me({}, Aa, { dataTransfer: 0 }),
  Wg = It(jg),
  Ug = Me({}, qi, { relatedTarget: 0 }),
  Xs = It(Ug),
  Vg = Me({}, Lo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hg = It(Vg),
  Kg = Me({}, Lo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gg = It(Kg),
  Qg = Me({}, Lo, { data: 0 }),
  Of = It(Qg),
  Xg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Yg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  qg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Zg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = qg[e]) ? !!t[e] : !1;
}
function td() {
  return Zg;
}
var Jg = Me({}, qi, {
    key: function (e) {
      if (e.key) {
        var t = Xg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Vl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Yg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: td,
    charCode: function (e) {
      return e.type === "keypress" ? Vl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Vl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ey = It(Jg),
  ty = Me({}, Aa, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Mf = It(ty),
  ny = Me({}, qi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: td,
  }),
  ry = It(ny),
  oy = Me({}, Lo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iy = It(oy),
  ly = Me({}, Aa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ay = It(ly),
  sy = [9, 13, 27, 32],
  nd = Ln && "CompositionEvent" in window,
  di = null;
Ln && "documentMode" in document && (di = document.documentMode);
var uy = Ln && "TextEvent" in window && !di,
  uh = Ln && (!nd || (di && 8 < di && 11 >= di)),
  Lf = String.fromCharCode(32),
  zf = !1;
function ch(e, t) {
  switch (e) {
    case "keyup":
      return sy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function dh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Jr = !1;
function cy(e, t) {
  switch (e) {
    case "compositionend":
      return dh(t);
    case "keypress":
      return t.which !== 32 ? null : ((zf = !0), Lf);
    case "textInput":
      return (e = t.data), e === Lf && zf ? null : e;
    default:
      return null;
  }
}
function dy(e, t) {
  if (Jr)
    return e === "compositionend" || (!nd && ch(e, t))
      ? ((e = sh()), (Ul = Jc = Kn = null), (Jr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return uh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Nf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fy[e.type] : t === "textarea";
}
function fh(e, t, n, r) {
  Um(r),
    (t = ca(t, "onChange")),
    0 < t.length &&
      ((n = new ed("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var fi = null,
  Mi = null;
function py(e) {
  bh(e, 0);
}
function Da(e) {
  var t = no(e);
  if (Im(t)) return e;
}
function my(e, t) {
  if (e === "change") return t;
}
var ph = !1;
if (Ln) {
  var Ys;
  if (Ln) {
    var qs = "oninput" in document;
    if (!qs) {
      var If = document.createElement("div");
      If.setAttribute("oninput", "return;"),
        (qs = typeof If.oninput == "function");
    }
    Ys = qs;
  } else Ys = !1;
  ph = Ys && (!document.documentMode || 9 < document.documentMode);
}
function Af() {
  fi && (fi.detachEvent("onpropertychange", mh), (Mi = fi = null));
}
function mh(e) {
  if (e.propertyName === "value" && Da(Mi)) {
    var t = [];
    fh(t, Mi, e, Qc(e)), Gm(py, t);
  }
}
function hy(e, t, n) {
  e === "focusin"
    ? (Af(), (fi = t), (Mi = n), fi.attachEvent("onpropertychange", mh))
    : e === "focusout" && Af();
}
function vy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Da(Mi);
}
function gy(e, t) {
  if (e === "click") return Da(t);
}
function yy(e, t) {
  if (e === "input" || e === "change") return Da(t);
}
function xy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var cn = typeof Object.is == "function" ? Object.is : xy;
function Li(e, t) {
  if (cn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Mu.call(t, o) || !cn(e[o], t[o])) return !1;
  }
  return !0;
}
function Df(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ff(e, t) {
  var n = Df(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Df(n);
  }
}
function hh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vh() {
  for (var e = window, t = ra(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ra(e.document);
  }
  return t;
}
function rd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function wy(e) {
  var t = vh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Ff(n, i));
        var l = Ff(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sy = Ln && "documentMode" in document && 11 >= document.documentMode,
  eo = null,
  qu = null,
  pi = null,
  Zu = !1;
function Bf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Zu ||
    eo == null ||
    eo !== ra(r) ||
    ((r = eo),
    "selectionStart" in r && rd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (pi && Li(pi, r)) ||
      ((pi = r),
      (r = ca(qu, "onSelect")),
      0 < r.length &&
        ((t = new ed("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = eo))));
}
function xl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var to = {
    animationend: xl("Animation", "AnimationEnd"),
    animationiteration: xl("Animation", "AnimationIteration"),
    animationstart: xl("Animation", "AnimationStart"),
    transitionend: xl("Transition", "TransitionEnd"),
  },
  Zs = {},
  gh = {};
Ln &&
  ((gh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete to.animationend.animation,
    delete to.animationiteration.animation,
    delete to.animationstart.animation),
  "TransitionEvent" in window || delete to.transitionend.transition);
function Fa(e) {
  if (Zs[e]) return Zs[e];
  if (!to[e]) return e;
  var t = to[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in gh) return (Zs[e] = t[n]);
  return e;
}
var yh = Fa("animationend"),
  xh = Fa("animationiteration"),
  wh = Fa("animationstart"),
  Sh = Fa("transitionend"),
  kh = new Map(),
  jf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ar(e, t) {
  kh.set(e, t), Nr(t, [e]);
}
for (var Js = 0; Js < jf.length; Js++) {
  var eu = jf[Js],
    ky = eu.toLowerCase(),
    by = eu[0].toUpperCase() + eu.slice(1);
  ar(ky, "on" + by);
}
ar(yh, "onAnimationEnd");
ar(xh, "onAnimationIteration");
ar(wh, "onAnimationStart");
ar("dblclick", "onDoubleClick");
ar("focusin", "onFocus");
ar("focusout", "onBlur");
ar(Sh, "onTransitionEnd");
xo("onMouseEnter", ["mouseout", "mouseover"]);
xo("onMouseLeave", ["mouseout", "mouseover"]);
xo("onPointerEnter", ["pointerout", "pointerover"]);
xo("onPointerLeave", ["pointerout", "pointerover"]);
Nr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Nr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Nr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Nr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var li =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Cy = new Set("cancel close invalid load scroll toggle".split(" ").concat(li));
function Wf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kg(r, t, void 0, e), (e.currentTarget = null);
}
function bh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var a = r[l],
            s = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), s !== i && o.isPropagationStopped())) break e;
          Wf(o, a, u), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((a = r[l]),
            (s = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Wf(o, a, u), (i = s);
        }
    }
  }
  if (ia) throw ((e = Gu), (ia = !1), (Gu = null), e);
}
function ke(e, t) {
  var n = t[rc];
  n === void 0 && (n = t[rc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ch(t, e, 2, !1), n.add(r));
}
function tu(e, t, n) {
  var r = 0;
  t && (r |= 4), Ch(n, e, r, t);
}
var wl = "_reactListening" + Math.random().toString(36).slice(2);
function zi(e) {
  if (!e[wl]) {
    (e[wl] = !0),
      Om.forEach(function (n) {
        n !== "selectionchange" && (Cy.has(n) || tu(n, !1, e), tu(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wl] || ((t[wl] = !0), tu("selectionchange", !1, t));
  }
}
function Ch(e, t, n, r) {
  switch (ah(t)) {
    case 1:
      var o = Dg;
      break;
    case 4:
      o = Fg;
      break;
    default:
      o = Zc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ku ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function nu(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var a = r.stateNode.containerInfo;
        if (a === o || (a.nodeType === 8 && a.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; a !== null; ) {
          if (((l = xr(a)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Gm(function () {
    var u = i,
      c = Qc(n),
      f = [];
    e: {
      var p = kh.get(e);
      if (p !== void 0) {
        var g = ed,
          y = e;
        switch (e) {
          case "keypress":
            if (Vl(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = ey;
            break;
          case "focusin":
            (y = "focus"), (g = Xs);
            break;
          case "focusout":
            (y = "blur"), (g = Xs);
            break;
          case "beforeblur":
          case "afterblur":
            g = Xs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = _f;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Wg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ry;
            break;
          case yh:
          case xh:
          case wh:
            g = Hg;
            break;
          case Sh:
            g = iy;
            break;
          case "scroll":
            g = Bg;
            break;
          case "wheel":
            g = ay;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Gg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Mf;
        }
        var h = (t & 4) !== 0,
          E = !h && e === "scroll",
          m = h ? (p !== null ? p + "Capture" : null) : p;
        h = [];
        for (var d = u, v; d !== null; ) {
          v = d;
          var x = v.stateNode;
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              m !== null && ((x = Ti(d, m)), x != null && h.push(Ni(d, x, v)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < h.length &&
          ((p = new g(p, y, null, n, c)), f.push({ event: p, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== Vu &&
            (y = n.relatedTarget || n.fromElement) &&
            (xr(y) || y[zn]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? xr(y) : null),
              y !== null &&
                ((E = Ir(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((h = _f),
            (x = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = Mf),
              (x = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (E = g == null ? p : no(g)),
            (v = y == null ? p : no(y)),
            (p = new h(x, d + "leave", g, n, c)),
            (p.target = E),
            (p.relatedTarget = v),
            (x = null),
            xr(c) === u &&
              ((h = new h(m, d + "enter", y, n, c)),
              (h.target = v),
              (h.relatedTarget = E),
              (x = h)),
            (E = x),
            g && y)
          )
            t: {
              for (h = g, m = y, d = 0, v = h; v; v = Vr(v)) d++;
              for (v = 0, x = m; x; x = Vr(x)) v++;
              for (; 0 < d - v; ) (h = Vr(h)), d--;
              for (; 0 < v - d; ) (m = Vr(m)), v--;
              for (; d--; ) {
                if (h === m || (m !== null && h === m.alternate)) break t;
                (h = Vr(h)), (m = Vr(m));
              }
              h = null;
            }
          else h = null;
          g !== null && Uf(f, p, g, h, !1),
            y !== null && E !== null && Uf(f, E, y, h, !0);
        }
      }
      e: {
        if (
          ((p = u ? no(u) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var k = my;
        else if (Nf(p))
          if (ph) k = yy;
          else {
            k = vy;
            var b = hy;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = gy);
        if (k && (k = k(e, u))) {
          fh(f, k, n, c);
          break e;
        }
        b && b(e, p, u),
          e === "focusout" &&
            (b = p._wrapperState) &&
            b.controlled &&
            p.type === "number" &&
            Fu(p, "number", p.value);
      }
      switch (((b = u ? no(u) : window), e)) {
        case "focusin":
          (Nf(b) || b.contentEditable === "true") &&
            ((eo = b), (qu = u), (pi = null));
          break;
        case "focusout":
          pi = qu = eo = null;
          break;
        case "mousedown":
          Zu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Zu = !1), Bf(f, n, c);
          break;
        case "selectionchange":
          if (Sy) break;
        case "keydown":
        case "keyup":
          Bf(f, n, c);
      }
      var C;
      if (nd)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Jr
          ? ch(e, n) && ($ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (uh &&
          n.locale !== "ko" &&
          (Jr || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && Jr && (C = sh())
            : ((Kn = c),
              (Jc = "value" in Kn ? Kn.value : Kn.textContent),
              (Jr = !0))),
        (b = ca(u, $)),
        0 < b.length &&
          (($ = new Of($, e, null, n, c)),
          f.push({ event: $, listeners: b }),
          C ? ($.data = C) : ((C = dh(n)), C !== null && ($.data = C)))),
        (C = uy ? cy(e, n) : dy(e, n)) &&
          ((u = ca(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Of("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    bh(f, t);
  });
}
function Ni(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ca(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ti(e, n)),
      i != null && r.unshift(Ni(e, i, o)),
      (i = Ti(e, t)),
      i != null && r.push(Ni(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Vr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uf(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var a = n,
      s = a.alternate,
      u = a.stateNode;
    if (s !== null && s === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      o
        ? ((s = Ti(n, i)), s != null && l.unshift(Ni(n, s, a)))
        : o || ((s = Ti(n, i)), s != null && l.push(Ni(n, s, a)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Ey = /\r\n?/g,
  Py = /\u0000|\uFFFD/g;
function Vf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ey,
      `
`
    )
    .replace(Py, "");
}
function Sl(e, t, n) {
  if (((t = Vf(t)), Vf(e) !== t && n)) throw Error(O(425));
}
function da() {}
var Ju = null,
  ec = null;
function tc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var nc = typeof setTimeout == "function" ? setTimeout : void 0,
  $y = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Hf = typeof Promise == "function" ? Promise : void 0,
  Ty =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Hf < "u"
      ? function (e) {
          return Hf.resolve(null).then(e).catch(Ry);
        }
      : nc;
function Ry(e) {
  setTimeout(function () {
    throw e;
  });
}
function ru(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Oi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Oi(t);
}
function Jn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Kf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var zo = Math.random().toString(36).slice(2),
  vn = "__reactFiber$" + zo,
  Ii = "__reactProps$" + zo,
  zn = "__reactContainer$" + zo,
  rc = "__reactEvents$" + zo,
  _y = "__reactListeners$" + zo,
  Oy = "__reactHandles$" + zo;
function xr(e) {
  var t = e[vn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zn] || n[vn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Kf(e); e !== null; ) {
          if ((n = e[vn])) return n;
          e = Kf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Zi(e) {
  return (
    (e = e[vn] || e[zn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function no(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(O(33));
}
function Ba(e) {
  return e[Ii] || null;
}
var oc = [],
  ro = -1;
function sr(e) {
  return { current: e };
}
function be(e) {
  0 > ro || ((e.current = oc[ro]), (oc[ro] = null), ro--);
}
function we(e, t) {
  ro++, (oc[ro] = e.current), (e.current = t);
}
var lr = {},
  ut = sr(lr),
  yt = sr(!1),
  $r = lr;
function wo(e, t) {
  var n = e.type.contextTypes;
  if (!n) return lr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function xt(e) {
  return (e = e.childContextTypes), e != null;
}
function fa() {
  be(yt), be(ut);
}
function Gf(e, t, n) {
  if (ut.current !== lr) throw Error(O(168));
  we(ut, t), we(yt, n);
}
function Eh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(O(108, hg(e) || "Unknown", o));
  return Me({}, n, r);
}
function pa(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || lr),
    ($r = ut.current),
    we(ut, e),
    we(yt, yt.current),
    !0
  );
}
function Qf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(O(169));
  n
    ? ((e = Eh(e, t, $r)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      be(yt),
      be(ut),
      we(ut, e))
    : be(yt),
    we(yt, n);
}
var $n = null,
  ja = !1,
  ou = !1;
function Ph(e) {
  $n === null ? ($n = [e]) : $n.push(e);
}
function My(e) {
  (ja = !0), Ph(e);
}
function ur() {
  if (!ou && $n !== null) {
    ou = !0;
    var e = 0,
      t = ve;
    try {
      var n = $n;
      for (ve = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ($n = null), (ja = !1);
    } catch (o) {
      throw ($n !== null && ($n = $n.slice(e + 1)), qm(Xc, ur), o);
    } finally {
      (ve = t), (ou = !1);
    }
  }
  return null;
}
var oo = [],
  io = 0,
  ma = null,
  ha = 0,
  Bt = [],
  jt = 0,
  Tr = null,
  Tn = 1,
  Rn = "";
function pr(e, t) {
  (oo[io++] = ha), (oo[io++] = ma), (ma = e), (ha = t);
}
function $h(e, t, n) {
  (Bt[jt++] = Tn), (Bt[jt++] = Rn), (Bt[jt++] = Tr), (Tr = e);
  var r = Tn;
  e = Rn;
  var o = 32 - sn(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - sn(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Tn = (1 << (32 - sn(t) + o)) | (n << o) | r),
      (Rn = i + e);
  } else (Tn = (1 << i) | (n << o) | r), (Rn = e);
}
function od(e) {
  e.return !== null && (pr(e, 1), $h(e, 1, 0));
}
function id(e) {
  for (; e === ma; )
    (ma = oo[--io]), (oo[io] = null), (ha = oo[--io]), (oo[io] = null);
  for (; e === Tr; )
    (Tr = Bt[--jt]),
      (Bt[jt] = null),
      (Rn = Bt[--jt]),
      (Bt[jt] = null),
      (Tn = Bt[--jt]),
      (Bt[jt] = null);
}
var Ot = null,
  _t = null,
  Pe = !1,
  rn = null;
function Th(e, t) {
  var n = Wt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ot = e), (_t = Jn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ot = e), (_t = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tr !== null ? { id: Tn, overflow: Rn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Wt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ot = e),
            (_t = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ic(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function lc(e) {
  if (Pe) {
    var t = _t;
    if (t) {
      var n = t;
      if (!Xf(e, t)) {
        if (ic(e)) throw Error(O(418));
        t = Jn(n.nextSibling);
        var r = Ot;
        t && Xf(e, t)
          ? Th(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Pe = !1), (Ot = e));
      }
    } else {
      if (ic(e)) throw Error(O(418));
      (e.flags = (e.flags & -4097) | 2), (Pe = !1), (Ot = e);
    }
  }
}
function Yf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ot = e;
}
function kl(e) {
  if (e !== Ot) return !1;
  if (!Pe) return Yf(e), (Pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !tc(e.type, e.memoizedProps))),
    t && (t = _t))
  ) {
    if (ic(e)) throw (Rh(), Error(O(418)));
    for (; t; ) Th(e, t), (t = Jn(t.nextSibling));
  }
  if ((Yf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(O(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              _t = Jn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      _t = null;
    }
  } else _t = Ot ? Jn(e.stateNode.nextSibling) : null;
  return !0;
}
function Rh() {
  for (var e = _t; e; ) e = Jn(e.nextSibling);
}
function So() {
  (_t = Ot = null), (Pe = !1);
}
function ld(e) {
  rn === null ? (rn = [e]) : rn.push(e);
}
var Ly = Fn.ReactCurrentBatchConfig;
function tn(e, t) {
  if (e && e.defaultProps) {
    (t = Me({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var va = sr(null),
  ga = null,
  lo = null,
  ad = null;
function sd() {
  ad = lo = ga = null;
}
function ud(e) {
  var t = va.current;
  be(va), (e._currentValue = t);
}
function ac(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ho(e, t) {
  (ga = e),
    (ad = lo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (gt = !0), (e.firstContext = null));
}
function Ht(e) {
  var t = e._currentValue;
  if (ad !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), lo === null)) {
      if (ga === null) throw Error(O(308));
      (lo = e), (ga.dependencies = { lanes: 0, firstContext: e });
    } else lo = lo.next = e;
  return t;
}
var wr = null;
function cd(e) {
  wr === null ? (wr = [e]) : wr.push(e);
}
function _h(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), cd(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Nn(e, r)
  );
}
function Nn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Un = !1;
function dd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Oh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function On(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function er(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), le & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Nn(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), cd(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Nn(e, n)
  );
}
function Hl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
  }
}
function qf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ya(e, t, n, r) {
  var o = e.updateQueue;
  Un = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    a = o.shared.pending;
  if (a !== null) {
    o.shared.pending = null;
    var s = a,
      u = s.next;
    (s.next = null), l === null ? (i = u) : (l.next = u), (l = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== l &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var f = o.baseState;
    (l = 0), (c = u = s = null), (a = i);
    do {
      var p = a.lane,
        g = a.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            h = a;
          switch (((p = t), (g = n), h.tag)) {
            case 1:
              if (((y = h.payload), typeof y == "function")) {
                f = y.call(g, f, p);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = h.payload),
                (p = typeof y == "function" ? y.call(g, f, p) : y),
                p == null)
              )
                break e;
              f = Me({}, f, p);
              break e;
            case 2:
              Un = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [a]) : p.push(a));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (s = f)) : (c = c.next = g),
          (l |= p);
      if (((a = a.next), a === null)) {
        if (((a = o.shared.pending), a === null)) break;
        (p = a),
          (a = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = f),
      (o.baseState = s),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = c),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (_r |= l), (e.lanes = l), (e.memoizedState = f);
  }
}
function Zf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(O(191, o));
        o.call(r);
      }
    }
}
var Mh = new _m.Component().refs;
function sc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Me({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Wa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ir(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      o = nr(e),
      i = On(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = er(e, i, o)),
      t !== null && (un(t, e, o, r), Hl(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = dt(),
      o = nr(e),
      i = On(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = er(e, i, o)),
      t !== null && (un(t, e, o, r), Hl(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = dt(),
      r = nr(e),
      o = On(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = er(e, o, r)),
      t !== null && (un(t, e, r, n), Hl(t, e, r));
  },
};
function Jf(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Li(n, r) || !Li(o, i)
      : !0
  );
}
function Lh(e, t, n) {
  var r = !1,
    o = lr,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ht(i))
      : ((o = xt(t) ? $r : ut.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? wo(e, o) : lr)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Wa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function ep(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Wa.enqueueReplaceState(t, t.state, null);
}
function uc(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Mh), dd(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = Ht(i))
    : ((i = xt(t) ? $r : ut.current), (o.context = wo(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (sc(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Wa.enqueueReplaceState(o, o.state, null),
      ya(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Qo(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(O(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(O(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var a = o.refs;
            a === Mh && (a = o.refs = {}),
              l === null ? delete a[i] : (a[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(O(284));
    if (!n._owner) throw Error(O(290, e));
  }
  return e;
}
function bl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      O(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function tp(e) {
  var t = e._init;
  return t(e._payload);
}
function zh(e) {
  function t(m, d) {
    if (e) {
      var v = m.deletions;
      v === null ? ((m.deletions = [d]), (m.flags |= 16)) : v.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function o(m, d) {
    return (m = rr(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function i(m, d, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < d ? ((m.flags |= 2), d) : v)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, d, v, x) {
    return d === null || d.tag !== 6
      ? ((d = du(v, m.mode, x)), (d.return = m), d)
      : ((d = o(d, v)), (d.return = m), d);
  }
  function s(m, d, v, x) {
    var k = v.type;
    return k === Zr
      ? c(m, d, v.props.children, x, v.key)
      : d !== null &&
        (d.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Wn &&
            tp(k) === d.type))
      ? ((x = o(d, v.props)), (x.ref = Qo(m, d, v)), (x.return = m), x)
      : ((x = ql(v.type, v.key, v.props, null, m.mode, x)),
        (x.ref = Qo(m, d, v)),
        (x.return = m),
        x);
  }
  function u(m, d, v, x) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== v.containerInfo ||
      d.stateNode.implementation !== v.implementation
      ? ((d = fu(v, m.mode, x)), (d.return = m), d)
      : ((d = o(d, v.children || [])), (d.return = m), d);
  }
  function c(m, d, v, x, k) {
    return d === null || d.tag !== 7
      ? ((d = Er(v, m.mode, x, k)), (d.return = m), d)
      : ((d = o(d, v)), (d.return = m), d);
  }
  function f(m, d, v) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = du("" + d, m.mode, v)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case fl:
          return (
            (v = ql(d.type, d.key, d.props, null, m.mode, v)),
            (v.ref = Qo(m, null, d)),
            (v.return = m),
            v
          );
        case qr:
          return (d = fu(d, m.mode, v)), (d.return = m), d;
        case Wn:
          var x = d._init;
          return f(m, x(d._payload), v);
      }
      if (oi(d) || Uo(d))
        return (d = Er(d, m.mode, v, null)), (d.return = m), d;
      bl(m, d);
    }
    return null;
  }
  function p(m, d, v, x) {
    var k = d !== null ? d.key : null;
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return k !== null ? null : a(m, d, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fl:
          return v.key === k ? s(m, d, v, x) : null;
        case qr:
          return v.key === k ? u(m, d, v, x) : null;
        case Wn:
          return (k = v._init), p(m, d, k(v._payload), x);
      }
      if (oi(v) || Uo(v)) return k !== null ? null : c(m, d, v, x, null);
      bl(m, v);
    }
    return null;
  }
  function g(m, d, v, x, k) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (m = m.get(v) || null), a(d, m, "" + x, k);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case fl:
          return (m = m.get(x.key === null ? v : x.key) || null), s(d, m, x, k);
        case qr:
          return (m = m.get(x.key === null ? v : x.key) || null), u(d, m, x, k);
        case Wn:
          var b = x._init;
          return g(m, d, v, b(x._payload), k);
      }
      if (oi(x) || Uo(x)) return (m = m.get(v) || null), c(d, m, x, k, null);
      bl(d, x);
    }
    return null;
  }
  function y(m, d, v, x) {
    for (
      var k = null, b = null, C = d, $ = (d = 0), _ = null;
      C !== null && $ < v.length;
      $++
    ) {
      C.index > $ ? ((_ = C), (C = null)) : (_ = C.sibling);
      var T = p(m, C, v[$], x);
      if (T === null) {
        C === null && (C = _);
        break;
      }
      e && C && T.alternate === null && t(m, C),
        (d = i(T, d, $)),
        b === null ? (k = T) : (b.sibling = T),
        (b = T),
        (C = _);
    }
    if ($ === v.length) return n(m, C), Pe && pr(m, $), k;
    if (C === null) {
      for (; $ < v.length; $++)
        (C = f(m, v[$], x)),
          C !== null &&
            ((d = i(C, d, $)), b === null ? (k = C) : (b.sibling = C), (b = C));
      return Pe && pr(m, $), k;
    }
    for (C = r(m, C); $ < v.length; $++)
      (_ = g(C, m, $, v[$], x)),
        _ !== null &&
          (e && _.alternate !== null && C.delete(_.key === null ? $ : _.key),
          (d = i(_, d, $)),
          b === null ? (k = _) : (b.sibling = _),
          (b = _));
    return (
      e &&
        C.forEach(function (z) {
          return t(m, z);
        }),
      Pe && pr(m, $),
      k
    );
  }
  function h(m, d, v, x) {
    var k = Uo(v);
    if (typeof k != "function") throw Error(O(150));
    if (((v = k.call(v)), v == null)) throw Error(O(151));
    for (
      var b = (k = null), C = d, $ = (d = 0), _ = null, T = v.next();
      C !== null && !T.done;
      $++, T = v.next()
    ) {
      C.index > $ ? ((_ = C), (C = null)) : (_ = C.sibling);
      var z = p(m, C, T.value, x);
      if (z === null) {
        C === null && (C = _);
        break;
      }
      e && C && z.alternate === null && t(m, C),
        (d = i(z, d, $)),
        b === null ? (k = z) : (b.sibling = z),
        (b = z),
        (C = _);
    }
    if (T.done) return n(m, C), Pe && pr(m, $), k;
    if (C === null) {
      for (; !T.done; $++, T = v.next())
        (T = f(m, T.value, x)),
          T !== null &&
            ((d = i(T, d, $)), b === null ? (k = T) : (b.sibling = T), (b = T));
      return Pe && pr(m, $), k;
    }
    for (C = r(m, C); !T.done; $++, T = v.next())
      (T = g(C, m, $, T.value, x)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? $ : T.key),
          (d = i(T, d, $)),
          b === null ? (k = T) : (b.sibling = T),
          (b = T));
    return (
      e &&
        C.forEach(function (V) {
          return t(m, V);
        }),
      Pe && pr(m, $),
      k
    );
  }
  function E(m, d, v, x) {
    if (
      (typeof v == "object" &&
        v !== null &&
        v.type === Zr &&
        v.key === null &&
        (v = v.props.children),
      typeof v == "object" && v !== null)
    ) {
      switch (v.$$typeof) {
        case fl:
          e: {
            for (var k = v.key, b = d; b !== null; ) {
              if (b.key === k) {
                if (((k = v.type), k === Zr)) {
                  if (b.tag === 7) {
                    n(m, b.sibling),
                      (d = o(b, v.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  b.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Wn &&
                    tp(k) === b.type)
                ) {
                  n(m, b.sibling),
                    (d = o(b, v.props)),
                    (d.ref = Qo(m, b, v)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, b);
                break;
              } else t(m, b);
              b = b.sibling;
            }
            v.type === Zr
              ? ((d = Er(v.props.children, m.mode, x, v.key)),
                (d.return = m),
                (m = d))
              : ((x = ql(v.type, v.key, v.props, null, m.mode, x)),
                (x.ref = Qo(m, d, v)),
                (x.return = m),
                (m = x));
          }
          return l(m);
        case qr:
          e: {
            for (b = v.key; d !== null; ) {
              if (d.key === b)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === v.containerInfo &&
                  d.stateNode.implementation === v.implementation
                ) {
                  n(m, d.sibling),
                    (d = o(d, v.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = fu(v, m.mode, x)), (d.return = m), (m = d);
          }
          return l(m);
        case Wn:
          return (b = v._init), E(m, d, b(v._payload), x);
      }
      if (oi(v)) return y(m, d, v, x);
      if (Uo(v)) return h(m, d, v, x);
      bl(m, v);
    }
    return (typeof v == "string" && v !== "") || typeof v == "number"
      ? ((v = "" + v),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = o(d, v)), (d.return = m), (m = d))
          : (n(m, d), (d = du(v, m.mode, x)), (d.return = m), (m = d)),
        l(m))
      : n(m, d);
  }
  return E;
}
var ko = zh(!0),
  Nh = zh(!1),
  Ji = {},
  xn = sr(Ji),
  Ai = sr(Ji),
  Di = sr(Ji);
function Sr(e) {
  if (e === Ji) throw Error(O(174));
  return e;
}
function fd(e, t) {
  switch ((we(Di, t), we(Ai, e), we(xn, Ji), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ju(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ju(t, e));
  }
  be(xn), we(xn, t);
}
function bo() {
  be(xn), be(Ai), be(Di);
}
function Ih(e) {
  Sr(Di.current);
  var t = Sr(xn.current),
    n = ju(t, e.type);
  t !== n && (we(Ai, e), we(xn, n));
}
function pd(e) {
  Ai.current === e && (be(xn), be(Ai));
}
var _e = sr(0);
function xa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var iu = [];
function md() {
  for (var e = 0; e < iu.length; e++)
    iu[e]._workInProgressVersionPrimary = null;
  iu.length = 0;
}
var Kl = Fn.ReactCurrentDispatcher,
  lu = Fn.ReactCurrentBatchConfig,
  Rr = 0,
  Oe = null,
  Ge = null,
  qe = null,
  wa = !1,
  mi = !1,
  Fi = 0,
  zy = 0;
function it() {
  throw Error(O(321));
}
function hd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!cn(e[n], t[n])) return !1;
  return !0;
}
function vd(e, t, n, r, o, i) {
  if (
    ((Rr = i),
    (Oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Kl.current = e === null || e.memoizedState === null ? Dy : Fy),
    (e = n(r, o)),
    mi)
  ) {
    i = 0;
    do {
      if (((mi = !1), (Fi = 0), 25 <= i)) throw Error(O(301));
      (i += 1),
        (qe = Ge = null),
        (t.updateQueue = null),
        (Kl.current = By),
        (e = n(r, o));
    } while (mi);
  }
  if (
    ((Kl.current = Sa),
    (t = Ge !== null && Ge.next !== null),
    (Rr = 0),
    (qe = Ge = Oe = null),
    (wa = !1),
    t)
  )
    throw Error(O(300));
  return e;
}
function gd() {
  var e = Fi !== 0;
  return (Fi = 0), e;
}
function pn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return qe === null ? (Oe.memoizedState = qe = e) : (qe = qe.next = e), qe;
}
function Kt() {
  if (Ge === null) {
    var e = Oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ge.next;
  var t = qe === null ? Oe.memoizedState : qe.next;
  if (t !== null) (qe = t), (Ge = e);
  else {
    if (e === null) throw Error(O(310));
    (Ge = e),
      (e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null,
      }),
      qe === null ? (Oe.memoizedState = qe = e) : (qe = qe.next = e);
  }
  return qe;
}
function Bi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function au(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = Ge,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var a = (l = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((Rr & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((a = s = f), (l = r)) : (s = s.next = f),
          (Oe.lanes |= c),
          (_r |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (l = r) : (s.next = a),
      cn(r, t.memoizedState) || (gt = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Oe.lanes |= i), (_r |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function su(e) {
  var t = Kt(),
    n = t.queue;
  if (n === null) throw Error(O(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    cn(i, t.memoizedState) || (gt = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ah() {}
function Dh(e, t) {
  var n = Oe,
    r = Kt(),
    o = t(),
    i = !cn(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (gt = !0)),
    (r = r.queue),
    yd(jh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (qe !== null && qe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ji(9, Bh.bind(null, n, r, o, t), void 0, null),
      Ze === null)
    )
      throw Error(O(349));
    Rr & 30 || Fh(n, t, o);
  }
  return o;
}
function Fh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Bh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Wh(t) && Uh(e);
}
function jh(e, t, n) {
  return n(function () {
    Wh(t) && Uh(e);
  });
}
function Wh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !cn(e, n);
  } catch {
    return !0;
  }
}
function Uh(e) {
  var t = Nn(e, 1);
  t !== null && un(t, e, 1, -1);
}
function np(e) {
  var t = pn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ay.bind(null, Oe, e)),
    [t.memoizedState, e]
  );
}
function ji(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vh() {
  return Kt().memoizedState;
}
function Gl(e, t, n, r) {
  var o = pn();
  (Oe.flags |= e),
    (o.memoizedState = ji(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ua(e, t, n, r) {
  var o = Kt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ge !== null) {
    var l = Ge.memoizedState;
    if (((i = l.destroy), r !== null && hd(r, l.deps))) {
      o.memoizedState = ji(t, n, i, r);
      return;
    }
  }
  (Oe.flags |= e), (o.memoizedState = ji(1 | t, n, i, r));
}
function rp(e, t) {
  return Gl(8390656, 8, e, t);
}
function yd(e, t) {
  return Ua(2048, 8, e, t);
}
function Hh(e, t) {
  return Ua(4, 2, e, t);
}
function Kh(e, t) {
  return Ua(4, 4, e, t);
}
function Gh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qh(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ua(4, 4, Gh.bind(null, t, e), n)
  );
}
function xd() {}
function Xh(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yh(e, t) {
  var n = Kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && hd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function qh(e, t, n) {
  return Rr & 21
    ? (cn(n, t) || ((n = eh()), (Oe.lanes |= n), (_r |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (gt = !0)), (e.memoizedState = n));
}
function Ny(e, t) {
  var n = ve;
  (ve = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = lu.transition;
  lu.transition = {};
  try {
    e(!1), t();
  } finally {
    (ve = n), (lu.transition = r);
  }
}
function Zh() {
  return Kt().memoizedState;
}
function Iy(e, t, n) {
  var r = nr(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jh(e))
  )
    ev(t, n);
  else if (((n = _h(e, t, n, r)), n !== null)) {
    var o = dt();
    un(n, e, r, o), tv(n, t, r);
  }
}
function Ay(e, t, n) {
  var r = nr(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Jh(e)) ev(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          a = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = a), cn(a, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), cd(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = _h(e, t, o, r)),
      n !== null && ((o = dt()), un(n, e, r, o), tv(n, t, r));
  }
}
function Jh(e) {
  var t = e.alternate;
  return e === Oe || (t !== null && t === Oe);
}
function ev(e, t) {
  mi = wa = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function tv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Yc(e, n);
  }
}
var Sa = {
    readContext: Ht,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useInsertionEffect: it,
    useLayoutEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useMutableSource: it,
    useSyncExternalStore: it,
    useId: it,
    unstable_isNewReconciler: !1,
  },
  Dy = {
    readContext: Ht,
    useCallback: function (e, t) {
      return (pn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ht,
    useEffect: rp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Gl(4194308, 4, Gh.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Gl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Gl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Iy.bind(null, Oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: np,
    useDebugValue: xd,
    useDeferredValue: function (e) {
      return (pn().memoizedState = e);
    },
    useTransition: function () {
      var e = np(!1),
        t = e[0];
      return (e = Ny.bind(null, e[1])), (pn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Oe,
        o = pn();
      if (Pe) {
        if (n === void 0) throw Error(O(407));
        n = n();
      } else {
        if (((n = t()), Ze === null)) throw Error(O(349));
        Rr & 30 || Fh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        rp(jh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ji(9, Bh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pn(),
        t = Ze.identifierPrefix;
      if (Pe) {
        var n = Rn,
          r = Tn;
        (n = (r & ~(1 << (32 - sn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Fi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Fy = {
    readContext: Ht,
    useCallback: Xh,
    useContext: Ht,
    useEffect: yd,
    useImperativeHandle: Qh,
    useInsertionEffect: Hh,
    useLayoutEffect: Kh,
    useMemo: Yh,
    useReducer: au,
    useRef: Vh,
    useState: function () {
      return au(Bi);
    },
    useDebugValue: xd,
    useDeferredValue: function (e) {
      var t = Kt();
      return qh(t, Ge.memoizedState, e);
    },
    useTransition: function () {
      var e = au(Bi)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ah,
    useSyncExternalStore: Dh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  },
  By = {
    readContext: Ht,
    useCallback: Xh,
    useContext: Ht,
    useEffect: yd,
    useImperativeHandle: Qh,
    useInsertionEffect: Hh,
    useLayoutEffect: Kh,
    useMemo: Yh,
    useReducer: su,
    useRef: Vh,
    useState: function () {
      return su(Bi);
    },
    useDebugValue: xd,
    useDeferredValue: function (e) {
      var t = Kt();
      return Ge === null ? (t.memoizedState = e) : qh(t, Ge.memoizedState, e);
    },
    useTransition: function () {
      var e = su(Bi)[0],
        t = Kt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ah,
    useSyncExternalStore: Dh,
    useId: Zh,
    unstable_isNewReconciler: !1,
  };
function Co(e, t) {
  try {
    var n = "",
      r = t;
    do (n += mg(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function uu(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function cc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var jy = typeof WeakMap == "function" ? WeakMap : Map;
function nv(e, t, n) {
  (n = On(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ba || ((ba = !0), (wc = r)), cc(e, t);
    }),
    n
  );
}
function rv(e, t, n) {
  (n = On(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        cc(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        cc(e, t),
          typeof r != "function" &&
            (tr === null ? (tr = new Set([this])) : tr.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function op(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new jy();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = t1.bind(null, e, t, n)), t.then(e, e));
}
function ip(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function lp(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = On(-1, 1)), (t.tag = 2), er(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Wy = Fn.ReactCurrentOwner,
  gt = !1;
function ct(e, t, n, r) {
  t.child = e === null ? Nh(t, null, n, r) : ko(t, e.child, n, r);
}
function ap(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    ho(t, o),
    (r = vd(e, t, n, r, i, o)),
    (n = gd()),
    e !== null && !gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        In(e, t, o))
      : (Pe && n && od(t), (t.flags |= 1), ct(e, t, r, o), t.child)
  );
}
function sp(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !$d(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), ov(e, t, i, r, o))
      : ((e = ql(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Li), n(l, r) && e.ref === t.ref)
    )
      return In(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = rr(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ov(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Li(i, r) && e.ref === t.ref)
      if (((gt = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (gt = !0);
      else return (t.lanes = e.lanes), In(e, t, o);
  }
  return dc(e, t, n, r, o);
}
function iv(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        we(so, Tt),
        (Tt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          we(so, Tt),
          (Tt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        we(so, Tt),
        (Tt |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      we(so, Tt),
      (Tt |= r);
  return ct(e, t, o, n), t.child;
}
function lv(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function dc(e, t, n, r, o) {
  var i = xt(n) ? $r : ut.current;
  return (
    (i = wo(t, i)),
    ho(t, o),
    (n = vd(e, t, n, r, i, o)),
    (r = gd()),
    e !== null && !gt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        In(e, t, o))
      : (Pe && r && od(t), (t.flags |= 1), ct(e, t, n, o), t.child)
  );
}
function up(e, t, n, r, o) {
  if (xt(n)) {
    var i = !0;
    pa(t);
  } else i = !1;
  if ((ho(t, o), t.stateNode === null))
    Ql(e, t), Lh(t, n, r), uc(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      a = t.memoizedProps;
    l.props = a;
    var s = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ht(u))
      : ((u = xt(n) ? $r : ut.current), (u = wo(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== r || s !== u) && ep(t, l, r, u)),
      (Un = !1);
    var p = t.memoizedState;
    (l.state = p),
      ya(t, r, l, o),
      (s = t.memoizedState),
      a !== r || p !== s || yt.current || Un
        ? (typeof c == "function" && (sc(t, n, c, r), (s = t.memoizedState)),
          (a = Un || Jf(t, n, a, r, p, s, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = u),
          (r = a))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Oh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : tn(t.type, a)),
      (l.props = u),
      (f = t.pendingProps),
      (p = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Ht(s))
        : ((s = xt(n) ? $r : ut.current), (s = wo(t, s)));
    var g = n.getDerivedStateFromProps;
    (c =
      typeof g == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((a !== f || p !== s) && ep(t, l, r, s)),
      (Un = !1),
      (p = t.memoizedState),
      (l.state = p),
      ya(t, r, l, o);
    var y = t.memoizedState;
    a !== f || p !== y || yt.current || Un
      ? (typeof g == "function" && (sc(t, n, g, r), (y = t.memoizedState)),
        (u = Un || Jf(t, n, u, r, p, y, s) || !1)
          ? (c ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = s),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return fc(e, t, n, r, i, o);
}
function fc(e, t, n, r, o, i) {
  lv(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Qf(t, n, !1), In(e, t, i);
  (r = t.stateNode), (Wy.current = t);
  var a =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = ko(t, e.child, null, i)), (t.child = ko(t, null, a, i)))
      : ct(e, t, a, i),
    (t.memoizedState = r.state),
    o && Qf(t, n, !0),
    t.child
  );
}
function av(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Gf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Gf(e, t.context, !1),
    fd(e, t.containerInfo);
}
function cp(e, t, n, r, o) {
  return So(), ld(o), (t.flags |= 256), ct(e, t, n, r), t.child;
}
var pc = { dehydrated: null, treeContext: null, retryLane: 0 };
function mc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sv(e, t, n) {
  var r = t.pendingProps,
    o = _e.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    a;
  if (
    ((a = l) ||
      (a = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    a
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    we(_e, o & 1),
    e === null)
  )
    return (
      lc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ka(l, r, 0, null)),
              (e = Er(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = mc(n)),
              (t.memoizedState = pc),
              e)
            : wd(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((a = o.dehydrated), a !== null)))
    return Uy(e, t, l, r, a, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (a = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = rr(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      a !== null ? (i = rr(a, i)) : ((i = Er(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? mc(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = pc),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = rr(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function wd(e, t) {
  return (
    (t = Ka({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Cl(e, t, n, r) {
  return (
    r !== null && ld(r),
    ko(t, e.child, null, n),
    (e = wd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Uy(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = uu(Error(O(422)))), Cl(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ka({ mode: "visible", children: r.children }, o, 0, null)),
        (i = Er(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ko(t, e.child, null, l),
        (t.child.memoizedState = mc(l)),
        (t.memoizedState = pc),
        i);
  if (!(t.mode & 1)) return Cl(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (i = Error(O(419))), (r = uu(i, r, void 0)), Cl(e, t, l, r);
  }
  if (((a = (l & e.childLanes) !== 0), gt || a)) {
    if (((r = Ze), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Nn(e, o), un(r, e, o, -1));
    }
    return Pd(), (r = uu(Error(O(421)))), Cl(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = n1.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (_t = Jn(o.nextSibling)),
      (Ot = t),
      (Pe = !0),
      (rn = null),
      e !== null &&
        ((Bt[jt++] = Tn),
        (Bt[jt++] = Rn),
        (Bt[jt++] = Tr),
        (Tn = e.id),
        (Rn = e.overflow),
        (Tr = t)),
      (t = wd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function dp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ac(e.return, t, n);
}
function cu(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function uv(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((ct(e, t, r.children, n), (r = _e.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && dp(e, n, t);
        else if (e.tag === 19) dp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((we(_e, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && xa(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          cu(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && xa(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        cu(t, !0, n, null, i);
        break;
      case "together":
        cu(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ql(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function In(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (_r |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(O(153));
  if (t.child !== null) {
    for (
      e = t.child, n = rr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rr(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Vy(e, t, n) {
  switch (t.tag) {
    case 3:
      av(t), So();
      break;
    case 5:
      Ih(t);
      break;
    case 1:
      xt(t.type) && pa(t);
      break;
    case 4:
      fd(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      we(va, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (we(_e, _e.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? sv(e, t, n)
          : (we(_e, _e.current & 1),
            (e = In(e, t, n)),
            e !== null ? e.sibling : null);
      we(_e, _e.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uv(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        we(_e, _e.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), iv(e, t, n);
  }
  return In(e, t, n);
}
var cv, hc, dv, fv;
cv = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
hc = function () {};
dv = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Sr(xn.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Au(e, o)), (r = Au(e, r)), (i = []);
        break;
      case "select":
        (o = Me({}, o, { value: void 0 })),
          (r = Me({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Bu(e, o)), (r = Bu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = da);
    }
    Wu(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var a = o[u];
          for (l in a) a.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Pi.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((a = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && s !== a && (s != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (l in a)
              !a.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                a[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (a = a ? a.__html : void 0),
              s != null && a !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Pi.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && ke("scroll", e),
                  i || a === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
fv = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Xo(e, t) {
  if (!Pe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function lt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hy(e, t, n) {
  var r = t.pendingProps;
  switch ((id(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return lt(t), null;
    case 1:
      return xt(t.type) && fa(), lt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        bo(),
        be(yt),
        be(ut),
        md(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (kl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), rn !== null && (bc(rn), (rn = null)))),
        hc(e, t),
        lt(t),
        null
      );
    case 5:
      pd(t);
      var o = Sr(Di.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dv(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(O(166));
          return lt(t), null;
        }
        if (((e = Sr(xn.current)), kl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[vn] = t), (r[Ii] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < li.length; o++) ke(li[o], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke("error", r), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              wf(r, i), ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ke("invalid", r);
              break;
            case "textarea":
              kf(r, i), ke("invalid", r);
          }
          Wu(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var a = i[l];
              l === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Sl(r.textContent, a, e),
                    (o = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (i.suppressHydrationWarning !== !0 &&
                      Sl(r.textContent, a, e),
                    (o = ["children", "" + a]))
                : Pi.hasOwnProperty(l) &&
                  a != null &&
                  l === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              pl(r), Sf(r, i, !0);
              break;
            case "textarea":
              pl(r), bf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = da);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fm(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[vn] = t),
            (e[Ii] = r),
            cv(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = Uu(n, r)), n)) {
              case "dialog":
                ke("cancel", e), ke("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < li.length; o++) ke(li[o], e);
                o = r;
                break;
              case "source":
                ke("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", e), ke("load", e), (o = r);
                break;
              case "details":
                ke("toggle", e), (o = r);
                break;
              case "input":
                wf(e, r), (o = Au(e, r)), ke("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = Me({}, r, { value: void 0 })),
                  ke("invalid", e);
                break;
              case "textarea":
                kf(e, r), (o = Bu(e, r)), ke("invalid", e);
                break;
              default:
                o = r;
            }
            Wu(n, o), (a = o);
            for (i in a)
              if (a.hasOwnProperty(i)) {
                var s = a[i];
                i === "style"
                  ? Wm(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Bm(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && $i(e, s)
                    : typeof s == "number" && $i(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Pi.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && ke("scroll", e)
                      : s != null && Vc(e, i, s, l));
              }
            switch (n) {
              case "input":
                pl(e), Sf(e, r, !1);
                break;
              case "textarea":
                pl(e), bf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ir(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? co(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      co(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = da);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return lt(t), null;
    case 6:
      if (e && t.stateNode != null) fv(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
        if (((n = Sr(Di.current)), Sr(xn.current), kl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vn] = t),
            (i = r.nodeValue !== n) && ((e = Ot), e !== null))
          )
            switch (e.tag) {
              case 3:
                Sl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Sl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vn] = t),
            (t.stateNode = r);
      }
      return lt(t), null;
    case 13:
      if (
        (be(_e),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Pe && _t !== null && t.mode & 1 && !(t.flags & 128))
          Rh(), So(), (t.flags |= 98560), (i = !1);
        else if (((i = kl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(O(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(O(317));
            i[vn] = t;
          } else
            So(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          lt(t), (i = !1);
        } else rn !== null && (bc(rn), (rn = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || _e.current & 1 ? Qe === 0 && (Qe = 3) : Pd())),
          t.updateQueue !== null && (t.flags |= 4),
          lt(t),
          null);
    case 4:
      return (
        bo(), hc(e, t), e === null && zi(t.stateNode.containerInfo), lt(t), null
      );
    case 10:
      return ud(t.type._context), lt(t), null;
    case 17:
      return xt(t.type) && fa(), lt(t), null;
    case 19:
      if ((be(_e), (i = t.memoizedState), i === null)) return lt(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Xo(i, !1);
        else {
          if (Qe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = xa(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Xo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return we(_e, (_e.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            je() > Eo &&
            ((t.flags |= 128), (r = !0), Xo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xa(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Xo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !Pe)
            )
              return lt(t), null;
          } else
            2 * je() - i.renderingStartTime > Eo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Xo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = je()),
          (t.sibling = null),
          (n = _e.current),
          we(_e, r ? (n & 1) | 2 : n & 1),
          t)
        : (lt(t), null);
    case 22:
    case 23:
      return (
        Ed(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Tt & 1073741824 && (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : lt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(O(156, t.tag));
}
function Ky(e, t) {
  switch ((id(t), t.tag)) {
    case 1:
      return (
        xt(t.type) && fa(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        bo(),
        be(yt),
        be(ut),
        md(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return pd(t), null;
    case 13:
      if (
        (be(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(O(340));
        So();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return be(_e), null;
    case 4:
      return bo(), null;
    case 10:
      return ud(t.type._context), null;
    case 22:
    case 23:
      return Ed(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var El = !1,
  st = !1,
  Gy = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function ao(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Be(e, t, r);
      }
    else n.current = null;
}
function vc(e, t, n) {
  try {
    n();
  } catch (r) {
    Be(e, t, r);
  }
}
var fp = !1;
function Qy(e, t) {
  if (((Ju = sa), (e = vh()), rd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            a = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (o !== 0 && f.nodeType !== 3) || (a = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (s = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (p = f), (f = g);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++u === o && (a = l),
                p === i && ++c === r && (s = l),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = g;
          }
          n = a === -1 || s === -1 ? null : { start: a, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ec = { focusedElem: e, selectionRange: n }, sa = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var h = y.memoizedProps,
                    E = y.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : tn(t.type, h),
                      E
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = "")
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(O(163));
            }
        } catch (x) {
          Be(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (y = fp), (fp = !1), y;
}
function hi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && vc(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Va(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function gc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pv(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pv(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vn], delete t[Ii], delete t[rc], delete t[_y], delete t[Oy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function mv(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function pp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || mv(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function yc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = da));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (yc(e, t, n), e = e.sibling; e !== null; ) yc(e, t, n), (e = e.sibling);
}
function xc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xc(e, t, n), e = e.sibling; e !== null; ) xc(e, t, n), (e = e.sibling);
}
var tt = null,
  nn = !1;
function jn(e, t, n) {
  for (n = n.child; n !== null; ) hv(e, t, n), (n = n.sibling);
}
function hv(e, t, n) {
  if (yn && typeof yn.onCommitFiberUnmount == "function")
    try {
      yn.onCommitFiberUnmount(Ia, n);
    } catch {}
  switch (n.tag) {
    case 5:
      st || ao(n, t);
    case 6:
      var r = tt,
        o = nn;
      (tt = null),
        jn(e, t, n),
        (tt = r),
        (nn = o),
        tt !== null &&
          (nn
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : tt.removeChild(n.stateNode));
      break;
    case 18:
      tt !== null &&
        (nn
          ? ((e = tt),
            (n = n.stateNode),
            e.nodeType === 8
              ? ru(e.parentNode, n)
              : e.nodeType === 1 && ru(e, n),
            Oi(e))
          : ru(tt, n.stateNode));
      break;
    case 4:
      (r = tt),
        (o = nn),
        (tt = n.stateNode.containerInfo),
        (nn = !0),
        jn(e, t, n),
        (tt = r),
        (nn = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !st &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && vc(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      jn(e, t, n);
      break;
    case 1:
      if (
        !st &&
        (ao(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Be(n, t, a);
        }
      jn(e, t, n);
      break;
    case 21:
      jn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((st = (r = st) || n.memoizedState !== null), jn(e, t, n), (st = r))
        : jn(e, t, n);
      break;
    default:
      jn(e, t, n);
  }
}
function mp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gy()),
      t.forEach(function (r) {
        var o = r1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function en(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          a = l;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (tt = a.stateNode), (nn = !1);
              break e;
            case 3:
              (tt = a.stateNode.containerInfo), (nn = !0);
              break e;
            case 4:
              (tt = a.stateNode.containerInfo), (nn = !0);
              break e;
          }
          a = a.return;
        }
        if (tt === null) throw Error(O(160));
        hv(i, l, o), (tt = null), (nn = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (u) {
        Be(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vv(t, e), (t = t.sibling);
}
function vv(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((en(t, e), fn(e), r & 4)) {
        try {
          hi(3, e, e.return), Va(3, e);
        } catch (h) {
          Be(e, e.return, h);
        }
        try {
          hi(5, e, e.return);
        } catch (h) {
          Be(e, e.return, h);
        }
      }
      break;
    case 1:
      en(t, e), fn(e), r & 512 && n !== null && ao(n, n.return);
      break;
    case 5:
      if (
        (en(t, e),
        fn(e),
        r & 512 && n !== null && ao(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          $i(o, "");
        } catch (h) {
          Be(e, e.return, h);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          a = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            a === "input" && i.type === "radio" && i.name != null && Am(o, i),
              Uu(a, l);
            var u = Uu(a, i);
            for (l = 0; l < s.length; l += 2) {
              var c = s[l],
                f = s[l + 1];
              c === "style"
                ? Wm(o, f)
                : c === "dangerouslySetInnerHTML"
                ? Bm(o, f)
                : c === "children"
                ? $i(o, f)
                : Vc(o, c, f, u);
            }
            switch (a) {
              case "input":
                Du(o, i);
                break;
              case "textarea":
                Dm(o, i);
                break;
              case "select":
                var p = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var g = i.value;
                g != null
                  ? co(o, !!i.multiple, g, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? co(o, !!i.multiple, i.defaultValue, !0)
                      : co(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ii] = i;
          } catch (h) {
            Be(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((en(t, e), fn(e), r & 4)) {
        if (e.stateNode === null) throw Error(O(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (h) {
          Be(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (en(t, e), fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Oi(t.containerInfo);
        } catch (h) {
          Be(e, e.return, h);
        }
      break;
    case 4:
      en(t, e), fn(e);
      break;
    case 13:
      en(t, e),
        fn(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (bd = je())),
        r & 4 && mp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((st = (u = st) || c), en(t, e), (st = u)) : en(t, e),
        fn(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((p = A), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  hi(4, p, p.return);
                  break;
                case 1:
                  ao(p, p.return);
                  var y = p.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (h) {
                      Be(r, n, h);
                    }
                  }
                  break;
                case 5:
                  ao(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    vp(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (A = g)) : vp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((a = f.stateNode),
                      (s = f.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (a.style.display = jm("display", l)));
              } catch (h) {
                Be(e, e.return, h);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (h) {
                Be(e, e.return, h);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      en(t, e), fn(e), r & 4 && mp(e);
      break;
    case 21:
      break;
    default:
      en(t, e), fn(e);
  }
}
function fn(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (mv(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(O(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && ($i(o, ""), (r.flags &= -33));
          var i = pp(e);
          xc(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            a = pp(e);
          yc(e, a, l);
          break;
        default:
          throw Error(O(161));
      }
    } catch (s) {
      Be(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Xy(e, t, n) {
  (A = e), gv(e);
}
function gv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var o = A,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || El;
      if (!l) {
        var a = o.alternate,
          s = (a !== null && a.memoizedState !== null) || st;
        a = El;
        var u = st;
        if (((El = l), (st = s) && !u))
          for (A = o; A !== null; )
            (l = A),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? gp(o)
                : s !== null
                ? ((s.return = l), (A = s))
                : gp(o);
        for (; i !== null; ) (A = i), gv(i), (i = i.sibling);
        (A = o), (El = a), (st = u);
      }
      hp(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (A = i)) : hp(e);
  }
}
function hp(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || Va(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !st)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : tn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Zf(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Zf(t, l, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && Oi(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(O(163));
          }
        st || (t.flags & 512 && gc(t));
      } catch (p) {
        Be(t, t.return, p);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function vp(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function gp(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Va(4, t);
          } catch (s) {
            Be(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Be(t, o, s);
            }
          }
          var i = t.return;
          try {
            gc(t);
          } catch (s) {
            Be(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            gc(t);
          } catch (s) {
            Be(t, l, s);
          }
      }
    } catch (s) {
      Be(t, t.return, s);
    }
    if (t === e) {
      A = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (A = a);
      break;
    }
    A = t.return;
  }
}
var Yy = Math.ceil,
  ka = Fn.ReactCurrentDispatcher,
  Sd = Fn.ReactCurrentOwner,
  Ut = Fn.ReactCurrentBatchConfig,
  le = 0,
  Ze = null,
  Ke = null,
  rt = 0,
  Tt = 0,
  so = sr(0),
  Qe = 0,
  Wi = null,
  _r = 0,
  Ha = 0,
  kd = 0,
  vi = null,
  vt = null,
  bd = 0,
  Eo = 1 / 0,
  Pn = null,
  ba = !1,
  wc = null,
  tr = null,
  Pl = !1,
  Gn = null,
  Ca = 0,
  gi = 0,
  Sc = null,
  Xl = -1,
  Yl = 0;
function dt() {
  return le & 6 ? je() : Xl !== -1 ? Xl : (Xl = je());
}
function nr(e) {
  return e.mode & 1
    ? le & 2 && rt !== 0
      ? rt & -rt
      : Ly.transition !== null
      ? (Yl === 0 && (Yl = eh()), Yl)
      : ((e = ve),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ah(e.type))),
        e)
    : 1;
}
function un(e, t, n, r) {
  if (50 < gi) throw ((gi = 0), (Sc = null), Error(O(185)));
  Yi(e, n, r),
    (!(le & 2) || e !== Ze) &&
      (e === Ze && (!(le & 2) && (Ha |= n), Qe === 4 && Hn(e, rt)),
      wt(e, r),
      n === 1 && le === 0 && !(t.mode & 1) && ((Eo = je() + 500), ja && ur()));
}
function wt(e, t) {
  var n = e.callbackNode;
  Lg(e, t);
  var r = aa(e, e === Ze ? rt : 0);
  if (r === 0)
    n !== null && Pf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pf(n), t === 1))
      e.tag === 0 ? My(yp.bind(null, e)) : Ph(yp.bind(null, e)),
        Ty(function () {
          !(le & 6) && ur();
        }),
        (n = null);
    else {
      switch (th(r)) {
        case 1:
          n = Xc;
          break;
        case 4:
          n = Zm;
          break;
        case 16:
          n = la;
          break;
        case 536870912:
          n = Jm;
          break;
        default:
          n = la;
      }
      n = Ev(n, yv.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function yv(e, t) {
  if (((Xl = -1), (Yl = 0), le & 6)) throw Error(O(327));
  var n = e.callbackNode;
  if (vo() && e.callbackNode !== n) return null;
  var r = aa(e, e === Ze ? rt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ea(e, r);
  else {
    t = r;
    var o = le;
    le |= 2;
    var i = wv();
    (Ze !== e || rt !== t) && ((Pn = null), (Eo = je() + 500), Cr(e, t));
    do
      try {
        Jy();
        break;
      } catch (a) {
        xv(e, a);
      }
    while (1);
    sd(),
      (ka.current = i),
      (le = o),
      Ke !== null ? (t = 0) : ((Ze = null), (rt = 0), (t = Qe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Qu(e)), o !== 0 && ((r = o), (t = kc(e, o)))), t === 1)
    )
      throw ((n = Wi), Cr(e, 0), Hn(e, r), wt(e, je()), n);
    if (t === 6) Hn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !qy(o) &&
          ((t = Ea(e, r)),
          t === 2 && ((i = Qu(e)), i !== 0 && ((r = i), (t = kc(e, i)))),
          t === 1))
      )
        throw ((n = Wi), Cr(e, 0), Hn(e, r), wt(e, je()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(O(345));
        case 2:
          mr(e, vt, Pn);
          break;
        case 3:
          if (
            (Hn(e, r), (r & 130023424) === r && ((t = bd + 500 - je()), 10 < t))
          ) {
            if (aa(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              dt(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = nc(mr.bind(null, e, vt, Pn), t);
            break;
          }
          mr(e, vt, Pn);
          break;
        case 4:
          if ((Hn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - sn(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = je() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Yy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = nc(mr.bind(null, e, vt, Pn), r);
            break;
          }
          mr(e, vt, Pn);
          break;
        case 5:
          mr(e, vt, Pn);
          break;
        default:
          throw Error(O(329));
      }
    }
  }
  return wt(e, je()), e.callbackNode === n ? yv.bind(null, e) : null;
}
function kc(e, t) {
  var n = vi;
  return (
    e.current.memoizedState.isDehydrated && (Cr(e, t).flags |= 256),
    (e = Ea(e, t)),
    e !== 2 && ((t = vt), (vt = n), t !== null && bc(t)),
    e
  );
}
function bc(e) {
  vt === null ? (vt = e) : vt.push.apply(vt, e);
}
function qy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!cn(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Hn(e, t) {
  for (
    t &= ~kd,
      t &= ~Ha,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - sn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yp(e) {
  if (le & 6) throw Error(O(327));
  vo();
  var t = aa(e, 0);
  if (!(t & 1)) return wt(e, je()), null;
  var n = Ea(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Qu(e);
    r !== 0 && ((t = r), (n = kc(e, r)));
  }
  if (n === 1) throw ((n = Wi), Cr(e, 0), Hn(e, t), wt(e, je()), n);
  if (n === 6) throw Error(O(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mr(e, vt, Pn),
    wt(e, je()),
    null
  );
}
function Cd(e, t) {
  var n = le;
  le |= 1;
  try {
    return e(t);
  } finally {
    (le = n), le === 0 && ((Eo = je() + 500), ja && ur());
  }
}
function Or(e) {
  Gn !== null && Gn.tag === 0 && !(le & 6) && vo();
  var t = le;
  le |= 1;
  var n = Ut.transition,
    r = ve;
  try {
    if (((Ut.transition = null), (ve = 1), e)) return e();
  } finally {
    (ve = r), (Ut.transition = n), (le = t), !(le & 6) && ur();
  }
}
function Ed() {
  (Tt = so.current), be(so);
}
function Cr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), $y(n)), Ke !== null))
    for (n = Ke.return; n !== null; ) {
      var r = n;
      switch ((id(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && fa();
          break;
        case 3:
          bo(), be(yt), be(ut), md();
          break;
        case 5:
          pd(r);
          break;
        case 4:
          bo();
          break;
        case 13:
          be(_e);
          break;
        case 19:
          be(_e);
          break;
        case 10:
          ud(r.type._context);
          break;
        case 22:
        case 23:
          Ed();
      }
      n = n.return;
    }
  if (
    ((Ze = e),
    (Ke = e = rr(e.current, null)),
    (rt = Tt = t),
    (Qe = 0),
    (Wi = null),
    (kd = Ha = _r = 0),
    (vt = vi = null),
    wr !== null)
  ) {
    for (t = 0; t < wr.length; t++)
      if (((n = wr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    wr = null;
  }
  return e;
}
function xv(e, t) {
  do {
    var n = Ke;
    try {
      if ((sd(), (Kl.current = Sa), wa)) {
        for (var r = Oe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        wa = !1;
      }
      if (
        ((Rr = 0),
        (qe = Ge = Oe = null),
        (mi = !1),
        (Fi = 0),
        (Sd.current = null),
        n === null || n.return === null)
      ) {
        (Qe = 1), (Wi = t), (Ke = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          a = n,
          s = t;
        if (
          ((t = rt),
          (a.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = a,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var g = ip(l);
          if (g !== null) {
            (g.flags &= -257),
              lp(g, l, a, i, t),
              g.mode & 1 && op(i, u, t),
              (t = g),
              (s = u);
            var y = t.updateQueue;
            if (y === null) {
              var h = new Set();
              h.add(s), (t.updateQueue = h);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              op(i, u, t), Pd();
              break e;
            }
            s = Error(O(426));
          }
        } else if (Pe && a.mode & 1) {
          var E = ip(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              lp(E, l, a, i, t),
              ld(Co(s, a));
            break e;
          }
        }
        (i = s = Co(s, a)),
          Qe !== 4 && (Qe = 2),
          vi === null ? (vi = [i]) : vi.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var m = nv(i, s, t);
              qf(i, m);
              break e;
            case 1:
              a = s;
              var d = i.type,
                v = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (v !== null &&
                    typeof v.componentDidCatch == "function" &&
                    (tr === null || !tr.has(v))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var x = rv(i, a, t);
                qf(i, x);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kv(n);
    } catch (k) {
      (t = k), Ke === n && n !== null && (Ke = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function wv() {
  var e = ka.current;
  return (ka.current = Sa), e === null ? Sa : e;
}
function Pd() {
  (Qe === 0 || Qe === 3 || Qe === 2) && (Qe = 4),
    Ze === null || (!(_r & 268435455) && !(Ha & 268435455)) || Hn(Ze, rt);
}
function Ea(e, t) {
  var n = le;
  le |= 2;
  var r = wv();
  (Ze !== e || rt !== t) && ((Pn = null), Cr(e, t));
  do
    try {
      Zy();
      break;
    } catch (o) {
      xv(e, o);
    }
  while (1);
  if ((sd(), (le = n), (ka.current = r), Ke !== null)) throw Error(O(261));
  return (Ze = null), (rt = 0), Qe;
}
function Zy() {
  for (; Ke !== null; ) Sv(Ke);
}
function Jy() {
  for (; Ke !== null && !Cg(); ) Sv(Ke);
}
function Sv(e) {
  var t = Cv(e.alternate, e, Tt);
  (e.memoizedProps = e.pendingProps),
    t === null ? kv(e) : (Ke = t),
    (Sd.current = null);
}
function kv(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ky(n, t)), n !== null)) {
        (n.flags &= 32767), (Ke = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Qe = 6), (Ke = null);
        return;
      }
    } else if (((n = Hy(n, t, Tt)), n !== null)) {
      Ke = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ke = t;
      return;
    }
    Ke = t = e;
  } while (t !== null);
  Qe === 0 && (Qe = 5);
}
function mr(e, t, n) {
  var r = ve,
    o = Ut.transition;
  try {
    (Ut.transition = null), (ve = 1), e1(e, t, n, r);
  } finally {
    (Ut.transition = o), (ve = r);
  }
  return null;
}
function e1(e, t, n, r) {
  do vo();
  while (Gn !== null);
  if (le & 6) throw Error(O(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(O(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (zg(e, i),
    e === Ze && ((Ke = Ze = null), (rt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pl ||
      ((Pl = !0),
      Ev(la, function () {
        return vo(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Ut.transition), (Ut.transition = null);
    var l = ve;
    ve = 1;
    var a = le;
    (le |= 4),
      (Sd.current = null),
      Qy(e, n),
      vv(n, e),
      wy(ec),
      (sa = !!Ju),
      (ec = Ju = null),
      (e.current = n),
      Xy(n),
      Eg(),
      (le = a),
      (ve = l),
      (Ut.transition = i);
  } else e.current = n;
  if (
    (Pl && ((Pl = !1), (Gn = e), (Ca = o)),
    (i = e.pendingLanes),
    i === 0 && (tr = null),
    Tg(n.stateNode),
    wt(e, je()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (ba) throw ((ba = !1), (e = wc), (wc = null), e);
  return (
    Ca & 1 && e.tag !== 0 && vo(),
    (i = e.pendingLanes),
    i & 1 ? (e === Sc ? gi++ : ((gi = 0), (Sc = e))) : (gi = 0),
    ur(),
    null
  );
}
function vo() {
  if (Gn !== null) {
    var e = th(Ca),
      t = Ut.transition,
      n = ve;
    try {
      if (((Ut.transition = null), (ve = 16 > e ? 16 : e), Gn === null))
        var r = !1;
      else {
        if (((e = Gn), (Gn = null), (Ca = 0), le & 6)) throw Error(O(331));
        var o = le;
        for (le |= 4, A = e.current; A !== null; ) {
          var i = A,
            l = i.child;
          if (A.flags & 16) {
            var a = i.deletions;
            if (a !== null) {
              for (var s = 0; s < a.length; s++) {
                var u = a[s];
                for (A = u; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      hi(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (A = f);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var p = c.sibling,
                        g = c.return;
                      if ((pv(c), c === u)) {
                        A = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (A = p);
                        break;
                      }
                      A = g;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var h = y.child;
                if (h !== null) {
                  y.child = null;
                  do {
                    var E = h.sibling;
                    (h.sibling = null), (h = E);
                  } while (h !== null);
                }
              }
              A = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (A = l);
          else
            e: for (; A !== null; ) {
              if (((i = A), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    hi(9, i, i.return);
                }
              var m = i.sibling;
              if (m !== null) {
                (m.return = i.return), (A = m);
                break e;
              }
              A = i.return;
            }
        }
        var d = e.current;
        for (A = d; A !== null; ) {
          l = A;
          var v = l.child;
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (A = v);
          else
            e: for (l = d; A !== null; ) {
              if (((a = A), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Va(9, a);
                  }
                } catch (k) {
                  Be(a, a.return, k);
                }
              if (a === l) {
                A = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (A = x);
                break e;
              }
              A = a.return;
            }
        }
        if (
          ((le = o), ur(), yn && typeof yn.onPostCommitFiberRoot == "function")
        )
          try {
            yn.onPostCommitFiberRoot(Ia, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ve = n), (Ut.transition = t);
    }
  }
  return !1;
}
function xp(e, t, n) {
  (t = Co(n, t)),
    (t = nv(e, t, 1)),
    (e = er(e, t, 1)),
    (t = dt()),
    e !== null && (Yi(e, 1, t), wt(e, t));
}
function Be(e, t, n) {
  if (e.tag === 3) xp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        xp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (tr === null || !tr.has(r)))
        ) {
          (e = Co(n, e)),
            (e = rv(t, e, 1)),
            (t = er(t, e, 1)),
            (e = dt()),
            t !== null && (Yi(t, 1, e), wt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function t1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = dt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ze === e &&
      (rt & n) === n &&
      (Qe === 4 || (Qe === 3 && (rt & 130023424) === rt && 500 > je() - bd)
        ? Cr(e, 0)
        : (kd |= n)),
    wt(e, t);
}
function bv(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vl), (vl <<= 1), !(vl & 130023424) && (vl = 4194304))
      : (t = 1));
  var n = dt();
  (e = Nn(e, t)), e !== null && (Yi(e, t, n), wt(e, n));
}
function n1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), bv(e, n);
}
function r1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(O(314));
  }
  r !== null && r.delete(t), bv(e, n);
}
var Cv;
Cv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || yt.current) gt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (gt = !1), Vy(e, t, n);
      gt = !!(e.flags & 131072);
    }
  else (gt = !1), Pe && t.flags & 1048576 && $h(t, ha, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ql(e, t), (e = t.pendingProps);
      var o = wo(t, ut.current);
      ho(t, n), (o = vd(null, t, r, e, o, n));
      var i = gd();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            xt(r) ? ((i = !0), pa(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            dd(t),
            (o.updater = Wa),
            (t.stateNode = o),
            (o._reactInternals = t),
            uc(t, r, e, n),
            (t = fc(null, t, r, !0, i, n)))
          : ((t.tag = 0), Pe && i && od(t), ct(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ql(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = i1(r)),
          (e = tn(r, e)),
          o)
        ) {
          case 0:
            t = dc(null, t, r, e, n);
            break e;
          case 1:
            t = up(null, t, r, e, n);
            break e;
          case 11:
            t = ap(null, t, r, e, n);
            break e;
          case 14:
            t = sp(null, t, r, tn(r.type, e), n);
            break e;
        }
        throw Error(O(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        dc(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        up(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((av(t), e === null)) throw Error(O(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Oh(e, t),
          ya(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Co(Error(O(423)), t)), (t = cp(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Co(Error(O(424)), t)), (t = cp(e, t, r, n, o));
            break e;
          } else
            for (
              _t = Jn(t.stateNode.containerInfo.firstChild),
                Ot = t,
                Pe = !0,
                rn = null,
                n = Nh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((So(), r === o)) {
            t = In(e, t, n);
            break e;
          }
          ct(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ih(t),
        e === null && lc(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        tc(r, o) ? (l = null) : i !== null && tc(r, i) && (t.flags |= 32),
        lv(e, t),
        ct(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && lc(t), null;
    case 13:
      return sv(e, t, n);
    case 4:
      return (
        fd(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ko(t, null, r, n)) : ct(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        ap(e, t, r, o, n)
      );
    case 7:
      return ct(e, t, t.pendingProps, n), t.child;
    case 8:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ct(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          we(va, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (cn(i.value, l)) {
            if (i.children === o.children && !yt.current) {
              t = In(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var a = i.dependencies;
              if (a !== null) {
                l = i.child;
                for (var s = a.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = On(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      ac(i.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(O(341));
                (l.lanes |= n),
                  (a = l.alternate),
                  a !== null && (a.lanes |= n),
                  ac(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        ct(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        ho(t, n),
        (o = Ht(o)),
        (r = r(o)),
        (t.flags |= 1),
        ct(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = tn(r, t.pendingProps)),
        (o = tn(r.type, o)),
        sp(e, t, r, o, n)
      );
    case 15:
      return ov(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : tn(r, o)),
        Ql(e, t),
        (t.tag = 1),
        xt(r) ? ((e = !0), pa(t)) : (e = !1),
        ho(t, n),
        Lh(t, r, o),
        uc(t, r, o, n),
        fc(null, t, r, !0, e, n)
      );
    case 19:
      return uv(e, t, n);
    case 22:
      return iv(e, t, n);
  }
  throw Error(O(156, t.tag));
};
function Ev(e, t) {
  return qm(e, t);
}
function o1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Wt(e, t, n, r) {
  return new o1(e, t, n, r);
}
function $d(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function i1(e) {
  if (typeof e == "function") return $d(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Kc)) return 11;
    if (e === Gc) return 14;
  }
  return 2;
}
function rr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Wt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ql(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) $d(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Zr:
        return Er(n.children, o, i, t);
      case Hc:
        (l = 8), (o |= 8);
        break;
      case Lu:
        return (
          (e = Wt(12, n, t, o | 2)), (e.elementType = Lu), (e.lanes = i), e
        );
      case zu:
        return (e = Wt(13, n, t, o)), (e.elementType = zu), (e.lanes = i), e;
      case Nu:
        return (e = Wt(19, n, t, o)), (e.elementType = Nu), (e.lanes = i), e;
      case zm:
        return Ka(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Mm:
              l = 10;
              break e;
            case Lm:
              l = 9;
              break e;
            case Kc:
              l = 11;
              break e;
            case Gc:
              l = 14;
              break e;
            case Wn:
              (l = 16), (r = null);
              break e;
          }
        throw Error(O(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Wt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Er(e, t, n, r) {
  return (e = Wt(7, e, r, t)), (e.lanes = n), e;
}
function Ka(e, t, n, r) {
  return (
    (e = Wt(22, e, r, t)),
    (e.elementType = zm),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function du(e, t, n) {
  return (e = Wt(6, e, null, t)), (e.lanes = n), e;
}
function fu(e, t, n) {
  return (
    (t = Wt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function l1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ks(0)),
    (this.expirationTimes = Ks(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ks(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Td(e, t, n, r, o, i, l, a, s) {
  return (
    (e = new l1(e, t, n, a, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Wt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    dd(i),
    e
  );
}
function a1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: qr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Pv(e) {
  if (!e) return lr;
  e = e._reactInternals;
  e: {
    if (Ir(e) !== e || e.tag !== 1) throw Error(O(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (xt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(O(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (xt(n)) return Eh(e, n, t);
  }
  return t;
}
function $v(e, t, n, r, o, i, l, a, s) {
  return (
    (e = Td(n, r, !0, e, o, i, l, a, s)),
    (e.context = Pv(null)),
    (n = e.current),
    (r = dt()),
    (o = nr(n)),
    (i = On(r, o)),
    (i.callback = t ?? null),
    er(n, i, o),
    (e.current.lanes = o),
    Yi(e, o, r),
    wt(e, r),
    e
  );
}
function Ga(e, t, n, r) {
  var o = t.current,
    i = dt(),
    l = nr(o);
  return (
    (n = Pv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = On(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = er(o, t, l)),
    e !== null && (un(e, o, l, i), Hl(e, o, l)),
    l
  );
}
function Pa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Rd(e, t) {
  wp(e, t), (e = e.alternate) && wp(e, t);
}
function s1() {
  return null;
}
var Tv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function _d(e) {
  this._internalRoot = e;
}
Qa.prototype.render = _d.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(O(409));
  Ga(e, t, null, null);
};
Qa.prototype.unmount = _d.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Or(function () {
      Ga(null, e, null, null);
    }),
      (t[zn] = null);
  }
};
function Qa(e) {
  this._internalRoot = e;
}
Qa.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = oh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vn.length && t !== 0 && t < Vn[n].priority; n++);
    Vn.splice(n, 0, e), n === 0 && lh(e);
  }
};
function Od(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Xa(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sp() {}
function u1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Pa(l);
        i.call(u);
      };
    }
    var l = $v(t, r, e, 0, null, !1, !1, "", Sp);
    return (
      (e._reactRootContainer = l),
      (e[zn] = l.current),
      zi(e.nodeType === 8 ? e.parentNode : e),
      Or(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Pa(s);
      a.call(u);
    };
  }
  var s = Td(e, 0, !1, null, null, !1, !1, "", Sp);
  return (
    (e._reactRootContainer = s),
    (e[zn] = s.current),
    zi(e.nodeType === 8 ? e.parentNode : e),
    Or(function () {
      Ga(t, s, n, r);
    }),
    s
  );
}
function Ya(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var a = o;
      o = function () {
        var s = Pa(l);
        a.call(s);
      };
    }
    Ga(t, l, e, o);
  } else l = u1(n, t, e, o, r);
  return Pa(l);
}
nh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ii(t.pendingLanes);
        n !== 0 &&
          (Yc(t, n | 1), wt(t, je()), !(le & 6) && ((Eo = je() + 500), ur()));
      }
      break;
    case 13:
      Or(function () {
        var r = Nn(e, 1);
        if (r !== null) {
          var o = dt();
          un(r, e, 1, o);
        }
      }),
        Rd(e, 1);
  }
};
qc = function (e) {
  if (e.tag === 13) {
    var t = Nn(e, 134217728);
    if (t !== null) {
      var n = dt();
      un(t, e, 134217728, n);
    }
    Rd(e, 134217728);
  }
};
rh = function (e) {
  if (e.tag === 13) {
    var t = nr(e),
      n = Nn(e, t);
    if (n !== null) {
      var r = dt();
      un(n, e, t, r);
    }
    Rd(e, t);
  }
};
oh = function () {
  return ve;
};
ih = function (e, t) {
  var n = ve;
  try {
    return (ve = e), t();
  } finally {
    ve = n;
  }
};
Hu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Du(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Ba(r);
            if (!o) throw Error(O(90));
            Im(r), Du(r, o);
          }
        }
      }
      break;
    case "textarea":
      Dm(e, n);
      break;
    case "select":
      (t = n.value), t != null && co(e, !!n.multiple, t, !1);
  }
};
Hm = Cd;
Km = Or;
var c1 = { usingClientEntryPoint: !1, Events: [Zi, no, Ba, Um, Vm, Cd] },
  Yo = {
    findFiberByHostInstance: xr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  d1 = {
    bundleType: Yo.bundleType,
    version: Yo.version,
    rendererPackageName: Yo.rendererPackageName,
    rendererConfig: Yo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xm(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Yo.findFiberByHostInstance || s1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$l.isDisabled && $l.supportsFiber)
    try {
      (Ia = $l.inject(d1)), (yn = $l);
    } catch {}
}
Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c1;
Nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Od(t)) throw Error(O(200));
  return a1(e, t, null, n);
};
Nt.createRoot = function (e, t) {
  if (!Od(e)) throw Error(O(299));
  var n = !1,
    r = "",
    o = Tv;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Td(e, 1, !1, null, null, n, !1, r, o)),
    (e[zn] = t.current),
    zi(e.nodeType === 8 ? e.parentNode : e),
    new _d(t)
  );
};
Nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(O(188))
      : ((e = Object.keys(e).join(",")), Error(O(268, e)));
  return (e = Xm(t)), (e = e === null ? null : e.stateNode), e;
};
Nt.flushSync = function (e) {
  return Or(e);
};
Nt.hydrate = function (e, t, n) {
  if (!Xa(t)) throw Error(O(200));
  return Ya(null, e, t, !0, n);
};
Nt.hydrateRoot = function (e, t, n) {
  if (!Od(e)) throw Error(O(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = Tv;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = $v(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[zn] = t.current),
    zi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Qa(t);
};
Nt.render = function (e, t, n) {
  if (!Xa(t)) throw Error(O(200));
  return Ya(null, e, t, !1, n);
};
Nt.unmountComponentAtNode = function (e) {
  if (!Xa(e)) throw Error(O(40));
  return e._reactRootContainer
    ? (Or(function () {
        Ya(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zn] = null);
        });
      }),
      !0)
    : !1;
};
Nt.unstable_batchedUpdates = Cd;
Nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Xa(n)) throw Error(O(200));
  if (e == null || e._reactInternals === void 0) throw Error(O(38));
  return Ya(e, t, n, !1, r);
};
Nt.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = Nt);
})(sg);
const Tl = xm(Ei);
var kp = Ei;
(_u.createRoot = kp.createRoot), (_u.hydrateRoot = kp.hydrateRoot);
function w() {
  return (
    (w = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    w.apply(this, arguments)
  );
}
function yr(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function Rv(e) {
  if (!yr(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Rv(e[n]);
    }),
    t
  );
}
function Mn(e, t, n = { clone: !0 }) {
  const r = n.clone ? w({}, e) : e;
  return (
    yr(e) &&
      yr(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (yr(t[o]) && o in e && yr(e[o])
            ? (r[o] = Mn(e[o], t[o], n))
            : n.clone
            ? (r[o] = yr(t[o]) ? Rv(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function Po(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
var bp = {},
  f1 = {
    get exports() {
      return bp;
    },
    set exports(e) {
      bp = e;
    },
  },
  ge = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Md = Symbol.for("react.element"),
  Ld = Symbol.for("react.portal"),
  qa = Symbol.for("react.fragment"),
  Za = Symbol.for("react.strict_mode"),
  Ja = Symbol.for("react.profiler"),
  es = Symbol.for("react.provider"),
  ts = Symbol.for("react.context"),
  p1 = Symbol.for("react.server_context"),
  ns = Symbol.for("react.forward_ref"),
  rs = Symbol.for("react.suspense"),
  os = Symbol.for("react.suspense_list"),
  is = Symbol.for("react.memo"),
  ls = Symbol.for("react.lazy"),
  m1 = Symbol.for("react.offscreen"),
  _v;
_v = Symbol.for("react.module.reference");
function Yt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Md:
        switch (((e = e.type), e)) {
          case qa:
          case Ja:
          case Za:
          case rs:
          case os:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case p1:
              case ts:
              case ns:
              case ls:
              case is:
              case es:
                return e;
              default:
                return t;
            }
        }
      case Ld:
        return t;
    }
  }
}
ge.ContextConsumer = ts;
ge.ContextProvider = es;
ge.Element = Md;
ge.ForwardRef = ns;
ge.Fragment = qa;
ge.Lazy = ls;
ge.Memo = is;
ge.Portal = Ld;
ge.Profiler = Ja;
ge.StrictMode = Za;
ge.Suspense = rs;
ge.SuspenseList = os;
ge.isAsyncMode = function () {
  return !1;
};
ge.isConcurrentMode = function () {
  return !1;
};
ge.isContextConsumer = function (e) {
  return Yt(e) === ts;
};
ge.isContextProvider = function (e) {
  return Yt(e) === es;
};
ge.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Md;
};
ge.isForwardRef = function (e) {
  return Yt(e) === ns;
};
ge.isFragment = function (e) {
  return Yt(e) === qa;
};
ge.isLazy = function (e) {
  return Yt(e) === ls;
};
ge.isMemo = function (e) {
  return Yt(e) === is;
};
ge.isPortal = function (e) {
  return Yt(e) === Ld;
};
ge.isProfiler = function (e) {
  return Yt(e) === Ja;
};
ge.isStrictMode = function (e) {
  return Yt(e) === Za;
};
ge.isSuspense = function (e) {
  return Yt(e) === rs;
};
ge.isSuspenseList = function (e) {
  return Yt(e) === os;
};
ge.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === qa ||
    e === Ja ||
    e === Za ||
    e === rs ||
    e === os ||
    e === m1 ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === ls ||
        e.$$typeof === is ||
        e.$$typeof === es ||
        e.$$typeof === ts ||
        e.$$typeof === ns ||
        e.$$typeof === _v ||
        e.getModuleId !== void 0))
  );
};
ge.typeOf = Yt;
(function (e) {
  e.exports = ge;
})(f1);
function X(e) {
  if (typeof e != "string") throw new Error(Po(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function h1(...e) {
  return e.reduce(
    (t, n) =>
      n == null
        ? t
        : function (...o) {
            t.apply(this, o), n.apply(this, o);
          },
    () => {}
  );
}
function v1(e, t = 166) {
  let n;
  function r(...o) {
    const i = () => {
      e.apply(this, o);
    };
    clearTimeout(n), (n = setTimeout(i, t));
  }
  return (
    (r.clear = () => {
      clearTimeout(n);
    }),
    r
  );
}
function g1(e, t) {
  return () => null;
}
function y1(e, t) {
  return S.isValidElement(e) && t.indexOf(e.type.muiName) !== -1;
}
function or(e) {
  return (e && e.ownerDocument) || document;
}
function x1(e) {
  return or(e).defaultView || window;
}
function w1(e, t) {
  return () => null;
}
function $a(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const S1 = typeof window < "u" ? S.useLayoutEffect : S.useEffect,
  Mr = S1;
let Cp = 0;
function k1(e) {
  const [t, n] = S.useState(e),
    r = e || t;
  return (
    S.useEffect(() => {
      t == null && ((Cp += 1), n(`mui-${Cp}`));
    }, [t]),
    r
  );
}
const Ep = Ru["useId"];
function Ov(e) {
  if (Ep !== void 0) {
    const t = Ep();
    return e ?? t;
  }
  return k1(e);
}
function b1(e, t, n, r, o) {
  return null;
}
function el({ controlled: e, default: t, name: n, state: r = "value" }) {
  const { current: o } = S.useRef(e !== void 0),
    [i, l] = S.useState(t),
    a = o ? e : i,
    s = S.useCallback((u) => {
      o || l(u);
    }, []);
  return [a, s];
}
function _n(e) {
  const t = S.useRef(e);
  return (
    Mr(() => {
      t.current = e;
    }),
    S.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function Gt(...e) {
  return S.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              $a(n, t);
            });
          },
    e
  );
}
let as = !0,
  Cc = !1,
  Pp;
const C1 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0,
};
function E1(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && C1[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function P1(e) {
  e.metaKey || e.altKey || e.ctrlKey || (as = !0);
}
function pu() {
  as = !1;
}
function $1() {
  this.visibilityState === "hidden" && Cc && (as = !0);
}
function T1(e) {
  e.addEventListener("keydown", P1, !0),
    e.addEventListener("mousedown", pu, !0),
    e.addEventListener("pointerdown", pu, !0),
    e.addEventListener("touchstart", pu, !0),
    e.addEventListener("visibilitychange", $1, !0);
}
function R1(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return as || E1(t);
}
function ss() {
  const e = S.useCallback((o) => {
      o != null && T1(o.ownerDocument);
    }, []),
    t = S.useRef(!1);
  function n() {
    return t.current
      ? ((Cc = !0),
        window.clearTimeout(Pp),
        (Pp = window.setTimeout(() => {
          Cc = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return R1(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
const _1 = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
  },
  O1 = _1;
function zd(e, t) {
  const n = w({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = w({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = w({}, i)),
              Object.keys(o).forEach((l) => {
                n[r][l] = zd(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Le(e, t, n = void 0) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce((i, l) => {
          if (l) {
            const a = t(l);
            a !== "" && i.push(a), n && n[l] && i.push(n[l]);
          }
          return i;
        }, [])
        .join(" ");
    }),
    r
  );
}
const $p = (e) => e,
  M1 = () => {
    let e = $p;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = $p;
      },
    };
  },
  L1 = M1(),
  Nd = L1,
  z1 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    readOnly: "readOnly",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function $e(e, t, n = "Mui") {
  const r = z1[t];
  return r ? `${n}-${r}` : `${Nd.generate(e)}-${t}`;
}
function ze(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = $e(e, o, n);
    }),
    r
  );
}
function Mv(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var N1 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  I1 = Mv(function (e) {
    return (
      N1.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function A1(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function D1(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var F1 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(D1(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = A1(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  at = "-ms-",
  Ta = "-moz-",
  ce = "-webkit-",
  Lv = "comm",
  Id = "rule",
  Ad = "decl",
  B1 = "@import",
  zv = "@keyframes",
  j1 = Math.abs,
  us = String.fromCharCode,
  W1 = Object.assign;
function U1(e, t) {
  return nt(e, 0) ^ 45
    ? (((((((t << 2) ^ nt(e, 0)) << 2) ^ nt(e, 1)) << 2) ^ nt(e, 2)) << 2) ^
        nt(e, 3)
    : 0;
}
function Nv(e) {
  return e.trim();
}
function V1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function fe(e, t, n) {
  return e.replace(t, n);
}
function Ec(e, t) {
  return e.indexOf(t);
}
function nt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ui(e, t, n) {
  return e.slice(t, n);
}
function mn(e) {
  return e.length;
}
function Dd(e) {
  return e.length;
}
function Rl(e, t) {
  return t.push(e), e;
}
function H1(e, t) {
  return e.map(t).join("");
}
var cs = 1,
  $o = 1,
  Iv = 0,
  bt = 0,
  He = 0,
  No = "";
function ds(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: cs,
    column: $o,
    length: l,
    return: "",
  };
}
function qo(e, t) {
  return W1(ds("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function K1() {
  return He;
}
function G1() {
  return (
    (He = bt > 0 ? nt(No, --bt) : 0), $o--, He === 10 && (($o = 1), cs--), He
  );
}
function Mt() {
  return (
    (He = bt < Iv ? nt(No, bt++) : 0), $o++, He === 10 && (($o = 1), cs++), He
  );
}
function wn() {
  return nt(No, bt);
}
function Zl() {
  return bt;
}
function tl(e, t) {
  return Ui(No, e, t);
}
function Vi(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Av(e) {
  return (cs = $o = 1), (Iv = mn((No = e))), (bt = 0), [];
}
function Dv(e) {
  return (No = ""), e;
}
function Jl(e) {
  return Nv(tl(bt - 1, Pc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Q1(e) {
  for (; (He = wn()) && He < 33; ) Mt();
  return Vi(e) > 2 || Vi(He) > 3 ? "" : " ";
}
function X1(e, t) {
  for (
    ;
    --t &&
    Mt() &&
    !(He < 48 || He > 102 || (He > 57 && He < 65) || (He > 70 && He < 97));

  );
  return tl(e, Zl() + (t < 6 && wn() == 32 && Mt() == 32));
}
function Pc(e) {
  for (; Mt(); )
    switch (He) {
      case e:
        return bt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pc(He);
        break;
      case 40:
        e === 41 && Pc(e);
        break;
      case 92:
        Mt();
        break;
    }
  return bt;
}
function Y1(e, t) {
  for (; Mt() && e + He !== 47 + 10; )
    if (e + He === 42 + 42 && wn() === 47) break;
  return "/*" + tl(t, bt - 1) + "*" + us(e === 47 ? e : Mt());
}
function q1(e) {
  for (; !Vi(wn()); ) Mt();
  return tl(e, bt);
}
function Z1(e) {
  return Dv(ea("", null, null, null, [""], (e = Av(e)), 0, [0], e));
}
function ea(e, t, n, r, o, i, l, a, s) {
  for (
    var u = 0,
      c = 0,
      f = l,
      p = 0,
      g = 0,
      y = 0,
      h = 1,
      E = 1,
      m = 1,
      d = 0,
      v = "",
      x = o,
      k = i,
      b = r,
      C = v;
    E;

  )
    switch (((y = d), (d = Mt()))) {
      case 40:
        if (y != 108 && nt(C, f - 1) == 58) {
          Ec((C += fe(Jl(d), "&", "&\f")), "&\f") != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Jl(d);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Q1(y);
        break;
      case 92:
        C += X1(Zl() - 1, 7);
        continue;
      case 47:
        switch (wn()) {
          case 42:
          case 47:
            Rl(J1(Y1(Mt(), Zl()), t, n), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * h:
        a[u++] = mn(C) * m;
      case 125 * h:
      case 59:
      case 0:
        switch (d) {
          case 0:
          case 125:
            E = 0;
          case 59 + c:
            g > 0 &&
              mn(C) - f &&
              Rl(
                g > 32
                  ? Rp(C + ";", r, n, f - 1)
                  : Rp(fe(C, " ", "") + ";", r, n, f - 2),
                s
              );
            break;
          case 59:
            C += ";";
          default:
            if (
              (Rl((b = Tp(C, t, n, u, c, o, a, v, (x = []), (k = []), f)), i),
              d === 123)
            )
              if (c === 0) ea(C, t, b, b, x, i, f, a, k);
              else
                switch (p === 99 && nt(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 109:
                  case 115:
                    ea(
                      e,
                      b,
                      b,
                      r && Rl(Tp(e, b, b, 0, 0, o, a, v, o, (x = []), f), k),
                      o,
                      k,
                      f,
                      a,
                      r ? x : k
                    );
                    break;
                  default:
                    ea(C, b, b, b, [""], k, 0, a, k);
                }
        }
        (u = c = g = 0), (h = m = 1), (v = C = ""), (f = l);
        break;
      case 58:
        (f = 1 + mn(C)), (g = y);
      default:
        if (h < 1) {
          if (d == 123) --h;
          else if (d == 125 && h++ == 0 && G1() == 125) continue;
        }
        switch (((C += us(d)), d * h)) {
          case 38:
            m = c > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (a[u++] = (mn(C) - 1) * m), (m = 1);
            break;
          case 64:
            wn() === 45 && (C += Jl(Mt())),
              (p = wn()),
              (c = f = mn((v = C += q1(Zl())))),
              d++;
            break;
          case 45:
            y === 45 && mn(C) == 2 && (h = 0);
        }
    }
  return i;
}
function Tp(e, t, n, r, o, i, l, a, s, u, c) {
  for (
    var f = o - 1, p = o === 0 ? i : [""], g = Dd(p), y = 0, h = 0, E = 0;
    y < r;
    ++y
  )
    for (var m = 0, d = Ui(e, f + 1, (f = j1((h = l[y])))), v = e; m < g; ++m)
      (v = Nv(h > 0 ? p[m] + " " + d : fe(d, /&\f/g, p[m]))) && (s[E++] = v);
  return ds(e, t, n, o === 0 ? Id : a, s, u, c);
}
function J1(e, t, n) {
  return ds(e, t, n, Lv, us(K1()), Ui(e, 2, -2), 0);
}
function Rp(e, t, n, r) {
  return ds(e, t, n, Ad, Ui(e, 0, r), Ui(e, r + 1, -1), r);
}
function go(e, t) {
  for (var n = "", r = Dd(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function ex(e, t, n, r) {
  switch (e.type) {
    case B1:
    case Ad:
      return (e.return = e.return || e.value);
    case Lv:
      return "";
    case zv:
      return (e.return = e.value + "{" + go(e.children, r) + "}");
    case Id:
      e.value = e.props.join(",");
  }
  return mn((n = go(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function tx(e) {
  var t = Dd(e);
  return function (n, r, o, i) {
    for (var l = "", a = 0; a < t; a++) l += e[a](n, r, o, i) || "";
    return l;
  };
}
function nx(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var rx = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = wn()), o === 38 && i === 12 && (n[r] = 1), !Vi(i);

    )
      Mt();
    return tl(t, bt);
  },
  ox = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (Vi(o)) {
        case 0:
          o === 38 && wn() === 12 && (n[r] = 1), (t[r] += rx(bt - 1, n, r));
          break;
        case 2:
          t[r] += Jl(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = wn() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += us(o);
      }
    while ((o = Mt()));
    return t;
  },
  ix = function (t, n) {
    return Dv(ox(Av(t), n));
  },
  _p = new WeakMap(),
  lx = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !_p.get(r)) &&
        !o
      ) {
        _p.set(t, !0);
        for (
          var i = [], l = ix(n, i), a = r.props, s = 0, u = 0;
          s < l.length;
          s++
        )
          for (var c = 0; c < a.length; c++, u++)
            t.props[u] = i[s] ? l[s].replace(/&\f/g, a[c]) : a[c] + " " + l[s];
      }
    }
  },
  ax = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Fv(e, t) {
  switch (U1(e, t)) {
    case 5103:
      return ce + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ce + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + Ta + e + at + e + e;
    case 6828:
    case 4268:
      return ce + e + at + e + e;
    case 6165:
      return ce + e + at + "flex-" + e + e;
    case 5187:
      return (
        ce + e + fe(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + at + "flex-$1$2") + e
      );
    case 5443:
      return ce + e + at + "flex-item-" + fe(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        ce +
        e +
        at +
        "flex-line-pack" +
        fe(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return ce + e + at + fe(e, "shrink", "negative") + e;
    case 5292:
      return ce + e + at + fe(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        ce +
        "box-" +
        fe(e, "-grow", "") +
        ce +
        e +
        at +
        fe(e, "grow", "positive") +
        e
      );
    case 4554:
      return ce + fe(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    case 6187:
      return (
        fe(
          fe(fe(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"),
          e,
          ""
        ) + e
      );
    case 5495:
    case 3959:
      return fe(e, /(image-set\([^]*)/, ce + "$1$`$1");
    case 4968:
      return (
        fe(
          fe(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + at + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        ce +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return fe(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (mn(e) - 1 - t > 6)
        switch (nt(e, t + 1)) {
          case 109:
            if (nt(e, t + 4) !== 45) break;
          case 102:
            return (
              fe(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  ce +
                  "$2-$3$1" +
                  Ta +
                  (nt(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Ec(e, "stretch")
              ? Fv(fe(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (nt(e, t + 1) !== 115) break;
    case 6444:
      switch (nt(e, mn(e) - 3 - (~Ec(e, "!important") && 10))) {
        case 107:
          return fe(e, ":", ":" + ce) + e;
        case 101:
          return (
            fe(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                ce +
                (nt(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                ce +
                "$2$3$1" +
                at +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (nt(e, t + 11)) {
        case 114:
          return ce + e + at + fe(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ce + e + at + fe(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ce + e + at + fe(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + at + e + e;
  }
  return e;
}
var sx = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ad:
          t.return = Fv(t.value, t.length);
          break;
        case zv:
          return go([qo(t, { value: fe(t.value, "@", "@" + ce) })], o);
        case Id:
          if (t.length)
            return H1(t.props, function (i) {
              switch (V1(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return go(
                    [qo(t, { props: [fe(i, /:(read-\w+)/, ":" + Ta + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return go(
                    [
                      qo(t, {
                        props: [fe(i, /:(plac\w+)/, ":" + ce + "input-$1")],
                      }),
                      qo(t, { props: [fe(i, /:(plac\w+)/, ":" + Ta + "$1")] }),
                      qo(t, { props: [fe(i, /:(plac\w+)/, at + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  ux = [sx],
  cx = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (h) {
        var E = h.getAttribute("data-emotion");
        E.indexOf(" ") !== -1 &&
          (document.head.appendChild(h), h.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || ux,
      i = {},
      l,
      a = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (h) {
          for (
            var E = h.getAttribute("data-emotion").split(" "), m = 1;
            m < E.length;
            m++
          )
            i[E[m]] = !0;
          a.push(h);
        }
      );
    var s,
      u = [lx, ax];
    {
      var c,
        f = [
          ex,
          nx(function (h) {
            c.insert(h);
          }),
        ],
        p = tx(u.concat(o, f)),
        g = function (E) {
          return go(Z1(E), p);
        };
      s = function (E, m, d, v) {
        (c = d),
          g(E ? E + "{" + m.styles + "}" : m.styles),
          v && (y.inserted[m.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new F1({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return y.sheet.hydrate(a), y;
  },
  $c = {},
  dx = {
    get exports() {
      return $c;
    },
    set exports(e) {
      $c = e;
    },
  },
  ye = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Je = typeof Symbol == "function" && Symbol.for,
  Fd = Je ? Symbol.for("react.element") : 60103,
  Bd = Je ? Symbol.for("react.portal") : 60106,
  fs = Je ? Symbol.for("react.fragment") : 60107,
  ps = Je ? Symbol.for("react.strict_mode") : 60108,
  ms = Je ? Symbol.for("react.profiler") : 60114,
  hs = Je ? Symbol.for("react.provider") : 60109,
  vs = Je ? Symbol.for("react.context") : 60110,
  jd = Je ? Symbol.for("react.async_mode") : 60111,
  gs = Je ? Symbol.for("react.concurrent_mode") : 60111,
  ys = Je ? Symbol.for("react.forward_ref") : 60112,
  xs = Je ? Symbol.for("react.suspense") : 60113,
  fx = Je ? Symbol.for("react.suspense_list") : 60120,
  ws = Je ? Symbol.for("react.memo") : 60115,
  Ss = Je ? Symbol.for("react.lazy") : 60116,
  px = Je ? Symbol.for("react.block") : 60121,
  mx = Je ? Symbol.for("react.fundamental") : 60117,
  hx = Je ? Symbol.for("react.responder") : 60118,
  vx = Je ? Symbol.for("react.scope") : 60119;
function At(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Fd:
        switch (((e = e.type), e)) {
          case jd:
          case gs:
          case fs:
          case ms:
          case ps:
          case xs:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case vs:
              case ys:
              case Ss:
              case ws:
              case hs:
                return e;
              default:
                return t;
            }
        }
      case Bd:
        return t;
    }
  }
}
function Bv(e) {
  return At(e) === gs;
}
ye.AsyncMode = jd;
ye.ConcurrentMode = gs;
ye.ContextConsumer = vs;
ye.ContextProvider = hs;
ye.Element = Fd;
ye.ForwardRef = ys;
ye.Fragment = fs;
ye.Lazy = Ss;
ye.Memo = ws;
ye.Portal = Bd;
ye.Profiler = ms;
ye.StrictMode = ps;
ye.Suspense = xs;
ye.isAsyncMode = function (e) {
  return Bv(e) || At(e) === jd;
};
ye.isConcurrentMode = Bv;
ye.isContextConsumer = function (e) {
  return At(e) === vs;
};
ye.isContextProvider = function (e) {
  return At(e) === hs;
};
ye.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Fd;
};
ye.isForwardRef = function (e) {
  return At(e) === ys;
};
ye.isFragment = function (e) {
  return At(e) === fs;
};
ye.isLazy = function (e) {
  return At(e) === Ss;
};
ye.isMemo = function (e) {
  return At(e) === ws;
};
ye.isPortal = function (e) {
  return At(e) === Bd;
};
ye.isProfiler = function (e) {
  return At(e) === ms;
};
ye.isStrictMode = function (e) {
  return At(e) === ps;
};
ye.isSuspense = function (e) {
  return At(e) === xs;
};
ye.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === fs ||
    e === gs ||
    e === ms ||
    e === ps ||
    e === xs ||
    e === fx ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ss ||
        e.$$typeof === ws ||
        e.$$typeof === hs ||
        e.$$typeof === vs ||
        e.$$typeof === ys ||
        e.$$typeof === mx ||
        e.$$typeof === hx ||
        e.$$typeof === vx ||
        e.$$typeof === px))
  );
};
ye.typeOf = At;
(function (e) {
  e.exports = ye;
})(dx);
var jv = $c,
  gx = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  yx = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Wv = {};
Wv[jv.ForwardRef] = gx;
Wv[jv.Memo] = yx;
var xx = !0;
function wx(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var Uv = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || xx === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Vv = function (t, n, r) {
    Uv(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Sx(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var kx = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  bx = /[A-Z]|^ms/g,
  Cx = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Hv = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Op = function (t) {
    return t != null && typeof t != "boolean";
  },
  mu = Mv(function (e) {
    return Hv(e) ? e : e.replace(bx, "-$&").toLowerCase();
  }),
  Mp = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Cx, function (r, o, i) {
            return (hn = { name: o, styles: i, next: hn }), o;
          });
    }
    return kx[t] !== 1 && !Hv(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Hi(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (hn = { name: n.name, styles: n.styles, next: hn }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (hn = { name: r.name, styles: r.styles, next: hn }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return Ex(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = hn,
          l = n(e);
        return (hn = i), Hi(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var a = t[n];
  return a !== void 0 ? a : n;
}
function Ex(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += Hi(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : Op(l) && (r += mu(i) + ":" + Mp(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var a = 0; a < l.length; a++)
          Op(l[a]) && (r += mu(i) + ":" + Mp(i, l[a]) + ";");
      else {
        var s = Hi(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += mu(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var Lp = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  hn,
  Wd = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    hn = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += Hi(r, n, l)))
      : (i += l[0]);
    for (var a = 1; a < t.length; a++) (i += Hi(r, n, t[a])), o && (i += l[a]);
    Lp.lastIndex = 0;
    for (var s = "", u; (u = Lp.exec(i)) !== null; ) s += "-" + u[1];
    var c = Sx(i) + s;
    return { name: c, styles: i, next: hn };
  },
  Px = function (t) {
    return t();
  },
  Kv = Ru["useInsertionEffect"] ? Ru["useInsertionEffect"] : !1,
  $x = Kv || Px,
  zp = Kv || S.useLayoutEffect,
  Gv = S.createContext(typeof HTMLElement < "u" ? cx({ key: "css" }) : null);
Gv.Provider;
var Qv = function (t) {
    return S.forwardRef(function (n, r) {
      var o = S.useContext(Gv);
      return t(n, o, r);
    });
  },
  Ud = S.createContext({}),
  Tx = Qv(function (e, t) {
    var n = e.styles,
      r = Wd([n], void 0, S.useContext(Ud)),
      o = S.useRef();
    return (
      zp(
        function () {
          var i = t.key + "-global",
            l = new t.sheet.constructor({
              key: i,
              nonce: t.sheet.nonce,
              container: t.sheet.container,
              speedy: t.sheet.isSpeedy,
            }),
            a = !1,
            s = document.querySelector(
              'style[data-emotion="' + i + " " + r.name + '"]'
            );
          return (
            t.sheet.tags.length && (l.before = t.sheet.tags[0]),
            s !== null &&
              ((a = !0), s.setAttribute("data-emotion", i), l.hydrate([s])),
            (o.current = [l, a]),
            function () {
              l.flush();
            }
          );
        },
        [t]
      ),
      zp(
        function () {
          var i = o.current,
            l = i[0],
            a = i[1];
          if (a) {
            i[1] = !1;
            return;
          }
          if ((r.next !== void 0 && Vv(t, r.next, !0), l.tags.length)) {
            var s = l.tags[l.tags.length - 1].nextElementSibling;
            (l.before = s), l.flush();
          }
          t.insert("", r, l, !1);
        },
        [t, r.name]
      ),
      null
    );
  });
function Rx() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return Wd(t);
}
var Vd = function () {
    var t = Rx.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  _x = I1,
  Ox = function (t) {
    return t !== "theme";
  },
  Np = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? _x : Ox;
  },
  Ip = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (l) {
              return t.__emotion_forwardProp(l) && i(l);
            }
          : i;
    }
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  Mx = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      Uv(n, r, o),
      $x(function () {
        return Vv(n, r, o);
      }),
      null
    );
  },
  Lx = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var a = Ip(t, n, r),
      s = a || Np(o),
      u = !s("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var p = c.length, g = 1; g < p; g++) f.push(c[g], c[0][g]);
      }
      var y = Qv(function (h, E, m) {
        var d = (u && h.as) || o,
          v = "",
          x = [],
          k = h;
        if (h.theme == null) {
          k = {};
          for (var b in h) k[b] = h[b];
          k.theme = S.useContext(Ud);
        }
        typeof h.className == "string"
          ? (v = wx(E.registered, x, h.className))
          : h.className != null && (v = h.className + " ");
        var C = Wd(f.concat(x), E.registered, k);
        (v += E.key + "-" + C.name), l !== void 0 && (v += " " + l);
        var $ = u && a === void 0 ? Np(d) : s,
          _ = {};
        for (var T in h) (u && T === "as") || ($(T) && (_[T] = h[T]));
        return (
          (_.className = v),
          (_.ref = m),
          S.createElement(
            S.Fragment,
            null,
            S.createElement(Mx, {
              cache: E,
              serialized: C,
              isStringTag: typeof d == "string",
            }),
            S.createElement(d, _)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = f),
        (y.__emotion_forwardProp = a),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + l;
          },
        }),
        (y.withComponent = function (h, E) {
          return e(h, w({}, n, E, { shouldForwardProp: Ip(y, E, !0) })).apply(
            void 0,
            f
          );
        }),
        y
      );
    };
  };
const zx = Lx;
var Nx = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  Tc = zx.bind();
Nx.forEach(function (e) {
  Tc[e] = Tc(e);
});
const Ix = Tc;
function Ax(e) {
  return e == null || Object.keys(e).length === 0;
}
function Dx(e) {
  const { styles: t, defaultTheme: n = {} } = e;
  return P(Tx, {
    styles: typeof t == "function" ? (o) => t(Ax(o) ? n : o) : t,
  });
}
/**
 * @mui/styled-engine v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Xv(e, t) {
  return Ix(e, t);
}
const Fx = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function yi(e, t) {
  return t ? Mn(e, t, { clone: !1 }) : e;
}
const Hd = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Ap = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Hd[e]}px)`,
  };
function An(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Ap;
    return t.reduce((l, a, s) => ((l[i.up(i.keys[s])] = n(t[s])), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || Ap;
    return Object.keys(t).reduce((l, a) => {
      if (Object.keys(i.values || Hd).indexOf(a) !== -1) {
        const s = i.up(a);
        l[s] = n(t[a], a);
      } else {
        const s = a;
        l[s] = t[s];
      }
      return l;
    }, {});
  }
  return n(t);
}
function Bx(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function jx(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function ks(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Ra(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = ks(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function pe(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const a = l[t],
        s = l.theme,
        u = ks(s, r) || {};
      return An(l, a, (f) => {
        let p = Ra(u, o, f);
        return (
          f === p &&
            typeof f == "string" &&
            (p = Ra(u, o, `${t}${f === "default" ? "" : X(f)}`, f)),
          n === !1 ? p : { [n]: p }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function bs(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? yi(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Wx(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Ux = { m: "margin", p: "padding" },
  Vx = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Dp = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Hx = Wx((e) => {
    if (e.length > 2)
      if (Dp[e]) e = Dp[e];
      else return [e];
    const [t, n] = e.split(""),
      r = Ux[t],
      o = Vx[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Kd = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  Gd = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Kd, ...Gd];
function nl(e, t, n, r) {
  var o;
  const i = (o = ks(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (l) => (typeof l == "string" ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == "string" ? l : i[l])
    : typeof i == "function"
    ? i
    : () => {};
}
function Yv(e) {
  return nl(e, "spacing", 8);
}
function rl(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Kx(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = rl(t, n)), r), {});
}
function Gx(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = Hx(n),
    i = Kx(o, r),
    l = e[n];
  return An(e, l, i);
}
function qv(e, t) {
  const n = Yv(e.theme);
  return Object.keys(e)
    .map((r) => Gx(e, t, r, n))
    .reduce(yi, {});
}
function Ae(e) {
  return qv(e, Kd);
}
Ae.propTypes = {};
Ae.filterProps = Kd;
function De(e) {
  return qv(e, Gd);
}
De.propTypes = {};
De.filterProps = Gd;
function gn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Qx = pe({ prop: "border", themeKey: "borders", transform: gn }),
  Xx = pe({ prop: "borderTop", themeKey: "borders", transform: gn }),
  Yx = pe({ prop: "borderRight", themeKey: "borders", transform: gn }),
  qx = pe({ prop: "borderBottom", themeKey: "borders", transform: gn }),
  Zx = pe({ prop: "borderLeft", themeKey: "borders", transform: gn }),
  Jx = pe({ prop: "borderColor", themeKey: "palette" }),
  ew = pe({ prop: "borderTopColor", themeKey: "palette" }),
  tw = pe({ prop: "borderRightColor", themeKey: "palette" }),
  nw = pe({ prop: "borderBottomColor", themeKey: "palette" }),
  rw = pe({ prop: "borderLeftColor", themeKey: "palette" }),
  Cs = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = nl(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: rl(t, r) });
      return An(e, e.borderRadius, n);
    }
    return null;
  };
Cs.propTypes = {};
Cs.filterProps = ["borderRadius"];
bs(Qx, Xx, Yx, qx, Zx, Jx, ew, tw, nw, rw, Cs);
const Es = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = nl(e.theme, "spacing", 8),
      n = (r) => ({ gap: rl(t, r) });
    return An(e, e.gap, n);
  }
  return null;
};
Es.propTypes = {};
Es.filterProps = ["gap"];
const Ps = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = nl(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: rl(t, r) });
    return An(e, e.columnGap, n);
  }
  return null;
};
Ps.propTypes = {};
Ps.filterProps = ["columnGap"];
const $s = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = nl(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: rl(t, r) });
    return An(e, e.rowGap, n);
  }
  return null;
};
$s.propTypes = {};
$s.filterProps = ["rowGap"];
const ow = pe({ prop: "gridColumn" }),
  iw = pe({ prop: "gridRow" }),
  lw = pe({ prop: "gridAutoFlow" }),
  aw = pe({ prop: "gridAutoColumns" }),
  sw = pe({ prop: "gridAutoRows" }),
  uw = pe({ prop: "gridTemplateColumns" }),
  cw = pe({ prop: "gridTemplateRows" }),
  dw = pe({ prop: "gridTemplateAreas" }),
  fw = pe({ prop: "gridArea" });
bs(Es, Ps, $s, ow, iw, lw, aw, sw, uw, cw, dw, fw);
function yo(e, t) {
  return t === "grey" ? t : e;
}
const pw = pe({ prop: "color", themeKey: "palette", transform: yo }),
  mw = pe({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: yo,
  }),
  hw = pe({ prop: "backgroundColor", themeKey: "palette", transform: yo });
bs(pw, mw, hw);
function Rt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const vw = pe({ prop: "width", transform: Rt }),
  Qd = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o, i;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (o = r.breakpoints) == null ||
            (i = o.values) == null
              ? void 0
              : i[n]) ||
            Hd[n] ||
            Rt(n),
        };
      };
      return An(e, e.maxWidth, t);
    }
    return null;
  };
Qd.filterProps = ["maxWidth"];
const gw = pe({ prop: "minWidth", transform: Rt }),
  yw = pe({ prop: "height", transform: Rt }),
  xw = pe({ prop: "maxHeight", transform: Rt }),
  ww = pe({ prop: "minHeight", transform: Rt });
pe({ prop: "size", cssProperty: "width", transform: Rt });
pe({ prop: "size", cssProperty: "height", transform: Rt });
const Sw = pe({ prop: "boxSizing" });
bs(vw, Qd, gw, yw, xw, ww, Sw);
const kw = {
    border: { themeKey: "borders", transform: gn },
    borderTop: { themeKey: "borders", transform: gn },
    borderRight: { themeKey: "borders", transform: gn },
    borderBottom: { themeKey: "borders", transform: gn },
    borderLeft: { themeKey: "borders", transform: gn },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: Cs },
    color: { themeKey: "palette", transform: yo },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: yo,
    },
    backgroundColor: { themeKey: "palette", transform: yo },
    p: { style: De },
    pt: { style: De },
    pr: { style: De },
    pb: { style: De },
    pl: { style: De },
    px: { style: De },
    py: { style: De },
    padding: { style: De },
    paddingTop: { style: De },
    paddingRight: { style: De },
    paddingBottom: { style: De },
    paddingLeft: { style: De },
    paddingX: { style: De },
    paddingY: { style: De },
    paddingInline: { style: De },
    paddingInlineStart: { style: De },
    paddingInlineEnd: { style: De },
    paddingBlock: { style: De },
    paddingBlockStart: { style: De },
    paddingBlockEnd: { style: De },
    m: { style: Ae },
    mt: { style: Ae },
    mr: { style: Ae },
    mb: { style: Ae },
    ml: { style: Ae },
    mx: { style: Ae },
    my: { style: Ae },
    margin: { style: Ae },
    marginTop: { style: Ae },
    marginRight: { style: Ae },
    marginBottom: { style: Ae },
    marginLeft: { style: Ae },
    marginX: { style: Ae },
    marginY: { style: Ae },
    marginInline: { style: Ae },
    marginInlineStart: { style: Ae },
    marginInlineEnd: { style: Ae },
    marginBlock: { style: Ae },
    marginBlockStart: { style: Ae },
    marginBlockEnd: { style: Ae },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Es },
    rowGap: { style: $s },
    columnGap: { style: Ps },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Rt },
    maxWidth: { style: Qd },
    minWidth: { transform: Rt },
    height: { transform: Rt },
    maxHeight: { transform: Rt },
    minHeight: { transform: Rt },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  Ts = kw;
function bw(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Cw(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ew() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      a = i[n];
    if (!a) return { [n]: r };
    const { cssProperty: s = n, themeKey: u, transform: c, style: f } = a;
    if (r == null) return null;
    if (u === "typography" && r === "inherit") return { [n]: r };
    const p = ks(o, u) || {};
    return f
      ? f(l)
      : An(l, r, (y) => {
          let h = Ra(p, c, y);
          return (
            y === h &&
              typeof y == "string" &&
              (h = Ra(p, c, `${n}${y === "default" ? "" : X(y)}`, y)),
            s === !1 ? h : { [s]: h }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : Ts;
    function a(s) {
      let u = s;
      if (typeof s == "function") u = s(i);
      else if (typeof s != "object") return s;
      if (!u) return null;
      const c = Bx(i.breakpoints),
        f = Object.keys(c);
      let p = c;
      return (
        Object.keys(u).forEach((g) => {
          const y = Cw(u[g], i);
          if (y != null)
            if (typeof y == "object")
              if (l[g]) p = yi(p, e(g, y, i, l));
              else {
                const h = An({ theme: i }, y, (E) => ({ [g]: E }));
                bw(h, y) ? (p[g] = t({ sx: y, theme: i })) : (p = yi(p, h));
              }
            else p = yi(p, e(g, y, i, l));
        }),
        jx(f, p)
      );
    }
    return Array.isArray(o) ? o.map(a) : a(o);
  }
  return t;
}
const Zv = Ew();
Zv.filterProps = ["sx"];
const Rs = Zv;
function Z(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
const Pw = ["sx"],
  $w = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Ts;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Jv(e) {
  const { sx: t } = e,
    n = Z(e, Pw),
    { systemProps: r, otherProps: o } = $w(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...l) => {
          const a = t(...l);
          return yr(a) ? w({}, r, a) : r;
        })
      : (i = w({}, r, t)),
    w({}, o, { sx: i })
  );
}
function e0(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = e0(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Q() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = e0(e)) && (r && (r += " "), (r += t));
  return r;
}
const Tw = ["values", "unit", "step"],
  Rw = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => w({}, n, { [r.key]: r.val }), {})
    );
  };
function _w(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = Z(e, Tw),
    i = Rw(t),
    l = Object.keys(i);
  function a(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${n})`;
  }
  function s(p) {
    return `@media (max-width:${
      (typeof t[p] == "number" ? t[p] : p) - r / 100
    }${n})`;
  }
  function u(p, g) {
    const y = l.indexOf(g);
    return `@media (min-width:${
      typeof t[p] == "number" ? t[p] : p
    }${n}) and (max-width:${
      (y !== -1 && typeof t[l[y]] == "number" ? t[l[y]] : g) - r / 100
    }${n})`;
  }
  function c(p) {
    return l.indexOf(p) + 1 < l.length ? u(p, l[l.indexOf(p) + 1]) : a(p);
  }
  function f(p) {
    const g = l.indexOf(p);
    return g === 0
      ? a(l[1])
      : g === l.length - 1
      ? s(l[g])
      : u(p, l[l.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return w(
    {
      keys: l,
      values: i,
      up: a,
      down: s,
      between: u,
      only: c,
      not: f,
      unit: n,
    },
    o
  );
}
const Ow = { borderRadius: 4 },
  Mw = Ow;
function Lw(e = 8) {
  if (e.mui) return e;
  const t = Yv({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == "number" ? `${l}px` : l;
        })
        .join(" ");
  return (n.mui = !0), n;
}
const zw = ["breakpoints", "palette", "spacing", "shape"];
function _s(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = Z(e, zw),
    a = _w(n),
    s = Lw(o);
  let u = Mn(
    {
      breakpoints: a,
      direction: "ltr",
      components: {},
      palette: w({ mode: "light" }, r),
      spacing: s,
      shape: w({}, Mw, i),
    },
    l
  );
  return (
    (u = t.reduce((c, f) => Mn(c, f), u)),
    (u.unstable_sxConfig = w({}, Ts, l == null ? void 0 : l.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Rs({ sx: f, theme: this });
    }),
    u
  );
}
const Nw = S.createContext(null),
  t0 = Nw;
function n0() {
  return S.useContext(t0);
}
const Iw = typeof Symbol == "function" && Symbol.for,
  Aw = Iw ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Dw(e, t) {
  return typeof t == "function" ? t(e) : w({}, e, t);
}
function Fw(e) {
  const { children: t, theme: n } = e,
    r = n0(),
    o = S.useMemo(() => {
      const i = r === null ? n : Dw(r, n);
      return i != null && (i[Aw] = r !== null), i;
    }, [n, r]);
  return P(t0.Provider, { value: o, children: t });
}
function Bw(e) {
  return Object.keys(e).length === 0;
}
function r0(e = null) {
  const t = n0();
  return !t || Bw(t) ? e : t;
}
const jw = _s();
function Os(e = jw) {
  return r0(e);
}
const Ww = ["className", "component"];
function Uw(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: n = "MuiBox-root",
      generateClassName: r,
    } = e,
    o = Xv("div", {
      shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as",
    })(Rs);
  return S.forwardRef(function (a, s) {
    const u = Os(t),
      c = Jv(a),
      { className: f, component: p = "div" } = c,
      g = Z(c, Ww);
    return P(
      o,
      w({ as: p, ref: s, className: Q(f, r ? r(n) : n), theme: u }, g)
    );
  });
}
const Vw = ["variant"];
function Fp(e) {
  return e.length === 0;
}
function o0(e) {
  const { variant: t } = e,
    n = Z(e, Vw);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += Fp(r) ? e[o] : X(e[o]))
          : (r += `${Fp(r) ? o : X(o)}${X(e[o].toString())}`);
      }),
    r
  );
}
const Hw = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver",
  ],
  Kw = ["theme"],
  Gw = ["theme"];
function Zo(e) {
  return Object.keys(e).length === 0;
}
function Qw(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const Xw = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  Yw = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = o0(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  qw = (e, t, n, r) => {
    var o, i;
    const { ownerState: l = {} } = e,
      a = [],
      s =
        n == null || (o = n.components) == null || (i = o[r]) == null
          ? void 0
          : i.variants;
    return (
      s &&
        s.forEach((u) => {
          let c = !0;
          Object.keys(u.props).forEach((f) => {
            l[f] !== u.props[f] && e[f] !== u.props[f] && (c = !1);
          }),
            c && a.push(t[o0(u.props)]);
        }),
      a
    );
  };
function xi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Zw = _s();
function i0(e = {}) {
  const {
      defaultTheme: t = Zw,
      rootShouldForwardProp: n = xi,
      slotShouldForwardProp: r = xi,
    } = e,
    o = (i) => {
      const l = Zo(i.theme) ? t : i.theme;
      return Rs(w({}, i, { theme: l }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, l = {}) => {
      Fx(i, (v) => v.filter((x) => !(x != null && x.__mui_systemSx)));
      const {
          name: a,
          slot: s,
          skipVariantsResolver: u,
          skipSx: c,
          overridesResolver: f,
        } = l,
        p = Z(l, Hw),
        g = u !== void 0 ? u : (s && s !== "Root") || !1,
        y = c || !1;
      let h,
        E = xi;
      s === "Root" ? (E = n) : s ? (E = r) : Qw(i) && (E = void 0);
      const m = Xv(i, w({ shouldForwardProp: E, label: h }, p)),
        d = (v, ...x) => {
          const k = x
            ? x.map((_) =>
                typeof _ == "function" && _.__emotion_real !== _
                  ? (T) => {
                      let { theme: z } = T,
                        V = Z(T, Kw);
                      return _(w({ theme: Zo(z) ? t : z }, V));
                    }
                  : _
              )
            : [];
          let b = v;
          a &&
            f &&
            k.push((_) => {
              const T = Zo(_.theme) ? t : _.theme,
                z = Xw(a, T);
              if (z) {
                const V = {};
                return (
                  Object.entries(z).forEach(([j, W]) => {
                    V[j] =
                      typeof W == "function" ? W(w({}, _, { theme: T })) : W;
                  }),
                  f(_, V)
                );
              }
              return null;
            }),
            a &&
              !g &&
              k.push((_) => {
                const T = Zo(_.theme) ? t : _.theme;
                return qw(_, Yw(a, T), T, a);
              }),
            y || k.push(o);
          const C = k.length - x.length;
          if (Array.isArray(v) && C > 0) {
            const _ = new Array(C).fill("");
            (b = [...v, ..._]), (b.raw = [...v.raw, ..._]);
          } else
            typeof v == "function" &&
              v.__emotion_real !== v &&
              (b = (_) => {
                let { theme: T } = _,
                  z = Z(_, Gw);
                return v(w({ theme: Zo(T) ? t : T }, z));
              });
          return m(b, ...k);
        };
      return m.withConfig && (d.withConfig = m.withConfig), d;
    }
  );
}
const Jw = i0(),
  eS = Jw;
function tS(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : zd(t.components[n].defaultProps, r);
}
function l0({ props: e, name: t, defaultTheme: n }) {
  const r = Os(n);
  return tS({ theme: r, name: t, props: e });
}
function Xd(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function nS(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Lr(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return Lr(nS(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(Po(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(Po(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Ms(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function rS(e) {
  e = Lr(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (u, c = (u + n / 30) % 12) =>
      o - i * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let a = "rgb";
  const s = [
    Math.round(l(0) * 255),
    Math.round(l(8) * 255),
    Math.round(l(4) * 255),
  ];
  return (
    e.type === "hsla" && ((a += "a"), s.push(t[3])), Ms({ type: a, values: s })
  );
}
function Bp(e) {
  e = Lr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Lr(rS(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function oS(e, t) {
  const n = Bp(e),
    r = Bp(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function ln(e, t) {
  return (
    (e = Lr(e)),
    (t = Xd(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Ms(e)
  );
}
function a0(e, t) {
  if (((e = Lr(e)), (t = Xd(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Ms(e);
}
function s0(e, t) {
  if (((e = Lr(e)), (t = Xd(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Ms(e);
}
const iS = {};
function lS(e) {
  const t = Os();
  return P(Ud.Provider, {
    value: typeof t == "object" ? t : iS,
    children: e.children,
  });
}
function aS(e) {
  const { children: t, theme: n } = e;
  return P(Fw, { theme: n, children: P(lS, { children: t }) });
}
const sS = [
    "className",
    "component",
    "disableGutters",
    "fixed",
    "maxWidth",
    "classes",
  ],
  uS = _s(),
  cS = eS("div", {
    name: "MuiContainer",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`maxWidth${X(String(n.maxWidth))}`],
        n.fixed && t.fixed,
        n.disableGutters && t.disableGutters,
      ];
    },
  }),
  dS = (e) => l0({ props: e, name: "MuiContainer", defaultTheme: uS }),
  fS = (e, t) => {
    const n = (s) => $e(t, s),
      { classes: r, fixed: o, disableGutters: i, maxWidth: l } = e,
      a = {
        root: [
          "root",
          l && `maxWidth${X(String(l))}`,
          o && "fixed",
          i && "disableGutters",
        ],
      };
    return Le(a, n, r);
  };
function pS(e = {}) {
  const {
      createStyledComponent: t = cS,
      useThemeProps: n = dS,
      componentName: r = "MuiContainer",
    } = e,
    o = t(
      ({ theme: l, ownerState: a }) =>
        w(
          {
            width: "100%",
            marginLeft: "auto",
            boxSizing: "border-box",
            marginRight: "auto",
            display: "block",
          },
          !a.disableGutters && {
            paddingLeft: l.spacing(2),
            paddingRight: l.spacing(2),
            [l.breakpoints.up("sm")]: {
              paddingLeft: l.spacing(3),
              paddingRight: l.spacing(3),
            },
          }
        ),
      ({ theme: l, ownerState: a }) =>
        a.fixed &&
        Object.keys(l.breakpoints.values).reduce((s, u) => {
          const c = u,
            f = l.breakpoints.values[c];
          return (
            f !== 0 &&
              (s[l.breakpoints.up(c)] = {
                maxWidth: `${f}${l.breakpoints.unit}`,
              }),
            s
          );
        }, {}),
      ({ theme: l, ownerState: a }) =>
        w(
          {},
          a.maxWidth === "xs" && {
            [l.breakpoints.up("xs")]: {
              maxWidth: Math.max(l.breakpoints.values.xs, 444),
            },
          },
          a.maxWidth &&
            a.maxWidth !== "xs" && {
              [l.breakpoints.up(a.maxWidth)]: {
                maxWidth: `${l.breakpoints.values[a.maxWidth]}${
                  l.breakpoints.unit
                }`,
              },
            }
        )
    );
  return S.forwardRef(function (a, s) {
    const u = n(a),
      {
        className: c,
        component: f = "div",
        disableGutters: p = !1,
        fixed: g = !1,
        maxWidth: y = "lg",
      } = u,
      h = Z(u, sS),
      E = w({}, u, { component: f, disableGutters: p, fixed: g, maxWidth: y }),
      m = fS(E, r);
    return P(
      o,
      w({ as: f, ownerState: E, className: Q(m.root, c), ref: s }, h)
    );
  });
}
function mS(e, t) {
  return w(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const hS = { black: "#000", white: "#fff" },
  Ki = hS,
  vS = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  gS = vS,
  yS = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  Hr = yS,
  xS = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  hr = xS,
  wS = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Jo = wS,
  SS = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Kr = SS,
  kS = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Gr = kS,
  bS = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Qr = bS,
  CS = ["mode", "contrastThreshold", "tonalOffset"],
  jp = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Ki.white, default: Ki.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  hu = {
    text: {
      primary: Ki.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Ki.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Wp(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = s0(e.main, o))
      : t === "dark" && (e.dark = a0(e.main, i)));
}
function ES(e = "light") {
  return e === "dark"
    ? { main: Kr[200], light: Kr[50], dark: Kr[400] }
    : { main: Kr[700], light: Kr[400], dark: Kr[800] };
}
function PS(e = "light") {
  return e === "dark"
    ? { main: Hr[200], light: Hr[50], dark: Hr[400] }
    : { main: Hr[500], light: Hr[300], dark: Hr[700] };
}
function $S(e = "light") {
  return e === "dark"
    ? { main: hr[500], light: hr[300], dark: hr[700] }
    : { main: hr[700], light: hr[400], dark: hr[800] };
}
function TS(e = "light") {
  return e === "dark"
    ? { main: Gr[400], light: Gr[300], dark: Gr[700] }
    : { main: Gr[700], light: Gr[500], dark: Gr[900] };
}
function RS(e = "light") {
  return e === "dark"
    ? { main: Qr[400], light: Qr[300], dark: Qr[700] }
    : { main: Qr[800], light: Qr[500], dark: Qr[900] };
}
function _S(e = "light") {
  return e === "dark"
    ? { main: Jo[400], light: Jo[300], dark: Jo[700] }
    : { main: "#ed6c02", light: Jo[500], dark: Jo[900] };
}
function OS(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Z(e, CS),
    i = e.primary || ES(t),
    l = e.secondary || PS(t),
    a = e.error || $S(t),
    s = e.info || TS(t),
    u = e.success || RS(t),
    c = e.warning || _S(t);
  function f(h) {
    return oS(h, hu.text.primary) >= n ? hu.text.primary : jp.text.primary;
  }
  const p = ({
      color: h,
      name: E,
      mainShade: m = 500,
      lightShade: d = 300,
      darkShade: v = 700,
    }) => {
      if (
        ((h = w({}, h)),
        !h.main && h[m] && (h.main = h[m]),
        !h.hasOwnProperty("main"))
      )
        throw new Error(Po(11, E ? ` (${E})` : "", m));
      if (typeof h.main != "string")
        throw new Error(Po(12, E ? ` (${E})` : "", JSON.stringify(h.main)));
      return (
        Wp(h, "light", d, r),
        Wp(h, "dark", v, r),
        h.contrastText || (h.contrastText = f(h.main)),
        h
      );
    },
    g = { dark: hu, light: jp };
  return Mn(
    w(
      {
        common: w({}, Ki),
        mode: t,
        primary: p({ color: i, name: "primary" }),
        secondary: p({
          color: l,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: p({ color: a, name: "error" }),
        warning: p({ color: c, name: "warning" }),
        info: p({ color: s, name: "info" }),
        success: p({ color: u, name: "success" }),
        grey: gS,
        contrastThreshold: n,
        getContrastText: f,
        augmentColor: p,
        tonalOffset: r,
      },
      g[t]
    ),
    o
  );
}
const MS = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function LS(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Up = { textTransform: "uppercase" },
  Vp = '"Roboto", "Helvetica", "Arial", sans-serif';
function zS(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Vp,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: a = 500,
      fontWeightBold: s = 700,
      htmlFontSize: u = 16,
      allVariants: c,
      pxToRem: f,
    } = n,
    p = Z(n, MS),
    g = o / 14,
    y = f || ((m) => `${(m / u) * g}rem`),
    h = (m, d, v, x, k) =>
      w(
        { fontFamily: r, fontWeight: m, fontSize: y(d), lineHeight: v },
        r === Vp ? { letterSpacing: `${LS(x / d)}em` } : {},
        k,
        c
      ),
    E = {
      h1: h(i, 96, 1.167, -1.5),
      h2: h(i, 60, 1.2, -0.5),
      h3: h(l, 48, 1.167, 0),
      h4: h(l, 34, 1.235, 0.25),
      h5: h(l, 24, 1.334, 0),
      h6: h(a, 20, 1.6, 0.15),
      subtitle1: h(l, 16, 1.75, 0.15),
      subtitle2: h(a, 14, 1.57, 0.1),
      body1: h(l, 16, 1.5, 0.15),
      body2: h(l, 14, 1.43, 0.15),
      button: h(a, 14, 1.75, 0.4, Up),
      caption: h(l, 12, 1.66, 0.4),
      overline: h(l, 12, 2.66, 1, Up),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return Mn(
    w(
      {
        htmlFontSize: u,
        pxToRem: y,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: l,
        fontWeightMedium: a,
        fontWeightBold: s,
      },
      E
    ),
    p,
    { clone: !1 }
  );
}
const NS = 0.2,
  IS = 0.14,
  AS = 0.12;
function Ee(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${NS})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${IS})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${AS})`,
  ].join(",");
}
const DS = [
    "none",
    Ee(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ee(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ee(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ee(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ee(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ee(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ee(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ee(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ee(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ee(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ee(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ee(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ee(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ee(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ee(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ee(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ee(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ee(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ee(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ee(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ee(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ee(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ee(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ee(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  FS = DS,
  BS = ["duration", "easing", "delay"],
  jS = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  u0 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Hp(e) {
  return `${Math.round(e)}ms`;
}
function WS(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function US(e) {
  const t = w({}, jS, e.easing),
    n = w({}, u0, e.duration);
  return w(
    {
      getAutoHeightDuration: WS,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: a = t.easeInOut,
          delay: s = 0,
        } = i;
        return (
          Z(i, BS),
          (Array.isArray(o) ? o : [o])
            .map(
              (u) =>
                `${u} ${typeof l == "string" ? l : Hp(l)} ${a} ${
                  typeof s == "string" ? s : Hp(s)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const VS = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  HS = VS,
  KS = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Yd(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = Z(e, KS);
  if (e.vars) throw new Error(Po(18));
  const a = OS(r),
    s = _s(e);
  let u = Mn(s, {
    mixins: mS(s.breakpoints, n),
    palette: a,
    shadows: FS.slice(),
    typography: zS(a, i),
    transitions: US(o),
    zIndex: w({}, HS),
  });
  return (
    (u = Mn(u, l)),
    (u = t.reduce((c, f) => Mn(c, f), u)),
    (u.unstable_sxConfig = w({}, Ts, l == null ? void 0 : l.unstable_sxConfig)),
    (u.unstable_sx = function (f) {
      return Rs({ sx: f, theme: this });
    }),
    u
  );
}
const GS = Yd(),
  Ls = GS;
function Te({ props: e, name: t }) {
  return l0({ props: e, name: t, defaultTheme: Ls });
}
function QS(e) {
  return P(Dx, w({}, e, { defaultTheme: Ls }));
}
const XS = (e, t) =>
    w(
      {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        boxSizing: "border-box",
        WebkitTextSizeAdjust: "100%",
      },
      t && !e.vars && { colorScheme: e.palette.mode }
    ),
  YS = (e) =>
    w({ color: (e.vars || e).palette.text.primary }, e.typography.body1, {
      backgroundColor: (e.vars || e).palette.background.default,
      "@media print": { backgroundColor: (e.vars || e).palette.common.white },
    }),
  qS = (e, t = !1) => {
    var n, r;
    const o = {};
    t &&
      e.colorSchemes &&
      Object.entries(e.colorSchemes).forEach(([a, s]) => {
        var u;
        o[e.getColorSchemeSelector(a).replace(/\s*&/, "")] = {
          colorScheme: (u = s.palette) == null ? void 0 : u.mode,
        };
      });
    let i = w(
      {
        html: XS(e, t),
        "*, *::before, *::after": { boxSizing: "inherit" },
        "strong, b": { fontWeight: e.typography.fontWeightBold },
        body: w({ margin: 0 }, YS(e), {
          "&::backdrop": {
            backgroundColor: (e.vars || e).palette.background.default,
          },
        }),
      },
      o
    );
    const l =
      (n = e.components) == null || (r = n.MuiCssBaseline) == null
        ? void 0
        : r.styleOverrides;
    return l && (i = [i, l]), i;
  };
function ZS(e) {
  const t = Te({ props: e, name: "MuiCssBaseline" }),
    { children: n, enableColorScheme: r = !1 } = t;
  return K(S.Fragment, { children: [P(QS, { styles: (o) => qS(o, r) }), n] });
}
function wi(e) {
  return typeof e == "string";
}
function ai(e, t, n) {
  return e === void 0 || wi(e)
    ? t
    : w({}, t, { ownerState: w({}, t.ownerState, n) });
}
const JS = { disableDefaultClasses: !1 },
  ek = S.createContext(JS);
function tk(e) {
  const { disableDefaultClasses: t } = S.useContext(ek);
  return (n) => (t ? "" : e(n));
}
function nk(e, t = []) {
  if (e === void 0) return {};
  const n = {};
  return (
    Object.keys(e)
      .filter(
        (r) =>
          r.match(/^on[A-Z]/) && typeof e[r] == "function" && !t.includes(r)
      )
      .forEach((r) => {
        n[r] = e[r];
      }),
    n
  );
}
function rk(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Kp(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((n) => !(n.match(/^on[A-Z]/) && typeof e[n] == "function"))
      .forEach((n) => {
        t[n] = e[n];
      }),
    t
  );
}
function ok(e) {
  const {
    getSlotProps: t,
    additionalProps: n,
    externalSlotProps: r,
    externalForwardedProps: o,
    className: i,
  } = e;
  if (!t) {
    const g = Q(
        o == null ? void 0 : o.className,
        r == null ? void 0 : r.className,
        i,
        n == null ? void 0 : n.className
      ),
      y = w(
        {},
        n == null ? void 0 : n.style,
        o == null ? void 0 : o.style,
        r == null ? void 0 : r.style
      ),
      h = w({}, n, o, r);
    return (
      g.length > 0 && (h.className = g),
      Object.keys(y).length > 0 && (h.style = y),
      { props: h, internalRef: void 0 }
    );
  }
  const l = nk(w({}, o, r)),
    a = Kp(r),
    s = Kp(o),
    u = t(l),
    c = Q(
      u == null ? void 0 : u.className,
      n == null ? void 0 : n.className,
      i,
      o == null ? void 0 : o.className,
      r == null ? void 0 : r.className
    ),
    f = w(
      {},
      u == null ? void 0 : u.style,
      n == null ? void 0 : n.style,
      o == null ? void 0 : o.style,
      r == null ? void 0 : r.style
    ),
    p = w({}, u, n, s, a);
  return (
    c.length > 0 && (p.className = c),
    Object.keys(f).length > 0 && (p.style = f),
    { props: p, internalRef: u.ref }
  );
}
const ik = ["elementType", "externalSlotProps", "ownerState"];
function En(e) {
  var t;
  const { elementType: n, externalSlotProps: r, ownerState: o } = e,
    i = Z(e, ik),
    l = rk(r, o),
    { props: a, internalRef: s } = ok(w({}, i, { externalSlotProps: l })),
    u = Gt(
      s,
      l == null ? void 0 : l.ref,
      (t = e.additionalProps) == null ? void 0 : t.ref
    );
  return ai(n, w({}, a, { ref: u }), o);
}
var St = "top",
  Qt = "bottom",
  Xt = "right",
  kt = "left",
  qd = "auto",
  ol = [St, Qt, Xt, kt],
  To = "start",
  Gi = "end",
  lk = "clippingParents",
  c0 = "viewport",
  ei = "popper",
  ak = "reference",
  Gp = ol.reduce(function (e, t) {
    return e.concat([t + "-" + To, t + "-" + Gi]);
  }, []),
  d0 = [].concat(ol, [qd]).reduce(function (e, t) {
    return e.concat([t, t + "-" + To, t + "-" + Gi]);
  }, []),
  sk = "beforeRead",
  uk = "read",
  ck = "afterRead",
  dk = "beforeMain",
  fk = "main",
  pk = "afterMain",
  mk = "beforeWrite",
  hk = "write",
  vk = "afterWrite",
  gk = [sk, uk, ck, dk, fk, pk, mk, hk, vk];
function kn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function zt(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function zr(e) {
  var t = zt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Vt(e) {
  var t = zt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zd(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = zt(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yk(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function (n) {
    var r = t.styles[n] || {},
      o = t.attributes[n] || {},
      i = t.elements[n];
    !Vt(i) ||
      !kn(i) ||
      (Object.assign(i.style, r),
      Object.keys(o).forEach(function (l) {
        var a = o[l];
        a === !1 ? i.removeAttribute(l) : i.setAttribute(l, a === !0 ? "" : a);
      }));
  });
}
function xk(e) {
  var t = e.state,
    n = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(t.elements.popper.style, n.popper),
    (t.styles = n),
    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
    function () {
      Object.keys(t.elements).forEach(function (r) {
        var o = t.elements[r],
          i = t.attributes[r] || {},
          l = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]),
          a = l.reduce(function (s, u) {
            return (s[u] = ""), s;
          }, {});
        !Vt(o) ||
          !kn(o) ||
          (Object.assign(o.style, a),
          Object.keys(i).forEach(function (s) {
            o.removeAttribute(s);
          }));
      });
    }
  );
}
const wk = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: yk,
  effect: xk,
  requires: ["computeStyles"],
};
function Sn(e) {
  return e.split("-")[0];
}
var Pr = Math.max,
  _a = Math.min,
  Ro = Math.round;
function Rc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function f0() {
  return !/^((?!chrome|android).)*safari/i.test(Rc());
}
function _o(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    o = 1,
    i = 1;
  t &&
    Vt(e) &&
    ((o = (e.offsetWidth > 0 && Ro(r.width) / e.offsetWidth) || 1),
    (i = (e.offsetHeight > 0 && Ro(r.height) / e.offsetHeight) || 1));
  var l = zr(e) ? zt(e) : window,
    a = l.visualViewport,
    s = !f0() && n,
    u = (r.left + (s && a ? a.offsetLeft : 0)) / o,
    c = (r.top + (s && a ? a.offsetTop : 0)) / i,
    f = r.width / o,
    p = r.height / i;
  return {
    width: f,
    height: p,
    top: c,
    right: u + f,
    bottom: c + p,
    left: u,
    x: u,
    y: c,
  };
}
function Jd(e) {
  var t = _o(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function p0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && Zd(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Dn(e) {
  return zt(e).getComputedStyle(e);
}
function Sk(e) {
  return ["table", "td", "th"].indexOf(kn(e)) >= 0;
}
function cr(e) {
  return ((zr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function zs(e) {
  return kn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (Zd(e) ? e.host : null) || cr(e);
}
function Qp(e) {
  return !Vt(e) || Dn(e).position === "fixed" ? null : e.offsetParent;
}
function kk(e) {
  var t = /firefox/i.test(Rc()),
    n = /Trident/i.test(Rc());
  if (n && Vt(e)) {
    var r = Dn(e);
    if (r.position === "fixed") return null;
  }
  var o = zs(e);
  for (Zd(o) && (o = o.host); Vt(o) && ["html", "body"].indexOf(kn(o)) < 0; ) {
    var i = Dn(o);
    if (
      i.transform !== "none" ||
      i.perspective !== "none" ||
      i.contain === "paint" ||
      ["transform", "perspective"].indexOf(i.willChange) !== -1 ||
      (t && i.willChange === "filter") ||
      (t && i.filter && i.filter !== "none")
    )
      return o;
    o = o.parentNode;
  }
  return null;
}
function il(e) {
  for (var t = zt(e), n = Qp(e); n && Sk(n) && Dn(n).position === "static"; )
    n = Qp(n);
  return n &&
    (kn(n) === "html" || (kn(n) === "body" && Dn(n).position === "static"))
    ? t
    : n || kk(e) || t;
}
function ef(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Si(e, t, n) {
  return Pr(e, _a(t, n));
}
function bk(e, t, n) {
  var r = Si(e, t, n);
  return r > n ? n : r;
}
function m0() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function h0(e) {
  return Object.assign({}, m0(), e);
}
function v0(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var Ck = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    h0(typeof t != "number" ? t : v0(t, ol))
  );
};
function Ek(e) {
  var t,
    n = e.state,
    r = e.name,
    o = e.options,
    i = n.elements.arrow,
    l = n.modifiersData.popperOffsets,
    a = Sn(n.placement),
    s = ef(a),
    u = [kt, Xt].indexOf(a) >= 0,
    c = u ? "height" : "width";
  if (!(!i || !l)) {
    var f = Ck(o.padding, n),
      p = Jd(i),
      g = s === "y" ? St : kt,
      y = s === "y" ? Qt : Xt,
      h =
        n.rects.reference[c] + n.rects.reference[s] - l[s] - n.rects.popper[c],
      E = l[s] - n.rects.reference[s],
      m = il(i),
      d = m ? (s === "y" ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
      v = h / 2 - E / 2,
      x = f[g],
      k = d - p[c] - f[y],
      b = d / 2 - p[c] / 2 + v,
      C = Si(x, b, k),
      $ = s;
    n.modifiersData[r] = ((t = {}), (t[$] = C), (t.centerOffset = C - b), t);
  }
}
function Pk(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null &&
    ((typeof o == "string" && ((o = t.elements.popper.querySelector(o)), !o)) ||
      (p0(t.elements.popper, o) && (t.elements.arrow = o)));
}
const $k = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ek,
  effect: Pk,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function Oo(e) {
  return e.split("-")[1];
}
var Tk = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Rk(e, t) {
  var n = e.x,
    r = e.y,
    o = t.devicePixelRatio || 1;
  return { x: Ro(n * o) / o || 0, y: Ro(r * o) / o || 0 };
}
function Xp(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    o = e.placement,
    i = e.variation,
    l = e.offsets,
    a = e.position,
    s = e.gpuAcceleration,
    u = e.adaptive,
    c = e.roundOffsets,
    f = e.isFixed,
    p = l.x,
    g = p === void 0 ? 0 : p,
    y = l.y,
    h = y === void 0 ? 0 : y,
    E = typeof c == "function" ? c({ x: g, y: h }) : { x: g, y: h };
  (g = E.x), (h = E.y);
  var m = l.hasOwnProperty("x"),
    d = l.hasOwnProperty("y"),
    v = kt,
    x = St,
    k = window;
  if (u) {
    var b = il(n),
      C = "clientHeight",
      $ = "clientWidth";
    if (
      (b === zt(n) &&
        ((b = cr(n)),
        Dn(b).position !== "static" &&
          a === "absolute" &&
          ((C = "scrollHeight"), ($ = "scrollWidth"))),
      (b = b),
      o === St || ((o === kt || o === Xt) && i === Gi))
    ) {
      x = Qt;
      var _ = f && b === k && k.visualViewport ? k.visualViewport.height : b[C];
      (h -= _ - r.height), (h *= s ? 1 : -1);
    }
    if (o === kt || ((o === St || o === Qt) && i === Gi)) {
      v = Xt;
      var T = f && b === k && k.visualViewport ? k.visualViewport.width : b[$];
      (g -= T - r.width), (g *= s ? 1 : -1);
    }
  }
  var z = Object.assign({ position: a }, u && Tk),
    V = c === !0 ? Rk({ x: g, y: h }, zt(n)) : { x: g, y: h };
  if (((g = V.x), (h = V.y), s)) {
    var j;
    return Object.assign(
      {},
      z,
      ((j = {}),
      (j[x] = d ? "0" : ""),
      (j[v] = m ? "0" : ""),
      (j.transform =
        (k.devicePixelRatio || 1) <= 1
          ? "translate(" + g + "px, " + h + "px)"
          : "translate3d(" + g + "px, " + h + "px, 0)"),
      j)
    );
  }
  return Object.assign(
    {},
    z,
    ((t = {}),
    (t[x] = d ? h + "px" : ""),
    (t[v] = m ? g + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function _k(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    o = r === void 0 ? !0 : r,
    i = n.adaptive,
    l = i === void 0 ? !0 : i,
    a = n.roundOffsets,
    s = a === void 0 ? !0 : a,
    u = {
      placement: Sn(t.placement),
      variation: Oo(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: o,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Xp(
        Object.assign({}, u, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: l,
          roundOffsets: s,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Xp(
          Object.assign({}, u, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: s,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const Ok = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: _k,
  data: {},
};
var _l = { passive: !0 };
function Mk(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    o = r.scroll,
    i = o === void 0 ? !0 : o,
    l = r.resize,
    a = l === void 0 ? !0 : l,
    s = zt(t.elements.popper),
    u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    i &&
      u.forEach(function (c) {
        c.addEventListener("scroll", n.update, _l);
      }),
    a && s.addEventListener("resize", n.update, _l),
    function () {
      i &&
        u.forEach(function (c) {
          c.removeEventListener("scroll", n.update, _l);
        }),
        a && s.removeEventListener("resize", n.update, _l);
    }
  );
}
const Lk = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: Mk,
  data: {},
};
var zk = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ta(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return zk[t];
  });
}
var Nk = { start: "end", end: "start" };
function Yp(e) {
  return e.replace(/start|end/g, function (t) {
    return Nk[t];
  });
}
function tf(e) {
  var t = zt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function nf(e) {
  return _o(cr(e)).left + tf(e).scrollLeft;
}
function Ik(e, t) {
  var n = zt(e),
    r = cr(e),
    o = n.visualViewport,
    i = r.clientWidth,
    l = r.clientHeight,
    a = 0,
    s = 0;
  if (o) {
    (i = o.width), (l = o.height);
    var u = f0();
    (u || (!u && t === "fixed")) && ((a = o.offsetLeft), (s = o.offsetTop));
  }
  return { width: i, height: l, x: a + nf(e), y: s };
}
function Ak(e) {
  var t,
    n = cr(e),
    r = tf(e),
    o = (t = e.ownerDocument) == null ? void 0 : t.body,
    i = Pr(
      n.scrollWidth,
      n.clientWidth,
      o ? o.scrollWidth : 0,
      o ? o.clientWidth : 0
    ),
    l = Pr(
      n.scrollHeight,
      n.clientHeight,
      o ? o.scrollHeight : 0,
      o ? o.clientHeight : 0
    ),
    a = -r.scrollLeft + nf(e),
    s = -r.scrollTop;
  return (
    Dn(o || n).direction === "rtl" &&
      (a += Pr(n.clientWidth, o ? o.clientWidth : 0) - i),
    { width: i, height: l, x: a, y: s }
  );
}
function rf(e) {
  var t = Dn(e),
    n = t.overflow,
    r = t.overflowX,
    o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function g0(e) {
  return ["html", "body", "#document"].indexOf(kn(e)) >= 0
    ? e.ownerDocument.body
    : Vt(e) && rf(e)
    ? e
    : g0(zs(e));
}
function ki(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = g0(e),
    o = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    i = zt(r),
    l = o ? [i].concat(i.visualViewport || [], rf(r) ? r : []) : r,
    a = t.concat(l);
  return o ? a : a.concat(ki(zs(l)));
}
function _c(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function Dk(e, t) {
  var n = _o(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function qp(e, t, n) {
  return t === c0 ? _c(Ik(e, n)) : zr(t) ? Dk(t, n) : _c(Ak(cr(e)));
}
function Fk(e) {
  var t = ki(zs(e)),
    n = ["absolute", "fixed"].indexOf(Dn(e).position) >= 0,
    r = n && Vt(e) ? il(e) : e;
  return zr(r)
    ? t.filter(function (o) {
        return zr(o) && p0(o, r) && kn(o) !== "body";
      })
    : [];
}
function Bk(e, t, n, r) {
  var o = t === "clippingParents" ? Fk(e) : [].concat(t),
    i = [].concat(o, [n]),
    l = i[0],
    a = i.reduce(function (s, u) {
      var c = qp(e, u, r);
      return (
        (s.top = Pr(c.top, s.top)),
        (s.right = _a(c.right, s.right)),
        (s.bottom = _a(c.bottom, s.bottom)),
        (s.left = Pr(c.left, s.left)),
        s
      );
    }, qp(e, l, r));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function y0(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    o = r ? Sn(r) : null,
    i = r ? Oo(r) : null,
    l = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    s;
  switch (o) {
    case St:
      s = { x: l, y: t.y - n.height };
      break;
    case Qt:
      s = { x: l, y: t.y + t.height };
      break;
    case Xt:
      s = { x: t.x + t.width, y: a };
      break;
    case kt:
      s = { x: t.x - n.width, y: a };
      break;
    default:
      s = { x: t.x, y: t.y };
  }
  var u = o ? ef(o) : null;
  if (u != null) {
    var c = u === "y" ? "height" : "width";
    switch (i) {
      case To:
        s[u] = s[u] - (t[c] / 2 - n[c] / 2);
        break;
      case Gi:
        s[u] = s[u] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return s;
}
function Qi(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = r === void 0 ? e.placement : r,
    i = n.strategy,
    l = i === void 0 ? e.strategy : i,
    a = n.boundary,
    s = a === void 0 ? lk : a,
    u = n.rootBoundary,
    c = u === void 0 ? c0 : u,
    f = n.elementContext,
    p = f === void 0 ? ei : f,
    g = n.altBoundary,
    y = g === void 0 ? !1 : g,
    h = n.padding,
    E = h === void 0 ? 0 : h,
    m = h0(typeof E != "number" ? E : v0(E, ol)),
    d = p === ei ? ak : ei,
    v = e.rects.popper,
    x = e.elements[y ? d : p],
    k = Bk(zr(x) ? x : x.contextElement || cr(e.elements.popper), s, c, l),
    b = _o(e.elements.reference),
    C = y0({ reference: b, element: v, strategy: "absolute", placement: o }),
    $ = _c(Object.assign({}, v, C)),
    _ = p === ei ? $ : b,
    T = {
      top: k.top - _.top + m.top,
      bottom: _.bottom - k.bottom + m.bottom,
      left: k.left - _.left + m.left,
      right: _.right - k.right + m.right,
    },
    z = e.modifiersData.offset;
  if (p === ei && z) {
    var V = z[o];
    Object.keys(T).forEach(function (j) {
      var W = [Xt, Qt].indexOf(j) >= 0 ? 1 : -1,
        F = [St, Qt].indexOf(j) >= 0 ? "y" : "x";
      T[j] += V[F] * W;
    });
  }
  return T;
}
function jk(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    o = n.boundary,
    i = n.rootBoundary,
    l = n.padding,
    a = n.flipVariations,
    s = n.allowedAutoPlacements,
    u = s === void 0 ? d0 : s,
    c = Oo(r),
    f = c
      ? a
        ? Gp
        : Gp.filter(function (y) {
            return Oo(y) === c;
          })
      : ol,
    p = f.filter(function (y) {
      return u.indexOf(y) >= 0;
    });
  p.length === 0 && (p = f);
  var g = p.reduce(function (y, h) {
    return (
      (y[h] = Qi(e, { placement: h, boundary: o, rootBoundary: i, padding: l })[
        Sn(h)
      ]),
      y
    );
  }, {});
  return Object.keys(g).sort(function (y, h) {
    return g[y] - g[h];
  });
}
function Wk(e) {
  if (Sn(e) === qd) return [];
  var t = ta(e);
  return [Yp(e), t, Yp(t)];
}
function Uk(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var o = n.mainAxis,
        i = o === void 0 ? !0 : o,
        l = n.altAxis,
        a = l === void 0 ? !0 : l,
        s = n.fallbackPlacements,
        u = n.padding,
        c = n.boundary,
        f = n.rootBoundary,
        p = n.altBoundary,
        g = n.flipVariations,
        y = g === void 0 ? !0 : g,
        h = n.allowedAutoPlacements,
        E = t.options.placement,
        m = Sn(E),
        d = m === E,
        v = s || (d || !y ? [ta(E)] : Wk(E)),
        x = [E].concat(v).reduce(function (ae, Se) {
          return ae.concat(
            Sn(Se) === qd
              ? jk(t, {
                  placement: Se,
                  boundary: c,
                  rootBoundary: f,
                  padding: u,
                  flipVariations: y,
                  allowedAutoPlacements: h,
                })
              : Se
          );
        }, []),
        k = t.rects.reference,
        b = t.rects.popper,
        C = new Map(),
        $ = !0,
        _ = x[0],
        T = 0;
      T < x.length;
      T++
    ) {
      var z = x[T],
        V = Sn(z),
        j = Oo(z) === To,
        W = [St, Qt].indexOf(V) >= 0,
        F = W ? "width" : "height",
        U = Qi(t, {
          placement: z,
          boundary: c,
          rootBoundary: f,
          altBoundary: p,
          padding: u,
        }),
        H = W ? (j ? Xt : kt) : j ? Qt : St;
      k[F] > b[F] && (H = ta(H));
      var R = ta(H),
        M = [];
      if (
        (i && M.push(U[V] <= 0),
        a && M.push(U[H] <= 0, U[R] <= 0),
        M.every(function (ae) {
          return ae;
        }))
      ) {
        (_ = z), ($ = !1);
        break;
      }
      C.set(z, M);
    }
    if ($)
      for (
        var N = y ? 3 : 1,
          ee = function (Se) {
            var B = x.find(function (se) {
              var ie = C.get(se);
              if (ie)
                return ie.slice(0, Se).every(function (oe) {
                  return oe;
                });
            });
            if (B) return (_ = B), "break";
          },
          te = N;
        te > 0;
        te--
      ) {
        var ue = ee(te);
        if (ue === "break") break;
      }
    t.placement !== _ &&
      ((t.modifiersData[r]._skip = !0), (t.placement = _), (t.reset = !0));
  }
}
const Vk = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Uk,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Zp(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function Jp(e) {
  return [St, Xt, Qt, kt].some(function (t) {
    return e[t] >= 0;
  });
}
function Hk(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    o = t.rects.popper,
    i = t.modifiersData.preventOverflow,
    l = Qi(t, { elementContext: "reference" }),
    a = Qi(t, { altBoundary: !0 }),
    s = Zp(l, r),
    u = Zp(a, o, i),
    c = Jp(s),
    f = Jp(u);
  (t.modifiersData[n] = {
    referenceClippingOffsets: s,
    popperEscapeOffsets: u,
    isReferenceHidden: c,
    hasPopperEscaped: f,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": f,
    }));
}
const Kk = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Hk,
};
function Gk(e, t, n) {
  var r = Sn(e),
    o = [kt, St].indexOf(r) >= 0 ? -1 : 1,
    i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    l = i[0],
    a = i[1];
  return (
    (l = l || 0),
    (a = (a || 0) * o),
    [kt, Xt].indexOf(r) >= 0 ? { x: a, y: l } : { x: l, y: a }
  );
}
function Qk(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.offset,
    i = o === void 0 ? [0, 0] : o,
    l = d0.reduce(function (c, f) {
      return (c[f] = Gk(f, t.rects, i)), c;
    }, {}),
    a = l[t.placement],
    s = a.x,
    u = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += s),
    (t.modifiersData.popperOffsets.y += u)),
    (t.modifiersData[r] = l);
}
const Xk = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Qk,
};
function Yk(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = y0({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const qk = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Yk,
  data: {},
};
function Zk(e) {
  return e === "x" ? "y" : "x";
}
function Jk(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    o = n.mainAxis,
    i = o === void 0 ? !0 : o,
    l = n.altAxis,
    a = l === void 0 ? !1 : l,
    s = n.boundary,
    u = n.rootBoundary,
    c = n.altBoundary,
    f = n.padding,
    p = n.tether,
    g = p === void 0 ? !0 : p,
    y = n.tetherOffset,
    h = y === void 0 ? 0 : y,
    E = Qi(t, { boundary: s, rootBoundary: u, padding: f, altBoundary: c }),
    m = Sn(t.placement),
    d = Oo(t.placement),
    v = !d,
    x = ef(m),
    k = Zk(x),
    b = t.modifiersData.popperOffsets,
    C = t.rects.reference,
    $ = t.rects.popper,
    _ =
      typeof h == "function"
        ? h(Object.assign({}, t.rects, { placement: t.placement }))
        : h,
    T =
      typeof _ == "number"
        ? { mainAxis: _, altAxis: _ }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, _),
    z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    V = { x: 0, y: 0 };
  if (b) {
    if (i) {
      var j,
        W = x === "y" ? St : kt,
        F = x === "y" ? Qt : Xt,
        U = x === "y" ? "height" : "width",
        H = b[x],
        R = H + E[W],
        M = H - E[F],
        N = g ? -$[U] / 2 : 0,
        ee = d === To ? C[U] : $[U],
        te = d === To ? -$[U] : -C[U],
        ue = t.elements.arrow,
        ae = g && ue ? Jd(ue) : { width: 0, height: 0 },
        Se = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : m0(),
        B = Se[W],
        se = Se[F],
        ie = Si(0, C[U], ae[U]),
        oe = v ? C[U] / 2 - N - ie - B - T.mainAxis : ee - ie - B - T.mainAxis,
        We = v
          ? -C[U] / 2 + N + ie + se + T.mainAxis
          : te + ie + se + T.mainAxis,
        Ne = t.elements.arrow && il(t.elements.arrow),
        Ct = Ne ? (x === "y" ? Ne.clientTop || 0 : Ne.clientLeft || 0) : 0,
        Xe = (j = z == null ? void 0 : z[x]) != null ? j : 0,
        xe = H + oe - Xe - Ct,
        de = H + We - Xe,
        Et = Si(g ? _a(R, xe) : R, H, g ? Pr(M, de) : M);
      (b[x] = Et), (V[x] = Et - H);
    }
    if (a) {
      var Ye,
        mt = x === "x" ? St : kt,
        qt = x === "x" ? Qt : Xt,
        me = b[k],
        Ue = k === "y" ? "height" : "width",
        Zt = me + E[mt],
        Dt = me - E[qt],
        L = [St, kt].indexOf(m) !== -1,
        I = (Ye = z == null ? void 0 : z[k]) != null ? Ye : 0,
        G = L ? Zt : me - C[Ue] - $[Ue] - I + T.altAxis,
        q = L ? me + C[Ue] + $[Ue] - I - T.altAxis : Dt,
        Ce = g && L ? bk(G, me, q) : Si(g ? G : Zt, me, g ? q : Dt);
      (b[k] = Ce), (V[k] = Ce - me);
    }
    t.modifiersData[r] = V;
  }
}
const eb = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Jk,
  requiresIfExists: ["offset"],
};
function tb(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function nb(e) {
  return e === zt(e) || !Vt(e) ? tf(e) : tb(e);
}
function rb(e) {
  var t = e.getBoundingClientRect(),
    n = Ro(t.width) / e.offsetWidth || 1,
    r = Ro(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ob(e, t, n) {
  n === void 0 && (n = !1);
  var r = Vt(t),
    o = Vt(t) && rb(t),
    i = cr(t),
    l = _o(e, o, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((kn(t) !== "body" || rf(i)) && (a = nb(t)),
      Vt(t)
        ? ((s = _o(t, !0)), (s.x += t.clientLeft), (s.y += t.clientTop))
        : i && (s.x = nf(i))),
    {
      x: l.left + a.scrollLeft - s.x,
      y: l.top + a.scrollTop - s.y,
      width: l.width,
      height: l.height,
    }
  );
}
function ib(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (i) {
    t.set(i.name, i);
  });
  function o(i) {
    n.add(i.name);
    var l = [].concat(i.requires || [], i.requiresIfExists || []);
    l.forEach(function (a) {
      if (!n.has(a)) {
        var s = t.get(a);
        s && o(s);
      }
    }),
      r.push(i);
  }
  return (
    e.forEach(function (i) {
      n.has(i.name) || o(i);
    }),
    r
  );
}
function lb(e) {
  var t = ib(e);
  return gk.reduce(function (n, r) {
    return n.concat(
      t.filter(function (o) {
        return o.phase === r;
      })
    );
  }, []);
}
function ab(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function sb(e) {
  var t = e.reduce(function (n, r) {
    var o = n[r.name];
    return (
      (n[r.name] = o
        ? Object.assign({}, o, r, {
            options: Object.assign({}, o.options, r.options),
            data: Object.assign({}, o.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var em = { placement: "bottom", modifiers: [], strategy: "absolute" };
function tm() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function ub(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    o = t.defaultOptions,
    i = o === void 0 ? em : o;
  return function (a, s, u) {
    u === void 0 && (u = i);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, em, i),
        modifiersData: {},
        elements: { reference: a, popper: s },
        attributes: {},
        styles: {},
      },
      f = [],
      p = !1,
      g = {
        state: c,
        setOptions: function (m) {
          var d = typeof m == "function" ? m(c.options) : m;
          h(),
            (c.options = Object.assign({}, i, c.options, d)),
            (c.scrollParents = {
              reference: zr(a)
                ? ki(a)
                : a.contextElement
                ? ki(a.contextElement)
                : [],
              popper: ki(s),
            });
          var v = lb(sb([].concat(r, c.options.modifiers)));
          return (
            (c.orderedModifiers = v.filter(function (x) {
              return x.enabled;
            })),
            y(),
            g.update()
          );
        },
        forceUpdate: function () {
          if (!p) {
            var m = c.elements,
              d = m.reference,
              v = m.popper;
            if (tm(d, v)) {
              (c.rects = {
                reference: ob(d, il(v), c.options.strategy === "fixed"),
                popper: Jd(v),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (T) {
                  return (c.modifiersData[T.name] = Object.assign({}, T.data));
                });
              for (var x = 0; x < c.orderedModifiers.length; x++) {
                if (c.reset === !0) {
                  (c.reset = !1), (x = -1);
                  continue;
                }
                var k = c.orderedModifiers[x],
                  b = k.fn,
                  C = k.options,
                  $ = C === void 0 ? {} : C,
                  _ = k.name;
                typeof b == "function" &&
                  (c = b({ state: c, options: $, name: _, instance: g }) || c);
              }
            }
          }
        },
        update: ab(function () {
          return new Promise(function (E) {
            g.forceUpdate(), E(c);
          });
        }),
        destroy: function () {
          h(), (p = !0);
        },
      };
    if (!tm(a, s)) return g;
    g.setOptions(u).then(function (E) {
      !p && u.onFirstUpdate && u.onFirstUpdate(E);
    });
    function y() {
      c.orderedModifiers.forEach(function (E) {
        var m = E.name,
          d = E.options,
          v = d === void 0 ? {} : d,
          x = E.effect;
        if (typeof x == "function") {
          var k = x({ state: c, name: m, instance: g, options: v }),
            b = function () {};
          f.push(k || b);
        }
      });
    }
    function h() {
      f.forEach(function (E) {
        return E();
      }),
        (f = []);
    }
    return g;
  };
}
var cb = [Lk, qk, Ok, wk, Xk, Vk, eb, $k, Kk],
  db = ub({ defaultModifiers: cb });
function fb(e) {
  return typeof e == "function" ? e() : e;
}
const pb = S.forwardRef(function (t, n) {
    const { children: r, container: o, disablePortal: i = !1 } = t,
      [l, a] = S.useState(null),
      s = Gt(S.isValidElement(r) ? r.ref : null, n);
    if (
      (Mr(() => {
        i || a(fb(o) || document.body);
      }, [o, i]),
      Mr(() => {
        if (l && !i)
          return (
            $a(n, l),
            () => {
              $a(n, null);
            }
          );
      }, [n, l, i]),
      i)
    ) {
      if (S.isValidElement(r)) {
        const u = { ref: s };
        return S.cloneElement(r, u);
      }
      return P(S.Fragment, { children: r });
    }
    return P(S.Fragment, { children: l && Ei.createPortal(r, l) });
  }),
  mb = pb;
function hb(e) {
  return $e("MuiPopper", e);
}
ze("MuiPopper", ["root"]);
const vb = [
    "anchorEl",
    "children",
    "component",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "ownerState",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
  ],
  gb = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function yb(e, t) {
  if (t === "ltr") return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Oc(e) {
  return typeof e == "function" ? e() : e;
}
function xb(e) {
  return e.nodeType !== void 0;
}
const wb = () => Le({ root: ["root"] }, tk(hb)),
  Sb = {},
  kb = S.forwardRef(function (t, n) {
    var r;
    const {
        anchorEl: o,
        children: i,
        component: l,
        direction: a,
        disablePortal: s,
        modifiers: u,
        open: c,
        ownerState: f,
        placement: p,
        popperOptions: g,
        popperRef: y,
        slotProps: h = {},
        slots: E = {},
        TransitionProps: m,
      } = t,
      d = Z(t, vb),
      v = S.useRef(null),
      x = Gt(v, n),
      k = S.useRef(null),
      b = Gt(k, y),
      C = S.useRef(b);
    Mr(() => {
      C.current = b;
    }, [b]),
      S.useImperativeHandle(y, () => k.current, []);
    const $ = yb(p, a),
      [_, T] = S.useState($),
      [z, V] = S.useState(Oc(o));
    S.useEffect(() => {
      k.current && k.current.forceUpdate();
    }),
      S.useEffect(() => {
        o && V(Oc(o));
      }, [o]),
      Mr(() => {
        if (!z || !c) return;
        const H = (N) => {
          T(N.placement);
        };
        let R = [
          { name: "preventOverflow", options: { altBoundary: s } },
          { name: "flip", options: { altBoundary: s } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: N }) => {
              H(N);
            },
          },
        ];
        u != null && (R = R.concat(u)),
          g && g.modifiers != null && (R = R.concat(g.modifiers));
        const M = db(z, v.current, w({ placement: $ }, g, { modifiers: R }));
        return (
          C.current(M),
          () => {
            M.destroy(), C.current(null);
          }
        );
      }, [z, s, u, c, g, $]);
    const j = { placement: _ };
    m !== null && (j.TransitionProps = m);
    const W = wb(),
      F = (r = l ?? E.root) != null ? r : "div",
      U = En({
        elementType: F,
        externalSlotProps: h.root,
        externalForwardedProps: d,
        additionalProps: { role: "tooltip", ref: x },
        ownerState: w({}, t, f),
        className: W.root,
      });
    return P(F, w({}, U, { children: typeof i == "function" ? i(j) : i }));
  }),
  bb = S.forwardRef(function (t, n) {
    const {
        anchorEl: r,
        children: o,
        container: i,
        direction: l = "ltr",
        disablePortal: a = !1,
        keepMounted: s = !1,
        modifiers: u,
        open: c,
        placement: f = "bottom",
        popperOptions: p = Sb,
        popperRef: g,
        style: y,
        transition: h = !1,
        slotProps: E = {},
        slots: m = {},
      } = t,
      d = Z(t, gb),
      [v, x] = S.useState(!0),
      k = () => {
        x(!1);
      },
      b = () => {
        x(!0);
      };
    if (!s && !c && (!h || v)) return null;
    let C;
    if (i) C = i;
    else if (r) {
      const T = Oc(r);
      C = T && xb(T) ? or(T).body : or(null).body;
    }
    const $ = !c && s && (!h || v) ? "none" : void 0,
      _ = h ? { in: c, onEnter: k, onExited: b } : void 0;
    return P(mb, {
      disablePortal: a,
      container: C,
      children: P(
        kb,
        w(
          {
            anchorEl: r,
            direction: l,
            disablePortal: a,
            modifiers: u,
            ref: n,
            open: h ? !v : c,
            placement: f,
            popperOptions: p,
            popperRef: g,
            slotProps: E,
            slots: m,
          },
          d,
          {
            style: w({ position: "fixed", top: 0, left: 0, display: $ }, y),
            TransitionProps: _,
            children: o,
          }
        )
      ),
    });
  }),
  Cb = bb,
  Eb = 2;
function x0(e, t) {
  return e - t;
}
function ti(e, t, n) {
  return e == null ? t : Math.min(Math.max(t, e), n);
}
function nm(e, t) {
  var n;
  const { index: r } =
    (n = e.reduce((o, i, l) => {
      const a = Math.abs(t - i);
      return o === null || a < o.distance || a === o.distance
        ? { distance: a, index: l }
        : o;
    }, null)) != null
      ? n
      : {};
  return r;
}
function Ol(e, t) {
  if (t.current !== void 0 && e.changedTouches) {
    const n = e;
    for (let r = 0; r < n.changedTouches.length; r += 1) {
      const o = n.changedTouches[r];
      if (o.identifier === t.current) return { x: o.clientX, y: o.clientY };
    }
    return !1;
  }
  return { x: e.clientX, y: e.clientY };
}
function Oa(e, t, n) {
  return ((e - t) * 100) / (n - t);
}
function Pb(e, t, n) {
  return (n - t) * e + t;
}
function $b(e) {
  if (Math.abs(e) < 1) {
    const n = e.toExponential().split("e-"),
      r = n[0].split(".")[1];
    return (r ? r.length : 0) + parseInt(n[1], 10);
  }
  const t = e.toString().split(".")[1];
  return t ? t.length : 0;
}
function Tb(e, t, n) {
  const r = Math.round((e - n) / t) * t + n;
  return Number(r.toFixed($b(t)));
}
function rm({ values: e, newValue: t, index: n }) {
  const r = e.slice();
  return (r[n] = t), r.sort(x0);
}
function Ml({ sliderRef: e, activeIndex: t, setActive: n }) {
  var r, o;
  const i = or(e.current);
  if (
    !((r = e.current) != null && r.contains(i.activeElement)) ||
    Number(
      i == null || (o = i.activeElement) == null
        ? void 0
        : o.getAttribute("data-index")
    ) !== t
  ) {
    var l;
    (l = e.current) == null ||
      l.querySelector(`[type="range"][data-index="${t}"]`).focus();
  }
  n && n(t);
}
const Rb = {
    horizontal: {
      offset: (e) => ({ left: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    "horizontal-reverse": {
      offset: (e) => ({ right: `${e}%` }),
      leap: (e) => ({ width: `${e}%` }),
    },
    vertical: {
      offset: (e) => ({ bottom: `${e}%` }),
      leap: (e) => ({ height: `${e}%` }),
    },
  },
  _b = (e) => e;
let Ll;
function vu() {
  return (
    Ll === void 0 &&
      (typeof CSS < "u" && typeof CSS.supports == "function"
        ? (Ll = CSS.supports("touch-action", "none"))
        : (Ll = !0)),
    Ll
  );
}
function Ob(e) {
  const {
      "aria-labelledby": t,
      defaultValue: n,
      disabled: r = !1,
      disableSwap: o = !1,
      isRtl: i = !1,
      marks: l = !1,
      max: a = 100,
      min: s = 0,
      name: u,
      onChange: c,
      onChangeCommitted: f,
      orientation: p = "horizontal",
      ref: g,
      scale: y = _b,
      step: h = 1,
      tabIndex: E,
      value: m,
    } = e,
    d = S.useRef(),
    [v, x] = S.useState(-1),
    [k, b] = S.useState(-1),
    [C, $] = S.useState(!1),
    _ = S.useRef(0),
    [T, z] = el({ controlled: m, default: n ?? s, name: "Slider" }),
    V =
      c &&
      ((L, I, G) => {
        const q = L.nativeEvent || L,
          Ce = new q.constructor(q.type, q);
        Object.defineProperty(Ce, "target", {
          writable: !0,
          value: { value: I, name: u },
        }),
          c(Ce, I, G);
      }),
    j = Array.isArray(T);
  let W = j ? T.slice().sort(x0) : [T];
  W = W.map((L) => ti(L, s, a));
  const F =
      l === !0 && h !== null
        ? [...Array(Math.floor((a - s) / h) + 1)].map((L, I) => ({
            value: s + h * I,
          }))
        : l || [],
    U = F.map((L) => L.value),
    { isFocusVisibleRef: H, onBlur: R, onFocus: M, ref: N } = ss(),
    [ee, te] = S.useState(-1),
    ue = S.useRef(),
    ae = Gt(N, ue),
    Se = Gt(g, ae),
    B = (L) => (I) => {
      var G;
      const q = Number(I.currentTarget.getAttribute("data-index"));
      M(I),
        H.current === !0 && te(q),
        b(q),
        L == null || (G = L.onFocus) == null || G.call(L, I);
    },
    se = (L) => (I) => {
      var G;
      R(I),
        H.current === !1 && te(-1),
        b(-1),
        L == null || (G = L.onBlur) == null || G.call(L, I);
    };
  Mr(() => {
    if (r && ue.current.contains(document.activeElement)) {
      var L;
      (L = document.activeElement) == null || L.blur();
    }
  }, [r]),
    r && v !== -1 && x(-1),
    r && ee !== -1 && te(-1);
  const ie = (L) => (I) => {
      var G;
      (G = L.onChange) == null || G.call(L, I);
      const q = Number(I.currentTarget.getAttribute("data-index")),
        Ce = W[q],
        D = U.indexOf(Ce);
      let he = I.target.valueAsNumber;
      if (
        (F && h == null && (he = he < Ce ? U[D - 1] : U[D + 1]),
        (he = ti(he, s, a)),
        F && h == null)
      ) {
        const Ie = U.indexOf(W[q]);
        he = he < W[q] ? U[Ie - 1] : U[Ie + 1];
      }
      if (j) {
        o && (he = ti(he, W[q - 1] || -1 / 0, W[q + 1] || 1 / 0));
        const Ie = he;
        he = rm({ values: W, newValue: he, index: q });
        let J = q;
        o || (J = he.indexOf(Ie)), Ml({ sliderRef: ue, activeIndex: J });
      }
      z(he), te(q), V && V(I, he, q), f && f(I, he);
    },
    oe = S.useRef();
  let We = p;
  i && p === "horizontal" && (We += "-reverse");
  const Ne = ({ finger: L, move: I = !1 }) => {
      const { current: G } = ue,
        {
          width: q,
          height: Ce,
          bottom: D,
          left: he,
        } = G.getBoundingClientRect();
      let Ie;
      We.indexOf("vertical") === 0
        ? (Ie = (D - L.y) / Ce)
        : (Ie = (L.x - he) / q),
        We.indexOf("-reverse") !== -1 && (Ie = 1 - Ie);
      let J;
      if (((J = Pb(Ie, s, a)), h)) J = Tb(J, h, s);
      else {
        const dn = nm(U, J);
        J = U[dn];
      }
      J = ti(J, s, a);
      let ht = 0;
      if (j) {
        I ? (ht = oe.current) : (ht = nm(W, J)),
          o && (J = ti(J, W[ht - 1] || -1 / 0, W[ht + 1] || 1 / 0));
        const dn = J;
        (J = rm({ values: W, newValue: J, index: ht })),
          (o && I) || ((ht = J.indexOf(dn)), (oe.current = ht));
      }
      return { newValue: J, activeIndex: ht };
    },
    Ct = _n((L) => {
      const I = Ol(L, d);
      if (!I) return;
      if (((_.current += 1), L.type === "mousemove" && L.buttons === 0)) {
        Xe(L);
        return;
      }
      const { newValue: G, activeIndex: q } = Ne({ finger: I, move: !0 });
      Ml({ sliderRef: ue, activeIndex: q, setActive: x }),
        z(G),
        !C && _.current > Eb && $(!0),
        V && G !== T && V(L, G, q);
    }),
    Xe = _n((L) => {
      const I = Ol(L, d);
      if (($(!1), !I)) return;
      const { newValue: G } = Ne({ finger: I, move: !0 });
      x(-1),
        L.type === "touchend" && b(-1),
        f && f(L, G),
        (d.current = void 0),
        de();
    }),
    xe = _n((L) => {
      if (r) return;
      vu() || L.preventDefault();
      const I = L.changedTouches[0];
      I != null && (d.current = I.identifier);
      const G = Ol(L, d);
      if (G !== !1) {
        const { newValue: Ce, activeIndex: D } = Ne({ finger: G });
        Ml({ sliderRef: ue, activeIndex: D, setActive: x }),
          z(Ce),
          V && V(L, Ce, D);
      }
      _.current = 0;
      const q = or(ue.current);
      q.addEventListener("touchmove", Ct), q.addEventListener("touchend", Xe);
    }),
    de = S.useCallback(() => {
      const L = or(ue.current);
      L.removeEventListener("mousemove", Ct),
        L.removeEventListener("mouseup", Xe),
        L.removeEventListener("touchmove", Ct),
        L.removeEventListener("touchend", Xe);
    }, [Xe, Ct]);
  S.useEffect(() => {
    const { current: L } = ue;
    return (
      L.addEventListener("touchstart", xe, { passive: vu() }),
      () => {
        L.removeEventListener("touchstart", xe, { passive: vu() }), de();
      }
    );
  }, [de, xe]),
    S.useEffect(() => {
      r && de();
    }, [r, de]);
  const Et = (L) => (I) => {
      var G;
      if (
        ((G = L.onMouseDown) == null || G.call(L, I),
        r || I.defaultPrevented || I.button !== 0)
      )
        return;
      I.preventDefault();
      const q = Ol(I, d);
      if (q !== !1) {
        const { newValue: D, activeIndex: he } = Ne({ finger: q });
        Ml({ sliderRef: ue, activeIndex: he, setActive: x }),
          z(D),
          V && V(I, D, he);
      }
      _.current = 0;
      const Ce = or(ue.current);
      Ce.addEventListener("mousemove", Ct), Ce.addEventListener("mouseup", Xe);
    },
    Ye = Oa(j ? W[0] : s, s, a),
    mt = Oa(W[W.length - 1], s, a) - Ye,
    qt = (L = {}) => {
      const I = { onMouseDown: Et(L || {}) },
        G = w({}, L, I);
      return w({ ref: Se }, G);
    },
    me = (L) => (I) => {
      var G;
      (G = L.onMouseOver) == null || G.call(L, I);
      const q = Number(I.currentTarget.getAttribute("data-index"));
      b(q);
    },
    Ue = (L) => (I) => {
      var G;
      (G = L.onMouseLeave) == null || G.call(L, I), b(-1);
    };
  return {
    active: v,
    axis: We,
    axisProps: Rb,
    dragging: C,
    focusedThumbIndex: ee,
    getHiddenInputProps: (L = {}) => {
      var I;
      const G = {
          onChange: ie(L || {}),
          onFocus: B(L || {}),
          onBlur: se(L || {}),
        },
        q = w({}, L, G);
      return w(
        {
          tabIndex: E,
          "aria-labelledby": t,
          "aria-orientation": p,
          "aria-valuemax": y(a),
          "aria-valuemin": y(s),
          name: u,
          type: "range",
          min: e.min,
          max: e.max,
          step: (I = e.step) != null ? I : void 0,
          disabled: r,
        },
        q,
        {
          style: w({}, O1, {
            direction: i ? "rtl" : "ltr",
            width: "100%",
            height: "100%",
          }),
        }
      );
    },
    getRootProps: qt,
    getThumbProps: (L = {}) => {
      const I = { onMouseOver: me(L || {}), onMouseLeave: Ue(L || {}) };
      return w({}, L, I);
    },
    marks: F,
    open: k,
    range: j,
    trackLeap: mt,
    trackOffset: Ye,
    values: W,
  };
}
const of = (e) => xi(e) && e !== "classes",
  w0 = xi,
  Mb = i0({ defaultTheme: Ls, rootShouldForwardProp: of }),
  Y = Mb,
  Lb = (e) => {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      (t / 100).toFixed(2)
    );
  },
  om = Lb;
function Ns() {
  return Os(Ls);
}
function zb(e) {
  return $e("MuiPaper", e);
}
ze("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const Nb = ["className", "component", "elevation", "square", "variant"],
  Ib = (e) => {
    const { square: t, elevation: n, variant: r, classes: o } = e,
      i = {
        root: [
          "root",
          r,
          !t && "rounded",
          r === "elevation" && `elevation${n}`,
        ],
      };
    return Le(i, zb, o);
  },
  Ab = Y("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        !n.square && t.rounded,
        n.variant === "elevation" && t[`elevation${n.elevation}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n;
    return w(
      {
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
      },
      !t.square && { borderRadius: e.shape.borderRadius },
      t.variant === "outlined" && {
        border: `1px solid ${(e.vars || e).palette.divider}`,
      },
      t.variant === "elevation" &&
        w(
          { boxShadow: (e.vars || e).shadows[t.elevation] },
          !e.vars &&
            e.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${ln(
                "#fff",
                om(t.elevation)
              )}, ${ln("#fff", om(t.elevation))})`,
            },
          e.vars && {
            backgroundImage:
              (n = e.vars.overlays) == null ? void 0 : n[t.elevation],
          }
        )
    );
  }),
  Db = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiPaper" }),
      {
        className: o,
        component: i = "div",
        elevation: l = 1,
        square: a = !1,
        variant: s = "elevation",
      } = r,
      u = Z(r, Nb),
      c = w({}, r, { component: i, elevation: l, square: a, variant: s }),
      f = Ib(c);
    return P(
      Ab,
      w({ as: i, ownerState: c, className: Q(f.root, o), ref: n }, u)
    );
  }),
  lf = Db;
function Fb(e) {
  return $e("MuiAppBar", e);
}
ze("MuiAppBar", [
  "root",
  "positionFixed",
  "positionAbsolute",
  "positionSticky",
  "positionStatic",
  "positionRelative",
  "colorDefault",
  "colorPrimary",
  "colorSecondary",
  "colorInherit",
  "colorTransparent",
]);
const Bb = ["className", "color", "enableColorOnDark", "position"],
  jb = (e) => {
    const { color: t, position: n, classes: r } = e,
      o = { root: ["root", `color${X(t)}`, `position${X(n)}`] };
    return Le(o, Fb, r);
  },
  zl = (e, t) => (e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t),
  Wb = Y(lf, {
    name: "MuiAppBar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[`position${X(n.position)}`], t[`color${X(n.color)}`]];
    },
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[900];
    return w(
      {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        boxSizing: "border-box",
        flexShrink: 0,
      },
      t.position === "fixed" && {
        position: "fixed",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
        "@media print": { position: "absolute" },
      },
      t.position === "absolute" && {
        position: "absolute",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "sticky" && {
        position: "sticky",
        zIndex: (e.vars || e).zIndex.appBar,
        top: 0,
        left: "auto",
        right: 0,
      },
      t.position === "static" && { position: "static" },
      t.position === "relative" && { position: "relative" },
      !e.vars &&
        w(
          {},
          t.color === "default" && {
            backgroundColor: n,
            color: e.palette.getContrastText(n),
          },
          t.color &&
            t.color !== "default" &&
            t.color !== "inherit" &&
            t.color !== "transparent" && {
              backgroundColor: e.palette[t.color].main,
              color: e.palette[t.color].contrastText,
            },
          t.color === "inherit" && { color: "inherit" },
          e.palette.mode === "dark" &&
            !t.enableColorOnDark && { backgroundColor: null, color: null },
          t.color === "transparent" &&
            w(
              { backgroundColor: "transparent", color: "inherit" },
              e.palette.mode === "dark" && { backgroundImage: "none" }
            )
        ),
      e.vars &&
        w(
          {},
          t.color === "default" && {
            "--AppBar-background": t.enableColorOnDark
              ? e.vars.palette.AppBar.defaultBg
              : zl(
                  e.vars.palette.AppBar.darkBg,
                  e.vars.palette.AppBar.defaultBg
                ),
            "--AppBar-color": t.enableColorOnDark
              ? e.vars.palette.text.primary
              : zl(
                  e.vars.palette.AppBar.darkColor,
                  e.vars.palette.text.primary
                ),
          },
          t.color &&
            !t.color.match(/^(default|inherit|transparent)$/) && {
              "--AppBar-background": t.enableColorOnDark
                ? e.vars.palette[t.color].main
                : zl(
                    e.vars.palette.AppBar.darkBg,
                    e.vars.palette[t.color].main
                  ),
              "--AppBar-color": t.enableColorOnDark
                ? e.vars.palette[t.color].contrastText
                : zl(
                    e.vars.palette.AppBar.darkColor,
                    e.vars.palette[t.color].contrastText
                  ),
            },
          {
            backgroundColor: "var(--AppBar-background)",
            color: t.color === "inherit" ? "inherit" : "var(--AppBar-color)",
          },
          t.color === "transparent" && {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "inherit",
          }
        )
    );
  }),
  Ub = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiAppBar" }),
      {
        className: o,
        color: i = "primary",
        enableColorOnDark: l = !1,
        position: a = "fixed",
      } = r,
      s = Z(r, Bb),
      u = w({}, r, { color: i, position: a, enableColorOnDark: l }),
      c = jb(u);
    return P(
      Wb,
      w(
        {
          square: !0,
          component: "header",
          ownerState: u,
          elevation: 4,
          className: Q(c.root, o, a === "fixed" && "mui-fixed"),
          ref: n,
        },
        s
      )
    );
  }),
  Vb = Ub;
function Hb(e) {
  return $e("MuiToolbar", e);
}
ze("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const Kb = ["className", "component", "disableGutters", "variant"],
  Gb = (e) => {
    const { classes: t, disableGutters: n, variant: r } = e;
    return Le({ root: ["root", !n && "gutters", r] }, Hb, t);
  },
  Qb = Y("div", {
    name: "MuiToolbar",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
    },
  })(
    ({ theme: e, ownerState: t }) =>
      w(
        { position: "relative", display: "flex", alignItems: "center" },
        !t.disableGutters && {
          paddingLeft: e.spacing(2),
          paddingRight: e.spacing(2),
          [e.breakpoints.up("sm")]: {
            paddingLeft: e.spacing(3),
            paddingRight: e.spacing(3),
          },
        },
        t.variant === "dense" && { minHeight: 48 }
      ),
    ({ theme: e, ownerState: t }) => t.variant === "regular" && e.mixins.toolbar
  ),
  Xb = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiToolbar" }),
      {
        className: o,
        component: i = "div",
        disableGutters: l = !1,
        variant: a = "regular",
      } = r,
      s = Z(r, Kb),
      u = w({}, r, { component: i, disableGutters: l, variant: a }),
      c = Gb(u);
    return P(
      Qb,
      w({ as: i, className: Q(c.root, o), ref: n, ownerState: u }, s)
    );
  }),
  Yb = Xb;
function qb(e) {
  return $e("MuiTypography", e);
}
ze("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const Zb = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  Jb = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: l,
      } = e,
      a = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${X(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Le(a, qb, l);
  },
  eC = Y("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${X(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    w(
      { margin: 0 },
      t.variant && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  im = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  tC = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  nC = (e) => tC[e] || e,
  rC = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiTypography" }),
      o = nC(r.color),
      i = Jv(w({}, r, { color: o })),
      {
        align: l = "inherit",
        className: a,
        component: s,
        gutterBottom: u = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: p = "body1",
        variantMapping: g = im,
      } = i,
      y = Z(i, Zb),
      h = w({}, i, {
        align: l,
        color: o,
        className: a,
        component: s,
        gutterBottom: u,
        noWrap: c,
        paragraph: f,
        variant: p,
        variantMapping: g,
      }),
      E = s || (f ? "p" : g[p] || im[p]) || "span",
      m = Jb(h);
    return P(
      eC,
      w({ as: E, ref: n, ownerState: h, className: Q(m.root, a) }, y)
    );
  }),
  Fe = rC;
var S0 = {};
(function (e) {
  const t =
      ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
    n = t + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
    r = "[" + t + "][" + n + "]*",
    o = new RegExp("^" + r + "$"),
    i = function (a, s) {
      const u = [];
      let c = s.exec(a);
      for (; c; ) {
        const f = [];
        f.startIndex = s.lastIndex - c[0].length;
        const p = c.length;
        for (let g = 0; g < p; g++) f.push(c[g]);
        u.push(f), (c = s.exec(a));
      }
      return u;
    },
    l = function (a) {
      const s = o.exec(a);
      return !(s === null || typeof s > "u");
    };
  (e.isExist = function (a) {
    return typeof a < "u";
  }),
    (e.isEmptyObject = function (a) {
      return Object.keys(a).length === 0;
    }),
    (e.merge = function (a, s, u) {
      if (s) {
        const c = Object.keys(s),
          f = c.length;
        for (let p = 0; p < f; p++)
          u === "strict" ? (a[c[p]] = [s[c[p]]]) : (a[c[p]] = s[c[p]]);
      }
    }),
    (e.getValue = function (a) {
      return e.isExist(a) ? a : "";
    }),
    (e.isName = l),
    (e.getAllMatches = i),
    (e.nameRegexp = r);
})(S0);
!Number.parseInt && window.parseInt && (Number.parseInt = window.parseInt);
!Number.parseFloat &&
  window.parseFloat &&
  (Number.parseFloat = window.parseFloat);
const oC = S0;
"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(
  /NAME/g,
  oC.nameRegexp
);
const iC = Yd(),
  lC = Uw({
    defaultTheme: iC,
    defaultClassName: "MuiBox-root",
    generateClassName: Nd.generate,
  }),
  bi = lC;
function Mc(e, t) {
  return (
    (Mc = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Mc(e, t)
  );
}
function k0(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Mc(e, t);
}
const lm = { disabled: !1 },
  Ma = on.createContext(null);
var aC = function (t) {
    return t.scrollTop;
  },
  si = "unmounted",
  vr = "exited",
  gr = "entering",
  Yr = "entered",
  Lc = "exiting",
  Bn = (function (e) {
    k0(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = o,
        a = l && !l.isMounting ? r.enter : r.appear,
        s;
      return (
        (i.appearStatus = null),
        r.in
          ? a
            ? ((s = vr), (i.appearStatus = gr))
            : (s = Yr)
          : r.unmountOnExit || r.mountOnEnter
          ? (s = si)
          : (s = vr),
        (i.state = { status: s }),
        (i.nextCallback = null),
        i
      );
    }
    t.getDerivedStateFromProps = function (o, i) {
      var l = o.in;
      return l && i.status === si ? { status: vr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (o) {
        var i = null;
        if (o !== this.props) {
          var l = this.state.status;
          this.props.in
            ? l !== gr && l !== Yr && (i = gr)
            : (l === gr || l === Yr) && (i = Lc);
        }
        this.updateStatus(!1, i);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var o = this.props.timeout,
          i,
          l,
          a;
        return (
          (i = l = a = o),
          o != null &&
            typeof o != "number" &&
            ((i = o.exit),
            (l = o.enter),
            (a = o.appear !== void 0 ? o.appear : l)),
          { exit: i, enter: l, appear: a }
        );
      }),
      (n.updateStatus = function (o, i) {
        if ((o === void 0 && (o = !1), i !== null))
          if ((this.cancelNextCallback(), i === gr)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var l = this.props.nodeRef
                ? this.props.nodeRef.current
                : Tl.findDOMNode(this);
              l && aC(l);
            }
            this.performEnter(o);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === vr &&
            this.setState({ status: si });
      }),
      (n.performEnter = function (o) {
        var i = this,
          l = this.props.enter,
          a = this.context ? this.context.isMounting : o,
          s = this.props.nodeRef ? [a] : [Tl.findDOMNode(this), a],
          u = s[0],
          c = s[1],
          f = this.getTimeouts(),
          p = a ? f.appear : f.enter;
        if ((!o && !l) || lm.disabled) {
          this.safeSetState({ status: Yr }, function () {
            i.props.onEntered(u);
          });
          return;
        }
        this.props.onEnter(u, c),
          this.safeSetState({ status: gr }, function () {
            i.props.onEntering(u, c),
              i.onTransitionEnd(p, function () {
                i.safeSetState({ status: Yr }, function () {
                  i.props.onEntered(u, c);
                });
              });
          });
      }),
      (n.performExit = function () {
        var o = this,
          i = this.props.exit,
          l = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Tl.findDOMNode(this);
        if (!i || lm.disabled) {
          this.safeSetState({ status: vr }, function () {
            o.props.onExited(a);
          });
          return;
        }
        this.props.onExit(a),
          this.safeSetState({ status: Lc }, function () {
            o.props.onExiting(a),
              o.onTransitionEnd(l.exit, function () {
                o.safeSetState({ status: vr }, function () {
                  o.props.onExited(a);
                });
              });
          });
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (o, i) {
        (i = this.setNextCallback(i)), this.setState(o, i);
      }),
      (n.setNextCallback = function (o) {
        var i = this,
          l = !0;
        return (
          (this.nextCallback = function (a) {
            l && ((l = !1), (i.nextCallback = null), o(a));
          }),
          (this.nextCallback.cancel = function () {
            l = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (o, i) {
        this.setNextCallback(i);
        var l = this.props.nodeRef
            ? this.props.nodeRef.current
            : Tl.findDOMNode(this),
          a = o == null && !this.props.addEndListener;
        if (!l || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef
              ? [this.nextCallback]
              : [l, this.nextCallback],
            u = s[0],
            c = s[1];
          this.props.addEndListener(u, c);
        }
        o != null && setTimeout(this.nextCallback, o);
      }),
      (n.render = function () {
        var o = this.state.status;
        if (o === si) return null;
        var i = this.props,
          l = i.children;
        i.in,
          i.mountOnEnter,
          i.unmountOnExit,
          i.appear,
          i.enter,
          i.exit,
          i.timeout,
          i.addEndListener,
          i.onEnter,
          i.onEntering,
          i.onEntered,
          i.onExit,
          i.onExiting,
          i.onExited,
          i.nodeRef;
        var a = Z(i, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return on.createElement(
          Ma.Provider,
          { value: null },
          typeof l == "function"
            ? l(o, a)
            : on.cloneElement(on.Children.only(l), a)
        );
      }),
      t
    );
  })(on.Component);
Bn.contextType = Ma;
Bn.propTypes = {};
function Xr() {}
Bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Xr,
  onEntering: Xr,
  onEntered: Xr,
  onExit: Xr,
  onExiting: Xr,
  onExited: Xr,
};
Bn.UNMOUNTED = si;
Bn.EXITED = vr;
Bn.ENTERING = gr;
Bn.ENTERED = Yr;
Bn.EXITING = Lc;
const b0 = Bn;
function sC(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function af(e, t) {
  var n = function (i) {
      return t && S.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      S.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function uC(e, t) {
  (e = e || {}), (t = t || {});
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var l,
    a = {};
  for (var s in t) {
    if (r[s])
      for (l = 0; l < r[s].length; l++) {
        var u = r[s][l];
        a[r[s][l]] = n(u);
      }
    a[s] = n(s);
  }
  for (l = 0; l < o.length; l++) a[o[l]] = n(o[l]);
  return a;
}
function kr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function cC(e, t) {
  return af(e.children, function (n) {
    return S.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: kr(n, "appear", e),
      enter: kr(n, "enter", e),
      exit: kr(n, "exit", e),
    });
  });
}
function dC(e, t, n) {
  var r = af(e.children),
    o = uC(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (S.isValidElement(l)) {
        var a = i in t,
          s = i in r,
          u = t[i],
          c = S.isValidElement(u) && !u.props.in;
        s && (!a || c)
          ? (o[i] = S.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: kr(l, "exit", e),
              enter: kr(l, "enter", e),
            }))
          : !s && a && !c
          ? (o[i] = S.cloneElement(l, { in: !1 }))
          : s &&
            a &&
            S.isValidElement(u) &&
            (o[i] = S.cloneElement(l, {
              onExited: n.bind(null, l),
              in: u.props.in,
              exit: kr(l, "exit", e),
              enter: kr(l, "enter", e),
            }));
      }
    }),
    o
  );
}
var fC =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  pC = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  sf = (function (e) {
    k0(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(sC(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: l,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var l = i.children,
          a = i.handleExited,
          s = i.firstRender;
        return { children: s ? cC(o, a) : dC(o, l, a), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var l = af(this.props.children);
        o.key in l ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (a) {
              var s = w({}, a.children);
              return delete s[o.key], { children: s };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          l = o.childFactory,
          a = Z(o, ["component", "childFactory"]),
          s = this.state.contextValue,
          u = fC(this.state.children).map(l);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          i === null
            ? on.createElement(Ma.Provider, { value: s }, u)
            : on.createElement(
                Ma.Provider,
                { value: s },
                on.createElement(i, a, u)
              )
        );
      }),
      t
    );
  })(on.Component);
sf.propTypes = {};
sf.defaultProps = pC;
const mC = sf;
function hC(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: l,
      in: a,
      onExited: s,
      timeout: u,
    } = e,
    [c, f] = S.useState(!1),
    p = Q(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    g = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    y = Q(n.child, c && n.childLeaving, r && n.childPulsate);
  return (
    !a && !c && f(!0),
    S.useEffect(() => {
      if (!a && s != null) {
        const h = setTimeout(s, u);
        return () => {
          clearTimeout(h);
        };
      }
    }, [s, a, u]),
    P("span", { className: p, style: g, children: P("span", { className: y }) })
  );
}
const vC = ze("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Ft = vC,
  gC = ["center", "classes", "className"];
let Is = (e) => e,
  am,
  sm,
  um,
  cm;
const zc = 550,
  yC = 80,
  xC = Vd(
    am ||
      (am = Is`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  wC = Vd(
    sm ||
      (sm = Is`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  SC = Vd(
    um ||
      (um = Is`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  kC = Y("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  bC = Y(hC, { name: "MuiTouchRipple", slot: "Ripple" })(
    cm ||
      (cm = Is`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    Ft.rippleVisible,
    xC,
    zc,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ft.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Ft.child,
    Ft.childLeaving,
    wC,
    zc,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ft.childPulsate,
    SC,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  CC = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: l } = r,
      a = Z(r, gC),
      [s, u] = S.useState([]),
      c = S.useRef(0),
      f = S.useRef(null);
    S.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [s]);
    const p = S.useRef(!1),
      g = S.useRef(null),
      y = S.useRef(null),
      h = S.useRef(null);
    S.useEffect(
      () => () => {
        clearTimeout(g.current);
      },
      []
    );
    const E = S.useCallback(
        (x) => {
          const {
            pulsate: k,
            rippleX: b,
            rippleY: C,
            rippleSize: $,
            cb: _,
          } = x;
          u((T) => [
            ...T,
            P(
              bC,
              {
                classes: {
                  ripple: Q(i.ripple, Ft.ripple),
                  rippleVisible: Q(i.rippleVisible, Ft.rippleVisible),
                  ripplePulsate: Q(i.ripplePulsate, Ft.ripplePulsate),
                  child: Q(i.child, Ft.child),
                  childLeaving: Q(i.childLeaving, Ft.childLeaving),
                  childPulsate: Q(i.childPulsate, Ft.childPulsate),
                },
                timeout: zc,
                pulsate: k,
                rippleX: b,
                rippleY: C,
                rippleSize: $,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (f.current = _);
        },
        [i]
      ),
      m = S.useCallback(
        (x = {}, k = {}, b = () => {}) => {
          const {
            pulsate: C = !1,
            center: $ = o || k.pulsate,
            fakeElement: _ = !1,
          } = k;
          if ((x == null ? void 0 : x.type) === "mousedown" && p.current) {
            p.current = !1;
            return;
          }
          (x == null ? void 0 : x.type) === "touchstart" && (p.current = !0);
          const T = _ ? null : h.current,
            z = T
              ? T.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let V, j, W;
          if (
            $ ||
            x === void 0 ||
            (x.clientX === 0 && x.clientY === 0) ||
            (!x.clientX && !x.touches)
          )
            (V = Math.round(z.width / 2)), (j = Math.round(z.height / 2));
          else {
            const { clientX: F, clientY: U } =
              x.touches && x.touches.length > 0 ? x.touches[0] : x;
            (V = Math.round(F - z.left)), (j = Math.round(U - z.top));
          }
          if ($)
            (W = Math.sqrt((2 * z.width ** 2 + z.height ** 2) / 3)),
              W % 2 === 0 && (W += 1);
          else {
            const F =
                Math.max(Math.abs((T ? T.clientWidth : 0) - V), V) * 2 + 2,
              U = Math.max(Math.abs((T ? T.clientHeight : 0) - j), j) * 2 + 2;
            W = Math.sqrt(F ** 2 + U ** 2);
          }
          x != null && x.touches
            ? y.current === null &&
              ((y.current = () => {
                E({ pulsate: C, rippleX: V, rippleY: j, rippleSize: W, cb: b });
              }),
              (g.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, yC)))
            : E({ pulsate: C, rippleX: V, rippleY: j, rippleSize: W, cb: b });
        },
        [o, E]
      ),
      d = S.useCallback(() => {
        m({}, { pulsate: !0 });
      }, [m]),
      v = S.useCallback((x, k) => {
        if (
          (clearTimeout(g.current),
          (x == null ? void 0 : x.type) === "touchend" && y.current)
        ) {
          y.current(),
            (y.current = null),
            (g.current = setTimeout(() => {
              v(x, k);
            }));
          return;
        }
        (y.current = null),
          u((b) => (b.length > 0 ? b.slice(1) : b)),
          (f.current = k);
      }, []);
    return (
      S.useImperativeHandle(n, () => ({ pulsate: d, start: m, stop: v }), [
        d,
        m,
        v,
      ]),
      P(
        kC,
        w({ className: Q(Ft.root, i.root, l), ref: h }, a, {
          children: P(mC, { component: null, exit: !0, children: s }),
        })
      )
    );
  }),
  EC = CC;
function PC(e) {
  return $e("MuiButtonBase", e);
}
const $C = ze("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  TC = $C,
  RC = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  _C = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      l = Le({ root: ["root", t && "disabled", n && "focusVisible"] }, PC, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  OC = Y("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${TC.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  MC = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: a,
        component: s = "button",
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: f = !1,
        focusRipple: p = !1,
        LinkComponent: g = "a",
        onBlur: y,
        onClick: h,
        onContextMenu: E,
        onDragLeave: m,
        onFocus: d,
        onFocusVisible: v,
        onKeyDown: x,
        onKeyUp: k,
        onMouseDown: b,
        onMouseLeave: C,
        onMouseUp: $,
        onTouchEnd: _,
        onTouchMove: T,
        onTouchStart: z,
        tabIndex: V = 0,
        TouchRippleProps: j,
        touchRippleRef: W,
        type: F,
      } = r,
      U = Z(r, RC),
      H = S.useRef(null),
      R = S.useRef(null),
      M = Gt(R, W),
      { isFocusVisibleRef: N, onFocus: ee, onBlur: te, ref: ue } = ss(),
      [ae, Se] = S.useState(!1);
    u && ae && Se(!1),
      S.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            Se(!0), H.current.focus();
          },
        }),
        []
      );
    const [B, se] = S.useState(!1);
    S.useEffect(() => {
      se(!0);
    }, []);
    const ie = B && !c && !u;
    S.useEffect(() => {
      ae && p && !c && B && R.current.pulsate();
    }, [c, p, ae, B]);
    function oe(D, he, Ie = f) {
      return _n((J) => (he && he(J), !Ie && R.current && R.current[D](J), !0));
    }
    const We = oe("start", b),
      Ne = oe("stop", E),
      Ct = oe("stop", m),
      Xe = oe("stop", $),
      xe = oe("stop", (D) => {
        ae && D.preventDefault(), C && C(D);
      }),
      de = oe("start", z),
      Et = oe("stop", _),
      Ye = oe("stop", T),
      mt = oe(
        "stop",
        (D) => {
          te(D), N.current === !1 && Se(!1), y && y(D);
        },
        !1
      ),
      qt = _n((D) => {
        H.current || (H.current = D.currentTarget),
          ee(D),
          N.current === !0 && (Se(!0), v && v(D)),
          d && d(D);
      }),
      me = () => {
        const D = H.current;
        return s && s !== "button" && !(D.tagName === "A" && D.href);
      },
      Ue = S.useRef(!1),
      Zt = _n((D) => {
        p &&
          !Ue.current &&
          ae &&
          R.current &&
          D.key === " " &&
          ((Ue.current = !0),
          R.current.stop(D, () => {
            R.current.start(D);
          })),
          D.target === D.currentTarget &&
            me() &&
            D.key === " " &&
            D.preventDefault(),
          x && x(D),
          D.target === D.currentTarget &&
            me() &&
            D.key === "Enter" &&
            !u &&
            (D.preventDefault(), h && h(D));
      }),
      Dt = _n((D) => {
        p &&
          D.key === " " &&
          R.current &&
          ae &&
          !D.defaultPrevented &&
          ((Ue.current = !1),
          R.current.stop(D, () => {
            R.current.pulsate(D);
          })),
          k && k(D),
          h &&
            D.target === D.currentTarget &&
            me() &&
            D.key === " " &&
            !D.defaultPrevented &&
            h(D);
      });
    let L = s;
    L === "button" && (U.href || U.to) && (L = g);
    const I = {};
    L === "button"
      ? ((I.type = F === void 0 ? "button" : F), (I.disabled = u))
      : (!U.href && !U.to && (I.role = "button"),
        u && (I["aria-disabled"] = u));
    const G = Gt(n, ue, H),
      q = w({}, r, {
        centerRipple: i,
        component: s,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: p,
        tabIndex: V,
        focusVisible: ae,
      }),
      Ce = _C(q);
    return K(
      OC,
      w(
        {
          as: L,
          className: Q(Ce.root, a),
          ownerState: q,
          onBlur: mt,
          onClick: h,
          onContextMenu: Ne,
          onFocus: qt,
          onKeyDown: Zt,
          onKeyUp: Dt,
          onMouseDown: We,
          onMouseLeave: xe,
          onMouseUp: Xe,
          onDragLeave: Ct,
          onTouchEnd: Et,
          onTouchMove: Ye,
          onTouchStart: de,
          ref: G,
          tabIndex: u ? -1 : V,
          type: F,
        },
        I,
        U,
        { children: [l, ie ? P(EC, w({ ref: M, center: i }, j)) : null] }
      )
    );
  }),
  uf = MC;
function LC(e) {
  return $e("MuiButton", e);
}
const zC = ze("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Nl = zC,
  NC = S.createContext({}),
  IC = NC,
  AC = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  DC = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: l,
      } = e,
      a = {
        root: [
          "root",
          i,
          `${i}${X(t)}`,
          `size${X(o)}`,
          `${i}Size${X(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${X(o)}`],
        endIcon: ["endIcon", `iconSize${X(o)}`],
      },
      s = Le(a, LC, l);
    return w({}, l, s);
  },
  C0 = (e) =>
    w(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  FC = Y(uf, {
    shouldForwardProp: (e) => of(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${X(n.color)}`],
        t[`size${X(n.size)}`],
        t[`${n.variant}Size${X(n.size)}`],
        n.color === "inherit" && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      return w(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": w(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : ln(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ln(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : ln(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: (e.vars || e).palette.grey.A100,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": w(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Nl.focusVisible}`]: w(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Nl.disabled}`]: w(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${ln(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Nl.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Nl.disabled}`]: { boxShadow: "none" },
      }
  ),
  BC = Y("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${X(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    w(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      C0(e)
    )
  ),
  jC = Y("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${X(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    w(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      C0(e)
    )
  ),
  WC = S.forwardRef(function (t, n) {
    const r = S.useContext(IC),
      o = zd(r, t),
      i = Te({ props: o, name: "MuiButton" }),
      {
        children: l,
        color: a = "primary",
        component: s = "button",
        className: u,
        disabled: c = !1,
        disableElevation: f = !1,
        disableFocusRipple: p = !1,
        endIcon: g,
        focusVisibleClassName: y,
        fullWidth: h = !1,
        size: E = "medium",
        startIcon: m,
        type: d,
        variant: v = "text",
      } = i,
      x = Z(i, AC),
      k = w({}, i, {
        color: a,
        component: s,
        disabled: c,
        disableElevation: f,
        disableFocusRipple: p,
        fullWidth: h,
        size: E,
        type: d,
        variant: v,
      }),
      b = DC(k),
      C = m && P(BC, { className: b.startIcon, ownerState: k, children: m }),
      $ = g && P(jC, { className: b.endIcon, ownerState: k, children: g });
    return K(
      FC,
      w(
        {
          ownerState: k,
          className: Q(r.className, b.root, u),
          component: s,
          disabled: c,
          focusRipple: !p,
          focusVisibleClassName: Q(b.focusVisible, y),
          ref: n,
          type: d,
        },
        x,
        { classes: b, children: [C, l, $] }
      )
    );
  }),
  gu = WC;
function UC(e) {
  return $e("MuiStepper", e);
}
ze("MuiStepper", ["root", "horizontal", "vertical", "alternativeLabel"]);
const VC = S.createContext({}),
  As = VC,
  HC = S.createContext({}),
  cf = HC;
function KC(e) {
  return $e("MuiStepConnector", e);
}
ze("MuiStepConnector", [
  "root",
  "horizontal",
  "vertical",
  "alternativeLabel",
  "active",
  "completed",
  "disabled",
  "line",
  "lineHorizontal",
  "lineVertical",
]);
const GC = ["className"],
  QC = (e) => {
    const {
        classes: t,
        orientation: n,
        alternativeLabel: r,
        active: o,
        completed: i,
        disabled: l,
      } = e,
      a = {
        root: [
          "root",
          n,
          r && "alternativeLabel",
          o && "active",
          i && "completed",
          l && "disabled",
        ],
        line: ["line", `line${X(n)}`],
      };
    return Le(a, KC, t);
  },
  XC = Y("div", {
    name: "MuiStepConnector",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.alternativeLabel && t.alternativeLabel,
        n.completed && t.completed,
      ];
    },
  })(({ ownerState: e }) =>
    w(
      { flex: "1 1 auto" },
      e.orientation === "vertical" && { marginLeft: 12 },
      e.alternativeLabel && {
        position: "absolute",
        top: 8 + 4,
        left: "calc(-50% + 20px)",
        right: "calc(50% + 20px)",
      }
    )
  ),
  YC = Y("span", {
    name: "MuiStepConnector",
    slot: "Line",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.line, t[`line${X(n.orientation)}`]];
    },
  })(({ ownerState: e, theme: t }) => {
    const n =
      t.palette.mode === "light" ? t.palette.grey[400] : t.palette.grey[600];
    return w(
      {
        display: "block",
        borderColor: t.vars ? t.vars.palette.StepConnector.border : n,
      },
      e.orientation === "horizontal" && {
        borderTopStyle: "solid",
        borderTopWidth: 1,
      },
      e.orientation === "vertical" && {
        borderLeftStyle: "solid",
        borderLeftWidth: 1,
        minHeight: 24,
      }
    );
  }),
  qC = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiStepConnector" }),
      { className: o } = r,
      i = Z(r, GC),
      { alternativeLabel: l, orientation: a = "horizontal" } = S.useContext(As),
      { active: s, disabled: u, completed: c } = S.useContext(cf),
      f = w({}, r, {
        alternativeLabel: l,
        orientation: a,
        active: s,
        completed: c,
        disabled: u,
      }),
      p = QC(f);
    return P(
      XC,
      w({ className: Q(p.root, o), ref: n, ownerState: f }, i, {
        children: P(YC, { className: p.line, ownerState: f }),
      })
    );
  }),
  ZC = qC,
  JC = [
    "activeStep",
    "alternativeLabel",
    "children",
    "className",
    "component",
    "connector",
    "nonLinear",
    "orientation",
  ],
  e2 = (e) => {
    const { orientation: t, alternativeLabel: n, classes: r } = e;
    return Le({ root: ["root", t, n && "alternativeLabel"] }, UC, r);
  },
  t2 = Y("div", {
    name: "MuiStepper",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.alternativeLabel && t.alternativeLabel,
      ];
    },
  })(({ ownerState: e }) =>
    w(
      { display: "flex" },
      e.orientation === "horizontal" && {
        flexDirection: "row",
        alignItems: "center",
      },
      e.orientation === "vertical" && { flexDirection: "column" },
      e.alternativeLabel && { alignItems: "flex-start" }
    )
  ),
  n2 = P(ZC, {}),
  r2 = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiStepper" }),
      {
        activeStep: o = 0,
        alternativeLabel: i = !1,
        children: l,
        className: a,
        component: s = "div",
        connector: u = n2,
        nonLinear: c = !1,
        orientation: f = "horizontal",
      } = r,
      p = Z(r, JC),
      g = w({}, r, { alternativeLabel: i, orientation: f, component: s }),
      y = e2(g),
      h = S.Children.toArray(l).filter(Boolean),
      E = h.map((d, v) =>
        S.cloneElement(d, w({ index: v, last: v + 1 === h.length }, d.props))
      ),
      m = S.useMemo(
        () => ({
          activeStep: o,
          alternativeLabel: i,
          connector: u,
          nonLinear: c,
          orientation: f,
        }),
        [o, i, u, c, f]
      );
    return P(As.Provider, {
      value: m,
      children: P(
        t2,
        w({ as: s, ownerState: g, className: Q(y.root, a), ref: n }, p, {
          children: E,
        })
      ),
    });
  }),
  o2 = r2;
function i2(e) {
  return $e("MuiStep", e);
}
ze("MuiStep", [
  "root",
  "horizontal",
  "vertical",
  "alternativeLabel",
  "completed",
]);
const l2 = [
    "active",
    "children",
    "className",
    "component",
    "completed",
    "disabled",
    "expanded",
    "index",
    "last",
  ],
  a2 = (e) => {
    const { classes: t, orientation: n, alternativeLabel: r, completed: o } = e;
    return Le(
      { root: ["root", n, r && "alternativeLabel", o && "completed"] },
      i2,
      t
    );
  },
  s2 = Y("div", {
    name: "MuiStep",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.alternativeLabel && t.alternativeLabel,
        n.completed && t.completed,
      ];
    },
  })(({ ownerState: e }) =>
    w(
      {},
      e.orientation === "horizontal" && { paddingLeft: 8, paddingRight: 8 },
      e.alternativeLabel && { flex: 1, position: "relative" }
    )
  ),
  u2 = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiStep" }),
      {
        active: o,
        children: i,
        className: l,
        component: a = "div",
        completed: s,
        disabled: u,
        expanded: c = !1,
        index: f,
        last: p,
      } = r,
      g = Z(r, l2),
      {
        activeStep: y,
        connector: h,
        alternativeLabel: E,
        orientation: m,
        nonLinear: d,
      } = S.useContext(As);
    let [v = !1, x = !1, k = !1] = [o, s, u];
    y === f
      ? (v = o !== void 0 ? o : !0)
      : !d && y > f
      ? (x = s !== void 0 ? s : !0)
      : !d && y < f && (k = u !== void 0 ? u : !0);
    const b = S.useMemo(
        () => ({
          index: f,
          last: p,
          expanded: c,
          icon: f + 1,
          active: v,
          completed: x,
          disabled: k,
        }),
        [f, p, c, v, x, k]
      ),
      C = w({}, r, {
        active: v,
        orientation: m,
        alternativeLabel: E,
        completed: x,
        disabled: k,
        expanded: c,
        component: a,
      }),
      $ = a2(C),
      _ = K(
        s2,
        w({ as: a, className: Q($.root, l), ref: n, ownerState: C }, g, {
          children: [h && E && f !== 0 ? h : null, i],
        })
      );
    return P(cf.Provider, {
      value: b,
      children: h && !E && f !== 0 ? K(S.Fragment, { children: [h, _] }) : _,
    });
  }),
  c2 = u2;
function d2(e) {
  return $e("MuiSvgIcon", e);
}
ze("MuiSvgIcon", [
  "root",
  "colorPrimary",
  "colorSecondary",
  "colorAction",
  "colorError",
  "colorDisabled",
  "fontSizeInherit",
  "fontSizeSmall",
  "fontSizeMedium",
  "fontSizeLarge",
]);
const f2 = [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "htmlColor",
    "inheritViewBox",
    "titleAccess",
    "viewBox",
  ],
  p2 = (e) => {
    const { color: t, fontSize: n, classes: r } = e,
      o = {
        root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(n)}`],
      };
    return Le(o, d2, r);
  },
  m2 = Y("svg", {
    name: "MuiSvgIcon",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.color !== "inherit" && t[`color${X(n.color)}`],
        t[`fontSize${X(n.fontSize)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) => {
    var n, r, o, i, l, a, s, u, c, f, p, g, y, h, E, m, d;
    return {
      userSelect: "none",
      width: "1em",
      height: "1em",
      display: "inline-block",
      fill: "currentColor",
      flexShrink: 0,
      transition:
        (n = e.transitions) == null || (r = n.create) == null
          ? void 0
          : r.call(n, "fill", {
              duration:
                (o = e.transitions) == null || (i = o.duration) == null
                  ? void 0
                  : i.shorter,
            }),
      fontSize: {
        inherit: "inherit",
        small:
          ((l = e.typography) == null || (a = l.pxToRem) == null
            ? void 0
            : a.call(l, 20)) || "1.25rem",
        medium:
          ((s = e.typography) == null || (u = s.pxToRem) == null
            ? void 0
            : u.call(s, 24)) || "1.5rem",
        large:
          ((c = e.typography) == null || (f = c.pxToRem) == null
            ? void 0
            : f.call(c, 35)) || "2.1875rem",
      }[t.fontSize],
      color:
        (p =
          (g = (e.vars || e).palette) == null || (y = g[t.color]) == null
            ? void 0
            : y.main) != null
          ? p
          : {
              action:
                (h = (e.vars || e).palette) == null || (E = h.action) == null
                  ? void 0
                  : E.active,
              disabled:
                (m = (e.vars || e).palette) == null || (d = m.action) == null
                  ? void 0
                  : d.disabled,
              inherit: void 0,
            }[t.color],
    };
  }),
  E0 = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiSvgIcon" }),
      {
        children: o,
        className: i,
        color: l = "inherit",
        component: a = "svg",
        fontSize: s = "medium",
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: f,
        viewBox: p = "0 0 24 24",
      } = r,
      g = Z(r, f2),
      y = w({}, r, {
        color: l,
        component: a,
        fontSize: s,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: p,
      }),
      h = {};
    c || (h.viewBox = p);
    const E = p2(y);
    return K(
      m2,
      w(
        {
          as: a,
          className: Q(E.root, i),
          focusable: "false",
          color: u,
          "aria-hidden": f ? void 0 : !0,
          role: f ? "img" : void 0,
          ref: n,
        },
        h,
        g,
        { ownerState: y, children: [o, f ? P("title", { children: f }) : null] }
      )
    );
  });
E0.muiName = "SvgIcon";
const Nc = E0;
function Io(e, t) {
  function n(r, o) {
    return P(Nc, w({ "data-testid": `${t}Icon`, ref: o }, r, { children: e }));
  }
  return (n.muiName = Nc.muiName), S.memo(S.forwardRef(n));
}
const h2 = Io(
    P("path", {
      d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z",
    }),
    "CheckCircle"
  ),
  v2 = Io(
    P("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }),
    "Warning"
  );
function g2(e) {
  return $e("MuiStepIcon", e);
}
const y2 = ze("MuiStepIcon", ["root", "active", "completed", "error", "text"]),
  yu = y2;
var dm;
const x2 = ["active", "className", "completed", "error", "icon"],
  w2 = (e) => {
    const { classes: t, active: n, completed: r, error: o } = e;
    return Le(
      {
        root: ["root", n && "active", r && "completed", o && "error"],
        text: ["text"],
      },
      g2,
      t
    );
  },
  xu = Y(Nc, {
    name: "MuiStepIcon",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({
    display: "block",
    transition: e.transitions.create("color", {
      duration: e.transitions.duration.shortest,
    }),
    color: (e.vars || e).palette.text.disabled,
    [`&.${yu.completed}`]: { color: (e.vars || e).palette.primary.main },
    [`&.${yu.active}`]: { color: (e.vars || e).palette.primary.main },
    [`&.${yu.error}`]: { color: (e.vars || e).palette.error.main },
  })),
  S2 = Y("text", {
    name: "MuiStepIcon",
    slot: "Text",
    overridesResolver: (e, t) => t.text,
  })(({ theme: e }) => ({
    fill: (e.vars || e).palette.primary.contrastText,
    fontSize: e.typography.caption.fontSize,
    fontFamily: e.typography.fontFamily,
  })),
  k2 = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiStepIcon" }),
      {
        active: o = !1,
        className: i,
        completed: l = !1,
        error: a = !1,
        icon: s,
      } = r,
      u = Z(r, x2),
      c = w({}, r, { active: o, completed: l, error: a }),
      f = w2(c);
    if (typeof s == "number" || typeof s == "string") {
      const p = Q(i, f.root);
      return a
        ? P(xu, w({ as: v2, className: p, ref: n, ownerState: c }, u))
        : l
        ? P(xu, w({ as: h2, className: p, ref: n, ownerState: c }, u))
        : K(
            xu,
            w({ className: p, ref: n, ownerState: c }, u, {
              children: [
                dm || (dm = P("circle", { cx: "12", cy: "12", r: "12" })),
                P(S2, {
                  className: f.text,
                  x: "12",
                  y: "12",
                  textAnchor: "middle",
                  dominantBaseline: "central",
                  ownerState: c,
                  children: s,
                }),
              ],
            })
          );
    }
    return s;
  }),
  b2 = k2;
function C2(e) {
  return $e("MuiStepLabel", e);
}
const E2 = ze("MuiStepLabel", [
    "root",
    "horizontal",
    "vertical",
    "label",
    "active",
    "completed",
    "error",
    "disabled",
    "iconContainer",
    "alternativeLabel",
    "labelContainer",
  ]),
  Qn = E2,
  P2 = [
    "children",
    "className",
    "componentsProps",
    "error",
    "icon",
    "optional",
    "slotProps",
    "StepIconComponent",
    "StepIconProps",
  ],
  $2 = (e) => {
    const {
      classes: t,
      orientation: n,
      active: r,
      completed: o,
      error: i,
      disabled: l,
      alternativeLabel: a,
    } = e;
    return Le(
      {
        root: [
          "root",
          n,
          i && "error",
          l && "disabled",
          a && "alternativeLabel",
        ],
        label: [
          "label",
          r && "active",
          o && "completed",
          i && "error",
          l && "disabled",
          a && "alternativeLabel",
        ],
        iconContainer: [
          "iconContainer",
          r && "active",
          o && "completed",
          i && "error",
          l && "disabled",
          a && "alternativeLabel",
        ],
        labelContainer: ["labelContainer", a && "alternativeLabel"],
      },
      C2,
      t
    );
  },
  T2 = Y("span", {
    name: "MuiStepLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.root, t[n.orientation]];
    },
  })(({ ownerState: e }) =>
    w(
      {
        display: "flex",
        alignItems: "center",
        [`&.${Qn.alternativeLabel}`]: { flexDirection: "column" },
        [`&.${Qn.disabled}`]: { cursor: "default" },
      },
      e.orientation === "vertical" && { textAlign: "left", padding: "8px 0" }
    )
  ),
  R2 = Y("span", {
    name: "MuiStepLabel",
    slot: "Label",
    overridesResolver: (e, t) => t.label,
  })(({ theme: e }) =>
    w({}, e.typography.body2, {
      display: "block",
      transition: e.transitions.create("color", {
        duration: e.transitions.duration.shortest,
      }),
      [`&.${Qn.active}`]: {
        color: (e.vars || e).palette.text.primary,
        fontWeight: 500,
      },
      [`&.${Qn.completed}`]: {
        color: (e.vars || e).palette.text.primary,
        fontWeight: 500,
      },
      [`&.${Qn.alternativeLabel}`]: { marginTop: 16 },
      [`&.${Qn.error}`]: { color: (e.vars || e).palette.error.main },
    })
  ),
  _2 = Y("span", {
    name: "MuiStepLabel",
    slot: "IconContainer",
    overridesResolver: (e, t) => t.iconContainer,
  })(() => ({
    flexShrink: 0,
    display: "flex",
    paddingRight: 8,
    [`&.${Qn.alternativeLabel}`]: { paddingRight: 0 },
  })),
  O2 = Y("span", {
    name: "MuiStepLabel",
    slot: "LabelContainer",
    overridesResolver: (e, t) => t.labelContainer,
  })(({ theme: e }) => ({
    width: "100%",
    color: (e.vars || e).palette.text.secondary,
    [`&.${Qn.alternativeLabel}`]: { textAlign: "center" },
  })),
  P0 = S.forwardRef(function (t, n) {
    var r;
    const o = Te({ props: t, name: "MuiStepLabel" }),
      {
        children: i,
        className: l,
        componentsProps: a = {},
        error: s = !1,
        icon: u,
        optional: c,
        slotProps: f = {},
        StepIconComponent: p,
        StepIconProps: g,
      } = o,
      y = Z(o, P2),
      { alternativeLabel: h, orientation: E } = S.useContext(As),
      { active: m, disabled: d, completed: v, icon: x } = S.useContext(cf),
      k = u || x;
    let b = p;
    k && !b && (b = b2);
    const C = w({}, o, {
        active: m,
        alternativeLabel: h,
        completed: v,
        disabled: d,
        error: s,
        orientation: E,
      }),
      $ = $2(C),
      _ = (r = f.label) != null ? r : a.label;
    return K(
      T2,
      w({ className: Q($.root, l), ref: n, ownerState: C }, y, {
        children: [
          k || b
            ? P(_2, {
                className: $.iconContainer,
                ownerState: C,
                children: P(
                  b,
                  w({ completed: v, active: m, error: s, icon: k }, g)
                ),
              })
            : null,
          K(O2, {
            className: $.labelContainer,
            ownerState: C,
            children: [
              i
                ? P(
                    R2,
                    w({ ownerState: C }, _, {
                      className: Q($.label, _ == null ? void 0 : _.className),
                      children: i,
                    })
                  )
                : null,
              c,
            ],
          }),
        ],
      })
    );
  });
P0.muiName = "StepLabel";
const M2 = P0,
  L2 = pS({
    createStyledComponent: Y("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${X(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => Te({ props: e, name: "MuiContainer" }),
  }),
  z2 = L2,
  N2 = (e) => e.scrollTop;
function La(e, t) {
  var n, r;
  const { timeout: o, easing: i, style: l = {} } = e;
  return {
    duration:
      (n = l.transitionDuration) != null
        ? n
        : typeof o == "number"
        ? o
        : o[t.mode] || 0,
    easing:
      (r = l.transitionTimingFunction) != null
        ? r
        : typeof i == "object"
        ? i[t.mode]
        : i,
    delay: l.transitionDelay,
  };
}
const I2 = {
    configure: (e) => {
      Nd.configure(e);
    },
  },
  A2 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        capitalize: X,
        createChainedFunction: h1,
        createSvgIcon: Io,
        debounce: v1,
        deprecatedPropType: g1,
        isMuiElement: y1,
        ownerDocument: or,
        ownerWindow: x1,
        requirePropFactory: w1,
        setRef: $a,
        unstable_ClassNameGenerator: I2,
        unstable_useEnhancedEffect: Mr,
        unstable_useId: Ov,
        unsupportedProp: b1,
        useControlled: el,
        useEventCallback: _n,
        useForkRef: Gt,
        useIsFocusVisible: ss,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function D2(e) {
  return $e("MuiCollapse", e);
}
ze("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
]);
const F2 = [
    "addEndListener",
    "children",
    "className",
    "collapsedSize",
    "component",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "orientation",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  B2 = (e) => {
    const { orientation: t, classes: n } = e,
      r = {
        root: ["root", `${t}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${t}`],
        wrapperInner: ["wrapperInner", `${t}`],
      };
    return Le(r, D2, n);
  },
  j2 = Y("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.orientation],
        n.state === "entered" && t.entered,
        n.state === "exited" && !n.in && n.collapsedSize === "0px" && t.hidden,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    w(
      {
        height: 0,
        overflow: "hidden",
        transition: e.transitions.create("height"),
      },
      t.orientation === "horizontal" && {
        height: "auto",
        width: 0,
        transition: e.transitions.create("width"),
      },
      t.state === "entered" &&
        w(
          { height: "auto", overflow: "visible" },
          t.orientation === "horizontal" && { width: "auto" }
        ),
      t.state === "exited" &&
        !t.in &&
        t.collapsedSize === "0px" && { visibility: "hidden" }
    )
  ),
  W2 = Y("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (e, t) => t.wrapper,
  })(({ ownerState: e }) =>
    w(
      { display: "flex", width: "100%" },
      e.orientation === "horizontal" && { width: "auto", height: "100%" }
    )
  ),
  U2 = Y("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (e, t) => t.wrapperInner,
  })(({ ownerState: e }) =>
    w(
      { width: "100%" },
      e.orientation === "horizontal" && { width: "auto", height: "100%" }
    )
  ),
  $0 = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiCollapse" }),
      {
        addEndListener: o,
        children: i,
        className: l,
        collapsedSize: a = "0px",
        component: s,
        easing: u,
        in: c,
        onEnter: f,
        onEntered: p,
        onEntering: g,
        onExit: y,
        onExited: h,
        onExiting: E,
        orientation: m = "vertical",
        style: d,
        timeout: v = u0.standard,
        TransitionComponent: x = b0,
      } = r,
      k = Z(r, F2),
      b = w({}, r, { orientation: m, collapsedSize: a }),
      C = B2(b),
      $ = Ns(),
      _ = S.useRef(),
      T = S.useRef(null),
      z = S.useRef(),
      V = typeof a == "number" ? `${a}px` : a,
      j = m === "horizontal",
      W = j ? "width" : "height";
    S.useEffect(
      () => () => {
        clearTimeout(_.current);
      },
      []
    );
    const F = S.useRef(null),
      U = Gt(n, F),
      H = (B) => (se) => {
        if (B) {
          const ie = F.current;
          se === void 0 ? B(ie) : B(ie, se);
        }
      },
      R = () => (T.current ? T.current[j ? "clientWidth" : "clientHeight"] : 0),
      M = H((B, se) => {
        T.current && j && (T.current.style.position = "absolute"),
          (B.style[W] = V),
          f && f(B, se);
      }),
      N = H((B, se) => {
        const ie = R();
        T.current && j && (T.current.style.position = "");
        const { duration: oe, easing: We } = La(
          { style: d, timeout: v, easing: u },
          { mode: "enter" }
        );
        if (v === "auto") {
          const Ne = $.transitions.getAutoHeightDuration(ie);
          (B.style.transitionDuration = `${Ne}ms`), (z.current = Ne);
        } else
          B.style.transitionDuration = typeof oe == "string" ? oe : `${oe}ms`;
        (B.style[W] = `${ie}px`),
          (B.style.transitionTimingFunction = We),
          g && g(B, se);
      }),
      ee = H((B, se) => {
        (B.style[W] = "auto"), p && p(B, se);
      }),
      te = H((B) => {
        (B.style[W] = `${R()}px`), y && y(B);
      }),
      ue = H(h),
      ae = H((B) => {
        const se = R(),
          { duration: ie, easing: oe } = La(
            { style: d, timeout: v, easing: u },
            { mode: "exit" }
          );
        if (v === "auto") {
          const We = $.transitions.getAutoHeightDuration(se);
          (B.style.transitionDuration = `${We}ms`), (z.current = We);
        } else
          B.style.transitionDuration = typeof ie == "string" ? ie : `${ie}ms`;
        (B.style[W] = V), (B.style.transitionTimingFunction = oe), E && E(B);
      });
    return P(
      x,
      w(
        {
          in: c,
          onEnter: M,
          onEntered: ee,
          onEntering: N,
          onExit: te,
          onExited: ue,
          onExiting: ae,
          addEndListener: (B) => {
            v === "auto" && (_.current = setTimeout(B, z.current || 0)),
              o && o(F.current, B);
          },
          nodeRef: F,
          timeout: v === "auto" ? null : v,
        },
        k,
        {
          children: (B, se) =>
            P(
              j2,
              w(
                {
                  as: s,
                  className: Q(
                    C.root,
                    l,
                    {
                      entered: C.entered,
                      exited: !c && V === "0px" && C.hidden,
                    }[B]
                  ),
                  style: w({ [j ? "minWidth" : "minHeight"]: V }, d),
                  ownerState: w({}, b, { state: B }),
                  ref: U,
                },
                se,
                {
                  children: P(W2, {
                    ownerState: w({}, b, { state: B }),
                    className: C.wrapper,
                    ref: T,
                    children: P(U2, {
                      ownerState: w({}, b, { state: B }),
                      className: C.wrapperInner,
                      children: i,
                    }),
                  }),
                }
              )
            ),
        }
      )
    );
  });
$0.muiSupportAuto = !0;
const V2 = $0,
  H2 = S.createContext({}),
  T0 = H2;
function K2(e) {
  return $e("MuiAccordion", e);
}
const G2 = ze("MuiAccordion", [
    "root",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region",
  ]),
  Il = G2,
  Q2 = [
    "children",
    "className",
    "defaultExpanded",
    "disabled",
    "disableGutters",
    "expanded",
    "onChange",
    "square",
    "TransitionComponent",
    "TransitionProps",
  ],
  X2 = (e) => {
    const {
      classes: t,
      square: n,
      expanded: r,
      disabled: o,
      disableGutters: i,
    } = e;
    return Le(
      {
        root: [
          "root",
          !n && "rounded",
          r && "expanded",
          o && "disabled",
          !i && "gutters",
        ],
        region: ["region"],
      },
      K2,
      t
    );
  },
  Y2 = Y(lf, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Il.region}`]: t.region },
        t.root,
        !n.square && t.rounded,
        !n.disableGutters && t.gutters,
      ];
    },
  })(
    ({ theme: e }) => {
      const t = { duration: e.transitions.duration.shortest };
      return {
        position: "relative",
        transition: e.transitions.create(["margin"], t),
        overflowAnchor: "none",
        "&:before": {
          position: "absolute",
          left: 0,
          top: -1,
          right: 0,
          height: 1,
          content: '""',
          opacity: 1,
          backgroundColor: (e.vars || e).palette.divider,
          transition: e.transitions.create(["opacity", "background-color"], t),
        },
        "&:first-of-type": { "&:before": { display: "none" } },
        [`&.${Il.expanded}`]: {
          "&:before": { opacity: 0 },
          "&:first-of-type": { marginTop: 0 },
          "&:last-of-type": { marginBottom: 0 },
          "& + &": { "&:before": { display: "none" } },
        },
        [`&.${Il.disabled}`]: {
          backgroundColor: (e.vars || e).palette.action.disabledBackground,
        },
      };
    },
    ({ theme: e, ownerState: t }) =>
      w(
        {},
        !t.square && {
          borderRadius: 0,
          "&:first-of-type": {
            borderTopLeftRadius: (e.vars || e).shape.borderRadius,
            borderTopRightRadius: (e.vars || e).shape.borderRadius,
          },
          "&:last-of-type": {
            borderBottomLeftRadius: (e.vars || e).shape.borderRadius,
            borderBottomRightRadius: (e.vars || e).shape.borderRadius,
            "@supports (-ms-ime-align: auto)": {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
          },
        },
        !t.disableGutters && { [`&.${Il.expanded}`]: { margin: "16px 0" } }
      )
  ),
  q2 = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiAccordion" }),
      {
        children: o,
        className: i,
        defaultExpanded: l = !1,
        disabled: a = !1,
        disableGutters: s = !1,
        expanded: u,
        onChange: c,
        square: f = !1,
        TransitionComponent: p = V2,
        TransitionProps: g,
      } = r,
      y = Z(r, Q2),
      [h, E] = el({
        controlled: u,
        default: l,
        name: "Accordion",
        state: "expanded",
      }),
      m = S.useCallback(
        (C) => {
          E(!h), c && c(C, !h);
        },
        [h, c, E]
      ),
      [d, ...v] = S.Children.toArray(o),
      x = S.useMemo(
        () => ({ expanded: h, disabled: a, disableGutters: s, toggle: m }),
        [h, a, s, m]
      ),
      k = w({}, r, { square: f, disabled: a, disableGutters: s, expanded: h }),
      b = X2(k);
    return K(
      Y2,
      w({ className: Q(b.root, i), ref: n, ownerState: k, square: f }, y, {
        children: [
          P(T0.Provider, { value: x, children: d }),
          P(
            p,
            w({ in: h, timeout: "auto" }, g, {
              children: P("div", {
                "aria-labelledby": d.props.id,
                id: d.props["aria-controls"],
                role: "region",
                className: b.region,
                children: v,
              }),
            })
          ),
        ],
      })
    );
  }),
  fm = q2;
function Z2(e) {
  return $e("MuiAccordionSummary", e);
}
const J2 = ze("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper",
  ]),
  uo = J2,
  eE = [
    "children",
    "className",
    "expandIcon",
    "focusVisibleClassName",
    "onClick",
  ],
  tE = (e) => {
    const { classes: t, expanded: n, disabled: r, disableGutters: o } = e;
    return Le(
      {
        root: ["root", n && "expanded", r && "disabled", !o && "gutters"],
        focusVisible: ["focusVisible"],
        content: ["content", n && "expanded", !o && "contentGutters"],
        expandIconWrapper: ["expandIconWrapper", n && "expanded"],
      },
      Z2,
      t
    );
  },
  nE = Y(uf, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e, ownerState: t }) => {
    const n = { duration: e.transitions.duration.shortest };
    return w(
      {
        display: "flex",
        minHeight: 48,
        padding: e.spacing(0, 2),
        transition: e.transitions.create(["min-height", "background-color"], n),
        [`&.${uo.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${uo.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        [`&:hover:not(.${uo.disabled})`]: { cursor: "pointer" },
      },
      !t.disableGutters && { [`&.${uo.expanded}`]: { minHeight: 64 } }
    );
  }),
  rE = Y("div", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (e, t) => t.content,
  })(({ theme: e, ownerState: t }) =>
    w(
      { display: "flex", flexGrow: 1, margin: "12px 0" },
      !t.disableGutters && {
        transition: e.transitions.create(["margin"], {
          duration: e.transitions.duration.shortest,
        }),
        [`&.${uo.expanded}`]: { margin: "20px 0" },
      }
    )
  ),
  oE = Y("div", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (e, t) => t.expandIconWrapper,
  })(({ theme: e }) => ({
    display: "flex",
    color: (e.vars || e).palette.action.active,
    transform: "rotate(0deg)",
    transition: e.transitions.create("transform", {
      duration: e.transitions.duration.shortest,
    }),
    [`&.${uo.expanded}`]: { transform: "rotate(180deg)" },
  })),
  iE = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiAccordionSummary" }),
      {
        children: o,
        className: i,
        expandIcon: l,
        focusVisibleClassName: a,
        onClick: s,
      } = r,
      u = Z(r, eE),
      {
        disabled: c = !1,
        disableGutters: f,
        expanded: p,
        toggle: g,
      } = S.useContext(T0),
      y = (m) => {
        g && g(m), s && s(m);
      },
      h = w({}, r, { expanded: p, disabled: c, disableGutters: f }),
      E = tE(h);
    return K(
      nE,
      w(
        {
          focusRipple: !1,
          disableRipple: !0,
          disabled: c,
          component: "div",
          "aria-expanded": p,
          className: Q(E.root, i),
          focusVisibleClassName: Q(E.focusVisible, a),
          onClick: y,
          ref: n,
          ownerState: h,
        },
        u,
        {
          children: [
            P(rE, { className: E.content, ownerState: h, children: o }),
            l &&
              P(oE, {
                className: E.expandIconWrapper,
                ownerState: h,
                children: l,
              }),
          ],
        }
      )
    );
  }),
  pm = iE;
function lE(e) {
  return $e("MuiAccordionDetails", e);
}
ze("MuiAccordionDetails", ["root"]);
const aE = ["className"],
  sE = (e) => {
    const { classes: t } = e;
    return Le({ root: ["root"] }, lE, t);
  },
  uE = Y("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })(({ theme: e }) => ({ padding: e.spacing(1, 2, 2) })),
  cE = S.forwardRef(function (t, n) {
    const r = Te({ props: t, name: "MuiAccordionDetails" }),
      { className: o } = r,
      i = Z(r, aE),
      l = r,
      a = sE(l);
    return P(uE, w({ className: Q(a.root, o), ref: n, ownerState: l }, i));
  }),
  mm = cE;
var df = {},
  za = {},
  dE = {
    get exports() {
      return za;
    },
    set exports(e) {
      za = e;
    },
  };
(function (e) {
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(dE);
var wu = {};
const fE = wm(A2);
var hm;
function R0() {
  return (
    hm ||
      ((hm = 1),
      (function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function () {
              return t.createSvgIcon;
            },
          });
        var t = fE;
      })(wu)),
    wu
  );
}
const _0 = wm(ag);
var pE = za;
Object.defineProperty(df, "__esModule", { value: !0 });
var Ic = (df.default = void 0),
  mE = pE(R0()),
  hE = _0,
  vE = (0, mE.default)(
    (0, hE.jsx)("path", { d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" }),
    "ExpandMore"
  );
Ic = df.default = vE;
const gE = () =>
    K("div", {
      children: [
        K(fm, {
          children: [
            P(pm, {
              expandIcon: P(Ic, {}),
              "aria-controls": "panel1a-content",
              id: "panel1a-header",
              children: P(Fe, {
                children: "What is this about and how does it work?",
              }),
            }),
            K(mm, {
              children: [
                K(Fe, {
                  sx: { mb: 3 },
                  children: [
                    P(Fe, {
                      typography: { fontWeight: "bold" },
                      children: "Why?",
                    }),
                    " ",
                    "You can gain more XP and therefore level faster on Zwift if workouts are specially arranged.",
                  ],
                }),
                K(Fe, {
                  sx: { mb: 3 },
                  children: [
                    P(Fe, {
                      typography: { fontWeight: "bold" },
                      children: "What?",
                    }),
                    " ",
                    "Zwift grants more XP for interval blocks than steady state, warmup or cooldown blocks. If you're getting your workouts from trainers via Intervals.icu, TrainingPeaks or creating them on your own, there are probably a lot of steady state, warmup or cooldown blocks used because that's essentially your prescribed training.",
                  ],
                }),
                K(Fe, {
                  sx: { mb: 3 },
                  children: [
                    P(Fe, {
                      typography: { fontWeight: "bold" },
                      children: "How?",
                    }),
                    " ",
                    "This tool modifies Zwift workout files (.zwo) so that they leverage several",
                    " ",
                    P("a", {
                      href: "https://zwiftinsider.com/earn-more-xp/",
                      children: "XP hacking approaches",
                    }),
                    ". It will not change its intensity, duration or resulting workload!",
                  ],
                }),
                K(Fe, {
                  children: [
                    P(Fe, {
                      typography: { fontWeight: "bold" },
                      children: "So what?",
                    }),
                    " ",
                    "This tool makes little changes to your workouts so that you get more XP for the same amount of physical and mental work that you put in.",
                  ],
                }),
              ],
            }),
          ],
        }),
        K(fm, {
          children: [
            P(pm, {
              expandIcon: P(Ic, {}),
              "aria-controls": "panel2a-content",
              id: "panel2a-header",
              children: P(Fe, {
                children: "Is Zwift workout optimization cheating?",
              }),
            }),
            K(mm, {
              children: [
                P(Fe, {
                  sx: { mb: 3 },
                  children:
                    "Is it? Let's put some facts and thoughts on the table so you can decide yourself:",
                }),
                K("ul", {
                  style: { marginBottom: 24 },
                  children: [
                    K("li", {
                      children: [
                        "Optimized Zwift workouts do still",
                        " ",
                        P("strong", {
                          children:
                            "require the same physical and mental effort",
                        }),
                        " from you.",
                      ],
                    }),
                    K("li", {
                      children: [
                        "Optimized Zwift workouts",
                        " ",
                        P("strong", {
                          children: "can also be manually created",
                        }),
                        " using Zwifts built-in workout building tool.",
                      ],
                    }),
                    K("li", {
                      children: [
                        "Zwift workout block XP are generated by type of block instead of effort ",
                        P("strong", { children: 'which is a bit "unfair"' }),
                        ".",
                      ],
                    }),
                  ],
                }),
                P(Fe, {
                  sx: { mb: 3 },
                  children: `This tool is an offer that you can reject. It's also a little piece of hacktivism against Zwift as the most popular and very revenue strong indoor endurance platform. It demonstrates (minor) flaws in the system and puts the finger into the wound. What the wound is? Zwift is not changing or improving very often in its core. There are dozens of bugs that remain unfixed for months and years. It's questionable if that's "enough" for such a well-paying software product. That's bad for Zwift users but will in the end hurt themselves most as competition is probably not sleeping.`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  O0 = S.createContext(null),
  vm = {
    selectedFiles: [],
    steadyStateBlocks: { active: !0, minimumDurationInMinutes: 2 },
    warmupAndCooldownBlocks: {
      warmupActive: !0,
      cooldownActive: !0,
      minimumDurationInMinutes: 2,
    },
    intervalsBlockDurationInSeconds: 180,
  },
  yE = ({ children: e }) => {
    const [t, n] = S.useState(vm),
      r = {
        shouldOptimizeAnyWarmupOrCooldown:
          t.warmupAndCooldownBlocks.cooldownActive ||
          t.warmupAndCooldownBlocks.warmupActive,
        shouldOptimizeAnything:
          t.warmupAndCooldownBlocks.cooldownActive ||
          t.warmupAndCooldownBlocks.warmupActive ||
          t.steadyStateBlocks.active,
      };
    return P(O0.Provider, {
      value: { settings: t, setSettings: n, computed: r, reset: () => n(vm) },
      children: e,
    });
  },
  ff = () => {
    const e = S.useContext(O0);
    if (!e) throw Error("No context available!");
    return e;
  },
  xE = S.createContext(void 0),
  wE = xE;
function M0() {
  return S.useContext(wE);
}
function SE(e) {
  return $e("MuiFormControlLabel", e);
}
const kE = ze("MuiFormControlLabel", [
    "root",
    "labelPlacementStart",
    "labelPlacementTop",
    "labelPlacementBottom",
    "disabled",
    "label",
    "error",
  ]),
  Al = kE;
function bE({ props: e, states: t, muiFormControl: n }) {
  return t.reduce(
    (r, o) => ((r[o] = e[o]), n && typeof e[o] > "u" && (r[o] = n[o]), r),
    {}
  );
}
const CE = [
    "checked",
    "className",
    "componentsProps",
    "control",
    "disabled",
    "disableTypography",
    "inputRef",
    "label",
    "labelPlacement",
    "name",
    "onChange",
    "slotProps",
    "value",
  ],
  EE = (e) => {
    const { classes: t, disabled: n, labelPlacement: r, error: o } = e,
      i = {
        root: ["root", n && "disabled", `labelPlacement${X(r)}`, o && "error"],
        label: ["label", n && "disabled"],
      };
    return Le(i, SE, t);
  },
  PE = Y("label", {
    name: "MuiFormControlLabel",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        { [`& .${Al.label}`]: t.label },
        t.root,
        t[`labelPlacement${X(n.labelPlacement)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    w(
      {
        display: "inline-flex",
        alignItems: "center",
        cursor: "pointer",
        verticalAlign: "middle",
        WebkitTapHighlightColor: "transparent",
        marginLeft: -11,
        marginRight: 16,
        [`&.${Al.disabled}`]: { cursor: "default" },
      },
      t.labelPlacement === "start" && {
        flexDirection: "row-reverse",
        marginLeft: 16,
        marginRight: -11,
      },
      t.labelPlacement === "top" && {
        flexDirection: "column-reverse",
        marginLeft: 16,
      },
      t.labelPlacement === "bottom" && {
        flexDirection: "column",
        marginLeft: 16,
      },
      {
        [`& .${Al.label}`]: {
          [`&.${Al.disabled}`]: { color: (e.vars || e).palette.text.disabled },
        },
      }
    )
  ),
  $E = S.forwardRef(function (t, n) {
    var r;
    const o = Te({ props: t, name: "MuiFormControlLabel" }),
      {
        className: i,
        componentsProps: l = {},
        control: a,
        disabled: s,
        disableTypography: u,
        label: c,
        labelPlacement: f = "end",
        slotProps: p = {},
      } = o,
      g = Z(o, CE),
      y = M0();
    let h = s;
    typeof h > "u" && typeof a.props.disabled < "u" && (h = a.props.disabled),
      typeof h > "u" && y && (h = y.disabled);
    const E = { disabled: h };
    ["checked", "name", "onChange", "value", "inputRef"].forEach((b) => {
      typeof a.props[b] > "u" && typeof o[b] < "u" && (E[b] = o[b]);
    });
    const m = bE({ props: o, muiFormControl: y, states: ["error"] }),
      d = w({}, o, { disabled: h, labelPlacement: f, error: m.error }),
      v = EE(d),
      x = (r = p.typography) != null ? r : l.typography;
    let k = c;
    return (
      k != null &&
        k.type !== Fe &&
        !u &&
        (k = P(
          Fe,
          w({ component: "span" }, x, {
            className: Q(v.label, x == null ? void 0 : x.className),
            children: k,
          })
        )),
      K(
        PE,
        w({ className: Q(v.root, i), ownerState: d, ref: n }, g, {
          children: [S.cloneElement(a, E), k],
        })
      )
    );
  }),
  Su = $E;
function TE(e) {
  return $e("PrivateSwitchBase", e);
}
ze("PrivateSwitchBase", [
  "root",
  "checked",
  "disabled",
  "input",
  "edgeStart",
  "edgeEnd",
]);
const RE = [
    "autoFocus",
    "checked",
    "checkedIcon",
    "className",
    "defaultChecked",
    "disabled",
    "disableFocusRipple",
    "edge",
    "icon",
    "id",
    "inputProps",
    "inputRef",
    "name",
    "onBlur",
    "onChange",
    "onFocus",
    "readOnly",
    "required",
    "tabIndex",
    "type",
    "value",
  ],
  _E = (e) => {
    const { classes: t, checked: n, disabled: r, edge: o } = e,
      i = {
        root: ["root", n && "checked", r && "disabled", o && `edge${X(o)}`],
        input: ["input"],
      };
    return Le(i, TE, t);
  },
  OE = Y(uf)(({ ownerState: e }) =>
    w(
      { padding: 9, borderRadius: "50%" },
      e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
      e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
    )
  ),
  ME = Y("input")({
    cursor: "inherit",
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1,
  }),
  LE = S.forwardRef(function (t, n) {
    const {
        autoFocus: r,
        checked: o,
        checkedIcon: i,
        className: l,
        defaultChecked: a,
        disabled: s,
        disableFocusRipple: u = !1,
        edge: c = !1,
        icon: f,
        id: p,
        inputProps: g,
        inputRef: y,
        name: h,
        onBlur: E,
        onChange: m,
        onFocus: d,
        readOnly: v,
        required: x = !1,
        tabIndex: k,
        type: b,
        value: C,
      } = t,
      $ = Z(t, RE),
      [_, T] = el({
        controlled: o,
        default: !!a,
        name: "SwitchBase",
        state: "checked",
      }),
      z = M0(),
      V = (M) => {
        d && d(M), z && z.onFocus && z.onFocus(M);
      },
      j = (M) => {
        E && E(M), z && z.onBlur && z.onBlur(M);
      },
      W = (M) => {
        if (M.nativeEvent.defaultPrevented) return;
        const N = M.target.checked;
        T(N), m && m(M, N);
      };
    let F = s;
    z && typeof F > "u" && (F = z.disabled);
    const U = b === "checkbox" || b === "radio",
      H = w({}, t, { checked: _, disabled: F, disableFocusRipple: u, edge: c }),
      R = _E(H);
    return K(
      OE,
      w(
        {
          component: "span",
          className: Q(R.root, l),
          centerRipple: !0,
          focusRipple: !u,
          disabled: F,
          tabIndex: null,
          role: void 0,
          onFocus: V,
          onBlur: j,
          ownerState: H,
          ref: n,
        },
        $,
        {
          children: [
            P(
              ME,
              w(
                {
                  autoFocus: r,
                  checked: o,
                  defaultChecked: a,
                  className: R.input,
                  disabled: F,
                  id: U ? p : void 0,
                  name: h,
                  onChange: W,
                  readOnly: v,
                  ref: y,
                  required: x,
                  ownerState: H,
                  tabIndex: k,
                  type: b,
                },
                b === "checkbox" && C === void 0 ? {} : { value: C },
                g
              )
            ),
            _ ? i : f,
          ],
        }
      )
    );
  }),
  zE = LE,
  NE = Io(
    P("path", {
      d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    }),
    "CheckBoxOutlineBlank"
  ),
  IE = Io(
    P("path", {
      d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    }),
    "CheckBox"
  ),
  AE = Io(
    P("path", {
      d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z",
    }),
    "IndeterminateCheckBox"
  );
function DE(e) {
  return $e("MuiCheckbox", e);
}
const FE = ze("MuiCheckbox", [
    "root",
    "checked",
    "disabled",
    "indeterminate",
    "colorPrimary",
    "colorSecondary",
  ]),
  ku = FE,
  BE = [
    "checkedIcon",
    "color",
    "icon",
    "indeterminate",
    "indeterminateIcon",
    "inputProps",
    "size",
    "className",
  ],
  jE = (e) => {
    const { classes: t, indeterminate: n, color: r } = e,
      o = { root: ["root", n && "indeterminate", `color${X(r)}`] },
      i = Le(o, DE, t);
    return w({}, t, i);
  },
  WE = Y(zE, {
    shouldForwardProp: (e) => of(e) || e === "classes",
    name: "MuiCheckbox",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.indeterminate && t.indeterminate,
        n.color !== "default" && t[`color${X(n.color)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    w(
      { color: (e.vars || e).palette.text.secondary },
      !t.disableRipple && {
        "&:hover": {
          backgroundColor: e.vars
            ? `rgba(${
                t.color === "default"
                  ? e.vars.palette.action.activeChannel
                  : e.vars.palette.primary.mainChannel
              } / ${e.vars.palette.action.hoverOpacity})`
            : ln(
                t.color === "default"
                  ? e.palette.action.active
                  : e.palette[t.color].main,
                e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
      },
      t.color !== "default" && {
        [`&.${ku.checked}, &.${ku.indeterminate}`]: {
          color: (e.vars || e).palette[t.color].main,
        },
        [`&.${ku.disabled}`]: { color: (e.vars || e).palette.action.disabled },
      }
    )
  ),
  UE = P(IE, {}),
  VE = P(NE, {}),
  HE = P(AE, {}),
  KE = S.forwardRef(function (t, n) {
    var r, o;
    const i = Te({ props: t, name: "MuiCheckbox" }),
      {
        checkedIcon: l = UE,
        color: a = "primary",
        icon: s = VE,
        indeterminate: u = !1,
        indeterminateIcon: c = HE,
        inputProps: f,
        size: p = "medium",
        className: g,
      } = i,
      y = Z(i, BE),
      h = u ? c : s,
      E = u ? c : l,
      m = w({}, i, { color: a, indeterminate: u, size: p }),
      d = jE(m);
    return P(
      WE,
      w(
        {
          type: "checkbox",
          inputProps: w({ "data-indeterminate": u }, f),
          icon: S.cloneElement(h, {
            fontSize: (r = h.props.fontSize) != null ? r : p,
          }),
          checkedIcon: S.cloneElement(E, {
            fontSize: (o = E.props.fontSize) != null ? o : p,
          }),
          ownerState: m,
          ref: n,
          className: Q(d.root, g),
        },
        y,
        { classes: d }
      )
    );
  }),
  bu = KE,
  GE = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function Ac(e) {
  return `scale(${e}, ${e ** 2})`;
}
const QE = {
    entering: { opacity: 1, transform: Ac(1) },
    entered: { opacity: 1, transform: "none" },
  },
  Cu =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  L0 = S.forwardRef(function (t, n) {
    const {
        addEndListener: r,
        appear: o = !0,
        children: i,
        easing: l,
        in: a,
        onEnter: s,
        onEntered: u,
        onEntering: c,
        onExit: f,
        onExited: p,
        onExiting: g,
        style: y,
        timeout: h = "auto",
        TransitionComponent: E = b0,
      } = t,
      m = Z(t, GE),
      d = S.useRef(),
      v = S.useRef(),
      x = Ns(),
      k = S.useRef(null),
      b = Gt(k, i.ref, n),
      C = (F) => (U) => {
        if (F) {
          const H = k.current;
          U === void 0 ? F(H) : F(H, U);
        }
      },
      $ = C(c),
      _ = C((F, U) => {
        N2(F);
        const {
          duration: H,
          delay: R,
          easing: M,
        } = La({ style: y, timeout: h, easing: l }, { mode: "enter" });
        let N;
        h === "auto"
          ? ((N = x.transitions.getAutoHeightDuration(F.clientHeight)),
            (v.current = N))
          : (N = H),
          (F.style.transition = [
            x.transitions.create("opacity", { duration: N, delay: R }),
            x.transitions.create("transform", {
              duration: Cu ? N : N * 0.666,
              delay: R,
              easing: M,
            }),
          ].join(",")),
          s && s(F, U);
      }),
      T = C(u),
      z = C(g),
      V = C((F) => {
        const {
          duration: U,
          delay: H,
          easing: R,
        } = La({ style: y, timeout: h, easing: l }, { mode: "exit" });
        let M;
        h === "auto"
          ? ((M = x.transitions.getAutoHeightDuration(F.clientHeight)),
            (v.current = M))
          : (M = U),
          (F.style.transition = [
            x.transitions.create("opacity", { duration: M, delay: H }),
            x.transitions.create("transform", {
              duration: Cu ? M : M * 0.666,
              delay: Cu ? H : H || M * 0.333,
              easing: R,
            }),
          ].join(",")),
          (F.style.opacity = 0),
          (F.style.transform = Ac(0.75)),
          f && f(F);
      }),
      j = C(p),
      W = (F) => {
        h === "auto" && (d.current = setTimeout(F, v.current || 0)),
          r && r(k.current, F);
      };
    return (
      S.useEffect(
        () => () => {
          clearTimeout(d.current);
        },
        []
      ),
      P(
        E,
        w(
          {
            appear: o,
            in: a,
            nodeRef: k,
            onEnter: _,
            onEntered: T,
            onEntering: $,
            onExit: V,
            onExited: j,
            onExiting: z,
            addEndListener: W,
            timeout: h === "auto" ? null : h,
          },
          m,
          {
            children: (F, U) =>
              S.cloneElement(
                i,
                w(
                  {
                    style: w(
                      {
                        opacity: 0,
                        transform: Ac(0.75),
                        visibility: F === "exited" && !a ? "hidden" : void 0,
                      },
                      QE[F],
                      y,
                      i.props.style
                    ),
                    ref: b,
                  },
                  U
                )
              ),
          }
        )
      )
    );
  });
L0.muiSupportAuto = !0;
const gm = L0,
  XE = ["components", "componentsProps", "slots", "slotProps"],
  YE = Y(Cb, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({}),
  qE = S.forwardRef(function (t, n) {
    var r;
    const o = r0(),
      i = Te({ props: t, name: "MuiPopper" }),
      { components: l, componentsProps: a, slots: s, slotProps: u } = i,
      c = Z(i, XE),
      f =
        (r = s == null ? void 0 : s.root) != null
          ? r
          : l == null
          ? void 0
          : l.Root;
    return P(
      YE,
      w(
        {
          direction: o == null ? void 0 : o.direction,
          slots: { root: f },
          slotProps: u ?? a,
        },
        c,
        { ref: n }
      )
    );
  }),
  z0 = qE;
function ZE(e) {
  return $e("MuiTooltip", e);
}
const JE = ze("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]),
  Xn = JE,
  eP = [
    "arrow",
    "children",
    "classes",
    "components",
    "componentsProps",
    "describeChild",
    "disableFocusListener",
    "disableHoverListener",
    "disableInteractive",
    "disableTouchListener",
    "enterDelay",
    "enterNextDelay",
    "enterTouchDelay",
    "followCursor",
    "id",
    "leaveDelay",
    "leaveTouchDelay",
    "onClose",
    "onOpen",
    "open",
    "placement",
    "PopperComponent",
    "PopperProps",
    "slotProps",
    "slots",
    "title",
    "TransitionComponent",
    "TransitionProps",
  ];
function tP(e) {
  return Math.round(e * 1e5) / 1e5;
}
const nP = (e) => {
    const {
        classes: t,
        disableInteractive: n,
        arrow: r,
        touch: o,
        placement: i,
      } = e,
      l = {
        popper: ["popper", !n && "popperInteractive", r && "popperArrow"],
        tooltip: [
          "tooltip",
          r && "tooltipArrow",
          o && "touch",
          `tooltipPlacement${X(i.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return Le(l, ZE, t);
  },
  rP = Y(z0, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.popper,
        !n.disableInteractive && t.popperInteractive,
        n.arrow && t.popperArrow,
        !n.open && t.popperClose,
      ];
    },
  })(({ theme: e, ownerState: t, open: n }) =>
    w(
      { zIndex: (e.vars || e).zIndex.tooltip, pointerEvents: "none" },
      !t.disableInteractive && { pointerEvents: "auto" },
      !n && { pointerEvents: "none" },
      t.arrow && {
        [`&[data-popper-placement*="bottom"] .${Xn.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": { transformOrigin: "0 100%" },
        },
        [`&[data-popper-placement*="top"] .${Xn.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": { transformOrigin: "100% 0" },
        },
        [`&[data-popper-placement*="right"] .${Xn.arrow}`]: w(
          {},
          t.isRtl
            ? { right: 0, marginRight: "-0.71em" }
            : { left: 0, marginLeft: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "100% 100%" },
          }
        ),
        [`&[data-popper-placement*="left"] .${Xn.arrow}`]: w(
          {},
          t.isRtl
            ? { left: 0, marginLeft: "-0.71em" }
            : { right: 0, marginRight: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "0 0" },
          }
        ),
      }
    )
  ),
  oP = Y("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.tooltip,
        n.touch && t.touch,
        n.arrow && t.tooltipArrow,
        t[`tooltipPlacement${X(n.placement.split("-")[0])}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    w(
      {
        backgroundColor: e.vars
          ? e.vars.palette.Tooltip.bg
          : ln(e.palette.grey[700], 0.92),
        borderRadius: (e.vars || e).shape.borderRadius,
        color: (e.vars || e).palette.common.white,
        fontFamily: e.typography.fontFamily,
        padding: "4px 8px",
        fontSize: e.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: e.typography.fontWeightMedium,
      },
      t.arrow && { position: "relative", margin: 0 },
      t.touch && {
        padding: "8px 16px",
        fontSize: e.typography.pxToRem(14),
        lineHeight: `${tP(16 / 14)}em`,
        fontWeight: e.typography.fontWeightRegular,
      },
      {
        [`.${Xn.popper}[data-popper-placement*="left"] &`]: w(
          { transformOrigin: "right center" },
          t.isRtl
            ? w({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
            : w({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
        ),
        [`.${Xn.popper}[data-popper-placement*="right"] &`]: w(
          { transformOrigin: "left center" },
          t.isRtl
            ? w({ marginRight: "14px" }, t.touch && { marginRight: "24px" })
            : w({ marginLeft: "14px" }, t.touch && { marginLeft: "24px" })
        ),
        [`.${Xn.popper}[data-popper-placement*="top"] &`]: w(
          { transformOrigin: "center bottom", marginBottom: "14px" },
          t.touch && { marginBottom: "24px" }
        ),
        [`.${Xn.popper}[data-popper-placement*="bottom"] &`]: w(
          { transformOrigin: "center top", marginTop: "14px" },
          t.touch && { marginTop: "24px" }
        ),
      }
    )
  ),
  iP = Y("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (e, t) => t.arrow,
  })(({ theme: e }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: e.vars ? e.vars.palette.Tooltip.bg : ln(e.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  }));
let Dl = !1,
  Eu = null,
  ni = { x: 0, y: 0 };
function Fl(e, t) {
  return (n) => {
    t && t(n), e(n);
  };
}
const lP = S.forwardRef(function (t, n) {
    var r, o, i, l, a, s, u, c, f, p, g, y, h, E, m, d, v, x, k;
    const b = Te({ props: t, name: "MuiTooltip" }),
      {
        arrow: C = !1,
        children: $,
        components: _ = {},
        componentsProps: T = {},
        describeChild: z = !1,
        disableFocusListener: V = !1,
        disableHoverListener: j = !1,
        disableInteractive: W = !1,
        disableTouchListener: F = !1,
        enterDelay: U = 100,
        enterNextDelay: H = 0,
        enterTouchDelay: R = 700,
        followCursor: M = !1,
        id: N,
        leaveDelay: ee = 0,
        leaveTouchDelay: te = 1500,
        onClose: ue,
        onOpen: ae,
        open: Se,
        placement: B = "bottom",
        PopperComponent: se,
        PopperProps: ie = {},
        slotProps: oe = {},
        slots: We = {},
        title: Ne,
        TransitionComponent: Ct = gm,
        TransitionProps: Xe,
      } = b,
      xe = Z(b, eP),
      de = Ns(),
      Et = de.direction === "rtl",
      [Ye, mt] = S.useState(),
      [qt, me] = S.useState(null),
      Ue = S.useRef(!1),
      Zt = W || M,
      Dt = S.useRef(),
      L = S.useRef(),
      I = S.useRef(),
      G = S.useRef(),
      [q, Ce] = el({
        controlled: Se,
        default: !1,
        name: "Tooltip",
        state: "open",
      });
    let D = q;
    const he = Ov(N),
      Ie = S.useRef(),
      J = S.useCallback(() => {
        Ie.current !== void 0 &&
          ((document.body.style.WebkitUserSelect = Ie.current),
          (Ie.current = void 0)),
          clearTimeout(G.current);
      }, []);
    S.useEffect(
      () => () => {
        clearTimeout(Dt.current),
          clearTimeout(L.current),
          clearTimeout(I.current),
          J();
      },
      [J]
    );
    const ht = (ne) => {
        clearTimeout(Eu), (Dl = !0), Ce(!0), ae && !D && ae(ne);
      },
      dn = _n((ne) => {
        clearTimeout(Eu),
          (Eu = setTimeout(() => {
            Dl = !1;
          }, 800 + ee)),
          Ce(!1),
          ue && D && ue(ne),
          clearTimeout(Dt.current),
          (Dt.current = setTimeout(() => {
            Ue.current = !1;
          }, de.transitions.duration.shortest));
      }),
      et = (ne) => {
        (Ue.current && ne.type !== "touchstart") ||
          (Ye && Ye.removeAttribute("title"),
          clearTimeout(L.current),
          clearTimeout(I.current),
          U || (Dl && H)
            ? (L.current = setTimeout(
                () => {
                  ht(ne);
                },
                Dl ? H : U
              ))
            : ht(ne));
      },
      Ar = (ne) => {
        clearTimeout(L.current),
          clearTimeout(I.current),
          (I.current = setTimeout(() => {
            dn(ne);
          }, ee));
      },
      { isFocusVisibleRef: Ao, onBlur: ll, onFocus: al, ref: sl } = ss(),
      [, Dr] = S.useState(!1),
      Fr = (ne) => {
        ll(ne), Ao.current === !1 && (Dr(!1), Ar(ne));
      },
      Do = (ne) => {
        Ye || mt(ne.currentTarget),
          al(ne),
          Ao.current === !0 && (Dr(!0), et(ne));
      },
      Br = (ne) => {
        Ue.current = !0;
        const $t = $.props;
        $t.onTouchStart && $t.onTouchStart(ne);
      },
      ul = et,
      jr = Ar,
      Fo = (ne) => {
        Br(ne),
          clearTimeout(I.current),
          clearTimeout(Dt.current),
          J(),
          (Ie.current = document.body.style.WebkitUserSelect),
          (document.body.style.WebkitUserSelect = "none"),
          (G.current = setTimeout(() => {
            (document.body.style.WebkitUserSelect = Ie.current), et(ne);
          }, R));
      },
      Bo = (ne) => {
        $.props.onTouchEnd && $.props.onTouchEnd(ne),
          J(),
          clearTimeout(I.current),
          (I.current = setTimeout(() => {
            dn(ne);
          }, te));
      };
    S.useEffect(() => {
      if (!D) return;
      function ne($t) {
        ($t.key === "Escape" || $t.key === "Esc") && dn($t);
      }
      return (
        document.addEventListener("keydown", ne),
        () => {
          document.removeEventListener("keydown", ne);
        }
      );
    }, [dn, D]);
    const Ds = Gt($.ref, sl, mt, n);
    !Ne && Ne !== 0 && (D = !1);
    const jo = S.useRef(),
      Fs = (ne) => {
        const $t = $.props;
        $t.onMouseMove && $t.onMouseMove(ne),
          (ni = { x: ne.clientX, y: ne.clientY }),
          jo.current && jo.current.update();
      },
      dr = {},
      Wo = typeof Ne == "string";
    z
      ? ((dr.title = !D && Wo && !j ? Ne : null),
        (dr["aria-describedby"] = D ? he : null))
      : ((dr["aria-label"] = Wo ? Ne : null),
        (dr["aria-labelledby"] = D && !Wo ? he : null));
    const Pt = w(
        {},
        dr,
        xe,
        $.props,
        {
          className: Q(xe.className, $.props.className),
          onTouchStart: Br,
          ref: Ds,
        },
        M ? { onMouseMove: Fs } : {}
      ),
      bn = {};
    F || ((Pt.onTouchStart = Fo), (Pt.onTouchEnd = Bo)),
      j ||
        ((Pt.onMouseOver = Fl(ul, Pt.onMouseOver)),
        (Pt.onMouseLeave = Fl(jr, Pt.onMouseLeave)),
        Zt || ((bn.onMouseOver = ul), (bn.onMouseLeave = jr))),
      V ||
        ((Pt.onFocus = Fl(Do, Pt.onFocus)),
        (Pt.onBlur = Fl(Fr, Pt.onBlur)),
        Zt || ((bn.onFocus = Do), (bn.onBlur = Fr)));
    const Bs = S.useMemo(() => {
        var ne;
        let $t = [
          {
            name: "arrow",
            enabled: !!qt,
            options: { element: qt, padding: 4 },
          },
        ];
        return (
          (ne = ie.popperOptions) != null &&
            ne.modifiers &&
            ($t = $t.concat(ie.popperOptions.modifiers)),
          w({}, ie.popperOptions, { modifiers: $t })
        );
      }, [qt, ie]),
      Cn = w({}, b, {
        isRtl: Et,
        arrow: C,
        disableInteractive: Zt,
        placement: B,
        PopperComponentProp: se,
        touch: Ue.current,
      }),
      fr = nP(Cn),
      cl = (r = (o = We.popper) != null ? o : _.Popper) != null ? r : rP,
      Re =
        (i =
          (l = (a = We.transition) != null ? a : _.Transition) != null
            ? l
            : Ct) != null
          ? i
          : gm,
      Ve = (s = (u = We.tooltip) != null ? u : _.Tooltip) != null ? s : oP,
      Wr = (c = (f = We.arrow) != null ? f : _.Arrow) != null ? c : iP,
      Ur = ai(
        cl,
        w({}, ie, (p = oe.popper) != null ? p : T.popper, {
          className: Q(
            fr.popper,
            ie == null ? void 0 : ie.className,
            (g = (y = oe.popper) != null ? y : T.popper) == null
              ? void 0
              : g.className
          ),
        }),
        Cn
      ),
      Jt = ai(
        Re,
        w({}, Xe, (h = oe.transition) != null ? h : T.transition),
        Cn
      ),
      N0 = ai(
        Ve,
        w({}, (E = oe.tooltip) != null ? E : T.tooltip, {
          className: Q(
            fr.tooltip,
            (m = (d = oe.tooltip) != null ? d : T.tooltip) == null
              ? void 0
              : m.className
          ),
        }),
        Cn
      ),
      I0 = ai(
        Wr,
        w({}, (v = oe.arrow) != null ? v : T.arrow, {
          className: Q(
            fr.arrow,
            (x = (k = oe.arrow) != null ? k : T.arrow) == null
              ? void 0
              : x.className
          ),
        }),
        Cn
      );
    return K(S.Fragment, {
      children: [
        S.cloneElement($, Pt),
        P(
          cl,
          w(
            {
              as: se ?? z0,
              placement: B,
              anchorEl: M
                ? {
                    getBoundingClientRect: () => ({
                      top: ni.y,
                      left: ni.x,
                      right: ni.x,
                      bottom: ni.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : Ye,
              popperRef: jo,
              open: Ye ? D : !1,
              id: he,
              transition: !0,
            },
            bn,
            Ur,
            {
              popperOptions: Bs,
              children: ({ TransitionProps: ne }) =>
                P(
                  Re,
                  w({ timeout: de.transitions.duration.shorter }, ne, Jt, {
                    children: K(
                      Ve,
                      w({}, N0, {
                        children: [
                          Ne,
                          C ? P(Wr, w({}, I0, { ref: me })) : null,
                        ],
                      })
                    ),
                  })
                ),
            }
          )
        ),
      ],
    });
  }),
  Pu = lP;
var pf = {},
  aP = za;
Object.defineProperty(pf, "__esModule", { value: !0 });
var na = (pf.default = void 0),
  sP = aP(R0()),
  uP = _0,
  cP = (0, sP.default)(
    (0, uP.jsx)("path", {
      d: "M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    }),
    "InfoOutlined"
  );
na = pf.default = cP;
const dP = (e) => !e || !wi(e),
  fP = dP;
function pP(e) {
  return $e("MuiSlider", e);
}
const mP = ze("MuiSlider", [
    "root",
    "active",
    "colorPrimary",
    "colorSecondary",
    "disabled",
    "dragging",
    "focusVisible",
    "mark",
    "markActive",
    "marked",
    "markLabel",
    "markLabelActive",
    "rail",
    "sizeSmall",
    "thumb",
    "thumbColorPrimary",
    "thumbColorSecondary",
    "track",
    "trackInverted",
    "trackFalse",
    "thumbSizeSmall",
    "valueLabel",
    "valueLabelOpen",
    "valueLabelCircle",
    "valueLabelLabel",
    "vertical",
  ]),
  an = mP,
  hP = (e) => {
    const { open: t } = e;
    return {
      offset: Q(t && an.valueLabelOpen),
      circle: an.valueLabelCircle,
      label: an.valueLabelLabel,
    };
  };
function vP(e) {
  const { children: t, className: n, value: r } = e,
    o = hP(e);
  return t
    ? S.cloneElement(
        t,
        { className: Q(t.props.className) },
        K(S.Fragment, {
          children: [
            t.props.children,
            P("span", {
              className: Q(o.offset, n),
              "aria-hidden": !0,
              children: P("span", {
                className: o.circle,
                children: P("span", { className: o.label, children: r }),
              }),
            }),
          ],
        })
      )
    : null;
}
const gP = [
  "aria-label",
  "aria-valuetext",
  "aria-labelledby",
  "component",
  "components",
  "componentsProps",
  "color",
  "classes",
  "className",
  "disableSwap",
  "disabled",
  "getAriaLabel",
  "getAriaValueText",
  "marks",
  "max",
  "min",
  "name",
  "onChange",
  "onChangeCommitted",
  "orientation",
  "size",
  "step",
  "scale",
  "slotProps",
  "slots",
  "tabIndex",
  "track",
  "value",
  "valueLabelDisplay",
  "valueLabelFormat",
];
function ym(e) {
  return e;
}
const yP = Y("span", {
    name: "MuiSlider",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[`color${X(n.color)}`],
        n.size !== "medium" && t[`size${X(n.size)}`],
        n.marked && t.marked,
        n.orientation === "vertical" && t.vertical,
        n.track === "inverted" && t.trackInverted,
        n.track === !1 && t.trackFalse,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    w(
      {
        borderRadius: 12,
        boxSizing: "content-box",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        touchAction: "none",
        color: (e.vars || e).palette[t.color].main,
        WebkitTapHighlightColor: "transparent",
      },
      t.orientation === "horizontal" &&
        w(
          {
            height: 4,
            width: "100%",
            padding: "13px 0",
            "@media (pointer: coarse)": { padding: "20px 0" },
          },
          t.size === "small" && { height: 2 },
          t.marked && { marginBottom: 20 }
        ),
      t.orientation === "vertical" &&
        w(
          {
            height: "100%",
            width: 4,
            padding: "0 13px",
            "@media (pointer: coarse)": { padding: "0 20px" },
          },
          t.size === "small" && { width: 2 },
          t.marked && { marginRight: 44 }
        ),
      {
        "@media print": { colorAdjust: "exact" },
        [`&.${an.disabled}`]: {
          pointerEvents: "none",
          cursor: "default",
          color: (e.vars || e).palette.grey[400],
        },
        [`&.${an.dragging}`]: {
          [`& .${an.thumb}, & .${an.track}`]: { transition: "none" },
        },
      }
    )
  ),
  xP = Y("span", {
    name: "MuiSlider",
    slot: "Rail",
    overridesResolver: (e, t) => t.rail,
  })(({ ownerState: e }) =>
    w(
      {
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        backgroundColor: "currentColor",
        opacity: 0.38,
      },
      e.orientation === "horizontal" && {
        width: "100%",
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)",
      },
      e.orientation === "vertical" && {
        height: "100%",
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)",
      },
      e.track === "inverted" && { opacity: 1 }
    )
  ),
  wP = Y("span", {
    name: "MuiSlider",
    slot: "Track",
    overridesResolver: (e, t) => t.track,
  })(({ theme: e, ownerState: t }) => {
    const n =
      e.palette.mode === "light"
        ? s0(e.palette[t.color].main, 0.62)
        : a0(e.palette[t.color].main, 0.5);
    return w(
      {
        display: "block",
        position: "absolute",
        borderRadius: "inherit",
        border: "1px solid currentColor",
        backgroundColor: "currentColor",
        transition: e.transitions.create(
          ["left", "width", "bottom", "height"],
          { duration: e.transitions.duration.shortest }
        ),
      },
      t.size === "small" && { border: "none" },
      t.orientation === "horizontal" && {
        height: "inherit",
        top: "50%",
        transform: "translateY(-50%)",
      },
      t.orientation === "vertical" && {
        width: "inherit",
        left: "50%",
        transform: "translateX(-50%)",
      },
      t.track === !1 && { display: "none" },
      t.track === "inverted" && {
        backgroundColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : n,
        borderColor: e.vars ? e.vars.palette.Slider[`${t.color}Track`] : n,
      }
    );
  }),
  SP = Y("span", {
    name: "MuiSlider",
    slot: "Thumb",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.thumb,
        t[`thumbColor${X(n.color)}`],
        n.size !== "medium" && t[`thumbSize${X(n.size)}`],
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    w(
      {
        position: "absolute",
        width: 20,
        height: 20,
        boxSizing: "border-box",
        borderRadius: "50%",
        outline: 0,
        backgroundColor: "currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: e.transitions.create(["box-shadow", "left", "bottom"], {
          duration: e.transitions.duration.shortest,
        }),
      },
      t.size === "small" && { width: 12, height: 12 },
      t.orientation === "horizontal" && {
        top: "50%",
        transform: "translate(-50%, -50%)",
      },
      t.orientation === "vertical" && {
        left: "50%",
        transform: "translate(-50%, 50%)",
      },
      {
        "&:before": w(
          {
            position: "absolute",
            content: '""',
            borderRadius: "inherit",
            width: "100%",
            height: "100%",
            boxShadow: (e.vars || e).shadows[2],
          },
          t.size === "small" && { boxShadow: "none" }
        ),
        "&::after": {
          position: "absolute",
          content: '""',
          borderRadius: "50%",
          width: 42,
          height: 42,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        },
        [`&:hover, &.${an.focusVisible}`]: {
          boxShadow: `0px 0px 0px 8px ${
            e.vars
              ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`
              : ln(e.palette[t.color].main, 0.16)
          }`,
          "@media (hover: none)": { boxShadow: "none" },
        },
        [`&.${an.active}`]: {
          boxShadow: `0px 0px 0px 14px ${
            e.vars
              ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`
              : ln(e.palette[t.color].main, 0.16)
          }`,
        },
        [`&.${an.disabled}`]: { "&:hover": { boxShadow: "none" } },
      }
    )
  ),
  kP = Y(vP, {
    name: "MuiSlider",
    slot: "ValueLabel",
    overridesResolver: (e, t) => t.valueLabel,
  })(({ theme: e, ownerState: t }) =>
    w(
      {
        [`&.${an.valueLabelOpen}`]: { transform: "translateY(-100%) scale(1)" },
        zIndex: 1,
        whiteSpace: "nowrap",
      },
      e.typography.body2,
      {
        fontWeight: 500,
        transition: e.transitions.create(["transform"], {
          duration: e.transitions.duration.shortest,
        }),
        transform: "translateY(-100%) scale(0)",
        position: "absolute",
        backgroundColor: (e.vars || e).palette.grey[600],
        borderRadius: 2,
        color: (e.vars || e).palette.common.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.25rem 0.75rem",
      },
      t.orientation === "horizontal" && {
        top: "-10px",
        transformOrigin: "bottom center",
        "&:before": {
          position: "absolute",
          content: '""',
          width: 8,
          height: 8,
          transform: "translate(-50%, 50%) rotate(45deg)",
          backgroundColor: "inherit",
          bottom: 0,
          left: "50%",
        },
      },
      t.orientation === "vertical" && {
        right: "30px",
        top: "24px",
        transformOrigin: "right center",
        "&:before": {
          position: "absolute",
          content: '""',
          width: 8,
          height: 8,
          transform: "translate(-50%, 50%) rotate(45deg)",
          backgroundColor: "inherit",
          right: "-20%",
          top: "25%",
        },
      },
      t.size === "small" && {
        fontSize: e.typography.pxToRem(12),
        padding: "0.25rem 0.5rem",
      }
    )
  ),
  bP = Y("span", {
    name: "MuiSlider",
    slot: "Mark",
    shouldForwardProp: (e) => w0(e) && e !== "markActive",
    overridesResolver: (e, t) => {
      const { markActive: n } = e;
      return [t.mark, n && t.markActive];
    },
  })(({ theme: e, ownerState: t, markActive: n }) =>
    w(
      {
        position: "absolute",
        width: 2,
        height: 2,
        borderRadius: 1,
        backgroundColor: "currentColor",
      },
      t.orientation === "horizontal" && {
        top: "50%",
        transform: "translate(-1px, -50%)",
      },
      t.orientation === "vertical" && {
        left: "50%",
        transform: "translate(-50%, 1px)",
      },
      n && {
        backgroundColor: (e.vars || e).palette.background.paper,
        opacity: 0.8,
      }
    )
  ),
  CP = Y("span", {
    name: "MuiSlider",
    slot: "MarkLabel",
    shouldForwardProp: (e) => w0(e) && e !== "markLabelActive",
    overridesResolver: (e, t) => t.markLabel,
  })(({ theme: e, ownerState: t, markLabelActive: n }) =>
    w(
      {},
      e.typography.body2,
      {
        color: (e.vars || e).palette.text.secondary,
        position: "absolute",
        whiteSpace: "nowrap",
      },
      t.orientation === "horizontal" && {
        top: 30,
        transform: "translateX(-50%)",
        "@media (pointer: coarse)": { top: 40 },
      },
      t.orientation === "vertical" && {
        left: 36,
        transform: "translateY(50%)",
        "@media (pointer: coarse)": { left: 44 },
      },
      n && { color: (e.vars || e).palette.text.primary }
    )
  ),
  EP = (e) => {
    const {
        disabled: t,
        dragging: n,
        marked: r,
        orientation: o,
        track: i,
        classes: l,
        color: a,
        size: s,
      } = e,
      u = {
        root: [
          "root",
          t && "disabled",
          n && "dragging",
          r && "marked",
          o === "vertical" && "vertical",
          i === "inverted" && "trackInverted",
          i === !1 && "trackFalse",
          a && `color${X(a)}`,
          s && `size${X(s)}`,
        ],
        rail: ["rail"],
        track: ["track"],
        mark: ["mark"],
        markActive: ["markActive"],
        markLabel: ["markLabel"],
        markLabelActive: ["markLabelActive"],
        valueLabel: ["valueLabel"],
        thumb: [
          "thumb",
          t && "disabled",
          s && `thumbSize${X(s)}`,
          a && `thumbColor${X(a)}`,
        ],
        active: ["active"],
        disabled: ["disabled"],
        focusVisible: ["focusVisible"],
      };
    return Le(u, pP, l);
  },
  PP = ({ children: e }) => e,
  $P = S.forwardRef(function (t, n) {
    var r, o, i, l, a, s, u, c, f, p, g, y, h, E, m, d, v, x, k, b, C, $, _, T;
    const z = Te({ props: t, name: "MuiSlider" }),
      j = Ns().direction === "rtl",
      {
        "aria-label": W,
        "aria-valuetext": F,
        "aria-labelledby": U,
        component: H = "span",
        components: R = {},
        componentsProps: M = {},
        color: N = "primary",
        classes: ee,
        className: te,
        disableSwap: ue = !1,
        disabled: ae = !1,
        getAriaLabel: Se,
        getAriaValueText: B,
        marks: se = !1,
        max: ie = 100,
        min: oe = 0,
        orientation: We = "horizontal",
        size: Ne = "medium",
        step: Ct = 1,
        scale: Xe = ym,
        slotProps: xe,
        slots: de,
        track: Et = "normal",
        valueLabelDisplay: Ye = "off",
        valueLabelFormat: mt = ym,
      } = z,
      qt = Z(z, gP),
      me = w({}, z, {
        isRtl: j,
        max: ie,
        min: oe,
        classes: ee,
        disabled: ae,
        disableSwap: ue,
        orientation: We,
        marks: se,
        color: N,
        size: Ne,
        step: Ct,
        scale: Xe,
        track: Et,
        valueLabelDisplay: Ye,
        valueLabelFormat: mt,
      }),
      {
        axisProps: Ue,
        getRootProps: Zt,
        getHiddenInputProps: Dt,
        getThumbProps: L,
        open: I,
        active: G,
        axis: q,
        focusedThumbIndex: Ce,
        range: D,
        dragging: he,
        marks: Ie,
        values: J,
        trackOffset: ht,
        trackLeap: dn,
      } = Ob(w({}, me, { ref: n }));
    (me.marked = Ie.length > 0 && Ie.some((Re) => Re.label)),
      (me.dragging = he),
      (me.focusedThumbIndex = Ce);
    const et = EP(me),
      Ar =
        (r = (o = de == null ? void 0 : de.root) != null ? o : R.Root) != null
          ? r
          : yP,
      Ao =
        (i = (l = de == null ? void 0 : de.rail) != null ? l : R.Rail) != null
          ? i
          : xP,
      ll =
        (a = (s = de == null ? void 0 : de.track) != null ? s : R.Track) != null
          ? a
          : wP,
      al =
        (u = (c = de == null ? void 0 : de.thumb) != null ? c : R.Thumb) != null
          ? u
          : SP,
      sl =
        (f =
          (p = de == null ? void 0 : de.valueLabel) != null
            ? p
            : R.ValueLabel) != null
          ? f
          : kP,
      Dr =
        (g = (y = de == null ? void 0 : de.mark) != null ? y : R.Mark) != null
          ? g
          : bP,
      Fr =
        (h =
          (E = de == null ? void 0 : de.markLabel) != null ? E : R.MarkLabel) !=
        null
          ? h
          : CP,
      Do =
        (m = (d = de == null ? void 0 : de.input) != null ? d : R.Input) != null
          ? m
          : "input",
      Br = (v = xe == null ? void 0 : xe.root) != null ? v : M.root,
      ul = (x = xe == null ? void 0 : xe.rail) != null ? x : M.rail,
      jr = (k = xe == null ? void 0 : xe.track) != null ? k : M.track,
      Fo = (b = xe == null ? void 0 : xe.thumb) != null ? b : M.thumb,
      Bo = (C = xe == null ? void 0 : xe.valueLabel) != null ? C : M.valueLabel,
      Ds = ($ = xe == null ? void 0 : xe.mark) != null ? $ : M.mark,
      jo = (_ = xe == null ? void 0 : xe.markLabel) != null ? _ : M.markLabel,
      Fs = (T = xe == null ? void 0 : xe.input) != null ? T : M.input,
      dr = En({
        elementType: Ar,
        getSlotProps: Zt,
        externalSlotProps: Br,
        externalForwardedProps: qt,
        additionalProps: w({}, fP(Ar) && { as: H }),
        ownerState: w({}, me, Br == null ? void 0 : Br.ownerState),
        className: [et.root, te],
      }),
      Wo = En({
        elementType: Ao,
        externalSlotProps: ul,
        ownerState: me,
        className: et.rail,
      }),
      Pt = En({
        elementType: ll,
        externalSlotProps: jr,
        additionalProps: { style: w({}, Ue[q].offset(ht), Ue[q].leap(dn)) },
        ownerState: w({}, me, jr == null ? void 0 : jr.ownerState),
        className: et.track,
      }),
      bn = En({
        elementType: al,
        getSlotProps: L,
        externalSlotProps: Fo,
        ownerState: w({}, me, Fo == null ? void 0 : Fo.ownerState),
        className: et.thumb,
      }),
      Bs = En({
        elementType: sl,
        externalSlotProps: Bo,
        ownerState: w({}, me, Bo == null ? void 0 : Bo.ownerState),
        className: et.valueLabel,
      }),
      Cn = En({
        elementType: Dr,
        externalSlotProps: Ds,
        ownerState: me,
        className: et.mark,
      }),
      fr = En({
        elementType: Fr,
        externalSlotProps: jo,
        ownerState: me,
        className: et.markLabel,
      }),
      cl = En({
        elementType: Do,
        getSlotProps: Dt,
        externalSlotProps: Fs,
        ownerState: me,
      });
    return K(
      Ar,
      w({}, dr, {
        children: [
          P(Ao, w({}, Wo)),
          P(ll, w({}, Pt)),
          Ie.filter((Re) => Re.value >= oe && Re.value <= ie).map((Re, Ve) => {
            const Wr = Oa(Re.value, oe, ie),
              Ur = Ue[q].offset(Wr);
            let Jt;
            return (
              Et === !1
                ? (Jt = J.indexOf(Re.value) !== -1)
                : (Jt =
                    (Et === "normal" &&
                      (D
                        ? Re.value >= J[0] && Re.value <= J[J.length - 1]
                        : Re.value <= J[0])) ||
                    (Et === "inverted" &&
                      (D
                        ? Re.value <= J[0] || Re.value >= J[J.length - 1]
                        : Re.value >= J[0]))),
              K(
                S.Fragment,
                {
                  children: [
                    P(
                      Dr,
                      w(
                        { "data-index": Ve },
                        Cn,
                        !wi(Dr) && { markActive: Jt },
                        {
                          style: w({}, Ur, Cn.style),
                          className: Q(Cn.className, Jt && et.markActive),
                        }
                      )
                    ),
                    Re.label != null
                      ? P(
                          Fr,
                          w(
                            { "aria-hidden": !0, "data-index": Ve },
                            fr,
                            !wi(Fr) && { markLabelActive: Jt },
                            {
                              style: w({}, Ur, fr.style),
                              className: Q(
                                et.markLabel,
                                fr.className,
                                Jt && et.markLabelActive
                              ),
                              children: Re.label,
                            }
                          )
                        )
                      : null,
                  ],
                },
                Ve
              )
            );
          }),
          J.map((Re, Ve) => {
            const Wr = Oa(Re, oe, ie),
              Ur = Ue[q].offset(Wr),
              Jt = Ye === "off" ? PP : sl;
            return P(
              Jt,
              w(
                {},
                !wi(Jt) && {
                  valueLabelFormat: mt,
                  valueLabelDisplay: Ye,
                  value: typeof mt == "function" ? mt(Xe(Re), Ve) : mt,
                  index: Ve,
                  open: I === Ve || G === Ve || Ye === "on",
                  disabled: ae,
                },
                Bs,
                {
                  children: P(
                    al,
                    w({ "data-index": Ve }, bn, {
                      className: Q(
                        et.thumb,
                        bn.className,
                        G === Ve && et.active,
                        Ce === Ve && et.focusVisible
                      ),
                      style: w(
                        {},
                        Ur,
                        { pointerEvents: ue && G !== Ve ? "none" : void 0 },
                        bn.style
                      ),
                      children: P(
                        Do,
                        w(
                          {
                            "data-index": Ve,
                            "aria-label": Se ? Se(Ve) : W,
                            "aria-valuenow": Xe(Re),
                            "aria-labelledby": U,
                            "aria-valuetext": B ? B(Xe(Re), Ve) : F,
                            value: J[Ve],
                          },
                          cl
                        )
                      ),
                    })
                  ),
                }
              ),
              Ve
            );
          }),
        ],
      })
    );
  }),
  $u = $P,
  TP = () => {
    const { settings: e, computed: t, setSettings: n } = ff(),
      { shouldOptimizeAnyWarmupOrCooldown: r, shouldOptimizeAnything: o } = t;
    return K(bi, {
      children: [
        P(Fe, {
          sx: { mb: 3 },
          children:
            "Go with our meaningful default options or fine tune them to get the best XP boost out of this optimization.",
        }),
        P(Su, {
          control: P(bu, {
            inputProps: { "aria-label": "controlled" },
            checked: e.steadyStateBlocks.active,
            onChange: (i) =>
              n({
                ...e,
                steadyStateBlocks: {
                  ...e.steadyStateBlocks,
                  active: i.target.checked,
                },
              }),
          }),
          label: "Optimize steady state blocks",
        }),
        e.steadyStateBlocks.active
          ? K(br, {
              children: [
                K(Fe, {
                  sx: { fontSize: "small" },
                  children: [
                    "Min. duration before steady state blocks are optimized (minutes)",
                    " ",
                    P(Pu, {
                      title:
                        "A steady state block must be this long or longer to be optimized. If it's shorter, it will remain as is.",
                      children: P(na, {}),
                    }),
                  ],
                }),
                P($u, {
                  "aria-label":
                    "Min. duration before steady state blocks are optimized (minutes)",
                  value: e.steadyStateBlocks.minimumDurationInMinutes,
                  onChange: (i) =>
                    n({
                      ...e,
                      steadyStateBlocks: {
                        ...e.steadyStateBlocks,
                        minimumDurationInMinutes: i.target.value,
                      },
                    }),
                  marks: !0,
                  max: 10,
                  min: 1,
                  getAriaValueText: (i) => `${i} min`,
                  step: 1,
                  valueLabelDisplay: "auto",
                }),
              ],
            })
          : null,
        P(bi, { sx: { m: 3 } }),
        P(Su, {
          control: P(bu, {
            inputProps: { "aria-label": "controlled" },
            checked: e.warmupAndCooldownBlocks.warmupActive,
            onChange: (i) =>
              n({
                ...e,
                warmupAndCooldownBlocks: {
                  ...e.warmupAndCooldownBlocks,
                  warmupActive: i.target.checked,
                },
              }),
          }),
          label: "Optimize warmups",
        }),
        P(Su, {
          control: P(bu, {
            inputProps: { "aria-label": "controlled" },
            checked: e.warmupAndCooldownBlocks.cooldownActive,
            onChange: (i) =>
              n({
                ...e,
                warmupAndCooldownBlocks: {
                  ...e.warmupAndCooldownBlocks,
                  cooldownActive: i.target.checked,
                },
              }),
          }),
          label: "Optimize cooldowns",
        }),
        r
          ? K(br, {
              children: [
                K(Fe, {
                  gutterBottom: !0,
                  sx: { fontSize: "small" },
                  children: [
                    "Min. duration before warmup/cooldown blocks are optimized (minutes)",
                    " ",
                    P(Pu, {
                      title:
                        "A warmup or cooldown block must be this long or longer to be optimized. If it's shorter, it will remain as is.",
                      children: P(na, {}),
                    }),
                  ],
                }),
                P($u, {
                  "aria-label":
                    "Min. duration before warmup or cooldown blocks are optimized (minutes)",
                  value: e.warmupAndCooldownBlocks.minimumDurationInMinutes,
                  onChange: (i) =>
                    n({
                      ...e,
                      warmupAndCooldownBlocks: {
                        ...e.warmupAndCooldownBlocks,
                        minimumDurationInMinutes: i.target.value,
                      },
                    }),
                  marks: !0,
                  max: 10,
                  min: 1,
                  getAriaValueText: (i) => `${i} min`,
                  step: 1,
                  valueLabelDisplay: "auto",
                }),
              ],
            })
          : null,
        P(bi, { sx: { m: 3 } }),
        o
          ? K(br, {
              children: [
                K(Fe, {
                  gutterBottom: !0,
                  sx: { fontSize: "small" },
                  children: [
                    "Desired total intervals block duration (seconds)",
                    " ",
                    P(Pu, {
                      title:
                        "If possible, intervals blocks created by the optimization algorithm will be this long in total (on and off part of the interval). Currently not considered for optimizing warmup/cooldown!",
                      children: P(na, {}),
                    }),
                  ],
                }),
                P($u, {
                  "aria-label":
                    "Desired total intervals block duration (seconds)",
                  value: e.intervalsBlockDurationInSeconds,
                  onChange: (i) =>
                    n({
                      ...e,
                      intervalsBlockDurationInSeconds: i.target.value,
                    }),
                  max: 1200,
                  min: 30,
                  getAriaValueText: (i) => `${i} seconds`,
                  step: 30,
                  marks: [
                    { value: 30, label: "0:30" },
                    { value: 180, label: "3:00" },
                    { value: 300, label: "5:00" },
                    { value: 600, label: "10:00" },
                    { value: 900, label: "15:00" },
                    { value: 1200, label: "20:00" },
                  ],
                  valueLabelDisplay: "auto",
                }),
              ],
            })
          : null,
      ],
    });
  },
  RP = () => {
    const { settings: e, setSettings: t } = ff();
    return P(br, {
      children: K("div", {
        style: { marginBottom: 20 },
        children: [
          e.selectedFiles.length
            ? K("p", {
                children: [
                  K("strong", {
                    children: [
                      "You selected ",
                      e.selectedFiles.length,
                      " .zwo files",
                    ],
                  }),
                  ". If that's your final choice, hit the blue button – or refine your file selection until you're satisfied.",
                ],
              })
            : K("p", {
                children: [
                  "Choose one or multiple Zwift workout files (.zwo) that you want to optimize at once. You can learn how to find your workout files using",
                  " ",
                  P("a", {
                    target: "_blank",
                    href: "https://zwiftinsider.com/load-custom-workouts/#:~:text=Zwift%20workout%20files%20are%20saved,)%2C%20then%20start%20up%20Zwift.",
                    children: "this article on ZwiftInsider.com",
                  }),
                  ".",
                ],
              }),
          P("input", {
            accept: ".zwo",
            multiple: !0,
            type: "file",
            onChange: (n) => t({ ...e, selectedFiles: n.target.files }),
          }),
        ],
      }),
    });
  },
  _P = () => null,
  Tu = ["Select .zwo file(s)", "Options", "Result"];
function OP(e) {
  switch (e) {
    case 0:
      return P(RP, {});
    case 1:
      return P(TP, {});
    case 2:
      return P(_P, {});
    default:
      throw new Error("Unknown step");
  }
}
const MP = () => {
    const { settings: e, computed: t, reset: n } = ff(),
      { shouldOptimizeAnything: r } = t,
      [o, i] = S.useState(0),
      l = () => {
        i(o + 1);
      },
      a = (o === 0 && e.selectedFiles.length) || (o === 1 && r) || o === 2,
      s = () => i(o - 1),
      u = () => {
        n(), i(0);
      };
    return K(z2, {
      component: "main",
      maxWidth: "sm",
      sx: { mb: 4 },
      children: [
        P(bi, { sx: { my: { xs: 3, md: 6 } }, children: P(gE, {}) }),
        K(lf, {
          variant: "outlined",
          sx: { my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } },
          children: [
            P(Fe, {
              component: "h1",
              variant: "h4",
              align: "center",
              children: "Let's optimize!",
            }),
            P(o2, {
              activeStep: o,
              sx: { pt: 3, pb: 5 },
              children: Tu.map((c) =>
                P(c2, { children: P(M2, { children: c }) }, c)
              ),
            }),
            o === Tu.length
              ? K(br, {
                  children: [
                    P(Fe, {
                      typography: { fontWeight: "bold" },
                      children: "Finished!",
                    }),
                    K(Fe, {
                      sx: { mb: 3 },
                      children: [
                        "The optimized file(s) were put out as a download. You just have to move them into your Zwift custom workouts folder now and start training again.",
                        P("br", {}),
                        "Have fun and happy leveling!",
                      ],
                    }),
                    P(gu, {
                      variant: "contained",
                      onClick: u,
                      children: "Start again",
                    }),
                  ],
                })
              : K(br, {
                  children: [
                    OP(o),
                    K(bi, {
                      sx: { display: "flex", justifyContent: "flex-end" },
                      children: [
                        o !== 0 &&
                          P(gu, {
                            onClick: s,
                            sx: { mt: 3, ml: 1 },
                            children: "Back",
                          }),
                        P(gu, {
                          variant: "contained",
                          onClick: l,
                          disabled: !a,
                          sx: { mt: 3, ml: 1 },
                          children:
                            o === Tu.length - 1 ? "Optimize now!" : "Next",
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        }),
      ],
    });
  },
  LP = Yd({
    palette: {
      primary: { main: "#556cd6" },
      secondary: { main: "#19857b" },
      error: { main: hr.A400 },
    },
  });
_u.createRoot(document.getElementById("root")).render(
  P(on.StrictMode, {
    children: P(yE, {
      children: K(aS, {
        theme: LP,
        children: [
          P(ZS, {}),
          P(Vb, {
            position: "absolute",
            color: "default",
            elevation: 0,
            sx: {
              position: "relative",
              borderBottom: (e) => `1px solid ${e.palette.divider}`,
            },
            children: P(Yb, {
              children: P(Fe, {
                variant: "h6",
                color: "inherit",
                noWrap: !0,
                children: "Optimize Zwift workouts for maximum XP",
              }),
            }),
          }),
          P(MP, {}),
        ],
      }),
    }),
  })
);
