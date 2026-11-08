import {
  a as T,
  n as D,
  T as P,
  d as I,
  Y as v,
  g as C,
  G as E,
  O as S,
  y as B,
} from "./world-opFD36TP.js";
import { b as W } from "./market-premium-DD7UHeMR.js";
import { a as K } from "./devotional-art-Cgam9lAy.js";
import { s as X, b as J } from "./environment-Dqc8w8Lp.js";
import { S as Y } from "./festival-config-DMHGmm_6.js";
import { a as Z } from "./config-CTwGFHgE.js";
import { H } from "./haunted-maze-Cj4eYpRq.js";
import "./game-modes-qJzg1Wyo.js";
const F = {
    diya: { label: "Diye · Phool · Roshni", accent: 12024625, wall: 15783331 },
    rangoli: {
      label: "Gulal · Rang · Rangoli",
      accent: 3246726,
      wall: 12836048,
    },
    crackers: {
      label: "Rockets · Anaar · Chakri",
      accent: 10897742,
      wall: 14729901,
    },
    sweets: {
      label: "Laddoo · Kaju Katli · Sona Papdi",
      accent: 12944441,
      wall: 16048048,
    },
    chai: {
      label: "Garam Chai · Taaza Jalebi",
      accent: 10050361,
      wall: 15255192,
    },
    clothes: {
      label: "Kurte · Dupatte · Tyohaar",
      accent: 9923459,
      wall: 15059925,
    },
  },
  G = new Map();
function V(n) {
  if (!G.has(n)) {
    const a = new v().load(`/art/stall-${n}.webp`);
    ((a.colorSpace = C),
      G.set(
        n,
        new I({
          map: a,
          roughness: 0.9,
          emissiveMap: a,
          emissive: 16777215,
          emissiveIntensity: 0.12,
        }),
      ));
  }
  return G.get(n);
}
const _ = new P(0.17, 0.035, 5, 20),
  $ = new I({ color: 15309360, roughness: 0.8 });
function k(n, a, c) {
  const { box: x, cylinder: b, sphere: p, sign: l } = n,
    { x: r, z: o, color: u, theme: h } = a,
    y = F[h];
  (x(r, 0.13, o, 7, 0.24, 5.3, 12028512),
    x(r, 1.92, o - 1.48, 6.3, 3.4, 0.22, y.wall));
  for (const s of [-1.45, 1.45]) {
    const i = new T(new D(2.85, 2.85), V(h));
    (i.position.set(r + s, 2.02, o - 1.34), n.root.add(i));
  }
  for (const s of [-3.15, 3.15]) {
    (x(r + s, 1.95, o, 0.13, 3.9, 0.18, y.accent),
      x(r + s, 2, o - 1.3, 0.14, 3.9, 0.18, 14268278),
      b(r + s, 2.75, o + 0.3, 0.12, 0.17, 0.4, 13476951),
      n.light(r + s, 2.8, o + 0.35));
    for (let i = 0; i < 7; i++)
      p(r + s, 0.7 + i * 0.4, o + 0.11, 0.09, i % 2 ? 15115323 : 14659944);
  }
  for (const s of [1.48, 2.55])
    x(r, s, o - 1.12, 5.9, 0.08, 0.45, 10253118, !1, "wood");
  (x(r, 0.64, o, 5.8, 0.94, 1.45, y.accent, !0),
    x(r, 1.15, o, 6, 0.12, 1.65, 15521201),
    x(r, 0.65, o + 0.74, 5.55, 0.65, 0.04, y.wall),
    l(y.label, r, 0.65, o + 0.79, 4.9, "#493e32", "#ffe1a3"),
    x(r, 3.78, o, 6.65, 0.15, 3.7, y.accent));
  for (let s = 0; s < 11; s++)
    x(r - 3 + s * 0.6, 3.51, o + 1.76, 0.3, 0.44, 0.08, s % 2 ? 15980968 : u);
  (x(r, 4.02, o + 1.75, 6.7, 0.85, 0.16, y.accent),
    l(a.name, r, 4.03, o + 1.92, 6.25, "#493c36", "#ffdfa0"));
  for (const s of [-2.4, -1.2, 0, 1.2, 2.4]) n.light(r + s, 3.62, o + 1.7);
  const w = (s, i, d, ...g) => x(s, i - 0.38, d, ...g),
    e = (s, i, d, ...g) => b(s, i - 0.38, d, ...g),
    t = (s, i, d, ...g) => p(s, i - 0.38, d, ...g);
  for (let s = 0; s < 6; s++) {
    const i = r - 2.25 + s * 0.9;
    if (h === "diya") {
      (e(i, 1.69, o + 0.24, 0.23, 0.15, 0.18, 12087353),
        n.light(i, 1.84, o + 0.24));
      for (let d = 0; d < 3; d++)
        t(i + (d - 1) * 0.15, 1.72, o - 0.4, 0.13, d % 2 ? 15906101 : 14058811);
    } else if (h === "rangoli")
      (e(i, 1.67, o + 0.12, 0.29, 0.23, 0.15, 13083999),
        e(
          i,
          1.77,
          o + 0.12,
          0.24,
          0.24,
          0.07,
          [13985419, 15974482, 4892569, 16115409, 9726640, 13530443][s],
        ));
    else if (h === "crackers")
      c === 3
        ? (e(i, 1.96, o, 0.1, 0.1, 0.65, s % 2 ? 6725540 : 11623013),
          e(i, 2.36, o, 0, 0.15, 0.2, 14923604),
          w(i, 1.53, o, 0.025, 0.8, 0.025, 12095317))
        : c === 2
          ? (e(
              i,
              1.88,
              o + 0.1,
              0.025,
              0.24,
              0.55,
              [12082020, 4430998, 14001215][s % 3],
            ),
            e(i, 2.18, o + 0.1, 0.02, 0.02, 0.12, 5063737))
          : (w(i, 1.91, o, 0.38, 0.62, 0.25, s % 2 ? 11097701 : 5412493),
            w(i, 1.92, o + 0.14, 0.25, 0.1, 0.015, 15318887));
    else if (h === "sweets")
      if ((w(i, 1.63, o + 0.1, 0.72, 0.05, 0.75, 13608019), s < 3))
        for (let d = 0; d < 4; d++)
          t(
            i + ((d % 2) - 0.5) * 0.26,
            1.79,
            o + Math.floor(d / 2) * 0.28,
            0.14,
            14918199,
          );
      else if (s === 3)
        for (let d = 0; d < 3; d++) {
          const g = w(i, 1.73, o - 0.15 + d * 0.23, 0.24, 0.08, 0.2, 15917762);
          g.rotation.y = Math.PI / 4;
        }
      else
        (w(i, 1.78, o, 0.6, 0.25, 0.55, 14124707),
          w(i, 1.93, o, 0.63, 0.06, 0.58, 14859367),
          w(i, 1.97, o, 0.1, 0.025, 0.58, 5934270));
    else if (h === "chai")
      if (s < 3)
        (e(i, 1.73, o, 0.19, 0.12, 0.29, 11299646),
          e(i, 1.88, o, 0.16, 0.16, 0.015, 7947820));
      else {
        e(i, 1.64, o, 0.33, 0.33, 0.04, 14005365);
        for (let d = 0; d < 3; d++) {
          const g = new T(_, $);
          ((g.rotation.x = -Math.PI / 2),
            g.position.set(i + (d - 1) * 0.12, 1.35 + d * 0.025, o),
            n.root.add(g));
        }
      }
    else if (h === "clothes") {
      const d = [4955284, 13206684, 14989149];
      for (let g = 0; g < 3; g++)
        w(i, 1.68 + g * 0.1, o, 0.65, 0.09, 0.65, d[(s + g) % 3], !1, "fabric");
      s % 2 === 0 &&
        (w(i, 2.12, o - 0.76, 0.38, 0.7, 0.07, d[s % 3]),
        w(i, 2.37, o - 0.76, 0.72, 0.18, 0.07, d[s % 3]));
    }
  }
  (n.person(r, o - 0.85, u, [1, 4, 7].includes(c) ? "mother" : "man"),
    n.targets.push({
      id: `shop${c}`,
      type: "shop",
      shop: c,
      name: `${a.person} ki shop dekho`,
      x: r,
      z: o + 2.1,
    }));
}
const N = 8;
function U(n) {
  let a,
    c = -100;
  return (x, b) => {
    (a !== void 0 && x > a && (c = b), (a = x));
    const p = b - c,
      l = p >= 0 && p < N ? Math.min(1, p / 0.45, (N - p) / 0.6) : 0;
    ((n.pose.position.y = -0.48 * (1 - l)),
      (n.group.position.y = Math.abs(Math.sin(p * 7)) * 0.08 * l),
      (n.group.rotation.y = 0.15 + Math.sin(p * 3) * 0.4 * l),
      (n.group.rotation.z = Math.sin(p * 5) * 0.08 * l),
      n.arms.forEach(
        (r, o) =>
          (r.rotation.x =
            -0.72 * (1 - l) + (-1.2 + Math.sin(p * 6 + o * Math.PI) * 0.7) * l),
      ),
      n.legs.forEach((r, o) => {
        ((r.rotation.x =
          -1.1 * (1 - l) + Math.sin(p * 6 + o * Math.PI) * 0.22 * l),
          (r.rotation.z = (o ? 0.5 : -0.5) * (1 - l) + (o ? 0.08 : -0.08) * l));
      }));
  };
}
function q(n) {
  const { box: a, cylinder: c, sphere: x, sign: b, plant: p } = n,
    l = 15849646,
    r = 13077603,
    o = 15055182;
  (a(0, 0.08, -55, 9, 0.16, 7, r), a(0, 2, -58, 8.5, 4, 0.35, l, !0));
  for (const t of [-4.1, 4.1])
    (a(t, 1.7, -55.5, 0.3, 3.4, 5, l, !0),
      c(t, 2, -52.8, 0.18, 0.25, 4, r),
      p(t * 1.5, -52, 1.1));
  a(0, 4.1, -55.3, 9, 0.3, 6.6, r);
  for (let t = 0; t < 4; t++)
    a(0, 4.5 + t * 0.55, -56, 4.5 - t * 0.9, 0.6, 3.8 - t * 0.7, l);
  (x(0, 6.65, -56, 0.28, o), c(0, 7.1, -56, 0.035, 0.035, 0.8, o));
  const u = a(0.42, 7.3, -56, 0.8, 0.45, 0.025, 15304500);
  ((u.rotation.z = -0.1),
    b("SHREE GANESH MANDIR", 0, 3.55, -52.6, 7, "#8e4935"),
    a(0, 0.7, -56.8, 3.2, 1.2, 1.5, 10314050, !0),
    K(n, { x: 0, y: 2.1, z: -57.68, width: 1.05, gap: 0.3 }));
  for (const t of [-1.2, 0, 1.2]) n.light(t, 1.45, -56.3);
  (n.bunting(-4, -52.5, 4, -52.5, 3.2, 18),
    c(0, 3.1, -53, 0.04, 0.04, 0.65, o),
    c(0, 2.7, -53, 0.1, 0.24, 0.3, o));
  for (const [t, s, i] of [
    [-3, 12163667, "DAANPATRA"],
    [3, 4425854, "WISH BOX"],
  ])
    (a(t, 0.65, -50.6, 1, 1.3, 0.8, s, !0),
      a(t, 1.33, -50.6, 1.08, 0.1, 0.9, o),
      a(t, 1.39, -50.6, 0.55, 0.025, 0.06, 3157288),
      b(i, t, 0.94, -50.18, 1.05, "#29493e"));
  (b("Mann ki baat", 3, 1.65, -50.5, 1.45, "#31645b"),
    c(6.5, 1.1, -44, 0.055, 0.055, 2.2, r),
    b("Mandir / Wishes ↑", 6.5, 2.3, -44, 2.1, "#674b37"));
  const h = a(3, 2.1, -50.6, 0.38, 0.025, 0.25, 16770478);
  ((h.userData.dynamic = !0), (h.visible = !1));
  let y,
    w = -10;
  const e = (t, s) => {
    (y !== void 0 && t.wishes.length > y && (w = s), (y = t.wishes.length));
    const i = s - w;
    ((h.visible = i >= 0 && i < 1.1),
      (h.position.y = 2.1 - Math.min(1.1, i) * 0.7),
      (h.rotation.y = i * 2));
  };
  return (
    n.targets.push(
      {
        id: "market-mandir",
        type: "temple",
        name: "Mandir mein darshan karo",
        x: 0,
        z: -53.7,
      },
      {
        id: "market-daanpatra",
        type: "donation",
        name: "Daanpatra mein daan karo",
        x: -3,
        z: -49.5,
      },
      {
        id: "market-wish-box",
        type: "wish",
        name: "Apni wish box mein daalo",
        x: 3,
        z: -49.5,
      },
    ),
    e
  );
}
function Q(n) {
  const { box: a, cylinder: c, sphere: x } = n,
    b = new E();
  (b.position.set(-13, 8, -36), n.root.add(b));
  for (const f of [-4, 4]) {
    const m = a(-13 + f / 2, 4, -36, 0.35, 9, 0.5, 4948866);
    m.rotation.z = f > 0 ? 0.46 : -0.46;
  }
  const p = new T(new P(6, 0.12, 6, 48), new I({ color: 15908703 }));
  b.add(p);
  const l = [];
  for (let f = 0; f < 8; f++) {
    const m = (f * Math.PI) / 4,
      M = a(0, 0, 0, 0.11, 12, 0.11, 13994581, !1, null, b);
    M.rotation.z = m;
    const A = new E();
    (b.add(A),
      l.push(A),
      a(0, -0.6, 0, 1.3, 0.2, 1.4, 4557443, !1, null, A),
      a(0, -0.05, -0.6, 1.3, 1, 0.1, 4557443, !1, null, A),
      a(0, 0.8, 0, 1.5, 0.15, 1.6, 14986580, !1, null, A));
    for (const z of [-0.6, 0.6]) c(z, 0.1, 0.6, 0.04, 0.04, 1.4, 15782819, A);
  }
  n.sign("CHAND WALA JHOOLA", -13, 2.5, -30, 7);
  const r = new S();
  (r.position.set(0, 0.3, 0.1), l[0].add(r));
  const o = new S();
  (o.position.set(0, 0.2, 15), l[0].add(o));
  const u = new E();
  (u.position.set(13, 0.25, -36),
    n.root.add(u),
    c(0, 0.1, 0, 5, 5, 0.3, 12025431, u),
    c(0, 3, 0, 0.25, 0.25, 6, 13082975, u),
    c(0, 6.2, 0, 0, 5.8, 2, 13266804, u));
  const h = [];
  for (let f = 0; f < 6; f++) {
    const m = (f * Math.PI) / 3,
      M = Math.cos(m) * 3.6,
      A = Math.sin(m) * 3.6;
    c(M, 3, A, 0.05, 0.05, 5.8, 14993810, u);
    const z = new E();
    (z.position.set(M, 1.3, A),
      (z.rotation.y = -m),
      u.add(z),
      h.push(z),
      x(0, 0, 0, 0.65, f % 2 ? 15325362 : 10712923, z).scale.set(
        0.55,
        0.7,
        1.2,
      ),
      x(0, 0.55, 0.5, 0.3, 15325362, z),
      a(0, 0.3, 0, 0.55, 0.1, 0.7, 4492164, !1, null, z));
    for (const R of [-0.23, 0.23])
      for (const j of [-0.4, 0.4])
        a(R, -0.5, j, 0.1, 0.7, 0.1, 11703405, !1, null, z);
  }
  const y = new S();
  (y.position.set(0, 1, 0), h[0].add(y));
  const w = new S();
  (w.position.set(0, 1, 10),
    h[0].add(w),
    n.sign("GHODE WALA JHOOLA", 13, 2.5, -29, 7),
    n.colliders.push(
      { x: -13, z: -36, w: 14, d: 5 },
      { x: 13, z: -36, w: 11, d: 11 },
    ),
    n.targets.push(
      {
        id: "wheel",
        type: "ride",
        name: "Chaand wale jhoolay par baitho",
        x: -5.7,
        z: -32,
      },
      {
        id: "carousel",
        type: "ride",
        name: "Ghode wale jhoolay par baitho",
        x: 6.4,
        z: -32,
      },
    ),
    (n.rides = {
      wheel: { seat: r, look: o },
      carousel: { seat: y, look: w },
    }));
  const e = new E();
  (e.position.set(-13, 5, -50), n.root.add(e));
  for (const f of [-18, -8])
    (a(f, 2.7, -50, 0.22, 5.4, 0.3, 4950916),
      a(f, 5.4, -50, 0.5, 0.15, 0.5, 14923880));
  a(-13, 5.6, -50, 10, 0.2, 0.3, 13674590);
  const t = new E();
  ((t.position.y = -3),
    (t.rotation.y = Math.PI / 2),
    e.add(t),
    a(0, 0, 0, 6, 0.5, 2.2, 12151894, !1, null, t));
  for (const f of [-3, 3]) {
    const m = a(f, 0.4, 0, 0.3, 1.1, 2.2, 14923637, !1, null, t);
    m.rotation.z = f > 0 ? -0.5 : 0.5;
  }
  for (const f of [-2, -1, 0, 1, 2])
    (a(f, 0.5, 0, 0.7, 0.15, 1.8, 4557443, !1, null, t),
      c(f, 1.9, -0.95, 0.035, 0.035, 3.2, 13345897, t));
  const s = new S(),
    i = new S();
  (s.position.set(1.5, 1.35, 0.2), i.position.set(-10, 1.65, 0.2), t.add(s, i));
  const d = new E();
  (d.position.set(13, 0.15, -50),
    n.root.add(d),
    c(0, 0, 0, 5, 5, 0.2, 6921107, d));
  const g = [];
  for (let f = 0; f < 4; f++) {
    const m = (f * Math.PI) / 2,
      M = new E();
    (M.position.set(Math.cos(m) * 3, 0, Math.sin(m) * 3),
      d.add(M),
      g.push(M),
      c(
        0,
        0.45,
        0,
        1.1,
        0.8,
        0.8,
        [13728902, 13938265, 7380403, 9152107][f],
        M,
      ),
      c(0, 0.9, 0, 0.95, 0.95, 0.05, 4026214, M));
    const A = new T(new P(0.4, 0.07, 6, 18), new I({ color: 15978913 }));
    (A.position.set(1, 0.65, 0), (A.rotation.y = Math.PI / 2), M.add(A));
  }
  const L = new S(),
    O = new S();
  return (
    L.position.set(0, 1.5, 0),
    O.position.set(0, 1.5, 8),
    g[0].add(L, O),
    (n.rides.boat = { seat: s, look: i }),
    (n.rides.cups = { seat: L, look: O }),
    n.colliders.push(
      { x: -13, z: -50, w: 10.5, d: 6 },
      { x: 13, z: -50, w: 11, d: 11 },
    ),
    n.targets.push(
      {
        id: "boat",
        type: "ride",
        name: "Naav wale jhoolay par baitho",
        x: -6.2,
        z: -48,
      },
      {
        id: "cups",
        type: "ride",
        name: "Ghoomte pyaalon mein baitho",
        x: 6.4,
        z: -48,
      },
    ),
    n.sign("NAAV WALA JHOOLA", -21, 2.8, -45, 7),
    n.sign("GHUMTE PYALE", 21, 2.8, -44, 7),
    (f) => {
      ((e.rotation.x = Math.sin(f * 0.8) * 0.55),
        (d.rotation.y = f * 0.35),
        g.forEach((m, M) => (m.rotation.y = f * 0.7 + M)),
        (b.rotation.z = f * 0.17),
        l.forEach((m, M) => {
          const A = (M * Math.PI) / 4;
          (m.position.set(Math.cos(A) * 6, Math.sin(A) * 6, 0),
            (m.rotation.z = -b.rotation.z));
        }),
        (u.rotation.y = f * 0.24),
        h.forEach(
          (m, M) => (m.position.y = 1.4 + Math.sin(f * 1.5 + M) * 0.3),
        ));
    }
  );
}
function o0(n) {
  const { x: a, z: c } = H.facade,
    x = (l, r, o, ...u) => n.box(a + l, r, c + o, ...u),
    b = (l, r, o, ...u) => n.sphere(a + l, r, c + o, ...u),
    p = (l, r, o, u, ...h) => n.sign(l, a + r, o, c + u, ...h);
  (x(0, 2.6, 0, 7.4, 5.2, 4.4, 2695735, !0, "wood"),
    x(0, 5.3, 0, 8, 0.3, 5, 1578790),
    x(0, 2, 2.24, 2.1, 3.8, 0.08, 527126));
  for (const l of [-2.7, 2.7]) {
    x(l, 3.2, 2.27, 1.1, 1.6, 0.1, 527122);
    for (const r of [-0.2, 0.2]) b(l + r, 3.3, 2.39, 0.11, 10223533);
    x(l, 3.2, 2.43, 1.15, 0.1, 0.08, 5325144);
  }
  (p("BHOOT BANGLA", 0, 5.05, 2.5, 7, "#21142f", "#bfffc9"),
    p("MAZE • 3 TAAVEEZ • EK EXIT", 0, 1, 2.44, 3.6, "#1a1524", "#e9d2ab"),
    p("FREE ENTRY", 0, 3.9, 2.44, 2.4, "#502339", "#fff0da"));
  for (const l of [-3.35, 3.35])
    (x(l, 2, 2.6, 0.16, 4, 0.16, 6177881),
      n.light(a + l, 3.8, c + 2.7, 10317536));
  (n.sign("BHOOT BANGLA ←", -5.5, 2.2, -40.5, 3.3, "#21142f", "#bfffc9"),
    n.targets.push({
      id: "bhoot-bangla",
      type: "haunted",
      name: "Bhoot Bangla mein jao · FREE",
      ...H.entrance,
    }));
}
function l0(n) {
  const a = B(n),
    { box: c, sphere: x, cylinder: b, sign: p, plant: l } = a;
  ((a.bounds = { minX: -26, maxX: 26, minZ: -59, maxZ: 27 }),
    (a.spawn = { x: 0, z: 23 }),
    (a.camera = { radius: 25, pitch: 0.75, yaw: 0 }),
    c(0, -0.25, -16, 64, 0.4, 110, 13217670),
    c(0, 0.01, -16, 55, 0.08, 90, 15258541, !1, "tile"),
    c(0, 0.07, -9, 9, 0.04, 76, 12162932));
  for (const e of [-5, 5]) c(e, 0.09, -9, 0.15, 0.03, 76, 16113584);
  X(a, { width: 36, length: 65 });
  for (const e of [-19, 19])
    (c(e, 2, -5, 0.4, 4, 58, 14859149, !0),
      c(e, 4, -5, 0.7, 0.18, 58, 10318167));
  for (const e of [-24, 24]) for (let t = -42; t < 28; t += 7) l(e, t, 1.5);
  Z.stalls.forEach((e, t) => k(a, e, t));
  for (const e of [-25, -14, -3, 8, 20]) {
    a.bunting(-21, e, 21, e, 5.8, 24);
    for (const t of [-5, 5]) {
      const s = e === 8 && t === -5 ? -10 : t;
      (b(s, 2.5, e, 0.07, 0.1, 5, 9664857),
        a.colliders.push({ x: s, z: e, w: 0.75, d: 0.75 }),
        a.light(s, 5, e));
    }
  }
  for (let e = 0; e < 16; e++) {
    const t = a.person(
      (e % 2 ? 1 : -1) * (2 + (e % 4)),
      17 - Math.floor(e / 2) * 6,
      [12879225, 6921878, 13738836][e % 3],
      e % 3 ? "man" : "mother",
    );
    t.walk = !0;
  }
  for (const e of Y) p(e.label, e.x, 4.6, e.z, 7, "#28615b");
  p("SHARMA COLONY DIWALI MELA", 0, 5.7, 25, 10, "#335b52");
  for (const e of [-6, 6]) b(e, 2.7, 25, 0.17, 0.22, 5.4, 11896150);
  (c(-6, 0.22, 6.8, 6, 0.4, 2.8, 10055497, !0, "wood"),
    c(-6, 2.65, 7, 5.9, 3.5, 0.3, 3495760, !0),
    c(-6, 2.65, 7.19, 5.4, 3.04, 0.05, 1585961),
    p("MOVIE NIGHT", -6, 5.1, 7.25, 5.8, "#214b45", "#f5d398"));
  for (const e of [-8.9, -3.1]) {
    c(e, 2.65, 7.1, 0.25, 4.8, 0.3, 10307155);
    for (let t = 0; t < 8; t++)
      (x(e, 0.75 + t * 0.45, 7.35, 0.1, t % 2 ? 15777361 : 14519861),
        a.light(e, 1 + t * 0.43, 7.42));
  }
  c(-6, 4.8, 7.1, 6.1, 0.22, 0.4, 14200412);
  for (const e of [-8.4, -7.2, -6, -4.8, -3.6]) a.light(e, 4.55, 7.5);
  for (const e of [-7.7, -4.3]) {
    (c(e, 0.55, 12.2, 2.4, 0.18, 0.8, 9661516, !0, "wood"),
      c(e, 0.95, 12.55, 2.4, 0.7, 0.1, 11108696));
    for (const t of [-0.8, 0.8]) c(e + t, 0.25, 12.2, 0.12, 0.5, 0.65, 5989973);
  }
  (a.bunting(-8.9, 7.4, -3.1, 7.4, 5.9, 14),
    a.targets.push({
      id: "mela-cinema",
      type: "cinema",
      name: "Baith ke apna YouTube video dekho",
      x: -6,
      z: 16,
    }));
  const r = a.person(-4.9, -43.2, 13286560, "beggar", 0.95);
  r.group.rotation.y = 0.15;
  const o = U(r);
  (c(-4.9, 0.045, -43, 1.7, 0.06, 1.5, 9137237, !1, "fabric"),
    b(-4.35, 0.16, -42.6, 0.23, 0.16, 0.13, 12171170),
    a.targets.push({
      id: "mandir-neighbor",
      type: "charity",
      name: "Bhaiya ki baat suno · madad karo",
      x: -4.9,
      z: -42,
    }));
  const u = q(a),
    h = W(a);
  o0(a);
  const y = Q(a),
    w = a.update;
  return (
    (a.update = (e, t) => {
      (w(e, t), y(t), u(e, t), o(e.beggarGiven, t), h.update(e, t));
    }),
    J(a),
    a.targets.push({
      id: "colony-gate",
      type: "portal",
      destination: "neighborhood",
      name: "Mohalle mein wapas jao",
      x: 0,
      z: 26,
    }),
    a
  );
}
export { l0 as build };
