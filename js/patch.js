var CABLES;
!function (t, e) {
  if ('object' == typeof exports && 'object' == typeof module) module.exports = e();
   else if ('function' == typeof define && define.amd) define([], e);
   else {
    var i = e();
    for (var n in i) ('object' == typeof exports ? exports : t) [n] = i[n]
  }
}(this, function () {
  return function (t) {
    function e(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = {
        exports: {
        },
        id: n,
        loaded: !1
      };
      return t[n].call(r.exports, r, r.exports, e),
      r.loaded = !0,
      r.exports
    }
    var i = {
    };
    return e.m = t,
    e.c = i,
    e.p = '',
    e(0)
  }([function (t, e, i) {
    e.glMatrix = i(1),
    e.mat2 = i(2),
    e.mat2d = i(3),
    e.mat3 = i(4),
    e.mat4 = i(5),
    e.quat = i(6),
    e.vec2 = i(9),
    e.vec3 = i(7),
    e.vec4 = i(8)
  },
  function (t, e) {
    var i = {
      EPSILON: 0.000001
    };
    i.ARRAY_TYPE = 'undefined' != typeof Float32Array ? Float32Array : Array,
    i.RANDOM = Math.random,
    i.ENABLE_SIMD = !1,
    i.SIMD_AVAILABLE = i.ARRAY_TYPE === this.Float32Array && 'SIMD' in this,
    i.USE_SIMD = i.ENABLE_SIMD && i.SIMD_AVAILABLE,
    i.setMatrixArrayType = function (t) {
      i.ARRAY_TYPE = t
    };
    var n = Math.PI / 180;
    i.toRadian = function (t) {
      return t * n
    },
    i.equals = function (t, e) {
      return Math.abs(t - e) <= i.EPSILON * Math.max(1, Math.abs(t), Math.abs(e))
    },
    t.exports = i
  },
  function (t, e, i) {
    var n = i(1),
    r = {
      create: function () {
        var t = new n.ARRAY_TYPE(4);
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t
      },
      clone: function (t) {
        var e = new n.ARRAY_TYPE(4);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e
      },
      copy: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
      },
      identity: function (t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t
      },
      fromValues: function (t, e, i, r) {
        var s = new n.ARRAY_TYPE(4);
        return s[0] = t,
        s[1] = e,
        s[2] = i,
        s[3] = r,
        s
      },
      set: function (t, e, i, n, r) {
        return t[0] = e,
        t[1] = i,
        t[2] = n,
        t[3] = r,
        t
      },
      transpose: function (t, e) {
        if (t === e) {
          var i = e[1];
          t[1] = e[2],
          t[2] = i
        } else t[0] = e[0],
        t[1] = e[2],
        t[2] = e[1],
        t[3] = e[3];
        return t
      },
      invert: function (t, e) {
        var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = i * s - r * n;
        return o ? (o = 1 / o, t[0] = s * o, t[1] = - n * o, t[2] = - r * o, t[3] = i * o, t)  : null
      },
      adjoint: function (t, e) {
        var i = e[0];
        return t[0] = e[3],
        t[1] = - e[1],
        t[2] = - e[2],
        t[3] = i,
        t
      },
      determinant: function (t) {
        return t[0] * t[3] - t[2] * t[1]
      },
      multiply: function (t, e, i) {
        var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = i[0],
        l = i[1],
        h = i[2],
        u = i[3];
        return t[0] = n * a + s * l,
        t[1] = r * a + o * l,
        t[2] = n * h + s * u,
        t[3] = r * h + o * u,
        t
      }
    };
    r.mul = r.multiply,
    r.rotate = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = Math.sin(i),
      l = Math.cos(i);
      return t[0] = n * l + s * a,
      t[1] = r * l + o * a,
      t[2] = n * - a + s * l,
      t[3] = r * - a + o * l,
      t
    },
    r.scale = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = i[0],
      l = i[1];
      return t[0] = n * a,
      t[1] = r * a,
      t[2] = s * l,
      t[3] = o * l,
      t
    },
    r.fromRotation = function (t, e) {
      var i = Math.sin(e),
      n = Math.cos(e);
      return t[0] = n,
      t[1] = i,
      t[2] = - i,
      t[3] = n,
      t
    },
    r.fromScaling = function (t, e) {
      return t[0] = e[0],
      t[1] = 0,
      t[2] = 0,
      t[3] = e[1],
      t
    },
    r.str = function (t) {
      return 'mat2(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
    },
    r.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2))
    },
    r.LDU = function (t, e, i, n) {
      return t[2] = n[2] / n[0],
      i[0] = n[0],
      i[1] = n[1],
      i[3] = n[3] - t[2] * i[1],
      [
        t,
        e,
        i
      ]
    },
    r.add = function (t, e, i) {
      return t[0] = e[0] + i[0],
      t[1] = e[1] + i[1],
      t[2] = e[2] + i[2],
      t[3] = e[3] + i[3],
      t
    },
    r.subtract = function (t, e, i) {
      return t[0] = e[0] - i[0],
      t[1] = e[1] - i[1],
      t[2] = e[2] - i[2],
      t[3] = e[3] - i[3],
      t
    },
    r.sub = r.subtract,
    r.exactEquals = function (t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    },
    r.equals = function (t, e) {
      var i = t[0],
      r = t[1],
      s = t[2],
      o = t[3],
      a = e[0],
      l = e[1],
      h = e[2],
      u = e[3];
      return Math.abs(i - a) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(r - l) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(s - h) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(h)) && Math.abs(o - u) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(u))
    },
    r.multiplyScalar = function (t, e, i) {
      return t[0] = e[0] * i,
      t[1] = e[1] * i,
      t[2] = e[2] * i,
      t[3] = e[3] * i,
      t
    },
    r.multiplyScalarAndAdd = function (t, e, i, n) {
      return t[0] = e[0] + i[0] * n,
      t[1] = e[1] + i[1] * n,
      t[2] = e[2] + i[2] * n,
      t[3] = e[3] + i[3] * n,
      t
    },
    t.exports = r
  },
  function (t, e, i) {
    var n = i(1),
    r = {
      create: function () {
        var t = new n.ARRAY_TYPE(6);
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t[4] = 0,
        t[5] = 0,
        t
      },
      clone: function (t) {
        var e = new n.ARRAY_TYPE(6);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e
      },
      copy: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t
      },
      identity: function (t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t[4] = 0,
        t[5] = 0,
        t
      },
      fromValues: function (t, e, i, r, s, o) {
        var a = new n.ARRAY_TYPE(6);
        return a[0] = t,
        a[1] = e,
        a[2] = i,
        a[3] = r,
        a[4] = s,
        a[5] = o,
        a
      },
      set: function (t, e, i, n, r, s, o) {
        return t[0] = e,
        t[1] = i,
        t[2] = n,
        t[3] = r,
        t[4] = s,
        t[5] = o,
        t
      },
      invert: function (t, e) {
        var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        l = i * s - n * r;
        return l ? (l = 1 / l, t[0] = s * l, t[1] = - n * l, t[2] = - r * l, t[3] = i * l, t[4] = (r * a - s * o) * l, t[5] = (n * o - i * a) * l, t)  : null
      },
      determinant: function (t) {
        return t[0] * t[3] - t[1] * t[2]
      },
      multiply: function (t, e, i) {
        var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4],
        l = e[5],
        h = i[0],
        u = i[1],
        c = i[2],
        d = i[3],
        p = i[4],
        g = i[5];
        return t[0] = n * h + s * u,
        t[1] = r * h + o * u,
        t[2] = n * c + s * d,
        t[3] = r * c + o * d,
        t[4] = n * p + s * g + a,
        t[5] = r * p + o * g + l,
        t
      }
    };
    r.mul = r.multiply,
    r.rotate = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = Math.sin(i),
      u = Math.cos(i);
      return t[0] = n * u + s * h,
      t[1] = r * u + o * h,
      t[2] = n * - h + s * u,
      t[3] = r * - h + o * u,
      t[4] = a,
      t[5] = l,
      t
    },
    r.scale = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = i[0],
      u = i[1];
      return t[0] = n * h,
      t[1] = r * h,
      t[2] = s * u,
      t[3] = o * u,
      t[4] = a,
      t[5] = l,
      t
    },
    r.translate = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = i[0],
      u = i[1];
      return t[0] = n,
      t[1] = r,
      t[2] = s,
      t[3] = o,
      t[4] = n * h + s * u + a,
      t[5] = r * h + o * u + l,
      t
    },
    r.fromRotation = function (t, e) {
      var i = Math.sin(e),
      n = Math.cos(e);
      return t[0] = n,
      t[1] = i,
      t[2] = - i,
      t[3] = n,
      t[4] = 0,
      t[5] = 0,
      t
    },
    r.fromScaling = function (t, e) {
      return t[0] = e[0],
      t[1] = 0,
      t[2] = 0,
      t[3] = e[1],
      t[4] = 0,
      t[5] = 0,
      t
    },
    r.fromTranslation = function (t, e) {
      return t[0] = 1,
      t[1] = 0,
      t[2] = 0,
      t[3] = 1,
      t[4] = e[0],
      t[5] = e[1],
      t
    },
    r.str = function (t) {
      return 'mat2d(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ')'
    },
    r.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + 1)
    },
    r.add = function (t, e, i) {
      return t[0] = e[0] + i[0],
      t[1] = e[1] + i[1],
      t[2] = e[2] + i[2],
      t[3] = e[3] + i[3],
      t[4] = e[4] + i[4],
      t[5] = e[5] + i[5],
      t
    },
    r.subtract = function (t, e, i) {
      return t[0] = e[0] - i[0],
      t[1] = e[1] - i[1],
      t[2] = e[2] - i[2],
      t[3] = e[3] - i[3],
      t[4] = e[4] - i[4],
      t[5] = e[5] - i[5],
      t
    },
    r.sub = r.subtract,
    r.multiplyScalar = function (t, e, i) {
      return t[0] = e[0] * i,
      t[1] = e[1] * i,
      t[2] = e[2] * i,
      t[3] = e[3] * i,
      t[4] = e[4] * i,
      t[5] = e[5] * i,
      t
    },
    r.multiplyScalarAndAdd = function (t, e, i, n) {
      return t[0] = e[0] + i[0] * n,
      t[1] = e[1] + i[1] * n,
      t[2] = e[2] + i[2] * n,
      t[3] = e[3] + i[3] * n,
      t[4] = e[4] + i[4] * n,
      t[5] = e[5] + i[5] * n,
      t
    },
    r.exactEquals = function (t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5]
    },
    r.equals = function (t, e) {
      var i = t[0],
      r = t[1],
      s = t[2],
      o = t[3],
      a = t[4],
      l = t[5],
      h = e[0],
      u = e[1],
      c = e[2],
      d = e[3],
      p = e[4],
      g = e[5];
      return Math.abs(i - h) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(h)) && Math.abs(r - u) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(s - c) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(c)) && Math.abs(o - d) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(d)) && Math.abs(a - p) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(p)) && Math.abs(l - g) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(g))
    },
    t.exports = r
  },
  function (t, e, i) {
    var n = i(1),
    r = {
      create: function () {
        var t = new n.ARRAY_TYPE(9);
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 1,
        t[5] = 0,
        t[6] = 0,
        t[7] = 0,
        t[8] = 1,
        t
      },
      fromMat4: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[4],
        t[4] = e[5],
        t[5] = e[6],
        t[6] = e[8],
        t[7] = e[9],
        t[8] = e[10],
        t
      },
      clone: function (t) {
        var e = new n.ARRAY_TYPE(9);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[8] = t[8],
        e
      },
      copy: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t
      },
      fromValues: function (t, e, i, r, s, o, a, l, h) {
        var u = new n.ARRAY_TYPE(9);
        return u[0] = t,
        u[1] = e,
        u[2] = i,
        u[3] = r,
        u[4] = s,
        u[5] = o,
        u[6] = a,
        u[7] = l,
        u[8] = h,
        u
      },
      set: function (t, e, i, n, r, s, o, a, l, h) {
        return t[0] = e,
        t[1] = i,
        t[2] = n,
        t[3] = r,
        t[4] = s,
        t[5] = o,
        t[6] = a,
        t[7] = l,
        t[8] = h,
        t
      },
      identity: function (t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 1,
        t[5] = 0,
        t[6] = 0,
        t[7] = 0,
        t[8] = 1,
        t
      },
      transpose: function (t, e) {
        if (t === e) {
          var i = e[1],
          n = e[2],
          r = e[5];
          t[1] = e[3],
          t[2] = e[6],
          t[3] = i,
          t[5] = e[7],
          t[6] = n,
          t[7] = r
        } else t[0] = e[0],
        t[1] = e[3],
        t[2] = e[6],
        t[3] = e[1],
        t[4] = e[4],
        t[5] = e[7],
        t[6] = e[2],
        t[7] = e[5],
        t[8] = e[8];
        return t
      },
      invert: function (t, e) {
        var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        l = e[6],
        h = e[7],
        u = e[8],
        c = u * o - a * h,
        d = - u * s + a * l,
        p = h * s - o * l,
        g = i * c + n * d + r * p;
        return g ? (g = 1 / g, t[0] = c * g, t[1] = ( - u * n + r * h) * g, t[2] = (a * n - r * o) * g, t[3] = d * g, t[4] = (u * i - r * l) * g, t[5] = ( - a * i + r * s) * g, t[6] = p * g, t[7] = ( - h * i + n * l) * g, t[8] = (o * i - n * s) * g, t)  : null
      },
      adjoint: function (t, e) {
        var i = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        l = e[6],
        h = e[7],
        u = e[8];
        return t[0] = o * u - a * h,
        t[1] = r * h - n * u,
        t[2] = n * a - r * o,
        t[3] = a * l - s * u,
        t[4] = i * u - r * l,
        t[5] = r * s - i * a,
        t[6] = s * h - o * l,
        t[7] = n * l - i * h,
        t[8] = i * o - n * s,
        t
      },
      determinant: function (t) {
        var e = t[0],
        i = t[1],
        n = t[2],
        r = t[3],
        s = t[4],
        o = t[5],
        a = t[6],
        l = t[7],
        h = t[8];
        return e * (h * s - o * l) + i * ( - h * r + o * a) + n * (l * r - s * a)
      },
      multiply: function (t, e, i) {
        var n = e[0],
        r = e[1],
        s = e[2],
        o = e[3],
        a = e[4],
        l = e[5],
        h = e[6],
        u = e[7],
        c = e[8],
        d = i[0],
        p = i[1],
        g = i[2],
        f = i[3],
        _ = i[4],
        m = i[5],
        b = i[6],
        v = i[7],
        I = i[8];
        return t[0] = d * n + p * o + g * h,
        t[1] = d * r + p * a + g * u,
        t[2] = d * s + p * l + g * c,
        t[3] = f * n + _ * o + m * h,
        t[4] = f * r + _ * a + m * u,
        t[5] = f * s + _ * l + m * c,
        t[6] = b * n + v * o + I * h,
        t[7] = b * r + v * a + I * u,
        t[8] = b * s + v * l + I * c,
        t
      }
    };
    r.mul = r.multiply,
    r.translate = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = e[6],
      u = e[7],
      c = e[8],
      d = i[0],
      p = i[1];
      return t[0] = n,
      t[1] = r,
      t[2] = s,
      t[3] = o,
      t[4] = a,
      t[5] = l,
      t[6] = d * n + p * o + h,
      t[7] = d * r + p * a + u,
      t[8] = d * s + p * l + c,
      t
    },
    r.rotate = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = e[6],
      u = e[7],
      c = e[8],
      d = Math.sin(i),
      p = Math.cos(i);
      return t[0] = p * n + d * o,
      t[1] = p * r + d * a,
      t[2] = p * s + d * l,
      t[3] = p * o - d * n,
      t[4] = p * a - d * r,
      t[5] = p * l - d * s,
      t[6] = h,
      t[7] = u,
      t[8] = c,
      t
    },
    r.scale = function (t, e, i) {
      var n = i[0],
      r = i[1];
      return t[0] = n * e[0],
      t[1] = n * e[1],
      t[2] = n * e[2],
      t[3] = r * e[3],
      t[4] = r * e[4],
      t[5] = r * e[5],
      t[6] = e[6],
      t[7] = e[7],
      t[8] = e[8],
      t
    },
    r.fromTranslation = function (t, e) {
      return t[0] = 1,
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 1,
      t[5] = 0,
      t[6] = e[0],
      t[7] = e[1],
      t[8] = 1,
      t
    },
    r.fromRotation = function (t, e) {
      var i = Math.sin(e),
      n = Math.cos(e);
      return t[0] = n,
      t[1] = i,
      t[2] = 0,
      t[3] = - i,
      t[4] = n,
      t[5] = 0,
      t[6] = 0,
      t[7] = 0,
      t[8] = 1,
      t
    },
    r.fromScaling = function (t, e) {
      return t[0] = e[0],
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = e[1],
      t[5] = 0,
      t[6] = 0,
      t[7] = 0,
      t[8] = 1,
      t
    },
    r.fromMat2d = function (t, e) {
      return t[0] = e[0],
      t[1] = e[1],
      t[2] = 0,
      t[3] = e[2],
      t[4] = e[3],
      t[5] = 0,
      t[6] = e[4],
      t[7] = e[5],
      t[8] = 1,
      t
    },
    r.fromQuat = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = i + i,
      a = n + n,
      l = r + r,
      h = i * o,
      u = n * o,
      c = n * a,
      d = r * o,
      p = r * a,
      g = r * l,
      f = s * o,
      _ = s * a,
      m = s * l;
      return t[0] = 1 - c - g,
      t[3] = u - m,
      t[6] = d + _,
      t[1] = u + m,
      t[4] = 1 - h - g,
      t[7] = p - f,
      t[2] = d - _,
      t[5] = p + f,
      t[8] = 1 - h - c,
      t
    },
    r.normalFromMat4 = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      h = e[7],
      u = e[8],
      c = e[9],
      d = e[10],
      p = e[11],
      g = e[12],
      f = e[13],
      _ = e[14],
      m = e[15],
      b = i * a - n * o,
      v = i * l - r * o,
      I = i * h - s * o,
      E = n * l - r * a,
      M = n * h - s * a,
      A = r * h - s * l,
      x = u * f - c * g,
      O = u * _ - d * g,
      T = u * m - p * g,
      S = c * _ - d * f,
      y = c * m - p * f,
      P = d * m - p * _,
      R = b * P - v * y + I * S + E * T - M * O + A * x;
      return R ? (R = 1 / R, t[0] = (a * P - l * y + h * S) * R, t[1] = (l * T - o * P - h * O) * R, t[2] = (o * y - a * T + h * x) * R, t[3] = (r * y - n * P - s * S) * R, t[4] = (i * P - r * T + s * O) * R, t[5] = (n * T - i * y - s * x) * R, t[6] = (f * A - _ * M + m * E) * R, t[7] = (_ * I - g * A - m * v) * R, t[8] = (g * M - f * I + m * b) * R, t)  : null
    },
    r.str = function (t) {
      return 'mat3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ', ' + t[6] + ', ' + t[7] + ', ' + t[8] + ')'
    },
    r.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2))
    },
    r.add = function (t, e, i) {
      return t[0] = e[0] + i[0],
      t[1] = e[1] + i[1],
      t[2] = e[2] + i[2],
      t[3] = e[3] + i[3],
      t[4] = e[4] + i[4],
      t[5] = e[5] + i[5],
      t[6] = e[6] + i[6],
      t[7] = e[7] + i[7],
      t[8] = e[8] + i[8],
      t
    },
    r.subtract = function (t, e, i) {
      return t[0] = e[0] - i[0],
      t[1] = e[1] - i[1],
      t[2] = e[2] - i[2],
      t[3] = e[3] - i[3],
      t[4] = e[4] - i[4],
      t[5] = e[5] - i[5],
      t[6] = e[6] - i[6],
      t[7] = e[7] - i[7],
      t[8] = e[8] - i[8],
      t
    },
    r.sub = r.subtract,
    r.multiplyScalar = function (t, e, i) {
      return t[0] = e[0] * i,
      t[1] = e[1] * i,
      t[2] = e[2] * i,
      t[3] = e[3] * i,
      t[4] = e[4] * i,
      t[5] = e[5] * i,
      t[6] = e[6] * i,
      t[7] = e[7] * i,
      t[8] = e[8] * i,
      t
    },
    r.multiplyScalarAndAdd = function (t, e, i, n) {
      return t[0] = e[0] + i[0] * n,
      t[1] = e[1] + i[1] * n,
      t[2] = e[2] + i[2] * n,
      t[3] = e[3] + i[3] * n,
      t[4] = e[4] + i[4] * n,
      t[5] = e[5] + i[5] * n,
      t[6] = e[6] + i[6] * n,
      t[7] = e[7] + i[7] * n,
      t[8] = e[8] + i[8] * n,
      t
    },
    r.exactEquals = function (t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8]
    },
    r.equals = function (t, e) {
      var i = t[0],
      r = t[1],
      s = t[2],
      o = t[3],
      a = t[4],
      l = t[5],
      h = t[6],
      u = t[7],
      c = t[8],
      d = e[0],
      p = e[1],
      g = e[2],
      f = e[3],
      _ = e[4],
      m = e[5],
      b = t[6],
      v = e[7],
      I = e[8];
      return Math.abs(i - d) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(r - p) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(p)) && Math.abs(s - g) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(g)) && Math.abs(o - f) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(f)) && Math.abs(a - _) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(_)) && Math.abs(l - m) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(m)) && Math.abs(h - b) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(b)) && Math.abs(u - v) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(v)) && Math.abs(c - I) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(I))
    },
    t.exports = r
  },
  function (t, e, i) {
    var n = i(1),
    r = {
      scalar: {
      },
      SIMD: {
      },
      create: function () {
        var t = new n.ARRAY_TYPE(16);
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = 1,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 1,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
      },
      clone: function (t) {
        var e = new n.ARRAY_TYPE(16);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[8] = t[8],
        e[9] = t[9],
        e[10] = t[10],
        e[11] = t[11],
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15],
        e
      },
      copy: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t[4] = e[4],
        t[5] = e[5],
        t[6] = e[6],
        t[7] = e[7],
        t[8] = e[8],
        t[9] = e[9],
        t[10] = e[10],
        t[11] = e[11],
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        t[15] = e[15],
        t
      },
      fromValues: function (t, e, i, r, s, o, a, l, h, u, c, d, p, g, f, _) {
        var m = new n.ARRAY_TYPE(16);
        return m[0] = t,
        m[1] = e,
        m[2] = i,
        m[3] = r,
        m[4] = s,
        m[5] = o,
        m[6] = a,
        m[7] = l,
        m[8] = h,
        m[9] = u,
        m[10] = c,
        m[11] = d,
        m[12] = p,
        m[13] = g,
        m[14] = f,
        m[15] = _,
        m
      },
      set: function (t, e, i, n, r, s, o, a, l, h, u, c, d, p, g, f, _) {
        return t[0] = e,
        t[1] = i,
        t[2] = n,
        t[3] = r,
        t[4] = s,
        t[5] = o,
        t[6] = a,
        t[7] = l,
        t[8] = h,
        t[9] = u,
        t[10] = c,
        t[11] = d,
        t[12] = p,
        t[13] = g,
        t[14] = f,
        t[15] = _,
        t
      },
      identity: function (t) {
        return t[0] = 1,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t[4] = 0,
        t[5] = 1,
        t[6] = 0,
        t[7] = 0,
        t[8] = 0,
        t[9] = 0,
        t[10] = 1,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        t
      }
    };
    r.scalar.transpose = function (t, e) {
      if (t === e) {
        var i = e[1],
        n = e[2],
        r = e[3],
        s = e[6],
        o = e[7],
        a = e[11];
        t[1] = e[4],
        t[2] = e[8],
        t[3] = e[12],
        t[4] = i,
        t[6] = e[9],
        t[7] = e[13],
        t[8] = n,
        t[9] = s,
        t[11] = e[14],
        t[12] = r,
        t[13] = o,
        t[14] = a
      } else t[0] = e[0],
      t[1] = e[4],
      t[2] = e[8],
      t[3] = e[12],
      t[4] = e[1],
      t[5] = e[5],
      t[6] = e[9],
      t[7] = e[13],
      t[8] = e[2],
      t[9] = e[6],
      t[10] = e[10],
      t[11] = e[14],
      t[12] = e[3],
      t[13] = e[7],
      t[14] = e[11],
      t[15] = e[15];
      return t
    },
    r.SIMD.transpose = function (t, e) {
      var i,
      n,
      r,
      s,
      o,
      a,
      l,
      h,
      u,
      c;
      return i = SIMD.Float32x4.load(e, 0),
      n = SIMD.Float32x4.load(e, 4),
      r = SIMD.Float32x4.load(e, 8),
      s = SIMD.Float32x4.load(e, 12),
      o = SIMD.Float32x4.shuffle(i, n, 0, 1, 4, 5),
      a = SIMD.Float32x4.shuffle(r, s, 0, 1, 4, 5),
      l = SIMD.Float32x4.shuffle(o, a, 0, 2, 4, 6),
      h = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7),
      SIMD.Float32x4.store(t, 0, l),
      SIMD.Float32x4.store(t, 4, h),
      o = SIMD.Float32x4.shuffle(i, n, 2, 3, 6, 7),
      a = SIMD.Float32x4.shuffle(r, s, 2, 3, 6, 7),
      u = SIMD.Float32x4.shuffle(o, a, 0, 2, 4, 6),
      c = SIMD.Float32x4.shuffle(o, a, 1, 3, 5, 7),
      SIMD.Float32x4.store(t, 8, u),
      SIMD.Float32x4.store(t, 12, c),
      t
    },
    r.transpose = n.USE_SIMD ? r.SIMD.transpose : r.scalar.transpose,
    r.scalar.invert = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      h = e[7],
      u = e[8],
      c = e[9],
      d = e[10],
      p = e[11],
      g = e[12],
      f = e[13],
      _ = e[14],
      m = e[15],
      b = i * a - n * o,
      v = i * l - r * o,
      I = i * h - s * o,
      E = n * l - r * a,
      M = n * h - s * a,
      A = r * h - s * l,
      x = u * f - c * g,
      O = u * _ - d * g,
      T = u * m - p * g,
      S = c * _ - d * f,
      y = c * m - p * f,
      P = d * m - p * _,
      R = b * P - v * y + I * S + E * T - M * O + A * x;
      return R ? (R = 1 / R, t[0] = (a * P - l * y + h * S) * R, t[1] = (r * y - n * P - s * S) * R, t[2] = (f * A - _ * M + m * E) * R, t[3] = (d * M - c * A - p * E) * R, t[4] = (l * T - o * P - h * O) * R, t[5] = (i * P - r * T + s * O) * R, t[6] = (_ * I - g * A - m * v) * R, t[7] = (u * A - d * I + p * v) * R, t[8] = (o * y - a * T + h * x) * R, t[9] = (n * T - i * y - s * x) * R, t[10] = (g * M - f * I + m * b) * R, t[11] = (c * I - u * M - p * b) * R, t[12] = (a * O - o * S - l * x) * R, t[13] = (i * S - n * O + r * x) * R, t[14] = (f * v - g * E - _ * b) * R, t[15] = (u * E - c * v + d * b) * R, t)  : null
    },
    r.SIMD.invert = function (t, e) {
      var i,
      n,
      r,
      s,
      o,
      a,
      l,
      h,
      u,
      c,
      d = SIMD.Float32x4.load(e, 0),
      p = SIMD.Float32x4.load(e, 4),
      g = SIMD.Float32x4.load(e, 8),
      f = SIMD.Float32x4.load(e, 12);
      return o = SIMD.Float32x4.shuffle(d, p, 0, 1, 4, 5),
      n = SIMD.Float32x4.shuffle(g, f, 0, 1, 4, 5),
      i = SIMD.Float32x4.shuffle(o, n, 0, 2, 4, 6),
      n = SIMD.Float32x4.shuffle(n, o, 1, 3, 5, 7),
      o = SIMD.Float32x4.shuffle(d, p, 2, 3, 6, 7),
      s = SIMD.Float32x4.shuffle(g, f, 2, 3, 6, 7),
      r = SIMD.Float32x4.shuffle(o, s, 0, 2, 4, 6),
      s = SIMD.Float32x4.shuffle(s, o, 1, 3, 5, 7),
      o = SIMD.Float32x4.mul(r, s),
      o = SIMD.Float32x4.swizzle(o, 1, 0, 3, 2),
      a = SIMD.Float32x4.mul(n, o),
      l = SIMD.Float32x4.mul(i, o),
      o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1),
      a = SIMD.Float32x4.sub(SIMD.Float32x4.mul(n, o), a),
      l = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, o), l),
      l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1),
      o = SIMD.Float32x4.mul(n, r),
      o = SIMD.Float32x4.swizzle(o, 1, 0, 3, 2),
      a = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, o), a),
      u = SIMD.Float32x4.mul(i, o),
      o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1),
      a = SIMD.Float32x4.sub(a, SIMD.Float32x4.mul(s, o)),
      u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, o), u),
      u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
      o = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(n, 2, 3, 0, 1), s),
      o = SIMD.Float32x4.swizzle(o, 1, 0, 3, 2),
      r = SIMD.Float32x4.swizzle(r, 2, 3, 0, 1),
      a = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, o), a),
      h = SIMD.Float32x4.mul(i, o),
      o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1),
      a = SIMD.Float32x4.sub(a, SIMD.Float32x4.mul(r, o)),
      h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(i, o), h),
      h = SIMD.Float32x4.swizzle(h, 2, 3, 0, 1),
      o = SIMD.Float32x4.mul(i, n),
      o = SIMD.Float32x4.swizzle(o, 1, 0, 3, 2),
      h = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, o), h),
      u = SIMD.Float32x4.sub(SIMD.Float32x4.mul(r, o), u),
      o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1),
      h = SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, o), h),
      u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(r, o)),
      o = SIMD.Float32x4.mul(i, s),
      o = SIMD.Float32x4.swizzle(o, 1, 0, 3, 2),
      l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(r, o)),
      h = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, o), h),
      o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1),
      l = SIMD.Float32x4.add(SIMD.Float32x4.mul(r, o), l),
      h = SIMD.Float32x4.sub(h, SIMD.Float32x4.mul(n, o)),
      o = SIMD.Float32x4.mul(i, r),
      o = SIMD.Float32x4.swizzle(o, 1, 0, 3, 2),
      l = SIMD.Float32x4.add(SIMD.Float32x4.mul(s, o), l),
      u = SIMD.Float32x4.sub(u, SIMD.Float32x4.mul(n, o)),
      o = SIMD.Float32x4.swizzle(o, 2, 3, 0, 1),
      l = SIMD.Float32x4.sub(l, SIMD.Float32x4.mul(s, o)),
      u = SIMD.Float32x4.add(SIMD.Float32x4.mul(n, o), u),
      c = SIMD.Float32x4.mul(i, a),
      c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 2, 3, 0, 1), c),
      c = SIMD.Float32x4.add(SIMD.Float32x4.swizzle(c, 1, 0, 3, 2), c),
      o = SIMD.Float32x4.reciprocalApproximation(c),
      c = SIMD.Float32x4.sub(SIMD.Float32x4.add(o, o), SIMD.Float32x4.mul(c, SIMD.Float32x4.mul(o, o))),
      (c = SIMD.Float32x4.swizzle(c, 0, 0, 0, 0)) ? (SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(c, a)), SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(c, l)), SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(c, h)), SIMD.Float32x4.store(t, 12, SIMD.Float32x4.mul(c, u)), t)  : null
    },
    r.invert = n.USE_SIMD ? r.SIMD.invert : r.scalar.invert,
    r.scalar.adjoint = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      h = e[7],
      u = e[8],
      c = e[9],
      d = e[10],
      p = e[11],
      g = e[12],
      f = e[13],
      _ = e[14],
      m = e[15];
      return t[0] = a * (d * m - p * _) - c * (l * m - h * _) + f * (l * p - h * d),
      t[1] = - (n * (d * m - p * _) - c * (r * m - s * _) + f * (r * p - s * d)),
      t[2] = n * (l * m - h * _) - a * (r * m - s * _) + f * (r * h - s * l),
      t[3] = - (n * (l * p - h * d) - a * (r * p - s * d) + c * (r * h - s * l)),
      t[4] = - (o * (d * m - p * _) - u * (l * m - h * _) + g * (l * p - h * d)),
      t[5] = i * (d * m - p * _) - u * (r * m - s * _) + g * (r * p - s * d),
      t[6] = - (i * (l * m - h * _) - o * (r * m - s * _) + g * (r * h - s * l)),
      t[7] = i * (l * p - h * d) - o * (r * p - s * d) + u * (r * h - s * l),
      t[8] = o * (c * m - p * f) - u * (a * m - h * f) + g * (a * p - h * c),
      t[9] = - (i * (c * m - p * f) - u * (n * m - s * f) + g * (n * p - s * c)),
      t[10] = i * (a * m - h * f) - o * (n * m - s * f) + g * (n * h - s * a),
      t[11] = - (i * (a * p - h * c) - o * (n * p - s * c) + u * (n * h - s * a)),
      t[12] = - (o * (c * _ - d * f) - u * (a * _ - l * f) + g * (a * d - l * c)),
      t[13] = i * (c * _ - d * f) - u * (n * _ - r * f) + g * (n * d - r * c),
      t[14] = - (i * (a * _ - l * f) - o * (n * _ - r * f) + g * (n * l - r * a)),
      t[15] = i * (a * d - l * c) - o * (n * d - r * c) + u * (n * l - r * a),
      t
    },
    r.SIMD.adjoint = function (t, e) {
      var i,
      n,
      r,
      s,
      o,
      a,
      l,
      h,
      u,
      c,
      d,
      p,
      g;
      return i = SIMD.Float32x4.load(e, 0),
      n = SIMD.Float32x4.load(e, 4),
      r = SIMD.Float32x4.load(e, 8),
      s = SIMD.Float32x4.load(e, 12),
      u = SIMD.Float32x4.shuffle(i, n, 0, 1, 4, 5),
      a = SIMD.Float32x4.shuffle(r, s, 0, 1, 4, 5),
      o = SIMD.Float32x4.shuffle(u, a, 0, 2, 4, 6),
      a = SIMD.Float32x4.shuffle(a, u, 1, 3, 5, 7),
      u = SIMD.Float32x4.shuffle(i, n, 2, 3, 6, 7),
      h = SIMD.Float32x4.shuffle(r, s, 2, 3, 6, 7),
      l = SIMD.Float32x4.shuffle(u, h, 0, 2, 4, 6),
      h = SIMD.Float32x4.shuffle(h, u, 1, 3, 5, 7),
      u = SIMD.Float32x4.mul(l, h),
      u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2),
      c = SIMD.Float32x4.mul(a, u),
      d = SIMD.Float32x4.mul(o, u),
      u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
      c = SIMD.Float32x4.sub(SIMD.Float32x4.mul(a, u), c),
      d = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), d),
      d = SIMD.Float32x4.swizzle(d, 2, 3, 0, 1),
      u = SIMD.Float32x4.mul(a, l),
      u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2),
      c = SIMD.Float32x4.add(SIMD.Float32x4.mul(h, u), c),
      g = SIMD.Float32x4.mul(o, u),
      u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
      c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(h, u)),
      g = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), g),
      g = SIMD.Float32x4.swizzle(g, 2, 3, 0, 1),
      u = SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 3, 0, 1), h),
      u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2),
      l = SIMD.Float32x4.swizzle(l, 2, 3, 0, 1),
      c = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), c),
      p = SIMD.Float32x4.mul(o, u),
      u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
      c = SIMD.Float32x4.sub(c, SIMD.Float32x4.mul(l, u)),
      p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, u), p),
      p = SIMD.Float32x4.swizzle(p, 2, 3, 0, 1),
      u = SIMD.Float32x4.mul(o, a),
      u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2),
      p = SIMD.Float32x4.add(SIMD.Float32x4.mul(h, u), p),
      g = SIMD.Float32x4.sub(SIMD.Float32x4.mul(l, u), g),
      u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
      p = SIMD.Float32x4.sub(SIMD.Float32x4.mul(h, u), p),
      g = SIMD.Float32x4.sub(g, SIMD.Float32x4.mul(l, u)),
      u = SIMD.Float32x4.mul(o, h),
      u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2),
      d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(l, u)),
      p = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), p),
      u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
      d = SIMD.Float32x4.add(SIMD.Float32x4.mul(l, u), d),
      p = SIMD.Float32x4.sub(p, SIMD.Float32x4.mul(a, u)),
      u = SIMD.Float32x4.mul(o, l),
      u = SIMD.Float32x4.swizzle(u, 1, 0, 3, 2),
      d = SIMD.Float32x4.add(SIMD.Float32x4.mul(h, u), d),
      g = SIMD.Float32x4.sub(g, SIMD.Float32x4.mul(a, u)),
      u = SIMD.Float32x4.swizzle(u, 2, 3, 0, 1),
      d = SIMD.Float32x4.sub(d, SIMD.Float32x4.mul(h, u)),
      g = SIMD.Float32x4.add(SIMD.Float32x4.mul(a, u), g),
      SIMD.Float32x4.store(t, 0, c),
      SIMD.Float32x4.store(t, 4, d),
      SIMD.Float32x4.store(t, 8, p),
      SIMD.Float32x4.store(t, 12, g),
      t
    },
    r.adjoint = n.USE_SIMD ? r.SIMD.adjoint : r.scalar.adjoint,
    r.determinant = function (t) {
      var e = t[0],
      i = t[1],
      n = t[2],
      r = t[3],
      s = t[4],
      o = t[5],
      a = t[6],
      l = t[7],
      h = t[8],
      u = t[9],
      c = t[10],
      d = t[11],
      p = t[12],
      g = t[13],
      f = t[14],
      _ = t[15];
      return (e * o - i * s) * (c * _ - d * f) - (e * a - n * s) * (u * _ - d * g) + (e * l - r * s) * (u * f - c * g) + (i * a - n * o) * (h * _ - d * p) - (i * l - r * o) * (h * f - c * p) + (n * l - r * a) * (h * g - u * p)
    },
    r.SIMD.multiply = function (t, e, i) {
      var n = SIMD.Float32x4.load(e, 0),
      r = SIMD.Float32x4.load(e, 4),
      s = SIMD.Float32x4.load(e, 8),
      o = SIMD.Float32x4.load(e, 12),
      a = SIMD.Float32x4.load(i, 0),
      l = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 2, 2, 2, 2), s), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(a, 3, 3, 3, 3), o))));
      SIMD.Float32x4.store(t, 0, l);
      var h = SIMD.Float32x4.load(i, 4),
      u = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 2, 2, 2, 2), s), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(h, 3, 3, 3, 3), o))));
      SIMD.Float32x4.store(t, 4, u);
      var c = SIMD.Float32x4.load(i, 8),
      d = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 2, 2, 2, 2), s), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(c, 3, 3, 3, 3), o))));
      SIMD.Float32x4.store(t, 8, d);
      var p = SIMD.Float32x4.load(i, 12),
      g = SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(p, 0, 0, 0, 0), n), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(p, 1, 1, 1, 1), r), SIMD.Float32x4.add(SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(p, 2, 2, 2, 2), s), SIMD.Float32x4.mul(SIMD.Float32x4.swizzle(p, 3, 3, 3, 3), o))));
      return SIMD.Float32x4.store(t, 12, g),
      t
    },
    r.scalar.multiply = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = e[4],
      l = e[5],
      h = e[6],
      u = e[7],
      c = e[8],
      d = e[9],
      p = e[10],
      g = e[11],
      f = e[12],
      _ = e[13],
      m = e[14],
      b = e[15],
      v = i[0],
      I = i[1],
      E = i[2],
      M = i[3];
      return t[0] = v * n + I * a + E * c + M * f,
      t[1] = v * r + I * l + E * d + M * _,
      t[2] = v * s + I * h + E * p + M * m,
      t[3] = v * o + I * u + E * g + M * b,
      v = i[4],
      I = i[5],
      E = i[6],
      M = i[7],
      t[4] = v * n + I * a + E * c + M * f,
      t[5] = v * r + I * l + E * d + M * _,
      t[6] = v * s + I * h + E * p + M * m,
      t[7] = v * o + I * u + E * g + M * b,
      v = i[8],
      I = i[9],
      E = i[10],
      M = i[11],
      t[8] = v * n + I * a + E * c + M * f,
      t[9] = v * r + I * l + E * d + M * _,
      t[10] = v * s + I * h + E * p + M * m,
      t[11] = v * o + I * u + E * g + M * b,
      v = i[12],
      I = i[13],
      E = i[14],
      M = i[15],
      t[12] = v * n + I * a + E * c + M * f,
      t[13] = v * r + I * l + E * d + M * _,
      t[14] = v * s + I * h + E * p + M * m,
      t[15] = v * o + I * u + E * g + M * b,
      t
    },
    r.multiply = n.USE_SIMD ? r.SIMD.multiply : r.scalar.multiply,
    r.mul = r.multiply,
    r.scalar.translate = function (t, e, i) {
      var n,
      r,
      s,
      o,
      a,
      l,
      h,
      u,
      c,
      d,
      p,
      g,
      f = i[0],
      _ = i[1],
      m = i[2];
      return e === t ? (t[12] = e[0] * f + e[4] * _ + e[8] * m + e[12], t[13] = e[1] * f + e[5] * _ + e[9] * m + e[13], t[14] = e[2] * f + e[6] * _ + e[10] * m + e[14], t[15] = e[3] * f + e[7] * _ + e[11] * m + e[15])  : (n = e[0], r = e[1], s = e[2], o = e[3], a = e[4], l = e[5], h = e[6], u = e[7], c = e[8], d = e[9], p = e[10], g = e[11], t[0] = n, t[1] = r, t[2] = s, t[3] = o, t[4] = a, t[5] = l, t[6] = h, t[7] = u, t[8] = c, t[9] = d, t[10] = p, t[11] = g, t[12] = n * f + a * _ + c * m + e[12], t[13] = r * f + l * _ + d * m + e[13], t[14] = s * f + h * _ + p * m + e[14], t[15] = o * f + u * _ + g * m + e[15]),
      t
    },
    r.SIMD.translate = function (t, e, i) {
      var n = SIMD.Float32x4.load(e, 0),
      r = SIMD.Float32x4.load(e, 4),
      s = SIMD.Float32x4.load(e, 8),
      o = SIMD.Float32x4.load(e, 12),
      a = SIMD.Float32x4(i[0], i[1], i[2], 0);
      e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11]),
      n = SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(a, 0, 0, 0, 0)),
      r = SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(a, 1, 1, 1, 1)),
      s = SIMD.Float32x4.mul(s, SIMD.Float32x4.swizzle(a, 2, 2, 2, 2));
      var l = SIMD.Float32x4.add(n, SIMD.Float32x4.add(r, SIMD.Float32x4.add(s, o)));
      return SIMD.Float32x4.store(t, 12, l),
      t
    },
    r.translate = n.USE_SIMD ? r.SIMD.translate : r.scalar.translate,
    r.scalar.scale = function (t, e, i) {
      var n = i[0],
      r = i[1],
      s = i[2];
      return t[0] = e[0] * n,
      t[1] = e[1] * n,
      t[2] = e[2] * n,
      t[3] = e[3] * n,
      t[4] = e[4] * r,
      t[5] = e[5] * r,
      t[6] = e[6] * r,
      t[7] = e[7] * r,
      t[8] = e[8] * s,
      t[9] = e[9] * s,
      t[10] = e[10] * s,
      t[11] = e[11] * s,
      t[12] = e[12],
      t[13] = e[13],
      t[14] = e[14],
      t[15] = e[15],
      t
    },
    r.SIMD.scale = function (t, e, i) {
      var n,
      r,
      s,
      o = SIMD.Float32x4(i[0], i[1], i[2], 0);
      return n = SIMD.Float32x4.load(e, 0),
      SIMD.Float32x4.store(t, 0, SIMD.Float32x4.mul(n, SIMD.Float32x4.swizzle(o, 0, 0, 0, 0))),
      r = SIMD.Float32x4.load(e, 4),
      SIMD.Float32x4.store(t, 4, SIMD.Float32x4.mul(r, SIMD.Float32x4.swizzle(o, 1, 1, 1, 1))),
      s = SIMD.Float32x4.load(e, 8),
      SIMD.Float32x4.store(t, 8, SIMD.Float32x4.mul(s, SIMD.Float32x4.swizzle(o, 2, 2, 2, 2))),
      t[12] = e[12],
      t[13] = e[13],
      t[14] = e[14],
      t[15] = e[15],
      t
    },
    r.scale = n.USE_SIMD ? r.SIMD.scale : r.scalar.scale,
    r.rotate = function (t, e, i, r) {
      var s,
      o,
      a,
      l,
      h,
      u,
      c,
      d,
      p,
      g,
      f,
      _,
      m,
      b,
      v,
      I,
      E,
      M,
      A,
      x,
      O,
      T,
      S,
      y,
      P = r[0],
      R = r[1],
      F = r[2],
      C = Math.sqrt(P * P + R * R + F * F);
      return Math.abs(C) < n.EPSILON ? null : (P *= C = 1 / C, R *= C, F *= C, s = Math.sin(i), a = 1 - (o = Math.cos(i)), l = e[0], h = e[1], u = e[2], c = e[3], d = e[4], p = e[5], g = e[6], f = e[7], _ = e[8], m = e[9], b = e[10], v = e[11], I = P * P * a + o, E = R * P * a + F * s, M = F * P * a - R * s, A = P * R * a - F * s, x = R * R * a + o, O = F * R * a + P * s, T = P * F * a + R * s, S = R * F * a - P * s, y = F * F * a + o, t[0] = l * I + d * E + _ * M, t[1] = h * I + p * E + m * M, t[2] = u * I + g * E + b * M, t[3] = c * I + f * E + v * M, t[4] = l * A + d * x + _ * O, t[5] = h * A + p * x + m * O, t[6] = u * A + g * x + b * O, t[7] = c * A + f * x + v * O, t[8] = l * T + d * S + _ * y, t[9] = h * T + p * S + m * y, t[10] = u * T + g * S + b * y, t[11] = c * T + f * S + v * y, e !== t && (t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]), t)
    },
    r.scalar.rotateX = function (t, e, i) {
      var n = Math.sin(i),
      r = Math.cos(i),
      s = e[4],
      o = e[5],
      a = e[6],
      l = e[7],
      h = e[8],
      u = e[9],
      c = e[10],
      d = e[11];
      return e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]),
      t[4] = s * r + h * n,
      t[5] = o * r + u * n,
      t[6] = a * r + c * n,
      t[7] = l * r + d * n,
      t[8] = h * r - s * n,
      t[9] = u * r - o * n,
      t[10] = c * r - a * n,
      t[11] = d * r - l * n,
      t
    },
    r.SIMD.rotateX = function (t, e, i) {
      var n = SIMD.Float32x4.splat(Math.sin(i)),
      r = SIMD.Float32x4.splat(Math.cos(i));
      e !== t && (t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
      var s = SIMD.Float32x4.load(e, 4),
      o = SIMD.Float32x4.load(e, 8);
      return SIMD.Float32x4.store(t, 4, SIMD.Float32x4.add(SIMD.Float32x4.mul(s, r), SIMD.Float32x4.mul(o, n))),
      SIMD.Float32x4.store(t, 8, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(s, n))),
      t
    },
    r.rotateX = n.USE_SIMD ? r.SIMD.rotateX : r.scalar.rotateX,
    r.scalar.rotateY = function (t, e, i) {
      var n = Math.sin(i),
      r = Math.cos(i),
      s = e[0],
      o = e[1],
      a = e[2],
      l = e[3],
      h = e[8],
      u = e[9],
      c = e[10],
      d = e[11];
      return e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]),
      t[0] = s * r - h * n,
      t[1] = o * r - u * n,
      t[2] = a * r - c * n,
      t[3] = l * r - d * n,
      t[8] = s * n + h * r,
      t[9] = o * n + u * r,
      t[10] = a * n + c * r,
      t[11] = l * n + d * r,
      t
    },
    r.SIMD.rotateY = function (t, e, i) {
      var n = SIMD.Float32x4.splat(Math.sin(i)),
      r = SIMD.Float32x4.splat(Math.cos(i));
      e !== t && (t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
      var s = SIMD.Float32x4.load(e, 0),
      o = SIMD.Float32x4.load(e, 8);
      return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.sub(SIMD.Float32x4.mul(s, r), SIMD.Float32x4.mul(o, n))),
      SIMD.Float32x4.store(t, 8, SIMD.Float32x4.add(SIMD.Float32x4.mul(s, n), SIMD.Float32x4.mul(o, r))),
      t
    },
    r.rotateY = n.USE_SIMD ? r.SIMD.rotateY : r.scalar.rotateY,
    r.scalar.rotateZ = function (t, e, i) {
      var n = Math.sin(i),
      r = Math.cos(i),
      s = e[0],
      o = e[1],
      a = e[2],
      l = e[3],
      h = e[4],
      u = e[5],
      c = e[6],
      d = e[7];
      return e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]),
      t[0] = s * r + h * n,
      t[1] = o * r + u * n,
      t[2] = a * r + c * n,
      t[3] = l * r + d * n,
      t[4] = h * r - s * n,
      t[5] = u * r - o * n,
      t[6] = c * r - a * n,
      t[7] = d * r - l * n,
      t
    },
    r.SIMD.rotateZ = function (t, e, i) {
      var n = SIMD.Float32x4.splat(Math.sin(i)),
      r = SIMD.Float32x4.splat(Math.cos(i));
      e !== t && (t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15]);
      var s = SIMD.Float32x4.load(e, 0),
      o = SIMD.Float32x4.load(e, 4);
      return SIMD.Float32x4.store(t, 0, SIMD.Float32x4.add(SIMD.Float32x4.mul(s, r), SIMD.Float32x4.mul(o, n))),
      SIMD.Float32x4.store(t, 4, SIMD.Float32x4.sub(SIMD.Float32x4.mul(o, r), SIMD.Float32x4.mul(s, n))),
      t
    },
    r.rotateZ = n.USE_SIMD ? r.SIMD.rotateZ : r.scalar.rotateZ,
    r.fromTranslation = function (t, e) {
      return t[0] = 1,
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 0,
      t[5] = 1,
      t[6] = 0,
      t[7] = 0,
      t[8] = 0,
      t[9] = 0,
      t[10] = 1,
      t[11] = 0,
      t[12] = e[0],
      t[13] = e[1],
      t[14] = e[2],
      t[15] = 1,
      t
    },
    r.fromScaling = function (t, e) {
      return t[0] = e[0],
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 0,
      t[5] = e[1],
      t[6] = 0,
      t[7] = 0,
      t[8] = 0,
      t[9] = 0,
      t[10] = e[2],
      t[11] = 0,
      t[12] = 0,
      t[13] = 0,
      t[14] = 0,
      t[15] = 1,
      t
    },
    r.fromRotation = function (t, e, i) {
      var r,
      s,
      o,
      a = i[0],
      l = i[1],
      h = i[2],
      u = Math.sqrt(a * a + l * l + h * h);
      return Math.abs(u) < n.EPSILON ? null : (a *= u = 1 / u, l *= u, h *= u, r = Math.sin(e), o = 1 - (s = Math.cos(e)), t[0] = a * a * o + s, t[1] = l * a * o + h * r, t[2] = h * a * o - l * r, t[3] = 0, t[4] = a * l * o - h * r, t[5] = l * l * o + s, t[6] = h * l * o + a * r, t[7] = 0, t[8] = a * h * o + l * r, t[9] = l * h * o - a * r, t[10] = h * h * o + s, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t)
    },
    r.fromXRotation = function (t, e) {
      var i = Math.sin(e),
      n = Math.cos(e);
      return t[0] = 1,
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 0,
      t[5] = n,
      t[6] = i,
      t[7] = 0,
      t[8] = 0,
      t[9] = - i,
      t[10] = n,
      t[11] = 0,
      t[12] = 0,
      t[13] = 0,
      t[14] = 0,
      t[15] = 1,
      t
    },
    r.fromYRotation = function (t, e) {
      var i = Math.sin(e),
      n = Math.cos(e);
      return t[0] = n,
      t[1] = 0,
      t[2] = - i,
      t[3] = 0,
      t[4] = 0,
      t[5] = 1,
      t[6] = 0,
      t[7] = 0,
      t[8] = i,
      t[9] = 0,
      t[10] = n,
      t[11] = 0,
      t[12] = 0,
      t[13] = 0,
      t[14] = 0,
      t[15] = 1,
      t
    },
    r.fromZRotation = function (t, e) {
      var i = Math.sin(e),
      n = Math.cos(e);
      return t[0] = n,
      t[1] = i,
      t[2] = 0,
      t[3] = 0,
      t[4] = - i,
      t[5] = n,
      t[6] = 0,
      t[7] = 0,
      t[8] = 0,
      t[9] = 0,
      t[10] = 1,
      t[11] = 0,
      t[12] = 0,
      t[13] = 0,
      t[14] = 0,
      t[15] = 1,
      t
    },
    r.fromRotationTranslation = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = n + n,
      l = r + r,
      h = s + s,
      u = n * a,
      c = n * l,
      d = n * h,
      p = r * l,
      g = r * h,
      f = s * h,
      _ = o * a,
      m = o * l,
      b = o * h;
      return t[0] = 1 - (p + f),
      t[1] = c + b,
      t[2] = d - m,
      t[3] = 0,
      t[4] = c - b,
      t[5] = 1 - (u + f),
      t[6] = g + _,
      t[7] = 0,
      t[8] = d + m,
      t[9] = g - _,
      t[10] = 1 - (u + p),
      t[11] = 0,
      t[12] = i[0],
      t[13] = i[1],
      t[14] = i[2],
      t[15] = 1,
      t
    },
    r.getTranslation = function (t, e) {
      return t[0] = e[12],
      t[1] = e[13],
      t[2] = e[14],
      t
    },
    r.getRotation = function (t, e) {
      var i = e[0] + e[5] + e[10],
      n = 0;
      return i > 0 ? (n = 2 * Math.sqrt(i + 1), t[3] = 0.25 * n, t[0] = (e[6] - e[9]) / n, t[1] = (e[8] - e[2]) / n, t[2] = (e[1] - e[4]) / n)  : e[0] > e[5] & e[0] > e[10] ? (n = 2 * Math.sqrt(1 + e[0] - e[5] - e[10]), t[3] = (e[6] - e[9]) / n, t[0] = 0.25 * n, t[1] = (e[1] + e[4]) / n, t[2] = (e[8] + e[2]) / n)  : e[5] > e[10] ? (n = 2 * Math.sqrt(1 + e[5] - e[0] - e[10]), t[3] = (e[8] - e[2]) / n, t[0] = (e[1] + e[4]) / n, t[1] = 0.25 * n, t[2] = (e[6] + e[9]) / n)  : (n = 2 * Math.sqrt(1 + e[10] - e[0] - e[5]), t[3] = (e[1] - e[4]) / n, t[0] = (e[8] + e[2]) / n, t[1] = (e[6] + e[9]) / n, t[2] = 0.25 * n),
      t
    },
    r.fromRotationTranslationScale = function (t, e, i, n) {
      var r = e[0],
      s = e[1],
      o = e[2],
      a = e[3],
      l = r + r,
      h = s + s,
      u = o + o,
      c = r * l,
      d = r * h,
      p = r * u,
      g = s * h,
      f = s * u,
      _ = o * u,
      m = a * l,
      b = a * h,
      v = a * u,
      I = n[0],
      E = n[1],
      M = n[2];
      return t[0] = (1 - (g + _)) * I,
      t[1] = (d + v) * I,
      t[2] = (p - b) * I,
      t[3] = 0,
      t[4] = (d - v) * E,
      t[5] = (1 - (c + _)) * E,
      t[6] = (f + m) * E,
      t[7] = 0,
      t[8] = (p + b) * M,
      t[9] = (f - m) * M,
      t[10] = (1 - (c + g)) * M,
      t[11] = 0,
      t[12] = i[0],
      t[13] = i[1],
      t[14] = i[2],
      t[15] = 1,
      t
    },
    r.fromRotationTranslationScaleOrigin = function (t, e, i, n, r) {
      var s = e[0],
      o = e[1],
      a = e[2],
      l = e[3],
      h = s + s,
      u = o + o,
      c = a + a,
      d = s * h,
      p = s * u,
      g = s * c,
      f = o * u,
      _ = o * c,
      m = a * c,
      b = l * h,
      v = l * u,
      I = l * c,
      E = n[0],
      M = n[1],
      A = n[2],
      x = r[0],
      O = r[1],
      T = r[2];
      return t[0] = (1 - (f + m)) * E,
      t[1] = (p + I) * E,
      t[2] = (g - v) * E,
      t[3] = 0,
      t[4] = (p - I) * M,
      t[5] = (1 - (d + m)) * M,
      t[6] = (_ + b) * M,
      t[7] = 0,
      t[8] = (g + v) * A,
      t[9] = (_ - b) * A,
      t[10] = (1 - (d + f)) * A,
      t[11] = 0,
      t[12] = i[0] + x - (t[0] * x + t[4] * O + t[8] * T),
      t[13] = i[1] + O - (t[1] * x + t[5] * O + t[9] * T),
      t[14] = i[2] + T - (t[2] * x + t[6] * O + t[10] * T),
      t[15] = 1,
      t
    },
    r.fromQuat = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = i + i,
      a = n + n,
      l = r + r,
      h = i * o,
      u = n * o,
      c = n * a,
      d = r * o,
      p = r * a,
      g = r * l,
      f = s * o,
      _ = s * a,
      m = s * l;
      return t[0] = 1 - c - g,
      t[1] = u + m,
      t[2] = d - _,
      t[3] = 0,
      t[4] = u - m,
      t[5] = 1 - h - g,
      t[6] = p + f,
      t[7] = 0,
      t[8] = d + _,
      t[9] = p - f,
      t[10] = 1 - h - c,
      t[11] = 0,
      t[12] = 0,
      t[13] = 0,
      t[14] = 0,
      t[15] = 1,
      t
    },
    r.frustum = function (t, e, i, n, r, s, o) {
      var a = 1 / (i - e),
      l = 1 / (r - n),
      h = 1 / (s - o);
      return t[0] = 2 * s * a,
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 0,
      t[5] = 2 * s * l,
      t[6] = 0,
      t[7] = 0,
      t[8] = (i + e) * a,
      t[9] = (r + n) * l,
      t[10] = (o + s) * h,
      t[11] = - 1,
      t[12] = 0,
      t[13] = 0,
      t[14] = o * s * 2 * h,
      t[15] = 0,
      t
    },
    r.perspective = function (t, e, i, n, r) {
      var s = 1 / Math.tan(e / 2),
      o = 1 / (n - r);
      return t[0] = s / i,
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 0,
      t[5] = s,
      t[6] = 0,
      t[7] = 0,
      t[8] = 0,
      t[9] = 0,
      t[10] = (r + n) * o,
      t[11] = - 1,
      t[12] = 0,
      t[13] = 0,
      t[14] = 2 * r * n * o,
      t[15] = 0,
      t
    },
    r.perspectiveFromFieldOfView = function (t, e, i, n) {
      var r = Math.tan(e.upDegrees * Math.PI / 180),
      s = Math.tan(e.downDegrees * Math.PI / 180),
      o = Math.tan(e.leftDegrees * Math.PI / 180),
      a = Math.tan(e.rightDegrees * Math.PI / 180),
      l = 2 / (o + a),
      h = 2 / (r + s);
      return t[0] = l,
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 0,
      t[5] = h,
      t[6] = 0,
      t[7] = 0,
      t[8] = - (o - a) * l * 0.5,
      t[9] = (r - s) * h * 0.5,
      t[10] = n / (i - n),
      t[11] = - 1,
      t[12] = 0,
      t[13] = 0,
      t[14] = n * i / (i - n),
      t[15] = 0,
      t
    },
    r.ortho = function (t, e, i, n, r, s, o) {
      var a = 1 / (e - i),
      l = 1 / (n - r),
      h = 1 / (s - o);
      return t[0] = - 2 * a,
      t[1] = 0,
      t[2] = 0,
      t[3] = 0,
      t[4] = 0,
      t[5] = - 2 * l,
      t[6] = 0,
      t[7] = 0,
      t[8] = 0,
      t[9] = 0,
      t[10] = 2 * h,
      t[11] = 0,
      t[12] = (e + i) * a,
      t[13] = (r + n) * l,
      t[14] = (o + s) * h,
      t[15] = 1,
      t
    },
    r.lookAt = function (t, e, i, s) {
      var o,
      a,
      l,
      h,
      u,
      c,
      d,
      p,
      g,
      f,
      _ = e[0],
      m = e[1],
      b = e[2],
      v = s[0],
      I = s[1],
      E = s[2],
      M = i[0],
      A = i[1],
      x = i[2];
      return Math.abs(_ - M) < n.EPSILON && Math.abs(m - A) < n.EPSILON && Math.abs(b - x) < n.EPSILON ? r.identity(t)  : (d = _ - M, p = m - A, g = b - x, o = I * (g *= f = 1 / Math.sqrt(d * d + p * p + g * g)) - E * (p *= f), a = E * (d *= f) - v * g, l = v * p - I * d, (f = Math.sqrt(o * o + a * a + l * l)) ? (o *= f = 1 / f, a *= f, l *= f)  : (o = 0, a = 0, l = 0), h = p * l - g * a, u = g * o - d * l, c = d * a - p * o, (f = Math.sqrt(h * h + u * u + c * c)) ? (h *= f = 1 / f, u *= f, c *= f)  : (h = 0, u = 0, c = 0), t[0] = o, t[1] = h, t[2] = d, t[3] = 0, t[4] = a, t[5] = u, t[6] = p, t[7] = 0, t[8] = l, t[9] = c, t[10] = g, t[11] = 0, t[12] = - (o * _ + a * m + l * b), t[13] = - (h * _ + u * m + c * b), t[14] = - (d * _ + p * m + g * b), t[15] = 1, t)
    },
    r.str = function (t) {
      return 'mat4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ', ' + t[4] + ', ' + t[5] + ', ' + t[6] + ', ' + t[7] + ', ' + t[8] + ', ' + t[9] + ', ' + t[10] + ', ' + t[11] + ', ' + t[12] + ', ' + t[13] + ', ' + t[14] + ', ' + t[15] + ')'
    },
    r.frob = function (t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2) + Math.pow(t[2], 2) + Math.pow(t[3], 2) + Math.pow(t[4], 2) + Math.pow(t[5], 2) + Math.pow(t[6], 2) + Math.pow(t[7], 2) + Math.pow(t[8], 2) + Math.pow(t[9], 2) + Math.pow(t[10], 2) + Math.pow(t[11], 2) + Math.pow(t[12], 2) + Math.pow(t[13], 2) + Math.pow(t[14], 2) + Math.pow(t[15], 2))
    },
    r.add = function (t, e, i) {
      return t[0] = e[0] + i[0],
      t[1] = e[1] + i[1],
      t[2] = e[2] + i[2],
      t[3] = e[3] + i[3],
      t[4] = e[4] + i[4],
      t[5] = e[5] + i[5],
      t[6] = e[6] + i[6],
      t[7] = e[7] + i[7],
      t[8] = e[8] + i[8],
      t[9] = e[9] + i[9],
      t[10] = e[10] + i[10],
      t[11] = e[11] + i[11],
      t[12] = e[12] + i[12],
      t[13] = e[13] + i[13],
      t[14] = e[14] + i[14],
      t[15] = e[15] + i[15],
      t
    },
    r.subtract = function (t, e, i) {
      return t[0] = e[0] - i[0],
      t[1] = e[1] - i[1],
      t[2] = e[2] - i[2],
      t[3] = e[3] - i[3],
      t[4] = e[4] - i[4],
      t[5] = e[5] - i[5],
      t[6] = e[6] - i[6],
      t[7] = e[7] - i[7],
      t[8] = e[8] - i[8],
      t[9] = e[9] - i[9],
      t[10] = e[10] - i[10],
      t[11] = e[11] - i[11],
      t[12] = e[12] - i[12],
      t[13] = e[13] - i[13],
      t[14] = e[14] - i[14],
      t[15] = e[15] - i[15],
      t
    },
    r.sub = r.subtract,
    r.multiplyScalar = function (t, e, i) {
      return t[0] = e[0] * i,
      t[1] = e[1] * i,
      t[2] = e[2] * i,
      t[3] = e[3] * i,
      t[4] = e[4] * i,
      t[5] = e[5] * i,
      t[6] = e[6] * i,
      t[7] = e[7] * i,
      t[8] = e[8] * i,
      t[9] = e[9] * i,
      t[10] = e[10] * i,
      t[11] = e[11] * i,
      t[12] = e[12] * i,
      t[13] = e[13] * i,
      t[14] = e[14] * i,
      t[15] = e[15] * i,
      t
    },
    r.multiplyScalarAndAdd = function (t, e, i, n) {
      return t[0] = e[0] + i[0] * n,
      t[1] = e[1] + i[1] * n,
      t[2] = e[2] + i[2] * n,
      t[3] = e[3] + i[3] * n,
      t[4] = e[4] + i[4] * n,
      t[5] = e[5] + i[5] * n,
      t[6] = e[6] + i[6] * n,
      t[7] = e[7] + i[7] * n,
      t[8] = e[8] + i[8] * n,
      t[9] = e[9] + i[9] * n,
      t[10] = e[10] + i[10] * n,
      t[11] = e[11] + i[11] * n,
      t[12] = e[12] + i[12] * n,
      t[13] = e[13] + i[13] * n,
      t[14] = e[14] + i[14] * n,
      t[15] = e[15] + i[15] * n,
      t
    },
    r.exactEquals = function (t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3] && t[4] === e[4] && t[5] === e[5] && t[6] === e[6] && t[7] === e[7] && t[8] === e[8] && t[9] === e[9] && t[10] === e[10] && t[11] === e[11] && t[12] === e[12] && t[13] === e[13] && t[14] === e[14] && t[15] === e[15]
    },
    r.equals = function (t, e) {
      var i = t[0],
      r = t[1],
      s = t[2],
      o = t[3],
      a = t[4],
      l = t[5],
      h = t[6],
      u = t[7],
      c = t[8],
      d = t[9],
      p = t[10],
      g = t[11],
      f = t[12],
      _ = t[13],
      m = t[14],
      b = t[15],
      v = e[0],
      I = e[1],
      E = e[2],
      M = e[3],
      A = e[4],
      x = e[5],
      O = e[6],
      T = e[7],
      S = e[8],
      y = e[9],
      P = e[10],
      R = e[11],
      F = e[12],
      C = e[13],
      N = e[14],
      D = e[15];
      return Math.abs(i - v) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(v)) && Math.abs(r - I) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(I)) && Math.abs(s - E) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(E)) && Math.abs(o - M) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(M)) && Math.abs(a - A) <= n.EPSILON * Math.max(1, Math.abs(a), Math.abs(A)) && Math.abs(l - x) <= n.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) && Math.abs(h - O) <= n.EPSILON * Math.max(1, Math.abs(h), Math.abs(O)) && Math.abs(u - T) <= n.EPSILON * Math.max(1, Math.abs(u), Math.abs(T)) && Math.abs(c - S) <= n.EPSILON * Math.max(1, Math.abs(c), Math.abs(S)) && Math.abs(d - y) <= n.EPSILON * Math.max(1, Math.abs(d), Math.abs(y)) && Math.abs(p - P) <= n.EPSILON * Math.max(1, Math.abs(p), Math.abs(P)) && Math.abs(g - R) <= n.EPSILON * Math.max(1, Math.abs(g), Math.abs(R)) && Math.abs(f - F) <= n.EPSILON * Math.max(1, Math.abs(f), Math.abs(F)) && Math.abs(_ - C) <= n.EPSILON * Math.max(1, Math.abs(_), Math.abs(C)) && Math.abs(m - N) <= n.EPSILON * Math.max(1, Math.abs(m), Math.abs(N)) && Math.abs(b - D) <= n.EPSILON * Math.max(1, Math.abs(b), Math.abs(D))
    },
    t.exports = r
  },
  function (t, e, i) {
    var n = i(1),
    r = i(4),
    s = i(7),
    o = i(8),
    a = {
      create: function () {
        var t = new n.ARRAY_TYPE(4);
        return t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 1,
        t
      }
    };
    a.rotationTo = function () {
      var t = s.create(),
      e = s.fromValues(1, 0, 0),
      i = s.fromValues(0, 1, 0);
      return function (n, r, o) {
        var l = s.dot(r, o);
        return - 0.999999 > l ? (s.cross(t, e, r), s.length(t) < 0.000001 && s.cross(t, i, r), s.normalize(t, t), a.setAxisAngle(n, t, Math.PI), n)  : l > 0.999999 ? (n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1, n)  : (s.cross(t, r, o), n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = 1 + l, a.normalize(n, n))
      }
    }(),
    a.setAxes = function () {
      var t = r.create();
      return function (e, i, n, r) {
        return t[0] = n[0],
        t[3] = n[1],
        t[6] = n[2],
        t[1] = r[0],
        t[4] = r[1],
        t[7] = r[2],
        t[2] = - i[0],
        t[5] = - i[1],
        t[8] = - i[2],
        a.normalize(e, a.fromMat3(e, t))
      }
    }(),
    a.clone = o.clone,
    a.fromValues = o.fromValues,
    a.copy = o.copy,
    a.set = o.set,
    a.identity = function (t) {
      return t[0] = 0,
      t[1] = 0,
      t[2] = 0,
      t[3] = 1,
      t
    },
    a.setAxisAngle = function (t, e, i) {
      i *= 0.5;
      var n = Math.sin(i);
      return t[0] = n * e[0],
      t[1] = n * e[1],
      t[2] = n * e[2],
      t[3] = Math.cos(i),
      t
    },
    a.getAxisAngle = function (t, e) {
      var i = 2 * Math.acos(e[3]),
      n = Math.sin(i / 2);
      return 0 != n ? (t[0] = e[0] / n, t[1] = e[1] / n, t[2] = e[2] / n)  : (t[0] = 1, t[1] = 0, t[2] = 0),
      i
    },
    a.add = o.add,
    a.multiply = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = i[0],
      l = i[1],
      h = i[2],
      u = i[3];
      return t[0] = n * u + o * a + r * h - s * l,
      t[1] = r * u + o * l + s * a - n * h,
      t[2] = s * u + o * h + n * l - r * a,
      t[3] = o * u - n * a - r * l - s * h,
      t
    },
    a.mul = a.multiply,
    a.scale = o.scale,
    a.rotateX = function (t, e, i) {
      i *= 0.5;
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = Math.sin(i),
      l = Math.cos(i);
      return t[0] = n * l + o * a,
      t[1] = r * l + s * a,
      t[2] = s * l - r * a,
      t[3] = o * l - n * a,
      t
    },
    a.rotateY = function (t, e, i) {
      i *= 0.5;
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = Math.sin(i),
      l = Math.cos(i);
      return t[0] = n * l - s * a,
      t[1] = r * l + o * a,
      t[2] = s * l + n * a,
      t[3] = o * l - r * a,
      t
    },
    a.rotateZ = function (t, e, i) {
      i *= 0.5;
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3],
      a = Math.sin(i),
      l = Math.cos(i);
      return t[0] = n * l + r * a,
      t[1] = r * l - n * a,
      t[2] = s * l + o * a,
      t[3] = o * l - s * a,
      t
    },
    a.calculateW = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2];
      return t[0] = i,
      t[1] = n,
      t[2] = r,
      t[3] = Math.sqrt(Math.abs(1 - i * i - n * n - r * r)),
      t
    },
    a.dot = o.dot,
    a.lerp = o.lerp,
    a.slerp = function (t, e, i, n) {
      var r,
      s,
      o,
      a,
      l,
      h = e[0],
      u = e[1],
      c = e[2],
      d = e[3],
      p = i[0],
      g = i[1],
      f = i[2],
      _ = i[3];
      return 0 > (s = h * p + u * g + c * f + d * _) && (s = - s, p = - p, g = - g, f = - f, _ = - _),
      1 - s > 0.000001 ? (r = Math.acos(s), o = Math.sin(r), a = Math.sin((1 - n) * r) / o, l = Math.sin(n * r) / o)  : (a = 1 - n, l = n),
      t[0] = a * h + l * p,
      t[1] = a * u + l * g,
      t[2] = a * c + l * f,
      t[3] = a * d + l * _,
      t
    },
    a.sqlerp = function () {
      var t = a.create(),
      e = a.create();
      return function (i, n, r, s, o, l) {
        return a.slerp(t, n, o, l),
        a.slerp(e, r, s, l),
        a.slerp(i, t, e, 2 * l * (1 - l)),
        i
      }
    }(),
    a.invert = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = i * i + n * n + r * r + s * s,
      a = o ? 1 / o : 0;
      return t[0] = - i * a,
      t[1] = - n * a,
      t[2] = - r * a,
      t[3] = s * a,
      t
    },
    a.conjugate = function (t, e) {
      return t[0] = - e[0],
      t[1] = - e[1],
      t[2] = - e[2],
      t[3] = e[3],
      t
    },
    a.length = o.length,
    a.len = a.length,
    a.squaredLength = o.squaredLength,
    a.sqrLen = a.squaredLength,
    a.normalize = o.normalize,
    a.fromMat3 = function (t, e) {
      var i,
      n = e[0] + e[4] + e[8];
      if (n > 0) i = Math.sqrt(n + 1),
      t[3] = 0.5 * i,
      i = 0.5 / i,
      t[0] = (e[5] - e[7]) * i,
      t[1] = (e[6] - e[2]) * i,
      t[2] = (e[1] - e[3]) * i;
       else {
        var r = 0;
        e[4] > e[0] && (r = 1),
        e[8] > e[3 * r + r] && (r = 2);
        var s = (r + 1) % 3,
        o = (r + 2) % 3;
        i = Math.sqrt(e[3 * r + r] - e[3 * s + s] - e[3 * o + o] + 1),
        t[r] = 0.5 * i,
        i = 0.5 / i,
        t[3] = (e[3 * s + o] - e[3 * o + s]) * i,
        t[s] = (e[3 * s + r] + e[3 * r + s]) * i,
        t[o] = (e[3 * o + r] + e[3 * r + o]) * i
      }
      return t
    },
    a.str = function (t) {
      return 'quat(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
    },
    a.exactEquals = o.exactEquals,
    a.equals = o.equals,
    t.exports = a
  },
  function (t, e, i) {
    var n = i(1),
    r = {
      create: function () {
        var t = new n.ARRAY_TYPE(3);
        return t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t
      },
      clone: function (t) {
        var e = new n.ARRAY_TYPE(3);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e
      },
      fromValues: function (t, e, i) {
        var r = new n.ARRAY_TYPE(3);
        return r[0] = t,
        r[1] = e,
        r[2] = i,
        r
      },
      copy: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t
      },
      set: function (t, e, i, n) {
        return t[0] = e,
        t[1] = i,
        t[2] = n,
        t
      },
      add: function (t, e, i) {
        return t[0] = e[0] + i[0],
        t[1] = e[1] + i[1],
        t[2] = e[2] + i[2],
        t
      },
      subtract: function (t, e, i) {
        return t[0] = e[0] - i[0],
        t[1] = e[1] - i[1],
        t[2] = e[2] - i[2],
        t
      }
    };
    r.sub = r.subtract,
    r.multiply = function (t, e, i) {
      return t[0] = e[0] * i[0],
      t[1] = e[1] * i[1],
      t[2] = e[2] * i[2],
      t
    },
    r.mul = r.multiply,
    r.divide = function (t, e, i) {
      return t[0] = e[0] / i[0],
      t[1] = e[1] / i[1],
      t[2] = e[2] / i[2],
      t
    },
    r.div = r.divide,
    r.ceil = function (t, e) {
      return t[0] = Math.ceil(e[0]),
      t[1] = Math.ceil(e[1]),
      t[2] = Math.ceil(e[2]),
      t
    },
    r.floor = function (t, e) {
      return t[0] = Math.floor(e[0]),
      t[1] = Math.floor(e[1]),
      t[2] = Math.floor(e[2]),
      t
    },
    r.min = function (t, e, i) {
      return t[0] = Math.min(e[0], i[0]),
      t[1] = Math.min(e[1], i[1]),
      t[2] = Math.min(e[2], i[2]),
      t
    },
    r.max = function (t, e, i) {
      return t[0] = Math.max(e[0], i[0]),
      t[1] = Math.max(e[1], i[1]),
      t[2] = Math.max(e[2], i[2]),
      t
    },
    r.round = function (t, e) {
      return t[0] = Math.round(e[0]),
      t[1] = Math.round(e[1]),
      t[2] = Math.round(e[2]),
      t
    },
    r.scale = function (t, e, i) {
      return t[0] = e[0] * i,
      t[1] = e[1] * i,
      t[2] = e[2] * i,
      t
    },
    r.scaleAndAdd = function (t, e, i, n) {
      return t[0] = e[0] + i[0] * n,
      t[1] = e[1] + i[1] * n,
      t[2] = e[2] + i[2] * n,
      t
    },
    r.distance = function (t, e) {
      var i = e[0] - t[0],
      n = e[1] - t[1],
      r = e[2] - t[2];
      return Math.sqrt(i * i + n * n + r * r)
    },
    r.dist = r.distance,
    r.squaredDistance = function (t, e) {
      var i = e[0] - t[0],
      n = e[1] - t[1],
      r = e[2] - t[2];
      return i * i + n * n + r * r
    },
    r.sqrDist = r.squaredDistance,
    r.length = function (t) {
      var e = t[0],
      i = t[1],
      n = t[2];
      return Math.sqrt(e * e + i * i + n * n)
    },
    r.len = r.length,
    r.squaredLength = function (t) {
      var e = t[0],
      i = t[1],
      n = t[2];
      return e * e + i * i + n * n
    },
    r.sqrLen = r.squaredLength,
    r.negate = function (t, e) {
      return t[0] = - e[0],
      t[1] = - e[1],
      t[2] = - e[2],
      t
    },
    r.inverse = function (t, e) {
      return t[0] = 1 / e[0],
      t[1] = 1 / e[1],
      t[2] = 1 / e[2],
      t
    },
    r.normalize = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = i * i + n * n + r * r;
      return s > 0 && (s = 1 / Math.sqrt(s), t[0] = e[0] * s, t[1] = e[1] * s, t[2] = e[2] * s),
      t
    },
    r.dot = function (t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
    },
    r.cross = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = i[0],
      a = i[1],
      l = i[2];
      return t[0] = r * l - s * a,
      t[1] = s * o - n * l,
      t[2] = n * a - r * o,
      t
    },
    r.lerp = function (t, e, i, n) {
      var r = e[0],
      s = e[1],
      o = e[2];
      return t[0] = r + n * (i[0] - r),
      t[1] = s + n * (i[1] - s),
      t[2] = o + n * (i[2] - o),
      t
    },
    r.hermite = function (t, e, i, n, r, s) {
      var o = s * s,
      a = o * (2 * s - 3) + 1,
      l = o * (s - 2) + s,
      h = o * (s - 1),
      u = o * (3 - 2 * s);
      return t[0] = e[0] * a + i[0] * l + n[0] * h + r[0] * u,
      t[1] = e[1] * a + i[1] * l + n[1] * h + r[1] * u,
      t[2] = e[2] * a + i[2] * l + n[2] * h + r[2] * u,
      t
    },
    r.bezier = function (t, e, i, n, r, s) {
      var o = 1 - s,
      a = o * o,
      l = s * s,
      h = a * o,
      u = 3 * s * a,
      c = 3 * l * o,
      d = l * s;
      return t[0] = e[0] * h + i[0] * u + n[0] * c + r[0] * d,
      t[1] = e[1] * h + i[1] * u + n[1] * c + r[1] * d,
      t[2] = e[2] * h + i[2] * u + n[2] * c + r[2] * d,
      t
    },
    r.random = function (t, e) {
      e = e || 1;
      var i = 2 * n.RANDOM() * Math.PI,
      r = 2 * n.RANDOM() - 1,
      s = Math.sqrt(1 - r * r) * e;
      return t[0] = Math.cos(i) * s,
      t[1] = Math.sin(i) * s,
      t[2] = r * e,
      t
    },
    r.transformMat4 = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = i[3] * n + i[7] * r + i[11] * s + i[15];
      return o = o || 1,
      t[0] = (i[0] * n + i[4] * r + i[8] * s + i[12]) / o,
      t[1] = (i[1] * n + i[5] * r + i[9] * s + i[13]) / o,
      t[2] = (i[2] * n + i[6] * r + i[10] * s + i[14]) / o,
      t
    },
    r.transformMat3 = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2];
      return t[0] = n * i[0] + r * i[3] + s * i[6],
      t[1] = n * i[1] + r * i[4] + s * i[7],
      t[2] = n * i[2] + r * i[5] + s * i[8],
      t
    },
    r.transformQuat = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = i[0],
      a = i[1],
      l = i[2],
      h = i[3],
      u = h * n + a * s - l * r,
      c = h * r + l * n - o * s,
      d = h * s + o * r - a * n,
      p = - o * n - a * r - l * s;
      return t[0] = u * h + p * - o + c * - l - d * - a,
      t[1] = c * h + p * - a + d * - o - u * - l,
      t[2] = d * h + p * - l + u * - a - c * - o,
      t
    },
    r.rotateX = function (t, e, i, n) {
      var r = [
      ],
      s = [
      ];
      return r[0] = e[0] - i[0],
      r[1] = e[1] - i[1],
      r[2] = e[2] - i[2],
      s[0] = r[0],
      s[1] = r[1] * Math.cos(n) - r[2] * Math.sin(n),
      s[2] = r[1] * Math.sin(n) + r[2] * Math.cos(n),
      t[0] = s[0] + i[0],
      t[1] = s[1] + i[1],
      t[2] = s[2] + i[2],
      t
    },
    r.rotateY = function (t, e, i, n) {
      var r = [
      ],
      s = [
      ];
      return r[0] = e[0] - i[0],
      r[1] = e[1] - i[1],
      r[2] = e[2] - i[2],
      s[0] = r[2] * Math.sin(n) + r[0] * Math.cos(n),
      s[1] = r[1],
      s[2] = r[2] * Math.cos(n) - r[0] * Math.sin(n),
      t[0] = s[0] + i[0],
      t[1] = s[1] + i[1],
      t[2] = s[2] + i[2],
      t
    },
    r.rotateZ = function (t, e, i, n) {
      var r = [
      ],
      s = [
      ];
      return r[0] = e[0] - i[0],
      r[1] = e[1] - i[1],
      r[2] = e[2] - i[2],
      s[0] = r[0] * Math.cos(n) - r[1] * Math.sin(n),
      s[1] = r[0] * Math.sin(n) + r[1] * Math.cos(n),
      s[2] = r[2],
      t[0] = s[0] + i[0],
      t[1] = s[1] + i[1],
      t[2] = s[2] + i[2],
      t
    },
    r.forEach = function () {
      var t = r.create();
      return function (e, i, n, r, s, o) {
        var a,
        l;
        for (i || (i = 3), n || (n = 0), l = r ? Math.min(r * i + n, e.length)  : e.length, a = n; l > a; a += i) t[0] = e[a],
        t[1] = e[a + 1],
        t[2] = e[a + 2],
        s(t, t, o),
        e[a] = t[0],
        e[a + 1] = t[1],
        e[a + 2] = t[2];
        return e
      }
    }(),
    r.angle = function (t, e) {
      var i = r.fromValues(t[0], t[1], t[2]),
      n = r.fromValues(e[0], e[1], e[2]);
      r.normalize(i, i),
      r.normalize(n, n);
      var s = r.dot(i, n);
      return s > 1 ? 0 : Math.acos(s)
    },
    r.str = function (t) {
      return 'vec3(' + t[0] + ', ' + t[1] + ', ' + t[2] + ')'
    },
    r.exactEquals = function (t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2]
    },
    r.equals = function (t, e) {
      var i = t[0],
      r = t[1],
      s = t[2],
      o = e[0],
      a = e[1],
      l = e[2];
      return Math.abs(i - o) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(r - a) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(s - l) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(l))
    },
    t.exports = r
  },
  function (t, e, i) {
    var n = i(1),
    r = {
      create: function () {
        var t = new n.ARRAY_TYPE(4);
        return t[0] = 0,
        t[1] = 0,
        t[2] = 0,
        t[3] = 0,
        t
      },
      clone: function (t) {
        var e = new n.ARRAY_TYPE(4);
        return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e
      },
      fromValues: function (t, e, i, r) {
        var s = new n.ARRAY_TYPE(4);
        return s[0] = t,
        s[1] = e,
        s[2] = i,
        s[3] = r,
        s
      },
      copy: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t[2] = e[2],
        t[3] = e[3],
        t
      },
      set: function (t, e, i, n, r) {
        return t[0] = e,
        t[1] = i,
        t[2] = n,
        t[3] = r,
        t
      },
      add: function (t, e, i) {
        return t[0] = e[0] + i[0],
        t[1] = e[1] + i[1],
        t[2] = e[2] + i[2],
        t[3] = e[3] + i[3],
        t
      },
      subtract: function (t, e, i) {
        return t[0] = e[0] - i[0],
        t[1] = e[1] - i[1],
        t[2] = e[2] - i[2],
        t[3] = e[3] - i[3],
        t
      }
    };
    r.sub = r.subtract,
    r.multiply = function (t, e, i) {
      return t[0] = e[0] * i[0],
      t[1] = e[1] * i[1],
      t[2] = e[2] * i[2],
      t[3] = e[3] * i[3],
      t
    },
    r.mul = r.multiply,
    r.divide = function (t, e, i) {
      return t[0] = e[0] / i[0],
      t[1] = e[1] / i[1],
      t[2] = e[2] / i[2],
      t[3] = e[3] / i[3],
      t
    },
    r.div = r.divide,
    r.ceil = function (t, e) {
      return t[0] = Math.ceil(e[0]),
      t[1] = Math.ceil(e[1]),
      t[2] = Math.ceil(e[2]),
      t[3] = Math.ceil(e[3]),
      t
    },
    r.floor = function (t, e) {
      return t[0] = Math.floor(e[0]),
      t[1] = Math.floor(e[1]),
      t[2] = Math.floor(e[2]),
      t[3] = Math.floor(e[3]),
      t
    },
    r.min = function (t, e, i) {
      return t[0] = Math.min(e[0], i[0]),
      t[1] = Math.min(e[1], i[1]),
      t[2] = Math.min(e[2], i[2]),
      t[3] = Math.min(e[3], i[3]),
      t
    },
    r.max = function (t, e, i) {
      return t[0] = Math.max(e[0], i[0]),
      t[1] = Math.max(e[1], i[1]),
      t[2] = Math.max(e[2], i[2]),
      t[3] = Math.max(e[3], i[3]),
      t
    },
    r.round = function (t, e) {
      return t[0] = Math.round(e[0]),
      t[1] = Math.round(e[1]),
      t[2] = Math.round(e[2]),
      t[3] = Math.round(e[3]),
      t
    },
    r.scale = function (t, e, i) {
      return t[0] = e[0] * i,
      t[1] = e[1] * i,
      t[2] = e[2] * i,
      t[3] = e[3] * i,
      t
    },
    r.scaleAndAdd = function (t, e, i, n) {
      return t[0] = e[0] + i[0] * n,
      t[1] = e[1] + i[1] * n,
      t[2] = e[2] + i[2] * n,
      t[3] = e[3] + i[3] * n,
      t
    },
    r.distance = function (t, e) {
      var i = e[0] - t[0],
      n = e[1] - t[1],
      r = e[2] - t[2],
      s = e[3] - t[3];
      return Math.sqrt(i * i + n * n + r * r + s * s)
    },
    r.dist = r.distance,
    r.squaredDistance = function (t, e) {
      var i = e[0] - t[0],
      n = e[1] - t[1],
      r = e[2] - t[2],
      s = e[3] - t[3];
      return i * i + n * n + r * r + s * s
    },
    r.sqrDist = r.squaredDistance,
    r.length = function (t) {
      var e = t[0],
      i = t[1],
      n = t[2],
      r = t[3];
      return Math.sqrt(e * e + i * i + n * n + r * r)
    },
    r.len = r.length,
    r.squaredLength = function (t) {
      var e = t[0],
      i = t[1],
      n = t[2],
      r = t[3];
      return e * e + i * i + n * n + r * r
    },
    r.sqrLen = r.squaredLength,
    r.negate = function (t, e) {
      return t[0] = - e[0],
      t[1] = - e[1],
      t[2] = - e[2],
      t[3] = - e[3],
      t
    },
    r.inverse = function (t, e) {
      return t[0] = 1 / e[0],
      t[1] = 1 / e[1],
      t[2] = 1 / e[2],
      t[3] = 1 / e[3],
      t
    },
    r.normalize = function (t, e) {
      var i = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      o = i * i + n * n + r * r + s * s;
      return o > 0 && (o = 1 / Math.sqrt(o), t[0] = i * o, t[1] = n * o, t[2] = r * o, t[3] = s * o),
      t
    },
    r.dot = function (t, e) {
      return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
    },
    r.lerp = function (t, e, i, n) {
      var r = e[0],
      s = e[1],
      o = e[2],
      a = e[3];
      return t[0] = r + n * (i[0] - r),
      t[1] = s + n * (i[1] - s),
      t[2] = o + n * (i[2] - o),
      t[3] = a + n * (i[3] - a),
      t
    },
    r.random = function (t, e) {
      return e = e || 1,
      t[0] = n.RANDOM(),
      t[1] = n.RANDOM(),
      t[2] = n.RANDOM(),
      t[3] = n.RANDOM(),
      r.normalize(t, t),
      r.scale(t, t, e),
      t
    },
    r.transformMat4 = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = e[3];
      return t[0] = i[0] * n + i[4] * r + i[8] * s + i[12] * o,
      t[1] = i[1] * n + i[5] * r + i[9] * s + i[13] * o,
      t[2] = i[2] * n + i[6] * r + i[10] * s + i[14] * o,
      t[3] = i[3] * n + i[7] * r + i[11] * s + i[15] * o,
      t
    },
    r.transformQuat = function (t, e, i) {
      var n = e[0],
      r = e[1],
      s = e[2],
      o = i[0],
      a = i[1],
      l = i[2],
      h = i[3],
      u = h * n + a * s - l * r,
      c = h * r + l * n - o * s,
      d = h * s + o * r - a * n,
      p = - o * n - a * r - l * s;
      return t[0] = u * h + p * - o + c * - l - d * - a,
      t[1] = c * h + p * - a + d * - o - u * - l,
      t[2] = d * h + p * - l + u * - a - c * - o,
      t[3] = e[3],
      t
    },
    r.forEach = function () {
      var t = r.create();
      return function (e, i, n, r, s, o) {
        var a,
        l;
        for (i || (i = 4), n || (n = 0), l = r ? Math.min(r * i + n, e.length)  : e.length, a = n; l > a; a += i) t[0] = e[a],
        t[1] = e[a + 1],
        t[2] = e[a + 2],
        t[3] = e[a + 3],
        s(t, t, o),
        e[a] = t[0],
        e[a + 1] = t[1],
        e[a + 2] = t[2],
        e[a + 3] = t[3];
        return e
      }
    }(),
    r.str = function (t) {
      return 'vec4(' + t[0] + ', ' + t[1] + ', ' + t[2] + ', ' + t[3] + ')'
    },
    r.exactEquals = function (t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    },
    r.equals = function (t, e) {
      var i = t[0],
      r = t[1],
      s = t[2],
      o = t[3],
      a = e[0],
      l = e[1],
      h = e[2],
      u = e[3];
      return Math.abs(i - a) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(r - l) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(s - h) <= n.EPSILON * Math.max(1, Math.abs(s), Math.abs(h)) && Math.abs(o - u) <= n.EPSILON * Math.max(1, Math.abs(o), Math.abs(u))
    },
    t.exports = r
  },
  function (t, e, i) {
    var n = i(1),
    r = {
      create: function () {
        var t = new n.ARRAY_TYPE(2);
        return t[0] = 0,
        t[1] = 0,
        t
      },
      clone: function (t) {
        var e = new n.ARRAY_TYPE(2);
        return e[0] = t[0],
        e[1] = t[1],
        e
      },
      fromValues: function (t, e) {
        var i = new n.ARRAY_TYPE(2);
        return i[0] = t,
        i[1] = e,
        i
      },
      copy: function (t, e) {
        return t[0] = e[0],
        t[1] = e[1],
        t
      },
      set: function (t, e, i) {
        return t[0] = e,
        t[1] = i,
        t
      },
      add: function (t, e, i) {
        return t[0] = e[0] + i[0],
        t[1] = e[1] + i[1],
        t
      },
      subtract: function (t, e, i) {
        return t[0] = e[0] - i[0],
        t[1] = e[1] - i[1],
        t
      }
    };
    r.sub = r.subtract,
    r.multiply = function (t, e, i) {
      return t[0] = e[0] * i[0],
      t[1] = e[1] * i[1],
      t
    },
    r.mul = r.multiply,
    r.divide = function (t, e, i) {
      return t[0] = e[0] / i[0],
      t[1] = e[1] / i[1],
      t
    },
    r.div = r.divide,
    r.ceil = function (t, e) {
      return t[0] = Math.ceil(e[0]),
      t[1] = Math.ceil(e[1]),
      t
    },
    r.floor = function (t, e) {
      return t[0] = Math.floor(e[0]),
      t[1] = Math.floor(e[1]),
      t
    },
    r.min = function (t, e, i) {
      return t[0] = Math.min(e[0], i[0]),
      t[1] = Math.min(e[1], i[1]),
      t
    },
    r.max = function (t, e, i) {
      return t[0] = Math.max(e[0], i[0]),
      t[1] = Math.max(e[1], i[1]),
      t
    },
    r.round = function (t, e) {
      return t[0] = Math.round(e[0]),
      t[1] = Math.round(e[1]),
      t
    },
    r.scale = function (t, e, i) {
      return t[0] = e[0] * i,
      t[1] = e[1] * i,
      t
    },
    r.scaleAndAdd = function (t, e, i, n) {
      return t[0] = e[0] + i[0] * n,
      t[1] = e[1] + i[1] * n,
      t
    },
    r.distance = function (t, e) {
      var i = e[0] - t[0],
      n = e[1] - t[1];
      return Math.sqrt(i * i + n * n)
    },
    r.dist = r.distance,
    r.squaredDistance = function (t, e) {
      var i = e[0] - t[0],
      n = e[1] - t[1];
      return i * i + n * n
    },
    r.sqrDist = r.squaredDistance,
    r.length = function (t) {
      var e = t[0],
      i = t[1];
      return Math.sqrt(e * e + i * i)
    },
    r.len = r.length,
    r.squaredLength = function (t) {
      var e = t[0],
      i = t[1];
      return e * e + i * i
    },
    r.sqrLen = r.squaredLength,
    r.negate = function (t, e) {
      return t[0] = - e[0],
      t[1] = - e[1],
      t
    },
    r.inverse = function (t, e) {
      return t[0] = 1 / e[0],
      t[1] = 1 / e[1],
      t
    },
    r.normalize = function (t, e) {
      var i = e[0],
      n = e[1],
      r = i * i + n * n;
      return r > 0 && (r = 1 / Math.sqrt(r), t[0] = e[0] * r, t[1] = e[1] * r),
      t
    },
    r.dot = function (t, e) {
      return t[0] * e[0] + t[1] * e[1]
    },
    r.cross = function (t, e, i) {
      var n = e[0] * i[1] - e[1] * i[0];
      return t[0] = t[1] = 0,
      t[2] = n,
      t
    },
    r.lerp = function (t, e, i, n) {
      var r = e[0],
      s = e[1];
      return t[0] = r + n * (i[0] - r),
      t[1] = s + n * (i[1] - s),
      t
    },
    r.random = function (t, e) {
      e = e || 1;
      var i = 2 * n.RANDOM() * Math.PI;
      return t[0] = Math.cos(i) * e,
      t[1] = Math.sin(i) * e,
      t
    },
    r.transformMat2 = function (t, e, i) {
      var n = e[0],
      r = e[1];
      return t[0] = i[0] * n + i[2] * r,
      t[1] = i[1] * n + i[3] * r,
      t
    },
    r.transformMat2d = function (t, e, i) {
      var n = e[0],
      r = e[1];
      return t[0] = i[0] * n + i[2] * r + i[4],
      t[1] = i[1] * n + i[3] * r + i[5],
      t
    },
    r.transformMat3 = function (t, e, i) {
      var n = e[0],
      r = e[1];
      return t[0] = i[0] * n + i[3] * r + i[6],
      t[1] = i[1] * n + i[4] * r + i[7],
      t
    },
    r.transformMat4 = function (t, e, i) {
      var n = e[0],
      r = e[1];
      return t[0] = i[0] * n + i[4] * r + i[12],
      t[1] = i[1] * n + i[5] * r + i[13],
      t
    },
    r.forEach = function () {
      var t = r.create();
      return function (e, i, n, r, s, o) {
        var a,
        l;
        for (i || (i = 2), n || (n = 0), l = r ? Math.min(r * i + n, e.length)  : e.length, a = n; l > a; a += i) t[0] = e[a],
        t[1] = e[a + 1],
        s(t, t, o),
        e[a] = t[0],
        e[a + 1] = t[1];
        return e
      }
    }(),
    r.str = function (t) {
      return 'vec2(' + t[0] + ', ' + t[1] + ')'
    },
    r.exactEquals = function (t, e) {
      return t[0] === e[0] && t[1] === e[1]
    },
    r.equals = function (t, e) {
      var i = t[0],
      r = t[1],
      s = e[0],
      o = e[1];
      return Math.abs(i - s) <= n.EPSILON * Math.max(1, Math.abs(i), Math.abs(s)) && Math.abs(r - o) <= n.EPSILON * Math.max(1, Math.abs(r), Math.abs(o))
    },
    t.exports = r
  }
  ])
}),
(CABLES = function (t) {
  var e = {
  };
  function i(n) {
    if (e[n]) return e[n].exports;
    var r = e[n] = {
      i: n,
      l: !1,
      exports: {
      }
    };
    return t[n].call(r.exports, r, r.exports, i),
    r.l = !0,
    r.exports
  }
  return i.m = t,
  i.c = e,
  i.d = function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    })
  },
  i.r = function (t) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: 'Module'
    }),
    Object.defineProperty(t, '__esModule', {
      value: !0
    })
  },
  i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, 'default', {
      enumerable: !0,
      value: t
    }), 2 & e && 'string' != typeof t) for (var r in t) i.d(n, r, function (e) {
      return t[e]
    }.bind(null, r));
    return n
  },
  i.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default
    }
    : function () {
      return t
    };
    return i.d(e, 'a', e),
    e
  },
  i.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  },
  i.p = '',
  i(i.s = 0)
}([function (t, e, i) {
  t.exports = i(1)
},
function (t, e, n) {
  'use strict';
  n.r(e);
  var r = {
  };
  n.r(r),
  n.d(r, 'base64Chars', function () {
    return l
  }),
  n.d(r, 'base64lookup', function () {
    return c
  }),
  n.d(r, 'b64encTypesArray', function () {
    return d
  }),
  n.d(r, 'b64decTypedArray', function () {
    return p
  });
  var s = {
  };
  n.r(s),
  n.d(s, 'shuffleArray', function () {
    return _
  }),
  n.d(s, 'uuid', function () {
    return b
  }),
  n.d(s, 'generateUUID', function () {
    return v
  }),
  n.d(s, 'simpleId', function () {
    return E
  }),
  n.d(s, 'smoothStep', function () {
    return M
  }),
  n.d(s, 'smootherStep', function () {
    return A
  }),
  n.d(s, 'map', function () {
    return x
  }),
  n.d(s, 'cacheBust', function () {
    return O
  }),
  n.d(s, 'jsonp', function () {
    return S
  }),
  n.d(s, 'ajaxSync', function () {
    return y
  }),
  n.d(s, 'ajax', function () {
    return P
  }),
  n.d(s, 'request', function () {
    return R
  }),
  n.d(s, 'UTILS', function () {
    return f
  });
  var o = {
  };
  n.r(o),
  n.d(o, 'easeExpoIn', function () {
    return D
  }),
  n.d(o, 'easeExpoOut', function () {
    return w
  }),
  n.d(o, 'easeExpoInOut', function () {
    return L
  }),
  n.d(o, 'easeCubicIn', function () {
    return B
  }),
  n.d(o, 'easeCubicOut', function () {
    return k
  }),
  n.d(o, 'easeCubicInOut', function () {
    return U
  }),
  n.d(o, 'ANIM', function () {
    return N
  }),
  n.d(o, 'Anim', function () {
    return V
  }),
  n.d(o, 'TL', function () {
    return G
  });
  var a = {
  };
  n.r(a),
  n.d(a, 'togglePacoRenderer', function () {
    return Tt
  }),
  n.d(a, 'showPacoRenderer', function () {
    return St
  }),
  n.d(a, 'PatchConnectionReceiver', function () {
    return yt
  }),
  n.d(a, 'PatchConnectionSender', function () {
    return Pt
  }),
  n.d(a, 'PatchConnectorBroadcastChannel', function () {
    return Rt
  });
  const l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  h = new Uint8Array(256);
  for (var u = 0; u < l.length; u++) h[l.charCodeAt(u)] = u;
  const c = h,
  d = function (t) {
    t.buffer && (t = t.buffer);
    var e,
    i = new Uint8Array(t),
    n = i.length,
    r = '';
    for (e = 0; e < n; e += 3) r += l[i[e] >> 2],
    r += l[(3 & i[e]) << 4 | i[e + 1] >> 4],
    r += l[(15 & i[e + 1]) << 2 | i[e + 2] >> 6],
    r += l[63 & i[e + 2]];
    return n % 3 == 2 ? r = r.substring(0, r.length - 1) + '=' : n % 3 == 1 && (r = r.substring(0, r.length - 2) + '=='),
    r
  },
  p = function (t) {
    var e,
    i,
    n,
    r,
    s,
    o = 0.75 * t.length,
    a = t.length,
    l = 0;
    '=' === t[t.length - 1] && (o--, '=' === t[t.length - 2] && o--);
    var h = new ArrayBuffer(o),
    u = new Uint8Array(h);
    for (e = 0; e < a; e += 4) i = c[t.charCodeAt(e)],
    n = c[t.charCodeAt(e + 1)],
    r = c[t.charCodeAt(e + 2)],
    s = c[t.charCodeAt(e + 3)],
    u[l++] = i << 2 | n >> 4,
    u[l++] = (15 & n) << 4 | r >> 2,
    u[l++] = (3 & r) << 6 | 63 & s;
    return h
  },
  g = function () {
    this._eventCallbacks = {
    },
    this.addEventListener = function (t, e) {
      this._eventCallbacks[t] ? this._eventCallbacks[t].push(e)  : this._eventCallbacks[t] = [
        e
      ]
    },
    this.hasEventListener = function (t, e) {
      if (t && e) {
        if (this._eventCallbacks[t]) return - 1 != this._eventCallbacks[t].indexOf(e)
      } else console.log('hasListener: missing parameters')
    },
    this.removeEventListener = function (t, e) {
      if (this._eventCallbacks[t]) {
        var i = this._eventCallbacks[t].indexOf(e);
        - 1 == i ? console.log('eventlistener ' + t + ' not found...')  : this._eventCallbacks[t].splice(i)
      }
    },
    this.emitEvent = function (t, e, i, n, r, s, o) {
      if (this._eventCallbacks[t]) for (var a = 0; a < this._eventCallbacks[t].length; a++) this._eventCallbacks[t][a] && this._eventCallbacks[t][a](e, i, n, r, s, o)
    }
  },
  f = {
    float32Concat: function (t, e) {
      t instanceof Float32Array || (t = new Float32Array(t)),
      e instanceof Float32Array || (e = new Float32Array(e));
      var i = t.length,
      n = new Float32Array(i + e.length);
      return n.set(t),
      n.set(e, i),
      n
    }
  },
  _ = function (t) {
    for (var e = t.length - 1; e > 0; e--) {
      var i = Math.floor(Math.seededRandom() * (e + 1)),
      n = t[e];
      t[e] = t[i],
      t[i] = n
    }
    return t
  },
  m = function () {
    var t = (new Date).getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, e=>{
      var i = (t + 16 * Math.random()) % 16 | 0;
      return t = Math.floor(t / 16),
      ('x' == e ? i : 3 & i | 8).toString(16)
    })
  },
  b = m,
  v = m;
  var I = 0;
  const E = function () {
    return ++I
  },
  M = function (t) {
    var e = Math.max(0, Math.min(1, (t - 0) / 1));
    return e * e * (3 - 2 * e)
  },
  A = function (t) {
    var e = Math.max(0, Math.min(1, (t - 0) / 1));
    return e * e * e * (e * (6 * e - 15) + 10)
  },
  x = function (t, e, i, n, r, s) {
    if (t >= i) return r;
    if (t <= e) return n;
    var o = !1,
    a = Math.min(e, i),
    l = Math.max(e, i);
    a != e && (o = !0);
    var h = !1,
    u = Math.min(n, r),
    c = Math.max(n, r);
    u != n && (h = !0);
    var d,
    p;
    return d = o ? (l - t) * (c - u) / (l - a)  : (t - a) * (c - u) / (l - a),
    p = h ? c - d : d + u,
    s ? 1 == s ? n + (t = Math.max(0, Math.min(1, (p - n) / (r - n)))) * t * (3 - 2 * t) * (r - n)  : 2 == s ? n + (t = Math.max(0, Math.min(1, (p - n) / (r - n)))) * t * t * (t * (6 * t - 15) + 10) * (r - n)  : p : p
  };
  Math.randomSeed = 1,
  Math.seededRandom = function (t, e) {
    return 0 === Math.randomSeed && (Math.randomSeed = 999 * Math.random()),
    t = t || 1,
    e = e || 0,
    Math.randomSeed = (9301 * Math.randomSeed + 49297) % 233280,
    e + Math.randomSeed / 233280 * (t - e)
  },
  f.arrayWriteToEnd = function (t, e) {
    for (var i = 1; i < t.length; i++) t[i - 1] = t[i];
    t[t.length - 1] = e
  },
  f.isNumeric = function (t) {
    return !isNaN(parseFloat(t)) && isFinite(t)
  },
  f.isArray = function (t) {
    return '[object Array]' === Object.prototype.toString.call(t)
  },
  String.prototype.endl = function () {
    return this + '\n'
  },
  String.prototype.startsWith = function (t) {
    return 0 === this.indexOf(t)
  },
  String.prototype.endsWith = function (t) {
    return this.match(t + '$') == t
  };
  const O = function (t) {
    return t.indexOf('?') > - 1 ? t += '&' : t += '?',
    t + 'cb=' + CABLES.uuid()
  };
  var T = null;
  const S = function (t, e) {
    T = T || 0;
    var i = ++T;
    console.log('making jsonp request...'),
    CABLES['jsonpFunc' + i] = function (t) {
      console.log(t),
      e(!1, t)
    };
    var n = '?';
    t.indexOf(n) > - 1 && (n = '&');
    var r = document.createElement('script');
    r.setAttribute('src', t + n + 'callback=CABLES.jsonpFunc' + i),
    document.body.appendChild(r)
  },
  y = function (t, e, i, n, r) {
    R({
      url: t,
      cb: e,
      method: i,
      data: n,
      contenttype: r,
      sync: !0
    })
  },
  P = function (t, e, i, n, r, s) {
    R({
      url: t,
      cb: e,
      method: i,
      'data:': n,
      contenttype: r,
      sync: !1,
      jsonp: s
    })
  },
  R = function (t) {
    var e;
    t.hasOwnProperty('asynch') || (t.asynch = !0);
    try {
      e = new XMLHttpRequest
    } catch (t) {
    }
    e.onreadystatechange = function () {
      4 == e.readyState && t.cb && (200 == e.status || 0 == e.status ? t.cb(!1, e.responseText, e)  : t.cb(!0, e.responseText, e))
    },
    e.addEventListener('progress', t=>{
    }),
    e.open(t.method ? t.method.toUpperCase()  : 'GET', t.url, !t.sync),
    t.post || t.data ? (e.setRequestHeader('Content-type', t.contenttype ? t.contenttype : 'application/x-www-form-urlencoded'), e.send(t.data || t.post))  : e.send()
  };
  window.performance = window.performance || {
    offset: Date.now(),
    now: function () {
      return Date.now() - this.offset
    }
  };
  const F = {
    ANIM: {
      EASINGS: [
        'linear',
        'absolute',
        'smoothstep',
        'smootherstep',
        'Cubic In',
        'Cubic Out',
        'Cubic In Out',
        'Expo In',
        'Expo Out',
        'Expo In Out',
        'Sin In',
        'Sin Out',
        'Sin In Out',
        'Quart In',
        'Quart Out',
        'Quart In Out',
        'Quint In',
        'Quint Out',
        'Quint In Out',
        'Back In',
        'Back Out',
        'Back In Out',
        'Elastic In',
        'Elastic Out',
        'Elastic In Out',
        'Bounce In',
        'Bounce Out'
      ],
      EASING_LINEAR: 0,
      EASING_ABSOLUTE: 1,
      EASING_SMOOTHSTEP: 2,
      EASING_SMOOTHERSTEP: 3,
      EASING_BEZIER: 4,
      EASING_CUBIC_IN: 5,
      EASING_CUBIC_OUT: 6,
      EASING_CUBIC_INOUT: 7,
      EASING_EXPO_IN: 8,
      EASING_EXPO_OUT: 9,
      EASING_EXPO_INOUT: 10,
      EASING_SIN_IN: 11,
      EASING_SIN_OUT: 12,
      EASING_SIN_INOUT: 13,
      EASING_BACK_IN: 14,
      EASING_BACK_OUT: 15,
      EASING_BACK_INOUT: 16,
      EASING_ELASTIC_IN: 17,
      EASING_ELASTIC_OUT: 18,
      EASING_BOUNCE_IN: 19,
      EASING_BOUNCE_OUT: 21,
      EASING_QUART_IN: 22,
      EASING_QUART_OUT: 23,
      EASING_QUART_INOUT: 24,
      EASING_QUINT_IN: 25,
      EASING_QUINT_OUT: 26,
      EASING_QUINT_INOUT: 27
    },
    OP: {
      OP_PORT_TYPE_VALUE: 0,
      OP_PORT_TYPE_FUNCTION: 1,
      OP_PORT_TYPE_OBJECT: 2,
      OP_PORT_TYPE_TEXTURE: 2,
      OP_PORT_TYPE_ARRAY: 3,
      OP_PORT_TYPE_DYNAMIC: 4,
      OP_PORT_TYPE_STRING: 5,
      OP_VERSION_PREFIX: '_v'
    },
    PORT: {
      PORT_DIR_IN: 0,
      PORT_DIR_OUT: 1
    },
    PACO: {
      PACO_CLEAR: 0,
      PACO_VALUECHANGE: 1,
      PACO_OP_DELETE: 2,
      PACO_UNLINK: 3,
      PACO_LINK: 4,
      PACO_LOAD: 5,
      PACO_OP_CREATE: 6,
      PACO_OP_ENABLE: 7,
      PACO_OP_DISABLE: 8
    }
  },
  C = function (t, e, i, n) {
    g.apply(this),
    this.data = {
    },
    this.direction = F.PORT.PORT_DIR_IN,
    this.id = v(),
    this.parent = t,
    this.links = [
    ],
    this.value = 0,
    this.name = e,
    this.type = i || F.OP.OP_PORT_TYPE_VALUE,
    this.uiAttribs = n || {
    },
    this.anim = null,
    this._oldAnimVal = - 5711,
    this.defaultValue = null,
    this._uiActiveState = !0,
    this.ignoreValueSerialize = !1,
    this.onLinkChanged = null,
    this.crashed = !1,
    this._valueBeforeLink = null,
    this._lastAnimFrame = - 1,
    this._animated = !1,
    this.onValueChanged = null,
    this.onTriggered = null,
    this.onUiActiveStateChange = null,
    this.changeAlways = !1,
    this._warnedDeprecated = !1,
    Object.defineProperty(this, 'val', {
      get() {
        return this._warnedDeprecated = !0,
        this.get()
      },
      set(t) {
        this.setValue(t),
        this._warnedDeprecated = !0
      }
    })
  };
  C.prototype.onAnimToggle = function () {
  },
  C.prototype._onAnimToggle = function () {
    this.onAnimToggle()
  },
  C.prototype.hidePort = function () {
    this.setUiAttribs({
      hidePort: !0
    })
  },
  C.prototype.remove = function () {
    this.removeLinks(),
    this.parent.removePort(this)
  },
  C.prototype.setUiAttribs = function (t) {
    for (var e in this.uiAttribs || (this.uiAttribs = {
    }), t) this.uiAttribs[e] = t[e];
    this.emitEvent('onUiAttrChange', t)
  },
  C.prototype.get = function () {
    return this._animated && this._lastAnimFrame != this.parent.patch.getFrameNum() && (this._lastAnimFrame = this.parent.patch.getFrameNum(), this.value = this.anim.getValue(this.parent.patch.timer.getTime()), this._oldAnimVal = this.value, this.forceChange()),
    this.value
  },
  C.prototype.set = C.prototype.setValue = function (t) {
    if (void 0 !== t && this.parent.enabled && !this.crashed && (t !== this.value || this.changeAlways || this.type == F.OP.OP_PORT_TYPE_TEXTURE || this.type == F.OP.OP_PORT_TYPE_ARRAY)) {
      if (this._animated) this.anim.setValue(this.parent.patch.timer.getTime(), t);
       else {
        try {
          this.value = t,
          this.forceChange()
        } catch (t) {
          this.crashed = !0,
          this.setValue = function (t) {
          },
          this.onTriggered = function () {
          },
          console.log('exception!'),
          console.error('onvaluechanged exception cought', t),
          console.log(t.stack),
          console.log('exception in: ' + this.parent.name),
          gui && gui.showOpCrash(this.parent),
          this.parent.patch.emitEvent('exception'.ex, this.parent)
        }
        CABLES.UI && this.type == F.OP.OP_PORT_TYPE_TEXTURE && gui.texturePreview().updateTexturePort(this)
      }
      if (this.direction == F.PORT.PORT_DIR_OUT) for (var e = 0; e < this.links.length; ++e) this.links[e].setValue()
    }
  },
  C.prototype.updateAnim = function () {
    this._animated && (this.value = this.get(), (this._oldAnimVal != this.value || this.changeAlways) && (this._oldAnimVal = this.value, this.forceChange()), this._oldAnimVal = this.value)
  },
  C.args = function (t) {
    return (t + '').replace(/[\/][\/].*$/gm, '').replace(/\s+/g, '').replace(/[\/][*][^\/*]*[*][\/]/g, '').split('){', 1) [0].replace(/^[^(]*[(]/, '').replace(/=[^,]+/g, '').split(',').filter(Boolean)
  },
  C.prototype.forceChange = function () {
    this.onValueChanged || this.onChange,
    this.onChange ? this.onChange(this, this.value)  : this.onValueChanged && this.onValueChanged(this, this.value)
  },
  C.prototype.getTypeString = function () {
    return this.type == F.OP.OP_PORT_TYPE_VALUE ? 'Number' : this.type == F.OP.OP_PORT_TYPE_FUNCTION ? 'Trigger' : this.type == F.OP.OP_PORT_TYPE_OBJECT ? 'Object' : this.type == F.OP.OP_PORT_TYPE_DYNAMIC ? 'Dynamic' : this.type == F.OP.OP_PORT_TYPE_ARRAY ? 'Array' : this.type == F.OP.OP_PORT_TYPE_STRING ? 'String' : 'Unknown'
  },
  C.prototype.getSerialized = function () {
    var t = {
    };
    if (t.name = this.getName(), this.ignoreValueSerialize || 0 !== this.links.length || this.type == F.OP.OP_PORT_TYPE_OBJECT && this.value && this.value.tex || (t.value = this.value), this._animated && (t.animated = !0), this.anim && (t.anim = this.anim.getSerialized()), 'file' == this.uiAttribs.display && (t.display = this.uiAttribs.display), this.direction == F.PORT.PORT_DIR_IN && this.links.length > 0) for (var e in t.links = [
    ], this.links) this.links[e].portIn && this.links[e].portOut && t.links.push(this.links[e].getSerialized());
    return t
  },
  C.prototype.shouldLink = function () {
    return !0
  },
  C.prototype.removeLinks = function () {
    for (var t = 0; this.links.length > 0; ) {
      if (++t > 5000) {
        console.warn('could not delete links... / infinite loop'),
        this.links.length = 0;
        break
      }
      this.links[0].remove()
    }
  },
  C.prototype.removeLink = function (t) {
    for (var e in this.links) this.links[e] == t && this.links.splice(e, 1);
    this.direction == F.PORT.PORT_DIR_IN && (this.type == F.OP.OP_PORT_TYPE_VALUE ? this.setValue(this._valueBeforeLink || 0)  : this.setValue(this._valueBeforeLink || null)),
    this.onLinkChanged && this.onLinkChanged(),
    this.emitEvent('onLinkChanged')
  },
  C.prototype.getName = function () {
    return this.name
  },
  C.prototype.addLink = function (t) {
    this._valueBeforeLink = this.value,
    this.links.push(t),
    this.onLinkChanged && this.onLinkChanged(),
    this.emitEvent('onLinkChanged')
  },
  C.prototype.getLinkTo = function (t) {
    for (var e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e]
  },
  C.prototype.removeLinkTo = function (t) {
    for (var e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return this.links[e].remove(),
    this.onLinkChanged && this.onLinkChanged(),
    void this.emitEvent('onLinkChanged')
  },
  C.prototype.isLinkedTo = function (t) {
    for (var e in this.links) if (this.links[e].portIn == t || this.links[e].portOut == t) return !0;
    return !1
  },
  C.prototype.trigger = function () {
    if (0 !== this.links.length && this.parent.enabled) {
      var t = null;
      try {
        for (var e = 0; e < this.links.length; ++e) this.links[e].portIn && (t = this.links[e].portIn)._onTriggered(),
        this.links[e] && this.links[e].activity()
      } catch (e) {
        this.parent.enabled = !1,
        CABLES.UI && (this.parent.patch.emitEvent('exception'.ex, t.parent), window.gui && gui.showOpCrash(t.parent)),
        console.log('exception!'),
        console.error('ontriggered exception cought', e),
        console.log(e.stack),
        console.log('exception in: ' + t.parent.name)
      }
    }
  },
  C.prototype.call = function () {
    console.log('call deprecated - use trigger() '),
    this.trigger()
  },
  C.prototype.execute = function () {
    console.log('### execute port: ' + this.getName(), this.goals.length)
  },
  C.prototype.setAnimated = function (t) {
    this._animated != t && (this._animated = t, this._animated && !this.anim && (this.anim = new V), this._onAnimToggle())
  },
  C.prototype.toggleAnim = function (t) {
    this._animated = !this._animated,
    this._animated && !this.anim && (this.anim = new V),
    this.setAnimated(this._animated),
    this._onAnimToggle()
  },
  C.prototype.getType = function () {
    return this.type
  },
  C.prototype.isLinked = function () {
    return this.links.length > 0
  },
  C.prototype.isAnimated = function () {
    return this._animated
  },
  C.prototype.isHidden = function () {
    return this.uiAttribs.hidePort
  },
  C.prototype._onTriggered = function () {
    this.parent.updateAnims(),
    this.parent.enabled && this.onTriggered && this.onTriggered()
  },
  C.prototype._onTriggeredProfiling = function () {
    this.parent.updateAnims(),
    this.parent.patch.profiler.add('port', this),
    this.parent.enabled && this.onTriggered && this.onTriggered(),
    this.parent.patch.profiler.add('port', null)
  },
  C.prototype.onValueChange = function (t) {
    this.onChange = t
  },
  C.prototype.getUiActiveState = function () {
    return this._uiActiveState
  },
  C.prototype.setUiActiveState = function (t) {
    this._uiActiveState = t,
    this.onUiActiveStateChange && this.onUiActiveStateChange()
  },
  C.portTypeNumberToString = function (t) {
    return t == F.OP.OP_PORT_TYPE_VALUE ? 'value' : t == F.OP.OP_PORT_TYPE_FUNCTION ? 'function' : t == F.OP.OP_PORT_TYPE_OBJECT ? 'object' : t == F.OP.OP_PORT_TYPE_ARRAY ? 'array' : t == F.OP.OP_PORT_TYPE_STRING ? 'string' : t == F.OP.OP_PORT_TYPE_DYNAMIC ? 'dynamic' : 'unknown'
  };
  const N = {
    Key: function (t) {
      this.time = 0,
      this.value = 0,
      this.ui = {
      },
      this.onChange = null,
      this._easing = 0,
      this.bezTime = 0.5,
      this.bezValue = 0,
      this.bezTimeIn = - 0.5,
      this.bezValueIn = 0,
      this.cb = null,
      this.cbTriggered = !1,
      this._updateBezier = !1,
      this.setEasing(F.ANIM.EASING_LINEAR),
      this.set(t)
    }
  };
  N.Key.linear = function (t, e, i) {
    return parseFloat(e.value) + parseFloat(i.value - e.value) * t
  },
  N.Key.easeLinear = function (t, e) {
    return N.Key.linear(t, this, e)
  },
  N.Key.easeAbsolute = function (t, e) {
    return this.value
  };
  const D = function (t) {
    return Math.pow(2, 10 * (t - 1))
  };
  N.Key.easeExpoIn = function (t, e) {
    return t = D(t),
    N.Key.linear(t, this, e)
  };
  const w = function (t) {
    return 1 - Math.pow(2, - 10 * t)
  };
  N.Key.easeExpoOut = function (t, e) {
    return t = w(t),
    N.Key.linear(t, this, e)
  };
  const L = function (t) {
    return (t *= 2) < 1 ? t = 0.5 * Math.pow(2, 10 * (t - 1))  : (t--, t = 0.5 * (2 - Math.pow(2, - 10 * t))),
    t
  };
  N.Key.easeExpoInOut = function (t, e) {
    return t = L(t),
    N.Key.linear(t, this, e)
  },
  N.Key.easeSinIn = function (t, e) {
    return t = - 1 * Math.cos(t * Math.PI / 2) + 1,
    N.Key.linear(t, this, e)
  },
  N.Key.easeSinOut = function (t, e) {
    return t = Math.sin(t * Math.PI / 2),
    N.Key.linear(t, this, e)
  },
  N.Key.easeSinInOut = function (t, e) {
    return t = - 0.5 * (Math.cos(Math.PI * t) - 1),
    N.Key.linear(t, this, e)
  };
  const B = function (t) {
    return t * (t * t)
  };
  N.Key.easeCubicIn = function (t, e) {
    return t = B(t),
    N.Key.linear(t, this, e)
  },
  N.Key.easeInQuint = function (t, e) {
    return t *= t * t * t * t,
    N.Key.linear(t, this, e)
  },
  N.Key.easeOutQuint = function (t, e) {
    return t = (t -= 1) * t * t * t * t + 1,
    N.Key.linear(t, this, e)
  },
  N.Key.easeInOutQuint = function (t, e) {
    return (t /= 0.5) < 1 ? t *= 0.5 * t * t * t * t : t = 0.5 * ((t -= 2) * t * t * t * t + 2),
    N.Key.linear(t, this, e)
  },
  N.Key.easeInQuart = function (t, e) {
    return t *= t * t * t,
    N.Key.linear(t, this, e)
  },
  N.Key.easeOutQuart = function (t, e) {
    return t = - 1 * ((t -= 1) * t * t * t - 1),
    N.Key.linear(t, this, e)
  },
  N.Key.easeInOutQuart = function (t, e) {
    return (t /= 0.5) < 1 ? t *= 0.5 * t * t * t : t = - 0.5 * ((t -= 2) * t * t * t - 2),
    N.Key.linear(t, this, e)
  },
  N.Key.bounce = function (t) {
    return (t /= 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375,
    t
  },
  N.Key.easeInBounce = function (t, e) {
    return N.Key.linear(N.Key.bounce(t), this, e)
  },
  N.Key.easeOutBounce = function (t, e) {
    return N.Key.linear(N.Key.bounce(t), this, e)
  },
  N.Key.easeInElastic = function (t, e) {
    var i = 1.70158,
    n = 0,
    r = 1;
    return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (n || (n = 0.3), r < Math.abs(1) ? (r = 1, i = n / 4)  : i = n / (2 * Math.PI) * Math.asin(1 / r), t = - r * Math.pow(2, 10 * (t -= 1)) * Math.sin((1 * t - i) * (2 * Math.PI) / n) + 0),
    N.Key.linear(t, this, e)
  },
  N.Key.easeOutElastic = function (t, e) {
    var i = 1.70158,
    n = 0,
    r = 1;
    return 0 === t ? t = 0 : 1 == (t /= 1) ? t = 1 : (n || (n = 0.3), r < Math.abs(1) ? (r = 1, i = n / 4)  : i = n / (2 * Math.PI) * Math.asin(1 / r), t = r * Math.pow(2, - 10 * t) * Math.sin((1 * t - i) * (2 * Math.PI) / n) + 1 + 0),
    N.Key.linear(t, this, e)
  },
  N.Key.easeInBack = function (t, e) {
    var i = 1.70158;
    return t = t * t * ((i + 1) * t - i),
    N.Key.linear(t, this, e)
  },
  N.Key.easeOutBack = function (t, e) {
    var i = 1.70158;
    return t = (t = t / 1 - 1) * t * ((i + 1) * t + i) + 1,
    N.Key.linear(t, this, e)
  },
  N.Key.easeInOutBack = function (t, e) {
    var i = 1.70158;
    return t = (t /= 0.5) < 1 ? t * t * ((1 + (i *= 1.525)) * t - i) * 0.5 : 0.5 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2),
    N.Key.linear(t, this, e)
  };
  const k = function (t) {
    return --t * t * t + 1
  };
  N.Key.easeCubicOut = function (t, e) {
    return t = k(t),
    N.Key.linear(t, this, e)
  };
  const U = function (t) {
    return (t *= 2) < 1 ? t *= 0.5 * t * t : t = 0.5 * ((t -= 2) * t * t + 2),
    t
  };
  N.Key.easeCubicInOut = function (t, e) {
    return t = U(t),
    N.Key.linear(t, this, e)
  },
  N.Key.easeSmoothStep = function (t, e) {
    var i = Math.max(0, Math.min(1, t));
    return t = i * i * (3 - 2 * i),
    N.Key.linear(t, this, e)
  },
  N.Key.easeSmootherStep = function (t, e) {
    var i = Math.max(0, Math.min(1, (t - 0) / 1));
    return t = i * i * i * (i * (6 * i - 15) + 10),
    N.Key.linear(t, this, e)
  },
  N.Key.prototype.setEasing = function (t) {
    this._easing = t,
    this._easing == F.ANIM.EASING_ABSOLUTE ? this.ease = N.Key.easeAbsolute : this._easing == F.ANIM.EASING_SMOOTHSTEP ? this.ease = N.Key.easeSmoothStep : this._easing == F.ANIM.EASING_SMOOTHERSTEP ? this.ease = N.Key.easeSmootherStep : this._easing == F.ANIM.EASING_CUBIC_IN ? this.ease = N.Key.easeCubicIn : this._easing == F.ANIM.EASING_CUBIC_OUT ? this.ease = N.Key.easeCubicOut : this._easing == F.ANIM.EASING_CUBIC_INOUT ? this.ease = N.Key.easeCubicInOut : this._easing == F.ANIM.EASING_EXPO_IN ? this.ease = N.Key.easeExpoIn : this._easing == F.ANIM.EASING_EXPO_OUT ? this.ease = N.Key.easeExpoOut : this._easing == F.ANIM.EASING_EXPO_INOUT ? this.ease = N.Key.easeExpoInOut : this._easing == F.ANIM.EASING_SIN_IN ? this.ease = N.Key.easeSinIn : this._easing == F.ANIM.EASING_SIN_OUT ? this.ease = N.Key.easeSinOut : this._easing == F.ANIM.EASING_SIN_INOUT ? this.ease = N.Key.easeSinInOut : this._easing == F.ANIM.EASING_BACK_OUT ? this.ease = N.Key.easeOutBack : this._easing == F.ANIM.EASING_BACK_IN ? this.ease = N.Key.easeInBack : this._easing == F.ANIM.EASING_BACK_INOUT ? this.ease = N.Key.easeInOutBack : this._easing == F.ANIM.EASING_ELASTIC_IN ? this.ease = N.Key.easeInElastic : this._easing == F.ANIM.EASING_ELASTIC_OUT ? this.ease = N.Key.easeOutElastic : this._easing == F.ANIM.EASING_BOUNCE_IN ? this.ease = N.Key.easeInBounce : this._easing == F.ANIM.EASING_BOUNCE_OUT ? this.ease = N.Key.easeOutBounce : this._easing == F.ANIM.EASING_QUART_OUT ? this.ease = N.Key.easeOutQuart : this._easing == F.ANIM.EASING_QUART_IN ? this.ease = N.Key.easeInQuart : this._easing == F.ANIM.EASING_QUART_INOUT ? this.ease = N.Key.easeInOutQuart : this._easing == F.ANIM.EASING_QUINT_OUT ? this.ease = N.Key.easeOutQuint : this._easing == F.ANIM.EASING_QUINT_IN ? this.ease = N.Key.easeInQuint : this._easing == F.ANIM.EASING_QUINT_INOUT ? this.ease = N.Key.easeInOutQuint : this._easing == F.ANIM.EASING_BEZIER ? (this._updateBezier = !0, this.ease = N.Key.easeBezier)  : (this._easing = F.ANIM.EASING_LINEAR, this.ease = N.Key.easeLinear)
  },
  N.Key.prototype.trigger = function () {
    this.cb(),
    this.cbTriggered = !0
  },
  N.Key.prototype.setValue = function (t) {
    this.value = t,
    this._updateBezier = !0,
    null !== this.onChange && this.onChange()
  },
  N.Key.prototype.set = function (t) {
    t && (t.e && this.setEasing(t.e), t.cb && (this.cb = t.cb, this.cbTriggered = !1), t.b && (this.bezTime = t.b[0], this.bezValue = t.b[1], this.bezTimeIn = t.b[2], this.bezValueIn = t.b[3], this._updateBezier = !0), t.hasOwnProperty('t') && (this.time = t.t), t.hasOwnProperty('time') && (this.time = t.time), t.hasOwnProperty('v') ? this.value = t.v : t.hasOwnProperty('value') && (this.value = t.value)),
    null !== this.onChange && this.onChange()
  },
  N.Key.prototype.getSerialized = function () {
    var t = {
    };
    return t.t = this.time,
    t.v = this.value,
    t.e = this._easing,
    this._easing == F.ANIM.EASING_BEZIER && (t.b = [
      this.bezTime,
      this.bezValue,
      this.bezTimeIn,
      this.bezValueIn
    ]),
    t
  },
  N.Key.prototype.getEasing = function () {
    return this._easing
  };
  const V = function (t) {
    this.keys = [
    ],
    this.onChange = null,
    this.stayInTimeline = !1,
    this.loop = !1,
    this.defaultEasing = F.ANIM.EASING_LINEAR,
    this.onLooped = null,
    this._timesLooped = 0,
    this._needsSort = !1
  };
  V.prototype.forceChangeCallback = function () {
    null !== this.onChange && this.onChange()
  },
  V.prototype.hasEnded = function (t) {
    return 0 === this.keys.length || this.keys[this.keys.length - 1].time <= t
  },
  V.prototype.isRising = function (t) {
    if (this.hasEnded(t)) return !1;
    var e = this.getKeyIndex(t);
    return this.keys[e].value < this.keys[e + 1].value
  },
  V.prototype.clear = function (t) {
    var e = 0;
    t && (e = this.getValue(t)),
    this.keys.length = 0,
    t && this.setValue(t, e),
    null !== this.onChange && this.onChange()
  },
  V.prototype.sortKeys = function () {
    this.keys.sort((t, e) =>parseFloat(t.time) - parseFloat(e.time)),
    this._needsSort = !1
  },
  V.prototype.getLength = function () {
    return 0 === this.keys.length ? 0 : this.keys[this.keys.length - 1].time
  },
  V.prototype.getKeyIndex = function (t) {
    for (var e = 0, i = 0; i < this.keys.length; i++) if (t >= this.keys[i].time && (e = i), this.keys[i].time > t) return e;
    return e
  },
  V.prototype.setValue = function (t, e, i) {
    var n = !1;
    for (var r in this.keys) if (this.keys[r].time == t) {
      n = this.keys[r],
      this.keys[r].setValue(e),
      this.keys[r].cb = i;
      break
    }
    n || this.keys.push(new N.Key({
      time: t,
      value: e,
      e: this.defaultEasing,
      cb: i
    })),
    this.onChange && this.onChange(),
    this._needsSort = !0
  },
  V.prototype.getSerialized = function () {
    var t = {
      keys: [
      ]
    };
    for (var e in t.loop = this.loop, this.keys) t.keys.push(this.keys[e].getSerialized());
    return t
  },
  V.prototype.getKey = function (t) {
    var e = this.getKeyIndex(t);
    return this.keys[e]
  },
  V.prototype.getNextKey = function (t) {
    var e = this.getKeyIndex(t) + 1;
    return e >= this.keys.length && (e = this.keys.length - 1),
    this.keys[e]
  },
  V.prototype.isFinished = function (t) {
    return this.keys.length <= 0 || t > this.keys[this.keys.length - 1].time
  },
  V.prototype.isStarted = function (t) {
    return !(this.keys.length <= 0) && t >= this.keys[0].time
  },
  V.prototype.getValue = function (t) {
    if (0 === this.keys.length) return 0;
    if (this._needsSort && this.sortKeys(), t < this.keys[0].time) return this.keys[0].value;
    var e = this.keys.length - 1;
    this.loop && t > this.keys[e].time && (t / this.keys[e].time > this._timesLooped && (this._timesLooped++, this.onLooped && this.onLooped()), t = (t - this.keys[0].time) % (this.keys[e].time - this.keys[0].time), t += this.keys[0].time);
    var i = this.getKeyIndex(t);
    if (i >= e) return this.keys[e].cb && !this.keys[e].cbTriggered && this.keys[e].trigger(),
    this.keys[e].value;
    var n = parseInt(i, 10) + 1,
    r = this.keys[i],
    s = this.keys[n];
    if (r.cb && !r.cbTriggered && r.trigger(), !s) return - 1;
    var o = (t - r.time) / (s.time - r.time);
    return r.ease(o, s)
  },
  V.prototype.addKey = function (t) {
    void 0 === t.time ? console.log('key time undefined, ignoring!')  : (this.keys.push(t), null !== this.onChange && this.onChange())
  },
  V.prototype.easingFromString = function (t) {
    return 'linear' == t ? F.ANIM.EASING_LINEAR : 'absolute' == t ? F.ANIM.EASING_ABSOLUTE : 'smoothstep' == t ? F.ANIM.EASING_SMOOTHSTEP : 'smootherstep' == t ? F.ANIM.EASING_SMOOTHERSTEP : 'Cubic In' == t ? F.ANIM.EASING_CUBIC_IN : 'Cubic Out' == t ? F.ANIM.EASING_CUBIC_OUT : 'Cubic In Out' == t ? F.ANIM.EASING_CUBIC_INOUT : 'Expo In' == t ? F.ANIM.EASING_EXPO_IN : 'Expo Out' == t ? F.ANIM.EASING_EXPO_OUT : 'Expo In Out' == t ? F.ANIM.EASING_EXPO_INOUT : 'Sin In' == t ? F.ANIM.EASING_SIN_IN : 'Sin Out' == t ? F.ANIM.EASING_SIN_OUT : 'Sin In Out' == t ? F.ANIM.EASING_SIN_INOUT : 'Back In' == t ? F.ANIM.EASING_BACK_IN : 'Back Out' == t ? F.ANIM.EASING_BACK_OUT : 'Back In Out' == t ? F.ANIM.EASING_BACK_INOUT : 'Elastic In' == t ? F.ANIM.EASING_ELASTIC_IN : 'Elastic Out' == t ? F.ANIM.EASING_ELASTIC_OUT : 'Bounce In' == t ? F.ANIM.EASING_BOUNCE_IN : 'Bounce Out' == t ? F.ANIM.EASING_BOUNCE_OUT : 'Quart Out' == t ? F.ANIM.EASING_QUART_OUT : 'Quart In' == t ? F.ANIM.EASING_QUART_IN : 'Quart In Out' == t ? F.ANIM.EASING_QUART_INOUT : 'Quint Out' == t ? F.ANIM.EASING_QUINT_OUT : 'Quint In' == t ? F.ANIM.EASING_QUINT_IN : 'Quint In Out' == t ? F.ANIM.EASING_QUINT_INOUT : void 0
  },
  V.prototype.createPort = function (t, e, i) {
    var n = t.addInPort(new C(t, e, F.OP.OP_PORT_TYPE_VALUE, {
      display: 'dropdown',
      values: F.ANIM.EASINGS
    }));
    return n.set('linear'),
    n.defaultValue = 'linear',
    n.onChange = function () {
      this.defaultEasing = this.easingFromString(n.get()),
      i && i()
    }.bind(this),
    n
  },
  V.slerpQuaternion = function (t, e, i, n, r, s) {
    V.slerpQuaternion.q1 || (V.slerpQuaternion.q1 = quat.create(), V.slerpQuaternion.q2 = quat.create());
    var o = i.getKeyIndex(t),
    a = o + 1;
    if (a >= i.keys.length && (a = i.keys.length - 1), o == a) quat.set(e, i.keys[o].value, n.keys[o].value, r.keys[o].value, s.keys[o].value);
     else {
      var l = i.keys[o].time,
      h = (t - l) / (i.keys[a].time - l);
      quat.set(V.slerpQuaternion.q1, i.keys[o].value, n.keys[o].value, r.keys[o].value, s.keys[o].value),
      quat.set(V.slerpQuaternion.q2, i.keys[a].value, n.keys[a].value, r.keys[a].value, s.keys[a].value),
      quat.slerp(e, V.slerpQuaternion.q1, V.slerpQuaternion.q2, h)
    }
    return e
  };
  const G = N;
  G.Anim = V;
  const z = function (t) {
    this.portIn = null,
    this.portOut = null,
    this.scene = t,
    this.activityCounter = 0
  };
  z.prototype.setValue = function (t) {
    void 0 === t ? this._setValue()  : this.portIn.set(t)
  },
  z.prototype.activity = function () {
    this.activityCounter++
  },
  z.prototype._setValue = function () {
    if (this.portOut) {
      var t = this.portOut.get();
      t == t && (this.portIn.type != F.OP.OP_PORT_TYPE_FUNCTION && this.activity(), this.portIn.get() !== t ? this.portIn.set(t)  : this.portIn.changeAlways && this.portIn.set(t))
    } else this.remove()
  },
  z.prototype.getOtherPort = function (t) {
    return t == this.portIn ? this.portOut : this.portIn
  },
  z.prototype.remove = function () {
    this.portIn && this.portIn.removeLink(this),
    this.portOut && this.portOut.removeLink(this),
    this.scene && this.scene.emitEvent('onUnLink', this.portIn, this.portOut),
    this.portIn && this.portIn.type == F.OP.OP_PORT_TYPE_OBJECT && (this.portIn.set(null), this.portIn.links.length > 0 && this.portIn.set(this.portIn.links[0].getOtherPort(this.portIn).get())),
    this.portIn && this.portIn.parent._checkLinksNeededToWork(),
    this.portOut && this.portOut.parent._checkLinksNeededToWork(),
    this.portIn = null,
    this.portOut = null,
    this.scene = null
  },
  z.prototype.link = function (t, e) {
    if (!z.canLink(t, e)) return console.log('cannot link ports!'),
    !1;
    t.direction == F.PORT.PORT_DIR_IN ? (this.portIn = t, this.portOut = e)  : (this.portIn = e, this.portOut = t),
    t.addLink(this),
    e.addLink(this),
    this.setValue(),
    t.onLink && t.onLink(this),
    e.onLink && e.onLink(this),
    t.parent._checkLinksNeededToWork(),
    e.parent._checkLinksNeededToWork()
  },
  z.prototype.getSerialized = function () {
    var t = {
    };
    return t.portIn = this.portIn.getName(),
    t.portOut = this.portOut.getName(),
    t.objIn = this.portIn.parent.id,
    t.objOut = this.portOut.parent.id,
    t
  },
  z.canLinkText = function (t, e) {
    if (t.direction == e.direction) {
      var i = '(out)';
      return e.direction == F.PORT.PORT_DIR_IN && (i = '(in)'),
      'can not link: same direction ' + i
    }
    return t.parent == e.parent ? 'can not link: same op' : t.type != F.OP.OP_PORT_TYPE_DYNAMIC && e.type != F.OP.OP_PORT_TYPE_DYNAMIC && t.type != e.type ? 'can not link: different type' : t ? e ? t.direction == F.PORT.PORT_DIR_IN && t.isAnimated() ? 'can not link: is animated' : e.direction == F.PORT.PORT_DIR_IN && e.isAnimated() ? 'can not link: is animated' : t.isLinkedTo(e) ? 'ports already linked' : t.canLink && !t.canLink(e) || e.canLink && !e.canLink(t) ? 'Incompatible' : 'can link' : 'can not link: port 2 invalid' : 'can not link: port 1 invalid'
  },
  z.canLink = function (t, e) {
    return !(!t || !e || t.direction == F.PORT.PORT_DIR_IN && t.isAnimated() || e.direction == F.PORT.PORT_DIR_IN && e.isAnimated() || t.isHidden() || e.isHidden() || t.isLinkedTo(e) || t.direction == e.direction || t.type != e.type && t.type != F.OP.OP_PORT_TYPE_DYNAMIC && e.type != F.OP.OP_PORT_TYPE_DYNAMIC || t.type != F.OP.OP_PORT_TYPE_DYNAMIC && e.type != F.OP.OP_PORT_TYPE_DYNAMIC && (t.parent == e.parent || t.canLink && !t.canLink(e) || e.canLink && !e.canLink(t)))
  };
  const H = function () {
    if (this.data = {
    }, this.objName = '', this.portsOut = [
    ], this.portsIn = [
    ], this.portsInData = [
    ], this.opId = '', this.uiAttribs = {
    }, this.enabled = !0, this.patch = arguments[0], this.name = arguments[1], this.errors = {
    }, this._needsLinkedToWork = [
    ], this._needsParentOp = null, this._shortOpName = '', arguments[1]) {
      if (this._shortOpName = arguments[1].split('.') [arguments[1].split('.').length - 1], this._shortOpName.indexOf(F.OP.OP_VERSION_PREFIX) > 0) {
        var t = this._shortOpName.split(F.OP.OP_VERSION_PREFIX) [1];
        this._shortOpName = this._shortOpName.substring(0, this._shortOpName.length - (F.OP.OP_VERSION_PREFIX + t).length)
      }
      this.uiAttribs.title = this._shortOpName
    }
    this.id = arguments[2] || b(),
    this.onAddPort = null,
    this.onCreate = null,
    this.onResize = null,
    this.onLoaded = null,
    this.onDelete = null,
    this.onUiAttrChange = null,
    this._eventCallbacks = {
    },
    this._instances = null,
    this.preRender = null,
    this.init = null
  };
  {
    H.prototype.clearUiAttrib = function (t) {
      this.uiAttrib({
        name: null
      })
    },
    H.prototype.setTitle = function (t) {
      var e = this.name != t;
      this.name = t,
      this.uiAttr({
        title: t
      }),
      e && this.fireEvent('onTitleChange', t)
    };
    const t = function (t) {
      for (var e in this.uiAttribs || (this.uiAttribs = {
      }), t) this.uiAttribs[e] = t[e];
      this.fireEvent('onUiAttribsChange', t)
    };
    H.prototype.setUiAttrib = t,
    H.prototype.uiAttr = t,
    H.prototype.getName = function () {
      return this.uiAttribs.name ? this.uiAttribs.name : this.objName.split('.')
    },
    H.prototype.addOutPort = function (t) {
      return t.direction = F.PORT.PORT_DIR_OUT,
      t.parent = this,
      this.portsOut.push(t),
      this.onAddPort && this.onAddPort(t),
      t
    },
    H.prototype.hasPort = function (t) {
      for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[i].getName() == t) return !0;
      return !1
    },
    H.prototype.hasDynamicPort = function () {
      var t = 0;
      for (t = 0; t < this.portsIn.length; t++) {
        if (this.portsIn[t].type == F.OP.OP_PORT_TYPE_DYNAMIC) return !0;
        if ('dyn' == this.portsIn[t].getName()) return !0
      }
      for (t = 0; t < this.portsOut.length; t++) {
        if (this.portsOut[t].type == F.OP.OP_PORT_TYPE_DYNAMIC) return !0;
        if ('dyn' == this.portsOut[t].getName()) return !0
      }
      return !1
    },
    H.prototype.addInPort = function (t) {
      if (!(t instanceof C)) throw new Error('parameter is not a port!');
      return t.direction = F.PORT.PORT_DIR_IN,
      t.parent = this,
      this.portsIn.push(t),
      this.onAddPort && this.onAddPort(t),
      t
    },
    H.prototype.inFunction = H.prototype.inTrigger = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_FUNCTION));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.inFunctionButton = H.prototype.inTriggerButton = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_FUNCTION, {
        display: 'button'
      }));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.inValueFloat = H.prototype.inValue = H.prototype.inFloat = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE));
      return void 0 !== e && (i.set(e), i.defaultValue = e),
      i
    },
    H.prototype.inValueBool = H.prototype.inBool = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        display: 'bool'
      }));
      return void 0 !== e && (i.set(e), i.defaultValue = e),
      i
    },
    H.prototype.inValueString = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        type: 'string'
      }));
      return i.value = '',
      void 0 !== e && (i.set(e), i.defaultValue = e),
      i
    },
    H.prototype.inString = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_STRING, {
        type: 'string'
      }));
      return e = e || '',
      i.value = e,
      i.set(e),
      i.defaultValue = e,
      i
    },
    H.prototype.inValueText = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        type: 'string',
        display: 'text'
      }));
      return i.value = '',
      void 0 !== e && (i.set(e), i.defaultValue = e),
      i
    },
    H.prototype.inStringEditor = function (t, e, i) {
      var n = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_STRING, {
        type: 'string',
        display: 'editor',
        editorSyntax: i
      }));
      return n.value = '',
      void 0 !== e && (n.set(e), n.defaultValue = e),
      n
    },
    H.prototype.inValueEditor = function (t, e, i) {
      var n = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        type: 'string',
        display: 'editor',
        editorSyntax: i
      }));
      return n.value = '',
      void 0 !== e && (n.set(e), n.defaultValue = e),
      n
    },
    H.prototype.inValueSelect = H.prototype.inDropDown = function (t, e, i) {
      var n = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        display: 'dropdown',
        hidePort: !0,
        values: e
      }));
      return void 0 !== i && (n.set(i), n.defaultValue = i),
      n
    },
    H.prototype.inSwitch = function (t, e, i) {
      var n = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_STRING, {
        display: 'switch',
        hidePort: !0,
        type: 'string',
        values: e
      }));
      return void 0 !== i && (n.set(i), n.defaultValue = i),
      n
    },
    H.prototype.inValueInt = H.prototype.inInt = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        increment: 'integer'
      }));
      return void 0 !== e && (i.set(e), i.defaultValue = e),
      i
    },
    H.prototype.inFile = function (t, e, i) {
      var n = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        display: 'file',
        filter: e
      }));
      return void 0 !== i && (n.set(i), n.defaultValue = i),
      n
    },
    H.prototype.inUrl = function (t, e, i) {
      var n = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_STRING, {
        display: 'file',
        filter: e
      }));
      return void 0 !== i && (n.set(i), n.defaultValue = i),
      n
    },
    H.prototype.inTexture = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_OBJECT, {
        display: 'texture',
        preview: !0
      }));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.inObject = function (t, e, i) {
      var n = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_OBJECT, i));
      return void 0 !== e && n.set(e),
      n
    },
    H.prototype.inGradient = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        display: 'gradient',
        hidePort: !0
      }));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.inArray = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_ARRAY));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.inValueSlider = H.prototype.inFloatSlider = function (t, e) {
      var i = this.addInPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        display: 'range'
      }));
      return void 0 !== e && (i.set(e), i.defaultValue = e),
      i
    },
    H.prototype.outFunction = H.prototype.outTrigger = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_FUNCTION));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.outValue = H.prototype.outNumber = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.outValueBool = H.prototype.outBool = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        display: 'bool'
      }));
      return void 0 !== e ? i.set(e)  : i.set(!1),
      i
    },
    H.prototype.outValueString = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_VALUE, {
        type: 'string'
      }));
      return void 0 !== e && i.set(e),
      i
    },
    H.prototype.outString = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_STRING, {
        type: 'string'
      }));
      return void 0 !== e ? i.set(e)  : i.set(''),
      i
    },
    H.prototype.outObject = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_OBJECT));
      return void 0 !== e && i.set(e),
      i.ignoreValueSerialize = !0,
      i
    },
    H.prototype.outArray = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_ARRAY));
      return void 0 !== e && i.set(e),
      i.ignoreValueSerialize = !0,
      i
    },
    H.prototype.outTexture = function (t, e) {
      var i = this.addOutPort(new C(this, t, F.OP.OP_PORT_TYPE_OBJECT, {
        preview: !0
      }));
      return void 0 !== e && i.set(e),
      i.ignoreValueSerialize = !0,
      i
    },
    H.prototype.inDynamic = function (t, e, i, n) {
      var r = new C(this, t, F.OP.OP_PORT_TYPE_DYNAMIC, i);
      return r.shouldLink = function (t, i) {
        if (e && f.isArray(e)) {
          for (var n = 0; n < e.length; n++) {
            if (t == this && i.type === e[n]) return !0;
            if (i == this && t.type === e[n]) return !0
          }
          return !1
        }
        return !0
      },
      this.addInPort(r),
      void 0 !== n && (r.set(n), r.defaultValue = n),
      r
    },
    H.prototype.printInfo = function () {
      for (var t = 0; t < this.portsIn.length; t++) console.log('in: ' + this.portsIn[t].getName());
      for (var e in this.portsOut) console.log('out: ' + this.portsOut[e].getName())
    },
    H.prototype.getOutChilds = function () {
      var t = [
      ];
      for (var e in this.portsOut) for (var i in this.portsOut[e].links) this.portsOut[e].type == F.OP.OP_PORT_TYPE_FUNCTION && t.push(this.portsOut[e].links[i].portIn.parent);
      return t
    },
    H.prototype.markChilds = function () {
      for (var t in this.marked = !0, this.portsOut) for (var e in this.portsOut[t].links) this.portsOut[t].parent.marked = !0,
      this.portsOut[t].links[e].portIn.parent != this && this.portsOut[t].links[e].portIn.parent.markChilds()
    },
    H.prototype.deleteChilds = function () {
      var t = [
      ];
      for (var e in this.portsOut) for (var i in this.portsOut[e].links) this.portsOut[e].links[i].portIn.parent != this && (this.portsOut[e].parent != this && t.push(this.portsOut[e].parent), t.push(this.portsOut[e].links[i].portIn.parent), this.portsOut[e].links[i].portIn.parent.deleteChilds());
      for (var n in t) this.patch.deleteOp(t[n].id)
    },
    H.prototype.removeLinks = function () {
      for (var t = 0; t < this.portsIn.length; t++) this.portsIn[t].removeLinks();
      for (var e = 0; e < this.portsOut.length; e++) this.portsOut[e].removeLinks()
    },
    H.prototype.countFittingPorts = function (t) {
      var e = 0;
      for (var i in this.portsOut) z.canLink(t, this.portsOut[i]) && e++;
      for (var n in this.portsIn) z.canLink(t, this.portsIn[n]) && e++;
      return e
    },
    H.prototype.findFittingPort = function (t) {
      for (var e in this.portsOut) if (z.canLink(t, this.portsOut[e])) return this.portsOut[e];
      for (var i in this.portsIn) if (z.canLink(t, this.portsIn[i])) return this.portsIn[i]
    },
    H.prototype.getSerialized = function () {
      var t = {
      };
      this.opId && (t.opId = this.opId),
      t.objName = this.objName,
      t.id = this.id,
      t.uiAttribs = this.uiAttribs,
      this.uiAttribs.title == this._shortOpName && delete this.uiAttribs.title,
      this.uiAttribs.hasOwnProperty('working') && 1 == this.uiAttribs.working && delete this.uiAttribs.working,
      t.portsIn = [
      ],
      t.portsOut = [
      ];
      for (var e = 0; e < this.portsIn.length; e++) t.portsIn.push(this.portsIn[e].getSerialized());
      for (var i in this.portsOut) t.portsOut.push(this.portsOut[i].getSerialized());
      return t
    },
    H.prototype.getFirstOutPortByType = function (t) {
      for (var e in this.portsOut) if (this.portsOut[e].type == t) return this.portsOut[e]
    },
    H.prototype.getPort = H.prototype.getPortByName = function (t) {
      for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].getName() == t) return this.portsIn[e];
      for (var i = 0; i < this.portsOut.length; i++) if (this.portsOut[i].getName() == t) return this.portsOut[i]
    },
    H.prototype.getPortById = function (t) {
      for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].id == t) return this.portsIn[e];
      for (var i = 0; i < this.portsOut.length; i++) if (this.portsOut[i].id == t) return this.portsOut[i]
    },
    H.prototype.updateAnims = function () {
      for (var t = 0; t < this.portsIn.length; t++) this.portsIn[t].updateAnim()
    },
    H.prototype.log = function () {
      this.patch.silent || Function.prototype.apply.apply(console.log, [
        console,
        arguments
      ])
    },
    H.prototype.error = function () {
      this.patch.silent || Function.prototype.apply.apply(console.error, [
        console,
        arguments
      ])
    },
    H.prototype.warn = function () {
      this.patch.silent || Function.prototype.apply.apply(console.warn, [
        console,
        arguments
      ])
    },
    H.prototype.undoUnLinkTemporary = function () {
      if (this.shakeLink && this.shakeLink.remove(), this.shakeLink = null, this.oldLinks) {
        for (var t = 0; t < this.oldLinks.length; t++) this.patch.link(this.oldLinks[t]. in .parent, this.oldLinks[t]. in .getName(), this.oldLinks[t].out.parent, this.oldLinks[t].out.getName());
        this.oldLinks.length = 0
      }
    },
    H.prototype.unLink = function () {
      for (var t = 0; t < this.portsOut.length; t++) this.portsOut[t].removeLinks();
      for (var e = 0; e < this.portsIn.length; e++) this.portsIn[e].removeLinks()
    },
    H.unLinkTempReLinkP1 = null,
    H.unLinkTempReLinkP2 = null,
    H.prototype.unLinkTemporary = function () {
      var t = 0;
      this.shakeLink = null,
      this.oldLinks = [
      ],
      this.portsIn.length > 0 && this.portsIn[0].isLinked() && this.portsOut.length > 0 && this.portsOut[0].isLinked() && this.portsIn[0].getType() == this.portsOut[0].getType() && (H.unLinkTempReLinkP1 = this.portsIn[0].links[0].getOtherPort(this.portsIn[0]), H.unLinkTempReLinkP2 = this.portsOut[0].links[0].getOtherPort(this.portsOut[0]));
      for (var e = 0; e < this.portsIn.length; e++) for (t = 0; t < this.portsIn[e].links.length; t++) this.oldLinks.push({
        in : this.portsIn[e].links[t].portIn,
        out: this.portsIn[e].links[t].portOut
      });
      for (var i = 0; i < this.portsOut.length; i++) for (t = 0; t < this.portsOut[i].links.length; t++) this.oldLinks.push({
        in : this.portsOut[i].links[t].portIn,
        out: this.portsOut[i].links[t].portOut
      });
      this.unLink(),
      H.unLinkTempReLinkP1 && H.unLinkTempReLinkP2 && (this.shakeLink = this.patch.link(H.unLinkTempReLinkP1.parent, H.unLinkTempReLinkP1.getName(), H.unLinkTempReLinkP2.parent, H.unLinkTempReLinkP2.getName()))
    },
    H.prototype.profile = function (t) {
      for (var e = 0; e < this.portsIn.length; e++) this.portsIn[e]._onTriggered = this.portsIn[e]._onTriggeredProfiling
    },
    H.prototype.findParent = function (t) {
      for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[e].isLinked()) {
        if (this.portsIn[e].links[0].portOut.parent.objName == t) return this.portsIn[e].links[0].portOut.parent;
        var i;
        if (i = this.portsIn[e].links[0].portOut.parent.findParent(t)) return i
      }
      return null
    },
    H.prototype.cleanUp = function () {
      if (this._instances) {
        for (var t = 0; t < this._instances.length; t++) this._instances[t].onDelete && this._instances[t].onDelete();
        this._instances.length = 0
      }
    },
    H.prototype.instanced = function (t) {
      if (0 === this.patch.instancing.numCycles()) return !1;
      var e = 0,
      i = 0;
      if (!this._instances || this._instances.length != this.patch.instancing.numCycles()) {
        for (this._instances || (this._instances = [
        ]), console.log('creating instances of ', this.objName, this.patch.instancing.numCycles(), this._instances.length), this._instances.length = this.patch.instancing.numCycles(), e = 0; e < this._instances.length; e++) {
          this._instances[e] = this.patch.createOp(this.objName, !0),
          this._instances[e].instanced = function () {
            return !1
          },
          this._instances[e].uiAttr(this.uiAttribs);
          for (var n = 0; n < this.portsOut.length; n++) this.portsOut[n].type == F.OP.OP_PORT_TYPE_FUNCTION && (this._instances[e].getPortByName(this.portsOut[n].name).trigger = this.portsOut[n].trigger.bind(this.portsOut[n]))
        }
        for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].onChange = null,
        this.portsIn[i].onValueChanged = null
      }
      for (i = 0; i < this.portsIn.length; i++) this.portsIn[i].type != F.OP.OP_PORT_TYPE_VALUE && this.portsIn[i].type != F.OP.OP_PORT_TYPE_ARRAY || this._instances[this.patch.instancing.index()].portsIn[i].set(this.portsIn[i].get()),
      this.portsIn[i].type,
      F.OP.OP_PORT_TYPE_FUNCTION;
      for (i = 0; i < this.portsOut.length; i++) this.portsOut[i].type == F.OP.OP_PORT_TYPE_VALUE && this.portsOut[i].set(this._instances[this.patch.instancing.index()].portsOut[i].get());
      return !0
    },
    H.prototype.initInstancable = function () {
    },
    H.prototype.setValues = function (t) {
      for (var e in t) {
        var i = this.getPortByName(e);
        i ? i.set(t[e])  : console.log('op.setValues: port not found:', e)
      }
    },
    H.prototype.error = function (t, e) {
      this.errors[t] = e,
      null == e && delete this.errors[t];
      var i = '';
      for (var n in this.errors) i += '- ' + this.errors[n] + '<br/>';
      this.uiAttr({
        error: i
      })
    },
    H.prototype.addListener = H.prototype.addEventListener = function (t, e) {
      this._eventCallbacks[t] ? this._eventCallbacks[t].push(e)  : this._eventCallbacks[t] = [
        e
      ]
    },
    H.prototype.hasEventListener = function (t, e) {
      if (t && e) {
        if (this._eventCallbacks[t]) return - 1 != this._eventCallbacks[t].indexOf(e)
      } else console.log('hasListener: missing parameters')
    },
    H.prototype.removeEventListener = function (t, e) {
      if (this._eventCallbacks[t]) {
        var i = this._eventCallbacks[t].indexOf(e);
        - 1 == i ? console.log('eventlistener ' + t + ' not found...')  : this._eventCallbacks[t].slice(i)
      }
    },
    H.prototype.fireEvent = function (t, e) {
      if (this._eventCallbacks[t]) for (var i = 0; i < this._eventCallbacks[t].length; i++) this._eventCallbacks[t][i] && this._eventCallbacks[t][i](e);
      this.onUiAttrChange && 'onUiAttribsChange' == t && this.onUiAttrChange(e)
    },
    H.prototype.setEnabled = function (t) {
      this.enabled = t,
      this.fireEvent('onEnabledChange', t)
    },
    H.prototype.setPortGroup = function (t, e) {
      for (var i = 0; i < e.length; i++) e[i] && e[i].setUiAttribs ? e[i].setUiAttribs({
        group: t
      })  : console.error('setPortGroup: invalid port!')
    },
    H.prototype.setUiAxisPorts = function (t, e, i) {
      t && t.setUiAttribs({
        axis: 'X'
      }),
      e && e.setUiAttribs({
        axis: 'Y'
      }),
      i && i.setUiAttribs({
        axis: 'Z'
      })
    },
    H.prototype.removePort = function (t) {
      for (var e = 0; e < this.portsIn.length; e++) if (this.portsIn[e] == t) return this.portsIn.splice(e, 1),
      this.fireEvent('onUiAttribsChange', {
      }),
      void this.fireEvent('onPortRemoved', {
      })
    },
    H.prototype.checkLinkTimeWarnings = function () {
      function t(e, i, n) {
        for (var r = 0; r < e.portsIn.length; r++) if (e.portsIn[r].type == i && e.portsIn[r].isLinked()) for (var s = e.portsIn[r], o = 0; o < s.links.length; o++) if (s.links[o]) {
          if (s.links[o].portOut.parent.objName.indexOf(n) > - 1) return !0;
          if (t(s.links[o].portOut.parent, i, n)) return !0
        }
        return !1
      }
      var e,
      i = null,
      n = !0;
      if (n && 0 == this.objName.indexOf('Ops.Gl.TextureEffects') && (e = this).portsIn.length > 0 && e.portsIn[0].type == F.OP.OP_PORT_TYPE_FUNCTION && - 1 == this.objName.indexOf('TextureEffects.ImageCompose') && ((n = t(this, F.OP.OP_PORT_TYPE_FUNCTION, 'TextureEffects.ImageCompose')) || (i = CABLES.UI.TEXTS.working_connected_to + 'ImageCompose')), this._needsParentOp && n && ((n = t(this, F.OP.OP_PORT_TYPE_OBJECT, this._needsParentOp)) || (i = CABLES.UI.TEXTS.working_connected_to + this._needsParentOp)), this._needsLinkedToWork.length > 0) for (var r = 0; r < this._needsLinkedToWork.length; r++) {
        var s = this._needsLinkedToWork[r];
        s ? s.isLinked() || (n = !1, i ? i += ', ' : i = CABLES.UI.TEXTS.working_connected_needs_connections_to, i += s.name.toUpperCase())  : console.warn('[needsLinkedToWork] port not found')
      }
      n ? this.uiAttribs.working || this.setUiAttrib({
        working: !0,
        notWorkingMsg: null
      })  : this.setUiAttrib({
        working: n,
        notWorkingMsg: i
      })
    },
    H.prototype._checkLinksNeededToWork = function () {
    },
    H.prototype.toWorkNeedsParent = function (t) {
      this.patch.isEditorMode() && (this._needsParentOp = t)
    },
    H.prototype.toWorkPortsNeedToBeLinked = function () {
      if (this.patch.isEditorMode()) for (var t = 0; t < arguments.length; t++) - 1 == this._needsLinkedToWork.indexOf(arguments[t]) && this._needsLinkedToWork.push(arguments[t])
    },
    H.prototype.toWorkPortsNeedToBeLinkedReset = function () {
      this.patch.isEditorMode() && (this._needsLinkedToWork.length = 0, this.checkLinkTimeWarnings())
    },
    H.prototype.refreshParams = function () {
      CABLES.UI && gui && gui.patch().refreshOpParams(this)
    }
  }
  H.getNamespaceClassName = function (t) {
    return t ? t.startsWith('Ops.Gl') ? 'gl' : t.startsWith('Ops.WebAudio') ? 'audio' : t.startsWith('Ops.Devices') ? 'devices' : t.startsWith('Ops.Html') ? 'html' : t.startsWith('Ops.Sidebar') ? 'html' : t.startsWith('Ops.Math') ? 'math' : t.startsWith('Ops.User') ? 'user' : 'default' : 'default'
  },
  H.isSubpatchOp = function (t) {
    return 'Ops.Ui.Patch' == t || 'Ops.Ui.SubPatch' == t
  };
  const Y = new function () {
    this.profileUniformCount = 0,
    this.profileShaderBinds = 0,
    this.profileUniformCount = 0,
    this.profileShaderCompiles = 0,
    this.profileVideosPlaying = 0,
    this.profileMVPMatrixCount = 0,
    this.profileEffectBuffercreate = 0
  };
  var W = null,
  j = null,
  X = null,
  K = null;
  const Z = function (t, e) {
    if (!t) throw 'no cgl';
    this._cgl = t,
    this.tex = this._cgl.gl.createTexture(),
    this.id = b(),
    this.width = 0,
    this.height = 0,
    this.flip = !0,
    this.shadowMap = !1,
    this.filter = Z.FILTER_NEAREST,
    this.wrap = Z.WRAP_CLAMP_TO_EDGE,
    this.texTarget = this._cgl.gl.TEXTURE_2D,
    e && e.type && (this.texTarget = e.type),
    this.textureType = Z.TYPE_DEFAULT,
    this.unpackAlpha = !0,
    this._fromData = !0,
    this.name = 'unknown',
    e ? (this.name = e.name || this.name, e.isDepthTexture && (this.textureType = Z.TYPE_DEPTH), e.isFloatingPointTexture && (this.textureType = Z.TYPE_FLOAT), 'textureType' in e && (this.textureType = e.textureType), 'filter' in e && (this.filter = e.filter), 'wrap' in e && (this.wrap = e.wrap), 'unpackAlpha' in e && (this.unpackAlpha = e.unpackAlpha), 'flip' in e && (this.flip = e.flip), 'shadowMap' in e && (this.shadowMap = e.shadowMap))  : e = {
      width: 8,
      height: 8
    },
    this.setSize(e.width, e.height)
  };
  Z.prototype.compareSettings = function (t) {
    return !!t && t.width == this.width && t.height == this.height && t.filter == this.filter && t.wrap == this.wrap && t.textureType == this.textureType && t.unpackAlpha == this.unpackAlpha && t.flip == this.flip
  },
  Z.prototype.clone = function () {
    var t = new Z(this._cgl, {
      name: this.name,
      filter: this.filter,
      wrap: this.wrap,
      textureType: this.textureType,
      unpackAlpha: this.unpackAlpha,
      flip: this.flip,
      width: this.width,
      height: this.height
    });
    return this.compareSettings(t) || (console.error('Cloned texture settings do not compare!'), console.log(this), console.log(t)),
    t
  },
  Z.prototype.setSize = function (t, e) {
    if ((t != t || t <= 0 || !t) && (t = 8), (e != e || e <= 0 || !e) && (e = 8), t = Math.floor(t), e = Math.floor(e), this.width != t || this.height != e) {
      if (this.width = t, this.height = e, this._cgl.gl.bindTexture(this.texTarget, this.tex), Y.profileTextureResize++, this.textureType == Z.TYPE_FLOAT && (this.filter = Z.FILTER_NEAREST), this._setFilter(), this.textureType == Z.TYPE_FLOAT) if (1 == this._cgl.glVersion) if (this._cgl.glUseHalfFloatTex) {
        var i = this._cgl.gl.getExtension('OES_texture_half_float');
        if (1 == this._cgl.glVersion && !i) throw 'no half float texture extension';
        this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, i.HALF_FLOAT_OES, null)
      } else i = this._cgl.gl.getExtension('OES_texture_float'),
      this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
       else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA32F, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.FLOAT, null);
       else if (this.textureType == Z.TYPE_DEPTH) if (1 == this._cgl.glVersion) {
        var n = this._cgl.gl.DEPTH_COMPONENT;
        this._cgl.gl.texImage2D(this.texTarget, 0, n, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.UNSIGNED_SHORT, null)
      } else n = this._cgl.gl.DEPTH_COMPONENT32F,
      this._cgl.gl.texImage2D(this.texTarget, 0, n, t, e, 0, this._cgl.gl.DEPTH_COMPONENT, this._cgl.gl.FLOAT, null);
       else this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, t, e, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, null);
      this.updateMipMap(),
      this._cgl.gl.bindTexture(this.texTarget, null)
    }
  },
  Z.prototype.initFromData = function (t, e, i, n, r) {
    this.filter = n,
    this.wrap = r,
    null == n && (this.filter = Z.FILTER_LINEAR),
    null == r && (this.wrap = Z.CLAMP_TO_EDGE),
    this.width = e,
    this.height = i,
    this._fromData = !0,
    this._cgl.gl.bindTexture(this.texTarget, this.tex),
    this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, e, i, 0, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t),
    this._setFilter(),
    this.updateMipMap(),
    this._cgl.gl.bindTexture(this.texTarget, null)
  },
  Z.prototype.updateMipMap = function () {
    2 != this._cgl.glVersion && !this.isPowerOfTwo() || this.filter != Z.FILTER_MIPMAP || this._cgl.gl.generateMipmap(this.texTarget)
  },
  Z.prototype.initTexture = function (t, e) {
    this._fromData = !1,
    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha),
    t.width && (this.width = t.width),
    t.height && (this.height = t.height),
    e && (this.filter = e),
    this._cgl.gl.bindTexture(this.texTarget, this.tex),
    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_FLIP_Y_WEBGL, !this.flip),
    this._cgl.gl.texImage2D(this.texTarget, 0, this._cgl.gl.RGBA, this._cgl.gl.RGBA, this._cgl.gl.UNSIGNED_BYTE, t),
    this._setFilter(),
    this.updateMipMap(),
    this._cgl.gl.bindTexture(this.texTarget, null),
    this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)
  },
  Z.prototype.delete = function () {
    Y.profileTextureDelete++,
    this._cgl.gl.deleteTexture(this.tex)
  },
  Z.prototype.isPowerOfTwo = function () {
    return Z.isPowerOfTwo(this.width) && Z.isPowerOfTwo(this.height)
  },
  Z.prototype.printInfo = function () {
    console.log(this.getInfo())
  },
  Z.prototype.getInfoReadable = function () {
    var t = this.getInfo(),
    e = '';
    for (var i in t.name = t.name.substr(0, t.name.indexOf('?rnd=')), t) e += '* ' + i + ':  **' + t[i] + '**\n';
    return e
  },
  Z.prototype.getInfo = function () {
    var t = {
    };
    t.name = this.name,
    t['power of two'] = this.isPowerOfTwo(),
    t.size = this.width + ' x ' + this.height;
    var e = this.texTarget;
    return this.texTarget == this._cgl.gl.TEXTURE_2D && (e = 'TEXTURE_2D'),
    t.target = e,
    t.unpackAlpha = this.unpackAlpha,
    this.textureType == Z.TYPE_FLOAT ? t.textureType = 'TYPE_FLOAT' : this.textureType == Z.TYPE_DEPTH ? t.textureType = 'TYPE_DEPTH' : this.textureType == Z.TYPE_DEFAULT ? t.textureType = 'TYPE_DEFAULT' : t.textureType = 'UNKNOWN',
    this.wrap == Z.WRAP_CLAMP_TO_EDGE ? t.wrap = 'CLAMP_TO_EDGE' : this.wrap == Z.WRAP_REPEAT ? t.wrap = 'WRAP_REPEAT' : this.wrap == Z.WRAP_MIRRORED_REPEAT ? t.wrap = 'WRAP_MIRRORED_REPEAT' : t.wrap = 'UNKNOWN',
    this.filter == Z.FILTER_NEAREST ? t.filter = 'FILTER_NEAREST' : this.filter == Z.FILTER_LINEAR ? t.filter = 'FILTER_LINEAR' : this.filter == Z.FILTER_MIPMAP ? t.filter = 'FILTER_MIPMAP' : t.filter = 'UNKNOWN',
    t
  },
  Z.prototype._setFilter = function () {
    if (this._fromData || this._cgl.gl.pixelStorei(this._cgl.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.unpackAlpha), this.shadowMap && (console.log('shadowmap tex'), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_MODE, this._cgl.gl.COMPARE_REF_TO_TEXTURE), this._cgl.gl.texParameteri(this._cgl.gl.TEXTURE_2D, this._cgl.gl.TEXTURE_COMPARE_FUNC, this._cgl.gl.LEQUAL)), 1 != this._cgl.glVersion || this.isPowerOfTwo()) if (this.wrap == Z.WRAP_CLAMP_TO_EDGE ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE))  : this.wrap == Z.WRAP_REPEAT ? (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.REPEAT))  : this.wrap == Z.WRAP_MIRRORED_REPEAT && (this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.MIRRORED_REPEAT), this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.MIRRORED_REPEAT)), this.filter == Z.FILTER_NEAREST) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
    this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST);
     else if (this.filter == Z.FILTER_LINEAR) this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR),
    this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR);
     else {
      if (this.filter != Z.FILTER_MIPMAP) throw console.log('unknown texture filter!', this.filter),
      new Error('unknown texture filter!' + this.filter);
      this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.LINEAR),
      this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.LINEAR_MIPMAP_LINEAR)
    } else this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MAG_FILTER, this._cgl.gl.NEAREST),
    this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_MIN_FILTER, this._cgl.gl.NEAREST),
    this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_S, this._cgl.gl.CLAMP_TO_EDGE),
    this._cgl.gl.texParameteri(this.texTarget, this._cgl.gl.TEXTURE_WRAP_T, this._cgl.gl.CLAMP_TO_EDGE),
    this.filter = Z.FILTER_NEAREST,
    this.wrap = Z.WRAP_CLAMP_TO_EDGE
  },
  Z.load = function (t, e, i, n) {
    var r = t.patch.loading.start('texture', e),
    s = new Z(t);
    return s.name = e,
    CABLES.UI && gui.jobs().start({
      id: 'loadtexture' + r,
      title: 'loading texture (' + e + ')'
    }),
    s.image = new Image,
    s.image.crossOrigin = '',
    n && n.hasOwnProperty('filter') && (s.filter = n.filter),
    n && n.hasOwnProperty('flip') && (s.flip = n.flip),
    n && n.hasOwnProperty('wrap') && (s.wrap = n.wrap),
    n && n.hasOwnProperty('unpackAlpha') && (s.unpackAlpha = n.unpackAlpha),
    s.image.onabort = s.image.onerror = function (e) {
      console.warn('[cgl.texture.load] error loading texture', e),
      t.patch.loading.finished(r),
      i && i({
        error: !0
      }),
      CABLES.UI && gui.jobs().finish('loadtexture' + r)
    },
    s.image.onload = function (e) {
      s.initTexture(s.image),
      t.patch.loading.finished(r),
      CABLES.UI && gui.jobs().finish('loadtexture' + r),
      i && i()
    },
    s.image.src = e,
    s
  },
  Z.getTempTexture = function (t) {
    return W || (W = Z.getTemporaryTexture(t, 256, Z.FILTER_LINEAR, Z.REPEAT)),
    W
  },
  Z.getEmptyTexture = function (t) {
    if (j) return j;
    j = new Z(t);
    var e = new Uint8Array(256);
    return j.initFromData(e, 8, 8, Z.FILTER_NEAREST, Z.WRAP_REPEAT),
    j
  },
  Z.getRandomTexture = function (t) {
    if (X) return X;
    const e = new Uint8Array(262144);
    for (var i = 0; i < 65536; i++) e[4 * i + 0] = 255 * Math.random(),
    e[4 * i + 1] = 255 * Math.random(),
    e[4 * i + 2] = 255 * Math.random(),
    e[4 * i + 3] = 255;
    return (X = new Z(t)).initFromData(e, 256, 256, Z.FILTER_NEAREST, Z.WRAP_REPEAT),
    X
  },
  Z.getTempGradientTexture = function (t) {
    if (K) return K;
    for (var e = new Z(t), i = new Uint8Array(262144), n = 0; n < 256; n++) for (var r = 0; r < 256; r++) i[4 * (r + 256 * n) + 0] = i[4 * (r + 256 * n) + 1] = i[4 * (r + 256 * n) + 2] = 255 - n,
    i[4 * (r + 256 * n) + 3] = 255;
    return e.initFromData(i, 256, 256, Z.FILTER_NEAREST, Z.WRAP_REPEAT),
    K = e,
    e
  },
  Z.getTemporaryTexture = function (t, e, i, n) {
    for (var r = new Z(t), s = [
    ], o = 0; o < e; o++) for (var a = 0; a < e; a++) (a + o) % 64 < 32 ? (s.push(200 + o / e * 25 + a / e * 25), s.push(200 + o / e * 25 + a / e * 25), s.push(200 + o / e * 25 + a / e * 25))  : (s.push(40 + o / e * 25 + a / e * 25), s.push(40 + o / e * 25 + a / e * 25), s.push(40 + o / e * 25 + a / e * 25)),
    s.push(255);
    var l = new Uint8Array(s);
    return r.initFromData(l, e, e, i, n),
    r
  },
  Z.createFromImage = function (t, e, i) {
    var n = new Z(t, i);
    return n.flip = !1,
    n.image = e,
    n.width = e.width,
    n.height = e.height,
    n.initTexture(e, i.filter),
    n
  },
  Z.fromImage = function (t, e, i, n) {
    console.error('deprecated texture from image...');
    var r = new Z(t);
    return r.flip = !1,
    i && (r.filter = i),
    n && (r.wrap = n),
    r.image = e,
    r.initTexture(e),
    r
  },
  Z.isPowerOfTwo = function (t) {
    return 1 == t || 2 == t || 4 == t || 8 == t || 16 == t || 32 == t || 64 == t || 128 == t || 256 == t || 512 == t || 1024 == t || 2048 == t || 4096 == t || 8192 == t || 16384 == t
  },
  Z.FILTER_NEAREST = 0,
  Z.FILTER_LINEAR = 1,
  Z.FILTER_MIPMAP = 2,
  Z.WRAP_REPEAT = 0,
  Z.WRAP_MIRRORED_REPEAT = 1,
  Z.WRAP_CLAMP_TO_EDGE = 2,
  Z.TYPE_DEFAULT = 0,
  Z.TYPE_DEPTH = 1,
  Z.TYPE_FLOAT = 2;
  const q = function (t, e, i, n) {
    this.Framebuffer2DrawTargetsDefault = null,
    this.Framebuffer2BlittingFramebuffer = null,
    this.Framebuffer2FinalFramebuffer = null,
    this._cgl = t,
    this._width = 0,
    this._height = 0,
    this._depthRenderbuffer = null,
    this._frameBuffer = null,
    this._textureFrameBuffer = null,
    this._colorRenderbuffers = [
    ],
    this._drawTargetArray = [
    ],
    this.Framebuffer2BlittingFramebuffer || (this.Framebuffer2BlittingFramebuffer = t.gl.createFramebuffer()),
    this.Framebuffer2FinalFramebuffer || (this.Framebuffer2FinalFramebuffer = t.gl.createFramebuffer()),
    this.Framebuffer2DrawTargetsDefault || (this.Framebuffer2DrawTargetsDefault = [
      t.gl.COLOR_ATTACHMENT0
    ]),
    this._options = n || {
      isFloatingPointTexture: !1
    },
    this._options.hasOwnProperty('numRenderBuffers') || (this._options.numRenderBuffers = 1),
    this._options.hasOwnProperty('depth') || (this._options.depth = !0),
    this._options.hasOwnProperty('clear') || (this._options.clear = !0),
    this._options.hasOwnProperty('multisampling') || (this._options.multisampling = !1, this._options.multisamplingSamples = 0),
    this._options.multisamplingSamples && (this._cgl.gl.MAX_SAMPLES ? this._options.multisamplingSamples = Math.min(this._cgl.gl.getParameter(this._cgl.gl.MAX_SAMPLES), this._options.multisamplingSamples)  : this._options.multisamplingSamples = 0),
    this._options.hasOwnProperty('filter') || (this._options.filter = Z.FILTER_LINEAR),
    this._numRenderBuffers = this._options.numRenderBuffers,
    this._colorTextures = [
    ];
    for (var r = 0; r < this._numRenderBuffers; r++) this._colorTextures[r] = new Z(t, {
      name: 'framebuffer2 texture ' + r,
      isFloatingPointTexture: this._options.isFloatingPointTexture,
      filter: this._options.filter,
      wrap: this._options.wrap
    });
    var s = Z.FILTER_NEAREST;
    this._options.shadowMap && (s = Z.FILTER_LINEAR),
    this._textureDepth = new Z(t, {
      name: 'framebuffer2 depth texture',
      isDepthTexture: !0,
      filter: s,
      shadowMap: this._options.shadowMap || !1
    }),
    this.setSize(e || 512, i || 512)
  };
  q.prototype.getWidth = function () {
    return this._width
  },
  q.prototype.getHeight = function () {
    return this._height
  },
  q.prototype.getGlFrameBuffer = function () {
    return this._frameBuffer
  },
  q.prototype.getDepthRenderBuffer = function () {
    return this._depthRenderbuffer
  },
  q.prototype.getTextureColor = function () {
    return this._colorTextures[0]
  },
  q.prototype.getTextureColorNum = function (t) {
    return this._colorTextures[t]
  },
  q.prototype.getTextureDepth = function () {
    return this._textureDepth
  },
  q.prototype.setFilter = function (t) {
    for (var e = 0; e < this._numRenderBuffers; e++) this._colorTextures[e].filter = t,
    this._colorTextures[e].setSize(this._width, this._height)
  },
  q.prototype.delete = q.prototype.dispose = function () {
    for (var t = 0; t < this._numRenderBuffers; t++) this._colorTextures[t].delete ();
    for (this._textureDepth.delete (), t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[t]);
    this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
    this._cgl.gl.deleteFramebuffer(this._frameBuffer),
    this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
  },
  q.prototype.setSize = function (t, e) {
    if (this._width = Math.floor(t), this._height = Math.floor(e), Y.profileFrameBuffercreate++, this._frameBuffer) {
      for (var i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.deleteRenderbuffer(this._colorRenderbuffers[i]);
      this._cgl.gl.deleteRenderbuffer(this._depthRenderbuffer),
      this._cgl.gl.deleteFramebuffer(this._frameBuffer),
      this._cgl.gl.deleteFramebuffer(this._textureFrameBuffer)
    }
    this._frameBuffer = this._cgl.gl.createFramebuffer(),
    this._textureFrameBuffer = this._cgl.gl.createFramebuffer();
    var n = this._options.depth;
    for (i = 0; i < this._numRenderBuffers; i++) this._colorTextures[i].setSize(this._width, this._height);
    for (i = 0; i < this._numRenderBuffers; i++) {
      var r = this._cgl.gl.createRenderbuffer();
      this._cgl.gl.getExtension('EXT_color_buffer_float'),
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer),
      this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, r),
      this._options.isFloatingPointTexture ? this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA32F, this._width, this._height)  : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA32F, this._width, this._height)  : this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.RGBA8, this._width, this._height)  : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.RGBA8, this._width, this._height),
      this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.RENDERBUFFER, r),
      this._colorRenderbuffers[i] = r
    }
    for (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._textureFrameBuffer), i = 0; i < this._numRenderBuffers; i++) this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0 + i, this._cgl.gl.TEXTURE_2D, this._colorTextures[i].tex, 0);
    for (this._options.depth && this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer), n && (this._textureDepth.setSize(this._width, this._height), this._depthRenderbuffer = this._cgl.gl.createRenderbuffer(), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer), this._options.isFloatingPointTexture, this._options.multisampling ? this._cgl.gl.renderbufferStorageMultisample(this._cgl.gl.RENDERBUFFER, this._options.multisamplingSamples, this._cgl.gl.DEPTH_COMPONENT32F, this._width, this._height)  : this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT32F, this._width, this._height), this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer)), this._drawTargetArray.length = 0, i = 0; i < this._numRenderBuffers; i++) this._drawTargetArray.push(this._cgl.gl.COLOR_ATTACHMENT0 + i);
    if (!this._cgl.gl.isFramebuffer(this._textureFrameBuffer)) throw 'Invalid framebuffer';
    var s = this._cgl.gl.checkFramebufferStatus(this._cgl.gl.FRAMEBUFFER);
    switch (s) {
      case this._cgl.gl.FRAMEBUFFER_COMPLETE:
        break;
      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
        throw console.log('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...'),
        new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
        throw console.log('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'),
        new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
      case this._cgl.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
        throw console.log('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'),
        new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
      case this._cgl.gl.FRAMEBUFFER_UNSUPPORTED:
        throw console.log('FRAMEBUFFER_UNSUPPORTED'),
        new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED');
      default:
        throw console.log('incomplete framebuffer', s),
        new Error('Incomplete framebuffer: ' + s)
    }
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
    this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null)
  },
  q.prototype.renderStart = function () {
    this._cgl.pushModelMatrix(),
    this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuffer),
    this._cgl.pushGlFrameBuffer(this._frameBuffer),
    this._cgl.pushFrameBuffer(this),
    this._cgl.pushPMatrix(),
    this._cgl.gl.viewport(0, 0, this._width, this._height),
    this._cgl.gl.drawBuffers(this._drawTargetArray),
    this._options.clear && (this._cgl.gl.clearColor(0, 0, 0, 0), this._cgl.gl.clear(this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT))
  },
  q.prototype.renderEnd = function () {
    if (this._cgl.popPMatrix(), this._numRenderBuffers <= 1) this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this._frameBuffer),
    this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this._textureFrameBuffer),
    this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [
      0,
      0,
      0,
      1
    ]),
    this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, this._cgl.gl.COLOR_BUFFER_BIT | this._cgl.gl.DEPTH_BUFFER_BIT, this._cgl.gl.NEAREST);
     else {
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
      this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._depthRenderbuffer),
      this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
      this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.TEXTURE_2D, this._textureDepth.tex, 0);
      for (var t = 0; t < this._numRenderBuffers; t++) {
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
        this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.RENDERBUFFER, this._colorRenderbuffers[t]),
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
        this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex, 0),
        this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null),
        this._cgl.gl.bindFramebuffer(this._cgl.gl.READ_FRAMEBUFFER, this.Framebuffer2BlittingFramebuffer),
        this._cgl.gl.bindFramebuffer(this._cgl.gl.DRAW_FRAMEBUFFER, this.Framebuffer2FinalFramebuffer),
        this._cgl.gl.clearBufferfv(this._cgl.gl.COLOR, 0, [
          0,
          0,
          0,
          1
        ]);
        var e = this._cgl.gl.COLOR_BUFFER_BIT;
        0 == t && (e |= this._cgl.gl.DEPTH_BUFFER_BIT),
        this._cgl.gl.blitFramebuffer(0, 0, this._width, this._height, 0, 0, this._width, this._height, e, this._cgl.gl.NEAREST)
      }
    }
    if (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._cgl.popFrameBuffer(), this._cgl.popModelMatrix(), this._cgl.resetViewPort(), this._colorTextures[0].filter == Z.FILTER_MIPMAP) for (t = 0; t < this._numRenderBuffers; t++) this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._colorTextures[t].tex),
    this._colorTextures[t].updateMipMap(),
    this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)
  };
  const J = function (t) {
    this.name = t,
    this.faceVertCount = 3,
    this._vertices = [
    ],
    this.verticesIndices = [
    ],
    this.texCoords = new Float32Array,
    this.texCoordsIndices = [
    ],
    this.vertexNormals = [
    ],
    this.tangents = [
    ],
    this.biTangents = [
    ],
    this.barycentrics = [
    ],
    this.morphTargets = [
    ],
    this.vertexColors = [
    ],
    this._attributes = {
    },
    Object.defineProperty(this, 'vertices', {
      get() {
        return this._vertices
      },
      set(t) {
        this.setVertices(t)
      }
    })
  };
  J.prototype.clear = function () {
    this.vertices = new Float32Array([]),
    this.verticesIndices.length = 0,
    this.texCoords = new Float32Array([]),
    this.texCoordsIndices.length = 0,
    this.vertexNormals = new Float32Array([])
  },
  J.prototype.getAttributes = function () {
    return this._attributes
  },
  J.prototype.getAttribute = function (t) {
    for (var e in this._attributes) if (this._attributes[e].name == t) return this._attributes[e];
    return null
  },
  J.prototype.setAttribute = function (t, e, i) {
    var n = '';
    1 == i ? n = 'float' : 2 == i ? n = 'vec2' : 3 == i ? n = 'vec3' : 4 == i && (n = 'vec4');
    var r = {
      name: t,
      data: e,
      itemSize: i,
      type: n
    };
    this._attributes[t] = r
  },
  J.prototype.setVertices = function (t) {
    t instanceof Float32Array ? this._vertices = t : this._vertices = new Float32Array(t)
  },
  J.prototype.setTexCoords = function (t) {
    t instanceof Float32Array ? this.texCoords = t : this.texCoords = new Float32Array(t)
  },
  J.prototype.calcNormals = function (t) {
    t || this.unIndex(),
    this.calculateNormals({
    })
  },
  J.prototype.setPointVertices = function (t) {
    if (t.length % 3 == 0) {
      t instanceof Float32Array ? this.vertices = t : this.vertices = new Float32Array(t),
      this.texCoords instanceof Float32Array || (this.texCoords = new Float32Array(t.length / 3 * 2)),
      this.verticesIndices.length = t.length / 3;
      for (var e = 0; e < t.length / 3; e++) this.verticesIndices[e] = e,
      this.texCoords[2 * e] = 0,
      this.texCoords[2 * e + 1] = 0
    } else console.error('CGL MESH : SetPointVertices: Array must be multiple of three.')
  },
  J.prototype.merge = function (t) {
    if (t) {
      var e = this.verticesIndices.length,
      i = this.vertices.length / 3;
      this.verticesIndices.length = this.verticesIndices.length + t.verticesIndices.length;
      for (var n = 0; n < t.verticesIndices.length; n++) this.verticesIndices[e + n] = t.verticesIndices[n] + i;
      this.vertices = f.float32Concat(this.vertices, t.vertices),
      this.texCoords = f.float32Concat(this.texCoords, t.texCoords),
      this.vertexNormals = f.float32Concat(this.vertexNormals, t.vertexNormals),
      this.tangents = f.float32Concat(this.vertexNormals, t.tangents),
      this.bitangents = f.float32Concat(this.vertexNormals, t.bitangents)
    }
  },
  J.prototype.copy = function () {
    var t = 0,
    e = new J;
    for (e.faceVertCount = this.faceVertCount, e.setVertices(this._vertices.slice(0)), e.verticesIndices.length = this.verticesIndices.length, t = 0; t < this.verticesIndices.length; t++) e.verticesIndices[t] = this.verticesIndices[t];
    for (e.texCoords = new Float32Array(this.texCoords.length), t = 0; t < this.texCoords.length; t++) e.texCoords[t] = this.texCoords[t];
    for (e.texCoordsIndices.length = this.texCoordsIndices.length, t = 0; t < this.texCoordsIndices.length; t++) e.texCoordsIndices[t] = this.texCoordsIndices[t];
    for (e.vertexNormals = new Float32Array(this.vertexNormals.length), t = 0; t < this.vertexNormals.length; t++) e.vertexNormals[t] = this.vertexNormals[t];
    if (this.tangents) for (e.tangents = [
    ], e.tangents.length = this.tangents.length, t = 0; t < this.tangents.length; t++) e.tangents[t] = this.tangents[t];
    if (this.biTangents) for (e.biTangents = [
    ], e.biTangents.length = this.biTangents.length, t = 0; t < this.biTangents.length; t++) e.biTangents[t] = this.biTangents[t];
    for (e.barycentrics.length = this.barycentrics.length, t = 0; t < this.barycentrics.length; t++) e.barycentrics[t] = this.barycentrics[t];
    for (e.morphTargets.length = this.morphTargets.length, t = 0; t < this.morphTargets.length; t++) e.morphTargets[t] = this.morphTargets[t];
    for (e.vertexColors.length = this.vertexColors.length, t = 0; t < this.vertexColors.length; t++) e.vertexColors[t] = this.vertexColors[t];
    return e
  },
  J.prototype.calculateNormals = function (t) {
    var e = vec3.create(),
    i = vec3.create(),
    n = vec3.create(),
    r = 0;
    function s(r) {
      return vec3.subtract(e, r[0], r[1]),
      vec3.subtract(i, r[0], r[2]),
      vec3.cross(n, e, i),
      vec3.normalize(n, n),
      t && t.forceZUp && n[2] < 0 && (n[0] *= - 1, n[1] *= - 1, n[2] *= - 1),
      n
    }
    for (this.getVertexVec = function (t) {
      var e = [
        0,
        0,
        0
      ];
      return e[0] = this.vertices[3 * t + 0],
      e[1] = this.vertices[3 * t + 1],
      e[2] = this.vertices[3 * t + 2],
      e
    }, this.vertexNormals instanceof Float32Array && this.vertexNormals.length == this.vertices.length || (this.vertexNormals = new Float32Array(this.vertices.length)), r = 0; r < this.vertices.length; r++) this.vertexNormals[r] = 0;
    if (this.isIndexed()) {
      var o = [
      ];
      for (o.length = this.verticesIndices.length / 3, r = 0; r < this.verticesIndices.length; r += 3) u = [
        this.getVertexVec(this.verticesIndices[r + 0]),
        this.getVertexVec(this.verticesIndices[r + 1]),
        this.getVertexVec(this.verticesIndices[r + 2])
      ],
      o[r / 3] = s(u),
      this.vertexNormals[3 * this.verticesIndices[r + 0] + 0] += o[r / 3][0],
      this.vertexNormals[3 * this.verticesIndices[r + 0] + 1] += o[r / 3][1],
      this.vertexNormals[3 * this.verticesIndices[r + 0] + 2] += o[r / 3][2],
      this.vertexNormals[3 * this.verticesIndices[r + 1] + 0] += o[r / 3][0],
      this.vertexNormals[3 * this.verticesIndices[r + 1] + 1] += o[r / 3][1],
      this.vertexNormals[3 * this.verticesIndices[r + 1] + 2] += o[r / 3][2],
      this.vertexNormals[3 * this.verticesIndices[r + 2] + 0] += o[r / 3][0],
      this.vertexNormals[3 * this.verticesIndices[r + 2] + 1] += o[r / 3][1],
      this.vertexNormals[3 * this.verticesIndices[r + 2] + 2] += o[r / 3][2];
      for (r = 0; r < this.verticesIndices.length; r += 3) for (var a = 0; a < 3; a++) {
        var l = [
          this.vertexNormals[3 * this.verticesIndices[r + a] + 0],
          this.vertexNormals[3 * this.verticesIndices[r + a] + 1],
          this.vertexNormals[3 * this.verticesIndices[r + a] + 2]
        ];
        vec3.normalize(l, l),
        this.vertexNormals[3 * this.verticesIndices[r + a] + 0] = l[0],
        this.vertexNormals[3 * this.verticesIndices[r + a] + 1] = l[1],
        this.vertexNormals[3 * this.verticesIndices[r + a] + 2] = l[2]
      }
    } else {
      var h = [
      ];
      for (r = 0; r < this.vertices.length; r += 9) {
        var u;
        n = s(u = [
          [this.vertices[r + 0],
          this.vertices[r + 1],
          this.vertices[r + 2]],
          [
            this.vertices[r + 3],
            this.vertices[r + 4],
            this.vertices[r + 5]
          ],
          [
            this.vertices[r + 6],
            this.vertices[r + 7],
            this.vertices[r + 8]
          ]
        ]),
        h.push(n[0], n[1], n[2], n[0], n[1], n[2], n[0], n[1], n[2])
      }
      this.vertexNormals = h
    }
  },
  J.prototype.calcTangentsBitangents = function () {
    if (!this.vertices.length) throw new Error('Cannot calculate tangents/bitangents without vertices.');
    if (!this.vertexNormals.length) throw new Error('Cannot calculate tangents/bitangents without normals.');
    if (!this.texCoords.length) throw new Error('Cannot calculate tangents/bitangents without texture coordinates.');
    if (!this.verticesIndices.length) throw new Error('Cannot calculate tangents/bitangents without vertex indices.');
    if (this.verticesIndices.length % 3 != 0) throw new Error('Vertex indices mismatch!');
    const t = this.verticesIndices.length / 3,
    e = this.vertices.length / 3;
    this.tangents = new Float32Array(this.vertexNormals.length),
    this.biTangents = new Float32Array(this.vertexNormals.length);
    var i = [
    ];
    i.length = 2 * e;
    const n = vec3.create(),
    r = vec3.create(),
    s = vec3.create(),
    o = vec2.create(),
    a = vec2.create(),
    l = vec2.create(),
    h = vec3.create(),
    u = vec3.create();
    for (var c = 0; c < t; c += 1) {
      const t = this.verticesIndices[3 * c],
      d = this.verticesIndices[3 * c + 1],
      p = this.verticesIndices[3 * c + 2];
      vec3.set(n, this.vertices[3 * t], this.vertices[3 * t + 1], this.vertices[3 * t + 2]),
      vec3.set(r, this.vertices[3 * d], this.vertices[3 * d + 1], this.vertices[3 * d + 2]),
      vec3.set(s, this.vertices[3 * p], this.vertices[3 * p + 1], this.vertices[3 * p + 2]),
      vec2.set(o, this.texCoords[2 * t], this.texCoords[2 * t + 1]),
      vec2.set(a, this.texCoords[2 * d], this.texCoords[2 * d + 1]),
      vec2.set(l, this.texCoords[2 * p], this.texCoords[2 * p + 1]);
      const g = r[0] - n[0],
      f = s[0] - n[0],
      _ = r[1] - n[1],
      m = s[1] - n[1],
      b = r[2] - n[2],
      v = s[2] - n[2],
      I = a[0] - o[0],
      E = l[0] - o[0],
      M = a[1] - o[1],
      A = l[1] - o[1],
      x = 1 / (I * A - E * M);
      vec3.set(h, (A * g - M * f) * x, (A * _ - M * m) * x, (A * b - M * v) * x),
      vec3.set(u, (I * f - E * g) * x, (I * m - E * _) * x, (I * v - E * b) * x),
      i[t] = h,
      i[d] = h,
      i[p] = h,
      i[t + e] = u,
      i[d + e] = u,
      i[p + e] = u
    }
    const d = vec3.create(),
    p = vec3.create(),
    g = vec3.create(),
    f = vec3.create(),
    _ = vec3.create(),
    m = vec3.create(),
    b = vec3.create(),
    v = vec3.create();
    for (var I = 0; I < e; I += 1) {
      vec3.set(d, this.vertexNormals[3 * I], this.vertexNormals[3 * I + 1], this.vertexNormals[3 * I + 2]),
      vec3.set(p, i[I][0], i[I][1], i[I][2]);
      const t = vec3.dot(d, p);
      vec3.scale(_, d, t),
      vec3.subtract(m, p, _),
      vec3.normalize(v, m),
      vec3.cross(b, d, p);
      const n = vec3.dot(b, i[I + e]) < 0 ? - 1 : 1;
      vec3.scale(g, v, 1 / n),
      vec3.cross(f, d, g),
      this.tangents[3 * I + 0] = g[0],
      this.tangents[3 * I + 1] = g[1],
      this.tangents[3 * I + 2] = g[2],
      this.biTangents[3 * I + 0] = f[0],
      this.biTangents[3 * I + 1] = f[1],
      this.biTangents[3 * I + 2] = f[2]
    }
  },
  J.prototype.isIndexed = function () {
    return 0 != this.verticesIndices.length
  },
  J.prototype.unIndex = function (t) {
    var e = [
    ],
    i = [
    ],
    n = [
    ],
    r = [
    ],
    s = 0,
    o = 0;
    for (this.vertexNormals = [
    ], o = 0; o < this.verticesIndices.length; o += 3) e.push(this.vertices[3 * this.verticesIndices[o + 0] + 0]),
    e.push(this.vertices[3 * this.verticesIndices[o + 0] + 1]),
    e.push(this.vertices[3 * this.verticesIndices[o + 0] + 2]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 0]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 1]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 0] + 2]),
    this.texCoords ? (n.push(this.texCoords[2 * this.verticesIndices[o + 0] + 0]), n.push(this.texCoords[2 * this.verticesIndices[o + 0] + 1]))  : (n.push(0), n.push(0)),
    i.push(s),
    s++,
    e.push(this.vertices[3 * this.verticesIndices[o + 1] + 0]),
    e.push(this.vertices[3 * this.verticesIndices[o + 1] + 1]),
    e.push(this.vertices[3 * this.verticesIndices[o + 1] + 2]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 0]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 1]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 1] + 2]),
    this.texCoords ? (n.push(this.texCoords[2 * this.verticesIndices[o + 1] + 0]), n.push(this.texCoords[2 * this.verticesIndices[o + 1] + 1]))  : (n.push(0), n.push(0)),
    i.push(s),
    s++,
    e.push(this.vertices[3 * this.verticesIndices[o + 2] + 0]),
    e.push(this.vertices[3 * this.verticesIndices[o + 2] + 1]),
    e.push(this.vertices[3 * this.verticesIndices[o + 2] + 2]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 0]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 1]),
    r.push(this.vertexNormals[3 * this.verticesIndices[o + 2] + 2]),
    this.texCoords ? (n.push(this.texCoords[2 * this.verticesIndices[o + 2] + 0]), n.push(this.texCoords[2 * this.verticesIndices[o + 2] + 1]))  : (n.push(0), n.push(0)),
    i.push(s),
    s++;
    this.vertices = e,
    this.texCoords = n,
    this.vertexNormals = r,
    this.verticesIndices.length = 0,
    t && (this.verticesIndices = i),
    this.calculateNormals()
  },
  J.prototype.calcBarycentric = function () {
    this.barycentrics.length = this.vertices.length;
    var t = 0;
    for (t = 0; t < this.vertices.length; t++) this.barycentrics[t] = 0;
    var e = 0;
    for (t = 0; t < this.vertices.length; t += 3) this.barycentrics[t + e] = 1,
    3 == ++e && (e = 0)
  },
  J.prototype.getBounds = function () {
    var t = 0,
    e = {
      maxX: - Number.MAX_VALUE,
      maxY: - Number.MAX_VALUE,
      maxZ: - Number.MAX_VALUE,
      minX: Number.MAX_VALUE,
      minY: Number.MAX_VALUE,
      minZ: Number.MAX_VALUE
    };
    for (t = 0; t < this.vertices.length; t += 3) this.vertices[t + 0] == this.vertices[t + 0] && (e.maxX = Math.max(e.maxX, this.vertices[t + 0]), e.maxY = Math.max(e.maxY, this.vertices[t + 1]), e.maxZ = Math.max(e.maxZ, this.vertices[t + 2]), e.minX = Math.min(e.minX, this.vertices[t + 0]), e.minY = Math.min(e.minY, this.vertices[t + 1]), e.minZ = Math.min(e.minZ, this.vertices[t + 2]));
    return e.x = Math.abs(e.maxX) + Math.abs(e.minX),
    e.y = Math.abs(e.maxY) + Math.abs(e.minY),
    e.z = Math.abs(e.maxZ) + Math.abs(e.minZ),
    e.maxAxis = Math.max(e.z, Math.max(e.x, e.y)),
    e
  },
  J.prototype.center = function (t, e, i) {
    void 0 === t && (t = !0, e = !0, i = !0);
    var n = 0;
    const r = this.getBounds(),
    s = [
      r.minX + (r.maxX - r.minX) / 2,
      r.minY + (r.maxY - r.minY) / 2,
      r.minZ + (r.maxZ - r.minZ) / 2
    ];
    for (n = 0; n < this.vertices.length; n += 3) this.vertices[n + 0] == this.vertices[n + 0] && (t && (this.vertices[n + 0] -= s[0]), e && (this.vertices[n + 1] -= s[1]), i && (this.vertices[n + 2] -= s[2]));
    return s
  },
  J.prototype.mapTexCoords2d = function () {
    var t = this.getBounds(),
    e = this.vertices.length / 3;
    this.texCoords = new Float32Array(length = 2 * e);
    for (var i = 0; i < e; i++) {
      var n = this.vertices[3 * i + 0],
      r = this.vertices[3 * i + 1];
      this.texCoords[2 * i + 0] = n / (t.maxX - t.minX) + 0.5,
      this.texCoords[2 * i + 1] = 1 - r / (t.maxY - t.minY) + 0.5
    }
  },
  J.buildFromFaces = function (t) {
    for (var e = [
    ], i = [
    ], n = 0; n < t.length; n += 3) {
      for (var r = t[n + 0], s = t[n + 1], o = t[n + 2], a = [
        - 1,
        - 1,
        - 1
      ], l = 0; l < e; l += 3) e[l + 0] == r[0] && e[l + 1] == r[1] && e[l + 2] == r[2] && (a[0] = l / 3),
      e[l + 0] == s[0] && e[l + 1] == s[1] && e[l + 2] == s[2] && (a[1] = l / 3),
      e[l + 0] == o[0] && e[l + 1] == o[1] && e[l + 2] == o[2] && (a[2] = l / 3);
      - 1 == a[0] && (e.push(r[0], r[1], r[2]), a[0] = (e.length - 1) / 3),
      - 1 == a[1] && (e.push(s[0], s[1], s[2]), a[1] = (e.length - 1) / 3),
      - 1 == a[2] && (e.push(o[0], o[1], o[2]), a[2] = (e.length - 1) / 3),
      i.push(parseInt(a[0], 10)),
      i.push(parseInt(a[1], 10)),
      i.push(parseInt(a[2], 10))
    }
    var h = new J;
    return h.vertices = e,
    h.verticesIndices = i,
    h
  },
  J.json2geom = function (t) {
    var e = new J;
    if (e.verticesIndices = [
    ], e.vertices = t.vertices || [
    ], e.vertexNormals = t.normals || [
    ], e.vertexColors = t.colors || [
    ], e.tangents = t.tangents || [
    ], e.biTangents = t.bitangents || [
    ], t.texturecoords && e.setTexCoords(t.texturecoords[0]), t.vertices_b64 && (e.vertices = new Float32Array(p(t.vertices_b64))), t.normals_b64 && (e.vertexNormals = new Float32Array(p(t.normals_b64))), t.tangents_b64 && (e.tangents = new Float32Array(p(t.tangents_b64))), t.bitangents_b64 && (e.biTangents = new Float32Array(p(t.bitangents_b64))), t.texturecoords_b64 && e.setTexCoords(new Float32Array(p(t.texturecoords_b64[0]))), t.faces_b64) e.verticesIndices = new Uint32Array(p(t.faces_b64));
     else {
      e.verticesIndices.length = 3 * t.faces.length;
      for (var i = 0; i < t.faces.length; i++) e.verticesIndices[3 * i] = t.faces[i][0],
      e.verticesIndices[3 * i + 1] = t.faces[i][1],
      e.verticesIndices[3 * i + 2] = t.faces[i][2]
    }
    return e
  };
  const Q = function (t, e, i, n) {
    if (this._loc = - 1, this._type = e, this._name = i, this._shader = t, this._value = 0.00001, this._oldValue = null, this._port = null, this._shader.addUniform(this), this.needsUpdate = !0, 'f' == e) this.set = this.setValue = this.setValueF.bind(this),
    this.updateValue = this.updateValueF.bind(this);
     else if ('f[]' == e) this.set = this.setValue = this.setValueArrayF.bind(this),
    this.updateValue = this.updateValueArrayF.bind(this);
     else if ('3f[]' == e) this.set = this.setValue = this.setValueArray3F.bind(this),
    this.updateValue = this.updateValueArray3F.bind(this);
     else if ('i' == e) this.set = this.setValue = this.setValueI.bind(this),
    this.updateValue = this.updateValueI.bind(this);
     else if ('b' == e) this.set = this.setValue = this.setValueBool.bind(this),
    this.updateValue = this.updateValueBool.bind(this);
     else if ('4f' == e) this.set = this.setValue = this.setValue4F.bind(this),
    this.updateValue = this.updateValue4F.bind(this);
     else if ('3f' == e) this.set = this.setValue = this.setValue3F.bind(this),
    this.updateValue = this.updateValue3F.bind(this);
     else if ('2f' == e) this.set = this.setValue = this.setValue2F.bind(this),
    this.updateValue = this.updateValue2F.bind(this);
     else if ('t' == e) this.set = this.setValue = this.setValueT.bind(this),
    this.updateValue = this.updateValueT.bind(this);
     else {
      if ('m4' != e) throw new Error('Unknown uniform type');
      this.set = this.setValue = this.setValueM4.bind(this),
      this.updateValue = this.updateValueM4.bind(this)
    }
    'object' == typeof n && n instanceof C ? (this._port = n, this._value = this._port.get(), this._port.onValueChanged = this.updateFromPort.bind(this))  : this._value = n,
    this.setValue(this._value),
    this.needsUpdate = !0
  };
  Q.prototype.getType = function () {
    return this._type
  },
  Q.prototype.getName = function () {
    return this._name
  },
  Q.prototype.getValue = function () {
    return this._value
  },
  Q.prototype.resetLoc = function () {
    this._loc = - 1,
    this.needsUpdate = !0
  },
  Q.prototype.bindTextures = function () {
    return this._value
  },
  Q.prototype.resetLoc = function () {
    this._loc = - 1,
    this.needsUpdate = !0
  },
  Q.prototype.bindTextures = function () {
  },
  Q.prototype.getLoc = function () {
    return this._loc
  },
  Q.prototype.updateFromPort = function () {
    this.setValue(this._port.get())
  },
  Q.prototype.updateValueF = function () {
    - 1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)  : this.needsUpdate = !1,
    this._shader.getCgl().gl.uniform1f(this._loc, this._value),
    Y.profileUniformCount++
  },
  Q.prototype.setValueF = function (t) {
    t != this._value && (this.needsUpdate = !0, this._value = t)
  },
  Q.prototype.updateValueI = function () {
    - 1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)  : this.needsUpdate = !1,
    this._shader.getCgl().gl.uniform1i(this._loc, this._value),
    Y.UniformCount++
  },
  Q.prototype.setValueI = function (t) {
    t != this._value && (this.needsUpdate = !0, this._value = t)
  },
  Q.prototype.updateValueBool = function () {
    - 1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)  : this.needsUpdate = !1,
    this._shader.getCgl().gl.uniform1i(this._loc, this._value ? 1 : 0),
    Y.UniformCount++
  },
  Q.prototype.setValueBool = function (t) {
    t != this._value && (this.needsUpdate = !0, this._value = t)
  },
  Q.prototype.setValueArray3F = function (t) {
    this.needsUpdate = !0,
    this._value = t
  },
  Q.prototype.updateValueArray3F = function () {
    - 1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)  : this.needsUpdate = !1,
    this._value && (this._shader.getCgl().gl.uniform3fv(this._loc, this._value), Y.UniformCount++)
  },
  Q.prototype.setValueArrayF = function (t) {
    this.needsUpdate = !0,
    this._value = t
  },
  Q.prototype.updateValueArrayF = function () {
    - 1 == this._loc ? this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name)  : this.needsUpdate = !1,
    this._value && (this._shader.getCgl().gl.uniform1fv(this._loc, this._value), Y.UniformCount++)
  },
  Q.prototype.updateValue3F = function () {
    this._value && ( - 1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Y.ShaderGetUniform++, Y.ShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform3f(this._loc, this._value[0], this._value[1], this._value[2]), this.needsUpdate = !1, Y.UniformCount++)
  },
  Q.prototype.setValue3F = function (t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] && t[2] == this._oldValue[2] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this._oldValue[2] = t[2], this.needsUpdate = !0)  : (this._oldValue = [
      t[0] - 1,
      1,
      2
    ], this.needsUpdate = !0), this._value = t)
  },
  Q.prototype.updateValue2F = function () {
    this._value && ( - 1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Y.ShaderGetUniform++, Y.ShaderGetUniformName = this._name), this._shader.getCgl().gl.uniform2f(this._loc, this._value[0], this._value[1]), this.needsUpdate = !1, Y.UniformCount++)
  },
  Q.prototype.setValue2F = function (t) {
    t && (this._oldValue ? t[0] == this._oldValue[0] && t[1] == this._oldValue[1] || (this._oldValue[0] = t[0], this._oldValue[1] = t[1], this.needsUpdate = !0)  : (this._oldValue = [
      t[0] - 1,
      1
    ], this.needsUpdate = !0), this._value = t)
  },
  Q.prototype.updateValueT = function () {
    - 1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Y.ShaderGetUniform++, Y.ShaderGetUniformName = this._name, - 1 == this._loc && console.log('texture this._loc unknown!!')),
    Y.UniformCount++,
    this._shader.getCgl().gl.uniform1i(this._loc, this._value),
    this.needsUpdate = !1
  },
  Q.prototype.setValueT = function (t) {
    this.needsUpdate = !0,
    this._value = t
  },
  Q.prototype.updateValue4F = function () {
    - 1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Y.ShaderGetUniform++, Y.ShaderGetUniformName = this._name),
    this._shader.getCgl().gl.uniform4f(this._loc, this._value[0], this._value[1], this._value[2], this._value[3]),
    Y.UniformCount++
  },
  Q.prototype.setValue4F = function (t) {
    this.needsUpdate = !0,
    this._value = t
  },
  Q.prototype.updateValueM4 = function () {
    - 1 == this._loc && (this._loc = this._shader.getCgl().gl.getUniformLocation(this._shader.getProgram(), this._name), Y.ShaderGetUniform++, Y.ShaderGetUniformName = this._name),
    this._shader.getCgl().gl.uniformMatrix4fv(this._loc, !1, this._value),
    Y.UniformCount++
  },
  Q.prototype.setValueM4 = function (t) {
    this.needsUpdate = !0,
    this._value = t
  };
  const $ = {
    MATH: {
      DEG2RAD: Math.PI / 180,
      RAD2DEG: 180 / Math.PI
    },
    SHADER: {
      SHADERVAR_VERTEX_POSITION: 'vPosition',
      SHADERVAR_VERTEX_NUMBER: 'attrVertIndex',
      SHADERVAR_VERTEX_TEXCOORD: 'attrTexCoord',
      SHADERVAR_INSTANCE_MMATRIX: 'instMat',
      SHADERVAR_UNI_PROJMAT: 'projMatrix',
      SHADERVAR_UNI_VIEWMAT: 'viewMatrix',
      SHADERVAR_UNI_MODELMAT: 'modelMatrix',
      SHADERVAR_UNI_NORMALMAT: 'normalMatrix',
      SHADERVAR_UNI_INVVIEWMAT: 'inverseViewMatrix',
      SHADERVAR_UNI_VIEWPOS: 'camPos'
    },
    BLEND_MODES: {
      BLEND_NONE: 0,
      BLEND_NORMAL: 1,
      BLEND_ADD: 2,
      BLEND_SUB: 3,
      BLEND_MUL: 4
    }
  },
  tt = {
    lastMesh: null
  },
  et = function (t, e, i) {
    this._cgl = t,
    this._bufVertexAttrib = null,
    this._bufVerticesIndizes = this._cgl.gl.createBuffer(),
    this._attributes = [
    ],
    this._attribLocs = {
    },
    this._geom = null,
    this._lastShader = null,
    this._numInstances = 0,
    this._glPrimitive = i,
    this._preWireframeGeom = null,
    this.addVertexNumbers = !1,
    this.feedBackAttributes = [
    ],
    this.setGeom(e),
    this._feedBacks = [
    ],
    this._feedBacksChanged = !1,
    this._transformFeedBackLoc = - 1,
    this._lastAttrUpdate = 0,
    Object.defineProperty(this, 'numInstances', {
      get() {
        return this._numInstances
      },
      set(t) {
        this.setNumInstances(t)
      }
    })
  };
  et.prototype.updateVertices = function (t) {
    this.setAttribute($.SHADER.SHADERVAR_VERTEX_POSITION, t.vertices, 3)
  },
  et.prototype.setAttributePointer = function (t, e, i, n) {
    for (var r = 0; r < this._attributes.length; r++) this._attributes[r].name == t && (this._attributes[r].pointer || (this._attributes[r].pointer = [
    ]), this._attributes[r].pointer.push({
      loc: - 1,
      name: e,
      stride: i,
      offset: n,
      instanced: t == $.SHADER.SHADERVAR_INSTANCE_MMATRIX
    }))
  },
  et.prototype.getAttribute = function (t) {
    for (var e = 0; e < this._attributes.length; e++) if (this._attributes[e].name == t) return this._attributes[e]
  },
  et.prototype.addAttribute = et.prototype.updateAttribute = et.prototype.setAttribute = function (t, e, i, n) {
    var r = null,
    s = null,
    o = !1,
    a = 0,
    l = e.length / i;
    for (0 === l && console.warn('CGL_MESH: num items in attribute ' + t + ' is ZERO'), 'function' == typeof n && (s = n), 'object' == typeof n && (n.cb && (s = n.cb), n.instanced && (o = n.instanced)), t == $.SHADER.SHADERVAR_INSTANCE_MMATRIX && (o = !0), e instanceof Float32Array ? r = e : (r = new Float32Array(e), Y.profileNonTypedAttrib++, Y.profileNonTypedAttribNames = this._geom.name + ' ' + t), a = 0; a < this._attributes.length; a++) if (this._attributes[a].name == t) return this._attributes[a].numItems = l,
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, this._attributes[a].buffer),
    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, r, this._cgl.gl.DYNAMIC_DRAW),
    this._attributes[a];
    var h = this._cgl.gl.createBuffer();
    this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, h),
    this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, r, this._cgl.gl.DYNAMIC_DRAW);
    var u = this._cgl.gl.FLOAT;
    n && n.type && (u = n.type);
    var c = {
      buffer: h,
      name: t,
      cb: s,
      itemSize: i,
      numItems: l,
      startItem: 0,
      instanced: o,
      type: u
    };
    return t == $.SHADER.SHADERVAR_VERTEX_POSITION && (this._bufVertexAttrib = c),
    this._attributes.push(c),
    this._attribLocs = {
    },
    c
  },
  et.prototype.getAttributes = function () {
    return this._attributes
  },
  et.prototype.updateTexCoords = function (t) {
    if (t.texCoords && t.texCoords.length > 0) this.setAttribute($.SHADER.SHADERVAR_VERTEX_TEXCOORD, t.texCoords, 2);
     else {
      var e = new Float32Array(Math.round(t.vertices.length / 3 * 2));
      this.setAttribute($.SHADER.SHADERVAR_VERTEX_TEXCOORD, e, 2)
    }
  },
  et.prototype._setVertexNumbers = function () {
    var t = this._geom.vertices.length / 3;
    if (!this._verticesNumbers || this._verticesNumbers.length != t) {
      this._verticesNumbers = new Float32Array(t);
      for (var e = 0; e < t; e++) this._verticesNumbers[e] = e;
      this.setAttribute($.SHADER.SHADERVAR_VERTEX_NUMBER, this._verticesNumbers, 1, (e, i, n) =>{
        n.uniformNumVertices || (n.uniformNumVertices = new Q(n, 'f', 'numVertices', t)),
        n.uniformNumVertices.setValue(t)
      })
    }
  },
  et.prototype.setVertexIndices = function (t) {
    if (t.length > 0) {
      for (var e = 0; e < t.length; e++) if (t[e] >= this._geom.vertices.length / 3) return void console.warn('invalid index in ' + this._geom.name);
      this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes),
      t instanceof Uint16Array ? this.vertIndicesTyped = t : this.vertIndicesTyped = new Uint16Array(t),
      this._cgl.gl.bufferData(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this.vertIndicesTyped, this._cgl.gl.DYNAMIC_DRAW),
      this._bufVerticesIndizes.itemSize = 1,
      this._bufVerticesIndizes.numItems = t.length
    } else this._bufVerticesIndizes.numItems = 0
  },
  et.prototype.setGeom = function (t) {
    this._geom = t,
    tt.lastMesh = null,
    Y.profileMeshSetGeom++,
    this._disposeAttributes(),
    this.updateVertices(this._geom),
    this.setVertexIndices(this._geom.verticesIndices),
    this._geom.vertexNormals.length > 0 && this.setAttribute('attrVertNormal', this._geom.vertexNormals, 3),
    this.updateTexCoords(this._geom),
    this._geom.hasOwnProperty('tangents') && this._geom.tangents && this._geom.tangents.length > 0 && this.setAttribute('attrTangent', this._geom.tangents, 3),
    this._geom.hasOwnProperty('biTangents') && this._geom.biTangents && this._geom.biTangents.length > 0 && this.setAttribute('attrBiTangent', this._geom.biTangents, 3),
    this._geom.vertexColors.length > 0 && this.setAttribute('attrVertColor', this._geom.vertexColors, 4),
    this.addVertexNumbers && this._setVertexNumbers();
    var e = this._geom.getAttributes();
    for (var i in e) this.setAttribute(i, e[i].data, e[i].itemSize)
  },
  et.prototype._preBind = function (t) {
    for (var e = 0; e < this._attributes.length; e++) this._attributes[e].cb && this._attributes[e].cb(this._attributes[e], this._geom, t)
  },
  et.prototype._bind = function (t) {
    t != this._lastShader && this.unBind();
    var e = [
    ];
    this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e,
    this._lastShader = t;
    var i = 0;
    if (t.lastCompile > this._lastAttrUpdate || e.length != this._attributes.length) for (this._lastAttrUpdate = t.lastCompile, i = 0; i < this._attributes.length; i++) e[i] = - 1;
    for (i = 0; i < this._attributes.length; i++) {
      var n = this._attributes[i];
      if ( - 1 == e[i] && n._attrLocationLastShaderTime != t.lastCompile && (n._attrLocationLastShaderTime = t.lastCompile, e[i] = this._cgl.glGetAttribLocation(t.getProgram(), n.name), Y.profileAttrLoc++), - 1 != e[i]) if (this._cgl.gl.enableVertexAttribArray(e[i]), this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, n.buffer), n.instanced) if (n.itemSize <= 4) n.itemSize && 0 != n.itemSize || console.log('instanced attrib itemsize error', this._geom.name, n),
      this._cgl.gl.vertexAttribPointer(e[i], n.itemSize, n.type, !1, 4 * n.itemSize, 0),
      this._cgl.gl.vertexAttribDivisor(e[i], 1);
       else if (16 == n.itemSize) {
        const t = 64;
        this._cgl.gl.vertexAttribPointer(e[i], 4, n.type, !1, t, 0),
        this._cgl.gl.enableVertexAttribArray(e[i] + 1),
        this._cgl.gl.vertexAttribPointer(e[i] + 1, 4, n.type, !1, t, 16),
        this._cgl.gl.enableVertexAttribArray(e[i] + 2),
        this._cgl.gl.vertexAttribPointer(e[i] + 2, 4, n.type, !1, t, 32),
        this._cgl.gl.enableVertexAttribArray(e[i] + 3),
        this._cgl.gl.vertexAttribPointer(e[i] + 3, 4, n.type, !1, t, 48),
        this._cgl.gl.vertexAttribDivisor(e[i], 1),
        this._cgl.gl.vertexAttribDivisor(e[i] + 1, 1),
        this._cgl.gl.vertexAttribDivisor(e[i] + 2, 1),
        this._cgl.gl.vertexAttribDivisor(e[i] + 3, 1)
      } else console.log('unknown instance attrib size', n.name);
       else {
        if (n.itemSize && 0 != n.itemSize || console.log('attrib itemsize error', this._geom.name, n), this._cgl.gl.vertexAttribPointer(e[i], n.itemSize, n.type, !1, 4 * n.itemSize, 0), n.pointer) for (var r = 0; r < n.pointer.length; r++) {
          var s = n.pointer[r];
          - 1 == s.loc && (s.loc = this._cgl.glGetAttribLocation(t.getProgram(), s.name)),
          Y.profileAttrLoc++,
          this._cgl.gl.enableVertexAttribArray(s.loc),
          this._cgl.gl.vertexAttribPointer(s.loc, n.itemSize, n.type, !1, s.stride, s.offset)
        }
        this.bindFeedback(n)
      }
    }
    0 !== this._bufVerticesIndizes.numItems && this._cgl.gl.bindBuffer(this._cgl.gl.ELEMENT_ARRAY_BUFFER, this._bufVerticesIndizes)
  },
  et.prototype.unBind = function () {
    var t = this._lastShader;
    if (this._lastShader = null, t) {
      var e = [
      ];
      this._attribLocs[t.id] ? e = this._attribLocs[t.id] : this._attribLocs[t.id] = e,
      tt.lastMesh = null;
      for (var i = 0; i < this._attributes.length; i++) this._attributes[i].instanced && (this._attributes[i].itemSize <= 4 ? ( - 1 != e[i] && this._cgl.gl.vertexAttribDivisor(e[i], 0), e[i] >= 0 && this._cgl.gl.disableVertexAttribArray(e[i]))  : (this._cgl.gl.vertexAttribDivisor(e[i], 0), this._cgl.gl.vertexAttribDivisor(e[i] + 1, 0), this._cgl.gl.vertexAttribDivisor(e[i] + 2, 0), this._cgl.gl.vertexAttribDivisor(e[i] + 3, 0), this._cgl.gl.disableVertexAttribArray(e[i] + 1), this._cgl.gl.disableVertexAttribArray(e[i] + 2), this._cgl.gl.disableVertexAttribArray(e[i] + 3))),
      - 1 != e[i] && this._cgl.gl.disableVertexAttribArray(e[i])
    }
  },
  et.prototype.meshChanged = function () {
    return this._cgl.lastMesh && this._cgl.lastMesh != this
  },
  et.prototype.printDebug = function (t) {
    for (console.log('--attributes'), i = 0; i < this._attributes.length; i++) console.log('attribute ' + i + ' ' + this._attributes[i].name)
  },
  et.prototype.setNumVertices = function (t) {
    this._bufVertexAttrib.numItems = t
  },
  et.prototype.render = function (t) {
    if (t) {
      t.wireframe || this._geom.isIndexed() || !this._preWireframeGeom || this.setGeom(this._preWireframeGeom),
      t.wireframe && this._geom.isIndexed() && (this._preWireframeGeom = this._geom, this._geom = this._geom.copy(), this._geom.unIndex(), this._geom.calcBarycentric(), this.setGeom(this._geom), this.setAttribute('attrBarycentric', this._geom.barycentrics, 3));
      var e = !1;
      tt.lastMesh != this && (tt.lastMesh && tt.lastMesh.unBind(), e = !0),
      e && this._preBind(t),
      t.bind(),
      t.bindTextures && t.bindTextures(),
      this._bind(t),
      this.addVertexNumbers && this._setVertexNumbers(),
      tt.lastMesh = this;
      var i = this._cgl.gl.TRIANGLES;
      void 0 !== this._glPrimitive && (i = this._glPrimitive),
      null !== t.glPrimitive && (i = t.glPrimitive),
      this.hasFeedbacks() ? this.drawFeedbacks(t, i)  : 0 === this._bufVerticesIndizes.numItems ? 0 === this._numInstances ? this._cgl.gl.drawArrays(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems - this._bufVertexAttrib.startItem)  : this._cgl.gl.drawArraysInstanced(i, this._bufVertexAttrib.startItem, this._bufVertexAttrib.numItems, this._numInstances)  : 0 === this._numInstances ? this._cgl.gl.drawElements(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0)  : this._cgl.gl.drawElementsInstanced(i, this._bufVerticesIndizes.numItems, this._cgl.gl.UNSIGNED_SHORT, 0, this._numInstances)
    }
  },
  et.prototype.setNumInstances = function (t) {
    if (this._numInstances = t, t > 0) {
      for (var e = new Float32Array(t), i = 0; i < t; i++) e[i] = i;
      this.setAttribute('instanceIndex', e, 1, {
        instanced: !0
      })
    }
  },
  et.prototype._disposeAttributes = function () {
    if (this._attributes) {
      for (var t = 0; t < this._attributes.length; t++) this._attributes[t].buffer && (this._cgl.gl.deleteBuffer(this._attributes[t].buffer), this._attributes[t].buffer = null);
      this._attributes.length = 0
    }
  },
  et.prototype.dispose = function () {
    this._bufVertexAttrib && this._bufVertexAttrib.buffer && this._cgl.gl.deleteBuffer(this._bufVertexAttrib.buffer),
    this._bufVerticesIndizes && this._cgl.gl.deleteBuffer(this._bufVerticesIndizes),
    this._disposeAttributes()
  },
  function (t) {
    t.prototype.hasFeedbacks = function () {
      return this._feedBacks.length > 0
    },
    t.prototype.removeFeedbacks = function (t) {
      this._feedbacks && (this._feedbacks.length = 0, this._feedBacksChanged = !0)
    },
    t.prototype.setAttributeFeedback = function () {
    },
    t.prototype.setFeedback = function (t, e, i) {
      var n = {
        nameOut: e
      },
      r = !1;
      this.unBindFeedbacks();
      for (var s = 0; s < this._feedBacks.length; s++) this._feedBacks[s].nameOut == e && (n = this._feedBacks[s], r = !0);
      return r || (this._feedBacksChanged = !0),
      n.initialArr = i,
      n.attrib = t,
      n.outBuffer && this._cgl.gl.deleteBuffer(n.outBuffer),
      n.outBuffer = this._cgl.gl.createBuffer(),
      this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, n.outBuffer),
      this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, n.initialArr, this._cgl.gl.STATIC_DRAW),
      this._cgl.gl.bindBuffer(this._cgl.gl.ARRAY_BUFFER, n.attrib.buffer),
      this._cgl.gl.bufferData(this._cgl.gl.ARRAY_BUFFER, n.initialArr, this._cgl.gl.STATIC_DRAW),
      r || this._feedBacks.push(n),
      n
    },
    t.prototype.bindFeedback = function (t) {
      if (this._feedBacks && 0 !== this._feedBacks.length) {
        - 1 == this._transformFeedBackLoc && (this._transformFeedBackLoc = this._cgl.gl.createTransformFeedback()),
        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc);
        for (var e = 0; e < this._feedBacks.length; e++) {
          var i = this._feedBacks[e];
          i.attrib == t && this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, e, i.outBuffer)
        }
      }
    },
    t.prototype.drawFeedbacks = function (t, e) {
      var i = 0;
      if (this._feedBacksChanged) {
        var n = [
        ];
        for (this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, this._transformFeedBackLoc), i = 0; i < this._feedBacks.length; i++) n.push(this._feedBacks[i].nameOut);
        return t.setFeedbackNames(n),
        console.log('feedbacknames', n),
        t.compile(),
        this._feedBacksChanged = !1,
        this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null),
        void console.log('changed finished')
      }
      this._cgl.gl.beginTransformFeedback(this.glPrimitive),
      this._cgl.gl.drawArrays(e, 0, this._feedBacks[0].attrib.numItems),
      this._cgl.gl.endTransformFeedback(),
      this.unBindFeedbacks(),
      this.feedBacksSwapBuffers()
    },
    t.prototype.unBindFeedbacks = function () {
      for (i = 0; i < this._feedBacks.length; i++) this._cgl.gl.bindBufferBase(this._cgl.gl.TRANSFORM_FEEDBACK_BUFFER, i, null);
      this._cgl.gl.bindTransformFeedback(this._cgl.gl.TRANSFORM_FEEDBACK, null)
    },
    t.prototype.feedBacksSwapBuffers = function () {
      for (var t = 0; t < this._feedBacks.length; t++) {
        var e = this._feedBacks[t].attrib.buffer;
        this._feedBacks[t].attrib.buffer = this._feedBacks[t].outBuffer,
        this._feedBacks[t].outBuffer = e
      }
    }
  }(et);
  const it = {
    getSimpleRect: function (t, e) {
      var i = new J(e);
      return i.vertices = [
        1,
        1,
        0,
        - 1,
        1,
        0,
        1,
        - 1,
        0,
        - 1,
        - 1,
        0
      ],
      i.texCoords = [
        1,
        1,
        0,
        1,
        1,
        0,
        0,
        0
      ],
      i.verticesIndices = [
        0,
        1,
        2,
        2,
        1,
        3
      ],
      new et(t, i)
    }
  },
  nt = function (t, e) {
    this._cgl = t,
    t.TextureEffectMesh || this.createMesh(),
    this._textureSource = null,
    this._textureTarget = null,
    this._frameBuf = this._cgl.gl.createFramebuffer(),
    this._frameBuf2 = this._cgl.gl.createFramebuffer(),
    this._renderbuffer = this._cgl.gl.createRenderbuffer(),
    this._renderbuffer2 = this._cgl.gl.createRenderbuffer(),
    this.switched = !1,
    this.depth = !1
  };
  nt.prototype.setSourceTexture = function (t) {
    t.textureType == Z.TYPE_FLOAT && this._cgl.gl.getExtension('EXT_color_buffer_float'),
    null === t ? (this._textureSource = new Z(this._cgl), this._textureSource.setSize(16, 16))  : this._textureSource = t,
    this._textureSource.compareSettings(this._textureTarget) || (this._textureTarget && this._textureTarget.delete (), this._textureTarget = this._textureSource.clone(), Y.profileEffectBuffercreate++, this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureTarget.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this.depth && this._cgl.gl.renderbufferStorage(this._cgl.gl.RENDERBUFFER, this._cgl.gl.DEPTH_COMPONENT16, this._textureSource.width, this._textureSource.height), this._cgl.gl.framebufferTexture2D(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.COLOR_ATTACHMENT0, this._cgl.gl.TEXTURE_2D, this._textureSource.tex, 0), this.depth && this._cgl.gl.framebufferRenderbuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.gl.DEPTH_ATTACHMENT, this._cgl.gl.RENDERBUFFER, this._renderbuffer2), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null), this._cgl.gl.bindRenderbuffer(this._cgl.gl.RENDERBUFFER, null), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, null))
  },
  nt.prototype.startEffect = function () {
    this._textureTarget ? (this.switched = !1, this._cgl.pushDepthTest(!1), this._cgl.pushModelMatrix(), this._cgl.pushPMatrix(), this._cgl.gl.viewport(0, 0, this.getCurrentTargetTexture().width, this.getCurrentTargetTexture().height), mat4.perspective(this._cgl.pMatrix, 45, this.getCurrentTargetTexture().width / this.getCurrentTargetTexture().height, 0.1, 1100), this._cgl.pushPMatrix(), mat4.identity(this._cgl.pMatrix), this._cgl.pushViewMatrix(), mat4.identity(this._cgl.vMatrix), this._cgl.pushModelMatrix(), mat4.identity(this._cgl.mvMatrix))  : console.log('effect has no target')
  },
  nt.prototype.endEffect = function () {
    this._cgl.popDepthTest(!1),
    this._cgl.popModelMatrix(),
    this._cgl.popPMatrix(),
    this._cgl.popModelMatrix(),
    this._cgl.popViewMatrix(),
    this._cgl.popPMatrix(),
    this._cgl.resetViewPort()
  },
  nt.prototype.bind = function () {
    null !== this._textureSource ? this.switched ? (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf2), this._cgl.pushGlFrameBuffer(this._frameBuf2))  : (this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._frameBuf), this._cgl.pushGlFrameBuffer(this._frameBuf))  : console.log('no base texture set!')
  },
  nt.prototype.finish = function () {
    null !== this._textureSource ? (this._cgl.TextureEffectMesh.render(this._cgl.getShader()), this._cgl.gl.bindFramebuffer(this._cgl.gl.FRAMEBUFFER, this._cgl.popGlFrameBuffer()), this._textureTarget.filter == Z.FILTER_MIPMAP && (this.switched ? (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureSource.tex), this._textureSource.updateMipMap())  : (this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, this._textureTarget.tex), this._textureTarget.updateMipMap()), this._cgl.gl.bindTexture(this._cgl.gl.TEXTURE_2D, null)), this.switched = !this.switched)  : console.log('no base texture set!')
  },
  nt.prototype.getCurrentTargetTexture = function () {
    return this.switched ? this._textureSource : this._textureTarget
  },
  nt.prototype.getCurrentSourceTexture = function () {
    return this.switched ? this._textureTarget : this._textureSource
  },
  nt.prototype.delete = function () {
    this._textureTarget && this._textureTarget.delete (),
    this._textureSource && this._textureSource.delete (),
    this._cgl.gl.deleteRenderbuffer(this._renderbuffer),
    this._cgl.gl.deleteFramebuffer(this._frameBuf)
  },
  nt.prototype.createMesh = function () {
    this._cgl.TextureEffectMesh = it.getSimpleRect(this._cgl, 'textureEffect rect')
  },
  nt.checkOpNotInTextureEffect = function (t) {
    return t.uiAttribs.error && !t.patch.cgl.currentTextureEffect ? (t.uiAttr({
      error: null
    }), !0)  : !t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect && !t.uiAttribs.error ? (t.uiAttr({
      error: 'This op can not be a child of a ImageCompose/texture effect! imagecompose should only have textureeffect childs.'
    }), !1)  : !t.patch.cgl.currentTextureEffect)
  },
  nt.checkOpInEffect = function (t) {
    return t.patch.cgl.currentTextureEffect && t.uiAttribs.error ? (t.uiAttr({
      error: null
    }), !0)  : !!t.patch.cgl.currentTextureEffect || (t.patch.cgl.currentTextureEffect || t.uiAttribs.error ? !!t.patch.cgl.currentTextureEffect : (t.uiAttr({
      error: 'This op must be a child of a texture effect! More infos <a href="https://docs.cables.gl/image_composition/image_composition.html" target="_blank">here</a>.'
    }), !1))
  },
  nt.getBlendCode = function () {
    return ''.endl() + 'vec3 _blend(vec3 base,vec3 blend)'.endl() + '{'.endl() + '   vec3 colNew=blend;'.endl() + '   #ifdef BM_MULTIPLY'.endl() + '       colNew=base*blend;'.endl() + '   #endif'.endl() + '   #ifdef BM_MULTIPLY_INV'.endl() + '       colNew=base* vec3(1.0)-blend;'.endl() + '   #endif'.endl() + '   #ifdef BM_AVERAGE'.endl() + '       colNew=((base + blend) / 2.0);'.endl() + '   #endif'.endl() + '   #ifdef BM_ADD'.endl() + '       colNew=min(base + blend, vec3(1.0));'.endl() + '   #endif'.endl() + '   #ifdef BM_SUBSTRACT'.endl() + '       colNew=max(base + blend - vec3(1.0), vec3(0.0));'.endl() + '   #endif'.endl() + '   #ifdef BM_DIFFERENCE'.endl() + '       colNew=abs(base - blend);'.endl() + '   #endif'.endl() + '   #ifdef BM_NEGATION'.endl() + '       colNew=(vec3(1.0) - abs(vec3(1.0) - base - blend));'.endl() + '   #endif'.endl() + '   #ifdef BM_EXCLUSION'.endl() + '       colNew=(base + blend - 2.0 * base * blend);'.endl() + '   #endif'.endl() + '   #ifdef BM_LIGHTEN'.endl() + '       colNew=max(blend, base);'.endl() + '   #endif'.endl() + '   #ifdef BM_DARKEN'.endl() + '       colNew=min(blend, base);'.endl() + '   #endif'.endl() + '   #ifdef BM_OVERLAY'.endl() + '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_SCREEN'.endl() + '      #define BlendScreenf(base, blend)       (1.0 - ((1.0 - base) * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendScreenf(base.r, blend.r),BlendScreenf(base.g, blend.g),BlendScreenf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_SOFTLIGHT'.endl() + '      #define BlendSoftLightf(base, blend)    ((blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendSoftLightf(base.r, blend.r),BlendSoftLightf(base.g, blend.g),BlendSoftLightf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_HARDLIGHT'.endl() + '      #define BlendOverlayf(base, blend)  (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)))'.endl() + '      colNew=vec3(BlendOverlayf(base.r, blend.r),BlendOverlayf(base.g, blend.g),BlendOverlayf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_COLORDODGE'.endl() + '      #define BlendColorDodgef(base, blend)   ((blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0))'.endl() + '      colNew=vec3(BlendColorDodgef(base.r, blend.r),BlendColorDodgef(base.g, blend.g),BlendColorDodgef(base.b, blend.b));'.endl() + '   #endif'.endl() + '   #ifdef BM_COLORBURN'.endl() + '      #define BlendColorBurnf(base, blend)    ((blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0))'.endl() + '      colNew=vec3(BlendColorBurnf(base.r, blend.r),BlendColorBurnf(base.g, blend.g),BlendColorBurnf(base.b, blend.b));'.endl() + '   #endif'.endl() + '   return colNew;'.endl() + '}'.endl() + 'vec4 cgl_blend(vec4 oldColor,vec4 newColor,float amount)'.endl() + '{'.endl() + '   vec4 col=vec4( _blend(oldColor.rgb,newColor.rgb) ,1.0);'.endl() + '   col=vec4( mix( col.rgb, oldColor.rgb ,1.0-oldColor.a*amount),1.0);'.endl() + '   return col;'.endl() + '}'
  },
  nt.onChangeBlendSelect = function (t, e) {
    'normal' == e ? t.define('BM_NORMAL')  : t.removeDefine('BM_NORMAL'),
    'multiply' == e ? t.define('BM_MULTIPLY')  : t.removeDefine('BM_MULTIPLY'),
    'multiply invert' == e ? t.define('BM_MULTIPLY_INV')  : t.removeDefine('BM_MULTIPLY_INV'),
    'average' == e ? t.define('BM_AVERAGE')  : t.removeDefine('BM_AVERAGE'),
    'add' == e ? t.define('BM_ADD')  : t.removeDefine('BM_ADD'),
    'substract' == e ? t.define('BM_SUBSTRACT')  : t.removeDefine('BM_SUBSTRACT'),
    'difference' == e ? t.define('BM_DIFFERENCE')  : t.removeDefine('BM_DIFFERENCE'),
    'negation' == e ? t.define('BM_NEGATION')  : t.removeDefine('BM_NEGATION'),
    'exclusion' == e ? t.define('BM_EXCLUSION')  : t.removeDefine('BM_EXCLUSION'),
    'lighten' == e ? t.define('BM_LIGHTEN')  : t.removeDefine('BM_LIGHTEN'),
    'darken' == e ? t.define('BM_DARKEN')  : t.removeDefine('BM_DARKEN'),
    'overlay' == e ? t.define('BM_OVERLAY')  : t.removeDefine('BM_OVERLAY'),
    'screen' == e ? t.define('BM_SCREEN')  : t.removeDefine('BM_SCREEN'),
    'softlight' == e ? t.define('BM_SOFTLIGHT')  : t.removeDefine('BM_SOFTLIGHT'),
    'hardlight' == e ? t.define('BM_HARDLIGHT')  : t.removeDefine('BM_HARDLIGHT'),
    'color dodge' == e ? t.define('BM_COLORDODGE')  : t.removeDefine('BM_COLORDODGE'),
    'color burn' == e ? t.define('BM_COLORBURN')  : t.removeDefine('BM_COLORBURN')
  },
  nt.AddBlendSelect = function (t, e) {
    return t.inValueSelect(e, [
      'normal',
      'lighten',
      'darken',
      'multiply',
      'multiply invert',
      'average',
      'add',
      'substract',
      'difference',
      'negation',
      'exclusion',
      'overlay',
      'screen',
      'color dodge',
      'color burn',
      'softlight',
      'hardlight'
    ], 'normal')
  },
  nt.setupBlending = function (t, e, i, n) {
    t.setPortGroup('Blending', [
      i,
      n
    ]),
    i.onChange = function () {
      nt.onChangeBlendSelect(e, i.get());
      var n = i.get();
      'normal' == n ? n = null : 'multiply' == n ? n = 'mul' : 'multiply invert' == n ? n = 'mulinv' : 'lighten' == n ? n = 'light' : 'darken' == n ? n = 'darken' : 'average' == n ? n = 'avg' : 'substract' == n ? n = 'sub' : 'difference' == n ? n = 'diff' : 'negation' == n ? n = 'neg' : 'negation' == n ? n = 'neg' : 'negation' == n ? n = 'neg' : 'exclusion' == n ? n = 'exc' : 'overlay' == n ? n = 'ovl' : 'color dodge' == n ? n = 'dodge' : 'color burn' == n ? n = 'burn' : 'softlight' == n ? n = 'soft' : 'hardlight' == n && (n = 'hard'),
      t.setUiAttrib({
        extendTitle: n
      })
    }
  };
  const rt = {
    'CGL.BLENDMODES': function () {
      this.name = 'blendmodes',
      this.srcHeadFrag = nt.getBlendCode()
    },
    'CGL.RANDOM_OLD': function () {
      this.name = 'randomNumber',
      this.srcHeadFrag = ''.endl() + 'float cgl_random(vec2 co)'.endl() + '{'.endl() + '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 432758.5453);'.endl() + '}'.endl() + 'vec3 cgl_random3(vec2 co)'.endl() + '{'.endl() + '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() + '}'
    },
    'CGL.RANDOM_LOW': function () {
      this.name = 'randomNumber',
      this.srcHeadFrag = ''.endl() + 'float cgl_random(vec2 co)'.endl() + '{'.endl() + '    return fract(sin(dot(co.xy ,vec2(12.9898,4.1414))) * 358.5453);'.endl() + '}'.endl() + 'vec3 cgl_random3(vec2 co)'.endl() + '{'.endl() + '    return vec3( cgl_random(co),cgl_random(co+0.5711),cgl_random(co+1.5711));'.endl() + '}'
    },
    'CGL.RANDOM_TEX': function () {
      this.name = 'randomNumbertex',
      this.srcHeadFrag = ''.endl() + 'UNI sampler2D CGLRNDTEX;'.endl() + 'float cgl_random(vec2 co)'.endl() + '{'.endl() + '    return texture(CGLRNDTEX,co*5711.0).r;'.endl() + '}'.endl() + 'vec3 cgl_random3(vec2 co)'.endl() + '{'.endl() + '    return texture(CGLRNDTEX,co*5711.0).rgb;'.endl() + '}',
      this.initUniforms = function (t) {
        return [new Q(t, 't', 'CGLRNDTEX', 7)]
      },
      this.onBind = function (t, e) {
        Z.getRandomTexture(t),
        t.setTexture(7, Z.getRandomTexture(t).tex)
      }
    }
  },
  st = function () {
    return window.performance.now()
  },
  ot = function () {
    return st()
  },
  at = function () {
    this._timeStart = st(),
    this._timeOffset = 0,
    this._currentTime = 0,
    this._lastTime = 0,
    this._paused = !0,
    this._delay = 0,
    this._eventsPaused = !1,
    this.overwriteTime = - 1,
    this.cbPlayPause = [
    ],
    this.cbTimeChange = [
    ]
  };
  at.prototype._getTime = function () {
    return this._lastTime = (st() - this._timeStart) / 1000,
    this._lastTime + this._timeOffset
  },
  at.prototype._eventPlayPause = function () {
    if (!this._eventsPaused) for (var t in this.cbPlayPause) this.cbPlayPause[t]()
  },
  at.prototype._eventTimeChange = function () {
    if (!this._eventsPaused) for (var t in this.cbTimeChange) this.cbTimeChange[t]()
  },
  at.prototype.setDelay = function (t) {
    this._delay = t,
    this._eventTimeChange()
  },
  at.prototype.isPlaying = function () {
    return !this._paused
  },
  at.prototype.update = function () {
    if (!this._paused) return this._currentTime = this._getTime(),
    this._currentTime
  },
  at.prototype.getMillis = function () {
    return 1000 * this.get()
  },
  at.prototype.get = at.prototype.getTime = function () {
    return this.overwriteTime >= 0 ? this.overwriteTime - this._delay : this._currentTime - this._delay
  },
  at.prototype.togglePlay = function () {
    this._paused ? this.play()  : this.pause()
  },
  at.prototype.setTime = function (t) {
    t < 0 && (t = 0),
    this._timeStart = st(),
    this._timeOffset = t,
    this._currentTime = t,
    this._eventTimeChange()
  },
  at.prototype.setOffset = function (t) {
    this._currentTime + t < 0 ? (this._timeStart = st(), this._timeOffset = 0, this._currentTime = 0)  : (this._timeOffset += t, this._currentTime = this._lastTime + this._timeOffset),
    this._eventTimeChange()
  },
  at.prototype.play = function () {
    this._timeStart = st(),
    this._paused = !1,
    this._eventPlayPause()
  },
  at.prototype.pause = function () {
    this._timeOffset = this._currentTime,
    this._paused = !0,
    this._eventPlayPause()
  },
  at.prototype.pauseEvents = function (t) {
    this._eventsPaused = t
  },
  at.prototype.onPlayPause = function (t) {
    t && 'function' == typeof t && this.cbPlayPause.push(t)
  },
  at.prototype.onTimeChange = function (t) {
    t && 'function' == typeof t && this.cbTimeChange.push(t)
  };
  const lt = function (t, e) {
    if (!t) throw 'shader constructed without cgl';
    this._cgl = t,
    this._name = e || 'unknown',
    this.glslVersion = 0,
    t.glVersion > 1 && (this.glslVersion = 300),
    this.id = E(),
    this._program = null,
    this._uniforms = [
    ],
    this._drawBuffers = [
      !0
    ],
    this._defines = [
    ],
    this._needsRecompile = !0,
    this._projMatrixUniform = null,
    this._mvMatrixUniform = null,
    this._mMatrixUniform = null,
    this._vMatrixUniform = null,
    this._camPosUniform = null,
    this._normalMatrixUniform = null,
    this._inverseViewMatrixUniform = null,
    this._attrVertexPos = - 1,
    this.precision = t.patch.config.glslPrecision || 'highp',
    this._pMatrixState = - 1,
    this._vMatrixState = - 1,
    this._modGroupCount = 0,
    this._feedBackNames = [
    ],
    this._attributes = [
    ],
    this.glPrimitive = null,
    this.offScreenPass = !1,
    this._extensions = [
    ],
    this.srcVert = this.getDefaultVertexShader(),
    this.srcFrag = this.getDefaultFragmentShader(),
    this.lastCompile = 0,
    this._moduleNames = [
    ],
    this._modules = [
    ],
    this._moduleNumId = 0,
    this._libs = [
    ],
    this._tempNormalMatrix = mat4.create(),
    this._tempCamPosMatrix = mat4.create(),
    this._tempInverseViewMatrix = mat4.create(),
    this.setModules(['MODULE_VERTEX_POSITION',
    'MODULE_COLOR',
    'MODULE_BEGIN_FRAG'])
  };
  lt.prototype.getCgl = function () {
    return this._cgl
  },
  lt.prototype.getName = function () {
    return this._name
  },
  lt.prototype.enableExtension = function (t) {
    this.setWhyCompile('enable extension ' + t),
    this._needsRecompile = !0,
    this._extensions.push(t)
  },
  lt.prototype.getAttrVertexPos = function () {
    return this._attrVertexPos
  },
  lt.prototype.hasTextureUniforms = function () {
    for (var t = 0; t < this._uniforms.length; t++) if ('t' == this._uniforms[t].getType()) return !0;
    return !1
  },
  lt.prototype.setWhyCompile = function (t) {
  },
  lt.prototype.setSource = function (t, e) {
    this.srcVert = t,
    this.srcFrag = e,
    this.setWhyCompile('Source changed'),
    this._needsRecompile = !0
  },
  lt.prototype._addLibs = function (t) {
    for (var e in rt) if (t.indexOf(e) > - 1) {
      var i = new rt[e];
      t = t.replace('{{' + e + '}}', i.srcHeadFrag),
      this._libs.push(i),
      i.initUniforms && i.initUniforms(this)
    }
    return t
  },
  lt.prototype.compile = function () {
    Y.profileShaderCompiles++,
    Y.profileShaderCompileName = this._name;
    var t = '';
    if (this._extensions) for (i = 0; i < this._extensions.length; i++) t += '#extension ' + this._extensions[i] + ' : enable'.endl();
    var e = '',
    i = 0;
    for (i = 0; i < this._defines.length; i++) e += '#define ' + this._defines[i][0] + ' ' + this._defines[i][1] + ''.endl();
    if (this._uniforms) for (i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
    this.hasTextureUniforms() && (e += '#define HAS_TEXTURES'.endl());
    var n = '',
    r = '';
    if (300 == this.glslVersion) {
      var s = '',
      o = 0;
      if (this.srcFrag.indexOf('outColor0') > - 1 && (this._drawBuffers[0] = !0), this.srcFrag.indexOf('outColor1') > - 1 && (this._drawBuffers[1] = !0), this.srcFrag.indexOf('outColor2') > - 1 && (this._drawBuffers[2] = !0), this.srcFrag.indexOf('outColor3') > - 1 && (this._drawBuffers[3] = !0), 1 == this._drawBuffers.length) s = 'out vec4 outColor;'.endl(),
      s += '#define gl_FragColor outColor'.endl();
       else for (o = 0, s += 'vec4 outColor;'.endl(), i = 0; i < this._drawBuffers.length; i++) 0 == o && (s += '#define gl_FragColor outColor' + i + ''.endl()),
      s += 'layout(location = ' + i + ') out vec4 outColor' + i + ';'.endl(),
      o++;
      n = '#version 300 es'.endl() + '// '.endl() + '// vertex shader ' + this._name.endl() + '// '.endl() + 'precision ' + this.precision + ' float;'.endl() + ''.endl() + '#define WEBGL2'.endl() + '#define texture2D texture'.endl() + '#define UNI uniform'.endl() + '#define IN in'.endl() + '#define OUT out'.endl(),
      r = '#version 300 es'.endl() + '// '.endl() + '// fragment shader ' + this._name.endl() + '// '.endl() + 'precision ' + this.precision + ' float;'.endl() + ''.endl() + '#define WEBGL2'.endl() + '#define texture2D texture'.endl() + '#define IN in'.endl() + '#define UNI uniform'.endl() + s.endl()
    } else r = ''.endl() + '// '.endl() + '// fragment shader ' + this._name.endl() + '// '.endl() + '#define WEBGL1'.endl() + '#define texture texture2D'.endl() + '#define outColor gl_FragColor'.endl() + '#define IN varying'.endl() + '#define UNI uniform'.endl(),
    n = ''.endl() + '// '.endl() + '// vertex shader ' + this._name.endl() + '// '.endl() + '#define WEBGL1'.endl() + '#define texture texture2D'.endl() + '#define OUT varying'.endl() + '#define IN attribute'.endl() + '#define UNI uniform'.endl();
    - 1 == r.indexOf('precision') && (r = 'precision ' + this.precision + ' float;'.endl() + r),
    - 1 == n.indexOf('precision') && (n = 'precision ' + this.precision + ' float;'.endl() + n),
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (r += '#define MOBILE'.endl(), n += '#define MOBILE'.endl()),
    n = t + n + e + this.srcVert,
    r = t + r + e + this.srcFrag;
    var a = '',
    l = '';
    this._modules.sort(function (t, e) {
      return t.group - e.group
    }),
    this._modules.sort(function (t, e) {
      return t.priority || 0 - e.priority || 0
    });
    var h = !1;
    for (i = 0; i < this._moduleNames.length; i++) {
      for (var u = '', c = '', d = 0; d < this._modules.length; d++) if (this._modules[d].name == this._moduleNames[i]) {
        if (a += '\n//---- MOD: ' + this._modules[d].group + ': ' + d + ' - ' + this._modules[d].title + ' ------\n', l += '\n//---- MOD: ' + this._modules[d].group + ': ' + d + ' - ' + this._modules[d].title + ' ------\n', u += '\n\n//---- MOD: ' + this._modules[d].title + ' ------\n', c += '\n\n//---- MOD: ' + this._modules[d].title + ' ------\n', !h) {
          h = !0;
          for (var p = 0; p < this._attributes.length; p++) this._attributes[p].name && this._attributes[p].type && (a += ''.endl() + '#ifndef ATTRIB_' + this._attributes[p].name.endl() + '  #define ATTRIB_' + this._attributes[p].name.endl() + '  IN ' + this._attributes[p].type + ' ' + this._attributes[p].name + ';'.endl() + '#endif', this._attributes[p].nameFrag && (a += ''.endl() + '#ifndef ATTRIB_' + this._attributes[p].nameFrag.endl() + '  #define ATTRIB_' + this._attributes[p].nameFrag.endl() + '  OUT ' + this._attributes[p].type + ' ' + this._attributes[p].nameFrag + ';'.endl() + '#endif', u += ''.endl() + this._attributes[p].nameFrag + '=' + this._attributes[p].name + ';'), l += ''.endl() + '#ifndef ATTRIB_' + this._attributes[p].nameFrag.endl() + '  #define ATTRIB_' + this._attributes[p].nameFrag.endl() + '  IN ' + this._attributes[p].type + ' ' + this._attributes[p].nameFrag + ';'.endl() + '#endif')
        }
        a += this._modules[d].srcHeadVert || '',
        l += this._modules[d].srcHeadFrag || '',
        u += this._modules[d].srcBodyVert || '',
        c += this._modules[d].srcBodyFrag || '',
        a += '\n//---- end mod ------\n',
        l += '\n//---- end mod ------\n',
        c += '\n//---- end mod ------\n',
        u = (u += '\n//---- end mod ------\n').replace(/{{mod}}/g, this._modules[d].prefix),
        c = c.replace(/{{mod}}/g, this._modules[d].prefix),
        a = a.replace(/{{mod}}/g, this._modules[d].prefix),
        l = l.replace(/{{mod}}/g, this._modules[d].prefix),
        u = u.replace(/MOD_/g, this._modules[d].prefix),
        c = c.replace(/MOD_/g, this._modules[d].prefix),
        a = a.replace(/MOD_/g, this._modules[d].prefix),
        l = l.replace(/MOD_/g, this._modules[d].prefix)
      }
      n = n.replace('{{' + this._moduleNames[i] + '}}', u),
      r = r.replace('{{' + this._moduleNames[i] + '}}', c)
    }
    if (n = n.replace('{{MODULES_HEAD}}', a), r = r.replace('{{MODULES_HEAD}}', l), n = this._addLibs(n), r = this._addLibs(r), this._program) for (this._program = this._createProgram(n, r), this._projMatrixUniform = null, i = 0; i < this._uniforms.length; i++) this._uniforms[i].resetLoc();
     else this._program = this._createProgram(n, r);
    this.finalShaderFrag = r,
    this.finalShaderVert = n,
    tt.lastMesh = null,
    tt.lastShader = null,
    this._needsRecompile = !1,
    this.lastCompile = ot()
  },
  lt.prototype.bind = function () {
    var t = 0;
    if (tt.lastShader = this, this._program && !this._needsRecompile || this.compile(), !this._projMatrixUniform) for (this._attrVertexPos = this._cgl.glGetAttribLocation(this._program, $.SHADER.SHADERVAR_VERTEX_POSITION), this._projMatrixUniform = this._cgl.gl.getUniformLocation(this._program, $.SHADER.SHADERVAR_UNI_PROJMAT), this._mvMatrixUniform = this._cgl.gl.getUniformLocation(this._program, 'mvMatrix'), this._vMatrixUniform = this._cgl.gl.getUniformLocation(this._program, $.SHADER.SHADERVAR_UNI_VIEWMAT), this._mMatrixUniform = this._cgl.gl.getUniformLocation(this._program, $.SHADER.SHADERVAR_UNI_MODELMAT), this._camPosUniform = this._cgl.gl.getUniformLocation(this._program, $.SHADER.SHADERVAR_UNI_VIEWPOS), this._normalMatrixUniform = this._cgl.gl.getUniformLocation(this._program, $.SHADER.SHADERVAR_UNI_NORMALMAT), this._inverseViewMatrixUniform = this._cgl.gl.getUniformLocation(this._program, $.SHADER.SHADERVAR_UNI_INVVIEWMAT), t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate = !0;
    for (this._cgl.currentProgram != this._program && (Y.profileShaderBinds++, this._cgl.gl.useProgram(this._program), this._cgl.currentProgram = this._program), t = 0; t < this._uniforms.length; t++) this._uniforms[t].needsUpdate && this._uniforms[t].updateValue();
    if (this._pMatrixState != this._cgl.getProjectionMatrixStateCount() && (this._pMatrixState = this._cgl.getProjectionMatrixStateCount(), this._cgl.gl.uniformMatrix4fv(this._projMatrixUniform, !1, this._cgl.pMatrix), Y.profileMVPMatrixCount++), this._vMatrixUniform) this._vMatrixState != this._cgl.getViewMatrixStateCount() && (this._cgl.gl.uniformMatrix4fv(this._vMatrixUniform, !1, this._cgl.vMatrix), Y.profileMVPMatrixCount++, this._vMatrixState = this._cgl.getViewMatrixStateCount(), this._inverseViewMatrixUniform && (mat4.invert(this._tempInverseViewMatrix, this._cgl.vMatrix), this._cgl.gl.uniformMatrix4fv(this._inverseViewMatrixUniform, !1, this._tempInverseViewMatrix), Y.profileMVPMatrixCount++)),
    this._cgl.gl.uniformMatrix4fv(this._mMatrixUniform, !1, this._cgl.mMatrix),
    Y.profileMVPMatrixCount++,
    this._camPosUniform && (mat4.invert(this._tempCamPosMatrix, this._cgl.vMatrix), this._cgl.gl.uniform3f(this._camPosUniform, this._tempCamPosMatrix[12], this._tempCamPosMatrix[13], this._tempCamPosMatrix[14]), Y.profileMVPMatrixCount++);
     else {
      var e = mat4.create();
      mat4.mul(e, this._cgl.vMatrix, this._cgl.mMatrix),
      this._cgl.gl.uniformMatrix4fv(this._mvMatrixUniform, !1, e),
      Y.profileMVPMatrixCount++
    }
    for (this._normalMatrixUniform && (mat4.mul(this._tempNormalMatrix, this._cgl.vMatrix, this._cgl.mMatrix), mat4.invert(this._tempNormalMatrix, this._tempNormalMatrix), mat4.transpose(this._tempNormalMatrix, this._tempNormalMatrix), this._cgl.gl.uniformMatrix4fv(this._normalMatrixUniform, !1, this._tempNormalMatrix), Y.profileMVPMatrixCount++), t = 0; t < this._libs.length; t++) this._libs[t].onBind && this._libs[t].onBind.bind(this._libs[t]) (this._cgl, this)
  },
  lt.prototype.toggleDefine = function (t, e) {
    e ? this.define(t)  : this.removeDefine(t)
  },
  lt.prototype.define = function (t, e) {
    e || (e = '');
    for (var i = 0; i < this._defines.length; i++) {
      if (this._defines[i][0] == t && this._defines[i][1] == e) return;
      if (this._defines[i][0] == t) return this._defines[i][1] = e,
      void (this._needsRecompile = !0)
    }
    this._defines.push([t,
    e]),
    this._needsRecompile = !0,
    this.setWhyCompile('define ' + t + ' ' + e)
  },
  lt.prototype.getDefines = function () {
    return this._defines
  },
  lt.prototype.getDefine = function (t) {
    for (var e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return this._defines[e][1];
    return null
  },
  lt.prototype.hasDefine = function (t) {
    for (var e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return !0
  },
  lt.prototype.removeDefine = function (t) {
    for (var e = 0; e < this._defines.length; e++) if (this._defines[e][0] == t) return this._defines.splice(e, 1),
    void (this._needsRecompile = !0)
  },
  lt.prototype.removeModule = function (t) {
    for (var e = 0; e < this._modules.length; e++) if (t && t.id && (this._modules[e].id == t.id || !this._modules[e])) {
      for (var i = !0; i; ) {
        i = !1;
        for (var n = 0; n < this._uniforms.length; n++) 0 != this._uniforms[n].getName().indexOf(t.prefix) || (this._uniforms.splice(n, 1), i = !0)
      }
      this._needsRecompile = !0,
      this.setWhyCompile('remove module ' + t.title),
      this._modules.splice(e, 1);
      break
    }
  },
  lt.prototype.getNumModules = function () {
    return this._modules.length
  },
  lt.prototype.getCurrentModules = function () {
    return this._modules
  },
  lt.prototype.addModule = function (t, e) {
    return t.id || (t.id = v()),
    t.numId || (t.numId = this._moduleNumId),
    t.num || (t.num = this._modules.length),
    t.group = e ? e.group : this._modGroupCount++,
    t.prefix = 'mod' + t.group,
    this._modules.push(t),
    this._needsRecompile = !0,
    this.setWhyCompile('add module ' + t.title),
    this._moduleNumId++,
    t
  },
  lt.prototype.setModules = function (t) {
    this._moduleNames = t
  },
  lt.prototype.dispose = function () {
    this._cgl.gl.deleteProgram(this._program)
  },
  lt.prototype.setDrawBuffers = function (t) {
    this._drawBuffers = t,
    this._needsRecompile = !0
  },
  lt.prototype.getUniforms = function () {
    return this._uniforms
  },
  lt.prototype.getUniform = function (t) {
    for (var e = 0; e < this._uniforms.length; e++) if (this._uniforms[e].getName() == t) return this._uniforms[e];
    return null
  },
  lt.prototype.removeUniform = function (t) {
    for (var e = 0; e < this._uniforms.length; e++) this._uniforms[e].getName() == t && this._uniforms.splice(e, 1);
    this._needsRecompile = !0,
    this.setWhyCompile('remove uniform ' + t)
  },
  lt.prototype.addUniform = function (t) {
    this._uniforms.push(t),
    this.setWhyCompile('add uniform ' + name),
    this._needsRecompile = !0
  },
  lt.prototype._createProgram = function (t, e) {
    var i = this._cgl.gl.createProgram();
    return this.vshader = lt.createShader(this._cgl, t, this._cgl.gl.VERTEX_SHADER, this),
    this.fshader = lt.createShader(this._cgl, e, this._cgl.gl.FRAGMENT_SHADER, this),
    this._cgl.gl.attachShader(i, this.vshader),
    this._cgl.gl.attachShader(i, this.fshader),
    this._linkProgram(i),
    i
  },
  lt.prototype.hasErrors = function () {
    return this._hasErrors
  },
  lt.prototype._linkProgram = function (t) {
    this._feedBackNames.length > 0 && this._cgl.gl.transformFeedbackVaryings(t, this._feedBackNames, this._cgl.gl.SEPARATE_ATTRIBS),
    this._cgl.gl.linkProgram(t),
    this._cgl.gl.validateProgram(t),
    this._cgl.gl.getProgramParameter(t, this._cgl.gl.LINK_STATUS) || (console.warn(this._cgl.gl.getShaderInfoLog(this.fshader)), console.warn(this._cgl.gl.getShaderInfoLog(this.vshader)), console.error(name + ' shader linking fail...'), console.log('srcFrag', this.srcFrag), console.log('srcVert', this.srcVert), console.log(name + ' programinfo: ', this._cgl.gl.getProgramInfoLog(t)), console.log('--------------------------------------'), console.log(this), console.log('--------------------------------------'), name = 'errorshader', this.setSource(lt.getDefaultVertexShader(), lt.getErrorFragmentShader()))
  },
  lt.prototype.getProgram = function () {
    return this._program
  },
  lt.prototype.setFeedbackNames = function (t) {
    this._needsRecompile = !0,
    this._feedBackNames = t
  },
  lt.prototype.getDefaultVertexShader = lt.getDefaultVertexShader = function () {
    return ''.endl() + '{{MODULES_HEAD}}'.endl() + 'IN vec3 vPosition;'.endl() + 'IN vec2 attrTexCoord;'.endl() + 'IN vec3 attrVertNormal;'.endl() + 'IN float attrVertIndex;'.endl() + 'OUT vec2 texCoord;'.endl() + 'OUT vec3 norm;'.endl() + 'UNI mat4 projMatrix;'.endl() + 'UNI mat4 viewMatrix;'.endl() + 'UNI mat4 modelMatrix;'.endl() + 'void main()'.endl() + '{'.endl() + '   texCoord=attrTexCoord;'.endl() + '   norm=attrVertNormal;'.endl() + '   vec4 pos=vec4(vPosition,  1.0);'.endl() + '   mat4 mMatrix=modelMatrix;'.endl() + '   {{MODULE_VERTEX_POSITION}}'.endl() + '   gl_Position = projMatrix * (viewMatrix*mMatrix) * pos;'.endl() + '}'
  },
  lt.prototype.getDefaultFragmentShader = lt.getDefaultFragmentShader = function (t, e, i) {
    return null == t && (t = 0.5, e = 0.5, i = 0.5),
    ''.endl() + 'IN vec2 texCoord;'.endl() + '{{MODULES_HEAD}}'.endl() + 'void main()'.endl() + '{'.endl() + '    vec4 col=vec4(' + t + ',' + e + ',' + i + ',1.0);'.endl() + '    {{MODULE_COLOR}}'.endl() + '    outColor = col;'.endl() + '}'
  },
  lt.prototype.addAttribute = function (t) {
    for (var e = 0; e < this._attributes.length; e++) if (this._attributes[e].name == t.name && this._attributes[e].nameFrag == t.nameFrag) return;
    this._attributes.push(t),
    this._needsRecompile = !0
  },
  lt.getErrorFragmentShader = function () {
    return ''.endl() + 'void main()'.endl() + '{'.endl() + '   float g=mod((gl_FragCoord.y+gl_FragCoord.x),50.0)/50.0;'.endl() + '   g= step(0.1,g);'.endl() + '   outColor = vec4( g+0.5, 0.0, 0.0, 1.0);'.endl() + '}'
  },
  lt.createShader = function (t, e, i, n) {
    var r = t.gl.createShader(i);
    if (t.gl.shaderSource(r, e), t.gl.compileShader(r), !t.gl.getShaderParameter(r, t.gl.COMPILE_STATUS)) {
      console.log('compile status: '),
      i == t.gl.VERTEX_SHADER && console.log('VERTEX_SHADER'),
      i == t.gl.FRAGMENT_SHADER && console.log('FRAGMENT_SHADER'),
      console.warn(t.gl.getShaderInfoLog(r));
      var s = t.gl.getShaderInfoLog(r),
      o = function (t) {
        var e = [
        ],
        i = s.split('\n');
        for (var n in i) {
          var r = i[n].split(':');
          parseInt(r[2], 10) && e.push(parseInt(r[2], 10))
        }
        return e
      }(),
      a = '<div class="shaderErrorCode">',
      l = e.match(/^.*((\r\n|\n|\r)|$)/gm);
      for (var h in l) {
        var u = parseInt(h, 10) + 1,
        c = u + ': ' + l[h];
        console.log(c);
        var d = !1;
        for (var p in o) o[p] == u && (d = !0);
        d && (a += '<span class="error">'),
        a += c,
        d && (a += '</span>')
      }
      console.warn(s),
      a = (s = s.replace(/\n/g, '<br/>')) + '<br/>' + a + '<br/><br/>',
      t.patch.emitEvent('criticalError', 'Shader error ' + name, a),
      t.patch.isEditorMode() && console.log('Shader error ' + name, a),
      a += '</div>',
      name = 'errorshader',
      n.setSource(lt.getDefaultVertexShader(), lt.getErrorFragmentShader())
    }
    return r
  };
  const ht = Math.PI / 180,
  ut = (Math.PI, - 1 != window.navigator.userAgent.indexOf('Windows')),
  ct = function (t) {
    var e;
    if (t.wheelDelta) e = t.wheelDelta % 120 - 0 == - 0 ? t.wheelDelta / 120 : t.wheelDelta / 30,
    e *= - 1.5,
    ut && (e *= 2);
     else {
      var i = t.deltaY;
      t.shiftKey && (i = t.deltaX);
      var n = i || t.detail;
      e = - (n % 3 ? 10 * n : n / 3),
      e *= - 3
    }
    return e > 20 && (e = 20),
    e < - 20 && (e = - 20),
    e
  },
  dt = ct,
  pt = ct,
  gt = function () {
    this._arr = [
      mat4.create()
    ],
    this._index = 0,
    this.stateCounter = 0
  };
  gt.prototype.push = function (t) {
    if (this._index++, this.stateCounter++, this._index == this._arr.length) {
      var e = mat4.create();
      this._arr.push(e)
    }
    return mat4.copy(this._arr[this._index], t || this._arr[this._index - 1]),
    this._arr[this._index]
  },
  gt.prototype.pop = function () {
    return this.stateCounter++,
    this._index--,
    this._index < 0 && (this._index = 0),
    this._arr[this._index]
  },
  gt.prototype.length = function () {
    return this._index
  };
  const ft = function (t) {
    var e = this,
    i = [
      0,
      0,
      0,
      0
    ];
    this.glVersion = 0,
    this.glUseHalfFloatTex = !1,
    this.clearCanvasTransparent = !0,
    this.clearCanvasDepth = !0,
    this.patch = t,
    this.temporaryTexture = null,
    this.frameStore = {
    },
    this.gl = null,
    this.pMatrix = mat4.create(),
    this.mMatrix = mat4.create(),
    this.vMatrix = mat4.create(),
    this._textureslots = [
    ],
    this._pMatrixStack = new gt,
    this._mMatrixStack = new gt,
    this._vMatrixStack = new gt,
    this._glFrameBufferStack = [
    ],
    this._frameBufferStack = [
    ],
    this._shaderStack = [
    ],
    Object.defineProperty(this, 'mvMatrix', {
      get() {
        return this.mMatrix
      },
      set(t) {
        this.mMatrix = t
      }
    }),
    this.canvas = null,
    this.pixelDensity = 1,
    mat4.identity(this.mMatrix),
    mat4.identity(this.vMatrix);
    var n = new lt(this, 'simpleshader');
    n.setModules(['MODULE_VERTEX_POSITION',
    'MODULE_COLOR',
    'MODULE_BEGIN_FRAG']),
    n.setSource(lt.getDefaultVertexShader(), lt.getDefaultFragmentShader());
    var r = n,
    s = [
    ];
    this.addEventListener = function (t, e) {
      'resize' == t && s.push(e)
    },
    this.removeEventListener = function (t, e) {
      if ('resize' == t) for (var i in s) if (s[i] == e) return void s.splice(i, 1)
    },
    this.exitError = function (t, e) {
      this.patch.exitError(t, e),
      this.aborted = !0
    },
    this.setCanvas = function (t) {
      if (this.canvas = 'string' == typeof t ? document.getElementById(t)  : t, this.patch.config.canvas || (this.patch.config.canvas = {
      }), this.patch.config.canvas.hasOwnProperty('preserveDrawingBuffer') || (this.patch.config.canvas.preserveDrawingBuffer = !1), this.patch.config.canvas.hasOwnProperty('premultipliedAlpha') || (this.patch.config.canvas.premultipliedAlpha = !1), this.patch.config.canvas.hasOwnProperty('alpha') || (this.patch.config.canvas.alpha = !1), this.patch.config.hasOwnProperty('clearCanvasColor') && (this.clearCanvasTransparent = this.patch.config.clearCanvasColor), this.patch.config.hasOwnProperty('clearCanvasDepth') && (this.clearCanvasDepth = this.patch.config.clearCanvasDepth), this.gl = this.canvas.getContext('webgl2', this.patch.config.canvas), this.gl ? this.glVersion = 2 : (this.gl = this.canvas.getContext('webgl', this.patch.config.canvas) || this.canvas.getContext('experimental-webgl', this.patch.config.canvas), this.glVersion = 1, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (this.glUseHalfFloatTex = !0), /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && (this.patch.config.canvas.hasOwnProperty('powerPreference') || (this.patch.config.canvas.powerPreference = 'high-performance'))), this.gl) {
        this.gl.getExtension('GL_OES_standard_derivatives');
        var i = this.gl.getExtension('ANGLE_instanced_arrays') || this.gl;
        i.vertexAttribDivisorANGLE && (this.gl.vertexAttribDivisor = i.vertexAttribDivisorANGLE.bind(i), this.gl.drawElementsInstanced = i.drawElementsInstancedANGLE.bind(i)),
        e.updateSize()
      } else this.exitError('NO_WEBGL', 'sorry, could not initialize WebGL. Please check if your Browser supports WebGL.')
    },
    this.updateSize = function () {
      this.canvas.width = this.canvasWidth = this.canvas.clientWidth * this.pixelDensity,
      this.canvas.height = this.canvasHeight = this.canvas.clientHeight * this.pixelDensity
    },
    this.canvasWidth = - 1,
    this.canvasHeight = - 1,
    this.canvasScale = 1;
    var o = - 1,
    a = - 1;
    this.getViewPort = function () {
      return i
    },
    this.resetViewPort = function () {
      this.gl.viewport(i[0], i[1], i[2], i[3])
    },
    this.setViewPort = function (t, e, n, r) {
      i[0] = Math.round(t),
      i[1] = Math.round(e),
      i[2] = Math.round(n),
      i[3] = Math.round(r),
      this.gl.viewport(i[0], i[1], i[2], i[3])
    },
    this.beginFrame = function () {
      CABLES.UI && (gui.metaTexturePreviewer.render(), CABLES.UI.patchPreviewer && CABLES.UI.patchPreviewer.render()),
      e.setShader(n)
    },
    this.screenShot = function (t, e) {
      e && (this.gl.clearColor(1, 1, 1, 1), this.gl.colorMask(!1, !1, !1, !0), this.gl.clear(this.gl.COLOR_BUFFER_BIT), this.gl.colorMask(!0, !0, !0, !0)),
      this.canvas && this.canvas.toBlob && this.canvas.toBlob(e=>{
        t ? t(e)  : console.log('no screenshot callback...')
      })
    },
    this.endFrame = function () {
      if (CABLES.UI && CABLES.GL_MARKER.drawMarkerLayer(this), e.setPreviousShader(), this._vMatrixStack.length() > 0 && console.warn('view matrix stack length !=0 at end of rendering...'), this._mMatrixStack.length() > 0 && console.warn('mvmatrix stack length !=0 at end of rendering...'), this._pMatrixStack.length() > 0 && console.warn('pmatrix stack length !=0 at end of rendering...'), this._glFrameBufferStack.length > 0 && console.warn('glFrameBuffer stack length !=0 at end of rendering...'), this._stackDepthTest.length > 0 && console.warn('depthtest stack length !=0 at end of rendering...'), this._stackDepthWrite.length > 0 && console.warn('depthwrite stack length !=0 at end of rendering...'), this._stackDepthFunc.length > 0 && console.warn('depthfunc stack length !=0 at end of rendering...'), this._stackBlend.length > 0 && console.warn('blend stack length !=0 at end of rendering...'), this._stackBlendMode.length > 0 && console.warn('blendMode stack length !=0 at end of rendering...'), this._shaderStack.length > 0 && console.warn('this._shaderStack length !=0 at end of rendering...'), o != e.canvasWidth || a != e.canvasHeight) {
        o = e.canvasWidth,
        a = e.canvasHeight,
        this.setSize(e.canvasWidth / this.pixelDensity, e.canvasHeight / this.pixelDensity),
        this.updateSize();
        for (var t = 0; t < s.length; t++) s[t]()
      }
    },
    this.getShader = function () {
      if (r && (!this.frameStore || !0 === this.frameStore.renderOffscreen == r.offScreenPass == 1)) return r;
      for (var t = this._shaderStack.length - 1; t >= 0; t--) if (this._shaderStack[t] && this.frameStore.renderOffscreen == this._shaderStack[t].offScreenPass) return this._shaderStack[t]
    },
    this.getDefaultShader = function () {
      return n
    },
    this.setShader = function (t) {
      this._shaderStack.push(t),
      r = t
    },
    this.setPreviousShader = function () {
      if (0 === this._shaderStack.length) throw 'Invalid shader stack pop!';
      this._shaderStack.pop(),
      r = this._shaderStack[this._shaderStack.length - 1]
    },
    this.pushGlFrameBuffer = function (t) {
      this._glFrameBufferStack.push(t)
    },
    this.popGlFrameBuffer = function () {
      return 0 == this._glFrameBufferStack.length ? null : (this._glFrameBufferStack.pop(), this._glFrameBufferStack[this._glFrameBufferStack.length - 1])
    },
    this.getCurrentGlFrameBuffer = function () {
      return 0 === this._glFrameBufferStack.length ? null : this._glFrameBufferStack[this._glFrameBufferStack.length - 1]
    },
    this.pushFrameBuffer = function (t) {
      this._frameBufferStack.push(t)
    },
    this.popFrameBuffer = function () {
      return 0 == this._frameBufferStack.length ? null : (this._frameBufferStack.pop(), this._frameBufferStack[this._frameBufferStack.length - 1])
    },
    this.getCurrentFrameBuffer = function () {
      return 0 === this._frameBufferStack.length ? null : this._frameBufferStack[this._frameBufferStack.length - 1]
    };
    var l = vec3.create();
    vec3.set(l, 0, 0, 2);
    var h = vec3.create();
    vec3.set(h, 0, 0, 0),
    this.renderStart = function (t, e, i) {
      e || (e = h),
      i || (i = l),
      this.pushDepthTest(!0),
      this.pushDepthWrite(!0),
      this.pushDepthFunc(t.gl.LEQUAL),
      this.clearCanvasTransparent && (t.gl.clearColor(0, 0, 0, 0), t.gl.clear(t.gl.COLOR_BUFFER_BIT)),
      this.clearCanvasDepth && t.gl.clear(t.gl.DEPTH_BUFFER_BIT),
      t.setViewPort(0, 0, t.canvasWidth, t.canvasHeight),
      mat4.perspective(t.pMatrix, 45, t.canvasWidth / t.canvasHeight, 0.1, 1000),
      mat4.identity(t.mMatrix),
      mat4.identity(t.vMatrix),
      mat4.translate(t.mMatrix, t.mMatrix, e),
      mat4.translate(t.vMatrix, t.vMatrix, i),
      t.pushPMatrix(),
      t.pushModelMatrix(),
      t.pushViewMatrix(),
      t.pushBlendMode($.BLEND_MODES.BLEND_NORMAL, !1);
      for (var n = 0; n < this._textureslots.length; n++) this._textureslots[n] = null;
      t.beginFrame()
    },
    this.renderEnd = function (t, e) {
      t.popViewMatrix(),
      t.popModelMatrix(),
      t.popPMatrix(),
      this.popDepthTest(),
      this.popDepthWrite(),
      this.popDepthFunc(),
      this.popBlend(),
      this.popBlendMode(),
      t.endFrame()
    },
    this.getTexture = function (t) {
      return this._textureslots[t]
    },
    this.setTexture = function (t, e, i) {
      this._textureslots[t] != e && (this.gl.activeTexture(this.gl.TEXTURE0 + t), this.gl.bindTexture(i || this.gl.TEXTURE_2D, e), this._textureslots[t] = e)
    },
    this.fullScreen = function () {
      this.canvas.requestFullscreen ? this.canvas.requestFullscreen()  : this.canvas.mozRequestFullScreen ? this.canvas.mozRequestFullScreen()  : this.canvas.webkitRequestFullscreen ? this.canvas.webkitRequestFullscreen()  : this.canvas.msRequestFullscreen && this.canvas.msRequestFullscreen()
    },
    this.setSize = function (t, e) {
      this.canvas.style.width = t + 'px',
      this.canvas.style.height = e + 'px',
      this.canvas.width = t * this.pixelDensity,
      this.canvas.height = e * this.pixelDensity,
      this.updateSize()
    },
    this._resizeToWindowSize = function () {
      this.setSize(window.innerWidth, window.innerHeight),
      this.updateSize()
    },
    this._resizeToParentSize = function () {
      console.log('_resizeToParentSize');
      var t = this.canvas.parentElement;
      t ? (this.setSize(t.clientWidth, t.clientHeight), console.log('_resizeToParentSize', t.clientWidth, t.clientHeight), this.updateSize())  : console.error('cables: can not resize to container element')
    },
    this.setAutoResize = function (t) {
      window.removeEventListener('resize', this._resizeToWindowSize.bind(this)),
      window.removeEventListener('resize', this._resizeToParentSize.bind(this)),
      'window' == t && (window.addEventListener('resize', this._resizeToWindowSize.bind(this)), window.addEventListener('orientationchange', this._resizeToWindowSize.bind(this)), this._resizeToWindowSize()),
      'parent' == t && (window.addEventListener('resize', this._resizeToParentSize.bind(this)), this._resizeToParentSize())
    },
    this.printError = function (t) {
      var e = this.gl.getError();
      if (e != this.gl.NO_ERROR) {
        var i = '';
        e == this.gl.OUT_OF_MEMORY && (i = 'OUT_OF_MEMORY'),
        e == this.gl.INVALID_ENUM && (i = 'INVALID_ENUM'),
        e == this.gl.INVALID_OPERATION && (i = 'INVALID_OPERATION'),
        e == this.gl.INVALID_FRAMEBUFFER_OPERATION && (i = 'INVALID_FRAMEBUFFER_OPERATION'),
        e == this.gl.INVALID_VALUE && (i = 'INVALID_VALUE'),
        e == this.gl.CONTEXT_LOST_WEBGL && (i = 'CONTEXT_LOST_WEBGL'),
        e == this.gl.NO_ERROR && (i = 'NO_ERROR'),
        console.log('gl error: ', t, e, i)
      }
    },
    this.saveScreenshot = function (t, e, i, n) {
      this.patch.renderOneFrame();
      var r = this.canvas.clientWidth,
      s = this.canvas.clientHeight;
      function o(t, e, i) {
        return Array(e - String(t).length + 1).join(i || '0') + t
      }
      i && (this.canvas.width = i, r = i),
      n && (this.canvas.height = n, s = n);
      var a = new Date,
      l = ''.concat(String(a.getFullYear()) + String(a.getMonth() + 1) + String(a.getDate()), '_').concat(o(a.getHours(), 2)).concat(o(a.getMinutes(), 2)).concat(o(a.getSeconds(), 2));
      t ? t += '.png' : t = 'cables_' + l + '.png',
      this.patch.cgl.screenShot(i=>{
        if (this.canvas.width = r, this.canvas.height = s, i) {
          var n = document.createElement('a');
          n.download = t,
          n.href = URL.createObjectURL(i),
          document.body.appendChild(n),
          n.click(),
          e && e(i),
          n.remove()
        } else console.log('screenshot: no blob')
      }, !0)
    }
  };
  ft.prototype.pushViewMatrix = function () {
    this.vMatrix = this._vMatrixStack.push(this.vMatrix)
  },
  ft.prototype.popViewMatrix = function () {
    this.vMatrix = this._vMatrixStack.pop()
  },
  ft.prototype.getViewMatrixStateCount = function () {
    return this._vMatrixStack.stateCounter
  },
  ft.prototype.pushPMatrix = function () {
    this.pMatrix = this._pMatrixStack.push(this.pMatrix)
  },
  ft.prototype.popPMatrix = function () {
    return this.pMatrix = this._pMatrixStack.pop(),
    this.pMatrix
  },
  ft.prototype.getProjectionMatrixStateCount = function () {
    return this._pMatrixStack.stateCounter
  },
  ft.prototype.pushMvMatrix = ft.prototype.pushModelMatrix = function () {
    this.mMatrix = this._mMatrixStack.push(this.mMatrix)
  },
  ft.prototype.popMvMatrix = ft.prototype.popmMatrix = ft.prototype.popModelMatrix = function () {
    return this.mMatrix = this._mMatrixStack.pop(),
    this.mMatrix
  },
  ft.prototype.modelMatrix = function () {
    return this.mMatrix
  },
  ft.prototype._stackDepthTest = [
  ],
  ft.prototype.pushDepthTest = function (t) {
    this._stackDepthTest.push(t),
    t ? this.gl.enable(this.gl.DEPTH_TEST)  : this.gl.disable(this.gl.DEPTH_TEST)
  },
  ft.prototype.stateDepthTest = function () {
    return this._stackDepthTest[this._stackDepthTest.length - 1]
  },
  ft.prototype.popDepthTest = function () {
    this._stackDepthTest.pop(),
    this._stackDepthTest[this._stackDepthTest.length - 1] ? this.gl.enable(this.gl.DEPTH_TEST)  : this.gl.disable(this.gl.DEPTH_TEST)
  },
  ft.prototype._stackDepthWrite = [
  ],
  ft.prototype.pushDepthWrite = function (t) {
    this._stackDepthWrite.push(t),
    this.gl.depthMask(t)
  },
  ft.prototype.stateDepthWrite = function () {
    return this._stackDepthWrite[this._stackDepthWrite.length - 1]
  },
  ft.prototype.popDepthWrite = function () {
    this._stackDepthWrite.pop(),
    this.gl.depthMask(this._stackDepthWrite[this._stackDepthWrite.length - 1])
  },
  ft.prototype._stackDepthFunc = [
  ],
  ft.prototype.pushDepthFunc = function (t) {
    this._stackDepthFunc.push(t),
    this.gl.depthFunc(t)
  },
  ft.prototype.stateDepthFunc = function () {
    return this._stackDepthFunc.length > 0 && this._stackDepthFunc[this._stackDepthFunc.length - 1]
  },
  ft.prototype.popDepthFunc = function () {
    this._stackDepthFunc.pop(),
    this._stackDepthFunc.length > 0 && this.gl.depthFunc(this._stackDepthFunc[this._stackDepthFunc.length - 1])
  },
  ft.prototype._stackBlend = [
  ],
  ft.prototype.pushBlend = function (t) {
    this._stackBlend.push(t),
    t ? this.gl.enable(this.gl.BLEND)  : this.gl.disable(this.gl.BLEND)
  },
  ft.prototype.popBlend = function () {
    this._stackBlend.pop(),
    this._stackBlend[this._stackBlend.length - 1] ? this.gl.enable(this.gl.BLEND)  : this.gl.disable(this.gl.BLEND)
  },
  ft.prototype.stateBlend = function () {
    return this._stackBlend[this._stackBlend.length - 1]
  },
  ft.prototype._stackBlendMode = [
  ],
  ft.prototype._stackBlendModePremul = [
  ],
  ft.prototype.pushBlendMode = function (t, e) {
    this._stackBlendMode.push(t),
    this._stackBlendModePremul.push(e);
    const i = this._stackBlendMode.length - 1;
    this.pushBlend(this._stackBlendMode[i] !== $.BLEND_MODES.BLEND_NONE),
    this._setBlendMode(this._stackBlendMode[i], this._stackBlendModePremul[i])
  },
  ft.prototype.popBlendMode = function () {
    this._stackBlendMode.pop(),
    this._stackBlendModePremul.pop();
    const t = this._stackBlendMode.length - 1;
    this.popBlend(this._stackBlendMode[t] !== $.BLEND_MODES.BLEND_NONE),
    t > 0 && this._setBlendMode(this._stackBlendMode[t], this._stackBlendModePremul[t])
  },
  ft.prototype.glGetAttribLocation = function (t, e) {
    return this.gl.getAttribLocation(t, e)
  },
  ft.prototype._setBlendMode = function (t, e) {
    const i = this.gl;
    t == $.BLEND_MODES.BLEND_NONE || (t == $.BLEND_MODES.BLEND_ADD ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE, i.ONE, i.ONE))  : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.SRC_ALPHA, i.ONE))  : t == $.BLEND_MODES.BLEND_SUB ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ONE_MINUS_SRC_ALPHA))  : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.ONE_MINUS_SRC_COLOR))  : t == $.BLEND_MODES.BLEND_MUL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA))  : (i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ZERO, i.SRC_COLOR))  : t == $.BLEND_MODES.BLEND_NORMAL ? e ? (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA))  : (i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD), i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA))  : console.log('setblendmode: unknown blendmode'))
  };
  const _t = Object.assign({
    Framebuffer: function (t, e, i, n) {
      var r = t,
      s = r.gl.getExtension('WEBGL_depth_texture') || r.gl.getExtension('WEBKIT_WEBGL_depth_texture') || r.gl.getExtension('MOZ_WEBGL_depth_texture') || r.gl.DEPTH_TEXTURE;
      if (s) {
        var o = e || 512,
        a = i || 512;
        (n = n || {
          isFloatingPointTexture: !1
        }).hasOwnProperty('filter') || (n.filter = Z.FILTER_LINEAR);
        var l = new Z(r, {
          isFloatingPointTexture: n.isFloatingPointTexture,
          filter: n.filter,
          wrap: Z.CLAMP_TO_EDGE
        }),
        h = null;
        s && (h = new Z(r, {
          isDepthTexture: !0
        }));
        var u = r.gl.createFramebuffer(),
        c = r.gl.createRenderbuffer();
        this.getWidth = function () {
          return o
        },
        this.getHeight = function () {
          return a
        },
        this.getGlFrameBuffer = function () {
          return u
        },
        this.getDepthRenderBuffer = function () {
          return c
        },
        this.getTextureColor = function () {
          return l
        },
        this.getTextureDepth = function () {
          return h
        },
        this.setFilter = function (t) {
          l.filter = t,
          l.setSize(o, a)
        },
        this.setSize = function (t, e) {
          if (t < 2 && (t = 2), e < 2 && (e = 2), o = Math.ceil(t), a = Math.ceil(e), Y.profileFrameBuffercreate++, r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u), r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, c), l.setSize(o, a), h && h.setSize(o, a), s && r.gl.renderbufferStorage(r.gl.RENDERBUFFER, r.gl.DEPTH_COMPONENT16, o, a), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.COLOR_ATTACHMENT0, r.gl.TEXTURE_2D, l.tex, 0), s && (r.gl.framebufferRenderbuffer(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.RENDERBUFFER, c), r.gl.framebufferTexture2D(r.gl.FRAMEBUFFER, r.gl.DEPTH_ATTACHMENT, r.gl.TEXTURE_2D, h.tex, 0)), !r.gl.isFramebuffer(u)) throw 'Invalid framebuffer';
          var i = r.gl.checkFramebufferStatus(r.gl.FRAMEBUFFER);
          switch (i) {
            case r.gl.FRAMEBUFFER_COMPLETE:
              break;
            case r.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
              throw console.log('FRAMEBUFFER_INCOMPLETE_ATTACHMENT...', o, a, l.tex, c),
              new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT');
            case r.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
              throw console.log('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT'),
              new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT');
            case r.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
              throw console.log('FRAMEBUFFER_INCOMPLETE_DIMENSIONS'),
              new Error('Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS');
            case r.gl.FRAMEBUFFER_UNSUPPORTED:
              throw console.log('FRAMEBUFFER_UNSUPPORTED'),
              new Error('Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED');
            default:
              throw console.log('incomplete framebuffer', i),
              new Error('Incomplete framebuffer: ' + i)
          }
          r.gl.bindTexture(r.gl.TEXTURE_2D, null),
          r.gl.bindRenderbuffer(r.gl.RENDERBUFFER, null),
          r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, null)
        },
        this.renderStart = function () {
          r.pushModelMatrix(),
          r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, u),
          r.pushGlFrameBuffer(u),
          r.pushFrameBuffer(this),
          r.pushPMatrix(),
          r.gl.viewport(0, 0, o, a),
          r.gl.clearColor(0, 0, 0, 0),
          r.gl.clear(r.gl.COLOR_BUFFER_BIT | r.gl.DEPTH_BUFFER_BIT)
        },
        this.renderEnd = function () {
          r.popPMatrix(),
          r.gl.bindFramebuffer(r.gl.FRAMEBUFFER, r.popGlFrameBuffer()),
          r.popFrameBuffer(),
          r.popModelMatrix(),
          r.resetViewPort()
        },
        this.delete = function () {
          l.delete (),
          h && h.delete (),
          r.gl.deleteRenderbuffer(c),
          r.gl.deleteFramebuffer(u)
        },
        this.setSize(o, a)
      } else r.exitError('NO_DEPTH_TEXTURE', 'no depth texture support')
    },
    Framebuffer2: q,
    Geometry: J,
    Marker: function (t) {
      var e = new J('marker');
      e.setPointVertices([0.00001,
      0,
      0,
      1,
      0,
      0,
      0,
      0.00001,
      0,
      0,
      1,
      0,
      0,
      0,
      0.00001,
      0,
      0,
      1]);
      var i = new et(t, e, t.gl.LINES);
      i.setGeom(e);
      var n = new lt(t, 'markermaterial'),
      r = ''.endl() + 'precision highp float;'.endl() + 'IN vec3 axisColor;'.endl() + 'void main()'.endl() + '{'.endl() + '    vec4 col=vec4(axisColor,1.0);'.endl() + '    outColor = col;'.endl() + '}',
      s = ''.endl() + 'IN vec3 vPosition;'.endl() + 'UNI mat4 projMatrix;'.endl() + 'UNI mat4 mvMatrix;'.endl() + 'OUT vec3 axisColor;'.endl() + 'void main()'.endl() + '{'.endl() + '   vec4 pos=vec4(vPosition, 1.0);'.endl() + '   if(pos.x!=0.0)axisColor=vec3(1.0,0.3,0.0);'.endl() + '   if(pos.y!=0.0)axisColor=vec3(0.0,1.0,0.2);'.endl() + '   if(pos.z!=0.0)axisColor=vec3(0.0,0.5,1.0);'.endl() + '   gl_Position = projMatrix * mvMatrix * pos;'.endl() + '}';
      n.setSource(s, r),
      this._vScale = vec3.create(),
      this.draw = function (t) {
        t.pushModelMatrix(),
        t.setShader(n),
        vec3.set(this._vScale, 2, 2, 2),
        mat4.scale(t.mvMatrix, t.mvMatrix, this._vScale),
        t.pushDepthTest(!1),
        i.render(t.getShader()),
        t.popDepthTest(),
        t.setPreviousShader(),
        t.popModelMatrix()
      }
    },
    WirePoint: function (t, e) {
      var i = t.gl.createBuffer(),
      n = vec3.create();
      this.render = function (t, e) {
        t.pushModelMatrix(),
        vec3.set(n, e, e, e),
        mat4.scale(t.mvMatrix, t.mvMatrix, n);
        var r = t.getShader();
        r.bind(),
        t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
        t.gl.vertexAttribPointer(r.getAttrVertexPos(), i.itemSize, t.gl.FLOAT, !1, 0, 0),
        t.gl.enableVertexAttribArray(r.getAttrVertexPos()),
        t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
        t.gl.drawArrays(t.gl.LINE_STRIP, 0, i.numItems),
        t.popModelMatrix()
      },
      function () {
        var e = [
        ],
        n = 0,
        r = 0;
        for (n = 0; n <= Math.round(24); n++) r = 360 / Math.round(24) * n * ht,
        e.push(0.5 * Math.cos(r)),
        e.push(0),
        e.push(0.5 * Math.sin(r));
        for (n = 0; n <= Math.round(24); n++) r = 360 / Math.round(24) * n * ht,
        e.push(0.5 * Math.cos(r)),
        e.push(0.5 * Math.sin(r)),
        e.push(0);
        for (n = 0; n <= Math.round(24); n++) r = 360 / Math.round(24) * n * ht,
        e.push(0),
        e.push(0.5 * Math.cos(r)),
        e.push(0.5 * Math.sin(r));
        t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
        t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(e), t.gl.STATIC_DRAW),
        i.itemSize = 3,
        i.numItems = e.length / i.itemSize
      }()
    },
    WireCube: function (t) {
      var e,
      i = t.gl.createBuffer(),
      n = vec3.create();
      this.render = function (t, e, r, s) {
        t.pushModelMatrix(),
        vec3.set(n, e || 1, r || 1, s || 1),
        mat4.scale(t.mvMatrix, t.mvMatrix, n);
        var o = t.getShader();
        o.bind(),
        t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
        t.gl.vertexAttribPointer(o.getAttrVertexPos(), i.itemSize, t.gl.FLOAT, !1, 0, 0),
        t.gl.enableVertexAttribArray(o.getAttrVertexPos()),
        t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
        t.gl.drawArrays(t.gl.LINE_STRIP, 0, i.numItems),
        t.popModelMatrix()
      },
      (e = [
      ]).push( - 1, - 1, 1),
      e.push(1, - 1, 1),
      e.push(1, 1, 1),
      e.push( - 1, 1, 1),
      e.push( - 1, - 1, 1),
      e.push( - 1, - 1, - 1),
      e.push(1, - 1, - 1),
      e.push(1, 1, - 1),
      e.push( - 1, 1, - 1),
      e.push( - 1, - 1, - 1),
      e.push( - 1, - 1, - 1),
      e.push( - 1, 1, - 1),
      e.push( - 1, 1, 1),
      e.push( - 1, - 1, 1),
      e.push( - 1, - 1, - 1),
      e.push(1, - 1, - 1),
      e.push(1, 1, - 1),
      e.push(1, 1, 1),
      e.push(1, - 1, 1),
      e.push(1, - 1, - 1),
      t.gl.bindBuffer(t.gl.ARRAY_BUFFER, i),
      t.gl.bufferData(t.gl.ARRAY_BUFFER, new Float32Array(e), t.gl.STATIC_DRAW),
      i.itemSize = 3,
      i.numItems = e.length / i.itemSize
    },
    MatrixStack: gt,
    Mesh: et,
    MESH: tt,
    ShaderLibMods: rt,
    Shader: lt,
    Uniform: Q,
    MESHES: it,
    Context: ft,
    Texture: Z,
    TextureEffect: nt,
    isWindows: ut,
    getWheelSpeed: dt,
    getWheelDelta: pt,
    onLoadingAssetsFinished: null,
    profileData: Y
  },
  $.BLEND_MODES,
  $.SHADER,
  $.MATH,
  $.BLEND_MODES); window.CGL = _t; const mt = function (t) {
    this._loadingAssets = {
    },
    this._cbFinished = [
    ],
    this._percent = 0,
    this._count = 0,
    this._countFinished = 0,
    this._order = 0,
    this._startTime = 0,
    this._patch = t
  }; mt.prototype.setOnFinishedLoading = function (t) {
    this._cbFinished.push(t)
  }, mt.prototype.getNumAssets = function () {
    return this._countFinished
  }, mt.prototype.getProgress = function () {
    return this._percent
  }, mt.prototype.checkStatus = function () {
    for (var t in this._countFinished = 0, this._count = 0, this._loadingAssets) this._count++,
    this._loadingAssets[t].finished || this._countFinished++;
    if (this._percent = (this._count - this._countFinished) / this._count, 0 === this._countFinished) {
      for (var e = 0; e < this._cbFinished.length; e++) setTimeout(this._cbFinished[e], 200);
      this.print()
    }
  }, mt.prototype.print = function () {
    if (!this._patch.silent) {
      var t = [
      ];
      for (var e in this._loadingAssets) t.push([this._loadingAssets[e].order,
      this._loadingAssets[e].type,
      this._loadingAssets[e].name,
      (this._loadingAssets[e].timeEnd - this._loadingAssets[e].timeStart) / 1000 + 's']);
      console.groupCollapsed('finished loading ' + this._order + ' assets in ' + (Date.now() - this._startTime) / 1000 + 's'),
      console.table(t),
      console.groupEnd()
    }
  }, mt.prototype.finished = function (t) {
    this._loadingAssets[t] && (this._loadingAssets[t].finished = !0, this._loadingAssets[t].timeEnd = Date.now()),
    this.checkStatus()
  }, mt.prototype.start = function (t, e) {
    0 == this._startTime && (this._startTime = Date.now());
    var i = v();
    return this._loadingAssets[i] = {
      id: i,
      type: t,
      name: e,
      finished: !1,
      timeStart: Date.now(),
      order: this._order
    },
    this._order++,
    i
  }; const bt = function () {
    this._loops = [
    ],
    this._indizes = [
    ],
    this._index = 0
  }; bt.prototype.pushLoop = function (t) {
    this._loops.push(Math.abs(Math.floor(t))),
    this._indizes.push(this._index)
  }, bt.prototype.popLoop = function () {
    this._loops.pop(),
    this._index = this._indizes.pop(),
    0 === this._loops.length && (this._index = 0)
  }, bt.prototype.numLoops = function () {
    return this._loops.length
  }, bt.prototype.numCycles = function () {
    if (0 === this._loops.length) return 0;
    for (var t = this._loops[0], e = 1; e < this._loops.length; e++) t *= this._loops[e];
    return t
  }, bt.prototype.inLoop = function () {
    return this._loops.length > 0
  }, bt.prototype.increment = function () {
    this._index++
  }, bt.prototype.index = function () {
    return this._index
  }; const vt = function () {
    var t = {
    },
    e = null,
    i = 0;
    this.getItems = function () {
      return t
    },
    this.clear = function () {
      t = {
      }
    },
    this.add = function (n, r) {
      null !== e && (r && r.id == e || t[e] && (t[e].timeUsed += performance.now() - i, (!t[e].peakTime || ot() - t[e].peakTime > 5000) && (t[e].peak > 1 && r && console.log('PEAK ', r.parent.objName), t[e].peak = 0, t[e].peakTime = ot()), t[e].peak = Math.max(t[e].peak, performance.now() - i))),
      null !== r ? (t[r.id] || (t[r.id] = {
        numTriggers: 0,
        timeUsed: 0
      }), t[r.id].numTriggers++, t[r.id].title = r.parent.name + r.name, e = r.id, i = performance.now())  : e = null
    },
    this.print = function () {
      for (var e in console.log('--------'), t) console.log(t[e].title + ': ' + t[e].numTriggers + ' / ' + t[e].timeUsed)
    }
  }, It = function (t) {
    this._patch = t,
    this.result = [
    ]
  }; It.MIDI = 0, It.POINTERLOCK = 1, It.WEBAUDIO = 2, It.WEBGL2 = 3, (It.infos = [
  ]) [It.POINTERLOCK] = {
    title: 'pointerLock',
    caniuse: 'https://caniuse.com/#search=pointerlock'
  }, It.infos[It.MIDI] = {
    title: 'midi API',
    caniuse: 'https://caniuse.com/#search=midi'
  }, It.infos[It.WEBAUDIO] = {
    title: 'web audio',
    caniuse: 'https://caniuse.com/#search=webaudio'
  }, It.infos[It.WEBGL2] = {
    title: 'WebGL 2'
  }, It.prototype.checkRequirement = function (t, e) {
    switch (this.result = [
      ], t) {
      case It.WEBGL2:
        return e.patch.cgl.glVersion >= 2;
      case It.POINTERLOCK:
        return 'exitPointerLock' in document;
      case It.MIDI:
        return 'MIDIAccess' in window;
      case It.WEBAUDIO:
        var i = !1;
        return window.audioContext && (i = !0),
        !i && ('webkitAudioContext' in window || 'AudioContext' in window) && (i = !0),
        i
    }
  },
  It.prototype.checkOp = function (t) {
    if (t && t.requirements) for (var e = 0; e < t.requirements.length; e++) {
      var i = t.requirements[e];
      if (!this.result[i]) {
        var n = this.checkRequirement(i, t);
        if (!n) throw t.patch.cgl && t.patch.cgl.canvas && t.patch.cgl.canvas.remove(),
        It.infos[i].title,
        It.infos[i].caniuse && (It.infos[i].caniuse, It.infos[i].title, t.objName),
        'this browser does not meet requirement: ' + It.infos[i].title + ' (' + t.objName + ')';
        this.result[i] = {
          success: n,
          info: It.infos[i]
        }
      }
    }
  };
  const Et = function (t) {
    g.apply(this),
    this.ops = [
    ],
    this.settings = {
    },
    this.timer = new at,
    this.freeTimer = new at,
    this.animFrameOps = [
    ],
    this.animFrameCallbacks = [
    ],
    this.gui = !1,
    this.silent = !1,
    this.profiler = null,
    this.onLoadStart = null,
    this.onLoadEnd = null,
    this.aborted = !1,
    this.loading = new mt(this),
    this._crashedOps = [
    ],
    this._perf = {
      fps: 0,
      ms: 0,
      _fpsFrameCount: 0,
      _fpsMsCount: 0,
      _fpsStart: 0
    },
    this._volumeListeners = [
    ],
    this._paused = !1,
    this._frameNum = 0,
    this.instancing = new bt,
    this.onOneFrameRendered = null,
    this.namedTriggers = {
    },
    this._origData = null,
    this._frameNext = 0,
    this._frameInterval = 0,
    this._lastFrameTime = 0,
    this._frameWasdelayed = !0,
    this.config = t || {
      glCanvasResizeToWindow: !1,
      prefixAssetPath: '',
      silent: !1,
      onError: null,
      onFinishedLoading: null,
      onFirstFrameRendered: null,
      onPatchLoaded: null,
      fpsLimit: 0
    },
    this.config.hasOwnProperty('doRequestAnimation') || (this.config.doRequestAnimation = !0),
    this.config.prefixAssetPath || (this.config.prefixAssetPath = ''),
    this.config.masterVolume || (this.config.masterVolume = 1),
    this._variables = {
    },
    t && t.variables && (this._variables = t.variables || {
    }),
    this._variableListeners = [
    ],
    this.vars = {
    },
    t && t.vars && (this.vars = t.vars),
    this.cgl = new ft(this),
    this.cgl.setCanvas(this.config.glCanvasId || this.config.glCanvas || 'glcanvas'),
    !0 === this.config.glCanvasResizeToWindow && this.cgl.setAutoResize('window'),
    !0 === this.config.glCanvasResizeToParent && this.cgl.setAutoResize('parent'),
    this.loading.setOnFinishedLoading(this.config.onFinishedLoading),
    this.cgl.aborted && (this.aborted = !0),
    this.cgl.silent && (this.silent = !0),
    this.freeTimer.play(),
    this.exec(),
    this.aborted || (this.config.patch ? (this.deSerialize(this.config.patch), this.timer.play())  : this.config.patchFile && (P(this.config.patchFile, (t, e) =>{
      var i = JSON.parse(e);
      if (t) return console.error('err', t),
      console.error('data', i),
      void console.error('data', i.msg);
      this.deSerialize(i)
    }), this.timer.play())),
    console.log('made with https://cables.gl')
  };
  Et.prototype.isPlaying = function () {
    return !this._paused
  },
  Et.prototype.renderOneFrame = function () {
    this._paused = !0,
    this._renderOneFrame = !0,
    this.exec(),
    this._renderOneFrame = !1
  },
  Et.prototype.getFPS = function () {
    return this._fps
  },
  Et.prototype.isEditorMode = function () {
    return !0 === this.config.editorMode
  },
  Et.prototype.pause = function () {
    this._paused = !0,
    this.freeTimer.pause()
  },
  Et.prototype.resume = function () {
    this._paused && (this._paused = !1, this.freeTimer.play(), this.exec())
  },
  Et.prototype.setVolume = function (t) {
    this.config.masterVolume = t;
    for (var e = 0; e < this._volumeListeners.length; e++) this._volumeListeners[e].onMasterVolumeChanged(t)
  },
  Et.prototype.getFilePath = function (t) {
    return t ? 0 === t.indexOf('https:') || 0 === t.indexOf('http:') ? t : (t = t.replace('//', '/'), this.config.prefixAssetPath + t + (this.config.suffixAssetPath || ''))  : t
  },
  Et.prototype.clear = function () {
    for (this.cgl.TextureEffectMesh = null, this.animFrameOps.length = 0, this.timer = new at; this.ops.length > 0; ) this.deleteOp(this.ops[0].id)
  },
  Et.getOpClass = function (t) {
    var e = t.split('.'),
    i = null;
    try {
      return 2 == e.length ? i = window[e[0]][e[1]] : 3 == e.length ? i = window[e[0]][e[1]][e[2]] : 4 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]] : 5 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]] : 6 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]] : 7 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]] : 8 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]] : 9 == e.length ? i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]] : 10 == e.length && (i = window[e[0]][e[1]][e[2]][e[3]][e[4]][e[5]][e[6]][e[7]][e[8]][e[9]]),
      i
    } catch (t) {
      return null
    }
  },
  Et.prototype.createOp = function (t, e) {
    var i = t.split('.'),
    n = null,
    r = '';
    try {
      if ( - 1 == t.indexOf('Ops.')) {
        var s = t;
        if (!CABLES.OPS[s]) throw 'could not find op by id: ' + s;
        r = CABLES.OPS[s].objName,
        (n = new CABLES.OPS[s].f(this, r, e, s)).opId = s
      }
      if (!n) {
        if (!Et.getOpClass(r = t)) throw this.emitEvent('criticalError', 'unknown op', 'unknown op: ' + r),
        console.error('unknown op: ' + r),
        new Error('unknown op: ' + r);
        if (2 == i.length ? n = new window[i[0]][i[1]](this, r, e)  : 3 == i.length ? n = new window[i[0]][i[1]][i[2]](this, r, e)  : 4 == i.length ? n = new window[i[0]][i[1]][i[2]][i[3]](this, r, e)  : 5 == i.length ? n = new window[i[0]][i[1]][i[2]][i[3]][i[4]](this, r, e)  : 6 == i.length ? n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]](this, r, e)  : 7 == i.length ? n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]](this, r, e)  : 8 == i.length ? n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]](this, r, e)  : 9 == i.length ? n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]](this, r, e)  : 10 == i.length ? n = new window[i[0]][i[1]][i[2]][i[3]][i[4]][i[5]][i[6]][i[7]][i[8]][i[9]](this, r, e)  : console.log('parts.length', i.length), n) for (var o in n.opId = null, CABLES.OPS) CABLES.OPS[o].objName == r && (n.opId = o)
      }
    } catch (t) {
      if (this._crashedOps.push(r), this.emitEvent('exceptionOp', t, r), !this.isEditorMode) throw console.log(t),
      console.error('[instancing error] ' + r, t),
      CABLES.api && CABLES.api.sendErrorReport(t),
      this.exitError('INSTANCE_ERR', 'Instancing Error ' + r),
      'instancing error ' + r
    }
    return n && (n.objName = r, n.patch = this),
    n
  },
  Et.prototype.addOp = function (t, e, i) {
    var n = this.createOp(t, i);
    return n && (n.uiAttr(e), n.onCreate && n.onCreate(), n.hasOwnProperty('onAnimFrame') && this.animFrameOps.push(n), n.hasOwnProperty('onMasterVolumeChanged') && this._volumeListeners.push(n), this.ops.push(n), this.emitEvent('onOpAdd', n), n.init && n.init()),
    n
  },
  Et.prototype.addOnAnimFrame = function (t) {
    this.animFrameOps.push(t)
  },
  Et.prototype.removeOnAnimFrame = function (t) {
    for (var e = 0; e < this.animFrameOps.length; e++) if (this.animFrameOps[e] == t) return void this.animFrameOps.splice(e, 1)
  },
  Et.prototype.addOnAnimFrameCallback = function (t) {
    this.animFrameCallbacks.push(t)
  },
  Et.prototype.removeOnAnimCallback = function (t) {
    for (var e = 0; e < this.animFrameCallbacks.length; e++) if (this.animFrameCallbacks[e] == t) return void this.animFrameCallbacks.splice(e, 1)
  },
  Et.prototype.deleteOp = function (t, e) {
    for (var i in this.ops) if (this.ops[i].id == t) {
      var n = null,
      r = null;
      if (this.ops[i]) {
        e && this.ops[i].portsIn.length > 0 && this.ops[i].portsIn[0].isLinked() && this.ops[i].portsOut.length > 0 && this.ops[i].portsOut[0].isLinked() && this.ops[i].portsIn[0].getType() == this.ops[i].portsOut[0].getType() && (n = this.ops[i].portsIn[0].links[0].getOtherPort(this.ops[i].portsIn[0]), r = this.ops[i].portsOut[0].links[0].getOtherPort(this.ops[i].portsOut[0]));
        var s = this.ops[i];
        s.removeLinks(),
        this.onDelete && (console.log('deprecated this.onDelete', this.onDelete), this.onDelete(s)),
        this.emitEvent('onOpDelete', s),
        this.ops.splice(i, 1),
        s.onDelete && s.onDelete(),
        s.cleanUp(),
        null !== n && null !== r && this.link(n.parent, n.getName(), r.parent, r.getName())
      }
    }
  },
  Et.prototype.getFrameNum = function () {
    return this._frameNum
  },
  Et.prototype.renderFrame = function (t) {
    this.timer.update(),
    this.freeTimer.update();
    for (var e = this.timer.getTime(), i = 0; i < this.animFrameCallbacks.length; ++i) this.animFrameCallbacks[i] && this.animFrameCallbacks[i](e, this._frameNum);
    for (i = 0; i < this.animFrameOps.length; ++i) this.animFrameOps[i].onAnimFrame && this.animFrameOps[i].onAnimFrame(e);
    this._frameNum++,
    1 == this._frameNum && this.config.onFirstFrameRendered && this.config.onFirstFrameRendered()
  },
  Et.prototype.exec = function (t) {
    if (this._renderOneFrame || !this._paused && !this.aborted) {
      this.config.fpsLimit = this.config.fpsLimit || 0,
      this.config.fpsLimit && (this._frameInterval = 1000 / this.config.fpsLimit);
      var e = CABLES.now(),
      i = e - this._frameNext;
      if (this.isEditorMode() && !this._renderOneFrame && e - this._lastFrameTime >= 500 && 0 !== this._lastFrameTime && !this._frameWasdelayed) return this._lastFrameTime = 0,
      setTimeout(this.exec.bind(this), 500),
      this.emitEvent('renderDelayStart'),
      void (this._frameWasdelayed = !0);
      if (this._renderOneFrame || 0 === this.config.fpsLimit || i > this._frameInterval || this._frameWasdelayed) {
        var n = CABLES.now();
        this.renderFrame(),
        this._perf._fpsMsCount += CABLES.now() - n,
        this._frameInterval && (this._frameNext = e - i % this._frameInterval)
      }
      this._frameWasdelayed && (this.emitEvent('renderDelayEnd'), this._frameWasdelayed = !1),
      this._renderOneFrame && this.onOneFrameRendered && (this.onOneFrameRendered(), this._renderOneFrame = !1),
      CABLES.now() - this._perf._fpsStart >= 1000 && this._perf.fps != this._perf._fpsFrameCount && (this._perf.fps = this._perf._fpsFrameCount, this._perf.ms = Math.round(this._perf._fpsMsCount / this._perf._fpsFrameCount), this.emitEvent('performance', this._perf), this._perf._fpsFrameCount = 0, this._perf._fpsMsCount = 0, this._perf._fpsStart = CABLES.now()),
      this._perf._lastFrameTime = CABLES.now(),
      this._perf._fpsFrameCount++,
      this.config.doRequestAnimation && requestAnimationFrame(this.exec.bind(this))
    }
  },
  Et.prototype.link = function (t, e, i, n) {
    if (t) if (i) {
      var r = t.getPort(e),
      s = i.getPort(n);
      if (r) if (s) {
        if (!r.shouldLink(r, s) || !s.shouldLink(r, s)) return !1;
        if (z.canLink(r, s)) {
          var o = new z(this);
          return o.link(r, s),
          this.emitEvent('onLink', r, s, o),
          o
        }
      } else console.warn('port not found! ' + n + ' of ' + i.name + '(' + i.objName + ')');
       else console.warn('port not found! ' + e + '(' + t.objName + ')')
    } else console.log('link: op2 is null');
     else console.log('link: op1 is null ')
  },
  Et.prototype.serialize = function (t) {
    var e = {
      ops: [
      ]
    };
    for (var i in e.settings = this.settings, this.ops) e.ops.push(this.ops[i].getSerialized());
    return t ? e : JSON.stringify(e)
  },
  Et.prototype.getOpById = function (t) {
    for (var e in this.ops) if (this.ops[e].id == t) return this.ops[e]
  },
  Et.prototype.getOpsByName = function (t) {
    var e = [
    ];
    for (var i in this.ops) this.ops[i].name == t && e.push(this.ops[i]);
    return e
  },
  Et.prototype.getOpsByObjName = function (t) {
    var e = [
    ];
    for (var i in this.ops) this.ops[i].objName == t && e.push(this.ops[i]);
    return e
  },
  Et.prototype.loadLib = function (t) {
    y('/ui/libs/' + t + '.js', (t, e) =>{
      var i = document.createElement('script');
      i.type = 'text/javascript',
      i.text = e,
      document.getElementsByTagName('head') [0].appendChild(i)
    }, 'GET')
  },
  Et.prototype.reloadOp = function (t, e) {
    var i = 0,
    n = [
    ],
    r = [
    ];
    for (var s in this.ops) this.ops[s].objName == t && r.push(this.ops[s]);
    for (s = 0; s < r.length; s++) {
      i++;
      var o = r[s];
      o.deleted = !0;
      var a,
      l,
      h = this.addOp(t, o.uiAttribs);
      for (a in n.push(h), o.portsIn) if (0 === o.portsIn[a].links.length) {
        var u = h.getPort(o.portsIn[a].name);
        u ? u.set(o.portsIn[a].get())  : console.error('[reloadOp] could not set port ' + o.portsIn[a].name + ', propably renamed port ?')
      } else for (; o.portsIn[a].links.length; ) {
        var c = o.portsIn[a].links[0].portIn.name,
        d = o.portsIn[a].links[0].portOut.name,
        p = o.portsIn[a].links[0].portOut.parent;
        o.portsIn[a].links[0].remove(),
        (l = this.link(h, c, p, d)) ? l.setValue()  : console.log('[reloadOp] relink after op reload not successfull for port ' + d)
      }
      for (a in o.portsOut) for (; o.portsOut[a].links.length; ) {
        var g = o.portsOut[a].links[0].portOut.name,
        f = o.portsOut[a].links[0].portIn.name,
        _ = o.portsOut[a].links[0].portIn.parent;
        o.portsOut[a].links[0].remove(),
        (l = this.link(h, g, _, f)) ? l.setValue()  : console.log('relink after op reload not successfull for port ' + f)
      }
      this.deleteOp(o.id)
    }
    e(i, n)
  },
  Et.prototype.getSubPatchOps = function (t) {
    var e = [
    ];
    for (var i in this.ops) this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && e.push(this.ops[i]);
    return e
  },
  Et.prototype.getSubPatchOp = function (t, e) {
    for (var i in this.ops) if (this.ops[i].uiAttribs && this.ops[i].uiAttribs.subPatch == t && this.ops[i].objName == e) return this.ops[i];
    return !1
  },
  Et.prototype.deSerialize = function (t, e) {
    if (!this.aborted) {
      var i = this.loading.start('core', 'deserialize');
      this.onLoadStart && this.onLoadStart(),
      this.namespace = t.namespace || '',
      this.name = t.name || '',
      'string' == typeof t && (t = JSON.parse(t));
      var n = this;
      this.settings = t.settings;
      var r,
      s,
      o,
      a,
      l = new It(this);
      for (var h in t.ops) {
        var u = CABLES.now(),
        c = t.ops[h],
        d = null;
        try {
          d = c.opId ? this.addOp(c.opId, c.uiAttribs, c.id)  : this.addOp(c.objName, c.uiAttribs, c.id)
        } catch (t) {
          throw console.warn('[instancing error] op data:', c),
          'instancing error: ' + c.objName
        }
        if (l.checkOp(d), d) {
          for (var p in e && (d.id = b()), d.portsInData = c.portsIn, d._origData = c, c.portsIn) {
            var g = c.portsIn[p],
            f = d.getPort(g.name);
            if (!f || 'bool' != f.uiAttribs.display && 'bool' != f.uiAttribs.type || isNaN(g.value) || (g.value = !0 === g.value), f && void 0 !== g.value && f.type != F.OP.OP_PORT_TYPE_TEXTURE && f.set(g.value), f && g && g.animated && f.setAnimated(g.animated), f && g && g.anim) for (var _ in f.anim || (f.anim = new V), g.anim.loop && (f.anim.loop = g.anim.loop), g.anim.keys) f.anim.keys.push(new N.Key(g.anim.keys[_]))
          }
          for (var m in c.portsOut) {
            var v = d.getPort(c.portsOut[m].name);
            v && v.type != F.OP.OP_PORT_TYPE_TEXTURE && c.portsOut[m].hasOwnProperty('value') && v.set(t.ops[h].portsOut[m].value)
          }
        }
        Math.round(100 * (CABLES.now() - u))
      }
      for (var I in this.ops) this.ops[I].onLoadedValueSet && (this.ops[I].onLoadedValueSet(this.ops[I]._origData), this.ops[I].onLoadedValueSet = null, this.ops[I]._origData = null);
      if (t.ops) for (h = 0; h < t.ops.length; h++) if (t.ops[h].portsIn) for (var E = 0; E < t.ops[h].portsIn.length; E++) if (t.ops[h].portsIn[E].links) for (var M = 0; M < t.ops[h].portsIn[E].links.length; M++) t.ops[h].portsIn[E].links[M] && (r = t.ops[h].portsIn[E].links[M].objIn, s = t.ops[h].portsIn[E].links[M].objOut, o = t.ops[h].portsIn[E].links[M].portIn, a = t.ops[h].portsIn[E].links[M].portOut, n.link(n.getOpById(r), o, n.getOpById(s), a));
      for (var I in this.ops) this.ops[I].onLoaded && (this.ops[I].onLoaded(), this.ops[I].onLoaded = null);
      for (var I in this.ops) this.ops[I].init && (this.ops[I].init(), this.ops[I].init = null);
      if (this.config.variables) for (var A in this.config.variables) this.setVarValue(A, this.config.variables[A]);
      setTimeout(() =>{
        this.loading.finished(i)
      }, 100),
      this.config.onPatchLoaded && this.config.onPatchLoaded(),
      this.onLoadEnd && this.onLoadEnd()
    }
  },
  Et.prototype.profile = function (t) {
    for (var e in this.profiler = new vt, this.ops) this.ops[e].profile(t)
  },
  (Et.Variable = function (t, e) {
    this._name = t,
    this._changeListeners = [
    ],
    this.setValue(e)
  }).prototype.getValue = function () {
    return this._v
  },
  Et.Variable.prototype.getName = function () {
    return this._name
  },
  Et.Variable.prototype.setValue = function (t) {
    this._v = t;
    for (var e = 0; e < this._changeListeners.length; e++) this._changeListeners[e](t)
  },
  Et.Variable.prototype.addListener = function (t) {
    this._changeListeners.push(t)
  },
  Et.Variable.prototype.removeListener = function (t) {
    var e = this._changeListeners.indexOf(t);
    this._changeListeners.splice(e, 1)
  },
  Et.prototype.setVariable = function (t, e) {
    this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e)  : console.warn('variable ' + t + ' not found!')
  },
  Et.prototype.setVarValue = function (t, e) {
    return this._variables.hasOwnProperty(t) ? this._variables[t].setValue(e)  : (this._variables[t] = new Et.Variable(t, e), this.emitEvent('variablesChanged')),
    this._variables[t]
  },
  Et.prototype.getVarValue = function (t, e) {
    if (this._variables.hasOwnProperty(t)) return this._variables[t].getValue()
  },
  Et.prototype.getVar = function (t) {
    if (this._variables.hasOwnProperty(t)) return this._variables[t]
  },
  Et.prototype.getVars = function () {
    return this._variables
  },
  Et.prototype.getVars = function () {
    return this._variables
  },
  Et.prototype.exitError = function (t, e) {
    this && this.config && this.config.onError && (this.config.onError(t, e), this.aborted = !0)
  },
  Et.prototype.preRenderOps = function () {
    console.log('prerendering...');
    var t = null;
    CABLES.StopWatch && (t = new CABLES.StopWatch('prerendering'));
    for (var e = 0; e < this.ops.length; e++) this.ops[e].preRender && (this.ops[e].preRender(), console.log('prerender ' + this.ops[e].objName));
    t && t.stop('prerendering')
  },
  Et.prototype.dispose = function () {
    this.pause(),
    this.clear()
  };
  var Mt = Et;
  const At = {
    addPatch: function (t, e) {
      var i = t,
      n = v();
      if ('string' != typeof t || (n = t, i = document.getElementById(n))) {
        var r = document.createElement('canvas');
        return r.id = 'glcanvas_' + n,
        r.width = i.clientWidth,
        r.height = i.clientHeight,
        window.addEventListener('resize', function () {
          this.setAttribute('width', i.clientWidth),
          this.height = i.clientHeight
        }.bind(r)),
        i.appendChild(r),
        (e = e || {
        }).glCanvasId = r.id,
        e.onError || (e.onError = function (t) {
          console.log(t)
        }),
        CABLES.patch = new Mt(e),
        r
      }
      console.error(n + ' Polyshape Container Element not found!')
    }
  },
  xt = {
    LineDrawer: function (t, e) {
      this._num = 100000,
      this._counter = 0,
      this._positions = new Float32Array(3 * this._num),
      this._colors = new Float32Array(4 * this._num)
    },
    RectInstancer: function (t, e) {
      this._counter = 0,
      this._num = 100000,
      this._needsRebuild = !0,
      this._positions = new Float32Array(3 * this._num),
      this._colors = new Float32Array(4 * this._num),
      this._sizes = new Float32Array(2 * this._num),
      this._shader = new lt(t, 'rectinstancer'),
      this._shader.setSource(''.endl() + 'IN vec3 vPosition;'.endl() + 'IN vec3 instPos;'.endl() + 'IN vec4 instCol;'.endl() + 'IN vec2 instSize;'.endl() + 'OUT vec4 col;'.endl() + 'UNI float zoom,resX,resY,scrollX,scrollY;'.endl() + 'void main()'.endl() + '{'.endl() + '    vec3 pos=vPosition;'.endl() + '    pos.xy*=instSize;'.endl() + '    pos.x+=scrollX;'.endl() + '    pos.y+=scrollY;'.endl() + '    pos.x+=instPos.x;'.endl() + '    pos.y+=instPos.y;'.endl() + '    pos.y=0.0-pos.y;'.endl() + '    col=instCol;'.endl() + '    gl_Position = vec4(pos*(1.0/zoom),1.0);'.endl() + '}', 'IN vec4 col;void main(){outColor=vec4(col.rgb,1.0);}'),
      this._uniZoom = new Q(this._shader, 'f', 'zoom', 0),
      this._uniResX = new Q(this._shader, 'f', 'resX', 500),
      this._uniResY = new Q(this._shader, 'f', 'resY', 500),
      this._uniscrollX = new Q(this._shader, 'f', 'scrollX', 0),
      this._uniscrollY = new Q(this._shader, 'f', 'scrollY', 0),
      this._geom = new J('rectinstancer'),
      this._geom.vertices = new Float32Array([1,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      0,
      0,
      0]),
      this._geom.verticesIndices = new Float32Array([2,
      1,
      0,
      3,
      1,
      2]),
      this._mesh = new et(t, this._geom),
      this._mesh.numInstances = this._num;
      var i = 0;
      for (i = 0; i < 2 * this._num; i++) this._sizes[i] = 0;
      for (i = 0; i < 3 * this._num; i++) this._positions[i] = 0;
      for (i = 0; i < 4 * this._num; i++) this._colors[i] = 1
    }
  };
  xt.RectInstancer.prototype.dispose = function () {
  },
  xt.RectInstancer.prototype.render = function (t, e, i, n, r) {
    this._uniResX.set(t),
    this._uniResY.set(e),
    this._uniscrollX.set(i),
    this._uniscrollY.set(n),
    this._uniZoom.set(r),
    this._needsRebuild && this.rebuild(),
    this._mesh.render(this._shader)
  },
  xt.RectInstancer.prototype.rebuild = function () {
    this._mesh.addAttribute('instPos', this._positions, 3, {
      instanced: !0
    }),
    this._mesh.addAttribute('instCol', this._colors, 4, {
      instanced: !0
    }),
    this._mesh.addAttribute('instSize', this._sizes, 2, {
      instanced: !0
    }),
    this._needsRebuild = !1
  },
  xt.RectInstancer.prototype.getIndex = function () {
    return this._counter++,
    this._counter
  },
  xt.RectInstancer.prototype.setPosition = function (t, e, i) {
    this._positions[3 * t + 0] = e,
    this._positions[3 * t + 1] = i,
    this._needsRebuild = !0
  },
  xt.RectInstancer.prototype.setSize = function (t, e, i) {
    this._sizes[2 * t + 0] = e,
    this._sizes[2 * t + 1] = i,
    this._needsRebuild = !0
  },
  xt.RectInstancer.prototype.setColor = function (t, e, i, n) {
    this._colors[4 * t + 0] = e,
    this._colors[4 * t + 1] = i,
    this._colors[4 * t + 2] = n,
    this._colors[4 * t + 3] = 1,
    this._needsRebuild = !0
  },
  xt.GlRect = function (t, e) {
    e = e || {
    },
    this._rectInstancer = t,
    this._attrIndex = t.getIndex(),
    this._parent = e.parent || null,
    this.childs = [
    ]
  },
  xt.GlRect.prototype.addChild = function (t) {
    this.childs.push(t)
  },
  xt.GlRect.prototype.setSize = function (t, e) {
    this._rectInstancer.setSize(this._attrIndex, t, e)
  },
  xt.GlRect.prototype.setColor = function (t, e, i) {
    this._rectInstancer.setColor(this._attrIndex, t, e, i)
  },
  xt.GlRect.prototype.setPosition = function (t, e) {
    this.x = t,
    this.y = e;
    var i = this.x,
    n = this.y;
    this._parent && (i += this._parent.x, n += this._parent.y),
    this._rectInstancer.setPosition(this._attrIndex, i, n);
    for (var r = 0; r < this.childs.length; r++) this.childs[r].setPosition(this.childs[r].x, this.childs[r].y)
  },
  xt.OP_MIN_WIDTH = 100,
  xt.GlOp = function (t, e) {
    this._op = e,
    this._instancer = t,
    this._glRectBg = new xt.GlRect(t),
    this._glRectBg.setSize(100, 30),
    this._glRectBg.setColor(0.1, 0.1, 0.1),
    this._portRects = [
    ],
    this.updatePosition();
    for (var i = 0; i < this._op.portsIn.length; i++) this._setupPort(i, this._op.portsIn[i]);
    for (i = 0; i < this._op.portsOut.length; i++) this._setupPort(i, this._op.portsOut[i]);
    const n = 10 * Math.max(this._op.portsIn.length, this._op.portsOut.length);
    this._glRectBg.setSize(Math.max(xt.OP_MIN_WIDTH, n), 30)
  },
  xt.GlOp.prototype.dispose = function () {
    this._glRectBg && (this._glRectBg.setSize(0, 0), this._glRectBg.setPosition(0, 0));
    for (var t = 0; t < this._portRects.length; t++) this._portRects[t].setSize(0, 0),
    this._portRects[t].setPosition(0, 0);
    this._op = null,
    this._portRects.length = 0,
    this._glRectBg = null,
    this._instancer = null
  },
  xt.GlOp.prototype._setupPort = function (t, e) {
    var i = new xt.GlRect(this._instancer, {
      parent: this._glRectBg
    });
    i.setSize(7, 5),
    e.type == F.OP.OP_PORT_TYPE_VALUE ? i.setColor(0, 1, 0.7)  : e.type == F.OP.OP_PORT_TYPE_FUNCTION ? i.setColor(1, 1, 0)  : e.type == F.OP.OP_PORT_TYPE_OBJECT ? i.setColor(1, 0, 1)  : e.type == F.OP.OP_PORT_TYPE_ARRAY ? i.setColor(0, 0.3, 1)  : e.type == F.OP.OP_PORT_TYPE_STRING ? i.setColor(1, 0.3, 0)  : e.type == F.OP.OP_PORT_TYPE_DYNAMIC && i.setColor(1, 1, 1);
    var n = 0;
    1 == e.direction && (n = 25),
    i.setPosition(10 * t, n),
    this._glRectBg.addChild(i),
    this._portRects.push(i)
  },
  xt.GlOp.prototype.updatePosition = function () {
    this._glRectBg ? this._glRectBg.setPosition(this._op.uiAttribs.translate.x, this._op.uiAttribs.translate.y)  : console.log('no this._glRectBg')
  },
  xt.GlOp.prototype.getOp = function () {
    return this._op
  },
  xt.GlOp.prototype.update = function () {
    this.updatePosition()
  },
  xt.GlPatch = function (t) {
    this._patch = t,
    this._glOps = [
    ],
    this._rectInstancer = new xt.RectInstancer(this._patch.cgl),
    this._rectInstancer.rebuild(),
    t.addEventListener('onOpAdd', this.addOp.bind(this)),
    t.addEventListener('onOpDelete', this.deleteOp.bind(this))
  },
  xt.GlPatch.prototype.getOpAt = function (t, e) {
  },
  xt.GlPatch.prototype.deleteOp = function (t) {
    for (var e = 0; e < this._glOps.length; e++) if (this._glOps[e].getOp() == t) {
      var i = this._glOps[e];
      return this._glOps[e].getOp().removeEventListener('onUiAttribsChange', this._glOps[e].update),
      this._glOps.slice(e, 1),
      void i.dispose()
    }
  },
  xt.GlPatch.prototype.addOp = function (t) {
    console.log('OP ADDEDDDDDD');
    const e = new xt.GlOp(this._rectInstancer, t);
    this._glOps.push(e),
    t.addEventListener('onUiAttribsChange', e.update.bind(e))
  },
  xt.GlPatch.prototype.render = function (t, e, i, n, r) {
    this._rectInstancer.render(t, e, i, n, r)
  },
  xt.GlPatch.prototype.dispose = function () {
    for (; this._glOps.length > 0; ) this._glOps[0].dispose(),
    this._glOps.splice(0, 1);
    this._rectInstancer && this._rectInstancer.dispose()
  },
  xt.GlPatch.prototype.reset = function () {
    if (this._rectInstancer = new xt.RectInstancer(this._patch.cgl), this._rectInstancer.rebuild(), this.dispose(), 0 == this._glOps.length) for (var t = 0; t < this._patch.ops.length; t++) this.addOp(this._patch.ops[t]);
    for (t = 0; t < this._glOps.length; t++) this._glOps[t].updatePosition();
    this._rectInstancer.rebuild()
  };
  const Ot = {
    toneJsInitialized: !1,
    createAudioContext: function (t) {
      if (window.AudioContext = window.AudioContext || window.webkitAudioContext, window.AudioContext) return window.audioContext || (window.audioContext = new AudioContext),
      window.Tone && !Ot.toneJsInitialized && (Tone.setContext(window.audioContext), Ot.toneJsInitialized = !0),
      window.audioContext;
      t.patch.config.onError('NO_WEBAUDIO', 'Web Audio is not supported in this browser.')
    },
    getAudioContext: function () {
      return window.audioContext
    },
    createAudioInPort: function (t, e, i, n) {
      if (!t || !e || !i) {
        var r = 'ERROR: createAudioInPort needs three parameters, op, portName and audioNode';
        throw t.log(r),
        new Error(r)
      }
      n || (n = 0),
      t.webAudio = t.webAudio || {
      },
      t.webAudio.audioInPorts = t.webAudio.audioInPorts || [
      ];
      var s = t.inObject(e);
      return s.webAudio = {
      },
      s.webAudio.previousAudioInNode = null,
      s.webAudio.audioNode = i,
      t.webAudio.audioInPorts[e] = s,
      s.onChange = function () {
        var e = s.get();
        if (e) try {
          e.connect(s.webAudio.audioNode, 0, n)
        } catch (i) {
          throw t.log('Error: Failed to connect web audio node!', i),
          t.log('port.webAudio.audioNode', s.webAudio.audioNode),
          t.log('audioInNode: ', e),
          t.log('inputChannelIndex:', n),
          t.log('audioInNode.connect: ', e.connect),
          i
        } else if (s.webAudio.previousAudioInNode) try {
          s.webAudio.previousAudioInNode.disconnect(s.webAudio.audioNode, 0, n)
        } catch (e) {
          try {
            s.webAudio.previousAudioInNode.disconnect(s.webAudio.audioNode)
          } catch (e) {
            throw t.log('Disconnecting audio node with in/out port index, as well as without in/out-port-index did not work ', e),
            e.printStackTrace && e.printStackTrace(),
            e
          }
        }
        s.webAudio.previousAudioInNode = e
      },
      s
    },
    replaceNodeInPort: function (t, e, i) {
      var n = t.webAudio.previousAudioInNode;
      if (n && n.disconnect) {
        try {
          n.disconnect(e)
        } catch (t) {
          throw t.printStackTrace && t.printStackTrace(),
          new Error('replaceNodeInPort: Could not disconnect old audio node. ' + t.name + ' ' + t.message)
        }
        t.webAudio.audioNode = i;
        try {
          n.connect(i)
        } catch (t) {
          throw t.printStackTrace && t.printStackTrace(),
          new Error('replaceNodeInPort: Could not connect to new node. ' + t.name + ' ' + t.message)
        }
      }
    },
    createAudioOutPort: function (t, e, i) {
      if (!t || !e || !i) {
        var n = 'ERROR: createAudioOutPort needs three parameters, op, portName and audioNode';
        throw t.log(n),
        new Error(n)
      }
      var r = t.outObject(e);
      return r.set(i),
      r
    },
    createAudioParamInPort: function (t, e, i, n, r) {
      if (!t || !e || !i) return t.log('ERROR: createAudioParamInPort needs three parameters, op, portName and audioNode'),
      t && t.name && t.log('opname: ', t.name),
      t.log('portName', e),
      void t.log('audioNode: ', i);
      t.webAudio = t.webAudio || {
      },
      t.webAudio.audioInPorts = t.webAudio.audioInPorts || [
      ];
      var s = t.inDynamic(e, [
        F.OP.OP_PORT_TYPE_VALUE,
        F.OP.OP_PORT_TYPE_OBJECT
      ], n, r);
      return s.webAudio = {
      },
      s.webAudio.previousAudioInNode = null,
      s.webAudio.audioNode = i,
      t.webAudio.audioInPorts[e] = s,
      s.onChange = function () {
        var e = s.get(),
        i = s.webAudio.audioNode,
        n = Ot.getAudioContext();
        if (null != e) if ('object' == typeof e && e.connect) {
          try {
            e.connect(i)
          } catch (e) {
            throw t.log('Could not connect audio node: ', e),
            e.printStackTrace && e.printStackTrace(),
            e
          }
          s.webAudio.previousAudioInNode = e
        } else {
          if (i._param && i._param.minValue && i._param.maxValue) if (e >= i._param.minValue && e <= i._param.maxValue) try {
            i.setValueAtTime ? i.setValueAtTime(e, n.currentTime)  : i.value = e
          } catch (e) {
            throw t.log('Possible AudioParam problem with tone.js op: ', e),
            e.printStackTrace && e.printStackTrace(),
            e
          } else t.log('Warning: The value for an audio parameter is out of range!');
           else if (i.minValue && i.maxValue) if (e >= i.minValue && e <= i.maxValue) try {
            i.setValueAtTime ? i.setValueAtTime(e, n.currentTime)  : i.value = e
          } catch (e) {
            throw t.log('AudioParam has minValue / maxValue defined, and value is in range, but setting the value failed! ', e),
            e.printStackTrace && e.printStackTrace(),
            e
          } else t.log('Warning: The value for an audio parameter is out of range!');
           else try {
            i.setValueAtTime ? i.setValueAtTime(e, n.currentTime)  : i.value = e
          } catch (e) {
            throw t.log('Possible AudioParam problem (without minValue / maxValue): ', e),
            e.printStackTrace && e.printStackTrace(),
            e
          }
          if (s.webAudio.previousAudioInNode && s.webAudio.previousAudioInNode.disconnect) {
            try {
              s.webAudio.previousAudioInNode.disconnect(i)
            } catch (e) {
              throw t.log('Could not disconnect previous audio node: ', e),
              e
            }
            s.webAudio.previousAudioInNode = void 0
          }
        } else s.webAudio.previousAudioInNode
      },
      s
    },
    loadAudioFile: function (t, e, i, n) {
      var r = Ot.createAudioContext(),
      s = t.loading.start('audio', e);
      CABLES.UI && gui.jobs().start({
        id: 'loadaudio' + s,
        title: ' loading audio (' + e + ')'
      });
      var o = new XMLHttpRequest;
      e && (o.open('GET', e, !0), o.responseType = 'arraybuffer', o.onload = function () {
        t.loading.finished(s),
        CABLES.UI && gui.jobs().finish('loadaudio' + s),
        r.decodeAudioData(o.response, i, n)
      }, o.send())
    },
    isValidToneTime: function (t) {
      try {
        new Tone.Time(t)
      } catch (t) {
        return !1
      }
      return !0
    },
    isValidToneNote: function (t) {
      try {
        Tone.Frequency(t)
      } catch (t) {
        return !1
      }
      return !0
    }
  },
  Tt = function () {
    var t = CABLES.UI.userSettings.get('pacoRenderer') || !1;
    CABLES.UI.userSettings.set('pacoRenderer', !t),
    document.location.reload()
  },
  St = function () {
  },
  yt = function (t, e, i) {
    this._patch = t,
    this.connector = i || new Rt,
    this.connector.receive(this)
  };
  yt.prototype._receive = function (t) {
    var e;
    if ((e = t.event ? t : JSON.parse(t.data)).event == F.PACO.PACO_OP_CREATE) console.log('op create: data.vars.objName'),
    (o = this._patch.addOp(e.vars.objName)).id = e.vars.opId;
     else if (e.event == F.PACO.PACO_LOAD) console.log('load patch.....'),
    this._patch.clear(),
    this._patch.deSerialize(e.vars.patch);
     else if (e.event == F.PACO.PACO_CLEAR) this._patch.clear(),
    console.log('clear');
     else if (e.event == F.PACO.PACO_OP_DELETE) console.log('op delete'),
    this._patch.deleteOp(e.vars.op, !0);
     else if (e.event == F.PACO.PACO_OP_ENABLE) (o = this._patch.getOpById(e.vars.op)) && (o.enabled = !0);
     else if (e.event == F.PACO.PACO_OP_DISABLE) (o = this._patch.getOpById(e.vars.op)) && (o.enabled = !1);
     else if (e.event == F.PACO.PACO_UNLINK) {
      var i = this._patch.getOpById(e.vars.op1),
      n = this._patch.getOpById(e.vars.op2),
      r = i.getPort(e.vars.port1),
      s = n.getPort(e.vars.port2);
      r.removeLinkTo(s)
    } else if (e.event == F.PACO.PACO_LINK) i = this._patch.getOpById(e.vars.op1),
    n = this._patch.getOpById(e.vars.op2),
    this._patch.link(i, e.vars.port1, n, e.vars.port2);
     else if (e.event == F.PACO.PACO_VALUECHANGE) {
      var o;
      (o = this._patch.getOpById(e.vars.op)).getPort(e.vars.port).set(e.vars.v)
    } else console.log('unknown patchConnectionEvent!', t)
  };
  const Pt = function (t, e) {
    this.connectors = [
    ],
    this.connectors.push(new Rt)
  };
  Pt.prototype.send = function (t, e) {
    for (var i = 0; i < this.connectors.length; i++) this.connectors[i].send(t, e)
  };
  const Rt = function () {
    window.BroadcastChannel && (this.bc = new BroadcastChannel('test_channel'))
  };
  Rt.prototype.receive = function (t) {
    this.bc && (console.log('init'), this.bc.onmessage = t._receive.bind(t))
  },
  Rt.prototype.send = function (t, e) {
    if (this.bc) {
      var i = {
      };
      i.event = t,
      i.vars = e,
      this.bc.postMessage(JSON.stringify(i))
    }
  };
  const Ft = Object.assign({
    EventTarget: g,
    EMBED: At,
    Link: z,
    Port: C,
    Op: H,
    Profiler: vt,
    Requirements: It,
    Patch: Mt,
    GLGUI: xt,
    Instancing: bt,
    Timer: at,
    WEBAUDIO: Ot,
    Variable: function () {
      var t = null,
      e = [
      ];
      this.onChanged = function (t) {
        e.push(t)
      },
      this.getValue = function () {
        return t
      },
      this.setValue = function (e) {
        t = e,
        i()
      };
      var i = function () {
        for (var t = 0; t < e.length; t++) e[t]()
      }
    },
    LoadingStatus: mt,
    now: ot,
    internalNow: st
  }, r, s, o, a, F.PORT, F.PACO, F.ANIM, F.OP);
  e.default = Ft
}
]).default).exportedPatch = {
  settings: {
    opExample: [
    ],
    licence: 'none',
    isPublic: !1
  },
  ops: [
    {
      opId: 'b0472a1d-db16-4ba6-8787-f300fbdc77bb',
      objName: 'Ops.Gl.MainLoop',
      id: '6df7edd1-85c9-47e4-979b-57ab5f8041a8',
      uiAttribs: {
        translate: {
          x: 0,
          y: - 220
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'FPS Limit',
          value: 0
        },
        {
          name: 'Reduce FPS loading',
          value: !1
        },
        {
          name: 'Clear',
          value: !0
        },
        {
          name: 'ClearAlpha',
          value: !0
        },
        {
          name: 'Fullscreen Button',
          value: !1
        },
        {
          name: 'Active',
          value: !0
        },
        {
          name: 'Hires Displays',
          value: !1
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        },
        {
          name: 'width',
          value: 655
        },
        {
          name: 'height',
          value: 340
        }
      ]
    },
    {
      opId: '4db917cc-2cef-43f4-83d5-38c4572fe943',
      objName: 'Ops.Gl.Meshes.Circle',
      id: '8a652fe7-dc05-42f8-a957-d911260f8b05',
      uiAttribs: {
        translate: {
          x: 144,
          y: 460
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'render',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '8a652fe7-dc05-42f8-a957-d911260f8b05',
              objOut: 'a7bde3ed-89b7-46ef-83e6-ddda815c3412'
            }
          ]
        },
        {
          name: 'radius',
          value: 0.5
        },
        {
          name: 'innerRadius',
          value: 0.941
        },
        {
          name: 'segments',
          value: 40
        },
        {
          name: 'percent',
          value: 1
        },
        {
          name: 'steps',
          value: 0
        },
        {
          name: 'invertSteps',
          value: !1
        },
        {
          name: 'mapping',
          value: 'flat'
        },
        {
          name: 'Spline',
          value: !1
        },
        {
          name: 'Draw',
          value: !0
        }
      ],
      portsOut: [
        {
          name: 'trigger',
          value: 0
        },
        {
          name: 'geometry'
        }
      ]
    },
    {
      opId: '51f2207b-daaa-447f-bdbe-87fdd72f0c40',
      objName: 'Ops.Gl.Shader.BasicMaterial_v2',
      id: 'b751f31d-220f-4ccd-b86b-dbbf058cd9d8',
      uiAttribs: {
        translate: {
          x: 144,
          y: 320
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'render',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: 'b751f31d-220f-4ccd-b86b-dbbf058cd9d8',
              objOut: '29bc0113-11a4-4edf-9ff2-ab9c1fe6f128'
            }
          ]
        },
        {
          name: 'r',
          value: 0.6078431372549019
        },
        {
          name: 'g',
          value: 0.5524102902879902
        },
        {
          name: 'b',
          value: 0.26666666666666666
        },
        {
          name: 'a',
          value: 1
        },
        {
          name: 'texture',
          value: 0
        },
        {
          name: 'colorizeTexture',
          value: !1
        },
        {
          name: 'textureOpacity',
          value: 0
        },
        {
          name: 'Alpha Mask Source',
          value: 'Luminance'
        },
        {
          name: 'Opacity TexCoords Transform',
          value: !1
        },
        {
          name: 'Discard Transparent Pixels',
          value: !1
        },
        {
          name: 'diffuseRepeatX',
          value: 1
        },
        {
          name: 'diffuseRepeatY',
          value: 1
        },
        {
          name: 'Tex Offset X',
          value: 0
        },
        {
          name: 'Tex Offset Y',
          value: 0
        },
        {
          name: 'billboard',
          value: !1
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        },
        {
          name: 'shader'
        }
      ]
    },
    {
      opId: 'ca3bc984-e596-48fb-b53d-502eb13979b0',
      objName: 'Ops.Gl.RandomCluster',
      id: '29bc0113-11a4-4edf-9ff2-ab9c1fe6f128',
      uiAttribs: {
        translate: {
          x: 144,
          y: 240
        },
        subPatch: 0,
        notWorkingMsg: 'this op can not do anything without at least connecting those ports: EXE',
        working: !1
      },
      portsIn: [
        {
          name: 'exe',
          value: null
        },
        {
          name: 'num',
          value: 100
        },
        {
          name: 'random seed',
          value: 1
        },
        {
          name: 'round',
          value: !1
        },
        {
          name: 'size',
          value: 8
        },
        {
          name: 'scaleX',
          value: 1
        },
        {
          name: 'scaleY',
          value: 1
        },
        {
          name: 'scaleZ',
          value: 1
        },
        {
          name: 'Rotate X',
          value: 1
        },
        {
          name: 'Rotate Y',
          value: 1
        },
        {
          name: 'Rotate Z',
          value: 1
        },
        {
          name: 'Scroll X',
          value: 0
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        },
        {
          name: 'index',
          value: 99
        },
        {
          name: 'rnd',
          value: 0.9004586762688614
        }
      ]
    },
    {
      opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
      objName: 'Ops.Gl.Matrix.Transform',
      id: '2af3a58c-29d8-40cf-85c1-4cff33583b7b',
      uiAttribs: {
        translate: {
          x: 0,
          y: 140
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'render',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '2af3a58c-29d8-40cf-85c1-4cff33583b7b',
              objOut: '6df7edd1-85c9-47e4-979b-57ab5f8041a8'
            }
          ]
        },
        {
          name: 'posX',
          value: 0.94
        },
        {
          name: 'posY',
          value: 0.42
        },
        {
          name: 'posZ',
          value: 0
        },
        {
          name: 'scale',
          value: 1
        },
        {
          name: 'rotX',
          links: [
            {
              portIn: 'rotX',
              portOut: 'Time',
              objIn: '2af3a58c-29d8-40cf-85c1-4cff33583b7b',
              objOut: '00e78d5a-6bb9-4bf3-9688-2af4cb93dd60'
            }
          ]
        },
        {
          name: 'rotY',
          links: [
            {
              portIn: 'rotY',
              portOut: 'Time',
              objIn: '2af3a58c-29d8-40cf-85c1-4cff33583b7b',
              objOut: '00e78d5a-6bb9-4bf3-9688-2af4cb93dd60'
            }
          ]
        },
        {
          name: 'rotZ',
          value: 0
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        }
      ]
    },
    {
      opId: 'aac7f721-208f-411a-adb3-79adae2e471a',
      objName: 'Ops.Anim.Timer_v2',
      id: '00e78d5a-6bb9-4bf3-9688-2af4cb93dd60',
      uiAttribs: {
        translate: {
          x: 204,
          y: 20
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'Play',
          value: !0
        },
        {
          name: 'Reset',
          value: 0
        },
        {
          name: 'Speed',
          value: 1
        }
      ],
      portsOut: [
        {
          name: 'Time'
        }
      ]
    },
    {
      opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
      objName: 'Ops.Gl.Matrix.Transform',
      id: 'a7bde3ed-89b7-46ef-83e6-ddda815c3412',
      uiAttribs: {
        translate: {
          x: 144,
          y: 400
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'render',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: 'a7bde3ed-89b7-46ef-83e6-ddda815c3412',
              objOut: 'b751f31d-220f-4ccd-b86b-dbbf058cd9d8'
            }
          ]
        },
        {
          name: 'posX',
          value: 0
        },
        {
          name: 'posY',
          value: 0
        },
        {
          name: 'posZ',
          value: 0
        },
        {
          name: 'scale',
          value: 1
        },
        {
          name: 'rotX',
          links: [
            {
              portIn: 'rotX',
              portOut: 'Time',
              objIn: 'a7bde3ed-89b7-46ef-83e6-ddda815c3412',
              objOut: 'a9110ed0-eef0-4f1f-9cfd-a1fccb006132'
            }
          ]
        },
        {
          name: 'rotY',
          value: 0
        },
        {
          name: 'rotZ',
          links: [
            {
              portIn: 'rotZ',
              portOut: 'Time',
              objIn: 'a7bde3ed-89b7-46ef-83e6-ddda815c3412',
              objOut: 'a9110ed0-eef0-4f1f-9cfd-a1fccb006132'
            }
          ]
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        }
      ]
    },
    {
      opId: 'aac7f721-208f-411a-adb3-79adae2e471a',
      objName: 'Ops.Anim.Timer_v2',
      id: 'a9110ed0-eef0-4f1f-9cfd-a1fccb006132',
      uiAttribs: {
        translate: {
          x: 384,
          y: 320
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'Play',
          value: !0
        },
        {
          name: 'Reset',
          value: 0
        },
        {
          name: 'Speed',
          value: 10
        }
      ],
      portsOut: [
        {
          name: 'Time'
        }
      ]
    },
    {
      opId: '650baeb1-db2d-4781-9af6-ab4e9d4277be',
      objName: 'Ops.Gl.Matrix.Transform',
      id: 'd6e3dab7-39f2-49c7-b3f2-428b8a3b0c44',
      uiAttribs: {
        translate: {
          x: - 180,
          y: 520
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'render',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: 'd6e3dab7-39f2-49c7-b3f2-428b8a3b0c44',
              objOut: '98d21bd1-c6cc-4a55-a169-df969cd22668'
            }
          ]
        },
        {
          name: 'posX',
          links: [
            {
              portIn: 'posX',
              portOut: 'value',
              objIn: 'd6e3dab7-39f2-49c7-b3f2-428b8a3b0c44',
              objOut: 'eef5764f-cc6d-4fcc-940c-1c5eec797483'
            }
          ]
        },
        {
          name: 'posY',
          links: [
            {
              portIn: 'posY',
              portOut: 'value',
              objIn: 'd6e3dab7-39f2-49c7-b3f2-428b8a3b0c44',
              objOut: 'eef5764f-cc6d-4fcc-940c-1c5eec797483'
            }
          ]
        },
        {
          name: 'posZ',
          links: [
            {
              portIn: 'posZ',
              portOut: 'value',
              objIn: 'd6e3dab7-39f2-49c7-b3f2-428b8a3b0c44',
              objOut: 'eef5764f-cc6d-4fcc-940c-1c5eec797483'
            }
          ]
        },
        {
          name: 'scale',
          value: 1
        },
        {
          name: 'rotX',
          value: 0
        },
        {
          name: 'rotY',
          value: 0
        },
        {
          name: 'rotZ',
          value: 0
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        }
      ]
    },
    {
      opId: 'ff0535e2-603a-4c07-9ce6-e9e0db857dfe',
      objName: 'Ops.Gl.Meshes.Cube',
      id: '4b656f5e-e05b-4f54-a930-46498de66e70',
      uiAttribs: {
        translate: {
          x: - 180,
          y: 580
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'render',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '4b656f5e-e05b-4f54-a930-46498de66e70',
              objOut: 'd6e3dab7-39f2-49c7-b3f2-428b8a3b0c44'
            }
          ]
        },
        {
          name: 'width',
          links: [
            {
              portIn: 'width',
              portOut: 'average volume',
              objIn: '4b656f5e-e05b-4f54-a930-46498de66e70',
              objOut: '5d6585c4-9c97-4ce4-aaa6-ea29c29a2d47'
            }
          ]
        },
        {
          name: 'height',
          value: 0.5
        },
        {
          name: 'length',
          value: 0.5
        },
        {
          name: 'center',
          value: !0
        },
        {
          name: 'Active',
          value: !0
        }
      ],
      portsOut: [
        {
          name: 'trigger',
          value: 0
        },
        {
          name: 'geometry'
        }
      ]
    },
    {
      opId: 'ca3bc984-e596-48fb-b53d-502eb13979b0',
      objName: 'Ops.Gl.RandomCluster',
      id: '2e04d100-ed76-4d2a-8425-3813e61c4ea0',
      uiAttribs: {
        translate: {
          x: - 180,
          y: 240
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'exe',
          links: [
            {
              portIn: 'exe',
              portOut: 'trigger',
              objIn: '2e04d100-ed76-4d2a-8425-3813e61c4ea0',
              objOut: '2af3a58c-29d8-40cf-85c1-4cff33583b7b'
            }
          ]
        },
        {
          name: 'num',
          value: 100
        },
        {
          name: 'random seed',
          value: 1
        },
        {
          name: 'round',
          value: !1
        },
        {
          name: 'size',
          value: 10
        },
        {
          name: 'scaleX',
          value: 1
        },
        {
          name: 'scaleY',
          value: 1
        },
        {
          name: 'scaleZ',
          value: 1
        },
        {
          name: 'Rotate X',
          value: 1
        },
        {
          name: 'Rotate Y',
          value: 1
        },
        {
          name: 'Rotate Z',
          value: 1
        },
        {
          name: 'Scroll X',
          value: 0
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        },
        {
          name: 'index',
          value: 99
        },
        {
          name: 'rnd',
          value: 0.9004586762688614
        }
      ]
    },
    {
      opId: '51f2207b-daaa-447f-bdbe-87fdd72f0c40',
      objName: 'Ops.Gl.Shader.BasicMaterial_v2',
      id: '98d21bd1-c6cc-4a55-a169-df969cd22668',
      uiAttribs: {
        translate: {
          x: - 180,
          y: 300
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'render',
          links: [
            {
              portIn: 'render',
              portOut: 'trigger',
              objIn: '98d21bd1-c6cc-4a55-a169-df969cd22668',
              objOut: '2e04d100-ed76-4d2a-8425-3813e61c4ea0'
            }
          ]
        },
        {
          name: 'r',
          value: 0.5487781796042397
        },
        {
          name: 'g',
          links: [
            {
              portIn: 'g',
              portOut: 'average volume',
              objIn: '98d21bd1-c6cc-4a55-a169-df969cd22668',
              objOut: '5d6585c4-9c97-4ce4-aaa6-ea29c29a2d47'
            }
          ]
        },
        {
          name: 'b',
          value: 0.996337890625
        },
        {
          name: 'a',
          value: 1
        },
        {
          name: 'texture',
          value: 0
        },
        {
          name: 'colorizeTexture',
          value: !1
        },
        {
          name: 'textureOpacity',
          value: 0
        },
        {
          name: 'Alpha Mask Source',
          value: 'Luminance'
        },
        {
          name: 'Opacity TexCoords Transform',
          value: !1
        },
        {
          name: 'Discard Transparent Pixels',
          value: !1
        },
        {
          name: 'diffuseRepeatX',
          value: 1
        },
        {
          name: 'diffuseRepeatY',
          value: 1
        },
        {
          name: 'Tex Offset X',
          value: 0
        },
        {
          name: 'Tex Offset Y',
          value: 0
        },
        {
          name: 'billboard',
          value: !1
        }
      ],
      portsOut: [
        {
          name: 'trigger'
        },
        {
          name: 'shader'
        }
      ]
    },
    {
      opId: '2d2e5f0e-b69f-4789-9a48-1ee6ade5049a',
      objName: 'Ops.Anim.RandomAnim',
      id: '1f6f2e2b-f173-413c-8478-1f7a1a79f52d',
      uiAttribs: {
        translate: {
          x: - 420,
          y: 180
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'exe',
          links: [
            {
              portIn: 'exe',
              portOut: 'trigger',
              objIn: '1f6f2e2b-f173-413c-8478-1f7a1a79f52d',
              objOut: '6df7edd1-85c9-47e4-979b-57ab5f8041a8'
            }
          ]
        },
        {
          name: 'min',
          value: 0
        },
        {
          name: 'max',
          value: 1
        },
        {
          name: 'random seed',
          value: 0
        },
        {
          name: 'duration',
          value: 0.5
        },
        {
          name: 'pause between',
          value: 0
        },
        {
          name: 'easing',
          value: 'Elastic Out'
        }
      ],
      portsOut: [
        {
          name: 'Next',
          value: 0
        },
        {
          name: 'result',
          value: 0.9054754136810815
        },
        {
          name: 'Looped',
          value: 0
        }
      ]
    },
    {
      opId: 'c7e5e545-c8a1-4fef-85c2-45422b947f0d',
      objName: 'Ops.Devices.Mouse.MouseButtons',
      id: 'ca3f2b40-35cf-43a5-bb09-29d455af701d',
      uiAttribs: {
        translate: {
          x: - 468,
          y: 360
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'Area',
          value: 'Canvas'
        },
        {
          name: 'Active',
          value: !0
        }
      ],
      portsOut: [
        {
          name: 'Click Left',
          value: 0
        },
        {
          name: 'Click Right',
          value: 0
        },
        {
          name: 'Double Click',
          value: 0
        },
        {
          name: 'Button pressed Left'
        },
        {
          name: 'Button pressed Middle',
          value: !1
        },
        {
          name: 'Button pressed Right',
          value: !1
        },
        {
          name: 'Mouse Down Left',
          value: 0
        },
        {
          name: 'Mouse Down Middle',
          value: 0
        },
        {
          name: 'Mouse Down Right',
          value: 0
        },
        {
          name: 'Mouse Up Left',
          value: 0
        },
        {
          name: 'Mouse Up Middle',
          value: 0
        },
        {
          name: 'Mouse Up Right',
          value: 0
        }
      ]
    },
    {
      opId: '06ad9d35-ccf5-4d31-889c-e23fa062588a',
      objName: 'Ops.Anim.BoolAnim',
      id: 'eef5764f-cc6d-4fcc-940c-1c5eec797483',
      uiAttribs: {
        translate: {
          x: - 96,
          y: 440
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'exe',
          links: [
            {
              portIn: 'exe',
              portOut: 'trigger',
              objIn: 'eef5764f-cc6d-4fcc-940c-1c5eec797483',
              objOut: '6df7edd1-85c9-47e4-979b-57ab5f8041a8'
            }
          ]
        },
        {
          name: 'bool',
          links: [
            {
              portIn: 'bool',
              portOut: 'Button pressed Left',
              objIn: 'eef5764f-cc6d-4fcc-940c-1c5eec797483',
              objOut: 'ca3f2b40-35cf-43a5-bb09-29d455af701d'
            }
          ]
        },
        {
          name: 'easing',
          value: 'linear'
        },
        {
          name: 'duration',
          value: 0.5
        },
        {
          name: 'Direction',
          value: 'Both'
        },
        {
          name: 'value false',
          value: 0
        },
        {
          name: 'value true',
          value: 10
        }
      ],
      portsOut: [
        {
          name: 'trigger',
          value: 0
        },
        {
          name: 'value'
        },
        {
          name: 'finished',
          value: !0
        },
        {
          name: 'Finished Trigger',
          value: 0
        }
      ]
    },
    {
      opId: '32e53fa2-4545-4c53-a94d-2204aa079246',
      objName: 'Ops.Patch.PlayButton',
      id: 'f225fa59-832f-4ecc-8f42-5fb4afca9d4a',
      uiAttribs: {
        translate: {
          x: - 732,
          y: - 360
        },
        subPatch: 0,
        working: !1,
        notWorkingMsg: 'this op can not do anything without at least connecting those ports: TRIGGER'
      },
      portsIn: [
        {
          name: 'Trigger',
          value: 0
        },
        {
          name: 'Only if Audio Suspended',
          value: !1
        },
        {
          name: 'Reset',
          value: 0
        }
      ],
      portsOut: [
        {
          name: 'Next',
          value: 0
        },
        {
          name: 'Audiocontext State',
          value: ''
        },
        {
          name: 'Clicked'
        }
      ]
    },
    {
      opId: '53fdbf4a-bc8d-4c5d-a698-f34fdeb53827',
      objName: 'Ops.WebAudio.Output',
      id: 'f6e026a7-e528-40d5-b825-9c258b52263e',
      uiAttribs: {
        translate: {
          x: - 720,
          y: 60
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'Audio In',
          links: [
            {
              portIn: 'Audio In',
              portOut: 'Audio Out',
              objIn: 'f6e026a7-e528-40d5-b825-9c258b52263e',
              objOut: 'e3d0b7df-c185-4a0c-91e5-70a65d85d5d2'
            }
          ]
        },
        {
          name: 'Volume',
          value: 1
        },
        {
          name: 'Mute',
          value: !1
        }
      ],
      portsOut: [
      ]
    },
    {
      opId: '22523fae-a623-401d-b952-a57c26de4b4e',
      objName: 'Ops.WebAudio.AudioAnalyzer',
      id: '5d6585c4-9c97-4ce4-aaa6-ea29c29a2d47',
      uiAttribs: {
        translate: {
          x: - 636,
          y: 60
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'FFT size',
          value: 256
        },
        {
          name: 'refresh',
          links: [
            {
              portIn: 'refresh',
              portOut: 'trigger',
              objIn: '5d6585c4-9c97-4ce4-aaa6-ea29c29a2d47',
              objOut: '6df7edd1-85c9-47e4-979b-57ab5f8041a8'
            }
          ]
        },
        {
          name: 'Audio In',
          links: [
            {
              portIn: 'Audio In',
              portOut: 'Audio Out',
              objIn: '5d6585c4-9c97-4ce4-aaa6-ea29c29a2d47',
              objOut: 'e3d0b7df-c185-4a0c-91e5-70a65d85d5d2'
            }
          ]
        },
        {
          name: 'Data',
          value: 'Frequency'
        }
      ],
      portsOut: [
        {
          name: 'Next',
          value: 0
        },
        {
          name: 'Audio Out'
        },
        {
          name: 'average volume'
        },
        {
          name: 'fft',
          value: {
            0: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0,
            10: 0,
            11: 0,
            12: 0,
            13: 0,
            14: 0,
            15: 0,
            16: 0,
            17: 0,
            18: 0,
            19: 0,
            20: 0,
            21: 0,
            22: 0,
            23: 0,
            24: 0,
            25: 0,
            26: 0,
            27: 0,
            28: 0,
            29: 0,
            30: 0,
            31: 0,
            32: 0,
            33: 0,
            34: 0,
            35: 0,
            36: 0,
            37: 0,
            38: 0,
            39: 0,
            40: 0,
            41: 0,
            42: 0,
            43: 0,
            44: 0,
            45: 0,
            46: 0,
            47: 0,
            48: 0,
            49: 0,
            50: 0,
            51: 0,
            52: 0,
            53: 0,
            54: 0,
            55: 0,
            56: 0,
            57: 0,
            58: 0,
            59: 0,
            60: 0,
            61: 0,
            62: 0,
            63: 0,
            64: 0,
            65: 0,
            66: 0,
            67: 0,
            68: 0,
            69: 0,
            70: 0,
            71: 0,
            72: 0,
            73: 0,
            74: 0,
            75: 0,
            76: 0,
            77: 0,
            78: 0,
            79: 0,
            80: 0,
            81: 0,
            82: 0,
            83: 0,
            84: 0,
            85: 0,
            86: 0,
            87: 0,
            88: 0,
            89: 0,
            90: 0,
            91: 0,
            92: 0,
            93: 0,
            94: 0,
            95: 0,
            96: 0,
            97: 0,
            98: 0,
            99: 0,
            100: 0,
            101: 0,
            102: 0,
            103: 0,
            104: 0,
            105: 0,
            106: 0,
            107: 0,
            108: 0,
            109: 0,
            110: 0,
            111: 0,
            112: 0,
            113: 0,
            114: 0,
            115: 0,
            116: 0,
            117: 0,
            118: 0,
            119: 0,
            120: 0,
            121: 0,
            122: 0,
            123: 0,
            124: 0,
            125: 0,
            126: 0,
            127: 0
          }
        }
      ]
    },
    {
      opId: '5a681c35-78ce-4cb3-9858-bc79c34c6819',
      objName: 'Ops.Sidebar.Sidebar',
      id: 'ba1e64de-ee81-4254-b853-dadd1d67cbae',
      uiAttribs: {
        translate: {
          x: - 840,
          y: - 260
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'Visible',
          links: [
            {
              portIn: 'Visible',
              portOut: 'Clicked',
              objIn: 'ba1e64de-ee81-4254-b853-dadd1d67cbae',
              objOut: 'f225fa59-832f-4ecc-8f42-5fb4afca9d4a'
            }
          ]
        },
        {
          name: 'Opacity',
          value: 1
        },
        {
          name: 'Default Minimized',
          value: 0
        },
        {
          name: 'Minimized Opacity',
          value: 0.5
        },
        {
          name: 'Side',
          value: 0
        }
      ],
      portsOut: [
        {
          name: 'childs'
        }
      ]
    },
    {
      opId: '118df748-16d1-46f4-b8fc-38d7cc5a0aab',
      objName: 'Ops.Sidebar.Button',
      id: '82d2b534-bfca-4db6-b037-1a23dddfcd32',
      uiAttribs: {
        translate: {
          x: - 840,
          y: - 200
        },
        subPatch: 0,
        notWorkingMsg: null,
        title: 'Button: Play'
      },
      portsIn: [
        {
          name: 'link',
          links: [
            {
              portIn: 'link',
              portOut: 'childs',
              objIn: '82d2b534-bfca-4db6-b037-1a23dddfcd32',
              objOut: 'ba1e64de-ee81-4254-b853-dadd1d67cbae'
            }
          ]
        },
        {
          name: 'Text',
          value: 'Play'
        }
      ],
      portsOut: [
        {
          name: 'childs'
        },
        {
          name: 'Pressed Trigger'
        }
      ]
    },
    {
      opId: '118df748-16d1-46f4-b8fc-38d7cc5a0aab',
      objName: 'Ops.Sidebar.Button',
      id: '9bd005f8-32d6-4235-9d11-cfae988f2bad',
      uiAttribs: {
        translate: {
          x: - 840,
          y: - 140
        },
        subPatch: 0,
        notWorkingMsg: null,
        title: 'Button: Pause'
      },
      portsIn: [
        {
          name: 'link',
          links: [
            {
              portIn: 'link',
              portOut: 'childs',
              objIn: '9bd005f8-32d6-4235-9d11-cfae988f2bad',
              objOut: '82d2b534-bfca-4db6-b037-1a23dddfcd32'
            }
          ]
        },
        {
          name: 'Text',
          value: 'Pause'
        }
      ],
      portsOut: [
        {
          name: 'childs'
        },
        {
          name: 'Pressed Trigger'
        }
      ]
    },
    {
      opId: '6bf8a173-a9f9-48d8-b23a-76380dfbe4c5',
      objName: 'Ops.WebAudio.MediaPlayer',
      id: 'e3d0b7df-c185-4a0c-91e5-70a65d85d5d2',
      uiAttribs: {
        translate: {
          x: - 720,
          y: - 60
        },
        subPatch: 0,
        notWorkingMsg: null
      },
      portsIn: [
        {
          name: 'Volume',
          value: 1
        },
        {
          name: 'File',
          value: 'assets/Felix_Ramirez_-_Castle_Hill,_Beats_(2013-2017)_-_03_Tomita.mp3',
          display: 'file'
        },
        {
          name: 'Play',
          links: [
            {
              portIn: 'Play',
              portOut: 'Pressed Trigger',
              objIn: 'e3d0b7df-c185-4a0c-91e5-70a65d85d5d2',
              objOut: '82d2b534-bfca-4db6-b037-1a23dddfcd32'
            }
          ]
        },
        {
          name: 'Pause',
          links: [
            {
              portIn: 'Pause',
              portOut: 'Pressed Trigger',
              objIn: 'e3d0b7df-c185-4a0c-91e5-70a65d85d5d2',
              objOut: '9bd005f8-32d6-4235-9d11-cfae988f2bad'
            }
          ]
        },
        {
          name: 'Rewind',
          value: 0
        },
        {
          name: 'Seek Position (Seconds)',
          value: 0
        },
        {
          name: 'Jump To Seek Position',
          value: 0
        }
      ],
      portsOut: [
        {
          name: 'Audio Out'
        },
        {
          name: 'Duration',
          value: 123.115102
        }
      ]
    }
  ],
  users: [
  ],
  userOps: [
  ],
  tags: [
  ],
  _id: '5d72e46abe927c1b4da0074c',
  name: 'Audio orbit',
  userId: '5d5c74e7631b564c7ef61388',
  created: '2019-09-06T22:57:46.550Z',
  updated: '2019-09-06T23:21:32.951Z',
  __v: 7,
  shortId: '424P8Q',
  opsHash: '4ae32e17eaf7104a10a31a276cc4f5a91b0e5f9a',
  ui: {
    viewBox: {
      x: - 952.2503773049534,
      y: - 564.9269060576879,
      w: 1313.301602458992,
      h: 1626.094480043026
    },
    timeLineLength: 20,
    bookmarks: [
    ],
    subPatchViewBoxes: [
    ],
    renderer: {
      w: 655,
      h: 340,
      s: 1
    }
  },
  updatedByUser: 'felixr91',
  cachedUsername: 'felixr91',
  views: 3,
  cachedNumComments: 0,
  cachedNumFavs: 0,
  statsAdmin: {
    filenameScreenshots: [
      '_screenshots/screenshot.png',
      '_screenshots/screenshot_1567811492245.png',
      '_screenshots/screenshot_1567811543511.png',
      '_screenshots/screenshot_1567811708577.png',
      '_screenshots/screenshot_1567811767507.png',
      '_screenshots/screenshot_1567812001259.png',
      '_screenshots/screenshot_1567812093455.png'
    ],
    filenameExports: [
    ],
    filenameAssets: [
      'Felix_Ramirez_-_Castle_Hill,_Beats_(2013-2017)_-_03_Tomita.mp3'
    ],
    hasOldScreenshots: !1,
    hasOldExports: !1,
    sizeScreenshots: 24.736328125,
    sizeExports: 0,
    sizeAssets: 4159.830078125
  },
  exports: 1
},
(CABLES = CABLES || {
}).OPS = CABLES.OPS || {
};
var Ops = Ops || {
};
Ops.Gl = Ops.Gl || {
},
Ops.Anim = Ops.Anim || {
},
Ops.Patch = Ops.Patch || {
},
Ops.Devices = Ops.Devices || {
},
Ops.Sidebar = Ops.Sidebar || {
},
Ops.WebAudio = Ops.WebAudio || {
},
Ops.Gl.Matrix = Ops.Gl.Matrix || {
},
Ops.Gl.Meshes = Ops.Gl.Meshes || {
},
Ops.Gl.Shader = Ops.Gl.Shader || {
},
Ops.Devices.Mouse = Ops.Devices.Mouse || {
},
Ops.Gl.MainLoop = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.inValue('FPS Limit', 0),
  i = t.outTrigger('trigger'),
  n = t.outValue('width'),
  r = t.outValue('height'),
  s = t.inValueBool('Reduce FPS loading'),
  o = t.inValueBool('Clear', !0),
  a = t.inValueBool('ClearAlpha', !0),
  l = t.inValueBool('Fullscreen Button', !1),
  h = t.inValueBool('Active', !0),
  u = t.inValueBool('Hires Displays', !1);
  t.onAnimFrame = b,
  u.onChange = function () {
    u.get() ? t.patch.cgl.pixelDensity = window.devicePixelRatio : t.patch.cgl.pixelDensity = 1,
    t.patch.cgl.updateSize(),
    CABLES.UI && gui.setLayout()
  },
  h.onChange = function () {
    t.patch.removeOnAnimFrame(t),
    h.get() && (t.onAnimFrame = b, t.patch.addOnAnimFrame(t), console.log('adding again!'))
  };
  var c = t.patch.cgl,
  d = 0,
  p = 0;
  t.patch.cgl || t.uiAttr({
    error: 'No webgl cgl context'
  });
  var g = vec3.create();
  vec3.set(g, 0, 0, 0);
  var f = vec3.create();
  vec3.set(f, 0, 0, - 2),
  l.onChange = m,
  setTimeout(m, 100);
  var _ = null;
  function m() {
    function e() {
      _ && (_.style.display = 'block')
    }
    if (t.patch.cgl.canvas.addEventListener('mouseleave', function () {
      _ && (_.style.display = 'none')
    }), t.patch.cgl.canvas.addEventListener('mouseenter', e), l.get()) {
      if (!_) {
        _ = document.createElement('div');
        var i = t.patch.cgl.canvas.parentElement;
        i && i.appendChild(_),
        _.addEventListener('mouseenter', e),
        _.addEventListener('click', function (t) {
          CABLES.UI && !t.shiftKey ? gui.cycleRendererSize()  : c.fullScreen()
        })
      }
      _.style.padding = '10px',
      _.style.position = 'absolute',
      _.style.right = '5px',
      _.style.top = '5px',
      _.style.width = '20px',
      _.style.height = '20px',
      _.style.cursor = 'pointer',
      _.style['border-radius'] = '40px',
      _.style.background = '#444',
      _.style['z-index'] = '9999',
      _.style.display = 'none',
      _.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 490 490" style="width:20px;height:20px;" xml:space="preserve" width="512px" height="512px"><g><path d="M173.792,301.792L21.333,454.251v-80.917c0-5.891-4.776-10.667-10.667-10.667C4.776,362.667,0,367.442,0,373.333V480     c0,5.891,4.776,10.667,10.667,10.667h106.667c5.891,0,10.667-4.776,10.667-10.667s-4.776-10.667-10.667-10.667H36.416     l152.459-152.459c4.093-4.237,3.975-10.99-0.262-15.083C184.479,297.799,177.926,297.799,173.792,301.792z" fill="#FFFFFF"/><path d="M480,0H373.333c-5.891,0-10.667,4.776-10.667,10.667c0,5.891,4.776,10.667,10.667,10.667h80.917L301.792,173.792     c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262     L469.333,36.416v80.917c0,5.891,4.776,10.667,10.667,10.667s10.667-4.776,10.667-10.667V10.667C490.667,4.776,485.891,0,480,0z" fill="#FFFFFF"/><path d="M36.416,21.333h80.917c5.891,0,10.667-4.776,10.667-10.667C128,4.776,123.224,0,117.333,0H10.667     C4.776,0,0,4.776,0,10.667v106.667C0,123.224,4.776,128,10.667,128c5.891,0,10.667-4.776,10.667-10.667V36.416l152.459,152.459     c4.237,4.093,10.99,3.975,15.083-0.262c3.992-4.134,3.992-10.687,0-14.82L36.416,21.333z" fill="#FFFFFF"/><path d="M480,362.667c-5.891,0-10.667,4.776-10.667,10.667v80.917L316.875,301.792c-4.237-4.093-10.99-3.976-15.083,0.261     c-3.993,4.134-3.993,10.688,0,14.821l152.459,152.459h-80.917c-5.891,0-10.667,4.776-10.667,10.667s4.776,10.667,10.667,10.667     H480c5.891,0,10.667-4.776,10.667-10.667V373.333C490.667,367.442,485.891,362.667,480,362.667z" fill="#FFFFFF"/></g></svg>'
    } else _ && (_.style.display = 'none', _.remove(), _ = null)
  }
  function b(e) {
    h.get() && (c.aborted || 0 === c.canvas.clientWidth || 0 === c.canvas.clientHeight || (t.patch.loading.getProgress() < 1 && s.get() && (t.patch.config.fpsLimit = 5), - 1 != c.canvasWidth ? (c.canvasWidth == n.get() && c.canvasHeight == r.get() || (n.set(c.canvasWidth), r.set(c.canvasHeight)), CABLES.now() - p > 1000 && (CGL.fpsReport = CGL.fpsReport || [
    ], t.patch.loading.getProgress() >= 1 && 0 !== p && CGL.fpsReport.push(d), d = 0, p = CABLES.now()), CGL.MESH.lastShader = null, CGL.MESH.lastMesh = null, c.renderStart(c, g, f), o.get() && (c.gl.clearColor(0, 0, 0, 1), c.gl.clear(c.gl.COLOR_BUFFER_BIT | c.gl.DEPTH_BUFFER_BIT)), i.trigger(), CGL.MESH.lastMesh && CGL.MESH.lastMesh.unBind(), CGL.Texture.previewTexture && (CGL.Texture.texturePreviewer || (CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(c)), CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture)), c.renderEnd(c), a.get() && (c.gl.clearColor(1, 1, 1, 1), c.gl.colorMask(!1, !1, !1, !0), c.gl.clear(c.gl.COLOR_BUFFER_BIT), c.gl.colorMask(!0, !0, !0, !0)), c.frameStore.phong || (c.frameStore.phong = {
    }), d++)  : c.setCanvas(t.patch.config.glCanvasId)))
  }
  e.onChange = function () {
    t.patch.config.fpsLimit = e.get() || 0
  },
  t.onDelete = function () {
    c.gl.clearColor(0, 0, 0, 0),
    c.gl.clear(c.gl.COLOR_BUFFER_BIT | c.gl.DEPTH_BUFFER_BIT)
  },
  t.patch.loading.setOnFinishedLoading(function (i) {
    t.patch.config.fpsLimit = e.get()
  })
},
Ops.Gl.MainLoop.prototype = new CABLES.Op,
CABLES.OPS['b0472a1d-db16-4ba6-8787-f300fbdc77bb'] = {
  f: Ops.Gl.MainLoop,
  objName: 'Ops.Gl.MainLoop'
},
Ops.Gl.Meshes.Circle = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.inTrigger('render'),
  i = t.inValue('radius', 0.5),
  n = t.inValueSlider('innerRadius', 0),
  r = t.inValueInt('segments', 40),
  s = t.inValueSlider('percent', 1),
  o = t.inValue('steps', 0),
  a = t.inValueBool('invertSteps', !1),
  l = t.inSwitch('mapping', [
    'flat',
    'round'
  ]),
  h = t.inValueBool('Spline', !1),
  u = t.inValueBool('Draw', !0),
  c = t.outTrigger('trigger'),
  d = t.outObject('geometry');
  t.setPortGroup('Size', [
    i,
    n
  ]),
  t.setPortGroup('Display', [
    s,
    o,
    a
  ]),
  l.set('flat'),
  l.onChange = r.onChange = i.onChange = n.onChange = s.onChange = o.onChange = a.onChange = h.onChange = function () {
    b = !0
  },
  d.ignoreValueSerialize = !0;
  const p = t.patch.cgl;
  var g = new CGL.Geometry('circle'),
  f = null,
  _ = 0,
  m = null,
  b = !0;
  t.preRender = e.onTriggered = function () {
    CGL.TextureEffect.checkOpNotInTextureEffect(t) && (b && function () {
      var t = Math.max(3, Math.floor(r.get()));
      g.clear();
      var e = [
      ],
      u = [
      ],
      c = [
      ],
      _ = [
      ],
      m = [
      ],
      v = 0,
      I = 0,
      E = 0,
      M = 0,
      A = 0,
      x = 0,
      O = 0,
      T = 0,
      S = 0,
      y = 0,
      P = 0,
      R = 0,
      F = 0,
      C = 0,
      N = 0,
      D = [
      ];
      if (h.get()) {
        var w = 0,
        L = 0,
        B = [
        ];
        for (v = 0; v <= t * s.get(); v++) I = 360 / t * v * CGL.DEG2RAD,
        C = Math.cos(I) * i.get(),
        N = Math.sin(I) * i.get(),
        F = 0.5,
        v > 0 && (D.push(w), D.push(L), D.push(0), R = 1 - (v - 1) / t, B.push(R, F)),
        D.push(C),
        D.push(N),
        D.push(0),
        w = C,
        L = N;
        g.setPointVertices(D)
      } else if (n.get() <= 0) {
        for (v = 0; v <= t * s.get(); v++) I = 360 / t * v * CGL.DEG2RAD,
        C = Math.cos(I) * i.get(),
        N = Math.sin(I) * i.get(),
        'flat' == l.get() ? (R = (Math.cos(I) + 1) / 2, F = 1 - (Math.sin(I) + 1) / 2, y = 0.5, P = 0.5)  : 'round' == l.get() && (F = 0, y = R = 1 - v / t, P = 1),
        e.push([C,
        N,
        0], [
          E,
          M,
          0
        ], [
          0,
          0,
          0
        ]),
        u.push(R, F, A, x, y, P),
        c.push(0, 0, 1, 0, 0, 1, 0, 0, 1),
        _.push(1, 0, 0, 1, 0, 0, 1, 0, 0),
        m.push(0, 1, 0, 0, 1, 0, 0, 1, 0),
        A = R,
        x = F,
        E = C,
        M = N;
        (g = CGL.Geometry.buildFromFaces(e)).vertexNormals = c,
        g.tangents = _,
        g.biTangents = m,
        g.texCoords = u
      } else {
        var k = 0,
        U = t * s.get();
        for (v = 0; v <= U; v++) {
          k++,
          I = 360 / t * v * CGL.DEG2RAD,
          C = Math.cos(I) * i.get(),
          N = Math.sin(I) * i.get();
          var V = Math.cos(I) * n.get() * i.get(),
          G = Math.sin(I) * n.get() * i.get();
          'round' == l.get() && (F = 0, y = R = 1 - v / t, P = 1),
          (0 === o.get() || k % parseInt(o.get(), 10) == 0 && !a.get() || k % parseInt(o.get(), 10) != 0 && a.get()) && (e.push([C,
          N,
          0], [
            E,
            M,
            0
          ], [
            V,
            G,
            0
          ]), e.push([V,
          G,
          0], [
            E,
            M,
            0
          ], [
            O,
            T,
            0
          ]), u.push(R, 0, A, 0, y, 1, R, 1, A, 0, S, 1), c.push(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1), _.push(1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0), m.push(0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0)),
          S = y,
          P,
          A = R,
          x = F,
          E = C,
          M = N,
          O = V,
          T = G
        }(g = CGL.Geometry.buildFromFaces(e)).vertexNormals = c,
        g.tangents = _,
        g.biTangents = m,
        'flat' == l.get() ? g.mapTexCoords2d()  : g.texCoords = u
      }
      if (d.set(null), d.set(g), 0 == g.vertices.length) return;
      f && f.dispose();
      f = null,
      f = new CGL.Mesh(p, g),
      b = !1
    }(), (m = p.getShader()) && (_ = m.glPrimitive, h.get() && (m.glPrimitive = p.gl.LINE_STRIP), u.get() && f.render(m), c.trigger(), m.glPrimitive = _))
  },
  t.onDelete = function () {
    f && f.dispose()
  }
},
Ops.Gl.Meshes.Circle.prototype = new CABLES.Op,
CABLES.OPS['4db917cc-2cef-43f4-83d5-38c4572fe943'] = {
  f: Ops.Gl.Meshes.Circle,
  objName: 'Ops.Gl.Meshes.Circle'
},
Ops.Gl.Shader.BasicMaterial_v2 = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = '{{MODULES_HEAD}}\n\nIN vec2 texCoord;\nUNI float r;\nUNI float g;\nUNI float b;\nUNI float a;\n\n#ifdef HAS_TEXTURES\n    IN vec2 texCoordOrig;\n    #ifdef HAS_TEXTURE_DIFFUSE\n        UNI sampler2D tex;\n    #endif\n    #ifdef HAS_TEXTURE_OPACITY\n        UNI sampler2D texOpacity;\n   #endif\n#endif\n\nvoid main()\n{\n    {{MODULE_BEGIN_FRAG}}\n    vec4 col=vec4(r,g,b,a);\n\n    #ifdef HAS_TEXTURES\n        vec2 uv=vec2(texCoord.s,1.0-texCoord.t);\n\n        #ifdef HAS_TEXTURE_DIFFUSE\n            col=texture(tex,uv);\n\n            #ifdef COLORIZE_TEXTURE\n                col.r*=r;\n                col.g*=g;\n                col.b*=b;\n            #endif\n        #endif\n        col.a*=a;\n        #ifdef HAS_TEXTURE_OPACITY\n            #ifdef TRANSFORMALPHATEXCOORDS\n                uv=vec2(texCoordOrig.s,1.0-texCoordOrig.t);\n            #endif\n            #ifdef ALPHA_MASK_ALPHA\n                col.a*=texture(texOpacity,uv).a;\n            #endif\n            #ifdef ALPHA_MASK_LUMI\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\n            #endif\n            #ifdef ALPHA_MASK_R\n                col.a*=texture(texOpacity,uv).r;\n            #endif\n            #ifdef ALPHA_MASK_G\n                col.a*=texture(texOpacity,uv).g;\n            #endif\n            #ifdef ALPHA_MASK_B\n                col.a*=texture(texOpacity,uv).b;\n            #endif\n            // #endif\n        #endif\n    #endif\n\n    {{MODULE_COLOR}}\n\n    #ifdef DISCARDTRANS\n        if(col.a<0.2) discard;\n    #endif\n\n    outColor = col;\n}\n',
  i = '{{MODULES_HEAD}}\n\nIN vec3 vPosition;\nIN vec3 attrVertNormal;\nIN vec2 attrTexCoord;\n\nOUT vec3 norm;\nOUT vec2 texCoord;\nOUT vec2 texCoordOrig;\n\nUNI mat4 projMatrix;\nUNI mat4 modelMatrix;\nUNI mat4 viewMatrix;\n\n#ifdef HAS_TEXTURES\n    UNI float diffuseRepeatX;\n    UNI float diffuseRepeatY;\n    UNI float texOffsetX;\n    UNI float texOffsetY;\n#endif\n\n\nvoid main()\n{\n    mat4 mMatrix=modelMatrix;\n    mat4 mvMatrix;\n\n    texCoordOrig=attrTexCoord;\n    texCoord=attrTexCoord;\n    #ifdef HAS_TEXTURES\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\n        texCoord.y=texCoord.y*diffuseRepeatY+texOffsetY;\n    #endif\n\n    vec4 pos = vec4( vPosition, 1. );\n\n\n    #ifdef BILLBOARD\n       vec3 position=vPosition;\n       mvMatrix=viewMatrix*modelMatrix;\n\n       gl_Position = projMatrix * mvMatrix * vec4((\n           position.x * vec3(\n               mvMatrix[0][0],\n               mvMatrix[1][0],\n               mvMatrix[2][0] ) +\n           position.y * vec3(\n               mvMatrix[0][1],\n               mvMatrix[1][1],\n               mvMatrix[2][1]) ), 1.0);\n    #endif\n\n    {{MODULE_VERTEX_POSITION}}\n\n    #ifndef BILLBOARD\n        mvMatrix=viewMatrix * mMatrix;\n    #endif\n\n\n    #ifndef BILLBOARD\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\n        gl_Position = projMatrix * mvMatrix * pos;\n    #endif\n}\n',
  n = t.inTrigger('render'),
  r = t.outTrigger('trigger'),
  s = t.outObject('shader');
  s.ignoreValueSerialize = !0;
  const o = t.patch.cgl;
  t.toWorkPortsNeedToBeLinked(n, r);
  const a = new CGL.Shader(o, 'basicmaterialnew');
  function l() {
    g.get() && o.setTexture(0, g.get().tex),
    t.textureOpacity.get() && o.setTexture(1, t.textureOpacity.get().tex)
  }
  function h() {
    a && (o.setShader(a), a.bindTextures(), r.trigger(), o.setPreviousShader())
  }
  a.setModules(['MODULE_VERTEX_POSITION',
  'MODULE_COLOR',
  'MODULE_BEGIN_FRAG']),
  a.bindTextures = l,
  a.setSource(i, e),
  s.set(a),
  n.onTriggered = h,
  t.preRender = function () {
    a.bind(),
    h()
  };
  const u = t.inValueSlider('r', Math.random()),
  c = t.inValueSlider('g', Math.random()),
  d = t.inValueSlider('b', Math.random()),
  p = t.inValueSlider('a', 1);
  u.setUiAttribs({
    colorPick: !0
  });
  new CGL.Uniform(a, 'f', 'r', u),
  new CGL.Uniform(a, 'f', 'g', c),
  new CGL.Uniform(a, 'f', 'b', d),
  new CGL.Uniform(a, 'f', 'a', p);
  t.setPortGroup('Color', [
    u,
    c,
    d,
    p
  ]);
  var g = t.inTexture('texture'),
  f = null;
  function _() {
    g.get() ? (a.hasDefine('HAS_TEXTURE_DIFFUSE') || a.define('HAS_TEXTURE_DIFFUSE'), f || (f = new CGL.Uniform(a, 't', 'texDiffuse', 0)), M.setUiAttribs({
      greyout: !1
    }), A.setUiAttribs({
      greyout: !1
    }), x.setUiAttribs({
      greyout: !1
    }), O.setUiAttribs({
      greyout: !1
    }), m.setUiAttribs({
      greyout: !1
    }))  : (a.removeUniform('texDiffuse'), a.removeDefine('HAS_TEXTURE_DIFFUSE'), f = null, M.setUiAttribs({
      greyout: !0
    }), A.setUiAttribs({
      greyout: !0
    }), x.setUiAttribs({
      greyout: !0
    }), O.setUiAttribs({
      greyout: !0
    }), m.setUiAttribs({
      greyout: !0
    }))
  }
  a.bindTextures = l,
  g.onChange = _;
  const m = t.inValueBool('colorizeTexture', !1);
  function b() {
    'Alpha Channel' == t.alphaMaskSource.get() ? a.define('ALPHA_MASK_ALPHA')  : a.removeDefine('ALPHA_MASK_ALPHA'),
    'Luminance' == t.alphaMaskSource.get() ? a.define('ALPHA_MASK_LUMI')  : a.removeDefine('ALPHA_MASK_LUMI'),
    'R' == t.alphaMaskSource.get() ? a.define('ALPHA_MASK_R')  : a.removeDefine('ALPHA_MASK_R'),
    'G' == t.alphaMaskSource.get() ? a.define('ALPHA_MASK_G')  : a.removeDefine('ALPHA_MASK_G'),
    'B' == t.alphaMaskSource.get() ? a.define('ALPHA_MASK_B')  : a.removeDefine('ALPHA_MASK_B')
  }
  function v() {
    if (t.textureOpacity.get()) {
      if (null !== t.textureOpacityUniform) return;
      a.removeUniform('texOpacity'),
      a.define('HAS_TEXTURE_OPACITY'),
      t.textureOpacityUniform || (t.textureOpacityUniform = new CGL.Uniform(a, 't', 'texOpacity', 1)),
      t.alphaMaskSource.setUiAttribs({
        greyout: !1
      }),
      E.setUiAttribs({
        greyout: !1
      }),
      I.setUiAttribs({
        greyout: !1
      })
    } else a.removeUniform('texOpacity'),
    a.removeDefine('HAS_TEXTURE_OPACITY'),
    t.textureOpacityUniform = null,
    t.alphaMaskSource.setUiAttribs({
      greyout: !0
    }),
    E.setUiAttribs({
      greyout: !0
    }),
    I.setUiAttribs({
      greyout: !0
    });
    b()
  }
  t.setPortGroup('Color Texture', [
    g,
    m
  ]),
  t.textureOpacity = t.inTexture('textureOpacity'),
  t.textureOpacityUniform = null,
  t.alphaMaskSource = t.inSwitch('Alpha Mask Source', [
    'Luminance',
    'R',
    'G',
    'B',
    'A'
  ], 'Luminance'),
  t.alphaMaskSource.onChange = b,
  t.alphaMaskSource.setUiAttribs({
    greyout: !0
  }),
  t.textureOpacity.onChange = v;
  var I = t.inValueBool('Opacity TexCoords Transform', !1);
  const E = t.inValueBool('Discard Transparent Pixels');
  E.onChange = function () {
    E.get() ? a.define('DISCARDTRANS')  : a.removeDefine('DISCARDTRANS')
  },
  I.onChange = function () {
    I.get() ? a.define('TRANSFORMALPHATEXCOORDS')  : a.removeDefine('TRANSFORMALPHATEXCOORDS')
  },
  t.setPortGroup('Opacity', [
    t.textureOpacity,
    t.alphaMaskSource,
    E,
    I
  ]),
  m.onChange = function () {
    m.get() ? a.define('COLORIZE_TEXTURE')  : a.removeDefine('COLORIZE_TEXTURE')
  };
  const M = t.inValue('diffuseRepeatX', 1),
  A = t.inValue('diffuseRepeatY', 1),
  x = t.inValue('Tex Offset X', 0),
  O = t.inValue('Tex Offset Y', 0);
  new CGL.Uniform(a, 'f', 'diffuseRepeatX', M),
  new CGL.Uniform(a, 'f', 'diffuseRepeatY', A),
  new CGL.Uniform(a, 'f', 'texOffsetX', x),
  new CGL.Uniform(a, 'f', 'texOffsetY', O);
  t.setPortGroup('Texture Transform', [
    M,
    A,
    x,
    O
  ]);
  const T = t.inValueBool('billboard', !1);
  T.onChange = function () {
    T.get() ? a.define('BILLBOARD')  : a.removeDefine('BILLBOARD')
  },
  v(),
  _()
},
Ops.Gl.Shader.BasicMaterial_v2.prototype = new CABLES.Op,
CABLES.OPS['51f2207b-daaa-447f-bdbe-87fdd72f0c40'] = {
  f: Ops.Gl.Shader.BasicMaterial_v2,
  objName: 'Ops.Gl.Shader.BasicMaterial_v2'
},
Ops.Gl.RandomCluster = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.inTrigger('exe'),
  i = t.inValueInt('num'),
  n = t.inValueFloat('random seed', 1),
  r = t.inValueBool('round', !1),
  s = t.inValueFloat('size', 10),
  o = t.inValueFloat('scaleX', 1),
  a = t.inValueFloat('scaleY', 1),
  l = t.inValueFloat('scaleZ', 1),
  h = t.outTrigger('trigger'),
  u = t.outValue('index'),
  c = t.outValue('rnd'),
  d = t.inValueSlider('Rotate X', 1),
  p = t.inValueSlider('Rotate Y', 1),
  g = t.inValueSlider('Rotate Z', 1),
  f = t.inValue('Scroll X', 0);
  t.setPortGroup('Area', [
    s,
    o,
    a,
    l
  ]),
  t.setPortGroup('Rotation', [
    d,
    p,
    g
  ]),
  t.setPortGroup('Parameters', [
    i,
    r,
    n
  ]),
  t.toWorkPortsNeedToBeLinked(e, h);
  const _ = t.patch.cgl;
  var m = [
  ],
  b = [
  ],
  v = [
  ],
  I = [
  ];
  vec3.create(),
  mat4.create();
  function E() {
    return vec3.fromValues(o.get() * (Math.seededRandom() - 0.5) * s.get(), a.get() * (Math.seededRandom() - 0.5) * s.get(), l.get() * (Math.seededRandom() - 0.5) * s.get())
  }
  function M() {
    m.length = 0,
    v.length = 0,
    I.length = 0,
    b.length = 0,
    Math.randomSeed = n.get();
    for (var t = r.get(), e = 0; e < i.get(); e++) {
      I.push(Math.seededRandom());
      var o = E();
      if (t) for (; vec3.len(o) > s.get() / 2; ) o = E();
      b.push([o[0],
      o[1],
      o[2]]),
      m.push(o),
      v.push(vec3.fromValues(360 * Math.seededRandom() * CGL.DEG2RAD * d.get(), 360 * Math.seededRandom() * CGL.DEG2RAD * p.get(), 360 * Math.seededRandom() * CGL.DEG2RAD * g.get()))
    }
  }
  e.onTriggered = function () {
    if (CABLES.UI && (CABLES.UI.renderHelper || gui.patch().isCurrentOp(t)) && CABLES.GL_MARKER.drawCube(t, s.get() / 2 * o.get(), s.get() / 2 * a.get(), s.get() / 2 * l.get()), 0 != f.get()) for (var e = 0; e < b.length; e++) m[e][0] = b[e][0] + f.get(),
    m[e][0] = m[e][0] % s.get() - s.get() / 2;
    for (e = 0; e < m.length; e++) _.pushModelMatrix(),
    mat4.translate(_.mMatrix, _.mMatrix, m[e]),
    v[e][0] && mat4.rotateX(_.mMatrix, _.mMatrix, v[e][0]),
    v[e][1] && mat4.rotateY(_.mMatrix, _.mMatrix, v[e][1]),
    v[e][2] && mat4.rotateZ(_.mMatrix, _.mMatrix, v[e][2]),
    u.set(e),
    c.set(I[e]),
    h.trigger(),
    _.popModelMatrix()
  },
  n.onChange = M,
  i.onChange = M,
  s.onChange = M,
  o.onChange = M,
  l.onChange = M,
  a.onChange = M,
  r.onChange = M,
  d.onChange = M,
  p.onChange = M,
  g.onChange = M,
  i.set(100)
},
Ops.Gl.RandomCluster.prototype = new CABLES.Op,
CABLES.OPS['ca3bc984-e596-48fb-b53d-502eb13979b0'] = {
  f: Ops.Gl.RandomCluster,
  objName: 'Ops.Gl.RandomCluster'
},
Ops.Gl.Matrix.Transform = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.inTrigger('render'),
  i = t.inValue('posX', 0),
  n = t.inValue('posY', 0),
  r = t.inValue('posZ', 0),
  s = t.inValue('scale', 1),
  o = t.inValue('rotX', 0),
  a = t.inValue('rotY', 0),
  l = t.inValue('rotZ', 0),
  h = t.outTrigger('trigger');
  t.setPortGroup('Rotation', [
    o,
    a,
    l
  ]),
  t.setPortGroup('Position', [
    i,
    n,
    r
  ]),
  t.setPortGroup('Scale', [
    s
  ]),
  t.setUiAxisPorts(i, n, r);
  const u = t.patch.cgl;
  var c = vec3.create(),
  d = vec3.create(),
  p = mat4.create();
  mat4.identity(p);
  var g = !1,
  f = !1,
  _ = !0,
  m = !0,
  b = !0;
  function v() {
    mat4.identity(p),
    f && mat4.translate(p, p, c),
    0 !== o.get() && mat4.rotateX(p, p, o.get() * CGL.DEG2RAD),
    0 !== a.get() && mat4.rotateY(p, p, a.get() * CGL.DEG2RAD),
    0 !== l.get() && mat4.rotateZ(p, p, l.get() * CGL.DEG2RAD),
    g && mat4.scale(p, p, d),
    b = !1
  }
  o.onChange = a.onChange = l.onChange = function () {
    b = !0
  },
  i.onChange = n.onChange = r.onChange = function () {
    _ = !0
  },
  s.onChange = function () {
    m = !0
  },
  e.onTriggered = function () {
    var e = !1;
    _ && (!function () {
      f = !1,
      (0 !== i.get() || 0 !== n.get() || 0 !== r.get()) && (f = !0);
      vec3.set(c, i.get(), n.get(), r.get()),
      _ = !1
    }(), e = !0),
    m && (g = !0, vec3.set(d, s.get(), s.get(), s.get()), m = !1, e = !0),
    b && (e = !0),
    e && v(),
    u.pushModelMatrix(),
    mat4.multiply(u.mMatrix, u.mMatrix, p),
    h.trigger(),
    u.popModelMatrix(),
    CABLES.UI && gui.patch().isCurrentOp(t) && gui.setTransformGizmo({
      posX: i,
      posY: n,
      posZ: r
    })
  },
  t.transform3d = function () {
    return {
      pos: [
        i,
        n,
        r
      ]
    }
  },
  v()
},
Ops.Gl.Matrix.Transform.prototype = new CABLES.Op,
CABLES.OPS['650baeb1-db2d-4781-9af6-ab4e9d4277be'] = {
  f: Ops.Gl.Matrix.Transform,
  objName: 'Ops.Gl.Matrix.Transform'
},
Ops.Anim.Timer_v2 = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.inValueBool('Play', !0),
  i = t.inTriggerButton('Reset'),
  n = t.outValue('Time'),
  r = t.inValue('Speed', 1);
  var s = new CABLES.Timer,
  o = 0,
  a = 0;
  function l() {
    e.get() ? (s.play(), t.patch.addOnAnimFrame(t))  : (s.pause(), t.patch.removeOnAnimFrame(t))
  }
  e.onChange = l,
  l(),
  i.onTriggered = function () {
    a = 0,
    o = 0,
    s.setTime(0),
    n.set(0)
  },
  t.onAnimFrame = function () {
    if (s.isPlaying()) {
      if (s.update(), 0 === o) return void (o = s.get());
      const t = s.get() - o;
      o = s.get(),
      (a += t * r.get()) != a && (a = 0),
      n.set(a)
    }
  }
},
Ops.Anim.Timer_v2.prototype = new CABLES.Op,
CABLES.OPS['aac7f721-208f-411a-adb3-79adae2e471a'] = {
  f: Ops.Anim.Timer_v2,
  objName: 'Ops.Anim.Timer_v2'
},
Ops.Gl.Meshes.Cube = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.inTrigger('render'),
  i = t.inValue('width', 1),
  n = t.inValue('height', 1),
  r = t.inValue('length', 1),
  s = t.inValueBool('center', !0),
  o = t.inValueBool('Active', !0),
  a = t.outTrigger('trigger'),
  l = t.outObject('geometry'),
  h = t.patch.cgl;
  t.setPortGroup('Geometry', [
    i,
    n,
    r
  ]);
  var u = null,
  c = null;
  function d() {
    u || (u = new CGL.Geometry('cubemesh')),
    u.clear();
    var t = i.get(),
    e = - 1 * i.get(),
    o = r.get(),
    a = - 1 * r.get(),
    d = n.get(),
    p = - 1 * n.get();
    s.get() ? (t *= 0.5, e *= 0.5, o *= 0.5, a *= 0.5, d *= 0.5, p *= 0.5)  : (e = 0, a = 0, p = 0),
    u.vertices = [
      e,
      a,
      d,
      t,
      a,
      d,
      t,
      o,
      d,
      e,
      o,
      d,
      e,
      a,
      p,
      e,
      o,
      p,
      t,
      o,
      p,
      t,
      a,
      p,
      e,
      o,
      p,
      e,
      o,
      d,
      t,
      o,
      d,
      t,
      o,
      p,
      e,
      a,
      p,
      t,
      a,
      p,
      t,
      a,
      d,
      e,
      a,
      d,
      t,
      a,
      p,
      t,
      o,
      p,
      t,
      o,
      d,
      t,
      a,
      d,
      e,
      a,
      p,
      e,
      a,
      d,
      e,
      o,
      d,
      e,
      o,
      p
    ],
    u.setTexCoords([0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0]),
    u.vertexNormals = [
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0
    ],
    u.tangents = [
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1
    ],
    u.biTangents = [
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      - 1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0,
      0,
      1,
      0
    ],
    u.verticesIndices = [
      0,
      1,
      2,
      0,
      2,
      3,
      4,
      5,
      6,
      4,
      6,
      7,
      8,
      9,
      10,
      8,
      10,
      11,
      12,
      13,
      14,
      12,
      14,
      15,
      16,
      17,
      18,
      16,
      18,
      19,
      20,
      21,
      22,
      20,
      22,
      23
    ],
    c && c.dispose(),
    c = new CGL.Mesh(h, u),
    l.set(null),
    l.set(u)
  }
  i.onChange = d,
  n.onChange = d,
  r.onChange = d,
  s.onChange = d,
  d(),
  e.onTriggered = function () {
    o.get() && c && c.render(h.getShader()),
    a.trigger()
  },
  t.preRender = function () {
    d(),
    c.render(h.getShader())
  },
  t.onDelete = function () {
    c && c.dispose()
  }
},
Ops.Gl.Meshes.Cube.prototype = new CABLES.Op,
CABLES.OPS['ff0535e2-603a-4c07-9ce6-e9e0db857dfe'] = {
  f: Ops.Gl.Meshes.Cube,
  objName: 'Ops.Gl.Meshes.Cube'
},
Ops.Anim.RandomAnim = function () {
  CABLES.Op.apply(this, arguments);
  const t = this;
  var e = t.inTrigger('exe'),
  i = t.inValue('min', 0),
  n = t.inValue('max', 1),
  r = t.inValue('random seed', 0),
  s = t.inValue('duration', 0.5),
  o = t.inValue('pause between', 0),
  a = t.outTrigger('Next'),
  l = t.outValue('result'),
  h = t.outTrigger('Looped'),
  u = new CABLES.Anim;
  u.createPort(t, 'easing', g),
  t.setPortGroup('Timing', [
    s,
    o
  ]),
  t.setPortGroup('Value', [
    i,
    n,
    r
  ]),
  t.toWorkPortsNeedToBeLinked(e);
  var c = 0;
  i.onChange = n.onChange = o.onChange = r.onChange = s.onChange = function () {
    d = !0
  };
  var d = !0;
  function p() {
    var t = i.get();
    return Math.seededRandom() * (n.get() - t) + t
  }
  function g() {
    Math.randomSeed = r.get() + 100 * c,
    f(p()),
    d = !1
  }
  function f(e) {
    u.clear(),
    u.setValue(t.patch.freeTimer.get(), e),
    0 !== o.get() && u.setValue(t.patch.freeTimer.get() + o.get(), e),
    u.setValue(s.get() + t.patch.freeTimer.get() + o.get(), p())
  }
  e.onTriggered = function () {
    d && g();
    var e = t.patch.freeTimer.get(),
    i = u.getValue(e);
    u.hasEnded(e) && (c++, u.clear(), f(i), h.trigger());
    l.set(i),
    a.trigger()
  }
},
Ops.Anim.RandomAnim.prototype = new CABLES.Op,
CABLES.OPS['2d2e5f0e-b69f-4789-9a48-1ee6ade5049a'] = {
  f: Ops.Anim.RandomAnim,
  objName: 'Ops.Anim.RandomAnim'
},
Ops.Devices.Mouse.MouseButtons = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.outTrigger('Click Left'),
  i = t.outTrigger('Click Right'),
  n = t.outTrigger('Double Click'),
  r = t.outValue('Button pressed Left', !1),
  s = t.outValue('Button pressed Middle', !1),
  o = t.outValue('Button pressed Right', !1),
  a = t.outTrigger('Mouse Down Left'),
  l = t.outTrigger('Mouse Down Middle'),
  h = t.outTrigger('Mouse Down Right'),
  u = t.outTrigger('Mouse Up Left'),
  c = t.outTrigger('Mouse Up Middle'),
  d = t.outTrigger('Mouse Up Right'),
  p = t.inValueSelect('Area', [
    'Canvas',
    'Document'
  ], 'Canvas'),
  g = t.inValueBool('Active', !0),
  f = t.patch.cgl;
  var _ = null;
  p.onChange = O,
  t.onDelete = x,
  O();
  var m = function (t) {
    1 == t.which ? (r.set(!0), a.trigger())  : 2 == t.which ? (s.set(!0), l.trigger())  : 3 == t.which && (o.set(!0), h.trigger())
  },
  b = function (t) {
    1 == t.which ? (r.set(!1), u.trigger())  : 2 == t.which ? (s.set(!1), c.trigger())  : 3 == t.which && (o.set(!1), d.trigger())
  },
  v = function (t) {
    i.trigger(),
    t.preventDefault()
  };
  function I(t) {
    n.trigger()
  }
  function E(t) {
    e.trigger()
  }
  var M = function (t) {
    t.touches && t.touches.length > 0 && (t.touches[0].which = 1, m(t.touches[0]))
  },
  A = function (t) {
    b({
      which: 1
    })
  };
  function x() {
    _ && (_.removeEventListener('touchend', A), _.removeEventListener('touchcancel', A), _.removeEventListener('touchstart', M), _.removeEventListener('dblclick', I), _.removeEventListener('click', E), _.removeEventListener('mousedown', m), _.removeEventListener('mouseup', b), _.removeEventListener('contextmenu', v), _.removeEventListener('mouseleave', b), _ = null)
  }
  function O() {
    _ && x(),
    _ = f.canvas,
    'Document' == p.get() && (_ = document.body),
    _.addEventListener('touchend', A),
    _.addEventListener('touchcancel', A),
    _.addEventListener('touchstart', M),
    _.addEventListener('dblclick', I),
    _.addEventListener('click', E),
    _.addEventListener('mousedown', m),
    _.addEventListener('mouseup', b),
    _.addEventListener('contextmenu', v),
    _.addEventListener('mouseleave', b)
  }
  t.onLoaded = O,
  g.onChange = function () {
    x(),
    g.get() && O()
  }
},
Ops.Devices.Mouse.MouseButtons.prototype = new CABLES.Op,
CABLES.OPS['c7e5e545-c8a1-4fef-85c2-45422b947f0d'] = {
  f: Ops.Devices.Mouse.MouseButtons,
  objName: 'Ops.Devices.Mouse.MouseButtons'
},
Ops.Anim.BoolAnim = function () {
  CABLES.Op.apply(this, arguments);
  const t = this;
  var e = new CABLES.Anim;
  const i = t.inTrigger('exe'),
  n = t.inValueBool('bool'),
  r = e.createPort(t, 'easing'),
  s = t.inValue('duration', 0.5),
  o = t.inValueSelect('Direction', [
    'Animate Both',
    'Only True',
    'Only False'
  ], 'Both'),
  a = t.inValue('value false', 0),
  l = t.inValue('value true', 1),
  h = t.outTrigger('trigger'),
  u = t.outValue('value'),
  c = t.outValueBool('finished'),
  d = t.outTrigger('Finished Trigger');
  var p = CABLES.now();
  function g() {
    c.set(!1);
    var t = (CABLES.now() - p) / 1000,
    i = e.getValue(t);
    e.clear(),
    e.setValue(t, i),
    n.get() ? 'Only False' != o.get() ? e.setValue(t + s.get(), l.get())  : e.setValue(t, l.get())  : 'Only True' != o.get() ? e.setValue(t + s.get(), a.get())  : e.setValue(t, a.get())
  }
  t.toWorkPortsNeedToBeLinked(i),
  t.setPortGroup('Animation', [
    s,
    r
  ]),
  t.setPortGroup('Values', [
    a,
    l
  ]),
  o.onChange = n.onChange = a.onChange = l.onChange = s.onChange = g,
  g(),
  i.onTriggered = function () {
    var t = (CABLES.now() - p) / 1000;
    u.set(e.getValue(t)),
    e.hasEnded(t) && (c.get() || d.trigger(), c.set(!0)),
    h.trigger()
  }
},
Ops.Anim.BoolAnim.prototype = new CABLES.Op,
CABLES.OPS['06ad9d35-ccf5-4d31-889c-e23fa062588a'] = {
  f: Ops.Anim.BoolAnim,
  objName: 'Ops.Anim.BoolAnim'
},
Ops.Patch.PlayButton = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = t.inTrigger('Trigger'),
  i = t.inValueBool('Only if Audio Suspended'),
  n = t.inTriggerButton('Reset'),
  r = t.outTrigger('Next'),
  s = t.outString('Audiocontext State'),
  o = t.outValueBool('Clicked');
  t.toWorkPortsNeedToBeLinked(e);
  const a = t.patch.cgl.canvas.parentElement;
  var l = !1,
  h = null,
  u = null;
  function c() {
    u && u.remove(),
    h && h.remove(),
    h = document.createElement('div'),
    u = document.createElement('div'),
    h.style.width = '100px',
    h.style.height = '100px',
    h.style.left = '50%',
    h.style.top = '25%',
    h.style['border-radius'] = '50px',
    h.style['margin-left'] = '-50px',
    h.style['margin-top'] = '-50px',
    h.style.position = 'absolute',
    h.style.cursor = 'pointer',
    h.style.opacity = 0.7,
    h.style['z-index'] = 999999,
    h.style['background-color'] = 'rgba(55,55,55)',
    h.className="playcircle",
    u.style['border-style'] = 'solid',
    u.style['border-color'] = 'transparent transparent transparent #ccc',
    u.style['box-sizing'] = 'border-box',
    u.style.width = '50px',
    u.style.height = '50px',
    u.style['margin-top'] = '15px',
    u.style['margin-left'] = '33px',
    u.style['border-width'] = '35px 0px 35px 50px',
    u.style['pointer-events'] = 'none',
    u.className="playarrow",
    a.appendChild(h),
    h.appendChild(u),
    h.addEventListener('mouseenter', f),
    h.addEventListener('mouseleave', g),
    h.addEventListener('click', d),
    h.addEventListener('touchStart', d),
    t.onDelete = p
  }
  function d() {
    p(),
    window.audioContext && 'suspended' == window.audioContext.state && window.audioContext.resume(),
    l = !0,
    o.set(l)
  }
  function p() {
    u && u.remove(),
    h && h.remove()
  }
  function g() {
    h && (h.style.opacity = 0.7)
  }
  function f() {
    h && (h.style.opacity = 1)
  }
  c(),
  n.onTriggered = function () {
    c(),
    l = !1,
    o.set(l)
  },
  e.onTriggered = function () {
    window.audioContext && s.set(window.audioContext.state),
    i.get() && 'running' == window.audioContext.state && d(),
    l && r.trigger()
  }
},
Ops.Patch.PlayButton.prototype = new CABLES.Op,
CABLES.OPS['32e53fa2-4545-4c53-a94d-2204aa079246'] = {
  f: Ops.Patch.PlayButton,
  objName: 'Ops.Patch.PlayButton'
},
Ops.WebAudio.Output = function () {
  CABLES.Op.apply(this, arguments);
  const t = this;
  t.requirements = [
    CABLES.Requirements.WEBAUDIO
  ];
  var e = CABLES.WEBAUDIO.createAudioContext(t),
  i = 1,
  n = 0,
  r = 1,
  s = e.createGain(),
  o = e.destination;
  s.connect(o);
  var a = 1,
  l = (CABLES.WEBAUDIO.createAudioInPort(t, 'Audio In', s), t.inValueSlider('Volume', i)),
  h = t.inValueBool('Mute', !1);
  function u() {
    var t = l.get() * a;
    t >= n && t <= r ? s.gain.setValueAtTime(t, e.currentTime)  : s.gain.setValueAtTime(i * a, e.currentTime)
  }
  h.onChange = function () {
    h.get() ? s.gain.setValueAtTime(0, e.currentTime)  : u()
  },
  l.onChange = function () {
    h.get() || u()
  },
  t.onMasterVolumeChanged = function (t) {
    a = t,
    u()
  }
},
Ops.WebAudio.Output.prototype = new CABLES.Op,
CABLES.OPS['53fdbf4a-bc8d-4c5d-a698-f34fdeb53827'] = {
  f: Ops.WebAudio.Output,
  objName: 'Ops.WebAudio.Output'
},
Ops.WebAudio.AudioAnalyzer = function () {
  CABLES.Op.apply(this, arguments);
  const t = this;
  var e = CABLES.WEBAUDIO.createAudioContext(t);
  const i = t.inSwitch('FFT size', [
    64,
    128,
    256,
    512,
    1024
  ], 256),
  n = e.createAnalyser();
  n.smoothingTimeConstant = 0.3,
  n.fftSize = 256;
  const r = t.addInPort(new CABLES.Port(t, 'refresh', CABLES.OP_PORT_TYPE_FUNCTION)),
  s = (CABLES.WEBAUDIO.createAudioInPort(t, 'Audio In', n), t.inValueSelect('Data', [
    'Frequency',
    'Time Domain'
  ], 'Frequency')),
  o = t.outTrigger('Next'),
  a = (CABLES.WEBAUDIO.createAudioOutPort(t, 'Audio Out', n), t.addOutPort(new CABLES.Port(t, 'average volume', CABLES.OP_PORT_TYPE_VALUE))),
  l = t.addOutPort(new CABLES.Port(t, 'fft', CABLES.OP_PORT_TYPE_ARRAY));
  var h = n.frequencyBinCount,
  u = new Uint8Array(h),
  c = !0;
  i.onChange = function () {
    n.fftSize = i.get()
  },
  s.onChange = function () {
    'Frequency' == s.get() && (c = !0),
    'Time Domain' == s.get() && (c = !1)
  },
  r.onTriggered = function () {
    if (n.minDecibels = - 90, n.maxDecibels = 0, h != n.frequencyBinCount && (console.log('change!'), h = n.frequencyBinCount, u = new Uint8Array(h)), u) {
      for (var e = 0, i = 0; i < u.length; i++) e += u[i];
      var r = e / u.length;
      a.set(r / 128);
      try {
        c ? n.getByteFrequencyData(u)  : n.getByteTimeDomainData(u)
      } catch (e) {
        t.log(e)
      }
      l.set(null),
      l.set(u),
      o.trigger()
    }
  }
},
Ops.WebAudio.AudioAnalyzer.prototype = new CABLES.Op,
CABLES.OPS['22523fae-a623-401d-b952-a57c26de4b4e'] = {
  f: Ops.WebAudio.AudioAnalyzer,
  objName: 'Ops.WebAudio.AudioAnalyzer'
},
Ops.Sidebar.Sidebar = function () {
  CABLES.Op.apply(this, arguments);
  const t = this,
  e = 'cables-sidebar-style',
  i = 'cables-sidebar-dynamic-style',
  n = 'sidebar-cables',
  r = 'sidebar' + CABLES.uuid(),
  s = 'sidebar__items',
  o = 'sidebar__close-button',
  a = 'sidebar__close-button-icon',
  l = '',
  h = '';
  var u = '/*\n * SIDEBAR\n */\n\n.icon-chevron-down {\n\t\n    top: 2px;\n    right: 9px;\n}\n\n.iconsidebar-chevron-up {\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 2px;\n    right: 9px;\n}\n\n\n.sidebar-cables-right\n{\n    right: 0px;\n    left: initial !important;\n}\n\n.sidebar-cables {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000;\n  color: #BBBBBB;\n  width: 220px;\n  max-height: 100%;\n  box-sizing: border-box;\n  overflow-y: auto;\n  overflow-x: hidden;\n  font-size: 13px;\n  font-family: Arial;\n  line-height: 1em; /* prevent emojis from breaking height of the title */\n  --sidebar-border-radius: 4px;\n  --sidebar-monospace-font-stack: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;\n  --sidebar-hover-transition-time: .2s;\n}\n\n.sidebar-cables::selection {\n    background-color: #24baa7;\n    color: #EEEEEE;\n}\n\n.sidebar-cables::-webkit-scrollbar {\n    background-color: transparent;\n    --cables-scrollbar-width: 8px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-track {\n    background-color: transparent;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables::-webkit-scrollbar-thumb {\n    background-color: #333333;\n    border-radius: 4px;\n    width: var(--cables-scrollbar-width);\n}\n\n.sidebar-cables--closed {\n  width: auto;\n}\n\n.sidebar__close-button {\n  background-color: #1A1A1A;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */ \n  transition: background-color var(--sidebar-hover-transition-time);\n  color: #CCCCCC;\n  height: 22px;\n  box-sizing: border-box;\n  padding-top: 2px;\n  text-align: center;\n  cursor: pointer;\n  border-top: 1px solid #272727;\n  border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);\n  opacity: 1.0;\n  transition: opacity 0.3s;\n  overflow: hidden;\n}\n\n.sidebar__close-button-icon {\n    display: inline-block;\n    width: 21px;\n    height: 20px;\n    position: relative;\n    top: -1px;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-repeat: no-repeat;\n    background-position: 0 -1px;\n}\n\n.sidebar--closed .sidebar__close-button {\n    margin-top: 8px;\n    margin-left: 8px;\n    padding-top: 13px;\n    padding-left: 11px;\n    padding-right: 11px;\n    width: 46px;\n    height: 46px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.3;\n}\n\n.sidebar--closed .sidebar__close-button-icon {\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyMnB4IiBoZWlnaHQ9IjE3cHgiIHZpZXdCb3g9IjAgMCAyMiAxNyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4gICAgICAgIDx0aXRsZT5Hcm91cCAzPC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPjwvZGVmcz4gICAgPGcgaWQ9IkNhbnZhcy1TaWRlYmFyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJEZXNrdG9wLWdyZWVuLWJsdWlzaC1Db3B5LTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMC4wMDAwMDAsIC0yMi4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAuMDAwMDAwLCAyMi4wMDAwMDApIj4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNSwyLjUgTDIuNSwyLjUiIGlkPSJMaW5lLTIiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAuNSwyLjUgTDIxLjUsMi41IiBpZD0iTGluZS0yIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTAuNSw4LjUgTDExLjUsOC41IiBpZD0iTGluZS0yIiBzdHJva2U9IiM5Nzk3OTciIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPjwvcGF0aD4gICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5LjUsOC41IEwyMS41LDguNSIgaWQ9IkxpbmUtMiIgc3Ryb2tlPSIjOTc5Nzk3IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L3BhdGg+ICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0wLjUsMTQuNSBMNS41LDE0LjUiIGlkPSJMaW5lLTIiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNSwxNC41IEwyMS41LDE0LjUiIGlkPSJMaW5lLTIiIHN0cm9rZT0iIzk3OTc5NyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPiAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsLTMiIGZpbGw9IiM5Nzk3OTciIGN4PSI2LjUiIGN5PSIyLjUiIHI9IjIuNSI+PC9jaXJjbGU+ICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgZmlsbD0iIzk3OTc5NyIgY3g9IjE1LjUiIGN5PSI4LjUiIHI9IjIuNSI+PC9jaXJjbGU+ICAgICAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwtMyIgZmlsbD0iIzk3OTc5NyIgY3g9IjkuNSIgY3k9IjE0LjUiIHI9IjIuNSI+PC9jaXJjbGU+ICAgICAgICAgICAgPC9nPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);\n    background-position: 0px 0px;\n}\n\n.sidebar__close-button:hover {\n  background-color: #111111;\n  opacity: 1.0 !important;\n}\n\n/*\n * SIDEBAR ITEMS\n */\n\n.sidebar__items {\n  /* max-height: 1000px; */\n  /* transition: max-height 0.5;*/ \n}\n\n.sidebar--closed .sidebar__items {\n  /* max-height: 0; */\n  height: 0;\n  display: none;\n  pointer-interactions: none;\n}\n\n/*\n * SIDEBAR GROUP\n */\n\n.sidebar__group {\n  background-color: #1A1A1A;\n  overflow: hidden;\n  box-sizing: border-box;\n  animate: height;\n  /* max-height: 1000px; */\n  /* transition: max-height 0.5s; */\n  --sidebar-group-header-height: 28px;\n}\n\n.sidebar__group--closed {\n  /* max-height: 13px; */\n  height: var(--sidebar-group-header-height);\n}\n\n.sidebar__group-header {\n  box-sizing: border-box;\n  color: #EEEEEE;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */ \n  height: var(--sidebar-group-header-height);\n  padding-top: 7px;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  cursor: pointer;\n  transition: background-color var(--sidebar-hover-transition-time);\n  position: relative;\n}\n\n.sidebar__group-header:hover {\n  background-color: #111111;\n}\n\n.sidebar__group-header-title {\n  text-align: center;\n  overflow: hidden;\n  padding: 0 24px;\n}\n\n.sidebar__group-header-icon {\n    width: 17px;\n    height: 14px;\n    background-repeat: no-repeat;\n    display: inline-block;\n    position: absolute;\n    background-size: cover;\n    \n    /* icon open */\n    /* feather icon: chevron up */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\n    top: 4px;\n    right: 5px;\n    opacity: 0.0;\n    transition: opacity 0.3;\n}\n\n.sidebar__group-header:hover .sidebar__group-header-icon {\n    opacity: 1.0;\n}\n\n/* icon closed */\n.sidebar__group--closed .sidebar__group-header-icon {\n    /* feather icon: chevron down */\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    top: 4px;\n    right: 5px;\n}\n\n/*\n * SIDEBAR ITEM\n */\n\n.sidebar__item {\n  background-color: #eb4034;\n  box-sizing: border-box;\n  padding: 7px;\n}\n\n.sidebar__item-label {\n  display: inline-block;\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */ \n  width: calc(50% - 7px);\n  margin-right: 7px;\n  max-height: 1em;\n  text-overflow: ellipsis;\n  /* overflow: hidden; */\n}\n\n.sidebar__item-value-label {\n  font-family: var(--sidebar-monospace-font-stack);\n  display: inline-block;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  max-width: 50%;\n}\n\n.sidebar__item-value-label::selection {\n    background-color: #24baa7;\n    color: #EEEEEE;\n}\n\n.sidebar__item + .sidebar__item,\n.sidebar__item + .sidebar__group,\n.sidebar__group + .sidebar__item,\n.sidebar__group + .sidebar__group {\n  border-top: 1px solid #272727;\n}\n\n/*\n * SIDEBAR ITEM TOGGLE\n */\n\n.sidebar__toggle {\n    cursor: pointer;    \n}\n\n.sidebar__toggle-input {\n  --sidebar-toggle-input-color: #CCCCCC;\n  --sidebar-toggle-input-color-hover: #EEEEEE;\n  --sidebar-toggle-input-border-size: 2px;\n  display: inline;\n  float: right;\n  box-sizing: border-box;\n  border-radius: 50%;\n  cursor: pointer;\n  --toggle-size: 11px;\n  margin-top: 2px;\n  background-color: transparent;\n  border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\n  width: var(--toggle-size);\n  height: var(--toggle-size);\n  transition: background-color var(--sidebar-hover-transition-time);\n  transition: border-color var(--sidebar-hover-transition-time);\n}\n.sidebar__toggle:hover .sidebar__toggle-input {\n  border-color: var(--sidebar-toggle-input-color-hover);\n}\n\n.sidebar__toggle .sidebar__item-value-label {\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */ \n  max-width: calc(50% - 12px);\n}\n.sidebar__toggle-input::after { clear: both; }\n\n.sidebar__toggle--active .sidebar__toggle-input {\n  transition: background-color var(--sidebar-hover-transition-time);\n  background-color: var(--sidebar-toggle-input-color);\n}\n.sidebar__toggle--active .sidebar__toggle-input:hover {\n  background-color: var(--sidebar-toggle-input-color-hover);\n  border-color: var(--sidebar-toggle-input-color-hover);\n  transition: background-color var(--sidebar-hover-transition-time);\n  transition: border-color var(--sidebar-hover-transition-time);\n}\n\n/*\n * SIDEBAR ITEM BUTTON\n */\n\n.sidebar__button {}\n\n.sidebar__button-input {\n  -webkit-user-select: none;  /* Chrome all / Safari all */\n  -moz-user-select: none;     /* Firefox all */\n  -ms-user-select: none;      /* IE 10+ */\n  user-select: none;          /* Likely future */ \n  height: 24px;\n  background-color: #444444;\n  color: #CCCCCC;\n  box-sizing: border-box;\n  padding-top: 5px;\n  text-align: center;\n  border-radius: var(--sidebar-border-radius);\n  cursor: pointer;\n}\n\n.sidebar__button-input:hover {\n  background-color: #555555;\n}\n\n/*\n * VALUE DISPLAY (shows a value)\n */\n\n.sidebar__value-display {}\n\n/*\n * SLIDER\n */\n\n.sidebar__slider {\n  --sidebar-slider-input-height: 18px;\n}\n\n.sidebar__slider-input-wrapper {\n  width: 100%;\n  margin-top: 10px;\n  position: relative;\n}\n\n.sidebar__slider-input {\n  -webkit-appearance: none;  /* Override default CSS styles */\n  appearance: none;\n  margin: 0;\n  width: 100%;\n  height: var(--sidebar-slider-input-height);\n  background: #333333;\n  cursor: pointer;\n  outline: none;\n  -webkit-transition: .2s; /* 0.2 seconds transition on hover */\n  transition: background-color .2s;\n  border: none;\n}\n\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\n    border: none;\n}\n\n.sidebar__slider-input-active-track {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #CCCCCC; \n  pointer-events: none;\n  height: var(--sidebar-slider-input-height);\n  /* width: 10px; */\n}\n\n/* Mouse-over effects */\n.sidebar__slider-input:hover {\n  background-color: #444444;\n}\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */ \n.sidebar__slider-input::-webkit-slider-thumb {\n    -webkit-appearance: none; /* Override default look */\n    appearance: none;\n    width: var(--sidebar-slider-input-height);\n    /* width: 0 !important; */\n    height: var(--sidebar-slider-input-height);\n    background: #EEEEEE !important;\n    z-index: 999999999999 !important;\n    border: none;\n    border-radius: 0 !important;\n    cursor: pointer;\n}\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\n  background-color: #EEEEEE !important;\n}\n\n.sidebar__slider-input::-moz-range-thumb {\n    /* width: var(--sidebar-slider-input-height); */\n    width: 0 !important;\n    height: var(--sidebar-slider-input-height);\n    background: #EEEEEE;\n    cursor: pointer;\n    border-radius: 0 !important;\n    border: none;\n    outline: 0;\n    z-index: 99999999999999999 !important;\n}\n\n.sidebar__slider-input::-moz-range-track {\n  background-color: transparent;\n}\n\n.sidebar__slider-input::-moz-range-thumb:hover {\n  /* background-color: #EEEEEE; */\n}\n\n.sidebar__slider-input-wrapper:hover .sidebar__slider-input-active-track {\n  background-color: #EEEEEE;  \n}\n\n.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-moz-range-thumb {\n  background-color: #EEEEEE !important;  \n}\n\n.sidebar__slider-input-wrapper:hover .sidebar__slider-input::-webkit-slider-thumb {\n  background-color: #EEEEEE;  \n}\n\n.sidebar__slider input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n} \n\n.sidebar__slider input[type=text]:active, \n.sidebar__slider input[type=text]:focus,\n.sidebar__slider input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*\n * TEXT / DESCRIPTION\n */\n \n.sidebar__text .sidebar__item-label {\n    width: auto;\n    display: block;\n    max-height: none;\n    margin-right: 0;\n    line-height: 1.1em;\n} \n\n/*\n * SIDEBAR INPUT\n */\n.sidebar__text-input input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: 50%;\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n} \n\n.sidebar__text-input input[type=text]:active, \n.sidebar__text-input input[type=text]:focus,\n.sidebar__text-input input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*\n * SIDEBAR SELECT\n */\n \n .sidebar__select {}\n .sidebar__select-select {\n    color: #BBBBBB;\n    -webkit-appearance: none; \n    -moz-appearance: none;\n    appearance: none;\n    box-sizing: border-box;\n    width: 50%;\n    height: 18px;\n    background-color: #333333;\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\n    background-repeat: no-repeat;\n    background-position: 87px 1px;\n    background-size: 16px 16px;\n    margin: 0;\n    padding: 0 0 0 4px;\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n    outline: none;\n }\n \n.sidebar__select-select:hover,\n.sidebar__select-select:active,\n.sidebar__select-select:active {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n/*\n * COLOR PICKER\n */\n \n .sidebar__color-picker-color-input {}\n \n .sidebar__color-picker input[type=text] {\n    box-sizing: border-box;\n    background-color: #333333;\n    color: #BBBBBB;\n    display: inline-block;\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\n    height: 18px;\n    outline: none;\n    border: none;\n    border-radius: 0;\n    padding: 0 0 0 4px !important;\n    margin: 0;\n    margin-right: 7px;\n} \n\n.sidebar__color-picker input[type=text]:active, \n.sidebar__color-picker input[type=text]:focus,\n.sidebar__color-picker input[type=text]:hover {\n    background-color: #444444;\n    color: #EEEEEE;\n}\n\n.sidebar__color-picker input[type=color],\n.sidebar__palette-picker input[type=color] {\n    display: inline-block;\n    border-radius: 100%;\n    height: 14px;\n    width: 14px;\n    padding: 0;\n    border: none;\n    border-color: transparent;\n    outline: none;\n    background: none;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    cursor: pointer;\n    position: relative;\n    top: 3px;\n}\n.sidebar__color-picker input[type=color]:focus,\n.sidebar__palette-picker input[type=color]:focus {\n    outline: none;\n}\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\n    border: none;\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\n    padding: 0;\t\n}\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\n    border: none;\n    border-radius: 100%;\n}\n\n/*\n * Palette Picker\n */\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\n    margin-left: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\n    margin-right: 0;\n}\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\n    margin: 0 4px;\n}\n\n.sidebar__palette-picker .circlebutton {\n    width: 14px;\n    height: 14px;\n    border-radius: 1em;\n    display: inline-block;\n    top: 3px;\n    position: relative;\n}\n\n/*\n * Preset\n */\n.sidebar__item-presets-preset\n{\n    padding:4px;\n    cursor:pointer;\n    padding-left:8px;\n    padding-right:8px;\n    margin-right:4px;\n    background-color:#444;\n\n}\n\n.sidebar__item-presets-preset:hover\n{\n    background-color:#666;\n}';
  let c = null,
  d = null;
  var p = t.inValueBool('Visible', !0),
  g = t.inValueSlider('Opacity', 1),
  f = t.inValueBool('Default Minimized'),
  _ = t.inValueSlider('Minimized Opacity', 0.5),
  m = t.inValueBool('Side'),
  b = t.outObject('childs'),
  v = document.querySelector('.' + r);
  if (v || (v = function () {
    var e = document.createElement('div');
    e.classList.add(n),
    e.classList.add(r);
    var i = t.patch.cgl.canvas.parentElement;
    if (!i) return void console.warn('[sidebar] no canvas parentelement found...');
    i.appendChild(e);
    var l = document.createElement('div');
    return l.classList.add(s),
    e.appendChild(l),
    (c = document.createElement('div')).classList.add(o),
    c.addEventListener('click', A),
    e.appendChild(c),
    (d = document.createElement('span')).classList.add(a),
    c.appendChild(d),
    e
  }()), v) {
    var I = v.querySelector('.' + s);
    b.set({
      parentElement: I,
      parentOp: t
    }),
    E(),
    function () {
      var t = document.querySelectorAll('.' + e);
      t && t.forEach(function (t) {
        t.parentNode.removeChild(t)
      });
      var i = document.createElement('style');
      i.innerHTML = u,
      i.classList.add(e),
      document.body.appendChild(i)
    }(),
    M(),
    p.onChange = function () {
      p.get() ? v.style.display = 'block' : v.style.display = 'none'
    },
    g.onChange = function () {
      var t = g.get();
      v.style.opacity = t
    },
    f.onChange = E,
    _.onChange = function () {
      M()
    },
    t.onDelete = function () {
      t = v,
      t && t.parentNode && t.parentNode.removeChild && t.parentNode.removeChild(t);
      var t
    },
    m.onChange = function () {
      m.get() ? v.classList.add('sidebar-cables-right')  : v.classList.remove('sidebar-cables-right')
    },
    m.onChanged = function () {
    }
  }
  function E() {
    c && (f.get() ? v.classList.add('sidebar--closed')  : v.classList.remove('sidebar--closed'))
  }
  function M() {
    let t = document.querySelectorAll('.' + i);
    t && t.forEach(function (t) {
      t.parentNode.removeChild(t)
    });
    let e = document.createElement('style');
    e.classList.add(i);
    let n = '.sidebar--closed .sidebar__close-button { ';
    n += 'opacity: ' + _.get(),
    n += '}';
    let r = document.createTextNode(n);
    e.appendChild(r),
    document.body.appendChild(e)
  }
  function A(t) {
    if (t.stopPropagation(), !v) return void console.error('Sidebar could not be closed...');
    v.classList.toggle('sidebar--closed');
    t.target;
    let e = l;
    v.classList.contains('sidebar--closed') && (e = h)
  }
},
Ops.Sidebar.Sidebar.prototype = new CABLES.Op,
CABLES.OPS['5a681c35-78ce-4cb3-9858-bc79c34c6819'] = {
  f: Ops.Sidebar.Sidebar,
  objName: 'Ops.Sidebar.Sidebar'
},
Ops.Sidebar.Button = function () {
  CABLES.Op.apply(this, arguments);
  const t = this;
  var e = t.inObject('link'),
  i = t.inValueString('Text', 'Button'),
  n = t.outObject('childs'),
  r = t.outTrigger('Pressed Trigger'),
  s = document.createElement('div');
  s.classList.add('sidebar__item'),
  s.classList.add('sidebar--button');
  var o = document.createElement('div');
  o.classList.add('sidebar__button-input'),
  s.appendChild(o),
  o.addEventListener('click', function () {
    r.trigger()
  });
  var a = document.createTextNode(i.get());
  o.appendChild(a),
  t.toWorkNeedsParent('Ops.Sidebar.Sidebar'),
  e.onChange = function () {
    var t = e.get();
    t && t.parentElement ? (t.parentElement.appendChild(s), n.set(null), n.set(t))  : s.parentElement && s.parentElement.removeChild(s)
  },
  i.onChange = function () {
    var e = i.get();
    o.textContent = e,
    CABLES.UI && t.setTitle('Button: ' + e)
  },
  t.onDelete = function () {
    !function (t) {
      t && t.parentNode && t.parentNode.removeChild && t.parentNode.removeChild(t)
    }(s)
  }
},
Ops.Sidebar.Button.prototype = new CABLES.Op,
CABLES.OPS['118df748-16d1-46f4-b8fc-38d7cc5a0aab'] = {
  f: Ops.Sidebar.Button,
  objName: 'Ops.Sidebar.Button'
},
Ops.WebAudio.MediaPlayer = function () {
  CABLES.Op.apply(this, arguments);
  const t = this;
  var e = t.addInPort(new CABLES.Port(t, 'Volume', CABLES.OP_PORT_TYPE_VALUE, {
    display: 'range'
  })),
  i = t.addInPort(new CABLES.Port(t, 'File', CABLES.OP_PORT_TYPE_VALUE, {
    display: 'file',
    filter: 'audio'
  })),
  n = t.addInPort(new CABLES.Port(t, 'Play', CABLES.OP_PORT_TYPE_FUNCTION, {
    display: 'button'
  })),
  r = t.addInPort(new CABLES.Port(t, 'Pause', CABLES.OP_PORT_TYPE_FUNCTION, {
    display: 'button'
  })),
  s = t.addInPort(new CABLES.Port(t, 'Rewind', CABLES.OP_PORT_TYPE_FUNCTION, {
    display: 'button'
  })),
  o = t.addInPort(new CABLES.Port(t, 'Seek Position (Seconds)', CABLES.OP_PORT_TYPE_VALUE)),
  a = t.addInPort(new CABLES.Port(t, 'Jump To Seek Position', CABLES.OP_PORT_TYPE_FUNCTION, {
    display: 'button'
  })),
  l = t.addOutPort(new CABLES.Port(t, 'Audio Out', CABLES.OP_PORT_TYPE_OBJECT)),
  h = t.addOutPort(new CABLES.Port(t, 'Duration', CABLES.OP_PORT_TYPE_VALUE));
  e.set(1),
  h.set(0);
  var u = CABLES.WEBAUDIO.createAudioContext(t),
  c = null,
  d = null;
  function p() {
    c && (c.currentTime = o.get())
  }
  t.onDelete = function () {
    c && c.pause()
  },
  n.onTriggered = function () {
    c && c.play()
  },
  r.onTriggered = function () {
    c && !c.paused && c.pause()
  },
  s.onTriggered = function () {
    c && (c.currentTime = 0)
  },
  o.onChange = p,
  a.onTriggered = p,
  i.onChange = function () {
    !function () {
      if (i.get()) {
        (c = new Audio).crossOrigin = 'anonymous';
        var e = t.patch.getFilePath(String(i.get()));
        c.src = e,
        d = u.createMediaElementSource(c),
        c.addEventListener('loadedmetadata', function () {
          h.set(c.duration)
        }, !1),
        l.set(d)
      }
    }()
  },
  e.onChange = function () {
    c && (c.volume = e.get())
  }
},
Ops.WebAudio.MediaPlayer.prototype = new CABLES.Op,
CABLES.OPS['6bf8a173-a9f9-48d8-b23a-76380dfbe4c5'] = {
  f: Ops.WebAudio.MediaPlayer,
  objName: 'Ops.WebAudio.MediaPlayer'
};
