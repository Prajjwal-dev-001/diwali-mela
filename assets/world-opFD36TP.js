/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const mp = 2;
const gp = 2;
const _p = 2;
const vp = 4;
const xp = 1e3;
const Mp = 1006;
const Ee = "srgb",
  Qn = "srgb-linear",
  _r = "linear",
  $t = "srgb";
const Bs = "300 es";
class ii {
  addEventListener(t, e) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    (n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e));
  }
  hasEventListener(t, e) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1;
  }
  removeEventListener(t, e) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[t];
    if (r !== void 0) {
      const s = r.indexOf(e);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(t) {
    const e = this._listeners;
    if (e === void 0) return;
    const n = e[t.type];
    if (n !== void 0) {
      t.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, t);
      t.target = null;
    }
  }
}
const Se = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let zs = 1234567;
const xi = Math.PI / 180,
  ti = 180 / Math.PI;
function qe() {
  const i = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Se[i & 255] +
    Se[(i >> 8) & 255] +
    Se[(i >> 16) & 255] +
    Se[(i >> 24) & 255] +
    "-" +
    Se[t & 255] +
    Se[(t >> 8) & 255] +
    "-" +
    Se[((t >> 16) & 15) | 64] +
    Se[(t >> 24) & 255] +
    "-" +
    Se[(e & 63) | 128] +
    Se[(e >> 8) & 255] +
    "-" +
    Se[(e >> 16) & 255] +
    Se[(e >> 24) & 255] +
    Se[n & 255] +
    Se[(n >> 8) & 255] +
    Se[(n >> 16) & 255] +
    Se[(n >> 24) & 255]
  ).toLowerCase();
}
function Ot(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function ys(i, t) {
  return ((i % t) + t) % t;
}
function Vo(i, t, e, n, r) {
  return n + ((i - t) * (r - n)) / (e - t);
}
function ko(i, t, e) {
  return i !== t ? (e - i) / (t - i) : 0;
}
function Mi(i, t, e) {
  return (1 - e) * i + e * t;
}
function Wo(i, t, e, n) {
  return Mi(i, t, 1 - Math.exp(-e * n));
}
function Xo(i, t = 1) {
  return t - Math.abs(ys(i, t * 2) - t);
}
function qo(i, t, e) {
  return i <= t
    ? 0
    : i >= e
      ? 1
      : ((i = (i - t) / (e - t)), i * i * (3 - 2 * i));
}
function Yo(i, t, e) {
  return i <= t
    ? 0
    : i >= e
      ? 1
      : ((i = (i - t) / (e - t)), i * i * i * (i * (i * 6 - 15) + 10));
}
function Zo(i, t) {
  return i + Math.floor(Math.random() * (t - i + 1));
}
function Jo(i, t) {
  return i + Math.random() * (t - i);
}
function $o(i) {
  return i * (0.5 - Math.random());
}
function Ko(i) {
  i !== void 0 && (zs = i);
  let t = (zs += 1831565813);
  return (
    (t = Math.imul(t ^ (t >>> 15), t | 1)),
    (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
    ((t ^ (t >>> 14)) >>> 0) / 4294967296
  );
}
function jo(i) {
  return i * xi;
}
function Qo(i) {
  return i * ti;
}
function tl(i) {
  return (i & (i - 1)) === 0 && i !== 0;
}
function el(i) {
  return Math.pow(2, Math.ceil(Math.log(i) / Math.LN2));
}
function nl(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function il(i, t, e, n, r) {
  const s = Math.cos,
    a = Math.sin,
    o = s(e / 2),
    l = a(e / 2),
    c = s((t + n) / 2),
    u = a((t + n) / 2),
    h = s((t - n) / 2),
    d = a((t - n) / 2),
    f = s((n - t) / 2),
    g = a((n - t) / 2);
  switch (r) {
    case "XYX":
      i.set(o * u, l * h, l * d, o * c);
      break;
    case "YZY":
      i.set(l * d, o * u, l * h, o * c);
      break;
    case "ZXZ":
      i.set(l * h, l * d, o * u, o * c);
      break;
    case "XZX":
      i.set(o * u, l * g, l * f, o * c);
      break;
    case "YXY":
      i.set(l * f, o * u, l * g, o * c);
      break;
    case "ZYZ":
      i.set(l * g, l * f, o * u, o * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          r,
      );
  }
}
function Ve(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Yt(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Gs = {
  DEG2RAD: xi,
  RAD2DEG: ti,
  generateUUID: qe,
  clamp: Ot,
  euclideanModulo: ys,
  mapLinear: Vo,
  inverseLerp: ko,
  lerp: Mi,
  damp: Wo,
  pingpong: Xo,
  smoothstep: qo,
  smootherstep: Yo,
  randInt: Zo,
  randFloat: Jo,
  randFloatSpread: $o,
  seededRandom: Ko,
  degToRad: jo,
  radToDeg: Qo,
  isPowerOfTwo: tl,
  ceilPowerOfTwo: el,
  floorPowerOfTwo: nl,
  setQuaternionFromProperEuler: il,
  normalize: Yt,
  denormalize: Ve,
};
class ot {
  constructor(t = 0, e = 0) {
    ((ot.prototype.isVector2 = !0), (this.x = t), (this.y = e));
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return ((this.x = t), (this.y = e), this);
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return ((this.x = t.x), (this.y = t.y), this);
  }
  add(t) {
    return ((this.x += t.x), (this.y += t.y), this);
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), this);
  }
  addVectors(t, e) {
    return ((this.x = t.x + e.x), (this.y = t.y + e.y), this);
  }
  addScaledVector(t, e) {
    return ((this.x += t.x * e), (this.y += t.y * e), this);
  }
  sub(t) {
    return ((this.x -= t.x), (this.y -= t.y), this);
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), this);
  }
  subVectors(t, e) {
    return ((this.x = t.x - e.x), (this.y = t.y - e.y), this);
  }
  multiply(t) {
    return ((this.x *= t.x), (this.y *= t.y), this);
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), this);
  }
  divide(t) {
    return ((this.x /= t.x), (this.y /= t.y), this);
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      r = t.elements;
    return (
      (this.x = r[0] * e + r[3] * n + r[6]),
      (this.y = r[1] * e + r[4] * n + r[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Ot(this.x, t.x, e.x)),
      (this.y = Ot(this.y, t.y, e.y)),
      this
    );
  }
  clampScalar(t, e) {
    return ((this.x = Ot(this.x, t, e)), (this.y = Ot(this.y, t, e)), this);
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
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
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return ((this.x = t[e]), (this.y = t[e + 1]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.x), (t[e + 1] = this.y), t);
  }
  fromBufferAttribute(t, e) {
    return ((this.x = t.getX(e)), (this.y = t.getY(e)), this);
  }
  rotateAround(t, e) {
    const n = Math.cos(e),
      r = Math.sin(e),
      s = this.x - t.x,
      a = this.y - t.y;
    return (
      (this.x = s * n - a * r + t.x),
      (this.y = s * r + a * n + t.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Pi {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    ((this.isQuaternion = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = r));
  }
  static slerpFlat(t, e, n, r, s, a, o) {
    let l = n[r + 0],
      c = n[r + 1],
      u = n[r + 2],
      h = n[r + 3];
    const d = s[a + 0],
      f = s[a + 1],
      g = s[a + 2],
      v = s[a + 3];
    if (o === 0) {
      ((t[e + 0] = l), (t[e + 1] = c), (t[e + 2] = u), (t[e + 3] = h));
      return;
    }
    if (o === 1) {
      ((t[e + 0] = d), (t[e + 1] = f), (t[e + 2] = g), (t[e + 3] = v));
      return;
    }
    if (h !== v || l !== d || c !== f || u !== g) {
      let m = 1 - o;
      const p = l * d + c * f + u * g + h * v,
        A = p >= 0 ? 1 : -1,
        E = 1 - p * p;
      if (E > Number.EPSILON) {
        const b = Math.sqrt(E),
          T = Math.atan2(b, p * A);
        ((m = Math.sin(m * T) / b), (o = Math.sin(o * T) / b));
      }
      const _ = o * A;
      if (
        ((l = l * m + d * _),
        (c = c * m + f * _),
        (u = u * m + g * _),
        (h = h * m + v * _),
        m === 1 - o)
      ) {
        const b = 1 / Math.sqrt(l * l + c * c + u * u + h * h);
        ((l *= b), (c *= b), (u *= b), (h *= b));
      }
    }
    ((t[e] = l), (t[e + 1] = c), (t[e + 2] = u), (t[e + 3] = h));
  }
  static multiplyQuaternionsFlat(t, e, n, r, s, a) {
    const o = n[r],
      l = n[r + 1],
      c = n[r + 2],
      u = n[r + 3],
      h = s[a],
      d = s[a + 1],
      f = s[a + 2],
      g = s[a + 3];
    return (
      (t[e] = o * g + u * h + l * f - c * d),
      (t[e + 1] = l * g + u * d + c * h - o * f),
      (t[e + 2] = c * g + u * f + o * d - l * h),
      (t[e + 3] = u * g - o * h - l * d - c * f),
      t
    );
  }
  get x() {
    return this._x;
  }
  set x(t) {
    ((this._x = t), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(t) {
    ((this._y = t), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(t) {
    ((this._z = t), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(t) {
    ((this._w = t), this._onChangeCallback());
  }
  set(t, e, n, r) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(t) {
    return (
      (this._x = t.x),
      (this._y = t.y),
      (this._z = t.z),
      (this._w = t.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(t, e = !0) {
    const n = t._x,
      r = t._y,
      s = t._z,
      a = t._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      u = o(r / 2),
      h = o(s / 2),
      d = l(n / 2),
      f = l(r / 2),
      g = l(s / 2);
    switch (a) {
      case "XYZ":
        ((this._x = d * u * h + c * f * g),
          (this._y = c * f * h - d * u * g),
          (this._z = c * u * g + d * f * h),
          (this._w = c * u * h - d * f * g));
        break;
      case "YXZ":
        ((this._x = d * u * h + c * f * g),
          (this._y = c * f * h - d * u * g),
          (this._z = c * u * g - d * f * h),
          (this._w = c * u * h + d * f * g));
        break;
      case "ZXY":
        ((this._x = d * u * h - c * f * g),
          (this._y = c * f * h + d * u * g),
          (this._z = c * u * g + d * f * h),
          (this._w = c * u * h - d * f * g));
        break;
      case "ZYX":
        ((this._x = d * u * h - c * f * g),
          (this._y = c * f * h + d * u * g),
          (this._z = c * u * g - d * f * h),
          (this._w = c * u * h + d * f * g));
        break;
      case "YZX":
        ((this._x = d * u * h + c * f * g),
          (this._y = c * f * h + d * u * g),
          (this._z = c * u * g - d * f * h),
          (this._w = c * u * h - d * f * g));
        break;
      case "XZY":
        ((this._x = d * u * h - c * f * g),
          (this._y = c * f * h - d * u * g),
          (this._z = c * u * g + d * f * h),
          (this._w = c * u * h + d * f * g));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            a,
        );
    }
    return (e === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(t, e) {
    const n = e / 2,
      r = Math.sin(n);
    return (
      (this._x = t.x * r),
      (this._y = t.y * r),
      (this._z = t.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t) {
    const e = t.elements,
      n = e[0],
      r = e[4],
      s = e[8],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[2],
      u = e[6],
      h = e[10],
      d = n + o + h;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      ((this._w = 0.25 / f),
        (this._x = (u - l) * f),
        (this._y = (s - c) * f),
        (this._z = (a - r) * f));
    } else if (n > o && n > h) {
      const f = 2 * Math.sqrt(1 + n - o - h);
      ((this._w = (u - l) / f),
        (this._x = 0.25 * f),
        (this._y = (r + a) / f),
        (this._z = (s + c) / f));
    } else if (o > h) {
      const f = 2 * Math.sqrt(1 + o - n - h);
      ((this._w = (s - c) / f),
        (this._x = (r + a) / f),
        (this._y = 0.25 * f),
        (this._z = (l + u) / f));
    } else {
      const f = 2 * Math.sqrt(1 + h - n - o);
      ((this._w = (a - r) / f),
        (this._x = (s + c) / f),
        (this._y = (l + u) / f),
        (this._z = 0.25 * f));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(t, e) {
    let n = t.dot(e) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(t.x) > Math.abs(t.z)
            ? ((this._x = -t.y), (this._y = t.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -t.z), (this._z = t.y), (this._w = n)))
        : ((this._x = t.y * e.z - t.z * e.y),
          (this._y = t.z * e.x - t.x * e.z),
          (this._z = t.x * e.y - t.y * e.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(t) {
    return 2 * Math.acos(Math.abs(Ot(this.dot(t), -1, 1)));
  }
  rotateTowards(t, e) {
    const n = this.angleTo(t);
    if (n === 0) return this;
    const r = Math.min(1, e / n);
    return (this.slerp(t, r), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(t) {
    return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let t = this.length();
    return (
      t === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((t = 1 / t),
          (this._x = this._x * t),
          (this._y = this._y * t),
          (this._z = this._z * t),
          (this._w = this._w * t)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(t) {
    return this.multiplyQuaternions(this, t);
  }
  premultiply(t) {
    return this.multiplyQuaternions(t, this);
  }
  multiplyQuaternions(t, e) {
    const n = t._x,
      r = t._y,
      s = t._z,
      a = t._w,
      o = e._x,
      l = e._y,
      c = e._z,
      u = e._w;
    return (
      (this._x = n * u + a * o + r * c - s * l),
      (this._y = r * u + a * l + s * o - n * c),
      (this._z = s * u + a * c + n * l - r * o),
      (this._w = a * u - n * o - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(t, e) {
    if (e === 0) return this;
    if (e === 1) return this.copy(t);
    const n = this._x,
      r = this._y,
      s = this._z,
      a = this._w;
    let o = a * t._w + n * t._x + r * t._y + s * t._z;
    if (
      (o < 0
        ? ((this._w = -t._w),
          (this._x = -t._x),
          (this._y = -t._y),
          (this._z = -t._z),
          (o = -o))
        : this.copy(t),
      o >= 1)
    )
      return ((this._w = a), (this._x = n), (this._y = r), (this._z = s), this);
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - e;
      return (
        (this._w = f * a + e * this._w),
        (this._x = f * n + e * this._x),
        (this._y = f * r + e * this._y),
        (this._z = f * s + e * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, o),
      h = Math.sin((1 - e) * u) / c,
      d = Math.sin(e * u) / c;
    return (
      (this._w = a * h + this._w * d),
      (this._x = n * h + this._x * d),
      (this._y = r * h + this._y * d),
      (this._z = s * h + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(t, e, n) {
    return this.copy(t).slerp(e, n);
  }
  random() {
    const t = 2 * Math.PI * Math.random(),
      e = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(
      r * Math.sin(t),
      r * Math.cos(t),
      s * Math.sin(e),
      s * Math.cos(e),
    );
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._w === this._w
    );
  }
  fromArray(t, e = 0) {
    return (
      (this._x = t[e]),
      (this._y = t[e + 1]),
      (this._z = t[e + 2]),
      (this._w = t[e + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this._x = t.getX(e)),
      (this._y = t.getY(e)),
      (this._z = t.getZ(e)),
      (this._w = t.getW(e)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(t) {
    return ((this._onChangeCallback = t), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class L {
  constructor(t = 0, e = 0, n = 0) {
    ((L.prototype.isVector3 = !0), (this.x = t), (this.y = e), (this.z = n));
  }
  set(t, e, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      this
    );
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), (this.z = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setZ(t) {
    return ((this.z = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(t) {
    return ((this.x = t.x), (this.y = t.y), (this.z = t.z), this);
  }
  add(t) {
    return ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), (this.z += t), this);
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      this
    );
  }
  sub(t) {
    return ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), (this.z -= t), this);
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      this
    );
  }
  multiply(t) {
    return ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), (this.z *= t), this);
  }
  multiplyVectors(t, e) {
    return (
      (this.x = t.x * e.x),
      (this.y = t.y * e.y),
      (this.z = t.z * e.z),
      this
    );
  }
  applyEuler(t) {
    return this.applyQuaternion(Hs.setFromEuler(t));
  }
  applyAxisAngle(t, e) {
    return this.applyQuaternion(Hs.setFromAxisAngle(t, e));
  }
  applyMatrix3(t) {
    const e = this.x,
      n = this.y,
      r = this.z,
      s = t.elements;
    return (
      (this.x = s[0] * e + s[3] * n + s[6] * r),
      (this.y = s[1] * e + s[4] * n + s[7] * r),
      (this.z = s[2] * e + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(t) {
    return this.applyMatrix3(t).normalize();
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      r = this.z,
      s = t.elements,
      a = 1 / (s[3] * e + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * e + s[4] * n + s[8] * r + s[12]) * a),
      (this.y = (s[1] * e + s[5] * n + s[9] * r + s[13]) * a),
      (this.z = (s[2] * e + s[6] * n + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(t) {
    const e = this.x,
      n = this.y,
      r = this.z,
      s = t.x,
      a = t.y,
      o = t.z,
      l = t.w,
      c = 2 * (a * r - o * n),
      u = 2 * (o * e - s * r),
      h = 2 * (s * n - a * e);
    return (
      (this.x = e + l * c + a * h - o * u),
      (this.y = n + l * u + o * c - s * h),
      (this.z = r + l * h + s * u - a * c),
      this
    );
  }
  project(t) {
    return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
      t.projectionMatrix,
    );
  }
  unproject(t) {
    return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
      t.matrixWorld,
    );
  }
  transformDirection(t) {
    const e = this.x,
      n = this.y,
      r = this.z,
      s = t.elements;
    return (
      (this.x = s[0] * e + s[4] * n + s[8] * r),
      (this.y = s[1] * e + s[5] * n + s[9] * r),
      (this.z = s[2] * e + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(t) {
    return ((this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this);
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Ot(this.x, t.x, e.x)),
      (this.y = Ot(this.y, t.y, e.y)),
      (this.z = Ot(this.z, t.z, e.z)),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Ot(this.x, t, e)),
      (this.y = Ot(this.y, t, e)),
      (this.z = Ot(this.z, t, e)),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z;
  }
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
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      this
    );
  }
  cross(t) {
    return this.crossVectors(this, t);
  }
  crossVectors(t, e) {
    const n = t.x,
      r = t.y,
      s = t.z,
      a = e.x,
      o = e.y,
      l = e.z;
    return (
      (this.x = r * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(t) {
    const e = t.lengthSq();
    if (e === 0) return this.set(0, 0, 0);
    const n = t.dot(this) / e;
    return this.copy(t).multiplyScalar(n);
  }
  projectOnPlane(t) {
    return (Cr.copy(this).projectOnVector(t), this.sub(Cr));
  }
  reflect(t) {
    return this.sub(Cr.copy(t).multiplyScalar(2 * this.dot(t)));
  }
  angleTo(t) {
    const e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    const n = this.dot(t) / e;
    return Math.acos(Ot(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    const e = this.x - t.x,
      n = this.y - t.y,
      r = this.z - t.z;
    return e * e + n * n + r * r;
  }
  manhattanDistanceTo(t) {
    return (
      Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
    );
  }
  setFromSpherical(t) {
    return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
  }
  setFromSphericalCoords(t, e, n) {
    const r = Math.sin(e) * t;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(e) * t),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(t) {
    return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
  }
  setFromCylindricalCoords(t, e, n) {
    return (
      (this.x = t * Math.sin(e)),
      (this.y = n),
      (this.z = t * Math.cos(e)),
      this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return ((this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this);
  }
  setFromMatrixScale(t) {
    const e = this.setFromMatrixColumn(t, 0).length(),
      n = this.setFromMatrixColumn(t, 1).length(),
      r = this.setFromMatrixColumn(t, 2).length();
    return ((this.x = e), (this.y = n), (this.z = r), this);
  }
  setFromMatrixColumn(t, e) {
    return this.fromArray(t.elements, e * 4);
  }
  setFromMatrix3Column(t, e) {
    return this.fromArray(t.elements, e * 3);
  }
  setFromEuler(t) {
    return ((this.x = t._x), (this.y = t._y), (this.z = t._z), this);
  }
  setFromColor(t) {
    return ((this.x = t.r), (this.y = t.g), (this.z = t.b), this);
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z;
  }
  fromArray(t, e = 0) {
    return ((this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t);
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const t = Math.random() * Math.PI * 2,
      e = Math.random() * 2 - 1,
      n = Math.sqrt(1 - e * e);
    return (
      (this.x = n * Math.cos(t)),
      (this.y = e),
      (this.z = n * Math.sin(t)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const Cr = new L(),
  Hs = new Pi();
class It {
  constructor(t, e, n, r, s, a, o, l, c) {
    ((It.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, n, r, s, a, o, l, c));
  }
  set(t, e, n, r, s, a, o, l, c) {
    const u = this.elements;
    return (
      (u[0] = t),
      (u[1] = r),
      (u[2] = o),
      (u[3] = e),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = a),
      (u[8] = c),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrix3Column(this, 0),
      e.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(t) {
    const e = t.elements;
    return (
      this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      r = e.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      h = n[7],
      d = n[2],
      f = n[5],
      g = n[8],
      v = r[0],
      m = r[3],
      p = r[6],
      A = r[1],
      E = r[4],
      _ = r[7],
      b = r[2],
      T = r[5],
      w = r[8];
    return (
      (s[0] = a * v + o * A + l * b),
      (s[3] = a * m + o * E + l * T),
      (s[6] = a * p + o * _ + l * w),
      (s[1] = c * v + u * A + h * b),
      (s[4] = c * m + u * E + h * T),
      (s[7] = c * p + u * _ + h * w),
      (s[2] = d * v + f * A + g * b),
      (s[5] = d * m + f * E + g * T),
      (s[8] = d * p + f * _ + g * w),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[3] *= t),
      (e[6] *= t),
      (e[1] *= t),
      (e[4] *= t),
      (e[7] *= t),
      (e[2] *= t),
      (e[5] *= t),
      (e[8] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      r = t[2],
      s = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      c = t[7],
      u = t[8];
    return (
      e * a * u - e * o * c - n * s * u + n * o * l + r * s * c - r * a * l
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      r = t[2],
      s = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      h = u * a - o * c,
      d = o * l - u * s,
      f = c * s - a * l,
      g = e * h + n * d + r * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / g;
    return (
      (t[0] = h * v),
      (t[1] = (r * c - u * n) * v),
      (t[2] = (o * n - r * a) * v),
      (t[3] = d * v),
      (t[4] = (u * e - r * l) * v),
      (t[5] = (r * s - o * e) * v),
      (t[6] = f * v),
      (t[7] = (n * l - c * e) * v),
      (t[8] = (a * e - n * s) * v),
      this
    );
  }
  transpose() {
    let t;
    const e = this.elements;
    return (
      (t = e[1]),
      (e[1] = e[3]),
      (e[3] = t),
      (t = e[2]),
      (e[2] = e[6]),
      (e[6] = t),
      (t = e[5]),
      (e[5] = e[7]),
      (e[7] = t),
      this
    );
  }
  getNormalMatrix(t) {
    return this.setFromMatrix4(t).invert().transpose();
  }
  transposeIntoArray(t) {
    const e = this.elements;
    return (
      (t[0] = e[0]),
      (t[1] = e[3]),
      (t[2] = e[6]),
      (t[3] = e[1]),
      (t[4] = e[4]),
      (t[5] = e[7]),
      (t[6] = e[2]),
      (t[7] = e[5]),
      (t[8] = e[8]),
      this
    );
  }
  setUvTransform(t, e, n, r, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + t,
        -r * c,
        r * l,
        -r * (-c * a + l * o) + o + e,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(t, e) {
    return (this.premultiply(Pr.makeScale(t, e)), this);
  }
  rotate(t) {
    return (this.premultiply(Pr.makeRotation(-t)), this);
  }
  translate(t, e) {
    return (this.premultiply(Pr.makeTranslation(t, e)), this);
  }
  makeTranslation(t, e) {
    return (
      t.isVector2
        ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
        : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
      this
    );
  }
  makeRotation(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return (this.set(e, -n, 0, n, e, 0, 0, 0, 1), this);
  }
  makeScale(t, e) {
    return (this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this);
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let r = 0; r < 9; r++) if (e[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      t
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Pr = new It();
function Za(i) {
  for (let t = i.length - 1; t >= 0; --t) if (i[t] >= 65535) return !0;
  return !1;
}
function Ai(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function rl() {
  const i = Ai("canvas");
  return ((i.style.display = "block"), i);
}
const Vs = {};
function bi(i) {
  i in Vs || ((Vs[i] = !0), console.warn(i));
}
function sl(i, t, e) {
  return new Promise(function (n, r) {
    function s() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, e);
          break;
        default:
          n();
      }
    }
    setTimeout(s, e);
  });
}
const ks = new It().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  Ws = new It().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function al() {
  const i = {
      enabled: !0,
      workingColorSpace: Qn,
      spaces: {},
      convert: function (r, s, a) {
        return (
          this.enabled === !1 ||
            s === a ||
            !s ||
            !a ||
            (this.spaces[s].transfer === $t &&
              ((r.r = nn(r.r)), (r.g = nn(r.g)), (r.b = nn(r.b))),
            this.spaces[s].primaries !== this.spaces[a].primaries &&
              (r.applyMatrix3(this.spaces[s].toXYZ),
              r.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === $t &&
              ((r.r = jn(r.r)), (r.g = jn(r.g)), (r.b = jn(r.b)))),
          r
        );
      },
      workingToColorSpace: function (r, s) {
        return this.convert(r, this.workingColorSpace, s);
      },
      colorSpaceToWorking: function (r, s) {
        return this.convert(r, s, this.workingColorSpace);
      },
      getPrimaries: function (r) {
        return this.spaces[r].primaries;
      },
      getTransfer: function (r) {
        return r === "" ? _r : this.spaces[r].transfer;
      },
      getToneMappingMode: function (r) {
        return (
          this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (r, s = this.workingColorSpace) {
        return r.fromArray(this.spaces[s].luminanceCoefficients);
      },
      define: function (r) {
        Object.assign(this.spaces, r);
      },
      _getMatrix: function (r, s, a) {
        return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (r) {
        return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (r = this.workingColorSpace) {
        return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (r, s) {
        return (
          bi(
            "THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().",
          ),
          i.workingToColorSpace(r, s)
        );
      },
      toWorkingColorSpace: function (r, s) {
        return (
          bi(
            "THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().",
          ),
          i.colorSpaceToWorking(r, s)
        );
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    e = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [Qn]: {
        primaries: t,
        whitePoint: n,
        transfer: _r,
        toXYZ: ks,
        fromXYZ: Ws,
        luminanceCoefficients: e,
        workingColorSpaceConfig: { unpackColorSpace: Ee },
        outputColorSpaceConfig: { drawingBufferColorSpace: Ee },
      },
      [Ee]: {
        primaries: t,
        whitePoint: n,
        transfer: $t,
        toXYZ: ks,
        fromXYZ: Ws,
        luminanceCoefficients: e,
        outputColorSpaceConfig: { drawingBufferColorSpace: Ee },
      },
    }),
    i
  );
}
const kt = al();
function nn(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function jn(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Ln;
class ol {
  static getDataURL(t, e = "image/png") {
    if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
    let n;
    if (t instanceof HTMLCanvasElement) n = t;
    else {
      (Ln === void 0 && (Ln = Ai("canvas")),
        (Ln.width = t.width),
        (Ln.height = t.height));
      const r = Ln.getContext("2d");
      (t instanceof ImageData
        ? r.putImageData(t, 0, 0)
        : r.drawImage(t, 0, 0, t.width, t.height),
        (n = Ln));
    }
    return n.toDataURL(e);
  }
  static sRGBToLinear(t) {
    if (
      (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && t instanceof ImageBitmap)
    ) {
      const e = Ai("canvas");
      ((e.width = t.width), (e.height = t.height));
      const n = e.getContext("2d");
      n.drawImage(t, 0, 0, t.width, t.height);
      const r = n.getImageData(0, 0, t.width, t.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = nn(s[a] / 255) * 255;
      return (n.putImageData(r, 0, 0), e);
    } else if (t.data) {
      const e = t.data.slice(0);
      for (let n = 0; n < e.length; n++)
        e instanceof Uint8Array || e instanceof Uint8ClampedArray
          ? (e[n] = Math.floor(nn(e[n] / 255) * 255))
          : (e[n] = nn(e[n]));
      return { data: e, width: t.width, height: t.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        t
      );
  }
}
let ll = 0;
class Es {
  constructor(t = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: ll++ }),
      (this.uuid = qe()),
      (this.data = t),
      (this.dataReady = !0),
      (this.version = 0));
  }
  getSize(t) {
    const e = this.data;
    return (
      typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement
        ? t.set(e.videoWidth, e.videoHeight, 0)
        : e instanceof VideoFrame
          ? t.set(e.displayHeight, e.displayWidth, 0)
          : e !== null
            ? t.set(e.width, e.height, e.depth || 0)
            : t.set(0, 0, 0),
      t
    );
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Dr(r[a].image)) : s.push(Dr(r[a]));
      } else s = Dr(r);
      n.url = s;
    }
    return (e || (t.images[this.uuid] = n), n);
  }
}
function Dr(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? ol.getDataURL(i)
    : i.data
      ? {
          data: Array.from(i.data),
          width: i.width,
          height: i.height,
          type: i.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let cl = 0;
const Lr = new L();
class xe extends ii {
  constructor(
    t = xe.DEFAULT_IMAGE,
    e = xe.DEFAULT_MAPPING,
    n = 1001,
    r = 1001,
    s = 1006,
    a = 1008,
    o = 1023,
    l = 1009,
    c = xe.DEFAULT_ANISOTROPY,
    u = "",
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: cl++ }),
      (this.uuid = qe()),
      (this.name = ""),
      (this.source = new Es(t)),
      (this.mipmaps = []),
      (this.mapping = e),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new ot(0, 0)),
      (this.repeat = new ot(1, 1)),
      (this.center = new ot(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new It()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = u),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(t && t.depth && t.depth > 1)),
      (this.pmremVersion = 0));
  }
  get width() {
    return this.source.getSize(Lr).x;
  }
  get height() {
    return this.source.getSize(Lr).y;
  }
  get depth() {
    return this.source.getSize(Lr).z;
  }
  get image() {
    return this.source.data;
  }
  set image(t = null) {
    this.source.data = t;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.source = t.source),
      (this.mipmaps = t.mipmaps.slice(0)),
      (this.mapping = t.mapping),
      (this.channel = t.channel),
      (this.wrapS = t.wrapS),
      (this.wrapT = t.wrapT),
      (this.magFilter = t.magFilter),
      (this.minFilter = t.minFilter),
      (this.anisotropy = t.anisotropy),
      (this.format = t.format),
      (this.internalFormat = t.internalFormat),
      (this.type = t.type),
      this.offset.copy(t.offset),
      this.repeat.copy(t.repeat),
      this.center.copy(t.center),
      (this.rotation = t.rotation),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this.matrix.copy(t.matrix),
      (this.generateMipmaps = t.generateMipmaps),
      (this.premultiplyAlpha = t.premultiplyAlpha),
      (this.flipY = t.flipY),
      (this.unpackAlignment = t.unpackAlignment),
      (this.colorSpace = t.colorSpace),
      (this.renderTarget = t.renderTarget),
      (this.isRenderTargetTexture = t.isRenderTargetTexture),
      (this.isArrayTexture = t.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(t) {
    for (const e in t) {
      const n = t[e];
      if (n === void 0) {
        console.warn(
          `THREE.Texture.setValues(): parameter '${e}' has value of undefined.`,
        );
        continue;
      }
      const r = this[e];
      if (r === void 0) {
        console.warn(
          `THREE.Texture.setValues(): property '${e}' does not exist.`,
        );
        continue;
      }
      (r && n && r.isVector2 && n.isVector2) ||
      (r && n && r.isVector3 && n.isVector3) ||
      (r && n && r.isMatrix3 && n.isMatrix3)
        ? r.copy(n)
        : (this[e] = n);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(t).uuid,
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
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      e || (t.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(t) {
    if (this.mapping !== 300) return t;
    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
      switch (this.wrapS) {
        case 1e3:
          t.x = t.x - Math.floor(t.x);
          break;
        case 1001:
          t.x = t.x < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.x) % 2) === 1
            ? (t.x = Math.ceil(t.x) - t.x)
            : (t.x = t.x - Math.floor(t.x));
          break;
      }
    if (t.y < 0 || t.y > 1)
      switch (this.wrapT) {
        case 1e3:
          t.y = t.y - Math.floor(t.y);
          break;
        case 1001:
          t.y = t.y < 0 ? 0 : 1;
          break;
        case 1002:
          Math.abs(Math.floor(t.y) % 2) === 1
            ? (t.y = Math.ceil(t.y) - t.y)
            : (t.y = t.y - Math.floor(t.y));
          break;
      }
    return (this.flipY && (t.y = 1 - t.y), t);
  }
  set needsUpdate(t) {
    t === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(t) {
    t === !0 && this.pmremVersion++;
  }
}
xe.DEFAULT_IMAGE = null;
xe.DEFAULT_MAPPING = 300;
xe.DEFAULT_ANISOTROPY = 1;
class Kt {
  constructor(t = 0, e = 0, n = 0, r = 1) {
    ((Kt.prototype.isVector4 = !0),
      (this.x = t),
      (this.y = e),
      (this.z = n),
      (this.w = r));
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, r) {
    return ((this.x = t), (this.y = e), (this.z = n), (this.w = r), this);
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), (this.z = t), (this.w = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setZ(t) {
    return ((this.z = t), this);
  }
  setW(t) {
    return ((this.w = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = t.w !== void 0 ? t.w : 1),
      this
    );
  }
  add(t) {
    return (
      (this.x += t.x),
      (this.y += t.y),
      (this.z += t.z),
      (this.w += t.w),
      this
    );
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), (this.z += t), (this.w += t), this);
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t) {
    return (
      (this.x -= t.x),
      (this.y -= t.y),
      (this.z -= t.z),
      (this.w -= t.w),
      this
    );
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this);
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x),
      (this.y *= t.y),
      (this.z *= t.z),
      (this.w *= t.w),
      this
    );
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this);
  }
  applyMatrix4(t) {
    const e = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      a = t.elements;
    return (
      (this.x = a[0] * e + a[4] * n + a[8] * r + a[12] * s),
      (this.y = a[1] * e + a[5] * n + a[9] * r + a[13] * s),
      (this.z = a[2] * e + a[6] * n + a[10] * r + a[14] * s),
      (this.w = a[3] * e + a[7] * n + a[11] * r + a[15] * s),
      this
    );
  }
  divide(t) {
    return (
      (this.x /= t.x),
      (this.y /= t.y),
      (this.z /= t.z),
      (this.w /= t.w),
      this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    const e = Math.sqrt(1 - t.w * t.w);
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e, n, r, s;
    const l = t.elements,
      c = l[0],
      u = l[4],
      h = l[8],
      d = l[1],
      f = l[5],
      g = l[9],
      v = l[2],
      m = l[6],
      p = l[10];
    if (
      Math.abs(u - d) < 0.01 &&
      Math.abs(h - v) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(u + d) < 0.1 &&
        Math.abs(h + v) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(c + f + p - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      e = Math.PI;
      const E = (c + 1) / 2,
        _ = (f + 1) / 2,
        b = (p + 1) / 2,
        T = (u + d) / 4,
        w = (h + v) / 4,
        C = (g + m) / 4;
      return (
        E > _ && E > b
          ? E < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(E)), (r = T / n), (s = w / n))
          : _ > b
            ? _ < 0.01
              ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
              : ((r = Math.sqrt(_)), (n = T / r), (s = C / r))
            : b < 0.01
              ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
              : ((s = Math.sqrt(b)), (n = w / s), (r = C / s)),
        this.set(n, r, s, e),
        this
      );
    }
    let A = Math.sqrt(
      (m - g) * (m - g) + (h - v) * (h - v) + (d - u) * (d - u),
    );
    return (
      Math.abs(A) < 0.001 && (A = 1),
      (this.x = (m - g) / A),
      (this.y = (h - v) / A),
      (this.z = (d - u) / A),
      (this.w = Math.acos((c + f + p - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(t) {
    const e = t.elements;
    return (
      (this.x = e[12]),
      (this.y = e[13]),
      (this.z = e[14]),
      (this.w = e[15]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = Ot(this.x, t.x, e.x)),
      (this.y = Ot(this.y, t.y, e.y)),
      (this.z = Ot(this.z, t.z, e.z)),
      (this.w = Ot(this.w, t.w, e.w)),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = Ot(this.x, t, e)),
      (this.y = Ot(this.y, t, e)),
      (this.z = Ot(this.z, t, e)),
      (this.w = Ot(this.w, t, e)),
      this
    );
  }
  clampLength(t, e) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ot(n, t, e));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class ul extends ii {
  constructor(t = 1, e = 1, n = {}) {
    (super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: 1006,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
        },
        n,
      )),
      (this.isRenderTarget = !0),
      (this.width = t),
      (this.height = e),
      (this.depth = n.depth),
      (this.scissor = new Kt(0, 0, t, e)),
      (this.scissorTest = !1),
      (this.viewport = new Kt(0, 0, t, e)));
    const r = { width: t, height: e, depth: n.depth },
      s = new xe(r);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      ((this.textures[o] = s.clone()),
        (this.textures[o].isRenderTargetTexture = !0),
        (this.textures[o].renderTarget = this));
    (this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview));
  }
  _setTextureOptions(t = {}) {
    const e = {
      minFilter: 1006,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    (t.mapping !== void 0 && (e.mapping = t.mapping),
      t.wrapS !== void 0 && (e.wrapS = t.wrapS),
      t.wrapT !== void 0 && (e.wrapT = t.wrapT),
      t.wrapR !== void 0 && (e.wrapR = t.wrapR),
      t.magFilter !== void 0 && (e.magFilter = t.magFilter),
      t.minFilter !== void 0 && (e.minFilter = t.minFilter),
      t.format !== void 0 && (e.format = t.format),
      t.type !== void 0 && (e.type = t.type),
      t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy),
      t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace),
      t.flipY !== void 0 && (e.flipY = t.flipY),
      t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps),
      t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat));
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(e);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(t) {
    this.textures[0] = t;
  }
  set depthTexture(t) {
    (this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      t !== null && (t.renderTarget = this),
      (this._depthTexture = t));
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(t, e, n = 1) {
    if (this.width !== t || this.height !== e || this.depth !== n) {
      ((this.width = t), (this.height = e), (this.depth = n));
      for (let r = 0, s = this.textures.length; r < s; r++)
        ((this.textures[r].image.width = t),
          (this.textures[r].image.height = e),
          (this.textures[r].image.depth = n),
          (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1));
      this.dispose();
    }
    (this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    ((this.width = t.width),
      (this.height = t.height),
      (this.depth = t.depth),
      this.scissor.copy(t.scissor),
      (this.scissorTest = t.scissorTest),
      this.viewport.copy(t.viewport),
      (this.textures.length = 0));
    for (let e = 0, n = t.textures.length; e < n; e++) {
      ((this.textures[e] = t.textures[e].clone()),
        (this.textures[e].isRenderTargetTexture = !0),
        (this.textures[e].renderTarget = this));
      const r = Object.assign({}, t.textures[e].image);
      this.textures[e].source = new Es(r);
    }
    return (
      (this.depthBuffer = t.depthBuffer),
      (this.stencilBuffer = t.stencilBuffer),
      (this.resolveDepthBuffer = t.resolveDepthBuffer),
      (this.resolveStencilBuffer = t.resolveStencilBuffer),
      t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
      (this.samples = t.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class bn extends ul {
  constructor(t = 1, e = 1, n = {}) {
    (super(t, e, n), (this.isWebGLRenderTarget = !0));
  }
}
class Ja extends xe {
  constructor(t = null, e = 1, n = 1, r = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: t, width: e, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(t) {
    this.layerUpdates.add(t);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class hl extends xe {
  constructor(t = null, e = 1, n = 1, r = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: t, width: e, height: n, depth: r }),
      (this.magFilter = 1003),
      (this.minFilter = 1003),
      (this.wrapR = 1001),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class Rn {
  constructor(
    t = new L(1 / 0, 1 / 0, 1 / 0),
    e = new L(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = t), (this.max = e));
  }
  set(t, e) {
    return (this.min.copy(t), this.max.copy(e), this);
  }
  setFromArray(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e += 3)
      this.expandByPoint(ze.fromArray(t, e));
    return this;
  }
  setFromBufferAttribute(t) {
    this.makeEmpty();
    for (let e = 0, n = t.count; e < n; e++)
      this.expandByPoint(ze.fromBufferAttribute(t, e));
    return this;
  }
  setFromPoints(t) {
    this.makeEmpty();
    for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
    return this;
  }
  setFromCenterAndSize(t, e) {
    const n = ze.copy(e).multiplyScalar(0.5);
    return (this.min.copy(t).sub(n), this.max.copy(t).add(n), this);
  }
  setFromObject(t, e = !1) {
    return (this.makeEmpty(), this.expandByObject(t, e));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (this.min.copy(t.min), this.max.copy(t.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(t) {
    return this.isEmpty()
      ? t.set(0, 0, 0)
      : t.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(t) {
    return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
  }
  expandByPoint(t) {
    return (this.min.min(t), this.max.max(t), this);
  }
  expandByVector(t) {
    return (this.min.sub(t), this.max.add(t), this);
  }
  expandByScalar(t) {
    return (this.min.addScalar(-t), this.max.addScalar(t), this);
  }
  expandByObject(t, e = !1) {
    t.updateWorldMatrix(!1, !1);
    const n = t.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (e === !0 && s !== void 0 && t.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          (t.isMesh === !0
            ? t.getVertexPosition(a, ze)
            : ze.fromBufferAttribute(s, a),
            ze.applyMatrix4(t.matrixWorld),
            this.expandByPoint(ze));
      else
        (t.boundingBox !== void 0
          ? (t.boundingBox === null && t.computeBoundingBox(),
            Ni.copy(t.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Ni.copy(n.boundingBox)),
          Ni.applyMatrix4(t.matrixWorld),
          this.union(Ni));
    }
    const r = t.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], e);
    return this;
  }
  containsPoint(t) {
    return (
      t.x >= this.min.x &&
      t.x <= this.max.x &&
      t.y >= this.min.y &&
      t.y <= this.max.y &&
      t.z >= this.min.z &&
      t.z <= this.max.z
    );
  }
  containsBox(t) {
    return (
      this.min.x <= t.min.x &&
      t.max.x <= this.max.x &&
      this.min.y <= t.min.y &&
      t.max.y <= this.max.y &&
      this.min.z <= t.min.z &&
      t.max.z <= this.max.z
    );
  }
  getParameter(t, e) {
    return e.set(
      (t.x - this.min.x) / (this.max.x - this.min.x),
      (t.y - this.min.y) / (this.max.y - this.min.y),
      (t.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(t) {
    return (
      t.max.x >= this.min.x &&
      t.min.x <= this.max.x &&
      t.max.y >= this.min.y &&
      t.min.y <= this.max.y &&
      t.max.z >= this.min.z &&
      t.min.z <= this.max.z
    );
  }
  intersectsSphere(t) {
    return (
      this.clampPoint(t.center, ze),
      ze.distanceToSquared(t.center) <= t.radius * t.radius
    );
  }
  intersectsPlane(t) {
    let e, n;
    return (
      t.normal.x > 0
        ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
        : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
      t.normal.y > 0
        ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
        : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
      t.normal.z > 0
        ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
        : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
      e <= -t.constant && n >= -t.constant
    );
  }
  intersectsTriangle(t) {
    if (this.isEmpty()) return !1;
    (this.getCenter(ai),
      Oi.subVectors(this.max, ai),
      Un.subVectors(t.a, ai),
      In.subVectors(t.b, ai),
      Fn.subVectors(t.c, ai),
      rn.subVectors(In, Un),
      sn.subVectors(Fn, In),
      mn.subVectors(Un, Fn));
    let e = [
      0,
      -rn.z,
      rn.y,
      0,
      -sn.z,
      sn.y,
      0,
      -mn.z,
      mn.y,
      rn.z,
      0,
      -rn.x,
      sn.z,
      0,
      -sn.x,
      mn.z,
      0,
      -mn.x,
      -rn.y,
      rn.x,
      0,
      -sn.y,
      sn.x,
      0,
      -mn.y,
      mn.x,
      0,
    ];
    return !Ur(e, Un, In, Fn, Oi) ||
      ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ur(e, Un, In, Fn, Oi))
      ? !1
      : (Bi.crossVectors(rn, sn),
        (e = [Bi.x, Bi.y, Bi.z]),
        Ur(e, Un, In, Fn, Oi));
  }
  clampPoint(t, e) {
    return e.copy(t).clamp(this.min, this.max);
  }
  distanceToPoint(t) {
    return this.clampPoint(t, ze).distanceTo(t);
  }
  getBoundingSphere(t) {
    return (
      this.isEmpty()
        ? t.makeEmpty()
        : (this.getCenter(t.center),
          (t.radius = this.getSize(ze).length() * 0.5)),
      t
    );
  }
  intersect(t) {
    return (
      this.min.max(t.min),
      this.max.min(t.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(t) {
    return (this.min.min(t.min), this.max.max(t.max), this);
  }
  applyMatrix4(t) {
    return this.isEmpty()
      ? this
      : ($e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
        $e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
        $e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
        $e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
        $e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
        $e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
        $e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
        $e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
        this.setFromPoints($e),
        this);
  }
  translate(t) {
    return (this.min.add(t), this.max.add(t), this);
  }
  equals(t) {
    return t.min.equals(this.min) && t.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(t) {
    return (this.min.fromArray(t.min), this.max.fromArray(t.max), this);
  }
}
const $e = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  ze = new L(),
  Ni = new Rn(),
  Un = new L(),
  In = new L(),
  Fn = new L(),
  rn = new L(),
  sn = new L(),
  mn = new L(),
  ai = new L(),
  Oi = new L(),
  Bi = new L(),
  gn = new L();
function Ur(i, t, e, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    gn.fromArray(i, s);
    const o =
        r.x * Math.abs(gn.x) + r.y * Math.abs(gn.y) + r.z * Math.abs(gn.z),
      l = t.dot(gn),
      c = e.dot(gn),
      u = n.dot(gn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return !1;
  }
  return !0;
}
const fl = new Rn(),
  oi = new L(),
  Ir = new L();
class Cn {
  constructor(t = new L(), e = -1) {
    ((this.isSphere = !0), (this.center = t), (this.radius = e));
  }
  set(t, e) {
    return (this.center.copy(t), (this.radius = e), this);
  }
  setFromPoints(t, e) {
    const n = this.center;
    e !== void 0 ? n.copy(e) : fl.setFromPoints(t).getCenter(n);
    let r = 0;
    for (let s = 0, a = t.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(t[s]));
    return ((this.radius = Math.sqrt(r)), this);
  }
  copy(t) {
    return (this.center.copy(t.center), (this.radius = t.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(t) {
    return t.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(t) {
    return t.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(t) {
    const e = this.radius + t.radius;
    return t.center.distanceToSquared(this.center) <= e * e;
  }
  intersectsBox(t) {
    return t.intersectsSphere(this);
  }
  intersectsPlane(t) {
    return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(t, e) {
    const n = this.center.distanceToSquared(t);
    return (
      e.copy(t),
      n > this.radius * this.radius &&
        (e.sub(this.center).normalize(),
        e.multiplyScalar(this.radius).add(this.center)),
      e
    );
  }
  getBoundingBox(t) {
    return this.isEmpty()
      ? (t.makeEmpty(), t)
      : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
  }
  applyMatrix4(t) {
    return (
      this.center.applyMatrix4(t),
      (this.radius = this.radius * t.getMaxScaleOnAxis()),
      this
    );
  }
  translate(t) {
    return (this.center.add(t), this);
  }
  expandByPoint(t) {
    if (this.isEmpty()) return (this.center.copy(t), (this.radius = 0), this);
    oi.subVectors(t, this.center);
    const e = oi.lengthSq();
    if (e > this.radius * this.radius) {
      const n = Math.sqrt(e),
        r = (n - this.radius) * 0.5;
      (this.center.addScaledVector(oi, r / n), (this.radius += r));
    }
    return this;
  }
  union(t) {
    return t.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(t), this)
        : (this.center.equals(t.center) === !0
            ? (this.radius = Math.max(this.radius, t.radius))
            : (Ir.subVectors(t.center, this.center).setLength(t.radius),
              this.expandByPoint(oi.copy(t.center).add(Ir)),
              this.expandByPoint(oi.copy(t.center).sub(Ir))),
          this);
  }
  equals(t) {
    return t.center.equals(this.center) && t.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(t) {
    return ((this.radius = t.radius), this.center.fromArray(t.center), this);
  }
}
const Ke = new L(),
  Fr = new L(),
  zi = new L(),
  an = new L(),
  Nr = new L(),
  Gi = new L(),
  Or = new L();
class Ts {
  constructor(t = new L(), e = new L(0, 0, -1)) {
    ((this.origin = t), (this.direction = e));
  }
  set(t, e) {
    return (this.origin.copy(t), this.direction.copy(e), this);
  }
  copy(t) {
    return (this.origin.copy(t.origin), this.direction.copy(t.direction), this);
  }
  at(t, e) {
    return e.copy(this.origin).addScaledVector(this.direction, t);
  }
  lookAt(t) {
    return (this.direction.copy(t).sub(this.origin).normalize(), this);
  }
  recast(t) {
    return (this.origin.copy(this.at(t, Ke)), this);
  }
  closestPointToPoint(t, e) {
    e.subVectors(t, this.origin);
    const n = e.dot(this.direction);
    return n < 0
      ? e.copy(this.origin)
      : e.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(t) {
    return Math.sqrt(this.distanceSqToPoint(t));
  }
  distanceSqToPoint(t) {
    const e = Ke.subVectors(t, this.origin).dot(this.direction);
    return e < 0
      ? this.origin.distanceToSquared(t)
      : (Ke.copy(this.origin).addScaledVector(this.direction, e),
        Ke.distanceToSquared(t));
  }
  distanceSqToSegment(t, e, n, r) {
    (Fr.copy(t).add(e).multiplyScalar(0.5),
      zi.copy(e).sub(t).normalize(),
      an.copy(this.origin).sub(Fr));
    const s = t.distanceTo(e) * 0.5,
      a = -this.direction.dot(zi),
      o = an.dot(this.direction),
      l = -an.dot(zi),
      c = an.lengthSq(),
      u = Math.abs(1 - a * a);
    let h, d, f, g;
    if (u > 0)
      if (((h = a * l - o), (d = a * o - l), (g = s * u), h >= 0))
        if (d >= -g)
          if (d <= g) {
            const v = 1 / u;
            ((h *= v),
              (d *= v),
              (f = h * (h + a * d + 2 * o) + d * (a * h + d + 2 * l) + c));
          } else
            ((d = s),
              (h = Math.max(0, -(a * d + o))),
              (f = -h * h + d * (d + 2 * l) + c));
        else
          ((d = -s),
            (h = Math.max(0, -(a * d + o))),
            (f = -h * h + d * (d + 2 * l) + c));
      else
        d <= -g
          ? ((h = Math.max(0, -(-a * s + o))),
            (d = h > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (f = -h * h + d * (d + 2 * l) + c))
          : d <= g
            ? ((h = 0),
              (d = Math.min(Math.max(-s, -l), s)),
              (f = d * (d + 2 * l) + c))
            : ((h = Math.max(0, -(a * s + o))),
              (d = h > 0 ? s : Math.min(Math.max(-s, -l), s)),
              (f = -h * h + d * (d + 2 * l) + c));
    else
      ((d = a > 0 ? -s : s),
        (h = Math.max(0, -(a * d + o))),
        (f = -h * h + d * (d + 2 * l) + c));
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, h),
      r && r.copy(Fr).addScaledVector(zi, d),
      f
    );
  }
  intersectSphere(t, e) {
    Ke.subVectors(t.center, this.origin);
    const n = Ke.dot(this.direction),
      r = Ke.dot(Ke) - n * n,
      s = t.radius * t.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, e) : this.at(o, e);
  }
  intersectsSphere(t) {
    return t.radius < 0
      ? !1
      : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
  }
  distanceToPlane(t) {
    const e = t.normal.dot(this.direction);
    if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(t.normal) + t.constant) / e;
    return n >= 0 ? n : null;
  }
  intersectPlane(t, e) {
    const n = this.distanceToPlane(t);
    return n === null ? null : this.at(n, e);
  }
  intersectsPlane(t) {
    const e = t.distanceToPoint(this.origin);
    return e === 0 || t.normal.dot(this.direction) * e < 0;
  }
  intersectBox(t, e) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      h = 1 / this.direction.z,
      d = this.origin;
    return (
      c >= 0
        ? ((n = (t.min.x - d.x) * c), (r = (t.max.x - d.x) * c))
        : ((n = (t.max.x - d.x) * c), (r = (t.min.x - d.x) * c)),
      u >= 0
        ? ((s = (t.min.y - d.y) * u), (a = (t.max.y - d.y) * u))
        : ((s = (t.max.y - d.y) * u), (a = (t.min.y - d.y) * u)),
      n > a ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (a < r || isNaN(r)) && (r = a),
      h >= 0
        ? ((o = (t.min.z - d.z) * h), (l = (t.max.z - d.z) * h))
        : ((o = (t.max.z - d.z) * h), (l = (t.min.z - d.z) * h)),
      n > l || o > r) ||
      ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, e)
    );
  }
  intersectsBox(t) {
    return this.intersectBox(t, Ke) !== null;
  }
  intersectTriangle(t, e, n, r, s) {
    (Nr.subVectors(e, t), Gi.subVectors(n, t), Or.crossVectors(Nr, Gi));
    let a = this.direction.dot(Or),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) ((o = -1), (a = -a));
    else return null;
    an.subVectors(this.origin, t);
    const l = o * this.direction.dot(Gi.crossVectors(an, Gi));
    if (l < 0) return null;
    const c = o * this.direction.dot(Nr.cross(an));
    if (c < 0 || l + c > a) return null;
    const u = -o * an.dot(Or);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(t) {
    return (
      this.origin.applyMatrix4(t),
      this.direction.transformDirection(t),
      this
    );
  }
  equals(t) {
    return t.origin.equals(this.origin) && t.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Zt {
  constructor(t, e, n, r, s, a, o, l, c, u, h, d, f, g, v, m) {
    ((Zt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, n, r, s, a, o, l, c, u, h, d, f, g, v, m));
  }
  set(t, e, n, r, s, a, o, l, c, u, h, d, f, g, v, m) {
    const p = this.elements;
    return (
      (p[0] = t),
      (p[4] = e),
      (p[8] = n),
      (p[12] = r),
      (p[1] = s),
      (p[5] = a),
      (p[9] = o),
      (p[13] = l),
      (p[2] = c),
      (p[6] = u),
      (p[10] = h),
      (p[14] = d),
      (p[3] = f),
      (p[7] = g),
      (p[11] = v),
      (p[15] = m),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Zt().fromArray(this.elements);
  }
  copy(t) {
    const e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      (e[9] = n[9]),
      (e[10] = n[10]),
      (e[11] = n[11]),
      (e[12] = n[12]),
      (e[13] = n[13]),
      (e[14] = n[14]),
      (e[15] = n[15]),
      this
    );
  }
  copyPosition(t) {
    const e = this.elements,
      n = t.elements;
    return ((e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this);
  }
  setFromMatrix3(t) {
    const e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(t, e, n) {
    return (
      t.setFromMatrixColumn(this, 0),
      e.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(t, e, n) {
    return (
      this.set(
        t.x,
        e.x,
        n.x,
        0,
        t.y,
        e.y,
        n.y,
        0,
        t.z,
        e.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(t) {
    const e = this.elements,
      n = t.elements,
      r = 1 / Nn.setFromMatrixColumn(t, 0).length(),
      s = 1 / Nn.setFromMatrixColumn(t, 1).length(),
      a = 1 / Nn.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = n[0] * r),
      (e[1] = n[1] * r),
      (e[2] = n[2] * r),
      (e[3] = 0),
      (e[4] = n[4] * s),
      (e[5] = n[5] * s),
      (e[6] = n[6] * s),
      (e[7] = 0),
      (e[8] = n[8] * a),
      (e[9] = n[9] * a),
      (e[10] = n[10] * a),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    const e = this.elements,
      n = t.x,
      r = t.y,
      s = t.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      u = Math.cos(s),
      h = Math.sin(s);
    if (t.order === "XYZ") {
      const d = a * u,
        f = a * h,
        g = o * u,
        v = o * h;
      ((e[0] = l * u),
        (e[4] = -l * h),
        (e[8] = c),
        (e[1] = f + g * c),
        (e[5] = d - v * c),
        (e[9] = -o * l),
        (e[2] = v - d * c),
        (e[6] = g + f * c),
        (e[10] = a * l));
    } else if (t.order === "YXZ") {
      const d = l * u,
        f = l * h,
        g = c * u,
        v = c * h;
      ((e[0] = d + v * o),
        (e[4] = g * o - f),
        (e[8] = a * c),
        (e[1] = a * h),
        (e[5] = a * u),
        (e[9] = -o),
        (e[2] = f * o - g),
        (e[6] = v + d * o),
        (e[10] = a * l));
    } else if (t.order === "ZXY") {
      const d = l * u,
        f = l * h,
        g = c * u,
        v = c * h;
      ((e[0] = d - v * o),
        (e[4] = -a * h),
        (e[8] = g + f * o),
        (e[1] = f + g * o),
        (e[5] = a * u),
        (e[9] = v - d * o),
        (e[2] = -a * c),
        (e[6] = o),
        (e[10] = a * l));
    } else if (t.order === "ZYX") {
      const d = a * u,
        f = a * h,
        g = o * u,
        v = o * h;
      ((e[0] = l * u),
        (e[4] = g * c - f),
        (e[8] = d * c + v),
        (e[1] = l * h),
        (e[5] = v * c + d),
        (e[9] = f * c - g),
        (e[2] = -c),
        (e[6] = o * l),
        (e[10] = a * l));
    } else if (t.order === "YZX") {
      const d = a * l,
        f = a * c,
        g = o * l,
        v = o * c;
      ((e[0] = l * u),
        (e[4] = v - d * h),
        (e[8] = g * h + f),
        (e[1] = h),
        (e[5] = a * u),
        (e[9] = -o * u),
        (e[2] = -c * u),
        (e[6] = f * h + g),
        (e[10] = d - v * h));
    } else if (t.order === "XZY") {
      const d = a * l,
        f = a * c,
        g = o * l,
        v = o * c;
      ((e[0] = l * u),
        (e[4] = -h),
        (e[8] = c * u),
        (e[1] = d * h + v),
        (e[5] = a * u),
        (e[9] = f * h - g),
        (e[2] = g * h - f),
        (e[6] = o * u),
        (e[10] = v * h + d));
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(dl, t, pl);
  }
  lookAt(t, e, n) {
    const r = this.elements;
    return (
      De.subVectors(t, e),
      De.lengthSq() === 0 && (De.z = 1),
      De.normalize(),
      on.crossVectors(n, De),
      on.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (De.x += 1e-4) : (De.z += 1e-4),
        De.normalize(),
        on.crossVectors(n, De)),
      on.normalize(),
      Hi.crossVectors(De, on),
      (r[0] = on.x),
      (r[4] = Hi.x),
      (r[8] = De.x),
      (r[1] = on.y),
      (r[5] = Hi.y),
      (r[9] = De.y),
      (r[2] = on.z),
      (r[6] = Hi.z),
      (r[10] = De.z),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    const n = t.elements,
      r = e.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      h = n[5],
      d = n[9],
      f = n[13],
      g = n[2],
      v = n[6],
      m = n[10],
      p = n[14],
      A = n[3],
      E = n[7],
      _ = n[11],
      b = n[15],
      T = r[0],
      w = r[4],
      C = r[8],
      M = r[12],
      S = r[1],
      D = r[5],
      I = r[9],
      B = r[13],
      H = r[2],
      W = r[6],
      V = r[10],
      K = r[14],
      k = r[3],
      tt = r[7],
      ut = r[11],
      Et = r[15];
    return (
      (s[0] = a * T + o * S + l * H + c * k),
      (s[4] = a * w + o * D + l * W + c * tt),
      (s[8] = a * C + o * I + l * V + c * ut),
      (s[12] = a * M + o * B + l * K + c * Et),
      (s[1] = u * T + h * S + d * H + f * k),
      (s[5] = u * w + h * D + d * W + f * tt),
      (s[9] = u * C + h * I + d * V + f * ut),
      (s[13] = u * M + h * B + d * K + f * Et),
      (s[2] = g * T + v * S + m * H + p * k),
      (s[6] = g * w + v * D + m * W + p * tt),
      (s[10] = g * C + v * I + m * V + p * ut),
      (s[14] = g * M + v * B + m * K + p * Et),
      (s[3] = A * T + E * S + _ * H + b * k),
      (s[7] = A * w + E * D + _ * W + b * tt),
      (s[11] = A * C + E * I + _ * V + b * ut),
      (s[15] = A * M + E * B + _ * K + b * Et),
      this
    );
  }
  multiplyScalar(t) {
    const e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    const t = this.elements,
      e = t[0],
      n = t[4],
      r = t[8],
      s = t[12],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[13],
      u = t[2],
      h = t[6],
      d = t[10],
      f = t[14],
      g = t[3],
      v = t[7],
      m = t[11],
      p = t[15];
    return (
      g *
        (+s * l * h -
          r * c * h -
          s * o * d +
          n * c * d +
          r * o * f -
          n * l * f) +
      v *
        (+e * l * f -
          e * c * d +
          s * a * d -
          r * a * f +
          r * c * u -
          s * l * u) +
      m *
        (+e * c * h -
          e * o * f -
          s * a * h +
          n * a * f +
          s * o * u -
          n * c * u) +
      p *
        (-r * o * u - e * l * h + e * o * d + r * a * h - n * a * d + n * l * u)
    );
  }
  transpose() {
    const t = this.elements;
    let e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, n) {
    const r = this.elements;
    return (
      t.isVector3
        ? ((r[12] = t.x), (r[13] = t.y), (r[14] = t.z))
        : ((r[12] = t), (r[13] = e), (r[14] = n)),
      this
    );
  }
  invert() {
    const t = this.elements,
      e = t[0],
      n = t[1],
      r = t[2],
      s = t[3],
      a = t[4],
      o = t[5],
      l = t[6],
      c = t[7],
      u = t[8],
      h = t[9],
      d = t[10],
      f = t[11],
      g = t[12],
      v = t[13],
      m = t[14],
      p = t[15],
      A = h * m * c - v * d * c + v * l * f - o * m * f - h * l * p + o * d * p,
      E = g * d * c - u * m * c - g * l * f + a * m * f + u * l * p - a * d * p,
      _ = u * v * c - g * h * c + g * o * f - a * v * f - u * o * p + a * h * p,
      b = g * h * l - u * v * l - g * o * d + a * v * d + u * o * m - a * h * m,
      T = e * A + n * E + r * _ + s * b;
    if (T === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / T;
    return (
      (t[0] = A * w),
      (t[1] =
        (v * d * s -
          h * m * s -
          v * r * f +
          n * m * f +
          h * r * p -
          n * d * p) *
        w),
      (t[2] =
        (o * m * s -
          v * l * s +
          v * r * c -
          n * m * c -
          o * r * p +
          n * l * p) *
        w),
      (t[3] =
        (h * l * s -
          o * d * s -
          h * r * c +
          n * d * c +
          o * r * f -
          n * l * f) *
        w),
      (t[4] = E * w),
      (t[5] =
        (u * m * s -
          g * d * s +
          g * r * f -
          e * m * f -
          u * r * p +
          e * d * p) *
        w),
      (t[6] =
        (g * l * s -
          a * m * s -
          g * r * c +
          e * m * c +
          a * r * p -
          e * l * p) *
        w),
      (t[7] =
        (a * d * s -
          u * l * s +
          u * r * c -
          e * d * c -
          a * r * f +
          e * l * f) *
        w),
      (t[8] = _ * w),
      (t[9] =
        (g * h * s -
          u * v * s -
          g * n * f +
          e * v * f +
          u * n * p -
          e * h * p) *
        w),
      (t[10] =
        (a * v * s -
          g * o * s +
          g * n * c -
          e * v * c -
          a * n * p +
          e * o * p) *
        w),
      (t[11] =
        (u * o * s -
          a * h * s -
          u * n * c +
          e * h * c +
          a * n * f -
          e * o * f) *
        w),
      (t[12] = b * w),
      (t[13] =
        (u * v * r -
          g * h * r +
          g * n * d -
          e * v * d -
          u * n * m +
          e * h * m) *
        w),
      (t[14] =
        (g * o * r -
          a * v * r -
          g * n * l +
          e * v * l +
          a * n * m -
          e * o * m) *
        w),
      (t[15] =
        (a * h * r -
          u * o * r +
          u * n * l -
          e * h * l -
          a * n * d +
          e * o * d) *
        w),
      this
    );
  }
  scale(t) {
    const e = this.elements,
      n = t.x,
      r = t.y,
      s = t.z;
    return (
      (e[0] *= n),
      (e[4] *= r),
      (e[8] *= s),
      (e[1] *= n),
      (e[5] *= r),
      (e[9] *= s),
      (e[2] *= n),
      (e[6] *= r),
      (e[10] *= s),
      (e[3] *= n),
      (e[7] *= r),
      (e[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      r = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, r));
  }
  makeTranslation(t, e, n) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return (this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return (this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(t) {
    const e = Math.cos(t),
      n = Math.sin(t);
    return (this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(t, e) {
    const n = Math.cos(e),
      r = Math.sin(e),
      s = 1 - n,
      a = t.x,
      o = t.y,
      l = t.z,
      c = s * a,
      u = s * o;
    return (
      this.set(
        c * a + n,
        c * o - r * l,
        c * l + r * o,
        0,
        c * o + r * l,
        u * o + n,
        u * l - r * a,
        0,
        c * l - r * o,
        u * l + r * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(t, e, n) {
    return (this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(t, e, n, r, s, a) {
    return (this.set(1, n, s, 0, t, 1, a, 0, e, r, 1, 0, 0, 0, 0, 1), this);
  }
  compose(t, e, n) {
    const r = this.elements,
      s = e._x,
      a = e._y,
      o = e._z,
      l = e._w,
      c = s + s,
      u = a + a,
      h = o + o,
      d = s * c,
      f = s * u,
      g = s * h,
      v = a * u,
      m = a * h,
      p = o * h,
      A = l * c,
      E = l * u,
      _ = l * h,
      b = n.x,
      T = n.y,
      w = n.z;
    return (
      (r[0] = (1 - (v + p)) * b),
      (r[1] = (f + _) * b),
      (r[2] = (g - E) * b),
      (r[3] = 0),
      (r[4] = (f - _) * T),
      (r[5] = (1 - (d + p)) * T),
      (r[6] = (m + A) * T),
      (r[7] = 0),
      (r[8] = (g + E) * w),
      (r[9] = (m - A) * w),
      (r[10] = (1 - (d + v)) * w),
      (r[11] = 0),
      (r[12] = t.x),
      (r[13] = t.y),
      (r[14] = t.z),
      (r[15] = 1),
      this
    );
  }
  decompose(t, e, n) {
    const r = this.elements;
    let s = Nn.set(r[0], r[1], r[2]).length();
    const a = Nn.set(r[4], r[5], r[6]).length(),
      o = Nn.set(r[8], r[9], r[10]).length();
    (this.determinant() < 0 && (s = -s),
      (t.x = r[12]),
      (t.y = r[13]),
      (t.z = r[14]),
      Ge.copy(this));
    const c = 1 / s,
      u = 1 / a,
      h = 1 / o;
    return (
      (Ge.elements[0] *= c),
      (Ge.elements[1] *= c),
      (Ge.elements[2] *= c),
      (Ge.elements[4] *= u),
      (Ge.elements[5] *= u),
      (Ge.elements[6] *= u),
      (Ge.elements[8] *= h),
      (Ge.elements[9] *= h),
      (Ge.elements[10] *= h),
      e.setFromRotationMatrix(Ge),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(t, e, n, r, s, a, o = 2e3, l = !1) {
    const c = this.elements,
      u = (2 * s) / (e - t),
      h = (2 * s) / (n - r),
      d = (e + t) / (e - t),
      f = (n + r) / (n - r);
    let g, v;
    if (l) ((g = s / (a - s)), (v = (a * s) / (a - s)));
    else if (o === 2e3)
      ((g = -(a + s) / (a - s)), (v = (-2 * a * s) / (a - s)));
    else if (o === 2001) ((g = -a / (a - s)), (v = (-a * s) / (a - s)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = u),
      (c[4] = 0),
      (c[8] = d),
      (c[12] = 0),
      (c[1] = 0),
      (c[5] = h),
      (c[9] = f),
      (c[13] = 0),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = g),
      (c[14] = v),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = -1),
      (c[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, n, r, s, a, o = 2e3, l = !1) {
    const c = this.elements,
      u = 2 / (e - t),
      h = 2 / (n - r),
      d = -(e + t) / (e - t),
      f = -(n + r) / (n - r);
    let g, v;
    if (l) ((g = 1 / (a - s)), (v = a / (a - s)));
    else if (o === 2e3) ((g = -2 / (a - s)), (v = -(a + s) / (a - s)));
    else if (o === 2001) ((g = -1 / (a - s)), (v = -s / (a - s)));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = u),
      (c[4] = 0),
      (c[8] = 0),
      (c[12] = d),
      (c[1] = 0),
      (c[5] = h),
      (c[9] = 0),
      (c[13] = f),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = g),
      (c[14] = v),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = 0),
      (c[15] = 1),
      this
    );
  }
  equals(t) {
    const e = this.elements,
      n = t.elements;
    for (let r = 0; r < 16; r++) if (e[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    const n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      (t[e + 9] = n[9]),
      (t[e + 10] = n[10]),
      (t[e + 11] = n[11]),
      (t[e + 12] = n[12]),
      (t[e + 13] = n[13]),
      (t[e + 14] = n[14]),
      (t[e + 15] = n[15]),
      t
    );
  }
}
const Nn = new L(),
  Ge = new Zt(),
  dl = new L(0, 0, 0),
  pl = new L(1, 1, 1),
  on = new L(),
  Hi = new L(),
  De = new L(),
  Xs = new Zt(),
  qs = new Pi();
class Ye {
  constructor(t = 0, e = 0, n = 0, r = Ye.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = r));
  }
  get x() {
    return this._x;
  }
  set x(t) {
    ((this._x = t), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(t) {
    ((this._y = t), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(t) {
    ((this._z = t), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(t) {
    ((this._order = t), this._onChangeCallback());
  }
  set(t, e, n, r = this._order) {
    return (
      (this._x = t),
      (this._y = e),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(t) {
    return (
      (this._x = t._x),
      (this._y = t._y),
      (this._z = t._z),
      (this._order = t._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(t, e = this._order, n = !0) {
    const r = t.elements,
      s = r[0],
      a = r[4],
      o = r[8],
      l = r[1],
      c = r[5],
      u = r[9],
      h = r[2],
      d = r[6],
      f = r[10];
    switch (e) {
      case "XYZ":
        ((this._y = Math.asin(Ot(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-u, f)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-Ot(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-h, s)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(Ot(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-h, f)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-Ot(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c))));
        break;
      case "YZX":
        ((this._z = Math.asin(Ot(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-h, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, f))));
        break;
      case "XZY":
        ((this._z = Math.asin(-Ot(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-u, f)), (this._y = 0)));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            e,
        );
    }
    return ((this._order = e), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(t, e, n) {
    return (
      Xs.makeRotationFromQuaternion(t),
      this.setFromRotationMatrix(Xs, e, n)
    );
  }
  setFromVector3(t, e = this._order) {
    return this.set(t.x, t.y, t.z, e);
  }
  reorder(t) {
    return (qs.setFromEuler(this), this.setFromQuaternion(qs, t));
  }
  equals(t) {
    return (
      t._x === this._x &&
      t._y === this._y &&
      t._z === this._z &&
      t._order === this._order
    );
  }
  fromArray(t) {
    return (
      (this._x = t[0]),
      (this._y = t[1]),
      (this._z = t[2]),
      t[3] !== void 0 && (this._order = t[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this._x),
      (t[e + 1] = this._y),
      (t[e + 2] = this._z),
      (t[e + 3] = this._order),
      t
    );
  }
  _onChange(t) {
    return ((this._onChangeCallback = t), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
Ye.DEFAULT_ORDER = "XYZ";
class $a {
  constructor() {
    this.mask = 1;
  }
  set(t) {
    this.mask = ((1 << t) | 0) >>> 0;
  }
  enable(t) {
    this.mask |= (1 << t) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(t) {
    this.mask ^= (1 << t) | 0;
  }
  disable(t) {
    this.mask &= ~((1 << t) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(t) {
    return (this.mask & t.mask) !== 0;
  }
  isEnabled(t) {
    return (this.mask & ((1 << t) | 0)) !== 0;
  }
}
let ml = 0;
const Ys = new L(),
  On = new Pi(),
  je = new Zt(),
  Vi = new L(),
  li = new L(),
  gl = new L(),
  _l = new Pi(),
  Zs = new L(1, 0, 0),
  Js = new L(0, 1, 0),
  $s = new L(0, 0, 1),
  Ks = { type: "added" },
  vl = { type: "removed" },
  Bn = { type: "childadded", child: null },
  Br = { type: "childremoved", child: null };
class ce extends ii {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: ml++ }),
      (this.uuid = qe()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = ce.DEFAULT_UP.clone()));
    const t = new L(),
      e = new Ye(),
      n = new Pi(),
      r = new L(1, 1, 1);
    function s() {
      n.setFromEuler(e, !1);
    }
    function a() {
      e.setFromQuaternion(n, void 0, !1);
    }
    (e._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: t },
        rotation: { configurable: !0, enumerable: !0, value: e },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new Zt() },
        normalMatrix: { value: new It() },
      }),
      (this.matrix = new Zt()),
      (this.matrixWorld = new Zt()),
      (this.matrixAutoUpdate = ce.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new $a()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(t) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(t),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(t) {
    return (this.quaternion.premultiply(t), this);
  }
  setRotationFromAxisAngle(t, e) {
    this.quaternion.setFromAxisAngle(t, e);
  }
  setRotationFromEuler(t) {
    this.quaternion.setFromEuler(t, !0);
  }
  setRotationFromMatrix(t) {
    this.quaternion.setFromRotationMatrix(t);
  }
  setRotationFromQuaternion(t) {
    this.quaternion.copy(t);
  }
  rotateOnAxis(t, e) {
    return (On.setFromAxisAngle(t, e), this.quaternion.multiply(On), this);
  }
  rotateOnWorldAxis(t, e) {
    return (On.setFromAxisAngle(t, e), this.quaternion.premultiply(On), this);
  }
  rotateX(t) {
    return this.rotateOnAxis(Zs, t);
  }
  rotateY(t) {
    return this.rotateOnAxis(Js, t);
  }
  rotateZ(t) {
    return this.rotateOnAxis($s, t);
  }
  translateOnAxis(t, e) {
    return (
      Ys.copy(t).applyQuaternion(this.quaternion),
      this.position.add(Ys.multiplyScalar(e)),
      this
    );
  }
  translateX(t) {
    return this.translateOnAxis(Zs, t);
  }
  translateY(t) {
    return this.translateOnAxis(Js, t);
  }
  translateZ(t) {
    return this.translateOnAxis($s, t);
  }
  localToWorld(t) {
    return (this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.applyMatrix4(je.copy(this.matrixWorld).invert())
    );
  }
  lookAt(t, e, n) {
    t.isVector3 ? Vi.copy(t) : Vi.set(t, e, n);
    const r = this.parent;
    (this.updateWorldMatrix(!0, !1),
      li.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? je.lookAt(li, Vi, this.up)
        : je.lookAt(Vi, li, this.up),
      this.quaternion.setFromRotationMatrix(je),
      r &&
        (je.extractRotation(r.matrixWorld),
        On.setFromRotationMatrix(je),
        this.quaternion.premultiply(On.invert())));
  }
  add(t) {
    if (arguments.length > 1) {
      for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
      return this;
    }
    return t === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          t,
        ),
        this)
      : (t && t.isObject3D
          ? (t.removeFromParent(),
            (t.parent = this),
            this.children.push(t),
            t.dispatchEvent(Ks),
            (Bn.child = t),
            this.dispatchEvent(Bn),
            (Bn.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              t,
            ),
        this);
  }
  remove(t) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const e = this.children.indexOf(t);
    return (
      e !== -1 &&
        ((t.parent = null),
        this.children.splice(e, 1),
        t.dispatchEvent(vl),
        (Br.child = t),
        this.dispatchEvent(Br),
        (Br.child = null)),
      this
    );
  }
  removeFromParent() {
    const t = this.parent;
    return (t !== null && t.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      je.copy(this.matrixWorld).invert(),
      t.parent !== null &&
        (t.parent.updateWorldMatrix(!0, !1), je.multiply(t.parent.matrixWorld)),
      t.applyMatrix4(je),
      t.removeFromParent(),
      (t.parent = this),
      this.children.push(t),
      t.updateWorldMatrix(!1, !0),
      t.dispatchEvent(Ks),
      (Bn.child = t),
      this.dispatchEvent(Bn),
      (Bn.child = null),
      this
    );
  }
  getObjectById(t) {
    return this.getObjectByProperty("id", t);
  }
  getObjectByName(t) {
    return this.getObjectByProperty("name", t);
  }
  getObjectByProperty(t, e) {
    if (this[t] === e) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(t, e);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(t, e, n = []) {
    this[t] === e && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(t, e, n);
    return n;
  }
  getWorldPosition(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      t.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(li, t, gl),
      t
    );
  }
  getWorldScale(t) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(li, _l, t),
      t
    );
  }
  getWorldDirection(t) {
    this.updateWorldMatrix(!0, !1);
    const e = this.matrixWorld.elements;
    return t.set(e[8], e[9], e[10]).normalize();
  }
  raycast() {}
  traverse(t) {
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++) e[n].traverse(t);
  }
  traverseVisible(t) {
    if (this.visible === !1) return;
    t(this);
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++) e[n].traverseVisible(t);
  }
  traverseAncestors(t) {
    const e = this.parent;
    e !== null && (t(e), e.traverseAncestors(t));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(t) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || t) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (t = !0)));
    const e = this.children;
    for (let n = 0, r = e.length; n < r; n++) e[n].updateMatrixWorld(t);
  }
  updateWorldMatrix(t, e) {
    const n = this.parent;
    if (
      (t === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      e === !0)
    ) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string",
      n = {};
    e &&
      ((t = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    ((r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.geometryInfo = this._geometryInfo.map((o) => ({
          ...o,
          boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
          boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
        }))),
        (r.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
        (r.availableInstanceIds = this._availableInstanceIds.slice()),
        (r.availableGeometryIds = this._availableGeometryIds.slice()),
        (r.nextIndexStart = this._nextIndexStart),
        (r.nextVertexStart = this._nextVertexStart),
        (r.geometryCount = this._geometryCount),
        (r.maxInstanceCount = this._maxInstanceCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.matricesTexture = this._matricesTexture.toJSON(t)),
        (r.indirectTexture = this._indirectTexture.toJSON(t)),
        this._colorsTexture !== null &&
          (r.colorsTexture = this._colorsTexture.toJSON(t)),
        this.boundingSphere !== null &&
          (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (r.boundingBox = this.boundingBox.toJSON())));
    function s(o, l) {
      return (o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(t)), l.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(t).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(t).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(t.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const h = l[c];
            s(t.shapes, h);
          }
        else s(t.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(t.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(t.materials, this.material[l]));
        r.material = o;
      } else r.material = s(t.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(t).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(t.animations, l));
      }
    }
    if (e) {
      const o = a(t.geometries),
        l = a(t.materials),
        c = a(t.textures),
        u = a(t.images),
        h = a(t.shapes),
        d = a(t.skeletons),
        f = a(t.animations),
        g = a(t.nodes);
      (o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        h.length > 0 && (n.shapes = h),
        d.length > 0 && (n.skeletons = d),
        f.length > 0 && (n.animations = f),
        g.length > 0 && (n.nodes = g));
    }
    return ((n.object = r), n);
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        (delete u.metadata, l.push(u));
      }
      return l;
    }
  }
  clone(t) {
    return new this.constructor().copy(this, t);
  }
  copy(t, e = !0) {
    if (
      ((this.name = t.name),
      this.up.copy(t.up),
      this.position.copy(t.position),
      (this.rotation.order = t.rotation.order),
      this.quaternion.copy(t.quaternion),
      this.scale.copy(t.scale),
      this.matrix.copy(t.matrix),
      this.matrixWorld.copy(t.matrixWorld),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
      (this.layers.mask = t.layers.mask),
      (this.visible = t.visible),
      (this.castShadow = t.castShadow),
      (this.receiveShadow = t.receiveShadow),
      (this.frustumCulled = t.frustumCulled),
      (this.renderOrder = t.renderOrder),
      (this.animations = t.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      e === !0)
    )
      for (let n = 0; n < t.children.length; n++) {
        const r = t.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
ce.DEFAULT_UP = new L(0, 1, 0);
ce.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const He = new L(),
  Qe = new L(),
  zr = new L(),
  tn = new L(),
  zn = new L(),
  Gn = new L(),
  js = new L(),
  Gr = new L(),
  Hr = new L(),
  Vr = new L(),
  kr = new Kt(),
  Wr = new Kt(),
  Xr = new Kt();
class Be {
  constructor(t = new L(), e = new L(), n = new L()) {
    ((this.a = t), (this.b = e), (this.c = n));
  }
  static getNormal(t, e, n, r) {
    (r.subVectors(n, e), He.subVectors(t, e), r.cross(He));
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(t, e, n, r, s) {
    (He.subVectors(r, e), Qe.subVectors(n, e), zr.subVectors(t, e));
    const a = He.dot(He),
      o = He.dot(Qe),
      l = He.dot(zr),
      c = Qe.dot(Qe),
      u = Qe.dot(zr),
      h = a * c - o * o;
    if (h === 0) return (s.set(0, 0, 0), null);
    const d = 1 / h,
      f = (c * l - o * u) * d,
      g = (a * u - o * l) * d;
    return s.set(1 - f - g, g, f);
  }
  static containsPoint(t, e, n, r) {
    return this.getBarycoord(t, e, n, r, tn) === null
      ? !1
      : tn.x >= 0 && tn.y >= 0 && tn.x + tn.y <= 1;
  }
  static getInterpolation(t, e, n, r, s, a, o, l) {
    return this.getBarycoord(t, e, n, r, tn) === null
      ? ((l.x = 0),
        (l.y = 0),
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, tn.x),
        l.addScaledVector(a, tn.y),
        l.addScaledVector(o, tn.z),
        l);
  }
  static getInterpolatedAttribute(t, e, n, r, s, a) {
    return (
      kr.setScalar(0),
      Wr.setScalar(0),
      Xr.setScalar(0),
      kr.fromBufferAttribute(t, e),
      Wr.fromBufferAttribute(t, n),
      Xr.fromBufferAttribute(t, r),
      a.setScalar(0),
      a.addScaledVector(kr, s.x),
      a.addScaledVector(Wr, s.y),
      a.addScaledVector(Xr, s.z),
      a
    );
  }
  static isFrontFacing(t, e, n, r) {
    return (He.subVectors(n, e), Qe.subVectors(t, e), He.cross(Qe).dot(r) < 0);
  }
  set(t, e, n) {
    return (this.a.copy(t), this.b.copy(e), this.c.copy(n), this);
  }
  setFromPointsAndIndices(t, e, n, r) {
    return (this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[r]), this);
  }
  setFromAttributeAndIndices(t, e, n, r) {
    return (
      this.a.fromBufferAttribute(t, e),
      this.b.fromBufferAttribute(t, n),
      this.c.fromBufferAttribute(t, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return (this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this);
  }
  getArea() {
    return (
      He.subVectors(this.c, this.b),
      Qe.subVectors(this.a, this.b),
      He.cross(Qe).length() * 0.5
    );
  }
  getMidpoint(t) {
    return t
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(t) {
    return Be.getNormal(this.a, this.b, this.c, t);
  }
  getPlane(t) {
    return t.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(t, e) {
    return Be.getBarycoord(t, this.a, this.b, this.c, e);
  }
  getInterpolation(t, e, n, r, s) {
    return Be.getInterpolation(t, this.a, this.b, this.c, e, n, r, s);
  }
  containsPoint(t) {
    return Be.containsPoint(t, this.a, this.b, this.c);
  }
  isFrontFacing(t) {
    return Be.isFrontFacing(this.a, this.b, this.c, t);
  }
  intersectsBox(t) {
    return t.intersectsTriangle(this);
  }
  closestPointToPoint(t, e) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let a, o;
    (zn.subVectors(r, n), Gn.subVectors(s, n), Gr.subVectors(t, n));
    const l = zn.dot(Gr),
      c = Gn.dot(Gr);
    if (l <= 0 && c <= 0) return e.copy(n);
    Hr.subVectors(t, r);
    const u = zn.dot(Hr),
      h = Gn.dot(Hr);
    if (u >= 0 && h <= u) return e.copy(r);
    const d = l * h - u * c;
    if (d <= 0 && l >= 0 && u <= 0)
      return ((a = l / (l - u)), e.copy(n).addScaledVector(zn, a));
    Vr.subVectors(t, s);
    const f = zn.dot(Vr),
      g = Gn.dot(Vr);
    if (g >= 0 && f <= g) return e.copy(s);
    const v = f * c - l * g;
    if (v <= 0 && c >= 0 && g <= 0)
      return ((o = c / (c - g)), e.copy(n).addScaledVector(Gn, o));
    const m = u * g - f * h;
    if (m <= 0 && h - u >= 0 && f - g >= 0)
      return (
        js.subVectors(s, r),
        (o = (h - u) / (h - u + (f - g))),
        e.copy(r).addScaledVector(js, o)
      );
    const p = 1 / (m + v + d);
    return (
      (a = v * p),
      (o = d * p),
      e.copy(n).addScaledVector(zn, a).addScaledVector(Gn, o)
    );
  }
  equals(t) {
    return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
  }
}
const Ka = {
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
    yellowgreen: 10145074,
  },
  ln = { h: 0, s: 0, l: 0 },
  ki = { h: 0, s: 0, l: 0 };
function qr(i, t, e) {
  return (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6
      ? i + (t - i) * 6 * e
      : e < 1 / 2
        ? t
        : e < 2 / 3
          ? i + (t - i) * 6 * (2 / 3 - e)
          : i
  );
}
class zt {
  constructor(t, e, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(t, e, n)
    );
  }
  set(t, e, n) {
    if (e === void 0 && n === void 0) {
      const r = t;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
          ? this.setHex(r)
          : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(t, e, n);
    return this;
  }
  setScalar(t) {
    return ((this.r = t), (this.g = t), (this.b = t), this);
  }
  setHex(t, e = Ee) {
    return (
      (t = Math.floor(t)),
      (this.r = ((t >> 16) & 255) / 255),
      (this.g = ((t >> 8) & 255) / 255),
      (this.b = (t & 255) / 255),
      kt.colorSpaceToWorking(this, e),
      this
    );
  }
  setRGB(t, e, n, r = kt.workingColorSpace) {
    return (
      (this.r = t),
      (this.g = e),
      (this.b = n),
      kt.colorSpaceToWorking(this, r),
      this
    );
  }
  setHSL(t, e, n, r = kt.workingColorSpace) {
    if (((t = ys(t, 1)), (e = Ot(e, 0, 1)), (n = Ot(n, 0, 1)), e === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + e) : n + e - n * e,
        a = 2 * n - s;
      ((this.r = qr(a, s, t + 1 / 3)),
        (this.g = qr(a, s, t)),
        (this.b = qr(a, s, t - 1 / 3)));
    }
    return (kt.colorSpaceToWorking(this, r), this);
  }
  setStyle(t, e = Ee) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + t + " will be ignored.",
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(t))) {
      let s;
      const a = r[1],
        o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                e,
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                e,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                e,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + t);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(t))) {
      const s = r[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          e,
        );
      if (a === 6) return this.setHex(parseInt(s, 16), e);
      console.warn("THREE.Color: Invalid hex color " + t);
    } else if (t && t.length > 0) return this.setColorName(t, e);
    return this;
  }
  setColorName(t, e = Ee) {
    const n = Ka[t.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, e)
        : console.warn("THREE.Color: Unknown color " + t),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(t) {
    return ((this.r = t.r), (this.g = t.g), (this.b = t.b), this);
  }
  copySRGBToLinear(t) {
    return ((this.r = nn(t.r)), (this.g = nn(t.g)), (this.b = nn(t.b)), this);
  }
  copyLinearToSRGB(t) {
    return ((this.r = jn(t.r)), (this.g = jn(t.g)), (this.b = jn(t.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(t = Ee) {
    return (
      kt.workingToColorSpace(ye.copy(this), t),
      Math.round(Ot(ye.r * 255, 0, 255)) * 65536 +
        Math.round(Ot(ye.g * 255, 0, 255)) * 256 +
        Math.round(Ot(ye.b * 255, 0, 255))
    );
  }
  getHexString(t = Ee) {
    return ("000000" + this.getHex(t).toString(16)).slice(-6);
  }
  getHSL(t, e = kt.workingColorSpace) {
    kt.workingToColorSpace(ye.copy(this), e);
    const n = ye.r,
      r = ye.g,
      s = ye.b,
      a = Math.max(n, r, s),
      o = Math.min(n, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) ((l = 0), (c = 0));
    else {
      const h = a - o;
      switch (((c = u <= 0.5 ? h / (a + o) : h / (2 - a - o)), a)) {
        case n:
          l = (r - s) / h + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / h + 2;
          break;
        case s:
          l = (n - r) / h + 4;
          break;
      }
      l /= 6;
    }
    return ((t.h = l), (t.s = c), (t.l = u), t);
  }
  getRGB(t, e = kt.workingColorSpace) {
    return (
      kt.workingToColorSpace(ye.copy(this), e),
      (t.r = ye.r),
      (t.g = ye.g),
      (t.b = ye.b),
      t
    );
  }
  getStyle(t = Ee) {
    kt.workingToColorSpace(ye.copy(this), t);
    const e = ye.r,
      n = ye.g,
      r = ye.b;
    return t !== Ee
      ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(t, e, n) {
    return (this.getHSL(ln), this.setHSL(ln.h + t, ln.s + e, ln.l + n));
  }
  add(t) {
    return ((this.r += t.r), (this.g += t.g), (this.b += t.b), this);
  }
  addColors(t, e) {
    return (
      (this.r = t.r + e.r),
      (this.g = t.g + e.g),
      (this.b = t.b + e.b),
      this
    );
  }
  addScalar(t) {
    return ((this.r += t), (this.g += t), (this.b += t), this);
  }
  sub(t) {
    return (
      (this.r = Math.max(0, this.r - t.r)),
      (this.g = Math.max(0, this.g - t.g)),
      (this.b = Math.max(0, this.b - t.b)),
      this
    );
  }
  multiply(t) {
    return ((this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this);
  }
  multiplyScalar(t) {
    return ((this.r *= t), (this.g *= t), (this.b *= t), this);
  }
  lerp(t, e) {
    return (
      (this.r += (t.r - this.r) * e),
      (this.g += (t.g - this.g) * e),
      (this.b += (t.b - this.b) * e),
      this
    );
  }
  lerpColors(t, e, n) {
    return (
      (this.r = t.r + (e.r - t.r) * n),
      (this.g = t.g + (e.g - t.g) * n),
      (this.b = t.b + (e.b - t.b) * n),
      this
    );
  }
  lerpHSL(t, e) {
    (this.getHSL(ln), t.getHSL(ki));
    const n = Mi(ln.h, ki.h, e),
      r = Mi(ln.s, ki.s, e),
      s = Mi(ln.l, ki.l, e);
    return (this.setHSL(n, r, s), this);
  }
  setFromVector3(t) {
    return ((this.r = t.x), (this.g = t.y), (this.b = t.z), this);
  }
  applyMatrix3(t) {
    const e = this.r,
      n = this.g,
      r = this.b,
      s = t.elements;
    return (
      (this.r = s[0] * e + s[3] * n + s[6] * r),
      (this.g = s[1] * e + s[4] * n + s[7] * r),
      (this.b = s[2] * e + s[5] * n + s[8] * r),
      this
    );
  }
  equals(t) {
    return t.r === this.r && t.g === this.g && t.b === this.b;
  }
  fromArray(t, e = 0) {
    return ((this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t);
  }
  fromBufferAttribute(t, e) {
    return (
      (this.r = t.getX(e)),
      (this.g = t.getY(e)),
      (this.b = t.getZ(e)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const ye = new zt();
zt.NAMES = Ka;
let xl = 0;
class fn extends ii {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: xl++ }),
      (this.uuid = qe()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = 1),
      (this.side = 0),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = 204),
      (this.blendDst = 205),
      (this.blendEquation = 100),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new zt(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = 3),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = 519),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = 7680),
      (this.stencilZFail = 7680),
      (this.stencilZPass = 7680),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(t) {
    (this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t));
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(t) {
    if (t !== void 0)
      for (const e in t) {
        const n = t[e];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${e}' has value of undefined.`,
          );
          continue;
        }
        const r = this[e];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${e}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
            ? r.copy(n)
            : (this[e] = n);
      }
  }
  toJSON(t) {
    const e = t === void 0 || typeof t == "string";
    e && (t = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.sheenColorMap &&
        this.sheenColorMap.isTexture &&
        (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid),
      this.sheenRoughnessMap &&
        this.sheenRoughnessMap.isTexture &&
        (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(t).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(t).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(t).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(t).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(t).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(t).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(t).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(t).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(t).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== 1 && (n.blending = this.blending),
      this.side !== 0 && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== 204 && (n.blendSrc = this.blendSrc),
      this.blendDst !== 205 && (n.blendDst = this.blendDst),
      this.blendEquation !== 100 && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== 3 && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData));
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        (delete l.metadata, a.push(l));
      }
      return a;
    }
    if (e) {
      const s = r(t.textures),
        a = r(t.images);
      (s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a));
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    ((this.name = t.name),
      (this.blending = t.blending),
      (this.side = t.side),
      (this.vertexColors = t.vertexColors),
      (this.opacity = t.opacity),
      (this.transparent = t.transparent),
      (this.blendSrc = t.blendSrc),
      (this.blendDst = t.blendDst),
      (this.blendEquation = t.blendEquation),
      (this.blendSrcAlpha = t.blendSrcAlpha),
      (this.blendDstAlpha = t.blendDstAlpha),
      (this.blendEquationAlpha = t.blendEquationAlpha),
      this.blendColor.copy(t.blendColor),
      (this.blendAlpha = t.blendAlpha),
      (this.depthFunc = t.depthFunc),
      (this.depthTest = t.depthTest),
      (this.depthWrite = t.depthWrite),
      (this.stencilWriteMask = t.stencilWriteMask),
      (this.stencilFunc = t.stencilFunc),
      (this.stencilRef = t.stencilRef),
      (this.stencilFuncMask = t.stencilFuncMask),
      (this.stencilFail = t.stencilFail),
      (this.stencilZFail = t.stencilZFail),
      (this.stencilZPass = t.stencilZPass),
      (this.stencilWrite = t.stencilWrite));
    const e = t.clippingPlanes;
    let n = null;
    if (e !== null) {
      const r = e.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = e[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = t.clipIntersection),
      (this.clipShadows = t.clipShadows),
      (this.shadowSide = t.shadowSide),
      (this.colorWrite = t.colorWrite),
      (this.precision = t.precision),
      (this.polygonOffset = t.polygonOffset),
      (this.polygonOffsetFactor = t.polygonOffsetFactor),
      (this.polygonOffsetUnits = t.polygonOffsetUnits),
      (this.dithering = t.dithering),
      (this.alphaTest = t.alphaTest),
      (this.alphaHash = t.alphaHash),
      (this.alphaToCoverage = t.alphaToCoverage),
      (this.premultipliedAlpha = t.premultipliedAlpha),
      (this.forceSinglePass = t.forceSinglePass),
      (this.visible = t.visible),
      (this.toneMapped = t.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(t.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
}
class vr extends fn {
  constructor(t) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new zt(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ye()),
      (this.combine = 0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      (this.specularMap = t.specularMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.combine = t.combine),
      (this.reflectivity = t.reflectivity),
      (this.refractionRatio = t.refractionRatio),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const he = new L(),
  Wi = new ot();
let Ml = 0;
class Re {
  constructor(t, e, n = !1) {
    if (Array.isArray(t))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: Ml++ }),
      (this.name = ""),
      (this.array = t),
      (this.itemSize = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.normalized = n),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.gpuType = 1015),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return ((this.usage = t), this);
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.name = t.name),
      (this.array = new t.array.constructor(t.array)),
      (this.itemSize = t.itemSize),
      (this.count = t.count),
      (this.normalized = t.normalized),
      (this.usage = t.usage),
      (this.gpuType = t.gpuType),
      this
    );
  }
  copyAt(t, e, n) {
    ((t *= this.itemSize), (n *= e.itemSize));
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[t + r] = e.array[n + r];
    return this;
  }
  copyArray(t) {
    return (this.array.set(t), this);
  }
  applyMatrix3(t) {
    if (this.itemSize === 2)
      for (let e = 0, n = this.count; e < n; e++)
        (Wi.fromBufferAttribute(this, e),
          Wi.applyMatrix3(t),
          this.setXY(e, Wi.x, Wi.y));
    else if (this.itemSize === 3)
      for (let e = 0, n = this.count; e < n; e++)
        (he.fromBufferAttribute(this, e),
          he.applyMatrix3(t),
          this.setXYZ(e, he.x, he.y, he.z));
    return this;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.count; e < n; e++)
      (he.fromBufferAttribute(this, e),
        he.applyMatrix4(t),
        this.setXYZ(e, he.x, he.y, he.z));
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      (he.fromBufferAttribute(this, e),
        he.applyNormalMatrix(t),
        this.setXYZ(e, he.x, he.y, he.z));
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      (he.fromBufferAttribute(this, e),
        he.transformDirection(t),
        this.setXYZ(e, he.x, he.y, he.z));
    return this;
  }
  set(t, e = 0) {
    return (this.array.set(t, e), this);
  }
  getComponent(t, e) {
    let n = this.array[t * this.itemSize + e];
    return (this.normalized && (n = Ve(n, this.array)), n);
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = Yt(n, this.array)),
      (this.array[t * this.itemSize + e] = n),
      this
    );
  }
  getX(t) {
    let e = this.array[t * this.itemSize];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  setX(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.array[t * this.itemSize] = e),
      this
    );
  }
  getY(t) {
    let e = this.array[t * this.itemSize + 1];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  setY(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.array[t * this.itemSize + 1] = e),
      this
    );
  }
  getZ(t) {
    let e = this.array[t * this.itemSize + 2];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.array[t * this.itemSize + 2] = e),
      this
    );
  }
  getW(t) {
    let e = this.array[t * this.itemSize + 3];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  setW(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.array[t * this.itemSize + 3] = e),
      this
    );
  }
  setXY(t, e, n) {
    return (
      (t *= this.itemSize),
      this.normalized && ((e = Yt(e, this.array)), (n = Yt(n, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, r) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Yt(e, this.array)),
        (n = Yt(n, this.array)),
        (r = Yt(r, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = r),
      this
    );
  }
  setXYZW(t, e, n, r, s) {
    return (
      (t *= this.itemSize),
      this.normalized &&
        ((e = Yt(e, this.array)),
        (n = Yt(n, this.array)),
        (r = Yt(r, this.array)),
        (s = Yt(s, this.array))),
      (this.array[t + 0] = e),
      (this.array[t + 1] = n),
      (this.array[t + 2] = r),
      (this.array[t + 3] = s),
      this
    );
  }
  onUpload(t) {
    return ((this.onUploadCallback = t), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const t = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (t.name = this.name),
      this.usage !== 35044 && (t.usage = this.usage),
      t
    );
  }
}
class ja extends Re {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
}
class Qa extends Re {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
}
class Wt extends Re {
  constructor(t, e, n) {
    super(new Float32Array(t), e, n);
  }
}
let Sl = 0;
const Ne = new Zt(),
  Yr = new ce(),
  Hn = new L(),
  Le = new Rn(),
  ci = new Rn(),
  _e = new L();
class de extends ii {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Sl++ }),
      (this.uuid = qe()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(t) {
    return (
      Array.isArray(t)
        ? (this.index = new (Za(t) ? Qa : ja)(t, 1))
        : (this.index = t),
      this
    );
  }
  setIndirect(t) {
    return ((this.indirect = t), this);
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  setAttribute(t, e) {
    return ((this.attributes[t] = e), this);
  }
  deleteAttribute(t) {
    return (delete this.attributes[t], this);
  }
  hasAttribute(t) {
    return this.attributes[t] !== void 0;
  }
  addGroup(t, e, n = 0) {
    this.groups.push({ start: t, count: e, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(t, e) {
    ((this.drawRange.start = t), (this.drawRange.count = e));
  }
  applyMatrix4(t) {
    const e = this.attributes.position;
    e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new It().getNormalMatrix(t);
      (n.applyNormalMatrix(s), (n.needsUpdate = !0));
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(t), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(t) {
    return (Ne.makeRotationFromQuaternion(t), this.applyMatrix4(Ne), this);
  }
  rotateX(t) {
    return (Ne.makeRotationX(t), this.applyMatrix4(Ne), this);
  }
  rotateY(t) {
    return (Ne.makeRotationY(t), this.applyMatrix4(Ne), this);
  }
  rotateZ(t) {
    return (Ne.makeRotationZ(t), this.applyMatrix4(Ne), this);
  }
  translate(t, e, n) {
    return (Ne.makeTranslation(t, e, n), this.applyMatrix4(Ne), this);
  }
  scale(t, e, n) {
    return (Ne.makeScale(t, e, n), this.applyMatrix4(Ne), this);
  }
  lookAt(t) {
    return (
      Yr.lookAt(t),
      Yr.updateMatrix(),
      this.applyMatrix4(Yr.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Hn).negate(),
      this.translate(Hn.x, Hn.y, Hn.z),
      this
    );
  }
  setFromPoints(t) {
    const e = this.getAttribute("position");
    if (e === void 0) {
      const n = [];
      for (let r = 0, s = t.length; r < s; r++) {
        const a = t[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new Wt(n, 3));
    } else {
      const n = Math.min(t.length, e.count);
      for (let r = 0; r < n; r++) {
        const s = t[r];
        e.setXYZ(r, s.x, s.y, s.z || 0);
      }
      (t.length > e.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (e.needsUpdate = !0));
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Rn());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (t !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(t), e))
        for (let n = 0, r = e.length; n < r; n++) {
          const s = e[n];
          (Le.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (_e.addVectors(this.boundingBox.min, Le.min),
                this.boundingBox.expandByPoint(_e),
                _e.addVectors(this.boundingBox.max, Le.max),
                this.boundingBox.expandByPoint(_e))
              : (this.boundingBox.expandByPoint(Le.min),
                this.boundingBox.expandByPoint(Le.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Cn());
    const t = this.attributes.position,
      e = this.morphAttributes.position;
    if (t && t.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new L(), 1 / 0));
      return;
    }
    if (t) {
      const n = this.boundingSphere.center;
      if ((Le.setFromBufferAttribute(t), e))
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s];
          (ci.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (_e.addVectors(Le.min, ci.min),
                Le.expandByPoint(_e),
                _e.addVectors(Le.max, ci.max),
                Le.expandByPoint(_e))
              : (Le.expandByPoint(ci.min), Le.expandByPoint(ci.max)));
        }
      Le.getCenter(n);
      let r = 0;
      for (let s = 0, a = t.count; s < a; s++)
        (_e.fromBufferAttribute(t, s),
          (r = Math.max(r, n.distanceToSquared(_e))));
      if (e)
        for (let s = 0, a = e.length; s < a; s++) {
          const o = e[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = o.count; c < u; c++)
            (_e.fromBufferAttribute(o, c),
              l && (Hn.fromBufferAttribute(t, c), _e.add(Hn)),
              (r = Math.max(r, n.distanceToSquared(_e))));
        }
      ((this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const t = this.index,
      e = this.attributes;
    if (
      t === null ||
      e.position === void 0 ||
      e.normal === void 0 ||
      e.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = e.position,
      r = e.normal,
      s = e.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Re(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      l = [];
    for (let C = 0; C < n.count; C++) ((o[C] = new L()), (l[C] = new L()));
    const c = new L(),
      u = new L(),
      h = new L(),
      d = new ot(),
      f = new ot(),
      g = new ot(),
      v = new L(),
      m = new L();
    function p(C, M, S) {
      (c.fromBufferAttribute(n, C),
        u.fromBufferAttribute(n, M),
        h.fromBufferAttribute(n, S),
        d.fromBufferAttribute(s, C),
        f.fromBufferAttribute(s, M),
        g.fromBufferAttribute(s, S),
        u.sub(c),
        h.sub(c),
        f.sub(d),
        g.sub(d));
      const D = 1 / (f.x * g.y - g.x * f.y);
      isFinite(D) &&
        (v
          .copy(u)
          .multiplyScalar(g.y)
          .addScaledVector(h, -f.y)
          .multiplyScalar(D),
        m
          .copy(h)
          .multiplyScalar(f.x)
          .addScaledVector(u, -g.x)
          .multiplyScalar(D),
        o[C].add(v),
        o[M].add(v),
        o[S].add(v),
        l[C].add(m),
        l[M].add(m),
        l[S].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: t.count }]);
    for (let C = 0, M = A.length; C < M; ++C) {
      const S = A[C],
        D = S.start,
        I = S.count;
      for (let B = D, H = D + I; B < H; B += 3)
        p(t.getX(B + 0), t.getX(B + 1), t.getX(B + 2));
    }
    const E = new L(),
      _ = new L(),
      b = new L(),
      T = new L();
    function w(C) {
      (b.fromBufferAttribute(r, C), T.copy(b));
      const M = o[C];
      (E.copy(M),
        E.sub(b.multiplyScalar(b.dot(M))).normalize(),
        _.crossVectors(T, M));
      const D = _.dot(l[C]) < 0 ? -1 : 1;
      a.setXYZW(C, E.x, E.y, E.z, D);
    }
    for (let C = 0, M = A.length; C < M; ++C) {
      const S = A[C],
        D = S.start,
        I = S.count;
      for (let B = D, H = D + I; B < H; B += 3)
        (w(t.getX(B + 0)), w(t.getX(B + 1)), w(t.getX(B + 2)));
    }
  }
  computeVertexNormals() {
    const t = this.index,
      e = this.getAttribute("position");
    if (e !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        ((n = new Re(new Float32Array(e.count * 3), 3)),
          this.setAttribute("normal", n));
      else for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0);
      const r = new L(),
        s = new L(),
        a = new L(),
        o = new L(),
        l = new L(),
        c = new L(),
        u = new L(),
        h = new L();
      if (t)
        for (let d = 0, f = t.count; d < f; d += 3) {
          const g = t.getX(d + 0),
            v = t.getX(d + 1),
            m = t.getX(d + 2);
          (r.fromBufferAttribute(e, g),
            s.fromBufferAttribute(e, v),
            a.fromBufferAttribute(e, m),
            u.subVectors(a, s),
            h.subVectors(r, s),
            u.cross(h),
            o.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, v),
            c.fromBufferAttribute(n, m),
            o.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(v, l.x, l.y, l.z),
            n.setXYZ(m, c.x, c.y, c.z));
        }
      else
        for (let d = 0, f = e.count; d < f; d += 3)
          (r.fromBufferAttribute(e, d + 0),
            s.fromBufferAttribute(e, d + 1),
            a.fromBufferAttribute(e, d + 2),
            u.subVectors(a, s),
            h.subVectors(r, s),
            u.cross(h),
            n.setXYZ(d + 0, u.x, u.y, u.z),
            n.setXYZ(d + 1, u.x, u.y, u.z),
            n.setXYZ(d + 2, u.x, u.y, u.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const t = this.attributes.normal;
    for (let e = 0, n = t.count; e < n; e++)
      (_e.fromBufferAttribute(t, e),
        _e.normalize(),
        t.setXYZ(e, _e.x, _e.y, _e.z));
  }
  toNonIndexed() {
    function t(o, l) {
      const c = o.array,
        u = o.itemSize,
        h = o.normalized,
        d = new c.constructor(l.length * u);
      let f = 0,
        g = 0;
      for (let v = 0, m = l.length; v < m; v++) {
        o.isInterleavedBufferAttribute
          ? (f = l[v] * o.data.stride + o.offset)
          : (f = l[v] * u);
        for (let p = 0; p < u; p++) d[g++] = c[f++];
      }
      return new Re(d, u, h);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const e = new de(),
      n = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const l = r[o],
        c = t(l, n);
      e.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let u = 0, h = c.length; u < h; u++) {
        const d = c[u],
          f = t(d, n);
        l.push(f);
      }
      e.morphAttributes[o] = l;
    }
    e.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      e.addGroup(c.start, c.count, c.materialIndex);
    }
    return e;
  }
  toJSON() {
    const t = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((t.uuid = this.uuid),
      (t.type = this.type),
      this.name !== "" && (t.name = this.name),
      Object.keys(this.userData).length > 0 && (t.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (t[c] = l[c]);
      return t;
    }
    t.data = { attributes: {} };
    const e = this.index;
    e !== null &&
      (t.data.index = {
        type: e.array.constructor.name,
        array: Array.prototype.slice.call(e.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      t.data.attributes[l] = c.toJSON(t.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let h = 0, d = c.length; h < d; h++) {
        const f = c[h];
        u.push(f.toJSON(t.data));
      }
      u.length > 0 && ((r[l] = u), (s = !0));
    }
    s &&
      ((t.data.morphAttributes = r),
      (t.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (o !== null && (t.data.boundingSphere = o.toJSON()), t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const e = {};
    this.name = t.name;
    const n = t.index;
    n !== null && this.setIndex(n.clone());
    const r = t.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(e));
    }
    const s = t.morphAttributes;
    for (const c in s) {
      const u = [],
        h = s[c];
      for (let d = 0, f = h.length; d < f; d++) u.push(h[d].clone(e));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = t.morphTargetsRelative;
    const a = t.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const h = a[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const o = t.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = t.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = t.drawRange.start),
      (this.drawRange.count = t.drawRange.count),
      (this.userData = t.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Qs = new Zt(),
  _n = new Ts(),
  Xi = new Cn(),
  ta = new L(),
  qi = new L(),
  Yi = new L(),
  Zi = new L(),
  Zr = new L(),
  Ji = new L(),
  ea = new L(),
  $i = new L();
class ve extends ce {
  constructor(t = new de(), e = new vr()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = t),
      (this.material = e),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
      t.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          t.morphTargetDictionary,
        )),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s));
        }
      }
    }
  }
  getVertexPosition(t, e) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    e.fromBufferAttribute(r, t);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Ji.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l],
          h = s[l];
        u !== 0 &&
          (Zr.fromBufferAttribute(h, t),
          a ? Ji.addScaledVector(Zr, u) : Ji.addScaledVector(Zr.sub(e), u));
      }
      e.add(Ji);
    }
    return e;
  }
  raycast(t, e) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Xi.copy(n.boundingSphere),
      Xi.applyMatrix4(s),
      _n.copy(t.ray).recast(t.near),
      !(
        Xi.containsPoint(_n.origin) === !1 &&
        (_n.intersectSphere(Xi, ta) === null ||
          _n.origin.distanceToSquared(ta) > (t.far - t.near) ** 2)
      ) &&
        (Qs.copy(s).invert(),
        _n.copy(t.ray).applyMatrix4(Qs),
        !(n.boundingBox !== null && _n.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(t, e, _n)));
  }
  _computeIntersections(t, e, n) {
    let r;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      u = s.attributes.uv1,
      h = s.attributes.normal,
      d = s.groups,
      f = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, v = d.length; g < v; g++) {
          const m = d[g],
            p = a[m.materialIndex],
            A = Math.max(m.start, f.start),
            E = Math.min(
              o.count,
              Math.min(m.start + m.count, f.start + f.count),
            );
          for (let _ = A, b = E; _ < b; _ += 3) {
            const T = o.getX(_),
              w = o.getX(_ + 1),
              C = o.getX(_ + 2);
            ((r = Ki(this, p, t, n, c, u, h, T, w, C)),
              r &&
                ((r.faceIndex = Math.floor(_ / 3)),
                (r.face.materialIndex = m.materialIndex),
                e.push(r)));
          }
        }
      else {
        const g = Math.max(0, f.start),
          v = Math.min(o.count, f.start + f.count);
        for (let m = g, p = v; m < p; m += 3) {
          const A = o.getX(m),
            E = o.getX(m + 1),
            _ = o.getX(m + 2);
          ((r = Ki(this, a, t, n, c, u, h, A, E, _)),
            r && ((r.faceIndex = Math.floor(m / 3)), e.push(r)));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, v = d.length; g < v; g++) {
          const m = d[g],
            p = a[m.materialIndex],
            A = Math.max(m.start, f.start),
            E = Math.min(
              l.count,
              Math.min(m.start + m.count, f.start + f.count),
            );
          for (let _ = A, b = E; _ < b; _ += 3) {
            const T = _,
              w = _ + 1,
              C = _ + 2;
            ((r = Ki(this, p, t, n, c, u, h, T, w, C)),
              r &&
                ((r.faceIndex = Math.floor(_ / 3)),
                (r.face.materialIndex = m.materialIndex),
                e.push(r)));
          }
        }
      else {
        const g = Math.max(0, f.start),
          v = Math.min(l.count, f.start + f.count);
        for (let m = g, p = v; m < p; m += 3) {
          const A = m,
            E = m + 1,
            _ = m + 2;
          ((r = Ki(this, a, t, n, c, u, h, A, E, _)),
            r && ((r.faceIndex = Math.floor(m / 3)), e.push(r)));
        }
      }
  }
}
function yl(i, t, e, n, r, s, a, o) {
  let l;
  if (
    (t.side === 1
      ? (l = n.intersectTriangle(a, s, r, !0, o))
      : (l = n.intersectTriangle(r, s, a, t.side === 0, o)),
    l === null)
  )
    return null;
  ($i.copy(o), $i.applyMatrix4(i.matrixWorld));
  const c = e.ray.origin.distanceTo($i);
  return c < e.near || c > e.far
    ? null
    : { distance: c, point: $i.clone(), object: i };
}
function Ki(i, t, e, n, r, s, a, o, l, c) {
  (i.getVertexPosition(o, qi),
    i.getVertexPosition(l, Yi),
    i.getVertexPosition(c, Zi));
  const u = yl(i, t, e, n, qi, Yi, Zi, ea);
  if (u) {
    const h = new L();
    (Be.getBarycoord(ea, qi, Yi, Zi, h),
      r && (u.uv = Be.getInterpolatedAttribute(r, o, l, c, h, new ot())),
      s && (u.uv1 = Be.getInterpolatedAttribute(s, o, l, c, h, new ot())),
      a &&
        ((u.normal = Be.getInterpolatedAttribute(a, o, l, c, h, new L())),
        u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1)));
    const d = { a: o, b: l, c, normal: new L(), materialIndex: 0 };
    (Be.getNormal(qi, Yi, Zi, d.normal), (u.face = d), (u.barycoord = h));
  }
  return u;
}
class Pn extends de {
  constructor(t = 1, e = 1, n = 1, r = 1, s = 1, a = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      }));
    const o = this;
    ((r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a)));
    const l = [],
      c = [],
      u = [],
      h = [];
    let d = 0,
      f = 0;
    (g("z", "y", "x", -1, -1, n, e, t, a, s, 0),
      g("z", "y", "x", 1, -1, n, e, -t, a, s, 1),
      g("x", "z", "y", 1, 1, t, n, e, r, a, 2),
      g("x", "z", "y", 1, -1, t, n, -e, r, a, 3),
      g("x", "y", "z", 1, -1, t, e, n, r, s, 4),
      g("x", "y", "z", -1, -1, t, e, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new Wt(c, 3)),
      this.setAttribute("normal", new Wt(u, 3)),
      this.setAttribute("uv", new Wt(h, 2)));
    function g(v, m, p, A, E, _, b, T, w, C, M) {
      const S = _ / w,
        D = b / C,
        I = _ / 2,
        B = b / 2,
        H = T / 2,
        W = w + 1,
        V = C + 1;
      let K = 0,
        k = 0;
      const tt = new L();
      for (let ut = 0; ut < V; ut++) {
        const Et = ut * D - B;
        for (let Bt = 0; Bt < W; Bt++) {
          const Qt = Bt * S - I;
          ((tt[v] = Qt * A),
            (tt[m] = Et * E),
            (tt[p] = H),
            c.push(tt.x, tt.y, tt.z),
            (tt[v] = 0),
            (tt[m] = 0),
            (tt[p] = T > 0 ? 1 : -1),
            u.push(tt.x, tt.y, tt.z),
            h.push(Bt / w),
            h.push(1 - ut / C),
            (K += 1));
        }
      }
      for (let ut = 0; ut < C; ut++)
        for (let Et = 0; Et < w; Et++) {
          const Bt = d + Et + W * ut,
            Qt = d + Et + W * (ut + 1),
            ne = d + (Et + 1) + W * (ut + 1),
            Xt = d + (Et + 1) + W * ut;
          (l.push(Bt, Qt, Xt), l.push(Qt, ne, Xt), (k += 6));
        }
      (o.addGroup(f, k, M), (f += k), (d += K));
    }
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new Pn(
      t.width,
      t.height,
      t.depth,
      t.widthSegments,
      t.heightSegments,
      t.depthSegments,
    );
  }
}
function ei(i) {
  const t = {};
  for (const e in i) {
    t[e] = {};
    for (const n in i[e]) {
      const r = i[e][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (t[e][n] = null))
          : (t[e][n] = r.clone())
        : Array.isArray(r)
          ? (t[e][n] = r.slice())
          : (t[e][n] = r);
    }
  }
  return t;
}
function be(i) {
  const t = {};
  for (let e = 0; e < i.length; e++) {
    const n = ei(i[e]);
    for (const r in n) t[r] = n[r];
  }
  return t;
}
function El(i) {
  const t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e].clone());
  return t;
}
function to(i) {
  const t = i.getRenderTarget();
  return t === null
    ? i.outputColorSpace
    : t.isXRRenderTarget === !0
      ? t.texture.colorSpace
      : kt.workingColorSpace;
}
const Tl = { clone: ei, merge: be };
var Al = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  bl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class hn extends fn {
  constructor(t) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Al),
      (this.fragmentShader = bl),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      t !== void 0 && this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.fragmentShader = t.fragmentShader),
      (this.vertexShader = t.vertexShader),
      (this.uniforms = ei(t.uniforms)),
      (this.uniformsGroups = El(t.uniformsGroups)),
      (this.defines = Object.assign({}, t.defines)),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.fog = t.fog),
      (this.lights = t.lights),
      (this.clipping = t.clipping),
      (this.extensions = Object.assign({}, t.extensions)),
      (this.glslVersion = t.glslVersion),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    ((e.glslVersion = this.glslVersion), (e.uniforms = {}));
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (e.uniforms[r] = { type: "t", value: a.toJSON(t).uuid })
        : a && a.isColor
          ? (e.uniforms[r] = { type: "c", value: a.getHex() })
          : a && a.isVector2
            ? (e.uniforms[r] = { type: "v2", value: a.toArray() })
            : a && a.isVector3
              ? (e.uniforms[r] = { type: "v3", value: a.toArray() })
              : a && a.isVector4
                ? (e.uniforms[r] = { type: "v4", value: a.toArray() })
                : a && a.isMatrix3
                  ? (e.uniforms[r] = { type: "m3", value: a.toArray() })
                  : a && a.isMatrix4
                    ? (e.uniforms[r] = { type: "m4", value: a.toArray() })
                    : (e.uniforms[r] = { value: a });
    }
    (Object.keys(this.defines).length > 0 && (e.defines = this.defines),
      (e.vertexShader = this.vertexShader),
      (e.fragmentShader = this.fragmentShader),
      (e.lights = this.lights),
      (e.clipping = this.clipping));
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return (Object.keys(n).length > 0 && (e.extensions = n), e);
  }
}
class eo extends ce {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Zt()),
      (this.projectionMatrix = new Zt()),
      (this.projectionMatrixInverse = new Zt()),
      (this.coordinateSystem = 2e3),
      (this._reversedDepth = !1));
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.matrixWorldInverse.copy(t.matrixWorldInverse),
      this.projectionMatrix.copy(t.projectionMatrix),
      this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
      (this.coordinateSystem = t.coordinateSystem),
      this
    );
  }
  getWorldDirection(t) {
    return super.getWorldDirection(t).negate();
  }
  updateMatrixWorld(t) {
    (super.updateMatrixWorld(t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(t, e) {
    (super.updateWorldMatrix(t, e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const cn = new L(),
  na = new ot(),
  ia = new ot();
class Ue extends eo {
  constructor(t = 50, e = 1, n = 0.1, r = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = t),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = e),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.fov = t.fov),
      (this.zoom = t.zoom),
      (this.near = t.near),
      (this.far = t.far),
      (this.focus = t.focus),
      (this.aspect = t.aspect),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      (this.filmGauge = t.filmGauge),
      (this.filmOffset = t.filmOffset),
      this
    );
  }
  setFocalLength(t) {
    const e = (0.5 * this.getFilmHeight()) / t;
    ((this.fov = ti * 2 * Math.atan(e)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const t = Math.tan(xi * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / t;
  }
  getEffectiveFOV() {
    return ti * 2 * Math.atan(Math.tan(xi * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(t, e, n) {
    (cn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      e.set(cn.x, cn.y).multiplyScalar(-t / cn.z),
      cn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(cn.x, cn.y).multiplyScalar(-t / cn.z));
  }
  getViewSize(t, e) {
    return (this.getViewBounds(t, na, ia), e.subVectors(ia, na));
  }
  setViewOffset(t, e, n, r, s, a) {
    ((this.aspect = t / e),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const t = this.near;
    let e = (t * Math.tan(xi * 0.5 * this.fov)) / this.zoom,
      n = 2 * e,
      r = this.aspect * n,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      ((s += (a.offsetX * r) / l),
        (e -= (a.offsetY * n) / c),
        (r *= a.width / l),
        (n *= a.height / c));
    }
    const o = this.filmOffset;
    (o !== 0 && (s += (t * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        e,
        e - n,
        t,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.fov = this.fov),
      (e.object.zoom = this.zoom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      (e.object.focus = this.focus),
      (e.object.aspect = this.aspect),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      (e.object.filmGauge = this.filmGauge),
      (e.object.filmOffset = this.filmOffset),
      e
    );
  }
}
const Vn = -90,
  kn = 1;
class wl extends ce {
  constructor(t, e, n) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const r = new Ue(Vn, kn, t, e);
    ((r.layers = this.layers), this.add(r));
    const s = new Ue(Vn, kn, t, e);
    ((s.layers = this.layers), this.add(s));
    const a = new Ue(Vn, kn, t, e);
    ((a.layers = this.layers), this.add(a));
    const o = new Ue(Vn, kn, t, e);
    ((o.layers = this.layers), this.add(o));
    const l = new Ue(Vn, kn, t, e);
    ((l.layers = this.layers), this.add(l));
    const c = new Ue(Vn, kn, t, e);
    ((c.layers = this.layers), this.add(c));
  }
  updateCoordinateSystem() {
    const t = this.coordinateSystem,
      e = this.children.concat(),
      [n, r, s, a, o, l] = e;
    for (const c of e) this.remove(c);
    if (t === 2e3)
      (n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1));
    else if (t === 2001)
      (n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          t,
      );
    for (const c of e) (this.add(c), c.updateMatrixWorld());
  }
  update(t, e) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== t.coordinateSystem &&
      ((this.coordinateSystem = t.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children,
      h = t.getRenderTarget(),
      d = t.getActiveCubeFace(),
      f = t.getActiveMipmapLevel(),
      g = t.xr.enabled;
    t.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    ((n.texture.generateMipmaps = !1),
      t.setRenderTarget(n, 0, r),
      t.render(e, s),
      t.setRenderTarget(n, 1, r),
      t.render(e, a),
      t.setRenderTarget(n, 2, r),
      t.render(e, o),
      t.setRenderTarget(n, 3, r),
      t.render(e, l),
      t.setRenderTarget(n, 4, r),
      t.render(e, c),
      (n.texture.generateMipmaps = v),
      t.setRenderTarget(n, 5, r),
      t.render(e, u),
      t.setRenderTarget(h, d, f),
      (t.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0));
  }
}
class no extends xe {
  constructor(t = [], e = 301, n, r, s, a, o, l, c, u) {
    (super(t, e, n, r, s, a, o, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(t) {
    this.image = t;
  }
}
class Rl extends bn {
  constructor(t = 1, e = {}) {
    (super(t, t, e), (this.isWebGLCubeRenderTarget = !0));
    const n = { width: t, height: t, depth: 1 },
      r = [n, n, n, n, n, n];
    ((this.texture = new no(r)),
      this._setTextureOptions(e),
      (this.texture.isRenderTargetTexture = !0));
  }
  fromEquirectangularTexture(t, e) {
    ((this.texture.type = e.type),
      (this.texture.colorSpace = e.colorSpace),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter));
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Pn(5, 5, 5),
      s = new hn({
        name: "CubemapFromEquirect",
        uniforms: ei(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: 1,
        blending: 0,
      });
    s.uniforms.tEquirect.value = e;
    const a = new ve(r, s),
      o = e.minFilter;
    return (
      e.minFilter === 1008 && (e.minFilter = 1006),
      new wl(1, 10, this).update(t, a),
      (e.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(t, e = !0, n = !0, r = !0) {
    const s = t.getRenderTarget();
    for (let a = 0; a < 6; a++) (t.setRenderTarget(this, a), t.clear(e, n, r));
    t.setRenderTarget(s);
  }
}
class Xe extends ce {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const Cl = { type: "move" };
class Jr {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Xe()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Xe()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Xe()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L())),
      this._grip
    );
  }
  dispatchEvent(t) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(t),
      this._grip !== null && this._grip.dispatchEvent(t),
      this._hand !== null && this._hand.dispatchEvent(t),
      this
    );
  }
  connect(t) {
    if (t && t.hand) {
      const e = this._hand;
      if (e) for (const n of t.hand.values()) this._getHandJoint(e, n);
    }
    return (this.dispatchEvent({ type: "connected", data: t }), this);
  }
  disconnect(t) {
    return (
      this.dispatchEvent({ type: "disconnected", data: t }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(t, e, n) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (t && e.session.visibilityState !== "visible-blurred") {
      if (c && t.hand) {
        a = !0;
        for (const v of t.hand.values()) {
          const m = e.getJointPose(v, n),
            p = this._getHandJoint(c, v);
          (m !== null &&
            (p.matrix.fromArray(m.transform.matrix),
            p.matrix.decompose(p.position, p.rotation, p.scale),
            (p.matrixWorldNeedsUpdate = !0),
            (p.jointRadius = m.radius)),
            (p.visible = m !== null));
        }
        const u = c.joints["index-finger-tip"],
          h = c.joints["thumb-tip"],
          d = u.position.distanceTo(h.position),
          f = 0.02,
          g = 0.005;
        c.inputState.pinching && d > f + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: t.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            d <= f - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: t.handedness,
              target: this,
            }));
      } else
        l !== null &&
          t.gripSpace &&
          ((s = e.getPose(t.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((r = e.getPose(t.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Cl)));
    }
    return (
      o !== null && (o.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(t, e) {
    if (t.joints[e.jointName] === void 0) {
      const n = new Xe();
      ((n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (t.joints[e.jointName] = n),
        t.add(n));
    }
    return t.joints[e.jointName];
  }
}
class io {
  constructor(t, e = 25e-5) {
    ((this.isFogExp2 = !0),
      (this.name = ""),
      (this.color = new zt(t)),
      (this.density = e));
  }
  clone() {
    return new io(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density,
    };
  }
}
class ro {
  constructor(t, e = 1, n = 1e3) {
    ((this.isFog = !0),
      (this.name = ""),
      (this.color = new zt(t)),
      (this.near = e),
      (this.far = n));
  }
  clone() {
    return new ro(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      name: this.name,
      color: this.color.getHex(),
      near: this.near,
      far: this.far,
    };
  }
}
class Sp extends ce {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Ye()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Ye()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.background !== null && (this.background = t.background.clone()),
      t.environment !== null && (this.environment = t.environment.clone()),
      t.fog !== null && (this.fog = t.fog.clone()),
      (this.backgroundBlurriness = t.backgroundBlurriness),
      (this.backgroundIntensity = t.backgroundIntensity),
      this.backgroundRotation.copy(t.backgroundRotation),
      (this.environmentIntensity = t.environmentIntensity),
      this.environmentRotation.copy(t.environmentRotation),
      t.overrideMaterial !== null &&
        (this.overrideMaterial = t.overrideMaterial.clone()),
      (this.matrixAutoUpdate = t.matrixAutoUpdate),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      this.fog !== null && (e.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (e.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (e.object.backgroundIntensity = this.backgroundIntensity),
      (e.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (e.object.environmentIntensity = this.environmentIntensity),
      (e.object.environmentRotation = this.environmentRotation.toArray()),
      e
    );
  }
}
class Pl {
  constructor(t, e) {
    ((this.isInterleavedBuffer = !0),
      (this.array = t),
      (this.stride = e),
      (this.count = t !== void 0 ? t.length / e : 0),
      (this.usage = 35044),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = qe()));
  }
  onUploadCallback() {}
  set needsUpdate(t) {
    t === !0 && this.version++;
  }
  setUsage(t) {
    return ((this.usage = t), this);
  }
  addUpdateRange(t, e) {
    this.updateRanges.push({ start: t, count: e });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(t) {
    return (
      (this.array = new t.array.constructor(t.array)),
      (this.count = t.count),
      (this.stride = t.stride),
      (this.usage = t.usage),
      this
    );
  }
  copyAt(t, e, n) {
    ((t *= this.stride), (n *= e.stride));
    for (let r = 0, s = this.stride; r < s; r++)
      this.array[t + r] = e.array[n + r];
    return this;
  }
  set(t, e = 0) {
    return (this.array.set(t, e), this);
  }
  clone(t) {
    (t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = qe()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer));
    const e = new this.array.constructor(
        t.arrayBuffers[this.array.buffer._uuid],
      ),
      n = new this.constructor(e, this.stride);
    return (n.setUsage(this.usage), n);
  }
  onUpload(t) {
    return ((this.onUploadCallback = t), this);
  }
  toJSON(t) {
    return (
      t.arrayBuffers === void 0 && (t.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = qe()),
      t.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (t.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer),
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Ae = new L();
class xr {
  constructor(t, e, n, r = !1) {
    ((this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = t),
      (this.itemSize = e),
      (this.offset = n),
      (this.normalized = r));
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(t) {
    this.data.needsUpdate = t;
  }
  applyMatrix4(t) {
    for (let e = 0, n = this.data.count; e < n; e++)
      (Ae.fromBufferAttribute(this, e),
        Ae.applyMatrix4(t),
        this.setXYZ(e, Ae.x, Ae.y, Ae.z));
    return this;
  }
  applyNormalMatrix(t) {
    for (let e = 0, n = this.count; e < n; e++)
      (Ae.fromBufferAttribute(this, e),
        Ae.applyNormalMatrix(t),
        this.setXYZ(e, Ae.x, Ae.y, Ae.z));
    return this;
  }
  transformDirection(t) {
    for (let e = 0, n = this.count; e < n; e++)
      (Ae.fromBufferAttribute(this, e),
        Ae.transformDirection(t),
        this.setXYZ(e, Ae.x, Ae.y, Ae.z));
    return this;
  }
  getComponent(t, e) {
    let n = this.array[t * this.data.stride + this.offset + e];
    return (this.normalized && (n = Ve(n, this.array)), n);
  }
  setComponent(t, e, n) {
    return (
      this.normalized && (n = Yt(n, this.array)),
      (this.data.array[t * this.data.stride + this.offset + e] = n),
      this
    );
  }
  setX(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset] = e),
      this
    );
  }
  setY(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 1] = e),
      this
    );
  }
  setZ(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 2] = e),
      this
    );
  }
  setW(t, e) {
    return (
      this.normalized && (e = Yt(e, this.array)),
      (this.data.array[t * this.data.stride + this.offset + 3] = e),
      this
    );
  }
  getX(t) {
    let e = this.data.array[t * this.data.stride + this.offset];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  getY(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 1];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  getZ(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 2];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  getW(t) {
    let e = this.data.array[t * this.data.stride + this.offset + 3];
    return (this.normalized && (e = Ve(e, this.array)), e);
  }
  setXY(t, e, n) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized && ((e = Yt(e, this.array)), (n = Yt(n, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      this
    );
  }
  setXYZ(t, e, n, r) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = Yt(e, this.array)),
        (n = Yt(n, this.array)),
        (r = Yt(r, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = r),
      this
    );
  }
  setXYZW(t, e, n, r, s) {
    return (
      (t = t * this.data.stride + this.offset),
      this.normalized &&
        ((e = Yt(e, this.array)),
        (n = Yt(n, this.array)),
        (r = Yt(r, this.array)),
        (s = Yt(s, this.array))),
      (this.data.array[t + 0] = e),
      (this.data.array[t + 1] = n),
      (this.data.array[t + 2] = r),
      (this.data.array[t + 3] = s),
      this
    );
  }
  clone(t) {
    if (t === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.",
      );
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) e.push(this.data.array[r + s]);
      }
      return new Re(
        new this.array.constructor(e),
        this.itemSize,
        this.normalized,
      );
    } else
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)),
        new xr(
          t.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized,
        )
      );
  }
  toJSON(t) {
    if (t === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.",
      );
      const e = [];
      for (let n = 0; n < this.count; n++) {
        const r = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) e.push(this.data.array[r + s]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: e,
        normalized: this.normalized,
      };
    } else
      return (
        t.interleavedBuffers === void 0 && (t.interleavedBuffers = {}),
        t.interleavedBuffers[this.data.uuid] === void 0 &&
          (t.interleavedBuffers[this.data.uuid] = this.data.toJSON(t)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
class Dl extends fn {
  constructor(t) {
    (super(),
      (this.isSpriteMaterial = !0),
      (this.type = "SpriteMaterial"),
      (this.color = new zt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.rotation = 0),
      (this.sizeAttenuation = !0),
      (this.transparent = !0),
      (this.fog = !0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.rotation = t.rotation),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
let Wn;
const ui = new L(),
  Xn = new L(),
  qn = new L(),
  Yn = new ot(),
  hi = new ot(),
  so = new Zt(),
  ji = new L(),
  fi = new L(),
  Qi = new L(),
  ra = new ot(),
  $r = new ot(),
  sa = new ot();
class yp extends ce {
  constructor(t = new Dl()) {
    if (
      (super(), (this.isSprite = !0), (this.type = "Sprite"), Wn === void 0)
    ) {
      Wn = new de();
      const e = new Float32Array([
          -0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5,
          0, 0, 1,
        ]),
        n = new Pl(e, 5);
      (Wn.setIndex([0, 1, 2, 0, 2, 3]),
        Wn.setAttribute("position", new xr(n, 3, 0, !1)),
        Wn.setAttribute("uv", new xr(n, 2, 3, !1)));
    }
    ((this.geometry = Wn),
      (this.material = t),
      (this.center = new ot(0.5, 0.5)),
      (this.count = 1));
  }
  raycast(t, e) {
    (t.camera === null &&
      console.error(
        'THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.',
      ),
      Xn.setFromMatrixScale(this.matrixWorld),
      so.copy(t.camera.matrixWorld),
      this.modelViewMatrix.multiplyMatrices(
        t.camera.matrixWorldInverse,
        this.matrixWorld,
      ),
      qn.setFromMatrixPosition(this.modelViewMatrix),
      t.camera.isPerspectiveCamera &&
        this.material.sizeAttenuation === !1 &&
        Xn.multiplyScalar(-qn.z));
    const n = this.material.rotation;
    let r, s;
    n !== 0 && ((s = Math.cos(n)), (r = Math.sin(n)));
    const a = this.center;
    (tr(ji.set(-0.5, -0.5, 0), qn, a, Xn, r, s),
      tr(fi.set(0.5, -0.5, 0), qn, a, Xn, r, s),
      tr(Qi.set(0.5, 0.5, 0), qn, a, Xn, r, s),
      ra.set(0, 0),
      $r.set(1, 0),
      sa.set(1, 1));
    let o = t.ray.intersectTriangle(ji, fi, Qi, !1, ui);
    if (
      o === null &&
      (tr(fi.set(-0.5, 0.5, 0), qn, a, Xn, r, s),
      $r.set(0, 1),
      (o = t.ray.intersectTriangle(ji, Qi, fi, !1, ui)),
      o === null)
    )
      return;
    const l = t.ray.origin.distanceTo(ui);
    l < t.near ||
      l > t.far ||
      e.push({
        distance: l,
        point: ui.clone(),
        uv: Be.getInterpolation(ui, ji, fi, Qi, ra, $r, sa, new ot()),
        face: null,
        object: this,
      });
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      t.center !== void 0 && this.center.copy(t.center),
      (this.material = t.material),
      this
    );
  }
}
function tr(i, t, e, n, r, s) {
  (Yn.subVectors(i, e).addScalar(0.5).multiply(n),
    r !== void 0
      ? ((hi.x = s * Yn.x - r * Yn.y), (hi.y = r * Yn.x + s * Yn.y))
      : hi.copy(Yn),
    i.copy(t),
    (i.x += hi.x),
    (i.y += hi.y),
    i.applyMatrix4(so));
}
class Ll extends xe {
  constructor(t = null, e = 1, n = 1, r, s, a, o, l, c = 1003, u = 1003, h, d) {
    (super(null, a, o, l, c, u, r, s, h, d),
      (this.isDataTexture = !0),
      (this.image = { data: t, width: e, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class aa extends Re {
  constructor(t, e, n, r = 1) {
    (super(t, e, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = r));
  }
  copy(t) {
    return (super.copy(t), (this.meshPerAttribute = t.meshPerAttribute), this);
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.meshPerAttribute = this.meshPerAttribute),
      (t.isInstancedBufferAttribute = !0),
      t
    );
  }
}
const Zn = new Zt(),
  oa = new Zt(),
  er = [],
  la = new Rn(),
  Ul = new Zt(),
  di = new ve(),
  pi = new Cn();
class Ep extends ve {
  constructor(t, e, n) {
    (super(t, e),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new aa(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    for (let r = 0; r < n; r++) this.setMatrixAt(r, Ul);
  }
  computeBoundingBox() {
    const t = this.geometry,
      e = this.count;
    (this.boundingBox === null && (this.boundingBox = new Rn()),
      t.boundingBox === null && t.computeBoundingBox(),
      this.boundingBox.makeEmpty());
    for (let n = 0; n < e; n++)
      (this.getMatrixAt(n, Zn),
        la.copy(t.boundingBox).applyMatrix4(Zn),
        this.boundingBox.union(la));
  }
  computeBoundingSphere() {
    const t = this.geometry,
      e = this.count;
    (this.boundingSphere === null && (this.boundingSphere = new Cn()),
      t.boundingSphere === null && t.computeBoundingSphere(),
      this.boundingSphere.makeEmpty());
    for (let n = 0; n < e; n++)
      (this.getMatrixAt(n, Zn),
        pi.copy(t.boundingSphere).applyMatrix4(Zn),
        this.boundingSphere.union(pi));
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      this.instanceMatrix.copy(t.instanceMatrix),
      t.morphTexture !== null && (this.morphTexture = t.morphTexture.clone()),
      t.instanceColor !== null &&
        (this.instanceColor = t.instanceColor.clone()),
      (this.count = t.count),
      t.boundingBox !== null && (this.boundingBox = t.boundingBox.clone()),
      t.boundingSphere !== null &&
        (this.boundingSphere = t.boundingSphere.clone()),
      this
    );
  }
  getColorAt(t, e) {
    e.fromArray(this.instanceColor.array, t * 3);
  }
  getMatrixAt(t, e) {
    e.fromArray(this.instanceMatrix.array, t * 16);
  }
  getMorphAt(t, e) {
    const n = e.morphTargetInfluences,
      r = this.morphTexture.source.data.data,
      s = n.length + 1,
      a = t * s + 1;
    for (let o = 0; o < n.length; o++) n[o] = r[a + o];
  }
  raycast(t, e) {
    const n = this.matrixWorld,
      r = this.count;
    if (
      ((di.geometry = this.geometry),
      (di.material = this.material),
      di.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        pi.copy(this.boundingSphere),
        pi.applyMatrix4(n),
        t.ray.intersectsSphere(pi) !== !1))
    )
      for (let s = 0; s < r; s++) {
        (this.getMatrixAt(s, Zn),
          oa.multiplyMatrices(n, Zn),
          (di.matrixWorld = oa),
          di.raycast(t, er));
        for (let a = 0, o = er.length; a < o; a++) {
          const l = er[a];
          ((l.instanceId = s), (l.object = this), e.push(l));
        }
        er.length = 0;
      }
  }
  setColorAt(t, e) {
    (this.instanceColor === null &&
      (this.instanceColor = new aa(
        new Float32Array(this.instanceMatrix.count * 3).fill(1),
        3,
      )),
      e.toArray(this.instanceColor.array, t * 3));
  }
  setMatrixAt(t, e) {
    e.toArray(this.instanceMatrix.array, t * 16);
  }
  setMorphAt(t, e) {
    const n = e.morphTargetInfluences,
      r = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new Ll(
        new Float32Array(r * this.count),
        r,
        this.count,
        1028,
        1015,
      ));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++) a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      l = r * t;
    ((s[l] = o), s.set(n, l + 1));
  }
  updateMorphTargets() {}
  dispose() {
    (this.dispatchEvent({ type: "dispose" }),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null)));
  }
}
const Kr = new L(),
  Il = new L(),
  Fl = new It();
class Sn {
  constructor(t = new L(1, 0, 0), e = 0) {
    ((this.isPlane = !0), (this.normal = t), (this.constant = e));
  }
  set(t, e) {
    return (this.normal.copy(t), (this.constant = e), this);
  }
  setComponents(t, e, n, r) {
    return (this.normal.set(t, e, n), (this.constant = r), this);
  }
  setFromNormalAndCoplanarPoint(t, e) {
    return (this.normal.copy(t), (this.constant = -e.dot(this.normal)), this);
  }
  setFromCoplanarPoints(t, e, n) {
    const r = Kr.subVectors(n, e).cross(Il.subVectors(t, e)).normalize();
    return (this.setFromNormalAndCoplanarPoint(r, t), this);
  }
  copy(t) {
    return (this.normal.copy(t.normal), (this.constant = t.constant), this);
  }
  normalize() {
    const t = 1 / this.normal.length();
    return (this.normal.multiplyScalar(t), (this.constant *= t), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(t) {
    return this.normal.dot(t) + this.constant;
  }
  distanceToSphere(t) {
    return this.distanceToPoint(t.center) - t.radius;
  }
  projectPoint(t, e) {
    return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
  }
  intersectLine(t, e) {
    const n = t.delta(Kr),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
    const s = -(t.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : e.copy(t.start).addScaledVector(n, s);
  }
  intersectsLine(t) {
    const e = this.distanceToPoint(t.start),
      n = this.distanceToPoint(t.end);
    return (e < 0 && n > 0) || (n < 0 && e > 0);
  }
  intersectsBox(t) {
    return t.intersectsPlane(this);
  }
  intersectsSphere(t) {
    return t.intersectsPlane(this);
  }
  coplanarPoint(t) {
    return t.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(t, e) {
    const n = e || Fl.getNormalMatrix(t),
      r = this.coplanarPoint(Kr).applyMatrix4(t),
      s = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -r.dot(s)), this);
  }
  translate(t) {
    return ((this.constant -= t.dot(this.normal)), this);
  }
  equals(t) {
    return t.normal.equals(this.normal) && t.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new Cn(),
  Nl = new ot(0.5, 0.5),
  nr = new L();
class As {
  constructor(
    t = new Sn(),
    e = new Sn(),
    n = new Sn(),
    r = new Sn(),
    s = new Sn(),
    a = new Sn(),
  ) {
    this.planes = [t, e, n, r, s, a];
  }
  set(t, e, n, r, s, a) {
    const o = this.planes;
    return (
      o[0].copy(t),
      o[1].copy(e),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
    return this;
  }
  setFromProjectionMatrix(t, e = 2e3, n = !1) {
    const r = this.planes,
      s = t.elements,
      a = s[0],
      o = s[1],
      l = s[2],
      c = s[3],
      u = s[4],
      h = s[5],
      d = s[6],
      f = s[7],
      g = s[8],
      v = s[9],
      m = s[10],
      p = s[11],
      A = s[12],
      E = s[13],
      _ = s[14],
      b = s[15];
    if (
      (r[0].setComponents(c - a, f - u, p - g, b - A).normalize(),
      r[1].setComponents(c + a, f + u, p + g, b + A).normalize(),
      r[2].setComponents(c + o, f + h, p + v, b + E).normalize(),
      r[3].setComponents(c - o, f - h, p - v, b - E).normalize(),
      n)
    )
      (r[4].setComponents(l, d, m, _).normalize(),
        r[5].setComponents(c - l, f - d, p - m, b - _).normalize());
    else if (
      (r[4].setComponents(c - l, f - d, p - m, b - _).normalize(), e === 2e3)
    )
      r[5].setComponents(c + l, f + d, p + m, b + _).normalize();
    else if (e === 2001) r[5].setComponents(l, d, m, _).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          e,
      );
    return this;
  }
  intersectsObject(t) {
    if (t.boundingSphere !== void 0)
      (t.boundingSphere === null && t.computeBoundingSphere(),
        vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld));
    else {
      const e = t.geometry;
      (e.boundingSphere === null && e.computeBoundingSphere(),
        vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld));
    }
    return this.intersectsSphere(vn);
  }
  intersectsSprite(t) {
    vn.center.set(0, 0, 0);
    const e = Nl.distanceTo(t.center);
    return (
      (vn.radius = 0.7071067811865476 + e),
      vn.applyMatrix4(t.matrixWorld),
      this.intersectsSphere(vn)
    );
  }
  intersectsSphere(t) {
    const e = this.planes,
      n = t.center,
      r = -t.radius;
    for (let s = 0; s < 6; s++) if (e[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = e[n];
      if (
        ((nr.x = r.normal.x > 0 ? t.max.x : t.min.x),
        (nr.y = r.normal.y > 0 ? t.max.y : t.min.y),
        (nr.z = r.normal.z > 0 ? t.max.z : t.min.z),
        r.distanceToPoint(nr) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(t) {
    const e = this.planes;
    for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ao extends fn {
  constructor(t) {
    (super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new zt(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.linewidth = t.linewidth),
      (this.linecap = t.linecap),
      (this.linejoin = t.linejoin),
      (this.fog = t.fog),
      this
    );
  }
}
const Mr = new L(),
  Sr = new L(),
  ca = new Zt(),
  mi = new Ts(),
  ir = new Cn(),
  jr = new L(),
  ua = new L();
class oo extends ce {
  constructor(t = new de(), e = new ao()) {
    (super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = t),
      (this.material = e),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  computeLineDistances() {
    const t = this.geometry;
    if (t.index === null) {
      const e = t.attributes.position,
        n = [0];
      for (let r = 1, s = e.count; r < s; r++)
        (Mr.fromBufferAttribute(e, r - 1),
          Sr.fromBufferAttribute(e, r),
          (n[r] = n[r - 1]),
          (n[r] += Mr.distanceTo(Sr)));
      t.setAttribute("lineDistance", new Wt(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
      );
    return this;
  }
  raycast(t, e) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = t.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ir.copy(n.boundingSphere),
      ir.applyMatrix4(r),
      (ir.radius += s),
      t.ray.intersectsSphere(ir) === !1)
    )
      return;
    (ca.copy(r).invert(), mi.copy(t.ray).applyMatrix4(ca));
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = this.isLineSegments ? 2 : 1,
      u = n.index,
      d = n.attributes.position;
    if (u !== null) {
      const f = Math.max(0, a.start),
        g = Math.min(u.count, a.start + a.count);
      for (let v = f, m = g - 1; v < m; v += c) {
        const p = u.getX(v),
          A = u.getX(v + 1),
          E = rr(this, t, mi, l, p, A, v);
        E && e.push(E);
      }
      if (this.isLineLoop) {
        const v = u.getX(g - 1),
          m = u.getX(f),
          p = rr(this, t, mi, l, v, m, g - 1);
        p && e.push(p);
      }
    } else {
      const f = Math.max(0, a.start),
        g = Math.min(d.count, a.start + a.count);
      for (let v = f, m = g - 1; v < m; v += c) {
        const p = rr(this, t, mi, l, v, v + 1, v);
        p && e.push(p);
      }
      if (this.isLineLoop) {
        const v = rr(this, t, mi, l, g - 1, f, g - 1);
        v && e.push(v);
      }
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s));
        }
      }
    }
  }
}
function rr(i, t, e, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (
    (Mr.fromBufferAttribute(o, r),
    Sr.fromBufferAttribute(o, s),
    e.distanceSqToSegment(Mr, Sr, jr, ua) > n)
  )
    return;
  jr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(jr);
  if (!(c < t.near || c > t.far))
    return {
      distance: c,
      point: ua.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i,
    };
}
class Tp extends oo {
  constructor(t, e) {
    (super(t, e), (this.isLineLoop = !0), (this.type = "LineLoop"));
  }
}
class Ol extends fn {
  constructor(t) {
    (super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new zt(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      this.color.copy(t.color),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.size = t.size),
      (this.sizeAttenuation = t.sizeAttenuation),
      (this.fog = t.fog),
      this
    );
  }
}
const ha = new Zt(),
  _s = new Ts(),
  sr = new Cn(),
  ar = new L();
class Ap extends ce {
  constructor(t = new de(), e = new Ol()) {
    (super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = t),
      (this.material = e),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.material = Array.isArray(t.material)
        ? t.material.slice()
        : t.material),
      (this.geometry = t.geometry),
      this
    );
  }
  raycast(t, e) {
    const n = this.geometry,
      r = this.matrixWorld,
      s = t.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      sr.copy(n.boundingSphere),
      sr.applyMatrix4(r),
      (sr.radius += s),
      t.ray.intersectsSphere(sr) === !1)
    )
      return;
    (ha.copy(r).invert(), _s.copy(t.ray).applyMatrix4(ha));
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = n.index,
      h = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start),
        f = Math.min(c.count, a.start + a.count);
      for (let g = d, v = f; g < v; g++) {
        const m = c.getX(g);
        (ar.fromBufferAttribute(h, m), fa(ar, m, l, r, t, e, this));
      }
    } else {
      const d = Math.max(0, a.start),
        f = Math.min(h.count, a.start + a.count);
      for (let g = d, v = f; g < v; g++)
        (ar.fromBufferAttribute(h, g), fa(ar, g, l, r, t, e, this));
    }
  }
  updateMorphTargets() {
    const e = this.geometry.morphAttributes,
      n = Object.keys(e);
    if (n.length > 0) {
      const r = e[n[0]];
      if (r !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s));
        }
      }
    }
  }
}
function fa(i, t, e, n, r, s, a) {
  const o = _s.distanceSqToPoint(i);
  if (o < e) {
    const l = new L();
    (_s.closestPointToPoint(i, l), l.applyMatrix4(n));
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a,
    });
  }
}
class lo extends xe {
  constructor(t, e, n, r, s, a, o, l, c) {
    (super(t, e, n, r, s, a, o, l, c),
      (this.isCanvasTexture = !0),
      (this.needsUpdate = !0));
  }
}
class co extends xe {
  constructor(t, e, n = 1014, r, s, a, o = 1003, l = 1003, c, u = 1026, h = 1) {
    if (u !== 1026 && u !== 1027)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    const d = { width: t, height: e, depth: h };
    (super(d, r, s, a, o, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.source = new Es(Object.assign({}, t.image))),
      (this.compareFunction = t.compareFunction),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      this.compareFunction !== null &&
        (e.compareFunction = this.compareFunction),
      e
    );
  }
}
class uo extends xe {
  constructor(t = null) {
    (super(), (this.sourceTexture = t), (this.isExternalTexture = !0));
  }
  copy(t) {
    return (super.copy(t), (this.sourceTexture = t.sourceTexture), this);
  }
}
class ho extends de {
  constructor(t = 1, e = 32, n = 0, r = Math.PI * 2) {
    (super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: t,
        segments: e,
        thetaStart: n,
        thetaLength: r,
      }),
      (e = Math.max(3, e)));
    const s = [],
      a = [],
      o = [],
      l = [],
      c = new L(),
      u = new ot();
    (a.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5));
    for (let h = 0, d = 3; h <= e; h++, d += 3) {
      const f = n + (h / e) * r;
      ((c.x = t * Math.cos(f)),
        (c.y = t * Math.sin(f)),
        a.push(c.x, c.y, c.z),
        o.push(0, 0, 1),
        (u.x = (a[d] / t + 1) / 2),
        (u.y = (a[d + 1] / t + 1) / 2),
        l.push(u.x, u.y));
    }
    for (let h = 1; h <= e; h++) s.push(h, h + 1, 0);
    (this.setIndex(s),
      this.setAttribute("position", new Wt(a, 3)),
      this.setAttribute("normal", new Wt(o, 3)),
      this.setAttribute("uv", new Wt(l, 2)));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new ho(t.radius, t.segments, t.thetaStart, t.thetaLength);
  }
}
class Di extends de {
  constructor(
    t = 1,
    e = 1,
    n = 1,
    r = 32,
    s = 1,
    a = !1,
    o = 0,
    l = Math.PI * 2,
  ) {
    (super(),
      (this.type = "CylinderGeometry"),
      (this.parameters = {
        radiusTop: t,
        radiusBottom: e,
        height: n,
        radialSegments: r,
        heightSegments: s,
        openEnded: a,
        thetaStart: o,
        thetaLength: l,
      }));
    const c = this;
    ((r = Math.floor(r)), (s = Math.floor(s)));
    const u = [],
      h = [],
      d = [],
      f = [];
    let g = 0;
    const v = [],
      m = n / 2;
    let p = 0;
    (A(),
      a === !1 && (t > 0 && E(!0), e > 0 && E(!1)),
      this.setIndex(u),
      this.setAttribute("position", new Wt(h, 3)),
      this.setAttribute("normal", new Wt(d, 3)),
      this.setAttribute("uv", new Wt(f, 2)));
    function A() {
      const _ = new L(),
        b = new L();
      let T = 0;
      const w = (e - t) / n;
      for (let C = 0; C <= s; C++) {
        const M = [],
          S = C / s,
          D = S * (e - t) + t;
        for (let I = 0; I <= r; I++) {
          const B = I / r,
            H = B * l + o,
            W = Math.sin(H),
            V = Math.cos(H);
          ((b.x = D * W),
            (b.y = -S * n + m),
            (b.z = D * V),
            h.push(b.x, b.y, b.z),
            _.set(W, w, V).normalize(),
            d.push(_.x, _.y, _.z),
            f.push(B, 1 - S),
            M.push(g++));
        }
        v.push(M);
      }
      for (let C = 0; C < r; C++)
        for (let M = 0; M < s; M++) {
          const S = v[M][C],
            D = v[M + 1][C],
            I = v[M + 1][C + 1],
            B = v[M][C + 1];
          ((t > 0 || M !== 0) && (u.push(S, D, B), (T += 3)),
            (e > 0 || M !== s - 1) && (u.push(D, I, B), (T += 3)));
        }
      (c.addGroup(p, T, 0), (p += T));
    }
    function E(_) {
      const b = g,
        T = new ot(),
        w = new L();
      let C = 0;
      const M = _ === !0 ? t : e,
        S = _ === !0 ? 1 : -1;
      for (let I = 1; I <= r; I++)
        (h.push(0, m * S, 0), d.push(0, S, 0), f.push(0.5, 0.5), g++);
      const D = g;
      for (let I = 0; I <= r; I++) {
        const H = (I / r) * l + o,
          W = Math.cos(H),
          V = Math.sin(H);
        ((w.x = M * V),
          (w.y = m * S),
          (w.z = M * W),
          h.push(w.x, w.y, w.z),
          d.push(0, S, 0),
          (T.x = W * 0.5 + 0.5),
          (T.y = V * 0.5 * S + 0.5),
          f.push(T.x, T.y),
          g++);
      }
      for (let I = 0; I < r; I++) {
        const B = b + I,
          H = D + I;
        (_ === !0 ? u.push(H, H + 1, B) : u.push(H + 1, H, B), (C += 3));
      }
      (c.addGroup(p, C, _ === !0 ? 1 : 2), (p += C));
    }
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new Di(
      t.radiusTop,
      t.radiusBottom,
      t.height,
      t.radialSegments,
      t.heightSegments,
      t.openEnded,
      t.thetaStart,
      t.thetaLength,
    );
  }
}
class bs extends Di {
  constructor(t = 1, e = 1, n = 32, r = 1, s = !1, a = 0, o = Math.PI * 2) {
    (super(0, t, e, n, r, s, a, o),
      (this.type = "ConeGeometry"),
      (this.parameters = {
        radius: t,
        height: e,
        radialSegments: n,
        heightSegments: r,
        openEnded: s,
        thetaStart: a,
        thetaLength: o,
      }));
  }
  static fromJSON(t) {
    return new bs(
      t.radius,
      t.height,
      t.radialSegments,
      t.heightSegments,
      t.openEnded,
      t.thetaStart,
      t.thetaLength,
    );
  }
}
class Er extends de {
  constructor(t = [], e = [], n = 1, r = 0) {
    (super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: t, indices: e, radius: n, detail: r }));
    const s = [],
      a = [];
    (o(r),
      c(n),
      u(),
      this.setAttribute("position", new Wt(s, 3)),
      this.setAttribute("normal", new Wt(s.slice(), 3)),
      this.setAttribute("uv", new Wt(a, 2)),
      r === 0 ? this.computeVertexNormals() : this.normalizeNormals());
    function o(A) {
      const E = new L(),
        _ = new L(),
        b = new L();
      for (let T = 0; T < e.length; T += 3)
        (f(e[T + 0], E), f(e[T + 1], _), f(e[T + 2], b), l(E, _, b, A));
    }
    function l(A, E, _, b) {
      const T = b + 1,
        w = [];
      for (let C = 0; C <= T; C++) {
        w[C] = [];
        const M = A.clone().lerp(_, C / T),
          S = E.clone().lerp(_, C / T),
          D = T - C;
        for (let I = 0; I <= D; I++)
          I === 0 && C === T
            ? (w[C][I] = M)
            : (w[C][I] = M.clone().lerp(S, I / D));
      }
      for (let C = 0; C < T; C++)
        for (let M = 0; M < 2 * (T - C) - 1; M++) {
          const S = Math.floor(M / 2);
          M % 2 === 0
            ? (d(w[C][S + 1]), d(w[C + 1][S]), d(w[C][S]))
            : (d(w[C][S + 1]), d(w[C + 1][S + 1]), d(w[C + 1][S]));
        }
    }
    function c(A) {
      const E = new L();
      for (let _ = 0; _ < s.length; _ += 3)
        ((E.x = s[_ + 0]),
          (E.y = s[_ + 1]),
          (E.z = s[_ + 2]),
          E.normalize().multiplyScalar(A),
          (s[_ + 0] = E.x),
          (s[_ + 1] = E.y),
          (s[_ + 2] = E.z));
    }
    function u() {
      const A = new L();
      for (let E = 0; E < s.length; E += 3) {
        ((A.x = s[E + 0]), (A.y = s[E + 1]), (A.z = s[E + 2]));
        const _ = m(A) / 2 / Math.PI + 0.5,
          b = p(A) / Math.PI + 0.5;
        a.push(_, 1 - b);
      }
      (g(), h());
    }
    function h() {
      for (let A = 0; A < a.length; A += 6) {
        const E = a[A + 0],
          _ = a[A + 2],
          b = a[A + 4],
          T = Math.max(E, _, b),
          w = Math.min(E, _, b);
        T > 0.9 &&
          w < 0.1 &&
          (E < 0.2 && (a[A + 0] += 1),
          _ < 0.2 && (a[A + 2] += 1),
          b < 0.2 && (a[A + 4] += 1));
      }
    }
    function d(A) {
      s.push(A.x, A.y, A.z);
    }
    function f(A, E) {
      const _ = A * 3;
      ((E.x = t[_ + 0]), (E.y = t[_ + 1]), (E.z = t[_ + 2]));
    }
    function g() {
      const A = new L(),
        E = new L(),
        _ = new L(),
        b = new L(),
        T = new ot(),
        w = new ot(),
        C = new ot();
      for (let M = 0, S = 0; M < s.length; M += 9, S += 6) {
        (A.set(s[M + 0], s[M + 1], s[M + 2]),
          E.set(s[M + 3], s[M + 4], s[M + 5]),
          _.set(s[M + 6], s[M + 7], s[M + 8]),
          T.set(a[S + 0], a[S + 1]),
          w.set(a[S + 2], a[S + 3]),
          C.set(a[S + 4], a[S + 5]),
          b.copy(A).add(E).add(_).divideScalar(3));
        const D = m(b);
        (v(T, S + 0, A, D), v(w, S + 2, E, D), v(C, S + 4, _, D));
      }
    }
    function v(A, E, _, b) {
      (b < 0 && A.x === 1 && (a[E] = A.x - 1),
        _.x === 0 && _.z === 0 && (a[E] = b / 2 / Math.PI + 0.5));
    }
    function m(A) {
      return Math.atan2(A.z, -A.x);
    }
    function p(A) {
      return Math.atan2(-A.y, Math.sqrt(A.x * A.x + A.z * A.z));
    }
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new Er(t.vertices, t.indices, t.radius, t.details);
  }
}
class Ze {
  constructor() {
    ((this.type = "Curve"),
      (this.arcLengthDivisions = 200),
      (this.needsUpdate = !1),
      (this.cacheArcLengths = null));
  }
  getPoint() {
    console.warn("THREE.Curve: .getPoint() not implemented.");
  }
  getPointAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getPoint(n, e);
  }
  getPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return e;
  }
  getSpacedPoints(t = 5) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
    return e;
  }
  getLength() {
    const t = this.getLengths();
    return t[t.length - 1];
  }
  getLengths(t = this.arcLengthDivisions) {
    if (
      this.cacheArcLengths &&
      this.cacheArcLengths.length === t + 1 &&
      !this.needsUpdate
    )
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const e = [];
    let n,
      r = this.getPoint(0),
      s = 0;
    e.push(0);
    for (let a = 1; a <= t; a++)
      ((n = this.getPoint(a / t)), (s += n.distanceTo(r)), e.push(s), (r = n));
    return ((this.cacheArcLengths = e), e);
  }
  updateArcLengths() {
    ((this.needsUpdate = !0), this.getLengths());
  }
  getUtoTmapping(t, e = null) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let a;
    e ? (a = e) : (a = t * n[s - 1]);
    let o = 0,
      l = s - 1,
      c;
    for (; o <= l;)
      if (((r = Math.floor(o + (l - o) / 2)), (c = n[r] - a), c < 0)) o = r + 1;
      else if (c > 0) l = r - 1;
      else {
        l = r;
        break;
      }
    if (((r = l), n[r] === a)) return r / (s - 1);
    const u = n[r],
      d = n[r + 1] - u,
      f = (a - u) / d;
    return (r + f) / (s - 1);
  }
  getTangent(t, e) {
    let r = t - 1e-4,
      s = t + 1e-4;
    (r < 0 && (r = 0), s > 1 && (s = 1));
    const a = this.getPoint(r),
      o = this.getPoint(s),
      l = e || (a.isVector2 ? new ot() : new L());
    return (l.copy(o).sub(a).normalize(), l);
  }
  getTangentAt(t, e) {
    const n = this.getUtoTmapping(t);
    return this.getTangent(n, e);
  }
  computeFrenetFrames(t, e = !1) {
    const n = new L(),
      r = [],
      s = [],
      a = [],
      o = new L(),
      l = new Zt();
    for (let f = 0; f <= t; f++) {
      const g = f / t;
      r[f] = this.getTangentAt(g, new L());
    }
    ((s[0] = new L()), (a[0] = new L()));
    let c = Number.MAX_VALUE;
    const u = Math.abs(r[0].x),
      h = Math.abs(r[0].y),
      d = Math.abs(r[0].z);
    (u <= c && ((c = u), n.set(1, 0, 0)),
      h <= c && ((c = h), n.set(0, 1, 0)),
      d <= c && n.set(0, 0, 1),
      o.crossVectors(r[0], n).normalize(),
      s[0].crossVectors(r[0], o),
      a[0].crossVectors(r[0], s[0]));
    for (let f = 1; f <= t; f++) {
      if (
        ((s[f] = s[f - 1].clone()),
        (a[f] = a[f - 1].clone()),
        o.crossVectors(r[f - 1], r[f]),
        o.length() > Number.EPSILON)
      ) {
        o.normalize();
        const g = Math.acos(Ot(r[f - 1].dot(r[f]), -1, 1));
        s[f].applyMatrix4(l.makeRotationAxis(o, g));
      }
      a[f].crossVectors(r[f], s[f]);
    }
    if (e === !0) {
      let f = Math.acos(Ot(s[0].dot(s[t]), -1, 1));
      ((f /= t), r[0].dot(o.crossVectors(s[0], s[t])) > 0 && (f = -f));
      for (let g = 1; g <= t; g++)
        (s[g].applyMatrix4(l.makeRotationAxis(r[g], f * g)),
          a[g].crossVectors(r[g], s[g]));
    }
    return { tangents: r, normals: s, binormals: a };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(t) {
    return ((this.arcLengthDivisions = t.arcLengthDivisions), this);
  }
  toJSON() {
    const t = {
      metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" },
    };
    return (
      (t.arcLengthDivisions = this.arcLengthDivisions),
      (t.type = this.type),
      t
    );
  }
  fromJSON(t) {
    return ((this.arcLengthDivisions = t.arcLengthDivisions), this);
  }
}
class ws extends Ze {
  constructor(
    t = 0,
    e = 0,
    n = 1,
    r = 1,
    s = 0,
    a = Math.PI * 2,
    o = !1,
    l = 0,
  ) {
    (super(),
      (this.isEllipseCurve = !0),
      (this.type = "EllipseCurve"),
      (this.aX = t),
      (this.aY = e),
      (this.xRadius = n),
      (this.yRadius = r),
      (this.aStartAngle = s),
      (this.aEndAngle = a),
      (this.aClockwise = o),
      (this.aRotation = l));
  }
  getPoint(t, e = new ot()) {
    const n = e,
      r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const a = Math.abs(s) < Number.EPSILON;
    for (; s < 0;) s += r;
    for (; s > r;) s -= r;
    (s < Number.EPSILON && (a ? (s = 0) : (s = r)),
      this.aClockwise === !0 && !a && (s === r ? (s = -r) : (s = s - r)));
    const o = this.aStartAngle + t * s;
    let l = this.aX + this.xRadius * Math.cos(o),
      c = this.aY + this.yRadius * Math.sin(o);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation),
        h = Math.sin(this.aRotation),
        d = l - this.aX,
        f = c - this.aY;
      ((l = d * u - f * h + this.aX), (c = d * h + f * u + this.aY));
    }
    return n.set(l, c);
  }
  copy(t) {
    return (
      super.copy(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.aX = this.aX),
      (t.aY = this.aY),
      (t.xRadius = this.xRadius),
      (t.yRadius = this.yRadius),
      (t.aStartAngle = this.aStartAngle),
      (t.aEndAngle = this.aEndAngle),
      (t.aClockwise = this.aClockwise),
      (t.aRotation = this.aRotation),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      (this.aX = t.aX),
      (this.aY = t.aY),
      (this.xRadius = t.xRadius),
      (this.yRadius = t.yRadius),
      (this.aStartAngle = t.aStartAngle),
      (this.aEndAngle = t.aEndAngle),
      (this.aClockwise = t.aClockwise),
      (this.aRotation = t.aRotation),
      this
    );
  }
}
class Bl extends ws {
  constructor(t, e, n, r, s, a) {
    (super(t, e, n, n, r, s, a),
      (this.isArcCurve = !0),
      (this.type = "ArcCurve"));
  }
}
function Rs() {
  let i = 0,
    t = 0,
    e = 0,
    n = 0;
  function r(s, a, o, l) {
    ((i = s),
      (t = o),
      (e = -3 * s + 3 * a - 2 * o - l),
      (n = 2 * s - 2 * a + o + l));
  }
  return {
    initCatmullRom: function (s, a, o, l, c) {
      r(a, o, c * (o - s), c * (l - a));
    },
    initNonuniformCatmullRom: function (s, a, o, l, c, u, h) {
      let d = (a - s) / c - (o - s) / (c + u) + (o - a) / u,
        f = (o - a) / u - (l - a) / (u + h) + (l - o) / h;
      ((d *= u), (f *= u), r(a, o, d, f));
    },
    calc: function (s) {
      const a = s * s,
        o = a * s;
      return i + t * s + e * a + n * o;
    },
  };
}
const or = new L(),
  Qr = new Rs(),
  ts = new Rs(),
  es = new Rs();
class zl extends Ze {
  constructor(t = [], e = !1, n = "centripetal", r = 0.5) {
    (super(),
      (this.isCatmullRomCurve3 = !0),
      (this.type = "CatmullRomCurve3"),
      (this.points = t),
      (this.closed = e),
      (this.curveType = n),
      (this.tension = r));
  }
  getPoint(t, e = new L()) {
    const n = e,
      r = this.points,
      s = r.length,
      a = (s - (this.closed ? 0 : 1)) * t;
    let o = Math.floor(a),
      l = a - o;
    this.closed
      ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / s) + 1) * s)
      : l === 0 && o === s - 1 && ((o = s - 2), (l = 1));
    let c, u;
    this.closed || o > 0
      ? (c = r[(o - 1) % s])
      : (or.subVectors(r[0], r[1]).add(r[0]), (c = or));
    const h = r[o % s],
      d = r[(o + 1) % s];
    if (
      (this.closed || o + 2 < s
        ? (u = r[(o + 2) % s])
        : (or.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), (u = or)),
      this.curveType === "centripetal" || this.curveType === "chordal")
    ) {
      const f = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(c.distanceToSquared(h), f),
        v = Math.pow(h.distanceToSquared(d), f),
        m = Math.pow(d.distanceToSquared(u), f);
      (v < 1e-4 && (v = 1),
        g < 1e-4 && (g = v),
        m < 1e-4 && (m = v),
        Qr.initNonuniformCatmullRom(c.x, h.x, d.x, u.x, g, v, m),
        ts.initNonuniformCatmullRom(c.y, h.y, d.y, u.y, g, v, m),
        es.initNonuniformCatmullRom(c.z, h.z, d.z, u.z, g, v, m));
    } else
      this.curveType === "catmullrom" &&
        (Qr.initCatmullRom(c.x, h.x, d.x, u.x, this.tension),
        ts.initCatmullRom(c.y, h.y, d.y, u.y, this.tension),
        es.initCatmullRom(c.z, h.z, d.z, u.z, this.tension));
    return (n.set(Qr.calc(l), ts.calc(l), es.calc(l)), n);
  }
  copy(t) {
    (super.copy(t), (this.points = []));
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(r.clone());
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const r = this.points[e];
      t.points.push(r.toArray());
    }
    return (
      (t.closed = this.closed),
      (t.curveType = this.curveType),
      (t.tension = this.tension),
      t
    );
  }
  fromJSON(t) {
    (super.fromJSON(t), (this.points = []));
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(new L().fromArray(r));
    }
    return (
      (this.closed = t.closed),
      (this.curveType = t.curveType),
      (this.tension = t.tension),
      this
    );
  }
}
function da(i, t, e, n, r) {
  const s = (n - t) * 0.5,
    a = (r - e) * 0.5,
    o = i * i,
    l = i * o;
  return (
    (2 * e - 2 * n + s + a) * l + (-3 * e + 3 * n - 2 * s - a) * o + s * i + e
  );
}
function Gl(i, t) {
  const e = 1 - i;
  return e * e * t;
}
function Hl(i, t) {
  return 2 * (1 - i) * i * t;
}
function Vl(i, t) {
  return i * i * t;
}
function Si(i, t, e, n) {
  return Gl(i, t) + Hl(i, e) + Vl(i, n);
}
function kl(i, t) {
  const e = 1 - i;
  return e * e * e * t;
}
function Wl(i, t) {
  const e = 1 - i;
  return 3 * e * e * i * t;
}
function Xl(i, t) {
  return 3 * (1 - i) * i * i * t;
}
function ql(i, t) {
  return i * i * i * t;
}
function yi(i, t, e, n, r) {
  return kl(i, t) + Wl(i, e) + Xl(i, n) + ql(i, r);
}
class fo extends Ze {
  constructor(t = new ot(), e = new ot(), n = new ot(), r = new ot()) {
    (super(),
      (this.isCubicBezierCurve = !0),
      (this.type = "CubicBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = r));
  }
  getPoint(t, e = new ot()) {
    const n = e,
      r = this.v0,
      s = this.v1,
      a = this.v2,
      o = this.v3;
    return (n.set(yi(t, r.x, s.x, a.x, o.x), yi(t, r.y, s.y, a.y, o.y)), n);
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
}
class Yl extends Ze {
  constructor(t = new L(), e = new L(), n = new L(), r = new L()) {
    (super(),
      (this.isCubicBezierCurve3 = !0),
      (this.type = "CubicBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n),
      (this.v3 = r));
  }
  getPoint(t, e = new L()) {
    const n = e,
      r = this.v0,
      s = this.v1,
      a = this.v2,
      o = this.v3;
    return (
      n.set(
        yi(t, r.x, s.x, a.x, o.x),
        yi(t, r.y, s.y, a.y, o.y),
        yi(t, r.z, s.z, a.z, o.z),
      ),
      n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this.v3.copy(t.v3),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      (t.v3 = this.v3.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this.v3.fromArray(t.v3),
      this
    );
  }
}
class po extends Ze {
  constructor(t = new ot(), e = new ot()) {
    (super(),
      (this.isLineCurve = !0),
      (this.type = "LineCurve"),
      (this.v1 = t),
      (this.v2 = e));
  }
  getPoint(t, e = new ot()) {
    const n = e;
    return (
      t === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new ot()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return (super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this);
  }
  toJSON() {
    const t = super.toJSON();
    return ((t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t);
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
class Zl extends Ze {
  constructor(t = new L(), e = new L()) {
    (super(),
      (this.isLineCurve3 = !0),
      (this.type = "LineCurve3"),
      (this.v1 = t),
      (this.v2 = e));
  }
  getPoint(t, e = new L()) {
    const n = e;
    return (
      t === 1
        ? n.copy(this.v2)
        : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
      n
    );
  }
  getPointAt(t, e) {
    return this.getPoint(t, e);
  }
  getTangent(t, e = new L()) {
    return e.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(t, e) {
    return this.getTangent(t, e);
  }
  copy(t) {
    return (super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this);
  }
  toJSON() {
    const t = super.toJSON();
    return ((t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t);
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
class mo extends Ze {
  constructor(t = new ot(), e = new ot(), n = new ot()) {
    (super(),
      (this.isQuadraticBezierCurve = !0),
      (this.type = "QuadraticBezierCurve"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n));
  }
  getPoint(t, e = new ot()) {
    const n = e,
      r = this.v0,
      s = this.v1,
      a = this.v2;
    return (n.set(Si(t, r.x, s.x, a.x), Si(t, r.y, s.y, a.y)), n);
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
class go extends Ze {
  constructor(t = new L(), e = new L(), n = new L()) {
    (super(),
      (this.isQuadraticBezierCurve3 = !0),
      (this.type = "QuadraticBezierCurve3"),
      (this.v0 = t),
      (this.v1 = e),
      (this.v2 = n));
  }
  getPoint(t, e = new L()) {
    const n = e,
      r = this.v0,
      s = this.v1,
      a = this.v2;
    return (
      n.set(Si(t, r.x, s.x, a.x), Si(t, r.y, s.y, a.y), Si(t, r.z, s.z, a.z)),
      n
    );
  }
  copy(t) {
    return (
      super.copy(t),
      this.v0.copy(t.v0),
      this.v1.copy(t.v1),
      this.v2.copy(t.v2),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.v0 = this.v0.toArray()),
      (t.v1 = this.v1.toArray()),
      (t.v2 = this.v2.toArray()),
      t
    );
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.v0.fromArray(t.v0),
      this.v1.fromArray(t.v1),
      this.v2.fromArray(t.v2),
      this
    );
  }
}
class _o extends Ze {
  constructor(t = []) {
    (super(),
      (this.isSplineCurve = !0),
      (this.type = "SplineCurve"),
      (this.points = t));
  }
  getPoint(t, e = new ot()) {
    const n = e,
      r = this.points,
      s = (r.length - 1) * t,
      a = Math.floor(s),
      o = s - a,
      l = r[a === 0 ? a : a - 1],
      c = r[a],
      u = r[a > r.length - 2 ? r.length - 1 : a + 1],
      h = r[a > r.length - 3 ? r.length - 1 : a + 2];
    return (n.set(da(o, l.x, c.x, u.x, h.x), da(o, l.y, c.y, u.y, h.y)), n);
  }
  copy(t) {
    (super.copy(t), (this.points = []));
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    t.points = [];
    for (let e = 0, n = this.points.length; e < n; e++) {
      const r = this.points[e];
      t.points.push(r.toArray());
    }
    return t;
  }
  fromJSON(t) {
    (super.fromJSON(t), (this.points = []));
    for (let e = 0, n = t.points.length; e < n; e++) {
      const r = t.points[e];
      this.points.push(new ot().fromArray(r));
    }
    return this;
  }
}
var vs = Object.freeze({
  __proto__: null,
  ArcCurve: Bl,
  CatmullRomCurve3: zl,
  CubicBezierCurve: fo,
  CubicBezierCurve3: Yl,
  EllipseCurve: ws,
  LineCurve: po,
  LineCurve3: Zl,
  QuadraticBezierCurve: mo,
  QuadraticBezierCurve3: go,
  SplineCurve: _o,
});
class Jl extends Ze {
  constructor() {
    (super(),
      (this.type = "CurvePath"),
      (this.curves = []),
      (this.autoClose = !1));
  }
  add(t) {
    this.curves.push(t);
  }
  closePath() {
    const t = this.curves[0].getPoint(0),
      e = this.curves[this.curves.length - 1].getPoint(1);
    if (!t.equals(e)) {
      const n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
      this.curves.push(new vs[n](e, t));
    }
    return this;
  }
  getPoint(t, e) {
    const n = t * this.getLength(),
      r = this.getCurveLengths();
    let s = 0;
    for (; s < r.length;) {
      if (r[s] >= n) {
        const a = r[s] - n,
          o = this.curves[s],
          l = o.getLength(),
          c = l === 0 ? 0 : 1 - a / l;
        return o.getPointAt(c, e);
      }
      s++;
    }
    return null;
  }
  getLength() {
    const t = this.getCurveLengths();
    return t[t.length - 1];
  }
  updateArcLengths() {
    ((this.needsUpdate = !0),
      (this.cacheLengths = null),
      this.getCurveLengths());
  }
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const t = [];
    let e = 0;
    for (let n = 0, r = this.curves.length; n < r; n++)
      ((e += this.curves[n].getLength()), t.push(e));
    return ((this.cacheLengths = t), t);
  }
  getSpacedPoints(t = 40) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
    return (this.autoClose && e.push(e[0]), e);
  }
  getPoints(t = 12) {
    const e = [];
    let n;
    for (let r = 0, s = this.curves; r < s.length; r++) {
      const a = s[r],
        o = a.isEllipseCurve
          ? t * 2
          : a.isLineCurve || a.isLineCurve3
            ? 1
            : a.isSplineCurve
              ? t * a.points.length
              : t,
        l = a.getPoints(o);
      for (let c = 0; c < l.length; c++) {
        const u = l[c];
        (n && n.equals(u)) || (e.push(u), (n = u));
      }
    }
    return (
      this.autoClose &&
        e.length > 1 &&
        !e[e.length - 1].equals(e[0]) &&
        e.push(e[0]),
      e
    );
  }
  copy(t) {
    (super.copy(t), (this.curves = []));
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const r = t.curves[e];
      this.curves.push(r.clone());
    }
    return ((this.autoClose = t.autoClose), this);
  }
  toJSON() {
    const t = super.toJSON();
    ((t.autoClose = this.autoClose), (t.curves = []));
    for (let e = 0, n = this.curves.length; e < n; e++) {
      const r = this.curves[e];
      t.curves.push(r.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    (super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []));
    for (let e = 0, n = t.curves.length; e < n; e++) {
      const r = t.curves[e];
      this.curves.push(new vs[r.type]().fromJSON(r));
    }
    return this;
  }
}
class pa extends Jl {
  constructor(t) {
    (super(),
      (this.type = "Path"),
      (this.currentPoint = new ot()),
      t && this.setFromPoints(t));
  }
  setFromPoints(t) {
    this.moveTo(t[0].x, t[0].y);
    for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
    return this;
  }
  moveTo(t, e) {
    return (this.currentPoint.set(t, e), this);
  }
  lineTo(t, e) {
    const n = new po(this.currentPoint.clone(), new ot(t, e));
    return (this.curves.push(n), this.currentPoint.set(t, e), this);
  }
  quadraticCurveTo(t, e, n, r) {
    const s = new mo(this.currentPoint.clone(), new ot(t, e), new ot(n, r));
    return (this.curves.push(s), this.currentPoint.set(n, r), this);
  }
  bezierCurveTo(t, e, n, r, s, a) {
    const o = new fo(
      this.currentPoint.clone(),
      new ot(t, e),
      new ot(n, r),
      new ot(s, a),
    );
    return (this.curves.push(o), this.currentPoint.set(s, a), this);
  }
  splineThru(t) {
    const e = [this.currentPoint.clone()].concat(t),
      n = new _o(e);
    return (this.curves.push(n), this.currentPoint.copy(t[t.length - 1]), this);
  }
  arc(t, e, n, r, s, a) {
    const o = this.currentPoint.x,
      l = this.currentPoint.y;
    return (this.absarc(t + o, e + l, n, r, s, a), this);
  }
  absarc(t, e, n, r, s, a) {
    return (this.absellipse(t, e, n, n, r, s, a), this);
  }
  ellipse(t, e, n, r, s, a, o, l) {
    const c = this.currentPoint.x,
      u = this.currentPoint.y;
    return (this.absellipse(t + c, e + u, n, r, s, a, o, l), this);
  }
  absellipse(t, e, n, r, s, a, o, l) {
    const c = new ws(t, e, n, r, s, a, o, l);
    if (this.curves.length > 0) {
      const h = c.getPoint(0);
      h.equals(this.currentPoint) || this.lineTo(h.x, h.y);
    }
    this.curves.push(c);
    const u = c.getPoint(1);
    return (this.currentPoint.copy(u), this);
  }
  copy(t) {
    return (super.copy(t), this.currentPoint.copy(t.currentPoint), this);
  }
  toJSON() {
    const t = super.toJSON();
    return ((t.currentPoint = this.currentPoint.toArray()), t);
  }
  fromJSON(t) {
    return (
      super.fromJSON(t),
      this.currentPoint.fromArray(t.currentPoint),
      this
    );
  }
}
class $l extends pa {
  constructor(t) {
    (super(t), (this.uuid = qe()), (this.type = "Shape"), (this.holes = []));
  }
  getPointsHoles(t) {
    const e = [];
    for (let n = 0, r = this.holes.length; n < r; n++)
      e[n] = this.holes[n].getPoints(t);
    return e;
  }
  extractPoints(t) {
    return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
  }
  copy(t) {
    (super.copy(t), (this.holes = []));
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const r = t.holes[e];
      this.holes.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const t = super.toJSON();
    ((t.uuid = this.uuid), (t.holes = []));
    for (let e = 0, n = this.holes.length; e < n; e++) {
      const r = this.holes[e];
      t.holes.push(r.toJSON());
    }
    return t;
  }
  fromJSON(t) {
    (super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []));
    for (let e = 0, n = t.holes.length; e < n; e++) {
      const r = t.holes[e];
      this.holes.push(new pa().fromJSON(r));
    }
    return this;
  }
}
function Kl(i, t, e = 2) {
  const n = t && t.length,
    r = n ? t[0] * e : i.length;
  let s = vo(i, 0, r, e, !0);
  const a = [];
  if (!s || s.next === s.prev) return a;
  let o, l, c;
  if ((n && (s = nc(i, t, s, e)), i.length > 80 * e)) {
    ((o = 1 / 0), (l = 1 / 0));
    let u = -1 / 0,
      h = -1 / 0;
    for (let d = e; d < r; d += e) {
      const f = i[d],
        g = i[d + 1];
      (f < o && (o = f), g < l && (l = g), f > u && (u = f), g > h && (h = g));
    }
    ((c = Math.max(u - o, h - l)), (c = c !== 0 ? 32767 / c : 0));
  }
  return (wi(s, a, e, o, l, c, 0), a);
}
function vo(i, t, e, n, r) {
  let s;
  if (r === dc(i, t, e, n) > 0)
    for (let a = t; a < e; a += n) s = ma((a / n) | 0, i[a], i[a + 1], s);
  else
    for (let a = e - n; a >= t; a -= n) s = ma((a / n) | 0, i[a], i[a + 1], s);
  return (s && ni(s, s.next) && (Ci(s), (s = s.next)), s);
}
function wn(i, t) {
  if (!i) return i;
  t || (t = i);
  let e = i,
    n;
  do
    if (
      ((n = !1), !e.steiner && (ni(e, e.next) || oe(e.prev, e, e.next) === 0))
    ) {
      if ((Ci(e), (e = t = e.prev), e === e.next)) break;
      n = !0;
    } else e = e.next;
  while (n || e !== t);
  return t;
}
function wi(i, t, e, n, r, s, a) {
  if (!i) return;
  !a && s && oc(i, n, r, s);
  let o = i;
  for (; i.prev !== i.next;) {
    const l = i.prev,
      c = i.next;
    if (s ? Ql(i, n, r, s) : jl(i)) {
      (t.push(l.i, i.i, c.i), Ci(i), (i = c.next), (o = c.next));
      continue;
    }
    if (((i = c), i === o)) {
      a
        ? a === 1
          ? ((i = tc(wn(i), t)), wi(i, t, e, n, r, s, 2))
          : a === 2 && ec(i, t, e, n, r, s)
        : wi(wn(i), t, e, n, r, s, 1);
      break;
    }
  }
}
function jl(i) {
  const t = i.prev,
    e = i,
    n = i.next;
  if (oe(t, e, n) >= 0) return !1;
  const r = t.x,
    s = e.x,
    a = n.x,
    o = t.y,
    l = e.y,
    c = n.y,
    u = Math.min(r, s, a),
    h = Math.min(o, l, c),
    d = Math.max(r, s, a),
    f = Math.max(o, l, c);
  let g = n.next;
  for (; g !== t;) {
    if (
      g.x >= u &&
      g.x <= d &&
      g.y >= h &&
      g.y <= f &&
      _i(r, o, s, l, a, c, g.x, g.y) &&
      oe(g.prev, g, g.next) >= 0
    )
      return !1;
    g = g.next;
  }
  return !0;
}
function Ql(i, t, e, n) {
  const r = i.prev,
    s = i,
    a = i.next;
  if (oe(r, s, a) >= 0) return !1;
  const o = r.x,
    l = s.x,
    c = a.x,
    u = r.y,
    h = s.y,
    d = a.y,
    f = Math.min(o, l, c),
    g = Math.min(u, h, d),
    v = Math.max(o, l, c),
    m = Math.max(u, h, d),
    p = xs(f, g, t, e, n),
    A = xs(v, m, t, e, n);
  let E = i.prevZ,
    _ = i.nextZ;
  for (; E && E.z >= p && _ && _.z <= A;) {
    if (
      (E.x >= f &&
        E.x <= v &&
        E.y >= g &&
        E.y <= m &&
        E !== r &&
        E !== a &&
        _i(o, u, l, h, c, d, E.x, E.y) &&
        oe(E.prev, E, E.next) >= 0) ||
      ((E = E.prevZ),
      _.x >= f &&
        _.x <= v &&
        _.y >= g &&
        _.y <= m &&
        _ !== r &&
        _ !== a &&
        _i(o, u, l, h, c, d, _.x, _.y) &&
        oe(_.prev, _, _.next) >= 0)
    )
      return !1;
    _ = _.nextZ;
  }
  for (; E && E.z >= p;) {
    if (
      E.x >= f &&
      E.x <= v &&
      E.y >= g &&
      E.y <= m &&
      E !== r &&
      E !== a &&
      _i(o, u, l, h, c, d, E.x, E.y) &&
      oe(E.prev, E, E.next) >= 0
    )
      return !1;
    E = E.prevZ;
  }
  for (; _ && _.z <= A;) {
    if (
      _.x >= f &&
      _.x <= v &&
      _.y >= g &&
      _.y <= m &&
      _ !== r &&
      _ !== a &&
      _i(o, u, l, h, c, d, _.x, _.y) &&
      oe(_.prev, _, _.next) >= 0
    )
      return !1;
    _ = _.nextZ;
  }
  return !0;
}
function tc(i, t) {
  let e = i;
  do {
    const n = e.prev,
      r = e.next.next;
    (!ni(n, r) &&
      Mo(n, e, e.next, r) &&
      Ri(n, r) &&
      Ri(r, n) &&
      (t.push(n.i, e.i, r.i), Ci(e), Ci(e.next), (e = i = r)),
      (e = e.next));
  } while (e !== i);
  return wn(e);
}
function ec(i, t, e, n, r, s) {
  let a = i;
  do {
    let o = a.next.next;
    for (; o !== a.prev;) {
      if (a.i !== o.i && uc(a, o)) {
        let l = So(a, o);
        ((a = wn(a, a.next)),
          (l = wn(l, l.next)),
          wi(a, t, e, n, r, s, 0),
          wi(l, t, e, n, r, s, 0));
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== i);
}
function nc(i, t, e, n) {
  const r = [];
  for (let s = 0, a = t.length; s < a; s++) {
    const o = t[s] * n,
      l = s < a - 1 ? t[s + 1] * n : i.length,
      c = vo(i, o, l, n, !1);
    (c === c.next && (c.steiner = !0), r.push(cc(c)));
  }
  r.sort(ic);
  for (let s = 0; s < r.length; s++) e = rc(r[s], e);
  return e;
}
function ic(i, t) {
  let e = i.x - t.x;
  if (e === 0 && ((e = i.y - t.y), e === 0)) {
    const n = (i.next.y - i.y) / (i.next.x - i.x),
      r = (t.next.y - t.y) / (t.next.x - t.x);
    e = n - r;
  }
  return e;
}
function rc(i, t) {
  const e = sc(i, t);
  if (!e) return t;
  const n = So(e, i);
  return (wn(n, n.next), wn(e, e.next));
}
function sc(i, t) {
  let e = t;
  const n = i.x,
    r = i.y;
  let s = -1 / 0,
    a;
  if (ni(i, e)) return e;
  do {
    if (ni(i, e.next)) return e.next;
    if (r <= e.y && r >= e.next.y && e.next.y !== e.y) {
      const h = e.x + ((r - e.y) * (e.next.x - e.x)) / (e.next.y - e.y);
      if (
        h <= n &&
        h > s &&
        ((s = h), (a = e.x < e.next.x ? e : e.next), h === n)
      )
        return a;
    }
    e = e.next;
  } while (e !== t);
  if (!a) return null;
  const o = a,
    l = a.x,
    c = a.y;
  let u = 1 / 0;
  e = a;
  do {
    if (
      n >= e.x &&
      e.x >= l &&
      n !== e.x &&
      xo(r < c ? n : s, r, l, c, r < c ? s : n, r, e.x, e.y)
    ) {
      const h = Math.abs(r - e.y) / (n - e.x);
      Ri(e, i) &&
        (h < u || (h === u && (e.x > a.x || (e.x === a.x && ac(a, e))))) &&
        ((a = e), (u = h));
    }
    e = e.next;
  } while (e !== o);
  return a;
}
function ac(i, t) {
  return oe(i.prev, i, t.prev) < 0 && oe(t.next, i, i.next) < 0;
}
function oc(i, t, e, n) {
  let r = i;
  do
    (r.z === 0 && (r.z = xs(r.x, r.y, t, e, n)),
      (r.prevZ = r.prev),
      (r.nextZ = r.next),
      (r = r.next));
  while (r !== i);
  ((r.prevZ.nextZ = null), (r.prevZ = null), lc(r));
}
function lc(i) {
  let t,
    e = 1;
  do {
    let n = i,
      r;
    i = null;
    let s = null;
    for (t = 0; n;) {
      t++;
      let a = n,
        o = 0;
      for (let c = 0; c < e && (o++, (a = a.nextZ), !!a); c++);
      let l = e;
      for (; o > 0 || (l > 0 && a);)
        (o !== 0 && (l === 0 || !a || n.z <= a.z)
          ? ((r = n), (n = n.nextZ), o--)
          : ((r = a), (a = a.nextZ), l--),
          s ? (s.nextZ = r) : (i = r),
          (r.prevZ = s),
          (s = r));
      n = a;
    }
    ((s.nextZ = null), (e *= 2));
  } while (t > 1);
  return i;
}
function xs(i, t, e, n, r) {
  return (
    (i = ((i - e) * r) | 0),
    (t = ((t - n) * r) | 0),
    (i = (i | (i << 8)) & 16711935),
    (i = (i | (i << 4)) & 252645135),
    (i = (i | (i << 2)) & 858993459),
    (i = (i | (i << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    i | (t << 1)
  );
}
function cc(i) {
  let t = i,
    e = i;
  do ((t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next));
  while (t !== i);
  return e;
}
function xo(i, t, e, n, r, s, a, o) {
  return (
    (r - a) * (t - o) >= (i - a) * (s - o) &&
    (i - a) * (n - o) >= (e - a) * (t - o) &&
    (e - a) * (s - o) >= (r - a) * (n - o)
  );
}
function _i(i, t, e, n, r, s, a, o) {
  return !(i === a && t === o) && xo(i, t, e, n, r, s, a, o);
}
function uc(i, t) {
  return (
    i.next.i !== t.i &&
    i.prev.i !== t.i &&
    !hc(i, t) &&
    ((Ri(i, t) &&
      Ri(t, i) &&
      fc(i, t) &&
      (oe(i.prev, i, t.prev) || oe(i, t.prev, t))) ||
      (ni(i, t) && oe(i.prev, i, i.next) > 0 && oe(t.prev, t, t.next) > 0))
  );
}
function oe(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function ni(i, t) {
  return i.x === t.x && i.y === t.y;
}
function Mo(i, t, e, n) {
  const r = cr(oe(i, t, e)),
    s = cr(oe(i, t, n)),
    a = cr(oe(e, n, i)),
    o = cr(oe(e, n, t));
  return !!(
    (r !== s && a !== o) ||
    (r === 0 && lr(i, e, t)) ||
    (s === 0 && lr(i, n, t)) ||
    (a === 0 && lr(e, i, n)) ||
    (o === 0 && lr(e, t, n))
  );
}
function lr(i, t, e) {
  return (
    t.x <= Math.max(i.x, e.x) &&
    t.x >= Math.min(i.x, e.x) &&
    t.y <= Math.max(i.y, e.y) &&
    t.y >= Math.min(i.y, e.y)
  );
}
function cr(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function hc(i, t) {
  let e = i;
  do {
    if (
      e.i !== i.i &&
      e.next.i !== i.i &&
      e.i !== t.i &&
      e.next.i !== t.i &&
      Mo(e, e.next, i, t)
    )
      return !0;
    e = e.next;
  } while (e !== i);
  return !1;
}
function Ri(i, t) {
  return oe(i.prev, i, i.next) < 0
    ? oe(i, t, i.next) >= 0 && oe(i, i.prev, t) >= 0
    : oe(i, t, i.prev) < 0 || oe(i, i.next, t) < 0;
}
function fc(i, t) {
  let e = i,
    n = !1;
  const r = (i.x + t.x) / 2,
    s = (i.y + t.y) / 2;
  do
    (e.y > s != e.next.y > s &&
      e.next.y !== e.y &&
      r < ((e.next.x - e.x) * (s - e.y)) / (e.next.y - e.y) + e.x &&
      (n = !n),
      (e = e.next));
  while (e !== i);
  return n;
}
function So(i, t) {
  const e = Ms(i.i, i.x, i.y),
    n = Ms(t.i, t.x, t.y),
    r = i.next,
    s = t.prev;
  return (
    (i.next = t),
    (t.prev = i),
    (e.next = r),
    (r.prev = e),
    (n.next = e),
    (e.prev = n),
    (s.next = n),
    (n.prev = s),
    n
  );
}
function ma(i, t, e, n) {
  const r = Ms(i, t, e);
  return (
    n
      ? ((r.next = n.next), (r.prev = n), (n.next.prev = r), (n.next = r))
      : ((r.prev = r), (r.next = r)),
    r
  );
}
function Ci(i) {
  ((i.next.prev = i.prev),
    (i.prev.next = i.next),
    i.prevZ && (i.prevZ.nextZ = i.nextZ),
    i.nextZ && (i.nextZ.prevZ = i.prevZ));
}
function Ms(i, t, e) {
  return {
    i,
    x: t,
    y: e,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1,
  };
}
function dc(i, t, e, n) {
  let r = 0;
  for (let s = t, a = e - n; s < e; s += n)
    ((r += (i[a] - i[s]) * (i[s + 1] + i[a + 1])), (a = s));
  return r;
}
class pc {
  static triangulate(t, e, n = 2) {
    return Kl(t, e, n);
  }
}
class Ei {
  static area(t) {
    const e = t.length;
    let n = 0;
    for (let r = e - 1, s = 0; s < e; r = s++)
      n += t[r].x * t[s].y - t[s].x * t[r].y;
    return n * 0.5;
  }
  static isClockWise(t) {
    return Ei.area(t) < 0;
  }
  static triangulateShape(t, e) {
    const n = [],
      r = [],
      s = [];
    (ga(t), _a(n, t));
    let a = t.length;
    e.forEach(ga);
    for (let l = 0; l < e.length; l++)
      (r.push(a), (a += e[l].length), _a(n, e[l]));
    const o = pc.triangulate(n, r);
    for (let l = 0; l < o.length; l += 3) s.push(o.slice(l, l + 3));
    return s;
  }
}
function ga(i) {
  const t = i.length;
  t > 2 && i[t - 1].equals(i[0]) && i.pop();
}
function _a(i, t) {
  for (let e = 0; e < t.length; e++) (i.push(t[e].x), i.push(t[e].y));
}
class yo extends Er {
  constructor(t = 1, e = 0) {
    const n = (1 + Math.sqrt(5)) / 2,
      r = [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      s = [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ];
    (super(r, s, t, e),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: t, detail: e }));
  }
  static fromJSON(t) {
    return new yo(t.radius, t.detail);
  }
}
class Eo extends Er {
  constructor(t = 1, e = 0) {
    const n = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
      r = [
        0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2,
      ];
    (super(n, r, t, e),
      (this.type = "OctahedronGeometry"),
      (this.parameters = { radius: t, detail: e }));
  }
  static fromJSON(t) {
    return new Eo(t.radius, t.detail);
  }
}
class Li extends de {
  constructor(t = 1, e = 1, n = 1, r = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: r,
      }));
    const s = t / 2,
      a = e / 2,
      o = Math.floor(n),
      l = Math.floor(r),
      c = o + 1,
      u = l + 1,
      h = t / o,
      d = e / l,
      f = [],
      g = [],
      v = [],
      m = [];
    for (let p = 0; p < u; p++) {
      const A = p * d - a;
      for (let E = 0; E < c; E++) {
        const _ = E * h - s;
        (g.push(_, -A, 0), v.push(0, 0, 1), m.push(E / o), m.push(1 - p / l));
      }
    }
    for (let p = 0; p < l; p++)
      for (let A = 0; A < o; A++) {
        const E = A + c * p,
          _ = A + c * (p + 1),
          b = A + 1 + c * (p + 1),
          T = A + 1 + c * p;
        (f.push(E, _, T), f.push(_, b, T));
      }
    (this.setIndex(f),
      this.setAttribute("position", new Wt(g, 3)),
      this.setAttribute("normal", new Wt(v, 3)),
      this.setAttribute("uv", new Wt(m, 2)));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new Li(t.width, t.height, t.widthSegments, t.heightSegments);
  }
}
class To extends de {
  constructor(t = 0.5, e = 1, n = 32, r = 1, s = 0, a = Math.PI * 2) {
    (super(),
      (this.type = "RingGeometry"),
      (this.parameters = {
        innerRadius: t,
        outerRadius: e,
        thetaSegments: n,
        phiSegments: r,
        thetaStart: s,
        thetaLength: a,
      }),
      (n = Math.max(3, n)),
      (r = Math.max(1, r)));
    const o = [],
      l = [],
      c = [],
      u = [];
    let h = t;
    const d = (e - t) / r,
      f = new L(),
      g = new ot();
    for (let v = 0; v <= r; v++) {
      for (let m = 0; m <= n; m++) {
        const p = s + (m / n) * a;
        ((f.x = h * Math.cos(p)),
          (f.y = h * Math.sin(p)),
          l.push(f.x, f.y, f.z),
          c.push(0, 0, 1),
          (g.x = (f.x / e + 1) / 2),
          (g.y = (f.y / e + 1) / 2),
          u.push(g.x, g.y));
      }
      h += d;
    }
    for (let v = 0; v < r; v++) {
      const m = v * (n + 1);
      for (let p = 0; p < n; p++) {
        const A = p + m,
          E = A,
          _ = A + n + 1,
          b = A + n + 2,
          T = A + 1;
        (o.push(E, _, T), o.push(_, b, T));
      }
    }
    (this.setIndex(o),
      this.setAttribute("position", new Wt(l, 3)),
      this.setAttribute("normal", new Wt(c, 3)),
      this.setAttribute("uv", new Wt(u, 2)));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new To(
      t.innerRadius,
      t.outerRadius,
      t.thetaSegments,
      t.phiSegments,
      t.thetaStart,
      t.thetaLength,
    );
  }
}
class Ao extends de {
  constructor(
    t = new $l([new ot(0, 0.5), new ot(-0.5, -0.5), new ot(0.5, -0.5)]),
    e = 12,
  ) {
    (super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: t, curveSegments: e }));
    const n = [],
      r = [],
      s = [],
      a = [];
    let o = 0,
      l = 0;
    if (Array.isArray(t) === !1) c(t);
    else
      for (let u = 0; u < t.length; u++)
        (c(t[u]), this.addGroup(o, l, u), (o += l), (l = 0));
    (this.setIndex(n),
      this.setAttribute("position", new Wt(r, 3)),
      this.setAttribute("normal", new Wt(s, 3)),
      this.setAttribute("uv", new Wt(a, 2)));
    function c(u) {
      const h = r.length / 3,
        d = u.extractPoints(e);
      let f = d.shape;
      const g = d.holes;
      Ei.isClockWise(f) === !1 && (f = f.reverse());
      for (let m = 0, p = g.length; m < p; m++) {
        const A = g[m];
        Ei.isClockWise(A) === !0 && (g[m] = A.reverse());
      }
      const v = Ei.triangulateShape(f, g);
      for (let m = 0, p = g.length; m < p; m++) {
        const A = g[m];
        f = f.concat(A);
      }
      for (let m = 0, p = f.length; m < p; m++) {
        const A = f[m];
        (r.push(A.x, A.y, 0), s.push(0, 0, 1), a.push(A.x, A.y));
      }
      for (let m = 0, p = v.length; m < p; m++) {
        const A = v[m],
          E = A[0] + h,
          _ = A[1] + h,
          b = A[2] + h;
        (n.push(E, _, b), (l += 3));
      }
    }
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  toJSON() {
    const t = super.toJSON(),
      e = this.parameters.shapes;
    return mc(e, t);
  }
  static fromJSON(t, e) {
    const n = [];
    for (let r = 0, s = t.shapes.length; r < s; r++) {
      const a = e[t.shapes[r]];
      n.push(a);
    }
    return new Ao(n, t.curveSegments);
  }
}
function mc(i, t) {
  if (((t.shapes = []), Array.isArray(i)))
    for (let e = 0, n = i.length; e < n; e++) {
      const r = i[e];
      t.shapes.push(r.uuid);
    }
  else t.shapes.push(i.uuid);
  return t;
}
class Ui extends de {
  constructor(
    t = 1,
    e = 32,
    n = 16,
    r = 0,
    s = Math.PI * 2,
    a = 0,
    o = Math.PI,
  ) {
    (super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: r,
        phiLength: s,
        thetaStart: a,
        thetaLength: o,
      }),
      (e = Math.max(3, Math.floor(e))),
      (n = Math.max(2, Math.floor(n))));
    const l = Math.min(a + o, Math.PI);
    let c = 0;
    const u = [],
      h = new L(),
      d = new L(),
      f = [],
      g = [],
      v = [],
      m = [];
    for (let p = 0; p <= n; p++) {
      const A = [],
        E = p / n;
      let _ = 0;
      p === 0 && a === 0
        ? (_ = 0.5 / e)
        : p === n && l === Math.PI && (_ = -0.5 / e);
      for (let b = 0; b <= e; b++) {
        const T = b / e;
        ((h.x = -t * Math.cos(r + T * s) * Math.sin(a + E * o)),
          (h.y = t * Math.cos(a + E * o)),
          (h.z = t * Math.sin(r + T * s) * Math.sin(a + E * o)),
          g.push(h.x, h.y, h.z),
          d.copy(h).normalize(),
          v.push(d.x, d.y, d.z),
          m.push(T + _, 1 - E),
          A.push(c++));
      }
      u.push(A);
    }
    for (let p = 0; p < n; p++)
      for (let A = 0; A < e; A++) {
        const E = u[p][A + 1],
          _ = u[p][A],
          b = u[p + 1][A],
          T = u[p + 1][A + 1];
        ((p !== 0 || a > 0) && f.push(E, _, T),
          (p !== n - 1 || l < Math.PI) && f.push(_, b, T));
      }
    (this.setIndex(f),
      this.setAttribute("position", new Wt(g, 3)),
      this.setAttribute("normal", new Wt(v, 3)),
      this.setAttribute("uv", new Wt(m, 2)));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new Ui(
      t.radius,
      t.widthSegments,
      t.heightSegments,
      t.phiStart,
      t.phiLength,
      t.thetaStart,
      t.thetaLength,
    );
  }
}
class Ti extends de {
  constructor(t = 1, e = 0.4, n = 12, r = 48, s = Math.PI * 2) {
    (super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: t,
        tube: e,
        radialSegments: n,
        tubularSegments: r,
        arc: s,
      }),
      (n = Math.floor(n)),
      (r = Math.floor(r)));
    const a = [],
      o = [],
      l = [],
      c = [],
      u = new L(),
      h = new L(),
      d = new L();
    for (let f = 0; f <= n; f++)
      for (let g = 0; g <= r; g++) {
        const v = (g / r) * s,
          m = (f / n) * Math.PI * 2;
        ((h.x = (t + e * Math.cos(m)) * Math.cos(v)),
          (h.y = (t + e * Math.cos(m)) * Math.sin(v)),
          (h.z = e * Math.sin(m)),
          o.push(h.x, h.y, h.z),
          (u.x = t * Math.cos(v)),
          (u.y = t * Math.sin(v)),
          d.subVectors(h, u).normalize(),
          l.push(d.x, d.y, d.z),
          c.push(g / r),
          c.push(f / n));
      }
    for (let f = 1; f <= n; f++)
      for (let g = 1; g <= r; g++) {
        const v = (r + 1) * f + g - 1,
          m = (r + 1) * (f - 1) + g - 1,
          p = (r + 1) * (f - 1) + g,
          A = (r + 1) * f + g;
        (a.push(v, m, A), a.push(m, p, A));
      }
    (this.setIndex(a),
      this.setAttribute("position", new Wt(o, 3)),
      this.setAttribute("normal", new Wt(l, 3)),
      this.setAttribute("uv", new Wt(c, 2)));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new Ti(t.radius, t.tube, t.radialSegments, t.tubularSegments, t.arc);
  }
}
class bo extends de {
  constructor(
    t = new go(new L(-1, -1, 0), new L(-1, 1, 0), new L(1, 1, 0)),
    e = 64,
    n = 1,
    r = 8,
    s = !1,
  ) {
    (super(),
      (this.type = "TubeGeometry"),
      (this.parameters = {
        path: t,
        tubularSegments: e,
        radius: n,
        radialSegments: r,
        closed: s,
      }));
    const a = t.computeFrenetFrames(e, s);
    ((this.tangents = a.tangents),
      (this.normals = a.normals),
      (this.binormals = a.binormals));
    const o = new L(),
      l = new L(),
      c = new ot();
    let u = new L();
    const h = [],
      d = [],
      f = [],
      g = [];
    (v(),
      this.setIndex(g),
      this.setAttribute("position", new Wt(h, 3)),
      this.setAttribute("normal", new Wt(d, 3)),
      this.setAttribute("uv", new Wt(f, 2)));
    function v() {
      for (let E = 0; E < e; E++) m(E);
      (m(s === !1 ? e : 0), A(), p());
    }
    function m(E) {
      u = t.getPointAt(E / e, u);
      const _ = a.normals[E],
        b = a.binormals[E];
      for (let T = 0; T <= r; T++) {
        const w = (T / r) * Math.PI * 2,
          C = Math.sin(w),
          M = -Math.cos(w);
        ((l.x = M * _.x + C * b.x),
          (l.y = M * _.y + C * b.y),
          (l.z = M * _.z + C * b.z),
          l.normalize(),
          d.push(l.x, l.y, l.z),
          (o.x = u.x + n * l.x),
          (o.y = u.y + n * l.y),
          (o.z = u.z + n * l.z),
          h.push(o.x, o.y, o.z));
      }
    }
    function p() {
      for (let E = 1; E <= e; E++)
        for (let _ = 1; _ <= r; _++) {
          const b = (r + 1) * (E - 1) + (_ - 1),
            T = (r + 1) * E + (_ - 1),
            w = (r + 1) * E + _,
            C = (r + 1) * (E - 1) + _;
          (g.push(b, T, C), g.push(T, w, C));
        }
    }
    function A() {
      for (let E = 0; E <= e; E++)
        for (let _ = 0; _ <= r; _++)
          ((c.x = E / e), (c.y = _ / r), f.push(c.x, c.y));
    }
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  toJSON() {
    const t = super.toJSON();
    return ((t.path = this.parameters.path.toJSON()), t);
  }
  static fromJSON(t) {
    return new bo(
      new vs[t.path.type]().fromJSON(t.path),
      t.tubularSegments,
      t.radius,
      t.radialSegments,
      t.closed,
    );
  }
}
class Tr extends fn {
  constructor(t) {
    (super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new zt(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new zt(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = 0),
      (this.normalScale = new ot(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Ye()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.defines = { STANDARD: "" }),
      this.color.copy(t.color),
      (this.roughness = t.roughness),
      (this.metalness = t.metalness),
      (this.map = t.map),
      (this.lightMap = t.lightMap),
      (this.lightMapIntensity = t.lightMapIntensity),
      (this.aoMap = t.aoMap),
      (this.aoMapIntensity = t.aoMapIntensity),
      this.emissive.copy(t.emissive),
      (this.emissiveMap = t.emissiveMap),
      (this.emissiveIntensity = t.emissiveIntensity),
      (this.bumpMap = t.bumpMap),
      (this.bumpScale = t.bumpScale),
      (this.normalMap = t.normalMap),
      (this.normalMapType = t.normalMapType),
      this.normalScale.copy(t.normalScale),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.roughnessMap = t.roughnessMap),
      (this.metalnessMap = t.metalnessMap),
      (this.alphaMap = t.alphaMap),
      (this.envMap = t.envMap),
      this.envMapRotation.copy(t.envMapRotation),
      (this.envMapIntensity = t.envMapIntensity),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      (this.wireframeLinecap = t.wireframeLinecap),
      (this.wireframeLinejoin = t.wireframeLinejoin),
      (this.flatShading = t.flatShading),
      (this.fog = t.fog),
      this
    );
  }
}
class gc extends fn {
  constructor(t) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = 3200),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.depthPacking = t.depthPacking),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      (this.wireframe = t.wireframe),
      (this.wireframeLinewidth = t.wireframeLinewidth),
      this
    );
  }
}
class _c extends fn {
  constructor(t) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(t));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.map = t.map),
      (this.alphaMap = t.alphaMap),
      (this.displacementMap = t.displacementMap),
      (this.displacementScale = t.displacementScale),
      (this.displacementBias = t.displacementBias),
      this
    );
  }
}
const ns = {
  enabled: !1,
  files: {},
  add: function (i, t) {
    this.enabled !== !1 && (this.files[i] = t);
  },
  get: function (i) {
    if (this.enabled !== !1) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
class vc {
  constructor(t, e, n) {
    const r = this;
    let s = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    ((this.onStart = void 0),
      (this.onLoad = t),
      (this.onProgress = e),
      (this.onError = n),
      (this.abortController = new AbortController()),
      (this.itemStart = function (u) {
        (o++, s === !1 && r.onStart !== void 0 && r.onStart(u, a, o), (s = !0));
      }),
      (this.itemEnd = function (u) {
        (a++,
          r.onProgress !== void 0 && r.onProgress(u, a, o),
          a === o && ((s = !1), r.onLoad !== void 0 && r.onLoad()));
      }),
      (this.itemError = function (u) {
        r.onError !== void 0 && r.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return ((l = u), this);
      }),
      (this.addHandler = function (u, h) {
        return (c.push(u, h), this);
      }),
      (this.removeHandler = function (u) {
        const h = c.indexOf(u);
        return (h !== -1 && c.splice(h, 2), this);
      }),
      (this.getHandler = function (u) {
        for (let h = 0, d = c.length; h < d; h += 2) {
          const f = c[h],
            g = c[h + 1];
          if ((f.global && (f.lastIndex = 0), f.test(u))) return g;
        }
        return null;
      }),
      (this.abort = function () {
        return (
          this.abortController.abort(),
          (this.abortController = new AbortController()),
          this
        );
      }));
  }
}
const xc = new vc();
class Cs {
  constructor(t) {
    ((this.manager = t !== void 0 ? t : xc),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {}));
  }
  load() {}
  loadAsync(t, e) {
    const n = this;
    return new Promise(function (r, s) {
      n.load(t, r, e, s);
    });
  }
  parse() {}
  setCrossOrigin(t) {
    return ((this.crossOrigin = t), this);
  }
  setWithCredentials(t) {
    return ((this.withCredentials = t), this);
  }
  setPath(t) {
    return ((this.path = t), this);
  }
  setResourcePath(t) {
    return ((this.resourcePath = t), this);
  }
  setRequestHeader(t) {
    return ((this.requestHeader = t), this);
  }
  abort() {
    return this;
  }
}
Cs.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Jn = new WeakMap();
class Mc extends Cs {
  constructor(t) {
    super(t);
  }
  load(t, e, n, r) {
    (this.path !== void 0 && (t = this.path + t),
      (t = this.manager.resolveURL(t)));
    const s = this,
      a = ns.get(`image:${t}`);
    if (a !== void 0) {
      if (a.complete === !0)
        (s.manager.itemStart(t),
          setTimeout(function () {
            (e && e(a), s.manager.itemEnd(t));
          }, 0));
      else {
        let h = Jn.get(a);
        (h === void 0 && ((h = []), Jn.set(a, h)),
          h.push({ onLoad: e, onError: r }));
      }
      return a;
    }
    const o = Ai("img");
    function l() {
      (u(), e && e(this));
      const h = Jn.get(this) || [];
      for (let d = 0; d < h.length; d++) {
        const f = h[d];
        f.onLoad && f.onLoad(this);
      }
      (Jn.delete(this), s.manager.itemEnd(t));
    }
    function c(h) {
      (u(), r && r(h), ns.remove(`image:${t}`));
      const d = Jn.get(this) || [];
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        g.onError && g.onError(h);
      }
      (Jn.delete(this), s.manager.itemError(t), s.manager.itemEnd(t));
    }
    function u() {
      (o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1));
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      t.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      ns.add(`image:${t}`, o),
      s.manager.itemStart(t),
      (o.src = t),
      o
    );
  }
}
class wo extends Cs {
  constructor(t) {
    super(t);
  }
  load(t, e, n, r) {
    const s = new xe(),
      a = new Mc(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        t,
        function (o) {
          ((s.image = o), (s.needsUpdate = !0), e !== void 0 && e(s));
        },
        n,
        r,
      ),
      s
    );
  }
}
class Ar extends ce {
  constructor(t, e = 1) {
    (super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new zt(t)),
      (this.intensity = e));
  }
  dispose() {}
  copy(t, e) {
    return (
      super.copy(t, e),
      this.color.copy(t.color),
      (this.intensity = t.intensity),
      this
    );
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.color = this.color.getHex()),
      (e.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (e.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (e.object.distance = this.distance),
      this.angle !== void 0 && (e.object.angle = this.angle),
      this.decay !== void 0 && (e.object.decay = this.decay),
      this.penumbra !== void 0 && (e.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (e.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (e.object.target = this.target.uuid),
      e
    );
  }
}
class bp extends Ar {
  constructor(t, e, n) {
    (super(t, n),
      (this.isHemisphereLight = !0),
      (this.type = "HemisphereLight"),
      this.position.copy(ce.DEFAULT_UP),
      this.updateMatrix(),
      (this.groundColor = new zt(e)));
  }
  copy(t, e) {
    return (super.copy(t, e), this.groundColor.copy(t.groundColor), this);
  }
}
const is = new Zt(),
  va = new L(),
  xa = new L();
class Ps {
  constructor(t) {
    ((this.camera = t),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new ot(512, 512)),
      (this.mapType = 1009),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Zt()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new As()),
      (this._frameExtents = new ot(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Kt(0, 0, 1, 1)]));
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(t) {
    const e = this.camera,
      n = this.matrix;
    (va.setFromMatrixPosition(t.matrixWorld),
      e.position.copy(va),
      xa.setFromMatrixPosition(t.target.matrixWorld),
      e.lookAt(xa),
      e.updateMatrixWorld(),
      is.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        is,
        e.coordinateSystem,
        e.reversedDepth,
      ),
      e.reversedDepth
        ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1)
        : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(is));
  }
  getViewport(t) {
    return this._viewports[t];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
  }
  copy(t) {
    return (
      (this.camera = t.camera.clone()),
      (this.intensity = t.intensity),
      (this.bias = t.bias),
      (this.radius = t.radius),
      (this.autoUpdate = t.autoUpdate),
      (this.needsUpdate = t.needsUpdate),
      (this.normalBias = t.normalBias),
      (this.blurSamples = t.blurSamples),
      this.mapSize.copy(t.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const t = {};
    return (
      this.intensity !== 1 && (t.intensity = this.intensity),
      this.bias !== 0 && (t.bias = this.bias),
      this.normalBias !== 0 && (t.normalBias = this.normalBias),
      this.radius !== 1 && (t.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (t.mapSize = this.mapSize.toArray()),
      (t.camera = this.camera.toJSON(!1).object),
      delete t.camera.matrix,
      t
    );
  }
}
class Sc extends Ps {
  constructor() {
    (super(new Ue(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1),
      (this.aspect = 1));
  }
  updateMatrices(t) {
    const e = this.camera,
      n = ti * 2 * t.angle * this.focus,
      r = (this.mapSize.width / this.mapSize.height) * this.aspect,
      s = t.distance || e.far;
    ((n !== e.fov || r !== e.aspect || s !== e.far) &&
      ((e.fov = n), (e.aspect = r), (e.far = s), e.updateProjectionMatrix()),
      super.updateMatrices(t));
  }
  copy(t) {
    return (super.copy(t), (this.focus = t.focus), this);
  }
}
class wp extends Ar {
  constructor(t, e, n = 0, r = Math.PI / 3, s = 0, a = 2) {
    (super(t, e),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(ce.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new ce()),
      (this.distance = n),
      (this.angle = r),
      (this.penumbra = s),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new Sc()));
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(t) {
    this.intensity = t / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.distance = t.distance),
      (this.angle = t.angle),
      (this.penumbra = t.penumbra),
      (this.decay = t.decay),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
const Ma = new Zt(),
  gi = new L(),
  rs = new L();
class yc extends Ps {
  constructor() {
    (super(new Ue(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new ot(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Kt(2, 1, 1, 1),
        new Kt(0, 1, 1, 1),
        new Kt(3, 1, 1, 1),
        new Kt(1, 1, 1, 1),
        new Kt(3, 0, 1, 1),
        new Kt(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new L(1, 0, 0),
        new L(-1, 0, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
        new L(0, 1, 0),
        new L(0, -1, 0),
      ]),
      (this._cubeUps = [
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
      ]));
  }
  updateMatrices(t, e = 0) {
    const n = this.camera,
      r = this.matrix,
      s = t.distance || n.far;
    (s !== n.far && ((n.far = s), n.updateProjectionMatrix()),
      gi.setFromMatrixPosition(t.matrixWorld),
      n.position.copy(gi),
      rs.copy(n.position),
      rs.add(this._cubeDirections[e]),
      n.up.copy(this._cubeUps[e]),
      n.lookAt(rs),
      n.updateMatrixWorld(),
      r.makeTranslation(-gi.x, -gi.y, -gi.z),
      Ma.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        Ma,
        n.coordinateSystem,
        n.reversedDepth,
      ));
  }
}
class Rp extends Ar {
  constructor(t, e, n = 0, r = 2) {
    (super(t, e),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = r),
      (this.shadow = new yc()));
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(t) {
    this.intensity = t / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.distance = t.distance),
      (this.decay = t.decay),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
class Ro extends eo {
  constructor(t = -1, e = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = t),
      (this.right = e),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(t, e) {
    return (
      super.copy(t, e),
      (this.left = t.left),
      (this.right = t.right),
      (this.top = t.top),
      (this.bottom = t.bottom),
      (this.near = t.near),
      (this.far = t.far),
      (this.zoom = t.zoom),
      (this.view = t.view === null ? null : Object.assign({}, t.view)),
      this
    );
  }
  setViewOffset(t, e, n, r, s, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = t),
      (this.view.fullHeight = e),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const t = (this.right - this.left) / (2 * this.zoom),
      e = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - t,
      a = n + t,
      o = r + e,
      l = r - e;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= u * this.view.offsetY),
        (l = o - u * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      s,
      a,
      o,
      l,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(t) {
    const e = super.toJSON(t);
    return (
      (e.object.zoom = this.zoom),
      (e.object.left = this.left),
      (e.object.right = this.right),
      (e.object.top = this.top),
      (e.object.bottom = this.bottom),
      (e.object.near = this.near),
      (e.object.far = this.far),
      this.view !== null && (e.object.view = Object.assign({}, this.view)),
      e
    );
  }
}
class Ec extends Ps {
  constructor() {
    (super(new Ro(-5, 5, 5, -5, 0.5, 500)),
      (this.isDirectionalLightShadow = !0));
  }
}
class Cp extends Ar {
  constructor(t, e) {
    (super(t, e),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(ce.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new ce()),
      (this.shadow = new Ec()));
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(t) {
    return (
      super.copy(t),
      (this.target = t.target.clone()),
      (this.shadow = t.shadow.clone()),
      this
    );
  }
}
class Tc extends Ue {
  constructor(t = []) {
    (super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = t));
  }
}
function Sa(i, t, e, n) {
  const r = Ac(n);
  switch (e) {
    case 1021:
      return i * t;
    case 1028:
      return ((i * t) / r.components) * r.byteLength;
    case 1029:
      return ((i * t) / r.components) * r.byteLength;
    case 1030:
      return ((i * t * 2) / r.components) * r.byteLength;
    case 1031:
      return ((i * t * 2) / r.components) * r.byteLength;
    case 1022:
      return ((i * t * 3) / r.components) * r.byteLength;
    case 1023:
      return ((i * t * 4) / r.components) * r.byteLength;
    case 1033:
      return ((i * t * 4) / r.components) * r.byteLength;
    case 33776:
    case 33777:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 35841:
    case 35843:
      return (Math.max(i, 16) * Math.max(t, 8)) / 4;
    case 35840:
    case 35842:
      return (Math.max(i, 8) * Math.max(t, 8)) / 2;
    case 36196:
    case 37492:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case 37496:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 37808:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case 37809:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case 37810:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case 37811:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case 37812:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case 37813:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case 37814:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case 37815:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case 37816:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case 37817:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case 37818:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case 37819:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case 37820:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case 37821:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Ac(i) {
  switch (i) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
    case 35899:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: "180" } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = "180"));
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function Co() {
  let i = null,
    t = !1,
    e = null,
    n = null;
  function r(s, a) {
    (e(s, a), (n = i.requestAnimationFrame(r)));
  }
  return {
    start: function () {
      t !== !0 && e !== null && ((n = i.requestAnimationFrame(r)), (t = !0));
    },
    stop: function () {
      (i.cancelAnimationFrame(n), (t = !1));
    },
    setAnimationLoop: function (s) {
      e = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function bc(i) {
  const t = new WeakMap();
  function e(o, l) {
    const c = o.array,
      u = o.usage,
      h = c.byteLength,
      d = i.createBuffer();
    (i.bindBuffer(l, d), i.bufferData(l, c, u), o.onUploadCallback());
    let f;
    if (c instanceof Float32Array) f = i.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array)
      f = i.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (f = i.HALF_FLOAT) : (f = i.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) f = i.SHORT;
    else if (c instanceof Uint32Array) f = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) f = i.INT;
    else if (c instanceof Int8Array) f = i.BYTE;
    else if (c instanceof Uint8Array) f = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) f = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + c,
      );
    return {
      buffer: d,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: h,
    };
  }
  function n(o, l, c) {
    const u = l.array,
      h = l.updateRanges;
    if ((i.bindBuffer(c, o), h.length === 0)) i.bufferSubData(c, 0, u);
    else {
      h.sort((f, g) => f.start - g.start);
      let d = 0;
      for (let f = 1; f < h.length; f++) {
        const g = h[d],
          v = h[f];
        v.start <= g.start + g.count + 1
          ? (g.count = Math.max(g.count, v.start + v.count - g.start))
          : (++d, (h[d] = v));
      }
      h.length = d + 1;
      for (let f = 0, g = h.length; f < g; f++) {
        const v = h[f];
        i.bufferSubData(c, v.start * u.BYTES_PER_ELEMENT, u, v.start, v.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return (o.isInterleavedBufferAttribute && (o = o.data), t.get(o));
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = t.get(o);
    l && (i.deleteBuffer(l.buffer), t.delete(o));
  }
  function a(o, l) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const u = t.get(o);
      (!u || u.version < o.version) &&
        t.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const c = t.get(o);
    if (c === void 0) t.set(o, e(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(c.buffer, o, l), (c.version = o.version));
    }
  }
  return { get: r, remove: s, update: a };
}
var wc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Rc = `#ifdef USE_ALPHAHASH
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
#endif`,
  Cc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Pc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Dc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Lc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Uc = `#ifdef USE_AOMAP
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
#endif`,
  Ic = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Fc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  Nc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Oc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Bc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  zc = `float G_BlinnPhong_Implicit( ) {
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
} // validated`,
  Gc = `#ifdef USE_IRIDESCENCE
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
#endif`,
  Hc = `#ifdef USE_BUMPMAP
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
#endif`,
  Vc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`,
  kc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  Wc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Xc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  qc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Yc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Zc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  Jc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  $c = `#define PI 3.141592653589793
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
} // validated`,
  Kc = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,
  jc = `vec3 transformedNormal = objectNormal;
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
#endif`,
  Qc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  tu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  eu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  nu = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  iu = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  ru = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  su = `#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,
  au = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  ou = `#ifdef USE_ENVMAP
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
#endif`,
  lu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  cu = `#ifdef USE_ENVMAP
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
#endif`,
  uu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  hu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  fu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  du = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  pu = `#ifdef USE_GRADIENTMAP
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
}`,
  mu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  gu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  _u = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  vu = `uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,
  xu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,
  Mu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Su = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  yu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Eu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Tu = `PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,
  Au = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,
  bu = `
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,
  wu = `#if defined( RE_IndirectDiffuse )
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
#endif`,
  Ru = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Cu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Pu = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Du = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Lu = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Uu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Iu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Fu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,
  Nu = `#if defined( USE_POINTS_UV )
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
#endif`,
  Ou = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Bu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  zu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Gu = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Hu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Vu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  ku = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Wu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,
  Xu = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,
  qu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Yu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Zu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  Ju = `#ifdef USE_NORMALMAP
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
#endif`,
  $u = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Ku = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  ju = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Qu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  th = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  eh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,
  nh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  ih = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  rh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  sh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  ah = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  oh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  lh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  ch = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  uh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,
  hh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  fh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  dh = `#ifdef USE_SKINNING
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
#endif`,
  ph = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  mh = `#ifdef USE_SKINNING
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
#endif`,
  gh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  _h = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  vh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  xh = `#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Mh = `#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Sh = `#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  yh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Eh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Th = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,
  Ah = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const bh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  wh = `uniform sampler2D t2D;
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
}`,
  Rh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Ch = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Ph = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Dh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Lh = `#include <common>
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
	#include <morphinstance_vertex>
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
}`,
  Uh = `#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  Ih = `#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,
  Fh = `#define DISTANCE
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
}`,
  Nh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Oh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Bh = `uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  zh = `uniform vec3 diffuse;
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
}`,
  Gh = `#include <common>
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
	#include <morphinstance_vertex>
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
}`,
  Hh = `uniform vec3 diffuse;
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
}`,
  Vh = `#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,
  kh = `#define LAMBERT
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
}`,
  Wh = `#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,
  Xh = `#define MATCAP
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
}`,
  qh = `#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,
  Yh = `#define NORMAL
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
}`,
  Zh = `#define PHONG
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
	#include <morphinstance_vertex>
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
}`,
  Jh = `#define PHONG
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
}`,
  $h = `#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,
  Kh = `#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,
  jh = `#define TOON
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
	#include <morphinstance_vertex>
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
}`,
  Qh = `#define TOON
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
}`,
  tf = `uniform float size;
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
	#include <morphinstance_vertex>
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
}`,
  ef = `uniform vec3 diffuse;
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
}`,
  nf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,
  rf = `uniform vec3 color;
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
}`,
  sf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,
  af = `uniform vec3 diffuse;
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
}`,
  Nt = {
    alphahash_fragment: wc,
    alphahash_pars_fragment: Rc,
    alphamap_fragment: Cc,
    alphamap_pars_fragment: Pc,
    alphatest_fragment: Dc,
    alphatest_pars_fragment: Lc,
    aomap_fragment: Uc,
    aomap_pars_fragment: Ic,
    batching_pars_vertex: Fc,
    batching_vertex: Nc,
    begin_vertex: Oc,
    beginnormal_vertex: Bc,
    bsdfs: zc,
    iridescence_fragment: Gc,
    bumpmap_pars_fragment: Hc,
    clipping_planes_fragment: Vc,
    clipping_planes_pars_fragment: kc,
    clipping_planes_pars_vertex: Wc,
    clipping_planes_vertex: Xc,
    color_fragment: qc,
    color_pars_fragment: Yc,
    color_pars_vertex: Zc,
    color_vertex: Jc,
    common: $c,
    cube_uv_reflection_fragment: Kc,
    defaultnormal_vertex: jc,
    displacementmap_pars_vertex: Qc,
    displacementmap_vertex: tu,
    emissivemap_fragment: eu,
    emissivemap_pars_fragment: nu,
    colorspace_fragment: iu,
    colorspace_pars_fragment: ru,
    envmap_fragment: su,
    envmap_common_pars_fragment: au,
    envmap_pars_fragment: ou,
    envmap_pars_vertex: lu,
    envmap_physical_pars_fragment: xu,
    envmap_vertex: cu,
    fog_vertex: uu,
    fog_pars_vertex: hu,
    fog_fragment: fu,
    fog_pars_fragment: du,
    gradientmap_pars_fragment: pu,
    lightmap_pars_fragment: mu,
    lights_lambert_fragment: gu,
    lights_lambert_pars_fragment: _u,
    lights_pars_begin: vu,
    lights_toon_fragment: Mu,
    lights_toon_pars_fragment: Su,
    lights_phong_fragment: yu,
    lights_phong_pars_fragment: Eu,
    lights_physical_fragment: Tu,
    lights_physical_pars_fragment: Au,
    lights_fragment_begin: bu,
    lights_fragment_maps: wu,
    lights_fragment_end: Ru,
    logdepthbuf_fragment: Cu,
    logdepthbuf_pars_fragment: Pu,
    logdepthbuf_pars_vertex: Du,
    logdepthbuf_vertex: Lu,
    map_fragment: Uu,
    map_pars_fragment: Iu,
    map_particle_fragment: Fu,
    map_particle_pars_fragment: Nu,
    metalnessmap_fragment: Ou,
    metalnessmap_pars_fragment: Bu,
    morphinstance_vertex: zu,
    morphcolor_vertex: Gu,
    morphnormal_vertex: Hu,
    morphtarget_pars_vertex: Vu,
    morphtarget_vertex: ku,
    normal_fragment_begin: Wu,
    normal_fragment_maps: Xu,
    normal_pars_fragment: qu,
    normal_pars_vertex: Yu,
    normal_vertex: Zu,
    normalmap_pars_fragment: Ju,
    clearcoat_normal_fragment_begin: $u,
    clearcoat_normal_fragment_maps: Ku,
    clearcoat_pars_fragment: ju,
    iridescence_pars_fragment: Qu,
    opaque_fragment: th,
    packing: eh,
    premultiplied_alpha_fragment: nh,
    project_vertex: ih,
    dithering_fragment: rh,
    dithering_pars_fragment: sh,
    roughnessmap_fragment: ah,
    roughnessmap_pars_fragment: oh,
    shadowmap_pars_fragment: lh,
    shadowmap_pars_vertex: ch,
    shadowmap_vertex: uh,
    shadowmask_pars_fragment: hh,
    skinbase_vertex: fh,
    skinning_pars_vertex: dh,
    skinning_vertex: ph,
    skinnormal_vertex: mh,
    specularmap_fragment: gh,
    specularmap_pars_fragment: _h,
    tonemapping_fragment: vh,
    tonemapping_pars_fragment: xh,
    transmission_fragment: Mh,
    transmission_pars_fragment: Sh,
    uv_pars_fragment: yh,
    uv_pars_vertex: Eh,
    uv_vertex: Th,
    worldpos_vertex: Ah,
    background_vert: bh,
    background_frag: wh,
    backgroundCube_vert: Rh,
    backgroundCube_frag: Ch,
    cube_vert: Ph,
    cube_frag: Dh,
    depth_vert: Lh,
    depth_frag: Uh,
    distanceRGBA_vert: Ih,
    distanceRGBA_frag: Fh,
    equirect_vert: Nh,
    equirect_frag: Oh,
    linedashed_vert: Bh,
    linedashed_frag: zh,
    meshbasic_vert: Gh,
    meshbasic_frag: Hh,
    meshlambert_vert: Vh,
    meshlambert_frag: kh,
    meshmatcap_vert: Wh,
    meshmatcap_frag: Xh,
    meshnormal_vert: qh,
    meshnormal_frag: Yh,
    meshphong_vert: Zh,
    meshphong_frag: Jh,
    meshphysical_vert: $h,
    meshphysical_frag: Kh,
    meshtoon_vert: jh,
    meshtoon_frag: Qh,
    points_vert: tf,
    points_frag: ef,
    shadow_vert: nf,
    shadow_frag: rf,
    sprite_vert: sf,
    sprite_frag: af,
  },
  st = {
    common: {
      diffuse: { value: new zt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new It() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new It() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new It() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new It() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new It() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new It() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new It() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new It() },
      normalScale: { value: new ot(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new It() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new It() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new It() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new It() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new zt(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new zt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new It() },
      alphaTest: { value: 0 },
      uvTransform: { value: new It() },
    },
    sprite: {
      diffuse: { value: new zt(16777215) },
      opacity: { value: 1 },
      center: { value: new ot(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new It() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new It() },
      alphaTest: { value: 0 },
    },
  },
  We = {
    basic: {
      uniforms: be([
        st.common,
        st.specularmap,
        st.envmap,
        st.aomap,
        st.lightmap,
        st.fog,
      ]),
      vertexShader: Nt.meshbasic_vert,
      fragmentShader: Nt.meshbasic_frag,
    },
    lambert: {
      uniforms: be([
        st.common,
        st.specularmap,
        st.envmap,
        st.aomap,
        st.lightmap,
        st.emissivemap,
        st.bumpmap,
        st.normalmap,
        st.displacementmap,
        st.fog,
        st.lights,
        { emissive: { value: new zt(0) } },
      ]),
      vertexShader: Nt.meshlambert_vert,
      fragmentShader: Nt.meshlambert_frag,
    },
    phong: {
      uniforms: be([
        st.common,
        st.specularmap,
        st.envmap,
        st.aomap,
        st.lightmap,
        st.emissivemap,
        st.bumpmap,
        st.normalmap,
        st.displacementmap,
        st.fog,
        st.lights,
        {
          emissive: { value: new zt(0) },
          specular: { value: new zt(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Nt.meshphong_vert,
      fragmentShader: Nt.meshphong_frag,
    },
    standard: {
      uniforms: be([
        st.common,
        st.envmap,
        st.aomap,
        st.lightmap,
        st.emissivemap,
        st.bumpmap,
        st.normalmap,
        st.displacementmap,
        st.roughnessmap,
        st.metalnessmap,
        st.fog,
        st.lights,
        {
          emissive: { value: new zt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Nt.meshphysical_vert,
      fragmentShader: Nt.meshphysical_frag,
    },
    toon: {
      uniforms: be([
        st.common,
        st.aomap,
        st.lightmap,
        st.emissivemap,
        st.bumpmap,
        st.normalmap,
        st.displacementmap,
        st.gradientmap,
        st.fog,
        st.lights,
        { emissive: { value: new zt(0) } },
      ]),
      vertexShader: Nt.meshtoon_vert,
      fragmentShader: Nt.meshtoon_frag,
    },
    matcap: {
      uniforms: be([
        st.common,
        st.bumpmap,
        st.normalmap,
        st.displacementmap,
        st.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Nt.meshmatcap_vert,
      fragmentShader: Nt.meshmatcap_frag,
    },
    points: {
      uniforms: be([st.points, st.fog]),
      vertexShader: Nt.points_vert,
      fragmentShader: Nt.points_frag,
    },
    dashed: {
      uniforms: be([
        st.common,
        st.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Nt.linedashed_vert,
      fragmentShader: Nt.linedashed_frag,
    },
    depth: {
      uniforms: be([st.common, st.displacementmap]),
      vertexShader: Nt.depth_vert,
      fragmentShader: Nt.depth_frag,
    },
    normal: {
      uniforms: be([
        st.common,
        st.bumpmap,
        st.normalmap,
        st.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Nt.meshnormal_vert,
      fragmentShader: Nt.meshnormal_frag,
    },
    sprite: {
      uniforms: be([st.sprite, st.fog]),
      vertexShader: Nt.sprite_vert,
      fragmentShader: Nt.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new It() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Nt.background_vert,
      fragmentShader: Nt.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new It() },
      },
      vertexShader: Nt.backgroundCube_vert,
      fragmentShader: Nt.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Nt.cube_vert,
      fragmentShader: Nt.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Nt.equirect_vert,
      fragmentShader: Nt.equirect_frag,
    },
    distanceRGBA: {
      uniforms: be([
        st.common,
        st.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Nt.distanceRGBA_vert,
      fragmentShader: Nt.distanceRGBA_frag,
    },
    shadow: {
      uniforms: be([
        st.lights,
        st.fog,
        { color: { value: new zt(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Nt.shadow_vert,
      fragmentShader: Nt.shadow_frag,
    },
  };
We.physical = {
  uniforms: be([
    We.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new It() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new It() },
      clearcoatNormalScale: { value: new ot(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new It() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new It() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new It() },
      sheen: { value: 0 },
      sheenColor: { value: new zt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new It() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new It() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new It() },
      transmissionSamplerSize: { value: new ot() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new It() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new zt(0) },
      specularColor: { value: new zt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new It() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new It() },
      anisotropyVector: { value: new ot() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new It() },
    },
  ]),
  vertexShader: Nt.meshphysical_vert,
  fragmentShader: Nt.meshphysical_frag,
};
const ur = { r: 0, b: 0, g: 0 },
  xn = new Ye(),
  of = new Zt();
function lf(i, t, e, n, r, s, a) {
  const o = new zt(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    h = null,
    d = 0,
    f = null;
  function g(E) {
    let _ = E.isScene === !0 ? E.background : null;
    return (
      _ && _.isTexture && (_ = (E.backgroundBlurriness > 0 ? e : t).get(_)),
      _
    );
  }
  function v(E) {
    let _ = !1;
    const b = g(E);
    b === null ? p(o, l) : b && b.isColor && (p(b, 1), (_ = !0));
    const T = i.xr.getEnvironmentBlendMode();
    (T === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : T === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || _) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)));
  }
  function m(E, _) {
    const b = g(_);
    b && (b.isCubeTexture || b.mapping === 306)
      ? (u === void 0 &&
          ((u = new ve(
            new Pn(1, 1, 1),
            new hn({
              name: "BackgroundCubeMaterial",
              uniforms: ei(We.backgroundCube.uniforms),
              vertexShader: We.backgroundCube.vertexShader,
              fragmentShader: We.backgroundCube.fragmentShader,
              side: 1,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          u.geometry.deleteAttribute("normal"),
          u.geometry.deleteAttribute("uv"),
          (u.onBeforeRender = function (T, w, C) {
            this.matrixWorld.copyPosition(C.matrixWorld);
          }),
          Object.defineProperty(u.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          r.update(u)),
        xn.copy(_.backgroundRotation),
        (xn.x *= -1),
        (xn.y *= -1),
        (xn.z *= -1),
        b.isCubeTexture &&
          b.isRenderTargetTexture === !1 &&
          ((xn.y *= -1), (xn.z *= -1)),
        (u.material.uniforms.envMap.value = b),
        (u.material.uniforms.flipEnvMap.value =
          b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
        (u.material.uniforms.backgroundBlurriness.value =
          _.backgroundBlurriness),
        (u.material.uniforms.backgroundIntensity.value = _.backgroundIntensity),
        u.material.uniforms.backgroundRotation.value.setFromMatrix4(
          of.makeRotationFromEuler(xn),
        ),
        (u.material.toneMapped = kt.getTransfer(b.colorSpace) !== $t),
        (h !== b || d !== b.version || f !== i.toneMapping) &&
          ((u.material.needsUpdate = !0),
          (h = b),
          (d = b.version),
          (f = i.toneMapping)),
        u.layers.enableAll(),
        E.unshift(u, u.geometry, u.material, 0, 0, null))
      : b &&
        b.isTexture &&
        (c === void 0 &&
          ((c = new ve(
            new Li(2, 2),
            new hn({
              name: "BackgroundMaterial",
              uniforms: ei(We.background.uniforms),
              vertexShader: We.background.vertexShader,
              fragmentShader: We.background.fragmentShader,
              side: 0,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          r.update(c)),
        (c.material.uniforms.t2D.value = b),
        (c.material.uniforms.backgroundIntensity.value = _.backgroundIntensity),
        (c.material.toneMapped = kt.getTransfer(b.colorSpace) !== $t),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(b.matrix),
        (h !== b || d !== b.version || f !== i.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (h = b),
          (d = b.version),
          (f = i.toneMapping)),
        c.layers.enableAll(),
        E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(E, _) {
    (E.getRGB(ur, to(i)), n.buffers.color.setClear(ur.r, ur.g, ur.b, _, a));
  }
  function A() {
    (u !== void 0 && (u.geometry.dispose(), u.material.dispose(), (u = void 0)),
      c !== void 0 &&
        (c.geometry.dispose(), c.material.dispose(), (c = void 0)));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (E, _ = 1) {
      (o.set(E), (l = _), p(o, l));
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (E) {
      ((l = E), p(o, l));
    },
    render: v,
    addToRenderList: m,
    dispose: A,
  };
}
function cf(i, t) {
  const e = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = d(null);
  let s = r,
    a = !1;
  function o(S, D, I, B, H) {
    let W = !1;
    const V = h(B, I, D);
    (s !== V && ((s = V), c(s.object)),
      (W = f(S, B, I, H)),
      W && g(S, B, I, H),
      H !== null && t.update(H, i.ELEMENT_ARRAY_BUFFER),
      (W || a) &&
        ((a = !1),
        _(S, D, I, B),
        H !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(H).buffer)));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(S) {
    return i.bindVertexArray(S);
  }
  function u(S) {
    return i.deleteVertexArray(S);
  }
  function h(S, D, I) {
    const B = I.wireframe === !0;
    let H = n[S.id];
    H === void 0 && ((H = {}), (n[S.id] = H));
    let W = H[D.id];
    W === void 0 && ((W = {}), (H[D.id] = W));
    let V = W[B];
    return (V === void 0 && ((V = d(l())), (W[B] = V)), V);
  }
  function d(S) {
    const D = [],
      I = [],
      B = [];
    for (let H = 0; H < e; H++) ((D[H] = 0), (I[H] = 0), (B[H] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: D,
      enabledAttributes: I,
      attributeDivisors: B,
      object: S,
      attributes: {},
      index: null,
    };
  }
  function f(S, D, I, B) {
    const H = s.attributes,
      W = D.attributes;
    let V = 0;
    const K = I.getAttributes();
    for (const k in K)
      if (K[k].location >= 0) {
        const ut = H[k];
        let Et = W[k];
        if (
          (Et === void 0 &&
            (k === "instanceMatrix" &&
              S.instanceMatrix &&
              (Et = S.instanceMatrix),
            k === "instanceColor" && S.instanceColor && (Et = S.instanceColor)),
          ut === void 0 || ut.attribute !== Et || (Et && ut.data !== Et.data))
        )
          return !0;
        V++;
      }
    return s.attributesNum !== V || s.index !== B;
  }
  function g(S, D, I, B) {
    const H = {},
      W = D.attributes;
    let V = 0;
    const K = I.getAttributes();
    for (const k in K)
      if (K[k].location >= 0) {
        let ut = W[k];
        ut === void 0 &&
          (k === "instanceMatrix" &&
            S.instanceMatrix &&
            (ut = S.instanceMatrix),
          k === "instanceColor" && S.instanceColor && (ut = S.instanceColor));
        const Et = {};
        ((Et.attribute = ut),
          ut && ut.data && (Et.data = ut.data),
          (H[k] = Et),
          V++);
      }
    ((s.attributes = H), (s.attributesNum = V), (s.index = B));
  }
  function v() {
    const S = s.newAttributes;
    for (let D = 0, I = S.length; D < I; D++) S[D] = 0;
  }
  function m(S) {
    p(S, 0);
  }
  function p(S, D) {
    const I = s.newAttributes,
      B = s.enabledAttributes,
      H = s.attributeDivisors;
    ((I[S] = 1),
      B[S] === 0 && (i.enableVertexAttribArray(S), (B[S] = 1)),
      H[S] !== D && (i.vertexAttribDivisor(S, D), (H[S] = D)));
  }
  function A() {
    const S = s.newAttributes,
      D = s.enabledAttributes;
    for (let I = 0, B = D.length; I < B; I++)
      D[I] !== S[I] && (i.disableVertexAttribArray(I), (D[I] = 0));
  }
  function E(S, D, I, B, H, W, V) {
    V === !0
      ? i.vertexAttribIPointer(S, D, I, H, W)
      : i.vertexAttribPointer(S, D, I, B, H, W);
  }
  function _(S, D, I, B) {
    v();
    const H = B.attributes,
      W = I.getAttributes(),
      V = D.defaultAttributeValues;
    for (const K in W) {
      const k = W[K];
      if (k.location >= 0) {
        let tt = H[K];
        if (
          (tt === void 0 &&
            (K === "instanceMatrix" &&
              S.instanceMatrix &&
              (tt = S.instanceMatrix),
            K === "instanceColor" && S.instanceColor && (tt = S.instanceColor)),
          tt !== void 0)
        ) {
          const ut = tt.normalized,
            Et = tt.itemSize,
            Bt = t.get(tt);
          if (Bt === void 0) continue;
          const Qt = Bt.buffer,
            ne = Bt.type,
            Xt = Bt.bytesPerElement,
            Y = ne === i.INT || ne === i.UNSIGNED_INT || tt.gpuType === 1013;
          if (tt.isInterleavedBufferAttribute) {
            const $ = tt.data,
              dt = $.stride,
              Pt = tt.offset;
            if ($.isInstancedInterleavedBuffer) {
              for (let yt = 0; yt < k.locationSize; yt++)
                p(k.location + yt, $.meshPerAttribute);
              S.isInstancedMesh !== !0 &&
                B._maxInstanceCount === void 0 &&
                (B._maxInstanceCount = $.meshPerAttribute * $.count);
            } else
              for (let yt = 0; yt < k.locationSize; yt++) m(k.location + yt);
            i.bindBuffer(i.ARRAY_BUFFER, Qt);
            for (let yt = 0; yt < k.locationSize; yt++)
              E(
                k.location + yt,
                Et / k.locationSize,
                ne,
                ut,
                dt * Xt,
                (Pt + (Et / k.locationSize) * yt) * Xt,
                Y,
              );
          } else {
            if (tt.isInstancedBufferAttribute) {
              for (let $ = 0; $ < k.locationSize; $++)
                p(k.location + $, tt.meshPerAttribute);
              S.isInstancedMesh !== !0 &&
                B._maxInstanceCount === void 0 &&
                (B._maxInstanceCount = tt.meshPerAttribute * tt.count);
            } else for (let $ = 0; $ < k.locationSize; $++) m(k.location + $);
            i.bindBuffer(i.ARRAY_BUFFER, Qt);
            for (let $ = 0; $ < k.locationSize; $++)
              E(
                k.location + $,
                Et / k.locationSize,
                ne,
                ut,
                Et * Xt,
                (Et / k.locationSize) * $ * Xt,
                Y,
              );
          }
        } else if (V !== void 0) {
          const ut = V[K];
          if (ut !== void 0)
            switch (ut.length) {
              case 2:
                i.vertexAttrib2fv(k.location, ut);
                break;
              case 3:
                i.vertexAttrib3fv(k.location, ut);
                break;
              case 4:
                i.vertexAttrib4fv(k.location, ut);
                break;
              default:
                i.vertexAttrib1fv(k.location, ut);
            }
        }
      }
    }
    A();
  }
  function b() {
    C();
    for (const S in n) {
      const D = n[S];
      for (const I in D) {
        const B = D[I];
        for (const H in B) (u(B[H].object), delete B[H]);
        delete D[I];
      }
      delete n[S];
    }
  }
  function T(S) {
    if (n[S.id] === void 0) return;
    const D = n[S.id];
    for (const I in D) {
      const B = D[I];
      for (const H in B) (u(B[H].object), delete B[H]);
      delete D[I];
    }
    delete n[S.id];
  }
  function w(S) {
    for (const D in n) {
      const I = n[D];
      if (I[S.id] === void 0) continue;
      const B = I[S.id];
      for (const H in B) (u(B[H].object), delete B[H]);
      delete I[S.id];
    }
  }
  function C() {
    (M(), (a = !0), s !== r && ((s = r), c(s.object)));
  }
  function M() {
    ((r.geometry = null), (r.program = null), (r.wireframe = !1));
  }
  return {
    setup: o,
    reset: C,
    resetDefaultState: M,
    dispose: b,
    releaseStatesOfGeometry: T,
    releaseStatesOfProgram: w,
    initAttributes: v,
    enableAttribute: m,
    disableUnusedAttributes: A,
  };
}
function uf(i, t, e) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    (i.drawArrays(n, c, u), e.update(u, n, 1));
  }
  function a(c, u, h) {
    h !== 0 && (i.drawArraysInstanced(n, c, u, h), e.update(u, n, h));
  }
  function o(c, u, h) {
    if (h === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, h);
    let f = 0;
    for (let g = 0; g < h; g++) f += u[g];
    e.update(f, n, 1);
  }
  function l(c, u, h, d) {
    if (h === 0) return;
    const f = t.get("WEBGL_multi_draw");
    if (f === null) for (let g = 0; g < c.length; g++) a(c[g], u[g], d[g]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, d, 0, h);
      let g = 0;
      for (let v = 0; v < h; v++) g += u[v] * d[v];
      e.update(g, n, 1);
    }
  }
  ((this.setMode = r),
    (this.render = s),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = l));
}
function hf(i, t, e, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      const w = t.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(w) {
    return !(
      w !== 1023 &&
      n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(w) {
    const C =
      w === 1016 &&
      (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(
      w !== 1009 &&
      n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      w !== 1015 &&
      !C
    );
  }
  function l(w) {
    if (w === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let c = e.precision !== void 0 ? e.precision : "highp";
  const u = l(c);
  u !== c &&
    (console.warn(
      "THREE.WebGLRenderer:",
      c,
      "not supported, using",
      u,
      "instead.",
    ),
    (c = u));
  const h = e.logarithmicDepthBuffer === !0,
    d = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control"),
    f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    v = i.getParameter(i.MAX_TEXTURE_SIZE),
    m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    p = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    A = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    E = i.getParameter(i.MAX_VARYING_VECTORS),
    _ = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    b = g > 0,
    T = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: s,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: h,
    reversedDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: v,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: A,
    maxVaryings: E,
    maxFragmentUniforms: _,
    vertexTextures: b,
    maxSamples: T,
  };
}
function ff(i) {
  const t = this;
  let e = null,
    n = 0,
    r = !1,
    s = !1;
  const a = new Sn(),
    o = new It(),
    l = { value: null, needsUpdate: !1 };
  ((this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, d) {
      const f = h.length !== 0 || d || n !== 0 || r;
      return ((r = d), (n = h.length), f);
    }),
    (this.beginShadows = function () {
      ((s = !0), u(null));
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (h, d) {
      e = u(h, d, 0);
    }),
    (this.setState = function (h, d, f) {
      const g = h.clippingPlanes,
        v = h.clipIntersection,
        m = h.clipShadows,
        p = i.get(h);
      if (!r || g === null || g.length === 0 || (s && !m)) s ? u(null) : c();
      else {
        const A = s ? 0 : n,
          E = A * 4;
        let _ = p.clippingState || null;
        ((l.value = _), (_ = u(g, d, E, f)));
        for (let b = 0; b !== E; ++b) _[b] = e[b];
        ((p.clippingState = _),
          (this.numIntersection = v ? this.numPlanes : 0),
          (this.numPlanes += A));
      }
    }));
  function c() {
    (l.value !== e && ((l.value = e), (l.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0));
  }
  function u(h, d, f, g) {
    const v = h !== null ? h.length : 0;
    let m = null;
    if (v !== 0) {
      if (((m = l.value), g !== !0 || m === null)) {
        const p = f + v * 4,
          A = d.matrixWorldInverse;
        (o.getNormalMatrix(A),
          (m === null || m.length < p) && (m = new Float32Array(p)));
        for (let E = 0, _ = f; E !== v; ++E, _ += 4)
          (a.copy(h[E]).applyMatrix4(A, o),
            a.normal.toArray(m, _),
            (m[_ + 3] = a.constant));
      }
      ((l.value = m), (l.needsUpdate = !0));
    }
    return ((t.numPlanes = v), (t.numIntersection = 0), m);
  }
}
function df(i) {
  let t = new WeakMap();
  function e(a, o) {
    return (o === 303 ? (a.mapping = 301) : o === 304 && (a.mapping = 302), a);
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304)
        if (t.has(a)) {
          const l = t.get(a).texture;
          return e(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Rl(l.height);
            return (
              c.fromEquirectangularTexture(i, a),
              t.set(a, c),
              a.addEventListener("dispose", r),
              e(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = t.get(o);
    l !== void 0 && (t.delete(o), l.dispose());
  }
  function s() {
    t = new WeakMap();
  }
  return { get: n, dispose: s };
}
const Kn = 4,
  ya = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  En = 20,
  ss = new Ro(),
  Ea = new zt();
let as = null,
  os = 0,
  ls = 0,
  cs = !1;
const yn = (1 + Math.sqrt(5)) / 2,
  $n = 1 / yn,
  Ta = [
    new L(-yn, $n, 0),
    new L(yn, $n, 0),
    new L(-$n, 0, yn),
    new L($n, 0, yn),
    new L(0, yn, -$n),
    new L(0, yn, $n),
    new L(-1, 1, -1),
    new L(1, 1, -1),
    new L(-1, 1, 1),
    new L(1, 1, 1),
  ],
  pf = new L();
class Aa {
  constructor(t) {
    ((this._renderer = t),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial));
  }
  fromScene(t, e = 0, n = 0.1, r = 100, s = {}) {
    const { size: a = 256, position: o = pf } = s;
    ((as = this._renderer.getRenderTarget()),
      (os = this._renderer.getActiveCubeFace()),
      (ls = this._renderer.getActiveMipmapLevel()),
      (cs = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(a));
    const l = this._allocateTargets();
    return (
      (l.depthBuffer = !0),
      this._sceneToCubeUV(t, n, r, l, o),
      e > 0 && this._blur(l, 0, 0, e),
      this._applyPMREM(l),
      this._cleanup(l),
      l
    );
  }
  fromEquirectangular(t, e = null) {
    return this._fromTexture(t, e);
  }
  fromCubemap(t, e = null) {
    return this._fromTexture(t, e);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Ra()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = wa()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose());
  }
  _setSize(t) {
    ((this._lodMax = Math.floor(Math.log2(t))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let t = 0; t < this._lodPlanes.length; t++)
      this._lodPlanes[t].dispose();
  }
  _cleanup(t) {
    (this._renderer.setRenderTarget(as, os, ls),
      (this._renderer.xr.enabled = cs),
      (t.scissorTest = !1),
      hr(t, 0, 0, t.width, t.height));
  }
  _fromTexture(t, e) {
    (t.mapping === 301 || t.mapping === 302
      ? this._setSize(
          t.image.length === 0
            ? 16
            : t.image[0].width || t.image[0].image.width,
        )
      : this._setSize(t.image.width / 4),
      (as = this._renderer.getRenderTarget()),
      (os = this._renderer.getActiveCubeFace()),
      (ls = this._renderer.getActiveMipmapLevel()),
      (cs = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1));
    const n = e || this._allocateTargets();
    return (
      this._textureToCubeUV(t, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
    );
  }
  _allocateTargets() {
    const t = 3 * Math.max(this._cubeSize, 112),
      e = 4 * this._cubeSize,
      n = {
        magFilter: 1006,
        minFilter: 1006,
        generateMipmaps: !1,
        type: 1016,
        format: 1023,
        colorSpace: Qn,
        depthBuffer: !1,
      },
      r = ba(t, e, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== t ||
      this._pingPongRenderTarget.height !== e
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ba(t, e, n)));
      const { _lodMax: s } = this;
      (({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = mf(s)),
        (this._blurMaterial = gf(s, t, e)));
    }
    return r;
  }
  _compileMaterial(t) {
    const e = new ve(this._lodPlanes[0], t);
    this._renderer.compile(e, ss);
  }
  _sceneToCubeUV(t, e, n, r, s) {
    const l = new Ue(90, 1, e, n),
      c = [1, -1, 1, 1, 1, 1],
      u = [1, 1, 1, -1, -1, -1],
      h = this._renderer,
      d = h.autoClear,
      f = h.toneMapping;
    (h.getClearColor(Ea),
      (h.toneMapping = 0),
      (h.autoClear = !1),
      h.state.buffers.depth.getReversed() &&
        (h.setRenderTarget(r), h.clearDepth(), h.setRenderTarget(null)));
    const v = new vr({
        name: "PMREM.Background",
        side: 1,
        depthWrite: !1,
        depthTest: !1,
      }),
      m = new ve(new Pn(), v);
    let p = !1;
    const A = t.background;
    A
      ? A.isColor && (v.color.copy(A), (t.background = null), (p = !0))
      : (v.color.copy(Ea), (p = !0));
    for (let E = 0; E < 6; E++) {
      const _ = E % 3;
      _ === 0
        ? (l.up.set(0, c[E], 0),
          l.position.set(s.x, s.y, s.z),
          l.lookAt(s.x + u[E], s.y, s.z))
        : _ === 1
          ? (l.up.set(0, 0, c[E]),
            l.position.set(s.x, s.y, s.z),
            l.lookAt(s.x, s.y + u[E], s.z))
          : (l.up.set(0, c[E], 0),
            l.position.set(s.x, s.y, s.z),
            l.lookAt(s.x, s.y, s.z + u[E]));
      const b = this._cubeSize;
      (hr(r, _ * b, E > 2 ? b : 0, b, b),
        h.setRenderTarget(r),
        p && h.render(m, l),
        h.render(t, l));
    }
    (m.geometry.dispose(),
      m.material.dispose(),
      (h.toneMapping = f),
      (h.autoClear = d),
      (t.background = A));
  }
  _textureToCubeUV(t, e) {
    const n = this._renderer,
      r = t.mapping === 301 || t.mapping === 302;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ra()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          t.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = wa());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new ve(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = t;
    const l = this._cubeSize;
    (hr(e, 0, 0, 3 * l, 2 * l), n.setRenderTarget(e), n.render(a, ss));
  }
  _applyPMREM(t) {
    const e = this._renderer,
      n = e.autoClear;
    e.autoClear = !1;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(
          this._sigmas[s] * this._sigmas[s] -
            this._sigmas[s - 1] * this._sigmas[s - 1],
        ),
        o = Ta[(r - s - 1) % Ta.length];
      this._blur(t, s - 1, s, a, o);
    }
    e.autoClear = n;
  }
  _blur(t, e, n, r, s) {
    const a = this._pingPongRenderTarget;
    (this._halfBlur(t, a, e, n, r, "latitudinal", s),
      this._halfBlur(a, t, n, n, r, "longitudinal", s));
  }
  _halfBlur(t, e, n, r, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const u = 3,
      h = new ve(this._lodPlanes[r], c),
      d = c.uniforms,
      f = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * f) : (2 * Math.PI) / (2 * En - 1),
      v = s / g,
      m = isFinite(s) ? 1 + Math.floor(u * v) : En;
    m > En &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${En}`,
      );
    const p = [];
    let A = 0;
    for (let w = 0; w < En; ++w) {
      const C = w / v,
        M = Math.exp((-C * C) / 2);
      (p.push(M), w === 0 ? (A += M) : w < m && (A += 2 * M));
    }
    for (let w = 0; w < p.length; w++) p[w] = p[w] / A;
    ((d.envMap.value = t.texture),
      (d.samples.value = m),
      (d.weights.value = p),
      (d.latitudinal.value = a === "latitudinal"),
      o && (d.poleAxis.value = o));
    const { _lodMax: E } = this;
    ((d.dTheta.value = g), (d.mipInt.value = E - n));
    const _ = this._sizeLods[r],
      b = 3 * _ * (r > E - Kn ? r - E + Kn : 0),
      T = 4 * (this._cubeSize - _);
    (hr(e, b, T, 3 * _, 2 * _), l.setRenderTarget(e), l.render(h, ss));
  }
}
function mf(i) {
  const t = [],
    e = [],
    n = [];
  let r = i;
  const s = i - Kn + 1 + ya.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    e.push(o);
    let l = 1 / o;
    (a > i - Kn ? (l = ya[a - i + Kn - 1]) : a === 0 && (l = 0), n.push(l));
    const c = 1 / (o - 2),
      u = -c,
      h = 1 + c,
      d = [u, u, h, u, h, h, u, u, h, h, u, h],
      f = 6,
      g = 6,
      v = 3,
      m = 2,
      p = 1,
      A = new Float32Array(v * g * f),
      E = new Float32Array(m * g * f),
      _ = new Float32Array(p * g * f);
    for (let T = 0; T < f; T++) {
      const w = ((T % 3) * 2) / 3 - 1,
        C = T > 2 ? 0 : -1,
        M = [
          w,
          C,
          0,
          w + 2 / 3,
          C,
          0,
          w + 2 / 3,
          C + 1,
          0,
          w,
          C,
          0,
          w + 2 / 3,
          C + 1,
          0,
          w,
          C + 1,
          0,
        ];
      (A.set(M, v * g * T), E.set(d, m * g * T));
      const S = [T, T, T, T, T, T];
      _.set(S, p * g * T);
    }
    const b = new de();
    (b.setAttribute("position", new Re(A, v)),
      b.setAttribute("uv", new Re(E, m)),
      b.setAttribute("faceIndex", new Re(_, p)),
      t.push(b),
      r > Kn && r--);
  }
  return { lodPlanes: t, sizeLods: e, sigmas: n };
}
function ba(i, t, e) {
  const n = new bn(i, t, e);
  return (
    (n.texture.mapping = 306),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function hr(i, t, e, n, r) {
  (i.viewport.set(t, e, n, r), i.scissor.set(t, e, n, r));
}
function gf(i, t, e) {
  const n = new Float32Array(En),
    r = new L(0, 1, 0);
  return new hn({
    name: "SphericalGaussianBlur",
    defines: {
      n: En,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Ds(),
    fragmentShader: `

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
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function wa() {
  return new hn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Ds(),
    fragmentShader: `

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
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ra() {
  return new hn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Ds(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: 0,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ds() {
  return `

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
	`;
}
function _f(i) {
  let t = new WeakMap(),
    e = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === 303 || l === 304,
        u = l === 301 || l === 302;
      if (c || u) {
        let h = t.get(o);
        const d = h !== void 0 ? h.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return (
            e === null && (e = new Aa(i)),
            (h = c ? e.fromEquirectangular(o, h) : e.fromCubemap(o, h)),
            (h.texture.pmremVersion = o.pmremVersion),
            t.set(o, h),
            h.texture
          );
        if (h !== void 0) return h.texture;
        {
          const f = o.image;
          return (c && f && f.height > 0) || (u && f && r(f))
            ? (e === null && (e = new Aa(i)),
              (h = c ? e.fromEquirectangular(o) : e.fromCubemap(o)),
              (h.texture.pmremVersion = o.pmremVersion),
              t.set(o, h),
              o.addEventListener("dispose", s),
              h.texture)
            : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = t.get(l);
    c !== void 0 && (t.delete(l), c.dispose());
  }
  function a() {
    ((t = new WeakMap()), e !== null && (e.dispose(), (e = null)));
  }
  return { get: n, dispose: a };
}
function vf(i) {
  const t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          i.getExtension("WEBGL_depth_texture") ||
          i.getExtension("MOZ_WEBGL_depth_texture") ||
          i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          i.getExtension("EXT_texture_filter_anisotropic") ||
          i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          i.getExtension("WEBGL_compressed_texture_s3tc") ||
          i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          i.getExtension("WEBGL_compressed_texture_pvrtc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return ((t[n] = r), r);
  }
  return {
    has: function (n) {
      return e(n) !== null;
    },
    init: function () {
      (e("EXT_color_buffer_float"),
        e("WEBGL_clip_cull_distance"),
        e("OES_texture_float_linear"),
        e("EXT_color_buffer_half_float"),
        e("WEBGL_multisampled_render_to_texture"),
        e("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      const r = e(n);
      return (
        r === null &&
          bi("THREE.WebGLRenderer: " + n + " extension not supported."),
        r
      );
    },
  };
}
function xf(i, t, e, n) {
  const r = {},
    s = new WeakMap();
  function a(h) {
    const d = h.target;
    d.index !== null && t.remove(d.index);
    for (const g in d.attributes) t.remove(d.attributes[g]);
    (d.removeEventListener("dispose", a), delete r[d.id]);
    const f = s.get(d);
    (f && (t.remove(f), s.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      e.memory.geometries--);
  }
  function o(h, d) {
    return (
      r[d.id] === !0 ||
        (d.addEventListener("dispose", a),
        (r[d.id] = !0),
        e.memory.geometries++),
      d
    );
  }
  function l(h) {
    const d = h.attributes;
    for (const f in d) t.update(d[f], i.ARRAY_BUFFER);
  }
  function c(h) {
    const d = [],
      f = h.index,
      g = h.attributes.position;
    let v = 0;
    if (f !== null) {
      const A = f.array;
      v = f.version;
      for (let E = 0, _ = A.length; E < _; E += 3) {
        const b = A[E + 0],
          T = A[E + 1],
          w = A[E + 2];
        d.push(b, T, T, w, w, b);
      }
    } else if (g !== void 0) {
      const A = g.array;
      v = g.version;
      for (let E = 0, _ = A.length / 3 - 1; E < _; E += 3) {
        const b = E + 0,
          T = E + 1,
          w = E + 2;
        d.push(b, T, T, w, w, b);
      }
    } else return;
    const m = new (Za(d) ? Qa : ja)(d, 1);
    m.version = v;
    const p = s.get(h);
    (p && t.remove(p), s.set(h, m));
  }
  function u(h) {
    const d = s.get(h);
    if (d) {
      const f = h.index;
      f !== null && d.version < f.version && c(h);
    } else c(h);
    return s.get(h);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function Mf(i, t, e) {
  let n;
  function r(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    ((s = d.type), (a = d.bytesPerElement));
  }
  function l(d, f) {
    (i.drawElements(n, f, s, d * a), e.update(f, n, 1));
  }
  function c(d, f, g) {
    g !== 0 && (i.drawElementsInstanced(n, f, s, d * a, g), e.update(f, n, g));
  }
  function u(d, f, g) {
    if (g === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, s, d, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++) m += f[p];
    e.update(m, n, 1);
  }
  function h(d, f, g, v) {
    if (g === 0) return;
    const m = t.get("WEBGL_multi_draw");
    if (m === null) for (let p = 0; p < d.length; p++) c(d[p] / a, f[p], v[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, s, d, 0, v, 0, g);
      let p = 0;
      for (let A = 0; A < g; A++) p += f[A] * v[A];
      e.update(p, n, 1);
    }
  }
  ((this.setMode = r),
    (this.setIndex = o),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = u),
    (this.renderMultiDrawInstances = h));
}
function Sf(i) {
  const t = { geometries: 0, textures: 0 },
    e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((e.calls++, a)) {
      case i.TRIANGLES:
        e.triangles += o * (s / 3);
        break;
      case i.LINES:
        e.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * s;
        break;
      case i.POINTS:
        e.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    ((e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0));
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function yf(i, t, e) {
  const n = new WeakMap(),
    r = new Kt();
  function s(a, o, l) {
    const c = a.morphTargetInfluences,
      u =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      h = u !== void 0 ? u.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== h) {
      let M = function () {
        (w.dispose(), n.delete(o), o.removeEventListener("dispose", M));
      };
      d !== void 0 && d.texture.dispose();
      const f = o.morphAttributes.position !== void 0,
        g = o.morphAttributes.normal !== void 0,
        v = o.morphAttributes.color !== void 0,
        m = o.morphAttributes.position || [],
        p = o.morphAttributes.normal || [],
        A = o.morphAttributes.color || [];
      let E = 0;
      (f === !0 && (E = 1), g === !0 && (E = 2), v === !0 && (E = 3));
      let _ = o.attributes.position.count * E,
        b = 1;
      _ > t.maxTextureSize &&
        ((b = Math.ceil(_ / t.maxTextureSize)), (_ = t.maxTextureSize));
      const T = new Float32Array(_ * b * 4 * h),
        w = new Ja(T, _, b, h);
      ((w.type = 1015), (w.needsUpdate = !0));
      const C = E * 4;
      for (let S = 0; S < h; S++) {
        const D = m[S],
          I = p[S],
          B = A[S],
          H = _ * b * 4 * S;
        for (let W = 0; W < D.count; W++) {
          const V = W * C;
          (f === !0 &&
            (r.fromBufferAttribute(D, W),
            (T[H + V + 0] = r.x),
            (T[H + V + 1] = r.y),
            (T[H + V + 2] = r.z),
            (T[H + V + 3] = 0)),
            g === !0 &&
              (r.fromBufferAttribute(I, W),
              (T[H + V + 4] = r.x),
              (T[H + V + 5] = r.y),
              (T[H + V + 6] = r.z),
              (T[H + V + 7] = 0)),
            v === !0 &&
              (r.fromBufferAttribute(B, W),
              (T[H + V + 8] = r.x),
              (T[H + V + 9] = r.y),
              (T[H + V + 10] = r.z),
              (T[H + V + 11] = B.itemSize === 4 ? r.w : 1)));
        }
      }
      ((d = { count: h, texture: w, size: new ot(_, b) }),
        n.set(o, d),
        o.addEventListener("dispose", M));
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let f = 0;
      for (let v = 0; v < c.length; v++) f += c[v];
      const g = o.morphTargetsRelative ? 1 : 1 - f;
      (l.getUniforms().setValue(i, "morphTargetBaseInfluence", g),
        l.getUniforms().setValue(i, "morphTargetInfluences", c));
    }
    (l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, e),
      l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size));
  }
  return { update: s };
}
function Ef(i, t, e, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      h = t.get(l, u);
    if (
      (r.get(h) !== c && (t.update(h), r.set(h, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        r.get(l) !== c &&
          (e.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return h;
  }
  function a() {
    r = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    (c.removeEventListener("dispose", o),
      e.remove(c.instanceMatrix),
      c.instanceColor !== null && e.remove(c.instanceColor));
  }
  return { update: s, dispose: a };
}
const Po = new xe(),
  Ca = new co(1, 1),
  Do = new Ja(),
  Lo = new hl(),
  Uo = new no(),
  Pa = [],
  Da = [],
  La = new Float32Array(16),
  Ua = new Float32Array(9),
  Ia = new Float32Array(4);
function ri(i, t, e) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = t * e;
  let s = Pa[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (Pa[r] = s)), t !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== t; ++a) ((o += e), i[a].toArray(s, o));
  }
  return s;
}
function pe(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++) if (i[e] !== t[e]) return !1;
  return !0;
}
function me(i, t) {
  for (let e = 0, n = t.length; e < n; e++) i[e] = t[e];
}
function br(i, t) {
  let e = Da[t];
  e === void 0 && ((e = new Int32Array(t)), (Da[t] = e));
  for (let n = 0; n !== t; ++n) e[n] = i.allocateTextureUnit();
  return e;
}
function Tf(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), (e[0] = t));
}
function Af(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (i.uniform2f(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (pe(e, t)) return;
    (i.uniform2fv(this.addr, t), me(e, t));
  }
}
function bf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (i.uniform3f(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) &&
      (i.uniform3f(this.addr, t.r, t.g, t.b),
      (e[0] = t.r),
      (e[1] = t.g),
      (e[2] = t.b));
  else {
    if (pe(e, t)) return;
    (i.uniform3fv(this.addr, t), me(e, t));
  }
}
function wf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (i.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (pe(e, t)) return;
    (i.uniform4fv(this.addr, t), me(e, t));
  }
}
function Rf(i, t) {
  const e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (pe(e, t)) return;
    (i.uniformMatrix2fv(this.addr, !1, t), me(e, t));
  } else {
    if (pe(e, n)) return;
    (Ia.set(n), i.uniformMatrix2fv(this.addr, !1, Ia), me(e, n));
  }
}
function Cf(i, t) {
  const e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (pe(e, t)) return;
    (i.uniformMatrix3fv(this.addr, !1, t), me(e, t));
  } else {
    if (pe(e, n)) return;
    (Ua.set(n), i.uniformMatrix3fv(this.addr, !1, Ua), me(e, n));
  }
}
function Pf(i, t) {
  const e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (pe(e, t)) return;
    (i.uniformMatrix4fv(this.addr, !1, t), me(e, t));
  } else {
    if (pe(e, n)) return;
    (La.set(n), i.uniformMatrix4fv(this.addr, !1, La), me(e, n));
  }
}
function Df(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), (e[0] = t));
}
function Lf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (i.uniform2i(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (pe(e, t)) return;
    (i.uniform2iv(this.addr, t), me(e, t));
  }
}
function Uf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (i.uniform3i(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else {
    if (pe(e, t)) return;
    (i.uniform3iv(this.addr, t), me(e, t));
  }
}
function If(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (i.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (pe(e, t)) return;
    (i.uniform4iv(this.addr, t), me(e, t));
  }
}
function Ff(i, t) {
  const e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), (e[0] = t));
}
function Nf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (i.uniform2ui(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (pe(e, t)) return;
    (i.uniform2uiv(this.addr, t), me(e, t));
  }
}
function Of(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (i.uniform3ui(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else {
    if (pe(e, t)) return;
    (i.uniform3uiv(this.addr, t), me(e, t));
  }
}
function Bf(i, t) {
  const e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (pe(e, t)) return;
    (i.uniform4uiv(this.addr, t), me(e, t));
  }
}
function zf(i, t, e) {
  const n = this.cache,
    r = e.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  let s;
  (this.type === i.SAMPLER_2D_SHADOW
    ? ((Ca.compareFunction = 515), (s = Ca))
    : (s = Po),
    e.setTexture2D(t || s, r));
}
function Gf(i, t, e) {
  const n = this.cache,
    r = e.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    e.setTexture3D(t || Lo, r));
}
function Hf(i, t, e) {
  const n = this.cache,
    r = e.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    e.setTextureCube(t || Uo, r));
}
function Vf(i, t, e) {
  const n = this.cache,
    r = e.allocateTextureUnit();
  (n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    e.setTexture2DArray(t || Do, r));
}
function kf(i) {
  switch (i) {
    case 5126:
      return Tf;
    case 35664:
      return Af;
    case 35665:
      return bf;
    case 35666:
      return wf;
    case 35674:
      return Rf;
    case 35675:
      return Cf;
    case 35676:
      return Pf;
    case 5124:
    case 35670:
      return Df;
    case 35667:
    case 35671:
      return Lf;
    case 35668:
    case 35672:
      return Uf;
    case 35669:
    case 35673:
      return If;
    case 5125:
      return Ff;
    case 36294:
      return Nf;
    case 36295:
      return Of;
    case 36296:
      return Bf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return zf;
    case 35679:
    case 36299:
    case 36307:
      return Gf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Hf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Vf;
  }
}
function Wf(i, t) {
  i.uniform1fv(this.addr, t);
}
function Xf(i, t) {
  const e = ri(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function qf(i, t) {
  const e = ri(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function Yf(i, t) {
  const e = ri(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function Zf(i, t) {
  const e = ri(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function Jf(i, t) {
  const e = ri(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function $f(i, t) {
  const e = ri(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function Kf(i, t) {
  i.uniform1iv(this.addr, t);
}
function jf(i, t) {
  i.uniform2iv(this.addr, t);
}
function Qf(i, t) {
  i.uniform3iv(this.addr, t);
}
function td(i, t) {
  i.uniform4iv(this.addr, t);
}
function ed(i, t) {
  i.uniform1uiv(this.addr, t);
}
function nd(i, t) {
  i.uniform2uiv(this.addr, t);
}
function id(i, t) {
  i.uniform3uiv(this.addr, t);
}
function rd(i, t) {
  i.uniform4uiv(this.addr, t);
}
function sd(i, t, e) {
  const n = this.cache,
    r = t.length,
    s = br(e, r);
  pe(n, s) || (i.uniform1iv(this.addr, s), me(n, s));
  for (let a = 0; a !== r; ++a) e.setTexture2D(t[a] || Po, s[a]);
}
function ad(i, t, e) {
  const n = this.cache,
    r = t.length,
    s = br(e, r);
  pe(n, s) || (i.uniform1iv(this.addr, s), me(n, s));
  for (let a = 0; a !== r; ++a) e.setTexture3D(t[a] || Lo, s[a]);
}
function od(i, t, e) {
  const n = this.cache,
    r = t.length,
    s = br(e, r);
  pe(n, s) || (i.uniform1iv(this.addr, s), me(n, s));
  for (let a = 0; a !== r; ++a) e.setTextureCube(t[a] || Uo, s[a]);
}
function ld(i, t, e) {
  const n = this.cache,
    r = t.length,
    s = br(e, r);
  pe(n, s) || (i.uniform1iv(this.addr, s), me(n, s));
  for (let a = 0; a !== r; ++a) e.setTexture2DArray(t[a] || Do, s[a]);
}
function cd(i) {
  switch (i) {
    case 5126:
      return Wf;
    case 35664:
      return Xf;
    case 35665:
      return qf;
    case 35666:
      return Yf;
    case 35674:
      return Zf;
    case 35675:
      return Jf;
    case 35676:
      return $f;
    case 5124:
    case 35670:
      return Kf;
    case 35667:
    case 35671:
      return jf;
    case 35668:
    case 35672:
      return Qf;
    case 35669:
    case 35673:
      return td;
    case 5125:
      return ed;
    case 36294:
      return nd;
    case 36295:
      return id;
    case 36296:
      return rd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return sd;
    case 35679:
    case 36299:
    case 36307:
      return ad;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return od;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return ld;
  }
}
class ud {
  constructor(t, e, n) {
    ((this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.setValue = kf(e.type)));
  }
}
class hd {
  constructor(t, e, n) {
    ((this.id = t),
      (this.addr = n),
      (this.cache = []),
      (this.type = e.type),
      (this.size = e.size),
      (this.setValue = cd(e.type)));
  }
}
class fd {
  constructor(t) {
    ((this.id = t), (this.seq = []), (this.map = {}));
  }
  setValue(t, e, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(t, e[o.id], n);
    }
  }
}
const us = /(\w+)(\])?(\[|\.)?/g;
function Fa(i, t) {
  (i.seq.push(t), (i.map[t.id] = t));
}
function dd(i, t, e) {
  const n = i.name,
    r = n.length;
  for (us.lastIndex = 0; ;) {
    const s = us.exec(n),
      a = us.lastIndex;
    let o = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === r))) {
      Fa(e, c === void 0 ? new ud(o, i, t) : new hd(o, i, t));
      break;
    } else {
      let h = e.map[o];
      (h === void 0 && ((h = new fd(o)), Fa(e, h)), (e = h));
    }
  }
}
class mr {
  constructor(t, e) {
    ((this.seq = []), (this.map = {}));
    const n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = t.getActiveUniform(e, r),
        a = t.getUniformLocation(e, s.name);
      dd(s, a, this);
    }
  }
  setValue(t, e, n, r) {
    const s = this.map[e];
    s !== void 0 && s.setValue(t, n, r);
  }
  setOptional(t, e, n) {
    const r = e[n];
    r !== void 0 && this.setValue(t, n, r);
  }
  static upload(t, e, n, r) {
    for (let s = 0, a = e.length; s !== a; ++s) {
      const o = e[s],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(t, l.value, r);
    }
  }
  static seqWithValue(t, e) {
    const n = [];
    for (let r = 0, s = t.length; r !== s; ++r) {
      const a = t[r];
      a.id in e && n.push(a);
    }
    return n;
  }
}
function Na(i, t, e) {
  const n = i.createShader(t);
  return (i.shaderSource(n, e), i.compileShader(n), n);
}
const pd = 37297;
let md = 0;
function gd(i, t) {
  const e = i.split(`
`),
    n = [],
    r = Math.max(t - 6, 0),
    s = Math.min(t + 6, e.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
const Oa = new It();
function _d(i) {
  kt._getMatrix(Oa, kt.workingColorSpace, i);
  const t = `mat3( ${Oa.elements.map((e) => e.toFixed(4))} )`;
  switch (kt.getTransfer(i)) {
    case _r:
      return [t, "LinearTransferOETF"];
    case $t:
      return [t, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space: ", i),
        [t, "LinearTransferOETF"]
      );
  }
}
function Ba(i, t, e) {
  const n = i.getShaderParameter(t, i.COMPILE_STATUS),
    s = (i.getShaderInfoLog(t) || "").trim();
  if (n && s === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(s);
  if (a) {
    const o = parseInt(a[1]);
    return (
      e.toUpperCase() +
      `

` +
      s +
      `

` +
      gd(i.getShaderSource(t), o)
    );
  } else return s;
}
function vd(i, t) {
  const e = _d(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function xd(i, t) {
  let e;
  switch (t) {
    case 1:
      e = "Linear";
      break;
    case 2:
      e = "Reinhard";
      break;
    case 3:
      e = "Cineon";
      break;
    case 4:
      e = "ACESFilmic";
      break;
    case 6:
      e = "AgX";
      break;
    case 7:
      e = "Neutral";
      break;
    case 5:
      e = "Custom";
      break;
    default:
      (console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t),
        (e = "Linear"));
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
  );
}
const fr = new L();
function Md() {
  kt.getLuminanceCoefficients(fr);
  const i = fr.x.toFixed(4),
    t = fr.y.toFixed(4),
    e = fr.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function Sd(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(vi).join(`
`);
}
function yd(i) {
  const t = [];
  for (const e in i) {
    const n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function Ed(i, t) {
  const e = {},
    n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(t, r),
      a = s.name;
    let o = 1;
    (s.type === i.FLOAT_MAT2 && (o = 2),
      s.type === i.FLOAT_MAT3 && (o = 3),
      s.type === i.FLOAT_MAT4 && (o = 4),
      (e[a] = {
        type: s.type,
        location: i.getAttribLocation(t, a),
        locationSize: o,
      }));
  }
  return e;
}
function vi(i) {
  return i !== "";
}
function za(i, t) {
  const e =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, e)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function Ga(i, t) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection,
    );
}
const Td = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ss(i) {
  return i.replace(Td, bd);
}
const Ad = new Map();
function bd(i, t) {
  let e = Nt[t];
  if (e === void 0) {
    const n = Ad.get(t);
    if (n !== void 0)
      ((e = Nt[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          t,
          n,
        ));
    else throw new Error("Can not resolve #include <" + t + ">");
  }
  return Ss(e);
}
const wd =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ha(i) {
  return i.replace(wd, Rd);
}
function Rd(i, t, e, n) {
  let r = "";
  for (let s = parseInt(t); s < parseInt(e); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Va(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (t += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
        ? (t += `
#define MEDIUM_PRECISION`)
        : i.precision === "lowp" &&
          (t += `
#define LOW_PRECISION`),
    t
  );
}
function Cd(i) {
  let t = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === 1
      ? (t = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === 2
        ? (t = "SHADOWMAP_TYPE_PCF_SOFT")
        : i.shadowMapType === 3 && (t = "SHADOWMAP_TYPE_VSM"),
    t
  );
}
function Pd(i) {
  let t = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case 301:
      case 302:
        t = "ENVMAP_TYPE_CUBE";
        break;
      case 306:
        t = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return t;
}
function Dd(i) {
  let t = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case 302:
        t = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return t;
}
function Ld(i) {
  let t = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case 0:
        t = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case 1:
        t = "ENVMAP_BLENDING_MIX";
        break;
      case 2:
        t = "ENVMAP_BLENDING_ADD";
        break;
    }
  return t;
}
function Ud(i) {
  const t = i.envMapCubeUVHeight;
  if (t === null) return null;
  const e = Math.log2(t) - 2,
    n = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 112)),
    texelHeight: n,
    maxMip: e,
  };
}
function Id(i, t, e, n) {
  const r = i.getContext(),
    s = e.defines;
  let a = e.vertexShader,
    o = e.fragmentShader;
  const l = Cd(e),
    c = Pd(e),
    u = Dd(e),
    h = Ld(e),
    d = Ud(e),
    f = Sd(e),
    g = yd(s),
    v = r.createProgram();
  let m,
    p,
    A = e.glslVersion
      ? "#version " +
        e.glslVersion +
        `
`
      : "";
  (e.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
      ].filter(vi).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (p = [
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
      ].filter(vi).join(`
`)),
      p.length > 0 &&
        (p += `
`))
    : ((m = [
        Va(e),
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
        e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        e.batching ? "#define USE_BATCHING" : "",
        e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        e.instancing ? "#define USE_INSTANCING" : "",
        e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.map ? "#define USE_MAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + u : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.anisotropy ? "#define USE_ANISOTROPY" : "",
        e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.alphaHash ? "#define USE_ALPHAHASH" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        e.mapUv ? "#define MAP_UV " + e.mapUv : "",
        e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
        e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
        e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
        e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
        e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
        e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
        e.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv
          : "",
        e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
        e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
        e.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv
          : "",
        e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
        e.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv
          : "",
        e.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv
          : "",
        e.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv
          : "",
        e.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv
          : "",
        e.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv
          : "",
        e.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv
          : "",
        e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
        e.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv
          : "",
        e.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv
          : "",
        e.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv
          : "",
        e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
        e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
        e.vertexColors ? "#define USE_COLOR" : "",
        e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUv1s ? "#define USE_UV1" : "",
        e.vertexUv2s ? "#define USE_UV2" : "",
        e.vertexUv3s ? "#define USE_UV3" : "",
        e.pointsUvs ? "#define USE_POINTS_UV" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.skinning ? "#define USE_SKINNING" : "",
        e.morphTargets ? "#define USE_MORPHTARGETS" : "",
        e.morphNormals && e.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        e.morphColors ? "#define USE_MORPHCOLORS" : "",
        e.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride
          : "",
        e.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount
          : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + l : "",
        e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
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
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
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
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(vi).join(`
`)),
      (p = [
        Va(e),
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        e.map ? "#define USE_MAP" : "",
        e.matcap ? "#define USE_MATCAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + c : "",
        e.envMap ? "#define " + u : "",
        e.envMap ? "#define " + h : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.anisotropy ? "#define USE_ANISOTROPY" : "",
        e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        e.clearcoat ? "#define USE_CLEARCOAT" : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.dispersion ? "#define USE_DISPERSION" : "",
        e.iridescence ? "#define USE_IRIDESCENCE" : "",
        e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.alphaTest ? "#define USE_ALPHATEST" : "",
        e.alphaHash ? "#define USE_ALPHAHASH" : "",
        e.sheen ? "#define USE_SHEEN" : "",
        e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
        e.vertexColors || e.instancingColor || e.batchingColor
          ? "#define USE_COLOR"
          : "",
        e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUv1s ? "#define USE_UV1" : "",
        e.vertexUv2s ? "#define USE_UV2" : "",
        e.vertexUv3s ? "#define USE_UV3" : "",
        e.pointsUvs ? "#define USE_POINTS_UV" : "",
        e.gradientMap ? "#define USE_GRADIENTMAP" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + l : "",
        e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        e.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        e.toneMapping !== 0 ? "#define TONE_MAPPING" : "",
        e.toneMapping !== 0 ? Nt.tonemapping_pars_fragment : "",
        e.toneMapping !== 0 ? xd("toneMapping", e.toneMapping) : "",
        e.dithering ? "#define DITHERING" : "",
        e.opaque ? "#define OPAQUE" : "",
        Nt.colorspace_pars_fragment,
        vd("linearToOutputTexel", e.outputColorSpace),
        Md(),
        e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
        `
`,
      ].filter(vi).join(`
`))),
    (a = Ss(a)),
    (a = za(a, e)),
    (a = Ga(a, e)),
    (o = Ss(o)),
    (o = za(o, e)),
    (o = Ga(o, e)),
    (a = Ha(a)),
    (o = Ha(o)),
    e.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (m =
        [
          f,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (p =
        [
          "#define varying in",
          e.glslVersion === Bs
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          e.glslVersion === Bs ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        p)));
  const E = A + m + a,
    _ = A + p + o,
    b = Na(r, r.VERTEX_SHADER, E),
    T = Na(r, r.FRAGMENT_SHADER, _);
  (r.attachShader(v, b),
    r.attachShader(v, T),
    e.index0AttributeName !== void 0
      ? r.bindAttribLocation(v, 0, e.index0AttributeName)
      : e.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"),
    r.linkProgram(v));
  function w(D) {
    if (i.debug.checkShaderErrors) {
      const I = r.getProgramInfoLog(v) || "",
        B = r.getShaderInfoLog(b) || "",
        H = r.getShaderInfoLog(T) || "",
        W = I.trim(),
        V = B.trim(),
        K = H.trim();
      let k = !0,
        tt = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (((k = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(r, v, b, T);
        else {
          const ut = Ba(r, b, "vertex"),
            Et = Ba(r, T, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(v, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              D.name +
              `
Material Type: ` +
              D.type +
              `

Program Info Log: ` +
              W +
              `
` +
              ut +
              `
` +
              Et,
          );
        }
      else
        W !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", W)
          : (V === "" || K === "") && (tt = !1);
      tt &&
        (D.diagnostics = {
          runnable: k,
          programLog: W,
          vertexShader: { log: V, prefix: m },
          fragmentShader: { log: K, prefix: p },
        });
    }
    (r.deleteShader(b), r.deleteShader(T), (C = new mr(r, v)), (M = Ed(r, v)));
  }
  let C;
  this.getUniforms = function () {
    return (C === void 0 && w(this), C);
  };
  let M;
  this.getAttributes = function () {
    return (M === void 0 && w(this), M);
  };
  let S = e.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (S === !1 && (S = r.getProgramParameter(v, pd)), S);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        r.deleteProgram(v),
        (this.program = void 0));
    }),
    (this.type = e.shaderType),
    (this.name = e.shaderName),
    (this.id = md++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = v),
    (this.vertexShader = b),
    (this.fragmentShader = T),
    this
  );
}
let Fd = 0;
class Nd {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(t) {
    const e = t.vertexShader,
      n = t.fragmentShader,
      r = this._getShaderStage(e),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(t);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(t) {
    const e = this.materialCache.get(t);
    for (const n of e)
      (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
    return (this.materialCache.delete(t), this);
  }
  getVertexShaderID(t) {
    return this._getShaderStage(t.vertexShader).id;
  }
  getFragmentShaderID(t) {
    return this._getShaderStage(t.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(t) {
    const e = this.materialCache;
    let n = e.get(t);
    return (n === void 0 && ((n = new Set()), e.set(t, n)), n);
  }
  _getShaderStage(t) {
    const e = this.shaderCache;
    let n = e.get(t);
    return (n === void 0 && ((n = new Od(t)), e.set(t, n)), n);
  }
}
class Od {
  constructor(t) {
    ((this.id = Fd++), (this.code = t), (this.usedTimes = 0));
  }
}
function Bd(i, t, e, n, r, s, a) {
  const o = new $a(),
    l = new Nd(),
    c = new Set(),
    u = [],
    h = r.logarithmicDepthBuffer,
    d = r.vertexTextures;
  let f = r.precision;
  const g = {
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
    SpriteMaterial: "sprite",
  };
  function v(M) {
    return (c.add(M), M === 0 ? "uv" : `uv${M}`);
  }
  function m(M, S, D, I, B) {
    const H = I.fog,
      W = B.geometry,
      V = M.isMeshStandardMaterial ? I.environment : null,
      K = (M.isMeshStandardMaterial ? e : t).get(M.envMap || V),
      k = K && K.mapping === 306 ? K.image.height : null,
      tt = g[M.type];
    M.precision !== null &&
      ((f = r.getMaxPrecision(M.precision)),
      f !== M.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          M.precision,
          "not supported, using",
          f,
          "instead.",
        ));
    const ut =
        W.morphAttributes.position ||
        W.morphAttributes.normal ||
        W.morphAttributes.color,
      Et = ut !== void 0 ? ut.length : 0;
    let Bt = 0;
    (W.morphAttributes.position !== void 0 && (Bt = 1),
      W.morphAttributes.normal !== void 0 && (Bt = 2),
      W.morphAttributes.color !== void 0 && (Bt = 3));
    let Qt, ne, Xt, Y;
    if (tt) {
      const qt = We[tt];
      ((Qt = qt.vertexShader), (ne = qt.fragmentShader));
    } else
      ((Qt = M.vertexShader),
        (ne = M.fragmentShader),
        l.update(M),
        (Xt = l.getVertexShaderID(M)),
        (Y = l.getFragmentShaderID(M)));
    const $ = i.getRenderTarget(),
      dt = i.state.buffers.depth.getReversed(),
      Pt = B.isInstancedMesh === !0,
      yt = B.isBatchedMesh === !0,
      Ht = !!M.map,
      Me = !!M.matcap,
      P = !!K,
      ie = !!M.aoMap,
      Lt = !!M.lightMap,
      Rt = !!M.bumpMap,
      gt = !!M.normalMap,
      re = !!M.displacementMap,
      _t = !!M.emissiveMap,
      Ft = !!M.metalnessMap,
      ge = !!M.roughnessMap,
      ue = M.anisotropy > 0,
      R = M.clearcoat > 0,
      x = M.dispersion > 0,
      O = M.iridescence > 0,
      q = M.sheen > 0,
      J = M.transmission > 0,
      X = ue && !!M.anisotropyMap,
      St = R && !!M.clearcoatMap,
      it = R && !!M.clearcoatNormalMap,
      vt = R && !!M.clearcoatRoughnessMap,
      xt = O && !!M.iridescenceMap,
      et = O && !!M.iridescenceThicknessMap,
      ct = q && !!M.sheenColorMap,
      wt = q && !!M.sheenRoughnessMap,
      Mt = !!M.specularMap,
      at = !!M.specularColorMap,
      Ut = !!M.specularIntensityMap,
      U = J && !!M.transmissionMap,
      nt = J && !!M.thicknessMap,
      rt = !!M.gradientMap,
      ft = !!M.alphaMap,
      j = M.alphaTest > 0,
      Z = !!M.alphaHash,
      mt = !!M.extensions;
    let Dt = 0;
    M.toneMapped &&
      ($ === null || $.isXRRenderTarget === !0) &&
      (Dt = i.toneMapping);
    const te = {
      shaderID: tt,
      shaderType: M.type,
      shaderName: M.name,
      vertexShader: Qt,
      fragmentShader: ne,
      defines: M.defines,
      customVertexShaderID: Xt,
      customFragmentShaderID: Y,
      isRawShaderMaterial: M.isRawShaderMaterial === !0,
      glslVersion: M.glslVersion,
      precision: f,
      batching: yt,
      batchingColor: yt && B._colorsTexture !== null,
      instancing: Pt,
      instancingColor: Pt && B.instanceColor !== null,
      instancingMorph: Pt && B.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace:
        $ === null
          ? i.outputColorSpace
          : $.isXRRenderTarget === !0
            ? $.texture.colorSpace
            : Qn,
      alphaToCoverage: !!M.alphaToCoverage,
      map: Ht,
      matcap: Me,
      envMap: P,
      envMapMode: P && K.mapping,
      envMapCubeUVHeight: k,
      aoMap: ie,
      lightMap: Lt,
      bumpMap: Rt,
      normalMap: gt,
      displacementMap: d && re,
      emissiveMap: _t,
      normalMapObjectSpace: gt && M.normalMapType === 1,
      normalMapTangentSpace: gt && M.normalMapType === 0,
      metalnessMap: Ft,
      roughnessMap: ge,
      anisotropy: ue,
      anisotropyMap: X,
      clearcoat: R,
      clearcoatMap: St,
      clearcoatNormalMap: it,
      clearcoatRoughnessMap: vt,
      dispersion: x,
      iridescence: O,
      iridescenceMap: xt,
      iridescenceThicknessMap: et,
      sheen: q,
      sheenColorMap: ct,
      sheenRoughnessMap: wt,
      specularMap: Mt,
      specularColorMap: at,
      specularIntensityMap: Ut,
      transmission: J,
      transmissionMap: U,
      thicknessMap: nt,
      gradientMap: rt,
      opaque:
        M.transparent === !1 && M.blending === 1 && M.alphaToCoverage === !1,
      alphaMap: ft,
      alphaTest: j,
      alphaHash: Z,
      combine: M.combine,
      mapUv: Ht && v(M.map.channel),
      aoMapUv: ie && v(M.aoMap.channel),
      lightMapUv: Lt && v(M.lightMap.channel),
      bumpMapUv: Rt && v(M.bumpMap.channel),
      normalMapUv: gt && v(M.normalMap.channel),
      displacementMapUv: re && v(M.displacementMap.channel),
      emissiveMapUv: _t && v(M.emissiveMap.channel),
      metalnessMapUv: Ft && v(M.metalnessMap.channel),
      roughnessMapUv: ge && v(M.roughnessMap.channel),
      anisotropyMapUv: X && v(M.anisotropyMap.channel),
      clearcoatMapUv: St && v(M.clearcoatMap.channel),
      clearcoatNormalMapUv: it && v(M.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: vt && v(M.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xt && v(M.iridescenceMap.channel),
      iridescenceThicknessMapUv: et && v(M.iridescenceThicknessMap.channel),
      sheenColorMapUv: ct && v(M.sheenColorMap.channel),
      sheenRoughnessMapUv: wt && v(M.sheenRoughnessMap.channel),
      specularMapUv: Mt && v(M.specularMap.channel),
      specularColorMapUv: at && v(M.specularColorMap.channel),
      specularIntensityMapUv: Ut && v(M.specularIntensityMap.channel),
      transmissionMapUv: U && v(M.transmissionMap.channel),
      thicknessMapUv: nt && v(M.thicknessMap.channel),
      alphaMapUv: ft && v(M.alphaMap.channel),
      vertexTangents: !!W.attributes.tangent && (gt || ue),
      vertexColors: M.vertexColors,
      vertexAlphas:
        M.vertexColors === !0 &&
        !!W.attributes.color &&
        W.attributes.color.itemSize === 4,
      pointsUvs: B.isPoints === !0 && !!W.attributes.uv && (Ht || ft),
      fog: !!H,
      useFog: M.fog === !0,
      fogExp2: !!H && H.isFogExp2,
      flatShading: M.flatShading === !0 && M.wireframe === !1,
      sizeAttenuation: M.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      reversedDepthBuffer: dt,
      skinning: B.isSkinnedMesh === !0,
      morphTargets: W.morphAttributes.position !== void 0,
      morphNormals: W.morphAttributes.normal !== void 0,
      morphColors: W.morphAttributes.color !== void 0,
      morphTargetsCount: Et,
      morphTextureStride: Bt,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numLightProbes: S.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: M.dithering,
      shadowMapEnabled: i.shadowMap.enabled && D.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Dt,
      decodeVideoTexture:
        Ht &&
        M.map.isVideoTexture === !0 &&
        kt.getTransfer(M.map.colorSpace) === $t,
      decodeVideoTextureEmissive:
        _t &&
        M.emissiveMap.isVideoTexture === !0 &&
        kt.getTransfer(M.emissiveMap.colorSpace) === $t,
      premultipliedAlpha: M.premultipliedAlpha,
      doubleSided: M.side === 2,
      flipSided: M.side === 1,
      useDepthPacking: M.depthPacking >= 0,
      depthPacking: M.depthPacking || 0,
      index0AttributeName: M.index0AttributeName,
      extensionClipCullDistance:
        mt &&
        M.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((mt && M.extensions.multiDraw === !0) || yt) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: M.customProgramCacheKey(),
    };
    return (
      (te.vertexUv1s = c.has(1)),
      (te.vertexUv2s = c.has(2)),
      (te.vertexUv3s = c.has(3)),
      c.clear(),
      te
    );
  }
  function p(M) {
    const S = [];
    if (
      (M.shaderID
        ? S.push(M.shaderID)
        : (S.push(M.customVertexShaderID), S.push(M.customFragmentShaderID)),
      M.defines !== void 0)
    )
      for (const D in M.defines) (S.push(D), S.push(M.defines[D]));
    return (
      M.isRawShaderMaterial === !1 &&
        (A(S, M), E(S, M), S.push(i.outputColorSpace)),
      S.push(M.customProgramCacheKey),
      S.join()
    );
  }
  function A(M, S) {
    (M.push(S.precision),
      M.push(S.outputColorSpace),
      M.push(S.envMapMode),
      M.push(S.envMapCubeUVHeight),
      M.push(S.mapUv),
      M.push(S.alphaMapUv),
      M.push(S.lightMapUv),
      M.push(S.aoMapUv),
      M.push(S.bumpMapUv),
      M.push(S.normalMapUv),
      M.push(S.displacementMapUv),
      M.push(S.emissiveMapUv),
      M.push(S.metalnessMapUv),
      M.push(S.roughnessMapUv),
      M.push(S.anisotropyMapUv),
      M.push(S.clearcoatMapUv),
      M.push(S.clearcoatNormalMapUv),
      M.push(S.clearcoatRoughnessMapUv),
      M.push(S.iridescenceMapUv),
      M.push(S.iridescenceThicknessMapUv),
      M.push(S.sheenColorMapUv),
      M.push(S.sheenRoughnessMapUv),
      M.push(S.specularMapUv),
      M.push(S.specularColorMapUv),
      M.push(S.specularIntensityMapUv),
      M.push(S.transmissionMapUv),
      M.push(S.thicknessMapUv),
      M.push(S.combine),
      M.push(S.fogExp2),
      M.push(S.sizeAttenuation),
      M.push(S.morphTargetsCount),
      M.push(S.morphAttributeCount),
      M.push(S.numDirLights),
      M.push(S.numPointLights),
      M.push(S.numSpotLights),
      M.push(S.numSpotLightMaps),
      M.push(S.numHemiLights),
      M.push(S.numRectAreaLights),
      M.push(S.numDirLightShadows),
      M.push(S.numPointLightShadows),
      M.push(S.numSpotLightShadows),
      M.push(S.numSpotLightShadowsWithMaps),
      M.push(S.numLightProbes),
      M.push(S.shadowMapType),
      M.push(S.toneMapping),
      M.push(S.numClippingPlanes),
      M.push(S.numClipIntersection),
      M.push(S.depthPacking));
  }
  function E(M, S) {
    (o.disableAll(),
      S.supportsVertexTextures && o.enable(0),
      S.instancing && o.enable(1),
      S.instancingColor && o.enable(2),
      S.instancingMorph && o.enable(3),
      S.matcap && o.enable(4),
      S.envMap && o.enable(5),
      S.normalMapObjectSpace && o.enable(6),
      S.normalMapTangentSpace && o.enable(7),
      S.clearcoat && o.enable(8),
      S.iridescence && o.enable(9),
      S.alphaTest && o.enable(10),
      S.vertexColors && o.enable(11),
      S.vertexAlphas && o.enable(12),
      S.vertexUv1s && o.enable(13),
      S.vertexUv2s && o.enable(14),
      S.vertexUv3s && o.enable(15),
      S.vertexTangents && o.enable(16),
      S.anisotropy && o.enable(17),
      S.alphaHash && o.enable(18),
      S.batching && o.enable(19),
      S.dispersion && o.enable(20),
      S.batchingColor && o.enable(21),
      S.gradientMap && o.enable(22),
      M.push(o.mask),
      o.disableAll(),
      S.fog && o.enable(0),
      S.useFog && o.enable(1),
      S.flatShading && o.enable(2),
      S.logarithmicDepthBuffer && o.enable(3),
      S.reversedDepthBuffer && o.enable(4),
      S.skinning && o.enable(5),
      S.morphTargets && o.enable(6),
      S.morphNormals && o.enable(7),
      S.morphColors && o.enable(8),
      S.premultipliedAlpha && o.enable(9),
      S.shadowMapEnabled && o.enable(10),
      S.doubleSided && o.enable(11),
      S.flipSided && o.enable(12),
      S.useDepthPacking && o.enable(13),
      S.dithering && o.enable(14),
      S.transmission && o.enable(15),
      S.sheen && o.enable(16),
      S.opaque && o.enable(17),
      S.pointsUvs && o.enable(18),
      S.decodeVideoTexture && o.enable(19),
      S.decodeVideoTextureEmissive && o.enable(20),
      S.alphaToCoverage && o.enable(21),
      M.push(o.mask));
  }
  function _(M) {
    const S = g[M.type];
    let D;
    if (S) {
      const I = We[S];
      D = Tl.clone(I.uniforms);
    } else D = M.uniforms;
    return D;
  }
  function b(M, S) {
    let D;
    for (let I = 0, B = u.length; I < B; I++) {
      const H = u[I];
      if (H.cacheKey === S) {
        ((D = H), ++D.usedTimes);
        break;
      }
    }
    return (D === void 0 && ((D = new Id(i, S, M, s)), u.push(D)), D);
  }
  function T(M) {
    if (--M.usedTimes === 0) {
      const S = u.indexOf(M);
      ((u[S] = u[u.length - 1]), u.pop(), M.destroy());
    }
  }
  function w(M) {
    l.remove(M);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: _,
    acquireProgram: b,
    releaseProgram: T,
    releaseShaderCache: w,
    programs: u,
    dispose: C,
  };
}
function zd() {
  let i = new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return (o === void 0 && ((o = {}), i.set(a, o)), o);
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = new WeakMap();
  }
  return { has: t, get: e, remove: n, update: r, dispose: s };
}
function Gd(i, t) {
  return i.groupOrder !== t.groupOrder
    ? i.groupOrder - t.groupOrder
    : i.renderOrder !== t.renderOrder
      ? i.renderOrder - t.renderOrder
      : i.material.id !== t.material.id
        ? i.material.id - t.material.id
        : i.z !== t.z
          ? i.z - t.z
          : i.id - t.id;
}
function ka(i, t) {
  return i.groupOrder !== t.groupOrder
    ? i.groupOrder - t.groupOrder
    : i.renderOrder !== t.renderOrder
      ? i.renderOrder - t.renderOrder
      : i.z !== t.z
        ? t.z - i.z
        : i.id - t.id;
}
function Wa() {
  const i = [];
  let t = 0;
  const e = [],
    n = [],
    r = [];
  function s() {
    ((t = 0), (e.length = 0), (n.length = 0), (r.length = 0));
  }
  function a(h, d, f, g, v, m) {
    let p = i[t];
    return (
      p === void 0
        ? ((p = {
            id: h.id,
            object: h,
            geometry: d,
            material: f,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: v,
            group: m,
          }),
          (i[t] = p))
        : ((p.id = h.id),
          (p.object = h),
          (p.geometry = d),
          (p.material = f),
          (p.groupOrder = g),
          (p.renderOrder = h.renderOrder),
          (p.z = v),
          (p.group = m)),
      t++,
      p
    );
  }
  function o(h, d, f, g, v, m) {
    const p = a(h, d, f, g, v, m);
    f.transmission > 0
      ? n.push(p)
      : f.transparent === !0
        ? r.push(p)
        : e.push(p);
  }
  function l(h, d, f, g, v, m) {
    const p = a(h, d, f, g, v, m);
    f.transmission > 0
      ? n.unshift(p)
      : f.transparent === !0
        ? r.unshift(p)
        : e.unshift(p);
  }
  function c(h, d) {
    (e.length > 1 && e.sort(h || Gd),
      n.length > 1 && n.sort(d || ka),
      r.length > 1 && r.sort(d || ka));
  }
  function u() {
    for (let h = t, d = i.length; h < d; h++) {
      const f = i[h];
      if (f.id === null) break;
      ((f.id = null),
        (f.object = null),
        (f.geometry = null),
        (f.material = null),
        (f.group = null));
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function Hd() {
  let i = new WeakMap();
  function t(n, r) {
    const s = i.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new Wa()), i.set(n, [a]))
        : r >= s.length
          ? ((a = new Wa()), s.push(a))
          : (a = s[r]),
      a
    );
  }
  function e() {
    i = new WeakMap();
  }
  return { get: t, dispose: e };
}
function Vd() {
  const i = {};
  return {
    get: function (t) {
      if (i[t.id] !== void 0) return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = { direction: new L(), color: new zt() };
          break;
        case "SpotLight":
          e = {
            position: new L(),
            direction: new L(),
            color: new zt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          e = { position: new L(), color: new zt(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          e = { direction: new L(), skyColor: new zt(), groundColor: new zt() };
          break;
        case "RectAreaLight":
          e = {
            color: new zt(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return ((i[t.id] = e), e);
    },
  };
}
function kd() {
  const i = {};
  return {
    get: function (t) {
      if (i[t.id] !== void 0) return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot(),
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot(),
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ot(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((i[t.id] = e), e);
    },
  };
}
let Wd = 0;
function Xd(i, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function qd(i) {
  const t = new Vd(),
    e = kd(),
    n = {
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
        numLightProbes: -1,
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
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) n.probe.push(new L());
  const r = new L(),
    s = new Zt(),
    a = new Zt();
  function o(c) {
    let u = 0,
      h = 0,
      d = 0;
    for (let M = 0; M < 9; M++) n.probe[M].set(0, 0, 0);
    let f = 0,
      g = 0,
      v = 0,
      m = 0,
      p = 0,
      A = 0,
      E = 0,
      _ = 0,
      b = 0,
      T = 0,
      w = 0;
    c.sort(Xd);
    for (let M = 0, S = c.length; M < S; M++) {
      const D = c[M],
        I = D.color,
        B = D.intensity,
        H = D.distance,
        W = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight) ((u += I.r * B), (h += I.g * B), (d += I.b * B));
      else if (D.isLightProbe) {
        for (let V = 0; V < 9; V++)
          n.probe[V].addScaledVector(D.sh.coefficients[V], B);
        w++;
      } else if (D.isDirectionalLight) {
        const V = t.get(D);
        if ((V.color.copy(D.color).multiplyScalar(D.intensity), D.castShadow)) {
          const K = D.shadow,
            k = e.get(D);
          ((k.shadowIntensity = K.intensity),
            (k.shadowBias = K.bias),
            (k.shadowNormalBias = K.normalBias),
            (k.shadowRadius = K.radius),
            (k.shadowMapSize = K.mapSize),
            (n.directionalShadow[f] = k),
            (n.directionalShadowMap[f] = W),
            (n.directionalShadowMatrix[f] = D.shadow.matrix),
            A++);
        }
        ((n.directional[f] = V), f++);
      } else if (D.isSpotLight) {
        const V = t.get(D);
        (V.position.setFromMatrixPosition(D.matrixWorld),
          V.color.copy(I).multiplyScalar(B),
          (V.distance = H),
          (V.coneCos = Math.cos(D.angle)),
          (V.penumbraCos = Math.cos(D.angle * (1 - D.penumbra))),
          (V.decay = D.decay),
          (n.spot[v] = V));
        const K = D.shadow;
        if (
          (D.map &&
            ((n.spotLightMap[b] = D.map),
            b++,
            K.updateMatrices(D),
            D.castShadow && T++),
          (n.spotLightMatrix[v] = K.matrix),
          D.castShadow)
        ) {
          const k = e.get(D);
          ((k.shadowIntensity = K.intensity),
            (k.shadowBias = K.bias),
            (k.shadowNormalBias = K.normalBias),
            (k.shadowRadius = K.radius),
            (k.shadowMapSize = K.mapSize),
            (n.spotShadow[v] = k),
            (n.spotShadowMap[v] = W),
            _++);
        }
        v++;
      } else if (D.isRectAreaLight) {
        const V = t.get(D);
        (V.color.copy(I).multiplyScalar(B),
          V.halfWidth.set(D.width * 0.5, 0, 0),
          V.halfHeight.set(0, D.height * 0.5, 0),
          (n.rectArea[m] = V),
          m++);
      } else if (D.isPointLight) {
        const V = t.get(D);
        if (
          (V.color.copy(D.color).multiplyScalar(D.intensity),
          (V.distance = D.distance),
          (V.decay = D.decay),
          D.castShadow)
        ) {
          const K = D.shadow,
            k = e.get(D);
          ((k.shadowIntensity = K.intensity),
            (k.shadowBias = K.bias),
            (k.shadowNormalBias = K.normalBias),
            (k.shadowRadius = K.radius),
            (k.shadowMapSize = K.mapSize),
            (k.shadowCameraNear = K.camera.near),
            (k.shadowCameraFar = K.camera.far),
            (n.pointShadow[g] = k),
            (n.pointShadowMap[g] = W),
            (n.pointShadowMatrix[g] = D.shadow.matrix),
            E++);
        }
        ((n.point[g] = V), g++);
      } else if (D.isHemisphereLight) {
        const V = t.get(D);
        (V.skyColor.copy(D.color).multiplyScalar(B),
          V.groundColor.copy(D.groundColor).multiplyScalar(B),
          (n.hemi[p] = V),
          p++);
      }
    }
    (m > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = st.LTC_FLOAT_1), (n.rectAreaLTC2 = st.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = st.LTC_HALF_1), (n.rectAreaLTC2 = st.LTC_HALF_2))),
      (n.ambient[0] = u),
      (n.ambient[1] = h),
      (n.ambient[2] = d));
    const C = n.hash;
    (C.directionalLength !== f ||
      C.pointLength !== g ||
      C.spotLength !== v ||
      C.rectAreaLength !== m ||
      C.hemiLength !== p ||
      C.numDirectionalShadows !== A ||
      C.numPointShadows !== E ||
      C.numSpotShadows !== _ ||
      C.numSpotMaps !== b ||
      C.numLightProbes !== w) &&
      ((n.directional.length = f),
      (n.spot.length = v),
      (n.rectArea.length = m),
      (n.point.length = g),
      (n.hemi.length = p),
      (n.directionalShadow.length = A),
      (n.directionalShadowMap.length = A),
      (n.pointShadow.length = E),
      (n.pointShadowMap.length = E),
      (n.spotShadow.length = _),
      (n.spotShadowMap.length = _),
      (n.directionalShadowMatrix.length = A),
      (n.pointShadowMatrix.length = E),
      (n.spotLightMatrix.length = _ + b - T),
      (n.spotLightMap.length = b),
      (n.numSpotLightShadowsWithMaps = T),
      (n.numLightProbes = w),
      (C.directionalLength = f),
      (C.pointLength = g),
      (C.spotLength = v),
      (C.rectAreaLength = m),
      (C.hemiLength = p),
      (C.numDirectionalShadows = A),
      (C.numPointShadows = E),
      (C.numSpotShadows = _),
      (C.numSpotMaps = b),
      (C.numLightProbes = w),
      (n.version = Wd++));
  }
  function l(c, u) {
    let h = 0,
      d = 0,
      f = 0,
      g = 0,
      v = 0;
    const m = u.matrixWorldInverse;
    for (let p = 0, A = c.length; p < A; p++) {
      const E = c[p];
      if (E.isDirectionalLight) {
        const _ = n.directional[h];
        (_.direction.setFromMatrixPosition(E.matrixWorld),
          r.setFromMatrixPosition(E.target.matrixWorld),
          _.direction.sub(r),
          _.direction.transformDirection(m),
          h++);
      } else if (E.isSpotLight) {
        const _ = n.spot[f];
        (_.position.setFromMatrixPosition(E.matrixWorld),
          _.position.applyMatrix4(m),
          _.direction.setFromMatrixPosition(E.matrixWorld),
          r.setFromMatrixPosition(E.target.matrixWorld),
          _.direction.sub(r),
          _.direction.transformDirection(m),
          f++);
      } else if (E.isRectAreaLight) {
        const _ = n.rectArea[g];
        (_.position.setFromMatrixPosition(E.matrixWorld),
          _.position.applyMatrix4(m),
          a.identity(),
          s.copy(E.matrixWorld),
          s.premultiply(m),
          a.extractRotation(s),
          _.halfWidth.set(E.width * 0.5, 0, 0),
          _.halfHeight.set(0, E.height * 0.5, 0),
          _.halfWidth.applyMatrix4(a),
          _.halfHeight.applyMatrix4(a),
          g++);
      } else if (E.isPointLight) {
        const _ = n.point[d];
        (_.position.setFromMatrixPosition(E.matrixWorld),
          _.position.applyMatrix4(m),
          d++);
      } else if (E.isHemisphereLight) {
        const _ = n.hemi[v];
        (_.direction.setFromMatrixPosition(E.matrixWorld),
          _.direction.transformDirection(m),
          v++);
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function Xa(i) {
  const t = new qd(i),
    e = [],
    n = [];
  function r(u) {
    ((c.camera = u), (e.length = 0), (n.length = 0));
  }
  function s(u) {
    e.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    t.setup(e);
  }
  function l(u) {
    t.setupView(e, u);
  }
  const c = {
    lightsArray: e,
    shadowsArray: n,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
  };
  return {
    init: r,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a,
  };
}
function Yd(i) {
  let t = new WeakMap();
  function e(r, s = 0) {
    const a = t.get(r);
    let o;
    return (
      a === void 0
        ? ((o = new Xa(i)), t.set(r, [o]))
        : s >= a.length
          ? ((o = new Xa(i)), a.push(o))
          : (o = a[s]),
      o
    );
  }
  function n() {
    t = new WeakMap();
  }
  return { get: e, dispose: n };
}
const Zd = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Jd = `uniform sampler2D shadow_pass;
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
function $d(i, t, e) {
  let n = new As();
  const r = new ot(),
    s = new ot(),
    a = new Kt(),
    o = new gc({ depthPacking: 3201 }),
    l = new _c(),
    c = {},
    u = e.maxTextureSize,
    h = { 0: 1, 1: 0, 2: 2 },
    d = new hn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new ot() },
        radius: { value: 4 },
      },
      vertexShader: Zd,
      fragmentShader: Jd,
    }),
    f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new de();
  g.setAttribute(
    "position",
    new Re(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const v = new ve(g, d),
    m = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = 1));
  let p = this.type;
  this.render = function (T, w, C) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      T.length === 0
    )
      return;
    const M = i.getRenderTarget(),
      S = i.getActiveCubeFace(),
      D = i.getActiveMipmapLevel(),
      I = i.state;
    (I.setBlending(0),
      I.buffers.depth.getReversed() === !0
        ? I.buffers.color.setClear(0, 0, 0, 0)
        : I.buffers.color.setClear(1, 1, 1, 1),
      I.buffers.depth.setTest(!0),
      I.setScissorTest(!1));
    const B = p !== 3 && this.type === 3,
      H = p === 3 && this.type !== 3;
    for (let W = 0, V = T.length; W < V; W++) {
      const K = T[W],
        k = K.shadow;
      if (k === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (k.autoUpdate === !1 && k.needsUpdate === !1) continue;
      r.copy(k.mapSize);
      const tt = k.getFrameExtents();
      if (
        (r.multiply(tt),
        s.copy(k.mapSize),
        (r.x > u || r.y > u) &&
          (r.x > u &&
            ((s.x = Math.floor(u / tt.x)),
            (r.x = s.x * tt.x),
            (k.mapSize.x = s.x)),
          r.y > u &&
            ((s.y = Math.floor(u / tt.y)),
            (r.y = s.y * tt.y),
            (k.mapSize.y = s.y))),
        k.map === null || B === !0 || H === !0)
      ) {
        const Et = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        (k.map !== null && k.map.dispose(),
          (k.map = new bn(r.x, r.y, Et)),
          (k.map.texture.name = K.name + ".shadowMap"),
          k.camera.updateProjectionMatrix());
      }
      (i.setRenderTarget(k.map), i.clear());
      const ut = k.getViewportCount();
      for (let Et = 0; Et < ut; Et++) {
        const Bt = k.getViewport(Et);
        (a.set(s.x * Bt.x, s.y * Bt.y, s.x * Bt.z, s.y * Bt.w),
          I.viewport(a),
          k.updateMatrices(K, Et),
          (n = k.getFrustum()),
          _(w, C, k.camera, K, this.type));
      }
      (k.isPointLightShadow !== !0 && this.type === 3 && A(k, C),
        (k.needsUpdate = !1));
    }
    ((p = this.type), (m.needsUpdate = !1), i.setRenderTarget(M, S, D));
  };
  function A(T, w) {
    const C = t.update(v);
    (d.defines.VSM_SAMPLES !== T.blurSamples &&
      ((d.defines.VSM_SAMPLES = T.blurSamples),
      (f.defines.VSM_SAMPLES = T.blurSamples),
      (d.needsUpdate = !0),
      (f.needsUpdate = !0)),
      T.mapPass === null && (T.mapPass = new bn(r.x, r.y)),
      (d.uniforms.shadow_pass.value = T.map.texture),
      (d.uniforms.resolution.value = T.mapSize),
      (d.uniforms.radius.value = T.radius),
      i.setRenderTarget(T.mapPass),
      i.clear(),
      i.renderBufferDirect(w, null, C, d, v, null),
      (f.uniforms.shadow_pass.value = T.mapPass.texture),
      (f.uniforms.resolution.value = T.mapSize),
      (f.uniforms.radius.value = T.radius),
      i.setRenderTarget(T.map),
      i.clear(),
      i.renderBufferDirect(w, null, C, f, v, null));
  }
  function E(T, w, C, M) {
    let S = null;
    const D =
      C.isPointLight === !0 ? T.customDistanceMaterial : T.customDepthMaterial;
    if (D !== void 0) S = D;
    else if (
      ((S = C.isPointLight === !0 ? l : o),
      (i.localClippingEnabled &&
        w.clipShadows === !0 &&
        Array.isArray(w.clippingPlanes) &&
        w.clippingPlanes.length !== 0) ||
        (w.displacementMap && w.displacementScale !== 0) ||
        (w.alphaMap && w.alphaTest > 0) ||
        (w.map && w.alphaTest > 0) ||
        w.alphaToCoverage === !0)
    ) {
      const I = S.uuid,
        B = w.uuid;
      let H = c[I];
      H === void 0 && ((H = {}), (c[I] = H));
      let W = H[B];
      (W === void 0 &&
        ((W = S.clone()), (H[B] = W), w.addEventListener("dispose", b)),
        (S = W));
    }
    if (
      ((S.visible = w.visible),
      (S.wireframe = w.wireframe),
      M === 3
        ? (S.side = w.shadowSide !== null ? w.shadowSide : w.side)
        : (S.side = w.shadowSide !== null ? w.shadowSide : h[w.side]),
      (S.alphaMap = w.alphaMap),
      (S.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest),
      (S.map = w.map),
      (S.clipShadows = w.clipShadows),
      (S.clippingPlanes = w.clippingPlanes),
      (S.clipIntersection = w.clipIntersection),
      (S.displacementMap = w.displacementMap),
      (S.displacementScale = w.displacementScale),
      (S.displacementBias = w.displacementBias),
      (S.wireframeLinewidth = w.wireframeLinewidth),
      (S.linewidth = w.linewidth),
      C.isPointLight === !0 && S.isMeshDistanceMaterial === !0)
    ) {
      const I = i.properties.get(S);
      I.light = C;
    }
    return S;
  }
  function _(T, w, C, M, S) {
    if (T.visible === !1) return;
    if (
      T.layers.test(w.layers) &&
      (T.isMesh || T.isLine || T.isPoints) &&
      (T.castShadow || (T.receiveShadow && S === 3)) &&
      (!T.frustumCulled || n.intersectsObject(T))
    ) {
      T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, T.matrixWorld);
      const B = t.update(T),
        H = T.material;
      if (Array.isArray(H)) {
        const W = B.groups;
        for (let V = 0, K = W.length; V < K; V++) {
          const k = W[V],
            tt = H[k.materialIndex];
          if (tt && tt.visible) {
            const ut = E(T, tt, M, S);
            (T.onBeforeShadow(i, T, w, C, B, ut, k),
              i.renderBufferDirect(C, null, B, ut, T, k),
              T.onAfterShadow(i, T, w, C, B, ut, k));
          }
        }
      } else if (H.visible) {
        const W = E(T, H, M, S);
        (T.onBeforeShadow(i, T, w, C, B, W, null),
          i.renderBufferDirect(C, null, B, W, T, null),
          T.onAfterShadow(i, T, w, C, B, W, null));
      }
    }
    const I = T.children;
    for (let B = 0, H = I.length; B < H; B++) _(I[B], w, C, M, S);
  }
  function b(T) {
    T.target.removeEventListener("dispose", b);
    for (const C in c) {
      const M = c[C],
        S = T.target.uuid;
      S in M && (M[S].dispose(), delete M[S]);
    }
  }
}
const Kd = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
function jd(i, t) {
  function e() {
    let U = !1;
    const nt = new Kt();
    let rt = null;
    const ft = new Kt(0, 0, 0, 0);
    return {
      setMask: function (j) {
        rt !== j && !U && (i.colorMask(j, j, j, j), (rt = j));
      },
      setLocked: function (j) {
        U = j;
      },
      setClear: function (j, Z, mt, Dt, te) {
        (te === !0 && ((j *= Dt), (Z *= Dt), (mt *= Dt)),
          nt.set(j, Z, mt, Dt),
          ft.equals(nt) === !1 && (i.clearColor(j, Z, mt, Dt), ft.copy(nt)));
      },
      reset: function () {
        ((U = !1), (rt = null), ft.set(-1, 0, 0, 0));
      },
    };
  }
  function n() {
    let U = !1,
      nt = !1,
      rt = null,
      ft = null,
      j = null;
    return {
      setReversed: function (Z) {
        if (nt !== Z) {
          const mt = t.get("EXT_clip_control");
          (Z
            ? mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.ZERO_TO_ONE_EXT)
            : mt.clipControlEXT(mt.LOWER_LEFT_EXT, mt.NEGATIVE_ONE_TO_ONE_EXT),
            (nt = Z));
          const Dt = j;
          ((j = null), this.setClear(Dt));
        }
      },
      getReversed: function () {
        return nt;
      },
      setTest: function (Z) {
        Z ? $(i.DEPTH_TEST) : dt(i.DEPTH_TEST);
      },
      setMask: function (Z) {
        rt !== Z && !U && (i.depthMask(Z), (rt = Z));
      },
      setFunc: function (Z) {
        if ((nt && (Z = Kd[Z]), ft !== Z)) {
          switch (Z) {
            case 0:
              i.depthFunc(i.NEVER);
              break;
            case 1:
              i.depthFunc(i.ALWAYS);
              break;
            case 2:
              i.depthFunc(i.LESS);
              break;
            case 3:
              i.depthFunc(i.LEQUAL);
              break;
            case 4:
              i.depthFunc(i.EQUAL);
              break;
            case 5:
              i.depthFunc(i.GEQUAL);
              break;
            case 6:
              i.depthFunc(i.GREATER);
              break;
            case 7:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          ft = Z;
        }
      },
      setLocked: function (Z) {
        U = Z;
      },
      setClear: function (Z) {
        j !== Z && (nt && (Z = 1 - Z), i.clearDepth(Z), (j = Z));
      },
      reset: function () {
        ((U = !1), (rt = null), (ft = null), (j = null), (nt = !1));
      },
    };
  }
  function r() {
    let U = !1,
      nt = null,
      rt = null,
      ft = null,
      j = null,
      Z = null,
      mt = null,
      Dt = null,
      te = null;
    return {
      setTest: function (qt) {
        U || (qt ? $(i.STENCIL_TEST) : dt(i.STENCIL_TEST));
      },
      setMask: function (qt) {
        nt !== qt && !U && (i.stencilMask(qt), (nt = qt));
      },
      setFunc: function (qt, Je, ke) {
        (rt !== qt || ft !== Je || j !== ke) &&
          (i.stencilFunc(qt, Je, ke), (rt = qt), (ft = Je), (j = ke));
      },
      setOp: function (qt, Je, ke) {
        (Z !== qt || mt !== Je || Dt !== ke) &&
          (i.stencilOp(qt, Je, ke), (Z = qt), (mt = Je), (Dt = ke));
      },
      setLocked: function (qt) {
        U = qt;
      },
      setClear: function (qt) {
        te !== qt && (i.clearStencil(qt), (te = qt));
      },
      reset: function () {
        ((U = !1),
          (nt = null),
          (rt = null),
          (ft = null),
          (j = null),
          (Z = null),
          (mt = null),
          (Dt = null),
          (te = null));
      },
    };
  }
  const s = new e(),
    a = new n(),
    o = new r(),
    l = new WeakMap(),
    c = new WeakMap();
  let u = {},
    h = {},
    d = new WeakMap(),
    f = [],
    g = null,
    v = !1,
    m = null,
    p = null,
    A = null,
    E = null,
    _ = null,
    b = null,
    T = null,
    w = new zt(0, 0, 0),
    C = 0,
    M = !1,
    S = null,
    D = null,
    I = null,
    B = null,
    H = null;
  const W = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let V = !1,
    K = 0;
  const k = i.getParameter(i.VERSION);
  k.indexOf("WebGL") !== -1
    ? ((K = parseFloat(/^WebGL (\d)/.exec(k)[1])), (V = K >= 1))
    : k.indexOf("OpenGL ES") !== -1 &&
      ((K = parseFloat(/^OpenGL ES (\d)/.exec(k)[1])), (V = K >= 2));
  let tt = null,
    ut = {};
  const Et = i.getParameter(i.SCISSOR_BOX),
    Bt = i.getParameter(i.VIEWPORT),
    Qt = new Kt().fromArray(Et),
    ne = new Kt().fromArray(Bt);
  function Xt(U, nt, rt, ft) {
    const j = new Uint8Array(4),
      Z = i.createTexture();
    (i.bindTexture(U, Z),
      i.texParameteri(U, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(U, i.TEXTURE_MAG_FILTER, i.NEAREST));
    for (let mt = 0; mt < rt; mt++)
      U === i.TEXTURE_3D || U === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(nt, 0, i.RGBA, 1, 1, ft, 0, i.RGBA, i.UNSIGNED_BYTE, j)
        : i.texImage2D(nt + mt, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, j);
    return Z;
  }
  const Y = {};
  ((Y[i.TEXTURE_2D] = Xt(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (Y[i.TEXTURE_CUBE_MAP] = Xt(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (Y[i.TEXTURE_2D_ARRAY] = Xt(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (Y[i.TEXTURE_3D] = Xt(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    s.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    $(i.DEPTH_TEST),
    a.setFunc(3),
    Rt(!1),
    gt(1),
    $(i.CULL_FACE),
    ie(0));
  function $(U) {
    u[U] !== !0 && (i.enable(U), (u[U] = !0));
  }
  function dt(U) {
    u[U] !== !1 && (i.disable(U), (u[U] = !1));
  }
  function Pt(U, nt) {
    return h[U] !== nt
      ? (i.bindFramebuffer(U, nt),
        (h[U] = nt),
        U === i.DRAW_FRAMEBUFFER && (h[i.FRAMEBUFFER] = nt),
        U === i.FRAMEBUFFER && (h[i.DRAW_FRAMEBUFFER] = nt),
        !0)
      : !1;
  }
  function yt(U, nt) {
    let rt = f,
      ft = !1;
    if (U) {
      ((rt = d.get(nt)), rt === void 0 && ((rt = []), d.set(nt, rt)));
      const j = U.textures;
      if (rt.length !== j.length || rt[0] !== i.COLOR_ATTACHMENT0) {
        for (let Z = 0, mt = j.length; Z < mt; Z++)
          rt[Z] = i.COLOR_ATTACHMENT0 + Z;
        ((rt.length = j.length), (ft = !0));
      }
    } else rt[0] !== i.BACK && ((rt[0] = i.BACK), (ft = !0));
    ft && i.drawBuffers(rt);
  }
  function Ht(U) {
    return g !== U ? (i.useProgram(U), (g = U), !0) : !1;
  }
  const Me = {
    100: i.FUNC_ADD,
    101: i.FUNC_SUBTRACT,
    102: i.FUNC_REVERSE_SUBTRACT,
  };
  ((Me[103] = i.MIN), (Me[104] = i.MAX));
  const P = {
    200: i.ZERO,
    201: i.ONE,
    202: i.SRC_COLOR,
    204: i.SRC_ALPHA,
    210: i.SRC_ALPHA_SATURATE,
    208: i.DST_COLOR,
    206: i.DST_ALPHA,
    203: i.ONE_MINUS_SRC_COLOR,
    205: i.ONE_MINUS_SRC_ALPHA,
    209: i.ONE_MINUS_DST_COLOR,
    207: i.ONE_MINUS_DST_ALPHA,
    211: i.CONSTANT_COLOR,
    212: i.ONE_MINUS_CONSTANT_COLOR,
    213: i.CONSTANT_ALPHA,
    214: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function ie(U, nt, rt, ft, j, Z, mt, Dt, te, qt) {
    if (U === 0) {
      v === !0 && (dt(i.BLEND), (v = !1));
      return;
    }
    if ((v === !1 && ($(i.BLEND), (v = !0)), U !== 5)) {
      if (U !== m || qt !== M) {
        if (
          ((p !== 100 || _ !== 100) &&
            (i.blendEquation(i.FUNC_ADD), (p = 100), (_ = 100)),
          qt)
        )
          switch (U) {
            case 1:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case 2:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case 3:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case 4:
              i.blendFuncSeparate(
                i.DST_COLOR,
                i.ONE_MINUS_SRC_ALPHA,
                i.ZERO,
                i.ONE,
              );
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        else
          switch (U) {
            case 1:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case 2:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case 3:
              console.error(
                "THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true",
              );
              break;
            case 4:
              console.error(
                "THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true",
              );
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", U);
              break;
          }
        ((A = null),
          (E = null),
          (b = null),
          (T = null),
          w.set(0, 0, 0),
          (C = 0),
          (m = U),
          (M = qt));
      }
      return;
    }
    ((j = j || nt),
      (Z = Z || rt),
      (mt = mt || ft),
      (nt !== p || j !== _) &&
        (i.blendEquationSeparate(Me[nt], Me[j]), (p = nt), (_ = j)),
      (rt !== A || ft !== E || Z !== b || mt !== T) &&
        (i.blendFuncSeparate(P[rt], P[ft], P[Z], P[mt]),
        (A = rt),
        (E = ft),
        (b = Z),
        (T = mt)),
      (Dt.equals(w) === !1 || te !== C) &&
        (i.blendColor(Dt.r, Dt.g, Dt.b, te), w.copy(Dt), (C = te)),
      (m = U),
      (M = !1));
  }
  function Lt(U, nt) {
    U.side === 2 ? dt(i.CULL_FACE) : $(i.CULL_FACE);
    let rt = U.side === 1;
    (nt && (rt = !rt),
      Rt(rt),
      U.blending === 1 && U.transparent === !1
        ? ie(0)
        : ie(
            U.blending,
            U.blendEquation,
            U.blendSrc,
            U.blendDst,
            U.blendEquationAlpha,
            U.blendSrcAlpha,
            U.blendDstAlpha,
            U.blendColor,
            U.blendAlpha,
            U.premultipliedAlpha,
          ),
      a.setFunc(U.depthFunc),
      a.setTest(U.depthTest),
      a.setMask(U.depthWrite),
      s.setMask(U.colorWrite));
    const ft = U.stencilWrite;
    (o.setTest(ft),
      ft &&
        (o.setMask(U.stencilWriteMask),
        o.setFunc(U.stencilFunc, U.stencilRef, U.stencilFuncMask),
        o.setOp(U.stencilFail, U.stencilZFail, U.stencilZPass)),
      _t(U.polygonOffset, U.polygonOffsetFactor, U.polygonOffsetUnits),
      U.alphaToCoverage === !0
        ? $(i.SAMPLE_ALPHA_TO_COVERAGE)
        : dt(i.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function Rt(U) {
    S !== U && (U ? i.frontFace(i.CW) : i.frontFace(i.CCW), (S = U));
  }
  function gt(U) {
    (U !== 0
      ? ($(i.CULL_FACE),
        U !== D &&
          (U === 1
            ? i.cullFace(i.BACK)
            : U === 2
              ? i.cullFace(i.FRONT)
              : i.cullFace(i.FRONT_AND_BACK)))
      : dt(i.CULL_FACE),
      (D = U));
  }
  function re(U) {
    U !== I && (V && i.lineWidth(U), (I = U));
  }
  function _t(U, nt, rt) {
    U
      ? ($(i.POLYGON_OFFSET_FILL),
        (B !== nt || H !== rt) && (i.polygonOffset(nt, rt), (B = nt), (H = rt)))
      : dt(i.POLYGON_OFFSET_FILL);
  }
  function Ft(U) {
    U ? $(i.SCISSOR_TEST) : dt(i.SCISSOR_TEST);
  }
  function ge(U) {
    (U === void 0 && (U = i.TEXTURE0 + W - 1),
      tt !== U && (i.activeTexture(U), (tt = U)));
  }
  function ue(U, nt, rt) {
    rt === void 0 && (tt === null ? (rt = i.TEXTURE0 + W - 1) : (rt = tt));
    let ft = ut[rt];
    (ft === void 0 && ((ft = { type: void 0, texture: void 0 }), (ut[rt] = ft)),
      (ft.type !== U || ft.texture !== nt) &&
        (tt !== rt && (i.activeTexture(rt), (tt = rt)),
        i.bindTexture(U, nt || Y[U]),
        (ft.type = U),
        (ft.texture = nt)));
  }
  function R() {
    const U = ut[tt];
    U !== void 0 &&
      U.type !== void 0 &&
      (i.bindTexture(U.type, null), (U.type = void 0), (U.texture = void 0));
  }
  function x() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function O() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function q() {
    try {
      i.texSubImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function J() {
    try {
      i.texSubImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function X() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function St() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function it() {
    try {
      i.texStorage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function vt() {
    try {
      i.texStorage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function xt() {
    try {
      i.texImage2D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function et() {
    try {
      i.texImage3D(...arguments);
    } catch (U) {
      console.error("THREE.WebGLState:", U);
    }
  }
  function ct(U) {
    Qt.equals(U) === !1 && (i.scissor(U.x, U.y, U.z, U.w), Qt.copy(U));
  }
  function wt(U) {
    ne.equals(U) === !1 && (i.viewport(U.x, U.y, U.z, U.w), ne.copy(U));
  }
  function Mt(U, nt) {
    let rt = c.get(nt);
    rt === void 0 && ((rt = new WeakMap()), c.set(nt, rt));
    let ft = rt.get(U);
    ft === void 0 && ((ft = i.getUniformBlockIndex(nt, U.name)), rt.set(U, ft));
  }
  function at(U, nt) {
    const ft = c.get(nt).get(U);
    l.get(nt) !== ft &&
      (i.uniformBlockBinding(nt, ft, U.__bindingPointIndex), l.set(nt, ft));
  }
  function Ut() {
    (i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (u = {}),
      (tt = null),
      (ut = {}),
      (h = {}),
      (d = new WeakMap()),
      (f = []),
      (g = null),
      (v = !1),
      (m = null),
      (p = null),
      (A = null),
      (E = null),
      (_ = null),
      (b = null),
      (T = null),
      (w = new zt(0, 0, 0)),
      (C = 0),
      (M = !1),
      (S = null),
      (D = null),
      (I = null),
      (B = null),
      (H = null),
      Qt.set(0, 0, i.canvas.width, i.canvas.height),
      ne.set(0, 0, i.canvas.width, i.canvas.height),
      s.reset(),
      a.reset(),
      o.reset());
  }
  return {
    buffers: { color: s, depth: a, stencil: o },
    enable: $,
    disable: dt,
    bindFramebuffer: Pt,
    drawBuffers: yt,
    useProgram: Ht,
    setBlending: ie,
    setMaterial: Lt,
    setFlipSided: Rt,
    setCullFace: gt,
    setLineWidth: re,
    setPolygonOffset: _t,
    setScissorTest: Ft,
    activeTexture: ge,
    bindTexture: ue,
    unbindTexture: R,
    compressedTexImage2D: x,
    compressedTexImage3D: O,
    texImage2D: xt,
    texImage3D: et,
    updateUBOMapping: Mt,
    uniformBlockBinding: at,
    texStorage2D: it,
    texStorage3D: vt,
    texSubImage2D: q,
    texSubImage3D: J,
    compressedTexSubImage2D: X,
    compressedTexSubImage3D: St,
    scissor: ct,
    viewport: wt,
    reset: Ut,
  };
}
function Qd(i, t, e, n, r, s, a) {
  const o = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new ot(),
    u = new WeakMap();
  let h;
  const d = new WeakMap();
  let f = !1;
  try {
    f =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function g(R, x) {
    return f ? new OffscreenCanvas(R, x) : Ai("canvas");
  }
  function v(R, x, O) {
    let q = 1;
    const J = ue(R);
    if (
      ((J.width > O || J.height > O) && (q = O / Math.max(J.width, J.height)),
      q < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && R instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && R instanceof VideoFrame)
      ) {
        const X = Math.floor(q * J.width),
          St = Math.floor(q * J.height);
        h === void 0 && (h = g(X, St));
        const it = x ? g(X, St) : h;
        return (
          (it.width = X),
          (it.height = St),
          it.getContext("2d").drawImage(R, 0, 0, X, St),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              J.width +
              "x" +
              J.height +
              ") to (" +
              X +
              "x" +
              St +
              ").",
          ),
          it
        );
      } else
        return (
          "data" in R &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                J.width +
                "x" +
                J.height +
                ").",
            ),
          R
        );
    return R;
  }
  function m(R) {
    return R.generateMipmaps;
  }
  function p(R) {
    i.generateMipmap(R);
  }
  function A(R) {
    return R.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : R.isWebGL3DRenderTarget
        ? i.TEXTURE_3D
        : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture
          ? i.TEXTURE_2D_ARRAY
          : i.TEXTURE_2D;
  }
  function E(R, x, O, q, J = !1) {
    if (R !== null) {
      if (i[R] !== void 0) return i[R];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          R +
          "'",
      );
    }
    let X = x;
    if (
      (x === i.RED &&
        (O === i.FLOAT && (X = i.R32F),
        O === i.HALF_FLOAT && (X = i.R16F),
        O === i.UNSIGNED_BYTE && (X = i.R8)),
      x === i.RED_INTEGER &&
        (O === i.UNSIGNED_BYTE && (X = i.R8UI),
        O === i.UNSIGNED_SHORT && (X = i.R16UI),
        O === i.UNSIGNED_INT && (X = i.R32UI),
        O === i.BYTE && (X = i.R8I),
        O === i.SHORT && (X = i.R16I),
        O === i.INT && (X = i.R32I)),
      x === i.RG &&
        (O === i.FLOAT && (X = i.RG32F),
        O === i.HALF_FLOAT && (X = i.RG16F),
        O === i.UNSIGNED_BYTE && (X = i.RG8)),
      x === i.RG_INTEGER &&
        (O === i.UNSIGNED_BYTE && (X = i.RG8UI),
        O === i.UNSIGNED_SHORT && (X = i.RG16UI),
        O === i.UNSIGNED_INT && (X = i.RG32UI),
        O === i.BYTE && (X = i.RG8I),
        O === i.SHORT && (X = i.RG16I),
        O === i.INT && (X = i.RG32I)),
      x === i.RGB_INTEGER &&
        (O === i.UNSIGNED_BYTE && (X = i.RGB8UI),
        O === i.UNSIGNED_SHORT && (X = i.RGB16UI),
        O === i.UNSIGNED_INT && (X = i.RGB32UI),
        O === i.BYTE && (X = i.RGB8I),
        O === i.SHORT && (X = i.RGB16I),
        O === i.INT && (X = i.RGB32I)),
      x === i.RGBA_INTEGER &&
        (O === i.UNSIGNED_BYTE && (X = i.RGBA8UI),
        O === i.UNSIGNED_SHORT && (X = i.RGBA16UI),
        O === i.UNSIGNED_INT && (X = i.RGBA32UI),
        O === i.BYTE && (X = i.RGBA8I),
        O === i.SHORT && (X = i.RGBA16I),
        O === i.INT && (X = i.RGBA32I)),
      x === i.RGB &&
        (O === i.UNSIGNED_INT_5_9_9_9_REV && (X = i.RGB9_E5),
        O === i.UNSIGNED_INT_10F_11F_11F_REV && (X = i.R11F_G11F_B10F)),
      x === i.RGBA)
    ) {
      const St = J ? _r : kt.getTransfer(q);
      (O === i.FLOAT && (X = i.RGBA32F),
        O === i.HALF_FLOAT && (X = i.RGBA16F),
        O === i.UNSIGNED_BYTE && (X = St === $t ? i.SRGB8_ALPHA8 : i.RGBA8),
        O === i.UNSIGNED_SHORT_4_4_4_4 && (X = i.RGBA4),
        O === i.UNSIGNED_SHORT_5_5_5_1 && (X = i.RGB5_A1));
    }
    return (
      (X === i.R16F ||
        X === i.R32F ||
        X === i.RG16F ||
        X === i.RG32F ||
        X === i.RGBA16F ||
        X === i.RGBA32F) &&
        t.get("EXT_color_buffer_float"),
      X
    );
  }
  function _(R, x) {
    let O;
    return (
      R
        ? x === null || x === 1014 || x === 1020
          ? (O = i.DEPTH24_STENCIL8)
          : x === 1015
            ? (O = i.DEPTH32F_STENCIL8)
            : x === 1012 &&
              ((O = i.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : x === null || x === 1014 || x === 1020
          ? (O = i.DEPTH_COMPONENT24)
          : x === 1015
            ? (O = i.DEPTH_COMPONENT32F)
            : x === 1012 && (O = i.DEPTH_COMPONENT16),
      O
    );
  }
  function b(R, x) {
    return m(R) === !0 ||
      (R.isFramebufferTexture && R.minFilter !== 1003 && R.minFilter !== 1006)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : R.mipmaps !== void 0 && R.mipmaps.length > 0
        ? R.mipmaps.length
        : R.isCompressedTexture && Array.isArray(R.image)
          ? x.mipmaps.length
          : 1;
  }
  function T(R) {
    const x = R.target;
    (x.removeEventListener("dispose", T),
      C(x),
      x.isVideoTexture && u.delete(x));
  }
  function w(R) {
    const x = R.target;
    (x.removeEventListener("dispose", w), S(x));
  }
  function C(R) {
    const x = n.get(R);
    if (x.__webglInit === void 0) return;
    const O = R.source,
      q = d.get(O);
    if (q) {
      const J = q[x.__cacheKey];
      (J.usedTimes--,
        J.usedTimes === 0 && M(R),
        Object.keys(q).length === 0 && d.delete(O));
    }
    n.remove(R);
  }
  function M(R) {
    const x = n.get(R);
    i.deleteTexture(x.__webglTexture);
    const O = R.source,
      q = d.get(O);
    (delete q[x.__cacheKey], a.memory.textures--);
  }
  function S(R) {
    const x = n.get(R);
    if (
      (R.depthTexture && (R.depthTexture.dispose(), n.remove(R.depthTexture)),
      R.isWebGLCubeRenderTarget)
    )
      for (let q = 0; q < 6; q++) {
        if (Array.isArray(x.__webglFramebuffer[q]))
          for (let J = 0; J < x.__webglFramebuffer[q].length; J++)
            i.deleteFramebuffer(x.__webglFramebuffer[q][J]);
        else i.deleteFramebuffer(x.__webglFramebuffer[q]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[q]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let q = 0; q < x.__webglFramebuffer.length; q++)
          i.deleteFramebuffer(x.__webglFramebuffer[q]);
      else i.deleteFramebuffer(x.__webglFramebuffer);
      if (
        (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer),
        x.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(x.__webglMultisampledFramebuffer),
        x.__webglColorRenderbuffer)
      )
        for (let q = 0; q < x.__webglColorRenderbuffer.length; q++)
          x.__webglColorRenderbuffer[q] &&
            i.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);
      x.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const O = R.textures;
    for (let q = 0, J = O.length; q < J; q++) {
      const X = n.get(O[q]);
      (X.__webglTexture &&
        (i.deleteTexture(X.__webglTexture), a.memory.textures--),
        n.remove(O[q]));
    }
    n.remove(R);
  }
  let D = 0;
  function I() {
    D = 0;
  }
  function B() {
    const R = D;
    return (
      R >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            R +
            " texture units while this GPU supports only " +
            r.maxTextures,
        ),
      (D += 1),
      R
    );
  }
  function H(R) {
    const x = [];
    return (
      x.push(R.wrapS),
      x.push(R.wrapT),
      x.push(R.wrapR || 0),
      x.push(R.magFilter),
      x.push(R.minFilter),
      x.push(R.anisotropy),
      x.push(R.internalFormat),
      x.push(R.format),
      x.push(R.type),
      x.push(R.generateMipmaps),
      x.push(R.premultiplyAlpha),
      x.push(R.flipY),
      x.push(R.unpackAlignment),
      x.push(R.colorSpace),
      x.join()
    );
  }
  function W(R, x) {
    const O = n.get(R);
    if (
      (R.isVideoTexture && Ft(R),
      R.isRenderTargetTexture === !1 &&
        R.isExternalTexture !== !0 &&
        R.version > 0 &&
        O.__version !== R.version)
    ) {
      const q = R.image;
      if (q === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (q.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        Y(O, R, x);
        return;
      }
    } else
      R.isExternalTexture &&
        (O.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, O.__webglTexture, i.TEXTURE0 + x);
  }
  function V(R, x) {
    const O = n.get(R);
    if (
      R.isRenderTargetTexture === !1 &&
      R.version > 0 &&
      O.__version !== R.version
    ) {
      Y(O, R, x);
      return;
    }
    e.bindTexture(i.TEXTURE_2D_ARRAY, O.__webglTexture, i.TEXTURE0 + x);
  }
  function K(R, x) {
    const O = n.get(R);
    if (
      R.isRenderTargetTexture === !1 &&
      R.version > 0 &&
      O.__version !== R.version
    ) {
      Y(O, R, x);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, O.__webglTexture, i.TEXTURE0 + x);
  }
  function k(R, x) {
    const O = n.get(R);
    if (R.version > 0 && O.__version !== R.version) {
      $(O, R, x);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, O.__webglTexture, i.TEXTURE0 + x);
  }
  const tt = { 1e3: i.REPEAT, 1001: i.CLAMP_TO_EDGE, 1002: i.MIRRORED_REPEAT },
    ut = {
      1003: i.NEAREST,
      1004: i.NEAREST_MIPMAP_NEAREST,
      1005: i.NEAREST_MIPMAP_LINEAR,
      1006: i.LINEAR,
      1007: i.LINEAR_MIPMAP_NEAREST,
      1008: i.LINEAR_MIPMAP_LINEAR,
    },
    Et = {
      512: i.NEVER,
      519: i.ALWAYS,
      513: i.LESS,
      515: i.LEQUAL,
      514: i.EQUAL,
      518: i.GEQUAL,
      516: i.GREATER,
      517: i.NOTEQUAL,
    };
  function Bt(R, x) {
    if (
      (x.type === 1015 &&
        t.has("OES_texture_float_linear") === !1 &&
        (x.magFilter === 1006 ||
          x.magFilter === 1007 ||
          x.magFilter === 1005 ||
          x.magFilter === 1008 ||
          x.minFilter === 1006 ||
          x.minFilter === 1007 ||
          x.minFilter === 1005 ||
          x.minFilter === 1008) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      i.texParameteri(R, i.TEXTURE_WRAP_S, tt[x.wrapS]),
      i.texParameteri(R, i.TEXTURE_WRAP_T, tt[x.wrapT]),
      (R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(R, i.TEXTURE_WRAP_R, tt[x.wrapR]),
      i.texParameteri(R, i.TEXTURE_MAG_FILTER, ut[x.magFilter]),
      i.texParameteri(R, i.TEXTURE_MIN_FILTER, ut[x.minFilter]),
      x.compareFunction &&
        (i.texParameteri(R, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(R, i.TEXTURE_COMPARE_FUNC, Et[x.compareFunction])),
      t.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        x.magFilter === 1003 ||
        (x.minFilter !== 1005 && x.minFilter !== 1008) ||
        (x.type === 1015 && t.has("OES_texture_float_linear") === !1)
      )
        return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const O = t.get("EXT_texture_filter_anisotropic");
        (i.texParameterf(
          R,
          O.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, r.getMaxAnisotropy()),
        ),
          (n.get(x).__currentAnisotropy = x.anisotropy));
      }
    }
  }
  function Qt(R, x) {
    let O = !1;
    R.__webglInit === void 0 &&
      ((R.__webglInit = !0), x.addEventListener("dispose", T));
    const q = x.source;
    let J = d.get(q);
    J === void 0 && ((J = {}), d.set(q, J));
    const X = H(x);
    if (X !== R.__cacheKey) {
      (J[X] === void 0 &&
        ((J[X] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (O = !0)),
        J[X].usedTimes++);
      const St = J[R.__cacheKey];
      (St !== void 0 &&
        (J[R.__cacheKey].usedTimes--, St.usedTimes === 0 && M(x)),
        (R.__cacheKey = X),
        (R.__webglTexture = J[X].texture));
    }
    return O;
  }
  function ne(R, x, O) {
    return Math.floor(Math.floor(R / O) / x);
  }
  function Xt(R, x, O, q) {
    const X = R.updateRanges;
    if (X.length === 0)
      e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, O, q, x.data);
    else {
      X.sort((et, ct) => et.start - ct.start);
      let St = 0;
      for (let et = 1; et < X.length; et++) {
        const ct = X[St],
          wt = X[et],
          Mt = ct.start + ct.count,
          at = ne(wt.start, x.width, 4),
          Ut = ne(ct.start, x.width, 4);
        wt.start <= Mt + 1 &&
        at === Ut &&
        ne(wt.start + wt.count - 1, x.width, 4) === at
          ? (ct.count = Math.max(ct.count, wt.start + wt.count - ct.start))
          : (++St, (X[St] = wt));
      }
      X.length = St + 1;
      const it = i.getParameter(i.UNPACK_ROW_LENGTH),
        vt = i.getParameter(i.UNPACK_SKIP_PIXELS),
        xt = i.getParameter(i.UNPACK_SKIP_ROWS);
      i.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let et = 0, ct = X.length; et < ct; et++) {
        const wt = X[et],
          Mt = Math.floor(wt.start / 4),
          at = Math.ceil(wt.count / 4),
          Ut = Mt % x.width,
          U = Math.floor(Mt / x.width),
          nt = at,
          rt = 1;
        (i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ut),
          i.pixelStorei(i.UNPACK_SKIP_ROWS, U),
          e.texSubImage2D(i.TEXTURE_2D, 0, Ut, U, nt, rt, O, q, x.data));
      }
      (R.clearUpdateRanges(),
        i.pixelStorei(i.UNPACK_ROW_LENGTH, it),
        i.pixelStorei(i.UNPACK_SKIP_PIXELS, vt),
        i.pixelStorei(i.UNPACK_SKIP_ROWS, xt));
    }
  }
  function Y(R, x, O) {
    let q = i.TEXTURE_2D;
    ((x.isDataArrayTexture || x.isCompressedArrayTexture) &&
      (q = i.TEXTURE_2D_ARRAY),
      x.isData3DTexture && (q = i.TEXTURE_3D));
    const J = Qt(R, x),
      X = x.source;
    e.bindTexture(q, R.__webglTexture, i.TEXTURE0 + O);
    const St = n.get(X);
    if (X.version !== St.__version || J === !0) {
      e.activeTexture(i.TEXTURE0 + O);
      const it = kt.getPrimaries(kt.workingColorSpace),
        vt = x.colorSpace === "" ? null : kt.getPrimaries(x.colorSpace),
        xt =
          x.colorSpace === "" || it === vt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, xt));
      let et = v(x.image, !1, r.maxTextureSize);
      et = ge(x, et);
      const ct = s.convert(x.format, x.colorSpace),
        wt = s.convert(x.type);
      let Mt = E(x.internalFormat, ct, wt, x.colorSpace, x.isVideoTexture);
      Bt(q, x);
      let at;
      const Ut = x.mipmaps,
        U = x.isVideoTexture !== !0,
        nt = St.__version === void 0 || J === !0,
        rt = X.dataReady,
        ft = b(x, et);
      if (x.isDepthTexture)
        ((Mt = _(x.format === 1027, x.type)),
          nt &&
            (U
              ? e.texStorage2D(i.TEXTURE_2D, 1, Mt, et.width, et.height)
              : e.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  Mt,
                  et.width,
                  et.height,
                  0,
                  ct,
                  wt,
                  null,
                )));
      else if (x.isDataTexture)
        if (Ut.length > 0) {
          U &&
            nt &&
            e.texStorage2D(i.TEXTURE_2D, ft, Mt, Ut[0].width, Ut[0].height);
          for (let j = 0, Z = Ut.length; j < Z; j++)
            ((at = Ut[j]),
              U
                ? rt &&
                  e.texSubImage2D(
                    i.TEXTURE_2D,
                    j,
                    0,
                    0,
                    at.width,
                    at.height,
                    ct,
                    wt,
                    at.data,
                  )
                : e.texImage2D(
                    i.TEXTURE_2D,
                    j,
                    Mt,
                    at.width,
                    at.height,
                    0,
                    ct,
                    wt,
                    at.data,
                  ));
          x.generateMipmaps = !1;
        } else
          U
            ? (nt && e.texStorage2D(i.TEXTURE_2D, ft, Mt, et.width, et.height),
              rt && Xt(x, et, ct, wt))
            : e.texImage2D(
                i.TEXTURE_2D,
                0,
                Mt,
                et.width,
                et.height,
                0,
                ct,
                wt,
                et.data,
              );
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          U &&
            nt &&
            e.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              ft,
              Mt,
              Ut[0].width,
              Ut[0].height,
              et.depth,
            );
          for (let j = 0, Z = Ut.length; j < Z; j++)
            if (((at = Ut[j]), x.format !== 1023))
              if (ct !== null)
                if (U) {
                  if (rt)
                    if (x.layerUpdates.size > 0) {
                      const mt = Sa(at.width, at.height, x.format, x.type);
                      for (const Dt of x.layerUpdates) {
                        const te = at.data.subarray(
                          (Dt * mt) / at.data.BYTES_PER_ELEMENT,
                          ((Dt + 1) * mt) / at.data.BYTES_PER_ELEMENT,
                        );
                        e.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          j,
                          0,
                          0,
                          Dt,
                          at.width,
                          at.height,
                          1,
                          ct,
                          te,
                        );
                      }
                      x.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        j,
                        0,
                        0,
                        0,
                        at.width,
                        at.height,
                        et.depth,
                        ct,
                        at.data,
                      );
                } else
                  e.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    Mt,
                    at.width,
                    at.height,
                    et.depth,
                    0,
                    at.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              U
                ? rt &&
                  e.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    0,
                    0,
                    0,
                    at.width,
                    at.height,
                    et.depth,
                    ct,
                    wt,
                    at.data,
                  )
                : e.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    Mt,
                    at.width,
                    at.height,
                    et.depth,
                    0,
                    ct,
                    wt,
                    at.data,
                  );
        } else {
          U &&
            nt &&
            e.texStorage2D(i.TEXTURE_2D, ft, Mt, Ut[0].width, Ut[0].height);
          for (let j = 0, Z = Ut.length; j < Z; j++)
            ((at = Ut[j]),
              x.format !== 1023
                ? ct !== null
                  ? U
                    ? rt &&
                      e.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        j,
                        0,
                        0,
                        at.width,
                        at.height,
                        ct,
                        at.data,
                      )
                    : e.compressedTexImage2D(
                        i.TEXTURE_2D,
                        j,
                        Mt,
                        at.width,
                        at.height,
                        0,
                        at.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : U
                  ? rt &&
                    e.texSubImage2D(
                      i.TEXTURE_2D,
                      j,
                      0,
                      0,
                      at.width,
                      at.height,
                      ct,
                      wt,
                      at.data,
                    )
                  : e.texImage2D(
                      i.TEXTURE_2D,
                      j,
                      Mt,
                      at.width,
                      at.height,
                      0,
                      ct,
                      wt,
                      at.data,
                    ));
        }
      else if (x.isDataArrayTexture)
        if (U) {
          if (
            (nt &&
              e.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                ft,
                Mt,
                et.width,
                et.height,
                et.depth,
              ),
            rt)
          )
            if (x.layerUpdates.size > 0) {
              const j = Sa(et.width, et.height, x.format, x.type);
              for (const Z of x.layerUpdates) {
                const mt = et.data.subarray(
                  (Z * j) / et.data.BYTES_PER_ELEMENT,
                  ((Z + 1) * j) / et.data.BYTES_PER_ELEMENT,
                );
                e.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  Z,
                  et.width,
                  et.height,
                  1,
                  ct,
                  wt,
                  mt,
                );
              }
              x.clearLayerUpdates();
            } else
              e.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                et.width,
                et.height,
                et.depth,
                ct,
                wt,
                et.data,
              );
        } else
          e.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            Mt,
            et.width,
            et.height,
            et.depth,
            0,
            ct,
            wt,
            et.data,
          );
      else if (x.isData3DTexture)
        U
          ? (nt &&
              e.texStorage3D(
                i.TEXTURE_3D,
                ft,
                Mt,
                et.width,
                et.height,
                et.depth,
              ),
            rt &&
              e.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                et.width,
                et.height,
                et.depth,
                ct,
                wt,
                et.data,
              ))
          : e.texImage3D(
              i.TEXTURE_3D,
              0,
              Mt,
              et.width,
              et.height,
              et.depth,
              0,
              ct,
              wt,
              et.data,
            );
      else if (x.isFramebufferTexture) {
        if (nt)
          if (U) e.texStorage2D(i.TEXTURE_2D, ft, Mt, et.width, et.height);
          else {
            let j = et.width,
              Z = et.height;
            for (let mt = 0; mt < ft; mt++)
              (e.texImage2D(i.TEXTURE_2D, mt, Mt, j, Z, 0, ct, wt, null),
                (j >>= 1),
                (Z >>= 1));
          }
      } else if (Ut.length > 0) {
        if (U && nt) {
          const j = ue(Ut[0]);
          e.texStorage2D(i.TEXTURE_2D, ft, Mt, j.width, j.height);
        }
        for (let j = 0, Z = Ut.length; j < Z; j++)
          ((at = Ut[j]),
            U
              ? rt && e.texSubImage2D(i.TEXTURE_2D, j, 0, 0, ct, wt, at)
              : e.texImage2D(i.TEXTURE_2D, j, Mt, ct, wt, at));
        x.generateMipmaps = !1;
      } else if (U) {
        if (nt) {
          const j = ue(et);
          e.texStorage2D(i.TEXTURE_2D, ft, Mt, j.width, j.height);
        }
        rt && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ct, wt, et);
      } else e.texImage2D(i.TEXTURE_2D, 0, Mt, ct, wt, et);
      (m(x) && p(q), (St.__version = X.version), x.onUpdate && x.onUpdate(x));
    }
    R.__version = x.version;
  }
  function $(R, x, O) {
    if (x.image.length !== 6) return;
    const q = Qt(R, x),
      J = x.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, R.__webglTexture, i.TEXTURE0 + O);
    const X = n.get(J);
    if (J.version !== X.__version || q === !0) {
      e.activeTexture(i.TEXTURE0 + O);
      const St = kt.getPrimaries(kt.workingColorSpace),
        it = x.colorSpace === "" ? null : kt.getPrimaries(x.colorSpace),
        vt =
          x.colorSpace === "" || St === it ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, vt));
      const xt = x.isCompressedTexture || x.image[0].isCompressedTexture,
        et = x.image[0] && x.image[0].isDataTexture,
        ct = [];
      for (let Z = 0; Z < 6; Z++)
        (!xt && !et
          ? (ct[Z] = v(x.image[Z], !0, r.maxCubemapSize))
          : (ct[Z] = et ? x.image[Z].image : x.image[Z]),
          (ct[Z] = ge(x, ct[Z])));
      const wt = ct[0],
        Mt = s.convert(x.format, x.colorSpace),
        at = s.convert(x.type),
        Ut = E(x.internalFormat, Mt, at, x.colorSpace),
        U = x.isVideoTexture !== !0,
        nt = X.__version === void 0 || q === !0,
        rt = J.dataReady;
      let ft = b(x, wt);
      Bt(i.TEXTURE_CUBE_MAP, x);
      let j;
      if (xt) {
        U &&
          nt &&
          e.texStorage2D(i.TEXTURE_CUBE_MAP, ft, Ut, wt.width, wt.height);
        for (let Z = 0; Z < 6; Z++) {
          j = ct[Z].mipmaps;
          for (let mt = 0; mt < j.length; mt++) {
            const Dt = j[mt];
            x.format !== 1023
              ? Mt !== null
                ? U
                  ? rt &&
                    e.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                      mt,
                      0,
                      0,
                      Dt.width,
                      Dt.height,
                      Mt,
                      Dt.data,
                    )
                  : e.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                      mt,
                      Ut,
                      Dt.width,
                      Dt.height,
                      0,
                      Dt.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : U
                ? rt &&
                  e.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    mt,
                    0,
                    0,
                    Dt.width,
                    Dt.height,
                    Mt,
                    at,
                    Dt.data,
                  )
                : e.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    mt,
                    Ut,
                    Dt.width,
                    Dt.height,
                    0,
                    Mt,
                    at,
                    Dt.data,
                  );
          }
        }
      } else {
        if (((j = x.mipmaps), U && nt)) {
          j.length > 0 && ft++;
          const Z = ue(ct[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, ft, Ut, Z.width, Z.height);
        }
        for (let Z = 0; Z < 6; Z++)
          if (et) {
            U
              ? rt &&
                e.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  0,
                  0,
                  ct[Z].width,
                  ct[Z].height,
                  Mt,
                  at,
                  ct[Z].data,
                )
              : e.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  Ut,
                  ct[Z].width,
                  ct[Z].height,
                  0,
                  Mt,
                  at,
                  ct[Z].data,
                );
            for (let mt = 0; mt < j.length; mt++) {
              const te = j[mt].image[Z].image;
              U
                ? rt &&
                  e.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    mt + 1,
                    0,
                    0,
                    te.width,
                    te.height,
                    Mt,
                    at,
                    te.data,
                  )
                : e.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    mt + 1,
                    Ut,
                    te.width,
                    te.height,
                    0,
                    Mt,
                    at,
                    te.data,
                  );
            }
          } else {
            U
              ? rt &&
                e.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  0,
                  0,
                  Mt,
                  at,
                  ct[Z],
                )
              : e.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                  0,
                  Ut,
                  Mt,
                  at,
                  ct[Z],
                );
            for (let mt = 0; mt < j.length; mt++) {
              const Dt = j[mt];
              U
                ? rt &&
                  e.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    mt + 1,
                    0,
                    0,
                    Mt,
                    at,
                    Dt.image[Z],
                  )
                : e.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + Z,
                    mt + 1,
                    Ut,
                    Mt,
                    at,
                    Dt.image[Z],
                  );
            }
          }
      }
      (m(x) && p(i.TEXTURE_CUBE_MAP),
        (X.__version = J.version),
        x.onUpdate && x.onUpdate(x));
    }
    R.__version = x.version;
  }
  function dt(R, x, O, q, J, X) {
    const St = s.convert(O.format, O.colorSpace),
      it = s.convert(O.type),
      vt = E(O.internalFormat, St, it, O.colorSpace),
      xt = n.get(x),
      et = n.get(O);
    if (((et.__renderTarget = x), !xt.__hasExternalTextures)) {
      const ct = Math.max(1, x.width >> X),
        wt = Math.max(1, x.height >> X);
      J === i.TEXTURE_3D || J === i.TEXTURE_2D_ARRAY
        ? e.texImage3D(J, X, vt, ct, wt, x.depth, 0, St, it, null)
        : e.texImage2D(J, X, vt, ct, wt, 0, St, it, null);
    }
    (e.bindFramebuffer(i.FRAMEBUFFER, R),
      _t(x)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            q,
            J,
            et.__webglTexture,
            0,
            re(x),
          )
        : (J === i.TEXTURE_2D ||
            (J >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              J <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, q, J, et.__webglTexture, X),
      e.bindFramebuffer(i.FRAMEBUFFER, null));
  }
  function Pt(R, x, O) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, R), x.depthBuffer)) {
      const q = x.depthTexture,
        J = q && q.isDepthTexture ? q.type : null,
        X = _(x.stencilBuffer, J),
        St = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        it = re(x);
      (_t(x)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            it,
            X,
            x.width,
            x.height,
          )
        : O
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              it,
              X,
              x.width,
              x.height,
            )
          : i.renderbufferStorage(i.RENDERBUFFER, X, x.width, x.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, St, i.RENDERBUFFER, R));
    } else {
      const q = x.textures;
      for (let J = 0; J < q.length; J++) {
        const X = q[J],
          St = s.convert(X.format, X.colorSpace),
          it = s.convert(X.type),
          vt = E(X.internalFormat, St, it, X.colorSpace),
          xt = re(x);
        O && _t(x) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              xt,
              vt,
              x.width,
              x.height,
            )
          : _t(x)
            ? o.renderbufferStorageMultisampleEXT(
                i.RENDERBUFFER,
                xt,
                vt,
                x.width,
                x.height,
              )
            : i.renderbufferStorage(i.RENDERBUFFER, vt, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function yt(R, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (e.bindFramebuffer(i.FRAMEBUFFER, R),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const q = n.get(x.depthTexture);
    ((q.__renderTarget = x),
      (!q.__webglTexture ||
        x.depthTexture.image.width !== x.width ||
        x.depthTexture.image.height !== x.height) &&
        ((x.depthTexture.image.width = x.width),
        (x.depthTexture.image.height = x.height),
        (x.depthTexture.needsUpdate = !0)),
      W(x.depthTexture, 0));
    const J = q.__webglTexture,
      X = re(x);
    if (x.depthTexture.format === 1026)
      _t(x)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
            X,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
          );
    else if (x.depthTexture.format === 1027)
      _t(x)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
            X,
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            J,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function Ht(R) {
    const x = n.get(R),
      O = R.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== R.depthTexture) {
      const q = R.depthTexture;
      if ((x.__depthDisposeCallback && x.__depthDisposeCallback(), q)) {
        const J = () => {
          (delete x.__boundDepthTexture,
            delete x.__depthDisposeCallback,
            q.removeEventListener("dispose", J));
        };
        (q.addEventListener("dispose", J), (x.__depthDisposeCallback = J));
      }
      x.__boundDepthTexture = q;
    }
    if (R.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      const q = R.texture.mipmaps;
      q && q.length > 0
        ? yt(x.__webglFramebuffer[0], R)
        : yt(x.__webglFramebuffer, R);
    } else if (O) {
      x.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++)
        if (
          (e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[q]),
          x.__webglDepthbuffer[q] === void 0)
        )
          ((x.__webglDepthbuffer[q] = i.createRenderbuffer()),
            Pt(x.__webglDepthbuffer[q], R, !1));
        else {
          const J = R.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            X = x.__webglDepthbuffer[q];
          (i.bindRenderbuffer(i.RENDERBUFFER, X),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, X));
        }
    } else {
      const q = R.texture.mipmaps;
      if (
        (q && q.length > 0
          ? e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0])
          : e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer),
        x.__webglDepthbuffer === void 0)
      )
        ((x.__webglDepthbuffer = i.createRenderbuffer()),
          Pt(x.__webglDepthbuffer, R, !1));
      else {
        const J = R.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          X = x.__webglDepthbuffer;
        (i.bindRenderbuffer(i.RENDERBUFFER, X),
          i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, X));
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Me(R, x, O) {
    const q = n.get(R);
    (x !== void 0 &&
      dt(
        q.__webglFramebuffer,
        R,
        R.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0,
      ),
      O !== void 0 && Ht(R));
  }
  function P(R) {
    const x = R.texture,
      O = n.get(R),
      q = n.get(x);
    R.addEventListener("dispose", w);
    const J = R.textures,
      X = R.isWebGLCubeRenderTarget === !0,
      St = J.length > 1;
    if (
      (St ||
        (q.__webglTexture === void 0 && (q.__webglTexture = i.createTexture()),
        (q.__version = x.version),
        a.memory.textures++),
      X)
    ) {
      O.__webglFramebuffer = [];
      for (let it = 0; it < 6; it++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          O.__webglFramebuffer[it] = [];
          for (let vt = 0; vt < x.mipmaps.length; vt++)
            O.__webglFramebuffer[it][vt] = i.createFramebuffer();
        } else O.__webglFramebuffer[it] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let it = 0; it < x.mipmaps.length; it++)
          O.__webglFramebuffer[it] = i.createFramebuffer();
      } else O.__webglFramebuffer = i.createFramebuffer();
      if (St)
        for (let it = 0, vt = J.length; it < vt; it++) {
          const xt = n.get(J[it]);
          xt.__webglTexture === void 0 &&
            ((xt.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (R.samples > 0 && _t(R) === !1) {
        ((O.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (O.__webglColorRenderbuffer = []),
          e.bindFramebuffer(i.FRAMEBUFFER, O.__webglMultisampledFramebuffer));
        for (let it = 0; it < J.length; it++) {
          const vt = J[it];
          ((O.__webglColorRenderbuffer[it] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, O.__webglColorRenderbuffer[it]));
          const xt = s.convert(vt.format, vt.colorSpace),
            et = s.convert(vt.type),
            ct = E(
              vt.internalFormat,
              xt,
              et,
              vt.colorSpace,
              R.isXRRenderTarget === !0,
            ),
            wt = re(R);
          (i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            wt,
            ct,
            R.width,
            R.height,
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + it,
              i.RENDERBUFFER,
              O.__webglColorRenderbuffer[it],
            ));
        }
        (i.bindRenderbuffer(i.RENDERBUFFER, null),
          R.depthBuffer &&
            ((O.__webglDepthRenderbuffer = i.createRenderbuffer()),
            Pt(O.__webglDepthRenderbuffer, R, !0)),
          e.bindFramebuffer(i.FRAMEBUFFER, null));
      }
    }
    if (X) {
      (e.bindTexture(i.TEXTURE_CUBE_MAP, q.__webglTexture),
        Bt(i.TEXTURE_CUBE_MAP, x));
      for (let it = 0; it < 6; it++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let vt = 0; vt < x.mipmaps.length; vt++)
            dt(
              O.__webglFramebuffer[it][vt],
              R,
              x,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + it,
              vt,
            );
        else
          dt(
            O.__webglFramebuffer[it],
            R,
            x,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + it,
            0,
          );
      (m(x) && p(i.TEXTURE_CUBE_MAP), e.unbindTexture());
    } else if (St) {
      for (let it = 0, vt = J.length; it < vt; it++) {
        const xt = J[it],
          et = n.get(xt);
        let ct = i.TEXTURE_2D;
        ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
          (ct = R.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
          e.bindTexture(ct, et.__webglTexture),
          Bt(ct, xt),
          dt(O.__webglFramebuffer, R, xt, i.COLOR_ATTACHMENT0 + it, ct, 0),
          m(xt) && p(ct));
      }
      e.unbindTexture();
    } else {
      let it = i.TEXTURE_2D;
      if (
        ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
          (it = R.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        e.bindTexture(it, q.__webglTexture),
        Bt(it, x),
        x.mipmaps && x.mipmaps.length > 0)
      )
        for (let vt = 0; vt < x.mipmaps.length; vt++)
          dt(O.__webglFramebuffer[vt], R, x, i.COLOR_ATTACHMENT0, it, vt);
      else dt(O.__webglFramebuffer, R, x, i.COLOR_ATTACHMENT0, it, 0);
      (m(x) && p(it), e.unbindTexture());
    }
    R.depthBuffer && Ht(R);
  }
  function ie(R) {
    const x = R.textures;
    for (let O = 0, q = x.length; O < q; O++) {
      const J = x[O];
      if (m(J)) {
        const X = A(R),
          St = n.get(J).__webglTexture;
        (e.bindTexture(X, St), p(X), e.unbindTexture());
      }
    }
  }
  const Lt = [],
    Rt = [];
  function gt(R) {
    if (R.samples > 0) {
      if (_t(R) === !1) {
        const x = R.textures,
          O = R.width,
          q = R.height;
        let J = i.COLOR_BUFFER_BIT;
        const X = R.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          St = n.get(R),
          it = x.length > 1;
        if (it)
          for (let xt = 0; xt < x.length; xt++)
            (e.bindFramebuffer(
              i.FRAMEBUFFER,
              St.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xt,
                i.RENDERBUFFER,
                null,
              ),
              e.bindFramebuffer(i.FRAMEBUFFER, St.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xt,
                i.TEXTURE_2D,
                null,
                0,
              ));
        e.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          St.__webglMultisampledFramebuffer,
        );
        const vt = R.texture.mipmaps;
        vt && vt.length > 0
          ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglFramebuffer[0])
          : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, St.__webglFramebuffer);
        for (let xt = 0; xt < x.length; xt++) {
          if (
            (R.resolveDepthBuffer &&
              (R.depthBuffer && (J |= i.DEPTH_BUFFER_BIT),
              R.stencilBuffer &&
                R.resolveStencilBuffer &&
                (J |= i.STENCIL_BUFFER_BIT)),
            it)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              St.__webglColorRenderbuffer[xt],
            );
            const et = n.get(x[xt]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              et,
              0,
            );
          }
          (i.blitFramebuffer(0, 0, O, q, 0, 0, O, q, J, i.NEAREST),
            l === !0 &&
              ((Lt.length = 0),
              (Rt.length = 0),
              Lt.push(i.COLOR_ATTACHMENT0 + xt),
              R.depthBuffer &&
                R.resolveDepthBuffer === !1 &&
                (Lt.push(X),
                Rt.push(X),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Rt)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Lt)));
        }
        if (
          (e.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          it)
        )
          for (let xt = 0; xt < x.length; xt++) {
            (e.bindFramebuffer(
              i.FRAMEBUFFER,
              St.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xt,
                i.RENDERBUFFER,
                St.__webglColorRenderbuffer[xt],
              ));
            const et = n.get(x[xt]).__webglTexture;
            (e.bindFramebuffer(i.FRAMEBUFFER, St.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + xt,
                i.TEXTURE_2D,
                et,
                0,
              ));
          }
        e.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          St.__webglMultisampledFramebuffer,
        );
      } else if (R.depthBuffer && R.resolveDepthBuffer === !1 && l) {
        const x = R.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function re(R) {
    return Math.min(r.maxSamples, R.samples);
  }
  function _t(R) {
    const x = n.get(R);
    return (
      R.samples > 0 &&
      t.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function Ft(R) {
    const x = a.render.frame;
    u.get(R) !== x && (u.set(R, x), R.update());
  }
  function ge(R, x) {
    const O = R.colorSpace,
      q = R.format,
      J = R.type;
    return (
      R.isCompressedTexture === !0 ||
        R.isVideoTexture === !0 ||
        (O !== Qn &&
          O !== "" &&
          (kt.getTransfer(O) === $t
            ? (q !== 1023 || J !== 1009) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                O,
              ))),
      x
    );
  }
  function ue(R) {
    return (
      typeof HTMLImageElement < "u" && R instanceof HTMLImageElement
        ? ((c.width = R.naturalWidth || R.width),
          (c.height = R.naturalHeight || R.height))
        : typeof VideoFrame < "u" && R instanceof VideoFrame
          ? ((c.width = R.displayWidth), (c.height = R.displayHeight))
          : ((c.width = R.width), (c.height = R.height)),
      c
    );
  }
  ((this.allocateTextureUnit = B),
    (this.resetTextureUnits = I),
    (this.setTexture2D = W),
    (this.setTexture2DArray = V),
    (this.setTexture3D = K),
    (this.setTextureCube = k),
    (this.rebindTextures = Me),
    (this.setupRenderTarget = P),
    (this.updateRenderTargetMipmap = ie),
    (this.updateMultisampleRenderTarget = gt),
    (this.setupDepthRenderbuffer = Ht),
    (this.setupFrameBufferTexture = dt),
    (this.useMultisampledRTT = _t));
}
function tp(i, t) {
  function e(n, r = "") {
    let s;
    const a = kt.getTransfer(r);
    if (n === 1009) return i.UNSIGNED_BYTE;
    if (n === 1017) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 35899) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === 1010) return i.BYTE;
    if (n === 1011) return i.SHORT;
    if (n === 1012) return i.UNSIGNED_SHORT;
    if (n === 1013) return i.INT;
    if (n === 1014) return i.UNSIGNED_INT;
    if (n === 1015) return i.FLOAT;
    if (n === 1016) return i.HALF_FLOAT;
    if (n === 1021) return i.ALPHA;
    if (n === 1022) return i.RGB;
    if (n === 1023) return i.RGBA;
    if (n === 1026) return i.DEPTH_COMPONENT;
    if (n === 1027) return i.DEPTH_STENCIL;
    if (n === 1028) return i.RED;
    if (n === 1029) return i.RED_INTEGER;
    if (n === 1030) return i.RG;
    if (n === 1031) return i.RG_INTEGER;
    if (n === 1033) return i.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779)
      if (a === $t)
        if (((s = t.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = t.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843)
      if (((s = t.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === 36196 || n === 37492 || n === 37496)
      if (((s = t.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (n === 36196 || n === 37492)
          return a === $t ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === 37496)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === 37808 ||
      n === 37809 ||
      n === 37810 ||
      n === 37811 ||
      n === 37812 ||
      n === 37813 ||
      n === 37814 ||
      n === 37815 ||
      n === 37816 ||
      n === 37817 ||
      n === 37818 ||
      n === 37819 ||
      n === 37820 ||
      n === 37821
    )
      if (((s = t.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (n === 37808)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === 37809)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === 37810)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === 37811)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === 37812)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === 37813)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === 37814)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === 37815)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === 37816)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === 37817)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === 37818)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === 37819)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === 37820)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === 37821)
          return a === $t
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === 36492 || n === 36494 || n === 36495)
      if (((s = t.get("EXT_texture_compression_bptc")), s !== null)) {
        if (n === 36492)
          return a === $t
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286)
      if (((s = t.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (n === 36283) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === 1020 ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
const ep = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  np = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class ip {
  constructor() {
    ((this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0));
  }
  init(t, e) {
    if (this.texture === null) {
      const n = new uo(t.texture);
      ((t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) &&
        ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = n));
    }
  }
  getMesh(t) {
    if (this.texture !== null && this.mesh === null) {
      const e = t.cameras[0].viewport,
        n = new hn({
          vertexShader: ep,
          fragmentShader: np,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: e.z },
            depthHeight: { value: e.w },
          },
        });
      this.mesh = new ve(new Li(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    ((this.texture = null), (this.mesh = null));
  }
  getDepthTexture() {
    return this.texture;
  }
}
class rp extends ii {
  constructor(t, e) {
    super();
    const n = this;
    let r = null,
      s = 1,
      a = null,
      o = "local-floor",
      l = 1,
      c = null,
      u = null,
      h = null,
      d = null,
      f = null,
      g = null;
    const v = typeof XRWebGLBinding < "u",
      m = new ip(),
      p = {},
      A = e.getContextAttributes();
    let E = null,
      _ = null;
    const b = [],
      T = [],
      w = new ot();
    let C = null;
    const M = new Ue();
    M.viewport = new Kt();
    const S = new Ue();
    S.viewport = new Kt();
    const D = [M, S],
      I = new Tc();
    let B = null,
      H = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (Y) {
        let $ = b[Y];
        return (
          $ === void 0 && (($ = new Jr()), (b[Y] = $)),
          $.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (Y) {
        let $ = b[Y];
        return ($ === void 0 && (($ = new Jr()), (b[Y] = $)), $.getGripSpace());
      }),
      (this.getHand = function (Y) {
        let $ = b[Y];
        return ($ === void 0 && (($ = new Jr()), (b[Y] = $)), $.getHandSpace());
      }));
    function W(Y) {
      const $ = T.indexOf(Y.inputSource);
      if ($ === -1) return;
      const dt = b[$];
      dt !== void 0 &&
        (dt.update(Y.inputSource, Y.frame, c || a),
        dt.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function V() {
      (r.removeEventListener("select", W),
        r.removeEventListener("selectstart", W),
        r.removeEventListener("selectend", W),
        r.removeEventListener("squeeze", W),
        r.removeEventListener("squeezestart", W),
        r.removeEventListener("squeezeend", W),
        r.removeEventListener("end", V),
        r.removeEventListener("inputsourceschange", K));
      for (let Y = 0; Y < b.length; Y++) {
        const $ = T[Y];
        $ !== null && ((T[Y] = null), b[Y].disconnect($));
      }
      ((B = null), (H = null), m.reset());
      for (const Y in p) delete p[Y];
      (t.setRenderTarget(E),
        (f = null),
        (d = null),
        (h = null),
        (r = null),
        (_ = null),
        Xt.stop(),
        (n.isPresenting = !1),
        t.setPixelRatio(C),
        t.setSize(w.width, w.height, !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (Y) {
      ((s = Y),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (Y) {
        ((o = Y),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (Y) {
        c = Y;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : f;
      }),
      (this.getBinding = function () {
        return (h === null && v && (h = new XRWebGLBinding(r, e)), h);
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (Y) {
        if (((r = Y), r !== null)) {
          if (
            ((E = t.getRenderTarget()),
            r.addEventListener("select", W),
            r.addEventListener("selectstart", W),
            r.addEventListener("selectend", W),
            r.addEventListener("squeeze", W),
            r.addEventListener("squeezestart", W),
            r.addEventListener("squeezeend", W),
            r.addEventListener("end", V),
            r.addEventListener("inputsourceschange", K),
            A.xrCompatible !== !0 && (await e.makeXRCompatible()),
            (C = t.getPixelRatio()),
            t.getSize(w),
            v && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let dt = null,
              Pt = null,
              yt = null;
            A.depth &&
              ((yt = A.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
              (dt = A.stencil ? 1027 : 1026),
              (Pt = A.stencil ? 1020 : 1014));
            const Ht = {
              colorFormat: e.RGBA8,
              depthFormat: yt,
              scaleFactor: s,
            };
            ((h = this.getBinding()),
              (d = h.createProjectionLayer(Ht)),
              r.updateRenderState({ layers: [d] }),
              t.setPixelRatio(1),
              t.setSize(d.textureWidth, d.textureHeight, !1),
              (_ = new bn(d.textureWidth, d.textureHeight, {
                format: 1023,
                type: 1009,
                depthTexture: new co(
                  d.textureWidth,
                  d.textureHeight,
                  Pt,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  dt,
                ),
                stencilBuffer: A.stencil,
                colorSpace: t.outputColorSpace,
                samples: A.antialias ? 4 : 0,
                resolveDepthBuffer: d.ignoreDepthValues === !1,
                resolveStencilBuffer: d.ignoreDepthValues === !1,
              })));
          } else {
            const dt = {
              antialias: A.antialias,
              alpha: !0,
              depth: A.depth,
              stencil: A.stencil,
              framebufferScaleFactor: s,
            };
            ((f = new XRWebGLLayer(r, e, dt)),
              r.updateRenderState({ baseLayer: f }),
              t.setPixelRatio(1),
              t.setSize(f.framebufferWidth, f.framebufferHeight, !1),
              (_ = new bn(f.framebufferWidth, f.framebufferHeight, {
                format: 1023,
                type: 1009,
                colorSpace: t.outputColorSpace,
                stencilBuffer: A.stencil,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
                resolveStencilBuffer: f.ignoreDepthValues === !1,
              })));
          }
          ((_.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await r.requestReferenceSpace(o)),
            Xt.setContext(r),
            Xt.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return m.getDepthTexture();
      }));
    function K(Y) {
      for (let $ = 0; $ < Y.removed.length; $++) {
        const dt = Y.removed[$],
          Pt = T.indexOf(dt);
        Pt >= 0 && ((T[Pt] = null), b[Pt].disconnect(dt));
      }
      for (let $ = 0; $ < Y.added.length; $++) {
        const dt = Y.added[$];
        let Pt = T.indexOf(dt);
        if (Pt === -1) {
          for (let Ht = 0; Ht < b.length; Ht++)
            if (Ht >= T.length) {
              (T.push(dt), (Pt = Ht));
              break;
            } else if (T[Ht] === null) {
              ((T[Ht] = dt), (Pt = Ht));
              break;
            }
          if (Pt === -1) break;
        }
        const yt = b[Pt];
        yt && yt.connect(dt);
      }
    }
    const k = new L(),
      tt = new L();
    function ut(Y, $, dt) {
      (k.setFromMatrixPosition($.matrixWorld),
        tt.setFromMatrixPosition(dt.matrixWorld));
      const Pt = k.distanceTo(tt),
        yt = $.projectionMatrix.elements,
        Ht = dt.projectionMatrix.elements,
        Me = yt[14] / (yt[10] - 1),
        P = yt[14] / (yt[10] + 1),
        ie = (yt[9] + 1) / yt[5],
        Lt = (yt[9] - 1) / yt[5],
        Rt = (yt[8] - 1) / yt[0],
        gt = (Ht[8] + 1) / Ht[0],
        re = Me * Rt,
        _t = Me * gt,
        Ft = Pt / (-Rt + gt),
        ge = Ft * -Rt;
      if (
        ($.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale),
        Y.translateX(ge),
        Y.translateZ(Ft),
        Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),
        yt[10] === -1)
      )
        (Y.projectionMatrix.copy($.projectionMatrix),
          Y.projectionMatrixInverse.copy($.projectionMatrixInverse));
      else {
        const ue = Me + Ft,
          R = P + Ft,
          x = re - ge,
          O = _t + (Pt - ge),
          q = ((ie * P) / R) * ue,
          J = ((Lt * P) / R) * ue;
        (Y.projectionMatrix.makePerspective(x, O, q, J, ue, R),
          Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert());
      }
    }
    function Et(Y, $) {
      ($ === null
        ? Y.matrixWorld.copy(Y.matrix)
        : Y.matrixWorld.multiplyMatrices($.matrixWorld, Y.matrix),
        Y.matrixWorldInverse.copy(Y.matrixWorld).invert());
    }
    this.updateCamera = function (Y) {
      if (r === null) return;
      let $ = Y.near,
        dt = Y.far;
      (m.texture !== null &&
        (m.depthNear > 0 && ($ = m.depthNear),
        m.depthFar > 0 && (dt = m.depthFar)),
        (I.near = S.near = M.near = $),
        (I.far = S.far = M.far = dt),
        (B !== I.near || H !== I.far) &&
          (r.updateRenderState({ depthNear: I.near, depthFar: I.far }),
          (B = I.near),
          (H = I.far)),
        (I.layers.mask = Y.layers.mask | 6),
        (M.layers.mask = I.layers.mask & 3),
        (S.layers.mask = I.layers.mask & 5));
      const Pt = Y.parent,
        yt = I.cameras;
      Et(I, Pt);
      for (let Ht = 0; Ht < yt.length; Ht++) Et(yt[Ht], Pt);
      (yt.length === 2
        ? ut(I, M, S)
        : I.projectionMatrix.copy(M.projectionMatrix),
        Bt(Y, I, Pt));
    };
    function Bt(Y, $, dt) {
      (dt === null
        ? Y.matrix.copy($.matrixWorld)
        : (Y.matrix.copy(dt.matrixWorld),
          Y.matrix.invert(),
          Y.matrix.multiply($.matrixWorld)),
        Y.matrix.decompose(Y.position, Y.quaternion, Y.scale),
        Y.updateMatrixWorld(!0),
        Y.projectionMatrix.copy($.projectionMatrix),
        Y.projectionMatrixInverse.copy($.projectionMatrixInverse),
        Y.isPerspectiveCamera &&
          ((Y.fov = ti * 2 * Math.atan(1 / Y.projectionMatrix.elements[5])),
          (Y.zoom = 1)));
    }
    ((this.getCamera = function () {
      return I;
    }),
      (this.getFoveation = function () {
        if (!(d === null && f === null)) return l;
      }),
      (this.setFoveation = function (Y) {
        ((l = Y),
          d !== null && (d.fixedFoveation = Y),
          f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = Y));
      }),
      (this.hasDepthSensing = function () {
        return m.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return m.getMesh(I);
      }),
      (this.getCameraTexture = function (Y) {
        return p[Y];
      }));
    let Qt = null;
    function ne(Y, $) {
      if (((u = $.getViewerPose(c || a)), (g = $), u !== null)) {
        const dt = u.views;
        f !== null &&
          (t.setRenderTargetFramebuffer(_, f.framebuffer),
          t.setRenderTarget(_));
        let Pt = !1;
        dt.length !== I.cameras.length && ((I.cameras.length = 0), (Pt = !0));
        for (let P = 0; P < dt.length; P++) {
          const ie = dt[P];
          let Lt = null;
          if (f !== null) Lt = f.getViewport(ie);
          else {
            const gt = h.getViewSubImage(d, ie);
            ((Lt = gt.viewport),
              P === 0 &&
                (t.setRenderTargetTextures(
                  _,
                  gt.colorTexture,
                  gt.depthStencilTexture,
                ),
                t.setRenderTarget(_)));
          }
          let Rt = D[P];
          (Rt === void 0 &&
            ((Rt = new Ue()),
            Rt.layers.enable(P),
            (Rt.viewport = new Kt()),
            (D[P] = Rt)),
            Rt.matrix.fromArray(ie.transform.matrix),
            Rt.matrix.decompose(Rt.position, Rt.quaternion, Rt.scale),
            Rt.projectionMatrix.fromArray(ie.projectionMatrix),
            Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),
            Rt.viewport.set(Lt.x, Lt.y, Lt.width, Lt.height),
            P === 0 &&
              (I.matrix.copy(Rt.matrix),
              I.matrix.decompose(I.position, I.quaternion, I.scale)),
            Pt === !0 && I.cameras.push(Rt));
        }
        const yt = r.enabledFeatures;
        if (
          yt &&
          yt.includes("depth-sensing") &&
          r.depthUsage == "gpu-optimized" &&
          v
        ) {
          h = n.getBinding();
          const P = h.getDepthInformation(dt[0]);
          P && P.isValid && P.texture && m.init(P, r.renderState);
        }
        if (yt && yt.includes("camera-access") && v) {
          (t.state.unbindTexture(), (h = n.getBinding()));
          for (let P = 0; P < dt.length; P++) {
            const ie = dt[P].camera;
            if (ie) {
              let Lt = p[ie];
              Lt || ((Lt = new uo()), (p[ie] = Lt));
              const Rt = h.getCameraImage(ie);
              Lt.sourceTexture = Rt;
            }
          }
        }
      }
      for (let dt = 0; dt < b.length; dt++) {
        const Pt = T[dt],
          yt = b[dt];
        Pt !== null && yt !== void 0 && yt.update(Pt, $, c || a);
      }
      (Qt && Qt(Y, $),
        $.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: $ }),
        (g = null));
    }
    const Xt = new Co();
    (Xt.setAnimationLoop(ne),
      (this.setAnimationLoop = function (Y) {
        Qt = Y;
      }),
      (this.dispose = function () {}));
  }
}
const Mn = new Ye(),
  sp = new Zt();
function ap(i, t) {
  function e(m, p) {
    (m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix));
  }
  function n(m, p) {
    (p.color.getRGB(m.fogColor.value, to(i)),
      p.isFog
        ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
        : p.isFogExp2 && (m.fogDensity.value = p.density));
  }
  function r(m, p, A, E, _) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial
      ? s(m, p)
      : p.isMeshToonMaterial
        ? (s(m, p), h(m, p))
        : p.isMeshPhongMaterial
          ? (s(m, p), u(m, p))
          : p.isMeshStandardMaterial
            ? (s(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, _))
            : p.isMeshMatcapMaterial
              ? (s(m, p), g(m, p))
              : p.isMeshDepthMaterial
                ? s(m, p)
                : p.isMeshDistanceMaterial
                  ? (s(m, p), v(m, p))
                  : p.isMeshNormalMaterial
                    ? s(m, p)
                    : p.isLineBasicMaterial
                      ? (a(m, p), p.isLineDashedMaterial && o(m, p))
                      : p.isPointsMaterial
                        ? l(m, p, A, E)
                        : p.isSpriteMaterial
                          ? c(m, p)
                          : p.isShadowMaterial
                            ? (m.color.value.copy(p.color),
                              (m.opacity.value = p.opacity))
                            : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function s(m, p) {
    ((m.opacity.value = p.opacity),
      p.color && m.diffuse.value.copy(p.color),
      p.emissive &&
        m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        e(p.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = p.bumpScale),
        p.side === 1 && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        e(p.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(p.normalScale),
        p.side === 1 && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        e(p.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)),
      p.emissiveMap &&
        ((m.emissiveMap.value = p.emissiveMap),
        e(p.emissiveMap, m.emissiveMapTransform)),
      p.specularMap &&
        ((m.specularMap.value = p.specularMap),
        e(p.specularMap, m.specularMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    const A = t.get(p),
      E = A.envMap,
      _ = A.envMapRotation;
    (E &&
      ((m.envMap.value = E),
      Mn.copy(_),
      (Mn.x *= -1),
      (Mn.y *= -1),
      (Mn.z *= -1),
      E.isCubeTexture &&
        E.isRenderTargetTexture === !1 &&
        ((Mn.y *= -1), (Mn.z *= -1)),
      m.envMapRotation.value.setFromMatrix4(sp.makeRotationFromEuler(Mn)),
      (m.flipEnvMap.value =
        E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = p.reflectivity),
      (m.ior.value = p.ior),
      (m.refractionRatio.value = p.refractionRatio)),
      p.lightMap &&
        ((m.lightMap.value = p.lightMap),
        (m.lightMapIntensity.value = p.lightMapIntensity),
        e(p.lightMap, m.lightMapTransform)),
      p.aoMap &&
        ((m.aoMap.value = p.aoMap),
        (m.aoMapIntensity.value = p.aoMapIntensity),
        e(p.aoMap, m.aoMapTransform)));
  }
  function a(m, p) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)));
  }
  function o(m, p) {
    ((m.dashSize.value = p.dashSize),
      (m.totalSize.value = p.dashSize + p.gapSize),
      (m.scale.value = p.scale));
  }
  function l(m, p, A, E) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.size.value = p.size * A),
      (m.scale.value = E * 0.5),
      p.map && ((m.map.value = p.map), e(p.map, m.uvTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
  }
  function c(m, p) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.rotation.value = p.rotation),
      p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
  }
  function u(m, p) {
    (m.specular.value.copy(p.specular),
      (m.shininess.value = Math.max(p.shininess, 1e-4)));
  }
  function h(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function d(m, p) {
    ((m.metalness.value = p.metalness),
      p.metalnessMap &&
        ((m.metalnessMap.value = p.metalnessMap),
        e(p.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = p.roughness),
      p.roughnessMap &&
        ((m.roughnessMap.value = p.roughnessMap),
        e(p.roughnessMap, m.roughnessMapTransform)),
      p.envMap && (m.envMapIntensity.value = p.envMapIntensity));
  }
  function f(m, p, A) {
    ((m.ior.value = p.ior),
      p.sheen > 0 &&
        (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (m.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap &&
          ((m.sheenColorMap.value = p.sheenColorMap),
          e(p.sheenColorMap, m.sheenColorMapTransform)),
        p.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = p.sheenRoughnessMap),
          e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      p.clearcoat > 0 &&
        ((m.clearcoat.value = p.clearcoat),
        (m.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap &&
          ((m.clearcoatMap.value = p.clearcoatMap),
          e(p.clearcoatMap, m.clearcoatMapTransform)),
        p.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
          e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = p.clearcoatNormalMap),
          e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          p.side === 1 && m.clearcoatNormalScale.value.negate())),
      p.dispersion > 0 && (m.dispersion.value = p.dispersion),
      p.iridescence > 0 &&
        ((m.iridescence.value = p.iridescence),
        (m.iridescenceIOR.value = p.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap &&
          ((m.iridescenceMap.value = p.iridescenceMap),
          e(p.iridescenceMap, m.iridescenceMapTransform)),
        p.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = p.iridescenceThicknessMap),
          e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      p.transmission > 0 &&
        ((m.transmission.value = p.transmission),
        (m.transmissionSamplerMap.value = A.texture),
        m.transmissionSamplerSize.value.set(A.width, A.height),
        p.transmissionMap &&
          ((m.transmissionMap.value = p.transmissionMap),
          e(p.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = p.thickness),
        p.thicknessMap &&
          ((m.thicknessMap.value = p.thicknessMap),
          e(p.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = p.attenuationDistance),
        m.attenuationColor.value.copy(p.attenuationColor)),
      p.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          p.anisotropy * Math.cos(p.anisotropyRotation),
          p.anisotropy * Math.sin(p.anisotropyRotation),
        ),
        p.anisotropyMap &&
          ((m.anisotropyMap.value = p.anisotropyMap),
          e(p.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = p.specularIntensity),
      m.specularColor.value.copy(p.specularColor),
      p.specularColorMap &&
        ((m.specularColorMap.value = p.specularColorMap),
        e(p.specularColorMap, m.specularColorMapTransform)),
      p.specularIntensityMap &&
        ((m.specularIntensityMap.value = p.specularIntensityMap),
        e(p.specularIntensityMap, m.specularIntensityMapTransform)));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function v(m, p) {
    const A = t.get(p).light;
    (m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (m.nearDistance.value = A.shadow.camera.near),
      (m.farDistance.value = A.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function op(i, t, e, n) {
  let r = {},
    s = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, E) {
    const _ = E.program;
    n.uniformBlockBinding(A, _);
  }
  function c(A, E) {
    let _ = r[A.id];
    _ === void 0 &&
      (g(A), (_ = u(A)), (r[A.id] = _), A.addEventListener("dispose", m));
    const b = E.program;
    n.updateUBOMapping(A, b);
    const T = t.render.frame;
    s[A.id] !== T && (d(A), (s[A.id] = T));
  }
  function u(A) {
    const E = h();
    A.__bindingPointIndex = E;
    const _ = i.createBuffer(),
      b = A.__size,
      T = A.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, _),
      i.bufferData(i.UNIFORM_BUFFER, b, T),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, E, _),
      _
    );
  }
  function h() {
    for (let A = 0; A < o; A++) if (a.indexOf(A) === -1) return (a.push(A), A);
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function d(A) {
    const E = r[A.id],
      _ = A.uniforms,
      b = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E);
    for (let T = 0, w = _.length; T < w; T++) {
      const C = Array.isArray(_[T]) ? _[T] : [_[T]];
      for (let M = 0, S = C.length; M < S; M++) {
        const D = C[M];
        if (f(D, T, M, b) === !0) {
          const I = D.__offset,
            B = Array.isArray(D.value) ? D.value : [D.value];
          let H = 0;
          for (let W = 0; W < B.length; W++) {
            const V = B[W],
              K = v(V);
            typeof V == "number" || typeof V == "boolean"
              ? ((D.__data[0] = V),
                i.bufferSubData(i.UNIFORM_BUFFER, I + H, D.__data))
              : V.isMatrix3
                ? ((D.__data[0] = V.elements[0]),
                  (D.__data[1] = V.elements[1]),
                  (D.__data[2] = V.elements[2]),
                  (D.__data[3] = 0),
                  (D.__data[4] = V.elements[3]),
                  (D.__data[5] = V.elements[4]),
                  (D.__data[6] = V.elements[5]),
                  (D.__data[7] = 0),
                  (D.__data[8] = V.elements[6]),
                  (D.__data[9] = V.elements[7]),
                  (D.__data[10] = V.elements[8]),
                  (D.__data[11] = 0))
                : (V.toArray(D.__data, H),
                  (H += K.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, I, D.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(A, E, _, b) {
    const T = A.value,
      w = E + "_" + _;
    if (b[w] === void 0)
      return (
        typeof T == "number" || typeof T == "boolean"
          ? (b[w] = T)
          : (b[w] = T.clone()),
        !0
      );
    {
      const C = b[w];
      if (typeof T == "number" || typeof T == "boolean") {
        if (C !== T) return ((b[w] = T), !0);
      } else if (C.equals(T) === !1) return (C.copy(T), !0);
    }
    return !1;
  }
  function g(A) {
    const E = A.uniforms;
    let _ = 0;
    const b = 16;
    for (let w = 0, C = E.length; w < C; w++) {
      const M = Array.isArray(E[w]) ? E[w] : [E[w]];
      for (let S = 0, D = M.length; S < D; S++) {
        const I = M[S],
          B = Array.isArray(I.value) ? I.value : [I.value];
        for (let H = 0, W = B.length; H < W; H++) {
          const V = B[H],
            K = v(V),
            k = _ % b,
            tt = k % K.boundary,
            ut = k + tt;
          ((_ += tt),
            ut !== 0 && b - ut < K.storage && (_ += b - ut),
            (I.__data = new Float32Array(
              K.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (I.__offset = _),
            (_ += K.storage));
        }
      }
    }
    const T = _ % b;
    return (T > 0 && (_ += b - T), (A.__size = _), (A.__cache = {}), this);
  }
  function v(A) {
    const E = { boundary: 0, storage: 0 };
    return (
      typeof A == "number" || typeof A == "boolean"
        ? ((E.boundary = 4), (E.storage = 4))
        : A.isVector2
          ? ((E.boundary = 8), (E.storage = 8))
          : A.isVector3 || A.isColor
            ? ((E.boundary = 16), (E.storage = 12))
            : A.isVector4
              ? ((E.boundary = 16), (E.storage = 16))
              : A.isMatrix3
                ? ((E.boundary = 48), (E.storage = 48))
                : A.isMatrix4
                  ? ((E.boundary = 64), (E.storage = 64))
                  : A.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        A,
                      ),
      E
    );
  }
  function m(A) {
    const E = A.target;
    E.removeEventListener("dispose", m);
    const _ = a.indexOf(E.__bindingPointIndex);
    (a.splice(_, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id]);
  }
  function p() {
    for (const A in r) i.deleteBuffer(r[A]);
    ((a = []), (r = {}), (s = {}));
  }
  return { bind: l, update: c, dispose: p };
}
class Pp {
  constructor(t = {}) {
    const {
      canvas: e = rl(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: h = !1,
      reversedDepthBuffer: d = !1,
    } = t;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      f = n.getContextAttributes().alpha;
    } else f = a;
    const g = new Uint32Array(4),
      v = new Int32Array(4);
    let m = null,
      p = null;
    const A = [],
      E = [];
    ((this.domElement = e),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = 0),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1));
    const _ = this;
    let b = !1;
    this._outputColorSpace = Ee;
    let T = 0,
      w = 0,
      C = null,
      M = -1,
      S = null;
    const D = new Kt(),
      I = new Kt();
    let B = null;
    const H = new zt(0);
    let W = 0,
      V = e.width,
      K = e.height,
      k = 1,
      tt = null,
      ut = null;
    const Et = new Kt(0, 0, V, K),
      Bt = new Kt(0, 0, V, K);
    let Qt = !1;
    const ne = new As();
    let Xt = !1,
      Y = !1;
    const $ = new Zt(),
      dt = new L(),
      Pt = new Kt(),
      yt = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let Ht = !1;
    function Me() {
      return C === null ? k : 1;
    }
    let P = n;
    function ie(y, F) {
      return e.getContext(y, F);
    }
    try {
      const y = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: u,
        failIfMajorPerformanceCaveat: h,
      };
      if (
        ("setAttribute" in e && e.setAttribute("data-engine", "three.js r180"),
        e.addEventListener("webglcontextlost", rt, !1),
        e.addEventListener("webglcontextrestored", ft, !1),
        e.addEventListener("webglcontextcreationerror", j, !1),
        P === null)
      ) {
        const F = "webgl2";
        if (((P = ie(F, y)), P === null))
          throw ie(F)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (y) {
      throw (console.error("THREE.WebGLRenderer: " + y.message), y);
    }
    let Lt,
      Rt,
      gt,
      re,
      _t,
      Ft,
      ge,
      ue,
      R,
      x,
      O,
      q,
      J,
      X,
      St,
      it,
      vt,
      xt,
      et,
      ct,
      wt,
      Mt,
      at,
      Ut;
    function U() {
      ((Lt = new vf(P)),
        Lt.init(),
        (Mt = new tp(P, Lt)),
        (Rt = new hf(P, Lt, t, Mt)),
        (gt = new jd(P, Lt)),
        Rt.reversedDepthBuffer && d && gt.buffers.depth.setReversed(!0),
        (re = new Sf(P)),
        (_t = new zd()),
        (Ft = new Qd(P, Lt, gt, _t, Rt, Mt, re)),
        (ge = new df(_)),
        (ue = new _f(_)),
        (R = new bc(P)),
        (at = new cf(P, R)),
        (x = new xf(P, R, re, at)),
        (O = new Ef(P, x, R, re)),
        (et = new yf(P, Rt, Ft)),
        (it = new ff(_t)),
        (q = new Bd(_, ge, ue, Lt, Rt, at, it)),
        (J = new ap(_, _t)),
        (X = new Hd()),
        (St = new Yd(Lt)),
        (xt = new lf(_, ge, ue, gt, O, f, l)),
        (vt = new $d(_, O, Rt)),
        (Ut = new op(P, re, Rt, gt)),
        (ct = new uf(P, Lt, re)),
        (wt = new Mf(P, Lt, re)),
        (re.programs = q.programs),
        (_.capabilities = Rt),
        (_.extensions = Lt),
        (_.properties = _t),
        (_.renderLists = X),
        (_.shadowMap = vt),
        (_.state = gt),
        (_.info = re));
    }
    U();
    const nt = new rp(_, P);
    ((this.xr = nt),
      (this.getContext = function () {
        return P;
      }),
      (this.getContextAttributes = function () {
        return P.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const y = Lt.get("WEBGL_lose_context");
        y && y.loseContext();
      }),
      (this.forceContextRestore = function () {
        const y = Lt.get("WEBGL_lose_context");
        y && y.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return k;
      }),
      (this.setPixelRatio = function (y) {
        y !== void 0 && ((k = y), this.setSize(V, K, !1));
      }),
      (this.getSize = function (y) {
        return y.set(V, K);
      }),
      (this.setSize = function (y, F, z = !0) {
        if (nt.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((V = y),
          (K = F),
          (e.width = Math.floor(y * k)),
          (e.height = Math.floor(F * k)),
          z === !0 && ((e.style.width = y + "px"), (e.style.height = F + "px")),
          this.setViewport(0, 0, y, F));
      }),
      (this.getDrawingBufferSize = function (y) {
        return y.set(V * k, K * k).floor();
      }),
      (this.setDrawingBufferSize = function (y, F, z) {
        ((V = y),
          (K = F),
          (k = z),
          (e.width = Math.floor(y * z)),
          (e.height = Math.floor(F * z)),
          this.setViewport(0, 0, y, F));
      }),
      (this.getCurrentViewport = function (y) {
        return y.copy(D);
      }),
      (this.getViewport = function (y) {
        return y.copy(Et);
      }),
      (this.setViewport = function (y, F, z, G) {
        (y.isVector4 ? Et.set(y.x, y.y, y.z, y.w) : Et.set(y, F, z, G),
          gt.viewport(D.copy(Et).multiplyScalar(k).round()));
      }),
      (this.getScissor = function (y) {
        return y.copy(Bt);
      }),
      (this.setScissor = function (y, F, z, G) {
        (y.isVector4 ? Bt.set(y.x, y.y, y.z, y.w) : Bt.set(y, F, z, G),
          gt.scissor(I.copy(Bt).multiplyScalar(k).round()));
      }),
      (this.getScissorTest = function () {
        return Qt;
      }),
      (this.setScissorTest = function (y) {
        gt.setScissorTest((Qt = y));
      }),
      (this.setOpaqueSort = function (y) {
        tt = y;
      }),
      (this.setTransparentSort = function (y) {
        ut = y;
      }),
      (this.getClearColor = function (y) {
        return y.copy(xt.getClearColor());
      }),
      (this.setClearColor = function () {
        xt.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return xt.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        xt.setClearAlpha(...arguments);
      }),
      (this.clear = function (y = !0, F = !0, z = !0) {
        let G = 0;
        if (y) {
          let N = !1;
          if (C !== null) {
            const Q = C.texture.format;
            N = Q === 1033 || Q === 1031 || Q === 1029;
          }
          if (N) {
            const Q = C.texture.type,
              lt =
                Q === 1009 ||
                Q === 1014 ||
                Q === 1012 ||
                Q === 1020 ||
                Q === 1017 ||
                Q === 1018,
              pt = xt.getClearColor(),
              ht = xt.getClearAlpha(),
              bt = pt.r,
              Ct = pt.g,
              Tt = pt.b;
            lt
              ? ((g[0] = bt),
                (g[1] = Ct),
                (g[2] = Tt),
                (g[3] = ht),
                P.clearBufferuiv(P.COLOR, 0, g))
              : ((v[0] = bt),
                (v[1] = Ct),
                (v[2] = Tt),
                (v[3] = ht),
                P.clearBufferiv(P.COLOR, 0, v));
          } else G |= P.COLOR_BUFFER_BIT;
        }
        (F && (G |= P.DEPTH_BUFFER_BIT),
          z &&
            ((G |= P.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          P.clear(G));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (e.removeEventListener("webglcontextlost", rt, !1),
          e.removeEventListener("webglcontextrestored", ft, !1),
          e.removeEventListener("webglcontextcreationerror", j, !1),
          xt.dispose(),
          X.dispose(),
          St.dispose(),
          _t.dispose(),
          ge.dispose(),
          ue.dispose(),
          O.dispose(),
          at.dispose(),
          Ut.dispose(),
          q.dispose(),
          nt.dispose(),
          nt.removeEventListener("sessionstart", ke),
          nt.removeEventListener("sessionend", Ls),
          dn.stop());
      }));
    function rt(y) {
      (y.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (b = !0));
    }
    function ft() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (b = !1));
      const y = re.autoReset,
        F = vt.enabled,
        z = vt.autoUpdate,
        G = vt.needsUpdate,
        N = vt.type;
      (U(),
        (re.autoReset = y),
        (vt.enabled = F),
        (vt.autoUpdate = z),
        (vt.needsUpdate = G),
        (vt.type = N));
    }
    function j(y) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        y.statusMessage,
      );
    }
    function Z(y) {
      const F = y.target;
      (F.removeEventListener("dispose", Z), mt(F));
    }
    function mt(y) {
      (Dt(y), _t.remove(y));
    }
    function Dt(y) {
      const F = _t.get(y).programs;
      F !== void 0 &&
        (F.forEach(function (z) {
          q.releaseProgram(z);
        }),
        y.isShaderMaterial && q.releaseShaderCache(y));
    }
    this.renderBufferDirect = function (y, F, z, G, N, Q) {
      F === null && (F = yt);
      const lt = N.isMesh && N.matrixWorld.determinant() < 0,
        pt = No(y, F, z, G, N);
      gt.setMaterial(G, lt);
      let ht = z.index,
        bt = 1;
      if (G.wireframe === !0) {
        if (((ht = x.getWireframeAttribute(z)), ht === void 0)) return;
        bt = 2;
      }
      const Ct = z.drawRange,
        Tt = z.attributes.position;
      let Gt = Ct.start * bt,
        Jt = (Ct.start + Ct.count) * bt;
      (Q !== null &&
        ((Gt = Math.max(Gt, Q.start * bt)),
        (Jt = Math.min(Jt, (Q.start + Q.count) * bt))),
        ht !== null
          ? ((Gt = Math.max(Gt, 0)), (Jt = Math.min(Jt, ht.count)))
          : Tt != null &&
            ((Gt = Math.max(Gt, 0)), (Jt = Math.min(Jt, Tt.count))));
      const le = Jt - Gt;
      if (le < 0 || le === 1 / 0) return;
      at.setup(N, G, pt, z, ht);
      let ee,
        jt = ct;
      if (
        (ht !== null && ((ee = R.get(ht)), (jt = wt), jt.setIndex(ee)),
        N.isMesh)
      )
        G.wireframe === !0
          ? (gt.setLineWidth(G.wireframeLinewidth * Me()), jt.setMode(P.LINES))
          : jt.setMode(P.TRIANGLES);
      else if (N.isLine) {
        let At = G.linewidth;
        (At === void 0 && (At = 1),
          gt.setLineWidth(At * Me()),
          N.isLineSegments
            ? jt.setMode(P.LINES)
            : N.isLineLoop
              ? jt.setMode(P.LINE_LOOP)
              : jt.setMode(P.LINE_STRIP));
      } else
        N.isPoints
          ? jt.setMode(P.POINTS)
          : N.isSprite && jt.setMode(P.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          (bi(
            "THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.",
          ),
            jt.renderMultiDrawInstances(
              N._multiDrawStarts,
              N._multiDrawCounts,
              N._multiDrawCount,
              N._multiDrawInstances,
            ));
        else if (Lt.get("WEBGL_multi_draw"))
          jt.renderMultiDraw(
            N._multiDrawStarts,
            N._multiDrawCounts,
            N._multiDrawCount,
          );
        else {
          const At = N._multiDrawStarts,
            se = N._multiDrawCounts,
            Vt = N._multiDrawCount,
            Ce = ht ? R.get(ht).bytesPerElement : 1,
            Dn = _t.get(G).currentProgram.getUniforms();
          for (let Pe = 0; Pe < Vt; Pe++)
            (Dn.setValue(P, "_gl_DrawID", Pe), jt.render(At[Pe] / Ce, se[Pe]));
        }
      else if (N.isInstancedMesh) jt.renderInstances(Gt, le, N.count);
      else if (z.isInstancedBufferGeometry) {
        const At = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0,
          se = Math.min(z.instanceCount, At);
        jt.renderInstances(Gt, le, se);
      } else jt.render(Gt, le);
    };
    function te(y, F, z) {
      y.transparent === !0 && y.side === 2 && y.forceSinglePass === !1
        ? ((y.side = 1),
          (y.needsUpdate = !0),
          Fi(y, F, z),
          (y.side = 0),
          (y.needsUpdate = !0),
          Fi(y, F, z),
          (y.side = 2))
        : Fi(y, F, z);
    }
    ((this.compile = function (y, F, z = null) {
      (z === null && (z = y),
        (p = St.get(z)),
        p.init(F),
        E.push(p),
        z.traverseVisible(function (N) {
          N.isLight &&
            N.layers.test(F.layers) &&
            (p.pushLight(N), N.castShadow && p.pushShadow(N));
        }),
        y !== z &&
          y.traverseVisible(function (N) {
            N.isLight &&
              N.layers.test(F.layers) &&
              (p.pushLight(N), N.castShadow && p.pushShadow(N));
          }),
        p.setupLights());
      const G = new Set();
      return (
        y.traverse(function (N) {
          if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite)) return;
          const Q = N.material;
          if (Q)
            if (Array.isArray(Q))
              for (let lt = 0; lt < Q.length; lt++) {
                const pt = Q[lt];
                (te(pt, z, N), G.add(pt));
              }
            else (te(Q, z, N), G.add(Q));
        }),
        (p = E.pop()),
        G
      );
    }),
      (this.compileAsync = function (y, F, z = null) {
        const G = this.compile(y, F, z);
        return new Promise((N) => {
          function Q() {
            if (
              (G.forEach(function (lt) {
                _t.get(lt).currentProgram.isReady() && G.delete(lt);
              }),
              G.size === 0)
            ) {
              N(y);
              return;
            }
            setTimeout(Q, 10);
          }
          Lt.get("KHR_parallel_shader_compile") !== null
            ? Q()
            : setTimeout(Q, 10);
        });
      }));
    let qt = null;
    function Je(y) {
      qt && qt(y);
    }
    function ke() {
      dn.stop();
    }
    function Ls() {
      dn.start();
    }
    const dn = new Co();
    (dn.setAnimationLoop(Je),
      typeof self < "u" && dn.setContext(self),
      (this.setAnimationLoop = function (y) {
        ((qt = y), nt.setAnimationLoop(y), y === null ? dn.stop() : dn.start());
      }),
      nt.addEventListener("sessionstart", ke),
      nt.addEventListener("sessionend", Ls),
      (this.render = function (y, F) {
        if (F !== void 0 && F.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (b === !0) return;
        if (
          (y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(),
          F.parent === null &&
            F.matrixWorldAutoUpdate === !0 &&
            F.updateMatrixWorld(),
          nt.enabled === !0 &&
            nt.isPresenting === !0 &&
            (nt.cameraAutoUpdate === !0 && nt.updateCamera(F),
            (F = nt.getCamera())),
          y.isScene === !0 && y.onBeforeRender(_, y, F, C),
          (p = St.get(y, E.length)),
          p.init(F),
          E.push(p),
          $.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse),
          ne.setFromProjectionMatrix($, 2e3, F.reversedDepth),
          (Y = this.localClippingEnabled),
          (Xt = it.init(this.clippingPlanes, Y)),
          (m = X.get(y, A.length)),
          m.init(),
          A.push(m),
          nt.enabled === !0 && nt.isPresenting === !0)
        ) {
          const Q = _.xr.getDepthSensingMesh();
          Q !== null && wr(Q, F, -1 / 0, _.sortObjects);
        }
        (wr(y, F, 0, _.sortObjects),
          m.finish(),
          _.sortObjects === !0 && m.sort(tt, ut),
          (Ht =
            nt.enabled === !1 ||
            nt.isPresenting === !1 ||
            nt.hasDepthSensing() === !1),
          Ht && xt.addToRenderList(m, y),
          this.info.render.frame++,
          Xt === !0 && it.beginShadows());
        const z = p.state.shadowsArray;
        (vt.render(z, y, F),
          Xt === !0 && it.endShadows(),
          this.info.autoReset === !0 && this.info.reset());
        const G = m.opaque,
          N = m.transmissive;
        if ((p.setupLights(), F.isArrayCamera)) {
          const Q = F.cameras;
          if (N.length > 0)
            for (let lt = 0, pt = Q.length; lt < pt; lt++) {
              const ht = Q[lt];
              Is(G, N, y, ht);
            }
          Ht && xt.render(y);
          for (let lt = 0, pt = Q.length; lt < pt; lt++) {
            const ht = Q[lt];
            Us(m, y, ht, ht.viewport);
          }
        } else
          (N.length > 0 && Is(G, N, y, F), Ht && xt.render(y), Us(m, y, F));
        (C !== null &&
          w === 0 &&
          (Ft.updateMultisampleRenderTarget(C), Ft.updateRenderTargetMipmap(C)),
          y.isScene === !0 && y.onAfterRender(_, y, F),
          at.resetDefaultState(),
          (M = -1),
          (S = null),
          E.pop(),
          E.length > 0
            ? ((p = E[E.length - 1]),
              Xt === !0 && it.setGlobalState(_.clippingPlanes, p.state.camera))
            : (p = null),
          A.pop(),
          A.length > 0 ? (m = A[A.length - 1]) : (m = null));
      }));
    function wr(y, F, z, G) {
      if (y.visible === !1) return;
      if (y.layers.test(F.layers)) {
        if (y.isGroup) z = y.renderOrder;
        else if (y.isLOD) y.autoUpdate === !0 && y.update(F);
        else if (y.isLight) (p.pushLight(y), y.castShadow && p.pushShadow(y));
        else if (y.isSprite) {
          if (!y.frustumCulled || ne.intersectsSprite(y)) {
            G && Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4($);
            const lt = O.update(y),
              pt = y.material;
            pt.visible && m.push(y, lt, pt, z, Pt.z, null);
          }
        } else if (
          (y.isMesh || y.isLine || y.isPoints) &&
          (!y.frustumCulled || ne.intersectsObject(y))
        ) {
          const lt = O.update(y),
            pt = y.material;
          if (
            (G &&
              (y.boundingSphere !== void 0
                ? (y.boundingSphere === null && y.computeBoundingSphere(),
                  Pt.copy(y.boundingSphere.center))
                : (lt.boundingSphere === null && lt.computeBoundingSphere(),
                  Pt.copy(lt.boundingSphere.center)),
              Pt.applyMatrix4(y.matrixWorld).applyMatrix4($)),
            Array.isArray(pt))
          ) {
            const ht = lt.groups;
            for (let bt = 0, Ct = ht.length; bt < Ct; bt++) {
              const Tt = ht[bt],
                Gt = pt[Tt.materialIndex];
              Gt && Gt.visible && m.push(y, lt, Gt, z, Pt.z, Tt);
            }
          } else pt.visible && m.push(y, lt, pt, z, Pt.z, null);
        }
      }
      const Q = y.children;
      for (let lt = 0, pt = Q.length; lt < pt; lt++) wr(Q[lt], F, z, G);
    }
    function Us(y, F, z, G) {
      const N = y.opaque,
        Q = y.transmissive,
        lt = y.transparent;
      (p.setupLightsView(z),
        Xt === !0 && it.setGlobalState(_.clippingPlanes, z),
        G && gt.viewport(D.copy(G)),
        N.length > 0 && Ii(N, F, z),
        Q.length > 0 && Ii(Q, F, z),
        lt.length > 0 && Ii(lt, F, z),
        gt.buffers.depth.setTest(!0),
        gt.buffers.depth.setMask(!0),
        gt.buffers.color.setMask(!0),
        gt.setPolygonOffset(!1));
    }
    function Is(y, F, z, G) {
      if ((z.isScene === !0 ? z.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[G.id] === void 0 &&
        (p.state.transmissionRenderTarget[G.id] = new bn(1, 1, {
          generateMipmaps: !0,
          type:
            Lt.has("EXT_color_buffer_half_float") ||
            Lt.has("EXT_color_buffer_float")
              ? 1016
              : 1009,
          minFilter: 1008,
          samples: 4,
          stencilBuffer: s,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: kt.workingColorSpace,
        }));
      const Q = p.state.transmissionRenderTarget[G.id],
        lt = G.viewport || D;
      Q.setSize(
        lt.z * _.transmissionResolutionScale,
        lt.w * _.transmissionResolutionScale,
      );
      const pt = _.getRenderTarget(),
        ht = _.getActiveCubeFace(),
        bt = _.getActiveMipmapLevel();
      (_.setRenderTarget(Q),
        _.getClearColor(H),
        (W = _.getClearAlpha()),
        W < 1 && _.setClearColor(16777215, 0.5),
        _.clear(),
        Ht && xt.render(z));
      const Ct = _.toneMapping;
      _.toneMapping = 0;
      const Tt = G.viewport;
      if (
        (G.viewport !== void 0 && (G.viewport = void 0),
        p.setupLightsView(G),
        Xt === !0 && it.setGlobalState(_.clippingPlanes, G),
        Ii(y, z, G),
        Ft.updateMultisampleRenderTarget(Q),
        Ft.updateRenderTargetMipmap(Q),
        Lt.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Gt = !1;
        for (let Jt = 0, le = F.length; Jt < le; Jt++) {
          const ee = F[Jt],
            jt = ee.object,
            At = ee.geometry,
            se = ee.material,
            Vt = ee.group;
          if (se.side === 2 && jt.layers.test(G.layers)) {
            const Ce = se.side;
            ((se.side = 1),
              (se.needsUpdate = !0),
              Fs(jt, z, G, At, se, Vt),
              (se.side = Ce),
              (se.needsUpdate = !0),
              (Gt = !0));
          }
        }
        Gt === !0 &&
          (Ft.updateMultisampleRenderTarget(Q), Ft.updateRenderTargetMipmap(Q));
      }
      (_.setRenderTarget(pt, ht, bt),
        _.setClearColor(H, W),
        Tt !== void 0 && (G.viewport = Tt),
        (_.toneMapping = Ct));
    }
    function Ii(y, F, z) {
      const G = F.isScene === !0 ? F.overrideMaterial : null;
      for (let N = 0, Q = y.length; N < Q; N++) {
        const lt = y[N],
          pt = lt.object,
          ht = lt.geometry,
          bt = lt.group;
        let Ct = lt.material;
        (Ct.allowOverride === !0 && G !== null && (Ct = G),
          pt.layers.test(z.layers) && Fs(pt, F, z, ht, Ct, bt));
      }
    }
    function Fs(y, F, z, G, N, Q) {
      (y.onBeforeRender(_, F, z, G, N, Q),
        y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, y.matrixWorld),
        y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
        N.onBeforeRender(_, F, z, G, y, Q),
        N.transparent === !0 && N.side === 2 && N.forceSinglePass === !1
          ? ((N.side = 1),
            (N.needsUpdate = !0),
            _.renderBufferDirect(z, F, G, N, y, Q),
            (N.side = 0),
            (N.needsUpdate = !0),
            _.renderBufferDirect(z, F, G, N, y, Q),
            (N.side = 2))
          : _.renderBufferDirect(z, F, G, N, y, Q),
        y.onAfterRender(_, F, z, G, N, Q));
    }
    function Fi(y, F, z) {
      F.isScene !== !0 && (F = yt);
      const G = _t.get(y),
        N = p.state.lights,
        Q = p.state.shadowsArray,
        lt = N.state.version,
        pt = q.getParameters(y, N.state, Q, F, z),
        ht = q.getProgramCacheKey(pt);
      let bt = G.programs;
      ((G.environment = y.isMeshStandardMaterial ? F.environment : null),
        (G.fog = F.fog),
        (G.envMap = (y.isMeshStandardMaterial ? ue : ge).get(
          y.envMap || G.environment,
        )),
        (G.envMapRotation =
          G.environment !== null && y.envMap === null
            ? F.environmentRotation
            : y.envMapRotation),
        bt === void 0 &&
          (y.addEventListener("dispose", Z),
          (bt = new Map()),
          (G.programs = bt)));
      let Ct = bt.get(ht);
      if (Ct !== void 0) {
        if (G.currentProgram === Ct && G.lightsStateVersion === lt)
          return (Os(y, pt), Ct);
      } else
        ((pt.uniforms = q.getUniforms(y)),
          y.onBeforeCompile(pt, _),
          (Ct = q.acquireProgram(pt, ht)),
          bt.set(ht, Ct),
          (G.uniforms = pt.uniforms));
      const Tt = G.uniforms;
      return (
        ((!y.isShaderMaterial && !y.isRawShaderMaterial) ||
          y.clipping === !0) &&
          (Tt.clippingPlanes = it.uniform),
        Os(y, pt),
        (G.needsLights = Bo(y)),
        (G.lightsStateVersion = lt),
        G.needsLights &&
          ((Tt.ambientLightColor.value = N.state.ambient),
          (Tt.lightProbe.value = N.state.probe),
          (Tt.directionalLights.value = N.state.directional),
          (Tt.directionalLightShadows.value = N.state.directionalShadow),
          (Tt.spotLights.value = N.state.spot),
          (Tt.spotLightShadows.value = N.state.spotShadow),
          (Tt.rectAreaLights.value = N.state.rectArea),
          (Tt.ltc_1.value = N.state.rectAreaLTC1),
          (Tt.ltc_2.value = N.state.rectAreaLTC2),
          (Tt.pointLights.value = N.state.point),
          (Tt.pointLightShadows.value = N.state.pointShadow),
          (Tt.hemisphereLights.value = N.state.hemi),
          (Tt.directionalShadowMap.value = N.state.directionalShadowMap),
          (Tt.directionalShadowMatrix.value = N.state.directionalShadowMatrix),
          (Tt.spotShadowMap.value = N.state.spotShadowMap),
          (Tt.spotLightMatrix.value = N.state.spotLightMatrix),
          (Tt.spotLightMap.value = N.state.spotLightMap),
          (Tt.pointShadowMap.value = N.state.pointShadowMap),
          (Tt.pointShadowMatrix.value = N.state.pointShadowMatrix)),
        (G.currentProgram = Ct),
        (G.uniformsList = null),
        Ct
      );
    }
    function Ns(y) {
      if (y.uniformsList === null) {
        const F = y.currentProgram.getUniforms();
        y.uniformsList = mr.seqWithValue(F.seq, y.uniforms);
      }
      return y.uniformsList;
    }
    function Os(y, F) {
      const z = _t.get(y);
      ((z.outputColorSpace = F.outputColorSpace),
        (z.batching = F.batching),
        (z.batchingColor = F.batchingColor),
        (z.instancing = F.instancing),
        (z.instancingColor = F.instancingColor),
        (z.instancingMorph = F.instancingMorph),
        (z.skinning = F.skinning),
        (z.morphTargets = F.morphTargets),
        (z.morphNormals = F.morphNormals),
        (z.morphColors = F.morphColors),
        (z.morphTargetsCount = F.morphTargetsCount),
        (z.numClippingPlanes = F.numClippingPlanes),
        (z.numIntersection = F.numClipIntersection),
        (z.vertexAlphas = F.vertexAlphas),
        (z.vertexTangents = F.vertexTangents),
        (z.toneMapping = F.toneMapping));
    }
    function No(y, F, z, G, N) {
      (F.isScene !== !0 && (F = yt), Ft.resetTextureUnits());
      const Q = F.fog,
        lt = G.isMeshStandardMaterial ? F.environment : null,
        pt =
          C === null
            ? _.outputColorSpace
            : C.isXRRenderTarget === !0
              ? C.texture.colorSpace
              : Qn,
        ht = (G.isMeshStandardMaterial ? ue : ge).get(G.envMap || lt),
        bt =
          G.vertexColors === !0 &&
          !!z.attributes.color &&
          z.attributes.color.itemSize === 4,
        Ct = !!z.attributes.tangent && (!!G.normalMap || G.anisotropy > 0),
        Tt = !!z.morphAttributes.position,
        Gt = !!z.morphAttributes.normal,
        Jt = !!z.morphAttributes.color;
      let le = 0;
      G.toneMapped &&
        (C === null || C.isXRRenderTarget === !0) &&
        (le = _.toneMapping);
      const ee =
          z.morphAttributes.position ||
          z.morphAttributes.normal ||
          z.morphAttributes.color,
        jt = ee !== void 0 ? ee.length : 0,
        At = _t.get(G),
        se = p.state.lights;
      if (Xt === !0 && (Y === !0 || y !== S)) {
        const Te = y === S && G.id === M;
        it.setState(G, y, Te);
      }
      let Vt = !1;
      G.version === At.__version
        ? ((At.needsLights && At.lightsStateVersion !== se.state.version) ||
            At.outputColorSpace !== pt ||
            (N.isBatchedMesh && At.batching === !1) ||
            (!N.isBatchedMesh && At.batching === !0) ||
            (N.isBatchedMesh &&
              At.batchingColor === !0 &&
              N.colorTexture === null) ||
            (N.isBatchedMesh &&
              At.batchingColor === !1 &&
              N.colorTexture !== null) ||
            (N.isInstancedMesh && At.instancing === !1) ||
            (!N.isInstancedMesh && At.instancing === !0) ||
            (N.isSkinnedMesh && At.skinning === !1) ||
            (!N.isSkinnedMesh && At.skinning === !0) ||
            (N.isInstancedMesh &&
              At.instancingColor === !0 &&
              N.instanceColor === null) ||
            (N.isInstancedMesh &&
              At.instancingColor === !1 &&
              N.instanceColor !== null) ||
            (N.isInstancedMesh &&
              At.instancingMorph === !0 &&
              N.morphTexture === null) ||
            (N.isInstancedMesh &&
              At.instancingMorph === !1 &&
              N.morphTexture !== null) ||
            At.envMap !== ht ||
            (G.fog === !0 && At.fog !== Q) ||
            (At.numClippingPlanes !== void 0 &&
              (At.numClippingPlanes !== it.numPlanes ||
                At.numIntersection !== it.numIntersection)) ||
            At.vertexAlphas !== bt ||
            At.vertexTangents !== Ct ||
            At.morphTargets !== Tt ||
            At.morphNormals !== Gt ||
            At.morphColors !== Jt ||
            At.toneMapping !== le ||
            At.morphTargetsCount !== jt) &&
          (Vt = !0)
        : ((Vt = !0), (At.__version = G.version));
      let Ce = At.currentProgram;
      Vt === !0 && (Ce = Fi(G, F, N));
      let Dn = !1,
        Pe = !1,
        si = !1;
      const ae = Ce.getUniforms(),
        Ie = At.uniforms;
      if (
        (gt.useProgram(Ce.program) && ((Dn = !0), (Pe = !0), (si = !0)),
        G.id !== M && ((M = G.id), (Pe = !0)),
        Dn || S !== y)
      ) {
        (gt.buffers.depth.getReversed() &&
          y.reversedDepth !== !0 &&
          ((y._reversedDepth = !0), y.updateProjectionMatrix()),
          ae.setValue(P, "projectionMatrix", y.projectionMatrix),
          ae.setValue(P, "viewMatrix", y.matrixWorldInverse));
        const we = ae.map.cameraPosition;
        (we !== void 0 &&
          we.setValue(P, dt.setFromMatrixPosition(y.matrixWorld)),
          Rt.logarithmicDepthBuffer &&
            ae.setValue(
              P,
              "logDepthBufFC",
              2 / (Math.log(y.far + 1) / Math.LN2),
            ),
          (G.isMeshPhongMaterial ||
            G.isMeshToonMaterial ||
            G.isMeshLambertMaterial ||
            G.isMeshBasicMaterial ||
            G.isMeshStandardMaterial ||
            G.isShaderMaterial) &&
            ae.setValue(P, "isOrthographic", y.isOrthographicCamera === !0),
          S !== y && ((S = y), (Pe = !0), (si = !0)));
      }
      if (N.isSkinnedMesh) {
        (ae.setOptional(P, N, "bindMatrix"),
          ae.setOptional(P, N, "bindMatrixInverse"));
        const Te = N.skeleton;
        Te &&
          (Te.boneTexture === null && Te.computeBoneTexture(),
          ae.setValue(P, "boneTexture", Te.boneTexture, Ft));
      }
      N.isBatchedMesh &&
        (ae.setOptional(P, N, "batchingTexture"),
        ae.setValue(P, "batchingTexture", N._matricesTexture, Ft),
        ae.setOptional(P, N, "batchingIdTexture"),
        ae.setValue(P, "batchingIdTexture", N._indirectTexture, Ft),
        ae.setOptional(P, N, "batchingColorTexture"),
        N._colorsTexture !== null &&
          ae.setValue(P, "batchingColorTexture", N._colorsTexture, Ft));
      const Fe = z.morphAttributes;
      if (
        ((Fe.position !== void 0 ||
          Fe.normal !== void 0 ||
          Fe.color !== void 0) &&
          et.update(N, z, Ce),
        (Pe || At.receiveShadow !== N.receiveShadow) &&
          ((At.receiveShadow = N.receiveShadow),
          ae.setValue(P, "receiveShadow", N.receiveShadow)),
        G.isMeshGouraudMaterial &&
          G.envMap !== null &&
          ((Ie.envMap.value = ht),
          (Ie.flipEnvMap.value =
            ht.isCubeTexture && ht.isRenderTargetTexture === !1 ? -1 : 1)),
        G.isMeshStandardMaterial &&
          G.envMap === null &&
          F.environment !== null &&
          (Ie.envMapIntensity.value = F.environmentIntensity),
        Pe &&
          (ae.setValue(P, "toneMappingExposure", _.toneMappingExposure),
          At.needsLights && Oo(Ie, si),
          Q && G.fog === !0 && J.refreshFogUniforms(Ie, Q),
          J.refreshMaterialUniforms(
            Ie,
            G,
            k,
            K,
            p.state.transmissionRenderTarget[y.id],
          ),
          mr.upload(P, Ns(At), Ie, Ft)),
        G.isShaderMaterial &&
          G.uniformsNeedUpdate === !0 &&
          (mr.upload(P, Ns(At), Ie, Ft), (G.uniformsNeedUpdate = !1)),
        G.isSpriteMaterial && ae.setValue(P, "center", N.center),
        ae.setValue(P, "modelViewMatrix", N.modelViewMatrix),
        ae.setValue(P, "normalMatrix", N.normalMatrix),
        ae.setValue(P, "modelMatrix", N.matrixWorld),
        G.isShaderMaterial || G.isRawShaderMaterial)
      ) {
        const Te = G.uniformsGroups;
        for (let we = 0, Rr = Te.length; we < Rr; we++) {
          const pn = Te[we];
          (Ut.update(pn, Ce), Ut.bind(pn, Ce));
        }
      }
      return Ce;
    }
    function Oo(y, F) {
      ((y.ambientLightColor.needsUpdate = F),
        (y.lightProbe.needsUpdate = F),
        (y.directionalLights.needsUpdate = F),
        (y.directionalLightShadows.needsUpdate = F),
        (y.pointLights.needsUpdate = F),
        (y.pointLightShadows.needsUpdate = F),
        (y.spotLights.needsUpdate = F),
        (y.spotLightShadows.needsUpdate = F),
        (y.rectAreaLights.needsUpdate = F),
        (y.hemisphereLights.needsUpdate = F));
    }
    function Bo(y) {
      return (
        y.isMeshLambertMaterial ||
        y.isMeshToonMaterial ||
        y.isMeshPhongMaterial ||
        y.isMeshStandardMaterial ||
        y.isShadowMaterial ||
        (y.isShaderMaterial && y.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return T;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return C;
      }),
      (this.setRenderTargetTextures = function (y, F, z) {
        const G = _t.get(y);
        ((G.__autoAllocateDepthBuffer = y.resolveDepthBuffer === !1),
          G.__autoAllocateDepthBuffer === !1 && (G.__useRenderToTexture = !1),
          (_t.get(y.texture).__webglTexture = F),
          (_t.get(y.depthTexture).__webglTexture = G.__autoAllocateDepthBuffer
            ? void 0
            : z),
          (G.__hasExternalTextures = !0));
      }),
      (this.setRenderTargetFramebuffer = function (y, F) {
        const z = _t.get(y);
        ((z.__webglFramebuffer = F),
          (z.__useDefaultFramebuffer = F === void 0));
      }));
    const zo = P.createFramebuffer();
    ((this.setRenderTarget = function (y, F = 0, z = 0) {
      ((C = y), (T = F), (w = z));
      let G = !0,
        N = null,
        Q = !1,
        lt = !1;
      if (y) {
        const ht = _t.get(y);
        if (ht.__useDefaultFramebuffer !== void 0)
          (gt.bindFramebuffer(P.FRAMEBUFFER, null), (G = !1));
        else if (ht.__webglFramebuffer === void 0) Ft.setupRenderTarget(y);
        else if (ht.__hasExternalTextures)
          Ft.rebindTextures(
            y,
            _t.get(y.texture).__webglTexture,
            _t.get(y.depthTexture).__webglTexture,
          );
        else if (y.depthBuffer) {
          const Tt = y.depthTexture;
          if (ht.__boundDepthTexture !== Tt) {
            if (
              Tt !== null &&
              _t.has(Tt) &&
              (y.width !== Tt.image.width || y.height !== Tt.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
              );
            Ft.setupDepthRenderbuffer(y);
          }
        }
        const bt = y.texture;
        (bt.isData3DTexture ||
          bt.isDataArrayTexture ||
          bt.isCompressedArrayTexture) &&
          (lt = !0);
        const Ct = _t.get(y).__webglFramebuffer;
        (y.isWebGLCubeRenderTarget
          ? (Array.isArray(Ct[F]) ? (N = Ct[F][z]) : (N = Ct[F]), (Q = !0))
          : y.samples > 0 && Ft.useMultisampledRTT(y) === !1
            ? (N = _t.get(y).__webglMultisampledFramebuffer)
            : Array.isArray(Ct)
              ? (N = Ct[z])
              : (N = Ct),
          D.copy(y.viewport),
          I.copy(y.scissor),
          (B = y.scissorTest));
      } else
        (D.copy(Et).multiplyScalar(k).floor(),
          I.copy(Bt).multiplyScalar(k).floor(),
          (B = Qt));
      if (
        (z !== 0 && (N = zo),
        gt.bindFramebuffer(P.FRAMEBUFFER, N) && G && gt.drawBuffers(y, N),
        gt.viewport(D),
        gt.scissor(I),
        gt.setScissorTest(B),
        Q)
      ) {
        const ht = _t.get(y.texture);
        P.framebufferTexture2D(
          P.FRAMEBUFFER,
          P.COLOR_ATTACHMENT0,
          P.TEXTURE_CUBE_MAP_POSITIVE_X + F,
          ht.__webglTexture,
          z,
        );
      } else if (lt) {
        const ht = F;
        for (let bt = 0; bt < y.textures.length; bt++) {
          const Ct = _t.get(y.textures[bt]);
          P.framebufferTextureLayer(
            P.FRAMEBUFFER,
            P.COLOR_ATTACHMENT0 + bt,
            Ct.__webglTexture,
            z,
            ht,
          );
        }
      } else if (y !== null && z !== 0) {
        const ht = _t.get(y.texture);
        P.framebufferTexture2D(
          P.FRAMEBUFFER,
          P.COLOR_ATTACHMENT0,
          P.TEXTURE_2D,
          ht.__webglTexture,
          z,
        );
      }
      M = -1;
    }),
      (this.readRenderTargetPixels = function (y, F, z, G, N, Q, lt, pt = 0) {
        if (!(y && y.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let ht = _t.get(y).__webglFramebuffer;
        if ((y.isWebGLCubeRenderTarget && lt !== void 0 && (ht = ht[lt]), ht)) {
          gt.bindFramebuffer(P.FRAMEBUFFER, ht);
          try {
            const bt = y.textures[pt],
              Ct = bt.format,
              Tt = bt.type;
            if (!Rt.textureFormatReadable(Ct)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!Rt.textureTypeReadable(Tt)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            F >= 0 &&
              F <= y.width - G &&
              z >= 0 &&
              z <= y.height - N &&
              (y.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + pt),
              P.readPixels(F, z, G, N, Mt.convert(Ct), Mt.convert(Tt), Q));
          } finally {
            const bt = C !== null ? _t.get(C).__webglFramebuffer : null;
            gt.bindFramebuffer(P.FRAMEBUFFER, bt);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        y,
        F,
        z,
        G,
        N,
        Q,
        lt,
        pt = 0,
      ) {
        if (!(y && y.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let ht = _t.get(y).__webglFramebuffer;
        if ((y.isWebGLCubeRenderTarget && lt !== void 0 && (ht = ht[lt]), ht))
          if (F >= 0 && F <= y.width - G && z >= 0 && z <= y.height - N) {
            gt.bindFramebuffer(P.FRAMEBUFFER, ht);
            const bt = y.textures[pt],
              Ct = bt.format,
              Tt = bt.type;
            if (!Rt.textureFormatReadable(Ct))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
              );
            if (!Rt.textureTypeReadable(Tt))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
            const Gt = P.createBuffer();
            (P.bindBuffer(P.PIXEL_PACK_BUFFER, Gt),
              P.bufferData(P.PIXEL_PACK_BUFFER, Q.byteLength, P.STREAM_READ),
              y.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + pt),
              P.readPixels(F, z, G, N, Mt.convert(Ct), Mt.convert(Tt), 0));
            const Jt = C !== null ? _t.get(C).__webglFramebuffer : null;
            gt.bindFramebuffer(P.FRAMEBUFFER, Jt);
            const le = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              P.flush(),
              await sl(P, le, 4),
              P.bindBuffer(P.PIXEL_PACK_BUFFER, Gt),
              P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, Q),
              P.deleteBuffer(Gt),
              P.deleteSync(le),
              Q
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
      }),
      (this.copyFramebufferToTexture = function (y, F = null, z = 0) {
        const G = Math.pow(2, -z),
          N = Math.floor(y.image.width * G),
          Q = Math.floor(y.image.height * G),
          lt = F !== null ? F.x : 0,
          pt = F !== null ? F.y : 0;
        (Ft.setTexture2D(y, 0),
          P.copyTexSubImage2D(P.TEXTURE_2D, z, 0, 0, lt, pt, N, Q),
          gt.unbindTexture());
      }));
    const Go = P.createFramebuffer(),
      Ho = P.createFramebuffer();
    ((this.copyTextureToTexture = function (
      y,
      F,
      z = null,
      G = null,
      N = 0,
      Q = null,
    ) {
      Q === null &&
        (N !== 0
          ? (bi(
              "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
            ),
            (Q = N),
            (N = 0))
          : (Q = 0));
      let lt, pt, ht, bt, Ct, Tt, Gt, Jt, le;
      const ee = y.isCompressedTexture ? y.mipmaps[Q] : y.image;
      if (z !== null)
        ((lt = z.max.x - z.min.x),
          (pt = z.max.y - z.min.y),
          (ht = z.isBox3 ? z.max.z - z.min.z : 1),
          (bt = z.min.x),
          (Ct = z.min.y),
          (Tt = z.isBox3 ? z.min.z : 0));
      else {
        const Fe = Math.pow(2, -N);
        ((lt = Math.floor(ee.width * Fe)),
          (pt = Math.floor(ee.height * Fe)),
          y.isDataArrayTexture
            ? (ht = ee.depth)
            : y.isData3DTexture
              ? (ht = Math.floor(ee.depth * Fe))
              : (ht = 1),
          (bt = 0),
          (Ct = 0),
          (Tt = 0));
      }
      G !== null
        ? ((Gt = G.x), (Jt = G.y), (le = G.z))
        : ((Gt = 0), (Jt = 0), (le = 0));
      const jt = Mt.convert(F.format),
        At = Mt.convert(F.type);
      let se;
      (F.isData3DTexture
        ? (Ft.setTexture3D(F, 0), (se = P.TEXTURE_3D))
        : F.isDataArrayTexture || F.isCompressedArrayTexture
          ? (Ft.setTexture2DArray(F, 0), (se = P.TEXTURE_2D_ARRAY))
          : (Ft.setTexture2D(F, 0), (se = P.TEXTURE_2D)),
        P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, F.flipY),
        P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha),
        P.pixelStorei(P.UNPACK_ALIGNMENT, F.unpackAlignment));
      const Vt = P.getParameter(P.UNPACK_ROW_LENGTH),
        Ce = P.getParameter(P.UNPACK_IMAGE_HEIGHT),
        Dn = P.getParameter(P.UNPACK_SKIP_PIXELS),
        Pe = P.getParameter(P.UNPACK_SKIP_ROWS),
        si = P.getParameter(P.UNPACK_SKIP_IMAGES);
      (P.pixelStorei(P.UNPACK_ROW_LENGTH, ee.width),
        P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ee.height),
        P.pixelStorei(P.UNPACK_SKIP_PIXELS, bt),
        P.pixelStorei(P.UNPACK_SKIP_ROWS, Ct),
        P.pixelStorei(P.UNPACK_SKIP_IMAGES, Tt));
      const ae = y.isDataArrayTexture || y.isData3DTexture,
        Ie = F.isDataArrayTexture || F.isData3DTexture;
      if (y.isDepthTexture) {
        const Fe = _t.get(y),
          Te = _t.get(F),
          we = _t.get(Fe.__renderTarget),
          Rr = _t.get(Te.__renderTarget);
        (gt.bindFramebuffer(P.READ_FRAMEBUFFER, we.__webglFramebuffer),
          gt.bindFramebuffer(P.DRAW_FRAMEBUFFER, Rr.__webglFramebuffer));
        for (let pn = 0; pn < ht; pn++)
          (ae &&
            (P.framebufferTextureLayer(
              P.READ_FRAMEBUFFER,
              P.COLOR_ATTACHMENT0,
              _t.get(y).__webglTexture,
              N,
              Tt + pn,
            ),
            P.framebufferTextureLayer(
              P.DRAW_FRAMEBUFFER,
              P.COLOR_ATTACHMENT0,
              _t.get(F).__webglTexture,
              Q,
              le + pn,
            )),
            P.blitFramebuffer(
              bt,
              Ct,
              lt,
              pt,
              Gt,
              Jt,
              lt,
              pt,
              P.DEPTH_BUFFER_BIT,
              P.NEAREST,
            ));
        (gt.bindFramebuffer(P.READ_FRAMEBUFFER, null),
          gt.bindFramebuffer(P.DRAW_FRAMEBUFFER, null));
      } else if (N !== 0 || y.isRenderTargetTexture || _t.has(y)) {
        const Fe = _t.get(y),
          Te = _t.get(F);
        (gt.bindFramebuffer(P.READ_FRAMEBUFFER, Go),
          gt.bindFramebuffer(P.DRAW_FRAMEBUFFER, Ho));
        for (let we = 0; we < ht; we++)
          (ae
            ? P.framebufferTextureLayer(
                P.READ_FRAMEBUFFER,
                P.COLOR_ATTACHMENT0,
                Fe.__webglTexture,
                N,
                Tt + we,
              )
            : P.framebufferTexture2D(
                P.READ_FRAMEBUFFER,
                P.COLOR_ATTACHMENT0,
                P.TEXTURE_2D,
                Fe.__webglTexture,
                N,
              ),
            Ie
              ? P.framebufferTextureLayer(
                  P.DRAW_FRAMEBUFFER,
                  P.COLOR_ATTACHMENT0,
                  Te.__webglTexture,
                  Q,
                  le + we,
                )
              : P.framebufferTexture2D(
                  P.DRAW_FRAMEBUFFER,
                  P.COLOR_ATTACHMENT0,
                  P.TEXTURE_2D,
                  Te.__webglTexture,
                  Q,
                ),
            N !== 0
              ? P.blitFramebuffer(
                  bt,
                  Ct,
                  lt,
                  pt,
                  Gt,
                  Jt,
                  lt,
                  pt,
                  P.COLOR_BUFFER_BIT,
                  P.NEAREST,
                )
              : Ie
                ? P.copyTexSubImage3D(se, Q, Gt, Jt, le + we, bt, Ct, lt, pt)
                : P.copyTexSubImage2D(se, Q, Gt, Jt, bt, Ct, lt, pt));
        (gt.bindFramebuffer(P.READ_FRAMEBUFFER, null),
          gt.bindFramebuffer(P.DRAW_FRAMEBUFFER, null));
      } else
        Ie
          ? y.isDataTexture || y.isData3DTexture
            ? P.texSubImage3D(se, Q, Gt, Jt, le, lt, pt, ht, jt, At, ee.data)
            : F.isCompressedArrayTexture
              ? P.compressedTexSubImage3D(
                  se,
                  Q,
                  Gt,
                  Jt,
                  le,
                  lt,
                  pt,
                  ht,
                  jt,
                  ee.data,
                )
              : P.texSubImage3D(se, Q, Gt, Jt, le, lt, pt, ht, jt, At, ee)
          : y.isDataTexture
            ? P.texSubImage2D(P.TEXTURE_2D, Q, Gt, Jt, lt, pt, jt, At, ee.data)
            : y.isCompressedTexture
              ? P.compressedTexSubImage2D(
                  P.TEXTURE_2D,
                  Q,
                  Gt,
                  Jt,
                  ee.width,
                  ee.height,
                  jt,
                  ee.data,
                )
              : P.texSubImage2D(P.TEXTURE_2D, Q, Gt, Jt, lt, pt, jt, At, ee);
      (P.pixelStorei(P.UNPACK_ROW_LENGTH, Vt),
        P.pixelStorei(P.UNPACK_IMAGE_HEIGHT, Ce),
        P.pixelStorei(P.UNPACK_SKIP_PIXELS, Dn),
        P.pixelStorei(P.UNPACK_SKIP_ROWS, Pe),
        P.pixelStorei(P.UNPACK_SKIP_IMAGES, si),
        Q === 0 && F.generateMipmaps && P.generateMipmap(se),
        gt.unbindTexture());
    }),
      (this.initRenderTarget = function (y) {
        _t.get(y).__webglFramebuffer === void 0 && Ft.setupRenderTarget(y);
      }),
      (this.initTexture = function (y) {
        (y.isCubeTexture
          ? Ft.setTextureCube(y, 0)
          : y.isData3DTexture
            ? Ft.setTexture3D(y, 0)
            : y.isDataArrayTexture || y.isCompressedArrayTexture
              ? Ft.setTexture2DArray(y, 0)
              : Ft.setTexture2D(y, 0),
          gt.unbindTexture());
      }),
      (this.resetState = function () {
        ((T = 0), (w = 0), (C = null), gt.reset(), at.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    const e = this.getContext();
    ((e.drawingBufferColorSpace = kt._getDrawingBufferColorSpace(t)),
      (e.unpackColorSpace = kt._getUnpackColorSpace()));
  }
}
function lp(i, t = !1) {
  const e = i[0].index !== null,
    n = new Set(Object.keys(i[0].attributes)),
    r = new Set(Object.keys(i[0].morphAttributes)),
    s = {},
    a = {},
    o = i[0].morphTargetsRelative,
    l = new de();
  let c = 0;
  for (let u = 0; u < i.length; ++u) {
    const h = i[u];
    let d = 0;
    if (e !== (h.index !== null))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            u +
            ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.",
        ),
        null
      );
    for (const f in h.attributes) {
      if (!n.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              u +
              '. All geometries must have compatible attributes; make sure "' +
              f +
              '" attribute exists among all geometries, or in none of them.',
          ),
          null
        );
      (s[f] === void 0 && (s[f] = []), s[f].push(h.attributes[f]), d++);
    }
    if (d !== n.size)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            u +
            ". Make sure all geometries have the same number of attributes.",
        ),
        null
      );
    if (o !== h.morphTargetsRelative)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
            u +
            ". .morphTargetsRelative must be consistent throughout all geometries.",
        ),
        null
      );
    for (const f in h.morphAttributes) {
      if (!r.has(f))
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              u +
              ".  .morphAttributes must be consistent throughout all geometries.",
          ),
          null
        );
      (a[f] === void 0 && (a[f] = []), a[f].push(h.morphAttributes[f]));
    }
    if (t) {
      let f;
      if (e) f = h.index.count;
      else if (h.attributes.position !== void 0)
        f = h.attributes.position.count;
      else
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
              u +
              ". The geometry must have either an index or a position attribute",
          ),
          null
        );
      (l.addGroup(c, f, u), (c += f));
    }
  }
  if (e) {
    let u = 0;
    const h = [];
    for (let d = 0; d < i.length; ++d) {
      const f = i[d].index;
      for (let g = 0; g < f.count; ++g) h.push(f.getX(g) + u);
      u += i[d].attributes.position.count;
    }
    l.setIndex(h);
  }
  for (const u in s) {
    const h = qa(s[u]);
    if (!h)
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
            u +
            " attribute.",
        ),
        null
      );
    l.setAttribute(u, h);
  }
  for (const u in a) {
    const h = a[u][0].length;
    if (h === 0) break;
    ((l.morphAttributes = l.morphAttributes || {}),
      (l.morphAttributes[u] = []));
    for (let d = 0; d < h; ++d) {
      const f = [];
      for (let v = 0; v < a[u].length; ++v) f.push(a[u][v][d]);
      const g = qa(f);
      if (!g)
        return (
          console.error(
            "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
              u +
              " morphAttribute.",
          ),
          null
        );
      l.morphAttributes[u].push(g);
    }
  }
  return l;
}
function qa(i) {
  let t,
    e,
    n,
    r = -1,
    s = 0;
  for (let c = 0; c < i.length; ++c) {
    const u = i[c];
    if ((t === void 0 && (t = u.array.constructor), t !== u.array.constructor))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.",
        ),
        null
      );
    if ((e === void 0 && (e = u.itemSize), e !== u.itemSize))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.",
        ),
        null
      );
    if ((n === void 0 && (n = u.normalized), n !== u.normalized))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.",
        ),
        null
      );
    if ((r === -1 && (r = u.gpuType), r !== u.gpuType))
      return (
        console.error(
          "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.",
        ),
        null
      );
    s += u.count * e;
  }
  const a = new t(s),
    o = new Re(a, e, n);
  let l = 0;
  for (let c = 0; c < i.length; ++c) {
    const u = i[c];
    if (u.isInterleavedBufferAttribute) {
      const h = l / e;
      for (let d = 0, f = u.count; d < f; d++)
        for (let g = 0; g < e; g++) {
          const v = u.getComponent(d, g);
          o.setComponent(d + h, g, v);
        }
    } else a.set(u.array, l);
    l += u.count * e;
  }
  return (r !== void 0 && (o.gpuType = r), o);
}
const yr = 12288349,
  en = 2695973,
  hs = new Map(),
  fs = new Map(),
  Io = new Map();
let ds;
function cp(i) {
  return (
    hs.has(i) || hs.set(i, new Tr({ color: i, roughness: 0.82 })),
    hs.get(i)
  );
}
function Tn(i, t) {
  return (fs.has(i) || fs.set(i, t()), fs.get(i));
}
function An(i, t, e, n, r, s) {
  const a = new ve(t, cp(e));
  return (
    a.position.set(n, r, s),
    (a.castShadow = a.receiveShadow = !0),
    i.add(a),
    a
  );
}
const fe = (i, t, e, n, r, s) =>
    An(
      i,
      Tn(`s${r}`, () => new Ui(r, 16, 12)),
      s,
      t,
      e,
      n,
    ),
  un = (i, t, e, n, r, s, a, o) =>
    An(
      i,
      Tn(`b${r}/${s}/${a}`, () => new Pn(r, s, a)),
      o,
      t,
      e,
      n,
    ),
  dr = (i, t, e, n, r, s, a, o) =>
    An(
      i,
      Tn(`c${r}/${s}/${a}`, () => new Di(r, s, a, 16)),
      o,
      t,
      e,
      n,
    );
function up() {
  const i = new Ui(0.292, 24, 12, 0, Math.PI * 2, 0, 1.18);
  return (i.scale(0.94, 1.09, 0.96), i);
}
const Fo = new Tr({ vertexColors: !0, roughness: 0.85 });
function gr(i) {
  const t = [];
  for (const r of [...i.children]) {
    if (!r.isMesh) continue;
    r.updateMatrix();
    const s = r.geometry.index ? r.geometry.toNonIndexed() : r.geometry.clone();
    s.applyMatrix4(r.matrix);
    const a = s.attributes.position.count,
      o = new Float32Array(a * 3),
      l = r.material.color;
    for (let c = 0; c < a; c++)
      ((o[c * 3] = l.r), (o[c * 3 + 1] = l.g), (o[c * 3 + 2] = l.b));
    (s.setAttribute("color", new Re(o, 3)), t.push(s), i.remove(r));
  }
  const e = lp(t);
  t.forEach((r) => r.dispose());
  const n = new ve(e, Fo);
  return ((n.castShadow = n.receiveShadow = !0), i.add(n), n);
}
function hp(i) {
  const t = ["mother", "suhani", "girl"].includes(i),
    e = new Xe();
  (fe(e, 0, 0, 0, 0.28, yr).scale.set(0.92, 1.08, 0.94),
    An(e, Tn("hair-cap", up), en, 0, 0, 0));
  for (let o = 0; o < (i === "beggar" ? 5 : 3); o++) {
    const l = fe(
      e,
      -0.14 + o * 0.065,
      0.225 + Math.sin(o) * 0.025,
      0.1,
      0.12,
      en,
    );
    (l.scale.set(1.05, 0.42, 0.85), (l.rotation.z = -0.25));
  }
  if (t) {
    if (i === "mother") fe(e, 0, 0.04, -0.32, 0.145, en);
    else
      for (const o of [-0.16, 0, 0.16]) {
        fe(e, o, -0.24, -0.24, 0.16, en).scale.set(0.9, 2.4, 0.55);
        for (let c = 0; c < 3; c++)
          fe(
            e,
            o + Math.sin(c * 1.7) * 0.035,
            -0.19 - c * 0.12,
            -0.29,
            0.09,
            3812651,
          ).scale.set(0.72, 1.2, 0.55);
      }
    fe(e, 0, 0.115, 0.251, 0.018, 11614530);
  }
  for (const o of [-0.09, 0.09]) {
    fe(e, o, 0.045, 0.239, t ? 0.044 : 0.047, 16773336).scale.set(
      1.08,
      0.63,
      0.48,
    );
    const c = fe(e, o, 0.043, 0.261, t ? 0.02 : 0.021, 3615267);
    if (
      ((c.scale.z = 0.45), fe(e, o - 0.006, 0.05, 0.271, 0.005, 16774618), t)
    ) {
      const h = An(
        e,
        Tn("eyelid", () => new Ti(0.043, 0.006, 4, 12, Math.PI)),
        en,
        o,
        0.047,
        0.255,
      );
      h.scale.y = 0.6;
    }
    const u = un(e, o, 0.115, 0.24, 0.105, 0.023, 0.032, en);
    ((u.rotation.z = o < 0 ? -0.12 : 0.12),
      fe(e, Math.sign(o) * 0.258, -0.02, 0, 0.06, yr),
      t &&
        (fe(e, Math.sign(o) * 0.27, -0.1, 0.015, 0.027, 14133059),
        fe(e, Math.sign(o) * 0.27, -0.15, 0.015, 0.036, 15054928)));
  }
  fe(e, 0, -0.047, 0.252, t ? 0.03 : 0.035, 12880741).scale.set(0.75, 1.1, 0.7);
  const s = An(
    e,
    Tn("smile", () => new Ti(0.05, 0.009, 5, 12, Math.PI)),
    8866884,
    0,
    -0.116,
    0.245,
  );
  if (
    ((s.rotation.z = Math.PI),
    (s.scale.y = 0.42),
    t && fe(e, 0, -0.133, 0.239, 0.021, 11824231).scale.set(1.4, 0.24, 0.42),
    i === "suhani" || i === "girl")
  )
    for (const o of [-0.24, 0.24])
      fe(e, o, -0.08, -0.07, 0.12, en).scale.set(0.55, 2.1, 0.85);
  if (i === "beggar") {
    for (const l of [-0.097, 0.097]) {
      const c = An(
        e,
        Tn("glasses", () => new Ti(0.076, 0.012, 5, 12)),
        2567211,
        l,
        0.039,
        0.276,
      );
      c.scale.y = 0.82;
    }
    (un(e, 0, 0.047, 0.281, 0.05, 0.016, 0.018, 2567211),
      fe(e, 0, -0.18, 0.09, 0.19, en).scale.set(0.9, 0.46, 0.73),
      un(e, 0, -0.092, 0.252, 0.14, 0.026, 0.022, en));
  }
  const a = gr(e);
  return (Io.set(i, a.geometry), a.geometry);
}
function fp(i = "man", t = 5541765, e = "kurta") {
  const n = new Xe(),
    r = new Xe();
  n.add(r);
  const s = ["mother", "suhani", "girl"].includes(i),
    a = i === "beggar",
    isPinkLehenga = e === "pink_lehenga",
    isLehenga = e === "lehenga" || isPinkLehenga,
    isSaree = e === "saree",
    isJeansKurti = e === "jeans_kurti",
    isSherwani = e === "sherwani",
    isCasual = e === "casual",
    o = s || isLehenga || isSaree,
    l = [];
  a && (r.position.y = -0.48);
  const c = isPinkLehenga
      ? 16756941
      : isSaree
        ? 12720219
        : i === "suhani"
          ? 3772041
          : t,
    uColor = isJeansKurti ? 16770273 : isSherwani ? 2039583 : c,
    u = dr(r, 0, 1.04, 0, 0.255, 0.31, 0.78, uColor);
  if (i === "suhani") {
    if (!ds) {
      const v = new wo().load("/art/material-fabric.webp");
      ((v.colorSpace = Ee),
        (ds = new Tr({ map: v, roughness: 0.9, color: 16777215 })));
    }
    u.material = ds;
  }
  const h = new Xe();
  r.add(h);

  if (isPinkLehenga) {
    // 1. Pretty Baby-Pink Lehenga Set: flared skirt with golden gota-patti border + matching dupatta
    dr(h, 0, 0.52, 0, 0.38, 0.6, 0.74, 16756941);
    un(h, 0, 0.22, 0, 0.8, 0.06, 0.8, 16241776);
    const v = un(h, 0.16, 1.05, 0.26, 0.18, 0.95, 0.05, 16766439);
    v.rotation.z = -0.15;
    for (const m of [-0.19, 0, 0.19]) fe(h, m, 1.34, 0.18, 0.021, 16241776);
    un(h, 0, 0.31, 0.04, 0.61, 0.045, 0.52, 16241776);
  } else if (isSaree) {
    // 2. Elegant Festive Saree: pleated pallu, silk body & gold zari border
    dr(h, 0, 0.52, 0, 0.29, 0.4, 0.76, 12720219);
    un(h, 0, 0.18, 0, 0.62, 0.05, 0.62, 16241776);
    const v = un(h, -0.06, 1.04, 0.26, 0.22, 0.9, 0.045, 16241776);
    v.rotation.z = 0.18;
    for (const m of [-0.15, 0, 0.15]) fe(h, m, 1.32, 0.19, 0.02, 16766720);
  } else if (isJeansKurti) {
    // 3. Trendy Baggy Jeans & Short Kurti Set
    dr(h, 0, 0.68, 0, 0.28, 0.31, 0.45, 16770273);
    for (const v of [0.96, 1.12]) fe(h, 0, v, 0.29, 0.016, 16747677);
  } else if (o) {
    dr(
      h,
      0,
      0.59,
      0,
      0.29,
      e === "lehenga" ? 0.51 : i === "girl" || i === "suhani" ? 0.33 : 0.42,
      0.68,
      c,
    );
    const v = un(
      h,
      0.15,
      1.04,
      0.26,
      0.16,
      0.88,
      0.045,
      i === "suhani" ? 13139601 : 14923620,
    );
    v.rotation.z = -0.12;
    for (const m of [-0.19, 0, 0.19]) fe(h, m, 1.34, 0.18, 0.021, 15054428);
    un(h, 0, 0.31, 0.04, 0.61, 0.045, 0.52, 15187048);
  } else {
    un(h, 0, 1.07, 0.271, 0.025, 0.55, 0.015, isSherwani ? 16241776 : 15189132);
    for (const v of [0.96, 1.12, 1.28])
      fe(h, 0, v, 0.29, 0.018, isSherwani ? 16241776 : 12821886);
    if (a)
      for (const [v, m] of [
        [-0.17, 1.15],
        [0.19, 1.28],
        [-0.12, 0.85],
      ])
        fe(h, v, m, 0.257, 0.07, 9273709).scale.set(1, 0.5, 0.18);
  }
  l.push(gr(h).geometry);
  const d = new ve(Io.get(i) || hp(i), Fo);
  ((d.position.y = 1.72),
    d.scale.setScalar(s ? 0.84 : 0.9),
    (d.castShadow = !0),
    r.add(d));
  const f = [],
    g = [];
  for (const v of [-0.145, 0.145]) {
    const m = new Xe();
    (m.position.set(v, 0.66, 0),
      r.add(m),
      un(
        m,
        0,
        -0.28,
        0,
        isJeansKurti ? 0.22 : 0.19,
        0.57,
        isJeansKurti ? 0.24 : 0.22,
        isJeansKurti || isCasual
          ? 4020864
          : a
            ? 7828837
            : s
              ? 12892053
              : 13811872,
      ),
      un(
        m,
        0,
        -0.59,
        0.065,
        0.22,
        0.12,
        0.36,
        isJeansKurti ? 16777215 : 5325111,
      ),
      l.push(gr(m).geometry),
      f.push(m),
      a && ((m.rotation.x = -1.1), (m.rotation.z = v < 0 ? -0.5 : 0.5)));
  }
  for (const v of [-0.34, 0.34]) {
    const m = new Xe();
    (m.position.set(v, 1.34, 0),
      r.add(m),
      dr(m, 0, -0.19, 0, 0.09, 0.074, 0.4, c),
      dr(m, 0, -0.43, 0, 0.07, 0.055, 0.21, yr),
      fe(m, 0, -0.57, 0, 0.078, yr),
      l.push(gr(m).geometry),
      g.push(m),
      (m.rotation.z = v < 0 ? -0.07 : 0.07),
      a && (m.rotation.x = -0.72));
  }
  return (
    (n.userData.role = i),
    {
      group: n,
      pose: r,
      legs: f,
      arms: g,
      head: d,
      torso: u,
      dispose: () => l.forEach((v) => v.dispose()),
    }
  );
}
function ps(i, t, e, n, r = 0.35) {
  return (
    (!n ||
      (i >= n.minX + r &&
        i <= n.maxX - r &&
        t >= n.minZ + r &&
        t <= n.maxZ - r)) &&
    !e.some(
      (s) => Math.abs(i - s.x) < s.w / 2 + r && Math.abs(t - s.z) < s.d / 2 + r,
    )
  );
}
function dp(i, t, e, n, r, s) {
  for (const [a, o] of i.entries()) {
    if (!o.walk) continue;
    const l = o.group.position;
    if (!ps(l.x, l.z, t, e)) {
      let b = !1;
      for (let T = 1; T <= 20 && !b; T++)
        for (let w = 0; w < 16; w++) {
          const C = (w * Math.PI) / 8,
            M = l.x + Math.cos(C) * T * 0.4,
            S = l.z + Math.sin(C) * T * 0.4;
          if (
            ps(M, S, t, e) &&
            i.every(
              (D) =>
                D === o ||
                Math.hypot(M - D.group.position.x, S - D.group.position.z) >=
                  0.95,
            ) &&
            (!n || Math.hypot(M - n.x, S - n.z) >= 0.85)
          ) {
            ((l.x = M), (l.z = S), (b = !0));
            break;
          }
        }
      if (!b) {
        o.legs.forEach((T) => (T.rotation.x = 0));
        continue;
      }
    }
    const c = l.x,
      u = l.z;
    let h = o.base.x + Math.sin(s * 0.27 + a * 1.7) * 1.25,
      d = o.base.z + Math.cos(s * 0.19 + a) * 0.6;
    for (const b of i) {
      if (b === o) continue;
      const T = b.group.position,
        w = Math.hypot(l.x - T.x, l.z - T.z);
      if (w < 1.05) {
        const C = w < 0.01 ? a * 2.4 : Math.atan2(l.z - T.z, l.x - T.x);
        ((h = l.x + Math.cos(C) * 1.5), (d = l.z + Math.sin(C) * 1.5));
      }
    }
    n &&
      Math.hypot(l.x - n.x, l.z - n.z) < 1.1 &&
      ((h = l.x + (l.x - n.x) * 2), (d = l.z + (l.z - n.z) * 2));
    const f = h - l.x,
      g = d - l.z,
      v = Math.max(0.01, Math.hypot(f, g)),
      m = Math.min(v, Math.max(0, Math.min(r, 0.05)) * 0.8),
      p = l.x + (f / v) * m,
      A = l.z + (g / v) * m,
      E = (b, T) =>
        ps(b, T, t, e) &&
        i.every(
          (w) =>
            w === o ||
            Math.hypot(b - w.group.position.x, T - w.group.position.z) >=
              0.95 ||
            Math.hypot(b - w.group.position.x, T - w.group.position.z) >
              Math.hypot(l.x - w.group.position.x, l.z - w.group.position.z) +
                1e-4,
        ) &&
        (!n ||
          Math.hypot(b - n.x, T - n.z) > 0.85 ||
          Math.hypot(b - n.x, T - n.z) >
            Math.hypot(l.x - n.x, l.z - n.z) + 1e-4);
    E(p, A)
      ? ((l.x = p), (l.z = A))
      : E(p, l.z)
        ? (l.x = p)
        : E(l.x, A) && (l.z = A);
    const _ = Math.hypot(l.x - c, l.z - u) > 1e-5;
    (_ && (o.group.rotation.y = Math.atan2(l.x - c, l.z - u)),
      o.legs.forEach(
        (b, T) => (b.rotation.x = _ ? Math.sin(s * 4 + T * Math.PI) * 0.28 : 0),
      ));
  }
}
const ms = new Map(),
  gs = new Map(),
  Oe = new Map(),
  pr = new Map();
function pp(i) {
  if (pr.has(i)) return pr.get(i);
  if (
    ["plaster", "teal-plaster", "wood", "road", "tile", "fabric"].includes(i)
  ) {
    const a = new wo().load(`/art/material-${i}.webp`);
    return (
      (a.colorSpace = Ee),
      (a.wrapS = a.wrapT = 1e3),
      a.repeat.set(1, 1),
      (a.anisotropy = 2),
      pr.set(i, a),
      a
    );
  }
  const t = document.createElement("canvas");
  t.width = t.height = 128;
  const e = t.getContext("2d");
  ((e.fillStyle =
    i === "wood"
      ? "#976545"
      : i === "tile"
        ? "#efe2c8"
        : i === "road"
          ? "#777c78"
          : "#dfc99f"),
    e.fillRect(0, 0, 128, 128));
  let n = 37;
  const r = () => ((n = (n * 16807) % 2147483647), (n - 1) / 2147483646);
  for (let a = 0; a < 650; a++)
    ((e.fillStyle = `rgba(70,50,30,${r() * 0.09})`),
      e.fillRect(r() * 128, r() * 128, i === "wood" ? 40 : 2, 1));
  if (
    ((e.strokeStyle = i === "tile" ? "#cbbfA6" : "#754a3433"),
    (e.lineWidth = 1),
    i === "tile")
  )
    for (let a = 0; a <= 128; a += 32)
      (e.beginPath(),
        e.moveTo(a, 0),
        e.lineTo(a, 128),
        e.moveTo(0, a),
        e.lineTo(128, a),
        e.stroke());
  if (i === "wood")
    for (let a = 0; a < 128; a += 16)
      (e.beginPath(), e.moveTo(0, a), e.lineTo(128, a), e.stroke());
  const s = new lo(t);
  return (
    (s.colorSpace = Ee),
    (s.wrapS = s.wrapT = 1e3),
    s.repeat.set(i === "tile" ? 3 : 2, 3),
    pr.set(i, s),
    s
  );
}
function Ya(i, t) {
  const e = `${i}/${t}`;
  return (
    gs.has(e) ||
      gs.set(e, new Tr({ color: i, roughness: 0.88, map: t ? pp(t) : null })),
    gs.get(e)
  );
}
function Dp(i) {
  const t = [],
    e = [],
    n = [],
    r = {};
  function s(_, b, T, w, C, M, S = i) {
    const D = new ve(_, Ya(b, M));
    return (
      D.position.set(T, w, C),
      (D.castShadow = !0),
      (D.receiveShadow = !0),
      S.add(D),
      D
    );
  }
  function a(_, b, T, w, C, M, S, D = !1, I = null, B = i) {
    const H = `b${w},${C},${M}`;
    if (!Oe.has(H)) {
      const W = new Pn(w, C, M),
        V = W.attributes.position,
        K = W.attributes.normal,
        k = W.attributes.uv;
      for (let tt = 0; tt < V.count; tt++)
        Math.abs(K.getY(tt)) > 0.5
          ? k.setXY(tt, V.getX(tt) / 2, V.getZ(tt) / 2)
          : Math.abs(K.getX(tt)) > 0.5
            ? k.setXY(tt, V.getZ(tt) / 2, V.getY(tt) / 2)
            : k.setXY(tt, V.getX(tt) / 2, V.getY(tt) / 2);
      Oe.set(H, W);
    }
    return (
      D && t.push({ x: _, z: T, w: w + 0.55, d: M + 0.55 }),
      s(
        Oe.get(H),
        S,
        _,
        b,
        T,
        I || (B === i && w >= 3 && C >= 2 ? "plaster" : null),
        B,
      )
    );
  }
  function o(_, b, T, w, C, M = i) {
    const S = `s${w}`;
    return (
      Oe.has(S) || Oe.set(S, new Ui(w, 12, 8)),
      s(Oe.get(S), C, _, b, T, null, M)
    );
  }
  function l(_, b, T, w, C, M, S, D = i) {
    const I = `c${w},${C},${M}`;
    return (
      Oe.has(I) || Oe.set(I, new Di(w, C, M, 16)),
      s(Oe.get(I), S, _, b, T, null, D)
    );
  }
  function c(_, b, T, w, C = 3, M = "#25443b", S = "#fff0d4") {
    const D = document.createElement("canvas");
    ((D.width = 512), (D.height = 128));
    const I = D.getContext("2d");
    const isPink =
      (typeof M === "string" &&
        (M.toLowerCase().includes("ffb") || M.toLowerCase().includes("ffc"))) ||
      _.includes("iglu") ||
      _.includes("uglu");
    if (isPink) {
      // Soft aesthetic Baby Pink background
      I.fillStyle = "#ffb0c8";
      I.fillRect(0, 0, 512, 128);
      // Gold & white decorative double borders
      I.strokeStyle = "#ffe4e1";
      I.lineWidth = 7;
      I.strokeRect(6, 6, 500, 116);
      I.strokeStyle = "#ff4081";
      I.lineWidth = 2.5;
      I.strokeRect(12, 12, 488, 104);
      // Glowing text
      I.shadowColor = "rgba(255, 64, 129, 0.85)";
      I.shadowBlur = 12;
      I.fillStyle = "#ffffff";
      I.font = "bold 38px 'Segoe UI', Arial, sans-serif";
      I.textAlign = "center";
      I.textBaseline = "middle";
      I.fillText("🌸 " + _ + " 🌸", 256, 64, 470);
      I.shadowBlur = 0;
    } else {
      ((I.fillStyle = M),
        I.fillRect(0, 0, 512, 128),
        (I.strokeStyle = "#e6bd78"),
        (I.lineWidth = 6),
        I.strokeRect(9, 9, 494, 110),
        (I.fillStyle = S),
        (I.font = "600 38px sans-serif"),
        (I.textAlign = "center"),
        (I.textBaseline = "middle"),
        I.fillText(_, 256, 66, 475));
    }
    const B = new lo(D);
    B.colorSpace = Ee;
    const H = new ve(new Li(C, C / 4), new vr({ map: B, side: 0 })),
      W = new ve(H.geometry, H.material);
    return (
      (W.rotation.y = Math.PI),
      H.add(W),
      H.position.set(b, T, w),
      i.add(H),
      H
    );
  }
  function u(_, b, T, w, C) {
    (a(_, 0.065, b, T, 0.035, w, C),
      a(_, 0.086, b, T - 0.2, 0.012, w - 0.2, 15187590),
      a(_, 0.1, b, T - 0.4, 0.012, w - 0.4, C));
    for (let M = -T / 2 + 0.3; M < T / 2; M += 0.23)
      (a(_ + M, 0.09, b + w / 2 + 0.09, 0.06, 0.015, 0.16, 15258797),
        a(_ + M, 0.09, b - w / 2 - 0.09, 0.06, 0.015, 0.16, 15258797));
  }
  function h(_, b, T = 1) {
    l(_, 0.25 * T, b, 0.31 * T, 0.22 * T, 0.5 * T, 12021070);
    for (let w = 0; w < 5; w++)
      o(
        _ + Math.sin(w * 2) * 0.22 * T,
        (0.8 + w * 0.09) * T,
        b + Math.cos(w * 2) * 0.2 * T,
        0.3 * T,
        w % 2 ? 4488541 : 6591605,
      ).scale.set(0.65, 1.4, 0.7);
  }
  function d(_, b, T, w = 16764796) {
    const C = o(_, b, T, 0.095, w);
    return (
      ms.has(w) || ms.set(w, new vr({ color: w })),
      (C.material = ms.get(w)),
      C
    );
  }
  function f(_, b, T, w, C, M = 12) {
    const S = [];
    for (let I = 0; I <= M; I++) {
      const B = I / M,
        H = Gs.lerp(_, T, B),
        W = Gs.lerp(b, w, B),
        V = C - Math.sin(B * Math.PI) * 0.45;
      if ((S.push(new L(H, V, W)), d(H, V, W), I < M)) {
        Oe.has("flag") || Oe.set("flag", new bs(0.19, 0.36, 3));
        const K = new ve(
          Oe.get("flag"),
          Ya([13860181, 15316817, 4165255, 12741237][I % 4]),
        );
        (K.position.set(H, V - 0.28, W), (K.rotation.z = Math.PI), i.add(K));
      }
    }
    const D = new oo(new de().setFromPoints(S), new ao({ color: 5922896 }));
    i.add(D);
  }
  function g(_, b, T, w = "man", C = 1) {
    const M = fp(w, T);
    return (
      i.add(M.group),
      M.group.position.set(_, 0, b),
      M.group.scale.setScalar(C),
      Object.assign(M, { base: { x: _, z: b }, walk: !1 }),
      n.push(M),
      M
    );
  }
  function v(_, b, T = 14137480, w = "SHARMA NIWAS") {
    (a(_, 1.8, b, 7, 3.6, 5.5, T, !0),
      a(_, 3.7, b, 7.5, 0.25, 6, 15784625),
      a(_, 4.05, b - 1.4, 3, 0.5, 2.2, T),
      a(_, 1.1, b + 2.8, 1.25, 2.2, 0.14, 7361596));
    for (const C of [-2.2, 2.2]) {
      (a(_ + C, 2, b + 2.8, 1.3, 1.5, 0.12, 3501171),
        a(_ + C, 2, b + 2.9, 1.4, 0.08, 0.1, 16113594),
        a(_ + C, 1.35, b + 3, 1.7, 0.15, 0.45, 10843216));
      for (let M = 0; M < 4; M++)
        o(_ + C - 0.5 + M * 0.33, 1.55, b + 3, 0.16, 6325086);
    }
    (a(_, 2.9, b + 3.05, 2, 0.2, 0.3, 9988429),
      c(w, _, 3.25, b + 2.85, 2.1),
      f(_ - 3, b + 2.9, _ + 3, b + 2.9, 3.3, 10));
  }
  let m = 0,
    p = null;
  function A(_, b) {
    const T = Math.min(0.05, Math.max(0, b - m));
    ((m = b), dp(n, t, E.bounds, p, T, b));
    for (const w of n)
      w.walk ||
        ((w.group.rotation.z = Math.sin(b * 1.5 + w.base.x) * 0.008),
        w.head && (w.head.rotation.z = Math.sin(b * 1.1 + w.base.x) * 0.018));
    for (const [w, C] of Object.entries(r))
      C.visible =
        _.decorations.includes(w) || (w === "toran" && !!_.inventory.toran);
  }
  const E = {
    setPlayer(_) {
      p = _;
    },
    root: i,
    box: a,
    sphere: o,
    cylinder: l,
    sign: c,
    rug: u,
    plant: h,
    light: d,
    bunting: f,
    person: g,
    houseFront: v,
    colliders: t,
    targets: e,
    actors: n,
    decor: r,
    update: A,
  };
  return E;
}
export {
  zl as $,
  _p as A,
  Pn as B,
  Di as C,
  gp as D,
  Ye as E,
  mp as F,
  Xe as G,
  ro as H,
  Ep as I,
  Ue as J,
  bp as K,
  ao as L,
  vr as M,
  Cp as N,
  ce as O,
  Ap as P,
  Pi as Q,
  To as R,
  Sp as S,
  Ti as T,
  Rp as U,
  L as V,
  Pp as W,
  ps as X,
  wo as Y,
  xp as Z,
  bo as _,
  ve as a,
  io as a0,
  pp as a1,
  Eo as a2,
  wp as a3,
  Zt as b,
  fp as c,
  Tr as d,
  Gs as e,
  lo as f,
  Ee as g,
  Dl as h,
  yp as i,
  de as j,
  Re as k,
  hn as l,
  zt as m,
  Li as n,
  oo as o,
  Tp as p,
  Ol as q,
  Mp as r,
  $l as s,
  Ui as t,
  ho as u,
  Ao as v,
  yo as w,
  bs as x,
  Dp as y,
  vp as z,
};
