var No = Object.defineProperty;
var Fo = (n, e, t) => e in n ? No(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ot = (n, e, t) => (Fo(n, typeof e != "symbol" ? e + "" : e, t), t);
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ri = "161";
const Gt = "", xt = "srgb", sn = "srgb-linear", Nr = "display-p3", Hi = "display-p3-linear", Ui = "linear", et = "srgb", Oi = "rec709", Bi = "p3";
const Zr = "300 es";
class on {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(t) === -1 && i[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const i = this._listeners[e.type];
    if (i !== void 0) {
      e.target = this;
      const r = i.slice(0);
      for (let s = 0, a = r.length; s < a; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const yt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], er = Math.PI / 180, Pr = 180 / Math.PI;
function si() {
  const n = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, i = Math.random() * 4294967295 | 0;
  return (yt[n & 255] + yt[n >> 8 & 255] + yt[n >> 16 & 255] + yt[n >> 24 & 255] + "-" + yt[e & 255] + yt[e >> 8 & 255] + "-" + yt[e >> 16 & 15 | 64] + yt[e >> 24 & 255] + "-" + yt[t & 63 | 128] + yt[t >> 8 & 255] + "-" + yt[t >> 16 & 255] + yt[t >> 24 & 255] + yt[i & 255] + yt[i >> 8 & 255] + yt[i >> 16 & 255] + yt[i >> 24 & 255]).toLowerCase();
}
function zt(n, e, t) {
  return Math.max(e, Math.min(t, n));
}
function Io(n, e) {
  return (n % e + e) % e;
}
function tr(n, e, t) {
  return (1 - t) * n + t * e;
}
function Kr(n) {
  return (n & n - 1) === 0 && n !== 0;
}
function Ar(n) {
  return Math.pow(2, Math.floor(Math.log(n) / Math.LN2));
}
function Qn(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return n / 4294967295;
    case Uint16Array:
      return n / 65535;
    case Uint8Array:
      return n / 255;
    case Int32Array:
      return Math.max(n / 2147483647, -1);
    case Int16Array:
      return Math.max(n / 32767, -1);
    case Int8Array:
      return Math.max(n / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Ct(n, e) {
  switch (e.constructor) {
    case Float32Array:
      return n;
    case Uint32Array:
      return Math.round(n * 4294967295);
    case Uint16Array:
      return Math.round(n * 65535);
    case Uint8Array:
      return Math.round(n * 255);
    case Int32Array:
      return Math.round(n * 2147483647);
    case Int16Array:
      return Math.round(n * 32767);
    case Int8Array:
      return Math.round(n * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Te {
  constructor(e = 0, t = 0) {
    Te.prototype.isVector2 = !0, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * i + r[6], this.y = r[1] * t + r[4] * i + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(zt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y;
    return t * t + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const i = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * i - a * r + e.x, this.y = s * r + a * i + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Be {
  constructor(e, t, i, r, s, a, o, c, l) {
    Be.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, r, s, a, o, c, l);
  }
  set(e, t, i, r, s, a, o, c, l) {
    const f = this.elements;
    return f[0] = e, f[1] = r, f[2] = o, f[3] = t, f[4] = s, f[5] = c, f[6] = i, f[7] = a, f[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, r = t.elements, s = this.elements, a = i[0], o = i[3], c = i[6], l = i[1], f = i[4], d = i[7], h = i[2], g = i[5], v = i[8], y = r[0], p = r[3], u = r[6], w = r[1], _ = r[4], b = r[7], z = r[2], A = r[5], P = r[8];
    return s[0] = a * y + o * w + c * z, s[3] = a * p + o * _ + c * A, s[6] = a * u + o * b + c * P, s[1] = l * y + f * w + d * z, s[4] = l * p + f * _ + d * A, s[7] = l * u + f * b + d * P, s[2] = h * y + g * w + v * z, s[5] = h * p + g * _ + v * A, s[8] = h * u + g * b + v * P, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8];
    return t * a * f - t * o * l - i * s * f + i * o * c + r * s * l - r * a * c;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], d = f * a - o * l, h = o * c - f * s, g = l * s - a * c, v = t * d + i * h + r * g;
    if (v === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / v;
    return e[0] = d * y, e[1] = (r * l - f * i) * y, e[2] = (o * i - r * a) * y, e[3] = h * y, e[4] = (f * t - r * c) * y, e[5] = (r * s - o * t) * y, e[6] = g * y, e[7] = (i * c - l * t) * y, e[8] = (a * t - i * s) * y, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, i, r, s, a, o) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      i * c,
      i * l,
      -i * (c * a + l * o) + a + e,
      -r * l,
      r * c,
      -r * (-l * a + c * o) + o + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(nr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(nr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(nr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(
      1,
      0,
      e.x,
      0,
      1,
      e.y,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      i,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== i[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 9; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const nr = /* @__PURE__ */ new Be();
function Qs(n) {
  for (let e = n.length - 1; e >= 0; --e)
    if (n[e] >= 65535)
      return !0;
  return !1;
}
function Gi(n) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", n);
}
function Uo() {
  const n = Gi("canvas");
  return n.style.display = "block", n;
}
const $r = {};
function qn(n) {
  n in $r || ($r[n] = !0, console.warn(n));
}
const Qr = /* @__PURE__ */ new Be().set(
  0.8224621,
  0.177538,
  0,
  0.0331941,
  0.9668058,
  0,
  0.0170827,
  0.0723974,
  0.9105199
), Jr = /* @__PURE__ */ new Be().set(
  1.2249401,
  -0.2249404,
  0,
  -0.0420569,
  1.0420571,
  0,
  -0.0196376,
  -0.0786361,
  1.0982735
), ui = {
  [sn]: {
    transfer: Ui,
    primaries: Oi,
    toReference: (n) => n,
    fromReference: (n) => n
  },
  [xt]: {
    transfer: et,
    primaries: Oi,
    toReference: (n) => n.convertSRGBToLinear(),
    fromReference: (n) => n.convertLinearToSRGB()
  },
  [Hi]: {
    transfer: Ui,
    primaries: Bi,
    toReference: (n) => n.applyMatrix3(Jr),
    fromReference: (n) => n.applyMatrix3(Qr)
  },
  [Nr]: {
    transfer: et,
    primaries: Bi,
    toReference: (n) => n.convertSRGBToLinear().applyMatrix3(Jr),
    fromReference: (n) => n.applyMatrix3(Qr).convertLinearToSRGB()
  }
}, Oo = /* @__PURE__ */ new Set([sn, Hi]), je = {
  enabled: !0,
  _workingColorSpace: sn,
  get workingColorSpace() {
    return this._workingColorSpace;
  },
  set workingColorSpace(n) {
    if (!Oo.has(n))
      throw new Error(`Unsupported working color space, "${n}".`);
    this._workingColorSpace = n;
  },
  convert: function(n, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return n;
    const i = ui[e].toReference, r = ui[t].fromReference;
    return r(i(n));
  },
  fromWorkingColorSpace: function(n, e) {
    return this.convert(n, this._workingColorSpace, e);
  },
  toWorkingColorSpace: function(n, e) {
    return this.convert(n, e, this._workingColorSpace);
  },
  getPrimaries: function(n) {
    return ui[n].primaries;
  },
  getTransfer: function(n) {
    return n === Gt ? Ui : ui[n].transfer;
  }
};
function Xn(n) {
  return n < 0.04045 ? n * 0.0773993808 : Math.pow(n * 0.9478672986 + 0.0521327014, 2.4);
}
function ir(n) {
  return n < 31308e-7 ? n * 12.92 : 1.055 * Math.pow(n, 0.41666) - 0.055;
}
let An;
class Js {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      An === void 0 && (An = Gi("canvas")), An.width = e.width, An.height = e.height;
      const i = An.getContext("2d");
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height), t = An;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Gi("canvas");
      t.width = e.width, t.height = e.height;
      const i = t.getContext("2d");
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++)
        s[a] = Xn(s[a] / 255) * 255;
      return i.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let i = 0; i < t.length; i++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[i] = Math.floor(Xn(t[i] / 255) * 255) : t[i] = Xn(t[i]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Bo = 0;
class eo {
  constructor(e = null) {
    this.isSource = !0, Object.defineProperty(this, "id", { value: Bo++ }), this.uuid = si(), this.data = e, this.dataReady = !0, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const i = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(rr(r[a].image)) : s.push(rr(r[a]));
      } else
        s = rr(r);
      i.url = s;
    }
    return t || (e.images[this.uuid] = i), i;
  }
}
function rr(n) {
  return typeof HTMLImageElement < "u" && n instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && n instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && n instanceof ImageBitmap ? Js.getDataURL(n) : n.data ? {
    data: Array.from(n.data),
    width: n.width,
    height: n.height,
    type: n.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Go = 0;
class Mt extends on {
  constructor(e = Mt.DEFAULT_IMAGE, t = Mt.DEFAULT_MAPPING, i = 1001, r = 1001, s = 1006, a = 1008, o = 1023, c = 1009, l = Mt.DEFAULT_ANISOTROPY, f = Gt) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Go++ }), this.uuid = si(), this.name = "", this.source = new eo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = l, this.format = o, this.internalFormat = null, this.type = c, this.offset = new Te(0, 0), this.repeat = new Te(1, 1), this.center = new Te(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Be(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof f == "string" ? this.colorSpace = f : (qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = f === 3001 ? xt : Gt), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const i = {
      metadata: {
        version: 4.6,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    return Object.keys(this.userData).length > 0 && (i.userData = this.userData), t || (e.textures[this.uuid] = i), i;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case 1e3:
          e.x = e.x - Math.floor(e.x);
          break;
        case 1001:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case 1e3:
          e.y = e.y - Math.floor(e.y);
          break;
        case 1001:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === xt ? 3001 : 3e3;
  }
  set encoding(e) {
    qn("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === 3001 ? xt : Gt;
  }
}
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = 300;
Mt.DEFAULT_ANISOTROPY = 1;
class ft {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    ft.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = i, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, i, r) {
    return this.x = e, this.y = t, this.z = i, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * i + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * i + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * i + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * i + a[11] * r + a[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, i, r, s;
    const c = e.elements, l = c[0], f = c[4], d = c[8], h = c[1], g = c[5], v = c[9], y = c[2], p = c[6], u = c[10];
    if (Math.abs(f - h) < 0.01 && Math.abs(d - y) < 0.01 && Math.abs(v - p) < 0.01) {
      if (Math.abs(f + h) < 0.1 && Math.abs(d + y) < 0.1 && Math.abs(v + p) < 0.1 && Math.abs(l + g + u - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const _ = (l + 1) / 2, b = (g + 1) / 2, z = (u + 1) / 2, A = (f + h) / 4, P = (d + y) / 4, W = (v + p) / 4;
      return _ > b && _ > z ? _ < 0.01 ? (i = 0, r = 0.707106781, s = 0.707106781) : (i = Math.sqrt(_), r = A / i, s = P / i) : b > z ? b < 0.01 ? (i = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(b), i = A / r, s = W / r) : z < 0.01 ? (i = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(z), i = P / s, r = W / s), this.set(i, r, s, t), this;
    }
    let w = Math.sqrt((p - v) * (p - v) + (d - y) * (d - y) + (h - f) * (h - f));
    return Math.abs(w) < 1e-3 && (w = 1), this.x = (p - v) / w, this.y = (d - y) / w, this.z = (h - f) / w, this.w = Math.acos((l + g + u - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this.w = e.w + (t.w - e.w) * i, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ho extends on {
  constructor(e = 1, t = 1, i = {}) {
    super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new ft(0, 0, e, t), this.scissorTest = !1, this.viewport = new ft(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    i.encoding !== void 0 && (qn("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), i.colorSpace = i.encoding === 3001 ? xt : Gt), i = Object.assign({
      generateMipmaps: !1,
      internalFormat: null,
      minFilter: 1006,
      depthBuffer: !0,
      stencilBuffer: !1,
      depthTexture: null,
      samples: 0
    }, i), this.texture = new Mt(r, i.mapping, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = i.generateMipmaps, this.texture.internalFormat = i.internalFormat, this.depthBuffer = i.depthBuffer, this.stencilBuffer = i.stencilBuffer, this.depthTexture = i.depthTexture, this.samples = i.samples;
  }
  setSize(e, t, i = 1) {
    (this.width !== e || this.height !== t || this.depth !== i) && (this.width = e, this.height = t, this.depth = i, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = i, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new eo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class wt extends Ho {
  constructor(e = 1, t = 1, i = {}) {
    super(e, t, i), this.isWebGLRenderTarget = !0;
  }
}
class to extends Mt {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class ko extends Mt {
  constructor(e = null, t = 1, i = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: i, depth: r }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class oi {
  constructor(e = 0, t = 0, i = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = i, this._w = r;
  }
  static slerpFlat(e, t, i, r, s, a, o) {
    let c = i[r + 0], l = i[r + 1], f = i[r + 2], d = i[r + 3];
    const h = s[a + 0], g = s[a + 1], v = s[a + 2], y = s[a + 3];
    if (o === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = f, e[t + 3] = d;
      return;
    }
    if (o === 1) {
      e[t + 0] = h, e[t + 1] = g, e[t + 2] = v, e[t + 3] = y;
      return;
    }
    if (d !== y || c !== h || l !== g || f !== v) {
      let p = 1 - o;
      const u = c * h + l * g + f * v + d * y, w = u >= 0 ? 1 : -1, _ = 1 - u * u;
      if (_ > Number.EPSILON) {
        const z = Math.sqrt(_), A = Math.atan2(z, u * w);
        p = Math.sin(p * A) / z, o = Math.sin(o * A) / z;
      }
      const b = o * w;
      if (c = c * p + h * b, l = l * p + g * b, f = f * p + v * b, d = d * p + y * b, p === 1 - o) {
        const z = 1 / Math.sqrt(c * c + l * l + f * f + d * d);
        c *= z, l *= z, f *= z, d *= z;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = f, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, i, r, s, a) {
    const o = i[r], c = i[r + 1], l = i[r + 2], f = i[r + 3], d = s[a], h = s[a + 1], g = s[a + 2], v = s[a + 3];
    return e[t] = o * v + f * d + c * g - l * h, e[t + 1] = c * v + f * h + l * d - o * g, e[t + 2] = l * v + f * g + o * h - c * d, e[t + 3] = f * v - o * d - c * h - l * g, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, i, r) {
    return this._x = e, this._y = t, this._z = i, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = !0) {
    const i = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, c = Math.sin, l = o(i / 2), f = o(r / 2), d = o(s / 2), h = c(i / 2), g = c(r / 2), v = c(s / 2);
    switch (a) {
      case "XYZ":
        this._x = h * f * d + l * g * v, this._y = l * g * d - h * f * v, this._z = l * f * v + h * g * d, this._w = l * f * d - h * g * v;
        break;
      case "YXZ":
        this._x = h * f * d + l * g * v, this._y = l * g * d - h * f * v, this._z = l * f * v - h * g * d, this._w = l * f * d + h * g * v;
        break;
      case "ZXY":
        this._x = h * f * d - l * g * v, this._y = l * g * d + h * f * v, this._z = l * f * v + h * g * d, this._w = l * f * d - h * g * v;
        break;
      case "ZYX":
        this._x = h * f * d - l * g * v, this._y = l * g * d + h * f * v, this._z = l * f * v - h * g * d, this._w = l * f * d + h * g * v;
        break;
      case "YZX":
        this._x = h * f * d + l * g * v, this._y = l * g * d + h * f * v, this._z = l * f * v - h * g * d, this._w = l * f * d - h * g * v;
        break;
      case "XZY":
        this._x = h * f * d - l * g * v, this._y = l * g * d - h * f * v, this._z = l * f * v + h * g * d, this._w = l * f * d + h * g * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const i = t / 2, r = Math.sin(i);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(i), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, i = t[0], r = t[4], s = t[8], a = t[1], o = t[5], c = t[9], l = t[2], f = t[6], d = t[10], h = i + o + d;
    if (h > 0) {
      const g = 0.5 / Math.sqrt(h + 1);
      this._w = 0.25 / g, this._x = (f - c) * g, this._y = (s - l) * g, this._z = (a - r) * g;
    } else if (i > o && i > d) {
      const g = 2 * Math.sqrt(1 + i - o - d);
      this._w = (f - c) / g, this._x = 0.25 * g, this._y = (r + a) / g, this._z = (s + l) / g;
    } else if (o > d) {
      const g = 2 * Math.sqrt(1 + o - i - d);
      this._w = (s - l) / g, this._x = (r + a) / g, this._y = 0.25 * g, this._z = (c + f) / g;
    } else {
      const g = 2 * Math.sqrt(1 + d - i - o);
      this._w = (a - r) / g, this._x = (s + l) / g, this._y = (c + f) / g, this._z = 0.25 * g;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let i = e.dot(t) + 1;
    return i < Number.EPSILON ? (i = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = i) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = i)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = i), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(zt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const i = this.angleTo(e);
    if (i === 0)
      return this;
    const r = Math.min(1, t / i);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const i = e._x, r = e._y, s = e._z, a = e._w, o = t._x, c = t._y, l = t._z, f = t._w;
    return this._x = i * f + a * o + r * l - s * c, this._y = r * f + a * c + s * o - i * l, this._z = s * f + a * l + i * c - r * o, this._w = a * f - i * o - r * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const i = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + i * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1)
      return this._w = a, this._x = i, this._y = r, this._z = s, this;
    const c = 1 - o * o;
    if (c <= Number.EPSILON) {
      const g = 1 - t;
      return this._w = g * a + t * this._w, this._x = g * i + t * this._x, this._y = g * r + t * this._y, this._z = g * s + t * this._z, this.normalize(), this;
    }
    const l = Math.sqrt(c), f = Math.atan2(l, o), d = Math.sin((1 - t) * f) / l, h = Math.sin(t * f) / l;
    return this._w = a * d + this._w * h, this._x = i * d + this._x * h, this._y = r * d + this._y * h, this._z = s * d + this._z * h, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, i) {
    return this.copy(e).slerp(t, i);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), i = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      i * Math.sin(s),
      i * Math.cos(s),
      t * Math.sin(r)
    );
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class D {
  constructor(e = 0, t = 0, i = 0) {
    D.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = i;
  }
  set(e, t, i) {
    return i === void 0 && (i = this.z), this.x = e, this.y = t, this.z = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(es.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(es.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * i + s[6] * r, this.y = s[1] * t + s[4] * i + s[7] * r, this.z = s[2] * t + s[5] * i + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * i + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * i + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * i + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * i + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, i = this.y, r = this.z, s = e.x, a = e.y, o = e.z, c = e.w, l = 2 * (a * r - o * i), f = 2 * (o * t - s * r), d = 2 * (s * i - a * t);
    return this.x = t + c * l + a * d - o * f, this.y = i + c * f + o * l - s * d, this.z = r + c * d + s * f - a * l, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, i = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * i + s[8] * r, this.y = s[1] * t + s[5] * i + s[9] * r, this.z = s[2] * t + s[6] * i + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(t, i)));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, i) {
    return this.x = e.x + (t.x - e.x) * i, this.y = e.y + (t.y - e.y) * i, this.z = e.z + (t.z - e.z) * i, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const i = e.x, r = e.y, s = e.z, a = t.x, o = t.y, c = t.z;
    return this.x = r * c - s * o, this.y = s * a - i * c, this.z = i * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const i = e.dot(this) / t;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return sr.copy(this).projectOnVector(e), this.sub(sr);
  }
  reflect(e) {
    return this.sub(sr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const i = this.dot(e) / t;
    return Math.acos(zt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, i = this.y - e.y, r = this.z - e.z;
    return t * t + i * i + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, i) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(i), this.y = Math.cos(t) * e, this.z = r * Math.cos(i), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, i) {
    return this.x = e * Math.sin(t), this.y = i, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), i = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = i, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, i = Math.sqrt(1 - e ** 2);
    return this.x = i * Math.cos(t), this.y = i * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const sr = /* @__PURE__ */ new D(), es = /* @__PURE__ */ new oi();
class ai {
  constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t += 3)
      this.expandByPoint(kt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, i = e.count; t < i; t++)
      this.expandByPoint(kt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, i = e.length; t < i; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const i = kt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const s = i.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, kt) : kt.fromBufferAttribute(s, a), kt.applyMatrix4(e.matrixWorld), this.expandByPoint(kt);
      else
        e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), di.copy(e.boundingBox)) : (i.boundingBox === null && i.computeBoundingBox(), di.copy(i.boundingBox)), di.applyMatrix4(e.matrixWorld), this.union(di);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++)
      this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, kt), kt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, i;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, i = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, i = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, i += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, i += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, i += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, i += e.normal.z * this.min.z), t <= -e.constant && i >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(Jn), hi.subVectors(this.max, Jn), Cn.subVectors(e.a, Jn), zn.subVectors(e.b, Jn), Rn.subVectors(e.c, Jn), an.subVectors(zn, Cn), cn.subVectors(Rn, zn), yn.subVectors(Cn, Rn);
    let t = [
      0,
      -an.z,
      an.y,
      0,
      -cn.z,
      cn.y,
      0,
      -yn.z,
      yn.y,
      an.z,
      0,
      -an.x,
      cn.z,
      0,
      -cn.x,
      yn.z,
      0,
      -yn.x,
      -an.y,
      an.x,
      0,
      -cn.y,
      cn.x,
      0,
      -yn.y,
      yn.x,
      0
    ];
    return !or(t, Cn, zn, Rn, hi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !or(t, Cn, zn, Rn, hi)) ? !1 : (pi.crossVectors(an, cn), t = [pi.x, pi.y, pi.z], or(t, Cn, zn, Rn, hi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, kt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(kt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (Jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), Jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), Jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), Jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), Jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), Jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), Jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), Jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(Jt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Jt = [
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D(),
  /* @__PURE__ */ new D()
], kt = /* @__PURE__ */ new D(), di = /* @__PURE__ */ new ai(), Cn = /* @__PURE__ */ new D(), zn = /* @__PURE__ */ new D(), Rn = /* @__PURE__ */ new D(), an = /* @__PURE__ */ new D(), cn = /* @__PURE__ */ new D(), yn = /* @__PURE__ */ new D(), Jn = /* @__PURE__ */ new D(), hi = /* @__PURE__ */ new D(), pi = /* @__PURE__ */ new D(), Sn = /* @__PURE__ */ new D();
function or(n, e, t, i, r) {
  for (let s = 0, a = n.length - 3; s <= a; s += 3) {
    Sn.fromArray(n, s);
    const o = r.x * Math.abs(Sn.x) + r.y * Math.abs(Sn.y) + r.z * Math.abs(Sn.z), c = e.dot(Sn), l = t.dot(Sn), f = i.dot(Sn);
    if (Math.max(-Math.max(c, l, f), Math.min(c, l, f)) > o)
      return !1;
  }
  return !0;
}
const Vo = /* @__PURE__ */ new ai(), ei = /* @__PURE__ */ new D(), ar = /* @__PURE__ */ new D();
class ki {
  constructor(e = new D(), t = -1) {
    this.isSphere = !0, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const i = this.center;
    t !== void 0 ? i.copy(t) : Vo.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, i.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const i = this.center.distanceToSquared(e);
    return t.copy(e), i > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    ei.subVectors(e, this.center);
    const t = ei.lengthSq();
    if (t > this.radius * this.radius) {
      const i = Math.sqrt(t), r = (i - this.radius) * 0.5;
      this.center.addScaledVector(ei, r / i), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ar.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ei.copy(e.center).add(ar)), this.expandByPoint(ei.copy(e.center).sub(ar))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const en = /* @__PURE__ */ new D(), cr = /* @__PURE__ */ new D(), gi = /* @__PURE__ */ new D(), ln = /* @__PURE__ */ new D(), lr = /* @__PURE__ */ new D(), mi = /* @__PURE__ */ new D(), fr = /* @__PURE__ */ new D();
class Fr {
  constructor(e = new D(), t = new D(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, en)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const i = t.dot(this.direction);
    return i < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = en.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (en.copy(this.origin).addScaledVector(this.direction, t), en.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, i, r) {
    cr.copy(e).add(t).multiplyScalar(0.5), gi.copy(t).sub(e).normalize(), ln.copy(this.origin).sub(cr);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(gi), o = ln.dot(this.direction), c = -ln.dot(gi), l = ln.lengthSq(), f = Math.abs(1 - a * a);
    let d, h, g, v;
    if (f > 0)
      if (d = a * c - o, h = a * o - c, v = s * f, d >= 0)
        if (h >= -v)
          if (h <= v) {
            const y = 1 / f;
            d *= y, h *= y, g = d * (d + a * h + 2 * o) + h * (a * d + h + 2 * c) + l;
          } else
            h = s, d = Math.max(0, -(a * h + o)), g = -d * d + h * (h + 2 * c) + l;
        else
          h = -s, d = Math.max(0, -(a * h + o)), g = -d * d + h * (h + 2 * c) + l;
      else
        h <= -v ? (d = Math.max(0, -(-a * s + o)), h = d > 0 ? -s : Math.min(Math.max(-s, -c), s), g = -d * d + h * (h + 2 * c) + l) : h <= v ? (d = 0, h = Math.min(Math.max(-s, -c), s), g = h * (h + 2 * c) + l) : (d = Math.max(0, -(a * s + o)), h = d > 0 ? s : Math.min(Math.max(-s, -c), s), g = -d * d + h * (h + 2 * c) + l);
    else
      h = a > 0 ? -s : s, d = Math.max(0, -(a * h + o)), g = -d * d + h * (h + 2 * c) + l;
    return i && i.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(cr).addScaledVector(gi, h), g;
  }
  intersectSphere(e, t) {
    en.subVectors(e.center, this.origin);
    const i = en.dot(this.direction), r = en.dot(en) - i * i, s = e.radius * e.radius;
    if (r > s)
      return null;
    const a = Math.sqrt(s - r), o = i - a, c = i + a;
    return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / t;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, t) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let i, r, s, a, o, c;
    const l = 1 / this.direction.x, f = 1 / this.direction.y, d = 1 / this.direction.z, h = this.origin;
    return l >= 0 ? (i = (e.min.x - h.x) * l, r = (e.max.x - h.x) * l) : (i = (e.max.x - h.x) * l, r = (e.min.x - h.x) * l), f >= 0 ? (s = (e.min.y - h.y) * f, a = (e.max.y - h.y) * f) : (s = (e.max.y - h.y) * f, a = (e.min.y - h.y) * f), i > a || s > r || ((s > i || isNaN(i)) && (i = s), (a < r || isNaN(r)) && (r = a), d >= 0 ? (o = (e.min.z - h.z) * d, c = (e.max.z - h.z) * d) : (o = (e.max.z - h.z) * d, c = (e.min.z - h.z) * d), i > c || o > r) || ((o > i || i !== i) && (i = o), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(i >= 0 ? i : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, en) !== null;
  }
  intersectTriangle(e, t, i, r, s) {
    lr.subVectors(t, e), mi.subVectors(i, e), fr.crossVectors(lr, mi);
    let a = this.direction.dot(fr), o;
    if (a > 0) {
      if (r)
        return null;
      o = 1;
    } else if (a < 0)
      o = -1, a = -a;
    else
      return null;
    ln.subVectors(this.origin, e);
    const c = o * this.direction.dot(mi.crossVectors(ln, mi));
    if (c < 0)
      return null;
    const l = o * this.direction.dot(lr.cross(ln));
    if (l < 0 || c + l > a)
      return null;
    const f = -o * ln.dot(fr);
    return f < 0 ? null : this.at(f / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class gt {
  constructor(e, t, i, r, s, a, o, c, l, f, d, h, g, v, y, p) {
    gt.prototype.isMatrix4 = !0, this.elements = [
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ], e !== void 0 && this.set(e, t, i, r, s, a, o, c, l, f, d, h, g, v, y, p);
  }
  set(e, t, i, r, s, a, o, c, l, f, d, h, g, v, y, p) {
    const u = this.elements;
    return u[0] = e, u[4] = t, u[8] = i, u[12] = r, u[1] = s, u[5] = a, u[9] = o, u[13] = c, u[2] = l, u[6] = f, u[10] = d, u[14] = h, u[3] = g, u[7] = v, u[11] = y, u[15] = p, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  clone() {
    return new gt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, i = e.elements;
    return t[0] = i[0], t[1] = i[1], t[2] = i[2], t[3] = i[3], t[4] = i[4], t[5] = i[5], t[6] = i[6], t[7] = i[7], t[8] = i[8], t[9] = i[9], t[10] = i[10], t[11] = i[11], t[12] = i[12], t[13] = i[13], t[14] = i[14], t[15] = i[15], this;
  }
  copyPosition(e) {
    const t = this.elements, i = e.elements;
    return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, i) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, i) {
    return this.set(
      e.x,
      t.x,
      i.x,
      0,
      e.y,
      t.y,
      i.y,
      0,
      e.z,
      t.z,
      i.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, i = e.elements, r = 1 / Ln.setFromMatrixColumn(e, 0).length(), s = 1 / Ln.setFromMatrixColumn(e, 1).length(), a = 1 / Ln.setFromMatrixColumn(e, 2).length();
    return t[0] = i[0] * r, t[1] = i[1] * r, t[2] = i[2] * r, t[3] = 0, t[4] = i[4] * s, t[5] = i[5] * s, t[6] = i[6] * s, t[7] = 0, t[8] = i[8] * a, t[9] = i[9] * a, t[10] = i[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, i = e.x, r = e.y, s = e.z, a = Math.cos(i), o = Math.sin(i), c = Math.cos(r), l = Math.sin(r), f = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const h = a * f, g = a * d, v = o * f, y = o * d;
      t[0] = c * f, t[4] = -c * d, t[8] = l, t[1] = g + v * l, t[5] = h - y * l, t[9] = -o * c, t[2] = y - h * l, t[6] = v + g * l, t[10] = a * c;
    } else if (e.order === "YXZ") {
      const h = c * f, g = c * d, v = l * f, y = l * d;
      t[0] = h + y * o, t[4] = v * o - g, t[8] = a * l, t[1] = a * d, t[5] = a * f, t[9] = -o, t[2] = g * o - v, t[6] = y + h * o, t[10] = a * c;
    } else if (e.order === "ZXY") {
      const h = c * f, g = c * d, v = l * f, y = l * d;
      t[0] = h - y * o, t[4] = -a * d, t[8] = v + g * o, t[1] = g + v * o, t[5] = a * f, t[9] = y - h * o, t[2] = -a * l, t[6] = o, t[10] = a * c;
    } else if (e.order === "ZYX") {
      const h = a * f, g = a * d, v = o * f, y = o * d;
      t[0] = c * f, t[4] = v * l - g, t[8] = h * l + y, t[1] = c * d, t[5] = y * l + h, t[9] = g * l - v, t[2] = -l, t[6] = o * c, t[10] = a * c;
    } else if (e.order === "YZX") {
      const h = a * c, g = a * l, v = o * c, y = o * l;
      t[0] = c * f, t[4] = y - h * d, t[8] = v * d + g, t[1] = d, t[5] = a * f, t[9] = -o * f, t[2] = -l * f, t[6] = g * d + v, t[10] = h - y * d;
    } else if (e.order === "XZY") {
      const h = a * c, g = a * l, v = o * c, y = o * l;
      t[0] = c * f, t[4] = -d, t[8] = l * f, t[1] = h * d + y, t[5] = a * f, t[9] = g * d - v, t[2] = v * d - g, t[6] = o * f, t[10] = y * d + h;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Wo, e, qo);
  }
  lookAt(e, t, i) {
    const r = this.elements;
    return Nt.subVectors(e, t), Nt.lengthSq() === 0 && (Nt.z = 1), Nt.normalize(), fn.crossVectors(i, Nt), fn.lengthSq() === 0 && (Math.abs(i.z) === 1 ? Nt.x += 1e-4 : Nt.z += 1e-4, Nt.normalize(), fn.crossVectors(i, Nt)), fn.normalize(), vi.crossVectors(Nt, fn), r[0] = fn.x, r[4] = vi.x, r[8] = Nt.x, r[1] = fn.y, r[5] = vi.y, r[9] = Nt.y, r[2] = fn.z, r[6] = vi.z, r[10] = Nt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const i = e.elements, r = t.elements, s = this.elements, a = i[0], o = i[4], c = i[8], l = i[12], f = i[1], d = i[5], h = i[9], g = i[13], v = i[2], y = i[6], p = i[10], u = i[14], w = i[3], _ = i[7], b = i[11], z = i[15], A = r[0], P = r[4], W = r[8], ie = r[12], x = r[1], T = r[5], q = r[9], ee = r[13], C = r[2], B = r[6], G = r[10], X = r[14], k = r[3], H = r[7], K = r[11], $ = r[15];
    return s[0] = a * A + o * x + c * C + l * k, s[4] = a * P + o * T + c * B + l * H, s[8] = a * W + o * q + c * G + l * K, s[12] = a * ie + o * ee + c * X + l * $, s[1] = f * A + d * x + h * C + g * k, s[5] = f * P + d * T + h * B + g * H, s[9] = f * W + d * q + h * G + g * K, s[13] = f * ie + d * ee + h * X + g * $, s[2] = v * A + y * x + p * C + u * k, s[6] = v * P + y * T + p * B + u * H, s[10] = v * W + y * q + p * G + u * K, s[14] = v * ie + y * ee + p * X + u * $, s[3] = w * A + _ * x + b * C + z * k, s[7] = w * P + _ * T + b * B + z * H, s[11] = w * W + _ * q + b * G + z * K, s[15] = w * ie + _ * ee + b * X + z * $, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], i = e[4], r = e[8], s = e[12], a = e[1], o = e[5], c = e[9], l = e[13], f = e[2], d = e[6], h = e[10], g = e[14], v = e[3], y = e[7], p = e[11], u = e[15];
    return v * (+s * c * d - r * l * d - s * o * h + i * l * h + r * o * g - i * c * g) + y * (+t * c * g - t * l * h + s * a * h - r * a * g + r * l * f - s * c * f) + p * (+t * l * d - t * o * g - s * a * d + i * a * g + s * o * f - i * l * f) + u * (-r * o * f - t * c * d + t * o * h + r * a * d - i * a * h + i * c * f);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, i) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = i), this;
  }
  invert() {
    const e = this.elements, t = e[0], i = e[1], r = e[2], s = e[3], a = e[4], o = e[5], c = e[6], l = e[7], f = e[8], d = e[9], h = e[10], g = e[11], v = e[12], y = e[13], p = e[14], u = e[15], w = d * p * l - y * h * l + y * c * g - o * p * g - d * c * u + o * h * u, _ = v * h * l - f * p * l - v * c * g + a * p * g + f * c * u - a * h * u, b = f * y * l - v * d * l + v * o * g - a * y * g - f * o * u + a * d * u, z = v * d * c - f * y * c - v * o * h + a * y * h + f * o * p - a * d * p, A = t * w + i * _ + r * b + s * z;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const P = 1 / A;
    return e[0] = w * P, e[1] = (y * h * s - d * p * s - y * r * g + i * p * g + d * r * u - i * h * u) * P, e[2] = (o * p * s - y * c * s + y * r * l - i * p * l - o * r * u + i * c * u) * P, e[3] = (d * c * s - o * h * s - d * r * l + i * h * l + o * r * g - i * c * g) * P, e[4] = _ * P, e[5] = (f * p * s - v * h * s + v * r * g - t * p * g - f * r * u + t * h * u) * P, e[6] = (v * c * s - a * p * s - v * r * l + t * p * l + a * r * u - t * c * u) * P, e[7] = (a * h * s - f * c * s + f * r * l - t * h * l - a * r * g + t * c * g) * P, e[8] = b * P, e[9] = (v * d * s - f * y * s - v * i * g + t * y * g + f * i * u - t * d * u) * P, e[10] = (a * y * s - v * o * s + v * i * l - t * y * l - a * i * u + t * o * u) * P, e[11] = (f * o * s - a * d * s - f * i * l + t * d * l + a * i * g - t * o * g) * P, e[12] = z * P, e[13] = (f * y * r - v * d * r + v * i * h - t * y * h - f * i * p + t * d * p) * P, e[14] = (v * o * r - a * y * r - v * i * c + t * y * c + a * i * p - t * o * p) * P, e[15] = (a * d * r - f * o * r + f * i * c - t * d * c - a * i * h + t * o * h) * P, this;
  }
  scale(e) {
    const t = this.elements, i = e.x, r = e.y, s = e.z;
    return t[0] *= i, t[4] *= r, t[8] *= s, t[1] *= i, t[5] *= r, t[9] *= s, t[2] *= i, t[6] *= r, t[10] *= s, t[3] *= i, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, i, r));
  }
  makeTranslation(e, t, i) {
    return e.isVector3 ? this.set(
      1,
      0,
      0,
      e.x,
      0,
      1,
      0,
      e.y,
      0,
      0,
      1,
      e.z,
      0,
      0,
      0,
      1
    ) : this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      i,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -i,
      0,
      0,
      i,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      0,
      i,
      0,
      0,
      1,
      0,
      0,
      -i,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), i = Math.sin(e);
    return this.set(
      t,
      -i,
      0,
      0,
      i,
      t,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationAxis(e, t) {
    const i = Math.cos(t), r = Math.sin(t), s = 1 - i, a = e.x, o = e.y, c = e.z, l = s * a, f = s * o;
    return this.set(
      l * a + i,
      l * o - r * c,
      l * c + r * o,
      0,
      l * o + r * c,
      f * o + i,
      f * c - r * a,
      0,
      l * c - r * o,
      f * c + r * a,
      s * c * c + i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, i) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      i,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, i, r, s, a) {
    return this.set(
      1,
      i,
      s,
      0,
      e,
      1,
      a,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, i) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, c = t._w, l = s + s, f = a + a, d = o + o, h = s * l, g = s * f, v = s * d, y = a * f, p = a * d, u = o * d, w = c * l, _ = c * f, b = c * d, z = i.x, A = i.y, P = i.z;
    return r[0] = (1 - (y + u)) * z, r[1] = (g + b) * z, r[2] = (v - _) * z, r[3] = 0, r[4] = (g - b) * A, r[5] = (1 - (h + u)) * A, r[6] = (p + w) * A, r[7] = 0, r[8] = (v + _) * P, r[9] = (p - w) * P, r[10] = (1 - (h + y)) * P, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, i) {
    const r = this.elements;
    let s = Ln.set(r[0], r[1], r[2]).length();
    const a = Ln.set(r[4], r[5], r[6]).length(), o = Ln.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Vt.copy(this);
    const l = 1 / s, f = 1 / a, d = 1 / o;
    return Vt.elements[0] *= l, Vt.elements[1] *= l, Vt.elements[2] *= l, Vt.elements[4] *= f, Vt.elements[5] *= f, Vt.elements[6] *= f, Vt.elements[8] *= d, Vt.elements[9] *= d, Vt.elements[10] *= d, t.setFromRotationMatrix(Vt), i.x = s, i.y = a, i.z = o, this;
  }
  makePerspective(e, t, i, r, s, a, o = 2e3) {
    const c = this.elements, l = 2 * s / (t - e), f = 2 * s / (i - r), d = (t + e) / (t - e), h = (i + r) / (i - r);
    let g, v;
    if (o === 2e3)
      g = -(a + s) / (a - s), v = -2 * a * s / (a - s);
    else if (o === 2001)
      g = -a / (a - s), v = -a * s / (a - s);
    else
      throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return c[0] = l, c[4] = 0, c[8] = d, c[12] = 0, c[1] = 0, c[5] = f, c[9] = h, c[13] = 0, c[2] = 0, c[6] = 0, c[10] = g, c[14] = v, c[3] = 0, c[7] = 0, c[11] = -1, c[15] = 0, this;
  }
  makeOrthographic(e, t, i, r, s, a, o = 2e3) {
    const c = this.elements, l = 1 / (t - e), f = 1 / (i - r), d = 1 / (a - s), h = (t + e) * l, g = (i + r) * f;
    let v, y;
    if (o === 2e3)
      v = (a + s) * d, y = -2 * d;
    else if (o === 2001)
      v = s * d, y = -1 * d;
    else
      throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return c[0] = 2 * l, c[4] = 0, c[8] = 0, c[12] = -h, c[1] = 0, c[5] = 2 * f, c[9] = 0, c[13] = -g, c[2] = 0, c[6] = 0, c[10] = y, c[14] = -v, c[3] = 0, c[7] = 0, c[11] = 0, c[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, i = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== i[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let i = 0; i < 16; i++)
      this.elements[i] = e[i + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const i = this.elements;
    return e[t] = i[0], e[t + 1] = i[1], e[t + 2] = i[2], e[t + 3] = i[3], e[t + 4] = i[4], e[t + 5] = i[5], e[t + 6] = i[6], e[t + 7] = i[7], e[t + 8] = i[8], e[t + 9] = i[9], e[t + 10] = i[10], e[t + 11] = i[11], e[t + 12] = i[12], e[t + 13] = i[13], e[t + 14] = i[14], e[t + 15] = i[15], e;
  }
}
const Ln = /* @__PURE__ */ new D(), Vt = /* @__PURE__ */ new gt(), Wo = /* @__PURE__ */ new D(0, 0, 0), qo = /* @__PURE__ */ new D(1, 1, 1), fn = /* @__PURE__ */ new D(), vi = /* @__PURE__ */ new D(), Nt = /* @__PURE__ */ new D(), ts = /* @__PURE__ */ new gt(), ns = /* @__PURE__ */ new oi();
class Vi {
  constructor(e = 0, t = 0, i = 0, r = Vi.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = i, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, i, r = this._order) {
    return this._x = e, this._y = t, this._z = i, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, i = !0) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], c = r[1], l = r[5], f = r[9], d = r[2], h = r[6], g = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(zt(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-f, g), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(h, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-zt(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(o, g), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(zt(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(-d, g), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-zt(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(h, g), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-a, l));
        break;
      case "YZX":
        this._z = Math.asin(zt(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-f, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(o, g));
        break;
      case "XZY":
        this._z = Math.asin(-zt(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(h, l), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-f, g), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, i) {
    return ts.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ts, t, i);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ns.setFromEuler(this), this.setFromQuaternion(ns, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Vi.DEFAULT_ORDER = "XYZ";
class Ir {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Xo = 0;
const is = /* @__PURE__ */ new D(), Dn = /* @__PURE__ */ new oi(), tn = /* @__PURE__ */ new gt(), xi = /* @__PURE__ */ new D(), ti = /* @__PURE__ */ new D(), Yo = /* @__PURE__ */ new D(), jo = /* @__PURE__ */ new oi(), rs = /* @__PURE__ */ new D(1, 0, 0), ss = /* @__PURE__ */ new D(0, 1, 0), os = /* @__PURE__ */ new D(0, 0, 1), Zo = { type: "added" }, Ko = { type: "removed" };
class Rt extends on {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Xo++ }), this.uuid = si(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Rt.DEFAULT_UP.clone();
    const e = new D(), t = new Vi(), i = new oi(), r = new D(1, 1, 1);
    function s() {
      i.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(i, void 0, !1);
    }
    t._onChange(s), i._onChange(a), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: i
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new gt()
      },
      normalMatrix: {
        value: new Be()
      }
    }), this.matrix = new gt(), this.matrixWorld = new gt(), this.matrixAutoUpdate = Rt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Ir(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Dn.setFromAxisAngle(e, t), this.quaternion.multiply(Dn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Dn.setFromAxisAngle(e, t), this.quaternion.premultiply(Dn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(rs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ss, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(os, e);
  }
  translateOnAxis(e, t) {
    return is.copy(e).applyQuaternion(this.quaternion), this.position.add(is.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(rs, e);
  }
  translateY(e) {
    return this.translateOnAxis(ss, e);
  }
  translateZ(e) {
    return this.translateOnAxis(os, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(tn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, i) {
    e.isVector3 ? xi.copy(e) : xi.set(e, t, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), ti.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? tn.lookAt(ti, xi, this.up) : tn.lookAt(xi, ti, this.up), this.quaternion.setFromRotationMatrix(tn), r && (tn.extractRotation(r.matrixWorld), Dn.setFromRotationMatrix(tn), this.quaternion.premultiply(Dn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Zo)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++)
        this.remove(arguments[i]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ko)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), tn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), tn.multiply(e.parent.matrixWorld)), e.applyMatrix4(tn), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const a = this.children[i].getObjectByProperty(e, t);
      if (a !== void 0)
        return a;
    }
  }
  getObjectsByProperty(e, t, i = []) {
    this[e] === t && i.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, i);
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ti, e, Yo), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ti, jo, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++)
      t[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let i = 0, r = t.length; i < r; i++) {
      const s = t[i];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const i = this.parent;
    if (e === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) {
        const o = r[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", i = {};
    t && (e = {
      geometries: {},
      materials: {},
      textures: {},
      images: {},
      shapes: {},
      skeletons: {},
      animations: {},
      nodes: {}
    }, i.metadata = {
      version: 4.6,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({
      boxInitialized: o.boxInitialized,
      boxMin: o.box.min.toArray(),
      boxMax: o.box.max.toArray(),
      sphereInitialized: o.sphereInitialized,
      sphereRadius: o.sphere.radius,
      sphereCenter: o.sphere.center.toArray()
    })), r.maxGeometryCount = this._maxGeometryCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this.boundingSphere !== null && (r.boundingSphere = {
      center: r.boundingSphere.center.toArray(),
      radius: r.boundingSphere.radius
    }), this.boundingBox !== null && (r.boundingBox = {
      min: r.boundingBox.min.toArray(),
      max: r.boundingBox.max.toArray()
    }));
    function s(o, c) {
      return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const c = o.shapes;
        if (Array.isArray(c))
          for (let l = 0, f = c.length; l < f; l++) {
            const d = c[l];
            s(e.shapes, d);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const o = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          o.push(s(e.materials, this.material[c]));
        r.material = o;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const c = this.animations[o];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const o = a(e.geometries), c = a(e.materials), l = a(e.textures), f = a(e.images), d = a(e.shapes), h = a(e.skeletons), g = a(e.animations), v = a(e.nodes);
      o.length > 0 && (i.geometries = o), c.length > 0 && (i.materials = c), l.length > 0 && (i.textures = l), f.length > 0 && (i.images = f), d.length > 0 && (i.shapes = d), h.length > 0 && (i.skeletons = h), g.length > 0 && (i.animations = g), v.length > 0 && (i.nodes = v);
    }
    return i.object = r, i;
    function a(o) {
      const c = [];
      for (const l in o) {
        const f = o[l];
        delete f.metadata, c.push(f);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
Rt.DEFAULT_UP = /* @__PURE__ */ new D(0, 1, 0);
Rt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Wt = /* @__PURE__ */ new D(), nn = /* @__PURE__ */ new D(), ur = /* @__PURE__ */ new D(), rn = /* @__PURE__ */ new D(), Nn = /* @__PURE__ */ new D(), Fn = /* @__PURE__ */ new D(), as = /* @__PURE__ */ new D(), dr = /* @__PURE__ */ new D(), hr = /* @__PURE__ */ new D(), pr = /* @__PURE__ */ new D();
class Yt {
  constructor(e = new D(), t = new D(), i = new D()) {
    this.a = e, this.b = t, this.c = i;
  }
  static getNormal(e, t, i, r) {
    r.subVectors(i, t), Wt.subVectors(e, t), r.cross(Wt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, i, r, s) {
    Wt.subVectors(r, t), nn.subVectors(i, t), ur.subVectors(e, t);
    const a = Wt.dot(Wt), o = Wt.dot(nn), c = Wt.dot(ur), l = nn.dot(nn), f = nn.dot(ur), d = a * l - o * o;
    if (d === 0)
      return s.set(0, 0, 0), null;
    const h = 1 / d, g = (l * c - o * f) * h, v = (a * f - o * c) * h;
    return s.set(1 - g - v, v, g);
  }
  static containsPoint(e, t, i, r) {
    return this.getBarycoord(e, t, i, r, rn) === null ? !1 : rn.x >= 0 && rn.y >= 0 && rn.x + rn.y <= 1;
  }
  static getInterpolation(e, t, i, r, s, a, o, c) {
    return this.getBarycoord(e, t, i, r, rn) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(s, rn.x), c.addScaledVector(a, rn.y), c.addScaledVector(o, rn.z), c);
  }
  static isFrontFacing(e, t, i, r) {
    return Wt.subVectors(i, t), nn.subVectors(e, t), Wt.cross(nn).dot(r) < 0;
  }
  set(e, t, i) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, t, i, r) {
    return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, i, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, i), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Wt.subVectors(this.c, this.b), nn.subVectors(this.a, this.b), Wt.cross(nn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Yt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Yt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, i, r, s) {
    return Yt.getInterpolation(e, this.a, this.b, this.c, t, i, r, s);
  }
  containsPoint(e) {
    return Yt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Yt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const i = this.a, r = this.b, s = this.c;
    let a, o;
    Nn.subVectors(r, i), Fn.subVectors(s, i), dr.subVectors(e, i);
    const c = Nn.dot(dr), l = Fn.dot(dr);
    if (c <= 0 && l <= 0)
      return t.copy(i);
    hr.subVectors(e, r);
    const f = Nn.dot(hr), d = Fn.dot(hr);
    if (f >= 0 && d <= f)
      return t.copy(r);
    const h = c * d - f * l;
    if (h <= 0 && c >= 0 && f <= 0)
      return a = c / (c - f), t.copy(i).addScaledVector(Nn, a);
    pr.subVectors(e, s);
    const g = Nn.dot(pr), v = Fn.dot(pr);
    if (v >= 0 && g <= v)
      return t.copy(s);
    const y = g * l - c * v;
    if (y <= 0 && l >= 0 && v <= 0)
      return o = l / (l - v), t.copy(i).addScaledVector(Fn, o);
    const p = f * v - g * d;
    if (p <= 0 && d - f >= 0 && g - v >= 0)
      return as.subVectors(s, r), o = (d - f) / (d - f + (g - v)), t.copy(r).addScaledVector(as, o);
    const u = 1 / (p + y + h);
    return a = y * u, o = h * u, t.copy(i).addScaledVector(Nn, a).addScaledVector(Fn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const no = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
}, un = { h: 0, s: 0, l: 0 }, _i = { h: 0, s: 0, l: 0 };
function gr(n, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + (e - n) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? n + (e - n) * 6 * (2 / 3 - t) : n;
}
class ke {
  constructor(e, t, i) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, i);
  }
  set(e, t, i) {
    if (t === void 0 && i === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else
      this.setRGB(e, t, i);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = xt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, je.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, i, r = je.workingColorSpace) {
    return this.r = e, this.g = t, this.b = i, je.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, i, r = je.workingColorSpace) {
    if (e = Io(e, 1), t = zt(t, 0, 1), i = zt(i, 0, 1), t === 0)
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + t) : i + t - i * t, a = 2 * i - s;
      this.r = gr(a, s, e + 1 / 3), this.g = gr(a, s, e), this.b = gr(a, s, e - 1 / 3);
    }
    return je.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = xt) {
    function i(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
            return i(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = xt) {
    const i = no[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Xn(e.r), this.g = Xn(e.g), this.b = Xn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ir(e.r), this.g = ir(e.g), this.b = ir(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = xt) {
    return je.fromWorkingColorSpace(St.copy(this), e), Math.round(zt(St.r * 255, 0, 255)) * 65536 + Math.round(zt(St.g * 255, 0, 255)) * 256 + Math.round(zt(St.b * 255, 0, 255));
  }
  getHexString(e = xt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = je.workingColorSpace) {
    je.fromWorkingColorSpace(St.copy(this), t);
    const i = St.r, r = St.g, s = St.b, a = Math.max(i, r, s), o = Math.min(i, r, s);
    let c, l;
    const f = (o + a) / 2;
    if (o === a)
      c = 0, l = 0;
    else {
      const d = a - o;
      switch (l = f <= 0.5 ? d / (a + o) : d / (2 - a - o), a) {
        case i:
          c = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - i) / d + 2;
          break;
        case s:
          c = (i - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = f, e;
  }
  getRGB(e, t = je.workingColorSpace) {
    return je.fromWorkingColorSpace(St.copy(this), t), e.r = St.r, e.g = St.g, e.b = St.b, e;
  }
  getStyle(e = xt) {
    je.fromWorkingColorSpace(St.copy(this), e);
    const t = St.r, i = St.g, r = St.b;
    return e !== xt ? `color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, i) {
    return this.getHSL(un), this.setHSL(un.h + e, un.s + t, un.l + i);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, i) {
    return this.r = e.r + (t.r - e.r) * i, this.g = e.g + (t.g - e.g) * i, this.b = e.b + (t.b - e.b) * i, this;
  }
  lerpHSL(e, t) {
    this.getHSL(un), e.getHSL(_i);
    const i = tr(un.h, _i.h, t), r = tr(un.s, _i.s, t), s = tr(un.l, _i.l, t);
    return this.setHSL(i, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, i = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * i + s[6] * r, this.g = s[1] * t + s[4] * i + s[7] * r, this.b = s[2] * t + s[5] * i + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const St = /* @__PURE__ */ new ke();
ke.NAMES = no;
let $o = 0;
class Pn extends on {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: $o++ }), this.uuid = si(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const i = e[t];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(i) : r && r.isVector3 && i && i.isVector3 ? r.copy(i) : this[t] = i;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const i = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.color && this.color.isColor && (i.color = this.color.getHex()), this.roughness !== void 0 && (i.roughness = this.roughness), this.metalness !== void 0 && (i.metalness = this.metalness), this.sheen !== void 0 && (i.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (i.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (i.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (i.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (i.shininess = this.shininess), this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, i.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (i.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (i.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (i.lightMap = this.lightMap.toJSON(e).uuid, i.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (i.aoMap = this.aoMap.toJSON(e).uuid, i.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (i.bumpMap = this.bumpMap.toJSON(e).uuid, i.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (i.normalMap = this.normalMap.toJSON(e).uuid, i.normalMapType = this.normalMapType, i.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (i.displacementMap = this.displacementMap.toJSON(e).uuid, i.displacementScale = this.displacementScale, i.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (i.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (i.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (i.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (i.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (i.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (i.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (i.combine = this.combine)), this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (i.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (i.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (i.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (i.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (i.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (i.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (i.size = this.size), this.shadowSide !== null && (i.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (i.blending = this.blending), this.side !== 0 && (i.side = this.side), this.vertexColors === !0 && (i.vertexColors = !0), this.opacity < 1 && (i.opacity = this.opacity), this.transparent === !0 && (i.transparent = !0), this.blendSrc !== 204 && (i.blendSrc = this.blendSrc), this.blendDst !== 205 && (i.blendDst = this.blendDst), this.blendEquation !== 100 && (i.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (i.depthFunc = this.depthFunc), this.depthTest === !1 && (i.depthTest = this.depthTest), this.depthWrite === !1 && (i.depthWrite = this.depthWrite), this.colorWrite === !1 && (i.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (i.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (i.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (i.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (i.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (i.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation), this.polygonOffset === !0 && (i.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth), this.dashSize !== void 0 && (i.dashSize = this.dashSize), this.gapSize !== void 0 && (i.gapSize = this.gapSize), this.scale !== void 0 && (i.scale = this.scale), this.dithering === !0 && (i.dithering = !0), this.alphaTest > 0 && (i.alphaTest = this.alphaTest), this.alphaHash === !0 && (i.alphaHash = !0), this.alphaToCoverage === !0 && (i.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0), this.forceSinglePass === !0 && (i.forceSinglePass = !0), this.wireframe === !0 && (i.wireframe = !0), this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (i.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (i.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (i.flatShading = !0), this.visible === !1 && (i.visible = !1), this.toneMapped === !1 && (i.toneMapped = !1), this.fog === !1 && (i.fog = !1), Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const c = s[o];
        delete c.metadata, a.push(c);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (i.textures = s), a.length > 0 && (i.images = a);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let i = null;
    if (t !== null) {
      const r = t.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s)
        i[s] = t[s].clone();
    }
    return this.clippingPlanes = i, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class io extends Pn {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ct = /* @__PURE__ */ new D(), yi = /* @__PURE__ */ new Te();
class tt {
  constructor(e, t, i = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = i, this.usage = 35044, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return qn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, i) {
    e *= this.itemSize, i *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[i + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, i = this.count; t < i; t++)
        yi.fromBufferAttribute(this, t), yi.applyMatrix3(e), this.setXY(t, yi.x, yi.y);
    else if (this.itemSize === 3)
      for (let t = 0, i = this.count; t < i; t++)
        ct.fromBufferAttribute(this, t), ct.applyMatrix3(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ct.fromBufferAttribute(this, t), ct.applyMatrix4(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ct.fromBufferAttribute(this, t), ct.applyNormalMatrix(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, i = this.count; t < i; t++)
      ct.fromBufferAttribute(this, t), ct.transformDirection(e), this.setXYZ(t, ct.x, ct.y, ct.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let i = this.array[e * this.itemSize + t];
    return this.normalized && (i = Qn(i, this.array)), i;
  }
  setComponent(e, t, i) {
    return this.normalized && (i = Ct(i, this.array)), this.array[e * this.itemSize + t] = i, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Qn(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Qn(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Qn(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Qn(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Ct(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, i) {
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), i = Ct(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this;
  }
  setXYZ(e, t, i, r) {
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), i = Ct(i, this.array), r = Ct(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, i, r, s) {
    return e *= this.itemSize, this.normalized && (t = Ct(t, this.array), i = Ct(i, this.array), r = Ct(r, this.array), s = Ct(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = i, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class ro extends tt {
  constructor(e, t, i) {
    super(new Uint16Array(e), t, i);
  }
}
class so extends tt {
  constructor(e, t, i) {
    super(new Uint32Array(e), t, i);
  }
}
class Kt extends tt {
  constructor(e, t, i) {
    super(new Float32Array(e), t, i);
  }
}
let Qo = 0;
const Bt = /* @__PURE__ */ new gt(), mr = /* @__PURE__ */ new Rt(), In = /* @__PURE__ */ new D(), Ft = /* @__PURE__ */ new ai(), ni = /* @__PURE__ */ new ai(), pt = /* @__PURE__ */ new D();
class Lt extends on {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Qo++ }), this.uuid = si(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Qs(e) ? so : ro)(e, 1) : this.index = e, this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, i = 0) {
    this.groups.push({
      start: e,
      count: t,
      materialIndex: i
    });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Be().getNormalMatrix(e);
      i.applyNormalMatrix(s), i.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Bt.makeRotationFromQuaternion(e), this.applyMatrix4(Bt), this;
  }
  rotateX(e) {
    return Bt.makeRotationX(e), this.applyMatrix4(Bt), this;
  }
  rotateY(e) {
    return Bt.makeRotationY(e), this.applyMatrix4(Bt), this;
  }
  rotateZ(e) {
    return Bt.makeRotationZ(e), this.applyMatrix4(Bt), this;
  }
  translate(e, t, i) {
    return Bt.makeTranslation(e, t, i), this.applyMatrix4(Bt), this;
  }
  scale(e, t, i) {
    return Bt.makeScale(e, t, i), this.applyMatrix4(Bt), this;
  }
  lookAt(e) {
    return mr.lookAt(e), mr.updateMatrix(), this.applyMatrix4(mr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(In).negate(), this.translate(In.x, In.y, In.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Kt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new ai());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new D(-1 / 0, -1 / 0, -1 / 0),
        new D(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let i = 0, r = t.length; i < r; i++) {
          const s = t[i];
          Ft.setFromBufferAttribute(s), this.morphTargetsRelative ? (pt.addVectors(this.boundingBox.min, Ft.min), this.boundingBox.expandByPoint(pt), pt.addVectors(this.boundingBox.max, Ft.max), this.boundingBox.expandByPoint(pt)) : (this.boundingBox.expandByPoint(Ft.min), this.boundingBox.expandByPoint(Ft.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ki());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new D(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if (Ft.setFromBufferAttribute(e), t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          ni.setFromBufferAttribute(o), this.morphTargetsRelative ? (pt.addVectors(Ft.min, ni.min), Ft.expandByPoint(pt), pt.addVectors(Ft.max, ni.max), Ft.expandByPoint(pt)) : (Ft.expandByPoint(ni.min), Ft.expandByPoint(ni.max));
        }
      Ft.getCenter(i);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        pt.fromBufferAttribute(e, s), r = Math.max(r, i.distanceToSquared(pt));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s], c = this.morphTargetsRelative;
          for (let l = 0, f = o.count; l < f; l++)
            pt.fromBufferAttribute(o, l), c && (In.fromBufferAttribute(e, l), pt.add(In)), r = Math.max(r, i.distanceToSquared(pt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const i = e.array, r = t.position.array, s = t.normal.array, a = t.uv.array, o = r.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new tt(new Float32Array(4 * o), 4));
    const c = this.getAttribute("tangent").array, l = [], f = [];
    for (let x = 0; x < o; x++)
      l[x] = new D(), f[x] = new D();
    const d = new D(), h = new D(), g = new D(), v = new Te(), y = new Te(), p = new Te(), u = new D(), w = new D();
    function _(x, T, q) {
      d.fromArray(r, x * 3), h.fromArray(r, T * 3), g.fromArray(r, q * 3), v.fromArray(a, x * 2), y.fromArray(a, T * 2), p.fromArray(a, q * 2), h.sub(d), g.sub(d), y.sub(v), p.sub(v);
      const ee = 1 / (y.x * p.y - p.x * y.y);
      isFinite(ee) && (u.copy(h).multiplyScalar(p.y).addScaledVector(g, -y.y).multiplyScalar(ee), w.copy(g).multiplyScalar(y.x).addScaledVector(h, -p.x).multiplyScalar(ee), l[x].add(u), l[T].add(u), l[q].add(u), f[x].add(w), f[T].add(w), f[q].add(w));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: i.length
    }]);
    for (let x = 0, T = b.length; x < T; ++x) {
      const q = b[x], ee = q.start, C = q.count;
      for (let B = ee, G = ee + C; B < G; B += 3)
        _(
          i[B + 0],
          i[B + 1],
          i[B + 2]
        );
    }
    const z = new D(), A = new D(), P = new D(), W = new D();
    function ie(x) {
      P.fromArray(s, x * 3), W.copy(P);
      const T = l[x];
      z.copy(T), z.sub(P.multiplyScalar(P.dot(T))).normalize(), A.crossVectors(W, T);
      const ee = A.dot(f[x]) < 0 ? -1 : 1;
      c[x * 4] = z.x, c[x * 4 + 1] = z.y, c[x * 4 + 2] = z.z, c[x * 4 + 3] = ee;
    }
    for (let x = 0, T = b.length; x < T; ++x) {
      const q = b[x], ee = q.start, C = q.count;
      for (let B = ee, G = ee + C; B < G; B += 3)
        ie(i[B + 0]), ie(i[B + 1]), ie(i[B + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let i = this.getAttribute("normal");
      if (i === void 0)
        i = new tt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", i);
      else
        for (let h = 0, g = i.count; h < g; h++)
          i.setXYZ(h, 0, 0, 0);
      const r = new D(), s = new D(), a = new D(), o = new D(), c = new D(), l = new D(), f = new D(), d = new D();
      if (e)
        for (let h = 0, g = e.count; h < g; h += 3) {
          const v = e.getX(h + 0), y = e.getX(h + 1), p = e.getX(h + 2);
          r.fromBufferAttribute(t, v), s.fromBufferAttribute(t, y), a.fromBufferAttribute(t, p), f.subVectors(a, s), d.subVectors(r, s), f.cross(d), o.fromBufferAttribute(i, v), c.fromBufferAttribute(i, y), l.fromBufferAttribute(i, p), o.add(f), c.add(f), l.add(f), i.setXYZ(v, o.x, o.y, o.z), i.setXYZ(y, c.x, c.y, c.z), i.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let h = 0, g = t.count; h < g; h += 3)
          r.fromBufferAttribute(t, h + 0), s.fromBufferAttribute(t, h + 1), a.fromBufferAttribute(t, h + 2), f.subVectors(a, s), d.subVectors(r, s), f.cross(d), i.setXYZ(h + 0, f.x, f.y, f.z), i.setXYZ(h + 1, f.x, f.y, f.z), i.setXYZ(h + 2, f.x, f.y, f.z);
      this.normalizeNormals(), i.needsUpdate = !0;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, i = e.count; t < i; t++)
      pt.fromBufferAttribute(e, t), pt.normalize(), e.setXYZ(t, pt.x, pt.y, pt.z);
  }
  toNonIndexed() {
    function e(o, c) {
      const l = o.array, f = o.itemSize, d = o.normalized, h = new l.constructor(c.length * f);
      let g = 0, v = 0;
      for (let y = 0, p = c.length; y < p; y++) {
        o.isInterleavedBufferAttribute ? g = c[y] * o.data.stride + o.offset : g = c[y] * f;
        for (let u = 0; u < f; u++)
          h[v++] = l[g++];
      }
      return new tt(h, f, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Lt(), i = this.index.array, r = this.attributes;
    for (const o in r) {
      const c = r[o], l = e(c, i);
      t.setAttribute(o, l);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const c = [], l = s[o];
      for (let f = 0, d = l.length; f < d; f++) {
        const h = l[f], g = e(h, i);
        c.push(g);
      }
      t.morphAttributes[o] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, c = a.length; o < c; o++) {
      const l = a[o];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const i = this.attributes;
    for (const c in i) {
      const l = i[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], f = [];
      for (let d = 0, h = l.length; d < h; d++) {
        const g = l[d];
        f.push(g.toJSON(e.data));
      }
      f.length > 0 && (r[c] = f, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = {
      center: o.center.toArray(),
      radius: o.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(t));
    const r = e.attributes;
    for (const l in r) {
      const f = r[l];
      this.setAttribute(l, f.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const f = [], d = s[l];
      for (let h = 0, g = d.length; h < g; h++)
        f.push(d[h].clone(t));
      this.morphAttributes[l] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let l = 0, f = a.length; l < f; l++) {
      const d = a[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const cs = /* @__PURE__ */ new gt(), Mn = /* @__PURE__ */ new Fr(), Si = /* @__PURE__ */ new ki(), ls = /* @__PURE__ */ new D(), Un = /* @__PURE__ */ new D(), On = /* @__PURE__ */ new D(), Bn = /* @__PURE__ */ new D(), vr = /* @__PURE__ */ new D(), Mi = /* @__PURE__ */ new D(), wi = /* @__PURE__ */ new Te(), Ei = /* @__PURE__ */ new Te(), Ti = /* @__PURE__ */ new Te(), fs = /* @__PURE__ */ new D(), us = /* @__PURE__ */ new D(), ds = /* @__PURE__ */ new D(), bi = /* @__PURE__ */ new D(), Pi = /* @__PURE__ */ new D();
class jt extends Rt {
  constructor(e = new Lt(), t = new io()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const i = this.geometry, r = i.attributes.position, s = i.morphAttributes.position, a = i.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Mi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const f = o[c], d = s[c];
        f !== 0 && (vr.fromBufferAttribute(d, e), a ? Mi.addScaledVector(vr, f) : Mi.addScaledVector(vr.sub(t), f));
      }
      t.add(Mi);
    }
    return t;
  }
  raycast(e, t) {
    const i = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (i.boundingSphere === null && i.computeBoundingSphere(), Si.copy(i.boundingSphere), Si.applyMatrix4(s), Mn.copy(e.ray).recast(e.near), !(Si.containsPoint(Mn.origin) === !1 && (Mn.intersectSphere(Si, ls) === null || Mn.origin.distanceToSquared(ls) > (e.far - e.near) ** 2)) && (cs.copy(s).invert(), Mn.copy(e.ray).applyMatrix4(cs), !(i.boundingBox !== null && Mn.intersectsBox(i.boundingBox) === !1) && this._computeIntersections(e, t, Mn)));
  }
  _computeIntersections(e, t, i) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, c = s.attributes.position, l = s.attributes.uv, f = s.attributes.uv1, d = s.attributes.normal, h = s.groups, g = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let v = 0, y = h.length; v < y; v++) {
          const p = h[v], u = a[p.materialIndex], w = Math.max(p.start, g.start), _ = Math.min(o.count, Math.min(p.start + p.count, g.start + g.count));
          for (let b = w, z = _; b < z; b += 3) {
            const A = o.getX(b), P = o.getX(b + 1), W = o.getX(b + 2);
            r = Ai(this, u, e, i, l, f, d, A, P, W), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, g.start), y = Math.min(o.count, g.start + g.count);
        for (let p = v, u = y; p < u; p += 3) {
          const w = o.getX(p), _ = o.getX(p + 1), b = o.getX(p + 2);
          r = Ai(this, a, e, i, l, f, d, w, _, b), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
    else if (c !== void 0)
      if (Array.isArray(a))
        for (let v = 0, y = h.length; v < y; v++) {
          const p = h[v], u = a[p.materialIndex], w = Math.max(p.start, g.start), _ = Math.min(c.count, Math.min(p.start + p.count, g.start + g.count));
          for (let b = w, z = _; b < z; b += 3) {
            const A = b, P = b + 1, W = b + 2;
            r = Ai(this, u, e, i, l, f, d, A, P, W), r && (r.faceIndex = Math.floor(b / 3), r.face.materialIndex = p.materialIndex, t.push(r));
          }
        }
      else {
        const v = Math.max(0, g.start), y = Math.min(c.count, g.start + g.count);
        for (let p = v, u = y; p < u; p += 3) {
          const w = p, _ = p + 1, b = p + 2;
          r = Ai(this, a, e, i, l, f, d, w, _, b), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
        }
      }
  }
}
function Jo(n, e, t, i, r, s, a, o) {
  let c;
  if (e.side === 1 ? c = i.intersectTriangle(a, s, r, !0, o) : c = i.intersectTriangle(r, s, a, e.side === 0, o), c === null)
    return null;
  Pi.copy(o), Pi.applyMatrix4(n.matrixWorld);
  const l = t.ray.origin.distanceTo(Pi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Pi.clone(),
    object: n
  };
}
function Ai(n, e, t, i, r, s, a, o, c, l) {
  n.getVertexPosition(o, Un), n.getVertexPosition(c, On), n.getVertexPosition(l, Bn);
  const f = Jo(n, e, t, i, Un, On, Bn, bi);
  if (f) {
    r && (wi.fromBufferAttribute(r, o), Ei.fromBufferAttribute(r, c), Ti.fromBufferAttribute(r, l), f.uv = Yt.getInterpolation(bi, Un, On, Bn, wi, Ei, Ti, new Te())), s && (wi.fromBufferAttribute(s, o), Ei.fromBufferAttribute(s, c), Ti.fromBufferAttribute(s, l), f.uv1 = Yt.getInterpolation(bi, Un, On, Bn, wi, Ei, Ti, new Te()), f.uv2 = f.uv1), a && (fs.fromBufferAttribute(a, o), us.fromBufferAttribute(a, c), ds.fromBufferAttribute(a, l), f.normal = Yt.getInterpolation(bi, Un, On, Bn, fs, us, ds, new D()), f.normal.dot(i.direction) > 0 && f.normal.multiplyScalar(-1));
    const d = {
      a: o,
      b: c,
      c: l,
      normal: new D(),
      materialIndex: 0
    };
    Yt.getNormal(Un, On, Bn, d.normal), f.face = d;
  }
  return f;
}
class ci extends Lt {
  constructor(e = 1, t = 1, i = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: i,
      widthSegments: r,
      heightSegments: s,
      depthSegments: a
    };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const c = [], l = [], f = [], d = [];
    let h = 0, g = 0;
    v("z", "y", "x", -1, -1, i, t, e, a, s, 0), v("z", "y", "x", 1, -1, i, t, -e, a, s, 1), v("x", "z", "y", 1, 1, e, i, t, r, a, 2), v("x", "z", "y", 1, -1, e, i, -t, r, a, 3), v("x", "y", "z", 1, -1, e, t, i, r, s, 4), v("x", "y", "z", -1, -1, e, t, -i, r, s, 5), this.setIndex(c), this.setAttribute("position", new Kt(l, 3)), this.setAttribute("normal", new Kt(f, 3)), this.setAttribute("uv", new Kt(d, 2));
    function v(y, p, u, w, _, b, z, A, P, W, ie) {
      const x = b / P, T = z / W, q = b / 2, ee = z / 2, C = A / 2, B = P + 1, G = W + 1;
      let X = 0, k = 0;
      const H = new D();
      for (let K = 0; K < G; K++) {
        const $ = K * T - ee;
        for (let fe = 0; fe < B; fe++) {
          const be = fe * x - q;
          H[y] = be * w, H[p] = $ * _, H[u] = C, l.push(H.x, H.y, H.z), H[y] = 0, H[p] = 0, H[u] = A > 0 ? 1 : -1, f.push(H.x, H.y, H.z), d.push(fe / P), d.push(1 - K / W), X += 1;
        }
      }
      for (let K = 0; K < W; K++)
        for (let $ = 0; $ < P; $++) {
          const fe = h + $ + B * K, be = h + $ + B * (K + 1), O = h + ($ + 1) + B * (K + 1), Z = h + ($ + 1) + B * K;
          c.push(fe, be, Z), c.push(be, O, Z), k += 6;
        }
      o.addGroup(g, k, ie), g += k, h += X;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ci(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Yn(n) {
  const e = {};
  for (const t in n) {
    e[t] = {};
    for (const i in n[t]) {
      const r = n[t][i];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][i] = null) : e[t][i] = r.clone() : Array.isArray(r) ? e[t][i] = r.slice() : e[t][i] = r;
    }
  }
  return e;
}
function Pt(n) {
  const e = {};
  for (let t = 0; t < n.length; t++) {
    const i = Yn(n[t]);
    for (const r in i)
      e[r] = i[r];
  }
  return e;
}
function ea(n) {
  const e = [];
  for (let t = 0; t < n.length; t++)
    e.push(n[t].clone());
  return e;
}
function oo(n) {
  return n.getRenderTarget() === null ? n.outputColorSpace : je.workingColorSpace;
}
const ta = { clone: Yn, merge: Pt };
var na = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, ia = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class at extends Pn {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = na, this.fragmentShader = ia, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1,
      // set to use shader texture LOD
      clipCullDistance: !1,
      // set to use vertex shader clipping
      multiDraw: !1
      // set to use vertex shader multi_draw / enable gl_DrawID
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Yn(e.uniforms), this.uniformsGroups = ea(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = {
        type: "t",
        value: a.toJSON(e).uuid
      } : a && a.isColor ? t.uniforms[r] = {
        type: "c",
        value: a.getHex()
      } : a && a.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: a.toArray()
      } : a && a.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: a.toArray()
      } : a && a.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: a.toArray()
      } : a && a.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: a.toArray()
      } : a && a.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: a.toArray()
      } : t.uniforms[r] = {
        value: a
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const i = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (t.extensions = i), t;
  }
}
class Ur extends Rt {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new gt(), this.projectionMatrix = new gt(), this.projectionMatrixInverse = new gt(), this.coordinateSystem = 2e3;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const dn = /* @__PURE__ */ new D(), hs = /* @__PURE__ */ new Te(), ps = /* @__PURE__ */ new Te();
class At extends Ur {
  constructor(e = 50, t = 1, i = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = i, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Pr * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(er * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Pr * 2 * Math.atan(
      Math.tan(er * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Computes the 2D bounds of the camera's viewable rectangle at a given distance along the viewing direction.
   * Sets minTarget and maxTarget to the coordinates of the lower-left and upper-right corners of the view rectangle.
   */
  getViewBounds(e, t, i) {
    dn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(dn.x, dn.y).multiplyScalar(-e / dn.z), dn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), i.set(dn.x, dn.y).multiplyScalar(-e / dn.z);
  }
  /**
   * Computes the width and height of the camera's viewable rectangle at a given distance along the viewing direction.
   * Copies the result into the target Vector2, where x is width and y is height.
   */
  getViewSize(e, t) {
    return this.getViewBounds(e, hs, ps), t.subVectors(ps, hs);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, i, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(er * 0.5 * this.fov) / this.zoom, i = 2 * t, r = this.aspect * i, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = a.fullWidth, l = a.fullHeight;
      s += a.offsetX * r / c, t -= a.offsetY * i / l, r *= a.width / c, i *= a.height / l;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - i, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Gn = -90, Hn = 1;
class ra extends Rt {
  constructor(e, t, i) {
    super(), this.type = "CubeCamera", this.renderTarget = i, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new At(Gn, Hn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new At(Gn, Hn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new At(Gn, Hn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new At(Gn, Hn, e, t);
    o.layers = this.layers, this.add(o);
    const c = new At(Gn, Hn, e, t);
    c.layers = this.layers, this.add(c);
    const l = new At(Gn, Hn, e, t);
    l.layers = this.layers, this.add(l);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [i, r, s, a, o, c] = t;
    for (const l of t)
      this.remove(l);
    if (e === 2e3)
      i.up.set(0, 1, 0), i.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
    else if (e === 2001)
      i.up.set(0, -1, 0), i.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
    else
      throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const l of t)
      this.add(l), l.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, c, l, f] = this.children, d = e.getRenderTarget(), h = e.getActiveCubeFace(), g = e.getActiveMipmapLevel(), v = e.xr.enabled;
    e.xr.enabled = !1;
    const y = i.texture.generateMipmaps;
    i.texture.generateMipmaps = !1, e.setRenderTarget(i, 0, r), e.render(t, s), e.setRenderTarget(i, 1, r), e.render(t, a), e.setRenderTarget(i, 2, r), e.render(t, o), e.setRenderTarget(i, 3, r), e.render(t, c), e.setRenderTarget(i, 4, r), e.render(t, l), i.texture.generateMipmaps = y, e.setRenderTarget(i, 5, r), e.render(t, f), e.setRenderTarget(d, h, g), e.xr.enabled = v, i.texture.needsPMREMUpdate = !0;
  }
}
class ao extends Mt {
  constructor(e, t, i, r, s, a, o, c, l, f) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, i, r, s, a, o, c, l, f), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class sa extends wt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const i = { width: e, height: e, depth: 1 }, r = [i, i, i, i, i, i];
    t.encoding !== void 0 && (qn("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === 3001 ? xt : Gt), this.texture = new ao(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const i = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new ci(5, 5, 5), s = new at({
      name: "CubemapFromEquirect",
      uniforms: Yn(i.uniforms),
      vertexShader: i.vertexShader,
      fragmentShader: i.fragmentShader,
      side: 1,
      blending: 0
    });
    s.uniforms.tEquirect.value = t;
    const a = new jt(r, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new ra(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, i, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++)
      e.setRenderTarget(this, a), e.clear(t, i, r);
    e.setRenderTarget(s);
  }
}
const xr = /* @__PURE__ */ new D(), oa = /* @__PURE__ */ new D(), aa = /* @__PURE__ */ new Be();
class mn {
  constructor(e = new D(1, 0, 0), t = 0) {
    this.isPlane = !0, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, i, r) {
    return this.normal.set(e, t, i), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, i) {
    const r = xr.subVectors(i, t).cross(oa.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const i = e.delta(xr), r = this.normal.dot(i);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
    return t < 0 && i > 0 || i < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const i = t || aa.getNormalMatrix(e), r = this.coplanarPoint(xr).applyMatrix4(e), s = this.normal.applyMatrix3(i).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const wn = /* @__PURE__ */ new ki(), Ci = /* @__PURE__ */ new D();
class co {
  constructor(e = new mn(), t = new mn(), i = new mn(), r = new mn(), s = new mn(), a = new mn()) {
    this.planes = [e, t, i, r, s, a];
  }
  set(e, t, i, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(i), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      t[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    const i = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], c = r[3], l = r[4], f = r[5], d = r[6], h = r[7], g = r[8], v = r[9], y = r[10], p = r[11], u = r[12], w = r[13], _ = r[14], b = r[15];
    if (i[0].setComponents(c - s, h - l, p - g, b - u).normalize(), i[1].setComponents(c + s, h + l, p + g, b + u).normalize(), i[2].setComponents(c + a, h + f, p + v, b + w).normalize(), i[3].setComponents(c - a, h - f, p - v, b - w).normalize(), i[4].setComponents(c - o, h - d, p - y, b - _).normalize(), t === 2e3)
      i[5].setComponents(c + o, h + d, p + y, b + _).normalize();
    else if (t === 2001)
      i[5].setComponents(o, d, y, _).normalize();
    else
      throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(wn);
  }
  intersectsSprite(e) {
    return wn.center.set(0, 0, 0), wn.radius = 0.7071067811865476, wn.applyMatrix4(e.matrixWorld), this.intersectsSphere(wn);
  }
  intersectsSphere(e) {
    const t = this.planes, i = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(i) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = t[i];
      if (Ci.x = r.normal.x > 0 ? e.max.x : e.min.x, Ci.y = r.normal.y > 0 ? e.max.y : e.min.y, Ci.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Ci) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let i = 0; i < 6; i++)
      if (t[i].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function lo() {
  let n = null, e = !1, t = null, i = null;
  function r(s, a) {
    t(s, a), i = n.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (i = n.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      n.cancelAnimationFrame(i), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      n = s;
    }
  };
}
function ca(n, e) {
  const t = e.isWebGL2, i = /* @__PURE__ */ new WeakMap();
  function r(l, f) {
    const d = l.array, h = l.usage, g = d.byteLength, v = n.createBuffer();
    n.bindBuffer(f, v), n.bufferData(f, d, h), l.onUploadCallback();
    let y;
    if (d instanceof Float32Array)
      y = n.FLOAT;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          y = n.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        y = n.UNSIGNED_SHORT;
    else if (d instanceof Int16Array)
      y = n.SHORT;
    else if (d instanceof Uint32Array)
      y = n.UNSIGNED_INT;
    else if (d instanceof Int32Array)
      y = n.INT;
    else if (d instanceof Int8Array)
      y = n.BYTE;
    else if (d instanceof Uint8Array)
      y = n.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray)
      y = n.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: v,
      type: y,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version,
      size: g
    };
  }
  function s(l, f, d) {
    const h = f.array, g = f._updateRange, v = f.updateRanges;
    if (n.bindBuffer(d, l), g.count === -1 && v.length === 0 && n.bufferSubData(d, 0, h), v.length !== 0) {
      for (let y = 0, p = v.length; y < p; y++) {
        const u = v[y];
        t ? n.bufferSubData(
          d,
          u.start * h.BYTES_PER_ELEMENT,
          h,
          u.start,
          u.count
        ) : n.bufferSubData(
          d,
          u.start * h.BYTES_PER_ELEMENT,
          h.subarray(u.start, u.start + u.count)
        );
      }
      f.clearUpdateRanges();
    }
    g.count !== -1 && (t ? n.bufferSubData(
      d,
      g.offset * h.BYTES_PER_ELEMENT,
      h,
      g.offset,
      g.count
    ) : n.bufferSubData(
      d,
      g.offset * h.BYTES_PER_ELEMENT,
      h.subarray(g.offset, g.offset + g.count)
    ), g.count = -1), f.onUploadCallback();
  }
  function a(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), i.get(l);
  }
  function o(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const f = i.get(l);
    f && (n.deleteBuffer(f.buffer), i.delete(l));
  }
  function c(l, f) {
    if (l.isGLBufferAttribute) {
      const h = i.get(l);
      (!h || h.version < l.version) && i.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = i.get(l);
    if (d === void 0)
      i.set(l, r(l, f));
    else if (d.version < l.version) {
      if (d.size !== l.array.byteLength)
        throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      s(d.buffer, l, f), d.version = l.version;
    }
  }
  return {
    get: a,
    remove: o,
    update: c
  };
}
class Zn extends Lt {
  constructor(e = 1, t = 1, i = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: i,
      heightSegments: r
    };
    const s = e / 2, a = t / 2, o = Math.floor(i), c = Math.floor(r), l = o + 1, f = c + 1, d = e / o, h = t / c, g = [], v = [], y = [], p = [];
    for (let u = 0; u < f; u++) {
      const w = u * h - a;
      for (let _ = 0; _ < l; _++) {
        const b = _ * d - s;
        v.push(b, -w, 0), y.push(0, 0, 1), p.push(_ / o), p.push(1 - u / c);
      }
    }
    for (let u = 0; u < c; u++)
      for (let w = 0; w < o; w++) {
        const _ = w + l * u, b = w + l * (u + 1), z = w + 1 + l * (u + 1), A = w + 1 + l * u;
        g.push(_, b, A), g.push(b, z, A);
      }
    this.setIndex(g), this.setAttribute("position", new Kt(v, 3)), this.setAttribute("normal", new Kt(y, 3)), this.setAttribute("uv", new Kt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Zn(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var la = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, fa = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, ua = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, da = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, ha = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, pa = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, ga = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, ma = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, va = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, xa = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`, _a = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, ya = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Sa = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Ma = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, wa = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ea = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ta = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, ba = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Pa = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Aa = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Ca = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, za = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, Ra = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, La = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Da = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Na = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Fa = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Ia = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Ua = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Oa = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Ba = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Ga = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`, Ha = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, ka = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Va = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Wa = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, qa = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Xa = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Ya = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ja = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Za = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Ka = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, $a = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, Qa = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Ja = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, ec = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, tc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, nc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, ic = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, rc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, sc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, oc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, ac = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, cc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, lc = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, fc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, uc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, dc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, hc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, pc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, gc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, mc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, vc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, xc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, _c = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Sc = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Mc = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, wc = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`, Ec = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`, Tc = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`, bc = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Pc = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Ac = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Cc = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, zc = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Rc = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Lc = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Dc = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Nc = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Fc = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Ic = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Uc = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Oc = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Bc = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Gc = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Hc = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, kc = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Vc = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Wc = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`, qc = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Xc = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Yc = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, jc = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Zc = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Kc = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, $c = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Qc = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Jc = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, el = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, tl = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, nl = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, il = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, rl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, sl = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ol = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, al = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const cl = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, ll = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, ul = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, dl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, hl = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, pl = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, gl = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`, ml = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, vl = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, xl = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, _l = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, yl = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Sl = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ml = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, wl = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, El = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Tl = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, bl = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Pl = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Al = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, Cl = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, zl = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Rl = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ll = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Dl = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nl = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Fl = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Il = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Ul = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ol = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Bl = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Gl = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Hl = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ne = {
  alphahash_fragment: la,
  alphahash_pars_fragment: fa,
  alphamap_fragment: ua,
  alphamap_pars_fragment: da,
  alphatest_fragment: ha,
  alphatest_pars_fragment: pa,
  aomap_fragment: ga,
  aomap_pars_fragment: ma,
  batching_pars_vertex: va,
  batching_vertex: xa,
  begin_vertex: _a,
  beginnormal_vertex: ya,
  bsdfs: Sa,
  iridescence_fragment: Ma,
  bumpmap_pars_fragment: wa,
  clipping_planes_fragment: Ea,
  clipping_planes_pars_fragment: Ta,
  clipping_planes_pars_vertex: ba,
  clipping_planes_vertex: Pa,
  color_fragment: Aa,
  color_pars_fragment: Ca,
  color_pars_vertex: za,
  color_vertex: Ra,
  common: La,
  cube_uv_reflection_fragment: Da,
  defaultnormal_vertex: Na,
  displacementmap_pars_vertex: Fa,
  displacementmap_vertex: Ia,
  emissivemap_fragment: Ua,
  emissivemap_pars_fragment: Oa,
  colorspace_fragment: Ba,
  colorspace_pars_fragment: Ga,
  envmap_fragment: Ha,
  envmap_common_pars_fragment: ka,
  envmap_pars_fragment: Va,
  envmap_pars_vertex: Wa,
  envmap_physical_pars_fragment: nc,
  envmap_vertex: qa,
  fog_vertex: Xa,
  fog_pars_vertex: Ya,
  fog_fragment: ja,
  fog_pars_fragment: Za,
  gradientmap_pars_fragment: Ka,
  lightmap_fragment: $a,
  lightmap_pars_fragment: Qa,
  lights_lambert_fragment: Ja,
  lights_lambert_pars_fragment: ec,
  lights_pars_begin: tc,
  lights_toon_fragment: ic,
  lights_toon_pars_fragment: rc,
  lights_phong_fragment: sc,
  lights_phong_pars_fragment: oc,
  lights_physical_fragment: ac,
  lights_physical_pars_fragment: cc,
  lights_fragment_begin: lc,
  lights_fragment_maps: fc,
  lights_fragment_end: uc,
  logdepthbuf_fragment: dc,
  logdepthbuf_pars_fragment: hc,
  logdepthbuf_pars_vertex: pc,
  logdepthbuf_vertex: gc,
  map_fragment: mc,
  map_pars_fragment: vc,
  map_particle_fragment: xc,
  map_particle_pars_fragment: _c,
  metalnessmap_fragment: yc,
  metalnessmap_pars_fragment: Sc,
  morphcolor_vertex: Mc,
  morphnormal_vertex: wc,
  morphtarget_pars_vertex: Ec,
  morphtarget_vertex: Tc,
  normal_fragment_begin: bc,
  normal_fragment_maps: Pc,
  normal_pars_fragment: Ac,
  normal_pars_vertex: Cc,
  normal_vertex: zc,
  normalmap_pars_fragment: Rc,
  clearcoat_normal_fragment_begin: Lc,
  clearcoat_normal_fragment_maps: Dc,
  clearcoat_pars_fragment: Nc,
  iridescence_pars_fragment: Fc,
  opaque_fragment: Ic,
  packing: Uc,
  premultiplied_alpha_fragment: Oc,
  project_vertex: Bc,
  dithering_fragment: Gc,
  dithering_pars_fragment: Hc,
  roughnessmap_fragment: kc,
  roughnessmap_pars_fragment: Vc,
  shadowmap_pars_fragment: Wc,
  shadowmap_pars_vertex: qc,
  shadowmap_vertex: Xc,
  shadowmask_pars_fragment: Yc,
  skinbase_vertex: jc,
  skinning_pars_vertex: Zc,
  skinning_vertex: Kc,
  skinnormal_vertex: $c,
  specularmap_fragment: Qc,
  specularmap_pars_fragment: Jc,
  tonemapping_fragment: el,
  tonemapping_pars_fragment: tl,
  transmission_fragment: nl,
  transmission_pars_fragment: il,
  uv_pars_fragment: rl,
  uv_pars_vertex: sl,
  uv_vertex: ol,
  worldpos_vertex: al,
  background_vert: cl,
  background_frag: ll,
  backgroundCube_vert: fl,
  backgroundCube_frag: ul,
  cube_vert: dl,
  cube_frag: hl,
  depth_vert: pl,
  depth_frag: gl,
  distanceRGBA_vert: ml,
  distanceRGBA_frag: vl,
  equirect_vert: xl,
  equirect_frag: _l,
  linedashed_vert: yl,
  linedashed_frag: Sl,
  meshbasic_vert: Ml,
  meshbasic_frag: wl,
  meshlambert_vert: El,
  meshlambert_frag: Tl,
  meshmatcap_vert: bl,
  meshmatcap_frag: Pl,
  meshnormal_vert: Al,
  meshnormal_frag: Cl,
  meshphong_vert: zl,
  meshphong_frag: Rl,
  meshphysical_vert: Ll,
  meshphysical_frag: Dl,
  meshtoon_vert: Nl,
  meshtoon_frag: Fl,
  points_vert: Il,
  points_frag: Ul,
  shadow_vert: Ol,
  shadow_frag: Bl,
  sprite_vert: Gl,
  sprite_frag: Hl
}, re = {
  common: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Be() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Be() },
    normalScale: { value: /* @__PURE__ */ new Te(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Be() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Be() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new ke(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Be() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new ke(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new Te(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Be() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Be() },
    alphaTest: { value: 0 }
  }
}, Xt = {
  basic: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.fog
    ]),
    vertexShader: Ne.meshbasic_vert,
    fragmentShader: Ne.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) }
      }
    ]),
    vertexShader: Ne.meshlambert_vert,
    fragmentShader: Ne.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.specularmap,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        specular: { value: /* @__PURE__ */ new ke(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Ne.meshphong_vert,
    fragmentShader: Ne.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.envmap,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.roughnessmap,
      re.metalnessmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Ne.meshphysical_vert,
    fragmentShader: Ne.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.aomap,
      re.lightmap,
      re.emissivemap,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.gradientmap,
      re.fog,
      re.lights,
      {
        emissive: { value: /* @__PURE__ */ new ke(0) }
      }
    ]),
    vertexShader: Ne.meshtoon_vert,
    fragmentShader: Ne.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      re.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Ne.meshmatcap_vert,
    fragmentShader: Ne.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ Pt([
      re.points,
      re.fog
    ]),
    vertexShader: Ne.points_vert,
    fragmentShader: Ne.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Ne.linedashed_vert,
    fragmentShader: Ne.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.displacementmap
    ]),
    vertexShader: Ne.depth_vert,
    fragmentShader: Ne.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.bumpmap,
      re.normalmap,
      re.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.meshnormal_vert,
    fragmentShader: Ne.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ Pt([
      re.sprite,
      re.fog
    ]),
    vertexShader: Ne.sprite_vert,
    fragmentShader: Ne.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Be() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.background_vert,
    fragmentShader: Ne.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Ne.backgroundCube_vert,
    fragmentShader: Ne.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Ne.cube_vert,
    fragmentShader: Ne.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Ne.equirect_vert,
    fragmentShader: Ne.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ Pt([
      re.common,
      re.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new D() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Ne.distanceRGBA_vert,
    fragmentShader: Ne.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ Pt([
      re.lights,
      re.fog,
      {
        color: { value: /* @__PURE__ */ new ke(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Ne.shadow_vert,
    fragmentShader: Ne.shadow_frag
  }
};
Xt.physical = {
  uniforms: /* @__PURE__ */ Pt([
    Xt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Be() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new Te(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Be() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new ke(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Be() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Be() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Be() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new Te() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Be() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new ke(0) },
      specularColor: { value: /* @__PURE__ */ new ke(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Be() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Be() },
      anisotropyVector: { value: /* @__PURE__ */ new Te() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: /* @__PURE__ */ new Be() }
    }
  ]),
  vertexShader: Ne.meshphysical_vert,
  fragmentShader: Ne.meshphysical_frag
};
const zi = { r: 0, b: 0, g: 0 };
function kl(n, e, t, i, r, s, a) {
  const o = new ke(0);
  let c = s === !0 ? 0 : 1, l, f, d = null, h = 0, g = null;
  function v(p, u) {
    let w = !1, _ = u.isScene === !0 ? u.background : null;
    _ && _.isTexture && (_ = (u.backgroundBlurriness > 0 ? t : e).get(_)), _ === null ? y(o, c) : _ && _.isColor && (y(_, 1), w = !0);
    const b = n.xr.getEnvironmentBlendMode();
    b === "additive" ? i.buffers.color.setClear(0, 0, 0, 1, a) : b === "alpha-blend" && i.buffers.color.setClear(0, 0, 0, 0, a), (n.autoClear || w) && n.clear(n.autoClearColor, n.autoClearDepth, n.autoClearStencil), _ && (_.isCubeTexture || _.mapping === 306) ? (f === void 0 && (f = new jt(
      new ci(1, 1, 1),
      new at({
        name: "BackgroundCubeMaterial",
        uniforms: Yn(Xt.backgroundCube.uniforms),
        vertexShader: Xt.backgroundCube.vertexShader,
        fragmentShader: Xt.backgroundCube.fragmentShader,
        side: 1,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), f.geometry.deleteAttribute("normal"), f.geometry.deleteAttribute("uv"), f.onBeforeRender = function(z, A, P) {
      this.matrixWorld.copyPosition(P.matrixWorld);
    }, Object.defineProperty(f.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(f)), f.material.uniforms.envMap.value = _, f.material.uniforms.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, f.material.uniforms.backgroundBlurriness.value = u.backgroundBlurriness, f.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, f.material.toneMapped = je.getTransfer(_.colorSpace) !== et, (d !== _ || h !== _.version || g !== n.toneMapping) && (f.material.needsUpdate = !0, d = _, h = _.version, g = n.toneMapping), f.layers.enableAll(), p.unshift(f, f.geometry, f.material, 0, 0, null)) : _ && _.isTexture && (l === void 0 && (l = new jt(
      new Zn(2, 2),
      new at({
        name: "BackgroundMaterial",
        uniforms: Yn(Xt.background.uniforms),
        vertexShader: Xt.background.vertexShader,
        fragmentShader: Xt.background.fragmentShader,
        side: 0,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = _, l.material.uniforms.backgroundIntensity.value = u.backgroundIntensity, l.material.toneMapped = je.getTransfer(_.colorSpace) !== et, _.matrixAutoUpdate === !0 && _.updateMatrix(), l.material.uniforms.uvTransform.value.copy(_.matrix), (d !== _ || h !== _.version || g !== n.toneMapping) && (l.material.needsUpdate = !0, d = _, h = _.version, g = n.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function y(p, u) {
    p.getRGB(zi, oo(n)), i.buffers.color.setClear(zi.r, zi.g, zi.b, u, a);
  }
  return {
    getClearColor: function() {
      return o;
    },
    setClearColor: function(p, u = 1) {
      o.set(p), c = u, y(o, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(p) {
      c = p, y(o, c);
    },
    render: v
  };
}
function Vl(n, e, t, i) {
  const r = n.getParameter(n.MAX_VERTEX_ATTRIBS), s = i.isWebGL2 ? null : e.get("OES_vertex_array_object"), a = i.isWebGL2 || s !== null, o = {}, c = p(null);
  let l = c, f = !1;
  function d(C, B, G, X, k) {
    let H = !1;
    if (a) {
      const K = y(X, G, B);
      l !== K && (l = K, g(l.object)), H = u(C, X, G, k), H && w(C, X, G, k);
    } else {
      const K = B.wireframe === !0;
      (l.geometry !== X.id || l.program !== G.id || l.wireframe !== K) && (l.geometry = X.id, l.program = G.id, l.wireframe = K, H = !0);
    }
    k !== null && t.update(k, n.ELEMENT_ARRAY_BUFFER), (H || f) && (f = !1, W(C, B, G, X), k !== null && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, t.get(k).buffer));
  }
  function h() {
    return i.isWebGL2 ? n.createVertexArray() : s.createVertexArrayOES();
  }
  function g(C) {
    return i.isWebGL2 ? n.bindVertexArray(C) : s.bindVertexArrayOES(C);
  }
  function v(C) {
    return i.isWebGL2 ? n.deleteVertexArray(C) : s.deleteVertexArrayOES(C);
  }
  function y(C, B, G) {
    const X = G.wireframe === !0;
    let k = o[C.id];
    k === void 0 && (k = {}, o[C.id] = k);
    let H = k[B.id];
    H === void 0 && (H = {}, k[B.id] = H);
    let K = H[X];
    return K === void 0 && (K = p(h()), H[X] = K), K;
  }
  function p(C) {
    const B = [], G = [], X = [];
    for (let k = 0; k < r; k++)
      B[k] = 0, G[k] = 0, X[k] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: B,
      enabledAttributes: G,
      attributeDivisors: X,
      object: C,
      attributes: {},
      index: null
    };
  }
  function u(C, B, G, X) {
    const k = l.attributes, H = B.attributes;
    let K = 0;
    const $ = G.getAttributes();
    for (const fe in $)
      if ($[fe].location >= 0) {
        const O = k[fe];
        let Z = H[fe];
        if (Z === void 0 && (fe === "instanceMatrix" && C.instanceMatrix && (Z = C.instanceMatrix), fe === "instanceColor" && C.instanceColor && (Z = C.instanceColor)), O === void 0 || O.attribute !== Z || Z && O.data !== Z.data)
          return !0;
        K++;
      }
    return l.attributesNum !== K || l.index !== X;
  }
  function w(C, B, G, X) {
    const k = {}, H = B.attributes;
    let K = 0;
    const $ = G.getAttributes();
    for (const fe in $)
      if ($[fe].location >= 0) {
        let O = H[fe];
        O === void 0 && (fe === "instanceMatrix" && C.instanceMatrix && (O = C.instanceMatrix), fe === "instanceColor" && C.instanceColor && (O = C.instanceColor));
        const Z = {};
        Z.attribute = O, O && O.data && (Z.data = O.data), k[fe] = Z, K++;
      }
    l.attributes = k, l.attributesNum = K, l.index = X;
  }
  function _() {
    const C = l.newAttributes;
    for (let B = 0, G = C.length; B < G; B++)
      C[B] = 0;
  }
  function b(C) {
    z(C, 0);
  }
  function z(C, B) {
    const G = l.newAttributes, X = l.enabledAttributes, k = l.attributeDivisors;
    G[C] = 1, X[C] === 0 && (n.enableVertexAttribArray(C), X[C] = 1), k[C] !== B && ((i.isWebGL2 ? n : e.get("ANGLE_instanced_arrays"))[i.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](C, B), k[C] = B);
  }
  function A() {
    const C = l.newAttributes, B = l.enabledAttributes;
    for (let G = 0, X = B.length; G < X; G++)
      B[G] !== C[G] && (n.disableVertexAttribArray(G), B[G] = 0);
  }
  function P(C, B, G, X, k, H, K) {
    K === !0 ? n.vertexAttribIPointer(C, B, G, k, H) : n.vertexAttribPointer(C, B, G, X, k, H);
  }
  function W(C, B, G, X) {
    if (i.isWebGL2 === !1 && (C.isInstancedMesh || X.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    _();
    const k = X.attributes, H = G.getAttributes(), K = B.defaultAttributeValues;
    for (const $ in H) {
      const fe = H[$];
      if (fe.location >= 0) {
        let be = k[$];
        if (be === void 0 && ($ === "instanceMatrix" && C.instanceMatrix && (be = C.instanceMatrix), $ === "instanceColor" && C.instanceColor && (be = C.instanceColor)), be !== void 0) {
          const O = be.normalized, Z = be.itemSize, ae = t.get(be);
          if (ae === void 0)
            continue;
          const _e = ae.buffer, Se = ae.type, de = ae.bytesPerElement, We = i.isWebGL2 === !0 && (Se === n.INT || Se === n.UNSIGNED_INT || be.gpuType === 1013);
          if (be.isInterleavedBufferAttribute) {
            const ze = be.data, L = ze.stride, mt = be.offset;
            if (ze.isInstancedInterleavedBuffer) {
              for (let ve = 0; ve < fe.locationSize; ve++)
                z(fe.location + ve, ze.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = ze.meshPerAttribute * ze.count);
            } else
              for (let ve = 0; ve < fe.locationSize; ve++)
                b(fe.location + ve);
            n.bindBuffer(n.ARRAY_BUFFER, _e);
            for (let ve = 0; ve < fe.locationSize; ve++)
              P(
                fe.location + ve,
                Z / fe.locationSize,
                Se,
                O,
                L * de,
                (mt + Z / fe.locationSize * ve) * de,
                We
              );
          } else {
            if (be.isInstancedBufferAttribute) {
              for (let ze = 0; ze < fe.locationSize; ze++)
                z(fe.location + ze, be.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = be.meshPerAttribute * be.count);
            } else
              for (let ze = 0; ze < fe.locationSize; ze++)
                b(fe.location + ze);
            n.bindBuffer(n.ARRAY_BUFFER, _e);
            for (let ze = 0; ze < fe.locationSize; ze++)
              P(
                fe.location + ze,
                Z / fe.locationSize,
                Se,
                O,
                Z * de,
                Z / fe.locationSize * ze * de,
                We
              );
          }
        } else if (K !== void 0) {
          const O = K[$];
          if (O !== void 0)
            switch (O.length) {
              case 2:
                n.vertexAttrib2fv(fe.location, O);
                break;
              case 3:
                n.vertexAttrib3fv(fe.location, O);
                break;
              case 4:
                n.vertexAttrib4fv(fe.location, O);
                break;
              default:
                n.vertexAttrib1fv(fe.location, O);
            }
        }
      }
    }
    A();
  }
  function ie() {
    q();
    for (const C in o) {
      const B = o[C];
      for (const G in B) {
        const X = B[G];
        for (const k in X)
          v(X[k].object), delete X[k];
        delete B[G];
      }
      delete o[C];
    }
  }
  function x(C) {
    if (o[C.id] === void 0)
      return;
    const B = o[C.id];
    for (const G in B) {
      const X = B[G];
      for (const k in X)
        v(X[k].object), delete X[k];
      delete B[G];
    }
    delete o[C.id];
  }
  function T(C) {
    for (const B in o) {
      const G = o[B];
      if (G[C.id] === void 0)
        continue;
      const X = G[C.id];
      for (const k in X)
        v(X[k].object), delete X[k];
      delete G[C.id];
    }
  }
  function q() {
    ee(), f = !0, l !== c && (l = c, g(l.object));
  }
  function ee() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: d,
    reset: q,
    resetDefaultState: ee,
    dispose: ie,
    releaseStatesOfGeometry: x,
    releaseStatesOfProgram: T,
    initAttributes: _,
    enableAttribute: b,
    disableUnusedAttributes: A
  };
}
function Wl(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function a(f) {
    s = f;
  }
  function o(f, d) {
    n.drawArrays(s, f, d), t.update(d, s, 1);
  }
  function c(f, d, h) {
    if (h === 0)
      return;
    let g, v;
    if (r)
      g = n, v = "drawArraysInstanced";
    else if (g = e.get("ANGLE_instanced_arrays"), v = "drawArraysInstancedANGLE", g === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[v](s, f, d, h), t.update(d, s, h);
  }
  function l(f, d, h) {
    if (h === 0)
      return;
    const g = e.get("WEBGL_multi_draw");
    if (g === null)
      for (let v = 0; v < h; v++)
        this.render(f[v], d[v]);
    else {
      g.multiDrawArraysWEBGL(s, f, 0, d, 0, h);
      let v = 0;
      for (let y = 0; y < h; y++)
        v += d[y];
      t.update(v, s, 1);
    }
  }
  this.setMode = a, this.render = o, this.renderInstances = c, this.renderMultiDraw = l;
}
function ql(n, e, t) {
  let i;
  function r() {
    if (i !== void 0)
      return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const P = e.get("EXT_texture_filter_anisotropic");
      i = n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      i = 0;
    return i;
  }
  function s(P) {
    if (P === "highp") {
      if (n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.HIGH_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.HIGH_FLOAT).precision > 0)
        return "highp";
      P = "mediump";
    }
    return P === "mediump" && n.getShaderPrecisionFormat(n.VERTEX_SHADER, n.MEDIUM_FLOAT).precision > 0 && n.getShaderPrecisionFormat(n.FRAGMENT_SHADER, n.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const a = typeof WebGL2RenderingContext < "u" && n.constructor.name === "WebGL2RenderingContext";
  let o = t.precision !== void 0 ? t.precision : "highp";
  const c = s(o);
  c !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", c, "instead."), o = c);
  const l = a || e.has("WEBGL_draw_buffers"), f = t.logarithmicDepthBuffer === !0, d = n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS), h = n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = n.getParameter(n.MAX_TEXTURE_SIZE), v = n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE), y = n.getParameter(n.MAX_VERTEX_ATTRIBS), p = n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS), u = n.getParameter(n.MAX_VARYING_VECTORS), w = n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS), _ = h > 0, b = a || e.has("OES_texture_float"), z = _ && b, A = a ? n.getParameter(n.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: l,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: f,
    maxTextures: d,
    maxVertexTextures: h,
    maxTextureSize: g,
    maxCubemapSize: v,
    maxAttributes: y,
    maxVertexUniforms: p,
    maxVaryings: u,
    maxFragmentUniforms: w,
    vertexTextures: _,
    floatFragmentTextures: b,
    floatVertexTextures: z,
    maxSamples: A
  };
}
function Xl(n) {
  const e = this;
  let t = null, i = 0, r = !1, s = !1;
  const a = new mn(), o = new Be(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, h) {
    const g = d.length !== 0 || h || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    i !== 0 || r;
    return r = h, i = d.length, g;
  }, this.beginShadows = function() {
    s = !0, f(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, h) {
    t = f(d, h, 0);
  }, this.setState = function(d, h, g) {
    const v = d.clippingPlanes, y = d.clipIntersection, p = d.clipShadows, u = n.get(d);
    if (!r || v === null || v.length === 0 || s && !p)
      s ? f(null) : l();
    else {
      const w = s ? 0 : i, _ = w * 4;
      let b = u.clippingState || null;
      c.value = b, b = f(v, h, _, g);
      for (let z = 0; z !== _; ++z)
        b[z] = t[z];
      u.clippingState = b, this.numIntersection = y ? this.numPlanes : 0, this.numPlanes += w;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = i > 0), e.numPlanes = i, e.numIntersection = 0;
  }
  function f(d, h, g, v) {
    const y = d !== null ? d.length : 0;
    let p = null;
    if (y !== 0) {
      if (p = c.value, v !== !0 || p === null) {
        const u = g + y * 4, w = h.matrixWorldInverse;
        o.getNormalMatrix(w), (p === null || p.length < u) && (p = new Float32Array(u));
        for (let _ = 0, b = g; _ !== y; ++_, b += 4)
          a.copy(d[_]).applyMatrix4(w, o), a.normal.toArray(p, b), p[b + 3] = a.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = y, e.numIntersection = 0, p;
  }
}
function Yl(n) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function i(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (e.has(a)) {
          const c = e.get(a).texture;
          return t(c, a.mapping);
        } else {
          const c = a.image;
          if (c && c.height > 0) {
            const l = new sa(c.height);
            return l.fromEquirectangularTexture(n, a), e.set(a, l), a.addEventListener("dispose", r), t(l.texture, a.mapping);
          } else
            return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const c = e.get(o);
    c !== void 0 && (e.delete(o), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: s
  };
}
class jl extends Ur {
  constructor(e = -1, t = 1, i = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = i, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, i, r, s, a) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = i, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), i = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = i - e, a = i + e, o = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, a = s + l * this.view.width, o -= f * this.view.offsetY, c = o - f * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Vn = 4, gs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], bn = 20, _r = /* @__PURE__ */ new jl(), ms = /* @__PURE__ */ new ke();
let yr = null, Sr = 0, Mr = 0;
const En = (1 + Math.sqrt(5)) / 2, kn = 1 / En, vs = [
  /* @__PURE__ */ new D(1, 1, 1),
  /* @__PURE__ */ new D(-1, 1, 1),
  /* @__PURE__ */ new D(1, 1, -1),
  /* @__PURE__ */ new D(-1, 1, -1),
  /* @__PURE__ */ new D(0, En, kn),
  /* @__PURE__ */ new D(0, En, -kn),
  /* @__PURE__ */ new D(kn, 0, En),
  /* @__PURE__ */ new D(-kn, 0, En),
  /* @__PURE__ */ new D(En, kn, 0),
  /* @__PURE__ */ new D(-En, kn, 0)
];
class xs {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, i = 0.1, r = 100) {
    yr = this._renderer.getRenderTarget(), Sr = this._renderer.getActiveCubeFace(), Mr = this._renderer.getActiveMipmapLevel(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, i, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ss(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = ys(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(yr, Sr, Mr), e.scissorTest = !1, Ri(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), yr = this._renderer.getRenderTarget(), Sr = this._renderer.getActiveCubeFace(), Mr = this._renderer.getActiveMipmapLevel();
    const i = t || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, i = {
      magFilter: 1006,
      minFilter: 1006,
      generateMipmaps: !1,
      type: 1016,
      format: 1023,
      colorSpace: sn,
      depthBuffer: !1
    }, r = _s(e, t, i);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _s(e, t, i);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Zl(s)), this._blurMaterial = Kl(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new jt(this._lodPlanes[0], e);
    this._renderer.compile(t, _r);
  }
  _sceneToCubeUV(e, t, i, r) {
    const o = new At(90, 1, t, i), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], f = this._renderer, d = f.autoClear, h = f.toneMapping;
    f.getClearColor(ms), f.toneMapping = 0, f.autoClear = !1;
    const g = new io({
      name: "PMREM.Background",
      side: 1,
      depthWrite: !1,
      depthTest: !1
    }), v = new jt(new ci(), g);
    let y = !1;
    const p = e.background;
    p ? p.isColor && (g.color.copy(p), e.background = null, y = !0) : (g.color.copy(ms), y = !0);
    for (let u = 0; u < 6; u++) {
      const w = u % 3;
      w === 0 ? (o.up.set(0, c[u], 0), o.lookAt(l[u], 0, 0)) : w === 1 ? (o.up.set(0, 0, c[u]), o.lookAt(0, l[u], 0)) : (o.up.set(0, c[u], 0), o.lookAt(0, 0, l[u]));
      const _ = this._cubeSize;
      Ri(r, w * _, u > 2 ? _ : 0, _, _), f.setRenderTarget(r), y && f.render(v, o), f.render(e, o);
    }
    v.geometry.dispose(), v.material.dispose(), f.toneMapping = h, f.autoClear = d, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const i = this._renderer, r = e.mapping === 301 || e.mapping === 302;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ss()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = ys());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new jt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const c = this._cubeSize;
    Ri(t, 0, 0, 3 * c, 2 * c), i.setRenderTarget(t), i.render(a, _r);
  }
  _applyPMREM(e) {
    const t = this._renderer, i = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = vs[(r - 1) % vs.length];
      this._blur(e, r - 1, r, s, a);
    }
    t.autoClear = i;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, i, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      a,
      t,
      i,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      a,
      e,
      i,
      i,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, i, r, s, a, o) {
    const c = this._renderer, l = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const f = 3, d = new jt(this._lodPlanes[r], l), h = l.uniforms, g = this._sizeLods[i] - 1, v = isFinite(s) ? Math.PI / (2 * g) : 2 * Math.PI / (2 * bn - 1), y = s / v, p = isFinite(s) ? 1 + Math.floor(f * y) : bn;
    p > bn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bn}`);
    const u = [];
    let w = 0;
    for (let P = 0; P < bn; ++P) {
      const W = P / y, ie = Math.exp(-W * W / 2);
      u.push(ie), P === 0 ? w += ie : P < p && (w += 2 * ie);
    }
    for (let P = 0; P < u.length; P++)
      u[P] = u[P] / w;
    h.envMap.value = e.texture, h.samples.value = p, h.weights.value = u, h.latitudinal.value = a === "latitudinal", o && (h.poleAxis.value = o);
    const { _lodMax: _ } = this;
    h.dTheta.value = v, h.mipInt.value = _ - i;
    const b = this._sizeLods[r], z = 3 * b * (r > _ - Vn ? r - _ + Vn : 0), A = 4 * (this._cubeSize - b);
    Ri(t, z, A, 3 * b, 2 * b), c.setRenderTarget(t), c.render(d, _r);
  }
}
function Zl(n) {
  const e = [], t = [], i = [];
  let r = n;
  const s = n - Vn + 1 + gs.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let c = 1 / o;
    a > n - Vn ? c = gs[a - n + Vn - 1] : a === 0 && (c = 0), i.push(c);
    const l = 1 / (o - 2), f = -l, d = 1 + l, h = [f, f, d, f, d, d, f, f, d, d, f, d], g = 6, v = 6, y = 3, p = 2, u = 1, w = new Float32Array(y * v * g), _ = new Float32Array(p * v * g), b = new Float32Array(u * v * g);
    for (let A = 0; A < g; A++) {
      const P = A % 3 * 2 / 3 - 1, W = A > 2 ? 0 : -1, ie = [
        P,
        W,
        0,
        P + 2 / 3,
        W,
        0,
        P + 2 / 3,
        W + 1,
        0,
        P,
        W,
        0,
        P + 2 / 3,
        W + 1,
        0,
        P,
        W + 1,
        0
      ];
      w.set(ie, y * v * A), _.set(h, p * v * A);
      const x = [A, A, A, A, A, A];
      b.set(x, u * v * A);
    }
    const z = new Lt();
    z.setAttribute("position", new tt(w, y)), z.setAttribute("uv", new tt(_, p)), z.setAttribute("faceIndex", new tt(b, u)), e.push(z), r > Vn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: i };
}
function _s(n, e, t) {
  const i = new wt(n, e, t);
  return i.texture.mapping = 306, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i;
}
function Ri(n, e, t, i, r) {
  n.viewport.set(e, t, i, r), n.scissor.set(e, t, i, r);
}
function Kl(n, e, t) {
  const i = new Float32Array(bn), r = new D(0, 1, 0);
  return new at({
    name: "SphericalGaussianBlur",
    defines: {
      n: bn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${n}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Or(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function ys() {
  return new at({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Or(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ss() {
  return new at({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Or(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: 0,
    depthTest: !1,
    depthWrite: !1
  });
}
function Or() {
  return (
    /* glsl */
    `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
  );
}
function $l(n) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function i(o) {
    if (o && o.isTexture) {
      const c = o.mapping, l = c === 303 || c === 304, f = c === 301 || c === 302;
      if (l || f)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let d = e.get(o);
          return t === null && (t = new xs(n)), d = l ? t.fromEquirectangular(o, d) : t.fromCubemap(o, d), e.set(o, d), d.texture;
        } else {
          if (e.has(o))
            return e.get(o).texture;
          {
            const d = o.image;
            if (l && d && d.height > 0 || f && d && r(d)) {
              t === null && (t = new xs(n));
              const h = l ? t.fromEquirectangular(o) : t.fromCubemap(o);
              return e.set(o, h), o.addEventListener("dispose", s), h.texture;
            } else
              return null;
          }
        }
    }
    return o;
  }
  function r(o) {
    let c = 0;
    const l = 6;
    for (let f = 0; f < l; f++)
      o[f] !== void 0 && c++;
    return c === l;
  }
  function s(o) {
    const c = o.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: i,
    dispose: a
  };
}
function Ql(n) {
  const e = {};
  function t(i) {
    if (e[i] !== void 0)
      return e[i];
    let r;
    switch (i) {
      case "WEBGL_depth_texture":
        r = n.getExtension("WEBGL_depth_texture") || n.getExtension("MOZ_WEBGL_depth_texture") || n.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = n.getExtension("WEBGL_compressed_texture_s3tc") || n.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = n.getExtension("WEBGL_compressed_texture_pvrtc") || n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = n.getExtension(i);
    }
    return e[i] = r, r;
  }
  return {
    has: function(i) {
      return t(i) !== null;
    },
    init: function(i) {
      i.isWebGL2 ? (t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(i) {
      const r = t(i);
      return r === null && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), r;
    }
  };
}
function Jl(n, e, t, i) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(d) {
    const h = d.target;
    h.index !== null && e.remove(h.index);
    for (const v in h.attributes)
      e.remove(h.attributes[v]);
    for (const v in h.morphAttributes) {
      const y = h.morphAttributes[v];
      for (let p = 0, u = y.length; p < u; p++)
        e.remove(y[p]);
    }
    h.removeEventListener("dispose", a), delete r[h.id];
    const g = s.get(h);
    g && (e.remove(g), s.delete(h)), i.releaseStatesOfGeometry(h), h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount, t.memory.geometries--;
  }
  function o(d, h) {
    return r[h.id] === !0 || (h.addEventListener("dispose", a), r[h.id] = !0, t.memory.geometries++), h;
  }
  function c(d) {
    const h = d.attributes;
    for (const v in h)
      e.update(h[v], n.ARRAY_BUFFER);
    const g = d.morphAttributes;
    for (const v in g) {
      const y = g[v];
      for (let p = 0, u = y.length; p < u; p++)
        e.update(y[p], n.ARRAY_BUFFER);
    }
  }
  function l(d) {
    const h = [], g = d.index, v = d.attributes.position;
    let y = 0;
    if (g !== null) {
      const w = g.array;
      y = g.version;
      for (let _ = 0, b = w.length; _ < b; _ += 3) {
        const z = w[_ + 0], A = w[_ + 1], P = w[_ + 2];
        h.push(z, A, A, P, P, z);
      }
    } else if (v !== void 0) {
      const w = v.array;
      y = v.version;
      for (let _ = 0, b = w.length / 3 - 1; _ < b; _ += 3) {
        const z = _ + 0, A = _ + 1, P = _ + 2;
        h.push(z, A, A, P, P, z);
      }
    } else
      return;
    const p = new (Qs(h) ? so : ro)(h, 1);
    p.version = y;
    const u = s.get(d);
    u && e.remove(u), s.set(d, p);
  }
  function f(d) {
    const h = s.get(d);
    if (h) {
      const g = d.index;
      g !== null && h.version < g.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: o,
    update: c,
    getWireframeAttribute: f
  };
}
function ef(n, e, t, i) {
  const r = i.isWebGL2;
  let s;
  function a(g) {
    s = g;
  }
  let o, c;
  function l(g) {
    o = g.type, c = g.bytesPerElement;
  }
  function f(g, v) {
    n.drawElements(s, v, o, g * c), t.update(v, s, 1);
  }
  function d(g, v, y) {
    if (y === 0)
      return;
    let p, u;
    if (r)
      p = n, u = "drawElementsInstanced";
    else if (p = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", p === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    p[u](s, v, o, g * c, y), t.update(v, s, y);
  }
  function h(g, v, y) {
    if (y === 0)
      return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null)
      for (let u = 0; u < y; u++)
        this.render(g[u] / c, v[u]);
    else {
      p.multiDrawElementsWEBGL(s, v, 0, o, g, 0, y);
      let u = 0;
      for (let w = 0; w < y; w++)
        u += v[w];
      t.update(u, s, 1);
    }
  }
  this.setMode = a, this.setIndex = l, this.render = f, this.renderInstances = d, this.renderMultiDraw = h;
}
function tf(n) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function i(s, a, o) {
    switch (t.calls++, a) {
      case n.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case n.LINES:
        t.lines += o * (s / 2);
        break;
      case n.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case n.LINE_LOOP:
        t.lines += o * s;
        break;
      case n.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: i
  };
}
function nf(n, e) {
  return n[0] - e[0];
}
function rf(n, e) {
  return Math.abs(e[1]) - Math.abs(n[1]);
}
function sf(n, e, t) {
  const i = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), a = new ft(), o = [];
  for (let l = 0; l < 8; l++)
    o[l] = [l, 0];
  function c(l, f, d) {
    const h = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const g = f.morphAttributes.position || f.morphAttributes.normal || f.morphAttributes.color, v = g !== void 0 ? g.length : 0;
      let y = s.get(f);
      if (y === void 0 || y.count !== v) {
        let C = function() {
          q.dispose(), s.delete(f), f.removeEventListener("dispose", C);
        };
        y !== void 0 && y.texture.dispose();
        const w = f.morphAttributes.position !== void 0, _ = f.morphAttributes.normal !== void 0, b = f.morphAttributes.color !== void 0, z = f.morphAttributes.position || [], A = f.morphAttributes.normal || [], P = f.morphAttributes.color || [];
        let W = 0;
        w === !0 && (W = 1), _ === !0 && (W = 2), b === !0 && (W = 3);
        let ie = f.attributes.position.count * W, x = 1;
        ie > e.maxTextureSize && (x = Math.ceil(ie / e.maxTextureSize), ie = e.maxTextureSize);
        const T = new Float32Array(ie * x * 4 * v), q = new to(T, ie, x, v);
        q.type = 1015, q.needsUpdate = !0;
        const ee = W * 4;
        for (let B = 0; B < v; B++) {
          const G = z[B], X = A[B], k = P[B], H = ie * x * 4 * B;
          for (let K = 0; K < G.count; K++) {
            const $ = K * ee;
            w === !0 && (a.fromBufferAttribute(G, K), T[H + $ + 0] = a.x, T[H + $ + 1] = a.y, T[H + $ + 2] = a.z, T[H + $ + 3] = 0), _ === !0 && (a.fromBufferAttribute(X, K), T[H + $ + 4] = a.x, T[H + $ + 5] = a.y, T[H + $ + 6] = a.z, T[H + $ + 7] = 0), b === !0 && (a.fromBufferAttribute(k, K), T[H + $ + 8] = a.x, T[H + $ + 9] = a.y, T[H + $ + 10] = a.z, T[H + $ + 11] = k.itemSize === 4 ? a.w : 1);
          }
        }
        y = {
          count: v,
          texture: q,
          size: new Te(ie, x)
        }, s.set(f, y), f.addEventListener("dispose", C);
      }
      let p = 0;
      for (let w = 0; w < h.length; w++)
        p += h[w];
      const u = f.morphTargetsRelative ? 1 : 1 - p;
      d.getUniforms().setValue(n, "morphTargetBaseInfluence", u), d.getUniforms().setValue(n, "morphTargetInfluences", h), d.getUniforms().setValue(n, "morphTargetsTexture", y.texture, t), d.getUniforms().setValue(n, "morphTargetsTextureSize", y.size);
    } else {
      const g = h === void 0 ? 0 : h.length;
      let v = i[f.id];
      if (v === void 0 || v.length !== g) {
        v = [];
        for (let _ = 0; _ < g; _++)
          v[_] = [_, 0];
        i[f.id] = v;
      }
      for (let _ = 0; _ < g; _++) {
        const b = v[_];
        b[0] = _, b[1] = h[_];
      }
      v.sort(rf);
      for (let _ = 0; _ < 8; _++)
        _ < g && v[_][1] ? (o[_][0] = v[_][0], o[_][1] = v[_][1]) : (o[_][0] = Number.MAX_SAFE_INTEGER, o[_][1] = 0);
      o.sort(nf);
      const y = f.morphAttributes.position, p = f.morphAttributes.normal;
      let u = 0;
      for (let _ = 0; _ < 8; _++) {
        const b = o[_], z = b[0], A = b[1];
        z !== Number.MAX_SAFE_INTEGER && A ? (y && f.getAttribute("morphTarget" + _) !== y[z] && f.setAttribute("morphTarget" + _, y[z]), p && f.getAttribute("morphNormal" + _) !== p[z] && f.setAttribute("morphNormal" + _, p[z]), r[_] = A, u += A) : (y && f.hasAttribute("morphTarget" + _) === !0 && f.deleteAttribute("morphTarget" + _), p && f.hasAttribute("morphNormal" + _) === !0 && f.deleteAttribute("morphNormal" + _), r[_] = 0);
      }
      const w = f.morphTargetsRelative ? 1 : 1 - u;
      d.getUniforms().setValue(n, "morphTargetBaseInfluence", w), d.getUniforms().setValue(n, "morphTargetInfluences", r);
    }
  }
  return {
    update: c
  };
}
function of(n, e, t, i) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = i.render.frame, f = c.geometry, d = e.get(c, f);
    if (r.get(d) !== l && (e.update(d), r.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o), r.get(c) !== l && (t.update(c.instanceMatrix, n.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, n.ARRAY_BUFFER), r.set(c, l))), c.isSkinnedMesh) {
      const h = c.skeleton;
      r.get(h) !== l && (h.update(), r.set(h, l));
    }
    return d;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(c) {
    const l = c.target;
    l.removeEventListener("dispose", o), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: a
  };
}
class Br extends Mt {
  constructor(e, t, i, r, s, a, o, c, l, f) {
    if (f = f !== void 0 ? f : 1026, f !== 1026 && f !== 1027)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    i === void 0 && f === 1026 && (i = 1014), i === void 0 && f === 1027 && (i = 1020), super(null, r, s, a, o, c, f, i, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = c !== void 0 ? c : 1003, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
const fo = /* @__PURE__ */ new Mt(), uo = /* @__PURE__ */ new Br(1, 1);
uo.compareFunction = 515;
const ho = /* @__PURE__ */ new to(), po = /* @__PURE__ */ new ko(), go = /* @__PURE__ */ new ao(), Ms = [], ws = [], Es = new Float32Array(16), Ts = new Float32Array(9), bs = new Float32Array(4);
function Kn(n, e, t) {
  const i = n[0];
  if (i <= 0 || i > 0)
    return n;
  const r = e * t;
  let s = Ms[r];
  if (s === void 0 && (s = new Float32Array(r), Ms[r] = s), e !== 0) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a)
      o += t, n[a].toArray(s, o);
  }
  return s;
}
function ut(n, e) {
  if (n.length !== e.length)
    return !1;
  for (let t = 0, i = n.length; t < i; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
function dt(n, e) {
  for (let t = 0, i = e.length; t < i; t++)
    n[t] = e[t];
}
function Wi(n, e) {
  let t = ws[e];
  t === void 0 && (t = new Int32Array(e), ws[e] = t);
  for (let i = 0; i !== e; ++i)
    t[i] = n.allocateTextureUnit();
  return t;
}
function af(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1f(this.addr, e), t[0] = e);
}
function cf(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e))
      return;
    n.uniform2fv(this.addr, e), dt(t, e);
  }
}
function lf(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (n.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ut(t, e))
      return;
    n.uniform3fv(this.addr, e), dt(t, e);
  }
}
function ff(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e))
      return;
    n.uniform4fv(this.addr, e), dt(t, e);
  }
}
function uf(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (ut(t, e))
      return;
    n.uniformMatrix2fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, i))
      return;
    bs.set(i), n.uniformMatrix2fv(this.addr, !1, bs), dt(t, i);
  }
}
function df(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (ut(t, e))
      return;
    n.uniformMatrix3fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, i))
      return;
    Ts.set(i), n.uniformMatrix3fv(this.addr, !1, Ts), dt(t, i);
  }
}
function hf(n, e) {
  const t = this.cache, i = e.elements;
  if (i === void 0) {
    if (ut(t, e))
      return;
    n.uniformMatrix4fv(this.addr, !1, e), dt(t, e);
  } else {
    if (ut(t, i))
      return;
    Es.set(i), n.uniformMatrix4fv(this.addr, !1, Es), dt(t, i);
  }
}
function pf(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1i(this.addr, e), t[0] = e);
}
function gf(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e))
      return;
    n.uniform2iv(this.addr, e), dt(t, e);
  }
}
function mf(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e))
      return;
    n.uniform3iv(this.addr, e), dt(t, e);
  }
}
function vf(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e))
      return;
    n.uniform4iv(this.addr, e), dt(t, e);
  }
}
function xf(n, e) {
  const t = this.cache;
  t[0] !== e && (n.uniform1ui(this.addr, e), t[0] = e);
}
function _f(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (n.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e))
      return;
    n.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function yf(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (n.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e))
      return;
    n.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function Sf(n, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (n.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e))
      return;
    n.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function Mf(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r);
  const s = this.type === n.SAMPLER_2D_SHADOW ? uo : fo;
  t.setTexture2D(e || s, r);
}
function wf(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTexture3D(e || po, r);
}
function Ef(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTextureCube(e || go, r);
}
function Tf(n, e, t) {
  const i = this.cache, r = t.allocateTextureUnit();
  i[0] !== r && (n.uniform1i(this.addr, r), i[0] = r), t.setTexture2DArray(e || ho, r);
}
function bf(n) {
  switch (n) {
    case 5126:
      return af;
    case 35664:
      return cf;
    case 35665:
      return lf;
    case 35666:
      return ff;
    case 35674:
      return uf;
    case 35675:
      return df;
    case 35676:
      return hf;
    case 5124:
    case 35670:
      return pf;
    case 35667:
    case 35671:
      return gf;
    case 35668:
    case 35672:
      return mf;
    case 35669:
    case 35673:
      return vf;
    case 5125:
      return xf;
    case 36294:
      return _f;
    case 36295:
      return yf;
    case 36296:
      return Sf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Mf;
    case 35679:
    case 36299:
    case 36307:
      return wf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ef;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Tf;
  }
}
function Pf(n, e) {
  n.uniform1fv(this.addr, e);
}
function Af(n, e) {
  const t = Kn(e, this.size, 2);
  n.uniform2fv(this.addr, t);
}
function Cf(n, e) {
  const t = Kn(e, this.size, 3);
  n.uniform3fv(this.addr, t);
}
function zf(n, e) {
  const t = Kn(e, this.size, 4);
  n.uniform4fv(this.addr, t);
}
function Rf(n, e) {
  const t = Kn(e, this.size, 4);
  n.uniformMatrix2fv(this.addr, !1, t);
}
function Lf(n, e) {
  const t = Kn(e, this.size, 9);
  n.uniformMatrix3fv(this.addr, !1, t);
}
function Df(n, e) {
  const t = Kn(e, this.size, 16);
  n.uniformMatrix4fv(this.addr, !1, t);
}
function Nf(n, e) {
  n.uniform1iv(this.addr, e);
}
function Ff(n, e) {
  n.uniform2iv(this.addr, e);
}
function If(n, e) {
  n.uniform3iv(this.addr, e);
}
function Uf(n, e) {
  n.uniform4iv(this.addr, e);
}
function Of(n, e) {
  n.uniform1uiv(this.addr, e);
}
function Bf(n, e) {
  n.uniform2uiv(this.addr, e);
}
function Gf(n, e) {
  n.uniform3uiv(this.addr, e);
}
function Hf(n, e) {
  n.uniform4uiv(this.addr, e);
}
function kf(n, e, t) {
  const i = this.cache, r = e.length, s = Wi(t, r);
  ut(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2D(e[a] || fo, s[a]);
}
function Vf(n, e, t) {
  const i = this.cache, r = e.length, s = Wi(t, r);
  ut(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture3D(e[a] || po, s[a]);
}
function Wf(n, e, t) {
  const i = this.cache, r = e.length, s = Wi(t, r);
  ut(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTextureCube(e[a] || go, s[a]);
}
function qf(n, e, t) {
  const i = this.cache, r = e.length, s = Wi(t, r);
  ut(i, s) || (n.uniform1iv(this.addr, s), dt(i, s));
  for (let a = 0; a !== r; ++a)
    t.setTexture2DArray(e[a] || ho, s[a]);
}
function Xf(n) {
  switch (n) {
    case 5126:
      return Pf;
    case 35664:
      return Af;
    case 35665:
      return Cf;
    case 35666:
      return zf;
    case 35674:
      return Rf;
    case 35675:
      return Lf;
    case 35676:
      return Df;
    case 5124:
    case 35670:
      return Nf;
    case 35667:
    case 35671:
      return Ff;
    case 35668:
    case 35672:
      return If;
    case 35669:
    case 35673:
      return Uf;
    case 5125:
      return Of;
    case 36294:
      return Bf;
    case 36295:
      return Gf;
    case 36296:
      return Hf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return kf;
    case 35679:
    case 36299:
    case 36307:
      return Vf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Wf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return qf;
  }
}
class Yf {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.setValue = bf(t.type);
  }
}
class jf {
  constructor(e, t, i) {
    this.id = e, this.addr = i, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Xf(t.type);
  }
}
class Zf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, i) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], i);
    }
  }
}
const wr = /(\w+)(\])?(\[|\.)?/g;
function Ps(n, e) {
  n.seq.push(e), n.map[e.id] = e;
}
function Kf(n, e, t) {
  const i = n.name, r = i.length;
  for (wr.lastIndex = 0; ; ) {
    const s = wr.exec(i), a = wr.lastIndex;
    let o = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (o = o | 0), l === void 0 || l === "[" && a + 2 === r) {
      Ps(t, l === void 0 ? new Yf(o, n, e) : new jf(o, n, e));
      break;
    } else {
      let d = t.map[o];
      d === void 0 && (d = new Zf(o), Ps(t, d)), t = d;
    }
  }
}
class Ii {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const i = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      Kf(s, a, this);
    }
  }
  setValue(e, t, i, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, i, r);
  }
  setOptional(e, t, i) {
    const r = t[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, t, i, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], c = i[o.id];
      c.needsUpdate !== !1 && o.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && i.push(a);
    }
    return i;
  }
}
function As(n, e, t) {
  const i = n.createShader(e);
  return n.shaderSource(i, t), n.compileShader(i), i;
}
const $f = 37297;
let Qf = 0;
function Jf(n, e) {
  const t = n.split(`
`), i = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return i.join(`
`);
}
function eu(n) {
  const e = je.getPrimaries(je.workingColorSpace), t = je.getPrimaries(n);
  let i;
  switch (e === t ? i = "" : e === Bi && t === Oi ? i = "LinearDisplayP3ToLinearSRGB" : e === Oi && t === Bi && (i = "LinearSRGBToLinearDisplayP3"), n) {
    case sn:
    case Hi:
      return [i, "LinearTransferOETF"];
    case xt:
    case Nr:
      return [i, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", n), [i, "LinearTransferOETF"];
  }
}
function Cs(n, e, t) {
  const i = n.getShaderParameter(e, n.COMPILE_STATUS), r = n.getShaderInfoLog(e).trim();
  if (i && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + Jf(n.getShaderSource(e), a);
  } else
    return r;
}
function tu(n, e) {
  const t = eu(e);
  return `vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function nu(n, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "OptimizedCineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + n + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function iu(n) {
  return [
    n.extensionDerivatives || n.envMapCubeUVHeight || n.bumpMap || n.normalMapTangentSpace || n.clearcoatNormalMap || n.flatShading || n.alphaToCoverage || n.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (n.extensionFragDepth || n.logarithmicDepthBuffer) && n.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    n.extensionDrawBuffers && n.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (n.extensionShaderTextureLOD || n.envMap || n.transmission) && n.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Wn).join(`
`);
}
function ru(n) {
  return [
    n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "",
    n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""
  ].filter(Wn).join(`
`);
}
function su(n) {
  const e = [];
  for (const t in n) {
    const i = n[t];
    i !== !1 && e.push("#define " + t + " " + i);
  }
  return e.join(`
`);
}
function ou(n, e) {
  const t = {}, i = n.getProgramParameter(e, n.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = n.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === n.FLOAT_MAT2 && (o = 2), s.type === n.FLOAT_MAT3 && (o = 3), s.type === n.FLOAT_MAT4 && (o = 4), t[a] = {
      type: s.type,
      location: n.getAttribLocation(e, a),
      locationSize: o
    };
  }
  return t;
}
function Wn(n) {
  return n !== "";
}
function zs(n, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return n.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Rs(n, e) {
  return n.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const au = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Cr(n) {
  return n.replace(au, lu);
}
const cu = /* @__PURE__ */ new Map([
  ["encodings_fragment", "colorspace_fragment"],
  // @deprecated, r154
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  // @deprecated, r154
  ["output_fragment", "opaque_fragment"]
  // @deprecated, r154
]);
function lu(n, e) {
  let t = Ne[e];
  if (t === void 0) {
    const i = cu.get(e);
    if (i !== void 0)
      t = Ne[i], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, i);
    else
      throw new Error("Can not resolve #include <" + e + ">");
  }
  return Cr(t);
}
const fu = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ls(n) {
  return n.replace(fu, uu);
}
function uu(n, e, t, i) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += i.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ds(n) {
  let e = `precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;
  return n.isWebGL2 && (e += `precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`), n.precision === "highp" ? e += `
#define HIGH_PRECISION` : n.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : n.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function du(n) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return n.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function hu(n) {
  let e = "ENVMAP_TYPE_CUBE";
  if (n.envMap)
    switch (n.envMapMode) {
      case 301:
      case 302:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function pu(n) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (n.envMap)
    switch (n.envMapMode) {
      case 302:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function gu(n) {
  let e = "ENVMAP_BLENDING_NONE";
  if (n.envMap)
    switch (n.combine) {
      case 0:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function mu(n) {
  const e = n.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: i, maxMip: t };
}
function vu(n, e, t, i) {
  const r = n.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const c = du(t), l = hu(t), f = pu(t), d = gu(t), h = mu(t), g = t.isWebGL2 ? "" : iu(t), v = ru(t), y = su(s), p = r.createProgram();
  let u, w, _ = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (u = [
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    y
  ].filter(Wn).join(`
`), u.length > 0 && (u += `
`), w = [
    g,
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    y
  ].filter(Wn).join(`
`), w.length > 0 && (w += `
`)) : (u = [
    Ds(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    y,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
    t.batching ? "#define USE_BATCHING" : "",
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + f : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;",
    "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;",
    "uniform mat3 normalMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    "#ifdef USE_INSTANCING",
    "	attribute mat4 instanceMatrix;",
    "#endif",
    "#ifdef USE_INSTANCING_COLOR",
    "	attribute vec3 instanceColor;",
    "#endif",
    "attribute vec3 position;",
    "attribute vec3 normal;",
    "attribute vec2 uv;",
    "#ifdef USE_UV1",
    "	attribute vec2 uv1;",
    "#endif",
    "#ifdef USE_UV2",
    "	attribute vec2 uv2;",
    "#endif",
    "#ifdef USE_UV3",
    "	attribute vec2 uv3;",
    "#endif",
    "#ifdef USE_TANGENT",
    "	attribute vec4 tangent;",
    "#endif",
    "#if defined( USE_COLOR_ALPHA )",
    "	attribute vec4 color;",
    "#elif defined( USE_COLOR )",
    "	attribute vec3 color;",
    "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(Wn).join(`
`), w = [
    g,
    Ds(t),
    "#define SHADER_TYPE " + t.shaderType,
    "#define SHADER_NAME " + t.shaderName,
    y,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + f : "",
    t.envMap ? "#define " + d : "",
    h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
    h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
    h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.anisotropy ? "#define USE_ANISOTROPY" : "",
    t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.alphaHash ? "#define USE_ALPHAHASH" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
    t.toneMapping !== 0 ? Ne.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== 0 ? nu("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Ne.colorspace_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    tu("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(Wn).join(`
`)), a = Cr(a), a = zs(a, t), a = Rs(a, t), o = Cr(o), o = zs(o, t), o = Rs(o, t), a = Ls(a), o = Ls(o), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (_ = `#version 300 es
`, u = [
    v,
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + u, w = [
    "precision mediump sampler2DArray;",
    "#define varying in",
    t.glslVersion === Zr ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === Zr ? "" : "#define gl_FragColor pc_fragColor",
    "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture",
    "#define textureCube texture",
    "#define texture2DProj textureProj",
    "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod",
    "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad",
    "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + w);
  const b = _ + u + a, z = _ + w + o, A = As(r, r.VERTEX_SHADER, b), P = As(r, r.FRAGMENT_SHADER, z);
  r.attachShader(p, A), r.attachShader(p, P), t.index0AttributeName !== void 0 ? r.bindAttribLocation(p, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(p, 0, "position"), r.linkProgram(p);
  function W(q) {
    if (n.debug.checkShaderErrors) {
      const ee = r.getProgramInfoLog(p).trim(), C = r.getShaderInfoLog(A).trim(), B = r.getShaderInfoLog(P).trim();
      let G = !0, X = !0;
      if (r.getProgramParameter(p, r.LINK_STATUS) === !1)
        if (G = !1, typeof n.debug.onShaderError == "function")
          n.debug.onShaderError(r, p, A, P);
        else {
          const k = Cs(r, A, "vertex"), H = Cs(r, P, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(p, r.VALIDATE_STATUS) + `

Material Name: ` + q.name + `
Material Type: ` + q.type + `

Program Info Log: ` + ee + `
` + k + `
` + H
          );
        }
      else
        ee !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ee) : (C === "" || B === "") && (X = !1);
      X && (q.diagnostics = {
        runnable: G,
        programLog: ee,
        vertexShader: {
          log: C,
          prefix: u
        },
        fragmentShader: {
          log: B,
          prefix: w
        }
      });
    }
    r.deleteShader(A), r.deleteShader(P), ie = new Ii(r, p), x = ou(r, p);
  }
  let ie;
  this.getUniforms = function() {
    return ie === void 0 && W(this), ie;
  };
  let x;
  this.getAttributes = function() {
    return x === void 0 && W(this), x;
  };
  let T = t.rendererExtensionParallelShaderCompile === !1;
  return this.isReady = function() {
    return T === !1 && (T = r.getProgramParameter(p, $f)), T;
  }, this.destroy = function() {
    i.releaseStatesOfProgram(this), r.deleteProgram(p), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Qf++, this.cacheKey = e, this.usedTimes = 1, this.program = p, this.vertexShader = A, this.fragmentShader = P, this;
}
let xu = 0;
class _u {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, i = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(i), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === !1 && (a.add(r), r.usedTimes++), a.has(s) === !1 && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const i of t)
      i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let i = t.get(e);
    return i === void 0 && (i = /* @__PURE__ */ new Set(), t.set(e, i)), i;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let i = t.get(e);
    return i === void 0 && (i = new yu(e), t.set(e, i)), i;
  }
}
class yu {
  constructor(e) {
    this.id = xu++, this.code = e, this.usedTimes = 0;
  }
}
function Su(n, e, t, i, r, s, a) {
  const o = new Ir(), c = new _u(), l = /* @__PURE__ */ new Set(), f = [], d = r.isWebGL2, h = r.logarithmicDepthBuffer, g = r.vertexTextures;
  let v = r.precision;
  const y = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  function p(x) {
    return l.add(x), x === 0 ? "uv" : `uv${x}`;
  }
  function u(x, T, q, ee, C) {
    const B = ee.fog, G = C.geometry, X = x.isMeshStandardMaterial ? ee.environment : null, k = (x.isMeshStandardMaterial ? t : e).get(x.envMap || X), H = k && k.mapping === 306 ? k.image.height : null, K = y[x.type];
    x.precision !== null && (v = r.getMaxPrecision(x.precision), v !== x.precision && console.warn("THREE.WebGLProgram.getParameters:", x.precision, "not supported, using", v, "instead."));
    const $ = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, fe = $ !== void 0 ? $.length : 0;
    let be = 0;
    G.morphAttributes.position !== void 0 && (be = 1), G.morphAttributes.normal !== void 0 && (be = 2), G.morphAttributes.color !== void 0 && (be = 3);
    let O, Z, ae, _e;
    if (K) {
      const $e = Xt[K];
      O = $e.vertexShader, Z = $e.fragmentShader;
    } else
      O = x.vertexShader, Z = x.fragmentShader, c.update(x), ae = c.getVertexShaderID(x), _e = c.getFragmentShaderID(x);
    const Se = n.getRenderTarget(), de = C.isInstancedMesh === !0, We = C.isBatchedMesh === !0, ze = !!x.map, L = !!x.matcap, mt = !!k, ve = !!x.aoMap, Pe = !!x.lightMap, ge = !!x.bumpMap, nt = !!x.normalMap, Le = !!x.displacementMap, M = !!x.emissiveMap, m = !!x.metalnessMap, N = !!x.roughnessMap, J = x.anisotropy > 0, Y = x.clearcoat > 0, Q = x.iridescence > 0, he = x.sheen > 0, se = x.transmission > 0, ce = J && !!x.anisotropyMap, we = Y && !!x.clearcoatMap, Fe = Y && !!x.clearcoatNormalMap, j = Y && !!x.clearcoatRoughnessMap, Ye = Q && !!x.iridescenceMap, Ge = Q && !!x.iridescenceThicknessMap, Ae = he && !!x.sheenColorMap, me = he && !!x.sheenRoughnessMap, le = !!x.specularMap, De = !!x.specularColorMap, qe = !!x.specularIntensityMap, Je = se && !!x.transmissionMap, He = se && !!x.thicknessMap, Ze = !!x.gradientMap, E = !!x.alphaMap, te = x.alphaTest > 0, ne = !!x.alphaHash, ue = !!x.extensions;
    let xe = 0;
    x.toneMapped && (Se === null || Se.isXRRenderTarget === !0) && (xe = n.toneMapping);
    const Xe = {
      isWebGL2: d,
      shaderID: K,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: O,
      fragmentShader: Z,
      defines: x.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: _e,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: v,
      batching: We,
      instancing: de,
      instancingColor: de && C.instanceColor !== null,
      supportsVertexTextures: g,
      outputColorSpace: Se === null ? n.outputColorSpace : Se.isXRRenderTarget === !0 ? Se.texture.colorSpace : sn,
      alphaToCoverage: !!x.alphaToCoverage,
      map: ze,
      matcap: L,
      envMap: mt,
      envMapMode: mt && k.mapping,
      envMapCubeUVHeight: H,
      aoMap: ve,
      lightMap: Pe,
      bumpMap: ge,
      normalMap: nt,
      displacementMap: g && Le,
      emissiveMap: M,
      normalMapObjectSpace: nt && x.normalMapType === 1,
      normalMapTangentSpace: nt && x.normalMapType === 0,
      metalnessMap: m,
      roughnessMap: N,
      anisotropy: J,
      anisotropyMap: ce,
      clearcoat: Y,
      clearcoatMap: we,
      clearcoatNormalMap: Fe,
      clearcoatRoughnessMap: j,
      iridescence: Q,
      iridescenceMap: Ye,
      iridescenceThicknessMap: Ge,
      sheen: he,
      sheenColorMap: Ae,
      sheenRoughnessMap: me,
      specularMap: le,
      specularColorMap: De,
      specularIntensityMap: qe,
      transmission: se,
      transmissionMap: Je,
      thicknessMap: He,
      gradientMap: Ze,
      opaque: x.transparent === !1 && x.blending === 1 && x.alphaToCoverage === !1,
      alphaMap: E,
      alphaTest: te,
      alphaHash: ne,
      combine: x.combine,
      //
      mapUv: ze && p(x.map.channel),
      aoMapUv: ve && p(x.aoMap.channel),
      lightMapUv: Pe && p(x.lightMap.channel),
      bumpMapUv: ge && p(x.bumpMap.channel),
      normalMapUv: nt && p(x.normalMap.channel),
      displacementMapUv: Le && p(x.displacementMap.channel),
      emissiveMapUv: M && p(x.emissiveMap.channel),
      metalnessMapUv: m && p(x.metalnessMap.channel),
      roughnessMapUv: N && p(x.roughnessMap.channel),
      anisotropyMapUv: ce && p(x.anisotropyMap.channel),
      clearcoatMapUv: we && p(x.clearcoatMap.channel),
      clearcoatNormalMapUv: Fe && p(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: j && p(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Ye && p(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: Ge && p(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ae && p(x.sheenColorMap.channel),
      sheenRoughnessMapUv: me && p(x.sheenRoughnessMap.channel),
      specularMapUv: le && p(x.specularMap.channel),
      specularColorMapUv: De && p(x.specularColorMap.channel),
      specularIntensityMapUv: qe && p(x.specularIntensityMap.channel),
      transmissionMapUv: Je && p(x.transmissionMap.channel),
      thicknessMapUv: He && p(x.thicknessMap.channel),
      alphaMapUv: E && p(x.alphaMap.channel),
      //
      vertexTangents: !!G.attributes.tangent && (nt || J),
      vertexColors: x.vertexColors,
      vertexAlphas: x.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      pointsUvs: C.isPoints === !0 && !!G.attributes.uv && (ze || E),
      fog: !!B,
      useFog: x.fog === !0,
      fogExp2: !!B && B.isFogExp2,
      flatShading: x.flatShading === !0,
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: C.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: fe,
      morphTextureStride: be,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: n.shadowMap.enabled && q.length > 0,
      shadowMapType: n.shadowMap.type,
      toneMapping: xe,
      useLegacyLights: n._useLegacyLights,
      decodeVideoTexture: ze && x.map.isVideoTexture === !0 && je.getTransfer(x.map.colorSpace) === et,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === 2,
      flipSided: x.side === 1,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionDerivatives: ue && x.extensions.derivatives === !0,
      extensionFragDepth: ue && x.extensions.fragDepth === !0,
      extensionDrawBuffers: ue && x.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: ue && x.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: ue && x.extensions.clipCullDistance === !0 && i.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw: ue && x.extensions.multiDraw === !0 && i.has("WEBGL_multi_draw"),
      rendererExtensionFragDepth: d || i.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: d || i.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: d || i.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: x.customProgramCacheKey()
    };
    return Xe.vertexUv1s = l.has(1), Xe.vertexUv2s = l.has(2), Xe.vertexUv3s = l.has(3), l.clear(), Xe;
  }
  function w(x) {
    const T = [];
    if (x.shaderID ? T.push(x.shaderID) : (T.push(x.customVertexShaderID), T.push(x.customFragmentShaderID)), x.defines !== void 0)
      for (const q in x.defines)
        T.push(q), T.push(x.defines[q]);
    return x.isRawShaderMaterial === !1 && (_(T, x), b(T, x), T.push(n.outputColorSpace)), T.push(x.customProgramCacheKey), T.join();
  }
  function _(x, T) {
    x.push(T.precision), x.push(T.outputColorSpace), x.push(T.envMapMode), x.push(T.envMapCubeUVHeight), x.push(T.mapUv), x.push(T.alphaMapUv), x.push(T.lightMapUv), x.push(T.aoMapUv), x.push(T.bumpMapUv), x.push(T.normalMapUv), x.push(T.displacementMapUv), x.push(T.emissiveMapUv), x.push(T.metalnessMapUv), x.push(T.roughnessMapUv), x.push(T.anisotropyMapUv), x.push(T.clearcoatMapUv), x.push(T.clearcoatNormalMapUv), x.push(T.clearcoatRoughnessMapUv), x.push(T.iridescenceMapUv), x.push(T.iridescenceThicknessMapUv), x.push(T.sheenColorMapUv), x.push(T.sheenRoughnessMapUv), x.push(T.specularMapUv), x.push(T.specularColorMapUv), x.push(T.specularIntensityMapUv), x.push(T.transmissionMapUv), x.push(T.thicknessMapUv), x.push(T.combine), x.push(T.fogExp2), x.push(T.sizeAttenuation), x.push(T.morphTargetsCount), x.push(T.morphAttributeCount), x.push(T.numDirLights), x.push(T.numPointLights), x.push(T.numSpotLights), x.push(T.numSpotLightMaps), x.push(T.numHemiLights), x.push(T.numRectAreaLights), x.push(T.numDirLightShadows), x.push(T.numPointLightShadows), x.push(T.numSpotLightShadows), x.push(T.numSpotLightShadowsWithMaps), x.push(T.numLightProbes), x.push(T.shadowMapType), x.push(T.toneMapping), x.push(T.numClippingPlanes), x.push(T.numClipIntersection), x.push(T.depthPacking);
  }
  function b(x, T) {
    o.disableAll(), T.isWebGL2 && o.enable(0), T.supportsVertexTextures && o.enable(1), T.instancing && o.enable(2), T.instancingColor && o.enable(3), T.matcap && o.enable(4), T.envMap && o.enable(5), T.normalMapObjectSpace && o.enable(6), T.normalMapTangentSpace && o.enable(7), T.clearcoat && o.enable(8), T.iridescence && o.enable(9), T.alphaTest && o.enable(10), T.vertexColors && o.enable(11), T.vertexAlphas && o.enable(12), T.vertexUv1s && o.enable(13), T.vertexUv2s && o.enable(14), T.vertexUv3s && o.enable(15), T.vertexTangents && o.enable(16), T.anisotropy && o.enable(17), T.alphaHash && o.enable(18), T.batching && o.enable(19), x.push(o.mask), o.disableAll(), T.fog && o.enable(0), T.useFog && o.enable(1), T.flatShading && o.enable(2), T.logarithmicDepthBuffer && o.enable(3), T.skinning && o.enable(4), T.morphTargets && o.enable(5), T.morphNormals && o.enable(6), T.morphColors && o.enable(7), T.premultipliedAlpha && o.enable(8), T.shadowMapEnabled && o.enable(9), T.useLegacyLights && o.enable(10), T.doubleSided && o.enable(11), T.flipSided && o.enable(12), T.useDepthPacking && o.enable(13), T.dithering && o.enable(14), T.transmission && o.enable(15), T.sheen && o.enable(16), T.opaque && o.enable(17), T.pointsUvs && o.enable(18), T.decodeVideoTexture && o.enable(19), T.alphaToCoverage && o.enable(20), x.push(o.mask);
  }
  function z(x) {
    const T = y[x.type];
    let q;
    if (T) {
      const ee = Xt[T];
      q = ta.clone(ee.uniforms);
    } else
      q = x.uniforms;
    return q;
  }
  function A(x, T) {
    let q;
    for (let ee = 0, C = f.length; ee < C; ee++) {
      const B = f[ee];
      if (B.cacheKey === T) {
        q = B, ++q.usedTimes;
        break;
      }
    }
    return q === void 0 && (q = new vu(n, T, x, s), f.push(q)), q;
  }
  function P(x) {
    if (--x.usedTimes === 0) {
      const T = f.indexOf(x);
      f[T] = f[f.length - 1], f.pop(), x.destroy();
    }
  }
  function W(x) {
    c.remove(x);
  }
  function ie() {
    c.dispose();
  }
  return {
    getParameters: u,
    getProgramCacheKey: w,
    getUniforms: z,
    acquireProgram: A,
    releaseProgram: P,
    releaseShaderCache: W,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: f,
    dispose: ie
  };
}
function Mu() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let a = n.get(s);
    return a === void 0 && (a = {}, n.set(s, a)), a;
  }
  function t(s) {
    n.delete(s);
  }
  function i(s, a, o) {
    n.get(s)[a] = o;
  }
  function r() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: i,
    dispose: r
  };
}
function wu(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.material.id !== e.material.id ? n.material.id - e.material.id : n.z !== e.z ? n.z - e.z : n.id - e.id;
}
function Ns(n, e) {
  return n.groupOrder !== e.groupOrder ? n.groupOrder - e.groupOrder : n.renderOrder !== e.renderOrder ? n.renderOrder - e.renderOrder : n.z !== e.z ? e.z - n.z : n.id - e.id;
}
function Fs() {
  const n = [];
  let e = 0;
  const t = [], i = [], r = [];
  function s() {
    e = 0, t.length = 0, i.length = 0, r.length = 0;
  }
  function a(d, h, g, v, y, p) {
    let u = n[e];
    return u === void 0 ? (u = {
      id: d.id,
      object: d,
      geometry: h,
      material: g,
      groupOrder: v,
      renderOrder: d.renderOrder,
      z: y,
      group: p
    }, n[e] = u) : (u.id = d.id, u.object = d, u.geometry = h, u.material = g, u.groupOrder = v, u.renderOrder = d.renderOrder, u.z = y, u.group = p), e++, u;
  }
  function o(d, h, g, v, y, p) {
    const u = a(d, h, g, v, y, p);
    g.transmission > 0 ? i.push(u) : g.transparent === !0 ? r.push(u) : t.push(u);
  }
  function c(d, h, g, v, y, p) {
    const u = a(d, h, g, v, y, p);
    g.transmission > 0 ? i.unshift(u) : g.transparent === !0 ? r.unshift(u) : t.unshift(u);
  }
  function l(d, h) {
    t.length > 1 && t.sort(d || wu), i.length > 1 && i.sort(h || Ns), r.length > 1 && r.sort(h || Ns);
  }
  function f() {
    for (let d = e, h = n.length; d < h; d++) {
      const g = n[d];
      if (g.id === null)
        break;
      g.id = null, g.object = null, g.geometry = null, g.material = null, g.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: i,
    transparent: r,
    init: s,
    push: o,
    unshift: c,
    finish: f,
    sort: l
  };
}
function Eu() {
  let n = /* @__PURE__ */ new WeakMap();
  function e(i, r) {
    const s = n.get(i);
    let a;
    return s === void 0 ? (a = new Fs(), n.set(i, [a])) : r >= s.length ? (a = new Fs(), s.push(a)) : a = s[r], a;
  }
  function t() {
    n = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Tu() {
  const n = {};
  return {
    get: function(e) {
      if (n[e.id] !== void 0)
        return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new D(),
            color: new ke()
          };
          break;
        case "SpotLight":
          t = {
            position: new D(),
            direction: new D(),
            color: new ke(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new D(),
            color: new ke(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new D(),
            skyColor: new ke(),
            groundColor: new ke()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new ke(),
            position: new D(),
            halfWidth: new D(),
            halfHeight: new D()
          };
          break;
      }
      return n[e.id] = t, t;
    }
  };
}
function bu() {
  const n = {};
  return {
    get: function(e) {
      if (n[e.id] !== void 0)
        return n[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Te()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Te()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Te(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return n[e.id] = t, t;
    }
  };
}
let Pu = 0;
function Au(n, e) {
  return (e.castShadow ? 2 : 0) - (n.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (n.map ? 1 : 0);
}
function Cu(n, e) {
  const t = new Tu(), i = bu(), r = {
    version: 0,
    hash: {
      directionalLength: -1,
      pointLength: -1,
      spotLength: -1,
      rectAreaLength: -1,
      hemiLength: -1,
      numDirectionalShadows: -1,
      numPointShadows: -1,
      numSpotShadows: -1,
      numSpotMaps: -1,
      numLightProbes: -1
    },
    ambient: [0, 0, 0],
    probe: [],
    directional: [],
    directionalShadow: [],
    directionalShadowMap: [],
    directionalShadowMatrix: [],
    spot: [],
    spotLightMap: [],
    spotShadow: [],
    spotShadowMap: [],
    spotLightMatrix: [],
    rectArea: [],
    rectAreaLTC1: null,
    rectAreaLTC2: null,
    point: [],
    pointShadow: [],
    pointShadowMap: [],
    pointShadowMatrix: [],
    hemi: [],
    numSpotLightShadowsWithMaps: 0,
    numLightProbes: 0
  };
  for (let f = 0; f < 9; f++)
    r.probe.push(new D());
  const s = new D(), a = new gt(), o = new gt();
  function c(f, d) {
    let h = 0, g = 0, v = 0;
    for (let q = 0; q < 9; q++)
      r.probe[q].set(0, 0, 0);
    let y = 0, p = 0, u = 0, w = 0, _ = 0, b = 0, z = 0, A = 0, P = 0, W = 0, ie = 0;
    f.sort(Au);
    const x = d === !0 ? Math.PI : 1;
    for (let q = 0, ee = f.length; q < ee; q++) {
      const C = f[q], B = C.color, G = C.intensity, X = C.distance, k = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight)
        h += B.r * G * x, g += B.g * G * x, v += B.b * G * x;
      else if (C.isLightProbe) {
        for (let H = 0; H < 9; H++)
          r.probe[H].addScaledVector(C.sh.coefficients[H], G);
        ie++;
      } else if (C.isDirectionalLight) {
        const H = t.get(C);
        if (H.color.copy(C.color).multiplyScalar(C.intensity * x), C.castShadow) {
          const K = C.shadow, $ = i.get(C);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, r.directionalShadow[y] = $, r.directionalShadowMap[y] = k, r.directionalShadowMatrix[y] = C.shadow.matrix, b++;
        }
        r.directional[y] = H, y++;
      } else if (C.isSpotLight) {
        const H = t.get(C);
        H.position.setFromMatrixPosition(C.matrixWorld), H.color.copy(B).multiplyScalar(G * x), H.distance = X, H.coneCos = Math.cos(C.angle), H.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), H.decay = C.decay, r.spot[u] = H;
        const K = C.shadow;
        if (C.map && (r.spotLightMap[P] = C.map, P++, K.updateMatrices(C), C.castShadow && W++), r.spotLightMatrix[u] = K.matrix, C.castShadow) {
          const $ = i.get(C);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, r.spotShadow[u] = $, r.spotShadowMap[u] = k, A++;
        }
        u++;
      } else if (C.isRectAreaLight) {
        const H = t.get(C);
        H.color.copy(B).multiplyScalar(G), H.halfWidth.set(C.width * 0.5, 0, 0), H.halfHeight.set(0, C.height * 0.5, 0), r.rectArea[w] = H, w++;
      } else if (C.isPointLight) {
        const H = t.get(C);
        if (H.color.copy(C.color).multiplyScalar(C.intensity * x), H.distance = C.distance, H.decay = C.decay, C.castShadow) {
          const K = C.shadow, $ = i.get(C);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, $.shadowCameraNear = K.camera.near, $.shadowCameraFar = K.camera.far, r.pointShadow[p] = $, r.pointShadowMap[p] = k, r.pointShadowMatrix[p] = C.shadow.matrix, z++;
        }
        r.point[p] = H, p++;
      } else if (C.isHemisphereLight) {
        const H = t.get(C);
        H.skyColor.copy(C.color).multiplyScalar(G * x), H.groundColor.copy(C.groundColor).multiplyScalar(G * x), r.hemi[_] = H, _++;
      }
    }
    w > 0 && (e.isWebGL2 ? n.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = re.LTC_FLOAT_1, r.rectAreaLTC2 = re.LTC_FLOAT_2) : (r.rectAreaLTC1 = re.LTC_HALF_1, r.rectAreaLTC2 = re.LTC_HALF_2) : n.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = re.LTC_FLOAT_1, r.rectAreaLTC2 = re.LTC_FLOAT_2) : n.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = re.LTC_HALF_1, r.rectAreaLTC2 = re.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = h, r.ambient[1] = g, r.ambient[2] = v;
    const T = r.hash;
    (T.directionalLength !== y || T.pointLength !== p || T.spotLength !== u || T.rectAreaLength !== w || T.hemiLength !== _ || T.numDirectionalShadows !== b || T.numPointShadows !== z || T.numSpotShadows !== A || T.numSpotMaps !== P || T.numLightProbes !== ie) && (r.directional.length = y, r.spot.length = u, r.rectArea.length = w, r.point.length = p, r.hemi.length = _, r.directionalShadow.length = b, r.directionalShadowMap.length = b, r.pointShadow.length = z, r.pointShadowMap.length = z, r.spotShadow.length = A, r.spotShadowMap.length = A, r.directionalShadowMatrix.length = b, r.pointShadowMatrix.length = z, r.spotLightMatrix.length = A + P - W, r.spotLightMap.length = P, r.numSpotLightShadowsWithMaps = W, r.numLightProbes = ie, T.directionalLength = y, T.pointLength = p, T.spotLength = u, T.rectAreaLength = w, T.hemiLength = _, T.numDirectionalShadows = b, T.numPointShadows = z, T.numSpotShadows = A, T.numSpotMaps = P, T.numLightProbes = ie, r.version = Pu++);
  }
  function l(f, d) {
    let h = 0, g = 0, v = 0, y = 0, p = 0;
    const u = d.matrixWorldInverse;
    for (let w = 0, _ = f.length; w < _; w++) {
      const b = f[w];
      if (b.isDirectionalLight) {
        const z = r.directional[h];
        z.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), z.direction.sub(s), z.direction.transformDirection(u), h++;
      } else if (b.isSpotLight) {
        const z = r.spot[v];
        z.position.setFromMatrixPosition(b.matrixWorld), z.position.applyMatrix4(u), z.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), z.direction.sub(s), z.direction.transformDirection(u), v++;
      } else if (b.isRectAreaLight) {
        const z = r.rectArea[y];
        z.position.setFromMatrixPosition(b.matrixWorld), z.position.applyMatrix4(u), o.identity(), a.copy(b.matrixWorld), a.premultiply(u), o.extractRotation(a), z.halfWidth.set(b.width * 0.5, 0, 0), z.halfHeight.set(0, b.height * 0.5, 0), z.halfWidth.applyMatrix4(o), z.halfHeight.applyMatrix4(o), y++;
      } else if (b.isPointLight) {
        const z = r.point[g];
        z.position.setFromMatrixPosition(b.matrixWorld), z.position.applyMatrix4(u), g++;
      } else if (b.isHemisphereLight) {
        const z = r.hemi[p];
        z.direction.setFromMatrixPosition(b.matrixWorld), z.direction.transformDirection(u), p++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: r
  };
}
function Is(n, e) {
  const t = new Cu(n, e), i = [], r = [];
  function s() {
    i.length = 0, r.length = 0;
  }
  function a(d) {
    i.push(d);
  }
  function o(d) {
    r.push(d);
  }
  function c(d) {
    t.setup(i, d);
  }
  function l(d) {
    t.setupView(i, d);
  }
  return {
    init: s,
    state: {
      lightsArray: i,
      shadowsArray: r,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: a,
    pushShadow: o
  };
}
function zu(n, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function i(s, a = 0) {
    const o = t.get(s);
    let c;
    return o === void 0 ? (c = new Is(n, e), t.set(s, [c])) : a >= o.length ? (c = new Is(n, e), o.push(c)) : c = o[a], c;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: i,
    dispose: r
  };
}
class mo extends Pn {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ru extends Pn {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Lu = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Du = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Nu(n, e, t) {
  let i = new co();
  const r = new Te(), s = new Te(), a = new ft(), o = new mo({ depthPacking: 3201 }), c = new Ru(), l = {}, f = t.maxTextureSize, d = { 0: 1, 1: 0, 2: 2 }, h = new at({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new Te() },
      radius: { value: 4 }
    },
    vertexShader: Lu,
    fragmentShader: Du
  }), g = h.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const v = new Lt();
  v.setAttribute(
    "position",
    new tt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const y = new jt(v, h), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
  let u = this.type;
  this.render = function(A, P, W) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || A.length === 0)
      return;
    const ie = n.getRenderTarget(), x = n.getActiveCubeFace(), T = n.getActiveMipmapLevel(), q = n.state;
    q.setBlending(0), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(!0), q.setScissorTest(!1);
    const ee = u !== 3 && this.type === 3, C = u === 3 && this.type !== 3;
    for (let B = 0, G = A.length; B < G; B++) {
      const X = A[B], k = X.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1)
        continue;
      r.copy(k.mapSize);
      const H = k.getFrameExtents();
      if (r.multiply(H), s.copy(k.mapSize), (r.x > f || r.y > f) && (r.x > f && (s.x = Math.floor(f / H.x), r.x = s.x * H.x, k.mapSize.x = s.x), r.y > f && (s.y = Math.floor(f / H.y), r.y = s.y * H.y, k.mapSize.y = s.y)), k.map === null || ee === !0 || C === !0) {
        const $ = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        k.map !== null && k.map.dispose(), k.map = new wt(r.x, r.y, $), k.map.texture.name = X.name + ".shadowMap", k.camera.updateProjectionMatrix();
      }
      n.setRenderTarget(k.map), n.clear();
      const K = k.getViewportCount();
      for (let $ = 0; $ < K; $++) {
        const fe = k.getViewport($);
        a.set(
          s.x * fe.x,
          s.y * fe.y,
          s.x * fe.z,
          s.y * fe.w
        ), q.viewport(a), k.updateMatrices(X, $), i = k.getFrustum(), b(P, W, k.camera, X, this.type);
      }
      k.isPointLightShadow !== !0 && this.type === 3 && w(k, W), k.needsUpdate = !1;
    }
    u = this.type, p.needsUpdate = !1, n.setRenderTarget(ie, x, T);
  };
  function w(A, P) {
    const W = e.update(y);
    h.defines.VSM_SAMPLES !== A.blurSamples && (h.defines.VSM_SAMPLES = A.blurSamples, g.defines.VSM_SAMPLES = A.blurSamples, h.needsUpdate = !0, g.needsUpdate = !0), A.mapPass === null && (A.mapPass = new wt(r.x, r.y)), h.uniforms.shadow_pass.value = A.map.texture, h.uniforms.resolution.value = A.mapSize, h.uniforms.radius.value = A.radius, n.setRenderTarget(A.mapPass), n.clear(), n.renderBufferDirect(P, null, W, h, y, null), g.uniforms.shadow_pass.value = A.mapPass.texture, g.uniforms.resolution.value = A.mapSize, g.uniforms.radius.value = A.radius, n.setRenderTarget(A.map), n.clear(), n.renderBufferDirect(P, null, W, g, y, null);
  }
  function _(A, P, W, ie) {
    let x = null;
    const T = W.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (T !== void 0)
      x = T;
    else if (x = W.isPointLight === !0 ? c : o, n.localClippingEnabled && P.clipShadows === !0 && Array.isArray(P.clippingPlanes) && P.clippingPlanes.length !== 0 || P.displacementMap && P.displacementScale !== 0 || P.alphaMap && P.alphaTest > 0 || P.map && P.alphaTest > 0) {
      const q = x.uuid, ee = P.uuid;
      let C = l[q];
      C === void 0 && (C = {}, l[q] = C);
      let B = C[ee];
      B === void 0 && (B = x.clone(), C[ee] = B, P.addEventListener("dispose", z)), x = B;
    }
    if (x.visible = P.visible, x.wireframe = P.wireframe, ie === 3 ? x.side = P.shadowSide !== null ? P.shadowSide : P.side : x.side = P.shadowSide !== null ? P.shadowSide : d[P.side], x.alphaMap = P.alphaMap, x.alphaTest = P.alphaTest, x.map = P.map, x.clipShadows = P.clipShadows, x.clippingPlanes = P.clippingPlanes, x.clipIntersection = P.clipIntersection, x.displacementMap = P.displacementMap, x.displacementScale = P.displacementScale, x.displacementBias = P.displacementBias, x.wireframeLinewidth = P.wireframeLinewidth, x.linewidth = P.linewidth, W.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
      const q = n.properties.get(x);
      q.light = W;
    }
    return x;
  }
  function b(A, P, W, ie, x) {
    if (A.visible === !1)
      return;
    if (A.layers.test(P.layers) && (A.isMesh || A.isLine || A.isPoints) && (A.castShadow || A.receiveShadow && x === 3) && (!A.frustumCulled || i.intersectsObject(A))) {
      A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse, A.matrixWorld);
      const ee = e.update(A), C = A.material;
      if (Array.isArray(C)) {
        const B = ee.groups;
        for (let G = 0, X = B.length; G < X; G++) {
          const k = B[G], H = C[k.materialIndex];
          if (H && H.visible) {
            const K = _(A, H, ie, x);
            A.onBeforeShadow(n, A, P, W, ee, K, k), n.renderBufferDirect(W, null, ee, K, A, k), A.onAfterShadow(n, A, P, W, ee, K, k);
          }
        }
      } else if (C.visible) {
        const B = _(A, C, ie, x);
        A.onBeforeShadow(n, A, P, W, ee, B, null), n.renderBufferDirect(W, null, ee, B, A, null), A.onAfterShadow(n, A, P, W, ee, B, null);
      }
    }
    const q = A.children;
    for (let ee = 0, C = q.length; ee < C; ee++)
      b(q[ee], P, W, ie, x);
  }
  function z(A) {
    A.target.removeEventListener("dispose", z);
    for (const W in l) {
      const ie = l[W], x = A.target.uuid;
      x in ie && (ie[x].dispose(), delete ie[x]);
    }
  }
}
function Fu(n, e, t) {
  const i = t.isWebGL2;
  function r() {
    let E = !1;
    const te = new ft();
    let ne = null;
    const ue = new ft(0, 0, 0, 0);
    return {
      setMask: function(xe) {
        ne !== xe && !E && (n.colorMask(xe, xe, xe, xe), ne = xe);
      },
      setLocked: function(xe) {
        E = xe;
      },
      setClear: function(xe, Xe, $e, vt, It) {
        It === !0 && (xe *= vt, Xe *= vt, $e *= vt), te.set(xe, Xe, $e, vt), ue.equals(te) === !1 && (n.clearColor(xe, Xe, $e, vt), ue.copy(te));
      },
      reset: function() {
        E = !1, ne = null, ue.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let E = !1, te = null, ne = null, ue = null;
    return {
      setTest: function(xe) {
        xe ? de(n.DEPTH_TEST) : We(n.DEPTH_TEST);
      },
      setMask: function(xe) {
        te !== xe && !E && (n.depthMask(xe), te = xe);
      },
      setFunc: function(xe) {
        if (ne !== xe) {
          switch (xe) {
            case 0:
              n.depthFunc(n.NEVER);
              break;
            case 1:
              n.depthFunc(n.ALWAYS);
              break;
            case 2:
              n.depthFunc(n.LESS);
              break;
            case 3:
              n.depthFunc(n.LEQUAL);
              break;
            case 4:
              n.depthFunc(n.EQUAL);
              break;
            case 5:
              n.depthFunc(n.GEQUAL);
              break;
            case 6:
              n.depthFunc(n.GREATER);
              break;
            case 7:
              n.depthFunc(n.NOTEQUAL);
              break;
            default:
              n.depthFunc(n.LEQUAL);
          }
          ne = xe;
        }
      },
      setLocked: function(xe) {
        E = xe;
      },
      setClear: function(xe) {
        ue !== xe && (n.clearDepth(xe), ue = xe);
      },
      reset: function() {
        E = !1, te = null, ne = null, ue = null;
      }
    };
  }
  function a() {
    let E = !1, te = null, ne = null, ue = null, xe = null, Xe = null, $e = null, vt = null, It = null;
    return {
      setTest: function(Qe) {
        E || (Qe ? de(n.STENCIL_TEST) : We(n.STENCIL_TEST));
      },
      setMask: function(Qe) {
        te !== Qe && !E && (n.stencilMask(Qe), te = Qe);
      },
      setFunc: function(Qe, Et, qt) {
        (ne !== Qe || ue !== Et || xe !== qt) && (n.stencilFunc(Qe, Et, qt), ne = Qe, ue = Et, xe = qt);
      },
      setOp: function(Qe, Et, qt) {
        (Xe !== Qe || $e !== Et || vt !== qt) && (n.stencilOp(Qe, Et, qt), Xe = Qe, $e = Et, vt = qt);
      },
      setLocked: function(Qe) {
        E = Qe;
      },
      setClear: function(Qe) {
        It !== Qe && (n.clearStencil(Qe), It = Qe);
      },
      reset: function() {
        E = !1, te = null, ne = null, ue = null, xe = null, Xe = null, $e = null, vt = null, It = null;
      }
    };
  }
  const o = new r(), c = new s(), l = new a(), f = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let h = {}, g = {}, v = /* @__PURE__ */ new WeakMap(), y = [], p = null, u = !1, w = null, _ = null, b = null, z = null, A = null, P = null, W = null, ie = new ke(0, 0, 0), x = 0, T = !1, q = null, ee = null, C = null, B = null, G = null;
  const X = n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let k = !1, H = 0;
  const K = n.getParameter(n.VERSION);
  K.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL (\d)/.exec(K)[1]), k = H >= 1) : K.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL ES (\d)/.exec(K)[1]), k = H >= 2);
  let $ = null, fe = {};
  const be = n.getParameter(n.SCISSOR_BOX), O = n.getParameter(n.VIEWPORT), Z = new ft().fromArray(be), ae = new ft().fromArray(O);
  function _e(E, te, ne, ue) {
    const xe = new Uint8Array(4), Xe = n.createTexture();
    n.bindTexture(E, Xe), n.texParameteri(E, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(E, n.TEXTURE_MAG_FILTER, n.NEAREST);
    for (let $e = 0; $e < ne; $e++)
      i && (E === n.TEXTURE_3D || E === n.TEXTURE_2D_ARRAY) ? n.texImage3D(te, 0, n.RGBA, 1, 1, ue, 0, n.RGBA, n.UNSIGNED_BYTE, xe) : n.texImage2D(te + $e, 0, n.RGBA, 1, 1, 0, n.RGBA, n.UNSIGNED_BYTE, xe);
    return Xe;
  }
  const Se = {};
  Se[n.TEXTURE_2D] = _e(n.TEXTURE_2D, n.TEXTURE_2D, 1), Se[n.TEXTURE_CUBE_MAP] = _e(n.TEXTURE_CUBE_MAP, n.TEXTURE_CUBE_MAP_POSITIVE_X, 6), i && (Se[n.TEXTURE_2D_ARRAY] = _e(n.TEXTURE_2D_ARRAY, n.TEXTURE_2D_ARRAY, 1, 1), Se[n.TEXTURE_3D] = _e(n.TEXTURE_3D, n.TEXTURE_3D, 1, 1)), o.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), de(n.DEPTH_TEST), c.setFunc(3), Le(!1), M(1), de(n.CULL_FACE), ge(0);
  function de(E) {
    h[E] !== !0 && (n.enable(E), h[E] = !0);
  }
  function We(E) {
    h[E] !== !1 && (n.disable(E), h[E] = !1);
  }
  function ze(E, te) {
    return g[E] !== te ? (n.bindFramebuffer(E, te), g[E] = te, i && (E === n.DRAW_FRAMEBUFFER && (g[n.FRAMEBUFFER] = te), E === n.FRAMEBUFFER && (g[n.DRAW_FRAMEBUFFER] = te)), !0) : !1;
  }
  function L(E, te) {
    let ne = y, ue = !1;
    if (E)
      if (ne = v.get(te), ne === void 0 && (ne = [], v.set(te, ne)), E.isWebGLMultipleRenderTargets) {
        const xe = E.texture;
        if (ne.length !== xe.length || ne[0] !== n.COLOR_ATTACHMENT0) {
          for (let Xe = 0, $e = xe.length; Xe < $e; Xe++)
            ne[Xe] = n.COLOR_ATTACHMENT0 + Xe;
          ne.length = xe.length, ue = !0;
        }
      } else
        ne[0] !== n.COLOR_ATTACHMENT0 && (ne[0] = n.COLOR_ATTACHMENT0, ue = !0);
    else
      ne[0] !== n.BACK && (ne[0] = n.BACK, ue = !0);
    ue && (t.isWebGL2 ? n.drawBuffers(ne) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne));
  }
  function mt(E) {
    return p !== E ? (n.useProgram(E), p = E, !0) : !1;
  }
  const ve = {
    100: n.FUNC_ADD,
    101: n.FUNC_SUBTRACT,
    102: n.FUNC_REVERSE_SUBTRACT
  };
  if (i)
    ve[103] = n.MIN, ve[104] = n.MAX;
  else {
    const E = e.get("EXT_blend_minmax");
    E !== null && (ve[103] = E.MIN_EXT, ve[104] = E.MAX_EXT);
  }
  const Pe = {
    200: n.ZERO,
    201: n.ONE,
    202: n.SRC_COLOR,
    204: n.SRC_ALPHA,
    210: n.SRC_ALPHA_SATURATE,
    208: n.DST_COLOR,
    206: n.DST_ALPHA,
    203: n.ONE_MINUS_SRC_COLOR,
    205: n.ONE_MINUS_SRC_ALPHA,
    209: n.ONE_MINUS_DST_COLOR,
    207: n.ONE_MINUS_DST_ALPHA,
    211: n.CONSTANT_COLOR,
    212: n.ONE_MINUS_CONSTANT_COLOR,
    213: n.CONSTANT_ALPHA,
    214: n.ONE_MINUS_CONSTANT_ALPHA
  };
  function ge(E, te, ne, ue, xe, Xe, $e, vt, It, Qe) {
    if (E === 0) {
      u === !0 && (We(n.BLEND), u = !1);
      return;
    }
    if (u === !1 && (de(n.BLEND), u = !0), E !== 5) {
      if (E !== w || Qe !== T) {
        if ((_ !== 100 || A !== 100) && (n.blendEquation(n.FUNC_ADD), _ = 100, A = 100), Qe)
          switch (E) {
            case 1:
              n.blendFuncSeparate(n.ONE, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              n.blendFunc(n.ONE, n.ONE);
              break;
            case 3:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case 4:
              n.blendFuncSeparate(n.ZERO, n.SRC_COLOR, n.ZERO, n.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", E);
              break;
          }
        else
          switch (E) {
            case 1:
              n.blendFuncSeparate(n.SRC_ALPHA, n.ONE_MINUS_SRC_ALPHA, n.ONE, n.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              n.blendFunc(n.SRC_ALPHA, n.ONE);
              break;
            case 3:
              n.blendFuncSeparate(n.ZERO, n.ONE_MINUS_SRC_COLOR, n.ZERO, n.ONE);
              break;
            case 4:
              n.blendFunc(n.ZERO, n.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", E);
              break;
          }
        b = null, z = null, P = null, W = null, ie.set(0, 0, 0), x = 0, w = E, T = Qe;
      }
      return;
    }
    xe = xe || te, Xe = Xe || ne, $e = $e || ue, (te !== _ || xe !== A) && (n.blendEquationSeparate(ve[te], ve[xe]), _ = te, A = xe), (ne !== b || ue !== z || Xe !== P || $e !== W) && (n.blendFuncSeparate(Pe[ne], Pe[ue], Pe[Xe], Pe[$e]), b = ne, z = ue, P = Xe, W = $e), (vt.equals(ie) === !1 || It !== x) && (n.blendColor(vt.r, vt.g, vt.b, It), ie.copy(vt), x = It), w = E, T = !1;
  }
  function nt(E, te) {
    E.side === 2 ? We(n.CULL_FACE) : de(n.CULL_FACE);
    let ne = E.side === 1;
    te && (ne = !ne), Le(ne), E.blending === 1 && E.transparent === !1 ? ge(0) : ge(E.blending, E.blendEquation, E.blendSrc, E.blendDst, E.blendEquationAlpha, E.blendSrcAlpha, E.blendDstAlpha, E.blendColor, E.blendAlpha, E.premultipliedAlpha), c.setFunc(E.depthFunc), c.setTest(E.depthTest), c.setMask(E.depthWrite), o.setMask(E.colorWrite);
    const ue = E.stencilWrite;
    l.setTest(ue), ue && (l.setMask(E.stencilWriteMask), l.setFunc(E.stencilFunc, E.stencilRef, E.stencilFuncMask), l.setOp(E.stencilFail, E.stencilZFail, E.stencilZPass)), N(E.polygonOffset, E.polygonOffsetFactor, E.polygonOffsetUnits), E.alphaToCoverage === !0 ? de(n.SAMPLE_ALPHA_TO_COVERAGE) : We(n.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Le(E) {
    q !== E && (E ? n.frontFace(n.CW) : n.frontFace(n.CCW), q = E);
  }
  function M(E) {
    E !== 0 ? (de(n.CULL_FACE), E !== ee && (E === 1 ? n.cullFace(n.BACK) : E === 2 ? n.cullFace(n.FRONT) : n.cullFace(n.FRONT_AND_BACK))) : We(n.CULL_FACE), ee = E;
  }
  function m(E) {
    E !== C && (k && n.lineWidth(E), C = E);
  }
  function N(E, te, ne) {
    E ? (de(n.POLYGON_OFFSET_FILL), (B !== te || G !== ne) && (n.polygonOffset(te, ne), B = te, G = ne)) : We(n.POLYGON_OFFSET_FILL);
  }
  function J(E) {
    E ? de(n.SCISSOR_TEST) : We(n.SCISSOR_TEST);
  }
  function Y(E) {
    E === void 0 && (E = n.TEXTURE0 + X - 1), $ !== E && (n.activeTexture(E), $ = E);
  }
  function Q(E, te, ne) {
    ne === void 0 && ($ === null ? ne = n.TEXTURE0 + X - 1 : ne = $);
    let ue = fe[ne];
    ue === void 0 && (ue = { type: void 0, texture: void 0 }, fe[ne] = ue), (ue.type !== E || ue.texture !== te) && ($ !== ne && (n.activeTexture(ne), $ = ne), n.bindTexture(E, te || Se[E]), ue.type = E, ue.texture = te);
  }
  function he() {
    const E = fe[$];
    E !== void 0 && E.type !== void 0 && (n.bindTexture(E.type, null), E.type = void 0, E.texture = void 0);
  }
  function se() {
    try {
      n.compressedTexImage2D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function ce() {
    try {
      n.compressedTexImage3D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function we() {
    try {
      n.texSubImage2D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function Fe() {
    try {
      n.texSubImage3D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function j() {
    try {
      n.compressedTexSubImage2D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function Ye() {
    try {
      n.compressedTexSubImage3D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function Ge() {
    try {
      n.texStorage2D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function Ae() {
    try {
      n.texStorage3D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function me() {
    try {
      n.texImage2D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function le() {
    try {
      n.texImage3D.apply(n, arguments);
    } catch (E) {
      console.error("THREE.WebGLState:", E);
    }
  }
  function De(E) {
    Z.equals(E) === !1 && (n.scissor(E.x, E.y, E.z, E.w), Z.copy(E));
  }
  function qe(E) {
    ae.equals(E) === !1 && (n.viewport(E.x, E.y, E.z, E.w), ae.copy(E));
  }
  function Je(E, te) {
    let ne = d.get(te);
    ne === void 0 && (ne = /* @__PURE__ */ new WeakMap(), d.set(te, ne));
    let ue = ne.get(E);
    ue === void 0 && (ue = n.getUniformBlockIndex(te, E.name), ne.set(E, ue));
  }
  function He(E, te) {
    const ue = d.get(te).get(E);
    f.get(te) !== ue && (n.uniformBlockBinding(te, ue, E.__bindingPointIndex), f.set(te, ue));
  }
  function Ze() {
    n.disable(n.BLEND), n.disable(n.CULL_FACE), n.disable(n.DEPTH_TEST), n.disable(n.POLYGON_OFFSET_FILL), n.disable(n.SCISSOR_TEST), n.disable(n.STENCIL_TEST), n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), n.blendEquation(n.FUNC_ADD), n.blendFunc(n.ONE, n.ZERO), n.blendFuncSeparate(n.ONE, n.ZERO, n.ONE, n.ZERO), n.blendColor(0, 0, 0, 0), n.colorMask(!0, !0, !0, !0), n.clearColor(0, 0, 0, 0), n.depthMask(!0), n.depthFunc(n.LESS), n.clearDepth(1), n.stencilMask(4294967295), n.stencilFunc(n.ALWAYS, 0, 4294967295), n.stencilOp(n.KEEP, n.KEEP, n.KEEP), n.clearStencil(0), n.cullFace(n.BACK), n.frontFace(n.CCW), n.polygonOffset(0, 0), n.activeTexture(n.TEXTURE0), n.bindFramebuffer(n.FRAMEBUFFER, null), i === !0 && (n.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), n.bindFramebuffer(n.READ_FRAMEBUFFER, null)), n.useProgram(null), n.lineWidth(1), n.scissor(0, 0, n.canvas.width, n.canvas.height), n.viewport(0, 0, n.canvas.width, n.canvas.height), h = {}, $ = null, fe = {}, g = {}, v = /* @__PURE__ */ new WeakMap(), y = [], p = null, u = !1, w = null, _ = null, b = null, z = null, A = null, P = null, W = null, ie = new ke(0, 0, 0), x = 0, T = !1, q = null, ee = null, C = null, B = null, G = null, Z.set(0, 0, n.canvas.width, n.canvas.height), ae.set(0, 0, n.canvas.width, n.canvas.height), o.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: o,
      depth: c,
      stencil: l
    },
    enable: de,
    disable: We,
    bindFramebuffer: ze,
    drawBuffers: L,
    useProgram: mt,
    setBlending: ge,
    setMaterial: nt,
    setFlipSided: Le,
    setCullFace: M,
    setLineWidth: m,
    setPolygonOffset: N,
    setScissorTest: J,
    activeTexture: Y,
    bindTexture: Q,
    unbindTexture: he,
    compressedTexImage2D: se,
    compressedTexImage3D: ce,
    texImage2D: me,
    texImage3D: le,
    updateUBOMapping: Je,
    uniformBlockBinding: He,
    texStorage2D: Ge,
    texStorage3D: Ae,
    texSubImage2D: we,
    texSubImage3D: Fe,
    compressedTexSubImage2D: j,
    compressedTexSubImage3D: Ye,
    scissor: De,
    viewport: qe,
    reset: Ze
  };
}
function Iu(n, e, t, i, r, s, a) {
  const o = r.isWebGL2, c = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), f = /* @__PURE__ */ new WeakMap();
  let d;
  const h = /* @__PURE__ */ new WeakMap();
  let g = !1;
  try {
    g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(M, m) {
    return g ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(M, m)
    ) : Gi("canvas");
  }
  function y(M, m, N, J) {
    let Y = 1;
    if ((M.width > J || M.height > J) && (Y = J / Math.max(M.width, M.height)), Y < 1 || m === !0)
      if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && M instanceof ImageBitmap) {
        const Q = m ? Ar : Math.floor, he = Q(Y * M.width), se = Q(Y * M.height);
        d === void 0 && (d = v(he, se));
        const ce = N ? v(he, se) : d;
        return ce.width = he, ce.height = se, ce.getContext("2d").drawImage(M, 0, 0, he, se), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + M.width + "x" + M.height + ") to (" + he + "x" + se + ")."), ce;
      } else
        return "data" in M && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + M.width + "x" + M.height + ")."), M;
    return M;
  }
  function p(M) {
    return Kr(M.width) && Kr(M.height);
  }
  function u(M) {
    return o ? !1 : M.wrapS !== 1001 || M.wrapT !== 1001 || M.minFilter !== 1003 && M.minFilter !== 1006;
  }
  function w(M, m) {
    return M.generateMipmaps && m && M.minFilter !== 1003 && M.minFilter !== 1006;
  }
  function _(M) {
    n.generateMipmap(M);
  }
  function b(M, m, N, J, Y = !1) {
    if (o === !1)
      return m;
    if (M !== null) {
      if (n[M] !== void 0)
        return n[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M + "'");
    }
    let Q = m;
    if (m === n.RED && (N === n.FLOAT && (Q = n.R32F), N === n.HALF_FLOAT && (Q = n.R16F), N === n.UNSIGNED_BYTE && (Q = n.R8)), m === n.RED_INTEGER && (N === n.UNSIGNED_BYTE && (Q = n.R8UI), N === n.UNSIGNED_SHORT && (Q = n.R16UI), N === n.UNSIGNED_INT && (Q = n.R32UI), N === n.BYTE && (Q = n.R8I), N === n.SHORT && (Q = n.R16I), N === n.INT && (Q = n.R32I)), m === n.RG && (N === n.FLOAT && (Q = n.RG32F), N === n.HALF_FLOAT && (Q = n.RG16F), N === n.UNSIGNED_BYTE && (Q = n.RG8)), m === n.RGBA) {
      const he = Y ? Ui : je.getTransfer(J);
      N === n.FLOAT && (Q = n.RGBA32F), N === n.HALF_FLOAT && (Q = n.RGBA16F), N === n.UNSIGNED_BYTE && (Q = he === et ? n.SRGB8_ALPHA8 : n.RGBA8), N === n.UNSIGNED_SHORT_4_4_4_4 && (Q = n.RGBA4), N === n.UNSIGNED_SHORT_5_5_5_1 && (Q = n.RGB5_A1);
    }
    return (Q === n.R16F || Q === n.R32F || Q === n.RG16F || Q === n.RG32F || Q === n.RGBA16F || Q === n.RGBA32F) && e.get("EXT_color_buffer_float"), Q;
  }
  function z(M, m, N) {
    return w(M, N) === !0 || M.isFramebufferTexture && M.minFilter !== 1003 && M.minFilter !== 1006 ? Math.log2(Math.max(m.width, m.height)) + 1 : M.mipmaps !== void 0 && M.mipmaps.length > 0 ? M.mipmaps.length : M.isCompressedTexture && Array.isArray(M.image) ? m.mipmaps.length : 1;
  }
  function A(M) {
    return M === 1003 || M === 1004 || M === 1005 ? n.NEAREST : n.LINEAR;
  }
  function P(M) {
    const m = M.target;
    m.removeEventListener("dispose", P), ie(m), m.isVideoTexture && f.delete(m);
  }
  function W(M) {
    const m = M.target;
    m.removeEventListener("dispose", W), T(m);
  }
  function ie(M) {
    const m = i.get(M);
    if (m.__webglInit === void 0)
      return;
    const N = M.source, J = h.get(N);
    if (J) {
      const Y = J[m.__cacheKey];
      Y.usedTimes--, Y.usedTimes === 0 && x(M), Object.keys(J).length === 0 && h.delete(N);
    }
    i.remove(M);
  }
  function x(M) {
    const m = i.get(M);
    n.deleteTexture(m.__webglTexture);
    const N = M.source, J = h.get(N);
    delete J[m.__cacheKey], a.memory.textures--;
  }
  function T(M) {
    const m = M.texture, N = i.get(M), J = i.get(m);
    if (J.__webglTexture !== void 0 && (n.deleteTexture(J.__webglTexture), a.memory.textures--), M.depthTexture && M.depthTexture.dispose(), M.isWebGLCubeRenderTarget)
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(N.__webglFramebuffer[Y]))
          for (let Q = 0; Q < N.__webglFramebuffer[Y].length; Q++)
            n.deleteFramebuffer(N.__webglFramebuffer[Y][Q]);
        else
          n.deleteFramebuffer(N.__webglFramebuffer[Y]);
        N.__webglDepthbuffer && n.deleteRenderbuffer(N.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(N.__webglFramebuffer))
        for (let Y = 0; Y < N.__webglFramebuffer.length; Y++)
          n.deleteFramebuffer(N.__webglFramebuffer[Y]);
      else
        n.deleteFramebuffer(N.__webglFramebuffer);
      if (N.__webglDepthbuffer && n.deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && n.deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer)
        for (let Y = 0; Y < N.__webglColorRenderbuffer.length; Y++)
          N.__webglColorRenderbuffer[Y] && n.deleteRenderbuffer(N.__webglColorRenderbuffer[Y]);
      N.__webglDepthRenderbuffer && n.deleteRenderbuffer(N.__webglDepthRenderbuffer);
    }
    if (M.isWebGLMultipleRenderTargets)
      for (let Y = 0, Q = m.length; Y < Q; Y++) {
        const he = i.get(m[Y]);
        he.__webglTexture && (n.deleteTexture(he.__webglTexture), a.memory.textures--), i.remove(m[Y]);
      }
    i.remove(m), i.remove(M);
  }
  let q = 0;
  function ee() {
    q = 0;
  }
  function C() {
    const M = q;
    return M >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " + r.maxTextures), q += 1, M;
  }
  function B(M) {
    const m = [];
    return m.push(M.wrapS), m.push(M.wrapT), m.push(M.wrapR || 0), m.push(M.magFilter), m.push(M.minFilter), m.push(M.anisotropy), m.push(M.internalFormat), m.push(M.format), m.push(M.type), m.push(M.generateMipmaps), m.push(M.premultiplyAlpha), m.push(M.flipY), m.push(M.unpackAlignment), m.push(M.colorSpace), m.join();
  }
  function G(M, m) {
    const N = i.get(M);
    if (M.isVideoTexture && nt(M), M.isRenderTargetTexture === !1 && M.version > 0 && N.__version !== M.version) {
      const J = M.image;
      if (J === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (J.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Z(N, M, m);
        return;
      }
    }
    t.bindTexture(n.TEXTURE_2D, N.__webglTexture, n.TEXTURE0 + m);
  }
  function X(M, m) {
    const N = i.get(M);
    if (M.version > 0 && N.__version !== M.version) {
      Z(N, M, m);
      return;
    }
    t.bindTexture(n.TEXTURE_2D_ARRAY, N.__webglTexture, n.TEXTURE0 + m);
  }
  function k(M, m) {
    const N = i.get(M);
    if (M.version > 0 && N.__version !== M.version) {
      Z(N, M, m);
      return;
    }
    t.bindTexture(n.TEXTURE_3D, N.__webglTexture, n.TEXTURE0 + m);
  }
  function H(M, m) {
    const N = i.get(M);
    if (M.version > 0 && N.__version !== M.version) {
      ae(N, M, m);
      return;
    }
    t.bindTexture(n.TEXTURE_CUBE_MAP, N.__webglTexture, n.TEXTURE0 + m);
  }
  const K = {
    1e3: n.REPEAT,
    1001: n.CLAMP_TO_EDGE,
    1002: n.MIRRORED_REPEAT
  }, $ = {
    1003: n.NEAREST,
    1004: n.NEAREST_MIPMAP_NEAREST,
    1005: n.NEAREST_MIPMAP_LINEAR,
    1006: n.LINEAR,
    1007: n.LINEAR_MIPMAP_NEAREST,
    1008: n.LINEAR_MIPMAP_LINEAR
  }, fe = {
    512: n.NEVER,
    519: n.ALWAYS,
    513: n.LESS,
    515: n.LEQUAL,
    514: n.EQUAL,
    518: n.GEQUAL,
    516: n.GREATER,
    517: n.NOTEQUAL
  };
  function be(M, m, N) {
    if (m.type === 1015 && e.has("OES_texture_float_linear") === !1 && (m.magFilter === 1006 || m.magFilter === 1007 || m.magFilter === 1005 || m.magFilter === 1008 || m.minFilter === 1006 || m.minFilter === 1007 || m.minFilter === 1005 || m.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), N ? (n.texParameteri(M, n.TEXTURE_WRAP_S, K[m.wrapS]), n.texParameteri(M, n.TEXTURE_WRAP_T, K[m.wrapT]), (M === n.TEXTURE_3D || M === n.TEXTURE_2D_ARRAY) && n.texParameteri(M, n.TEXTURE_WRAP_R, K[m.wrapR]), n.texParameteri(M, n.TEXTURE_MAG_FILTER, $[m.magFilter]), n.texParameteri(M, n.TEXTURE_MIN_FILTER, $[m.minFilter])) : (n.texParameteri(M, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(M, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), (M === n.TEXTURE_3D || M === n.TEXTURE_2D_ARRAY) && n.texParameteri(M, n.TEXTURE_WRAP_R, n.CLAMP_TO_EDGE), (m.wrapS !== 1001 || m.wrapT !== 1001) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), n.texParameteri(M, n.TEXTURE_MAG_FILTER, A(m.magFilter)), n.texParameteri(M, n.TEXTURE_MIN_FILTER, A(m.minFilter)), m.minFilter !== 1003 && m.minFilter !== 1006 && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), m.compareFunction && (n.texParameteri(M, n.TEXTURE_COMPARE_MODE, n.COMPARE_REF_TO_TEXTURE), n.texParameteri(M, n.TEXTURE_COMPARE_FUNC, fe[m.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) {
      const J = e.get("EXT_texture_filter_anisotropic");
      if (m.magFilter === 1003 || m.minFilter !== 1005 && m.minFilter !== 1008 || m.type === 1015 && e.has("OES_texture_float_linear") === !1 || o === !1 && m.type === 1016 && e.has("OES_texture_half_float_linear") === !1)
        return;
      (m.anisotropy > 1 || i.get(m).__currentAnisotropy) && (n.texParameterf(M, J.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(m.anisotropy, r.getMaxAnisotropy())), i.get(m).__currentAnisotropy = m.anisotropy);
    }
  }
  function O(M, m) {
    let N = !1;
    M.__webglInit === void 0 && (M.__webglInit = !0, m.addEventListener("dispose", P));
    const J = m.source;
    let Y = h.get(J);
    Y === void 0 && (Y = {}, h.set(J, Y));
    const Q = B(m);
    if (Q !== M.__cacheKey) {
      Y[Q] === void 0 && (Y[Q] = {
        texture: n.createTexture(),
        usedTimes: 0
      }, a.memory.textures++, N = !0), Y[Q].usedTimes++;
      const he = Y[M.__cacheKey];
      he !== void 0 && (Y[M.__cacheKey].usedTimes--, he.usedTimes === 0 && x(m)), M.__cacheKey = Q, M.__webglTexture = Y[Q].texture;
    }
    return N;
  }
  function Z(M, m, N) {
    let J = n.TEXTURE_2D;
    (m.isDataArrayTexture || m.isCompressedArrayTexture) && (J = n.TEXTURE_2D_ARRAY), m.isData3DTexture && (J = n.TEXTURE_3D);
    const Y = O(M, m), Q = m.source;
    t.bindTexture(J, M.__webglTexture, n.TEXTURE0 + N);
    const he = i.get(Q);
    if (Q.version !== he.__version || Y === !0) {
      t.activeTexture(n.TEXTURE0 + N);
      const se = je.getPrimaries(je.workingColorSpace), ce = m.colorSpace === Gt ? null : je.getPrimaries(m.colorSpace), we = m.colorSpace === Gt || se === ce ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, m.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, m.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, we);
      const Fe = u(m) && p(m.image) === !1;
      let j = y(m.image, Fe, !1, r.maxTextureSize);
      j = Le(m, j);
      const Ye = p(j) || o, Ge = s.convert(m.format, m.colorSpace);
      let Ae = s.convert(m.type), me = b(m.internalFormat, Ge, Ae, m.colorSpace, m.isVideoTexture);
      be(J, m, Ye);
      let le;
      const De = m.mipmaps, qe = o && m.isVideoTexture !== !0 && me !== 36196, Je = he.__version === void 0 || Y === !0, He = Q.dataReady, Ze = z(m, j, Ye);
      if (m.isDepthTexture)
        me = n.DEPTH_COMPONENT, o ? m.type === 1015 ? me = n.DEPTH_COMPONENT32F : m.type === 1014 ? me = n.DEPTH_COMPONENT24 : m.type === 1020 ? me = n.DEPTH24_STENCIL8 : me = n.DEPTH_COMPONENT16 : m.type === 1015 && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), m.format === 1026 && me === n.DEPTH_COMPONENT && m.type !== 1012 && m.type !== 1014 && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), m.type = 1014, Ae = s.convert(m.type)), m.format === 1027 && me === n.DEPTH_COMPONENT && (me = n.DEPTH_STENCIL, m.type !== 1020 && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), m.type = 1020, Ae = s.convert(m.type))), Je && (qe ? t.texStorage2D(n.TEXTURE_2D, 1, me, j.width, j.height) : t.texImage2D(n.TEXTURE_2D, 0, me, j.width, j.height, 0, Ge, Ae, null));
      else if (m.isDataTexture)
        if (De.length > 0 && Ye) {
          qe && Je && t.texStorage2D(n.TEXTURE_2D, Ze, me, De[0].width, De[0].height);
          for (let E = 0, te = De.length; E < te; E++)
            le = De[E], qe ? He && t.texSubImage2D(n.TEXTURE_2D, E, 0, 0, le.width, le.height, Ge, Ae, le.data) : t.texImage2D(n.TEXTURE_2D, E, me, le.width, le.height, 0, Ge, Ae, le.data);
          m.generateMipmaps = !1;
        } else
          qe ? (Je && t.texStorage2D(n.TEXTURE_2D, Ze, me, j.width, j.height), He && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, j.width, j.height, Ge, Ae, j.data)) : t.texImage2D(n.TEXTURE_2D, 0, me, j.width, j.height, 0, Ge, Ae, j.data);
      else if (m.isCompressedTexture)
        if (m.isCompressedArrayTexture) {
          qe && Je && t.texStorage3D(n.TEXTURE_2D_ARRAY, Ze, me, De[0].width, De[0].height, j.depth);
          for (let E = 0, te = De.length; E < te; E++)
            le = De[E], m.format !== 1023 ? Ge !== null ? qe ? He && t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY, E, 0, 0, 0, le.width, le.height, j.depth, Ge, le.data, 0, 0) : t.compressedTexImage3D(n.TEXTURE_2D_ARRAY, E, me, le.width, le.height, j.depth, 0, le.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe ? He && t.texSubImage3D(n.TEXTURE_2D_ARRAY, E, 0, 0, 0, le.width, le.height, j.depth, Ge, Ae, le.data) : t.texImage3D(n.TEXTURE_2D_ARRAY, E, me, le.width, le.height, j.depth, 0, Ge, Ae, le.data);
        } else {
          qe && Je && t.texStorage2D(n.TEXTURE_2D, Ze, me, De[0].width, De[0].height);
          for (let E = 0, te = De.length; E < te; E++)
            le = De[E], m.format !== 1023 ? Ge !== null ? qe ? He && t.compressedTexSubImage2D(n.TEXTURE_2D, E, 0, 0, le.width, le.height, Ge, le.data) : t.compressedTexImage2D(n.TEXTURE_2D, E, me, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : qe ? He && t.texSubImage2D(n.TEXTURE_2D, E, 0, 0, le.width, le.height, Ge, Ae, le.data) : t.texImage2D(n.TEXTURE_2D, E, me, le.width, le.height, 0, Ge, Ae, le.data);
        }
      else if (m.isDataArrayTexture)
        qe ? (Je && t.texStorage3D(n.TEXTURE_2D_ARRAY, Ze, me, j.width, j.height, j.depth), He && t.texSubImage3D(n.TEXTURE_2D_ARRAY, 0, 0, 0, 0, j.width, j.height, j.depth, Ge, Ae, j.data)) : t.texImage3D(n.TEXTURE_2D_ARRAY, 0, me, j.width, j.height, j.depth, 0, Ge, Ae, j.data);
      else if (m.isData3DTexture)
        qe ? (Je && t.texStorage3D(n.TEXTURE_3D, Ze, me, j.width, j.height, j.depth), He && t.texSubImage3D(n.TEXTURE_3D, 0, 0, 0, 0, j.width, j.height, j.depth, Ge, Ae, j.data)) : t.texImage3D(n.TEXTURE_3D, 0, me, j.width, j.height, j.depth, 0, Ge, Ae, j.data);
      else if (m.isFramebufferTexture) {
        if (Je)
          if (qe)
            t.texStorage2D(n.TEXTURE_2D, Ze, me, j.width, j.height);
          else {
            let E = j.width, te = j.height;
            for (let ne = 0; ne < Ze; ne++)
              t.texImage2D(n.TEXTURE_2D, ne, me, E, te, 0, Ge, Ae, null), E >>= 1, te >>= 1;
          }
      } else if (De.length > 0 && Ye) {
        qe && Je && t.texStorage2D(n.TEXTURE_2D, Ze, me, De[0].width, De[0].height);
        for (let E = 0, te = De.length; E < te; E++)
          le = De[E], qe ? He && t.texSubImage2D(n.TEXTURE_2D, E, 0, 0, Ge, Ae, le) : t.texImage2D(n.TEXTURE_2D, E, me, Ge, Ae, le);
        m.generateMipmaps = !1;
      } else
        qe ? (Je && t.texStorage2D(n.TEXTURE_2D, Ze, me, j.width, j.height), He && t.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, Ge, Ae, j)) : t.texImage2D(n.TEXTURE_2D, 0, me, Ge, Ae, j);
      w(m, Ye) && _(J), he.__version = Q.version, m.onUpdate && m.onUpdate(m);
    }
    M.__version = m.version;
  }
  function ae(M, m, N) {
    if (m.image.length !== 6)
      return;
    const J = O(M, m), Y = m.source;
    t.bindTexture(n.TEXTURE_CUBE_MAP, M.__webglTexture, n.TEXTURE0 + N);
    const Q = i.get(Y);
    if (Y.version !== Q.__version || J === !0) {
      t.activeTexture(n.TEXTURE0 + N);
      const he = je.getPrimaries(je.workingColorSpace), se = m.colorSpace === Gt ? null : je.getPrimaries(m.colorSpace), ce = m.colorSpace === Gt || he === se ? n.NONE : n.BROWSER_DEFAULT_WEBGL;
      n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, m.flipY), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, m.premultiplyAlpha), n.pixelStorei(n.UNPACK_ALIGNMENT, m.unpackAlignment), n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL, ce);
      const we = m.isCompressedTexture || m.image[0].isCompressedTexture, Fe = m.image[0] && m.image[0].isDataTexture, j = [];
      for (let E = 0; E < 6; E++)
        !we && !Fe ? j[E] = y(m.image[E], !1, !0, r.maxCubemapSize) : j[E] = Fe ? m.image[E].image : m.image[E], j[E] = Le(m, j[E]);
      const Ye = j[0], Ge = p(Ye) || o, Ae = s.convert(m.format, m.colorSpace), me = s.convert(m.type), le = b(m.internalFormat, Ae, me, m.colorSpace), De = o && m.isVideoTexture !== !0, qe = Q.__version === void 0 || J === !0, Je = Y.dataReady;
      let He = z(m, Ye, Ge);
      be(n.TEXTURE_CUBE_MAP, m, Ge);
      let Ze;
      if (we) {
        De && qe && t.texStorage2D(n.TEXTURE_CUBE_MAP, He, le, Ye.width, Ye.height);
        for (let E = 0; E < 6; E++) {
          Ze = j[E].mipmaps;
          for (let te = 0; te < Ze.length; te++) {
            const ne = Ze[te];
            m.format !== 1023 ? Ae !== null ? De ? Je && t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te, 0, 0, ne.width, ne.height, Ae, ne.data) : t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te, le, ne.width, ne.height, 0, ne.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? Je && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te, 0, 0, ne.width, ne.height, Ae, me, ne.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te, le, ne.width, ne.height, 0, Ae, me, ne.data);
          }
        }
      } else {
        Ze = m.mipmaps, De && qe && (Ze.length > 0 && He++, t.texStorage2D(n.TEXTURE_CUBE_MAP, He, le, j[0].width, j[0].height));
        for (let E = 0; E < 6; E++)
          if (Fe) {
            De ? Je && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, 0, 0, j[E].width, j[E].height, Ae, me, j[E].data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, le, j[E].width, j[E].height, 0, Ae, me, j[E].data);
            for (let te = 0; te < Ze.length; te++) {
              const ue = Ze[te].image[E].image;
              De ? Je && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te + 1, 0, 0, ue.width, ue.height, Ae, me, ue.data) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te + 1, le, ue.width, ue.height, 0, Ae, me, ue.data);
            }
          } else {
            De ? Je && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, 0, 0, Ae, me, j[E]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, 0, le, Ae, me, j[E]);
            for (let te = 0; te < Ze.length; te++) {
              const ne = Ze[te];
              De ? Je && t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te + 1, 0, 0, Ae, me, ne.image[E]) : t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X + E, te + 1, le, Ae, me, ne.image[E]);
            }
          }
      }
      w(m, Ge) && _(n.TEXTURE_CUBE_MAP), Q.__version = Y.version, m.onUpdate && m.onUpdate(m);
    }
    M.__version = m.version;
  }
  function _e(M, m, N, J, Y, Q) {
    const he = s.convert(N.format, N.colorSpace), se = s.convert(N.type), ce = b(N.internalFormat, he, se, N.colorSpace);
    if (!i.get(m).__hasExternalTextures) {
      const Fe = Math.max(1, m.width >> Q), j = Math.max(1, m.height >> Q);
      Y === n.TEXTURE_3D || Y === n.TEXTURE_2D_ARRAY ? t.texImage3D(Y, Q, ce, Fe, j, m.depth, 0, he, se, null) : t.texImage2D(Y, Q, ce, Fe, j, 0, he, se, null);
    }
    t.bindFramebuffer(n.FRAMEBUFFER, M), ge(m) ? c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, J, Y, i.get(N).__webglTexture, 0, Pe(m)) : (Y === n.TEXTURE_2D || Y >= n.TEXTURE_CUBE_MAP_POSITIVE_X && Y <= n.TEXTURE_CUBE_MAP_NEGATIVE_Z) && n.framebufferTexture2D(n.FRAMEBUFFER, J, Y, i.get(N).__webglTexture, Q), t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function Se(M, m, N) {
    if (n.bindRenderbuffer(n.RENDERBUFFER, M), m.depthBuffer && !m.stencilBuffer) {
      let J = o === !0 ? n.DEPTH_COMPONENT24 : n.DEPTH_COMPONENT16;
      if (N || ge(m)) {
        const Y = m.depthTexture;
        Y && Y.isDepthTexture && (Y.type === 1015 ? J = n.DEPTH_COMPONENT32F : Y.type === 1014 && (J = n.DEPTH_COMPONENT24));
        const Q = Pe(m);
        ge(m) ? c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, Q, J, m.width, m.height) : n.renderbufferStorageMultisample(n.RENDERBUFFER, Q, J, m.width, m.height);
      } else
        n.renderbufferStorage(n.RENDERBUFFER, J, m.width, m.height);
      n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, M);
    } else if (m.depthBuffer && m.stencilBuffer) {
      const J = Pe(m);
      N && ge(m) === !1 ? n.renderbufferStorageMultisample(n.RENDERBUFFER, J, n.DEPTH24_STENCIL8, m.width, m.height) : ge(m) ? c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, J, n.DEPTH24_STENCIL8, m.width, m.height) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, m.width, m.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, M);
    } else {
      const J = m.isWebGLMultipleRenderTargets === !0 ? m.texture : [m.texture];
      for (let Y = 0; Y < J.length; Y++) {
        const Q = J[Y], he = s.convert(Q.format, Q.colorSpace), se = s.convert(Q.type), ce = b(Q.internalFormat, he, se, Q.colorSpace), we = Pe(m);
        N && ge(m) === !1 ? n.renderbufferStorageMultisample(n.RENDERBUFFER, we, ce, m.width, m.height) : ge(m) ? c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER, we, ce, m.width, m.height) : n.renderbufferStorage(n.RENDERBUFFER, ce, m.width, m.height);
      }
    }
    n.bindRenderbuffer(n.RENDERBUFFER, null);
  }
  function de(M, m) {
    if (m && m.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(n.FRAMEBUFFER, M), !(m.depthTexture && m.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!i.get(m.depthTexture).__webglTexture || m.depthTexture.image.width !== m.width || m.depthTexture.image.height !== m.height) && (m.depthTexture.image.width = m.width, m.depthTexture.image.height = m.height, m.depthTexture.needsUpdate = !0), G(m.depthTexture, 0);
    const J = i.get(m.depthTexture).__webglTexture, Y = Pe(m);
    if (m.depthTexture.format === 1026)
      ge(m) ? c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, J, 0, Y) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.TEXTURE_2D, J, 0);
    else if (m.depthTexture.format === 1027)
      ge(m) ? c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, J, 0, Y) : n.framebufferTexture2D(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.TEXTURE_2D, J, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function We(M) {
    const m = i.get(M), N = M.isWebGLCubeRenderTarget === !0;
    if (M.depthTexture && !m.__autoAllocateDepthBuffer) {
      if (N)
        throw new Error("target.depthTexture not supported in Cube render targets");
      de(m.__webglFramebuffer, M);
    } else if (N) {
      m.__webglDepthbuffer = [];
      for (let J = 0; J < 6; J++)
        t.bindFramebuffer(n.FRAMEBUFFER, m.__webglFramebuffer[J]), m.__webglDepthbuffer[J] = n.createRenderbuffer(), Se(m.__webglDepthbuffer[J], M, !1);
    } else
      t.bindFramebuffer(n.FRAMEBUFFER, m.__webglFramebuffer), m.__webglDepthbuffer = n.createRenderbuffer(), Se(m.__webglDepthbuffer, M, !1);
    t.bindFramebuffer(n.FRAMEBUFFER, null);
  }
  function ze(M, m, N) {
    const J = i.get(M);
    m !== void 0 && _e(J.__webglFramebuffer, M, M.texture, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, 0), N !== void 0 && We(M);
  }
  function L(M) {
    const m = M.texture, N = i.get(M), J = i.get(m);
    M.addEventListener("dispose", W), M.isWebGLMultipleRenderTargets !== !0 && (J.__webglTexture === void 0 && (J.__webglTexture = n.createTexture()), J.__version = m.version, a.memory.textures++);
    const Y = M.isWebGLCubeRenderTarget === !0, Q = M.isWebGLMultipleRenderTargets === !0, he = p(M) || o;
    if (Y) {
      N.__webglFramebuffer = [];
      for (let se = 0; se < 6; se++)
        if (o && m.mipmaps && m.mipmaps.length > 0) {
          N.__webglFramebuffer[se] = [];
          for (let ce = 0; ce < m.mipmaps.length; ce++)
            N.__webglFramebuffer[se][ce] = n.createFramebuffer();
        } else
          N.__webglFramebuffer[se] = n.createFramebuffer();
    } else {
      if (o && m.mipmaps && m.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let se = 0; se < m.mipmaps.length; se++)
          N.__webglFramebuffer[se] = n.createFramebuffer();
      } else
        N.__webglFramebuffer = n.createFramebuffer();
      if (Q)
        if (r.drawBuffers) {
          const se = M.texture;
          for (let ce = 0, we = se.length; ce < we; ce++) {
            const Fe = i.get(se[ce]);
            Fe.__webglTexture === void 0 && (Fe.__webglTexture = n.createTexture(), a.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (o && M.samples > 0 && ge(M) === !1) {
        const se = Q ? m : [m];
        N.__webglMultisampledFramebuffer = n.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(n.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ce = 0; ce < se.length; ce++) {
          const we = se[ce];
          N.__webglColorRenderbuffer[ce] = n.createRenderbuffer(), n.bindRenderbuffer(n.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
          const Fe = s.convert(we.format, we.colorSpace), j = s.convert(we.type), Ye = b(we.internalFormat, Fe, j, we.colorSpace, M.isXRRenderTarget === !0), Ge = Pe(M);
          n.renderbufferStorageMultisample(n.RENDERBUFFER, Ge, Ye, M.width, M.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + ce, n.RENDERBUFFER, N.__webglColorRenderbuffer[ce]);
        }
        n.bindRenderbuffer(n.RENDERBUFFER, null), M.depthBuffer && (N.__webglDepthRenderbuffer = n.createRenderbuffer(), Se(N.__webglDepthRenderbuffer, M, !0)), t.bindFramebuffer(n.FRAMEBUFFER, null);
      }
    }
    if (Y) {
      t.bindTexture(n.TEXTURE_CUBE_MAP, J.__webglTexture), be(n.TEXTURE_CUBE_MAP, m, he);
      for (let se = 0; se < 6; se++)
        if (o && m.mipmaps && m.mipmaps.length > 0)
          for (let ce = 0; ce < m.mipmaps.length; ce++)
            _e(N.__webglFramebuffer[se][ce], M, m, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + se, ce);
        else
          _e(N.__webglFramebuffer[se], M, m, n.COLOR_ATTACHMENT0, n.TEXTURE_CUBE_MAP_POSITIVE_X + se, 0);
      w(m, he) && _(n.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (Q) {
      const se = M.texture;
      for (let ce = 0, we = se.length; ce < we; ce++) {
        const Fe = se[ce], j = i.get(Fe);
        t.bindTexture(n.TEXTURE_2D, j.__webglTexture), be(n.TEXTURE_2D, Fe, he), _e(N.__webglFramebuffer, M, Fe, n.COLOR_ATTACHMENT0 + ce, n.TEXTURE_2D, 0), w(Fe, he) && _(n.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let se = n.TEXTURE_2D;
      if ((M.isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (o ? se = M.isWebGL3DRenderTarget ? n.TEXTURE_3D : n.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(se, J.__webglTexture), be(se, m, he), o && m.mipmaps && m.mipmaps.length > 0)
        for (let ce = 0; ce < m.mipmaps.length; ce++)
          _e(N.__webglFramebuffer[ce], M, m, n.COLOR_ATTACHMENT0, se, ce);
      else
        _e(N.__webglFramebuffer, M, m, n.COLOR_ATTACHMENT0, se, 0);
      w(m, he) && _(se), t.unbindTexture();
    }
    M.depthBuffer && We(M);
  }
  function mt(M) {
    const m = p(M) || o, N = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
    for (let J = 0, Y = N.length; J < Y; J++) {
      const Q = N[J];
      if (w(Q, m)) {
        const he = M.isWebGLCubeRenderTarget ? n.TEXTURE_CUBE_MAP : n.TEXTURE_2D, se = i.get(Q).__webglTexture;
        t.bindTexture(he, se), _(he), t.unbindTexture();
      }
    }
  }
  function ve(M) {
    if (o && M.samples > 0 && ge(M) === !1) {
      const m = M.isWebGLMultipleRenderTargets ? M.texture : [M.texture], N = M.width, J = M.height;
      let Y = n.COLOR_BUFFER_BIT;
      const Q = [], he = M.stencilBuffer ? n.DEPTH_STENCIL_ATTACHMENT : n.DEPTH_ATTACHMENT, se = i.get(M), ce = M.isWebGLMultipleRenderTargets === !0;
      if (ce)
        for (let we = 0; we < m.length; we++)
          t.bindFramebuffer(n.FRAMEBUFFER, se.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + we, n.RENDERBUFFER, null), t.bindFramebuffer(n.FRAMEBUFFER, se.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + we, n.TEXTURE_2D, null, 0);
      t.bindFramebuffer(n.READ_FRAMEBUFFER, se.__webglMultisampledFramebuffer), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, se.__webglFramebuffer);
      for (let we = 0; we < m.length; we++) {
        Q.push(n.COLOR_ATTACHMENT0 + we), M.depthBuffer && Q.push(he);
        const Fe = se.__ignoreDepthValues !== void 0 ? se.__ignoreDepthValues : !1;
        if (Fe === !1 && (M.depthBuffer && (Y |= n.DEPTH_BUFFER_BIT), M.stencilBuffer && (Y |= n.STENCIL_BUFFER_BIT)), ce && n.framebufferRenderbuffer(n.READ_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.RENDERBUFFER, se.__webglColorRenderbuffer[we]), Fe === !0 && (n.invalidateFramebuffer(n.READ_FRAMEBUFFER, [he]), n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER, [he])), ce) {
          const j = i.get(m[we]).__webglTexture;
          n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, j, 0);
        }
        n.blitFramebuffer(0, 0, N, J, 0, 0, N, J, Y, n.NEAREST), l && n.invalidateFramebuffer(n.READ_FRAMEBUFFER, Q);
      }
      if (t.bindFramebuffer(n.READ_FRAMEBUFFER, null), t.bindFramebuffer(n.DRAW_FRAMEBUFFER, null), ce)
        for (let we = 0; we < m.length; we++) {
          t.bindFramebuffer(n.FRAMEBUFFER, se.__webglMultisampledFramebuffer), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0 + we, n.RENDERBUFFER, se.__webglColorRenderbuffer[we]);
          const Fe = i.get(m[we]).__webglTexture;
          t.bindFramebuffer(n.FRAMEBUFFER, se.__webglFramebuffer), n.framebufferTexture2D(n.DRAW_FRAMEBUFFER, n.COLOR_ATTACHMENT0 + we, n.TEXTURE_2D, Fe, 0);
        }
      t.bindFramebuffer(n.DRAW_FRAMEBUFFER, se.__webglMultisampledFramebuffer);
    }
  }
  function Pe(M) {
    return Math.min(r.maxSamples, M.samples);
  }
  function ge(M) {
    const m = i.get(M);
    return o && M.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && m.__useRenderToTexture !== !1;
  }
  function nt(M) {
    const m = a.render.frame;
    f.get(M) !== m && (f.set(M, m), M.update());
  }
  function Le(M, m) {
    const N = M.colorSpace, J = M.format, Y = M.type;
    return M.isCompressedTexture === !0 || M.isVideoTexture === !0 || M.format === 1035 || N !== sn && N !== Gt && (je.getTransfer(N) === et ? o === !1 ? e.has("EXT_sRGB") === !0 && J === 1023 ? (M.format = 1035, M.minFilter = 1006, M.generateMipmaps = !1) : m = Js.sRGBToLinear(m) : (J !== 1023 || Y !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), m;
  }
  this.allocateTextureUnit = C, this.resetTextureUnits = ee, this.setTexture2D = G, this.setTexture2DArray = X, this.setTexture3D = k, this.setTextureCube = H, this.rebindTextures = ze, this.setupRenderTarget = L, this.updateRenderTargetMipmap = mt, this.updateMultisampleRenderTarget = ve, this.setupDepthRenderbuffer = We, this.setupFrameBufferTexture = _e, this.useMultisampledRTT = ge;
}
function Uu(n, e, t) {
  const i = t.isWebGL2;
  function r(s, a = Gt) {
    let o;
    const c = je.getTransfer(a);
    if (s === 1009)
      return n.UNSIGNED_BYTE;
    if (s === 1017)
      return n.UNSIGNED_SHORT_4_4_4_4;
    if (s === 1018)
      return n.UNSIGNED_SHORT_5_5_5_1;
    if (s === 1010)
      return n.BYTE;
    if (s === 1011)
      return n.SHORT;
    if (s === 1012)
      return n.UNSIGNED_SHORT;
    if (s === 1013)
      return n.INT;
    if (s === 1014)
      return n.UNSIGNED_INT;
    if (s === 1015)
      return n.FLOAT;
    if (s === 1016)
      return i ? n.HALF_FLOAT : (o = e.get("OES_texture_half_float"), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === 1021)
      return n.ALPHA;
    if (s === 1023)
      return n.RGBA;
    if (s === 1024)
      return n.LUMINANCE;
    if (s === 1025)
      return n.LUMINANCE_ALPHA;
    if (s === 1026)
      return n.DEPTH_COMPONENT;
    if (s === 1027)
      return n.DEPTH_STENCIL;
    if (s === 1035)
      return o = e.get("EXT_sRGB"), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === 1028)
      return n.RED;
    if (s === 1029)
      return n.RED_INTEGER;
    if (s === 1030)
      return n.RG;
    if (s === 1031)
      return n.RG_INTEGER;
    if (s === 1033)
      return n.RGBA_INTEGER;
    if (s === 33776 || s === 33777 || s === 33778 || s === 33779)
      if (c === et)
        if (o = e.get("WEBGL_compressed_texture_s3tc_srgb"), o !== null) {
          if (s === 33776)
            return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === 33777)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === 33778)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === 33779)
            return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (o = e.get("WEBGL_compressed_texture_s3tc"), o !== null) {
        if (s === 33776)
          return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === 33777)
          return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === 33778)
          return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === 33779)
          return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === 35840 || s === 35841 || s === 35842 || s === 35843)
      if (o = e.get("WEBGL_compressed_texture_pvrtc"), o !== null) {
        if (s === 35840)
          return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === 35841)
          return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === 35842)
          return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === 35843)
          return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === 36196)
      return o = e.get("WEBGL_compressed_texture_etc1"), o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === 37492 || s === 37496)
      if (o = e.get("WEBGL_compressed_texture_etc"), o !== null) {
        if (s === 37492)
          return c === et ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === 37496)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === 37808 || s === 37809 || s === 37810 || s === 37811 || s === 37812 || s === 37813 || s === 37814 || s === 37815 || s === 37816 || s === 37817 || s === 37818 || s === 37819 || s === 37820 || s === 37821)
      if (o = e.get("WEBGL_compressed_texture_astc"), o !== null) {
        if (s === 37808)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === 37809)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === 37810)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === 37811)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === 37812)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === 37813)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === 37814)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === 37815)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === 37816)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === 37817)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === 37818)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === 37819)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === 37820)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === 37821)
          return c === et ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === 36492 || s === 36494 || s === 36495)
      if (o = e.get("EXT_texture_compression_bptc"), o !== null) {
        if (s === 36492)
          return c === et ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === 36494)
          return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === 36495)
          return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else
        return null;
    if (s === 36283 || s === 36284 || s === 36285 || s === 36286)
      if (o = e.get("EXT_texture_compression_rgtc"), o !== null) {
        if (s === 36492)
          return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === 36284)
          return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === 36285)
          return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === 36286)
          return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === 1020 ? i ? n.UNSIGNED_INT_24_8 : (o = e.get("WEBGL_depth_texture"), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null) : n[s] !== void 0 ? n[s] : null;
  }
  return { convert: r };
}
class Ou extends At {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class Li extends Rt {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const Bu = { type: "move" };
class Er {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Li(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Li(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new D(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new D()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Li(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new D()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const i of e.hand.values())
          this._getHandJoint(t, i);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, i) {
    let r = null, s = null, a = null;
    const o = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        a = !0;
        for (const y of e.hand.values()) {
          const p = t.getJointPose(y, i), u = this._getHandJoint(l, y);
          p !== null && (u.matrix.fromArray(p.transform.matrix), u.matrix.decompose(u.position, u.rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = p.radius), u.visible = p !== null;
        }
        const f = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], h = f.position.distanceTo(d.position), g = 0.02, v = 5e-3;
        l.inputState.pinching && h > g + v ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && h <= g - v && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, i), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      o !== null && (r = t.getPose(e.targetRaySpace, i), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1, this.dispatchEvent(Bu)));
    }
    return o !== null && (o.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = a !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const i = new Li();
      i.matrixAutoUpdate = !1, i.visible = !1, e.joints[t.jointName] = i, e.add(i);
    }
    return e.joints[t.jointName];
  }
}
const Gu = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Hu = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class ku {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, i) {
    if (this.texture === null) {
      const r = new Mt(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear != i.depthNear || t.depthFar != i.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const i = t.cameras[0].viewport, r = new at({
          extensions: { fragDepth: !0 },
          vertexShader: Gu,
          fragmentShader: Hu,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: i.z },
            depthHeight: { value: i.w }
          }
        });
        this.mesh = new jt(new Zn(20, 20), r);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
}
class Vu extends on {
  constructor(e, t) {
    super();
    const i = this;
    let r = null, s = 1, a = null, o = "local-floor", c = 1, l = null, f = null, d = null, h = null, g = null, v = null;
    const y = new ku(), p = t.getContextAttributes();
    let u = null, w = null;
    const _ = [], b = [], z = new Te();
    let A = null;
    const P = new At();
    P.layers.enable(1), P.viewport = new ft();
    const W = new At();
    W.layers.enable(2), W.viewport = new ft();
    const ie = [P, W], x = new Ou();
    x.layers.enable(1), x.layers.enable(2);
    let T = null, q = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(O) {
      let Z = _[O];
      return Z === void 0 && (Z = new Er(), _[O] = Z), Z.getTargetRaySpace();
    }, this.getControllerGrip = function(O) {
      let Z = _[O];
      return Z === void 0 && (Z = new Er(), _[O] = Z), Z.getGripSpace();
    }, this.getHand = function(O) {
      let Z = _[O];
      return Z === void 0 && (Z = new Er(), _[O] = Z), Z.getHandSpace();
    };
    function ee(O) {
      const Z = b.indexOf(O.inputSource);
      if (Z === -1)
        return;
      const ae = _[Z];
      ae !== void 0 && (ae.update(O.inputSource, O.frame, l || a), ae.dispatchEvent({ type: O.type, data: O.inputSource }));
    }
    function C() {
      r.removeEventListener("select", ee), r.removeEventListener("selectstart", ee), r.removeEventListener("selectend", ee), r.removeEventListener("squeeze", ee), r.removeEventListener("squeezestart", ee), r.removeEventListener("squeezeend", ee), r.removeEventListener("end", C), r.removeEventListener("inputsourceschange", B);
      for (let O = 0; O < _.length; O++) {
        const Z = b[O];
        Z !== null && (b[O] = null, _[O].disconnect(Z));
      }
      T = null, q = null, y.reset(), e.setRenderTarget(u), g = null, h = null, d = null, r = null, w = null, be.stop(), i.isPresenting = !1, e.setPixelRatio(A), e.setSize(z.width, z.height, !1), i.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(O) {
      s = O, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(O) {
      o = O, i.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || a;
    }, this.setReferenceSpace = function(O) {
      l = O;
    }, this.getBaseLayer = function() {
      return h !== null ? h : g;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(O) {
      if (r = O, r !== null) {
        if (u = e.getRenderTarget(), r.addEventListener("select", ee), r.addEventListener("selectstart", ee), r.addEventListener("selectend", ee), r.addEventListener("squeeze", ee), r.addEventListener("squeezestart", ee), r.addEventListener("squeezeend", ee), r.addEventListener("end", C), r.addEventListener("inputsourceschange", B), p.xrCompatible !== !0 && await t.makeXRCompatible(), A = e.getPixelRatio(), e.getSize(z), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Z = {
            antialias: r.renderState.layers === void 0 ? p.antialias : !0,
            alpha: !0,
            depth: p.depth,
            stencil: p.stencil,
            framebufferScaleFactor: s
          };
          g = new XRWebGLLayer(r, t, Z), r.updateRenderState({ baseLayer: g }), e.setPixelRatio(1), e.setSize(g.framebufferWidth, g.framebufferHeight, !1), w = new wt(
            g.framebufferWidth,
            g.framebufferHeight,
            {
              format: 1023,
              type: 1009,
              colorSpace: e.outputColorSpace,
              stencilBuffer: p.stencil
            }
          );
        } else {
          let Z = null, ae = null, _e = null;
          p.depth && (_e = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Z = p.stencil ? 1027 : 1026, ae = p.stencil ? 1020 : 1014);
          const Se = {
            colorFormat: t.RGBA8,
            depthFormat: _e,
            scaleFactor: s
          };
          d = new XRWebGLBinding(r, t), h = d.createProjectionLayer(Se), r.updateRenderState({ layers: [h] }), e.setPixelRatio(1), e.setSize(h.textureWidth, h.textureHeight, !1), w = new wt(
            h.textureWidth,
            h.textureHeight,
            {
              format: 1023,
              type: 1009,
              depthTexture: new Br(h.textureWidth, h.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, Z),
              stencilBuffer: p.stencil,
              colorSpace: e.outputColorSpace,
              samples: p.antialias ? 4 : 0
            }
          );
          const de = e.properties.get(w);
          de.__ignoreDepthValues = h.ignoreDepthValues;
        }
        w.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(o), be.setContext(r), be.start(), i.isPresenting = !0, i.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function B(O) {
      for (let Z = 0; Z < O.removed.length; Z++) {
        const ae = O.removed[Z], _e = b.indexOf(ae);
        _e >= 0 && (b[_e] = null, _[_e].disconnect(ae));
      }
      for (let Z = 0; Z < O.added.length; Z++) {
        const ae = O.added[Z];
        let _e = b.indexOf(ae);
        if (_e === -1) {
          for (let de = 0; de < _.length; de++)
            if (de >= b.length) {
              b.push(ae), _e = de;
              break;
            } else if (b[de] === null) {
              b[de] = ae, _e = de;
              break;
            }
          if (_e === -1)
            break;
        }
        const Se = _[_e];
        Se && Se.connect(ae);
      }
    }
    const G = new D(), X = new D();
    function k(O, Z, ae) {
      G.setFromMatrixPosition(Z.matrixWorld), X.setFromMatrixPosition(ae.matrixWorld);
      const _e = G.distanceTo(X), Se = Z.projectionMatrix.elements, de = ae.projectionMatrix.elements, We = Se[14] / (Se[10] - 1), ze = Se[14] / (Se[10] + 1), L = (Se[9] + 1) / Se[5], mt = (Se[9] - 1) / Se[5], ve = (Se[8] - 1) / Se[0], Pe = (de[8] + 1) / de[0], ge = We * ve, nt = We * Pe, Le = _e / (-ve + Pe), M = Le * -ve;
      Z.matrixWorld.decompose(O.position, O.quaternion, O.scale), O.translateX(M), O.translateZ(Le), O.matrixWorld.compose(O.position, O.quaternion, O.scale), O.matrixWorldInverse.copy(O.matrixWorld).invert();
      const m = We + Le, N = ze + Le, J = ge - M, Y = nt + (_e - M), Q = L * ze / N * m, he = mt * ze / N * m;
      O.projectionMatrix.makePerspective(J, Y, Q, he, m, N), O.projectionMatrixInverse.copy(O.projectionMatrix).invert();
    }
    function H(O, Z) {
      Z === null ? O.matrixWorld.copy(O.matrix) : O.matrixWorld.multiplyMatrices(Z.matrixWorld, O.matrix), O.matrixWorldInverse.copy(O.matrixWorld).invert();
    }
    this.updateCamera = function(O) {
      if (r === null)
        return;
      y.texture !== null && (O.near = y.depthNear, O.far = y.depthFar), x.near = W.near = P.near = O.near, x.far = W.far = P.far = O.far, (T !== x.near || q !== x.far) && (r.updateRenderState({
        depthNear: x.near,
        depthFar: x.far
      }), T = x.near, q = x.far, P.near = T, P.far = q, W.near = T, W.far = q, P.updateProjectionMatrix(), W.updateProjectionMatrix(), O.updateProjectionMatrix());
      const Z = O.parent, ae = x.cameras;
      H(x, Z);
      for (let _e = 0; _e < ae.length; _e++)
        H(ae[_e], Z);
      ae.length === 2 ? k(x, P, W) : x.projectionMatrix.copy(P.projectionMatrix), K(O, x, Z);
    };
    function K(O, Z, ae) {
      ae === null ? O.matrix.copy(Z.matrixWorld) : (O.matrix.copy(ae.matrixWorld), O.matrix.invert(), O.matrix.multiply(Z.matrixWorld)), O.matrix.decompose(O.position, O.quaternion, O.scale), O.updateMatrixWorld(!0), O.projectionMatrix.copy(Z.projectionMatrix), O.projectionMatrixInverse.copy(Z.projectionMatrixInverse), O.isPerspectiveCamera && (O.fov = Pr * 2 * Math.atan(1 / O.projectionMatrix.elements[5]), O.zoom = 1);
    }
    this.getCamera = function() {
      return x;
    }, this.getFoveation = function() {
      if (!(h === null && g === null))
        return c;
    }, this.setFoveation = function(O) {
      c = O, h !== null && (h.fixedFoveation = O), g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = O);
    }, this.hasDepthSensing = function() {
      return y.texture !== null;
    };
    let $ = null;
    function fe(O, Z) {
      if (f = Z.getViewerPose(l || a), v = Z, f !== null) {
        const ae = f.views;
        g !== null && (e.setRenderTargetFramebuffer(w, g.framebuffer), e.setRenderTarget(w));
        let _e = !1;
        ae.length !== x.cameras.length && (x.cameras.length = 0, _e = !0);
        for (let de = 0; de < ae.length; de++) {
          const We = ae[de];
          let ze = null;
          if (g !== null)
            ze = g.getViewport(We);
          else {
            const mt = d.getViewSubImage(h, We);
            ze = mt.viewport, de === 0 && (e.setRenderTargetTextures(
              w,
              mt.colorTexture,
              h.ignoreDepthValues ? void 0 : mt.depthStencilTexture
            ), e.setRenderTarget(w));
          }
          let L = ie[de];
          L === void 0 && (L = new At(), L.layers.enable(de), L.viewport = new ft(), ie[de] = L), L.matrix.fromArray(We.transform.matrix), L.matrix.decompose(L.position, L.quaternion, L.scale), L.projectionMatrix.fromArray(We.projectionMatrix), L.projectionMatrixInverse.copy(L.projectionMatrix).invert(), L.viewport.set(ze.x, ze.y, ze.width, ze.height), de === 0 && (x.matrix.copy(L.matrix), x.matrix.decompose(x.position, x.quaternion, x.scale)), _e === !0 && x.cameras.push(L);
        }
        const Se = r.enabledFeatures;
        if (Se && Se.includes("depth-sensing")) {
          const de = d.getDepthInformation(ae[0]);
          de && de.isValid && de.texture && y.init(e, de, r.renderState);
        }
      }
      for (let ae = 0; ae < _.length; ae++) {
        const _e = b[ae], Se = _[ae];
        _e !== null && Se !== void 0 && Se.update(_e, Z, l || a);
      }
      y.render(e, x), $ && $(O, Z), Z.detectedPlanes && i.dispatchEvent({ type: "planesdetected", data: Z }), v = null;
    }
    const be = new lo();
    be.setAnimationLoop(fe), this.setAnimationLoop = function(O) {
      $ = O;
    }, this.dispose = function() {
    };
  }
}
function Wu(n, e) {
  function t(p, u) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix);
  }
  function i(p, u) {
    u.color.getRGB(p.fogColor.value, oo(n)), u.isFog ? (p.fogNear.value = u.near, p.fogFar.value = u.far) : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function r(p, u, w, _, b) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(p, u) : u.isMeshToonMaterial ? (s(p, u), d(p, u)) : u.isMeshPhongMaterial ? (s(p, u), f(p, u)) : u.isMeshStandardMaterial ? (s(p, u), h(p, u), u.isMeshPhysicalMaterial && g(p, u, b)) : u.isMeshMatcapMaterial ? (s(p, u), v(p, u)) : u.isMeshDepthMaterial ? s(p, u) : u.isMeshDistanceMaterial ? (s(p, u), y(p, u)) : u.isMeshNormalMaterial ? s(p, u) : u.isLineBasicMaterial ? (a(p, u), u.isLineDashedMaterial && o(p, u)) : u.isPointsMaterial ? c(p, u, w, _) : u.isSpriteMaterial ? l(p, u) : u.isShadowMaterial ? (p.color.value.copy(u.color), p.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(p, u) {
    p.opacity.value = u.opacity, u.color && p.diffuse.value.copy(u.color), u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.bumpMap && (p.bumpMap.value = u.bumpMap, t(u.bumpMap, p.bumpMapTransform), p.bumpScale.value = u.bumpScale, u.side === 1 && (p.bumpScale.value *= -1)), u.normalMap && (p.normalMap.value = u.normalMap, t(u.normalMap, p.normalMapTransform), p.normalScale.value.copy(u.normalScale), u.side === 1 && p.normalScale.value.negate()), u.displacementMap && (p.displacementMap.value = u.displacementMap, t(u.displacementMap, p.displacementMapTransform), p.displacementScale.value = u.displacementScale, p.displacementBias.value = u.displacementBias), u.emissiveMap && (p.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, p.emissiveMapTransform)), u.specularMap && (p.specularMap.value = u.specularMap, t(u.specularMap, p.specularMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const w = e.get(u).envMap;
    if (w && (p.envMap.value = w, p.flipEnvMap.value = w.isCubeTexture && w.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = u.reflectivity, p.ior.value = u.ior, p.refractionRatio.value = u.refractionRatio), u.lightMap) {
      p.lightMap.value = u.lightMap;
      const _ = n._useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = u.lightMapIntensity * _, t(u.lightMap, p.lightMapTransform);
    }
    u.aoMap && (p.aoMap.value = u.aoMap, p.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, p.aoMapTransform));
  }
  function a(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, u.map && (p.map.value = u.map, t(u.map, p.mapTransform));
  }
  function o(p, u) {
    p.dashSize.value = u.dashSize, p.totalSize.value = u.dashSize + u.gapSize, p.scale.value = u.scale;
  }
  function c(p, u, w, _) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.size.value = u.size * w, p.scale.value = _ * 0.5, u.map && (p.map.value = u.map, t(u.map, p.uvTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function l(p, u) {
    p.diffuse.value.copy(u.color), p.opacity.value = u.opacity, p.rotation.value = u.rotation, u.map && (p.map.value = u.map, t(u.map, p.mapTransform)), u.alphaMap && (p.alphaMap.value = u.alphaMap, t(u.alphaMap, p.alphaMapTransform)), u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function f(p, u) {
    p.specular.value.copy(u.specular), p.shininess.value = Math.max(u.shininess, 1e-4);
  }
  function d(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function h(p, u) {
    p.metalness.value = u.metalness, u.metalnessMap && (p.metalnessMap.value = u.metalnessMap, t(u.metalnessMap, p.metalnessMapTransform)), p.roughness.value = u.roughness, u.roughnessMap && (p.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, p.roughnessMapTransform)), e.get(u).envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function g(p, u, w) {
    p.ior.value = u.ior, u.sheen > 0 && (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen), p.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (p.sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, p.sheenColorMapTransform)), u.sheenRoughnessMap && (p.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))), u.clearcoat > 0 && (p.clearcoat.value = u.clearcoat, p.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (p.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, p.clearcoatMapTransform)), u.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (p.clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale), u.side === 1 && p.clearcoatNormalScale.value.negate())), u.iridescence > 0 && (p.iridescence.value = u.iridescence, p.iridescenceIOR.value = u.iridescenceIOR, p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (p.iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, p.iridescenceMapTransform)), u.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = u.iridescenceThicknessMap, t(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), u.transmission > 0 && (p.transmission.value = u.transmission, p.transmissionSamplerMap.value = w.texture, p.transmissionSamplerSize.value.set(w.width, w.height), u.transmissionMap && (p.transmissionMap.value = u.transmissionMap, t(u.transmissionMap, p.transmissionMapTransform)), p.thickness.value = u.thickness, u.thicknessMap && (p.thicknessMap.value = u.thicknessMap, t(u.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = u.attenuationDistance, p.attenuationColor.value.copy(u.attenuationColor)), u.anisotropy > 0 && (p.anisotropyVector.value.set(u.anisotropy * Math.cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u.anisotropyMap && (p.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = u.specularIntensity, p.specularColor.value.copy(u.specularColor), u.specularColorMap && (p.specularColorMap.value = u.specularColorMap, t(u.specularColorMap, p.specularColorMapTransform)), u.specularIntensityMap && (p.specularIntensityMap.value = u.specularIntensityMap, t(u.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function v(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function y(p, u) {
    const w = e.get(u).light;
    p.referencePosition.value.setFromMatrixPosition(w.matrixWorld), p.nearDistance.value = w.shadow.camera.near, p.farDistance.value = w.shadow.camera.far;
  }
  return {
    refreshFogUniforms: i,
    refreshMaterialUniforms: r
  };
}
function qu(n, e, t, i) {
  let r = {}, s = {}, a = [];
  const o = t.isWebGL2 ? n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(w, _) {
    const b = _.program;
    i.uniformBlockBinding(w, b);
  }
  function l(w, _) {
    let b = r[w.id];
    b === void 0 && (v(w), b = f(w), r[w.id] = b, w.addEventListener("dispose", p));
    const z = _.program;
    i.updateUBOMapping(w, z);
    const A = e.render.frame;
    s[w.id] !== A && (h(w), s[w.id] = A);
  }
  function f(w) {
    const _ = d();
    w.__bindingPointIndex = _;
    const b = n.createBuffer(), z = w.__size, A = w.usage;
    return n.bindBuffer(n.UNIFORM_BUFFER, b), n.bufferData(n.UNIFORM_BUFFER, z, A), n.bindBuffer(n.UNIFORM_BUFFER, null), n.bindBufferBase(n.UNIFORM_BUFFER, _, b), b;
  }
  function d() {
    for (let w = 0; w < o; w++)
      if (a.indexOf(w) === -1)
        return a.push(w), w;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function h(w) {
    const _ = r[w.id], b = w.uniforms, z = w.__cache;
    n.bindBuffer(n.UNIFORM_BUFFER, _);
    for (let A = 0, P = b.length; A < P; A++) {
      const W = Array.isArray(b[A]) ? b[A] : [b[A]];
      for (let ie = 0, x = W.length; ie < x; ie++) {
        const T = W[ie];
        if (g(T, A, ie, z) === !0) {
          const q = T.__offset, ee = Array.isArray(T.value) ? T.value : [T.value];
          let C = 0;
          for (let B = 0; B < ee.length; B++) {
            const G = ee[B], X = y(G);
            typeof G == "number" || typeof G == "boolean" ? (T.__data[0] = G, n.bufferSubData(n.UNIFORM_BUFFER, q + C, T.__data)) : G.isMatrix3 ? (T.__data[0] = G.elements[0], T.__data[1] = G.elements[1], T.__data[2] = G.elements[2], T.__data[3] = 0, T.__data[4] = G.elements[3], T.__data[5] = G.elements[4], T.__data[6] = G.elements[5], T.__data[7] = 0, T.__data[8] = G.elements[6], T.__data[9] = G.elements[7], T.__data[10] = G.elements[8], T.__data[11] = 0) : (G.toArray(T.__data, C), C += X.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          n.bufferSubData(n.UNIFORM_BUFFER, q, T.__data);
        }
      }
    }
    n.bindBuffer(n.UNIFORM_BUFFER, null);
  }
  function g(w, _, b, z) {
    const A = w.value, P = _ + "_" + b;
    if (z[P] === void 0)
      return typeof A == "number" || typeof A == "boolean" ? z[P] = A : z[P] = A.clone(), !0;
    {
      const W = z[P];
      if (typeof A == "number" || typeof A == "boolean") {
        if (W !== A)
          return z[P] = A, !0;
      } else if (W.equals(A) === !1)
        return W.copy(A), !0;
    }
    return !1;
  }
  function v(w) {
    const _ = w.uniforms;
    let b = 0;
    const z = 16;
    for (let P = 0, W = _.length; P < W; P++) {
      const ie = Array.isArray(_[P]) ? _[P] : [_[P]];
      for (let x = 0, T = ie.length; x < T; x++) {
        const q = ie[x], ee = Array.isArray(q.value) ? q.value : [q.value];
        for (let C = 0, B = ee.length; C < B; C++) {
          const G = ee[C], X = y(G), k = b % z;
          k !== 0 && z - k < X.boundary && (b += z - k), q.__data = new Float32Array(X.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = b, b += X.storage;
        }
      }
    }
    const A = b % z;
    return A > 0 && (b += z - A), w.__size = b, w.__cache = {}, this;
  }
  function y(w) {
    const _ = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof w == "number" || typeof w == "boolean" ? (_.boundary = 4, _.storage = 4) : w.isVector2 ? (_.boundary = 8, _.storage = 8) : w.isVector3 || w.isColor ? (_.boundary = 16, _.storage = 12) : w.isVector4 ? (_.boundary = 16, _.storage = 16) : w.isMatrix3 ? (_.boundary = 48, _.storage = 48) : w.isMatrix4 ? (_.boundary = 64, _.storage = 64) : w.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", w), _;
  }
  function p(w) {
    const _ = w.target;
    _.removeEventListener("dispose", p);
    const b = a.indexOf(_.__bindingPointIndex);
    a.splice(b, 1), n.deleteBuffer(r[_.id]), delete r[_.id], delete s[_.id];
  }
  function u() {
    for (const w in r)
      n.deleteBuffer(r[w]);
    a = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: u
  };
}
class vo {
  constructor(e = {}) {
    const {
      canvas: t = Uo(),
      context: i = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: f = "default",
      failIfMajorPerformanceCaveat: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let h;
    i !== null ? h = i.getContextAttributes().alpha : h = a;
    const g = new Uint32Array(4), v = new Int32Array(4);
    let y = null, p = null;
    const u = [], w = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = xt, this._useLegacyLights = !1, this.toneMapping = 0, this.toneMappingExposure = 1;
    const _ = this;
    let b = !1, z = 0, A = 0, P = null, W = -1, ie = null;
    const x = new ft(), T = new ft();
    let q = null;
    const ee = new ke(0);
    let C = 0, B = t.width, G = t.height, X = 1, k = null, H = null;
    const K = new ft(0, 0, B, G), $ = new ft(0, 0, B, G);
    let fe = !1;
    const be = new co();
    let O = !1, Z = !1, ae = null;
    const _e = new gt(), Se = new Te(), de = new D(), We = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function ze() {
      return P === null ? X : 1;
    }
    let L = i;
    function mt(S, R) {
      for (let I = 0; I < S.length; I++) {
        const U = S[I], F = t.getContext(U, R);
        if (F !== null)
          return F;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: f,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ri}`), t.addEventListener("webglcontextlost", Ze, !1), t.addEventListener("webglcontextrestored", E, !1), t.addEventListener("webglcontextcreationerror", te, !1), L === null) {
        const R = ["webgl2", "webgl", "experimental-webgl"];
        if (_.isWebGL1Renderer === !0 && R.shift(), L = mt(R, S), L === null)
          throw mt(R) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      typeof WebGLRenderingContext < "u" && L instanceof WebGLRenderingContext && console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."), L.getShaderPrecisionFormat === void 0 && (L.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let ve, Pe, ge, nt, Le, M, m, N, J, Y, Q, he, se, ce, we, Fe, j, Ye, Ge, Ae, me, le, De, qe;
    function Je() {
      ve = new Ql(L), Pe = new ql(L, ve, e), ve.init(Pe), le = new Uu(L, ve, Pe), ge = new Fu(L, ve, Pe), nt = new tf(L), Le = new Mu(), M = new Iu(L, ve, ge, Le, Pe, le, nt), m = new Yl(_), N = new $l(_), J = new ca(L, Pe), De = new Vl(L, ve, J, Pe), Y = new Jl(L, J, nt, De), Q = new of(L, Y, J, nt), Ge = new sf(L, Pe, M), Fe = new Xl(Le), he = new Su(_, m, N, ve, Pe, De, Fe), se = new Wu(_, Le), ce = new Eu(), we = new zu(ve, Pe), Ye = new kl(_, m, N, ge, Q, h, c), j = new Nu(_, Q, Pe), qe = new qu(L, nt, Pe, ge), Ae = new Wl(L, ve, nt, Pe), me = new ef(L, ve, nt, Pe), nt.programs = he.programs, _.capabilities = Pe, _.extensions = ve, _.properties = Le, _.renderLists = ce, _.shadowMap = j, _.state = ge, _.info = nt;
    }
    Je();
    const He = new Vu(_, L);
    this.xr = He, this.getContext = function() {
      return L;
    }, this.getContextAttributes = function() {
      return L.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = ve.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = ve.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return X;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (X = S, this.setSize(B, G, !1));
    }, this.getSize = function(S) {
      return S.set(B, G);
    }, this.setSize = function(S, R, I = !0) {
      if (He.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      B = S, G = R, t.width = Math.floor(S * X), t.height = Math.floor(R * X), I === !0 && (t.style.width = S + "px", t.style.height = R + "px"), this.setViewport(0, 0, S, R);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(B * X, G * X).floor();
    }, this.setDrawingBufferSize = function(S, R, I) {
      B = S, G = R, X = I, t.width = Math.floor(S * I), t.height = Math.floor(R * I), this.setViewport(0, 0, S, R);
    }, this.getCurrentViewport = function(S) {
      return S.copy(x);
    }, this.getViewport = function(S) {
      return S.copy(K);
    }, this.setViewport = function(S, R, I, U) {
      S.isVector4 ? K.set(S.x, S.y, S.z, S.w) : K.set(S, R, I, U), ge.viewport(x.copy(K).multiplyScalar(X).floor());
    }, this.getScissor = function(S) {
      return S.copy($);
    }, this.setScissor = function(S, R, I, U) {
      S.isVector4 ? $.set(S.x, S.y, S.z, S.w) : $.set(S, R, I, U), ge.scissor(T.copy($).multiplyScalar(X).floor());
    }, this.getScissorTest = function() {
      return fe;
    }, this.setScissorTest = function(S) {
      ge.setScissorTest(fe = S);
    }, this.setOpaqueSort = function(S) {
      k = S;
    }, this.setTransparentSort = function(S) {
      H = S;
    }, this.getClearColor = function(S) {
      return S.copy(Ye.getClearColor());
    }, this.setClearColor = function() {
      Ye.setClearColor.apply(Ye, arguments);
    }, this.getClearAlpha = function() {
      return Ye.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ye.setClearAlpha.apply(Ye, arguments);
    }, this.clear = function(S = !0, R = !0, I = !0) {
      let U = 0;
      if (S) {
        let F = !1;
        if (P !== null) {
          const oe = P.texture.format;
          F = oe === 1033 || oe === 1031 || oe === 1029;
        }
        if (F) {
          const oe = P.texture.type, pe = oe === 1009 || oe === 1014 || oe === 1012 || oe === 1020 || oe === 1017 || oe === 1018, Me = Ye.getClearColor(), Ee = Ye.getClearAlpha(), Ie = Me.r, Ce = Me.g, Re = Me.b;
          pe ? (g[0] = Ie, g[1] = Ce, g[2] = Re, g[3] = Ee, L.clearBufferuiv(L.COLOR, 0, g)) : (v[0] = Ie, v[1] = Ce, v[2] = Re, v[3] = Ee, L.clearBufferiv(L.COLOR, 0, v));
        } else
          U |= L.COLOR_BUFFER_BIT;
      }
      R && (U |= L.DEPTH_BUFFER_BIT), I && (U |= L.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), L.clear(U);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ze, !1), t.removeEventListener("webglcontextrestored", E, !1), t.removeEventListener("webglcontextcreationerror", te, !1), ce.dispose(), we.dispose(), Le.dispose(), m.dispose(), N.dispose(), Q.dispose(), De.dispose(), qe.dispose(), he.dispose(), He.dispose(), He.removeEventListener("sessionstart", It), He.removeEventListener("sessionend", Qe), ae && (ae.dispose(), ae = null), Et.stop();
    };
    function Ze(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0;
    }
    function E() {
      console.log("THREE.WebGLRenderer: Context Restored."), b = !1;
      const S = nt.autoReset, R = j.enabled, I = j.autoUpdate, U = j.needsUpdate, F = j.type;
      Je(), nt.autoReset = S, j.enabled = R, j.autoUpdate = I, j.needsUpdate = U, j.type = F;
    }
    function te(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function ne(S) {
      const R = S.target;
      R.removeEventListener("dispose", ne), ue(R);
    }
    function ue(S) {
      xe(S), Le.remove(S);
    }
    function xe(S) {
      const R = Le.get(S).programs;
      R !== void 0 && (R.forEach(function(I) {
        he.releaseProgram(I);
      }), S.isShaderMaterial && he.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, R, I, U, F, oe) {
      R === null && (R = We);
      const pe = F.isMesh && F.matrixWorld.determinant() < 0, Me = zo(S, R, I, U, F);
      ge.setMaterial(U, pe);
      let Ee = I.index, Ie = 1;
      if (U.wireframe === !0) {
        if (Ee = Y.getWireframeAttribute(I), Ee === void 0)
          return;
        Ie = 2;
      }
      const Ce = I.drawRange, Re = I.attributes.position;
      let st = Ce.start * Ie, Dt = (Ce.start + Ce.count) * Ie;
      oe !== null && (st = Math.max(st, oe.start * Ie), Dt = Math.min(Dt, (oe.start + oe.count) * Ie)), Ee !== null ? (st = Math.max(st, 0), Dt = Math.min(Dt, Ee.count)) : Re != null && (st = Math.max(st, 0), Dt = Math.min(Dt, Re.count));
      const ht = Dt - st;
      if (ht < 0 || ht === 1 / 0)
        return;
      De.setup(F, U, Me, I, Ee);
      let Qt, it = Ae;
      if (Ee !== null && (Qt = J.get(Ee), it = me, it.setIndex(Qt)), F.isMesh)
        U.wireframe === !0 ? (ge.setLineWidth(U.wireframeLinewidth * ze()), it.setMode(L.LINES)) : it.setMode(L.TRIANGLES);
      else if (F.isLine) {
        let Ue = U.linewidth;
        Ue === void 0 && (Ue = 1), ge.setLineWidth(Ue * ze()), F.isLineSegments ? it.setMode(L.LINES) : F.isLineLoop ? it.setMode(L.LINE_LOOP) : it.setMode(L.LINE_STRIP);
      } else
        F.isPoints ? it.setMode(L.POINTS) : F.isSprite && it.setMode(L.TRIANGLES);
      if (F.isBatchedMesh)
        it.renderMultiDraw(F._multiDrawStarts, F._multiDrawCounts, F._multiDrawCount);
      else if (F.isInstancedMesh)
        it.renderInstances(st, ht, F.count);
      else if (I.isInstancedBufferGeometry) {
        const Ue = I._maxInstanceCount !== void 0 ? I._maxInstanceCount : 1 / 0, Ki = Math.min(I.instanceCount, Ue);
        it.renderInstances(st, ht, Ki);
      } else
        it.render(st, ht);
    };
    function Xe(S, R, I) {
      S.transparent === !0 && S.side === 2 && S.forceSinglePass === !1 ? (S.side = 1, S.needsUpdate = !0, fi(S, R, I), S.side = 0, S.needsUpdate = !0, fi(S, R, I), S.side = 2) : fi(S, R, I);
    }
    this.compile = function(S, R, I = null) {
      I === null && (I = S), p = we.get(I), p.init(), w.push(p), I.traverseVisible(function(F) {
        F.isLight && F.layers.test(R.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F));
      }), S !== I && S.traverseVisible(function(F) {
        F.isLight && F.layers.test(R.layers) && (p.pushLight(F), F.castShadow && p.pushShadow(F));
      }), p.setupLights(_._useLegacyLights);
      const U = /* @__PURE__ */ new Set();
      return S.traverse(function(F) {
        const oe = F.material;
        if (oe)
          if (Array.isArray(oe))
            for (let pe = 0; pe < oe.length; pe++) {
              const Me = oe[pe];
              Xe(Me, I, F), U.add(Me);
            }
          else
            Xe(oe, I, F), U.add(oe);
      }), w.pop(), p = null, U;
    }, this.compileAsync = function(S, R, I = null) {
      const U = this.compile(S, R, I);
      return new Promise((F) => {
        function oe() {
          if (U.forEach(function(pe) {
            Le.get(pe).currentProgram.isReady() && U.delete(pe);
          }), U.size === 0) {
            F(S);
            return;
          }
          setTimeout(oe, 10);
        }
        ve.get("KHR_parallel_shader_compile") !== null ? oe() : setTimeout(oe, 10);
      });
    };
    let $e = null;
    function vt(S) {
      $e && $e(S);
    }
    function It() {
      Et.stop();
    }
    function Qe() {
      Et.start();
    }
    const Et = new lo();
    Et.setAnimationLoop(vt), typeof self < "u" && Et.setContext(self), this.setAnimationLoop = function(S) {
      $e = S, He.setAnimationLoop(S), S === null ? Et.stop() : Et.start();
    }, He.addEventListener("sessionstart", It), He.addEventListener("sessionend", Qe), this.render = function(S, R) {
      if (R !== void 0 && R.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (b === !0)
        return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), R.parent === null && R.matrixWorldAutoUpdate === !0 && R.updateMatrixWorld(), He.enabled === !0 && He.isPresenting === !0 && (He.cameraAutoUpdate === !0 && He.updateCamera(R), R = He.getCamera()), S.isScene === !0 && S.onBeforeRender(_, S, R, P), p = we.get(S, w.length), p.init(), w.push(p), _e.multiplyMatrices(R.projectionMatrix, R.matrixWorldInverse), be.setFromProjectionMatrix(_e), Z = this.localClippingEnabled, O = Fe.init(this.clippingPlanes, Z), y = ce.get(S, u.length), y.init(), u.push(y), qt(S, R, 0, _.sortObjects), y.finish(), _.sortObjects === !0 && y.sort(k, H), this.info.render.frame++, O === !0 && Fe.beginShadows();
      const I = p.state.shadowsArray;
      if (j.render(I, S, R), O === !0 && Fe.endShadows(), this.info.autoReset === !0 && this.info.reset(), (He.enabled === !1 || He.isPresenting === !1 || He.hasDepthSensing() === !1) && Ye.render(y, S), p.setupLights(_._useLegacyLights), R.isArrayCamera) {
        const U = R.cameras;
        for (let F = 0, oe = U.length; F < oe; F++) {
          const pe = U[F];
          Vr(y, S, pe, pe.viewport);
        }
      } else
        Vr(y, S, R);
      P !== null && (M.updateMultisampleRenderTarget(P), M.updateRenderTargetMipmap(P)), S.isScene === !0 && S.onAfterRender(_, S, R), De.resetDefaultState(), W = -1, ie = null, w.pop(), w.length > 0 ? p = w[w.length - 1] : p = null, u.pop(), u.length > 0 ? y = u[u.length - 1] : y = null;
    };
    function qt(S, R, I, U) {
      if (S.visible === !1)
        return;
      if (S.layers.test(R.layers)) {
        if (S.isGroup)
          I = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(R);
        else if (S.isLight)
          p.pushLight(S), S.castShadow && p.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || be.intersectsSprite(S)) {
            U && de.setFromMatrixPosition(S.matrixWorld).applyMatrix4(_e);
            const pe = Q.update(S), Me = S.material;
            Me.visible && y.push(S, pe, Me, I, de.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || be.intersectsObject(S))) {
          const pe = Q.update(S), Me = S.material;
          if (U && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(), de.copy(S.boundingSphere.center)) : (pe.boundingSphere === null && pe.computeBoundingSphere(), de.copy(pe.boundingSphere.center)), de.applyMatrix4(S.matrixWorld).applyMatrix4(_e)), Array.isArray(Me)) {
            const Ee = pe.groups;
            for (let Ie = 0, Ce = Ee.length; Ie < Ce; Ie++) {
              const Re = Ee[Ie], st = Me[Re.materialIndex];
              st && st.visible && y.push(S, pe, st, I, de.z, Re);
            }
          } else
            Me.visible && y.push(S, pe, Me, I, de.z, null);
        }
      }
      const oe = S.children;
      for (let pe = 0, Me = oe.length; pe < Me; pe++)
        qt(oe[pe], R, I, U);
    }
    function Vr(S, R, I, U) {
      const F = S.opaque, oe = S.transmissive, pe = S.transparent;
      p.setupLightsView(I), O === !0 && Fe.setGlobalState(_.clippingPlanes, I), oe.length > 0 && Co(F, oe, R, I), U && ge.viewport(x.copy(U)), F.length > 0 && li(F, R, I), oe.length > 0 && li(oe, R, I), pe.length > 0 && li(pe, R, I), ge.buffers.depth.setTest(!0), ge.buffers.depth.setMask(!0), ge.buffers.color.setMask(!0), ge.setPolygonOffset(!1);
    }
    function Co(S, R, I, U) {
      if ((I.isScene === !0 ? I.overrideMaterial : null) !== null)
        return;
      const oe = Pe.isWebGL2;
      ae === null && (ae = new wt(1, 1, {
        generateMipmaps: !0,
        type: ve.has("EXT_color_buffer_half_float") ? 1016 : 1009,
        minFilter: 1008,
        samples: oe ? 4 : 0
      })), _.getDrawingBufferSize(Se), oe ? ae.setSize(Se.x, Se.y) : ae.setSize(Ar(Se.x), Ar(Se.y));
      const pe = _.getRenderTarget();
      _.setRenderTarget(ae), _.getClearColor(ee), C = _.getClearAlpha(), C < 1 && _.setClearColor(16777215, 0.5), _.clear();
      const Me = _.toneMapping;
      _.toneMapping = 0, li(S, I, U), M.updateMultisampleRenderTarget(ae), M.updateRenderTargetMipmap(ae);
      let Ee = !1;
      for (let Ie = 0, Ce = R.length; Ie < Ce; Ie++) {
        const Re = R[Ie], st = Re.object, Dt = Re.geometry, ht = Re.material, Qt = Re.group;
        if (ht.side === 2 && st.layers.test(U.layers)) {
          const it = ht.side;
          ht.side = 1, ht.needsUpdate = !0, Wr(st, I, U, Dt, ht, Qt), ht.side = it, ht.needsUpdate = !0, Ee = !0;
        }
      }
      Ee === !0 && (M.updateMultisampleRenderTarget(ae), M.updateRenderTargetMipmap(ae)), _.setRenderTarget(pe), _.setClearColor(ee, C), _.toneMapping = Me;
    }
    function li(S, R, I) {
      const U = R.isScene === !0 ? R.overrideMaterial : null;
      for (let F = 0, oe = S.length; F < oe; F++) {
        const pe = S[F], Me = pe.object, Ee = pe.geometry, Ie = U === null ? pe.material : U, Ce = pe.group;
        Me.layers.test(I.layers) && Wr(Me, R, I, Ee, Ie, Ce);
      }
    }
    function Wr(S, R, I, U, F, oe) {
      S.onBeforeRender(_, R, I, U, F, oe), S.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), F.onBeforeRender(_, R, I, U, S, oe), F.transparent === !0 && F.side === 2 && F.forceSinglePass === !1 ? (F.side = 1, F.needsUpdate = !0, _.renderBufferDirect(I, R, U, F, S, oe), F.side = 0, F.needsUpdate = !0, _.renderBufferDirect(I, R, U, F, S, oe), F.side = 2) : _.renderBufferDirect(I, R, U, F, S, oe), S.onAfterRender(_, R, I, U, F, oe);
    }
    function fi(S, R, I) {
      R.isScene !== !0 && (R = We);
      const U = Le.get(S), F = p.state.lights, oe = p.state.shadowsArray, pe = F.state.version, Me = he.getParameters(S, F.state, oe, R, I), Ee = he.getProgramCacheKey(Me);
      let Ie = U.programs;
      U.environment = S.isMeshStandardMaterial ? R.environment : null, U.fog = R.fog, U.envMap = (S.isMeshStandardMaterial ? N : m).get(S.envMap || U.environment), Ie === void 0 && (S.addEventListener("dispose", ne), Ie = /* @__PURE__ */ new Map(), U.programs = Ie);
      let Ce = Ie.get(Ee);
      if (Ce !== void 0) {
        if (U.currentProgram === Ce && U.lightsStateVersion === pe)
          return Xr(S, Me), Ce;
      } else
        Me.uniforms = he.getUniforms(S), S.onBuild(I, Me, _), S.onBeforeCompile(Me, _), Ce = he.acquireProgram(Me, Ee), Ie.set(Ee, Ce), U.uniforms = Me.uniforms;
      const Re = U.uniforms;
      return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Re.clippingPlanes = Fe.uniform), Xr(S, Me), U.needsLights = Lo(S), U.lightsStateVersion = pe, U.needsLights && (Re.ambientLightColor.value = F.state.ambient, Re.lightProbe.value = F.state.probe, Re.directionalLights.value = F.state.directional, Re.directionalLightShadows.value = F.state.directionalShadow, Re.spotLights.value = F.state.spot, Re.spotLightShadows.value = F.state.spotShadow, Re.rectAreaLights.value = F.state.rectArea, Re.ltc_1.value = F.state.rectAreaLTC1, Re.ltc_2.value = F.state.rectAreaLTC2, Re.pointLights.value = F.state.point, Re.pointLightShadows.value = F.state.pointShadow, Re.hemisphereLights.value = F.state.hemi, Re.directionalShadowMap.value = F.state.directionalShadowMap, Re.directionalShadowMatrix.value = F.state.directionalShadowMatrix, Re.spotShadowMap.value = F.state.spotShadowMap, Re.spotLightMatrix.value = F.state.spotLightMatrix, Re.spotLightMap.value = F.state.spotLightMap, Re.pointShadowMap.value = F.state.pointShadowMap, Re.pointShadowMatrix.value = F.state.pointShadowMatrix), U.currentProgram = Ce, U.uniformsList = null, Ce;
    }
    function qr(S) {
      if (S.uniformsList === null) {
        const R = S.currentProgram.getUniforms();
        S.uniformsList = Ii.seqWithValue(R.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Xr(S, R) {
      const I = Le.get(S);
      I.outputColorSpace = R.outputColorSpace, I.batching = R.batching, I.instancing = R.instancing, I.instancingColor = R.instancingColor, I.skinning = R.skinning, I.morphTargets = R.morphTargets, I.morphNormals = R.morphNormals, I.morphColors = R.morphColors, I.morphTargetsCount = R.morphTargetsCount, I.numClippingPlanes = R.numClippingPlanes, I.numIntersection = R.numClipIntersection, I.vertexAlphas = R.vertexAlphas, I.vertexTangents = R.vertexTangents, I.toneMapping = R.toneMapping;
    }
    function zo(S, R, I, U, F) {
      R.isScene !== !0 && (R = We), M.resetTextureUnits();
      const oe = R.fog, pe = U.isMeshStandardMaterial ? R.environment : null, Me = P === null ? _.outputColorSpace : P.isXRRenderTarget === !0 ? P.texture.colorSpace : sn, Ee = (U.isMeshStandardMaterial ? N : m).get(U.envMap || pe), Ie = U.vertexColors === !0 && !!I.attributes.color && I.attributes.color.itemSize === 4, Ce = !!I.attributes.tangent && (!!U.normalMap || U.anisotropy > 0), Re = !!I.morphAttributes.position, st = !!I.morphAttributes.normal, Dt = !!I.morphAttributes.color;
      let ht = 0;
      U.toneMapped && (P === null || P.isXRRenderTarget === !0) && (ht = _.toneMapping);
      const Qt = I.morphAttributes.position || I.morphAttributes.normal || I.morphAttributes.color, it = Qt !== void 0 ? Qt.length : 0, Ue = Le.get(U), Ki = p.state.lights;
      if (O === !0 && (Z === !0 || S !== ie)) {
        const Ut = S === ie && U.id === W;
        Fe.setState(U, S, Ut);
      }
      let rt = !1;
      U.version === Ue.__version ? (Ue.needsLights && Ue.lightsStateVersion !== Ki.state.version || Ue.outputColorSpace !== Me || F.isBatchedMesh && Ue.batching === !1 || !F.isBatchedMesh && Ue.batching === !0 || F.isInstancedMesh && Ue.instancing === !1 || !F.isInstancedMesh && Ue.instancing === !0 || F.isSkinnedMesh && Ue.skinning === !1 || !F.isSkinnedMesh && Ue.skinning === !0 || F.isInstancedMesh && Ue.instancingColor === !0 && F.instanceColor === null || F.isInstancedMesh && Ue.instancingColor === !1 && F.instanceColor !== null || Ue.envMap !== Ee || U.fog === !0 && Ue.fog !== oe || Ue.numClippingPlanes !== void 0 && (Ue.numClippingPlanes !== Fe.numPlanes || Ue.numIntersection !== Fe.numIntersection) || Ue.vertexAlphas !== Ie || Ue.vertexTangents !== Ce || Ue.morphTargets !== Re || Ue.morphNormals !== st || Ue.morphColors !== Dt || Ue.toneMapping !== ht || Pe.isWebGL2 === !0 && Ue.morphTargetsCount !== it) && (rt = !0) : (rt = !0, Ue.__version = U.version);
      let xn = Ue.currentProgram;
      rt === !0 && (xn = fi(U, R, F));
      let Yr = !1, $n = !1, $i = !1;
      const _t = xn.getUniforms(), _n = Ue.uniforms;
      if (ge.useProgram(xn.program) && (Yr = !0, $n = !0, $i = !0), U.id !== W && (W = U.id, $n = !0), Yr || ie !== S) {
        _t.setValue(L, "projectionMatrix", S.projectionMatrix), _t.setValue(L, "viewMatrix", S.matrixWorldInverse);
        const Ut = _t.map.cameraPosition;
        Ut !== void 0 && Ut.setValue(L, de.setFromMatrixPosition(S.matrixWorld)), Pe.logarithmicDepthBuffer && _t.setValue(
          L,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial) && _t.setValue(L, "isOrthographic", S.isOrthographicCamera === !0), ie !== S && (ie = S, $n = !0, $i = !0);
      }
      if (F.isSkinnedMesh) {
        _t.setOptional(L, F, "bindMatrix"), _t.setOptional(L, F, "bindMatrixInverse");
        const Ut = F.skeleton;
        Ut && (Pe.floatVertexTextures ? (Ut.boneTexture === null && Ut.computeBoneTexture(), _t.setValue(L, "boneTexture", Ut.boneTexture, M)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      F.isBatchedMesh && (_t.setOptional(L, F, "batchingTexture"), _t.setValue(L, "batchingTexture", F._matricesTexture, M));
      const Qi = I.morphAttributes;
      if ((Qi.position !== void 0 || Qi.normal !== void 0 || Qi.color !== void 0 && Pe.isWebGL2 === !0) && Ge.update(F, I, xn), ($n || Ue.receiveShadow !== F.receiveShadow) && (Ue.receiveShadow = F.receiveShadow, _t.setValue(L, "receiveShadow", F.receiveShadow)), U.isMeshGouraudMaterial && U.envMap !== null && (_n.envMap.value = Ee, _n.flipEnvMap.value = Ee.isCubeTexture && Ee.isRenderTargetTexture === !1 ? -1 : 1), $n && (_t.setValue(L, "toneMappingExposure", _.toneMappingExposure), Ue.needsLights && Ro(_n, $i), oe && U.fog === !0 && se.refreshFogUniforms(_n, oe), se.refreshMaterialUniforms(_n, U, X, G, ae), Ii.upload(L, qr(Ue), _n, M)), U.isShaderMaterial && U.uniformsNeedUpdate === !0 && (Ii.upload(L, qr(Ue), _n, M), U.uniformsNeedUpdate = !1), U.isSpriteMaterial && _t.setValue(L, "center", F.center), _t.setValue(L, "modelViewMatrix", F.modelViewMatrix), _t.setValue(L, "normalMatrix", F.normalMatrix), _t.setValue(L, "modelMatrix", F.matrixWorld), U.isShaderMaterial || U.isRawShaderMaterial) {
        const Ut = U.uniformsGroups;
        for (let Ji = 0, Do = Ut.length; Ji < Do; Ji++)
          if (Pe.isWebGL2) {
            const jr = Ut[Ji];
            qe.update(jr, xn), qe.bind(jr, xn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return xn;
    }
    function Ro(S, R) {
      S.ambientLightColor.needsUpdate = R, S.lightProbe.needsUpdate = R, S.directionalLights.needsUpdate = R, S.directionalLightShadows.needsUpdate = R, S.pointLights.needsUpdate = R, S.pointLightShadows.needsUpdate = R, S.spotLights.needsUpdate = R, S.spotLightShadows.needsUpdate = R, S.rectAreaLights.needsUpdate = R, S.hemisphereLights.needsUpdate = R;
    }
    function Lo(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return z;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return P;
    }, this.setRenderTargetTextures = function(S, R, I) {
      Le.get(S.texture).__webglTexture = R, Le.get(S.depthTexture).__webglTexture = I;
      const U = Le.get(S);
      U.__hasExternalTextures = !0, U.__hasExternalTextures && (U.__autoAllocateDepthBuffer = I === void 0, U.__autoAllocateDepthBuffer || ve.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), U.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, R) {
      const I = Le.get(S);
      I.__webglFramebuffer = R, I.__useDefaultFramebuffer = R === void 0;
    }, this.setRenderTarget = function(S, R = 0, I = 0) {
      P = S, z = R, A = I;
      let U = !0, F = null, oe = !1, pe = !1;
      if (S) {
        const Ee = Le.get(S);
        Ee.__useDefaultFramebuffer !== void 0 ? (ge.bindFramebuffer(L.FRAMEBUFFER, null), U = !1) : Ee.__webglFramebuffer === void 0 ? M.setupRenderTarget(S) : Ee.__hasExternalTextures && M.rebindTextures(S, Le.get(S.texture).__webglTexture, Le.get(S.depthTexture).__webglTexture);
        const Ie = S.texture;
        (Ie.isData3DTexture || Ie.isDataArrayTexture || Ie.isCompressedArrayTexture) && (pe = !0);
        const Ce = Le.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Array.isArray(Ce[R]) ? F = Ce[R][I] : F = Ce[R], oe = !0) : Pe.isWebGL2 && S.samples > 0 && M.useMultisampledRTT(S) === !1 ? F = Le.get(S).__webglMultisampledFramebuffer : Array.isArray(Ce) ? F = Ce[I] : F = Ce, x.copy(S.viewport), T.copy(S.scissor), q = S.scissorTest;
      } else
        x.copy(K).multiplyScalar(X).floor(), T.copy($).multiplyScalar(X).floor(), q = fe;
      if (ge.bindFramebuffer(L.FRAMEBUFFER, F) && Pe.drawBuffers && U && ge.drawBuffers(S, F), ge.viewport(x), ge.scissor(T), ge.setScissorTest(q), oe) {
        const Ee = Le.get(S.texture);
        L.framebufferTexture2D(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, L.TEXTURE_CUBE_MAP_POSITIVE_X + R, Ee.__webglTexture, I);
      } else if (pe) {
        const Ee = Le.get(S.texture), Ie = R || 0;
        L.framebufferTextureLayer(L.FRAMEBUFFER, L.COLOR_ATTACHMENT0, Ee.__webglTexture, I || 0, Ie);
      }
      W = -1;
    }, this.readRenderTargetPixels = function(S, R, I, U, F, oe, pe) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Me = Le.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && pe !== void 0 && (Me = Me[pe]), Me) {
        ge.bindFramebuffer(L.FRAMEBUFFER, Me);
        try {
          const Ee = S.texture, Ie = Ee.format, Ce = Ee.type;
          if (Ie !== 1023 && le.convert(Ie) !== L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Re = Ce === 1016 && (ve.has("EXT_color_buffer_half_float") || Pe.isWebGL2 && ve.has("EXT_color_buffer_float"));
          if (Ce !== 1009 && le.convert(Ce) !== L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ce === 1015 && (Pe.isWebGL2 || ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Re) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          R >= 0 && R <= S.width - U && I >= 0 && I <= S.height - F && L.readPixels(R, I, U, F, le.convert(Ie), le.convert(Ce), oe);
        } finally {
          const Ee = P !== null ? Le.get(P).__webglFramebuffer : null;
          ge.bindFramebuffer(L.FRAMEBUFFER, Ee);
        }
      }
    }, this.copyFramebufferToTexture = function(S, R, I = 0) {
      const U = Math.pow(2, -I), F = Math.floor(R.image.width * U), oe = Math.floor(R.image.height * U);
      M.setTexture2D(R, 0), L.copyTexSubImage2D(L.TEXTURE_2D, I, 0, 0, S.x, S.y, F, oe), ge.unbindTexture();
    }, this.copyTextureToTexture = function(S, R, I, U = 0) {
      const F = R.image.width, oe = R.image.height, pe = le.convert(I.format), Me = le.convert(I.type);
      M.setTexture2D(I, 0), L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, I.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, I.unpackAlignment), R.isDataTexture ? L.texSubImage2D(L.TEXTURE_2D, U, S.x, S.y, F, oe, pe, Me, R.image.data) : R.isCompressedTexture ? L.compressedTexSubImage2D(L.TEXTURE_2D, U, S.x, S.y, R.mipmaps[0].width, R.mipmaps[0].height, pe, R.mipmaps[0].data) : L.texSubImage2D(L.TEXTURE_2D, U, S.x, S.y, pe, Me, R.image), U === 0 && I.generateMipmaps && L.generateMipmap(L.TEXTURE_2D), ge.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, R, I, U, F = 0) {
      if (_.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const oe = S.max.x - S.min.x + 1, pe = S.max.y - S.min.y + 1, Me = S.max.z - S.min.z + 1, Ee = le.convert(U.format), Ie = le.convert(U.type);
      let Ce;
      if (U.isData3DTexture)
        M.setTexture3D(U, 0), Ce = L.TEXTURE_3D;
      else if (U.isDataArrayTexture || U.isCompressedArrayTexture)
        M.setTexture2DArray(U, 0), Ce = L.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, U.flipY), L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), L.pixelStorei(L.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Re = L.getParameter(L.UNPACK_ROW_LENGTH), st = L.getParameter(L.UNPACK_IMAGE_HEIGHT), Dt = L.getParameter(L.UNPACK_SKIP_PIXELS), ht = L.getParameter(L.UNPACK_SKIP_ROWS), Qt = L.getParameter(L.UNPACK_SKIP_IMAGES), it = I.isCompressedTexture ? I.mipmaps[F] : I.image;
      L.pixelStorei(L.UNPACK_ROW_LENGTH, it.width), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, it.height), L.pixelStorei(L.UNPACK_SKIP_PIXELS, S.min.x), L.pixelStorei(L.UNPACK_SKIP_ROWS, S.min.y), L.pixelStorei(L.UNPACK_SKIP_IMAGES, S.min.z), I.isDataTexture || I.isData3DTexture ? L.texSubImage3D(Ce, F, R.x, R.y, R.z, oe, pe, Me, Ee, Ie, it.data) : I.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), L.compressedTexSubImage3D(Ce, F, R.x, R.y, R.z, oe, pe, Me, Ee, it.data)) : L.texSubImage3D(Ce, F, R.x, R.y, R.z, oe, pe, Me, Ee, Ie, it), L.pixelStorei(L.UNPACK_ROW_LENGTH, Re), L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, st), L.pixelStorei(L.UNPACK_SKIP_PIXELS, Dt), L.pixelStorei(L.UNPACK_SKIP_ROWS, ht), L.pixelStorei(L.UNPACK_SKIP_IMAGES, Qt), F === 0 && U.generateMipmaps && L.generateMipmap(Ce), ge.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? M.setTextureCube(S, 0) : S.isData3DTexture ? M.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? M.setTexture2DArray(S, 0) : M.setTexture2D(S, 0), ge.unbindTexture();
    }, this.resetState = function() {
      z = 0, A = 0, P = null, ge.reset(), De.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorSpace = e === Nr ? "display-p3" : "srgb", t.unpackColorSpace = je.workingColorSpace === Hi ? "display-p3" : "srgb";
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === xt ? 3001 : 3e3;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === 3001 ? xt : sn;
  }
  get useLegacyLights() {
    return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights;
  }
  set useLegacyLights(e) {
    console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."), this._useLegacyLights = e;
  }
}
class Xu extends vo {
}
Xu.prototype.isWebGL1Renderer = !0;
class zr extends Rt {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
}
class Yu extends Pn {
  constructor(e) {
    super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new ke(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const Us = /* @__PURE__ */ new gt(), Rr = /* @__PURE__ */ new Fr(), Di = /* @__PURE__ */ new ki(), Ni = /* @__PURE__ */ new D();
class qi extends Rt {
  constructor(e = new Lt(), t = new Yu()) {
    super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const i = this.geometry, r = this.matrixWorld, s = e.params.Points.threshold, a = i.drawRange;
    if (i.boundingSphere === null && i.computeBoundingSphere(), Di.copy(i.boundingSphere), Di.applyMatrix4(r), Di.radius += s, e.ray.intersectsSphere(Di) === !1)
      return;
    Us.copy(r).invert(), Rr.copy(e.ray).applyMatrix4(Us);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = o * o, l = i.index, d = i.attributes.position;
    if (l !== null) {
      const h = Math.max(0, a.start), g = Math.min(l.count, a.start + a.count);
      for (let v = h, y = g; v < y; v++) {
        const p = l.getX(v);
        Ni.fromBufferAttribute(d, p), Os(Ni, p, c, r, e, t, this);
      }
    } else {
      const h = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let v = h, y = g; v < y; v++)
        Ni.fromBufferAttribute(d, v), Os(Ni, v, c, r, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, i = Object.keys(t);
    if (i.length > 0) {
      const r = t[i[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Os(n, e, t, i, r, s, a) {
  const o = Rr.distanceSqToPoint(n);
  if (o < t) {
    const c = new D();
    Rr.closestPointToPoint(n, c), c.applyMatrix4(i);
    const l = r.ray.origin.distanceTo(c);
    if (l < r.near || l > r.far)
      return;
    s.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: e,
      face: null,
      object: a
    });
  }
}
class Xi extends Lt {
  constructor(e = 1, t = 32, i = 16, r = 0, s = Math.PI * 2, a = 0, o = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: i,
      phiStart: r,
      phiLength: s,
      thetaStart: a,
      thetaLength: o
    }, t = Math.max(3, Math.floor(t)), i = Math.max(2, Math.floor(i));
    const c = Math.min(a + o, Math.PI);
    let l = 0;
    const f = [], d = new D(), h = new D(), g = [], v = [], y = [], p = [];
    for (let u = 0; u <= i; u++) {
      const w = [], _ = u / i;
      let b = 0;
      u === 0 && a === 0 ? b = 0.5 / t : u === i && c === Math.PI && (b = -0.5 / t);
      for (let z = 0; z <= t; z++) {
        const A = z / t;
        d.x = -e * Math.cos(r + A * s) * Math.sin(a + _ * o), d.y = e * Math.cos(a + _ * o), d.z = e * Math.sin(r + A * s) * Math.sin(a + _ * o), v.push(d.x, d.y, d.z), h.copy(d).normalize(), y.push(h.x, h.y, h.z), p.push(A + b, 1 - _), w.push(l++);
      }
      f.push(w);
    }
    for (let u = 0; u < i; u++)
      for (let w = 0; w < t; w++) {
        const _ = f[u][w + 1], b = f[u][w], z = f[u + 1][w], A = f[u + 1][w + 1];
        (u !== 0 || a > 0) && g.push(_, b, A), (u !== i - 1 || c < Math.PI) && g.push(b, z, A);
      }
    this.setIndex(g), this.setAttribute("position", new Kt(v, 3)), this.setAttribute("normal", new Kt(y, 3)), this.setAttribute("uv", new Kt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Xi(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class ju {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = Bs(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = Bs();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function Bs() {
  return (typeof performance > "u" ? Date : performance).now();
}
class ye {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new ye(this.value.clone === void 0 ? this.value : this.value.clone());
  }
}
class Zu {
  constructor(e, t, i = 0, r = 1 / 0) {
    this.ray = new Fr(e, t), this.near = i, this.far = r, this.camera = null, this.layers = new Ir(), this.params = {
      Mesh: {},
      Line: { threshold: 1 },
      LOD: {},
      Points: { threshold: 1 },
      Sprite: {}
    };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  intersectObject(e, t = !0, i = []) {
    return Lr(e, this, i, t), i.sort(Gs), i;
  }
  intersectObjects(e, t = !0, i = []) {
    for (let r = 0, s = e.length; r < s; r++)
      Lr(e[r], this, i, t);
    return i.sort(Gs), i;
  }
}
function Gs(n, e) {
  return n.distance - e.distance;
}
function Lr(n, e, t, i) {
  if (n.layers.test(e.layers) && n.raycast(e, t), i === !0) {
    const r = n.children;
    for (let s = 0, a = r.length; s < a; s++)
      Lr(r[s], e, t, !0);
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ri
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ri);
/**
 * postprocessing v6.34.3 build Sat Feb 10 2024
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2024 Raoul van Rüschen
 * @license Zlib
 */
var Yi = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}", Ku = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if PASS == 1
uniform vec4 kernel64[32];
#else
uniform vec4 kernel16[8];
#endif
uniform lowp sampler2D cocBuffer;uniform vec2 texelSize;uniform float scale;varying vec2 vUv;void main(){
#ifdef FOREGROUND
vec2 cocNearFar=texture2D(cocBuffer,vUv).rg*scale;float coc=cocNearFar.x;
#else
float coc=texture2D(cocBuffer,vUv).g*scale;
#endif
if(coc==0.0){gl_FragColor=texture2D(inputBuffer,vUv);}else{
#ifdef FOREGROUND
vec2 step=texelSize*max(cocNearFar.x,cocNearFar.y);
#else
vec2 step=texelSize*coc;
#endif
#if PASS == 1
vec4 acc=vec4(0.0);for(int i=0;i<32;++i){vec4 kernel=kernel64[i];vec2 uv=step*kernel.xy+vUv;acc+=texture2D(inputBuffer,uv);uv=step*kernel.zw+vUv;acc+=texture2D(inputBuffer,uv);}gl_FragColor=acc/64.0;
#else
vec4 maxValue=texture2D(inputBuffer,vUv);for(int i=0;i<8;++i){vec4 kernel=kernel16[i];vec2 uv=step*kernel.xy+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);uv=step*kernel.zw+vUv;maxValue=max(texture2D(inputBuffer,uv),maxValue);}gl_FragColor=maxValue;
#endif
}}`, Fi = class extends at {
  /**
   * Constructs a new bokeh material.
   *
   * @param {Boolean} [fill=false] - Enables or disables the bokeh highlight fill mode.
   * @param {Boolean} [foreground=false] - Determines whether this material will be applied to foreground colors.
   */
  constructor(n = !1, e = !1) {
    super({
      name: "BokehMaterial",
      defines: {
        PASS: n ? "2" : "1"
      },
      uniforms: {
        inputBuffer: new ye(null),
        cocBuffer: new ye(null),
        texelSize: new ye(new Te()),
        kernel64: new ye(null),
        kernel16: new ye(null),
        scale: new ye(1)
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      fragmentShader: Ku,
      vertexShader: Yi
    }), e && (this.defines.FOREGROUND = "1"), this.generateKernel();
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The buffer.
   */
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * The circle of confusion buffer.
   *
   * @type {Texture}
   */
  set cocBuffer(n) {
    this.uniforms.cocBuffer.value = n;
  }
  /**
   * Sets the circle of confusion buffer.
   *
   * @deprecated Use cocBuffer instead.
   * @param {Texture} value - The buffer.
   */
  setCoCBuffer(n) {
    this.uniforms.cocBuffer.value = n;
  }
  /**
   * The blur scale.
   *
   * @type {Number}
   */
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(n) {
    this.uniforms.scale.value = n;
  }
  /**
   * Returns the blur scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} The scale.
   */
  getScale(n) {
    return this.scale;
  }
  /**
   * Sets the blur scale.
   *
   * @deprecated Use scale instead.
   * @param {Number} value - The scale.
   */
  setScale(n) {
    this.scale = n;
  }
  /**
   * Generates the blur kernel.
   *
   * @private
   */
  generateKernel() {
    const n = 2.39996323, e = new Float64Array(128), t = new Float64Array(32);
    let i = 0, r = 0;
    for (let s = 0, a = Math.sqrt(80); s < 80; ++s) {
      const o = s * n, c = Math.sqrt(s) / a, l = c * Math.cos(o), f = c * Math.sin(o);
      s % 5 === 0 ? (t[r++] = l, t[r++] = f) : (e[i++] = l, e[i++] = f);
    }
    this.uniforms.kernel64.value = e, this.uniforms.kernel16.value = t;
  }
  /**
   * Sets the texel size.
   *
   * @deprecated Use setSize() instead.
   * @param {Number} x - The texel width.
   * @param {Number} y - The texel height.
   */
  setTexelSize(n, e) {
    this.uniforms.texelSize.value.set(n, e);
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
}, Oe = {
  SKIP: 9,
  SET: 30,
  ADD: 0,
  ALPHA: 1,
  AVERAGE: 2,
  COLOR: 3,
  COLOR_BURN: 4,
  COLOR_DODGE: 5,
  DARKEN: 6,
  DIFFERENCE: 7,
  DIVIDE: 8,
  DST: 9,
  EXCLUSION: 10,
  HARD_LIGHT: 11,
  HARD_MIX: 12,
  HUE: 13,
  INVERT: 14,
  INVERT_RGB: 15,
  LIGHTEN: 16,
  LINEAR_BURN: 17,
  LINEAR_DODGE: 18,
  LINEAR_LIGHT: 19,
  LUMINOSITY: 20,
  MULTIPLY: 21,
  NEGATION: 22,
  NORMAL: 23,
  OVERLAY: 24,
  PIN_LIGHT: 25,
  REFLECT: 26,
  SATURATION: 27,
  SCREEN: 28,
  SOFT_LIGHT: 29,
  SRC: 30,
  SUBTRACT: 31,
  VIVID_LIGHT: 32
}, xo = {
  RED: 0,
  GREEN: 1,
  BLUE: 2,
  ALPHA: 3
}, _o = "", lt = "srgb", ji = "srgb-linear", vn = {
  NONE: 0,
  DEPTH: 1,
  CONVOLUTION: 2
}, Ve = {
  FRAGMENT_HEAD: "FRAGMENT_HEAD",
  FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
  FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
  VERTEX_HEAD: "VERTEX_HEAD",
  VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
}, Zi = {
  VERY_SMALL: 0,
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
  VERY_LARGE: 4,
  HUGE: 5
}, yo = {
  DISCARD: 0,
  MULTIPLY: 1,
  MULTIPLY_RGB_SET_ALPHA: 2,
  MULTIPLY_RGB: 3
}, So = Number(ri.replace(/\D+/g, "")), Mo = So >= 152, $u = /* @__PURE__ */ new Map([
  [3e3, ji],
  [3001, lt]
]), Qu = /* @__PURE__ */ new Map([
  [ji, 3e3],
  [lt, 3001]
]);
function ii(n) {
  return n === null ? null : Mo ? n.outputColorSpace : $u.get(n.outputEncoding);
}
function Zt(n, e) {
  n !== null && (Mo ? n.colorSpace = e : n.encoding = Qu.get(e));
}
function Gr(n) {
  return So < 154 ? n.replace("colorspace_fragment", "encodings_fragment") : n;
}
function Hs(n, e, t) {
  return n * (e - t) - e;
}
function Dr(n, e, t) {
  return Math.min(Math.max((n + e) / (e - t), 0), 1);
}
var Ju = `#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float focusDistance;uniform float focusRange;uniform float cameraNear;uniform float cameraFar;varying vec2 vUv;float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#ifdef LOG_DEPTH
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#endif
return depth;}void main(){float depth=readDepth(vUv);
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(depth,cameraNear,cameraFar);float linearDepth=viewZToOrthographicDepth(viewZ,cameraNear,cameraFar);
#else
float linearDepth=depth;
#endif
float signedDistance=linearDepth-focusDistance;float magnitude=smoothstep(0.0,focusRange,abs(signedDistance));gl_FragColor.rg=magnitude*vec2(step(signedDistance,0.0),step(0.0,signedDistance));}`, ed = class extends at {
  /**
   * Constructs a new CoC material.
   *
   * @param {Camera} camera - A camera.
   */
  constructor(n) {
    super({
      name: "CircleOfConfusionMaterial",
      defines: {
        DEPTH_PACKING: "0"
      },
      uniforms: {
        depthBuffer: new ye(null),
        focusDistance: new ye(0),
        focusRange: new ye(0),
        cameraNear: new ye(0.3),
        cameraFar: new ye(1e3)
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      fragmentShader: Ju,
      vertexShader: Yi
    }), this.uniforms.focalLength = this.uniforms.focusRange, this.copyCameraSettings(n);
  }
  /**
   * The current near plane setting.
   *
   * @type {Number}
   * @private
   */
  get near() {
    return this.uniforms.cameraNear.value;
  }
  /**
   * The current far plane setting.
   *
   * @type {Number}
   * @private
   */
  get far() {
    return this.uniforms.cameraFar.value;
  }
  /**
   * The depth buffer.
   *
   * @type {Texture}
   */
  set depthBuffer(n) {
    this.uniforms.depthBuffer.value = n;
  }
  /**
   * The depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = !0;
  }
  /**
   * Sets the depth buffer.
   *
   * @deprecated Use depthBuffer and depthPacking instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
   */
  setDepthBuffer(n, e = 3200) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  /**
   * The focus distance. Range: [0.0, 1.0].
   *
   * @type {Number}
   */
  get focusDistance() {
    return this.uniforms.focusDistance.value;
  }
  set focusDistance(n) {
    this.uniforms.focusDistance.value = n;
  }
  /**
   * The focus distance in world units.
   *
   * @type {Number}
   */
  get worldFocusDistance() {
    return -Hs(this.focusDistance, this.near, this.far);
  }
  set worldFocusDistance(n) {
    this.focusDistance = Dr(-n, this.near, this.far);
  }
  /**
   * Returns the focus distance.
   *
   * @deprecated Use focusDistance instead.
   * @return {Number} The focus distance.
   */
  getFocusDistance(n) {
    this.uniforms.focusDistance.value = n;
  }
  /**
   * Sets the focus distance.
   *
   * @deprecated Use focusDistance instead.
   * @param {Number} value - The focus distance.
   */
  setFocusDistance(n) {
    this.uniforms.focusDistance.value = n;
  }
  /**
   * The focal length.
   *
   * @deprecated Renamed to focusRange.
   * @type {Number}
   */
  get focalLength() {
    return this.focusRange;
  }
  set focalLength(n) {
    this.focusRange = n;
  }
  /**
   * The focus range. Range: [0.0, 1.0].
   *
   * @type {Number}
   */
  get focusRange() {
    return this.uniforms.focusRange.value;
  }
  set focusRange(n) {
    this.uniforms.focusRange.value = n;
  }
  /**
   * The focus range in world units.
   *
   * @type {Number}
   */
  get worldFocusRange() {
    return -Hs(this.focusRange, this.near, this.far);
  }
  set worldFocusRange(n) {
    this.focusRange = Dr(-n, this.near, this.far);
  }
  /**
   * Returns the focal length.
   *
   * @deprecated Use focusRange instead.
   * @return {Number} The focal length.
   */
  getFocalLength(n) {
    return this.focusRange;
  }
  /**
   * Sets the focal length.
   *
   * @deprecated Use focusRange instead.
   * @param {Number} value - The focal length.
   */
  setFocalLength(n) {
    this.focusRange = n;
  }
  /**
   * Copies the settings of the given camera.
   *
   * @deprecated Use copyCameraSettings instead.
   * @param {Camera} camera - A camera.
   */
  adoptCameraSettings(n) {
    this.copyCameraSettings(n);
  }
  /**
   * Copies the settings of the given camera.
   *
   * @param {Camera} camera - A camera.
   */
  copyCameraSettings(n) {
    n && (this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far, n instanceof At ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0);
  }
}, td = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`, nd = "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}", id = [
  new Float32Array([0, 0]),
  new Float32Array([0, 1, 1]),
  new Float32Array([0, 1, 1, 2]),
  new Float32Array([0, 1, 2, 2, 3]),
  new Float32Array([0, 1, 2, 3, 4, 4, 5]),
  new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])
], rd = class extends at {
  /**
   * Constructs a new convolution material.
   *
   * TODO Remove texelSize param.
   * @param {Vector4} [texelSize] - Deprecated.
   */
  constructor(n = new ft()) {
    super({
      name: "KawaseBlurMaterial",
      uniforms: {
        inputBuffer: new ye(null),
        texelSize: new ye(new ft()),
        scale: new ye(1),
        kernel: new ye(0)
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      fragmentShader: td,
      vertexShader: nd
    }), this.fragmentShader = Gr(this.fragmentShader), this.setTexelSize(n.x, n.y), this.kernelSize = Zi.MEDIUM;
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(n) {
    this.inputBuffer = n;
  }
  /**
   * The kernel sequence for the current kernel size.
   *
   * @type {Float32Array}
   */
  get kernelSequence() {
    return id[this.kernelSize];
  }
  /**
   * The blur scale.
   *
   * @type {Number}
   */
  get scale() {
    return this.uniforms.scale.value;
  }
  set scale(n) {
    this.uniforms.scale.value = n;
  }
  /**
   * Returns the blur scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} The scale.
   */
  getScale() {
    return this.uniforms.scale.value;
  }
  /**
   * Sets the blur scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} value - The scale.
   */
  setScale(n) {
    this.uniforms.scale.value = n;
  }
  /**
   * Returns the kernel.
   *
   * @return {Float32Array} The kernel.
   * @deprecated Implementation detail, removed with no replacement.
   */
  getKernel() {
    return null;
  }
  /**
   * The current kernel.
   *
   * @type {Number}
   */
  get kernel() {
    return this.uniforms.kernel.value;
  }
  set kernel(n) {
    this.uniforms.kernel.value = n;
  }
  /**
   * Sets the current kernel.
   *
   * @deprecated Use kernel instead.
   * @param {Number} value - The kernel.
   */
  setKernel(n) {
    this.kernel = n;
  }
  /**
   * Sets the texel size.
   *
   * @deprecated Use setSize() instead.
   * @param {Number} x - The texel width.
   * @param {Number} y - The texel height.
   */
  setTexelSize(n, e) {
    this.uniforms.texelSize.value.set(n, e, n * 0.5, e * 0.5);
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    const t = 1 / n, i = 1 / e;
    this.uniforms.texelSize.value.set(t, i, t * 0.5, i * 0.5);
  }
}, sd = `#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`, wo = class extends at {
  /**
   * Constructs a new copy material.
   */
  constructor() {
    super({
      name: "CopyMaterial",
      uniforms: {
        inputBuffer: new ye(null),
        opacity: new ye(1)
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      fragmentShader: sd,
      vertexShader: Yi
    }), this.fragmentShader = Gr(this.fragmentShader);
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Number} value - The buffer.
   */
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Returns the opacity.
   *
   * @deprecated Use opacity instead.
   * @return {Number} The opacity.
   */
  getOpacity(n) {
    return this.uniforms.opacity.value;
  }
  /**
   * Sets the opacity.
   *
   * @deprecated Use opacity instead.
   * @param {Number} value - The opacity.
   */
  setOpacity(n) {
    this.uniforms.opacity.value = n;
  }
}, od = `#include <packing>
#include <clipping_planes_pars_fragment>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform float cameraNear;uniform float cameraFar;centroid varying float vViewZ;centroid varying vec4 vProjTexCoord;void main(){
#include <clipping_planes_fragment>
vec2 projTexCoord=(vProjTexCoord.xy/vProjTexCoord.w)*0.5+0.5;projTexCoord=clamp(projTexCoord,0.002,0.998);
#if DEPTH_PACKING == 3201
float fragCoordZ=unpackRGBAToDepth(texture2D(depthBuffer,projTexCoord));
#else
float fragCoordZ=texture2D(depthBuffer,projTexCoord).r;
#endif
#ifdef PERSPECTIVE_CAMERA
float viewZ=perspectiveDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#else
float viewZ=orthographicDepthToViewZ(fragCoordZ,cameraNear,cameraFar);
#endif
float depthTest=(-vViewZ>-viewZ)?1.0:0.0;gl_FragColor.rg=vec2(0.0,depthTest);}`, ad = `#include <common>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
varying float vViewZ;varying vec4 vProjTexCoord;void main(){
#include <skinbase_vertex>
#include <begin_vertex>
#include <morphtarget_vertex>
#include <skinning_vertex>
#include <project_vertex>
vViewZ=mvPosition.z;vProjTexCoord=gl_Position;
#include <clipping_planes_vertex>
}`, cd = class extends at {
  /**
   * Constructs a new depth comparison material.
   *
   * @param {Texture} [depthTexture=null] - A depth texture.
   * @param {PerspectiveCamera} [camera] - A camera.
   */
  constructor(n = null, e) {
    super({
      name: "DepthComparisonMaterial",
      defines: {
        DEPTH_PACKING: "0"
      },
      uniforms: {
        depthBuffer: new ye(null),
        cameraNear: new ye(0.3),
        cameraFar: new ye(1e3)
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      fragmentShader: od,
      vertexShader: ad
    }), this.depthBuffer = n, this.depthPacking = 3201, this.copyCameraSettings(e);
  }
  /**
   * The depth buffer.
   *
   * @type {Texture}
   */
  set depthBuffer(n) {
    this.uniforms.depthBuffer.value = n;
  }
  /**
   * The depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = !0;
  }
  /**
   * Sets the depth buffer.
   *
   * @deprecated Use depthBuffer and depthPacking instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=RGBADepthPacking] - The depth packing strategy.
   */
  setDepthBuffer(n, e = 3201) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  /**
   * Copies the settings of the given camera.
   *
   * @deprecated Use copyCameraSettings instead.
   * @param {Camera} camera - A camera.
   */
  adoptCameraSettings(n) {
    this.copyCameraSettings(n);
  }
  /**
   * Copies the settings of the given camera.
   *
   * @param {Camera} camera - A camera.
   */
  copyCameraSettings(n) {
    n && (this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far, n instanceof At ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0);
  }
}, ld = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`, fd = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}", ud = class extends at {
  /**
   * Constructs a new effect material.
   *
   * @param {Map<String, String>} [shaderParts] - Deprecated. Use setShaderData instead.
   * @param {Map<String, String>} [defines] - Deprecated. Use setShaderData instead.
   * @param {Map<String, Uniform>} [uniforms] - Deprecated. Use setShaderData instead.
   * @param {Camera} [camera] - A camera.
   * @param {Boolean} [dithering=false] - Deprecated.
   */
  constructor(n, e, t, i, r = !1) {
    super({
      name: "EffectMaterial",
      defines: {
        THREE_REVISION: ri.replace(/\D+/g, ""),
        DEPTH_PACKING: "0",
        ENCODE_OUTPUT: "1"
      },
      uniforms: {
        inputBuffer: new ye(null),
        depthBuffer: new ye(null),
        resolution: new ye(new Te()),
        texelSize: new ye(new Te()),
        cameraNear: new ye(0.3),
        cameraFar: new ye(1e3),
        aspect: new ye(1),
        time: new ye(0)
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      dithering: r
    }), n && this.setShaderParts(n), e && this.setDefines(e), t && this.setUniforms(t), this.copyCameraSettings(i);
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * The depth buffer.
   *
   * @type {Texture}
   */
  get depthBuffer() {
    return this.uniforms.depthBuffer.value;
  }
  set depthBuffer(n) {
    this.uniforms.depthBuffer.value = n;
  }
  /**
   * The depth packing strategy.
   *
   * @type {DepthPackingStrategies}
   */
  get depthPacking() {
    return Number(this.defines.DEPTH_PACKING);
  }
  set depthPacking(n) {
    this.defines.DEPTH_PACKING = n.toFixed(0), this.needsUpdate = !0;
  }
  /**
   * Sets the depth buffer.
   *
   * @deprecated Use depthBuffer and depthPacking instead.
   * @param {Texture} buffer - The depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing strategy.
   */
  setDepthBuffer(n, e = 3200) {
    this.depthBuffer = n, this.depthPacking = e;
  }
  /**
   * Sets the shader data.
   *
   * @param {EffectShaderData} data - The shader data.
   * @return {EffectMaterial} This material.
   */
  setShaderData(n) {
    this.setShaderParts(n.shaderParts), this.setDefines(n.defines), this.setUniforms(n.uniforms), this.setExtensions(n.extensions);
  }
  /**
   * Sets the shader parts.
   *
   * @deprecated Use setShaderData instead.
   * @param {Map<String, String>} shaderParts - A collection of shader snippets. See {@link EffectShaderSection}.
   * @return {EffectMaterial} This material.
   */
  setShaderParts(n) {
    return this.fragmentShader = ld.replace(Ve.FRAGMENT_HEAD, n.get(Ve.FRAGMENT_HEAD) || "").replace(Ve.FRAGMENT_MAIN_UV, n.get(Ve.FRAGMENT_MAIN_UV) || "").replace(Ve.FRAGMENT_MAIN_IMAGE, n.get(Ve.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = fd.replace(Ve.VERTEX_HEAD, n.get(Ve.VERTEX_HEAD) || "").replace(Ve.VERTEX_MAIN_SUPPORT, n.get(Ve.VERTEX_MAIN_SUPPORT) || ""), this.fragmentShader = Gr(this.fragmentShader), this.needsUpdate = !0, this;
  }
  /**
   * Sets the shader macros.
   *
   * @deprecated Use setShaderData instead.
   * @param {Map<String, String>} defines - A collection of preprocessor macro definitions.
   * @return {EffectMaterial} This material.
   */
  setDefines(n) {
    for (const e of n.entries())
      this.defines[e[0]] = e[1];
    return this.needsUpdate = !0, this;
  }
  /**
   * Sets the shader uniforms.
   *
   * @deprecated Use setShaderData instead.
   * @param {Map<String, Uniform>} uniforms - A collection of uniforms.
   * @return {EffectMaterial} This material.
   */
  setUniforms(n) {
    for (const e of n.entries())
      this.uniforms[e[0]] = e[1];
    return this;
  }
  /**
   * Sets the required shader extensions.
   *
   * @deprecated Use setShaderData instead.
   * @param {Set<WebGLExtension>} extensions - A collection of extensions.
   * @return {EffectMaterial} This material.
   */
  setExtensions(n) {
    this.extensions = {};
    for (const e of n)
      this.extensions[e] = !0;
    return this;
  }
  /**
   * Indicates whether output encoding is enabled.
   *
   * @type {Boolean}
   */
  get encodeOutput() {
    return this.defines.ENCODE_OUTPUT !== void 0;
  }
  set encodeOutput(n) {
    this.encodeOutput !== n && (n ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = !0);
  }
  /**
   * Indicates whether output encoding is enabled.
   *
   * @deprecated Use encodeOutput instead.
   * @return {Boolean} Whether output encoding is enabled.
   */
  isOutputEncodingEnabled(n) {
    return this.encodeOutput;
  }
  /**
   * Enables or disables output encoding.
   *
   * @deprecated Use encodeOutput instead.
   * @param {Boolean} value - Whether output encoding should be enabled.
   */
  setOutputEncodingEnabled(n) {
    this.encodeOutput = n;
  }
  /**
   * The time in seconds.
   *
   * @type {Number}
   */
  get time() {
    return this.uniforms.time.value;
  }
  set time(n) {
    this.uniforms.time.value = n;
  }
  /**
   * Sets the delta time.
   *
   * @deprecated Use time instead.
   * @param {Number} value - The delta time in seconds.
   */
  setDeltaTime(n) {
    this.uniforms.time.value += n;
  }
  /**
   * Copies the settings of the given camera.
   *
   * @deprecated Use copyCameraSettings instead.
   * @param {Camera} camera - A camera.
   */
  adoptCameraSettings(n) {
    this.copyCameraSettings(n);
  }
  /**
   * Copies the settings of the given camera.
   *
   * @param {Camera} camera - A camera.
   */
  copyCameraSettings(n) {
    n && (this.uniforms.cameraNear.value = n.near, this.uniforms.cameraFar.value = n.far, n instanceof At ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0);
  }
  /**
   * Sets the resolution.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    const t = this.uniforms;
    t.resolution.value.set(n, e), t.texelSize.value.set(1 / n, 1 / e), t.aspect.value = n / e;
  }
  /**
   * An enumeration of shader code placeholders.
   *
   * @deprecated Use EffectShaderSection instead.
   * @type {Object}
   */
  static get Section() {
    return Ve;
  }
}, dd = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef MASK_PRECISION_HIGH
uniform mediump sampler2D maskTexture;
#else
uniform lowp sampler2D maskTexture;
#endif
#if MASK_FUNCTION != 0
uniform float strength;
#endif
varying vec2 vUv;void main(){
#if COLOR_CHANNEL == 0
float mask=texture2D(maskTexture,vUv).r;
#elif COLOR_CHANNEL == 1
float mask=texture2D(maskTexture,vUv).g;
#elif COLOR_CHANNEL == 2
float mask=texture2D(maskTexture,vUv).b;
#else
float mask=texture2D(maskTexture,vUv).a;
#endif
#if MASK_FUNCTION == 0
#ifdef INVERTED
mask=step(mask,0.0);
#else
mask=1.0-step(mask,0.0);
#endif
#else
mask=clamp(mask*strength,0.0,1.0);
#ifdef INVERTED
mask=1.0-mask;
#endif
#endif
#if MASK_FUNCTION == 3
vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=vec4(mask*texel.rgb,texel.a);
#elif MASK_FUNCTION == 2
gl_FragColor=vec4(mask*texture2D(inputBuffer,vUv).rgb,mask);
#else
gl_FragColor=mask*texture2D(inputBuffer,vUv);
#endif
}`, hd = class extends at {
  /**
   * Constructs a new mask material.
   *
   * @param {Texture} [maskTexture] - The mask texture.
   */
  constructor(n = null) {
    super({
      name: "MaskMaterial",
      uniforms: {
        maskTexture: new ye(n),
        inputBuffer: new ye(null),
        strength: new ye(1)
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      fragmentShader: dd,
      vertexShader: Yi
    }), this.colorChannel = xo.RED, this.maskFunction = yo.DISCARD;
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * The mask texture.
   *
   * @type {Texture}
   */
  set maskTexture(n) {
    this.uniforms.maskTexture.value = n, delete this.defines.MASK_PRECISION_HIGH, n.type !== 1009 && (this.defines.MASK_PRECISION_HIGH = "1"), this.needsUpdate = !0;
  }
  /**
   * Sets the mask texture.
   *
   * @deprecated Use maskTexture instead.
   * @param {Texture} value - The texture.
   */
  setMaskTexture(n) {
    this.maskTexture = n;
  }
  /**
   * Sets the color channel to use for masking. Default is `ColorChannel.RED`.
   *
   * @type {ColorChannel}
   */
  set colorChannel(n) {
    this.defines.COLOR_CHANNEL = n.toFixed(0), this.needsUpdate = !0;
  }
  /**
   * Sets the color channel to use for masking. Default is `ColorChannel.RED`.
   *
   * @deprecated Use colorChannel instead.
   * @param {ColorChannel} value - The channel.
   */
  setColorChannel(n) {
    this.colorChannel = n;
  }
  /**
   * The masking technique. Default is `MaskFunction.DISCARD`.
   *
   * @type {MaskFunction}
   */
  set maskFunction(n) {
    this.defines.MASK_FUNCTION = n.toFixed(0), this.needsUpdate = !0;
  }
  /**
   * Sets the masking technique. Default is `MaskFunction.DISCARD`.
   *
   * @deprecated Use maskFunction instead.
   * @param {MaskFunction} value - The function.
   */
  setMaskFunction(n) {
    this.maskFunction = n;
  }
  /**
   * Indicates whether the masking is inverted.
   *
   * @type {Boolean}
   */
  get inverted() {
    return this.defines.INVERTED !== void 0;
  }
  set inverted(n) {
    this.inverted && !n ? delete this.defines.INVERTED : n && (this.defines.INVERTED = "1"), this.needsUpdate = !0;
  }
  /**
   * Indicates whether the masking is inverted.
   *
   * @deprecated Use inverted instead.
   * @return {Boolean} Whether the masking is inverted.
   */
  isInverted() {
    return this.inverted;
  }
  /**
   * Determines whether the masking should be inverted.
   *
   * @deprecated Use inverted instead.
   * @param {Boolean} value - Whether the masking should be inverted.
   */
  setInverted(n) {
    this.inverted = n;
  }
  /**
   * The current mask strength.
   *
   * Individual mask values will be clamped to [0.0, 1.0]. Has no effect when the mask function is set to `DISCARD`.
   *
   * @type {Number}
   */
  get strength() {
    return this.uniforms.strength.value;
  }
  set strength(n) {
    this.uniforms.strength.value = n;
  }
  /**
   * Returns the current mask strength.
   *
   * @deprecated Use strength instead.
   * @return {Number} The mask strength.
   */
  getStrength() {
    return this.strength;
  }
  /**
   * Sets the mask strength.
   *
   * Has no effect when the mask function is set to `DISCARD`.
   *
   * @deprecated Use strength instead.
   * @param {Number} value - The mask strength.
   */
  setStrength(n) {
    this.strength = n;
  }
}, pd = "uniform lowp sampler2D inputBuffer;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 c0=texture2D(inputBuffer,vUv0).rg;vec2 c1=texture2D(inputBuffer,vUv1).rg;vec2 c2=texture2D(inputBuffer,vUv2).rg;vec2 c3=texture2D(inputBuffer,vUv3).rg;float d0=(c0.x-c1.x)*0.5;float d1=(c2.x-c3.x)*0.5;float d=length(vec2(d0,d1));float a0=min(c0.y,c1.y);float a1=min(c2.y,c3.y);float visibilityFactor=min(a0,a1);gl_FragColor.rg=(1.0-visibilityFactor>0.001)?vec2(d,0.0):vec2(0.0,d);}", gd = "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=vec2(uv.x+texelSize.x,uv.y);vUv1=vec2(uv.x-texelSize.x,uv.y);vUv2=vec2(uv.x,uv.y+texelSize.y);vUv3=vec2(uv.x,uv.y-texelSize.y);gl_Position=vec4(position.xy,1.0,1.0);}", md = class extends at {
  /**
   * Constructs a new outline material.
   *
   * TODO Remove texelSize param.
   * @param {Vector2} [texelSize] - The screen texel size.
   */
  constructor(n = new Te()) {
    super({
      name: "OutlineMaterial",
      uniforms: {
        inputBuffer: new ye(null),
        texelSize: new ye(new Te())
      },
      blending: 0,
      toneMapped: !1,
      depthWrite: !1,
      depthTest: !1,
      fragmentShader: pd,
      vertexShader: gd
    }), this.uniforms.texelSize.value.set(n.x, n.y), this.uniforms.maskTexture = this.uniforms.inputBuffer;
  }
  /**
   * The input buffer.
   *
   * @type {Texture}
   */
  set inputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Sets the input buffer.
   *
   * @deprecated Use inputBuffer instead.
   * @param {Texture} value - The input buffer.
   */
  setInputBuffer(n) {
    this.uniforms.inputBuffer.value = n;
  }
  /**
   * Sets the texel size.
   *
   * @deprecated Use setSize() instead.
   * @param {Number} x - The texel width.
   * @param {Number} y - The texel height.
   */
  setTexelSize(n, e) {
    this.uniforms.texelSize.value.set(n, e);
  }
  /**
   * Sets the size of this object.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    this.uniforms.texelSize.value.set(1 / n, 1 / e);
  }
}, vd = /* @__PURE__ */ new Ur(), hn = null;
function xd() {
  if (hn === null) {
    const n = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), e = new Float32Array([0, 0, 2, 0, 0, 2]);
    hn = new Lt(), hn.setAttribute !== void 0 ? (hn.setAttribute("position", new tt(n, 3)), hn.setAttribute("uv", new tt(e, 2))) : (hn.addAttribute("position", new tt(n, 3)), hn.addAttribute("uv", new tt(e, 2)));
  }
  return hn;
}
var $t = class Eo {
  /**
   * Constructs a new pass.
   *
   * @param {String} [name] - The name of this pass. Does not have to be unique.
   * @param {Scene} [scene] - The scene to render. The default scene contains a single mesh that fills the screen.
   * @param {Camera} [camera] - A camera. Fullscreen effect passes don't require a camera.
   */
  constructor(e = "Pass", t = new zr(), i = vd) {
    this.name = e, this.renderer = null, this.scene = t, this.camera = i, this.screen = null, this.rtt = !0, this.needsSwap = !0, this.needsDepthTexture = !1, this.enabled = !0;
  }
  /**
   * Sets the render to screen flag.
   *
   * If this flag is changed, the fullscreen material will be updated as well.
   *
   * @type {Boolean}
   */
  get renderToScreen() {
    return !this.rtt;
  }
  set renderToScreen(e) {
    if (this.rtt === e) {
      const t = this.fullscreenMaterial;
      t !== null && (t.needsUpdate = !0), this.rtt = !e;
    }
  }
  /**
   * Sets the main scene.
   *
   * @type {Scene}
   */
  set mainScene(e) {
  }
  /**
   * Sets the main camera.
   *
   * @type {Camera}
   */
  set mainCamera(e) {
  }
  /**
   * Sets the renderer
   *
   * @deprecated
   * @param {WebGLRenderer} renderer - The renderer.
   */
  setRenderer(e) {
    this.renderer = e;
  }
  /**
   * Indicates whether this pass is enabled.
   *
   * @deprecated Use enabled instead.
   * @return {Boolean} Whether this pass is enabled.
   */
  isEnabled() {
    return this.enabled;
  }
  /**
   * Enables or disables this pass.
   *
   * @deprecated Use enabled instead.
   * @param {Boolean} value - Whether the pass should be enabled.
   */
  setEnabled(e) {
    this.enabled = e;
  }
  /**
   * The fullscreen material.
   *
   * @type {Material}
   */
  get fullscreenMaterial() {
    return this.screen !== null ? this.screen.material : null;
  }
  set fullscreenMaterial(e) {
    let t = this.screen;
    t !== null ? t.material = e : (t = new jt(xd(), e), t.frustumCulled = !1, this.scene === null && (this.scene = new zr()), this.scene.add(t), this.screen = t);
  }
  /**
   * Returns the current fullscreen material.
   *
   * @deprecated Use fullscreenMaterial instead.
   * @return {Material} The current fullscreen material, or null if there is none.
   */
  getFullscreenMaterial() {
    return this.fullscreenMaterial;
  }
  /**
   * Sets the fullscreen material.
   *
   * @deprecated Use fullscreenMaterial instead.
   * @protected
   * @param {Material} value - A fullscreen material.
   */
  setFullscreenMaterial(e) {
    this.fullscreenMaterial = e;
  }
  /**
   * Returns the current depth texture.
   *
   * @return {Texture} The current depth texture, or null if there is none.
   */
  getDepthTexture() {
    return null;
  }
  /**
   * Sets the depth texture.
   *
   * This method will be called automatically by the {@link EffectComposer}.
   * You may override this method if your pass relies on the depth information of a preceding {@link RenderPass}.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategy} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(e, t = 3200) {
  }
  /**
   * Renders this pass.
   *
   * This is an abstract method that must be overridden.
   *
   * @abstract
   * @throws {Error} An error is thrown if the method is not overridden.
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(e, t, i, r, s) {
    throw new Error("Render method not implemented!");
  }
  /**
   * Sets the size.
   *
   * You may override this method if you want to be informed about the size of the backbuffer/canvas.
   * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(e, t) {
  }
  /**
   * Performs initialization tasks.
   *
   * This method is called when this pass is added to an {@link EffectComposer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(e, t, i) {
  }
  /**
   * Performs a shallow search for disposable properties and deletes them.
   *
   * The {@link EffectComposer} calls this method when it is being destroyed. You can use it independently to free
   * memory when you're certain that you don't need this pass anymore.
   */
  dispose() {
    for (const e of Object.keys(this)) {
      const t = this[e];
      (t instanceof wt || t instanceof Pn || t instanceof Mt || t instanceof Eo) && this[e].dispose();
    }
  }
}, _d = class extends $t {
  /**
   * Constructs a new save pass.
   *
   * @param {WebGLRenderTarget} [renderTarget] - A render target.
   * @param {Boolean} [autoResize=true] - Whether the render target size should be updated automatically.
   */
  constructor(n, e = !0) {
    super("CopyPass"), this.fullscreenMaterial = new wo(), this.needsSwap = !1, this.renderTarget = n, n === void 0 && (this.renderTarget = new wt(1, 1, {
      minFilter: 1006,
      magFilter: 1006,
      stencilBuffer: !1,
      depthBuffer: !1
    }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = e;
  }
  /**
   * Enables or disables auto resizing of the render target.
   *
   * @deprecated Use autoResize instead.
   * @type {Boolean}
   */
  get resize() {
    return this.autoResize;
  }
  set resize(n) {
    this.autoResize = n;
  }
  /**
   * The output texture.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the output texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.renderTarget.texture;
  }
  /**
   * Enables or disables auto resizing of the render target.
   *
   * @deprecated Use autoResize instead.
   * @param {Boolean} value - Whether the render target size should be updated automatically.
   */
  setAutoResizeEnabled(n) {
    this.autoResize = n;
  }
  /**
   * Saves the input buffer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    this.fullscreenMaterial.inputBuffer = e.texture, n.setRenderTarget(this.renderToScreen ? null : this.renderTarget), n.render(this.scene, this.camera);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    this.autoResize && this.renderTarget.setSize(n, e);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - A renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(n, e, t) {
    t !== void 0 && (this.renderTarget.texture.type = t, t !== 1009 ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : ii(n) === lt && Zt(this.renderTarget.texture, lt));
  }
}, yd = class extends $t {
  /**
   * Constructs a new clear mask pass.
   */
  constructor() {
    super("ClearMaskPass", null, null), this.needsSwap = !1;
  }
  /**
   * Disables the global stencil test.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    const s = n.state.buffers.stencil;
    s.setLocked(!1), s.setTest(!1);
  }
}, ks = /* @__PURE__ */ new ke(), Hr = class extends $t {
  /**
   * Constructs a new clear pass.
   *
   * @param {Boolean} [color=true] - Determines whether the color buffer should be cleared.
   * @param {Boolean} [depth=true] - Determines whether the depth buffer should be cleared.
   * @param {Boolean} [stencil=false] - Determines whether the stencil buffer should be cleared.
   */
  constructor(n = !0, e = !0, t = !1) {
    super("ClearPass", null, null), this.needsSwap = !1, this.color = n, this.depth = e, this.stencil = t, this.overrideClearColor = null, this.overrideClearAlpha = -1;
  }
  /**
   * Sets the clear flags.
   *
   * @param {Boolean} color - Whether the color buffer should be cleared.
   * @param {Boolean} depth - Whether the depth buffer should be cleared.
   * @param {Boolean} stencil - Whether the stencil buffer should be cleared.
   */
  setClearFlags(n, e, t) {
    this.color = n, this.depth = e, this.stencil = t;
  }
  /**
   * Returns the override clear color. Default is null.
   *
   * @deprecated Use overrideClearColor instead.
   * @return {Color} The clear color.
   */
  getOverrideClearColor() {
    return this.overrideClearColor;
  }
  /**
   * Sets the override clear color.
   *
   * @deprecated Use overrideClearColor instead.
   * @param {Color} value - The clear color.
   */
  setOverrideClearColor(n) {
    this.overrideClearColor = n;
  }
  /**
   * Returns the override clear alpha. Default is -1.
   *
   * @deprecated Use overrideClearAlpha instead.
   * @return {Number} The clear alpha.
   */
  getOverrideClearAlpha() {
    return this.overrideClearAlpha;
  }
  /**
   * Sets the override clear alpha.
   *
   * @deprecated Use overrideClearAlpha instead.
   * @param {Number} value - The clear alpha.
   */
  setOverrideClearAlpha(n) {
    this.overrideClearAlpha = n;
  }
  /**
   * Clears the input buffer or the screen.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    const s = this.overrideClearColor, a = this.overrideClearAlpha, o = n.getClearAlpha(), c = s !== null, l = a >= 0;
    c ? (n.getClearColor(ks), n.setClearColor(s, l ? a : o)) : l && n.setClearAlpha(a), n.setRenderTarget(this.renderToScreen ? null : e), n.clear(this.color, this.depth, this.stencil), c ? n.setClearColor(ks, o) : l && n.setClearAlpha(o);
  }
}, kr = class extends $t {
  /**
   * Constructs a new render pass.
   *
   * @param {Scene} scene - The scene to render.
   * @param {Camera} camera - The camera to use to render the scene.
   * @param {Material} [overrideMaterial=null] - An override material.
   */
  constructor(n, e, t = null) {
    super("RenderPass", n, e), this.needsSwap = !1, this.clearPass = new Hr(), this.overrideMaterialManager = t === null ? null : new Ws(t), this.ignoreBackground = !1, this.skipShadowMapUpdate = !1, this.selection = null;
  }
  set mainScene(n) {
    this.scene = n;
  }
  set mainCamera(n) {
    this.camera = n;
  }
  get renderToScreen() {
    return super.renderToScreen;
  }
  set renderToScreen(n) {
    super.renderToScreen = n, this.clearPass.renderToScreen = n;
  }
  /**
   * The current override material.
   *
   * @type {Material}
   */
  get overrideMaterial() {
    const n = this.overrideMaterialManager;
    return n !== null ? n.material : null;
  }
  set overrideMaterial(n) {
    const e = this.overrideMaterialManager;
    n !== null ? e !== null ? e.setMaterial(n) : this.overrideMaterialManager = new Ws(n) : e !== null && (e.dispose(), this.overrideMaterialManager = null);
  }
  /**
   * Returns the current override material.
   *
   * @deprecated Use overrideMaterial instead.
   * @return {Material} The material.
   */
  getOverrideMaterial() {
    return this.overrideMaterial;
  }
  /**
   * Sets the override material.
   *
   * @deprecated Use overrideMaterial instead.
   * @return {Material} value - The material.
   */
  setOverrideMaterial(n) {
    this.overrideMaterial = n;
  }
  /**
   * Indicates whether the target buffer should be cleared before rendering.
   *
   * @type {Boolean}
   * @deprecated Use clearPass.enabled instead.
   */
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(n) {
    this.clearPass.enabled = n;
  }
  /**
   * Returns the selection. Default is `null` (no restriction).
   *
   * @deprecated Use selection instead.
   * @return {Selection} The selection.
   */
  getSelection() {
    return this.selection;
  }
  /**
   * Sets the selection. Set to `null` to disable.
   *
   * @deprecated Use selection instead.
   * @param {Selection} value - The selection.
   */
  setSelection(n) {
    this.selection = n;
  }
  /**
   * Indicates whether the scene background is disabled.
   *
   * @deprecated Use ignoreBackground instead.
   * @return {Boolean} Whether the scene background is disabled.
   */
  isBackgroundDisabled() {
    return this.ignoreBackground;
  }
  /**
   * Enables or disables the scene background.
   *
   * @deprecated Use ignoreBackground instead.
   * @param {Boolean} value - Whether the scene background should be disabled.
   */
  setBackgroundDisabled(n) {
    this.ignoreBackground = n;
  }
  /**
   * Indicates whether the shadow map auto update is disabled.
   *
   * @deprecated Use skipShadowMapUpdate instead.
   * @return {Boolean} Whether the shadow map update is disabled.
   */
  isShadowMapDisabled() {
    return this.skipShadowMapUpdate;
  }
  /**
   * Enables or disables the shadow map auto update.
   *
   * @deprecated Use skipShadowMapUpdate instead.
   * @param {Boolean} value - Whether the shadow map auto update should be disabled.
   */
  setShadowMapDisabled(n) {
    this.skipShadowMapUpdate = n;
  }
  /**
   * Returns the clear pass.
   *
   * @deprecated Use clearPass.enabled instead.
   * @return {ClearPass} The clear pass.
   */
  getClearPass() {
    return this.clearPass;
  }
  /**
   * Renders the scene.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    const s = this.scene, a = this.camera, o = this.selection, c = a.layers.mask, l = s.background, f = n.shadowMap.autoUpdate, d = this.renderToScreen ? null : e;
    o !== null && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (n.shadowMap.autoUpdate = !1), (this.ignoreBackground || this.clearPass.overrideClearColor !== null) && (s.background = null), this.clearPass.enabled && this.clearPass.render(n, e), n.setRenderTarget(d), this.overrideMaterialManager !== null ? this.overrideMaterialManager.render(n, s, a) : n.render(s, a), a.layers.mask = c, s.background = l, n.shadowMap.autoUpdate = f;
  }
}, Sd = class extends $t {
  /**
   * Constructs a new depth pass.
   *
   * @param {Scene} scene - The scene to render.
   * @param {Camera} camera - The camera to use to render the scene.
   * @param {Object} [options] - The options.
   * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
   * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor(n, e, {
    renderTarget: t,
    resolutionScale: i = 1,
    width: r = Ht.AUTO_SIZE,
    height: s = Ht.AUTO_SIZE,
    resolutionX: a = r,
    resolutionY: o = s
  } = {}) {
    super("DepthPass"), this.needsSwap = !1, this.renderPass = new kr(n, e, new mo({
      depthPacking: 3201
    }));
    const c = this.renderPass;
    c.skipShadowMapUpdate = !0, c.ignoreBackground = !0;
    const l = c.clearPass;
    l.overrideClearColor = new ke(16777215), l.overrideClearAlpha = 1, this.renderTarget = t, this.renderTarget === void 0 && (this.renderTarget = new wt(1, 1, {
      minFilter: 1003,
      magFilter: 1003
    }), this.renderTarget.texture.name = "DepthPass.Target");
    const f = this.resolution = new Ht(this, a, o, i);
    f.addEventListener("change", (d) => this.setSize(f.baseWidth, f.baseHeight));
  }
  set mainScene(n) {
    this.renderPass.mainScene = n;
  }
  set mainCamera(n) {
    this.renderPass.mainCamera = n;
  }
  /**
   * The depth texture.
   *
   * @type {Texture}
   */
  get texture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the depth texture.
   *
   * @deprecated Use texture instead.
   * @return {Texture} The texture.
   */
  getTexture() {
    return this.renderTarget.texture;
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution instead.
   */
  setResolutionScale(n) {
    this.resolution.scale = n;
  }
  /**
   * Renders the scene depth.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    const s = this.renderToScreen ? null : this.renderTarget;
    this.renderPass.render(n, s);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e), this.renderTarget.setSize(t.width, t.height);
  }
};
function Vs(n, e, t) {
  for (const i of e) {
    const r = "$1" + n + i.charAt(0).toUpperCase() + i.slice(1), s = new RegExp("([^\\.])(\\b" + i + "\\b)", "g");
    for (const a of t.entries())
      a[1] !== null && t.set(a[0], a[1].replace(s, r));
  }
}
function Md(n, e, t) {
  let i = e.getFragmentShader(), r = e.getVertexShader();
  const s = i !== void 0 && /mainImage/.test(i), a = i !== void 0 && /mainUv/.test(i);
  if (t.attributes |= e.getAttributes(), i === void 0)
    throw new Error(`Missing fragment shader (${e.name})`);
  if (a && t.attributes & vn.CONVOLUTION)
    throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);
  if (!s && !a)
    throw new Error(`Could not find mainImage or mainUv function (${e.name})`);
  {
    const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g, c = t.shaderParts;
    let l = c.get(Ve.FRAGMENT_HEAD) || "", f = c.get(Ve.FRAGMENT_MAIN_UV) || "", d = c.get(Ve.FRAGMENT_MAIN_IMAGE) || "", h = c.get(Ve.VERTEX_HEAD) || "", g = c.get(Ve.VERTEX_MAIN_SUPPORT) || "";
    const v = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
    if (a && (f += `	${n}MainUv(UV);
`, t.uvTransformation = !0), r !== null && /mainSupport/.test(r)) {
      const w = /mainSupport *\([\w\s]*?uv\s*?\)/.test(r);
      g += `	${n}MainSupport(`, g += w ? `vUv);
` : `);
`;
      for (const _ of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))
        for (const b of _[1].split(/\s*,\s*/))
          t.varyings.add(b), v.add(b), y.add(b);
      for (const _ of r.matchAll(o))
        y.add(_[1]);
    }
    for (const w of i.matchAll(o))
      y.add(w[1]);
    for (const w of e.defines.keys())
      y.add(w.replace(/\([\w\s,]*\)/g, ""));
    for (const w of e.uniforms.keys())
      y.add(w);
    y.delete("while"), y.delete("for"), y.delete("if"), e.uniforms.forEach((w, _) => t.uniforms.set(n + _.charAt(0).toUpperCase() + _.slice(1), w)), e.defines.forEach((w, _) => t.defines.set(n + _.charAt(0).toUpperCase() + _.slice(1), w));
    const p = /* @__PURE__ */ new Map([["fragment", i], ["vertex", r]]);
    Vs(n, y, t.defines), Vs(n, y, p), i = p.get("fragment"), r = p.get("vertex");
    const u = e.blendMode;
    if (t.blendModes.set(u.blendFunction, u), s) {
      e.inputColorSpace !== null && e.inputColorSpace !== t.colorSpace && (d += e.inputColorSpace === lt ? `color0 = LinearTosRGB(color0);
	` : `color0 = sRGBToLinear(color0);
	`), e.outputColorSpace !== _o ? t.colorSpace = e.outputColorSpace : e.inputColorSpace !== null && (t.colorSpace = e.inputColorSpace);
      const w = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      d += `${n}MainImage(color0, UV, `, t.attributes & vn.DEPTH && w.test(i) && (d += "depth, ", t.readDepth = !0), d += `color1);
	`;
      const _ = n + "BlendOpacity";
      t.uniforms.set(_, u.opacity), d += `color0 = blend${u.blendFunction}(color0, color1, ${_});

	`, l += `uniform float ${_};

`;
    }
    if (l += i + `
`, r !== null && (h += r + `
`), c.set(Ve.FRAGMENT_HEAD, l), c.set(Ve.FRAGMENT_MAIN_UV, f), c.set(Ve.FRAGMENT_MAIN_IMAGE, d), c.set(Ve.VERTEX_HEAD, h), c.set(Ve.VERTEX_MAIN_SUPPORT, g), e.extensions !== null)
      for (const w of e.extensions)
        t.extensions.add(w);
  }
}
var wd = class extends $t {
  /**
   * Constructs a new effect pass.
   *
   * @param {Camera} camera - The main camera.
   * @param {...Effect} effects - The effects that will be rendered by this pass.
   */
  constructor(n, ...e) {
    super("EffectPass"), this.fullscreenMaterial = new ud(null, null, null, n), this.listener = (t) => this.handleEvent(t), this.effects = [], this.setEffects(e), this.skipRendering = !1, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1;
  }
  set mainScene(n) {
    for (const e of this.effects)
      e.mainScene = n;
  }
  set mainCamera(n) {
    this.fullscreenMaterial.copyCameraSettings(n);
    for (const e of this.effects)
      e.mainCamera = n;
  }
  /**
   * Indicates whether this pass encodes its output when rendering to screen.
   *
   * @type {Boolean}
   * @deprecated Use fullscreenMaterial.encodeOutput instead.
   */
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput;
  }
  set encodeOutput(n) {
    this.fullscreenMaterial.encodeOutput = n;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   */
  get dithering() {
    return this.fullscreenMaterial.dithering;
  }
  set dithering(n) {
    const e = this.fullscreenMaterial;
    e.dithering = n, e.needsUpdate = !0;
  }
  /**
   * Sets the effects.
   *
   * @param {Effect[]} effects - The effects.
   * @protected
   */
  setEffects(n) {
    for (const e of this.effects)
      e.removeEventListener("change", this.listener);
    this.effects = n.sort((e, t) => t.attributes - e.attributes);
    for (const e of this.effects)
      e.addEventListener("change", this.listener);
  }
  /**
   * Updates the compound shader material.
   *
   * @protected
   */
  updateMaterial() {
    const n = new Ad();
    let e = 0;
    for (const a of this.effects)
      if (a.blendMode.blendFunction === Oe.DST)
        n.attributes |= a.getAttributes() & vn.DEPTH;
      else {
        if (n.attributes & a.getAttributes() & vn.CONVOLUTION)
          throw new Error(`Convolution effects cannot be merged (${a.name})`);
        Md("e" + e++, a, n);
      }
    let t = n.shaderParts.get(Ve.FRAGMENT_HEAD), i = n.shaderParts.get(Ve.FRAGMENT_MAIN_IMAGE), r = n.shaderParts.get(Ve.FRAGMENT_MAIN_UV);
    const s = /\bblend\b/g;
    for (const a of n.blendModes.values())
      t += a.getShaderCode().replace(s, `blend${a.blendFunction}`) + `
`;
    n.attributes & vn.DEPTH ? (n.readDepth && (i = `float depth = readDepth(UV);

	` + i), this.needsDepthTexture = this.getDepthTexture() === null) : this.needsDepthTexture = !1, n.colorSpace === lt && (i += `color0 = sRGBToLinear(color0);
	`), n.uvTransformation ? (r = `vec2 transformedUv = vUv;
` + r, n.defines.set("UV", "transformedUv")) : n.defines.set("UV", "vUv"), n.shaderParts.set(Ve.FRAGMENT_HEAD, t), n.shaderParts.set(Ve.FRAGMENT_MAIN_IMAGE, i), n.shaderParts.set(Ve.FRAGMENT_MAIN_UV, r);
    for (const [a, o] of n.shaderParts)
      o !== null && n.shaderParts.set(a, o.trim().replace(/^#/, `
#`));
    this.skipRendering = e === 0, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(n);
  }
  /**
   * Rebuilds the shader material.
   */
  recompile() {
    this.updateMaterial();
  }
  /**
   * Returns the current depth texture.
   *
   * @return {Texture} The current depth texture, or null if there is none.
   */
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  /**
   * Sets the depth texture.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(n, e = 3200) {
    this.fullscreenMaterial.depthBuffer = n, this.fullscreenMaterial.depthPacking = e;
    for (const t of this.effects)
      t.setDepthTexture(n, e);
  }
  /**
   * Renders the effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    for (const s of this.effects)
      s.update(n, e, i);
    if (!this.skipRendering || this.renderToScreen) {
      const s = this.fullscreenMaterial;
      s.inputBuffer = e.texture, s.time += i * this.timeScale, n.setRenderTarget(this.renderToScreen ? null : t), n.render(this.scene, this.camera);
    }
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    this.fullscreenMaterial.setSize(n, e);
    for (const t of this.effects)
      t.setSize(n, e);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(n, e, t) {
    this.renderer = n;
    for (const i of this.effects)
      i.initialize(n, e, t);
    this.updateMaterial(), t !== void 0 && t !== 1009 && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
  /**
   * Deletes disposable objects.
   */
  dispose() {
    super.dispose();
    for (const n of this.effects)
      n.removeEventListener("change", this.listener), n.dispose();
  }
  /**
   * Handles events.
   *
   * @param {Event} event - An event.
   */
  handleEvent(n) {
    switch (n.type) {
      case "change":
        this.recompile();
        break;
    }
  }
}, To = class extends $t {
  /**
   * Constructs a new Kawase blur pass.
   *
   * @param {Object} [options] - The options.
   * @param {KernelSize} [options.kernelSize=KernelSize.MEDIUM] - The blur kernel size.
   * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor({
    kernelSize: n = Zi.MEDIUM,
    resolutionScale: e = 0.5,
    width: t = Ht.AUTO_SIZE,
    height: i = Ht.AUTO_SIZE,
    resolutionX: r = t,
    resolutionY: s = i
  } = {}) {
    super("KawaseBlurPass"), this.renderTargetA = new wt(1, 1, { depthBuffer: !1 }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
    const a = this.resolution = new Ht(this, r, s, e);
    a.addEventListener("change", (o) => this.setSize(a.baseWidth, a.baseHeight)), this._blurMaterial = new rd(), this._blurMaterial.kernelSize = n, this.copyMaterial = new wo();
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * The blur material.
   *
   * @type {KawaseBlurMaterial}
   */
  get blurMaterial() {
    return this._blurMaterial;
  }
  /**
   * The blur material.
   *
   * @type {KawaseBlurMaterial}
   * @protected
   */
  set blurMaterial(n) {
    this._blurMaterial = n;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   * @deprecated Use copyMaterial.dithering instead.
   */
  get dithering() {
    return this.copyMaterial.dithering;
  }
  set dithering(n) {
    this.copyMaterial.dithering = n;
  }
  /**
   * The kernel size.
   *
   * @type {KernelSize}
   * @deprecated Use blurMaterial.kernelSize instead.
   */
  get kernelSize() {
    return this.blurMaterial.kernelSize;
  }
  set kernelSize(n) {
    this.blurMaterial.kernelSize = n;
  }
  /**
   * The current width of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.width instead.
   */
  get width() {
    return this.resolution.width;
  }
  /**
   * Sets the render width.
   *
   * @type {Number}
   * @deprecated Use resolution.preferredWidth instead.
   */
  set width(n) {
    this.resolution.preferredWidth = n;
  }
  /**
   * The current height of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.height instead.
   */
  get height() {
    return this.resolution.height;
  }
  /**
   * Sets the render height.
   *
   * @type {Number}
   * @deprecated Use resolution.preferredHeight instead.
   */
  set height(n) {
    this.resolution.preferredHeight = n;
  }
  /**
   * The current blur scale.
   *
   * @type {Number}
   * @deprecated Use blurMaterial.scale instead.
   */
  get scale() {
    return this.blurMaterial.scale;
  }
  set scale(n) {
    this.blurMaterial.scale = n;
  }
  /**
   * Returns the current blur scale.
   *
   * @deprecated Use blurMaterial.scale instead.
   * @return {Number} The scale.
   */
  getScale() {
    return this.blurMaterial.scale;
  }
  /**
   * Sets the blur scale.
   *
   * @deprecated Use blurMaterial.scale instead.
   * @param {Number} value - The scale.
   */
  setScale(n) {
    this.blurMaterial.scale = n;
  }
  /**
   * Returns the kernel size.
   *
   * @deprecated Use blurMaterial.kernelSize instead.
   * @return {KernelSize} The kernel size.
   */
  getKernelSize() {
    return this.kernelSize;
  }
  /**
   * Sets the kernel size.
   *
   * Larger kernels require more processing power but scale well with larger render resolutions.
   *
   * @deprecated Use blurMaterial.kernelSize instead.
   * @param {KernelSize} value - The kernel size.
   */
  setKernelSize(n) {
    this.kernelSize = n;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution instead.
   */
  setResolutionScale(n) {
    this.resolution.scale = n;
  }
  /**
   * Renders the blur.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    const s = this.scene, a = this.camera, o = this.renderTargetA, c = this.renderTargetB, l = this.blurMaterial, f = l.kernelSequence;
    let d = e;
    this.fullscreenMaterial = l;
    for (let h = 0, g = f.length; h < g; ++h) {
      const v = h & 1 ? c : o;
      l.kernel = f[h], l.inputBuffer = d.texture, n.setRenderTarget(v), n.render(s, a), d = v;
    }
    this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = d.texture, n.setRenderTarget(this.renderToScreen ? null : t), n.render(s, a);
  }
  /**
   * Updates the size of this pass.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e);
    const i = t.width, r = t.height;
    this.renderTargetA.setSize(i, r), this.renderTargetB.setSize(i, r), this.blurMaterial.setSize(n, e);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(n, e, t) {
    t !== void 0 && (this.renderTargetA.texture.type = t, this.renderTargetB.texture.type = t, t !== 1009 ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : ii(n) === lt && (Zt(this.renderTargetA.texture, lt), Zt(this.renderTargetB.texture, lt)));
  }
  /**
   * An auto sizing flag.
   *
   * @type {Number}
   * @deprecated Use {@link Resolution.AUTO_SIZE} instead.
   */
  static get AUTO_SIZE() {
    return Ht.AUTO_SIZE;
  }
}, Ed = class extends $t {
  /**
   * Constructs a new mask pass.
   *
   * @param {Scene} scene - The scene to render.
   * @param {Camera} camera - The camera to use.
   */
  constructor(n, e) {
    super("MaskPass", n, e), this.needsSwap = !1, this.clearPass = new Hr(!1, !1, !0), this.inverse = !1;
  }
  set mainScene(n) {
    this.scene = n;
  }
  set mainCamera(n) {
    this.camera = n;
  }
  /**
   * Indicates whether the mask should be inverted.
   *
   * @type {Boolean}
   */
  get inverted() {
    return this.inverse;
  }
  set inverted(n) {
    this.inverse = n;
  }
  /**
   * Indicates whether this pass should clear the stencil buffer.
   *
   * @type {Boolean}
   * @deprecated Use clearPass.enabled instead.
   */
  get clear() {
    return this.clearPass.enabled;
  }
  set clear(n) {
    this.clearPass.enabled = n;
  }
  /**
   * Returns the internal clear pass.
   *
   * @deprecated Use clearPass.enabled instead.
   * @return {ClearPass} The clear pass.
   */
  getClearPass() {
    return this.clearPass;
  }
  /**
   * Indicates whether the mask is inverted.
   *
   * @deprecated Use inverted instead.
   * @return {Boolean} Whether the mask is inverted.
   */
  isInverted() {
    return this.inverted;
  }
  /**
   * Enables or disable mask inversion.
   *
   * @deprecated Use inverted instead.
   * @param {Boolean} value - Whether the mask should be inverted.
   */
  setInverted(n) {
    this.inverted = n;
  }
  /**
   * Renders the effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    const s = n.getContext(), a = n.state.buffers, o = this.scene, c = this.camera, l = this.clearPass, f = this.inverted ? 0 : 1, d = 1 - f;
    a.color.setMask(!1), a.depth.setMask(!1), a.color.setLocked(!0), a.depth.setLocked(!0), a.stencil.setTest(!0), a.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), a.stencil.setFunc(s.ALWAYS, f, 4294967295), a.stencil.setClear(d), a.stencil.setLocked(!0), this.clearPass.enabled && (this.renderToScreen ? l.render(n, null) : (l.render(n, e), l.render(n, t))), this.renderToScreen ? (n.setRenderTarget(null), n.render(o, c)) : (n.setRenderTarget(e), n.render(o, c), n.setRenderTarget(t), n.render(o, c)), a.color.setLocked(!1), a.depth.setLocked(!1), a.stencil.setLocked(!1), a.stencil.setFunc(s.EQUAL, 1, 4294967295), a.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), a.stencil.setLocked(!0);
  }
}, Tn = class extends $t {
  /**
   * Constructs a new shader pass.
   *
   * @param {ShaderMaterial} material - A shader material.
   * @param {String} [input="inputBuffer"] - The name of the input buffer uniform.
   */
  constructor(n, e = "inputBuffer") {
    super("ShaderPass"), this.fullscreenMaterial = n, this.input = e;
  }
  /**
   * Sets the name of the input buffer uniform.
   *
   * @param {String} input - The name of the input buffer uniform.
   * @deprecated Use input instead.
   */
  setInput(n) {
    this.input = n;
  }
  /**
   * Renders the effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
   */
  render(n, e, t, i, r) {
    const s = this.fullscreenMaterial.uniforms;
    e !== null && s !== void 0 && s[this.input] !== void 0 && (s[this.input].value = e.texture), n.setRenderTarget(this.renderToScreen ? null : t), n.render(this.scene, this.camera);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - A renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(n, e, t) {
    t !== void 0 && t !== 1009 && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
  }
}, Tr = 1 / 1e3, Td = 1e3, bd = class {
  /**
   * Constructs a new timer.
   */
  constructor() {
    this.startTime = performance.now(), this.previousTime = 0, this.currentTime = 0, this._delta = 0, this._elapsed = 0, this._fixedDelta = 1e3 / 60, this.timescale = 1, this.useFixedDelta = !1, this._autoReset = !1;
  }
  /**
   * Enables or disables auto reset based on page visibility.
   *
   * If enabled, the timer will be reset when the page becomes visible. This effectively pauses the timer when the page
   * is hidden. Has no effect if the API is not supported.
   *
   * @type {Boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
   */
  get autoReset() {
    return this._autoReset;
  }
  set autoReset(n) {
    typeof document < "u" && document.hidden !== void 0 && (n ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this._autoReset = n);
  }
  get delta() {
    return this._delta * Tr;
  }
  get fixedDelta() {
    return this._fixedDelta * Tr;
  }
  set fixedDelta(n) {
    this._fixedDelta = n * Td;
  }
  get elapsed() {
    return this._elapsed * Tr;
  }
  /**
   * Updates this timer.
   *
   * @param {Boolean} [timestamp] - The current time in milliseconds.
   */
  update(n) {
    this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = (n !== void 0 ? n : performance.now()) - this.startTime, this._delta = this.currentTime - this.previousTime), this._delta *= this.timescale, this._elapsed += this._delta;
  }
  /**
   * Resets this timer.
   */
  reset() {
    this._delta = 0, this._elapsed = 0, this.currentTime = performance.now() - this.startTime;
  }
  handleEvent(n) {
    document.hidden || (this.currentTime = performance.now() - this.startTime);
  }
  dispose() {
    this.autoReset = !1;
  }
}, Pd = class {
  /**
   * Constructs a new effect composer.
   *
   * @param {WebGLRenderer} renderer - The renderer that should be used.
   * @param {Object} [options] - The options.
   * @param {Boolean} [options.depthBuffer=true] - Whether the main render targets should have a depth buffer.
   * @param {Boolean} [options.stencilBuffer=false] - Whether the main render targets should have a stencil buffer.
   * @param {Boolean} [options.alpha] - Deprecated. Buffers are always RGBA since three r137.
   * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
   * @param {Number} [options.frameBufferType] - The type of the internal frame buffers. It's recommended to use HalfFloatType if possible.
   */
  constructor(n = null, {
    depthBuffer: e = !0,
    stencilBuffer: t = !1,
    multisampling: i = 0,
    frameBufferType: r
  } = {}) {
    this.renderer = null, this.inputBuffer = this.createBuffer(e, t, r, i), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new _d(), this.depthTexture = null, this.passes = [], this.timer = new bd(), this.autoRenderToScreen = !0, this.setRenderer(n);
  }
  /**
   * The current amount of samples used for multisample anti-aliasing.
   *
   * @type {Number}
   */
  get multisampling() {
    return this.inputBuffer.samples || 0;
  }
  /**
   * Sets the amount of MSAA samples.
   *
   * Requires WebGL 2. Set to zero to disable multisampling.
   *
   * @type {Number}
   */
  set multisampling(n) {
    const e = this.inputBuffer, t = this.multisampling;
    t > 0 && n > 0 ? (this.inputBuffer.samples = n, this.outputBuffer.samples = n, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : t !== n && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(
      e.depthBuffer,
      e.stencilBuffer,
      e.texture.type,
      n
    ), this.inputBuffer.depthTexture = this.depthTexture, this.outputBuffer = this.inputBuffer.clone());
  }
  /**
   * Returns the internal timer.
   *
   * @return {Timer} The timer.
   */
  getTimer() {
    return this.timer;
  }
  /**
   * Returns the renderer.
   *
   * @return {WebGLRenderer} The renderer.
   */
  getRenderer() {
    return this.renderer;
  }
  /**
   * Sets the renderer.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   */
  setRenderer(n) {
    if (this.renderer = n, n !== null) {
      const e = n.getSize(new Te()), t = n.getContext().getContextAttributes().alpha, i = this.inputBuffer.texture.type;
      i === 1009 && ii(n) === lt && (Zt(this.inputBuffer.texture, lt), Zt(this.outputBuffer.texture, lt), this.inputBuffer.dispose(), this.outputBuffer.dispose()), n.autoClear = !1, this.setSize(e.width, e.height);
      for (const r of this.passes)
        r.initialize(n, t, i);
    }
  }
  /**
   * Replaces the current renderer with the given one.
   *
   * The auto clear mechanism of the provided renderer will be disabled. If the new render size differs from the
   * previous one, all passes will be updated.
   *
   * By default, the DOM element of the current renderer will automatically be removed from its parent node and the DOM
   * element of the new renderer will take its place.
   *
   * @deprecated Use setRenderer instead.
   * @param {WebGLRenderer} renderer - The new renderer.
   * @param {Boolean} updateDOM - Indicates whether the old canvas should be replaced by the new one in the DOM.
   * @return {WebGLRenderer} The old renderer.
   */
  replaceRenderer(n, e = !0) {
    const t = this.renderer, i = t.domElement.parentNode;
    return this.setRenderer(n), e && i !== null && (i.removeChild(t.domElement), i.appendChild(n.domElement)), t;
  }
  /**
   * Creates a depth texture attachment that will be provided to all passes.
   *
   * Note: When a shader reads from a depth texture and writes to a render target that uses the same depth texture
   * attachment, the depth information will be lost. This happens even if `depthWrite` is disabled.
   *
   * @private
   * @return {DepthTexture} The depth texture.
   */
  createDepthTexture() {
    const n = this.depthTexture = new Br();
    return this.inputBuffer.depthTexture = n, this.inputBuffer.dispose(), this.inputBuffer.stencilBuffer ? (n.format = 1027, n.type = 1020) : n.type = 1014, n;
  }
  /**
   * Deletes the current depth texture.
   *
   * @private
   */
  deleteDepthTexture() {
    if (this.depthTexture !== null) {
      this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.inputBuffer.dispose();
      for (const n of this.passes)
        n.setDepthTexture(null);
    }
  }
  /**
   * Creates a new render target.
   *
   * @deprecated Create buffers manually via WebGLRenderTarget instead.
   * @param {Boolean} depthBuffer - Whether the render target should have a depth buffer.
   * @param {Boolean} stencilBuffer - Whether the render target should have a stencil buffer.
   * @param {Number} type - The frame buffer type.
   * @param {Number} multisampling - The number of samples to use for antialiasing.
   * @return {WebGLRenderTarget} A new render target that equals the renderer's canvas.
   */
  createBuffer(n, e, t, i) {
    const r = this.renderer, s = r === null ? new Te() : r.getDrawingBufferSize(new Te()), a = {
      minFilter: 1006,
      magFilter: 1006,
      stencilBuffer: e,
      depthBuffer: n,
      type: t
    }, o = new wt(s.width, s.height, a);
    return i > 0 && (o.ignoreDepthForMultisampleCopy = !1, o.samples = i), t === 1009 && ii(r) === lt && Zt(o.texture, lt), o.texture.name = "EffectComposer.Buffer", o.texture.generateMipmaps = !1, o;
  }
  /**
   * Can be used to change the main scene for all registered passes and effects.
   *
   * @param {Scene} scene - The scene.
   */
  setMainScene(n) {
    for (const e of this.passes)
      e.mainScene = n;
  }
  /**
   * Can be used to change the main camera for all registered passes and effects.
   *
   * @param {Camera} camera - The camera.
   */
  setMainCamera(n) {
    for (const e of this.passes)
      e.mainCamera = n;
  }
  /**
   * Adds a pass, optionally at a specific index.
   *
   * @param {Pass} pass - A new pass.
   * @param {Number} [index] - An index at which the pass should be inserted.
   */
  addPass(n, e) {
    const t = this.passes, i = this.renderer, r = i.getDrawingBufferSize(new Te()), s = i.getContext().getContextAttributes().alpha, a = this.inputBuffer.texture.type;
    if (n.setRenderer(i), n.setSize(r.width, r.height), n.initialize(i, s, a), this.autoRenderToScreen && (t.length > 0 && (t[t.length - 1].renderToScreen = !1), n.renderToScreen && (this.autoRenderToScreen = !1)), e !== void 0 ? t.splice(e, 0, n) : t.push(n), this.autoRenderToScreen && (t[t.length - 1].renderToScreen = !0), n.needsDepthTexture || this.depthTexture !== null)
      if (this.depthTexture === null) {
        const o = this.createDepthTexture();
        for (n of t)
          n.setDepthTexture(o);
      } else
        n.setDepthTexture(this.depthTexture);
  }
  /**
   * Removes a pass.
   *
   * @param {Pass} pass - The pass.
   */
  removePass(n) {
    const e = this.passes, t = e.indexOf(n);
    if (t !== -1 && e.splice(t, 1).length > 0) {
      if (this.depthTexture !== null) {
        const s = (o, c) => o || c.needsDepthTexture;
        e.reduce(s, !1) || (n.getDepthTexture() === this.depthTexture && n.setDepthTexture(null), this.deleteDepthTexture());
      }
      this.autoRenderToScreen && t === e.length && (n.renderToScreen = !1, e.length > 0 && (e[e.length - 1].renderToScreen = !0));
    }
  }
  /**
   * Removes all passes.
   */
  removeAllPasses() {
    const n = this.passes;
    this.deleteDepthTexture(), n.length > 0 && (this.autoRenderToScreen && (n[n.length - 1].renderToScreen = !1), this.passes = []);
  }
  /**
   * Renders all enabled passes in the order in which they were added.
   *
   * @param {Number} [deltaTime] - The time since the last frame in seconds.
   */
  render(n) {
    const e = this.renderer, t = this.copyPass;
    let i = this.inputBuffer, r = this.outputBuffer, s = !1, a, o, c;
    n === void 0 && (this.timer.update(), n = this.timer.delta);
    for (const l of this.passes)
      l.enabled && (l.render(e, i, r, n, s), l.needsSwap && (s && (t.renderToScreen = l.renderToScreen, a = e.getContext(), o = e.state.buffers.stencil, o.setFunc(a.NOTEQUAL, 1, 4294967295), t.render(e, i, r, n, s), o.setFunc(a.EQUAL, 1, 4294967295)), c = i, i = r, r = c), l instanceof Ed ? s = !0 : l instanceof yd && (s = !1));
  }
  /**
   * Sets the size of the buffers, passes and the renderer.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   * @param {Boolean} [updateStyle] - Determines whether the style of the canvas should be updated.
   */
  setSize(n, e, t) {
    const i = this.renderer, r = i.getSize(new Te());
    (n === void 0 || e === void 0) && (n = r.width, e = r.height), (r.width !== n || r.height !== e) && i.setSize(n, e, t);
    const s = i.getDrawingBufferSize(new Te());
    this.inputBuffer.setSize(s.width, s.height), this.outputBuffer.setSize(s.width, s.height);
    for (const a of this.passes)
      a.setSize(s.width, s.height);
  }
  /**
   * Resets this composer by deleting all passes and creating new buffers.
   */
  reset() {
    const n = this.timer.autoReset;
    this.dispose(), this.autoRenderToScreen = !0, this.timer.autoReset = n;
  }
  /**
   * Disposes this composer and all passes.
   */
  dispose() {
    for (const n of this.passes)
      n.dispose();
    this.passes = [], this.inputBuffer !== null && this.inputBuffer.dispose(), this.outputBuffer !== null && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose();
  }
}, Ad = class {
  /**
   * Constructs new shader data.
   */
  constructor() {
    this.shaderParts = /* @__PURE__ */ new Map([
      [Ve.FRAGMENT_HEAD, null],
      [Ve.FRAGMENT_MAIN_UV, null],
      [Ve.FRAGMENT_MAIN_IMAGE, null],
      [Ve.VERTEX_HEAD, null],
      [Ve.VERTEX_MAIN_SUPPORT, null]
    ]), this.defines = /* @__PURE__ */ new Map(), this.uniforms = /* @__PURE__ */ new Map(), this.blendModes = /* @__PURE__ */ new Map(), this.extensions = /* @__PURE__ */ new Set(), this.attributes = vn.NONE, this.varyings = /* @__PURE__ */ new Set(), this.uvTransformation = !1, this.readDepth = !1, this.colorSpace = ji;
  }
}, br = !1, Ws = class {
  /**
   * Constructs a new override material manager.
   *
   * @param {Material} [material=null] - An override material.
   */
  constructor(n = null) {
    this.originalMaterials = /* @__PURE__ */ new Map(), this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(n), this.meshCount = 0, this.replaceMaterial = (e) => {
      if (e.isMesh) {
        let t;
        if (e.material.flatShading)
          switch (e.material.side) {
            case 2:
              t = this.materialsFlatShadedDoubleSide;
              break;
            case 1:
              t = this.materialsFlatShadedBackSide;
              break;
            default:
              t = this.materialsFlatShaded;
              break;
          }
        else
          switch (e.material.side) {
            case 2:
              t = this.materialsDoubleSide;
              break;
            case 1:
              t = this.materialsBackSide;
              break;
            default:
              t = this.materials;
              break;
          }
        this.originalMaterials.set(e, e.material), e.isSkinnedMesh ? e.material = t[2] : e.isInstancedMesh ? e.material = t[1] : e.material = t[0], ++this.meshCount;
      }
    };
  }
  /**
   * Clones the given material.
   *
   * @private
   * @param {Material} material - The material.
   * @return {Material} The cloned material.
   */
  cloneMaterial(n) {
    if (!(n instanceof at))
      return n.clone();
    const e = n.uniforms, t = /* @__PURE__ */ new Map();
    for (const r in e) {
      const s = e[r].value;
      s.isRenderTargetTexture && (e[r].value = null, t.set(r, s));
    }
    const i = n.clone();
    for (const r of t)
      e[r[0]].value = r[1], i.uniforms[r[0]].value = r[1];
    return i;
  }
  /**
   * Sets the override material.
   *
   * @param {Material} material - The material.
   */
  setMaterial(n) {
    if (this.disposeMaterials(), this.material = n, n !== null) {
      const e = this.materials = [
        this.cloneMaterial(n),
        this.cloneMaterial(n),
        this.cloneMaterial(n)
      ];
      for (const t of e)
        t.uniforms = Object.assign({}, n.uniforms), t.side = 0;
      e[2].skinning = !0, this.materialsBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = 1, i;
      }), this.materialsDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.side = 2, i;
      }), this.materialsFlatShaded = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = !0, i;
      }), this.materialsFlatShadedBackSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = !0, i.side = 1, i;
      }), this.materialsFlatShadedDoubleSide = e.map((t) => {
        const i = this.cloneMaterial(t);
        return i.uniforms = Object.assign({}, n.uniforms), i.flatShading = !0, i.side = 2, i;
      });
    }
  }
  /**
   * Renders the scene with the override material.
   *
   * @private
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Scene} scene - A scene.
   * @param {Camera} camera - A camera.
   */
  render(n, e, t) {
    const i = n.shadowMap.enabled;
    if (n.shadowMap.enabled = !1, br) {
      const r = this.originalMaterials;
      this.meshCount = 0, e.traverse(this.replaceMaterial), n.render(e, t);
      for (const s of r)
        s[0].material = s[1];
      this.meshCount !== r.size && r.clear();
    } else {
      const r = e.overrideMaterial;
      e.overrideMaterial = this.material, n.render(e, t), e.overrideMaterial = r;
    }
    n.shadowMap.enabled = i;
  }
  /**
   * Deletes cloned override materials.
   *
   * @private
   */
  disposeMaterials() {
    if (this.material !== null) {
      const n = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
      for (const e of n)
        e.dispose();
    }
  }
  /**
   * Performs cleanup tasks.
   */
  dispose() {
    this.originalMaterials.clear(), this.disposeMaterials();
  }
  /**
   * Indicates whether the override material workaround is enabled.
   *
   * @type {Boolean}
   */
  static get workaroundEnabled() {
    return br;
  }
  /**
   * Enables or disables the override material workaround globally.
   *
   * This only affects post processing passes and effects.
   *
   * @type {Boolean}
   */
  static set workaroundEnabled(n) {
    br = n;
  }
}, pn = -1, Ht = class extends on {
  /**
   * Constructs a new resolution.
   *
   * TODO Remove resizable param.
   * @param {Resizable} resizable - A resizable object.
   * @param {Number} [width=Resolution.AUTO_SIZE] - The preferred width.
   * @param {Number} [height=Resolution.AUTO_SIZE] - The preferred height.
   * @param {Number} [scale=1.0] - A resolution scale.
   */
  constructor(n, e = pn, t = pn, i = 1) {
    super(), this.resizable = n, this.baseSize = new Te(1, 1), this.preferredSize = new Te(e, t), this.target = this.preferredSize, this.s = i, this.effectiveSize = new Te(), this.addEventListener("change", () => this.updateEffectiveSize()), this.updateEffectiveSize();
  }
  /**
   * Calculates the effective size.
   *
   * @private
   */
  updateEffectiveSize() {
    const n = this.baseSize, e = this.preferredSize, t = this.effectiveSize, i = this.scale;
    e.width !== pn ? t.width = e.width : e.height !== pn ? t.width = Math.round(e.height * (n.width / Math.max(n.height, 1))) : t.width = Math.round(n.width * i), e.height !== pn ? t.height = e.height : e.width !== pn ? t.height = Math.round(e.width / Math.max(n.width / Math.max(n.height, 1), 1)) : t.height = Math.round(n.height * i);
  }
  /**
   * The effective width.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
   *
   * @type {Number}
   */
  get width() {
    return this.effectiveSize.width;
  }
  set width(n) {
    this.preferredWidth = n;
  }
  /**
   * The effective height.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
   *
   * @type {Number}
   */
  get height() {
    return this.effectiveSize.height;
  }
  set height(n) {
    this.preferredHeight = n;
  }
  /**
   * Returns the effective width.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base width will be returned.
   *
   * @deprecated Use width instead.
   * @return {Number} The effective width.
   */
  getWidth() {
    return this.width;
  }
  /**
   * Returns the effective height.
   *
   * If the preferred width and height are set to {@link Resizer.AUTO_SIZE}, the base height will be returned.
   *
   * @deprecated Use height instead.
   * @return {Number} The effective height.
   */
  getHeight() {
    return this.height;
  }
  /**
   * The resolution scale.
   *
   * @type {Number}
   */
  get scale() {
    return this.s;
  }
  set scale(n) {
    this.s !== n && (this.s = n, this.preferredSize.setScalar(pn), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  /**
   * Returns the current resolution scale.
   *
   * @deprecated Use scale instead.
   * @return {Number} The scale.
   */
  getScale() {
    return this.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * Also sets the preferred resolution to {@link Resizer.AUTO_SIZE}.
   *
   * @deprecated Use scale instead.
   * @param {Number} value - The scale.
   */
  setScale(n) {
    this.scale = n;
  }
  /**
   * The base width.
   *
   * @type {Number}
   */
  get baseWidth() {
    return this.baseSize.width;
  }
  set baseWidth(n) {
    this.baseSize.width !== n && (this.baseSize.width = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  /**
   * Returns the base width.
   *
   * @deprecated Use baseWidth instead.
   * @return {Number} The base width.
   */
  getBaseWidth() {
    return this.baseWidth;
  }
  /**
   * Sets the base width.
   *
   * @deprecated Use baseWidth instead.
   * @param {Number} value - The width.
   */
  setBaseWidth(n) {
    this.baseWidth = n;
  }
  /**
   * The base height.
   *
   * @type {Number}
   */
  get baseHeight() {
    return this.baseSize.height;
  }
  set baseHeight(n) {
    this.baseSize.height !== n && (this.baseSize.height = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  /**
   * Returns the base height.
   *
   * @deprecated Use baseHeight instead.
   * @return {Number} The base height.
   */
  getBaseHeight() {
    return this.baseHeight;
  }
  /**
   * Sets the base height.
   *
   * @deprecated Use baseHeight instead.
   * @param {Number} value - The height.
   */
  setBaseHeight(n) {
    this.baseHeight = n;
  }
  /**
   * Sets the base size.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setBaseSize(n, e) {
    (this.baseSize.width !== n || this.baseSize.height !== e) && (this.baseSize.set(n, e), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  /**
   * The preferred width.
   *
   * @type {Number}
   */
  get preferredWidth() {
    return this.preferredSize.width;
  }
  set preferredWidth(n) {
    this.preferredSize.width !== n && (this.preferredSize.width = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  /**
   * Returns the preferred width.
   *
   * @deprecated Use preferredWidth instead.
   * @return {Number} The preferred width.
   */
  getPreferredWidth() {
    return this.preferredWidth;
  }
  /**
   * Sets the preferred width.
   *
   * Use {@link Resizer.AUTO_SIZE} to automatically calculate the width based on the height and aspect ratio.
   *
   * @deprecated Use preferredWidth instead.
   * @param {Number} value - The width.
   */
  setPreferredWidth(n) {
    this.preferredWidth = n;
  }
  /**
   * The preferred height.
   *
   * @type {Number}
   */
  get preferredHeight() {
    return this.preferredSize.height;
  }
  set preferredHeight(n) {
    this.preferredSize.height !== n && (this.preferredSize.height = n, this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  /**
   * Returns the preferred height.
   *
   * @deprecated Use preferredHeight instead.
   * @return {Number} The preferred height.
   */
  getPreferredHeight() {
    return this.preferredHeight;
  }
  /**
   * Sets the preferred height.
   *
   * Use {@link Resizer.AUTO_SIZE} to automatically calculate the height based on the width and aspect ratio.
   *
   * @deprecated Use preferredHeight instead.
   * @param {Number} value - The height.
   */
  setPreferredHeight(n) {
    this.preferredHeight = n;
  }
  /**
   * Sets the preferred size.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setPreferredSize(n, e) {
    (this.preferredSize.width !== n || this.preferredSize.height !== e) && (this.preferredSize.set(n, e), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height));
  }
  /**
   * Copies the given resolution.
   *
   * @param {Resolution} resolution - The resolution.
   */
  copy(n) {
    this.s = n.scale, this.baseSize.set(n.baseWidth, n.baseHeight), this.preferredSize.set(n.preferredWidth, n.preferredHeight), this.dispatchEvent({ type: "change" }), this.resizable.setSize(this.baseSize.width, this.baseSize.height);
  }
  /**
   * An auto sizing constant.
   *
   * Can be used to automatically calculate the width or height based on the original aspect ratio.
   *
   * @type {Number}
   */
  static get AUTO_SIZE() {
    return pn;
  }
}, Cd = class extends Set {
  /**
   * Constructs a new selection.
   *
   * @param {Iterable<Object3D>} [iterable] - A collection of objects that should be added to this selection.
   * @param {Number} [layer=10] - A dedicated render layer for selected objects.
   */
  constructor(n, e = 10) {
    super(), this.l = e, this.exclusive = !1, n !== void 0 && this.set(n);
  }
  /**
   * The render layer for selected objects.
   *
   * @type {Number}
   */
  get layer() {
    return this.l;
  }
  set layer(n) {
    const e = this.l;
    for (const t of this)
      t.layers.disable(e), t.layers.enable(n);
    this.l = n;
  }
  /**
   * Returns the current render layer for selected objects.
   *
   * The default layer is 10. If this collides with your own custom layers, please change it before rendering!
   *
   * @deprecated Use layer instead.
   * @return {Number} The layer.
   */
  getLayer() {
    return this.layer;
  }
  /**
   * Sets the render layer for selected objects.
   *
   * The current selection will be updated accordingly.
   *
   * @deprecated Use layer instead.
   * @param {Number} value - The layer. Range is [0, 31].
   */
  setLayer(n) {
    this.layer = n;
  }
  /**
   * Indicates whether objects that are added to this selection will be removed from all other layers.
   *
   * @deprecated Use exclusive instead.
   * @return {Number} Whether this selection is exclusive. Default is false.
   */
  isExclusive() {
    return this.exclusive;
  }
  /**
   * Controls whether objects that are added to this selection should be removed from all other layers.
   *
   * @deprecated Use exclusive instead.
   * @param {Number} value - Whether this selection should be exclusive.
   */
  setExclusive(n) {
    this.exclusive = n;
  }
  /**
   * Clears this selection.
   *
   * @return {Selection} This selection.
   */
  clear() {
    const n = this.layer;
    for (const e of this)
      e.layers.disable(n);
    return super.clear();
  }
  /**
   * Clears this selection and adds the given objects.
   *
   * @param {Iterable<Object3D>} objects - The objects that should be selected.
   * @return {Selection} This selection.
   */
  set(n) {
    this.clear();
    for (const e of n)
      this.add(e);
    return this;
  }
  /**
   * An alias for {@link has}.
   *
   * @param {Object3D} object - An object.
   * @return {Number} Returns 0 if the given object is currently selected, or -1 otherwise.
   * @deprecated Added for backward-compatibility.
   */
  indexOf(n) {
    return this.has(n) ? 0 : -1;
  }
  /**
   * Adds an object to this selection.
   *
   * If {@link exclusive} is set to `true`, the object will also be removed from all other layers.
   *
   * @param {Object3D} object - The object that should be selected.
   * @return {Selection} This selection.
   */
  add(n) {
    return this.exclusive ? n.layers.set(this.layer) : n.layers.enable(this.layer), super.add(n);
  }
  /**
   * Removes an object from this selection.
   *
   * @param {Object3D} object - The object that should be deselected.
   * @return {Boolean} Returns true if an object has successfully been removed from this selection; otherwise false.
   */
  delete(n) {
    return this.has(n) && n.layers.disable(this.layer), super.delete(n);
  }
  /**
   * Removes an existing object from the selection. If the object doesn't exist it's added instead.
   *
   * @param {Object3D} object - The object.
   * @return {Boolean} Returns true if the object is added, false otherwise.
   */
  toggle(n) {
    let e;
    return this.has(n) ? (this.delete(n), e = !1) : (this.add(n), e = !0), e;
  }
  /**
   * Sets the visibility of all selected objects.
   *
   * This method enables or disables render layer 0 of all selected objects.
   *
   * @param {Boolean} visible - Whether the selected objects should be visible.
   * @return {Selection} This selection.
   */
  setVisible(n) {
    for (const e of this)
      n ? e.layers.enable(0) : e.layers.disable(0);
    return this;
  }
}, zd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}", Rd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}", Ld = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}", Dd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}", Nd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}", Fd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}", Id = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}", Ud = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}", Od = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}", Bd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}", Gd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}", Hd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}", kd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}", Vd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}", Wd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}", qd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}", Xd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}", Yd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}", jd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}", Zd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}", Kd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}", $d = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}", Qd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}", Jd = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}", e0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}", t0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}", n0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}", i0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}", r0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}", s0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}", o0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}", a0 = "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}", c0 = /* @__PURE__ */ new Map([
  [Oe.ADD, zd],
  [Oe.ALPHA, Rd],
  [Oe.AVERAGE, Ld],
  [Oe.COLOR, Dd],
  [Oe.COLOR_BURN, Nd],
  [Oe.COLOR_DODGE, Fd],
  [Oe.DARKEN, Id],
  [Oe.DIFFERENCE, Ud],
  [Oe.DIVIDE, Od],
  [Oe.DST, null],
  [Oe.EXCLUSION, Bd],
  [Oe.HARD_LIGHT, Gd],
  [Oe.HARD_MIX, Hd],
  [Oe.HUE, kd],
  [Oe.INVERT, Vd],
  [Oe.INVERT_RGB, Wd],
  [Oe.LIGHTEN, qd],
  [Oe.LINEAR_BURN, Xd],
  [Oe.LINEAR_DODGE, Yd],
  [Oe.LINEAR_LIGHT, jd],
  [Oe.LUMINOSITY, Zd],
  [Oe.MULTIPLY, Kd],
  [Oe.NEGATION, $d],
  [Oe.NORMAL, Qd],
  [Oe.OVERLAY, Jd],
  [Oe.PIN_LIGHT, e0],
  [Oe.REFLECT, t0],
  [Oe.SATURATION, n0],
  [Oe.SCREEN, i0],
  [Oe.SOFT_LIGHT, r0],
  [Oe.SRC, s0],
  [Oe.SUBTRACT, o0],
  [Oe.VIVID_LIGHT, a0]
]), l0 = class extends on {
  /**
   * Constructs a new blend mode.
   *
   * @param {BlendFunction} blendFunction - The blend function.
   * @param {Number} opacity - The opacity of the color that will be blended with the base color.
   */
  constructor(n, e = 1) {
    super(), this._blendFunction = n, this.opacity = new ye(e);
  }
  /**
   * Returns the opacity.
   *
   * @return {Number} The opacity.
   */
  getOpacity() {
    return this.opacity.value;
  }
  /**
   * Sets the opacity.
   *
   * @param {Number} value - The opacity.
   */
  setOpacity(n) {
    this.opacity.value = n;
  }
  /**
   * The blend function.
   *
   * @type {BlendFunction}
   */
  get blendFunction() {
    return this._blendFunction;
  }
  set blendFunction(n) {
    this._blendFunction = n, this.dispatchEvent({ type: "change" });
  }
  /**
   * Returns the blend function.
   *
   * @deprecated Use blendFunction instead.
   * @return {BlendFunction} The blend function.
   */
  getBlendFunction() {
    return this.blendFunction;
  }
  /**
   * Sets the blend function.
   *
   * @deprecated Use blendFunction instead.
   * @param {BlendFunction} value - The blend function.
   */
  setBlendFunction(n) {
    this.blendFunction = n;
  }
  /**
   * Returns the blend function shader code.
   *
   * @return {String} The blend function shader code.
   */
  getShaderCode() {
    return c0.get(this.blendFunction);
  }
}, bo = class extends on {
  /**
   * Constructs a new effect.
   *
   * @param {String} name - The name of this effect. Doesn't have to be unique.
   * @param {String} fragmentShader - The fragment shader. This shader is required.
   * @param {Object} [options] - Additional options.
   * @param {EffectAttribute} [options.attributes=EffectAttribute.NONE] - The effect attributes that determine the execution priority and resource requirements.
   * @param {BlendFunction} [options.blendFunction=BlendFunction.NORMAL] - The blend function of this effect.
   * @param {Map<String, String>} [options.defines] - Custom preprocessor macro definitions. Keys are names and values are code.
   * @param {Map<String, Uniform>} [options.uniforms] - Custom shader uniforms. Keys are names and values are uniforms.
   * @param {Set<WebGLExtension>} [options.extensions] - WebGL extensions.
   * @param {String} [options.vertexShader=null] - The vertex shader. Most effects don't need one.
   */
  constructor(n, e, {
    attributes: t = vn.NONE,
    blendFunction: i = Oe.NORMAL,
    defines: r = /* @__PURE__ */ new Map(),
    uniforms: s = /* @__PURE__ */ new Map(),
    extensions: a = null,
    vertexShader: o = null
  } = {}) {
    super(), this.name = n, this.renderer = null, this.attributes = t, this.fragmentShader = e, this.vertexShader = o, this.defines = r, this.uniforms = s, this.extensions = a, this.blendMode = new l0(i), this.blendMode.addEventListener("change", (c) => this.setChanged()), this._inputColorSpace = ji, this._outputColorSpace = _o;
  }
  /**
   * The input color space.
   *
   * @type {ColorSpace}
   * @experimental
   */
  get inputColorSpace() {
    return this._inputColorSpace;
  }
  /**
   * @type {ColorSpace}
   * @protected
   * @experimental
   */
  set inputColorSpace(n) {
    this._inputColorSpace = n, this.setChanged();
  }
  /**
   * The output color space.
   *
   * Should only be changed if this effect converts the input colors to a different color space.
   *
   * @type {ColorSpace}
   * @experimental
   */
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  /**
   * @type {ColorSpace}
   * @protected
   * @experimental
   */
  set outputColorSpace(n) {
    this._outputColorSpace = n, this.setChanged();
  }
  /**
   * Sets the main scene.
   *
   * @type {Scene}
   */
  set mainScene(n) {
  }
  /**
   * Sets the main camera.
   *
   * @type {Camera}
   */
  set mainCamera(n) {
  }
  /**
   * Returns the name of this effect.
   *
   * @deprecated Use name instead.
   * @return {String} The name.
   */
  getName() {
    return this.name;
  }
  /**
   * Sets the renderer.
   *
   * @deprecated
   * @param {WebGLRenderer} renderer - The renderer.
   */
  setRenderer(n) {
    this.renderer = n;
  }
  /**
   * Returns the preprocessor macro definitions.
   *
   * @deprecated Use defines instead.
   * @return {Map<String, String>} The extensions.
   */
  getDefines() {
    return this.defines;
  }
  /**
   * Returns the uniforms of this effect.
   *
   * @deprecated Use uniforms instead.
   * @return {Map<String, Uniform>} The extensions.
   */
  getUniforms() {
    return this.uniforms;
  }
  /**
   * Returns the WebGL extensions that are required by this effect.
   *
   * @deprecated Use extensions instead.
   * @return {Set<WebGLExtension>} The extensions.
   */
  getExtensions() {
    return this.extensions;
  }
  /**
   * Returns the blend mode.
   *
   * The result of this effect will be blended with the result of the previous effect using this blend mode.
   *
   * @deprecated Use blendMode instead.
   * @return {BlendMode} The blend mode.
   */
  getBlendMode() {
    return this.blendMode;
  }
  /**
   * Returns the effect attributes.
   *
   * @return {EffectAttribute} The attributes.
   */
  getAttributes() {
    return this.attributes;
  }
  /**
   * Sets the effect attributes.
   *
   * Effects that have the same attributes will be executed in the order in which they were registered. Some attributes
   * imply a higher priority.
   *
   * @protected
   * @param {EffectAttribute} attributes - The attributes.
   */
  setAttributes(n) {
    this.attributes = n, this.setChanged();
  }
  /**
   * Returns the fragment shader.
   *
   * @return {String} The fragment shader.
   */
  getFragmentShader() {
    return this.fragmentShader;
  }
  /**
   * Sets the fragment shader.
   *
   * @protected
   * @param {String} fragmentShader - The fragment shader.
   */
  setFragmentShader(n) {
    this.fragmentShader = n, this.setChanged();
  }
  /**
   * Returns the vertex shader.
   *
   * @return {String} The vertex shader.
   */
  getVertexShader() {
    return this.vertexShader;
  }
  /**
   * Sets the vertex shader.
   *
   * @protected
   * @param {String} vertexShader - The vertex shader.
   */
  setVertexShader(n) {
    this.vertexShader = n, this.setChanged();
  }
  /**
   * Informs the associated {@link EffectPass} that this effect requires a shader recompilation.
   *
   * Should be called after changing macros or extensions and after adding/removing uniforms.
   *
   * @protected
   */
  setChanged() {
    this.dispatchEvent({ type: "change" });
  }
  /**
   * Sets the depth texture.
   *
   * You may override this method if your effect requires direct access to the depth texture that is bound to the
   * associated {@link EffectPass}.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(n, e = 3200) {
  }
  /**
   * Updates this effect by performing supporting operations.
   *
   * This method is called by the {@link EffectPass} right before the main fullscreen render operation, even if the
   * blend function is set to `SKIP`.
   *
   * You may override this method if you need to update custom uniforms or render additional off-screen textures.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */
  update(n, e, t) {
  }
  /**
   * Updates the size of this effect.
   *
   * You may override this method if you want to be informed about the size of the backbuffer/canvas.
   * This method is called before {@link initialize} and every time the size of the {@link EffectComposer} changes.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
  }
  /**
   * Performs initialization tasks.
   *
   * This method is called when the associated {@link EffectPass} is added to an {@link EffectComposer}.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   * @example if(!alpha && frameBufferType === UnsignedByteType) { this.myRenderTarget.texture.format = RGBFormat; }
   */
  initialize(n, e, t) {
  }
  /**
   * Performs a shallow search for properties that define a dispose method and deletes them.
   *
   * The {@link EffectComposer} calls this method when it is being destroyed.
   */
  dispose() {
    for (const n of Object.keys(this)) {
      const e = this[n];
      (e instanceof wt || e instanceof Pn || e instanceof Mt || e instanceof $t) && this[n].dispose();
    }
  }
}, f0 = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D nearColorBuffer;uniform mediump sampler2D farColorBuffer;
#else
uniform lowp sampler2D nearColorBuffer;uniform lowp sampler2D farColorBuffer;
#endif
uniform lowp sampler2D nearCoCBuffer;uniform lowp sampler2D farCoCBuffer;uniform float scale;void mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){vec4 colorNear=texture2D(nearColorBuffer,uv);vec4 colorFar=texture2D(farColorBuffer,uv);
#if MASK_FUNCTION == 1
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,colorFar.a);cocNearFar.x=min(cocNearFar.x*scale,1.0);
#else
vec2 cocNearFar=vec2(texture2D(nearCoCBuffer,uv).r,texture2D(farCoCBuffer,uv).g);cocNearFar=min(cocNearFar*scale,1.0);
#endif
vec4 result=inputColor*(1.0-cocNearFar.y)+colorFar;result=mix(result,colorNear,cocNearFar.x);outputColor=result;}`, u0 = class extends bo {
  /**
   * Constructs a new depth of field effect.
   *
   * @param {Camera} camera - The main camera.
   * @param {Object} [options] - The options.
   * @param {BlendFunction} [options.blendFunction] - The blend function of this effect.
   * @param {Number} [options.worldFocusDistance] - The focus distance in world units.
   * @param {Number} [options.worldFocusRange] - The focus distance in world units.
   * @param {Number} [options.focusDistance=0.0] - The normalized focus distance. Range is [0.0, 1.0].
   * @param {Number} [options.focusRange=0.1] - The focus range. Range is [0.0, 1.0].
   * @param {Number} [options.focalLength=0.1] - Deprecated.
   * @param {Number} [options.bokehScale=1.0] - The scale of the bokeh blur.
   * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor(n, {
    blendFunction: e,
    worldFocusDistance: t,
    worldFocusRange: i,
    focusDistance: r = 0,
    focalLength: s = 0.1,
    focusRange: a = s,
    bokehScale: o = 1,
    resolutionScale: c = 1,
    width: l = Ht.AUTO_SIZE,
    height: f = Ht.AUTO_SIZE,
    resolutionX: d = l,
    resolutionY: h = f
  } = {}) {
    super("DepthOfFieldEffect", f0, {
      blendFunction: e,
      attributes: vn.DEPTH,
      uniforms: /* @__PURE__ */ new Map([
        ["nearColorBuffer", new ye(null)],
        ["farColorBuffer", new ye(null)],
        ["nearCoCBuffer", new ye(null)],
        ["farCoCBuffer", new ye(null)],
        ["scale", new ye(1)]
      ])
    }), this.camera = n, this.renderTarget = new wt(1, 1, { depthBuffer: !1 }), this.renderTarget.texture.name = "DoF.Intermediate", this.renderTargetMasked = this.renderTarget.clone(), this.renderTargetMasked.texture.name = "DoF.Masked.Far", this.renderTargetNear = this.renderTarget.clone(), this.renderTargetNear.texture.name = "DoF.Bokeh.Near", this.uniforms.get("nearColorBuffer").value = this.renderTargetNear.texture, this.renderTargetFar = this.renderTarget.clone(), this.renderTargetFar.texture.name = "DoF.Bokeh.Far", this.uniforms.get("farColorBuffer").value = this.renderTargetFar.texture, this.renderTargetCoC = this.renderTarget.clone(), this.renderTargetCoC.texture.name = "DoF.CoC", this.uniforms.get("farCoCBuffer").value = this.renderTargetCoC.texture, this.renderTargetCoCBlurred = this.renderTargetCoC.clone(), this.renderTargetCoCBlurred.texture.name = "DoF.CoC.Blurred", this.uniforms.get("nearCoCBuffer").value = this.renderTargetCoCBlurred.texture, this.cocPass = new Tn(new ed(n));
    const g = this.cocMaterial;
    g.focusDistance = r, g.focusRange = a, t !== void 0 && (g.worldFocusDistance = t), i !== void 0 && (g.worldFocusRange = i), this.blurPass = new To({ resolutionScale: c, resolutionX: d, resolutionY: h, kernelSize: Zi.MEDIUM }), this.maskPass = new Tn(new hd(this.renderTargetCoC.texture));
    const v = this.maskPass.fullscreenMaterial;
    v.colorChannel = xo.GREEN, this.maskFunction = yo.MULTIPLY_RGB, this.bokehNearBasePass = new Tn(new Fi(!1, !0)), this.bokehNearBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehNearFillPass = new Tn(new Fi(!0, !0)), this.bokehNearFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoCBlurred.texture, this.bokehFarBasePass = new Tn(new Fi(!1, !1)), this.bokehFarBasePass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.bokehFarFillPass = new Tn(new Fi(!0, !1)), this.bokehFarFillPass.fullscreenMaterial.cocBuffer = this.renderTargetCoC.texture, this.target = null;
    const y = this.resolution = new Ht(this, d, h, c);
    y.addEventListener("change", (p) => this.setSize(y.baseWidth, y.baseHeight)), this.bokehScale = o;
  }
  set mainCamera(n) {
    this.camera = n, this.cocMaterial.copyCameraSettings(n);
  }
  /**
   * The circle of confusion texture.
   *
   * @type {Texture}
   */
  get cocTexture() {
    return this.renderTargetCoC.texture;
  }
  /**
   * The mask function. Default is `MULTIPLY_RGB`.
   *
   * @type {MaskFunction}
   */
  get maskFunction() {
    return this.maskPass.fullscreenMaterial.maskFunction;
  }
  set maskFunction(n) {
    this.maskFunction !== n && (this.defines.set("MASK_FUNCTION", n.toFixed(0)), this.maskPass.fullscreenMaterial.maskFunction = n, this.setChanged());
  }
  /**
   * The circle of confusion material.
   *
   * @type {CircleOfConfusionMaterial}
   */
  get cocMaterial() {
    return this.cocPass.fullscreenMaterial;
  }
  /**
   * The circle of confusion material.
   *
   * @deprecated Use cocMaterial instead.
   * @type {CircleOfConfusionMaterial}
   */
  get circleOfConfusionMaterial() {
    return this.cocMaterial;
  }
  /**
   * Returns the circle of confusion material.
   *
   * @deprecated Use cocMaterial instead.
   * @return {CircleOfConfusionMaterial} The material.
   */
  getCircleOfConfusionMaterial() {
    return this.cocMaterial;
  }
  /**
   * Returns the pass that blurs the foreground CoC buffer to soften edges.
   *
   * @deprecated Use blurPass instead.
   * @return {KawaseBlurPass} The blur pass.
   */
  getBlurPass() {
    return this.blurPass;
  }
  /**
   * Returns the resolution settings.
   *
   * @deprecated Use resolution instead.
   * @return {Resolution} The resolution.
   */
  getResolution() {
    return this.resolution;
  }
  /**
   * The current bokeh scale.
   *
   * @type {Number}
   */
  get bokehScale() {
    return this.uniforms.get("scale").value;
  }
  set bokehScale(n) {
    this.bokehNearBasePass.fullscreenMaterial.scale = n, this.bokehNearFillPass.fullscreenMaterial.scale = n, this.bokehFarBasePass.fullscreenMaterial.scale = n, this.bokehFarFillPass.fullscreenMaterial.scale = n, this.maskPass.fullscreenMaterial.strength = n, this.uniforms.get("scale").value = n;
  }
  /**
   * Returns the current bokeh scale.
   *
   * @deprecated Use bokehScale instead.
   * @return {Number} The scale.
   */
  getBokehScale() {
    return this.bokehScale;
  }
  /**
   * Sets the bokeh scale.
   *
   * @deprecated Use bokehScale instead.
   * @param {Number} value - The scale.
   */
  setBokehScale(n) {
    this.bokehScale = n;
  }
  /**
   * Returns the current auto focus target.
   *
   * @deprecated Use target instead.
   * @return {Vector3} The target.
   */
  getTarget() {
    return this.target;
  }
  /**
   * Sets the auto focus target.
   *
   * @deprecated Use target instead.
   * @param {Vector3} value - The target.
   */
  setTarget(n) {
    this.target = n;
  }
  /**
   * Calculates the focus distance from the camera to the given position.
   *
   * @param {Vector3} target - The target.
   * @return {Number} The normalized focus distance.
   */
  calculateFocusDistance(n) {
    const e = this.camera, t = e.position.distanceTo(n);
    return Dr(-t, e.near, e.far);
  }
  /**
   * Sets the depth texture.
   *
   * @param {Texture} depthTexture - A depth texture.
   * @param {DepthPackingStrategies} [depthPacking=BasicDepthPacking] - The depth packing.
   */
  setDepthTexture(n, e = 3200) {
    this.cocMaterial.depthBuffer = n, this.cocMaterial.depthPacking = e;
  }
  /**
   * Updates this effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */
  update(n, e, t) {
    const i = this.renderTarget, r = this.renderTargetCoC, s = this.renderTargetCoCBlurred, a = this.renderTargetMasked;
    if (this.target !== null) {
      const o = this.calculateFocusDistance(this.target);
      this.cocMaterial.focusDistance = o;
    }
    this.cocPass.render(n, null, r), this.blurPass.render(n, r, s), this.maskPass.render(n, e, a), this.bokehFarBasePass.render(n, a, i), this.bokehFarFillPass.render(n, i, this.renderTargetFar), this.bokehNearBasePass.render(n, e, i), this.bokehNearFillPass.render(n, i, this.renderTargetNear);
  }
  /**
   * Updates the size of internal render targets.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    const t = this.resolution;
    t.setBaseSize(n, e);
    const i = t.width, r = t.height;
    this.cocPass.setSize(n, e), this.blurPass.setSize(n, e), this.maskPass.setSize(n, e), this.renderTargetFar.setSize(n, e), this.renderTargetCoC.setSize(n, e), this.renderTargetMasked.setSize(n, e), this.renderTarget.setSize(i, r), this.renderTargetNear.setSize(i, r), this.renderTargetCoCBlurred.setSize(i, r), this.bokehNearBasePass.fullscreenMaterial.setSize(n, e), this.bokehNearFillPass.fullscreenMaterial.setSize(n, e), this.bokehFarBasePass.fullscreenMaterial.setSize(n, e), this.bokehFarFillPass.fullscreenMaterial.setSize(n, e);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(n, e, t) {
    this.cocPass.initialize(n, e, t), this.maskPass.initialize(n, e, t), this.bokehNearBasePass.initialize(n, e, t), this.bokehNearFillPass.initialize(n, e, t), this.bokehFarBasePass.initialize(n, e, t), this.bokehFarFillPass.initialize(n, e, t), this.blurPass.initialize(n, e, 1009), n.capabilities.logarithmicDepthBuffer && (this.cocPass.fullscreenMaterial.defines.LOG_DEPTH = "1"), t !== void 0 && (this.renderTarget.texture.type = t, this.renderTargetNear.texture.type = t, this.renderTargetFar.texture.type = t, this.renderTargetMasked.texture.type = t, ii(n) === lt && (Zt(this.renderTarget.texture, lt), Zt(this.renderTargetNear.texture, lt), Zt(this.renderTargetFar.texture, lt), Zt(this.renderTargetMasked.texture, lt)));
  }
}, d0 = `uniform lowp sampler2D edgeTexture;uniform lowp sampler2D maskTexture;uniform vec3 visibleEdgeColor;uniform vec3 hiddenEdgeColor;uniform float pulse;uniform float edgeStrength;
#ifdef USE_PATTERN
uniform lowp sampler2D patternTexture;varying vec2 vUvPattern;
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 edge=texture2D(edgeTexture,uv).rg;vec2 mask=texture2D(maskTexture,uv).rg;
#ifndef X_RAY
edge.y=0.0;
#endif
edge*=(edgeStrength*mask.x*pulse);vec3 color=edge.x*visibleEdgeColor+edge.y*hiddenEdgeColor;float visibilityFactor=0.0;
#ifdef USE_PATTERN
vec4 patternColor=texture2D(patternTexture,vUvPattern);
#ifdef X_RAY
float hiddenFactor=0.5;
#else
float hiddenFactor=0.0;
#endif
visibilityFactor=(1.0-mask.y>0.0)?1.0:hiddenFactor;visibilityFactor*=(1.0-mask.x)*patternColor.a;color+=visibilityFactor*patternColor.rgb;
#endif
float alpha=max(max(edge.x,edge.y),visibilityFactor);
#ifdef ALPHA
outputColor=vec4(color,alpha);
#else
outputColor=vec4(color,max(alpha,inputColor.a));
#endif
}`, h0 = "uniform float patternScale;varying vec2 vUvPattern;void mainSupport(const in vec2 uv){vUvPattern=uv*vec2(aspect,1.0)*patternScale;}", p0 = class extends bo {
  /**
   * Constructs a new outline effect.
   *
   * @param {Scene} scene - The main scene.
   * @param {Camera} camera - The main camera.
   * @param {Object} [options] - The options.
   * @param {BlendFunction} [options.blendFunction=BlendFunction.SCREEN] - The blend function. Use `BlendFunction.ALPHA` for dark outlines.
   * @param {Texture} [options.patternTexture=null] - A pattern texture.
   * @param {Number} [options.patternScale=1.0] - The pattern scale.
   * @param {Number} [options.edgeStrength=1.0] - The edge strength.
   * @param {Number} [options.pulseSpeed=0.0] - The pulse speed. A value of zero disables the pulse effect.
   * @param {Number} [options.visibleEdgeColor=0xffffff] - The color of visible edges.
   * @param {Number} [options.hiddenEdgeColor=0x22090a] - The color of hidden edges.
   * @param {KernelSize} [options.kernelSize=KernelSize.VERY_SMALL] - The blur kernel size.
   * @param {Boolean} [options.blur=false] - Whether the outline should be blurred.
   * @param {Boolean} [options.xRay=true] - Whether occluded parts of selected objects should be visible.
   * @param {Number} [options.multisampling=0] - The number of samples used for multisample antialiasing. Requires WebGL 2.
   * @param {Number} [options.resolutionScale=0.5] - The resolution scale.
   * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
   * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
   * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
   * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
   */
  constructor(n, e, {
    blendFunction: t = Oe.SCREEN,
    patternTexture: i = null,
    patternScale: r = 1,
    edgeStrength: s = 1,
    pulseSpeed: a = 0,
    visibleEdgeColor: o = 16777215,
    hiddenEdgeColor: c = 2230538,
    kernelSize: l = Zi.VERY_SMALL,
    blur: f = !1,
    xRay: d = !0,
    multisampling: h = 0,
    resolutionScale: g = 0.5,
    width: v = Ht.AUTO_SIZE,
    height: y = Ht.AUTO_SIZE,
    resolutionX: p = v,
    resolutionY: u = y
  } = {}) {
    super("OutlineEffect", d0, {
      uniforms: /* @__PURE__ */ new Map([
        ["maskTexture", new ye(null)],
        ["edgeTexture", new ye(null)],
        ["edgeStrength", new ye(s)],
        ["visibleEdgeColor", new ye(new ke(o))],
        ["hiddenEdgeColor", new ye(new ke(c))],
        ["pulse", new ye(1)],
        ["patternScale", new ye(r)],
        ["patternTexture", new ye(null)]
      ])
    }), this.blendMode.addEventListener("change", (z) => {
      this.blendMode.blendFunction === Oe.ALPHA ? this.defines.set("ALPHA", "1") : this.defines.delete("ALPHA"), this.setChanged();
    }), this.blendMode.blendFunction = t, this.patternTexture = i, this.xRay = d, this.scene = n, this.camera = e, this.renderTargetMask = new wt(1, 1), this.renderTargetMask.samples = h, this.renderTargetMask.texture.name = "Outline.Mask", this.uniforms.get("maskTexture").value = this.renderTargetMask.texture, this.renderTargetOutline = new wt(1, 1, { depthBuffer: !1 }), this.renderTargetOutline.texture.name = "Outline.Edges", this.uniforms.get("edgeTexture").value = this.renderTargetOutline.texture, this.clearPass = new Hr(), this.clearPass.overrideClearColor = new ke(0), this.clearPass.overrideClearAlpha = 1, this.depthPass = new Sd(n, e), this.maskPass = new kr(n, e, new cd(this.depthPass.texture, e));
    const w = this.maskPass.clearPass;
    w.overrideClearColor = new ke(16777215), w.overrideClearAlpha = 1, this.blurPass = new To({ resolutionScale: g, resolutionX: p, resolutionY: u, kernelSize: l }), this.blurPass.enabled = f;
    const _ = this.blurPass.resolution;
    _.addEventListener("change", (z) => this.setSize(_.baseWidth, _.baseHeight)), this.outlinePass = new Tn(new md());
    const b = this.outlinePass.fullscreenMaterial;
    b.inputBuffer = this.renderTargetMask.texture, this.time = 0, this.forceUpdate = !0, this.selection = new Cd(), this.selection.layer = 10, this.pulseSpeed = a;
  }
  set mainScene(n) {
    this.scene = n, this.depthPass.mainScene = n, this.maskPass.mainScene = n;
  }
  set mainCamera(n) {
    this.camera = n, this.depthPass.mainCamera = n, this.maskPass.mainCamera = n, this.maskPass.overrideMaterial.copyCameraSettings(n);
  }
  /**
   * The resolution of this effect.
   *
   * @type {Resolution}
   */
  get resolution() {
    return this.blurPass.resolution;
  }
  /**
   * Returns the resolution.
   *
   * @return {Resizer} The resolution.
   */
  getResolution() {
    return this.blurPass.getResolution();
  }
  /**
   * The amount of MSAA samples.
   *
   * Requires WebGL 2. Set to zero to disable multisampling.
   *
   * @experimental Requires three >= r138.
   * @type {Number}
   */
  get multisampling() {
    return this.renderTargetMask.samples;
  }
  set multisampling(n) {
    this.renderTargetMask.samples = n, this.renderTargetMask.dispose();
  }
  /**
   * The pattern scale.
   *
   * @type {Number}
   */
  get patternScale() {
    return this.uniforms.get("patternScale").value;
  }
  set patternScale(n) {
    this.uniforms.get("patternScale").value = n;
  }
  /**
   * The edge strength.
   *
   * @type {Number}
   */
  get edgeStrength() {
    return this.uniforms.get("edgeStrength").value;
  }
  set edgeStrength(n) {
    this.uniforms.get("edgeStrength").value = n;
  }
  /**
   * The visible edge color.
   *
   * @type {Color}
   */
  get visibleEdgeColor() {
    return this.uniforms.get("visibleEdgeColor").value;
  }
  set visibleEdgeColor(n) {
    this.uniforms.get("visibleEdgeColor").value = n;
  }
  /**
   * The hidden edge color.
   *
   * @type {Color}
   */
  get hiddenEdgeColor() {
    return this.uniforms.get("hiddenEdgeColor").value;
  }
  set hiddenEdgeColor(n) {
    this.uniforms.get("hiddenEdgeColor").value = n;
  }
  /**
   * Returns the blur pass.
   *
   * @deprecated Use blurPass instead.
   * @return {KawaseBlurPass} The blur pass.
   */
  getBlurPass() {
    return this.blurPass;
  }
  /**
   * Returns the selection.
   *
   * @deprecated Use selection instead.
   * @return {Selection} The selection.
   */
  getSelection() {
    return this.selection;
  }
  /**
   * Returns the pulse speed.
   *
   * @deprecated Use pulseSpeed instead.
   * @return {Number} The speed.
   */
  getPulseSpeed() {
    return this.pulseSpeed;
  }
  /**
   * Sets the pulse speed. Set to zero to disable.
   *
   * @deprecated Use pulseSpeed instead.
   * @param {Number} value - The speed.
   */
  setPulseSpeed(n) {
    this.pulseSpeed = n;
  }
  /**
   * The current width of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.width instead.
   */
  get width() {
    return this.resolution.width;
  }
  set width(n) {
    this.resolution.preferredWidth = n;
  }
  /**
   * The current height of the internal render targets.
   *
   * @type {Number}
   * @deprecated Use resolution.height instead.
   */
  get height() {
    return this.resolution.height;
  }
  set height(n) {
    this.resolution.preferredHeight = n;
  }
  /**
   * The selection layer.
   *
   * @type {Number}
   * @deprecated Use selection.layer instead.
   */
  get selectionLayer() {
    return this.selection.layer;
  }
  set selectionLayer(n) {
    this.selection.layer = n;
  }
  /**
   * Indicates whether dithering is enabled.
   *
   * @type {Boolean}
   * @deprecated
   */
  get dithering() {
    return this.blurPass.dithering;
  }
  set dithering(n) {
    this.blurPass.dithering = n;
  }
  /**
   * The blur kernel size.
   *
   * @type {KernelSize}
   * @deprecated Use blurPass.kernelSize instead.
   */
  get kernelSize() {
    return this.blurPass.kernelSize;
  }
  set kernelSize(n) {
    this.blurPass.kernelSize = n;
  }
  /**
   * Indicates whether the outlines should be blurred.
   *
   * @type {Boolean}
   * @deprecated Use blurPass.enabled instead.
   */
  get blur() {
    return this.blurPass.enabled;
  }
  set blur(n) {
    this.blurPass.enabled = n;
  }
  /**
   * Indicates whether X-ray mode is enabled.
   *
   * @type {Boolean}
   */
  get xRay() {
    return this.defines.has("X_RAY");
  }
  set xRay(n) {
    this.xRay !== n && (n ? this.defines.set("X_RAY", "1") : this.defines.delete("X_RAY"), this.setChanged());
  }
  /**
   * Indicates whether X-ray mode is enabled.
   *
   * @deprecated Use xRay instead.
   * @return {Boolean} Whether X-ray mode is enabled.
   */
  isXRayEnabled() {
    return this.xRay;
  }
  /**
   * Enables or disables X-ray outlines.
   *
   * @deprecated Use xRay instead.
   * @param {Boolean} value - Whether X-ray should be enabled.
   */
  setXRayEnabled(n) {
    this.xRay = n;
  }
  /**
   * The pattern texture. Set to `null` to disable.
   *
   * @type {Texture}
   */
  get patternTexture() {
    return this.uniforms.get("patternTexture").value;
  }
  set patternTexture(n) {
    n !== null ? (n.wrapS = n.wrapT = 1e3, this.defines.set("USE_PATTERN", "1"), this.setVertexShader(h0)) : (this.defines.delete("USE_PATTERN"), this.setVertexShader(null)), this.uniforms.get("patternTexture").value = n, this.setChanged();
  }
  /**
   * Sets the pattern texture.
   *
   * @deprecated Use patternTexture instead.
   * @param {Texture} value - The new texture.
   */
  setPatternTexture(n) {
    this.patternTexture = n;
  }
  /**
   * Returns the current resolution scale.
   *
   * @return {Number} The resolution scale.
   * @deprecated Use resolution instead.
   */
  getResolutionScale() {
    return this.resolution.scale;
  }
  /**
   * Sets the resolution scale.
   *
   * @param {Number} scale - The new resolution scale.
   * @deprecated Use resolution instead.
   */
  setResolutionScale(n) {
    this.resolution.scale = n;
  }
  /**
   * Clears the current selection and selects a list of objects.
   *
   * @param {Object3D[]} objects - The objects that should be outlined. This array will be copied.
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.set() instead.
   */
  setSelection(n) {
    return this.selection.set(n), this;
  }
  /**
   * Clears the list of selected objects.
   *
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.clear() instead.
   */
  clearSelection() {
    return this.selection.clear(), this;
  }
  /**
   * Selects an object.
   *
   * @param {Object3D} object - The object that should be outlined.
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.add() instead.
   */
  selectObject(n) {
    return this.selection.add(n), this;
  }
  /**
   * Deselects an object.
   *
   * @param {Object3D} object - The object that should no longer be outlined.
   * @return {OutlinePass} This pass.
   * @deprecated Use selection.delete() instead.
   */
  deselectObject(n) {
    return this.selection.delete(n), this;
  }
  /**
   * Updates this effect.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
   * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
   */
  update(n, e, t) {
    const i = this.scene, r = this.camera, s = this.selection, o = this.uniforms.get("pulse"), c = i.background, l = r.layers.mask;
    (this.forceUpdate || s.size > 0) && (i.background = null, o.value = 1, this.pulseSpeed > 0 && (o.value = Math.cos(this.time * this.pulseSpeed * 10) * 0.375 + 0.625), this.time += t, s.setVisible(!1), this.depthPass.render(n), s.setVisible(!0), r.layers.set(s.layer), this.maskPass.render(n, this.renderTargetMask), r.layers.mask = l, i.background = c, this.outlinePass.render(n, null, this.renderTargetOutline), this.blurPass.enabled && this.blurPass.render(n, this.renderTargetOutline, this.renderTargetOutline)), this.forceUpdate = s.size > 0;
  }
  /**
   * Updates the size of internal render targets.
   *
   * @param {Number} width - The width.
   * @param {Number} height - The height.
   */
  setSize(n, e) {
    this.blurPass.setSize(n, e), this.renderTargetMask.setSize(n, e);
    const t = this.resolution;
    t.setBaseSize(n, e);
    const i = t.width, r = t.height;
    this.depthPass.setSize(i, r), this.renderTargetOutline.setSize(i, r), this.outlinePass.fullscreenMaterial.setSize(i, r);
  }
  /**
   * Performs initialization tasks.
   *
   * @param {WebGLRenderer} renderer - The renderer.
   * @param {Boolean} alpha - Whether the renderer uses the alpha channel or not.
   * @param {Number} frameBufferType - The type of the main frame buffers.
   */
  initialize(n, e, t) {
    this.blurPass.initialize(n, e, 1009), t !== void 0 && (this.depthPass.initialize(n, e, t), this.maskPass.initialize(n, e, t), this.outlinePass.initialize(n, e, t));
  }
}, g0 = `precision highp float;attribute float a_index;varying vec3 v_position;varying float v_color;uniform float uTime;uniform float uPixelRatio;uniform vec3 uMouse;uniform float uCenterHeight;uniform float uSampleBase4Layer1;
#ifndef RANDOM_SCALE
#ifdef RANDOM_HIGHER_RANGE
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif
#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x){
#ifdef RANDOM_SINLESS
x=fract(x*RANDOM_SCALE.x);x*=x+33.33;x*=x+x;return fract(x);
#else
return fract(sin(x)*43758.5453);
#endif
}float random(in vec2 st){
#ifdef RANDOM_SINLESS
vec3 p3=fract(vec3(st.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);
#else
return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
#endif
}float random(in vec3 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE.xyz);pos+=dot(pos,pos.zyx+31.32);return fract((pos.x+pos.y)*pos.z);
#else
return fract(sin(dot(pos.xyz,vec3(70.9898,78.233,32.4355)))*43758.5453123);
#endif
}float random(in vec4 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE);pos+=dot(pos,pos.wzxy+33.33);return fract((pos.x+pos.y)*(pos.z+pos.w));
#else
float dot_product=dot(pos,vec4(12.9898,78.233,45.164,94.673));return fract(sin(dot_product)*43758.5453);
#endif
}vec2 random2(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec2 p){vec3 p3=fract(p.xyx*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec3 p3){p3=fract(p3*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec3 random3(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec2 p){vec3 p3=fract(vec3(p.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yxz+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec3 p){p=fract(p*RANDOM_SCALE.xyz);p+=dot(p,p.yxz+19.19);return fract((p.xxy+p.yzz)*p.zyx);}vec4 random4(float p){vec4 p4=fract(p*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec2 p){vec4 p4=fract(p.xyxy*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec3 p){vec4 p4=fract(p.xyzx*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec4 p4){p4=fract(p4*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#endif
#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}float snoise(in vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}float snoise(in vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(.309016994374947451)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}vec2 snoise2(vec2 x){float s=snoise(vec2(x));float s1=snoise(vec2(x.y-19.1,x.x+47.2));return vec2(s,s1);}vec3 snoise3(vec3 x){float s=snoise(vec3(x));float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));return vec3(s,s1,s2);}vec3 snoise3(vec4 x){float s=snoise(vec4(x));float s1=snoise(vec4(x.y-19.1,x.z+33.4,x.x+47.2,x.w));float s2=snoise(vec4(x.z+74.2,x.x-124.5,x.y+99.4,x.w));return vec3(s,s1,s2);}
#endif
float cubicBezier2D(float t,vec2 p1,vec2 p2){vec2 p0=vec2(1.0,1.0);vec2 p3=vec2(0.0,0.0);float u=1.0-t;float tt=t*t;float uu=u*u;float uuu=uu*u;float ttt=tt*t;vec2 p=uuu*p0;p+=3.0*uu*t*p1;p+=3.0*u*tt*p2;p+=ttt*p3;return p.y;}
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
float remap(float value,float sourceMin,float sourceMax,float targetMin,float targetMax){float normalized=(value-sourceMin)/(sourceMax-sourceMin);return targetMin+normalized*(targetMax-targetMin);}const float noise_particle_freqX=2.0;const float noise_particle_freqY=1.0;const float noise_particle_freqZ=6.0;float noise_value(vec3 pos){vec3 scale_sample_pos=vec3(pos.x*noise_particle_freqX,pos.y*noise_particle_freqY,pos.z*noise_particle_freqZ);return cnoise(scale_sample_pos);}float noise_scale(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.1,0.7);}float noise_color(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.2,1.0);}float up_offset(vec2 pos){float dist=distance(pos,vec2(0.0,0.0));float dist_remap=smoothstep(0.0,0.1,dist);return cubicBezier2D(dist_remap,vec2(0.95,0.05),vec2(0.65,0.01));}const float noise_layer_1_amp=0.82;const float noise_layer_1_freq=0.67;const float noise_layer_2_amp=0.3;const float noise_layer_2_freq=0.5;const float noise_layer_3_amp=0.016;const float noise_layer_3_freq=50.0;const float noise_layer_4_amp=0.5;const float noise_layer_4_freq=3.0;const float noise_scale_amp=0.9;const float noise_scale_freq=2.0;const float noise_color_amp=3.0;const float noise_color_freq=3.0;const float noise_interact_freq=5.0;void main(){v_position=position;float offset_x_layer1=0.03*uTime;float offset_x_layer2=0.05*uTime;float offset_x_layer4=0.05*uTime;float offset_color=0.2*uTime;vec3 sample_pos_layer1=vec3(v_position.x+offset_x_layer1,v_position.y+uSampleBase4Layer1,v_position.z);vec3 sample_pos_layer2=vec3(v_position.x-offset_x_layer2,v_position.y,v_position.z);vec3 sample_pos_layer4=vec3(v_position.x-offset_x_layer4,v_position.y,v_position.z);vec3 sample_pos_color=vec3(v_position.x+3.0,v_position.y-offset_color,2.5*v_position.z);vec3 sample_pos_scale=vec3(v_position.x-offset_color,v_position.y+1.0,v_position.z);float noise_layer_1=snoise(sample_pos_layer1*noise_layer_1_freq)*noise_layer_1_amp;float noise_layer_2=snoise(sample_pos_layer2*noise_layer_2_freq+0.5)*noise_layer_2_amp;float noise_layer_3=cnoise(v_position.xyz*noise_layer_3_freq)*noise_layer_3_amp;float noise_layer_4=cnoise(sample_pos_layer4*noise_layer_4_freq)*noise_layer_4_amp;float noise_scale=cnoise(sample_pos_scale*noise_scale_freq+1.0)*noise_scale_amp;float noise_color=cnoise(sample_pos_color*noise_color_freq)*noise_color_amp;v_color=remap(noise_color,-1.0,1.0,0.2,1.0);noise_scale=remap(noise_scale,-1.0,1.0,0.3,0.9);float rnd=random(a_index);if(rnd*100000.0<1.0){noise_scale*=4.0;v_color=1.5;}gl_PointSize=4.0*uPixelRatio*noise_scale;v_position.y+=(noise_layer_3+noise_layer_1*noise_layer_1);v_position.x+=noise_layer_3*3.3;noise_layer_4=remap(noise_layer_4,0.0,1.0,0.15,1.0);v_position.y+=up_offset(v_position.xz)*noise_layer_4*uCenterHeight;vec4 world_pos=modelMatrix*vec4(v_position.xyz,1.0);float dispalce=length(world_pos.xy-uMouse.xy);vec3 dir=normalize(world_pos.xyz-uMouse.xyz);float offset_interact=0.1*uTime;vec3 sample_pos_interact=vec3(v_position.x-offset_interact,v_position.y,v_position.z);float noise_displace=snoise(sample_pos_interact*noise_interact_freq);noise_displace=remap(noise_displace,-1.0,1.0,0.05,0.6);world_pos.xyz+=dir*0.2*smoothstep(noise_displace*noise_displace,0.0,dispalce);gl_Position=projectionMatrix*modelViewMatrix*world_pos;}`, m0 = "precision highp float;varying vec3 v_position;varying float v_color;void main(){float dist=length(gl_PointCoord-vec2(0.5,0.5));float radius=0.5;float edge=0.1;float alpha=1.0-2.0*smoothstep(radius-edge,radius,dist);if(alpha<0.1)discard;gl_FragColor=vec4(vec3(1.0)*v_color*0.4,alpha);}";
function jn(n = 0, e = 1) {
  const t = 1 - Math.random(), i = Math.random();
  return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * i) * e + n;
}
const v0 = 160, x0 = 160, _0 = 3.6, y0 = 3.6, qs = 0.1, S0 = 30, M0 = 30, w0 = ({
  xCount: n,
  yCount: e,
  shaders: t
}) => {
  const i = new Lt(), r = new Zn(_0, y0, n || v0, e || x0);
  r.rotateX(Math.PI / 2), r.rotateY(Math.PI / 4), r.rotateX(-Math.PI / 60);
  const s = r.getAttribute("position").count, a = S0 * M0, o = s + a, c = new Uint16Array(o), l = new Float32Array(o * 3);
  let f = 0, d = 0;
  for (l.set(r.getAttribute("position").array); f < s; )
    c[d] = d, d++, f++;
  for (f = 0; f < a; )
    c[d] = d, l[d * 3] = jn(0, 1) * qs, l[d * 3 + 1] = 0, l[d * 3 + 2] = jn(0, 1) * qs, d++, f++;
  i.setAttribute("a_index", new tt(c, 1, !1)), i.setAttribute("position", new tt(l, 3));
  const h = new at({
    uniforms: {
      uTotal: { value: o },
      uTime: { value: 0 },
      uPixelRatio: { value: window.devicePixelRatio },
      uMouse: { value: new D(999, 999, 0) },
      uTouch: { value: null },
      uCenterHeight: { value: t.centerHeight },
      uSampleBase4Layer1: { value: t.sampleBase4Layer1 }
    },
    vertexShader: g0,
    fragmentShader: m0,
    depthTest: !0,
    depthWrite: !0,
    transparent: !0,
    blending: 1,
    wireframe: !1
  });
  return [new qi(i, h), h];
};
var E0 = `precision highp float;attribute float a_index;attribute float a_is_gaussian;varying vec3 v_position;varying float v_color;uniform float uTotal;uniform float uTime;uniform float uPixelRatio;uniform vec3 uMouse;uniform float uCenterHeight;uniform float uYOffset;uniform float uRadius;
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#endif
#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}float snoise(in vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}float snoise(in vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(.309016994374947451)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}vec2 snoise2(vec2 x){float s=snoise(vec2(x));float s1=snoise(vec2(x.y-19.1,x.x+47.2));return vec2(s,s1);}vec3 snoise3(vec3 x){float s=snoise(vec3(x));float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));return vec3(s,s1,s2);}vec3 snoise3(vec4 x){float s=snoise(vec4(x));float s1=snoise(vec4(x.y-19.1,x.z+33.4,x.x+47.2,x.w));float s2=snoise(vec4(x.z+74.2,x.x-124.5,x.y+99.4,x.w));return vec3(s,s1,s2);}
#endif
#ifndef RANDOM_SCALE
#ifdef RANDOM_HIGHER_RANGE
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif
#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x){
#ifdef RANDOM_SINLESS
x=fract(x*RANDOM_SCALE.x);x*=x+33.33;x*=x+x;return fract(x);
#else
return fract(sin(x)*43758.5453);
#endif
}float random(in vec2 st){
#ifdef RANDOM_SINLESS
vec3 p3=fract(vec3(st.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);
#else
return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
#endif
}float random(in vec3 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE.xyz);pos+=dot(pos,pos.zyx+31.32);return fract((pos.x+pos.y)*pos.z);
#else
return fract(sin(dot(pos.xyz,vec3(70.9898,78.233,32.4355)))*43758.5453123);
#endif
}float random(in vec4 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE);pos+=dot(pos,pos.wzxy+33.33);return fract((pos.x+pos.y)*(pos.z+pos.w));
#else
float dot_product=dot(pos,vec4(12.9898,78.233,45.164,94.673));return fract(sin(dot_product)*43758.5453);
#endif
}vec2 random2(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec2 p){vec3 p3=fract(p.xyx*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec3 p3){p3=fract(p3*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec3 random3(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec2 p){vec3 p3=fract(vec3(p.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yxz+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec3 p){p=fract(p*RANDOM_SCALE.xyz);p+=dot(p,p.yxz+19.19);return fract((p.xxy+p.yzz)*p.zyx);}vec4 random4(float p){vec4 p4=fract(p*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec2 p){vec4 p4=fract(p.xyxy*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec3 p){vec4 p4=fract(p.xyzx*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec4 p4){p4=fract(p4*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
float cubicBezier2D(float t,vec2 p1,vec2 p2){vec2 p0=vec2(1.0,1.0);vec2 p3=vec2(0.0,0.0);float u=1.0-t;float tt=t*t;float uu=u*u;float uuu=uu*u;float ttt=tt*t;vec2 p=uuu*p0;p+=3.0*uu*t*p1;p+=3.0*u*tt*p2;p+=ttt*p3;return p.y;}
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
float remap(float value,float sourceMin,float sourceMax,float targetMin,float targetMax){float normalized=(value-sourceMin)/(sourceMax-sourceMin);return targetMin+normalized*(targetMax-targetMin);}const float noise_particle_freqX=2.0;const float noise_particle_freqY=1.0;const float noise_particle_freqZ=6.0;float noise_value(vec3 pos){vec3 scale_sample_pos=vec3(pos.x*noise_particle_freqX,pos.y*noise_particle_freqY,pos.z*noise_particle_freqZ);return cnoise(scale_sample_pos);}float noise_scale(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.1,0.7);}float noise_color(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.2,1.0);}float down_offset(vec2 pos){float dist=distance(pos,vec2(0.0,0.0));float dist_remap=clamp(dist,0.0,0.18);dist_remap=mix(0.0,1.0,dist_remap/0.18);return cubicBezier2D(dist_remap,vec2(0.0,0.0),vec2(0.0,0.0));}const float noise_layer_1_amp=7.5;const float noise_layer_1_freq=0.3;const float noise_gaussian_amp=1.5;const float noise_gaussian_freq=1.0;const float noise_layer_3_amp=0.015;const float noise_layer_3_freq=25.0;const float noise_layer_4_amp=0.5;const float noise_layer_4_freq=2.0;const float noise_scale_amp=1.0;const float noise_scale_freq=1.0;const float noise_interact_freq=5.0;void main(){v_position=position;float noise_scale=snoise(v_position.xyz);v_color=noise_color(v_position.xyz);noise_scale=remap(noise_scale,-1.0,1.0,0.2,1.0);float rnd=random(a_index+0.05);if(rnd*10000.0<0.1){noise_scale*=4.0;v_color=1.5;}gl_PointSize=4.0*uPixelRatio*noise_scale;vec3 dest_pos=v_position;dest_pos.y-=5.2;float offset_x_layer1=0.04*uTime;float offset_gaussian=0.2*uTime;vec3 sample_pos_layer1=a_is_gaussian==0.0 ? vec3(dest_pos.x+offset_x_layer1,dest_pos.y,dest_pos.z): vec3(dest_pos.x+offset_gaussian,dest_pos.y,dest_pos.z);vec3 noise_pos=a_is_gaussian==0.0 ? snoise3((dest_pos.xyz+sample_pos_layer1)*noise_layer_1_freq+7.9)*noise_layer_1_amp : snoise3((dest_pos.xyz+sample_pos_layer1)*noise_gaussian_freq)*noise_gaussian_amp;vec3 noise_filter=vec3(1.0-a_is_gaussian,1.0,1.0-a_is_gaussian);dest_pos.xyz+=noise_pos*noise_filter;dest_pos.xyz=dest_pos.xyz*1.3/distance(dest_pos.xyz,vec3(0.0,0.0,0.0));vec3 noise_pos_detail=snoise3(v_position.xyz*noise_layer_3_freq)*noise_layer_3_amp;dest_pos.xyz+=noise_pos_detail;dest_pos.y+=2.66;float offset_x_layer4=0.005*uTime;vec3 sample_pos_layer4=vec3(v_position.x-offset_x_layer4,v_position.y,v_position.z);float noise_layer_4=cnoise(sample_pos_layer4*noise_layer_4_freq)*noise_layer_4_amp;noise_layer_4=remap(noise_layer_4,-1.0,1.0,0.15,1.0);dest_pos.y-=down_offset(dest_pos.xz)*noise_layer_4*uCenterHeight;vec4 world_pos=modelMatrix*vec4(dest_pos.xyz,1.0);float dispalce=length(world_pos.xy-uMouse.xy);vec3 dir=normalize(world_pos.xyz-uMouse.xyz);float offset_interact=0.1*uTime;vec3 sample_pos_interact=vec3(v_position.x-offset_interact,v_position.y,v_position.z);float noise_displace=snoise(sample_pos_interact*noise_interact_freq);noise_displace=remap(noise_displace,-1.0,1.0,0.05,0.3);world_pos.xyz+=dir*0.2*smoothstep(noise_displace,0.0,dispalce);gl_Position=projectionMatrix*modelViewMatrix*world_pos;}`, T0 = "precision highp float;varying vec3 v_position;varying float v_color;void main(){float dist=length(gl_PointCoord-vec2(0.5,0.5));float radius=0.5;float edge=0.05;float alpha=1.0-2.0*smoothstep(radius-edge,radius,dist);if(alpha<0.1)discard;gl_FragColor=vec4(vec3(1.0)*v_color*0.35,alpha);}";
const b0 = 100, P0 = 100, Xs = 1, Ys = 0.2, A0 = 15, C0 = 15, z0 = ({
  xCount: n,
  yCount: e,
  shaders: t
}) => {
  const i = new Lt(), r = new Xi(Xs, n || b0, e || P0), s = r.getAttribute("position").count, a = A0 * C0, o = s + a, c = new Uint16Array(o), l = new Uint16Array(o), f = new Float32Array(o * 3);
  let d = 0, h = 0;
  for (f.set(r.getAttribute("position").array); d < s; )
    c[h] = h, l[h] = 0, h++, d++;
  for (d = 0; d < a; )
    c[h] = h, l[h] = 1, f[h * 3] = jn(0, 1) * Ys, f[h * 3 + 1] = -Xs, f[h * 3 + 2] = jn(0, 1) * Ys, h++, d++;
  i.setAttribute("a_index", new tt(c, 1, !1)), i.setAttribute("position", new tt(f, 3)), i.setAttribute("a_is_gaussian", new tt(l, 1, !1));
  const g = new at({
    uniforms: {
      uTotal: { value: o },
      uTime: { value: 0 },
      uPixelRatio: { value: window.devicePixelRatio },
      uMouse: { value: new D(999, 999, 0) },
      uCenterHeight: { value: t.centerHeight },
      uYOffset: { value: t.offsetY },
      uRadius: { value: t.radius }
    },
    vertexShader: E0,
    fragmentShader: T0,
    depthTest: !0,
    depthWrite: !0,
    transparent: !0,
    blending: 1,
    wireframe: !1
  });
  return [new qi(i, g), g];
};
var R0 = `precision highp float;attribute float a_index;attribute float a_is_gaussian;varying vec3 v_position;varying float v_color;uniform float uTotal;uniform float uTime;uniform float uPixelRatio;uniform vec3 uMouse;uniform float uCenterHeight;uniform float uYOffset;uniform float uRadius;
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#endif
#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}float snoise(in vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}float snoise(in vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(.309016994374947451)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}vec2 snoise2(vec2 x){float s=snoise(vec2(x));float s1=snoise(vec2(x.y-19.1,x.x+47.2));return vec2(s,s1);}vec3 snoise3(vec3 x){float s=snoise(vec3(x));float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));return vec3(s,s1,s2);}vec3 snoise3(vec4 x){float s=snoise(vec4(x));float s1=snoise(vec4(x.y-19.1,x.z+33.4,x.x+47.2,x.w));float s2=snoise(vec4(x.z+74.2,x.x-124.5,x.y+99.4,x.w));return vec3(s,s1,s2);}
#endif
#ifndef RANDOM_SCALE
#ifdef RANDOM_HIGHER_RANGE
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif
#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x){
#ifdef RANDOM_SINLESS
x=fract(x*RANDOM_SCALE.x);x*=x+33.33;x*=x+x;return fract(x);
#else
return fract(sin(x)*43758.5453);
#endif
}float random(in vec2 st){
#ifdef RANDOM_SINLESS
vec3 p3=fract(vec3(st.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);
#else
return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
#endif
}float random(in vec3 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE.xyz);pos+=dot(pos,pos.zyx+31.32);return fract((pos.x+pos.y)*pos.z);
#else
return fract(sin(dot(pos.xyz,vec3(70.9898,78.233,32.4355)))*43758.5453123);
#endif
}float random(in vec4 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE);pos+=dot(pos,pos.wzxy+33.33);return fract((pos.x+pos.y)*(pos.z+pos.w));
#else
float dot_product=dot(pos,vec4(12.9898,78.233,45.164,94.673));return fract(sin(dot_product)*43758.5453);
#endif
}vec2 random2(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec2 p){vec3 p3=fract(p.xyx*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec3 p3){p3=fract(p3*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec3 random3(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec2 p){vec3 p3=fract(vec3(p.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yxz+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec3 p){p=fract(p*RANDOM_SCALE.xyz);p+=dot(p,p.yxz+19.19);return fract((p.xxy+p.yzz)*p.zyx);}vec4 random4(float p){vec4 p4=fract(p*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec2 p){vec4 p4=fract(p.xyxy*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec3 p){vec4 p4=fract(p.xyzx*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec4 p4){p4=fract(p4*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
float cubicBezier2D(float t,vec2 p1,vec2 p2){vec2 p0=vec2(1.0,1.0);vec2 p3=vec2(0.0,0.0);float u=1.0-t;float tt=t*t;float uu=u*u;float uuu=uu*u;float ttt=tt*t;vec2 p=uuu*p0;p+=3.0*uu*t*p1;p+=3.0*u*tt*p2;p+=ttt*p3;return p.y;}
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
float remap(float value,float sourceMin,float sourceMax,float targetMin,float targetMax){float normalized=(value-sourceMin)/(sourceMax-sourceMin);return targetMin+normalized*(targetMax-targetMin);}const float noise_particle_freqX=2.0;const float noise_particle_freqY=1.0;const float noise_particle_freqZ=6.0;float noise_value(vec3 pos){vec3 scale_sample_pos=vec3(pos.x*noise_particle_freqX,pos.y*noise_particle_freqY,pos.z*noise_particle_freqZ);return cnoise(scale_sample_pos);}float noise_scale(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.1,0.7);}float noise_color(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.2,1.0);}float down_offset(vec2 pos){float dist=distance(pos,vec2(0.0,0.0));float dist_remap=clamp(dist,0.0,0.13);dist_remap=mix(0.0,1.0,dist_remap/0.13);return cubicBezier2D(dist_remap,vec2(0.0,0.0),vec2(0.0,0.0));}const float noise_layer_1_amp=4.5;const float noise_layer_1_freq=0.25;const float noise_gaussian_amp=1.5;const float noise_gaussian_freq=1.0;const float noise_layer_3_amp=0.01;const float noise_layer_3_freq=25.0;const float noise_layer_4_amp=0.5;const float noise_layer_4_freq=2.0;const float noise_scale_amp=1.0;const float noise_scale_freq=1.0;const float noise_interact_freq=5.0;void main(){v_position=position;float noise_scale=snoise(v_position.xyz);v_color=noise_color(v_position.xyz);noise_scale=remap(noise_scale,-1.0,1.0,0.2,1.0);float rnd=random(a_index+0.1);if(rnd*100000.0<1.0){noise_scale*=3.5;v_color=1.5;}gl_PointSize=4.0*uPixelRatio*noise_scale;vec3 dest_pos=v_position;dest_pos.y-=5.5;float offset_x_layer1=0.03*uTime;float offset_gaussian=0.2*uTime;vec3 sample_pos_layer1=a_is_gaussian==0.0 ? vec3(dest_pos.x+offset_x_layer1,dest_pos.y,dest_pos.z): vec3(dest_pos.x+offset_gaussian,dest_pos.y,dest_pos.z);vec3 noise_pos=a_is_gaussian==0.0 ? snoise3((dest_pos.xyz+sample_pos_layer1)*noise_layer_1_freq)*noise_layer_1_amp : snoise3((dest_pos.xyz+sample_pos_layer1)*noise_gaussian_freq)*noise_gaussian_amp;vec3 noise_filter=vec3(1.0-a_is_gaussian,1.0,1.0-a_is_gaussian);dest_pos.xyz+=noise_pos*noise_filter;dest_pos.xyz=dest_pos.xyz*1.1/distance(dest_pos.xyz,vec3(0.0,0.0,0.0));vec3 noise_pos_detail=snoise3(v_position.xyz*noise_layer_3_freq)*noise_layer_3_amp;dest_pos.xyz+=noise_pos_detail;dest_pos.y+=2.7;float offset_x_layer4=0.005*uTime;vec3 sample_pos_layer4=vec3(v_position.x-offset_x_layer4,v_position.y,v_position.z);float noise_layer_4=cnoise(sample_pos_layer4*noise_layer_4_freq)*noise_layer_4_amp;noise_layer_4=remap(noise_layer_4,-1.0,1.0,0.15,1.0);dest_pos.y-=down_offset(dest_pos.xz)*noise_layer_4*uCenterHeight;vec4 world_pos=modelMatrix*vec4(dest_pos.xyz,1.0);float dispalce=length(world_pos.xy-uMouse.xy);vec3 dir=normalize(world_pos.xyz-uMouse.xyz);float offset_interact=0.1*uTime;vec3 sample_pos_interact=vec3(v_position.x-offset_interact,v_position.y,v_position.z);float noise_displace=snoise(sample_pos_interact*noise_interact_freq);noise_displace=remap(noise_displace,-1.0,1.0,0.05,0.3);world_pos.xyz+=dir*0.2*smoothstep(noise_displace,0.0,dispalce);gl_Position=projectionMatrix*modelViewMatrix*world_pos;}`, L0 = "precision highp float;varying vec3 v_position;varying float v_color;void main(){float dist=length(gl_PointCoord-vec2(0.5,0.5));float radius=0.3;float edge=0.05;float alpha=1.0-2.0*smoothstep(radius-edge,radius,dist);if(alpha<0.1)discard;gl_FragColor=vec4(vec3(1.0)*v_color*0.35,alpha);}";
const D0 = 100, N0 = 100, js = 1, Zs = 0.2, F0 = 15, I0 = 15, U0 = ({
  xCount: n,
  yCount: e,
  shaders: t
}) => {
  const i = new Lt(), r = new Xi(js, n || D0, e || N0), s = r.getAttribute("position").count, a = F0 * I0, o = s + a, c = new Uint16Array(o), l = new Uint16Array(o), f = new Float32Array(o * 3);
  let d = 0, h = 0;
  for (f.set(r.getAttribute("position").array); d < s; )
    c[h] = h, l[h] = 0, h++, d++;
  for (d = 0; d < a; )
    c[h] = h, l[h] = 1, f[h * 3] = jn(0, 1) * Zs, f[h * 3 + 1] = -js, f[h * 3 + 2] = jn(0, 1) * Zs, h++, d++;
  i.setAttribute("a_index", new tt(c, 1, !1)), i.setAttribute("position", new tt(f, 3)), i.setAttribute("a_is_gaussian", new tt(l, 1, !1));
  const g = new at({
    uniforms: {
      uTotal: { value: o },
      uTime: { value: 0 },
      uPixelRatio: { value: window.devicePixelRatio },
      uMouse: { value: new D(999, 999, 0) },
      uCenterHeight: { value: t.centerHeight },
      uYOffset: { value: t.offsetY },
      uRadius: { value: t.radius }
    },
    vertexShader: R0,
    fragmentShader: L0,
    depthTest: !0,
    depthWrite: !0,
    transparent: !0,
    blending: 1,
    wireframe: !1
  });
  return [new qi(i, g), g];
};
var O0 = `precision highp float;attribute float a_index;varying vec3 v_position;varying float v_color;uniform float uTotal;uniform float uTime;uniform float uPixelRatio;uniform vec3 uMouse;
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_GRAD4
#define FNC_GRAD4
vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#endif
#ifndef FNC_SNOISE
#define FNC_SNOISE
float snoise(in vec2 v){const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);vec2 i=floor(v+dot(v,C.yy));vec2 x0=v-i+dot(i,C.xx);vec2 i1;i1=(x0.x>x0.y)? vec2(1.0,0.0): vec2(0.0,1.0);vec4 x12=x0.xyxy+C.xxzz;x12.xy-=i1;i=mod289(i);vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);m=m*m;m=m*m;vec3 x=2.0*fract(p*C.www)-1.0;vec3 h=abs(x)-0.5;vec3 ox=floor(x+0.5);vec3 a0=x-ox;m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);vec3 g;g.x=a0.x*x0.x+h.x*x0.y;g.yz=a0.yz*x12.xz+h.yz*x12.yw;return 130.0*dot(m,g);}float snoise(in vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}float snoise(in vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(.309016994374947451)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}vec2 snoise2(vec2 x){float s=snoise(vec2(x));float s1=snoise(vec2(x.y-19.1,x.x+47.2));return vec2(s,s1);}vec3 snoise3(vec3 x){float s=snoise(vec3(x));float s1=snoise(vec3(x.y-19.1,x.z+33.4,x.x+47.2));float s2=snoise(vec3(x.z+74.2,x.x-124.5,x.y+99.4));return vec3(s,s1,s2);}vec3 snoise3(vec4 x){float s=snoise(vec4(x));float s1=snoise(vec4(x.y-19.1,x.z+33.4,x.x+47.2,x.w));float s2=snoise(vec4(x.z+74.2,x.x-124.5,x.y+99.4,x.w));return vec3(s,s1,s2);}
#endif
#ifndef RANDOM_SCALE
#ifdef RANDOM_HIGHER_RANGE
#define RANDOM_SCALE vec4(.1031, .1030, .0973, .1099)
#else
#define RANDOM_SCALE vec4(443.897, 441.423, .0973, .1099)
#endif
#endif
#ifndef FNC_RANDOM
#define FNC_RANDOM
float random(in float x){
#ifdef RANDOM_SINLESS
x=fract(x*RANDOM_SCALE.x);x*=x+33.33;x*=x+x;return fract(x);
#else
return fract(sin(x)*43758.5453);
#endif
}float random(in vec2 st){
#ifdef RANDOM_SINLESS
vec3 p3=fract(vec3(st.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+33.33);return fract((p3.x+p3.y)*p3.z);
#else
return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
#endif
}float random(in vec3 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE.xyz);pos+=dot(pos,pos.zyx+31.32);return fract((pos.x+pos.y)*pos.z);
#else
return fract(sin(dot(pos.xyz,vec3(70.9898,78.233,32.4355)))*43758.5453123);
#endif
}float random(in vec4 pos){
#ifdef RANDOM_SINLESS
pos=fract(pos*RANDOM_SCALE);pos+=dot(pos,pos.wzxy+33.33);return fract((pos.x+pos.y)*(pos.z+pos.w));
#else
float dot_product=dot(pos,vec4(12.9898,78.233,45.164,94.673));return fract(sin(dot_product)*43758.5453);
#endif
}vec2 random2(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec2 p){vec3 p3=fract(p.xyx*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec2 random2(vec3 p3){p3=fract(p3*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xx+p3.yz)*p3.zy);}vec3 random3(float p){vec3 p3=fract(vec3(p)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yzx+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec2 p){vec3 p3=fract(vec3(p.xyx)*RANDOM_SCALE.xyz);p3+=dot(p3,p3.yxz+19.19);return fract((p3.xxy+p3.yzz)*p3.zyx);}vec3 random3(vec3 p){p=fract(p*RANDOM_SCALE.xyz);p+=dot(p,p.yxz+19.19);return fract((p.xxy+p.yzz)*p.zyx);}vec4 random4(float p){vec4 p4=fract(p*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec2 p){vec4 p4=fract(p.xyxy*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec3 p){vec4 p4=fract(p.xyzx*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}vec4 random4(vec4 p4){p4=fract(p4*RANDOM_SCALE);p4+=dot(p4,p4.wzxy+19.19);return fract((p4.xxyz+p4.yzzw)*p4.zywx);}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
float cubicBezier2D(float t,vec2 p1,vec2 p2){vec2 p0=vec2(1.0,1.0);vec2 p3=vec2(0.0,0.0);float u=1.0-t;float tt=t*t;float uu=u*u;float uuu=uu*u;float ttt=tt*t;vec2 p=uuu*p0;p+=3.0*uu*t*p1;p+=3.0*u*tt*p2;p+=ttt*p3;return p.y;}
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_MOD289
#define FNC_MOD289
float mod289(const in float x){return x-floor(x*(1./289.))*289.;}vec2 mod289(const in vec2 x){return x-floor(x*(1./289.))*289.;}vec3 mod289(const in vec3 x){return x-floor(x*(1./289.))*289.;}vec4 mod289(const in vec4 x){return x-floor(x*(1./289.))*289.;}
#endif
#ifndef FNC_PERMUTE
#define FNC_PERMUTE
float permute(const in float v){return mod289(((v*34.0)+1.0)*v);}vec2 permute(const in vec2 v){return mod289(((v*34.0)+1.0)*v);}vec3 permute(const in vec3 v){return mod289(((v*34.0)+1.0)*v);}vec4 permute(const in vec4 v){return mod289(((v*34.0)+1.0)*v);}
#endif
#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r){return 1.79284291400159-0.85373472095314*r;}vec2 taylorInvSqrt(in vec2 r){return 1.79284291400159-0.85373472095314*r;}vec3 taylorInvSqrt(in vec3 r){return 1.79284291400159-0.85373472095314*r;}vec4 taylorInvSqrt(in vec4 r){return 1.79284291400159-0.85373472095314*r;}
#endif
#ifndef FNC_QUINTIC
#define FNC_QUINTIC
float quintic(const in float v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec2 quintic(const in vec2 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec3 quintic(const in vec3 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}vec4 quintic(const in vec4 v){return v*v*v*(v*(v*6.0-15.0)+10.0);}
#endif
#ifndef FNC_CNOISE
#define FNC_CNOISE
float cnoise(in vec2 P){vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);Pi=mod289(Pi);vec4 ix=Pi.xzxz;vec4 iy=Pi.yyww;vec4 fx=Pf.xzxz;vec4 fy=Pf.yyww;vec4 i=permute(permute(ix)+iy);vec4 gx=fract(i*(1.0/41.0))*2.0-1.0;vec4 gy=abs(gx)-0.5;vec4 tx=floor(gx+0.5);gx=gx-tx;vec2 g00=vec2(gx.x,gy.x);vec2 g10=vec2(gx.y,gy.y);vec2 g01=vec2(gx.z,gy.z);vec2 g11=vec2(gx.w,gy.w);vec4 norm=taylorInvSqrt(vec4(dot(g00,g00),dot(g01,g01),dot(g10,g10),dot(g11,g11)));g00*=norm.x;g01*=norm.y;g10*=norm.z;g11*=norm.w;float n00=dot(g00,vec2(fx.x,fy.x));float n10=dot(g10,vec2(fx.y,fy.y));float n01=dot(g01,vec2(fx.z,fy.z));float n11=dot(g11,vec2(fx.w,fy.w));vec2 fade_xy=quintic(Pf.xy);vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);float n_xy=mix(n_x.x,n_x.y,fade_xy.y);return 2.3*n_xy;}float cnoise(in vec3 P){vec3 Pi0=floor(P);vec3 Pi1=Pi0+vec3(1.0);Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P);vec3 Pf1=Pf0-vec3(1.0);vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=quintic(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}float cnoise(in vec4 P){vec4 Pi0=floor(P);vec4 Pi1=Pi0+1.0;Pi0=mod289(Pi0);Pi1=mod289(Pi1);vec4 Pf0=fract(P);vec4 Pf1=Pf0-1.0;vec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=vec4(Pi0.zzzz);vec4 iz1=vec4(Pi1.zzzz);vec4 iw0=vec4(Pi0.wwww);vec4 iw1=vec4(Pi1.wwww);vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 ixy00=permute(ixy0+iw0);vec4 ixy01=permute(ixy0+iw1);vec4 ixy10=permute(ixy1+iw0);vec4 ixy11=permute(ixy1+iw1);vec4 gx00=ixy00*(1.0/7.0);vec4 gy00=floor(gx00)*(1.0/7.0);vec4 gz00=floor(gy00)*(1.0/6.0);gx00=fract(gx00)-0.5;gy00=fract(gy00)-0.5;gz00=fract(gz00)-0.5;vec4 gw00=vec4(0.75)-abs(gx00)-abs(gy00)-abs(gz00);vec4 sw00=step(gw00,vec4(0.0));gx00-=sw00*(step(0.0,gx00)-0.5);gy00-=sw00*(step(0.0,gy00)-0.5);vec4 gx01=ixy01*(1.0/7.0);vec4 gy01=floor(gx01)*(1.0/7.0);vec4 gz01=floor(gy01)*(1.0/6.0);gx01=fract(gx01)-0.5;gy01=fract(gy01)-0.5;gz01=fract(gz01)-0.5;vec4 gw01=vec4(0.75)-abs(gx01)-abs(gy01)-abs(gz01);vec4 sw01=step(gw01,vec4(0.0));gx01-=sw01*(step(0.0,gx01)-0.5);gy01-=sw01*(step(0.0,gy01)-0.5);vec4 gx10=ixy10*(1.0/7.0);vec4 gy10=floor(gx10)*(1.0/7.0);vec4 gz10=floor(gy10)*(1.0/6.0);gx10=fract(gx10)-0.5;gy10=fract(gy10)-0.5;gz10=fract(gz10)-0.5;vec4 gw10=vec4(0.75)-abs(gx10)-abs(gy10)-abs(gz10);vec4 sw10=step(gw10,vec4(0.0));gx10-=sw10*(step(0.0,gx10)-0.5);gy10-=sw10*(step(0.0,gy10)-0.5);vec4 gx11=ixy11*(1.0/7.0);vec4 gy11=floor(gx11)*(1.0/7.0);vec4 gz11=floor(gy11)*(1.0/6.0);gx11=fract(gx11)-0.5;gy11=fract(gy11)-0.5;gz11=fract(gz11)-0.5;vec4 gw11=vec4(0.75)-abs(gx11)-abs(gy11)-abs(gz11);vec4 sw11=step(gw11,vec4(0.0));gx11-=sw11*(step(0.0,gx11)-0.5);gy11-=sw11*(step(0.0,gy11)-0.5);vec4 g0000=vec4(gx00.x,gy00.x,gz00.x,gw00.x);vec4 g1000=vec4(gx00.y,gy00.y,gz00.y,gw00.y);vec4 g0100=vec4(gx00.z,gy00.z,gz00.z,gw00.z);vec4 g1100=vec4(gx00.w,gy00.w,gz00.w,gw00.w);vec4 g0010=vec4(gx10.x,gy10.x,gz10.x,gw10.x);vec4 g1010=vec4(gx10.y,gy10.y,gz10.y,gw10.y);vec4 g0110=vec4(gx10.z,gy10.z,gz10.z,gw10.z);vec4 g1110=vec4(gx10.w,gy10.w,gz10.w,gw10.w);vec4 g0001=vec4(gx01.x,gy01.x,gz01.x,gw01.x);vec4 g1001=vec4(gx01.y,gy01.y,gz01.y,gw01.y);vec4 g0101=vec4(gx01.z,gy01.z,gz01.z,gw01.z);vec4 g1101=vec4(gx01.w,gy01.w,gz01.w,gw01.w);vec4 g0011=vec4(gx11.x,gy11.x,gz11.x,gw11.x);vec4 g1011=vec4(gx11.y,gy11.y,gz11.y,gw11.y);vec4 g0111=vec4(gx11.z,gy11.z,gz11.z,gw11.z);vec4 g1111=vec4(gx11.w,gy11.w,gz11.w,gw11.w);vec4 norm00=taylorInvSqrt(vec4(dot(g0000,g0000),dot(g0100,g0100),dot(g1000,g1000),dot(g1100,g1100)));g0000*=norm00.x;g0100*=norm00.y;g1000*=norm00.z;g1100*=norm00.w;vec4 norm01=taylorInvSqrt(vec4(dot(g0001,g0001),dot(g0101,g0101),dot(g1001,g1001),dot(g1101,g1101)));g0001*=norm01.x;g0101*=norm01.y;g1001*=norm01.z;g1101*=norm01.w;vec4 norm10=taylorInvSqrt(vec4(dot(g0010,g0010),dot(g0110,g0110),dot(g1010,g1010),dot(g1110,g1110)));g0010*=norm10.x;g0110*=norm10.y;g1010*=norm10.z;g1110*=norm10.w;vec4 norm11=taylorInvSqrt(vec4(dot(g0011,g0011),dot(g0111,g0111),dot(g1011,g1011),dot(g1111,g1111)));g0011*=norm11.x;g0111*=norm11.y;g1011*=norm11.z;g1111*=norm11.w;float n0000=dot(g0000,Pf0);float n1000=dot(g1000,vec4(Pf1.x,Pf0.yzw));float n0100=dot(g0100,vec4(Pf0.x,Pf1.y,Pf0.zw));float n1100=dot(g1100,vec4(Pf1.xy,Pf0.zw));float n0010=dot(g0010,vec4(Pf0.xy,Pf1.z,Pf0.w));float n1010=dot(g1010,vec4(Pf1.x,Pf0.y,Pf1.z,Pf0.w));float n0110=dot(g0110,vec4(Pf0.x,Pf1.yz,Pf0.w));float n1110=dot(g1110,vec4(Pf1.xyz,Pf0.w));float n0001=dot(g0001,vec4(Pf0.xyz,Pf1.w));float n1001=dot(g1001,vec4(Pf1.x,Pf0.yz,Pf1.w));float n0101=dot(g0101,vec4(Pf0.x,Pf1.y,Pf0.z,Pf1.w));float n1101=dot(g1101,vec4(Pf1.xy,Pf0.z,Pf1.w));float n0011=dot(g0011,vec4(Pf0.xy,Pf1.zw));float n1011=dot(g1011,vec4(Pf1.x,Pf0.y,Pf1.zw));float n0111=dot(g0111,vec4(Pf0.x,Pf1.yzw));float n1111=dot(g1111,Pf1);vec4 fade_xyzw=quintic(Pf0);vec4 n_0w=mix(vec4(n0000,n1000,n0100,n1100),vec4(n0001,n1001,n0101,n1101),fade_xyzw.w);vec4 n_1w=mix(vec4(n0010,n1010,n0110,n1110),vec4(n0011,n1011,n0111,n1111),fade_xyzw.w);vec4 n_zw=mix(n_0w,n_1w,fade_xyzw.z);vec2 n_yzw=mix(n_zw.xy,n_zw.zw,fade_xyzw.y);float n_xyzw=mix(n_yzw.x,n_yzw.y,fade_xyzw.x);return 2.2*n_xyzw;}
#endif
float remap(float value,float sourceMin,float sourceMax,float targetMin,float targetMax){float normalized=(value-sourceMin)/(sourceMax-sourceMin);return targetMin+normalized*(targetMax-targetMin);}const float noise_particle_freqX=2.0;const float noise_particle_freqY=1.0;const float noise_particle_freqZ=6.0;float noise_value(vec3 pos){vec3 scale_sample_pos=vec3(pos.x*noise_particle_freqX,pos.y*noise_particle_freqY,pos.z*noise_particle_freqZ);return cnoise(scale_sample_pos);}float noise_scale(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.1,0.7);}float noise_color(vec3 pos){return remap(noise_value(pos),-1.0,1.0,0.2,1.0);}const float noise_layer_1_amp=1.0;const float noise_layer_1_freq=0.5;const float noise_layer_3_amp=0.02;const float noise_layer_3_freq=25.0;const float noise_layer_4_amp=0.5;const float noise_layer_4_freq=2.0;const float noise_scale_amp=1.0;const float noise_scale_freq=1.0;const float noise_interact_freq=5.0;void main(){v_position=position;float noise_scale=snoise(v_position.xyz);v_color=noise_color(v_position.xyz);noise_scale=remap(noise_scale,-1.0,1.0,0.2,1.0);float rnd=random(a_index);noise_scale=rnd<0.00001 ? 3.0*noise_scale : noise_scale;gl_PointSize=4.0*uPixelRatio*noise_scale;vec3 dest_pos=v_position;float offset_x_layer1=0.02*uTime;vec3 sample_pos_layer1=vec3(dest_pos.x+offset_x_layer1,dest_pos.y,dest_pos.z);vec3 noise_pos=snoise3((dest_pos.xyz+sample_pos_layer1)*noise_layer_1_freq)*noise_layer_1_amp;dest_pos.xyz+=noise_pos;vec3 noise_pos_detail=snoise3(v_position.xyz*noise_layer_3_freq)*noise_layer_3_amp;dest_pos.xyz+=noise_pos_detail;vec4 world_pos=modelMatrix*vec4(dest_pos.xyz,1.0);float dispalce=length(world_pos.xy-uMouse.xy);vec3 dir=normalize(world_pos.xyz-uMouse.xyz);float offset_interact=0.1*uTime;vec3 sample_pos_interact=vec3(v_position.x-offset_interact,v_position.y,v_position.z);float noise_displace=snoise(sample_pos_interact*noise_interact_freq);noise_displace=remap(noise_displace,-1.0,1.0,0.05,0.3);world_pos.xyz+=dir*0.2*smoothstep(noise_displace,0.0,dispalce);gl_Position=projectionMatrix*modelViewMatrix*world_pos;}`, B0 = "precision highp float;varying vec3 v_position;varying float v_color;void main(){float dist=length(gl_PointCoord-vec2(0.5,0.5));float radius=0.55;float edge=0.05;float alpha=1.0-2.0*smoothstep(radius-edge,radius,dist);if(alpha<0.1)discard;gl_FragColor=vec4(vec3(1.0)*v_color*0.35,alpha);}";
const G0 = 10, H0 = 10, k0 = 3.2, V0 = 3.2, W0 = () => {
  const n = new Lt(), e = new Zn(k0, V0, G0, H0), t = e.getAttribute("position").count, i = new Uint16Array(t), r = new Float32Array(t * 3);
  let s = 0, a = 0;
  for (r.set(e.getAttribute("position").array); s < t; )
    i[a] = a, a++, s++;
  n.setAttribute("a_index", new tt(i, 1, !1)), n.setAttribute("position", new tt(r, 3));
  const o = new at({
    uniforms: {
      uTotal: { value: t },
      uTime: { value: 0 },
      uPixelRatio: { value: window.devicePixelRatio },
      uMouse: { value: new D(999, 999, 0) },
      uTouch: { value: null }
    },
    vertexShader: O0,
    fragmentShader: B0,
    depthTest: !0,
    depthWrite: !0,
    transparent: !0,
    blending: 1,
    wireframe: !1
  });
  return [new qi(n, o), o];
}, q0 = {
  "Amazon Silk": "amazon_silk",
  "Android Browser": "android",
  Bada: "bada",
  BlackBerry: "blackberry",
  Chrome: "chrome",
  Chromium: "chromium",
  Electron: "electron",
  Epiphany: "epiphany",
  Firefox: "firefox",
  Focus: "focus",
  Generic: "generic",
  "Google Search": "google_search",
  Googlebot: "googlebot",
  "Internet Explorer": "ie",
  "K-Meleon": "k_meleon",
  Maxthon: "maxthon",
  "Microsoft Edge": "edge",
  "MZ Browser": "mz",
  "NAVER Whale Browser": "naver",
  Opera: "opera",
  "Opera Coast": "opera_coast",
  PhantomJS: "phantomjs",
  Puffin: "puffin",
  QupZilla: "qupzilla",
  QQ: "qq",
  QQLite: "qqlite",
  Safari: "safari",
  Sailfish: "sailfish",
  "Samsung Internet for Android": "samsung_internet",
  SeaMonkey: "seamonkey",
  Sleipnir: "sleipnir",
  Swing: "swing",
  Tizen: "tizen",
  "UC Browser": "uc",
  Vivaldi: "vivaldi",
  "WebOS Browser": "webos",
  WeChat: "wechat",
  "Yandex Browser": "yandex",
  Roku: "roku"
}, Po = {
  amazon_silk: "Amazon Silk",
  android: "Android Browser",
  bada: "Bada",
  blackberry: "BlackBerry",
  chrome: "Chrome",
  chromium: "Chromium",
  electron: "Electron",
  epiphany: "Epiphany",
  firefox: "Firefox",
  focus: "Focus",
  generic: "Generic",
  googlebot: "Googlebot",
  google_search: "Google Search",
  ie: "Internet Explorer",
  k_meleon: "K-Meleon",
  maxthon: "Maxthon",
  edge: "Microsoft Edge",
  mz: "MZ Browser",
  naver: "NAVER Whale Browser",
  opera: "Opera",
  opera_coast: "Opera Coast",
  phantomjs: "PhantomJS",
  puffin: "Puffin",
  qupzilla: "QupZilla",
  qq: "QQ Browser",
  qqlite: "QQ Browser Lite",
  safari: "Safari",
  sailfish: "Sailfish",
  samsung_internet: "Samsung Internet for Android",
  seamonkey: "SeaMonkey",
  sleipnir: "Sleipnir",
  swing: "Swing",
  tizen: "Tizen",
  uc: "UC Browser",
  vivaldi: "Vivaldi",
  webos: "WebOS Browser",
  wechat: "WeChat",
  yandex: "Yandex Browser"
}, ot = {
  tablet: "tablet",
  mobile: "mobile",
  desktop: "desktop",
  tv: "tv"
}, bt = {
  WindowsPhone: "Windows Phone",
  Windows: "Windows",
  MacOS: "macOS",
  iOS: "iOS",
  Android: "Android",
  WebOS: "WebOS",
  BlackBerry: "BlackBerry",
  Bada: "Bada",
  Tizen: "Tizen",
  Linux: "Linux",
  ChromeOS: "Chrome OS",
  PlayStation4: "PlayStation 4",
  Roku: "Roku"
}, gn = {
  EdgeHTML: "EdgeHTML",
  Blink: "Blink",
  Trident: "Trident",
  Presto: "Presto",
  Gecko: "Gecko",
  WebKit: "WebKit"
};
class V {
  /**
   * Get first matched item for a string
   * @param {RegExp} regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getFirstMatch(e, t) {
    const i = t.match(e);
    return i && i.length > 0 && i[1] || "";
  }
  /**
   * Get second matched item for a string
   * @param regexp
   * @param {String} ua
   * @return {Array|{index: number, input: string}|*|boolean|string}
   */
  static getSecondMatch(e, t) {
    const i = t.match(e);
    return i && i.length > 1 && i[2] || "";
  }
  /**
   * Match a regexp and return a constant or undefined
   * @param {RegExp} regexp
   * @param {String} ua
   * @param {*} _const Any const that will be returned if regexp matches the string
   * @return {*}
   */
  static matchAndReturnConst(e, t, i) {
    if (e.test(t))
      return i;
  }
  static getWindowsVersionName(e) {
    switch (e) {
      case "NT":
        return "NT";
      case "XP":
        return "XP";
      case "NT 5.0":
        return "2000";
      case "NT 5.1":
        return "XP";
      case "NT 5.2":
        return "2003";
      case "NT 6.0":
        return "Vista";
      case "NT 6.1":
        return "7";
      case "NT 6.2":
        return "8";
      case "NT 6.3":
        return "8.1";
      case "NT 10.0":
        return "10";
      default:
        return;
    }
  }
  /**
   * Get macOS version name
   *    10.5 - Leopard
   *    10.6 - Snow Leopard
   *    10.7 - Lion
   *    10.8 - Mountain Lion
   *    10.9 - Mavericks
   *    10.10 - Yosemite
   *    10.11 - El Capitan
   *    10.12 - Sierra
   *    10.13 - High Sierra
   *    10.14 - Mojave
   *    10.15 - Catalina
   *
   * @example
   *   getMacOSVersionName("10.14") // 'Mojave'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getMacOSVersionName(e) {
    const t = e.split(".").splice(0, 2).map((i) => parseInt(i, 10) || 0);
    if (t.push(0), t[0] === 10)
      switch (t[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
  }
  /**
   * Get Android version name
   *    1.5 - Cupcake
   *    1.6 - Donut
   *    2.0 - Eclair
   *    2.1 - Eclair
   *    2.2 - Froyo
   *    2.x - Gingerbread
   *    3.x - Honeycomb
   *    4.0 - Ice Cream Sandwich
   *    4.1 - Jelly Bean
   *    4.4 - KitKat
   *    5.x - Lollipop
   *    6.x - Marshmallow
   *    7.x - Nougat
   *    8.x - Oreo
   *    9.x - Pie
   *
   * @example
   *   getAndroidVersionName("7.0") // 'Nougat'
   *
   * @param  {string} version
   * @return {string} versionName
   */
  static getAndroidVersionName(e) {
    const t = e.split(".").splice(0, 2).map((i) => parseInt(i, 10) || 0);
    if (t.push(0), !(t[0] === 1 && t[1] < 5)) {
      if (t[0] === 1 && t[1] < 6)
        return "Cupcake";
      if (t[0] === 1 && t[1] >= 6)
        return "Donut";
      if (t[0] === 2 && t[1] < 2)
        return "Eclair";
      if (t[0] === 2 && t[1] === 2)
        return "Froyo";
      if (t[0] === 2 && t[1] > 2)
        return "Gingerbread";
      if (t[0] === 3)
        return "Honeycomb";
      if (t[0] === 4 && t[1] < 1)
        return "Ice Cream Sandwich";
      if (t[0] === 4 && t[1] < 4)
        return "Jelly Bean";
      if (t[0] === 4 && t[1] >= 4)
        return "KitKat";
      if (t[0] === 5)
        return "Lollipop";
      if (t[0] === 6)
        return "Marshmallow";
      if (t[0] === 7)
        return "Nougat";
      if (t[0] === 8)
        return "Oreo";
      if (t[0] === 9)
        return "Pie";
    }
  }
  /**
   * Get version precisions count
   *
   * @example
   *   getVersionPrecision("1.10.3") // 3
   *
   * @param  {string} version
   * @return {number}
   */
  static getVersionPrecision(e) {
    return e.split(".").length;
  }
  /**
   * Calculate browser version weight
   *
   * @example
   *   compareVersions('1.10.2.1',  '1.8.2.1.90')    // 1
   *   compareVersions('1.010.2.1', '1.09.2.1.90');  // 1
   *   compareVersions('1.10.2.1',  '1.10.2.1');     // 0
   *   compareVersions('1.10.2.1',  '1.0800.2');     // -1
   *   compareVersions('1.10.2.1',  '1.10',  true);  // 0
   *
   * @param {String} versionA versions versions to compare
   * @param {String} versionB versions versions to compare
   * @param {boolean} [isLoose] enable loose comparison
   * @return {Number} comparison result: -1 when versionA is lower,
   * 1 when versionA is bigger, 0 when both equal
   */
  /* eslint consistent-return: 1 */
  static compareVersions(e, t, i = !1) {
    const r = V.getVersionPrecision(e), s = V.getVersionPrecision(t);
    let a = Math.max(r, s), o = 0;
    const c = V.map([e, t], (l) => {
      const f = a - V.getVersionPrecision(l), d = l + new Array(f + 1).join(".0");
      return V.map(d.split("."), (h) => new Array(20 - h.length).join("0") + h).reverse();
    });
    for (i && (o = a - Math.min(r, s)), a -= 1; a >= o; ) {
      if (c[0][a] > c[1][a])
        return 1;
      if (c[0][a] === c[1][a]) {
        if (a === o)
          return 0;
        a -= 1;
      } else if (c[0][a] < c[1][a])
        return -1;
    }
  }
  /**
   * Array::map polyfill
   *
   * @param  {Array} arr
   * @param  {Function} iterator
   * @return {Array}
   */
  static map(e, t) {
    const i = [];
    let r;
    if (Array.prototype.map)
      return Array.prototype.map.call(e, t);
    for (r = 0; r < e.length; r += 1)
      i.push(t(e[r]));
    return i;
  }
  /**
   * Array::find polyfill
   *
   * @param  {Array} arr
   * @param  {Function} predicate
   * @return {Array}
   */
  static find(e, t) {
    let i, r;
    if (Array.prototype.find)
      return Array.prototype.find.call(e, t);
    for (i = 0, r = e.length; i < r; i += 1) {
      const s = e[i];
      if (t(s, i))
        return s;
    }
  }
  /**
   * Object::assign polyfill
   *
   * @param  {Object} obj
   * @param  {Object} ...objs
   * @return {Object}
   */
  static assign(e, ...t) {
    const i = e;
    let r, s;
    if (Object.assign)
      return Object.assign(e, ...t);
    for (r = 0, s = t.length; r < s; r += 1) {
      const a = t[r];
      typeof a == "object" && a !== null && Object.keys(a).forEach((c) => {
        i[c] = a[c];
      });
    }
    return e;
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('Microsoft Edge') // edge
   *
   * @param  {string} browserName
   * @return {string}
   */
  static getBrowserAlias(e) {
    return q0[e];
  }
  /**
   * Get short version/alias for a browser name
   *
   * @example
   *   getBrowserAlias('edge') // Microsoft Edge
   *
   * @param  {string} browserAlias
   * @return {string}
   */
  static getBrowserTypeByAlias(e) {
    return Po[e] || "";
  }
}
const Ke = /version\/(\d+(\.?_?\d+)+)/i, X0 = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe(n) {
      const e = {
        name: "Googlebot"
      }, t = V.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  /* Opera < 13.0 */
  {
    test: [/opera/i],
    describe(n) {
      const e = {
        name: "Opera"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  /* Opera > 13.0 */
  {
    test: [/opr\/|opios/i],
    describe(n) {
      const e = {
        name: "Opera"
      }, t = V.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/SamsungBrowser/i],
    describe(n) {
      const e = {
        name: "Samsung Internet for Android"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/Whale/i],
    describe(n) {
      const e = {
        name: "NAVER Whale Browser"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/MZBrowser/i],
    describe(n) {
      const e = {
        name: "MZ Browser"
      }, t = V.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/focus/i],
    describe(n) {
      const e = {
        name: "Focus"
      }, t = V.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/swing/i],
    describe(n) {
      const e = {
        name: "Swing"
      }, t = V.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/coast/i],
    describe(n) {
      const e = {
        name: "Opera Coast"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/opt\/\d+(?:.?_?\d+)+/i],
    describe(n) {
      const e = {
        name: "Opera Touch"
      }, t = V.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/yabrowser/i],
    describe(n) {
      const e = {
        name: "Yandex Browser"
      }, t = V.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/ucbrowser/i],
    describe(n) {
      const e = {
        name: "UC Browser"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/Maxthon|mxios/i],
    describe(n) {
      const e = {
        name: "Maxthon"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/epiphany/i],
    describe(n) {
      const e = {
        name: "Epiphany"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/puffin/i],
    describe(n) {
      const e = {
        name: "Puffin"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/sleipnir/i],
    describe(n) {
      const e = {
        name: "Sleipnir"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/k-meleon/i],
    describe(n) {
      const e = {
        name: "K-Meleon"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/micromessenger/i],
    describe(n) {
      const e = {
        name: "WeChat"
      }, t = V.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/qqbrowser/i],
    describe(n) {
      const e = {
        name: /qqbrowserlite/i.test(n) ? "QQ Browser Lite" : "QQ Browser"
      }, t = V.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/msie|trident/i],
    describe(n) {
      const e = {
        name: "Internet Explorer"
      }, t = V.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/\sedg\//i],
    describe(n) {
      const e = {
        name: "Microsoft Edge"
      }, t = V.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/edg([ea]|ios)/i],
    describe(n) {
      const e = {
        name: "Microsoft Edge"
      }, t = V.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/vivaldi/i],
    describe(n) {
      const e = {
        name: "Vivaldi"
      }, t = V.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/seamonkey/i],
    describe(n) {
      const e = {
        name: "SeaMonkey"
      }, t = V.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/sailfish/i],
    describe(n) {
      const e = {
        name: "Sailfish"
      }, t = V.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/silk/i],
    describe(n) {
      const e = {
        name: "Amazon Silk"
      }, t = V.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/phantom/i],
    describe(n) {
      const e = {
        name: "PhantomJS"
      }, t = V.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/slimerjs/i],
    describe(n) {
      const e = {
        name: "SlimerJS"
      }, t = V.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(n) {
      const e = {
        name: "BlackBerry"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/(web|hpw)[o0]s/i],
    describe(n) {
      const e = {
        name: "WebOS Browser"
      }, t = V.getFirstMatch(Ke, n) || V.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/bada/i],
    describe(n) {
      const e = {
        name: "Bada"
      }, t = V.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/tizen/i],
    describe(n) {
      const e = {
        name: "Tizen"
      }, t = V.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/qupzilla/i],
    describe(n) {
      const e = {
        name: "QupZilla"
      }, t = V.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/firefox|iceweasel|fxios/i],
    describe(n) {
      const e = {
        name: "Firefox"
      }, t = V.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/electron/i],
    describe(n) {
      const e = {
        name: "Electron"
      }, t = V.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/MiuiBrowser/i],
    describe(n) {
      const e = {
        name: "Miui"
      }, t = V.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/chromium/i],
    describe(n) {
      const e = {
        name: "Chromium"
      }, t = V.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, n) || V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/chrome|crios|crmo/i],
    describe(n) {
      const e = {
        name: "Chrome"
      }, t = V.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  {
    test: [/GSA/i],
    describe(n) {
      const e = {
        name: "Google Search"
      }, t = V.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  /* Android Browser */
  {
    test(n) {
      const e = !n.test(/like android/i), t = n.test(/android/i);
      return e && t;
    },
    describe(n) {
      const e = {
        name: "Android Browser"
      }, t = V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  /* PlayStation 4 */
  {
    test: [/playstation 4/i],
    describe(n) {
      const e = {
        name: "PlayStation 4"
      }, t = V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  /* Safari */
  {
    test: [/safari|applewebkit/i],
    describe(n) {
      const e = {
        name: "Safari"
      }, t = V.getFirstMatch(Ke, n);
      return t && (e.version = t), e;
    }
  },
  /* Something else */
  {
    test: [/.*/i],
    describe(n) {
      const e = /^(.*)\/(.*) /, t = /^(.*)\/(.*)[ \t]\((.*)/, r = n.search("\\(") !== -1 ? t : e;
      return {
        name: V.getFirstMatch(r, n),
        version: V.getSecondMatch(r, n)
      };
    }
  }
], Y0 = [
  /* Roku */
  {
    test: [/Roku\/DVP/],
    describe(n) {
      const e = V.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, n);
      return {
        name: bt.Roku,
        version: e
      };
    }
  },
  /* Windows Phone */
  {
    test: [/windows phone/i],
    describe(n) {
      const e = V.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, n);
      return {
        name: bt.WindowsPhone,
        version: e
      };
    }
  },
  /* Windows */
  {
    test: [/windows /i],
    describe(n) {
      const e = V.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, n), t = V.getWindowsVersionName(e);
      return {
        name: bt.Windows,
        version: e,
        versionName: t
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe(n) {
      const e = {
        name: bt.iOS
      }, t = V.getSecondMatch(/(Version\/)(\d[\d.]+)/, n);
      return t && (e.version = t), e;
    }
  },
  /* macOS */
  {
    test: [/macintosh/i],
    describe(n) {
      const e = V.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, n).replace(/[_\s]/g, "."), t = V.getMacOSVersionName(e), i = {
        name: bt.MacOS,
        version: e
      };
      return t && (i.versionName = t), i;
    }
  },
  /* iOS */
  {
    test: [/(ipod|iphone|ipad)/i],
    describe(n) {
      const e = V.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, n).replace(/[_\s]/g, ".");
      return {
        name: bt.iOS,
        version: e
      };
    }
  },
  /* Android */
  {
    test(n) {
      const e = !n.test(/like android/i), t = n.test(/android/i);
      return e && t;
    },
    describe(n) {
      const e = V.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, n), t = V.getAndroidVersionName(e), i = {
        name: bt.Android,
        version: e
      };
      return t && (i.versionName = t), i;
    }
  },
  /* WebOS */
  {
    test: [/(web|hpw)[o0]s/i],
    describe(n) {
      const e = V.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, n), t = {
        name: bt.WebOS
      };
      return e && e.length && (t.version = e), t;
    }
  },
  /* BlackBerry */
  {
    test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
    describe(n) {
      const e = V.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, n) || V.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, n) || V.getFirstMatch(/\bbb(\d+)/i, n);
      return {
        name: bt.BlackBerry,
        version: e
      };
    }
  },
  /* Bada */
  {
    test: [/bada/i],
    describe(n) {
      const e = V.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, n);
      return {
        name: bt.Bada,
        version: e
      };
    }
  },
  /* Tizen */
  {
    test: [/tizen/i],
    describe(n) {
      const e = V.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, n);
      return {
        name: bt.Tizen,
        version: e
      };
    }
  },
  /* Linux */
  {
    test: [/linux/i],
    describe() {
      return {
        name: bt.Linux
      };
    }
  },
  /* Chrome OS */
  {
    test: [/CrOS/],
    describe() {
      return {
        name: bt.ChromeOS
      };
    }
  },
  /* Playstation 4 */
  {
    test: [/PlayStation 4/],
    describe(n) {
      const e = V.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, n);
      return {
        name: bt.PlayStation4,
        version: e
      };
    }
  }
], j0 = [
  /* Googlebot */
  {
    test: [/googlebot/i],
    describe() {
      return {
        type: "bot",
        vendor: "Google"
      };
    }
  },
  /* Huawei */
  {
    test: [/huawei/i],
    describe(n) {
      const e = V.getFirstMatch(/(can-l01)/i, n) && "Nova", t = {
        type: ot.mobile,
        vendor: "Huawei"
      };
      return e && (t.model = e), t;
    }
  },
  /* Nexus Tablet */
  {
    test: [/nexus\s*(?:7|8|9|10).*/i],
    describe() {
      return {
        type: ot.tablet,
        vendor: "Nexus"
      };
    }
  },
  /* iPad */
  {
    test: [/ipad/i],
    describe() {
      return {
        type: ot.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Firefox on iPad */
  {
    test: [/Macintosh(.*?) FxiOS(.*?)\//],
    describe() {
      return {
        type: ot.tablet,
        vendor: "Apple",
        model: "iPad"
      };
    }
  },
  /* Amazon Kindle Fire */
  {
    test: [/kftt build/i],
    describe() {
      return {
        type: ot.tablet,
        vendor: "Amazon",
        model: "Kindle Fire HD 7"
      };
    }
  },
  /* Another Amazon Tablet with Silk */
  {
    test: [/silk/i],
    describe() {
      return {
        type: ot.tablet,
        vendor: "Amazon"
      };
    }
  },
  /* Tablet */
  {
    test: [/tablet(?! pc)/i],
    describe() {
      return {
        type: ot.tablet
      };
    }
  },
  /* iPod/iPhone */
  {
    test(n) {
      const e = n.test(/ipod|iphone/i), t = n.test(/like (ipod|iphone)/i);
      return e && !t;
    },
    describe(n) {
      const e = V.getFirstMatch(/(ipod|iphone)/i, n);
      return {
        type: ot.mobile,
        vendor: "Apple",
        model: e
      };
    }
  },
  /* Nexus Mobile */
  {
    test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
    describe() {
      return {
        type: ot.mobile,
        vendor: "Nexus"
      };
    }
  },
  /* Mobile */
  {
    test: [/[^-]mobi/i],
    describe() {
      return {
        type: ot.mobile
      };
    }
  },
  /* BlackBerry */
  {
    test(n) {
      return n.getBrowserName(!0) === "blackberry";
    },
    describe() {
      return {
        type: ot.mobile,
        vendor: "BlackBerry"
      };
    }
  },
  /* Bada */
  {
    test(n) {
      return n.getBrowserName(!0) === "bada";
    },
    describe() {
      return {
        type: ot.mobile
      };
    }
  },
  /* Windows Phone */
  {
    test(n) {
      return n.getBrowserName() === "windows phone";
    },
    describe() {
      return {
        type: ot.mobile,
        vendor: "Microsoft"
      };
    }
  },
  /* Android Tablet */
  {
    test(n) {
      const e = Number(String(n.getOSVersion()).split(".")[0]);
      return n.getOSName(!0) === "android" && e >= 3;
    },
    describe() {
      return {
        type: ot.tablet
      };
    }
  },
  /* Android Mobile */
  {
    test(n) {
      return n.getOSName(!0) === "android";
    },
    describe() {
      return {
        type: ot.mobile
      };
    }
  },
  /* desktop */
  {
    test(n) {
      return n.getOSName(!0) === "macos";
    },
    describe() {
      return {
        type: ot.desktop,
        vendor: "Apple"
      };
    }
  },
  /* Windows */
  {
    test(n) {
      return n.getOSName(!0) === "windows";
    },
    describe() {
      return {
        type: ot.desktop
      };
    }
  },
  /* Linux */
  {
    test(n) {
      return n.getOSName(!0) === "linux";
    },
    describe() {
      return {
        type: ot.desktop
      };
    }
  },
  /* PlayStation 4 */
  {
    test(n) {
      return n.getOSName(!0) === "playstation 4";
    },
    describe() {
      return {
        type: ot.tv
      };
    }
  },
  /* Roku */
  {
    test(n) {
      return n.getOSName(!0) === "roku";
    },
    describe() {
      return {
        type: ot.tv
      };
    }
  }
], Z0 = [
  /* EdgeHTML */
  {
    test(n) {
      return n.getBrowserName(!0) === "microsoft edge";
    },
    describe(n) {
      if (/\sedg\//i.test(n))
        return {
          name: gn.Blink
        };
      const t = V.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, n);
      return {
        name: gn.EdgeHTML,
        version: t
      };
    }
  },
  /* Trident */
  {
    test: [/trident/i],
    describe(n) {
      const e = {
        name: gn.Trident
      }, t = V.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  /* Presto */
  {
    test(n) {
      return n.test(/presto/i);
    },
    describe(n) {
      const e = {
        name: gn.Presto
      }, t = V.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  /* Gecko */
  {
    test(n) {
      const e = n.test(/gecko/i), t = n.test(/like gecko/i);
      return e && !t;
    },
    describe(n) {
      const e = {
        name: gn.Gecko
      }, t = V.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  },
  /* Blink */
  {
    test: [/(apple)?webkit\/537\.36/i],
    describe() {
      return {
        name: gn.Blink
      };
    }
  },
  /* WebKit */
  {
    test: [/(apple)?webkit/i],
    describe(n) {
      const e = {
        name: gn.WebKit
      }, t = V.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, n);
      return t && (e.version = t), e;
    }
  }
];
class Ks {
  /**
   * Create instance of Parser
   *
   * @param {String} UA User-Agent string
   * @param {Boolean} [skipParsing=false] parser can skip parsing in purpose of performance
   * improvements if you need to make a more particular parsing
   * like {@link Parser#parseBrowser} or {@link Parser#parsePlatform}
   *
   * @throw {Error} in case of empty UA String
   *
   * @constructor
   */
  constructor(e, t = !1) {
    if (e == null || e === "")
      throw new Error("UserAgent parameter can't be empty");
    this._ua = e, this.parsedResult = {}, t !== !0 && this.parse();
  }
  /**
   * Get UserAgent string of current Parser instance
   * @return {String} User-Agent String of the current <Parser> object
   *
   * @public
   */
  getUA() {
    return this._ua;
  }
  /**
   * Test a UA string for a regexp
   * @param {RegExp} regex
   * @return {Boolean}
   */
  test(e) {
    return e.test(this._ua);
  }
  /**
   * Get parsed browser object
   * @return {Object}
   */
  parseBrowser() {
    this.parsedResult.browser = {};
    const e = V.find(X0, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.browser = e.describe(this.getUA())), this.parsedResult.browser;
  }
  /**
   * Get parsed browser object
   * @return {Object}
   *
   * @public
   */
  getBrowser() {
    return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
  }
  /**
   * Get browser's name
   * @return {String} Browser's name or an empty string
   *
   * @public
   */
  getBrowserName(e) {
    return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
  }
  /**
   * Get browser's version
   * @return {String} version of browser
   *
   * @public
   */
  getBrowserVersion() {
    return this.getBrowser().version;
  }
  /**
   * Get OS
   * @return {Object}
   *
   * @example
   * this.getOS();
   * {
   *   name: 'macOS',
   *   version: '10.11.12'
   * }
   */
  getOS() {
    return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
  }
  /**
   * Parse OS and save it to this.parsedResult.os
   * @return {*|{}}
   */
  parseOS() {
    this.parsedResult.os = {};
    const e = V.find(Y0, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.os = e.describe(this.getUA())), this.parsedResult.os;
  }
  /**
   * Get OS name
   * @param {Boolean} [toLowerCase] return lower-cased value
   * @return {String} name of the OS — macOS, Windows, Linux, etc.
   */
  getOSName(e) {
    const { name: t } = this.getOS();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  /**
   * Get OS version
   * @return {String} full version with dots ('10.11.12', '5.6', etc)
   */
  getOSVersion() {
    return this.getOS().version;
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  getPlatform() {
    return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
  }
  /**
   * Get platform name
   * @param {Boolean} [toLowerCase=false]
   * @return {*}
   */
  getPlatformType(e = !1) {
    const { type: t } = this.getPlatform();
    return e ? String(t).toLowerCase() || "" : t || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parsePlatform() {
    this.parsedResult.platform = {};
    const e = V.find(j0, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.platform = e.describe(this.getUA())), this.parsedResult.platform;
  }
  /**
   * Get parsed engine
   * @return {{}}
   */
  getEngine() {
    return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
  }
  /**
   * Get engines's name
   * @return {String} Engines's name or an empty string
   *
   * @public
   */
  getEngineName(e) {
    return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
  }
  /**
   * Get parsed platform
   * @return {{}}
   */
  parseEngine() {
    this.parsedResult.engine = {};
    const e = V.find(Z0, (t) => {
      if (typeof t.test == "function")
        return t.test(this);
      if (t.test instanceof Array)
        return t.test.some((i) => this.test(i));
      throw new Error("Browser's test function is not valid");
    });
    return e && (this.parsedResult.engine = e.describe(this.getUA())), this.parsedResult.engine;
  }
  /**
   * Parse full information about the browser
   * @returns {Parser}
   */
  parse() {
    return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
  }
  /**
   * Get parsed result
   * @return {ParsedResult}
   */
  getResult() {
    return V.assign({}, this.parsedResult);
  }
  /**
   * Check if parsed browser matches certain conditions
   *
   * @param {Object} checkTree It's one or two layered object,
   * which can include a platform or an OS on the first layer
   * and should have browsers specs on the bottom-laying layer
   *
   * @returns {Boolean|undefined} Whether the browser satisfies the set conditions or not.
   * Returns `undefined` when the browser is no described in the checkTree object.
   *
   * @example
   * const browser = Bowser.getParser(window.navigator.userAgent);
   * if (browser.satisfies({chrome: '>118.01.1322' }))
   * // or with os
   * if (browser.satisfies({windows: { chrome: '>118.01.1322' } }))
   * // or with platforms
   * if (browser.satisfies({desktop: { chrome: '>118.01.1322' } }))
   */
  satisfies(e) {
    const t = {};
    let i = 0;
    const r = {};
    let s = 0;
    if (Object.keys(e).forEach((o) => {
      const c = e[o];
      typeof c == "string" ? (r[o] = c, s += 1) : typeof c == "object" && (t[o] = c, i += 1);
    }), i > 0) {
      const o = Object.keys(t), c = V.find(o, (f) => this.isOS(f));
      if (c) {
        const f = this.satisfies(t[c]);
        if (f !== void 0)
          return f;
      }
      const l = V.find(
        o,
        (f) => this.isPlatform(f)
      );
      if (l) {
        const f = this.satisfies(t[l]);
        if (f !== void 0)
          return f;
      }
    }
    if (s > 0) {
      const o = Object.keys(r), c = V.find(o, (l) => this.isBrowser(l, !0));
      if (c !== void 0)
        return this.compareVersion(r[c]);
    }
  }
  /**
   * Check if the browser name equals the passed string
   * @param browserName The string to compare with the browser name
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {boolean}
   */
  isBrowser(e, t = !1) {
    const i = this.getBrowserName().toLowerCase();
    let r = e.toLowerCase();
    const s = V.getBrowserTypeByAlias(r);
    return t && s && (r = s.toLowerCase()), r === i;
  }
  compareVersion(e) {
    let t = [0], i = e, r = !1;
    const s = this.getBrowserVersion();
    if (typeof s == "string")
      return e[0] === ">" || e[0] === "<" ? (i = e.substr(1), e[1] === "=" ? (r = !0, i = e.substr(2)) : t = [], e[0] === ">" ? t.push(1) : t.push(-1)) : e[0] === "=" ? i = e.substr(1) : e[0] === "~" && (r = !0, i = e.substr(1)), t.indexOf(
        V.compareVersions(s, i, r)
      ) > -1;
  }
  isOS(e) {
    return this.getOSName(!0) === String(e).toLowerCase();
  }
  isPlatform(e) {
    return this.getPlatformType(!0) === String(e).toLowerCase();
  }
  isEngine(e) {
    return this.getEngineName(!0) === String(e).toLowerCase();
  }
  /**
   * Is anything? Check if the browser is called "anything",
   * the OS called "anything" or the platform called "anything"
   * @param {String} anything
   * @param [includingAlias=false] The flag showing whether alias will be included into comparison
   * @returns {Boolean}
   */
  is(e, t = !1) {
    return this.isBrowser(e, t) || this.isOS(e) || this.isPlatform(e);
  }
  /**
   * Check if any of the given values satisfies this.is(anything)
   * @param {String[]} anythings
   * @returns {Boolean}
   */
  some(e = []) {
    return e.some((t) => this.is(t));
  }
}
/*!
 * Bowser - a browser detector
 * https://github.com/lancedikson/bowser
 * MIT License | (c) Dustin Diaz 2012-2015
 * MIT License | (c) Denis Demchenko 2015-2019
 */
class K0 {
  /**
   * Creates a {@link Parser} instance
   *
   * @param {String} UA UserAgent string
   * @param {Boolean} [skipParsing=false] Will make the Parser postpone parsing until you ask it
   * explicitly. Same as `skipParsing` for {@link Parser}.
   * @returns {Parser}
   * @throws {Error} when UA is not a String
   *
   * @example
   * const parser = Bowser.getParser(window.navigator.userAgent);
   * const result = parser.getResult();
   */
  static getParser(e, t = !1) {
    if (typeof e != "string")
      throw new Error("UserAgent should be a string");
    return new Ks(e, t);
  }
  /**
   * Creates a {@link Parser} instance and runs {@link Parser.getResult} immediately
   *
   * @param UA
   * @return {ParsedResult}
   *
   * @example
   * const result = Bowser.parse(window.navigator.userAgent);
   */
  static parse(e) {
    return new Ks(e).getResult();
  }
  static get BROWSER_MAP() {
    return Po;
  }
  static get ENGINE_MAP() {
    return gn;
  }
  static get OS_MAP() {
    return bt;
  }
  static get PLATFORMS_MAP() {
    return ot;
  }
}
const Ao = K0.parse(window.navigator.userAgent), $0 = {
  cameraPosition: {
    x: 0,
    y: 0.95,
    z: 4
  },
  dofEffect: {
    focusDistance: 4.3
  },
  ground: {
    xCount: 128,
    yCount: 128,
    position: {
      x: 0,
      y: -0.03,
      z: 0
    },
    shaders: {
      centerHeight: 4.5,
      sampleBase4Layer1: {
        one: 12.5,
        two: 16.5
      }
    }
  },
  sky: {
    xCount: 44,
    yCount: 44,
    position: {
      x: 0,
      y: 0.06,
      z: 0
    },
    shaders: {
      centerHeight: 2.5,
      offsetY: 2.9,
      radius: 1.33
    }
  },
  skyInner: {
    xCount: 72,
    yCount: 72,
    position: {
      x: 0,
      y: 0.06,
      z: 0
    },
    shaders: {
      centerHeight: 2.5,
      offsetY: 2.9,
      radius: 1.33
    }
  },
  sphere1: {
    radius: {
      one: 0.25,
      two: 0.15
    },
    xCount: 24,
    yCount: 24,
    position: {
      one: {
        x: -1,
        y: 0.2,
        z: -0.7
      },
      two: {
        x: -0.7,
        y: 0.1,
        z: -1.4
      }
    },
    shaders: {
      camPosition: {
        one: {
          x: 0.9,
          y: 0.65,
          z: 4
        },
        two: {
          x: 0.5,
          y: 0.5,
          z: 4
        }
      }
    }
  },
  sphere2: {
    radius: {
      one: 0.15,
      two: 0.2
    },
    xCount: 24,
    yCount: 24,
    position: {
      one: {
        x: 0.6,
        y: 1.5,
        z: 0.2
      },
      two: {
        x: 0.6,
        y: 0.25,
        z: 0.3
      }
    },
    shaders: {
      camPosition: {
        one: {
          x: -0.6,
          y: -0.45,
          z: 4
        },
        two: {
          x: -0.6,
          y: 0.6,
          z: 4
        }
      }
    }
  }
}, Q0 = {
  cameraPosition: {
    x: 0,
    y: 0.95,
    z: 7
  },
  dofEffect: {
    focusDistance: 6.9
  },
  ground: {
    xCount: 80,
    yCount: 80,
    position: {
      x: 0,
      y: -0.2,
      z: 0
    },
    shaders: {
      centerHeight: 6,
      sampleBase4Layer1: {
        one: 3,
        two: 8
      }
    }
  },
  sky: {
    xCount: 32,
    yCount: 32,
    position: {
      x: 0,
      y: 0.4,
      z: 0
    },
    shaders: {
      centerHeight: 4.5,
      offsetY: 2.94,
      radius: 1.32
    }
  },
  skyInner: {
    xCount: 32,
    yCount: 32,
    position: {
      x: 0,
      y: 0.4,
      z: 0
    },
    shaders: {
      centerHeight: 4.5,
      offsetY: 3.54,
      radius: 1.4
    }
  },
  sphere1: {
    radius: {
      one: 0.35,
      two: 0.2
    },
    xCount: 32,
    yCount: 32,
    position: {
      one: {
        x: -0.8,
        y: -0.3,
        z: -0.1
      },
      two: {
        x: -0.4,
        y: -0.3,
        z: -0.1
      }
    },
    shaders: {
      camPosition: {
        one: {
          x: 0.2,
          y: 0.65,
          z: 4
        },
        two: {
          x: 0.2,
          y: 0.65,
          z: 4
        }
      }
    }
  },
  sphere2: {
    radius: {
      one: 0.2,
      two: 0.3
    },
    xCount: 24,
    yCount: 24,
    position: {
      one: {
        x: 0.6,
        y: 2.1,
        z: 0.2
      },
      two: {
        x: 0.65,
        y: -0.45,
        z: 0.2
      }
    },
    shaders: {
      camPosition: {
        one: {
          x: -0.4,
          y: -0.45,
          z: 4
        },
        two: {
          x: -0.4,
          y: 0.5,
          z: 4
        }
      }
    }
  }
};
function $s(n) {
  const e = Math.abs(n);
  return (1 - (1 - e) * (1 - e)) * Math.sign(n);
}
const Tt = Ao.platform.type === "mobile" ? Q0 : $0;
class eh {
  constructor(e, t) {
    Ot(this, "_el");
    Ot(this, "_layout");
    Ot(this, "_render");
    Ot(this, "_scene");
    Ot(this, "_camera");
    Ot(this, "_clock", new ju());
    Ot(this, "_composer");
    Ot(this, "_requestAnimationId");
    Ot(this, "_requestCallback");
    // private _controls?: SpatialControls;
    Ot(this, "_isMouseMove", !1);
    Ot(this, "_status", "pausing");
    this._el = e, this._layout = (t == null ? void 0 : t.layout) || "one", this._render = this.createRender(), this._scene = this.createScene(), this._camera = this.createCamera(), this.createComposer(), this.createEvent();
  }
  get renderRect() {
    return this._el instanceof Window ? new DOMRect(0, 0, this._el.innerWidth, this._el.innerHeight) : this._el.getBoundingClientRect();
  }
  createRender() {
    const e = new vo({ antialias: !0, alpha: !0, powerPreference: "high-performance" });
    return e.setPixelRatio(window.devicePixelRatio), e.setSize(this.renderRect.width, this.renderRect.height), this._el instanceof Window ? this._el.document.body.appendChild(e.domElement) : this._el.appendChild(e.domElement), e;
  }
  createScene() {
    const e = new zr();
    return e.background = new ke(1184533), e;
  }
  createCamera() {
    const i = 2 * Math.atan(0.25888374999999997) * (180 / Math.PI), r = new At(i, this.renderRect.width / this.renderRect.height, 0.1, 2e3);
    return r.updateProjectionMatrix(), r;
  }
  createEvent() {
    window.addEventListener("resize", () => {
      const { width: e, height: t } = this.renderRect;
      this._render.setSize(e, t), this._render.setPixelRatio(window.devicePixelRatio), this._camera.aspect = e / t, this._camera.updateProjectionMatrix(), this._composer && this._composer.setSize(e, t);
    });
  }
  createComposer() {
    this._composer || (this._composer = new Pd(this._render));
  }
  // private createControls() {
  //   this._controls = new SpatialControls(this._camera.position, this._camera.quaternion, this._render.domElement);
  //   const settings = this._controls.settings;
  //   settings.rotation.sensitivity = 2.2;
  //   settings.rotation.damping = 0.05;
  //   settings.translation.damping = 0.1;
  // }
  _animate() {
    this._status !== "pausing" && (this._requestCallback && this._requestCallback(), this._composer ? this._composer.render(this._clock.getElapsedTime()) : this._render.render(this._scene, this._camera), this._requestAnimationId = requestAnimationFrame(() => this._animate()));
  }
  useSetup() {
    var _, b;
    const [e, t] = w0({
      xCount: Tt.ground.xCount,
      yCount: Tt.ground.yCount,
      shaders: {
        centerHeight: Tt.ground.shaders.centerHeight,
        sampleBase4Layer1: Tt.ground.shaders.sampleBase4Layer1[this._layout]
      }
    });
    this._scene.add(e);
    const i = Tt.ground.position;
    e.position.set(i.x, i.y, i.z);
    const [r, s] = z0({
      xCount: Tt.sky.xCount,
      yCount: Tt.sky.yCount,
      shaders: Tt.sky.shaders
    });
    this._scene.add(r);
    const a = Tt.sky.position;
    r.position.set(a.x, a.y, a.z);
    const [o, c] = U0({
      xCount: Tt.skyInner.xCount,
      yCount: Tt.skyInner.yCount,
      shaders: Tt.skyInner.shaders
    });
    this._scene.add(o);
    const l = Tt.skyInner.position;
    o.position.set(l.x, l.y, l.z);
    const [f, d] = W0();
    this._scene.add(f), f.position.set(0, 0, 0);
    const h = Tt.cameraPosition;
    this._camera.position.set(h.x, h.y, h.z);
    const g = new kr(this._scene, this._camera), v = new u0(this._camera, {
      worldFocusDistance: Tt.dofEffect.focusDistance,
      worldFocusRange: 1,
      bokehScale: 3,
      resolutionScale: 1
    }), y = new p0(this._scene, this._camera, {
      blendFunction: Oe.SCREEN,
      multisampling: Math.min(4, this._render.capabilities.maxSamples),
      edgeStrength: 2.3,
      pulseSpeed: 0,
      visibleEdgeColor: 6710886,
      hiddenEdgeColor: 0,
      height: 720,
      // width: this.renderRect.width / 4,
      blur: !0,
      xRay: !0
    }), p = new wd(this._camera, v, y);
    (_ = this._composer) == null || _.addPass(g), (b = this._composer) == null || b.addPass(p);
    const u = new Zu(), w = new mn(new D(0, 0, 1));
    this._requestCallback = () => {
      const z = this._clock.getElapsedTime();
      t.uniforms.uTime.value = z, s.uniforms.uTime.value = z, c.uniforms.uTime.value = z, d.uniforms.uTime.value = z;
    }, window.addEventListener("resize", () => {
      t.uniforms.uPixelRatio.value = window.devicePixelRatio, s.uniforms.uPixelRatio.value = window.devicePixelRatio, c.uniforms.uPixelRatio.value = window.devicePixelRatio, d.uniforms.uPixelRatio.value = window.devicePixelRatio;
    }), Ao.platform.type === "mobile" || (this._render.domElement.addEventListener("pointerenter", () => {
      this._isMouseMove = !0;
    }), this._render.domElement.addEventListener("pointerleave", () => {
      this._isMouseMove = !1;
      const z = new D(999);
      s.uniforms.uMouse.value = z, c.uniforms.uMouse.value = z, t.uniforms.uMouse.value = z, d.uniforms.uMouse.value = z;
    }), this._render.domElement.addEventListener("pointermove", (z) => {
      if (z.isPrimary === !1 || !this._isMouseMove)
        return;
      const A = z, P = (A.clientX - this.renderRect.left) / this.renderRect.width * 2 - 1, W = -((A.clientY - this.renderRect.top) / this.renderRect.height) * 2 + 1;
      u.setFromCamera(new Te(P, W), this._camera);
      const ie = new D();
      u.ray.intersectPlane(w, ie), s.uniforms.uMouse.value = ie, c.uniforms.uMouse.value = ie, t.uniforms.uMouse.value = ie, d.uniforms.uMouse.value = ie;
      const x = 4 * Math.sin(Math.PI * $s(P) / 80), T = this._camera.position.y, q = 4 * Math.cos(Math.PI * $s(P) / 80);
      this._camera.position.set(x, T, q), this._camera.lookAt(new D(0, T, 0));
    }, { passive: !0 }));
  }
  snapshot() {
    this._composer ? this._composer.render(this._clock.getElapsedTime()) : this._render.render(this._scene, this._camera);
    const t = this._render.domElement.toDataURL("image/png"), i = document.createElement("a");
    i.href = t, i.download = "screenshot-hero.png", i.click();
  }
  recordVideo() {
    const e = this._render.domElement.captureStream(), t = new MediaRecorder(e, { mimeType: 'video/webm; codecs="vp9"', bitsPerSecond: 1e7 }), i = [];
    return t.addEventListener("dataavailable", (r) => {
      r.data.size && i.push(r.data);
    }), t.addEventListener("stop", () => {
      const r = new Blob(i, { type: "video/webm" }), s = URL.createObjectURL(r), a = document.createElement("a");
      a.href = s, a.download = "hero-animation.webm", document.body.appendChild(a), a.click(), window.URL.revokeObjectURL(s);
    }), t;
  }
  play() {
    this._status = "playing", this._animate();
  }
  stop() {
    this._status = "pausing", this._requestAnimationId && cancelAnimationFrame(this._requestAnimationId);
  }
  destroy() {
    this._status = "pausing", this._requestAnimationId && cancelAnimationFrame(this._requestAnimationId);
  }
}
export {
  eh as default
};
