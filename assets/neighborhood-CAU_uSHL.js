import { C as w } from "./festival-config-DMHGmm_6.js";
import { s as S, f as M, b as D } from "./environment-Dqc8w8Lp.js";
import {
  G as H,
  u as G,
  M as I,
  D as O,
  a as P,
  y as R,
} from "./world-opFD36TP.js";
function N(d) {
  const o = R(d),
    { box: t, sphere: i, cylinder: r, sign: f, plant: l } = o;
  ((o.bounds = { minX: -17, maxX: 17, minZ: -19, maxZ: 19 }),
    (o.spawn = { x: 0, z: 13 }),
    (o.camera = { radius: 18, pitch: 0.72, yaw: 0 }),
    t(0, -0.32, 0, 64, 0.5, 90, 13221021),
    S(o, { width: 24, length: 40 }),
    t(0, -0.03, 0, 9, 0.08, 39, 16777215, !1, "road"));
  for (const a of [-5.3, 5.3])
    t(a, 0.06, 0, 1.4, 0.14, 39, 12830901, !1, "tile");
  for (let a = -18; a < 19; a += 3) t(0, 0.025, a, 0.12, 0.02, 1.1, 14998973);
  (o.houseFront(-10, 12, 14002051, "GUPTA NIWAS"),
    o.houseFront(10, 11, 8366240, "SHARMA NIWAS"),
    o.houseFront(-10, -2, 13474174, "MEHTA NIWAS"),
    o.houseFront(10, -3, 14795911, "VERMA SADAN"),
    o.houseFront(-10, -15, 9873306, "SUHANI KA GHAR"),
    o.houseFront(10, -16, 13349274, "KAPOOR NIWAS"));
  for (const [a, e] of [
    [-10, 12],
    [10, 11],
    [-10, -2],
    [10, -3],
    [-10, -15],
    [10, -16],
  ])
    M(o, a, e);
  const p = [];
  for (const [a, e] of [
    [-7, 8],
    [7, 6],
    [-7, -7],
    [7, -8],
  ]) {
    const s = o.person(a, e, 11963239, "mother");
    (p.push(s),
      r(a, 0.3, e + 1, 0.3, 0.23, 0.6, 11695950),
      i(a, 0.6, e + 1, 0.3, 15248448));
  }
  for (const a of [-14, 14]) t(a, 0.6, -1, 0.3, 1.1, 39, 11967097, !0);
  for (const a of [-7.2, 7.2])
    for (const e of [-9, 4])
      (t(a, 0.5, e, 1, 0.8, 3.7, 13874057), l(a, e, 1.1));
  for (const a of [-5.7, 5.7])
    for (const e of [-12, 4, 16])
      (r(a, 1.9, e, 0.065, 0.09, 3.8, 5005657),
        t(a, 3.8, e, 0.8, 0.15, 0.6, 3885892),
        o.light(a, 3.65, e),
        l(a + Math.sign(a), e, 1.1));
  for (const a of [-10, 3, 15]) o.bunting(-7, a, 7, a, 4.5, 18);
  for (const a of [5.5, 7]) {
    const e = r(-6.6, 0.36, a, 0.35, 0.35, 0.18, 3555643);
    e.rotation.z = Math.PI / 2;
  }
  (t(-6.6, 0.8, 6.2, 0.65, 0.6, 1.5, 5544602),
    t(-6.6, 1.15, 6, 0.7, 0.15, 0.8, 3951171),
    t(-6.6, 1.5, 6.9, 0.65, 0.07, 0.08, 11845296));
  for (const a of [-7, 7]) {
    (t(a, 0.5, -6, 2.5, 0.14, 0.7, 10320213, !0, "wood"),
      t(a, 0.95, -6.3, 2.5, 0.8, 0.12, 9727822));
    for (const e of [-1, 1]) t(a + e, 0.25, -6, 0.12, 0.5, 0.5, 4743255);
  }
  for (const [a, e] of [
    [-16, 5],
    [16, 4],
    [-16, -9],
    [16, -10],
  ]) {
    r(a, 1.5, e, 0.18, 0.28, 3, 9204817);
    for (let s = 0; s < 5; s++)
      i(
        a + Math.sin(s * 2) * 0.8,
        3 + Math.sin(s) * 0.5,
        e + Math.cos(s * 2) * 0.8,
        1.4,
        5472096,
      );
  }
  const u = [
    [-3, 4, 14393939],
    [3, -2, 6659228],
    [-3, -11, 12937842],
    [2, -14, 14329700],
  ];
  for (const [a, e, s] of u) {
    const n = o.person(a, e, s);
    n.walk = !0;
  }
  o.person(3, 10, 11106188, "mother");
  const b = o.person(-3, 0, 13401167, "man", 0.7);
  ((b.walk = !0),
    i(-6, 0.4, -11, 0.4, 12163694).scale.set(0.65, 0.8, 1.5),
    i(-6, 0.75, -10.55, 0.28, 13151360));
  for (const a of [-6.2, -5.8])
    for (const e of [-11.3, -10.8]) t(a, 0.16, e, 0.1, 0.3, 0.1, 12163694);
  (o.targets.push(
    {
      id: "home-gate",
      type: "portal",
      destination: "home",
      name: "Ghar jao",
      x: 0,
      z: 16,
    },
    {
      id: "market-gate",
      type: "portal",
      destination: "market",
      name: "Diwali Bazaar chalo",
      x: 0,
      z: -17,
    },
    {
      id: "sharma",
      type: "delivery",
      name: "Sharma aunty se baat karo",
      x: 3,
      z: 10,
      line: "Sharma aunty: Arre beta! Safai ho gayi? Mummy ki help karna. Happy Diwali!",
    },
  ),
    o.targets.push(
      {
        id: "mehta",
        type: "delivery",
        name: "Mehta uncle ko Diwali bolo · Sona Papdi",
        x: -6,
        z: 1,
      },
      {
        id: "verma",
        type: "delivery",
        name: "Verma aunty ko Diwali bolo · Sona Papdi",
        x: 6,
        z: -0.5,
      },
    ),
    o.person(-6, 1, 13872498),
    o.person(6, -0.5, 11431555, "mother"));
  const A = o.person(-5.7, -9.2, 3772041, "suhani");
  o.targets.push({
    id: "anshika",
    type: "anshika",
    name: "Apni dost Suhani ki rangoli mein help karo",
    x: -5.7,
    z: -9.2,
  });
  const k = o.person(3.1, -5, 12879952, "man");
  ((k.group.rotation.y = -1.2),
    f("PEHLA PATAKHA · BAG KHOL KE DEKHO", 2.8, 2, -5, 3.4),
    o.targets.push({
      id: "cracker-lesson",
      type: "crackerLesson",
      name: "Pehla patakha · Bag se seekho",
      x: 0,
      z: -5,
    }),
    o.targets.push({
      id: "colony-fireworks",
      type: "finale",
      name: "Aasmaan ka final fireworks show dekho",
      x: 0,
      z: 7,
    }));
  const h = new H();
  d.add(h);
  let m = "";
  const y = new G(1, 32),
    g = Object.fromEntries(
      Object.entries(w).map(([a, e]) => [a, new I({ color: e.hex, side: O })]),
    ),
    z = o.update;
  ((o.update = (a, e) => {
    z(a, e);
    const s = JSON.stringify(a.anshikaRangoli);
    (s !== m &&
      ((m = s),
      h.clear(),
      a.anshikaRangoli.forEach((n, c) => {
        const x = new P(y, g[n.colour]);
        ((x.rotation.x = -Math.PI / 2),
          x.position.set(-4.8 + n.x * 1.2, 0.1 + c * 0.001, -9 + n.y * 1.2),
          x.scale.setScalar(n.r * 1.2),
          h.add(x));
      })),
      (A.arms[0].rotation.x = a.anshikaDone ? -0.3 : -0.8),
      p.forEach((n, c) => {
        ((n.arms[0].rotation.x = -1.6 + Math.sin(e * 2 + c) * 0.3),
          (n.arms[1].rotation.x = -0.6 + Math.sin(e * 2 + c) * 0.3));
      }));
  }),
    D(o),
    f("← GHAR", -2.4, 2.2, 16, 2),
    f("DIWALI BAZAAR ↑", 0, 3.8, -17, 4));
  for (const a of [-3.5, 3.5]) r(a, 1.8, -17, 0.08, 0.08, 3.6, 8743494);
  return o;
}
export { N as build };
