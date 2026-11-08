import {
  G as u,
  Y as M,
  g as b,
  d as h,
  a as v,
  n as G,
} from "./world-opFD36TP.js";
const c = new Map();
function w(a, { x, y: t, z: r, width: e = 1.2, gap: d = 0.3, facing: o = 1 }) {
  const l = new u();
  (a.root.add(l),
    ["ganesh", "lakshmi"].forEach((s, m) => {
      if (!c.has(s)) {
        const p = new M().load(`/art/mandir-${s}.webp`);
        ((p.colorSpace = b),
          c.set(
            s,
            new h({
              map: p,
              color: 16777215,
              roughness: 0.85,
              emissive: 16777215,
              emissiveMap: p,
              emissiveIntensity: 0.18,
            }),
          ));
      }
      const n = x + ((m ? 1 : -1) * (e + d)) / 2,
        f = e * 1.5;
      (a.box(n, t, r - o * 0.04, e + 0.1, f + 0.1, 0.07, 11897147),
        a.box(n, t, r - o * 0.03, e + 0.025, f + 0.025, 0.04, 7096116));
      const i = new v(new G(e, f), c.get(s));
      (i.position.set(n, t, r + o * 0.01),
        o < 0 && (i.rotation.y = Math.PI),
        l.add(i));
    }));
}
export { w as a };
