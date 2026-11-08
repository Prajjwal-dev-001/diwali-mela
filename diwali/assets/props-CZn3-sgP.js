import {
  G as u,
  a as d,
  T as h,
  d as x,
  t as w,
  M as y,
  y as b,
  Y as m,
  g as M,
  D as k,
  n as g,
} from "./world-opFD36TP.js";
import { a as f } from "./festival-config-DMHGmm_6.js";
let l, p;
function S(r) {
  l ||
    ((l = new m().load("/art/cracker-labels.webp")),
    (l.colorSpace = M),
    (p = new x({ map: l, roughness: 0.9, side: k })));
  const a = Object.keys(f).indexOf(r),
    t = a % 3,
    s = Math.floor(a / 3),
    o = new g(0.62, 0.7),
    n = o.attributes.uv;
  for (let e = 0; e < n.count; e++)
    n.setXY(e, (n.getX(e) + t) / 3, (n.getY(e) + 2 - s) / 3);
  const i = new d(o, p);
  return ((i.userData.ownedGeometry = !0), i.position.set(0, 0.48, 0.25), i);
}
function v(r) {
  const a = new u(),
    t = b(a),
    s = f[r] || f.fountain;
  if (r === "rocket" || r === "comet") {
    (t.cylinder(0, 0.65, 0, 0.16, 0.16, 0.8, s.colour),
      t.cylinder(0, 1.16, 0, 0, 0.23, 0.35, 13851488),
      t.cylinder(0, 0.18, 0, 0.025, 0.025, 0.6, 12029268));
    for (let e = 0; e < 4; e++) {
      const c = t.box(0, 0.35, 0, 0.45, 0.24, 0.04, 14987863);
      c.rotation.y = (e * Math.PI) / 2;
    }
  } else if (r === "sutli") {
    t.sphere(0, 0.3, 0, 0.3, 6653793);
    for (let e = 0; e < 4; e++) {
      const c = new d(new h(0.3, 0.022, 4, 16), new x({ color: 14204285 }));
      ((c.userData.ownedGeometry = !0),
        (c.userData.ownedMaterial = !0),
        (c.position.y = 0.3),
        (c.rotation.y = (e * Math.PI) / 4),
        a.add(c));
    }
  } else if (r === "mirchi") {
    for (let e = 0; e < 7; e++)
      t.cylinder(
        (e % 2 ? 1 : -1) * 0.15,
        0.12,
        e * 0.13 - 0.4,
        0.055,
        0.055,
        0.23,
        12996687,
      );
    t.box(0, 0.2, 0, 0.025, 0.025, 1, 14266485);
  } else
    r === "sparkler"
      ? (t.cylinder(0, 0.55, 0, 0.025, 0.025, 1.1, 12700092),
        t.cylinder(0, 0.9, 0, 0.06, 0.06, 0.5, 8883071))
      : r === "chakra"
        ? (t.cylinder(0, 0.08, 0, 0.34, 0.34, 0.13, 5221026),
          t.cylinder(0, 0.16, 0, 0.14, 0.14, 0.06, 16043633))
        : t.cylinder(
            0,
            0.35,
            0,
            r === "fountain" ? 0.055 : 0.2,
            0.32,
            0.7,
            s.colour,
          );
  ["mirchi", "sparkler", "chakra"].includes(r) || a.add(S(r));
  const o =
      {
        chakra: 0.23,
        mirchi: 0.3,
        sutli: 0.65,
        rocket: 1.3,
        comet: 1.3,
        sparkler: 1.25,
      }[r] || 0.81,
    n = t.cylinder(0.12, o, 0, 0.015, 0.015, 0.22, 14068079);
  n.rotation.z = -0.5;
  const i = t.light(0.18, o + 0.12, 0, 16757855);
  return (
    (i.visible = !1),
    (a.userData.ember = i),
    a.traverse((e) => {
      e.isMesh && (e.castShadow = !1);
    }),
    (a.userData.dispose = () =>
      a.traverse((e) => {
        (e.userData.ownedGeometry && e.geometry.dispose(),
          e.userData.ownedMaterial && e.material.dispose());
      })),
    a
  );
}
function P() {
  const r = new u(),
    a = b(r);
  a.cylinder(0, 0, 0, 0.38, 0.34, 0.045, 12753997);
  const t = new d(
    new h(0.36, 0.022, 6, 40),
    new x({ color: 15321467, metalness: 0.45, roughness: 0.4 }),
  );
  ((t.rotation.x = Math.PI / 2),
    r.add(t),
    a.cylinder(0, 0.07, -0.07, 0.085, 0.05, 0.09, 11890237));
  const s = new d(
    new w(0.04, 10, 8),
    new y({ color: 16754217, toneMapped: !1 }),
  );
  (s.position.set(0, 0.15, -0.07), s.scale.set(0.7, 1.6, 0.7), r.add(s));
  for (let o = 0; o < 8; o++)
    a.sphere(
      Math.cos(o) * 0.24,
      0.05,
      Math.sin(o) * 0.24,
      0.045,
      o % 2 ? 15577420 : 12996955,
    );
  for (const o of [-0.27, 0.27]) {
    const n = a.cylinder(o, -0.13, 0.22, 0.07, 0.06, 0.36, 11368021);
    ((n.rotation.x = -1.1), a.sphere(o, -0.03, 0.12, 0.075, 11368021));
  }
  return (
    r.traverse((o) => {
      o.isMesh && ((o.castShadow = !1), (o.renderOrder = 5));
    }),
    r
  );
}
function C() {
  const r = new u(),
    a = b(r);
  return (
    a.box(0, 0, 0, 0.42, 0.22, 0.3, 13791121),
    a.box(0, 0.125, 0, 0.44, 0.035, 0.32, 15054409),
    a.box(0, 0, 0.155, 0.055, 0.22, 0.012, 3637187),
    a.box(0, 0.148, 0, 0.055, 0.012, 0.32, 3637187),
    r
  );
}
export { P as a, C as b, v as c };
