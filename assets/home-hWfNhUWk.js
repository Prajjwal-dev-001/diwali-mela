import { d as a0, D as X } from "./decoration-design-CXH-cYhj.js";
import { a as r0 } from "./devotional-art-Cgam9lAy.js";
import { b as s0 } from "./props-CZn3-sgP.js";
import { s as n0, b as F } from "./environment-Dqc8w8Lp.js";
import { C as i0 } from "./festival-config-DMHGmm_6.js";
import {
  a as B,
  n as J,
  M as W,
  Y as c0,
  f as canvasTexClass,
  g as x0,
  d as d0,
  D as Z,
  G as P,
  u as l0,
  y as A,
} from "./world-opFD36TP.js";
import { a as H } from "./config-CTwGFHgE.js";
let T;
const U = new Map();
function f0(d) {
  if (U.has(d)) return U.get(d);
  ((T ||= new c0().load("/art/home-atlas.webp")), (T.colorSpace = x0));
  const a = new d0({ map: T, roughness: 0.95, side: Z });
  return (U.set(d, a), a);
}

function createPhotoTexture(title, subtitle, icon) {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 300;
  const ctx = c.getContext("2d");

  // Romantic gradient background
  const grad = ctx.createLinearGradient(0, 0, 0, 300);
  grad.addColorStop(0, "#2c1654");
  grad.addColorStop(0.5, "#4a1c40");
  grad.addColorStop(1, "#1a0933");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 300);

  // Stars / sparkles
  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  for (let i = 0; i < 24; i++) {
    const sx = (i * 47) % 256;
    const sy = (i * 73) % 200;
    ctx.beginPath();
    ctx.arc(sx, sy, (i % 3) + 1, 0, Math.PI * 2);
    ctx.fill();
  }

  // Couple heart motif
  ctx.fillStyle = "#ff4081";
  ctx.font = "48px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(icon || "💑", 128, 120);

  // Frame inner golden border
  ctx.strokeStyle = "#e6bd78";
  ctx.lineWidth = 4;
  ctx.strokeRect(8, 8, 240, 284);

  // Glowing couple text
  ctx.fillStyle = "#ffe4e1";
  ctx.font = "bold 20px 'Segoe UI', Arial, sans-serif";
  ctx.shadowColor = "rgba(255, 105, 180, 0.9)";
  ctx.shadowBlur = 8;
  ctx.fillText(title, 128, 180);
  ctx.shadowBlur = 0;

  ctx.fillStyle = "#f8bbd0";
  ctx.font = "14px 'Segoe UI', Arial, sans-serif";
  ctx.fillText(subtitle, 128, 215);

  const tex = new canvasTexClass(c);
  tex.colorSpace = x0;
  return new d0({
    map: tex,
    roughness: 0.6,
    emissive: 16756941,
    emissiveMap: tex,
    emissiveIntensity: 0.18,
  });
}
function O(d, a, e, b, l, m, y, v = 0) {
  const w = new J(m, y),
    c = w.attributes.uv;
  for (let s = 0; s < c.count; s++)
    c.setXY(
      s,
      (c.getX(s) * 0.98 + (a % 3) + 0.01) / 3,
      (c.getY(s) * 0.98 + (a < 3 ? 1 : 0) + 0.01) / 2,
    );
  const r = new B(w, f0(a));
  return (
    r.position.set(e, b, l),
    (r.rotation.y = v),
    (r.receiveShadow = !0),
    d.add(r),
    r
  );
}
function p0(d) {
  const { root: a, box: e, cylinder: b, sphere: l, sign: m } = d,
    y = O(a, 1, -8, 1.09, -6.4, 2.75, 2.5);
  y.rotation.x = -Math.PI / 2;
  for (const r of [-8.65, -7.35]) {
    const s = e(r, 1.12, -8.2, 1.13, 0.27, 0.62, 15850688);
    s.rotation.y = 0.03;
  }
  for (const r of [-8.7, -5.3])
    (e(r, 2.95, -9.5, 0.09, 0.09, 0.15, 12296311),
      O(a, 0, r, 2, -9.43, 0.65, 1.9));
  e(-7, 3, -9.4, 4.2, 0.07, 0.1, 7492416);
  for (const [r, s, D, h, M] of [
    [-4.5, -9.78, 1.5, 1.15, 3],
    [-9.3, -9.77, 1.15, 1.45, 4],
    [6.9, 0.17, 1.5, 1.15, 3],
  ])
    (e(r, 2.15, s - 0.02, D + 0.15, h + 0.15, 0.08, 7622715),
      O(a, M, r, 2.15, s + 0.035, D, h));
  const v = e(-7.6, 1.02, -2.05, 0.65, 0.1, 0.55, 3435366);
  v.rotation.y = -0.18;
  for (let r = 0; r < 3; r++)
    e(
      -8.7 + r * 0.19,
      1.05,
      -2,
      0.1,
      0.03,
      0.45,
      [12675916, 13739075, 4353141][r],
    );
  b(-7, 1.18, -2.28, 0.13, 0.11, 0.3, 11631186);
  for (let r = 0; r < 4; r++) {
    const s = b(-7.08 + r * 0.05, 1.42, -2.28, 0.018, 0.018, 0.35, 3492688);
    s.rotation.z = (r - 1.5) * 0.1;
  }
  l(-9.3, 0.23, -4.6, 0.21, 10050362);
  for (let r = 0; r < 3; r++) {
    e(-9, 0.25 + r * 0.3, 9, 2, 0.09, 0.65, 8937796);
    for (const s of [-0.5, 0.15])
      e(-9 + s, 0.34 + r * 0.3, 9, 0.25, 0.13, 0.42, 4801348);
  }
  for (let r = 0; r < 3; r++)
    e(
      -3.7,
      3.07 + r * 0.1,
      -8.5,
      1.4,
      0.09,
      0.7,
      [14201214, 7838097, 12486253][r],
    );
  const w = O(a, 5, -2.58, 2.02, -7.74, 0.6, 0.75);
  (m("MUMMY KI LIST", -2.58, 1.95, -7.67, 0.54, "#e9d6ad", "#574b3c"),
    m("DIYE · RANG · BULBS", -2.58, 1.76, -7.67, 0.58, "#e9d6ad", "#574b3c"));
  for (const r of [3.9, 4.5, 5.1]) b(r, 1.42, -9, 0.12, 0.12, 0.48, 12958882);
  const c = new B(
    new J(3.8, 3.4),
    new W({ color: 16766097, transparent: !0, opacity: 0.12, depthWrite: !1 }),
  );
  return (
    (c.userData.dynamic = !0),
    (c.rotation.x = -Math.PI / 2),
    (c.rotation.z = -0.3),
    c.position.set(-6.8, 0.057, -6.8),
    a.add(c),
    {
      update(r) {
        ((c.visible = !r.night), (w.visible = !0));
      },
    }
  );
}
function M0(d) {
  const a = A(d),
    { box: e, sphere: b, cylinder: l, plant: m, rug: y, sign: v } = a;
  ((a.bounds = { minX: -11, maxX: 11, minZ: -10, maxZ: 14 }),
    (a.spawn = { x: -5, z: -4 }),
    (a.camera = { radius: 26, pitch: 0.9, yaw: 0 }),
    n0(a, { width: 28, length: 36 }),
    e(0, -0.32, 1.4, 25, 0.55, 30, 12364423),
    e(0, -0.02, 0, 22, 0.2, 20, 16379616, !1, "tile"),
    e(0, 0.01, 12, 22, 0.2, 4, 12089688, !1, "tile"));
  for (const [o, t, i, n, x] of [
    [-6.4, -5.5, 9, 9, 14465176],
    [6.4, -5.5, 9, 9, 11387315],
    [-6.4, 4.5, 9, 10, 13812912],
    [6.4, 4.5, 9, 10, 14663580],
  ])
    e(o, 0.035, t, i, 0.025, n, x, !1, "tile");
  const w = [],
    c = (o, t, i, n, x = 3) => {
      const f = e(o, x / 2 + 0.12, t, i, x, n, 15848879, !0);
      ((f.userData.dynamic = !0),
        w.push({ mesh: f, height: x }),
        e(o, 0.18, t, i + 0.03, 0.18, n + 0.03, 10056794));
    };
  (c(0, -10, 22, 0.25),
    c(-11, 0, 0.25, 20),
    c(11, 0, 0.25, 20, 0.8),
    c(-6.2, 10, 9.5, 0.25, 0.8),
    c(6.2, 10, 9.5, 0.25, 0.8));
  for (const o of [-1.8, 1.8])
    (c(o, -8, 0.16, 4), c(o, 0, 0.16, 5.5, 0.9), c(o, 8, 0.16, 4, 0.9));
  (c(-6.4, -0.7, 9, 0.2, 0.8), c(6.4, -0.7, 9, 0.2, 0.8));
  const r = new P();
  d.add(r);
  const s = A(r);
  (s.box(0, 3.18, 0, 22, 0.04, 20, 15918542),
    s.box(0, 3.35, 0, 23, 0.3, 21, 12219730),
    s.box(0, 3.7, -1, 22, 0.4, 19, 13208674),
    s.sign("iglu~uglu house", 0, 3.05, 10.65, 3.8, "#ffb0c8", "#ffffff"));
  for (const o of [-6.5, 6.5]) {
    (s.box(o, 1.85, 10.18, 2.8, 1.6, 0.12, 4357504),
      s.box(o, 1.85, 10.27, 0.07, 1.65, 0.07, 15982006),
      s.box(o, 1.85, 10.27, 2.9, 0.07, 0.07, 15982006),
      s.box(o, 2.8, 10.4, 3.2, 0.16, 0.8, 12222548));
    for (const t of [-1.65, 1.65])
      s.box(o + t, 1.85, 10.24, 0.35, 1.8, 0.08, 9530186);
  }
  (s.box(0, 3.9, -10, 23, 0.65, 0.15, 14992799),
    s.box(-11.4, 3.9, 0, 0.15, 0.65, 20, 14992799),
    s.box(11.4, 3.9, 0, 0.15, 0.65, 20, 14992799),
    s.cylinder(-6, 4.4, -5, 0.9, 0.95, 1.4, 5531228),
    s.cylinder(-6, 5.15, -5, 0.7, 0.9, 0.12, 4479052),
    (r.visible = !1),
    (a.roof = r),
    (a.setPOV = (o) => {
      r.visible = o;
      for (const { mesh: t, height: i } of w)
        ((t.scale.y = o ? 3 / i : 1), (t.position.y = (o ? 3 : i) / 2 + 0.12));
    }));
  for (const o of [-7, 6]) {
    (e(o, 2.03, -9.82, 2.5, 1.5, 0.12, 5539210),
      e(o, 2.03, -9.7, 0.08, 1.55, 0.08, 16770746),
      e(o, 2.03, -9.7, 2.6, 0.08, 0.08, 16770746));
    for (const t of [-1.55, 1.55]) e(o + t, 2, -9.65, 0.45, 2, 0.13, 13008489);
  }
  function D(o, t, i, n = 2.8) {
    (e(o, 0.42, t, n, 0.65, 3.9, 8410686, !0, "wood"),
      e(o, 0.83, t, n + 0.05, 0.3, 3.8, 16116439),
      e(o, 0.99, t + 0.55, n + 0.08, 0.16, 2.6, i),
      e(o, 1.1, t - 1.25, n - 0.45, 0.25, 0.7, 16773326),
      e(o, 1.1, t - 1.95, n + 0.15, 1.25, 0.13, 8739393));
    for (let x = 0; x < 5; x++)
      e(o, 1.082, t + 0.25 + x * 0.3, n - 0.16, 0.015, 0.025, 15516042);
  }
  // Guest room bed
  (D(-7, 3, 11629689, 3.6),
    // Romantic Double Bed in Master Bedroom (-7.5, -6.5)
    e(-7.5, 0.38, -6.5, 3.2, 0.65, 4.0, 7160641, !0, "wood"),
    e(-7.5, 1.5, -8.45, 3.3, 1.55, 0.25, 5979959, !0, "wood"),
    e(-7.5, 1.5, -8.32, 2.9, 1.25, 0.08, 16756941),
    e(-7.5, 0.78, -6.5, 3.0, 0.35, 3.75, 16776186),
    e(-7.5, 0.98, -5.9, 3.05, 0.18, 2.5, 16756941),
    e(-7.5, 1.05, -7.15, 3.05, 0.08, 0.38, 16774638),
    e(-8.3, 1.08, -7.7, 1.15, 0.22, 0.75, 16777215),
    e(-6.7, 1.08, -7.7, 1.15, 0.22, 0.75, 16777215),
    b(-7.5, 1.18, -7.2, 0.22, 16728193),
    e(-9.6, 0.45, -7.8, 0.7, 0.75, 0.7, 7160641, !0, "wood"),
    e(-5.4, 0.45, -7.8, 0.7, 0.75, 0.7, 7160641, !0, "wood"),
    a.light(-9.6, 1.0, -7.8),
    a.light(-5.4, 1.0, -7.8),
    // 2 Wall Photo Frames on Bedroom Wall
    e(-8.7, 2.25, -9.78, 1.35, 1.55, 0.06, 13938487),
    e(-6.3, 2.25, -9.78, 1.35, 1.55, 0.06, 13938487),
    // Aesthetic Bedroom Rugs
    y(-7.5, -3.5, 4.4, 3.2, 16761035),
    y(-5.5, 7, 5, 2, 6196104),
    y(6, 5.6, 5, 3.6, 10900055),
    // Interactive 3D Almirah (Wardrobe)
    e(-3.7, 1.6, -8.0, 2.4, 3.1, 1.4, 6112567, !0, "wood"),
    e(-3.7, 1.6, -7.28, 0.04, 2.8, 0.04, 13938487));
  (a.targets.push({
    id: "wardrobe",
    type: "wardrobe",
    name: "Almirah · Kapde badlo (Change Outfit)",
    x: -3.7,
    z: -7.0,
    reach: 6.5,
  }),
    a.light(-7.5, 2.8, -5.5));
  for (const o of [-3.9, -3.5]) b(o, 1.5, -7.24, 0.06, 16766720);
  e(-8, 0.87, -2.1, 3, 0.18, 1.3, 8937027, !0, "wood");
  for (const o of [-9.2, -6.8]) e(o, 0.43, -2.1, 0.12, 0.85, 1, 7754041);
  (e(-8, 1.08, -2.1, 1, 0.16, 0.65, 14926980),
    e(-8.8, 1.2, -2.2, 0.18, 0.5, 0.18, 5275254),
    b(-8.8, 1.5, -2.2, 0.27, 15255433));

  const pf1Mesh = new B(
    new J(1.2, 1.4),
    createPhotoTexture("iglu ❤️ uglu", "Diwali Night 2026", "💑"),
  );
  pf1Mesh.position.set(-8.7, 2.25, -9.74);
  d.add(pf1Mesh);
  const pf2Mesh = new B(
    new J(1.2, 1.4),
    createPhotoTexture("Ek Raat, Sath Me", "Forever & Always 💖", "✨"),
  );
  pf2Mesh.position.set(-6.3, 2.25, -9.74);
  d.add(pf2Mesh);
  for (let o = 0; o < 5; o++)
    e(-10.6, 1 + o * 0.33, -4, 0.45, 0.14, 2.3, 9923917);
  for (let o = 0; o < 12; o++)
    e(
      -10.25,
      1.7,
      -4.9 + o * 0.16,
      0.25,
      0.55,
      0.12,
      [6065283, 12682337, 13217655][o % 3],
    );
  for (const [o, t] of [
    [-2.7, -5],
    [-3, 7],
    [9, 7],
    [10, -8],
  ])
    m(o, t);
  (e(6.7, 0.55, -9, 6.5, 1.1, 1.2, 7181968, !0),
    e(6.7, 1.16, -9, 6.7, 0.16, 1.35, 15195850));
  for (const o of [4.2, 5.6, 7, 8.4, 9.6])
    e(o, 0.65, -8.33, 0.04, 0.8, 0.04, 14865067);
  (e(4.7, 1.26, -9, 1.2, 0.06, 0.8, 7904154),
    e(4.7, 1.3, -9, 0.9, 0.03, 0.55, 3562332),
    l(4.7, 1.55, -9.4, 0.045, 0.045, 0.5, 11123117),
    e(8, 1.28, -9, 1.5, 0.06, 0.9, 3884353));
  for (const o of [7.7, 8.3])
    (l(o, 1.34, -9, 0.2, 0.2, 0.08, 7108465),
      l(o, 1.45, -9, 0.16, 0.18, 0.2, 11254190));
  (e(10, 1.35, -5.5, 1.3, 2.7, 1.5, 12043447, !0),
    e(10, 1.6, -4.71, 1.25, 0.045, 0.03, 8887185),
    e(9.6, 1.8, -4.65, 0.05, 0.7, 0.08, 6454132),
    e(5, 0.88, -4.5, 2.5, 0.16, 1.8, 10319441, !0, "wood"));
  for (const o of [4, 6])
    for (const t of [-5.1, -3.9]) e(o, 0.43, t, 0.12, 0.85, 0.12, 10319441);
  l(5, 1.05, -4.5, 0.4, 0.3, 0.13, 12749157);
  for (let o = 0; o < 4; o++)
    b(
      5 + Math.sin(o * 2) * 0.2,
      1.2,
      -4.5 + Math.cos(o * 2) * 0.2,
      0.16,
      13935688,
    );
  for (const [o, t] of [
    [4, -3],
    [6, -3],
  ])
    (e(o, 0.45, t, 0.7, 0.15, 0.7, 7773326, !0),
      e(o, 0.85, t + 0.3, 0.7, 0.8, 0.12, 7773326));
  (e(8, 0.42, -2.1, 1.7, 0.8, 1.3, 11371355, !0, "wood"),
    e(3.2, 0.75, -7, 1.3, 1.4, 0.7, 10451022, !0),
    e(3.2, 1.5, -7, 1.4, 0.12, 0.8, 12954748),
    e(7.6, 0.5, 1.5, 4, 0.75, 1.5, 11101015, !0),
    e(7.6, 1.12, 1, 4, 1.2, 0.35, 12088677));
  for (const o of [5.8, 9.4]) e(o, 0.83, 1.6, 0.4, 0.8, 1.6, 10049102);
  for (const o of [6.5, 8.3]) e(o, 0.93, 1.55, 1.3, 0.18, 1.1, 14065275);
  (e(6.4, 1.27, 1.4, 0.65, 0.55, 0.18, 5341053),
    e(6, 0.42, 5, 2.7, 0.2, 1.6, 10053705, !0, "wood"));
  for (const o of [5, 7])
    for (const t of [4.5, 5.5]) e(o, 0.22, t, 0.12, 0.42, 0.12, 7163446);
  (l(6, 0.6, 5, 0.25, 0.3, 0.15, 12883044),
    e(9.8, 0.6, 7.8, 1.2, 1.2, 2, 9857097, !0, "wood"),
    e(9.8, 1.65, 7.8, 0.15, 1.15, 1.9, 2703168),
    e(9.69, 1.65, 7.8, 0.02, 0.94, 1.65, 4747890),
    e(3.4, 0.8, 8.7, 1.7, 1.6, 1.1, 10579008, !0, "wood"),
    e(3.4, 3, 8.7, 1.9, 0.2, 1.3, 14399352));
  for (const o of [2.7, 4.1]) l(o, 2.1, 8.7, 0.07, 0.07, 1.8, 13475674);
  (e(3.4, 2.15, 8.99, 1.8, 1.5, 0.12, 9591604),
    r0(a, { x: 3.4, y: 2.15, z: 8.85, width: 0.64, gap: 0.12, facing: -1 }),
    a.light(3.1, 1.7, 9.15),
    a.light(3.7, 1.7, 9.15),
    e(-3.2, 0.85, 1.5, 1.7, 1.7, 0.8, 10450511, !0, "wood"),
    e(-3.2, 2.05, 1.32, 1.25, 1.3, 0.08, 9220526),
    e(-9.5, 0.8, 8.3, 2, 1.6, 1, 11780013, !0),
    l(-9.5, 1.66, 8.3, 0.4, 0.25, 0.17, 15263186),
    e(-10.5, 1.3, 6.7, 0.2, 2.6, 2.1, 9414558),
    e(-10, 0.35, 6.3, 0.6, 0.6, 0.8, 15328468));
  for (const [o, t, i] of [
    ["IGLU & UGLU BEDROOM", -5.5, -5],
    ["RASOI", 6, -6],
    ["MUMMY PAPA KA KAMRA", -5, 5],
    ["BAITHAK", 6, 7.3],
  ]) {
    const n = v(o, t, 0.14, i, 2.3, "#e0ceaa", "#78624b");
    n.rotation.x = -Math.PI / 2;
  }
  // Spawn cozy partner companion avatar in bedroom for couple interactions
  const isGirlPlayer = localStorage.getItem("couple_player_role") === "girl";
  const compRole = isGirlPlayer ? "man" : "girl";
  const compColor = isGirlPlayer ? 2039583 : 16756941;
  const compStyle = isGirlPlayer ? "sherwani" : "pink_lehenga";
  const h = a.person(4, 5.8, 11685218, "mother");
  h.group.visible = false;
  const M = a.person(-4.5, 4, 14926734);
  M.group.visible = false;
  const compPerson = a.person(-5.5, -4.5, compColor, compRole, compStyle);
  compPerson.group.rotation.y = -Math.PI / 3;
  a.companion = compPerson;
  a.targets.push({
    id: "companion",
    name: isGirlPlayer ? "Iglu se baat karo 💖" : "Uglu se baat karo 💖",
    x: -5.5,
    z: -4.5,
    reach: 2.0,
  });
  a.targets.push(
    {
      id: "gate",
      type: "portal",
      destination: "neighborhood",
      name: "Gate kholo · Apna mohalla",
      x: 0,
      z: 13,
    },
    { id: "lights", type: "decorate", name: "Fairy lights lagao", x: 2, z: 11 },
    { id: "diyas", type: "decorate", name: "Diye lagao", x: -3, z: 11 },
    { id: "rangoli", type: "decorate", name: "Rangoli banao", x: 5, z: 12 },
    {
      id: "mandir",
      type: "pooja",
      name: "Parivaar ki Diwali pooja",
      x: 3.4,
      z: 8.7,
      line: "Mummy: Pehle ghar saja lete hain. Phir sab saath baithenge.",
    },
  );
  for (const o of [-9.5, 9.5])
    (m(o, 11.6, 1.3), l(o, 1.6, 11.5, 0.09, 0.09, 3.2, 10123092));
  (e(-6.5, 0.5, 14, 9, 0.9, 0.2, 10125405, !0),
    e(6.5, 0.5, 14, 9, 0.9, 0.2, 10125405, !0),
    e(-1.6, 0.9, 14, 0.12, 1.8, 0.2, 3757651),
    e(1.6, 0.9, 14, 0.12, 1.8, 0.2, 3757651));
  const R = new P();
  d.add(R);
  const q = A(R),
    V = Array.from({ length: 40 }, () => q.light(0, 2.5, 10.3));
  a.decor.lights = R;
  const k = new P();
  d.add(k);
  const E = Array.from({ length: 40 }, () => {
    const o = new P();
    k.add(o);
    const t = A(o),
      i = t.cylinder(0, 0.18, 0, 0.16, 0.1, 0.15, 12153411);
    i.material = i.material.clone();
    const n = t.light(0, 0.35, -0.06);
    return { group: o, bowl: i, flame: n };
  });
  a.decor.diyas = k;
  let L = "";
  function _(o, t) {
    const i = JSON.stringify(o.homeDesign);
    if (i !== L) {
      L = i;
      for (const n of ["diyas", "lights"]) {
        const x = o.homeDesign?.[n] || a0("row", "gold", 1, 0);
        (n === "diyas" ? E : V).forEach((g, z) => {
          const p = g.group || g,
            u = x[z];
          ((p.visible = !!u),
            u &&
              (n === "diyas"
                ? (p.position.set(u.x * 9, 0, 11.9 + u.y * 1.15),
                  (p.rotation.y = (u.angle * Math.PI) / 180),
                  p.scale.setScalar(u.size),
                  g.bowl.material.color.set(X[u.colour]))
                : (p.position.set(u.x * 10, 2.25 - u.y * 0.65, 10.3),
                  p.scale.setScalar(u.size),
                  p.userData.ownColour ||
                    ((p.material = p.material.clone()),
                    (p.userData.ownColour = !0)),
                  p.material.color.set(X[u.colour]))));
        });
      }
    }
    E.forEach((n, x) => {
      n.flame.scale.y = 1 + Math.sin(t * 4 + x) * 0.12;
    });
  }
  const I = new P();
  (d.add(I), (a.decor.rangoli = I));
  const C = [],
    Q = new l0(1, 40),
    $ = Object.fromEntries(
      Object.entries(i0).map(([o, t]) => [o, new W({ color: t.hex, side: Z })]),
    );
  let Y = "";
  const o0 = a.update,
    e0 = p0(a);
  a.update = (o, t) => {
    (o0(o, t), e0.update(o), _(o, t));
    const i = JSON.stringify(o.rangoli);
    if (i !== Y) {
      ((Y = i), C.forEach((f) => I.remove(f)), (C.length = 0));
      for (const [f, g] of o.rangoli.entries()) {
        const z = new B(Q, $[g.colour]);
        ((z.rotation.x = -Math.PI / 2),
          z.position.set(5 + g.x * 1.3, 0.14 + f * 8e-4, 12 + g.y * 1.3),
          z.scale.setScalar(g.r * 1.3),
          I.add(z),
          C.push(z));
      }
    }
    ((N.group.visible = o.delivered.length === 3 && !o.soanReturned),
      (S.visible = o.delivered.length === 3),
      o.soanReturned
        ? (h.group.position.set(5, 0, 7.3),
          M.group.position.set(6.6, 0, 7.3),
          (h.group.rotation.y = -1),
          (M.group.rotation.y = -1.6))
        : (h.group.position.set(4, 0, 5.8), M.group.position.set(-4.5, 0, 4)));
    const n = a.targets.find((f) => f.id === "mother"),
      x = a.targets.find((f) => f.id === "papa");
    (n && ((n.x = h.group.position.x), (n.z = h.group.position.z)),
      x && ((x.x = M.group.position.x), (x.z = M.group.position.z)),
      (j.visible = o.pooja.length > 0),
      (G.position.x = 3.8 + Math.sin(t * 1.4) * 0.16),
      (G.position.z = 8.4 + Math.cos(t * 1.4) * 0.12));
  };
  const N = a.person(-2, 12, 11034491, "mother");
  N.group.visible = !1;
  const S = s0();
  (d.add(S),
    S.position.set(-1.6, 0.65, 12),
    S.scale.setScalar(1.8),
    (S.visible = !1),
    a.targets.push({
      id: "doorbell",
      type: "doorbell",
      name: "Doorbell · Sharma aunty aayi hain!",
      x: -1,
      z: 12,
    }));
  const G = l(3.8, 1.3, 8.4, 0.28, 0.28, 0.04, 12885065),
    j = a.light(3.8, 1.48, 8.4);
  j.visible = !1;
  const K = new P();
  d.add(K);
  const t0 = A(K);
  for (let o = 0; o < 12; o++)
    t0.sphere(
      -1.5 + o * 0.27,
      2.5 - Math.sin((o / 11) * Math.PI) * 0.3,
      10.2,
      0.15,
      o % 2 ? 14459457 : 12347707,
    );
  a.decor.toran = K;
  for (const o of [S, G, j]) o.userData.dynamic = !0;
  return (F(s), F(a), a);
}
export { M0 as build };
