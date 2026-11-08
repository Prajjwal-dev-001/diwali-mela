import {
  c as fe,
  H as $,
  m as U,
  a as me,
  b as xe,
  u as we,
  d as ge,
  s as Me,
  h as ye,
  g as be,
} from "./haunted-maze-Cj4eYpRq.js";
import { a as ve } from "./camera-BrVRG0n_.js";
import {
  G as j,
  d as H,
  M as L,
  t as q,
  a as P,
  f as ke,
  g as ze,
  Z as Ee,
  B as Y,
  _ as Se,
  $ as Ce,
  V as re,
  S as He,
  m as J,
  a0 as Pe,
  J as Te,
  K as Ae,
  a1 as Ie,
  I as Q,
  O as X,
  n as ne,
  D as se,
  a2 as Ge,
  T as ie,
  C as Be,
  a3 as Oe,
  e as Le,
} from "./world-opFD36TP.js";
function De() {
  if (typeof document > "u") return null;
  const a = document.createElement("canvas");
  a.width = a.height = 256;
  const n = a.getContext("2d");
  ((n.fillStyle = "#9c3f38"), n.fillRect(0, 0, 256, 256));
  for (let z = 0; z < 256; z += 64) {
    ((n.fillStyle = "#27374dcc"),
      n.fillRect(z, 0, 25, 256),
      n.fillRect(0, z, 256, 25),
      (n.fillStyle = "#c79f58aa"));
    for (const D of [35, 40])
      (n.fillRect(z + D, 0, 2, 256), n.fillRect(0, z + D, 256, 2));
  }
  const y = new ke(a);
  return ((y.colorSpace = ze), (y.wrapS = y.wrapT = Ee), y.repeat.set(2, 2), y);
}
function Re() {
  const a = new j(),
    n = new j(),
    y = [],
    z = [],
    D = De(),
    i = new H({ color: 13876411, roughness: 0.75 }),
    b = new H({ color: 12087394, map: D, roughness: 0.95 }),
    E = new H({ color: 2569550, roughness: 0.9 }),
    e = new H({ color: 2236714 }),
    S = new H({ color: 11028009, roughness: 0.95 }),
    T = new H({ color: 13728322, roughness: 0.9 }),
    A = new H({ color: 7811900 }),
    K = new L({ color: 15126445 }),
    F = new L({ color: 9925693 }),
    B = new q(1, 16, 12);
  function l(t, s, c, f, M, r, m, V = a) {
    const C = new P(B, m);
    return (C.position.set(t, s, c), C.scale.set(f, M, r), V.add(C), C);
  }
  function I(t, s, c, f, M, r, m, V = a) {
    const C = new P(new Y(f, M, r), m);
    return (C.position.set(t, s, c), V.add(C), C);
  }
  function g(t, s, c, f = n) {
    const M = new Se(new Ce(t.map((m) => new re(...m))), 12, s, 5, !1),
      r = new P(M, c);
    return (f.add(r), r);
  }
  (l(0, 1.31, 0, 0.44, 0.47, 0.27, b),
    I(0, 0.94, 0, 0.66, 0.18, 0.4, b),
    l(0, 1.76, 0, 0.17, 0.19, 0.17, e));
  for (let t = 0; t < 3; t++)
    l(0, 1.08 + t * 0.17, 0.276, 0.035, 0.035, 0.018, e);
  const W = I(0, 1.49, 0.286, 0.12, 0.39, 0.035, E);
  W.rotation.z = -0.12;
  for (const t of [-1, 1]) {
    const s = new j();
    (s.position.set(t * 0.19, 0.92, 0),
      a.add(s),
      z.push(s),
      l(0, -0.31, 0, 0.17, 0.37, 0.19, E, s),
      l(0, -0.61, 0.015, 0.145, 0.24, 0.16, E, s),
      l(0, -0.79, 0.11, 0.18, 0.12, 0.29, e, s));
    const c = new j();
    (c.position.set(t * 0.37, 1.61, 0), a.add(c), y.push(c));
    const f = l(t * 0.12, -0.24, 0.025, 0.14, 0.36, 0.15, b, c);
    ((f.rotation.z = t * 0.25),
      l(t * 0.2, -0.56, 0.08, 0.13, 0.16, 0.075, i, c));
    for (let M = 0; M < 4; M++)
      l(t * 0.2 + (M - 1.5) * 0.047, -0.68, 0.1, 0.026, 0.085, 0.035, i, c);
    l(t * 0.08, -0.57, 0.15, 0.045, 0.085, 0.05, i, c);
  }
  (n.position.set(0, 2.08, 0), a.add(n), l(0, 0, 0, 0.54, 0.49, 0.44, i, n));
  for (const t of [-1, 1]) l(t * 0.52, -0.01, 0, 0.09, 0.15, 0.08, i, n);
  const O = new P(new q(0.55, 20, 12, 0, Math.PI * 2, 0, 1.27), S);
  ((O.position.y = 0.015), O.scale.set(1, 0.98, 0.85), n.add(O));
  for (let t = 0; t < 9; t++) {
    const s = -0.43 + t * 0.105,
      c = l(
        s,
        0.34 + Math.cos(t * 0.4) * 0.05,
        0.285,
        0.12,
        0.22,
        0.13,
        t % 3 ? S : T,
        n,
      );
    c.rotation.z = -0.55 + t * 0.11;
  }
  for (const t of [-1, 1]) {
    (l(t * 0.2, 0.035, 0.399, 0.155, 0.09, 0.065, K, n),
      l(t * 0.2, 0.025, 0.457, 0.062, 0.069, 0.018, F, n),
      l(t * 0.2, 0.025, 0.474, 0.029, 0.046, 0.012, e, n),
      l(t * 0.185, 0.045, 0.488, 0.012, 0.012, 0.008, K, n),
      g(
        [
          [t * 0.2 - 0.15, 0.12, 0.434],
          [t * 0.2, 0.145, 0.462],
          [t * 0.2 + 0.15, 0.1, 0.434],
        ],
        0.018,
        A,
      ),
      g(
        [
          [t * 0.2 - 0.14, 0.23, 0.405],
          [t * 0.2, 0.275, 0.425],
          [t * 0.2 + 0.12, 0.21, 0.425],
        ],
        0.03,
        A,
      ));
    for (let s = 0; s < 3; s++)
      l(
        t * (0.31 + s * 0.043),
        -0.09 - (s % 2) * 0.025,
        0.363,
        0.009,
        0.009,
        0.008,
        S,
        n,
      );
  }
  return (
    l(0, -0.075, 0.455, 0.064, 0.11, 0.075, i, n),
    g(
      [
        [-0.22, -0.2, 0.392],
        [0, -0.265, 0.449],
        [0.23, -0.16, 0.4],
      ],
      0.025,
      A,
    ),
    g(
      [
        [-0.17, -0.21, 0.411],
        [0, -0.246, 0.46],
        [0.17, -0.19, 0.433],
      ],
      0.009,
      e,
    ),
    (a.userData.kind = "haunted-doll"),
    {
      group: a,
      dispose() {
        D?.dispose();
      },
      update(t, s, c = !1) {
        const f = t * (s ? 10 : 6),
          M = c ? 0.08 : 0.35;
        ((a.position.y = Math.abs(Math.sin(f)) * (c ? 0.005 : 0.025)),
          (n.rotation.z = -0.12 + Math.sin(t * 1.6) * (s ? 0.1 : 0.04)),
          (n.rotation.x = s ? 0.13 : 0),
          (n.rotation.y = Math.sin(t * 0.7) * 0.08),
          z.forEach((r, m) => (r.rotation.x = Math.sin(f + m * Math.PI) * M)),
          y.forEach((r, m) => {
            ((r.rotation.x =
              (s ? -0.65 : -0.12) + Math.sin(f + m * Math.PI) * M * 0.6),
              (r.rotation.z = m ? -0.1 : 0.1));
          }));
      },
    }
  );
}
function Ue({
  audio: a,
  radio: n,
  release: y = () => {},
  onClose: z = () => {},
}) {
  const D = new re();
  let i,
    b,
    E,
    e,
    S = !1,
    T = 0,
    A = -0.04,
    K,
    F,
    B,
    l = [],
    I,
    g,
    W,
    O,
    t = 0,
    s = 0,
    c = 0,
    f = 0;
  const M = matchMedia("(prefers-reduced-motion: reduce)").matches,
    r = (o) => B.querySelector("#" + o);
  function m(o, u = 4) {
    ((r("haunt-message").textContent = o), (s = e.elapsed + u));
  }
  function V() {
    ((i = new He()),
      (i.background = new J(527124)),
      (i.fog = new Pe(1053989, 0.035)),
      (b = new Te(68, innerWidth / innerHeight, 0.06, 60)),
      i.add(b),
      i.add(new Ae(10402259, 3809336, 2.1)));
    const o = $.size * $.cell,
      u = new H({ color: 5523039, roughness: 0.94, map: Ie("plaster") }),
      h = e.grid.flatMap((v, p) => v.flatMap((x, w) => (x ? [[w, p]] : []))),
      G = new Q(new Y($.cell, 3.8, $.cell), u, h.length),
      d = new X();
    (h.forEach(([v, p], x) => {
      const w = U([v, p]);
      (d.position.set(w.x, 1.9, w.z),
        d.updateMatrix(),
        G.setMatrixAt(x, d.matrix),
        G.setColorAt(x, new J(x % 3 === 0 ? 4800596 : 3552580)));
    }),
      i.add(G));
    const k = new P(new ne(o, o), new H({ color: 2697782, roughness: 1 }));
    ((k.rotation.x = -Math.PI / 2), k.position.set(o / 2, 0, o / 2), i.add(k));
    const N = new P(new ne(o, o), new L({ color: 1315615, side: se }));
    ((N.rotation.x = Math.PI / 2),
      N.position.set(o / 2, 3.81, o / 2),
      i.add(N));
    const R = [];
    e.grid.forEach((v, p) =>
      v.forEach((x, w) => {
        x || R.push([w, p]);
      }),
    );
    const _ = new Q(
      new Y($.cell - 0.12, 0.03, $.cell - 0.12),
      new H({ color: 4735309 }),
      R.length,
    );
    (R.forEach((v, p) => {
      const x = U(v);
      (d.position.set(x.x, 0.015, x.z),
        d.updateMatrix(),
        _.setMatrixAt(p, d.matrix),
        _.setColorAt(p, new J(p % 2 ? 4999252 : 4012873)));
    }),
      i.add(_));
    const le = R.filter(([v, p]) => v % 4 === 1 && p % 4 === 1),
      he = new q(0.08, 8, 6),
      de = new L({ color: 11834351 });
    for (const v of le) {
      const p = U(v);
      for (const x of [-1, 1]) {
        const w = new P(he, de);
        (w.position.set(p.x + x * 1.19, 2.6, p.z), i.add(w));
      }
    }
    l = e.runes.map((v, p) => {
      const x = U(v),
        w = new j();
      w.position.set(x.x, 1.35, x.z);
      const ue = new P(
        new Ge(0.3),
        new H({
          color: [11963647, 6677975, 15843186][p],
          emissive: [6438553, 1477506, 10116632][p],
          emissiveIntensity: 2,
        }),
      );
      w.add(ue);
      const pe = new P(new ie(0.47, 0.025, 5, 32), new L({ color: 12969679 }));
      return (w.add(pe), i.add(w), w);
    });
    const te = U(e.exit);
    ((I = new j()), I.position.set(te.x, 0.05, te.z));
    const ae = new P(new ie(0.85, 0.08, 6, 40), new L({ color: 8014454 }));
    ((ae.rotation.x = -Math.PI / 2), I.add(ae));
    const oe = new P(
      new Be(0.9, 0.9, 2.9, 20, 1, !0),
      new L({
        color: 7733185,
        transparent: !0,
        opacity: 0.13,
        side: se,
        depthWrite: !1,
      }),
    );
    ((oe.position.y = 1.45),
      I.add(oe),
      i.add(I),
      (g = new Q(new q(0.1, 6, 4), new L({ color: 9106911 }), $.size ** 2)),
      (g.count = 0),
      (g.frustumCulled = !1),
      i.add(g),
      (E = Re()),
      i.add(E.group),
      (W = new Oe(15983818, 110, 22, Math.PI / 4, 0.65, 1.3)),
      (O = new X()),
      i.add(W, O),
      (W.target = O),
      (B = document.createElement("section")),
      (B.id = "haunted-ui"),
      (B.innerHTML =
        '<div class="haunt-top"><div><small>BHOOT BANGLA · SOLO MAZE</small><strong id="haunt-progress"></strong></div><button id="haunt-leave">Bahar niklo · Esc</button></div><p id="haunt-message" role="status" aria-live="polite"></p><button id="haunt-hint">Raasta hint</button><button id="haunt-action" hidden></button><div id="haunt-result" hidden><small>BHOOT BANGLA SE BACH NIKLE!</small><h2>Darr ke aage… mela hai.</h2><p id="haunt-score"></p><button id="haunt-return">Mele mein wapas</button><button id="haunt-again">Ek aur round</button></div>'),
      document.body.append(B),
      (r("haunt-leave").onclick = Z),
      (r("haunt-return").onclick = Z),
      (r("haunt-again").onclick = () => {
        (Z(), C());
      }),
      (r("haunt-action").onclick = ee),
      (r("haunt-hint").onclick = ce));
  }
  function C() {
    S ||
      ((e = fe()),
      (T = Math.PI),
      (A = -0.04),
      (t = 0),
      (c = 0),
      (f = 0),
      (K = a.music),
      (F = a.theme),
      a.stopSpeech(),
      a.setMusic(!1),
      a.setTheme("haunt"),
      a.setMusic(!0),
      n?.start(),
      y(),
      V(),
      (S = !0),
      document.body.classList.add("haunted-active"),
      m(
        "Teen chamakte taaveez dhoondho. E / button se uthao. Phir hara exit kholo. Pakde gaye toh taaveez saath rahenge.",
        10,
      ),
      a.action("haunt-door"));
  }
  function Z() {
    if (!S) return;
    ((S = !1),
      y(),
      document.body.classList.remove("haunted-active"),
      B.remove());
    const o = new Set(),
      u = new Set();
    (i.traverse((h) => {
      ((h.isInstancedMesh || h.isLight) && h.dispose?.(),
        h.geometry && o.add(h.geometry),
        h.material && u.add(h.material));
    }),
      o.forEach((h) => h.dispose()),
      u.forEach((h) => h.dispose()),
      E.dispose(),
      (i = null),
      a.setMusic(!1),
      a.setTheme(F),
      a.setMusic(K),
      z());
  }
  function ce() {
    const o = e.runes.find((G, d) => !e.collected.includes(d)) || e.exit,
      u = me(e.grid, xe(e.player), o),
      h = new X();
    ((g.count = u.length),
      u.forEach((G, d) => {
        const k = U(G);
        (h.position.set(k.x, 0.12, k.z),
          h.updateMatrix(),
          g.setMatrixAt(d, h.matrix));
      }),
      (g.instanceMatrix.needsUpdate = !0),
      (t = e.elapsed + 7),
      m("Neeli roshni ka raasta follow karo · hint 7 seconds ke liye hai."));
  }
  function ee() {
    if (!S || e.won) return;
    const o = we(e);
    (o === "rune" &&
      (a.chime(),
      m(
        e.collected.length === 3
          ? "Teeno mil gaye! Ab hara exit dhoondho."
          : "Taaveez mil gaya. Bhoot ko tumhari khabar ho gayi…",
      ),
      (g.count = 0)),
      o === "locked" && m("Exit band hai. Pehle teeno taaveez chahiye."),
      o === "win" &&
        (y(),
        a.chime(),
        (r("haunt-result").hidden = !1),
        (r("haunt-score").textContent =
          `${Math.floor(e.elapsed / 60)}m ${Math.floor(e.elapsed % 60)}s · ${e.caught} baar pakde gaye · Koi game paise nahi kate.`),
        r("haunt-return").focus()));
  }
  return {
    get active() {
      return S;
    },
    get scene() {
      return i;
    },
    get camera() {
      return b;
    },
    open: C,
    close: Z,
    interact: ee,
    look(o, u) {
      ((T -= o * 0.005), (A = Le.clamp(A - u * 0.003, -1.05, 1.05)));
    },
    update(o, u) {
      if (!S) return;
      if (
        ((b.aspect = innerWidth / innerHeight),
        b.updateProjectionMatrix(),
        !e.won)
      ) {
        const d = Math.max(1, Math.hypot(u.x, u.z)),
          k = u.run ? 4.7 : 3.3,
          N = u.x / d,
          R = u.z / d;
        (ge(
          e,
          (N * Math.cos(T) + R * Math.sin(T)) * k,
          (-N * Math.sin(T) + R * Math.cos(T)) * k,
          o,
        ),
          Me(e, o) === "caught" &&
            (y(),
            (T = Math.PI),
            (A = -0.04),
            m("Pakad liya! Entrance par wapas. Tumhare taaveez safe hain.", 5),
            a.action("haunt-caught")));
      }
      (ve(b, e.player, T, A),
        W.position.copy(b.position),
        O.position
          .copy(b.position)
          .add(b.getWorldDirection(D).multiplyScalar(8)),
        (E.group.position.x = e.ghost.x),
        (E.group.position.z = e.ghost.z),
        (E.group.rotation.y = Math.atan2(
          e.player.x - e.ghost.x,
          e.player.z - e.ghost.z,
        )),
        E.update(e.elapsed, e.mode === "chase", M),
        l.forEach((d, k) => {
          ((d.visible = !e.collected.includes(k)),
            (d.rotation.y = e.elapsed * 0.7),
            (d.position.y = 1.35 + Math.sin(e.elapsed * 2 + k) * 0.1));
        }),
        I.children[0].material.color.setHex(
          e.collected.length === 3 ? 9306042 : 8014454,
        ),
        e.elapsed > t && (g.count = 0),
        (r("haunt-progress").textContent =
          `${e.collected.length}/3 taaveez · ${e.mode === "chase" ? "BHOOT PEECHHE HAI!" : "Exit dhoondho"}`));
      const h = ye(e),
        G = r("haunt-action");
      if (
        ((G.hidden = !h || e.won),
        (G.textContent =
          h?.type === "rune"
            ? "Taaveez uthao · E"
            : e.collected.length === 3
              ? "Exit kholo · E"
              : "Exit · 3 taaveez chahiye"),
        e.elapsed > s &&
          (r("haunt-message").textContent =
            e.mode === "chase"
              ? "Daudo! Mod lo, bhoot ko chakkar do."
              : "WASD / joystick · Drag karke dekho · Shift / Daudo"),
        (c -= o),
        c <= 0 &&
          e.mode === "chase" &&
          !e.won &&
          (a.action("haunt-heart"), (c = 1.1)),
        (f -= o),
        f <= 0 && !e.won)
      ) {
        const d = be(
          Math.hypot(e.player.x - e.ghost.x, e.player.z - e.ghost.z),
        );
        (d > 0 && a.action("haunt-footstep", d),
          (f = e.mode === "chase" ? 0.4 : 0.65));
      }
    },
  };
}
export { Re as createGhost, Ue as createHauntedHouse };
