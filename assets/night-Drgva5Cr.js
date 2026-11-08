import { c as R } from "./props-CZn3-sgP.js";
import { a as z } from "./config-CTwGFHgE.js";
import { a as W } from "./festival-config-DMHGmm_6.js";
import {
  j as A,
  k as v,
  q as C,
  A as G,
  P as S,
  G as j,
  i as U,
  h as E,
  m as I,
  f as N,
} from "./world-opFD36TP.js";
let B;
function P() {
  if (B) return B;
  const i = document.createElement("canvas");
  i.width = i.height = 32;
  const t = i.getContext("2d"),
    e = t.createRadialGradient(16, 16, 0, 16, 16, 16);
  return (
    e.addColorStop(0, "#ffffffff"),
    e.addColorStop(0.2, "#ffffffdd"),
    e.addColorStop(1, "#ffffff00"),
    (t.fillStyle = e),
    t.fillRect(0, 0, 32, 32),
    (B = new N(i))
  );
}
function J(i, t, e = "fountain") {
  const c = W[e] || W.fountain;
  if (c.style === "fountain") return T(i, t);
  const o = q(i, t, c.style, c.colour);
  if (!["rocket", "comet"].includes(e)) return o;
  const s = R(e);
  (s.position.set(t.x, 0.2, t.z), i.add(s));
  let a = 0;
  return {
    update(d) {
      ((a += d), (s.position.y = 0.2 + a * 10), (s.visible = a < 1));
      const h = o.update(d);
      return (h || (i.remove(s), s.userData.dispose?.()), h);
    },
  };
}
function L(i, t) {
  return q(
    i,
    t,
    "sky",
    [16239224, 14918622, 8245190][Math.floor(Math.random() * 3)],
  );
}
function Q(i) {
  const t = new j();
  i.add(t);
  const e = new Float32Array(480 * 3);
  for (let a = 0; a < 480; a++) {
    const d = a * 2.399963,
      h = 0.22 + (a % 71) / 91,
      m = Math.sqrt(1 - h * h) * 82;
    ((e[a * 3] = Math.sin(d) * m),
      (e[a * 3 + 1] = h * 82),
      (e[a * 3 + 2] = Math.cos(d) * m));
  }
  const c = new A();
  c.setAttribute("position", new v(e, 3));
  const o = new C({
    color: 16773075,
    size: 0.09,
    transparent: !0,
    opacity: 0,
    fog: !1,
    depthWrite: !1,
  });
  t.add(new S(c, o));
  const s = new U(
    new E({
      map: P(),
      color: 16770987,
      transparent: !0,
      fog: !1,
      depthWrite: !1,
    }),
  );
  return (
    s.position.set(-23, 37, -65),
    s.scale.set(5, 5, 1),
    t.add(s),
    {
      update(a) {
        ((t.visible = a > 0.1),
          (o.opacity = a * 0.7),
          (s.material.opacity = a * 0.9));
      },
    }
  );
}
function V(i, t = {}, e = !1) {
  t.x = Number.isFinite(t.x) ? t.x : 0;
  t.y = Number.isFinite(t.y) ? t.y : 22;
  t.z = Number.isFinite(t.z) ? t.z : -24;
  t.colour = t.colour != null ? t.colour : 16716947;
  const c = t.pattern === "heart" ? (e ? 260 : 400) : (e ? 180 : 300),
    o = 3,
    s = c * o,
    a = new Float32Array(s * 3),
    d = new Float32Array(s * 3),
    h = [],
    m = new I(t.colour),
    f = new I(16774876);
  for (let l = 0; l < c; l++) {
    const r = (l / c) * Math.PI * 2,
      n = 1 - (2 * l) / c,
      x = Math.sqrt(1 - n * n);
    let g = { x: Math.cos(r * 13) * x, y: n, z: Math.sin(r * 13) * x };
    if (
      (t.pattern === "ring" &&
        (g = { x: Math.cos(r), y: Math.sin(r), z: Math.sin(r * 3) * 0.12 }),
      t.pattern === "willow" &&
        (g = {
          x: Math.cos(r),
          y: 0.25 + ((l % 7) / 7) * 0.6,
          z: Math.sin(r) * 0.65,
        }),
      t.pattern === "heart" &&
        (g = {
          x: Math.sin(r) ** 3,
          y:
            (13 * Math.cos(r) -
              5 * Math.cos(2 * r) -
              2 * Math.cos(3 * r) -
              Math.cos(4 * r)) /
            16,
          z: Math.sin(l * 2.4) * 0.13,
        }),
      t.pattern === "palm")
    ) {
      const y = ((l % 7) * Math.PI * 2) / 7,
        k = 0.45 + (Math.floor(l / 7) / Math.ceil(c / 7)) * 0.55;
      g = { x: Math.cos(y) * k, y: Math.sin(y) * k, z: Math.sin(l) * 0.15 };
    }
    h.push(g);
    for (let y = 0; y < o; y++) {
      const k = (
          t.multi
            ? new I(
                t.pattern === "heart" ? [16716947, 16728224, 16737975, 16757688, 16766012, 15277699] : [16730429, 16733884, 2351034, 9001983, 16766012, 3782911][
                  l % 6
                ],
              )
            : m.clone()
        ).lerp(f, y === 0 ? 0.2 : 0),
        F = (l * o + y) * 3;
      ((d[F] = k.r * 2.1 * (1 - y * 0.24)),
        (d[F + 1] = k.g * 2.1 * (1 - y * 0.24)),
        (d[F + 2] = k.b * 2.1 * (1 - y * 0.24)));
    }
  }
  const u = new A();
  (u.setAttribute("position", new v(a, 3)),
    u.setAttribute("color", new v(d, 3)));
  const M = new C({
      map: P(),
      vertexColors: !0,
      size: e ? 0.3 : 0.32,
      toneMapped: !1,
      transparent: !0,
      blending: G,
      depthWrite: !1,
      fog: !1,
    }),
    p = new S(u, M);
  ((p.frustumCulled = !1), i.add(p));
  let w = 0;
  const b = () => {
    (i.remove(p), u.dispose(), M.dispose());
  };
  return {
    dispose: b,
    update(l) {
      w += l;
      for (let r = 0; r < c; r++)
        for (let n = 0; n < o; n++) {
          const x = (r * o + n) * 3,
            g = h[r],
            y = Math.max(0, w - 1.05 - n * 0.07),
            k = (1 - Math.exp(-y * 1.15)) * 6.5;
          w < 1.05
            ? ((a[x] = t.x + Math.sin(r) * 0.035),
              (a[x + 1] = Math.max(0, t.y * (w / 1.05) - (r % 24) * 0.06)),
              (a[x + 2] = t.z))
            : ((a[x] = t.x + g.x * k + (t.multi ? ((r % 3) - 1) * 3 : 0)),
              (a[x + 1] =
                t.y +
                g.y * k +
                (t.multi ? (r % 3) * 1.3 : 0) -
                y * y * (t.pattern === "willow" ? 0.7 : 0.37)),
              (a[x + 2] = t.z + g.z * k));
        }
      return (
        (u.attributes.position.needsUpdate = !0),
        (M.opacity = w < 1.05 ? 0.9 : Math.min(1, (5 - w) / 1.8)),
        w >= 5 ? (b(), !1) : !0
      );
    },
  };
}
function q(i, t, e, c) {
  const o = e === "sparkler" ? 72 : 128,
    s = new Float32Array(o * 3),
    a = [];
  for (let u = 0; u < o; u++) {
    const M = (u / o) * Math.PI * 2,
      p = 1 - (2 * u) / o,
      w = Math.sqrt(1 - p * p);
    a.push({ x: Math.cos(M * 8) * w, y: p, z: Math.sin(M * 8) * w });
  }
  const d = new A();
  d.setAttribute("position", new v(s, 3));
  const h = new C({
      color: c,
      map: P(),
      size: e === "sky" ? 0.19 : 0.08,
      transparent: !0,
      opacity: 0.7,
      blending: G,
      depthWrite: !1,
    }),
    m = new S(d, h);
  (m.position.set(t.x, t.y || 0.25, t.z), i.add(m));
  let f = 0;
  return {
    update(u) {
      f += u;
      for (let M = 0; M < o; M++) {
        const p = a[M],
          w = (M / o) * Math.PI * 2 + f * 8;
        let b, l, r;
        if (e === "spiral") {
          const n = (f + M / o) % 1;
          ((b = Math.cos(w) * n * 2),
            (l = 0.12 + Math.sin(w * 3) * 0.1),
            (r = Math.sin(w) * n * 2));
        } else if (e === "sparkler") {
          const n = (f + M / o) % 1;
          ((b = p.x * n * 0.7), (l = 1.2 + p.y * n * 0.7), (r = p.z * n * 0.7));
        } else if (["bomb", "chain", "rooster"].includes(e)) {
          const n = e === "chain" ? (f + (M / o) * 2) % 1.3 : f;
          ((b = p.x * n * 3),
            (l = 0.2 + Math.max(-0.1, p.y * n * 2 - n * n * 0.5)),
            (r = p.z * n * 3));
        } else {
          const n = e === "rocket" || e === "comet",
            x = Math.max(0, f - (n ? 1 : 0)),
            g = e === "sky" ? 4 : 2.7;
          ((b = p.x * x * g),
            (l =
              (n ? Math.min(f, 1) * 10 : e === "sky" ? 0 : 4) +
              p.y * x * g -
              x * x * 0.8),
            (r = p.z * x * g),
            n &&
              f < 1 &&
              ((b = p.x * 0.12),
              (r = p.z * 0.12),
              (l -= (M / o) * (e === "comet" ? 3 : 1))));
        }
        ((s[M * 3] = b), (s[M * 3 + 1] = l), (s[M * 3 + 2] = r));
      }
      return (
        (d.attributes.position.needsUpdate = !0),
        (h.opacity = Math.min(1, 4 - f)),
        f >= 4 ? (i.remove(m), d.dispose(), h.dispose(), !1) : !0
      );
    },
  };
}
function T(i, t) {
  const e = z.cracker.particles,
    c = new Float32Array(e * 3),
    o = [];
  for (let h = 0; h < e; h++)
    o.push({
      angle: Math.random() * Math.PI * 2,
      r: 0.4 + Math.random() * 1.5,
      speed: z.cracker.speed + Math.random() * z.cracker.variation,
      delay: Math.random() * 2,
    });
  const s = new A();
  s.setAttribute("position", new v(c, 3));
  const a = new C({
      map: P(),
      color: z.cracker.color,
      size: z.cracker.size,
      transparent: !0,
      opacity: 1,
      blending: G,
      depthWrite: !1,
    }),
    d = new S(s, a);
  return (
    d.position.set(t.x, 0.2, t.z),
    i.add(d),
    {
      age: 0,
      update(h) {
        this.age += h;
        for (let m = 0; m < e; m++) {
          const f = o[m],
            u = Math.max(0, (this.age - f.delay) % z.cracker.cycle);
          ((c[m * 3] = Math.cos(f.angle) * f.r * u),
            (c[m * 3 + 1] = Math.max(
              0,
              f.speed * u - z.cracker.gravity * 0.5 * u * u,
            )),
            (c[m * 3 + 2] = Math.sin(f.angle) * f.r * u));
        }
        return (
          (s.attributes.position.needsUpdate = !0),
          (a.opacity = Math.min(1, z.cracker.lifetime - this.age)),
          this.age > z.cracker.lifetime
            ? (i.remove(d), s.dispose(), a.dispose(), !1)
            : !0
        );
      },
    }
  );
}
export {
  J as createCracker,
  T as createFountain,
  Q as createNightSky,
  V as createShowBurst,
  L as createSkyBurst,
};
