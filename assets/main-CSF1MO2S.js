const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/night-Drgva5Cr.js",
      "assets/props-CZn3-sgP.js",
      "assets/world-opFD36TP.js",
      "assets/festival-config-DMHGmm_6.js",
      "assets/config-CTwGFHgE.js",
      "assets/home-hWfNhUWk.js",
      "assets/decoration-design-CXH-cYhj.js",
      "assets/devotional-art-Cgam9lAy.js",
      "assets/environment-Dqc8w8Lp.js",
      "assets/neighborhood-CAU_uSHL.js",
      "assets/market-Dm7FxW9c.js",
      "assets/market-premium-DD7UHeMR.js",
      "assets/game-modes-qJzg1Wyo.js",
      "assets/haunted-maze-Cj4eYpRq.js",
      "assets/haunted-house-CyySmTRI.js",
      "assets/camera-BrVRG0n_.js",
      "assets/haunted-house-BOvsPoHT.css",
    ]),
) => i.map((i) => d[i]);
import { _ as Ne } from "./index-DLvhSTnY.js";
import { i as fe, G as Za, p as xt, a as Ao } from "./game-modes-qJzg1Wyo.js";
import {
  b as zo,
  D as Ft,
  O as ke,
  C as Rn,
  a as Z,
  v as la,
  M as re,
  F as $n,
} from "./config-CTwGFHgE.js";
import {
  c as jn,
  R as Dn,
  C as Nt,
  M as Ot,
  D as ta,
  G as Se,
  a as Qe,
  b as Xa,
  V as se,
  Q as Nn,
  O as On,
  S as Bn,
  I as Hn,
  B as lt,
  d as Ja,
  e as Et,
  T as _a,
  f as Qa,
  g as ca,
  h as Fn,
  i as Wn,
  j as St,
  k as ct,
  l as La,
  P as Ra,
  m as et,
  A as Vt,
  n as Co,
  L as Gn,
  o as Un,
  p as Eo,
  q as Io,
  r as To,
  E as Po,
  s as _o,
  t as Vn,
  u as Lo,
  v as Ro,
  w as $a,
  x as $o,
  y as en,
  W as jo,
  z as Do,
  F as No,
  H as Oo,
  J as Kn,
  K as Bo,
  N as Ho,
  U as Fo,
  X as Wo,
} from "./world-opFD36TP.js";
import { c as ua, a as Go, b as Uo } from "./props-CZn3-sgP.js";
import { c as Vo } from "./market-premium-DD7UHeMR.js";
import { createShowBurst as Yn } from "./night-Drgva5Cr.js";
import { H as Ko } from "./haunted-maze-Cj4eYpRq.js";
import {
  D as cn,
  d as Yo,
  a as ya,
  v as qn,
} from "./decoration-design-CXH-cYhj.js";
import {
  C as gt,
  a as ze,
  N as Zn,
  R as ja,
  b as qo,
} from "./festival-config-DMHGmm_6.js";
import { a as Zo } from "./camera-BrVRG0n_.js";
function Xo({ stop: e, onLeave: t = () => {} }) {
  let a = null;
  const o = () => {
    a && ((a = null), e(), t());
  };
  return {
    set(n) {
      a = n ? { ...n } : null;
    },
    clear: o,
    update(n) {
      a &&
        (n.zone !== a.zone ||
          Math.hypot(n.x - a.x, n.z - a.z) > (a.radius || 4)) &&
        o();
    },
  };
}
function Xn(e, t) {
  const a = zo(t),
    o = `${a.role}:${t?.outfit || "everyday"}`;
  if (e.appearanceKey === o) return;
  const n = jn(a.role, a.colour, a.style);
  (e.group.remove(e.pose),
    e.dispose?.(),
    e.group.add(n.pose),
    (e.group.userData.role = a.role));
  for (const r of ["pose", "head", "torso", "arms", "legs", "dispose"])
    e[r] = n[r];
  e.appearanceKey = o;
}
function ea(e, t = !1) {
  return `<svg viewBox="0 0 80 92" aria-hidden="true"><path fill="#c08b68" d="M30 7h20v18H30z"/><path fill="#292325" d="M28 15V7Q40-5 52 7v8l-6-7-16 4z"/>${t ? '<path fill="#292325" d="M28 10h6v30h-8zM46 10h6l2 30h-8z"/>' : ""}<path fill="${e}" d="M26 24h28l14 18-9 7-7-9 ${t ? "12 40H16l12-40" : "v30H28V40"}l-7 9-9-7z"/><path fill="#f2cf84" d="M38 26h4v38h-4z"/><path fill="#e3d0ac" d="M29 70h8v17h-8zM43 70h8v17h-8z"/></svg>`;
}
function Jo({ state: e, showPanel: t, act: a, onPreview: o, first: n = !1 }) {
  let r = { ...(e.avatar || Ft) };
  const b = Object.keys(ke).filter(
    (d) => !ke[d].gender || ke[d].gender === r.gender,
  );
  t(
    `<section class="avatar-picker"><span class="eyebrow">APNA CHARACTER · APNI DIWALI</span><h2>${n ? "Mele mein kaun banoge?" : "Apna look chuno"}</h2><p>Boy ya girl chuno. Baad mein Bag → Kapde aur character se badal sakte ho.</p><div class="avatar-genders"><button data-gender="boy">${ea("#398f85")}<strong>Boy</strong></button><button data-gender="girl">${ea("#d06e9d", !0)}<strong>Girl</strong></button></div><div id="avatar-preview" class="avatar-look" aria-live="polite"></div>${n ? "" : `<h3>Apne kapde</h3><div class="outfit-grid">${b.map((d) => `<button data-outfit="${d}">${ke[d].name}</button>`).join("")}</div><p>Seema Boutique, Diwali Bazaar mein aur kapde milenge. ${fe(e) ? "Is mode mein saare kapde free hain." : "Sirf game ke paise lagte hain."}</p>`}<div class="avatar-actions"><button id="avatar-wear" class="primary">${n ? "Chalo, Diwali shuru karein!" : "Yeh look pehno"}</button>${n ? "" : '<button id="avatar-look" class="secondary">3D mein apna look dekho</button>'}</div>${Rn}</section>`,
  );
  const i = () => {
    (document
      .querySelectorAll("[data-gender]")
      .forEach((s) =>
        s.setAttribute("aria-pressed", String(s.dataset.gender === r.gender)),
      ),
      document
        .querySelectorAll("[data-outfit]")
        .forEach((s) =>
          s.setAttribute("aria-pressed", String(s.dataset.outfit === r.outfit)),
        ));
    const d = ke[r.outfit];
    document.getElementById("avatar-preview").innerHTML =
      ea(
        "#" + d.colour.toString(16).padStart(6, "0"),
        r.gender === "girl" || d.style === "lehenga",
      ) + `<strong>${d.name}</strong>`;
  };
  (document.querySelectorAll("[data-gender]").forEach(
    (d) =>
      (d.onclick = () => {
        ((r.gender = d.dataset.gender), i());
      }),
  ),
    document.querySelectorAll("[data-outfit]").forEach(
      (d) =>
        (d.onclick = () => {
          ((r.outfit = d.dataset.outfit), i());
        }),
    ));
  const l = () => {
    (a({ type: "setAvatar", avatar: r }),
      document.getElementById("panel").close());
  };
  ((document.getElementById("avatar-wear").onclick = l),
    document.getElementById("avatar-look") &&
      (document.getElementById("avatar-look").onclick = () => {
        (l(), o());
      }),
    i());
}
function Jn(e, t = !1) {
  if (!e.crackerLesson?.started) return "start";
  if (e.crackerLesson.done) return "done";
  const a = e.placedCrackers.find((o) => o.uid === e.crackerLesson.uid);
  return a ? (a.litAt ? "distance" : "light") : t ? "place" : "bag";
}
const aa = {
  bag: "Bag kholo → patakha chuno → “Haath mein lo” dabao. Practice ka patakha tumhare bag mein hai.",
  place: "Khuli jagah dekho. “Yahan rakho” dabakar patakha zameen par rakho.",
  light: "Rakh diye patakhe ke paas jao aur “Jalao” dabao.",
  distance: "Ab kam se kam 3.5 metre peeche hato. Door se apna patakha dekho!",
  done: "Pehla patakha poora! Ab Bag se apne baaki patakhe bhi chala sakte ho.",
};
function Qo(e, t) {
  if (fe(e)) return [];
  const a = (n, r) => ({ id: n, zone: r });
  if (
    e.zone === "neighborhood" &&
    e.crackerLesson?.started &&
    !e.crackerLesson.done
  ) {
    const n = e.placedCrackers.find((r) => r.uid === e.crackerLesson.uid);
    return n
      ? n.litAt
        ? []
        : [{ id: "lesson-cracker", zone: "neighborhood", x: n.x, z: n.z }]
      : [a("cracker-lesson", "neighborhood")];
  }
  let o = [];
  return (
    t === 0 &&
      (o = e.started
        ? Z.chores
            .filter((n) => !e.cleaned.includes(n.id))
            .map((n) => a(n.id, "home"))
        : [a("mother", "home")]),
    t === 1 && (o = [a("mother", "home")]),
    t === 2 &&
      (o = e.papaStarted
        ? Z.searches
            .filter((n) => !e.searched.includes(n.id))
            .map((n) => a(n.id, "home"))
        : [a("papa", "home")]),
    t === 3 && (o = [a("untangle", "home")]),
    t === 4 &&
      (o = [
        ...new Set(
          ["diyas", "lights", "rangoli"]
            .filter((n) => !e.inventory[n] && !e.decorations.includes(n))
            .map((n) => Z.products[n].stall),
        ),
      ].map((n) => a("shop" + n, "market"))),
    t === 5 &&
      (o = ["diyas", "lights", "rangoli"]
        .filter((n) => !e.decorations.includes(n))
        .map((n) => a(n, "home"))),
    t === 7 && (o = [a("mandir", "home")]),
    t === 8 && (o = [a("colony-fireworks", "neighborhood")]),
    e.soanStarted &&
      !e.soanReturned &&
      o.push(
        ...(e.delivered.length === 3
          ? [a("doorbell", "home")]
          : ["sharma", "mehta", "verma"]
              .filter((n) => !e.delivered.includes(n))
              .map((n) => a(n, "neighborhood"))),
      ),
    e.anshikaStarted && !e.anshikaDone && o.push(a("anshika", "neighborhood")),
    o
  );
}
function ei(e) {
  const t = new Dn(0.58, 0.88, 32),
    a = new Nt(0.78, 0.78, 1.35, 24, 1, !0),
    o = new Ot({
      color: 16722237,
      side: ta,
      transparent: !0,
      opacity: 0.8,
      depthWrite: !1,
    }),
    n = new Ot({
      color: 16721208,
      side: ta,
      transparent: !0,
      opacity: 0.14,
      depthWrite: !1,
    }),
    r = Array.from({ length: 8 }, () => {
      const b = new Se(),
        i = new Qe(t, o),
        l = new Qe(a, n);
      return (
        (i.rotation.x = -Math.PI / 2),
        (l.position.y = 0.67),
        b.add(i, l),
        (b.visible = !1),
        e.add(b),
        b
      );
    });
  return {
    update(b, i, l, d) {
      const s = Qo(b, i),
        f = s
          .filter((p) => p.zone === b.zone)
          .map((p) =>
            Number.isFinite(p.x) ? p : l.targets.find((g) => g.id === p.id),
          )
          .filter(Boolean);
      if (!f.length && s.length) {
        const p = s[0].zone,
          g = l.targets.find(
            (w) =>
              w.type === "portal" &&
              (w.destination === p || w.destination === "neighborhood"),
          );
        g && f.push(g);
      }
      r.forEach((p, g) => {
        const w = f[g];
        ((p.visible = !!w),
          w &&
            (p.position.set(w.x, 0.18, w.z),
            p.scale.setScalar(1 + Math.sin(d * 2 + g) * 0.045)));
      });
    },
  };
}
function ti({
  x: e,
  y: t,
  width: a,
  height: o,
  viewportWidth: n,
  viewportHeight: r,
  obstacle: b,
  obstacles: i = [],
}) {
  const d = Math.max(8, n - a - 8),
    s = Math.max(8, r - o - 8),
    f = (c) => ({
      x: Math.max(8, Math.min(d, c.x)),
      y: Math.max(8, Math.min(s, c.y)),
    }),
    p = [...i, ...(b ? [b] : [])],
    g = f({ x: e, y: t }),
    w = (c) =>
      p.some(
        (h) =>
          c.x < h.right + 8 &&
          c.x + a > h.left - 8 &&
          c.y < h.bottom + 8 &&
          c.y + o > h.top - 8,
      );
  return (
    (w(g) &&
      p
        .flatMap((c) => [
          { x: c.left - a - 8, y: g.y },
          { x: c.right + 8, y: g.y },
          { x: g.x, y: c.top - o - 8 },
          { x: g.x, y: c.bottom + 8 },
        ])
        .map(f)
        .filter((c) => !w(c))
        .sort(
          (c, h) => Math.hypot(c.x - e, c.y - t) - Math.hypot(h.x - e, h.y - t),
        )[0]) ||
    g
  );
}
function ai({ dock: e, avoid: t }) {
  const a = e.querySelector(".radio-heading"),
    o = a.querySelector("small"),
    n = document.createElement("button");
  ((n.id = "radio-drag"),
    (n.type = "button"),
    (n.textContent = "⠿ MELA RADIO"),
    (n.title = "Drag to move · Arrow keys move · Home resets"),
    n.setAttribute(
      "aria-label",
      "Radio ghumao. Drag karo ya arrow keys use karo. Home se reset.",
    ),
    o.replaceWith(n));
  const r = e.querySelector(".radio-volume"),
    b = document.createElement("button");
  ((b.id = "radio-volume-toggle"),
    (b.type = "button"),
    (b.textContent = "♫"),
    b.setAttribute("aria-label", "Radio volume"),
    b.setAttribute("aria-expanded", "false"),
    (r.hidden = !0),
    r.before(b),
    (b.onclick = () => {
      ((r.hidden = !r.hidden),
        b.setAttribute("aria-expanded", String(!r.hidden)));
    }));
  const i = ["mission", "joystick", "interact", "sprint", "mobile-map"]
    .map((c) => document.getElementById?.(c))
    .filter(Boolean);
  let l = null,
    d = null,
    s = null;
  function f() {
    return { width: window.innerWidth, height: window.innerHeight };
  }
  function p(c) {
    if (e.hidden || !e.offsetWidth) return;
    const h = f(),
      S = t?.getBoundingClientRect();
    ((l = ti({
      ...c,
      width: e.offsetWidth,
      height: e.offsetHeight,
      viewportWidth: h.width,
      viewportHeight: h.height,
      obstacle: S?.width ? S : null,
      obstacles: i
        .map((N) => N.getBoundingClientRect())
        .filter((N) => N.width && N.height),
    })),
      (e.style.left = l.x + "px"),
      (e.style.top = l.y + "px"),
      (e.style.right = "auto"),
      (e.style.bottom = "auto"),
      (d = {
        x: l.x / Math.max(1, h.width - e.offsetWidth),
        y: l.y / Math.max(1, h.height - e.offsetHeight),
      }));
  }
  function g(c = !1) {
    if (e.hidden || !e.offsetWidth) return;
    const h = f(),
      S =
        h.width < 600
          ? { x: h.width - e.offsetWidth - 12, y: 160 }
          : h.width < 1e3
            ? { x: (h.width - e.offsetWidth) / 2, y: 64 }
            : { x: h.width - e.offsetWidth - 215, y: 86 };
    p(
      l
        ? c && d
          ? {
              x: d.x * (h.width - e.offsetWidth),
              y: d.y * (h.height - e.offsetHeight),
            }
          : l
        : S,
    );
  }
  function w(c) {
    !s ||
      c.pointerId !== s.id ||
      ((s = null),
      e.classList.remove("radio-dragging"),
      n.hasPointerCapture?.(c.pointerId) &&
        n.releasePointerCapture(c.pointerId));
  }
  (n.addEventListener("pointerdown", (c) => {
    if (c.button !== 0 || s) return;
    (c.preventDefault(), c.stopPropagation());
    const h = e.getBoundingClientRect();
    ((s = { id: c.pointerId, x: c.clientX - h.left, y: c.clientY - h.top }),
      n.setPointerCapture(c.pointerId),
      e.classList.add("radio-dragging"));
  }),
    n.addEventListener("pointermove", (c) => {
      !s ||
        c.pointerId !== s.id ||
        (c.preventDefault(),
        c.stopPropagation(),
        p({ x: c.clientX - s.x, y: c.clientY - s.y }));
    }));
  for (const c of ["pointerup", "pointercancel", "lostpointercapture"])
    n.addEventListener(c, w);
  (n.addEventListener("keydown", (c) => {
    if (
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home"].includes(
        c.key,
      )
    )
      return;
    if ((c.preventDefault(), c.stopPropagation(), c.key === "Home")) {
      ((l = null), (d = null), g());
      return;
    }
    const h = e.getBoundingClientRect(),
      S = c.shiftKey ? 32 : 12;
    p({
      x: h.left + (c.key === "ArrowLeft" ? -S : c.key === "ArrowRight" ? S : 0),
      y: h.top + (c.key === "ArrowUp" ? -S : c.key === "ArrowDown" ? S : 0),
    });
  }),
    window.addEventListener("resize", () => g(!0)),
    window.addEventListener("blur", () => {
      ((s = null), e.classList.remove("radio-dragging"));
    }));
  const u = new ResizeObserver(() => g());
  u.observe(e);
  for (const c of i) u.observe(c);
  (t && u.observe(t),
    new MutationObserver(() => g()).observe(e, {
      attributes: !0,
      attributeFilter: ["hidden"],
    }),
    g());
}
const un = "diwali-mela-commerce-receipts-v1",
  Kt = {
    guide: { title: "Game Creator Kit", price: 999 },
    prompts: { title: "AI Prompt Pack", price: 249 },
    ravan: { title: "Ravan Ultimate", price: 199 },
    name: { title: "Name in the Sky", price: 79 },
    sky: { title: "Sky Blast", price: 49 },
    laddoo: { title: "Laddoo Cannon", price: 39 },
  },
  dn = [21, 51, 101],
  ga = (e) =>
    String(e).replace(
      /[&<>"']/g,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[t],
    ),
  ba = (e) =>
    typeof e == "string" &&
    e.length >= 40 &&
    e.length <= 8192 &&
    /^[A-Za-z0-9_-]+(?:\.[A-Za-z0-9_-]+){1,2}$/.test(e);
let hn;
function ni() {
  return globalThis.window?.Razorpay
    ? Promise.resolve(window.Razorpay)
    : (hn ||= new Promise((e, t) => {
        const a = document.createElement("script");
        ((a.src = "https://checkout.razorpay.com/v1/checkout.js"),
          (a.async = !0));
        const o = () => {
            (clearTimeout(n),
              (hn = null),
              a.remove(),
              t(Error("Secure checkout abhi load nahi hua. Dobara try karo.")));
          },
          n = setTimeout(o, 15e3);
        ((a.onload = () => {
          (clearTimeout(n), window.Razorpay ? e(window.Razorpay) : o());
        }),
          (a.onerror = o),
          document.head.append(a));
      }));
}
function oi({
  showPanel: e = () => {},
  notify: t = () => {},
  onUnlock: a = () => {},
  fetchImpl: o = globalThis.fetch,
  checkoutLoader: n = ni,
  storage: r,
  apiBase: b = "",
} = {}) {
  if (r === void 0)
    try {
      r = globalThis.localStorage;
    } catch {}
  let i = { available: !1, mode: null, keyId: null },
    l = !1,
    d = null;
  const s = new Set(),
    f = new Set(),
    p = new Map(),
    g = new Map(),
    w = (v) => globalThis.document?.getElementById(v),
    u = () => {
      try {
        r?.setItem(un, JSON.stringify([...s].slice(-16)));
      } catch {
        s.size &&
          t(
            "Receipt is browser mein save nahi hui. Is tab ko abhi khula rakhein.",
          );
      }
    };
  try {
    const v = JSON.parse(r?.getItem(un) || "[]");
    Array.isArray(v) &&
      v
        .filter(ba)
        .slice(-16)
        .forEach((m) => s.add(m));
  } catch {}
  async function c(v, m, M, I) {
    const D = new AbortController(),
      W = setTimeout(() => D.abort(), 2e4);
    W.unref?.();
    try {
      const _ = await o(`${b}/api/${v}?action=${encodeURIComponent(m)}`, {
        method: M === void 0 ? "GET" : "POST",
        headers: {
          ...(M === void 0 ? {} : { "Content-Type": "application/json" }),
          ...(I ? { Authorization: `Bearer ${I}` } : {}),
        },
        ...(M === void 0 ? {} : { body: JSON.stringify(M) }),
        signal: D.signal,
        credentials: "same-origin",
      });
      let x;
      try {
        x = await _.json();
      } catch {
        throw Error(
          "Payment service abhi available nahi hai. Thodi der baad try karein.",
        );
      }
      if (!_.ok) {
        const L = Error(
          typeof x.error == "string"
            ? x.error
            : "Request poori nahi hui. Dobara try karein.",
        );
        throw ((L.status = _.status), L);
      }
      return x;
    } finally {
      clearTimeout(W);
    }
  }
  function h(v) {
    return (
      v?.verified === !0 &&
      v.mode === i.mode &&
      ba(v.entitlementToken) &&
      Array.isArray(v.productIds) &&
      v.productIds.length > 0 &&
      v.productIds.every((m) => Object.hasOwn(Kt, m))
    );
  }
  function S(v, m = !1) {
    if (!h(v))
      throw Error(
        "Payment confirmation abhi pending hai. Agar paise kat gaye hain, dobara pay na karein.",
      );
    s.add(v.entitlementToken);
    for (const M of v.productIds) (f.add(M), p.set(M, v));
    return (u(), m && a({ productIds: [...v.productIds], mode: v.mode }), v);
  }
  async function N() {
    return (
      d ||
      (i.available
        ? T()
        : ((d = (async () => {
            try {
              const v = await c("market", "config");
              if (
                ((i = {
                  available:
                    v.ready === !0 &&
                    /^rzp_(live|test)_[A-Za-z0-9]+$/.test(v.keyId || ""),
                  mode: ["live", "test"].includes(v.mode) ? v.mode : null,
                  keyId: v.keyId || null,
                }),
                i.available)
              )
                for (const m of [...s])
                  try {
                    S(await c("market", "entitlements", void 0, m));
                  } catch (M) {
                    (M.status === 401 || M.status === 403) && s.delete(m);
                  }
              u();
            } catch {
              i = { available: !1, mode: null, keyId: null };
            }
            return T();
          })().finally(() => (d = null))),
          d))
    );
  }
  function T() {
    return { ...i, owned: [...f], busy: l };
  }
  function R(v) {
    w("commerce-status") ? (w("commerce-status").textContent = v) : t(v);
  }
  function B(v, m, M = "") {
    e(
      `<section class="commerce-panel"><span class="eyebrow">DIWALI MELA · SECURE CHECKOUT</span><h2>${ga(v)}</h2><p id="commerce-status" role="status" aria-live="polite">${ga(m)}</p><div class="commerce-actions">${M}</div><small>Real payment · Game ke wallet se alag${i.mode === "test" ? " · TEST MODE: koi real charge nahi" : ""}</small></section>`,
    );
  }
  function G(v) {
    (B(
      i.mode === "test"
        ? "Test payment verify ho gayi"
        : "Payment verify ho gayi",
      "Shukriya! Aapka unlock server ne confirm kar diya.",
      v.productIds
        .filter((m) => ["guide", "prompts"].includes(m))
        .map(
          (m) =>
            `<button class="primary" data-commerce-download="${m}">${ga(Kt[m].title)} download karo</button>`,
        )
        .join(""),
    ),
      globalThis.document
        ?.querySelectorAll?.("[data-commerce-download]")
        .forEach((m) => (m.onclick = () => O(m.dataset.commerceDownload))));
  }
  async function H(v, m, M) {
    const {
        razorpay_order_id: I,
        razorpay_payment_id: D,
        razorpay_signature: W,
      } = M,
      _ = await c("market", "verify", {
        productId: v,
        sessionId: m,
        razorpay_order_id: I,
        razorpay_payment_id: D,
        razorpay_signature: W,
      });
    return S(_, !0);
  }
  async function $(v, m, M) {
    if (l) return (t("Ek checkout pehle se khula hai."), !1);
    l = !0;
    const I = Kt[m],
      D = v === "market" ? m : `support-${M}`;
    let W = g.get(D);
    (W || ((W = { id: crypto.randomUUID(), amount: M * 100 }), g.set(D, W)),
      B(
        v === "market" ? I.title : "Creator ko support karo",
        "Secure checkout khul raha hai…",
      ));
    try {
      if ((await N(), !i.available))
        throw Error(
          "Online checkout abhi available nahi hai. Thodi der baad dobara try karein.",
        );
      if (v === "market" && f.has(m)) return ((l = !1), G(p.get(m)), !0);
      const _ = await n(),
        x = await c(
          v,
          "order",
          v === "market" ? { productId: m, sessionId: W.id } : W,
        );
      if (x.paid && v === "market" && h(x)) {
        const j = S(x, !0);
        return ((l = !1), g.delete(D), G(j), !0);
      }
      if (x.paid && v === "support")
        return (
          (l = !1),
          g.delete(D),
          B(
            "Shukriya!",
            "Yeh support payment pehle se recorded hai. Isse koi paid product unlock nahi hota.",
          ),
          !0
        );
      if (x.paid)
        throw Error(
          "Payment recorded hai, confirmation abhi pending hai. Dobara payment na karein.",
        );
      const L = x.keyId || x.key;
      if (
        !/^order_[A-Za-z0-9]+$/.test(x.order_id || "") ||
        L !== i.keyId ||
        x.currency !== "INR" ||
        x.amount !== M * 100
      )
        throw Error("Checkout details match nahi hui. Dobara try karein.");
      let F = !1,
        Y = !1;
      const U = async (j) => {
          if (!(F || Y)) {
            ((Y = !0), R("Payment verify ho rahi hai…"));
            try {
              if (v === "market") {
                const C = await H(m, W.id, j);
                ((F = !0), g.delete(D), G(C));
              } else {
                const C = await c("support", "verify", j);
                if (C.paid !== !0 || C.mode !== i.mode)
                  throw Error(
                    "Support confirmation pending hai. Agar paise kat gaye hain, dobara pay na karein.",
                  );
                ((F = !0),
                  g.delete(D),
                  B(
                    "Shukriya!",
                    i.mode === "test"
                      ? "Test support confirm hua. Koi real payment collect nahi hui."
                      : "Aapki creator support verify ho gayi. Isse paid products unlock nahi hote.",
                  ));
              }
            } catch (C) {
              (B(
                "Confirmation pending",
                C.message,
                '<button id="commerce-confirm-retry" class="primary">Confirmation dobara check karo</button>',
              ),
                w("commerce-confirm-retry") &&
                  (w("commerce-confirm-retry").onclick = () => U(j)));
            } finally {
              ((Y = !1), (l = !1));
            }
          }
        },
        te = new _({
          key: L,
          order_id: x.order_id,
          amount: x.amount,
          currency: x.currency,
          name: "Diwali Mela",
          description:
            v === "market"
              ? I.title
              : "Optional creator support · No product unlock",
          theme: { color: "#24544a" },
          timeout: 900,
          handler: U,
          modal: {
            ondismiss: () => {
              F ||
                Y ||
                ((l = !1),
                B(
                  "Checkout band hua",
                  "Koi unlock abhi confirm nahi hua. Agar payment processing mein hai, dobara pay na karein.",
                  '<button id="commerce-retry" class="secondary">Checkout dobara kholo</button>',
                ),
                (w("commerce-retry").onclick = () => $(v, m, M)));
            },
          },
        });
      return (
        te.on?.("payment.failed", () =>
          t(
            "Payment complete nahi hua. Checkout mein dobara try kar sakte hain.",
          ),
        ),
        w("panel")?.close(),
        te.open(),
        !0
      );
    } catch (_) {
      return (
        (l = !1),
        B(
          "Checkout abhi nahi khula",
          _.message,
          `<button id="commerce-retry" class="secondary">Dobara try karo</button>${v === "support" ? '<button id="commerce-show-qr" class="secondary">UPI QR dekho</button>' : ""}`,
        ),
        w("commerce-retry") && (w("commerce-retry").onclick = () => $(v, m, M)),
        w("commerce-show-qr") && (w("commerce-show-qr").onclick = () => A(M)),
        !1
      );
    }
  }
  async function P(v) {
    return ["guide", "prompts"].includes(v)
      ? f.has(v)
        ? (t("Yeh product pehle se unlocked hai."), p.has(v) && G(p.get(v)), !0)
        : $("market", v, Kt[v].price)
      : (t(
          "Yeh game item missions ke game paise se milta hai. Asli payment nahi lagti.",
        ),
        !1);
  }
  function A(v = 49) {
    (e(
      `<section class="commerce-panel commerce-support"><span class="eyebrow">OPTIONAL CREATOR SUPPORT</span><h2>Mela pasand aaya?</h2><p>Creator ko ek baar support kar sakte hain. Yeh mandir ka fictional daan nahi hai aur paid products unlock nahi karta.</p><div class="commerce-actions">${dn.map((m) => `<button class="primary" data-commerce-support="${m}">₹${m} support karo</button>`).join("")}</div><p id="commerce-status" role="status">${dn.includes(Number(v)) ? `₹${Number(v)} ka secure option upar chuno.` : "Apni marzi ka amount QR se bhej sakte hain."}</p><details><summary>UPI QR se koi bhi amount</summary><img class="commerce-qr" src="/art/creator-support-qr.png" alt="Optional creator support ka UPI QR" loading="lazy"><p>Apne UPI app mein recipient aur amount check karke confirm karein. QR support se paid products unlock nahi hote.</p></details><small>One-time support · Koi automatic renewal nahi</small></section>`,
    ),
      globalThis.document
        ?.querySelectorAll?.("[data-commerce-support]")
        .forEach(
          (m) =>
            (m.onclick = () =>
              $("support", null, Number(m.dataset.commerceSupport))),
        ));
  }
  async function O(v) {
    if (!["guide", "prompts", "bundle"].includes(v)) return !1;
    const m = v === "bundle" ? "guide" : v,
      M = p.get(m);
    if (!M)
      return (t("Is download ke liye pehle verified purchase chahiye."), !1);
    try {
      R("Download verify ho raha hai…");
      const I = S(
        await c("market", "entitlements", void 0, M.entitlementToken),
      );
      if (!ba(I.downloadToken) || !I.assets?.includes(v))
        throw Error("Is file ka verified access available nahi hai.");
      const D = await o(`${b}/api/market?action=download&asset=${v}`, {
        headers: { Authorization: `Bearer ${I.downloadToken}` },
        credentials: "same-origin",
      });
      if (!D.ok)
        throw Error("Download verify nahi ho paaya. Dobara try karein.");
      const W = await D.blob(),
        _ = URL.createObjectURL(W),
        x = document.createElement("a");
      return (
        (x.href = _),
        (x.download =
          v === "bundle"
            ? "diwali-mela-creator-bundle.zip"
            : `diwali-mela-${v}.pdf`),
        document.body.append(x),
        x.click(),
        x.remove(),
        setTimeout(() => URL.revokeObjectURL(_), 3e4).unref?.(),
        R("Download ready hai. Apne downloads dekhein."),
        !0
      );
    } catch (I) {
      return (R(I.message), !1);
    }
  }
  return {
    init: N,
    buy: P,
    support: A,
    download: O,
    owns: (v) => f.has(v),
    get snapshot() {
      return T();
    },
  };
}
const pn = new se(),
  ii = new Nn(),
  fn = new se();
class ri extends On {
  constructor(t = document.createElement("div")) {
    (super(),
      (this.isCSS3DObject = !0),
      (this.element = t),
      (this.element.style.position = "absolute"),
      (this.element.style.pointerEvents = "auto"),
      (this.element.style.userSelect = "none"),
      this.element.setAttribute("draggable", !1),
      this.addEventListener("removed", function () {
        this.traverse(function (a) {
          a.element instanceof a.element.ownerDocument.defaultView.Element &&
            a.element.parentNode !== null &&
            a.element.remove();
        });
      }));
  }
  copy(t, a) {
    return (super.copy(t, a), (this.element = t.element.cloneNode(!0)), this);
  }
}
const We = new Xa(),
  si = new Xa();
class li {
  constructor(t = {}) {
    const a = this;
    let o, n, r, b;
    const i = { camera: { style: "" }, objects: new WeakMap() },
      l = t.element !== void 0 ? t.element : document.createElement("div");
    ((l.style.overflow = "hidden"), (this.domElement = l));
    const d = document.createElement("div");
    ((d.style.transformOrigin = "0 0"),
      (d.style.pointerEvents = "none"),
      l.appendChild(d));
    const s = document.createElement("div");
    ((s.style.transformStyle = "preserve-3d"),
      d.appendChild(s),
      (this.getSize = function () {
        return { width: o, height: n };
      }),
      (this.render = function (c, h) {
        const S = h.projectionMatrix.elements[5] * b;
        (h.view && h.view.enabled
          ? ((d.style.transform = `translate( ${-h.view.offsetX * (o / h.view.width)}px, ${-h.view.offsetY * (n / h.view.height)}px )`),
            (d.style.transform += `scale( ${h.view.fullWidth / h.view.width}, ${h.view.fullHeight / h.view.height} )`))
          : (d.style.transform = ""),
          c.matrixWorldAutoUpdate === !0 && c.updateMatrixWorld(),
          h.parent === null &&
            h.matrixWorldAutoUpdate === !0 &&
            h.updateMatrixWorld());
        let N, T;
        h.isOrthographicCamera &&
          ((N = -(h.right + h.left) / 2), (T = (h.top + h.bottom) / 2));
        const R =
            h.view && h.view.enabled ? h.view.height / h.view.fullHeight : 1,
          B = h.isOrthographicCamera
            ? `scale( ${R} )scale(` +
              S +
              ")translate(" +
              f(N) +
              "px," +
              f(T) +
              "px)" +
              p(h.matrixWorldInverse)
            : `scale( ${R} )translateZ(` + S + "px)" + p(h.matrixWorldInverse),
          H =
            (h.isPerspectiveCamera ? "perspective(" + S + "px) " : "") +
            B +
            "translate(" +
            r +
            "px," +
            b +
            "px)";
        (i.camera.style !== H &&
          ((s.style.transform = H), (i.camera.style = H)),
          u(c, c, h));
      }),
      (this.setSize = function (c, h) {
        ((o = c),
          (n = h),
          (r = o / 2),
          (b = n / 2),
          (l.style.width = c + "px"),
          (l.style.height = h + "px"),
          (d.style.width = c + "px"),
          (d.style.height = h + "px"),
          (s.style.width = c + "px"),
          (s.style.height = h + "px"));
      }));
    function f(c) {
      return Math.abs(c) < 1e-10 ? 0 : c;
    }
    function p(c) {
      const h = c.elements;
      return (
        "matrix3d(" +
        f(h[0]) +
        "," +
        f(-h[1]) +
        "," +
        f(h[2]) +
        "," +
        f(h[3]) +
        "," +
        f(h[4]) +
        "," +
        f(-h[5]) +
        "," +
        f(h[6]) +
        "," +
        f(h[7]) +
        "," +
        f(h[8]) +
        "," +
        f(-h[9]) +
        "," +
        f(h[10]) +
        "," +
        f(h[11]) +
        "," +
        f(h[12]) +
        "," +
        f(-h[13]) +
        "," +
        f(h[14]) +
        "," +
        f(h[15]) +
        ")"
      );
    }
    function g(c) {
      const h = c.elements;
      return (
        "translate(-50%,-50%)" +
        ("matrix3d(" +
          f(h[0]) +
          "," +
          f(h[1]) +
          "," +
          f(h[2]) +
          "," +
          f(h[3]) +
          "," +
          f(-h[4]) +
          "," +
          f(-h[5]) +
          "," +
          f(-h[6]) +
          "," +
          f(-h[7]) +
          "," +
          f(h[8]) +
          "," +
          f(h[9]) +
          "," +
          f(h[10]) +
          "," +
          f(h[11]) +
          "," +
          f(h[12]) +
          "," +
          f(h[13]) +
          "," +
          f(h[14]) +
          "," +
          f(h[15]) +
          ")")
      );
    }
    function w(c) {
      c.isCSS3DObject && (c.element.style.display = "none");
      for (let h = 0, S = c.children.length; h < S; h++) w(c.children[h]);
    }
    function u(c, h, S, N) {
      if (c.visible === !1) {
        w(c);
        return;
      }
      if (c.isCSS3DObject) {
        const T = c.layers.test(S.layers) === !0,
          R = c.element;
        if (((R.style.display = T === !0 ? "" : "none"), T === !0)) {
          c.onBeforeRender(a, h, S);
          let B;
          c.isCSS3DSprite
            ? (We.copy(S.matrixWorldInverse),
              We.transpose(),
              c.rotation2D !== 0 && We.multiply(si.makeRotationZ(c.rotation2D)),
              c.matrixWorld.decompose(pn, ii, fn),
              We.setPosition(pn),
              We.scale(fn),
              (We.elements[3] = 0),
              (We.elements[7] = 0),
              (We.elements[11] = 0),
              (We.elements[15] = 1),
              (B = g(We)))
            : (B = g(c.matrixWorld));
          const G = i.objects.get(c);
          if (G === void 0 || G.style !== B) {
            R.style.transform = B;
            const H = { style: B };
            i.objects.set(c, H);
          }
          (R.parentNode !== s && s.appendChild(R), c.onAfterRender(a, h, S));
        }
      }
      for (let T = 0, R = c.children.length; T < R; T++) u(c.children[T], h, S);
    }
  }
}
const ge = { x: -6, y: 2.65, z: 7.25, width: 5.4, seatZ: 14.8 };
function ci(e) {
  const t = new li(),
    a = new Bn(),
    o = document.createElement("div");
  ((o.className = "stage-video"),
    (o.style.width = "960px"),
    (o.style.height = "540px"),
    (o.innerHTML =
      '<div id="cinema-player"><p>Apni movie night<br><small>Neeche apna YouTube link paste karo</small></p></div>'));
  const n = new ri(o);
  (n.position.set(ge.x, ge.y, ge.z),
    n.scale.setScalar(ge.width / 960),
    a.add(n),
    Object.assign(t.domElement.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      zIndex: "3",
    }),
    document.body.append(t.domElement));
  const r = () => t.setSize(innerWidth, innerHeight);
  return (
    r(),
    window.addEventListener("resize", r),
    {
      render() {
        t.render(a, e);
      },
      destroy() {
        (window.removeEventListener("resize", r), t.domElement.remove());
      },
    }
  );
}
const ka = 1.8;
function ui({ camera: e, state: t, act: a, audio: o }) {
  const n = new Se(),
    r = new Se(),
    b = new Hn(new lt(0.025, 0.025, 0.025), new Ot({ color: 15183185 }), 8);
  (n.add(r, b), e.add(n), (n.visible = !1));
  const i = (w, u, c, h, S, N, T) => {
    const R = new Qe(new lt(h, S, N), new Ja({ color: T, roughness: 0.9 }));
    return (R.position.set(w, u, c), r.add(R), R);
  };
  i(0, -0.12, 0.04, 0.1, 0.3, 0.1, 11368021);
  const l = i(0, 0.06, 0, 0.18, 0.16, 0.17, 15312436),
    d = i(0, 0.15, 0, 0.12, 0.04, 0.12, 16765290);
  let s = null,
    f = 0,
    p = -1;
  const g = new On();
  return {
    get active() {
      return s !== null;
    },
    start(w) {
      return s || !["laddoo", "jalebi", "chai"].includes(w) || !t.inventory[w]
        ? !1
        : ((s = w),
          (f = 0),
          (p = -1),
          (n.visible = !0),
          l.material.color.setHex(
            w === "chai" ? 12090192 : w === "jalebi" ? 15432745 : 15312436,
          ),
          l.scale.set(1, w === "chai" ? 1.4 : 1, w === "jalebi" ? 0.4 : 1),
          (d.visible = w !== "chai"),
          !0);
    },
    cancel() {
      ((s = null), (n.visible = !1));
    },
    update(w) {
      if (!s || !Number.isFinite(w) || w <= 0) return;
      f = Math.min(ka, f + Math.min(w, 0.1));
      const u = Math.floor(f / 0.3),
        c = Math.sin((f / 0.3) * Math.PI * 2);
      (n.position.set(
        0.21 + c * 0.025,
        -0.22 + Math.abs(c) * 0.07,
        -0.44 + c * 0.025,
      ),
        n.rotation.set(-0.25 + c * 0.15, 0, -0.2 + c * 0.05),
        r.scale.setScalar(Math.max(0.55, 1 - (f / ka) * 0.35)),
        u !== p && ((p = u), o.action(s === "chai" ? "sip" : "eat")),
        (b.visible = s !== "chai"));
      for (let h = 0; h < 8; h++) {
        const S = (f * 3 + h / 8) % 1;
        (g.position.set(
          Math.sin(h * 4.1) * S * 0.16,
          0.1 - S * 0.35,
          Math.cos(h * 2) * S * 0.12,
        ),
          g.rotation.set(S * 3, h, S * 2),
          g.scale.setScalar(1 - S),
          g.updateMatrix(),
          b.setMatrixAt(h, g.matrix));
      }
      if (((b.instanceMatrix.needsUpdate = !0), f >= ka)) {
        const h = s;
        ((s = null), (n.visible = !1), a({ type: "snack", id: h }));
      }
    },
  };
}
const De = 20;
function di(e, t, a) {
  return a && Number.isFinite(t) && t > 0
    ? Math.min(De, e + Math.min(t, 0.1))
    : e;
}
const be = Array.from({ length: 20 }, (e, t) => ({
    at: t * 0.78,
    x: Math.sin(t * 2.4) * 8,
    y: 22 + (t % 4) * 2.6,
    z: -24 - (t % 3) * 3,
    pattern: "heart",
    colour: [16716947, 16728224, 16737975, 16757688, 16766012, 15277699][t % 6],
    multi: !0,
  })),
  Qn = 8,
  Da = /^[A-HJ-NP-Z2-9]{10}$/,
  eo = {
    home: {
      minX: -10.6,
      maxX: 10.6,
      minZ: -9.5,
      maxZ: 13.5,
      spawn: { x: 0, z: -4 },
    },
    neighborhood: {
      minX: -16.5,
      maxX: 16.5,
      minZ: -18.5,
      maxZ: 18.5,
      spawn: { x: 0, z: 13 },
    },
    market: {
      minX: -26,
      maxX: 26,
      minZ: -59,
      maxZ: 27,
      spawn: { x: 0, z: 23 },
    },
  },
  na = [
    {
      id: "lights",
      title: "Light up the neighbourhood",
      zone: "neighborhood",
      requiredContributors: 2,
      points: [11, 3, -5, -13].flatMap((e, t) =>
        [-3.4, 3.4].map((a, o) => ({
          id: `lamp-${t * 2 + o + 1}`,
          x: a,
          z: e,
        })),
      ),
    },
    {
      id: "rangoli",
      title: "Friends’ rangoli",
      zone: "market",
      requiredContributors: 2,
      points: [20, 16, 12].flatMap((e, t) =>
        [-2.5, 2.5].map((a, o) => ({
          id: `circle-${t * 2 + o + 1}`,
          x: a,
          z: e,
        })),
      ),
    },
    {
      id: "crackers",
      title: "Team cracker trail",
      zone: "neighborhood",
      requiredContributors: 2,
      points: [-1, -9].flatMap((e, t) =>
        [-1.8, 1.8].map((a, o) => ({
          id: `cracker-${t * 2 + o + 1}`,
          x: a,
          z: e,
          style: o === 0 ? "rocket" : "fountain",
        })),
      ),
    },
  ],
  ut = { zone: "neighborhood", x: 0, z: 7, radius: 4.5 },
  Na = ["laddoo_cannon", "sky_blast", "name_sky", "ravan_ultimate"],
  hi = ["#ffcf69", "#ff6fb2", "#66e2ce", "#9c91ff", "#ff9466", "#73c8ff"],
  pi = ["chrysanthemum", "ring", "willow"];
function fi(e, t = "Diwali Friend") {
  if (e == null || e === "") return t;
  if (typeof e != "string") return null;
  const a = e.normalize("NFKC").trim().replace(/\s+/gu, " ");
  return a.length >= 1 && a.length <= 24 && /^[\p{L}\p{M}\p{N} ._-]+$/u.test(a)
    ? a
    : null;
}
function to(e) {
  const t = eo[e?.zone];
  return (
    !!t &&
    ["x", "z", "yaw"].every(
      (a) => typeof e[a] == "number" && Number.isFinite(e[a]),
    ) &&
    e.x >= t.minX &&
    e.x <= t.maxX &&
    e.z >= t.minZ &&
    e.z <= t.maxZ &&
    Math.abs(e.yaw) <= Math.PI * 4
  );
}
const mi = {},
  wa = { home: "Home", neighborhood: "Neighbourhood", market: "Diwali bazaar" },
  mn = {
    lights: "Light up the neighbourhood",
    rangoli: "Friends’ rangoli",
    crackers: "Team cracker trail",
  },
  yi = {
    lights: "Light a diya together",
    rangoli: "Add colour to the team rangoli",
    crackers: "Light a team cracker",
  },
  yn = { lights: 16764786, rangoli: 14981828, crackers: 16553322 },
  ao = (e) =>
    typeof e == "string" ? e.trim().toUpperCase().replace(/[\s-]/g, "") : "",
  Oa = (e) => fi(e, "Diwali Friend"),
  st = (e) =>
    String(e).replace(
      /[&<>"']/g,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[t],
    );
function gi(e, t = globalThis.location?.origin || "http://localhost") {
  const a = new URL(e || "/party", t);
  if (
    (a.protocol === "ws:" && (a.protocol = "http:"),
    a.protocol === "wss:" && (a.protocol = "https:"),
    !["http:", "https:"].includes(a.protocol) || a.username || a.password)
  )
    throw Error("Invalid multiplayer endpoint");
  return (
    (a.search = ""),
    (a.hash = ""),
    (a.pathname = a.pathname.replace(/\/+$/, "") || "/party"),
    a.toString().replace(/\/$/, "")
  );
}
function va(e) {
  return !e ||
    !Da.test(e.code) ||
    !Array.isArray(e.players) ||
    e.players.length > Qn ||
    !Number.isFinite(e.serverTime) ||
    !e.players.every(
      (t) =>
        typeof t.id == "string" &&
        t.id.length > 0 &&
        t.id.length <= 64 &&
        Oa(t.name) === t.name &&
        /^#[a-f0-9]{6}$/i.test(t.colour) &&
        to(t) &&
        (t.avatar == null || la(t.avatar)) &&
        typeof t.ready == "boolean",
    ) ||
    new Set(e.players.map((t) => t.id)).size !== e.players.length ||
    !na.every((t) => {
      const a = e.missions?.[t.id];
      return (
        a &&
        typeof a.complete == "boolean" &&
        Array.isArray(a.contributors) &&
        a.contributors.length <= 32 &&
        a.contributors.every((o) => typeof o == "string" && o.length <= 64) &&
        a.claimed &&
        typeof a.claimed == "object" &&
        !Array.isArray(a.claimed) &&
        Object.entries(a.claimed).every(
          ([o, n]) =>
            t.points.some((r) => r.id === o) &&
            typeof n == "string" &&
            n.length <= 64,
        )
      );
    })
    ? !1
    : e.show === null ||
        (!!e.show &&
          typeof e.show.id == "string" &&
          e.show.id.length <= 64 &&
          e.show.zone === ut.zone &&
          Number.isFinite(e.show.startAt) &&
          Number.isFinite(e.show.endsAt) &&
          e.show.endsAt > e.show.startAt &&
          e.show.endsAt - e.show.startAt <= 21e3);
}
function bi({
  endpoint: e,
  origin: t,
  fetchImpl: a = globalThis.fetch,
  Socket: o = globalThis.WebSocket,
  storage: n,
  onChange: r = () => {},
  onEvent: b = () => {},
  now: i = Date.now,
  setTimer: l = setTimeout,
  clearTimer: d = clearTimeout,
} = {}) {
  if (n === void 0)
    try {
      n = globalThis.sessionStorage;
    } catch {}
  const s = gi(e, t);
  let f,
    p = 0,
    g = !1,
    w,
    u,
    c,
    h = 0,
    S = !1,
    N = "",
    T = "",
    R = "",
    B = 0,
    G = -1 / 0;
  const H = new Set(),
    $ = {
      status: "idle",
      message: "Play solo, or invite up to seven friends.",
      room: null,
      selfId: null,
    },
    P = (Y) => r({ ...$ }, Y),
    A = (Y, U) => {
      const te = l(Y, U);
      return (te?.unref?.(), te);
    },
    O = () => {
      for (const Y of [w, u, c]) Y && d(Y);
      w = u = c = null;
    },
    v = (Y) => {
      try {
        return n?.getItem(`diwali-party:${Y}`) || "";
      } catch {
        return "";
      }
    },
    m = () => {
      try {
        n?.setItem(`diwali-party:${T}`, R);
      } catch {}
    },
    M = (Y) => {
      if (f?.readyState !== 1) return !1;
      const U = i();
      if (Y.type === "position" && U - G < 100) return !1;
      try {
        return (
          f.send(JSON.stringify(Y)),
          Y.type === "position" && (G = U),
          !0
        );
      } catch {
        return !1;
      }
    };
  function I() {
    $.status === "joined" && (M({ type: "ping" }), (c = A(I, 15e3)));
  }
  function D(Y = !1) {
    if (!o) {
      (($.status = "error"),
        ($.message =
          "This browser cannot connect to multiplayer. Solo play is still available."),
        P("error"));
      return;
    }
    O();
    const U = ++p;
    (($.status = Y ? "reconnecting" : "connecting"),
      ($.message = Y
        ? "Connection interrupted. Rejoining your friends…"
        : "Connecting to your friends…"),
      P("status"));
    const te = new URL(`${s}/rooms/${T}`);
    ((te.protocol = te.protocol === "https:" ? "wss:" : "ws:"),
      te.searchParams.set("name", N),
      R && te.searchParams.set("token", R));
    try {
      f = new o(te.toString());
    } catch {
      W(U);
      return;
    }
    ((u = A(() => {
      U === p && $.status !== "joined" && W(U);
    }, 12e3)),
      (f.onmessage = (j) => {
        if (U !== p || typeof j.data != "string" || j.data.length > 65536)
          return;
        let C;
        try {
          C = JSON.parse(j.data);
        } catch {
          return;
        }
        if (
          C.type === "welcome" &&
          va(C.room) &&
          C.room.code === T &&
          typeof C.selfId == "string" &&
          C.room.players.some((E) => E.id === C.selfId) &&
          typeof C.token == "string" &&
          C.token.length > 0 &&
          C.token.length <= 128
        ) {
          (O(),
            ($.status = "joined"),
            ($.message = "Connected. Explore together or try a team mission."),
            ($.selfId = C.selfId),
            ($.room = C.room),
            (R = C.token),
            (B = C.room.serverTime - i()),
            (h = 0),
            (S = !0),
            (G = -1 / 0),
            m(),
            I(),
            P("welcome"));
          return;
        }
        if ($.status !== "joined") {
          if (C.type === "error") {
            if (((g = !1), O(), p++, C.code === "INVALID_TOKEN")) {
              R = "";
              try {
                n?.removeItem(`diwali-party:${T}`);
              } catch {}
            }
            (($.status = "error"),
              ($.message = gn(C.code)),
              P("error"),
              f?.close());
          }
          return;
        }
        if (C.type === "snapshot" && va(C.room) && C.room.code === T)
          (($.room = C.room), (B = C.room.serverTime - i()), P("snapshot"));
        else if (C.type === "position" && C.player && $.room) {
          const E = $.room.players.filter((V) => V.id !== C.player.id);
          E.push(C.player);
          const k = { ...$.room, players: E, serverTime: C.serverTime };
          va(k) && (($.room = k), P("position"));
        } else
          C.type === "event" &&
          C.event &&
          typeof C.event.id == "string" &&
          C.event.id.length <= 64 &&
          !H.has(C.event.id) &&
          [
            "emote",
            "contribution",
            "mission_complete",
            "finale",
            "team_cracker",
            ...Na,
          ].includes(C.event.kind)
            ? (H.add(C.event.id),
              H.size > 128 && H.delete(H.values().next().value),
              b(C.event))
            : C.type === "error" && (($.message = gn(C.code)), P("notice"));
      }),
      (f.onerror = () => {
        U === p && $.status !== "joined" && W(U);
      }),
      (f.onclose = () => W(U)));
  }
  function W(Y) {
    if (Y !== p) return;
    (O(), p++);
    const U = f;
    ((f = null),
      U?.close(),
      g && S && h < 3
        ? (($.status = "reconnecting"),
          ($.message = "Connection interrupted. Rejoining your friends…"),
          P("status"),
          (w = A(
            () => {
              (h++, D(!0));
            },
            1e3 * 2 ** h,
          )))
        : ((g = !1),
          ($.status = "error"),
          ($.message =
            "Multiplayer is unavailable right now. Retry when ready; solo play still works."),
          P("error")));
  }
  async function _(Y) {
    if ((F(!1), (N = Oa(Y)), !N)) return x();
    (($.status = "connecting"), ($.message = "Creating a room…"), P("status"));
    const U = p,
      te = new AbortController(),
      j = A(() => te.abort(), 1e4);
    try {
      const C = await a(`${s}/rooms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: N }),
        signal: te.signal,
      });
      if (!C.ok) throw Error("Room creation failed");
      const E = await C.json();
      if (U !== p) return !1;
      if (!Da.test(E.roomCode)) throw Error("Invalid room response");
      return ((T = E.roomCode), (R = ""), (g = !0), D(), !0);
    } catch {
      return (
        U === p &&
          (($.status = "error"),
          ($.message =
            "Could not create a room. The multiplayer server may be offline; solo play is unaffected."),
          P("error")),
        !1
      );
    } finally {
      d(j);
    }
  }
  function x() {
    return (
      ($.status = "error"),
      ($.message = "Use a name of up to 24 letters or numbers."),
      P("error"),
      !1
    );
  }
  function L(Y, U) {
    return (
      F(!1),
      (N = Oa(U)),
      N
        ? ((T = ao(Y)),
          Da.test(T)
            ? ((R = v(T)), (g = !0), D(), !0)
            : (($.status = "error"),
              ($.message = "Enter the complete 10-character room code."),
              P("error"),
              !1))
        : x()
    );
  }
  function F(Y = !0) {
    ((g = !1), p++, O());
    const U = f;
    ((f = null),
      U?.close(),
      (h = 0),
      (S = !1),
      H.clear(),
      ($.status = "idle"),
      ($.room = null),
      ($.selfId = null),
      ($.message = "Play solo, or invite up to seven friends."),
      Y && P("leave"));
  }
  return {
    create: _,
    join: L,
    leave: F,
    send: M,
    get state() {
      return $;
    },
    get serverNow() {
      return i() + B;
    },
    get endpoint() {
      return s;
    },
  };
}
function gn(e) {
  return (
    {
      ROOM_FULL: "This room already has eight players.",
      INVALID_TOKEN: "Your old connection expired. Retry joining this room.",
      NEAR_POINT: "Walk closer to the team marker first.",
      TOO_FAR: "Walk closer to the team marker first.",
      CONTRIBUTORS: "This mission needs help from another friend.",
      COOLDOWN: "Give the next preview a moment to recharge.",
      INVALID_NAME: "Use a name of up to 24 letters or numbers.",
      ENTITLEMENT_REQUIRED: "This action requires a verified purchase.",
    }[e] ||
    "That action is not available here yet. Move closer to the marker or try again."
  );
}
function ki(e, t, a, o = Date.now()) {
  if (!e) return [];
  const n = [];
  for (const b of na) {
    if (b.zone !== a) continue;
    const i = e.missions[b.id];
    if (!i.complete)
      for (const l of b.points)
        (!i.claimed[l.id] || !i.contributors.includes(t)) &&
          n.push({
            id: `party-${b.id}-${l.id}`,
            type: "party-task",
            mission: b.id,
            pointId: l.id,
            x: l.x,
            z: l.z,
            reach: 1.3,
            name: i.claimed[l.id]
              ? "Help your friends finish this team mission"
              : yi[b.id] || `Help with ${b.title}`,
          });
  }
  const r = e.players.find((b) => b.id === t);
  return (
    a === ut.zone &&
      !r?.ready &&
      (!e.show || o > e.show.endsAt + 1e4) &&
      n.push({
        id: "party-show-ready",
        type: "party-task",
        mission: "show",
        x: ut.x,
        z: ut.z,
        reach: 2,
        name: "Ready for the friends’ fireworks show",
      }),
    n
  );
}
function wi({
  scene: e,
  getPlayer: t,
  showPanel: a,
  onEvent: o = () => {},
  onStatus: n = () => {},
  endpoint: r = mi?.VITE_PARTY_URL,
  connectionFactory: b = bi,
} = {}) {
  const i = new Map(),
    l = new Map(),
    d = new Se();
  ((d.name = "party-players"), e?.add(d));
  let s = 0,
    f = null,
    p,
    g = null,
    w = "";
  const u = (m) => document.getElementById(m),
    c = document.createElement("div");
  ((c.className = "party-toast"),
    (c.hidden = !0),
    c.setAttribute("role", "status"),
    document.body.append(c));
  function h(m) {
    ((c.textContent = m),
      (c.hidden = !1),
      clearTimeout(p),
      (p = setTimeout(() => (c.hidden = !0), 3500)),
      p.unref?.());
  }
  let S;
  function N(m, M) {
    (n({
      status: m.status,
      count: m.room?.players.length || 0,
      code: m.room?.code || null,
      message: m.message,
    }),
      M !== "position"
        ? v()
        : u("party-panel")
            ?.querySelectorAll("[data-party-player]")
            .forEach((I) => {
              const D = m.room?.players.find(
                  (_) => _.id === I.dataset.partyPlayer,
                ),
                W = I.querySelector("[data-party-location]");
              D &&
                W &&
                (W.textContent = `${wa[D.zone]}${D.ready ? " · Ready" : ""}`);
            }),
      M === "welcome" && P(),
      (M === "notice" || M === "error") && h(m.message),
      m.room?.show &&
        m.room.show.id !== g &&
        S.serverNow < m.room.show.endsAt &&
        ((g = m.room.show.id), o({ kind: "finale", ...m.room.show })),
      M === "leave" && ((g = null), B(), G()));
  }
  function T(m) {
    if (m.kind === "emote") {
      const M = i.get(m.actorId);
      M && (M.emote = { kind: m.emote, until: performance.now() / 1e3 + 3 });
    }
    (m.kind === "mission_complete" &&
      h(`${mn[m.mission] || "Team mission"} complete — well done, everyone!`),
      m.kind === "contribution" &&
        m.actorId === S.state.selfId &&
        h("Your contribution is shared with the room."),
      m.kind === "team_cracker" &&
        h("Team cracker lit — step back for the show!"),
      Na.includes(m.kind) &&
        h(
          `${m.actorName || "A friend"} is playing ${m.kind.replaceAll("_", " ")}.`,
        ),
      m.kind !== "finale" && o(m));
  }
  S = b({ endpoint: r, onChange: N, onEvent: T });
  function R(m, M) {
    const I = document.createElement("canvas");
    ((I.width = 256), (I.height = 64));
    const D = I.getContext("2d");
    ((D.fillStyle = "#183329e6"),
      D.fillRect(0, 0, 256, 64),
      (D.strokeStyle = M),
      (D.lineWidth = 3),
      D.strokeRect(2, 2, 252, 60),
      (D.fillStyle = "#fff1d5"),
      (D.font = "bold 23px Arial"),
      (D.textAlign = "center"),
      (D.textBaseline = "middle"),
      D.fillText(m, 128, 34, 238));
    const W = new Qa(I);
    W.colorSpace = ca;
    const _ = new Fn({ map: W, depthTest: !1, transparent: !0 }),
      x = new Wn(_);
    return (x.scale.set(1.8, 0.45, 1), (x.position.y = 2.4), x);
  }
  function B() {
    for (const m of i.values())
      (d.remove(m.group),
        m.dispose?.(),
        m.label.material.map.dispose(),
        m.label.material.dispose());
    i.clear();
  }
  function G() {
    for (const m of l.values()) {
      (d.remove(m), m.geometry.dispose(), m.material.dispose());
      const M = m.userData.cracker;
      M && (d.remove(M), M.userData.dispose?.());
    }
    l.clear();
  }
  function H(m, M) {
    const I = t(),
      D = S.state.room?.players || [],
      W = new Set(D.map((_) => _.id));
    for (const [_, x] of i)
      W.has(_) ||
        (d.remove(x.group),
        x.dispose?.(),
        x.label.material.map.dispose(),
        x.label.material.dispose(),
        i.delete(_));
    for (const _ of D) {
      if (_.id === S.state.selfId) continue;
      let x = i.get(_.id);
      if (
        (x ||
          ((x = jn("man", Number.parseInt(_.colour.slice(1), 16))),
          (x.label = R(_.name, _.colour)),
          x.group.add(x.label),
          x.group.position.set(_.x, 0, _.z),
          (x.zone = _.zone),
          d.add(x.group),
          i.set(_.id, x)),
        _.avatar && Xn(x, _.avatar),
        (x.group.visible = S.state.status === "joined" && _.zone === I.zone),
        !x.group.visible)
      )
        continue;
      const L = Math.hypot(_.x - x.group.position.x, _.z - x.group.position.z);
      if (x.zone !== _.zone || L > 12) x.group.position.set(_.x, 0, _.z);
      else {
        const Y = 1 - Math.exp(-Math.min(m, 0.1) * 12);
        ((x.group.position.x = Et.lerp(x.group.position.x, _.x, Y)),
          (x.group.position.z = Et.lerp(x.group.position.z, _.z, Y)));
      }
      x.zone = _.zone;
      const F = _.yaw + Math.PI;
      ((x.group.rotation.y +=
        Math.atan2(
          Math.sin(F - x.group.rotation.y),
          Math.cos(F - x.group.rotation.y),
        ) * Math.min(1, m * 12)),
        x.legs.forEach(
          (Y, U) =>
            (Y.rotation.x = L > 0.04 ? Math.sin(M * 9 + U * Math.PI) * 0.4 : 0),
        ),
        x.arms.forEach(
          (Y, U) =>
            (Y.rotation.x =
              L > 0.04 ? Math.sin(M * 9 + U * Math.PI) * -0.25 : 0),
        ),
        x.emote?.until > performance.now() / 1e3
          ? x.emote.kind === "dance"
            ? ((x.pose.position.y = Math.abs(Math.sin(M * 7)) * 0.12),
              x.arms.forEach(
                (Y, U) => (Y.rotation.x = -1 + Math.sin(M * 6 + U) * 0.4),
              ))
            : (x.arms[0].rotation.x = -2.3 + Math.sin(M * 8) * 0.25)
          : (x.pose.position.y = 0));
    }
  }
  function $() {
    const m = t(),
      M = S.state.status === "joined";
    for (const I of na)
      for (const [D, W] of I.points.entries()) {
        const _ = `${I.id}:${W.id}`;
        let x = l.get(_);
        if (!M && !x) continue;
        if (
          !x &&
          ((x = new Qe(
            new _a(0.33, 0.045, 5, 20),
            new Ot({ color: yn[I.id] || 16764786 }),
          )),
          (x.rotation.x = -Math.PI / 2),
          x.position.set(W.x, 0.14, W.z),
          d.add(x),
          l.set(_, x),
          I.id === "crackers")
        ) {
          const F = ua(D % 2 ? "fountain" : "rocket");
          (F.position.set(W.x, 0.08, W.z),
            F.scale.setScalar(0.7),
            d.add(F),
            (x.userData.cracker = F));
        }
        x.visible = M && m.zone === I.zone;
        const L = S.state.room?.missions[I.id]?.claimed[W.id];
        (x.material.color.setHex(L ? 7920820 : yn[I.id] || 16764786),
          x.scale.setScalar(L ? 0.75 : 1),
          x.userData.cracker && (x.userData.cracker.visible = x.visible && !L));
      }
  }
  function P() {
    const m = t(),
      M = { ...m, yaw: Math.atan2(Math.sin(m.yaw), Math.cos(m.yaw)) };
    to(M) &&
      S.send({
        type: "position",
        zone: M.zone,
        x: M.x,
        z: M.z,
        yaw: M.yaw,
        ...(la(M.avatar) ? { avatar: M.avatar } : {}),
      });
  }
  function A(m) {
    return S.state.status !== "joined"
      ? (h("Join a room first. Solo play is still available."), !1)
      : (P(), S.send(m));
  }
  function O(m) {
    return S.state.status !== "joined"
      ? []
      : ki(S.state.room, S.state.selfId, m, S.serverNow);
  }
  function v() {
    const m = u("party-panel");
    if (!m) return;
    const M = S?.state;
    if (!M) return;
    const I = M.room,
      D = M.status === "joined",
      W = ["connecting", "reconnecting"].includes(M.status);
    if (I) {
      const _ = I.players.find((L) => L.id === M.selfId),
        x = t();
      if (
        ((m.innerHTML = `<span class="eyebrow">YOUR INVITE ROOM</span><h2>Friends at the mela <small>${I.players.length}/${Qn}</small></h2><div class="party-invite"><code aria-label="Room code ${st(I.code)}">${st(I.code)}</code><button id="party-invite" class="primary">Invite friends</button></div><p id="party-status" role="status">${st(M.message)}</p><div class="party-members" role="list" aria-label="Players in this room">${I.players.map((L) => `<div data-party-player="${st(L.id)}" role="listitem"><i style="background:${L.colour}" aria-hidden="true"></i><strong>${st(L.name)}${L.id === M.selfId ? " (you)" : ""}</strong><small data-party-location>${wa[L.zone]}${L.ready ? " · Ready" : ""}</small></div>`).join("")}</div><h3>Make a Diwali memory together</h3>${na
          .map((L) => {
            const F = I.missions[L.id];
            return `<div class="party-mission"><strong>${F.complete ? "✓ " : ""}${mn[L.id]}</strong><span>${Object.keys(F.claimed).length}/${L.points.length}</span><small>${wa[L.zone]} · ${F.contributors.length}/${L.requiredContributors} friends helped${L.id === "crackers" ? " · 4 marked points · 2 friends needed" : ""}</small></div>`;
          })
          .join(
            "",
          )}<div class="party-mission"><strong>Friends’ fireworks finale</strong><small>Meet near the centre of the neighbourhood. At least two friends must be ready.</small><button id="party-ready" class="secondary" ${!D || x.zone !== ut.zone || Math.hypot(x.x - ut.x, x.z - ut.z) > ut.radius ? "disabled" : ""}>${_?.ready ? "Not ready yet" : "I’m ready"}</button></div><div class="party-actions">${["wave", "namaste", "dance"].map((L) => `<button class="secondary" data-emote="${L}" ${D ? "" : "disabled"}>${L[0].toUpperCase() + L.slice(1)}</button>`).join("")}<button id="party-leave" class="secondary">Leave room</button></div><p>Game wallets stay separate. Play items use mission-earned game money; only creator downloads use real payments.</p>`),
        M.status === "error")
      ) {
        const L = document.createElement("button");
        ((L.className = "primary"),
          (L.textContent = "Retry connection"),
          (L.onclick = () => S.join(I.code, _?.name || "Diwali Friend")),
          u("party-status").after(L));
      }
      ((u("party-invite").onclick = async () => {
        const L = new URL(location.href);
        ((L.search = ""), (L.hash = ""), L.searchParams.set("room", I.code));
        try {
          if (navigator.share)
            await navigator.share({
              title: "Join my Diwali Mela room",
              url: L.toString(),
            });
          else if (navigator.clipboard)
            await navigator.clipboard.writeText(L.toString());
          else throw Error();
          u("party-status").textContent =
            "Invite link ready. Only people with your room code can join.";
        } catch (F) {
          u("party-status").textContent =
            F.name === "AbortError"
              ? "Invite sharing cancelled."
              : `Share this room code: ${I.code}`;
        }
      }),
        (u("party-leave").onclick = () => S.leave()),
        (u("party-ready").onclick = () =>
          A({ type: "ready", ready: !_?.ready })),
        m
          .querySelectorAll("[data-emote]")
          .forEach(
            (L) =>
              (L.onclick = () => A({ type: "emote", kind: L.dataset.emote })),
          ));
    } else {
      let _ = "";
      try {
        _ = sessionStorage.getItem("diwali-party-name") || "";
      } catch {}
      const x = w || ao(new URL(location.href).searchParams.get("room") || "");
      m.innerHTML = `<span class="eyebrow">DIWALI WITH FRIENDS</span><h2>Your mela, together</h2><p>Create an invite room for up to eight friends. Explore freely and complete optional team missions; your solo progress stays yours.</p><label for="party-name">Your name</label><input id="party-name" class="party-input" maxlength="24" value="${st(_)}" autocomplete="nickname"><div class="party-actions"><button id="party-create" class="primary" ${W ? "disabled" : ""}>Create a room</button></div><label for="party-code">Have an invite code?</label><div class="party-code-row"><input id="party-code" class="party-input" maxlength="24" value="${st(x)}" autocomplete="off" autocapitalize="characters" placeholder="10-character room code"><button id="party-join" class="secondary" ${W ? "disabled" : ""}>Join room</button></div><p id="party-status" role="status">${st(M.message)}</p><small>Multiplayer needs a live room server. You can close this panel and keep playing solo.</small>`;
      const L = () => {
        const F = u("party-name").value.trim();
        if (!F)
          return (
            (u("party-status").textContent = "Enter your name first."),
            null
          );
        try {
          sessionStorage.setItem("diwali-party-name", F);
        } catch {}
        return F;
      };
      ((u("party-create").onclick = () => {
        const F = L();
        F && S.create(F);
      }),
        (u("party-join").onclick = () => {
          const F = L();
          ((w = u("party-code").value), F && S.join(w, F));
        }));
    }
  }
  return {
    open() {
      (a('<section id="party-panel"></section>'), v());
    },
    join(roomCode, playerName) {
      try {
        S?.join(roomCode, playerName);
      } catch (e) {
        console.warn("Auto-join error:", e);
      }
    },
    update(m, M) {
      if ((H(m, M), $(), S.state.status !== "joined")) return;
      s += Math.min(0.1, Math.max(0, m));
      const I = t();
      s >= 0.125 &&
        (!f ||
          I.zone !== f.zone ||
          Math.hypot(I.x - f.x, I.z - f.z) > 0.035 ||
          Math.abs(I.yaw - f.yaw) > 0.04 ||
          s >= 1) &&
        (P(), (f = { ...I }), (s = 0));
    },
    leave() {
      S.leave();
    },
    interact(m) {
      return m?.mission === "show"
        ? A({ type: "ready", ready: !0 })
        : A({ type: "contribute", mission: m?.mission, pointId: m?.pointId });
    },
    sendSpectacle(m, M = {}) {
      if (!Na.includes(m)) return !1;
      const I = {};
      for (const D of ["action", "colour", "pattern"])
        typeof M[D] == "string" && (I[D] = M[D]);
      for (const D of ["pitch", "height", "size"])
        Number.isFinite(M[D]) && (I[D] = M[D]);
      return A({
        type: "effect",
        kind: m,
        preview: !0,
        ...I,
        ...(typeof M.text == "string" ? { text: M.text } : {}),
        ...(typeof M.targetId == "string" ? { targetId: M.targetId } : {}),
      });
    },
    getTargets: O,
    getShow() {
      return { show: S.state.room?.show || null, serverNow: S.serverNow };
    },
    get connected() {
      return S.state.status === "joined";
    },
    get room() {
      return S.state.room;
    },
    get selfId() {
      return S.state.selfId;
    },
    get status() {
      return S.state.status;
    },
  };
}
function vi({
  scene: e,
  audio: t,
  getZone: a,
  getNow: o,
  getPosition: n,
  loadNight: r = () =>
    Ne(() => import("./night-Drgva5Cr.js"), __vite__mapDeps([0, 1, 2, 3, 4])),
  createModel: b = ua,
}) {
  let i = [],
    l = 0;
  function d(g) {
    (g.model &&
      (e.remove(g.model), g.model.userData.dispose?.(), (g.model = null)),
      g.effect?.dispose ? g.effect.dispose() : g.effect?.update(100));
  }
  function s() {
    (l++, i.forEach(d), (i = []));
  }
  async function f(g) {
    const w = eo.neighborhood,
      u = o();
    if (
      g?.kind !== "team_cracker" ||
      g.zone !== "neighborhood" ||
      a() !== g.zone ||
      typeof g.id != "string" ||
      g.id.length > 64 ||
      ![g.x, g.z, g.burstAt].every(Number.isFinite) ||
      g.x < w.minX ||
      g.x > w.maxX ||
      g.z < w.minZ ||
      g.z > w.maxZ ||
      !["rocket", "fountain"].includes(g.style) ||
      g.burstAt < u - 4e3 ||
      g.burstAt > u + 5e3 ||
      i.some((T) => T.id === g.id)
    )
      return !1;
    const c = l;
    let h;
    try {
      h = await r();
    } catch {
      return !1;
    }
    if (
      c !== l ||
      a() !== g.zone ||
      g.burstAt < o() - 4e3 ||
      i.some((T) => T.id === g.id)
    )
      return !1;
    for (; i.length >= 4;) d(i.shift());
    const S = b(g.style);
    (S.position.set(g.x, 0.12, g.z),
      S.scale.setScalar(0.85),
      e.add(S),
      i.push({ ...g, model: S, night: h, effect: null, fired: !1, bang: !1 }));
    const N = n();
    return (
      Math.hypot(N.x - g.x, N.z - g.z) < 10 && g.burstAt > o() && t.fuse(),
      !0
    );
  }
  function p(g) {
    const w = o();
    i = i.filter((u) => {
      if (a() !== u.zone || w > u.burstAt + 6500) return (d(u), !1);
      if (w < u.burstAt)
        return (u.model.scale.setScalar(0.85 + Math.sin(w / 70) * 0.03), !0);
      const c = n(),
        h = Math.hypot(c.x - u.x, c.z - u.z) > 12;
      if (u.fired) {
        if (!u.effect.update(Math.max(0, Math.min(g, 0.1))))
          return ((u.effect = null), !1);
      } else if (
        ((u.fired = !0),
        e.remove(u.model),
        u.model.userData.dispose?.(),
        (u.model = null),
        (u.effect = u.night.createCracker(
          e,
          { x: u.x, y: 0.15, z: u.z },
          u.style,
        )),
        t.fire(u.style, h),
        !u.effect.update(Math.max(0, (w - u.burstAt) / 1e3)))
      )
        return ((u.effect = null), !1);
      return (
        u.style === "rocket" &&
          !u.bang &&
          w >= u.burstAt + 1050 &&
          ((u.bang = !0), t.fire("sky", h)),
        !0
      );
    });
  }
  return {
    add: f,
    update: p,
    clear: s,
    get count() {
      return i.length;
    },
  };
}
function xi(e, t = !1) {
  const a = t ? 72 : 160,
    o = new Float32Array(a * 3),
    n = new Float32Array(a),
    r = new Float32Array(a),
    b = Array.from({ length: a }, () => ({
      age: 8,
      x: 0,
      y: 0,
      z: 0,
      seed: 0,
    })),
    i = new St();
  (i.setAttribute("position", new ct(o, 3)),
    i.setAttribute("alpha", new ct(n, 1)),
    i.setAttribute("size", new ct(r, 1)));
  const l = new La({
      transparent: !0,
      depthWrite: !1,
      uniforms: { maxSize: { value: t ? 96 : 160 } },
      vertexShader:
        "attribute float alpha;attribute float size;varying float opacity;uniform float maxSize;void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*650./max(1.,-p.z),1.,maxSize);opacity=alpha;}",
      fragmentShader:
        "varying float opacity;void main(){float d=length(gl_PointCoord-.5)*2.;float edge=1.-smoothstep(.2,1.,d);gl_FragColor=vec4(vec3(.38,.36,.34),edge*opacity);}",
    }),
    d = new Ra(i, l);
  ((d.name = "firework-smoke"), (d.frustumCulled = !1));
  let s = 0;
  function f() {
    (b.forEach((p) => (p.age = 8)), n.fill(0), e.remove(d));
  }
  return {
    emit(p, g, w, u = !1) {
      if ([p, g, w].every(Number.isFinite)) {
        e.add(d);
        for (let c = 0; c < (u ? 40 : 24); c++) {
          const h = s++ % a,
            S = c * 2.39996,
            N = b[h];
          Object.assign(N, {
            age: 0,
            x: p + Math.cos(S) * 0.8,
            y: g + (c % 4) * 0.2,
            z: w + Math.sin(S) * 0.8,
            seed: h * 1.71,
          });
        }
      }
    },
    update(p) {
      let g = 0;
      for (let w = 0; w < a; w++) {
        const u = b[w];
        u.age += Math.max(0, Math.min(0.1, p));
        const c = u.age;
        if (c >= 7) {
          n[w] = 0;
          continue;
        }
        (g++,
          (o[w * 3] = u.x + c * (0.3 + Math.sin(u.seed) * 0.15)),
          (o[w * 3 + 1] = u.y + c * 0.65),
          (o[w * 3 + 2] = u.z + Math.cos(u.seed) * c * 0.2),
          (r[w] = 3 + c * 0.9),
          (n[w] = Math.min(1, c * 3) * Math.max(0, 1 - c / 7) * 0.55));
      }
      for (const w of Object.values(i.attributes)) w.needsUpdate = !0;
      g || e.remove(d);
    },
    clear: f,
    dispose() {
      (f(), i.dispose(), l.dispose());
    },
    get budget() {
      return a;
    },
  };
}
const Ba = hi.map((e, t) => ({
    value: e,
    label: [
      "Marigold gold",
      "Rose pink",
      "Mint sparkle",
      "Royal violet",
      "Saffron glow",
      "Sky blue",
    ][t],
  })),
  no = pi.map((e, t) => ({
    value: e,
    label: ["Chrysanthemum", "Golden rings", "Falling willow"][t],
  }));
function Ue(e = {}) {
  (!e || typeof e != "object") && (e = {});
  const t = (a, o, n, r) =>
    typeof a == "number" && Number.isFinite(a)
      ? Math.max(o, Math.min(n, a))
      : r;
  return {
    name: [
      ...String(typeof e.name == "string" ? e.name : "Diwali Dost")
        .normalize("NFC")
        .replace(/[\u0000-\u001f\u007f<>]/g, "")
        .trim(),
    ]
      .slice(0, 20)
      .join(""),
    colour: Ba.some((a) => a.value === e.colour) ? e.colour : Ba[0].value,
    pattern: no.some((a) => a.value === e.pattern)
      ? e.pattern
      : "chrysanthemum",
    height: t(e.height, 9, 18, 13),
    size: t(e.size, 10, 20, 15),
  };
}
function Mi({ data: e, width: t, height: a }, o = 1200) {
  const n = Math.max(0, Math.min(1200, Math.floor(Number(o) || 0)));
  if (!n || !e || t < 2 || a < 2 || e.length < t * a * 4)
    return new Float32Array();
  const r = Math.max(1, Math.floor(Math.sqrt((t * a) / (n * 9)))),
    b = [];
  for (let d = 0; d < t; d += r)
    for (let s = 0; s < a; s += r) e[(s * t + d) * 4 + 3] > 100 && b.push(d, s);
  const i = Math.min(n, b.length / 2),
    l = new Float32Array(i * 3);
  for (let d = 0; d < i; d++) {
    const s = Math.floor((d * b.length) / 2 / i) * 2;
    ((l[d * 3] = b[s] / (t - 1) - 0.5),
      (l[d * 3 + 1] = 0.5 - b[s + 1] / (a - 1)),
      (l[d * 3 + 2] = b[s] / (t - 1)));
  }
  return l;
}
function Si(e, t) {
  const a = document.createElement("canvas"),
    o = a.getContext("2d", { willReadFrequently: !0 });
  if (!o) throw new Error("Skywriting needs a 2D canvas.");
  const n = t ? 1024 : 2048;
  let r = t ? 142 : 210;
  const b = () =>
    `700 ${r}px "Trebuchet MS", "Segoe UI", "Nirmala UI", sans-serif`;
  o.font = b();
  const i = Math.max(1, o.measureText(e).width);
  ((r *= Math.min(1, (n - r * 0.7) / i)),
    (o.font = b()),
    (a.width = Math.min(n, Math.ceil(o.measureText(e).width + r * 0.7))),
    (a.height = Math.ceil(r * 1.7)),
    (o.font = b()),
    (o.textAlign = "center"),
    (o.textBaseline = "middle"),
    (o.fillStyle = "#ffffff"),
    o.fillText(e, a.width / 2, a.height * 0.48));
  const l = o.getImageData(0, 0, a.width, a.height);
  ((o.shadowColor = "#ffffff"),
    (o.shadowBlur = r * 0.075),
    o.fillText(e, a.width / 2, a.height * 0.48));
  const d = new Qa(a);
  return (
    (d.colorSpace = ca),
    (d.minFilter = To),
    (d.generateMipmaps = !1),
    { texture: d, mask: l, aspect: a.width / a.height }
  );
}
const Ai =
    "varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
  zi = `
  uniform sampler2D uMap; uniform vec3 uColour; uniform float uReveal; uniform float uOpacity;
  varying vec2 vUv;
  void main(){
    float mask=texture2D(uMap,vUv).a;
    float write=1.0-smoothstep(uReveal-0.018,uReveal+0.018,vUv.x);
    float leading=exp(-abs(vUv.x-uReveal)*95.0)*0.34;
    gl_FragColor=vec4(uColour*(1.12+leading),mask*write*uOpacity);
    #include <colorspace_fragment>
  }`,
  Ci = `
  uniform float uAge; uniform float uReveal; uniform float uOpacity; uniform float uSize;
  attribute float aPhase; attribute float aReveal; varying float vAlpha; varying float vHot;
  void main(){
    float revealed=smoothstep(aReveal-0.025,aReveal+0.025,uReveal);
    vHot=exp(-abs(aReveal-uReveal)*45.0);
    vec3 p=position;
    p.y+=sin(uAge*1.7+aPhase)*0.035+(1.0-revealed)*0.7;
    p.z+=sin(uAge+aPhase)*0.035;
    vec4 mv=modelViewMatrix*vec4(p,1.0);
    gl_Position=projectionMatrix*mv;
    gl_PointSize=clamp(uSize*(300.0/max(1.0,-mv.z))*(1.0+vHot*0.9),1.2,18.0);
    vAlpha=revealed*uOpacity*(0.45+0.45*pow(sin(aPhase+uAge*1.3),2.0));
  }`,
  Ei = `
  uniform vec3 uColour; varying float vAlpha; varying float vHot;
  void main(){
    float d=length(gl_PointCoord-0.5)*2.0;
    float glow=exp(-d*d*5.5)*(1.0-smoothstep(0.75,1.0,d));
    vec3 colour=mix(uColour,vec3(1.0,0.94,0.76),vHot*0.45);
    gl_FragColor=vec4(colour*1.45,glow*vAlpha);
    #include <colorspace_fragment>
  }`;
function bn({ scene: e, position: t = {}, settings: a = {}, mobile: o = !1 }) {
  const n = Ue(a),
    r = n.name || "Diwali Dost",
    b = new et(n.colour),
    i = new Se();
  ((i.name = "premium-skywriting"),
    i.position.set(
      Number.isFinite(t.x) ? t.x : 0,
      n.height,
      Number.isFinite(t.z) ? t.z : 0,
    ),
    (i.rotation.y = Number.isFinite(t.yaw) ? t.yaw % (Math.PI * 2) : 0),
    (i.userData.particleBudget = o ? 600 : 1200));
  const l = Si(r, o);
  e.add(i);
  const d = i.position.clone(),
    s = n.size * Math.min(1, Math.max(0.35, l.aspect / 3)),
    f = s / l.aspect,
    p = {
      uMap: { value: l.texture },
      uColour: { value: b.clone() },
      uAge: { value: 0 },
      uReveal: { value: -0.04 },
      uOpacity: { value: 0 },
      uSize: { value: o ? 0.13 : 0.12 },
    },
    g = new La({
      uniforms: p,
      vertexShader: Ai,
      fragmentShader: zi,
      transparent: !0,
      depthWrite: !1,
      side: ta,
      toneMapped: !1,
      blending: Vt,
      fog: !1,
    }),
    w = new Qe(new Co(s, f), g);
  ((w.renderOrder = 3), i.add(w));
  const u = Mi(l.mask, o ? 540 : 1080),
    c = new Float32Array(u.length),
    h = new Float32Array(u.length / 3),
    S = new Float32Array(h.length);
  for (let F = 0; F < h.length; F++)
    ((c[F * 3] = u[F * 3] * s),
      (c[F * 3 + 1] = u[F * 3 + 1] * f),
      (c[F * 3 + 2] = 0.045),
      (h[F] = F * 2.399963),
      (S[F] = u[F * 3 + 2]));
  const N = new St();
  (N.setAttribute("position", new ct(c, 3)),
    N.setAttribute("aPhase", new ct(h, 1)),
    N.setAttribute("aReveal", new ct(S, 1)));
  const T = new Ra(
    N,
    new La({
      uniforms: p,
      vertexShader: Ci,
      fragmentShader: Ei,
      transparent: !0,
      depthWrite: !1,
      toneMapped: !1,
      blending: Vt,
      fog: !1,
    }),
  );
  ((T.frustumCulled = !1), i.add(T));
  const R = new Se();
  i.add(R);
  const B = new Gn({
      color: b.clone().lerp(new et("#ffe2a4"), 0.16),
      transparent: !0,
      opacity: 0,
      blending: Vt,
      depthWrite: !1,
      toneMapped: !1,
      fog: !1,
    }),
    G = [];
  for (let F = 0; F <= 96; F++) {
    const Y = F / 96,
      U = (Y - 0.5) * s * 0.92;
    G.push(new se(U, -f * 0.48 - 0.22 - Math.sin(Y * Math.PI) * 0.18, 0.01));
  }
  R.add(new Un(new St().setFromPoints(G), B));
  const H = [];
  for (let F = 0; F < 128; F++) {
    const Y = (F / 128) * Math.PI * 2;
    H.push(
      new se(Math.cos(Y) * s * 0.63, Math.sin(Y) * (f * 0.65 + 0.4), -0.12),
    );
  }
  const $ = B.clone(),
    P = new Eo(new St().setFromPoints(H), $);
  R.add(P);
  const A = o ? 60 : 120,
    O = new Float32Array(A * 3),
    v = new St();
  v.setAttribute("position", new ct(O, 3));
  const m = new Io({
      color: b,
      size: o ? 0.075 : 0.065,
      transparent: !0,
      opacity: 0,
      blending: Vt,
      depthWrite: !1,
      toneMapped: !1,
      fog: !1,
    }),
    M = new Ra(v, m);
  ((M.frustumCulled = !1), i.add(M));
  const I = [],
    D = [0.3, 1.65, 3.1];
  let W = 0,
    _ = 0,
    x = !1;
  return {
    focus: d,
    dispose: () => {
      if (x) return;
      ((x = !0), I.splice(0).forEach((U) => U.dispose()), i.removeFromParent());
      const F = new Set(),
        Y = new Set();
      (i.traverse((U) => {
        (U.geometry && F.add(U.geometry), U.material && Y.add(U.material));
      }),
        F.forEach((U) => U.dispose()),
        Y.forEach((U) => U.dispose()),
        l.texture.dispose());
    },
    update(F) {
      if (x) return !1;
      const Y = Number.isFinite(F) ? Math.max(0, Math.min(F, 0.1)) : 0;
      ((W += Y),
        (p.uAge.value = W),
        (p.uReveal.value = Math.min(1.05, W / 3.1 - 0.035)),
        (p.uOpacity.value = Math.min(1, W * 1.4)),
        (B.opacity = Math.min(0.75, W * 0.25)),
        ($.opacity = Math.min(0.19, W * 0.07)),
        (P.rotation.z = Math.sin(W * 0.18) * 0.035),
        (m.opacity = Math.min(0.7, W * 0.25)));
      for (let U = 0; U < A; U++) {
        const te = U * 2.399963,
          j = (W * 0.13 + U / A) % 1;
        ((O[U * 3] = Math.cos(te) * s * (0.35 + (U % 5) * 0.055)),
          (O[U * 3 + 1] = -f * 0.55 + j * (f + 1.8)),
          (O[U * 3 + 2] = Math.sin(te) * 0.3 - 0.1));
      }
      if (
        ((v.attributes.position.needsUpdate = !0), _ < D.length && W >= D[_])
      ) {
        const U = _ === 0 ? -1 : _ === 1 ? 1 : 0,
          te = new se(U * s * 0.65, _ === 2 ? f * 0.7 + 1.5 : -f * 0.15, -1.8);
        (i.localToWorld(te),
          I.push(
            Yn(
              e,
              {
                x: te.x,
                y: te.y,
                z: te.z,
                colour: n.colour,
                pattern: n.pattern,
                multi: !1,
              },
              o,
            ),
          ),
          _++);
      }
      for (let U = I.length - 1; U >= 0; U--) I[U].update(Y) || I.splice(U, 1);
      return !0;
    },
  };
}
const Ha = 6,
  Yt = 18,
  kn = (e) => e && [e.x, e.y, e.z].every(Number.isFinite);
function Ii(e, t, a, o) {
  const n = t.x - e.x,
    r = t.y - e.y,
    b = t.z - e.z,
    i = n * n + r * r + b * b,
    l = i
      ? Math.max(
          0,
          Math.min(
            1,
            ((a.x - e.x) * n + (a.y - e.y) * r + (a.z - e.z) * b) / i,
          ),
        )
      : 0;
  return (
    (e.x + n * l - a.x) ** 2 +
      (e.y + r * l - a.y) ** 2 +
      (e.z + b * l - a.z) ** 2 <=
    o * o
  );
}
function Ti(e, t, a = []) {
  if (!kn(e) || !kn(t)) return null;
  const o = Math.hypot(t.x, t.y, t.z);
  if (o < 0.01) return null;
  const n = { x: t.x / o, y: t.y / o, z: t.z / o };
  let r = null,
    b = 0.986;
  for (const i of a) {
    if (!i.visible) continue;
    const l = i.x - e.x,
      d = i.y - e.y,
      s = i.z - e.z,
      f = Math.hypot(l, d, s),
      p = (l * n.x + d * n.y + s * n.z) / f;
    f > 2 && f < 28 && p > b && ((r = { x: l, y: d, z: s }), (b = p));
  }
  if (r) {
    const i = Math.hypot(r.x, r.z),
      l = i / Yt;
    return { x: r.x / l, y: r.y / l + (Ha * l) / 2, z: r.z / l };
  }
  return { x: n.x * Yt, y: n.y * Yt, z: n.z * Yt };
}
function Pi() {
  let e = 0,
    t = 0,
    a = -10;
  const o = {
      score: 0,
      combo: 0,
      hits: 0,
      shots: 0,
      remaining: 60,
      age: 0,
      phase: "ready",
      targets: [],
      projectiles: [],
    },
    n = [];
  function r(l) {
    (Object.assign(o, {
      score: 0,
      combo: 0,
      hits: 0,
      shots: 0,
      remaining: 60,
      age: 0,
      phase: "playing",
      targets: l
        .slice(0, 6)
        .map((d, s) => ({ ...d, id: s, visible: !0, returnAt: 0 })),
      projectiles: [],
    }),
      (t = 0),
      (a = -10),
      (n.length = 0));
  }
  function b(l, d) {
    if (o.phase !== "playing" || o.age < t) return null;
    const s = Ti(l, d, o.targets);
    if (!s) return null;
    ((t = o.age + 0.3), o.shots++);
    const f = { id: ++e, position: { ...l }, velocity: s, age: 0 };
    return (
      o.projectiles.length >= 16 && o.projectiles.shift(),
      o.projectiles.push(f),
      f
    );
  }
  function i(l) {
    if (o.phase === "playing") {
      if (
        ((l = Math.max(0, Math.min(Number.isFinite(l) ? l : 0, 0.1))),
        (o.age += l),
        (o.remaining = Math.max(0, 60 - o.age)),
        o.remaining <= 0)
      ) {
        ((o.phase = "complete"),
          (o.projectiles = []),
          n.push({ kind: "complete", score: o.score }));
        return;
      }
      o.age - a > 4 && (o.combo = 0);
      for (const d of o.targets)
        !d.visible && o.age >= d.returnAt && (d.visible = !0);
      o.projectiles = o.projectiles.filter((d) => {
        const s = { ...d.position },
          f = d.velocity,
          p = d.position;
        ((d.age += l),
          (p.x += f.x * l),
          (p.y += f.y * l - (Ha * l * l) / 2),
          (p.z += f.z * l),
          (f.y -= Ha * l));
        const g = o.targets.find(
          (w) => w.visible && Ii(s, p, w, w.radius || 0.8),
        );
        return g
          ? ((g.visible = !1),
            (g.returnAt = o.age + 2.8),
            (o.combo = Math.min(5, o.combo + 1)),
            (o.score += 10 * o.combo),
            o.hits++,
            (a = o.age),
            n.push({ kind: "hit", ...g, combo: o.combo, score: o.score }),
            !1)
          : p.y < 0.05 || d.age > 4
            ? (n.push({ kind: "crumbs", x: p.x, y: 0.12, z: p.z }), !1)
            : !0;
      });
    }
  }
  return {
    state: o,
    start: r,
    fire: b,
    update: i,
    drain() {
      return n.splice(0);
    },
  };
}
const wn = (e) => e && Number.isFinite(e.x) && Number.isFinite(e.z),
  Tt = Et.clamp;
function _i({
  scene: e,
  camera: t,
  getAim: a,
  getPosition: o = () => ({ x: 0, z: 0, zone: "market" }),
  getYaw: n = () => 0,
  mobile: r = !1,
  audio: b,
  onShot: i = () => {},
  onStatus: l = () => {},
} = {}) {
  const d = Pi(),
    s = new se(),
    f = new Map(),
    p = new Map(),
    g = [],
    w = [],
    u = new Xa(),
    c = new Nn(),
    h = new se(),
    S = new se(),
    N = new Po();
  let T = null,
    R = null,
    B = null,
    G = !1,
    H = 0,
    $ = 0,
    P = "";
  function A() {
    if (T) return;
    const j = new _o();
    for (let C = 0; C <= 64; C++) {
      const E = (C / 64) * Math.PI * 2,
        k = 0.53 + Math.cos(E * 8) * 0.065;
      C
        ? j.lineTo(Math.cos(E) * k, Math.sin(E) * k)
        : j.moveTo(Math.cos(E) * k, Math.sin(E) * k);
    }
    T = {
      geometries: {
        ball: new $a(0.17, 1),
        crumb: new $a(0.075, 0),
        rosette: new Ro(j),
        ring: new _a(0.36, 0.028, 5, 24),
        disc: new Lo(0.16, 16),
        post: new Nt(0.035, 0.055, 1, 8),
        barrel: new Nt(0.11, 0.13, 0.43, 12),
        band: new _a(0.115, 0.025, 5, 12),
        body: new lt(0.29, 0.19, 0.25),
        grip: new lt(0.1, 0.22, 0.12),
        hand: new Vn(0.08, 10, 8),
      },
      materials: {},
    };
    for (const [C, E] of Object.entries({
      laddoo: 15575858,
      gold: 16109171,
      teal: 3911589,
      pink: 15041188,
      cream: 16772541,
      post: 11766614,
      grip: 2575170,
      skin: 13208421,
    }))
      T.materials[C] = new Ja({
        color: E,
        roughness: C === "gold" ? 0.4 : 0.78,
        metalness: C === "gold" ? 0.3 : 0,
        flatShading: C === "laddoo",
      });
    T.materials.trail = new Gn({
      color: 16764776,
      transparent: !0,
      opacity: 0.55,
      depthWrite: !1,
    });
  }
  function O(j, C, E, k = 0, V = 0, X = 0) {
    const J = new Qe(T.geometries[C], T.materials[E]);
    return (J.position.set(k, V, X), j.add(J), J);
  }
  function v() {
    if (!t?.add) return;
    ((B = new Se()),
      (B.name = "laddoo-handheld-cannon"),
      B.position.set(0.34, -0.29, -0.58),
      B.rotation.set(-0.03, -0.05, -0.06),
      t.add(B));
    const j = O(B, "barrel", "teal", 0, 0.055, -0.15);
    ((j.rotation.x = Math.PI / 2),
      O(B, "band", "gold", 0, 0.055, -0.36),
      O(B, "band", "gold", 0, 0.055, 0.04),
      O(B, "body", "gold", 0, 0.015, 0.055),
      O(B, "grip", "grip", 0, -0.15, 0.11),
      O(B, "hand", "skin", 0.09, -0.1, 0.11),
      O(B, "hand", "skin", -0.13, -0.04, -0.13),
      B.traverse((C) => {
        C.isMesh &&
          ((C.castShadow = !1), (C.frustumCulled = !1), (C.renderOrder = 8));
      }));
  }
  function m() {
    const j = d.state;
    return G
      ? {
          score: j.score,
          combo: j.combo,
          remaining: j.remaining,
          hits: j.hits,
          shots: j.shots,
          phase: j.phase,
        }
      : {
          score: 0,
          combo: 0,
          remaining: 60,
          hits: 0,
          shots: 0,
          phase: "ready",
        };
  }
  function M() {
    const j = m(),
      C = [
        j.score,
        j.combo,
        Math.ceil(j.remaining),
        j.hits,
        j.shots,
        j.phase,
      ].join(":");
    C !== P && ((P = C), l(j));
  }
  function I(j) {
    (e?.remove(j.mesh, j.line), j.line.geometry.dispose());
  }
  function D(j, C) {
    A();
    const E = new Qe(T.geometries.ball, T.materials.laddoo);
    ((E.name = C), E.position.set(j.x, j.y, j.z), (E.castShadow = !1));
    const k = new Float32Array(12);
    for (let J = 0; J < 4; J++) k.set([j.x, j.y, j.z], J * 3);
    const V = new St();
    V.setAttribute("position", new ct(k, 3));
    const X = new Un(V, T.materials.trail);
    return (
      (X.frustumCulled = !1),
      (X.name = `${C}-trail`),
      e?.add(E, X),
      { mesh: E, line: X, history: k }
    );
  }
  function W(j, C, E) {
    (j.history.copyWithin(3, 0, 9),
      j.history.set([C.x, C.y, C.z], 0),
      (j.line.geometry.attributes.position.needsUpdate = !0),
      j.mesh.position.set(C.x, C.y, C.z),
      (j.mesh.rotation.x += E * 7),
      (j.mesh.rotation.z += E * 4));
  }
  function _(j, C = 0) {
    for (A(); w.length >= (r ? 8 : 12);) {
      const X = w.shift();
      (e?.remove(X.mesh), X.mesh.dispose());
    }
    const E = r ? 6 : 10,
      k = new Hn(T.geometries.crumb, T.materials[C > 2 ? "pink" : "gold"], E);
    ((k.name = "laddoo-crumbs"), (k.frustumCulled = !1), e?.add(k));
    const V = Array.from({ length: E }, (X, J) => {
      const _e = J * 2.39996;
      return new se(
        Math.sin(_e) * (1 + (J % 3)) * 0.55,
        1.5 + (J % 4) * 0.3,
        Math.cos(_e) * (1 + (J % 3)) * 0.55,
      );
    });
    w.push({
      mesh: k,
      origin: new se(j.x, j.y || 0.12, j.z),
      velocities: V,
      age: 0,
    });
  }
  function x(j = !1) {
    G = !1;
    for (const C of f.values()) I(C);
    (f.clear(),
      g.splice(0).forEach(I),
      w.splice(0).forEach((C) => {
        (e?.remove(C.mesh), C.mesh.dispose());
      }),
      R && (e?.remove(R), (R = null)),
      p.clear(),
      B && (t?.remove(B), (B = null)),
      (H = 0),
      T &&
        (Object.values(T.geometries).forEach((C) => C.dispose()),
        Object.values(T.materials).forEach((C) => C.dispose()),
        (T = null)),
      (P = ""),
      j || M());
  }
  function L() {
    const j = o();
    if (!wn(j)) return !1;
    (x(!0),
      A(),
      (G = !0),
      (R = new Se()),
      (R.name = "laddoo-mithai-targets"),
      e?.add(R));
    const C =
        j.zone === "neighborhood" ? Tt(j.z - 9, -12, 10) : Tt(j.z - 9, -25, 13),
      E = Array.from({ length: 6 }, (k, V) => ({
        x: ((V % 3) - 1) * 2.1,
        y: V < 3 ? 1.65 : 3.1,
        z: C - (V < 3 ? 0 : 1.1),
        radius: 0.75,
      }));
    (d.start(E), s.set(0, 0, 0));
    for (const k of d.state.targets) {
      const V = new Se();
      ((V.name = `laddoo-target-${k.id}`),
        V.position.set(k.x, 0, k.z),
        R.add(V));
      const X = O(V, "post", "post", 0, k.y / 2, 0);
      X.scale.y = k.y;
      const J = new Se();
      ((J.position.y = k.y),
        V.add(J),
        O(J, "rosette", ["gold", "teal", "pink"][k.id % 3]),
        O(J, "ring", "cream", 0, 0, 0.025),
        O(J, "disc", "laddoo", 0, 0, 0.035),
        p.set(k.id, { group: V, head: J, pop: 0, respawn: 0, wasVisible: !0 }),
        s.add(new se(k.x, k.y, k.z)));
    }
    return (s.multiplyScalar(1 / E.length), v(), M(), !0);
  }
  function F() {
    if (a) return a();
    const j = new se(),
      C = new se();
    if (t?.getWorldPosition && t?.getWorldDirection)
      (t.getWorldPosition(j), t.getWorldDirection(C));
    else {
      const E = o(),
        k = n();
      (j.set(E.x, 1.55, E.z), C.set(-Math.sin(k), 0, -Math.cos(k)));
    }
    return { origin: j, direction: C };
  }
  function Y() {
    if (!G) return !1;
    const j = F();
    if (!j) return !1;
    const C = d.fire(j.origin, j.direction);
    if (!C) return !1;
    const E = D(C.position, `laddoo-local-${C.id}`);
    for (f.set(C.id, E); f.size + g.length > 16 && g.length;) I(g.shift());
    return (
      (H = 1),
      b?.action?.("place"),
      i({
        pitch: Math.atan2(C.velocity.y, Math.hypot(C.velocity.x, C.velocity.z)),
      }),
      M(),
      !0
    );
  }
  function U(j = {}) {
    const C = j.origin || j.position || j;
    if (!wn(C) || Math.abs(C.x) > 100 || Math.abs(C.z) > 100) return !1;
    const E = Number.isFinite(j.yaw) ? j.yaw : 0,
      k = Tt(Number.isFinite(j.pitch) ? j.pitch : 0, -1.2, 1.2),
      V = { x: C.x, y: Tt(Number.isFinite(C.y) ? C.y : 1.55, 0.2, 4), z: C.z };
    for (
      ;
      g.length >= Math.min(r ? 6 : 8, Math.max(0, 16 - f.size)) && g.length;
    )
      I(g.shift());
    if (f.size >= 16) return !1;
    const X = D(V, `laddoo-remote-${++$}`);
    return (
      Object.assign(X, {
        position: { ...V },
        velocity: {
          x: -Math.sin(E) * 18,
          y: Math.tan(k) * 18,
          z: -Math.cos(E) * 18,
        },
        age: 0,
      }),
      g.push(X),
      !0
    );
  }
  function te(j) {
    if (!(!G && !g.length && !w.length)) {
      if (((j = Tt(Number.isFinite(j) ? j : 0, 0, 0.1)), G)) {
        d.update(j);
        for (const E of d.drain())
          if (E.kind === "hit") {
            const k = p.get(E.id);
            (k && (k.pop = 0.22), _(E, E.combo), b?.chime?.());
          } else E.kind === "crumbs" && _(E);
        const C = new Set(d.state.projectiles.map((E) => E.id));
        for (const [E, k] of f) C.has(E) || (I(k), f.delete(E));
        for (const E of d.state.projectiles) {
          let k = f.get(E.id);
          (k || ((k = D(E.position, `laddoo-local-${E.id}`)), f.set(E.id, k)),
            W(k, E.position, j));
        }
        for (const E of d.state.targets) {
          const k = p.get(E.id);
          if (!k) continue;
          ((k.pop = Math.max(0, k.pop - j)),
            E.visible && !k.wasVisible && (k.respawn = 0.25),
            (k.respawn = Math.max(0, k.respawn - j)),
            (k.head.visible = E.visible || k.pop > 0));
          const V = E.visible
            ? 1 + Math.sin((k.respawn / 0.25) * Math.PI) * 0.16
            : k.pop / 0.22;
          (k.head.scale.setScalar(Math.max(0.01, V)),
            (k.wasVisible = E.visible),
            t?.position &&
              (k.head.rotation.y = Math.atan2(
                t.position.x - E.x,
                t.position.z - E.z,
              )));
        }
        ((H = Math.max(0, H - j * 7)),
          B &&
            ((B.position.z = -0.58 + H * 0.085),
            (B.rotation.x = -0.03 + H * 0.12)),
          M());
      }
      for (let C = g.length - 1; C >= 0; C--) {
        const E = g[C];
        ((E.age += j),
          (E.position.x += E.velocity.x * j),
          (E.position.y += E.velocity.y * j - 3 * j * j),
          (E.position.z += E.velocity.z * j),
          (E.velocity.y -= 6 * j),
          W(E, E.position, j),
          (E.age >= 4 || E.position.y < 0.05) &&
            (_({ x: E.position.x, y: 0.12, z: E.position.z }),
            I(E),
            g.splice(C, 1)));
      }
      for (let C = w.length - 1; C >= 0; C--) {
        const E = w[C];
        if (((E.age += j), E.age >= 0.7)) {
          (e?.remove(E.mesh), E.mesh.dispose(), w.splice(C, 1));
          continue;
        }
        for (let k = 0; k < E.velocities.length; k++) {
          const V = E.velocities[k];
          (S.copy(E.origin).addScaledVector(V, E.age),
            (S.y -= 3 * E.age * E.age),
            c.setFromEuler(N.set(E.age * 4, k + E.age * 3, 0)),
            h.setScalar(Math.max(0.01, 1 - E.age / 0.7)),
            u.compose(S, c, h),
            E.mesh.setMatrixAt(k, u));
        }
        E.mesh.instanceMatrix.needsUpdate = !0;
      }
    }
  }
  return {
    begin: L,
    fire: Y,
    update: te,
    clear: x,
    remoteShot: U,
    focus: s,
    get status() {
      return m();
    },
  };
}
const Li = {
  laddoo_cannon: "laddoo",
  sky_blast: "sky",
  name_sky: "name",
  ravan_ultimate: "ravan",
};
function Fa(e) {
  if (e?.preview !== !0) return null;
  const t = e.productId || Li[e.kind];
  return ["laddoo", "sky", "name", "ravan"].includes(t) ? t : null;
}
function vn({
  scene: e,
  audio: t,
  getPosition: a,
  getYaw: o = () => 0,
  mobile: n = !1,
  onCaption: r = () => {},
  onReact: b = () => {},
  onSmoke: i = () => {},
}) {
  const l = new se(),
    d = new se(),
    s = [];
  let f = null,
    p = 0,
    g = null,
    w = -1,
    u = [],
    c,
    h = Ue();
  const S = () => {
    if (!f) return;
    e.remove(f);
    const H = new Set(),
      $ = new Set(),
      P = new Set();
    (f.traverse((A) => {
      if ((A.geometry && H.add(A.geometry), A.material))
        for (const O of Array.isArray(A.material) ? A.material : [A.material])
          ($.add(O), O.map && P.add(O.map));
    }),
      H.forEach((A) => A.dispose()),
      $.forEach((A) => A.dispose()),
      P.forEach((A) => A.dispose()),
      (f = null));
  };
  function N() {
    (S(),
      s.splice(0).forEach((H) => H.dispose()),
      (u = []),
      (c = null),
      (g = null),
      l.set(0, 0, 0));
  }
  function T(H, $, P, A, O) {
    const v = new Qe(H, new Ja({ color: $, roughness: 0.75 }));
    return (v.position.set(P, A, O), f.add(v), v);
  }
  function R(H, $ = !1) {
    for (; s.length >= (n ? 4 : 7);) s.shift().dispose();
    (s.push(
      Yn(
        e,
        {
          x: f.position.x + ((H % 3) - 1) * 4,
          y: h.height + (H % 3) * 1.4,
          z: f.position.z - 4,
          colour: Number.parseInt(h.colour.slice(1), 16),
          pattern: h.pattern,
          multi: !1,
        },
        n,
      ),
    ),
      i(
        f.position.x + ((H % 3) - 1) * 4,
        g === "ravan" ? 1 : h.height,
        f.position.z - 4,
        g === "ravan",
      ),
      t?.fire?.("sky", !0));
  }
  function B(H) {
    const $ = Fa(H);
    if (!$) return !1;
    const P = H.position || a(),
      A = Number.isFinite(H.yaw) ? H.yaw : o();
    if (!P || ![P.x, P.z, A].every(Number.isFinite)) return !1;
    if (
      (N(),
      (h = Ue(H)),
      (g = $),
      (p = 0),
      (w = -1),
      (f = new Se()),
      P.zone === "market"
        ? f.position.set(0, 0, Math.min(14, Math.max(-25, P.z - 9)))
        : f.position.set(P.x - Math.sin(A) * 9, 0, P.z - Math.cos(A) * 9),
      d.copy(f.position),
      (d.y = g === "name" || g === "sky" ? 13 : 2),
      e.add(f),
      g === "laddoo")
    ) {
      const O = T(new Nt(0.25, 0.32, 1.1, 12), 4232842, 0, 0.7, 0);
      O.rotation.x = -1.05;
      for (const M of [-0.4, 0.4]) {
        const I = T(new Nt(0.32, 0.32, 0.15, 12), 13803602, M, 0.27, 0.2);
        I.rotation.z = Math.PI / 2;
      }
      const v = n ? 18 : 32,
        m = new $a(0.17, 1);
      for (let M = 0; M < v; M++) {
        const I = M * 2.39996,
          D = T(m, 15247151, 0, 1, 0);
        u.push({
          mesh: D,
          v: new se(
            Math.cos(I) * (2 + (M % 3)),
            5 + (M % 4),
            -2 - Math.sin(I) * 3,
          ),
          delay: M * 0.045,
        });
      }
    } else if (g === "ravan") {
      (f.scale.setScalar(1.5),
        (d.y = 3.5),
        T(new lt(1.8, 2.5, 0.65), 10967417, 0, 1.8, 0));
      for (const O of [-0.55, 0.55])
        T(new lt(0.48, 1.3, 0.5), 6121876, O, 0.65, 0);
      for (let O = 0; O < 10; O++) {
        const v = (O - 4.5) * 0.44;
        (T(new Vn(0.24, 10, 8), 14725504, v, 3.28, 0),
          T(new $o(0.24, 0.45, 10), 15713618, v, 3.7, 0),
          T(new lt(0.22, 0.055, 0.045), 4336951, v, 3.18, 0.23));
      }
      T(new lt(3.4, 0.3, 0.45), 13072765, 0, 2.5, 0);
    } else if (g === "name") {
      const O = [
          ...String(H.name || "Diwali Friend").replace(
            /[\u0000-\u001f\u007f<>]/g,
            "",
          ),
        ]
          .slice(0, 20)
          .join(""),
        v = document.createElement("canvas");
      ((v.width = 1024), (v.height = 256));
      const m = v.getContext("2d");
      (m.clearRect(0, 0, 1024, 256),
        (m.textAlign = "center"),
        (m.textBaseline = "middle"),
        (m.font = "bold 84px sans-serif"),
        (m.fillStyle = "#fff0bb"),
        (m.shadowColor = "#ffb952"),
        (m.shadowBlur = 24),
        m.fillText(O, 512, 125, 940));
      const M = new Qa(v);
      ((M.colorSpace = ca),
        (c = new Wn(
          new Fn({ map: M, transparent: !0, depthTest: !1, toneMapped: !1 }),
        )),
        c.position.set(0, 12.5, 0),
        c.scale.set(12, 3, 1),
        f.add(c));
    }
    return (
      r(
        `${{ laddoo: "Laddoo Cannon", ravan: "Ravan Ultimate", name: "Name in the Sky", sky: "Sky Blast" }[g]} · Look ahead`,
      ),
      b(g),
      !0
    );
  }
  function G(H) {
    if (g) {
      p += Math.max(0, Math.min(H, 0.1));
      for (let $ = s.length - 1; $ >= 0; $--) s[$].update(H) || s.splice($, 1);
      if (g === "laddoo")
        for (const $ of u) {
          const P = Math.max(0, p - $.delay);
          (($.mesh.visible = P > 0 && P < 3),
            $.mesh.position.set(
              $.v.x * P,
              1 + $.v.y * P - 3 * P * P,
              $.v.z * P,
            ),
            $.mesh.rotation.set(P * 3, P * 2, P));
        }
      else {
        const $ = g === "ravan" ? 2 : 0,
          P = Math.floor((p - $) / 0.75);
        if (
          (P >= 0 && P !== w && p < 7 && ((w = P), R(P, g === "sky")),
          g === "ravan" && p > 2)
        )
          if (
            ((f.scale.y = 1.5 * Math.max(0.03, 1 - (p - 2) / 2)),
            (f.rotation.z = Math.sin(p * 5) * 0.08),
            p < 3.2 &&
              !globalThis.matchMedia?.("(prefers-reduced-motion: reduce)")
                ?.matches)
          ) {
            const A = (n ? 0.018 : 0.035) * (1 - (p - 2) / 1.2);
            l.set(Math.sin(p * 61) * A, Math.cos(p * 73) * A, 0);
          } else l.set(0, 0, 0);
        c && (c.material.opacity = Math.min(1, p * 2, Math.max(0, 9 - p)));
      }
      p > (g === "laddoo" ? 5.5 : 10) && N();
    }
  }
  return {
    play: B,
    update: G,
    clear: N,
    cameraOffset: l,
    focus: d,
    get active() {
      return g !== null;
    },
    get burstCount() {
      return s.length;
    },
  };
}
function Ri(e) {
  const {
      scene: t,
      getPosition: a,
      getYaw: o = () => 0,
      mobile: n = !1,
      onStatus: r = () => {},
    } = e,
    b = xi(t, n),
    i = { ...e, onSmoke: (...v) => b.emit(...v) },
    l = vn(i),
    d = vn({ ...i, onCaption: () => {} }),
    s = _i(e),
    f = new se(),
    p = [];
  let g = 0;
  const w = () => {
    ((g = 0), e.audio?.setMusicSuppressed?.(!1));
  };
  let u = null,
    c = Ue(),
    h = null,
    S = "ready",
    N = 0;
  function T(v = a(), m = o()) {
    return v.zone === "market"
      ? {
          x: 0,
          z: Math.min(14, Math.max(-25, v.z - 9)),
          yaw: Math.atan2(v.x, v.z - Math.min(14, Math.max(-25, v.z - 9))),
        }
      : { x: v.x - Math.sin(m) * 10, z: v.z - Math.cos(m) * 10, yaw: m };
  }
  function R() {
    (w(),
      b.clear(),
      l.clear(),
      s.clear(),
      h?.dispose(),
      (h = null),
      (u = null),
      (S = "ready"));
  }
  function B() {
    (R(), d.clear(), p.splice(0).forEach((v) => v.dispose()));
  }
  function G(v) {
    const m = Fa(v),
      M = a();
    if (!m || !M || ![M.x, M.z].every(Number.isFinite)) return !1;
    (R(), (u = m), (c = Ue(v)));
    const I = T();
    return (
      f.set(I.x, u === "name" || u === "sky" ? c.height : 3.2, I.z),
      u === "laddoo" && (s.begin(), f.copy(s.focus), (S = "playing")),
      r(P()),
      !0
    );
  }
  function H(v) {
    return (
      (c = Ue(v)),
      (u === "name" || u === "sky") && (f.y = c.height),
      { ...c }
    );
  }
  function $() {
    if (!u) return !1;
    if (u === "laddoo")
      return (s.begin(), f.copy(s.focus), (S = "playing"), !0);
    if (((g = 10), e.audio?.setMusicSuppressed?.(!0), u === "name"))
      return (
        h?.dispose(),
        (h = bn({ scene: t, position: T(), settings: c, mobile: n })),
        f.copy(h.focus),
        (S = "playing"),
        b.emit(f.x, f.y - 2, f.z - 3, !0),
        e.audio?.fire?.("sky", !0),
        !0
      );
    const v = l.play({ productId: u, preview: !0, ...c });
    return (v && (f.copy(l.focus), (S = "playing")), v);
  }
  function P() {
    return u === "laddoo"
      ? { ...s.status, productId: u }
      : { productId: u, phase: S, score: 0, combo: 0, hits: 0, remaining: 0 };
  }
  function A(v) {
    const m = Fa(v);
    if (!m) return !1;
    if (v.remote) {
      if (m === "laddoo" && v.action === "shot") return s.remoteShot(v);
      if (m === "name") {
        const D = v.position;
        if (!D || ![D.x, D.z].every(Number.isFinite)) return !1;
        for (; p.length >= 2;) p.shift().dispose();
        (p.push(
          bn({
            scene: t,
            position: T(D, Number.isFinite(v.yaw) ? v.yaw : 0),
            settings: Ue(v),
            mobile: n,
          }),
        ),
          (g = 10),
          e.audio?.setMusicSuppressed?.(!0));
        const W = T(D, v.yaw || 0);
        return (b.emit(W.x, 11, W.z - 3, !0), !0);
      }
      const I = d.play(v);
      return (I && ((g = 10), e.audio?.setMusicSuppressed?.(!0)), I);
    }
    const M = l.play(v);
    return (M && f.copy(l.focus), M);
  }
  function O(v) {
    (l.update(v),
      d.update(v),
      s.update(v),
      b.update(v),
      g > 0 && ((g = Math.max(0, g - v)), g || w()),
      h && !h.update(v) && (h.dispose(), (h = null), (S = "complete")));
    for (let m = p.length - 1; m >= 0; m--)
      p[m].update(v) || (p[m].dispose(), p.splice(m, 1));
    (u &&
      u !== "name" &&
      u !== "laddoo" &&
      S === "playing" &&
      !l.active &&
      (S = "complete"),
      (N += v),
      u && N > 0.1 && (r(P()), (N = 0)));
  }
  return {
    begin: G,
    configure: H,
    launch: $,
    fire: () => u === "laddoo" && s.fire(),
    play: A,
    update: O,
    clear: B,
    focus: f,
    cameraOffset: l.cameraOffset,
    get active() {
      return !!u || l.active;
    },
    get burstCount() {
      return l.burstCount + d.burstCount;
    },
    get status() {
      return P();
    },
  };
}
const xn = {
    name: "Naam aasmaan mein",
    sky: "Apna Sky Blast",
    ravan: "Raavan ka bada show",
    laddoo: "Laddoo nishana",
  },
  xa = {
    name: "Skywriting chalao",
    sky: "Fireworks chalao",
    ravan: "Raavan jalao",
    laddoo: "Naya round",
  },
  Mn = (e) => (typeof e == "string" ? e : e.value),
  Ma = (e) => (typeof e == "string" ? e : e.label),
  Sa = (e) =>
    !!e &&
    (e.isContentEditable ||
      ["INPUT", "TEXTAREA", "SELECT"].includes(e.tagName)),
  qt = (e, t, a = 1e6) =>
    Number.isFinite(Number(e)) ? Math.max(0, Math.min(a, Number(e))) : t;
function $i({
  onChange: e = () => {},
  onLaunch: t = () => {},
  onFire: a = () => {},
  onStop: o = () => {},
  onCapture: n = () => {},
} = {}) {
  const r = document.createElement("aside");
  ((r.id = "premium-controls"),
    (r.hidden = !0),
    r.setAttribute("aria-label", "Mela show controls"),
    document.body.append(r));
  let b = !1,
    i = null,
    l = Ue(),
    d = {},
    s = {},
    f = null;
  const p = [],
    g = new Set(),
    w = () => ({ ...l });
  function u(m, M, I = r) {
    const D = document.createElement(m);
    return (M !== void 0 && (D.textContent = M), I.append(D), D);
  }
  function c(m, M, I, D) {
    (m.addEventListener(M, I, D), p.push(() => m.removeEventListener(M, I, D)));
  }
  function h(m, M, I) {
    const D = u("button", m, M);
    return ((D.type = "button"), c(D, "click", I), D);
  }
  function S(m) {
    (m ? g.delete(m) : g.clear(),
      !g.size && f !== null && (clearInterval(f), (f = null)));
  }
  function N() {
    b && i === "laddoo" && d.phase !== "complete" && a(w());
  }
  function T(m) {
    !b ||
      i !== "laddoo" ||
      d.phase === "complete" ||
      g.has(m) ||
      (g.add(m),
      f === null &&
        (N(),
        b &&
          i === "laddoo" &&
          g.size &&
          d.phase !== "complete" &&
          ((f = setInterval(N, 350)), f.unref?.())));
  }
  function R(m) {
    ((l = Ue({ ...l, ...m })), B(), e(w()));
  }
  function B() {
    for (const [m, M] of s.colours || [])
      m.setAttribute("aria-pressed", String(M === l.colour));
    (s.heightOutput && (s.heightOutput.textContent = `${l.height} m`),
      s.sizeOutput && (s.sizeOutput.textContent = String(l.size)));
  }
  function G(m) {
    const M = u("fieldset", void 0, m);
    u("legend", "Rang chuno", M);
    const I = u("div", void 0, M);
    ((I.className = "premium-control-swatches"), (s.colours = []));
    for (const D of Ba.slice(0, 6)) {
      const W = Mn(D),
        _ = h("", I, () => R({ colour: W }));
      ((_.className = "premium-control-swatch"),
        (_.style.backgroundColor = W),
        _.setAttribute("aria-label", `${Ma(D)} rang`),
        (_.title = Ma(D)),
        s.colours.push([_, W]));
    }
  }
  function H(m) {
    const M = u("label", "Phool ka andaaz", m),
      I = u("select", void 0, M);
    I.id = "premium-control-pattern";
    for (const D of no) {
      const W = u("option", Ma(D), I);
      W.value = Mn(D);
    }
    ((I.value = l.pattern), c(I, "change", () => R({ pattern: I.value })));
  }
  function $(m, M, I, D, W) {
    const _ = u("label", I, m),
      x = u("output", void 0, _),
      L = u("input", void 0, _);
    ((s[`${M}Output`] = x),
      (L.id = `premium-control-${M}`),
      (L.type = "range"),
      (L.min = String(D)),
      (L.max = String(W)),
      (L.step = "1"),
      (L.value = String(l[M])),
      L.setAttribute("aria-label", I),
      c(L, "input", () => R({ [M]: Number(L.value) })));
  }
  function P() {
    (S(),
      i === "laddoo" &&
        O({
          phase: "playing",
          score: 0,
          combo: 0,
          remaining: 60,
          hits: 0,
          shots: 0,
        }),
      t(w()));
  }
  function A({ silent: m = !1 } = {}) {
    b &&
      (S(),
      p.splice(0).forEach((M) => M()),
      (b = !1),
      (i = null),
      (r.hidden = !0),
      r.replaceChildren(),
      (s = {}),
      m || o());
  }
  function O(m = {}) {
    ((d = { ...d, ...m }),
      b &&
        (i === "laddoo"
          ? ((s.score.textContent = String(Math.floor(qt(d.score, 0)))),
            (s.combo.textContent = `${Math.floor(qt(d.combo, 0))}×`),
            (s.remaining.textContent = `${Math.ceil(qt(d.remaining, 60, 60))}s`),
            (s.hits.textContent = String(Math.floor(qt(d.hits, 0)))),
            (s.fire.disabled = d.phase === "complete"),
            s.fire.disabled && S(),
            (s.launch.textContent =
              d.phase === "complete" ? "Phir se khelo" : "Naya round"))
          : s.launch &&
            (s.launch.textContent =
              d.phase === "complete" ? "Phir se chalao" : xa[i]),
        (s.status.textContent =
          typeof d.message == "string"
            ? d.message
            : i === "laddoo"
              ? d.phase === "complete"
                ? "Round poora! Phir se nishana lagao."
                : "Nishana lagao · Fire hold karo ya Space dabao"
              : d.phase === "playing"
                ? "Show chalu hai · Camera se aasmaan dekho"
                : "Apni pasand chuno, phir show chalao.")));
  }
  function v(m, M = {}) {
    if (!Object.hasOwn(xn, m)) return !1;
    (A({ silent: !0 }),
      (i = m),
      (l = Ue(M)),
      (d = { phase: "ready", score: 0, combo: 0, remaining: 60, hits: 0 }),
      (b = !0),
      (r.hidden = !1),
      (r.dataset.product = m));
    const I = u("div");
    I.className = "premium-control-heading";
    const D = u("strong", xn[m], I);
    ((D.id = "premium-control-title"), r.setAttribute("aria-labelledby", D.id));
    const W = h("Done", I, () => A());
    if (((W.className = "premium-control-done"), m === "laddoo")) {
      const _ = u("dl");
      _.className = "premium-control-stats";
      for (const [L, F] of [
        ["score", "Score"],
        ["combo", "Combo"],
        ["remaining", "Waqt"],
        ["hits", "Hits"],
      ]) {
        const Y = u("div", void 0, _);
        (u("dt", F, Y), (s[L] = u("dd", "0", Y)));
      }
      const x = u("div");
      ((x.className = "premium-control-actions"),
        (s.fire = u("button", "Fire · hold karo", x)),
        (s.fire.type = "button"),
        (s.fire.id = "premium-control-fire"),
        s.fire.setAttribute(
          "aria-label",
          "Laddoo chalao. Hold karo ya Space dabao.",
        ),
        c(s.fire, "pointerdown", (L) => {
          (L.button !== void 0 && L.button !== 0) ||
            (L.preventDefault(),
            s.fire.setPointerCapture?.(L.pointerId),
            T("pointer"));
        }),
        c(s.fire, "click", (L) => {
          L.detail === 0 && N();
        }));
      for (const L of ["pointerup", "pointercancel", "lostpointercapture"])
        c(s.fire, L, () => S("pointer"));
      s.launch = h(xa[m], x, P);
      for (const L of ["pointerup", "pointercancel"])
        c(window, L, () => S("pointer"));
    } else {
      if (m === "name") {
        const x = u("label", "Kaunsa naam likhein?"),
          L = u("input", void 0, x);
        ((L.id = "premium-control-name"),
          (L.type = "text"),
          (L.maxLength = 20),
          (L.autocomplete = "off"),
          (L.value = l.name),
          L.setAttribute("aria-label", "Aasmaan mein naam, 20 akshar tak"),
          c(L, "input", () => R({ name: L.value })));
      }
      if ((G(r), m === "name")) {
        const x = u("details");
        u("summary", "Height, size aur andaaz", x).setAttribute(
          "aria-label",
          "Skywriting ke aur options",
        );
        const F = u("div", void 0, x);
        ((F.className = "premium-control-advanced"),
          H(F),
          $(F, "height", "Kitna ooncha?", 9, 18),
          $(F, "size", "Naam ka size", 10, 20));
      } else H(r);
      const _ = u("div");
      ((_.className = "premium-control-actions"),
        (s.launch = h(xa[m], _, P)),
        m === "name" && h("Photo card", _, () => n(w())));
    }
    return (
      (s.status = u("p")),
      (s.status.className = "premium-control-status"),
      s.status.setAttribute("role", "status"),
      c(r, "keydown", (_) => {
        Sa(_.target) && _.stopPropagation();
      }),
      c(window, "blur", () => S()),
      c(
        window,
        "keydown",
        (_) => {
          if (_.code === "Escape") {
            (_.preventDefault(), _.stopPropagation(), A());
            return;
          }
          m !== "laddoo" ||
            _.code !== "Space" ||
            Sa(_.target) ||
            Sa(document.activeElement) ||
            (_.target?.tagName === "BUTTON" && _.target !== s.fire) ||
            (_.preventDefault(), _.stopPropagation(), T("keyboard"));
        },
        !0,
      ),
      c(
        window,
        "keyup",
        (_) => {
          _.code === "Space" && S("keyboard");
        },
        !0,
      ),
      B(),
      O(d),
      e(w()),
      !0
    );
  }
  return {
    open: v,
    updateStatus: O,
    close: A,
    get active() {
      return b;
    },
    get product() {
      return i;
    },
    get settings() {
      return w();
    },
  };
}
let Pt;
function oo() {
  return window.YT?.Player
    ? Promise.resolve(window.YT)
    : Pt ||
        ((Pt = new Promise((e, t) => {
          const a = document.createElement("script"),
            o = window.onYouTubeIframeAPIReady;
          let n = !1;
          const r = () => {
              n ||
                ((n = !0),
                clearTimeout(b),
                a.remove?.(),
                (Pt = null),
                t(Error("YouTube API unavailable")));
            },
            b = setTimeout(r, 15e3);
          (b.unref?.(),
            (window.onYouTubeIframeAPIReady = () => {
              if (!n) {
                ((n = !0), clearTimeout(b));
                try {
                  o?.();
                } catch {}
                e(window.YT);
              }
            }),
            (a.src = "https://www.youtube.com/iframe_api"),
            (a.onerror = r),
            document.head.append(a));
        })),
        Pt);
}
function ji(e = "0") {
  if (/^\d+$/.test(e)) return Math.min(86400, Number(e));
  const t = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(e);
  return t && t[0]
    ? Math.min(
        86400,
        Number(t[1] || 0) * 3600 + Number(t[2] || 0) * 60 + Number(t[3] || 0),
      )
    : 0;
}
function tn(e) {
  return (
    !!e &&
    typeof e == "object" &&
    (e.videoId === null ||
      (typeof e.videoId == "string" &&
        /^[A-Za-z0-9_-]{11}$/.test(e.videoId))) &&
    (e.playlistId === null ||
      (typeof e.playlistId == "string" &&
        /^[A-Za-z0-9_-]{10,100}$/.test(e.playlistId))) &&
    !!(e.videoId || e.playlistId) &&
    Number.isInteger(e.start) &&
    e.start >= 0 &&
    e.start <= 86400
  );
}
function Di(e) {
  if (typeof e != "string" || e.trim().length > 2048) return null;
  const t = e.trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(t))
    return { videoId: t, playlistId: null, start: 0 };
  try {
    const a = new URL(/^https?:\/\//i.test(t) ? t : `https://${t}`);
    if (
      !["http:", "https:"].includes(a.protocol) ||
      a.username ||
      a.password ||
      a.port
    )
      return null;
    const o = a.hostname.toLowerCase(),
      n = a.pathname.split("/").filter(Boolean);
    if (
      ![
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "music.youtube.com",
        "youtu.be",
        "www.youtu.be",
        "www.youtube-nocookie.com",
        "youtube-nocookie.com",
      ].includes(o)
    )
      return null;
    let r = null;
    o.endsWith("youtu.be")
      ? (r = n[0] || null)
      : n[0] === "watch"
        ? (r = a.searchParams.get("v"))
        : ["shorts", "live", "embed"].includes(n[0]) &&
          n[1] !== "videoseries" &&
          (r = n[1] || null);
    const b = a.searchParams.get("list");
    if (!r && n[0] !== "playlist" && n[1] !== "videoseries" && n[0] !== "watch")
      return null;
    const i = {
      videoId: r,
      playlistId: b,
      start: ji(
        a.searchParams.get("t") ||
          a.searchParams.get("start") ||
          a.hash.replace(/^#t=/, ""),
      ),
    };
    return tn(i) ? i : null;
  } catch {
    return null;
  }
}
function Sn(e) {
  const t = new URLSearchParams();
  return (
    e.videoId && t.set("v", e.videoId),
    e.playlistId && t.set("list", e.playlistId),
    e.start && t.set("t", `${e.start}s`),
    `https://www.youtube.com/${e.videoId ? "watch" : "playlist"}?${t}`
  );
}
function Ni({
  state: e,
  act: t,
  audio: a,
  camera: o,
  beginView: n = () => {},
  endView: r = () => {},
  updateView: b = () => {},
  createSurface: i = () => ci(o),
}) {
  const l = (R) => document.getElementById(R);
  let d = !1,
    s,
    f = !1,
    p,
    g = 0,
    w,
    u = !1,
    c;
  const h = (R) => {
    d && (l("cinema-status").textContent = R);
  };
  function S() {
    d &&
      ((d = !1),
      g++,
      s?.destroy?.(),
      (s = null),
      (f = !1),
      c?.destroy(),
      (c = null),
      (l("cinema-controls").hidden = !0),
      document.body.classList.remove("cinema-watching"),
      a.setMusic(w.music),
      a.setEffects(w.effects),
      a.setVoices(w.voices),
      r());
  }
  (document.addEventListener(
    "keydown",
    (R) => {
      d &&
        R.code === "Escape" &&
        (R.preventDefault(), R.stopImmediatePropagation(), S());
    },
    !0,
  ),
    document.addEventListener("visibilitychange", () => {
      !d ||
        !s ||
        (document.hidden
          ? ((u = s.getPlayerState?.() === 1), s.pauseVideo?.())
          : u && s.playVideo?.());
    }));
  function N() {
    !f ||
      !p ||
      (p.videoId
        ? s.loadVideoById({ videoId: p.videoId, startSeconds: p.start })
        : s.loadPlaylist({
            list: p.playlistId,
            listType: "playlist",
            index: 0,
            startSeconds: p.start,
          }),
      document.hidden && s.pauseVideo?.());
  }
  async function T(R) {
    ((p = R),
      t({ type: "setMovie", movie: R }),
      (l("cinema-external").href = Sn(R)),
      (l("cinema-external").hidden = !1),
      (l("cinema-picker").open = !1),
      h("Tumhara YouTube video load ho raha hai…"));
    const B = ++g;
    try {
      if ((await oo(), !d || B !== g)) return;
      if (s) {
        N();
        return;
      }
      s = new window.YT.Player("cinema-player", {
        width: 960,
        height: 540,
        videoId: R.videoId || void 0,
        playerVars: {
          controls: 1,
          playsinline: 1,
          origin: location.origin,
          rel: 0,
          ...(R.videoId ? {} : { listType: "playlist", list: R.playlistId }),
        },
        events: {
          onReady(G) {
            !d || G.target !== s || ((f = !0), s.setVolume?.(60), N());
          },
          onStateChange(G) {
            d &&
              G.data === 1 &&
              h("Tumhari movie night · Jab chaaho uthkar ghoom sakte ho.");
          },
          onAutoplayBlocked() {
            h(
              "Awaaz ke saath dekhne ke liye stage screen ke Play button par tap karo.",
            );
          },
          onError() {
            h(
              "Ye video embed nahi ho saka. YouTube link kholo, dusra video chuno, ya uthkar mela ghoomo.",
            );
          },
        },
      });
    } catch {
      h(
        "YouTube nahi jud paaya. Watch on YouTube kholo ya Stand up & explore dabao.",
      );
    }
  }
  return {
    get active() {
      return d;
    },
    close: S,
    update(R) {
      d && (b(R), c?.render());
    },
    open() {
      if (d) return;
      ((w = { music: a.music, effects: a.effects, voices: a.voices }),
        (d = !0),
        (c = i()),
        n(),
        (l("cinema-controls").hidden = !1),
        document.body.classList.add("cinema-watching"),
        a.setMusic(!1),
        a.setEffects(!1),
        a.setVoices(!1));
      const R = e.movie;
      ((l("cinema-link").value = R ? Sn(R) : ""),
        (l("cinema-picker").open = !R),
        (l("cinema-watch").onclick = () => {
          const B = Di(l("cinema-link").value);
          B ? T(B) : h("Sahi YouTube video ya playlist ka link paste karo.");
        }),
        (l("cinema-link").onkeydown = (B) => {
          B.key === "Enter" &&
            (B.preventDefault(), l("cinema-watch").onclick());
        }),
        (l("cinema-back").onclick = S),
        R
          ? T(R)
          : (h("Apna YouTube link paste karo. Koi fixed video nahi chalegi."),
            (l("cinema-external").hidden = !0)));
    },
  };
}
function Oi({ state: e, act: t, audio: a, beginView: o, onStop: n, spawn: r }) {
  const b = (w) => document.getElementById(w);
  let i = !1,
    l = 0,
    d = 0,
    s = 0,
    f = 0,
    p = !1;
  function g() {
    ((i = !1),
      (b("finale-controls").hidden = !0),
      document.body.classList.remove("finale-active"),
      n());
  }
  return (
    (b("finale-leave").onclick = g),
    (b("finale-center").onclick = o),
    {
      get active() {
        return i;
      },
      start() {
        e.zone !== "neighborhood" ||
          (!fe(e) && e.pooja.length !== 4) ||
          i ||
          ((p = e.fireworksWatched),
          (l = p ? 0 : e.fireworksSeconds),
          (f = Math.floor(l)),
          (d = be.findIndex((w) => w.at >= l)),
          d < 0 && (d = be.length),
          (s = be.findIndex((w) => w.at + 1.05 >= l)),
          s < 0 && (s = be.length),
          (i = !0),
          o(),
          (b("finale-controls").hidden = !1),
          document.body.classList.add("finale-active"));
      },
      stop: g,
      update(w, u) {
        if (i) {
          for (
            l = di(l, w, u),
              b("finale-hint").textContent = u
                ? "20 shots · Rangon wali Diwali!"
                : "Aasmaan ki taraf dekho · show tumhara intezaar kar raha hai",
              b("finale-progress").max = De,
              b("finale-progress").value = l,
              b("finale-center").hidden = u;
            d < be.length && be[d].at <= l;
          )
            r(be[d++]);
          for (; s < be.length && be[s].at + 1.05 <= l;)
            (s++, a.fire("sky", !0));
          (!p &&
            Math.floor(l) > f &&
            ((f = Math.floor(l)), t({ type: "watchFireworks", seconds: 1 })),
            l >= De && g());
        }
      },
    }
  );
}
const $t = {
    mother_start: [
      "मम्मी",
      "अरे बेटा, फोन छोड़। दिवाली की सफाई करनी है। पहले अपना कमरा साफ कर लो, फिर बाज़ार जाना।",
      "female",
    ],
    mother_reward: [
      "मम्मी",
      "शाबाश! ये दो हज़ार रुपये ले। दीये, रंगोली के रंग और लाइट के बल्ब ले आना। सारे पैसे पटाखों में मत उड़ा देना!",
      "female",
    ],
    mother_remind: [
      "मम्मी",
      "बिस्तर के नीचे, अलमारी, मेज़ और पुराने डब्बे। चारों जगह सफाई होनी चाहिए, समझे?",
      "female",
    ],
    mother_papa: [
      "मम्मी",
      "अब पापा की भी मदद कर दो। उनका ज़रूरी सामान हर साल दिवाली पर ही क्यों गायब होता है!",
      "female",
    ],
    mother_list: [
      "मम्मी",
      "दीये, रंग और बल्ब। लिस्ट याद है ना? चाय पीने में खरीदारी मत भूल जाना।",
      "female",
    ],
    mother_happy: [
      "मम्मी",
      "दिवाली मुबारक बेटा! घर कितना प्यारा लग रहा है। आज तुमने सच में बहुत मदद की।",
      "female",
    ],
    mother_soan: [
      "मम्मी",
      "बाहर जा रहे हो? ये सोना पापड़ी शर्मा आंटी को दे आना। मेहता और वर्मा जी को भी दिवाली बोल देना।",
      "female",
    ],
    mother_rangoli: [
      "मम्मी",
      "वाह! ये रंगोली तो बिल्कुल तुम्हारी अपनी है। घर का आँगन खिल गया!",
      "female",
    ],
    mother_pooja: [
      "मम्मी",
      "घर का काम हो जाए तो आ जाना। साथ में आरती करेंगे। मिठाई बाद में भी दे आना।",
      "female",
    ],
    mother_end: [
      "मम्मी",
      "सब साथ हैं। बस यही तो दिवाली है। प्रसाद लो बेटा। दिवाली मुबारक!",
      "female",
    ],
    sharma_hello: [
      "शर्मा आंटी",
      "दिवाली मुबारक बेटा! मम्मी की मदद कर रहे हो ना? हमारे घर भी ज़रूर आना।",
      "female",
    ],
    sharma_gift: [
      "शर्मा आंटी",
      "अरे, आओ बेटा! मिठाई लाई है मम्मी ने? रख दो यहाँ। मम्मी को हमारी तरफ़ से भी दिवाली बोलना।",
      "female",
    ],
    sharma_return: [
      "शर्मा आंटी",
      "ये लो बेटा, घर पे दे देना। क्या हुआ? ...अच्छा, ये डब्बा तुम्हारा था? चलो, घर का रास्ता तो याद है इसे!",
      "female",
    ],
    doorbell: [
      "शर्मा आंटी",
      "बेटा, दरवाज़ा खोलो! तुम्हारे लिए मिठाई लाई हूँ।",
      "female",
    ],
    roshni_greet: [
      "रोशनी दीदी",
      "अपने मन के रंग चुनो। गुलाबी, पीला, नीला! रंगोली तुम्हारी है, डिज़ाइन भी तुम्हारा होना चाहिए।",
      "female",
    ],
    roshni_reply: [
      "रोशनी दीदी",
      "पहले छोटे गोले लगाओ, फिर फूल बनाओ। अरे वाह, तुम तो कलाकार निकले!",
      "female",
    ],
    neha_greet: [
      "नेहा दीदी",
      "ये जुगनू वाली फुलझड़ी देखो। छोटी सी चमक, और चेहरे पर बड़ी सी मुस्कान!",
      "female",
    ],
    neha_reply: [
      "नेहा दीदी",
      "बाहर खुली जगह में रखना, फिर जलाकर थोड़ा पीछे हट जाना। ये सब हमारे खेल वाले पटाखे हैं।",
      "female",
    ],
    seema_greet: [
      "सीमा आंटी",
      "नया कुर्ता पहनोगे? दिवाली की फोटो में हर साल वही टी शर्ट नहीं चलेगी!",
      "female",
    ],
    seema_reply: [
      "सीमा आंटी",
      "बहुत जँच रहा है बेटा! अब फोटो भेजना मत भूलना।",
      "female",
    ],
    anshika_start: [
      "सुहानी",
      "अरे, तुम आ गए! मेरी रंगोली अधूरी है। क्या मेरे साथ इसे पूरा करोगे? रंग अपने चुनना, मैं फूल बना दूँगी।",
      "female",
    ],
    anshika_hint: [
      "सुहानी",
      "बीच में एक रंग, चारों तरफ छोटे गोले। मिलकर बनाएँगे तो जल्दी हो जाएगा, दोस्त!",
      "female",
    ],
    anshika_done: [
      "सुहानी",
      "वाह, कितनी प्यारी रंगोली बनी! दोस्त हो तो ऐसे! अब मेले में सब दोस्तों को भी बुलाते हैं।",
      "female",
    ],
    ganesh_chant: [
      "गणेश आरती",
      "जय गणेश, जय गणेश, जय गणेश देवा। माता जाकी पार्वती, पिता महादेवा। एकदंत दयावंत, चार भुजाधारी। माथे सिंदूर सोहे, मूसे की सवारी।",
      "female",
    ],
    lakshmi_chant: [
      "लक्ष्मी आरती",
      "ॐ जय लक्ष्मी माता, मैया जय लक्ष्मी माता। तुमको निसदिन सेवत, हर विष्णु विधाता। उमा रमा ब्रह्माणी, तुम ही जग माता। सूर्य चंद्रमा ध्यावत, नारद ऋषि गाता।",
      "female",
    ],
    papa_start: [
      "पापा",
      "बेटा, मेरा स्क्रूड्राइवर ढूँढ दे। फाइल के पास रखा था, शायद। केबल का दराज़, बिस्कुट का डब्बा और किचन का बॉक्स देख लेना।",
      "male",
    ],
    papa_wait: [
      "पापा",
      "पहले मम्मी का काम खत्म करो। फिर मेरे पास आना। दिवाली में सबकी ड्यूटी होती है!",
      "male",
    ],
    papa_hint: [
      "पापा",
      "स्क्रूड्राइवर ढूँढो बेटा। दराज़, डब्बा और किचन का बॉक्स देख लो। मुझे तो पूरा यकीन है यहीं रखा था!",
      "male",
    ],
    papa_done: [
      "पापा",
      "शाबाश! मिल गया ना। अब लिविंग रूम वाली लाइट भी सुलझा दो। पिछले साल का धैर्य भी निकाल लेना!",
      "male",
    ],
    gupta_greet: [
      "गुप्ता अंकल",
      "आओ बेटा! मिट्टी के दीये और ताज़े फूल। घर रोशन होगा तो दिवाली अपने आप आ जाएगी।",
      "male",
    ],
    gupta_reply: [
      "गुप्ता अंकल",
      "दरवाज़े के दोनों तरफ दीये लगाना। और ये फूलों वाला तोरण देखो, मम्मी को बहुत पसंद आएगा।",
      "male",
    ],
    bunty_greet: [
      "बंटी भैया",
      "अनार की चमक या चकरी के रंग? आज तो कॉलोनी का आसमान तुम्हारा है!",
      "male",
    ],
    bunty_reply: [
      "बंटी भैया",
      "पहले हाथ में लो, फिर खुली जगह पर रखो। जलाने के बाद थोड़ा पीछे हटना। तभी पूरा नज़ारा दिखेगा!",
      "male",
    ],
    madhav_greet: [
      "माधव काका",
      "चाँद वाला रॉकेट देखोगे? खेल के आसमान में पूरा रंग बिखेर देगा!",
      "male",
    ],
    madhav_reply: [
      "माधव काका",
      "सुतली, मिर्ची और मुर्गा छाप भी हैं। नाम छोटे, खेल वाली मस्ती बड़ी!",
      "male",
    ],
    sweets_greet: [
      "शर्मा जी",
      "गरम मोतीचूर और ताज़ी सोना पापड़ी! डब्बा वापस आए तो समझना, हमारी मिठाई मशहूर हो गई!",
      "male",
    ],
    sweets_reply: [
      "शर्मा जी",
      "थोड़ी मिठाई अपने लिए, थोड़ी पड़ोसियों के लिए। दिवाली में कैलोरी कौन गिनता है!",
      "male",
    ],
    chai_greet: [
      "मोहन भैया",
      "अदरक वाली चाय और गरम जलेबी! झूला बाद में, पहले एक मीठा सा ब्रेक ले लो।",
      "male",
    ],
    chai_reply: [
      "मोहन भैया",
      "वाह भाई! चाय के साथ जलेबी, अब तो मेला घूमने की ताकत आ जाएगी।",
      "male",
    ],
    mehta_gift: [
      "मेहता अंकल",
      "हैप्पी दिवाली! चाय पियोगे? अच्छा, दोस्तों के पास जाना है? जाओ, मज़े करो।",
      "male",
    ],
    verma_gift: [
      "वर्मा जी",
      "आओ आओ! पटाखों की आवाज़ यहीं तक आ रही है। तुमने शुरू कर दिए क्या?",
      "male",
    ],
    back_away: [
      "बंटी भैया",
      "थोड़ा दूर हो जाओ! पीछे हटकर पूरा नज़ारा देखो।",
      "male",
    ],
  },
  Aa = {
    mother_start: [
      "Mummy",
      "Arre beta, phone chhod. Diwali ki safai karni hai. Pehle apna kamra saaf kar lo, phir bazaar jaana.",
    ],
    mother_reward: [
      "Mummy",
      "Shabaash! Ye do hazaar rupaye le. Diye, rangoli ke rang aur light ke bulbs le aana. Saare paise patakhon mein mat uda dena!",
    ],
    mother_remind: [
      "Mummy",
      "Bed ke neeche, almirah, table aur purane dabbe. Chaaron jagah safai honi chahiye, samjhe?",
    ],
    mother_papa: [
      "Mummy",
      "Ab Papa ki bhi help kar do. Unka zaroori samaan har saal Diwali par hi kyun gayab hota hai!",
    ],
    mother_list: [
      "Mummy",
      "Diye, rang aur bulbs. List yaad hai na? Chai peene mein shopping mat bhool jaana.",
    ],
    mother_happy: [
      "Mummy",
      "Happy Diwali beta! Ghar kitna pyaara lag raha hai. Aaj tumne sach mein bahut help ki.",
    ],
    mother_soan: [
      "Mummy",
      "Bahar jaa rahe ho? Ye Sona Papdi Sharma aunty ko de aana. Mehta aur Verma ji ko bhi Diwali bol dena.",
    ],
    mother_rangoli: [
      "Mummy",
      "Waah! Ye rangoli toh bilkul tumhari apni hai. Ghar ka aangan khil gaya!",
    ],
    mother_pooja: [
      "Mummy",
      "Ghar ka kaam ho jaye toh aa jaana. Saath mein aarti karenge. Mithai baad mein bhi de aana.",
    ],
    mother_end: [
      "Mummy",
      "Sab saath hain. Bas yahi toh Diwali hai. Prasad lo beta. Happy Diwali!",
    ],
    sharma_hello: [
      "Sharma aunty",
      "Happy Diwali beta! Mummy ki help kar rahe ho na? Hamare ghar bhi zaroor aana.",
    ],
    sharma_gift: [
      "Sharma aunty",
      "Arre, aao beta! Mithai bheji hai mummy ne? Rakh do yahan. Mummy ko hamari taraf se bhi Diwali bolna.",
    ],
    sharma_return: [
      "Sharma aunty",
      "Ye lo beta, ghar pe de dena. Kya hua? ...Achha, ye dabba tumhara tha? Chalo, ghar ka raasta toh yaad hai ise!",
    ],
    doorbell: [
      "Sharma aunty",
      "Beta, darwaaza kholo! Tumhare liye mithai laayi hoon.",
    ],
    roshni_greet: [
      "Roshni didi",
      "Apne mann ke rang chuno. Gulabi, peela, neela! Rangoli tumhari hai, design bhi tumhara hona chahiye.",
    ],
    roshni_reply: [
      "Roshni didi",
      "Pehle chhote circles lagao, phir phool banao. Arre waah, tum toh artist nikle!",
    ],
    neha_greet: [
      "Neha didi",
      "Ye jugnu wali phuljhari dekho. Chhoti si chamak, aur chehre par badi si smile!",
    ],
    neha_reply: [
      "Neha didi",
      "Bahar khuli jagah mein rakhna, phir jalakar thoda peeche hat jaana. Ye sab hamare game wale patakhe hain.",
    ],
    seema_greet: [
      "Seema aunty",
      "Naya kurta pehnoge? Diwali ki photo mein har saal wahi T-shirt nahi chalegi!",
    ],
    seema_reply: [
      "Seema aunty",
      "Bahut jach raha hai beta! Ab photo bhejna mat bhoolna.",
    ],
    anshika_start: [
      "Suhani",
      "Arre, tum aa gaye! Meri rangoli adhoori hai. Kya mere saath ise poora karoge? Rang apne chunna, main phool bana doongi.",
    ],
    anshika_hint: [
      "Suhani",
      "Beech mein ek rang, chaaron taraf chhote circles. Milkar banayenge toh jaldi ho jayega, dost!",
    ],
    anshika_done: [
      "Suhani",
      "Waah, kitni pyaari rangoli bani! Dost ho toh aise! Ab mele mein sab doston ko bhi bulate hain.",
    ],
    ganesh_chant: [
      "Ganesh aarti",
      "Jai Ganesh, Jai Ganesh, Jai Ganesh Deva. Mata jaaki Parvati, pita Mahadeva. Ekdant dayavant, chaar bhujadhaari. Maathe sindoor sohe, moose ki sawaari.",
    ],
    lakshmi_chant: [
      "Lakshmi aarti",
      "Om Jai Lakshmi Mata, Maiya Jai Lakshmi Mata. Tumko nis din sevat, Har Vishnu Vidhaata. Uma Rama Brahmani, tum hi jag mata. Surya Chandrama dhyaavat, Naarad Rishi gaata.",
    ],
    papa_start: [
      "Papa",
      "Beta, mera screwdriver dhoondh de. File ke paas rakha tha, shayad. Cable ka drawer, biscuit ka dabba aur kitchen ka box dekh lena.",
    ],
    papa_wait: [
      "Papa",
      "Pehle Mummy ka kaam khatam karo. Phir mere paas aana. Diwali mein sabki duty hoti hai!",
    ],
    papa_hint: [
      "Papa",
      "Screwdriver dhoondho beta. Drawer, dabba aur kitchen ka box dekh lo. Mujhe toh poora yakeen hai yahin rakha tha!",
    ],
    papa_done: [
      "Papa",
      "Shabaash! Mil gaya na. Ab living room wali light bhi suljha do. Pichhle saal ka patience bhi nikaal lena!",
    ],
    gupta_greet: [
      "Gupta uncle",
      "Aao beta! Mitti ke diye aur taaze phool. Ghar roshan hoga toh Diwali apne aap aa jaayegi.",
    ],
    gupta_reply: [
      "Gupta uncle",
      "Darwaaze ke dono taraf diye lagana. Aur ye phoolon wala toran dekho, Mummy ko bahut pasand aayega.",
    ],
    bunty_greet: [
      "Bunty bhaiya",
      "Anaar ki chamak ya chakri ke rang? Aaj toh colony ka aasmaan tumhara hai!",
    ],
    bunty_reply: [
      "Bunty bhaiya",
      "Pehle haath mein lo, phir khuli jagah par rakho. Jalane ke baad thoda peeche hatna. Tabhi poora nazaara dikhega!",
    ],
    madhav_greet: [
      "Madhav kaka",
      "Chaand wala rocket dekhoge? Game ke aasmaan mein poore rang bikher dega!",
    ],
    madhav_reply: [
      "Madhav kaka",
      "Sutli, Mirchi aur Murga Chhaap bhi hain. Naam chhote, game wali masti badi!",
    ],
    sweets_greet: [
      "Sharma ji",
      "Garam motichoor aur taazi Sona Papdi! Dabba wapas aaye toh samajhna, hamari mithai famous ho gayi!",
    ],
    sweets_reply: [
      "Sharma ji",
      "Thodi mithai apne liye, thodi padosiyon ke liye. Diwali mein calories kaun ginta hai!",
    ],
    chai_greet: [
      "Mohan bhaiya",
      "Adrak wali chai aur garam jalebi! Jhoola baad mein, pehle ek meetha sa break le lo.",
    ],
    chai_reply: [
      "Mohan bhaiya",
      "Waah bhai! Chai ke saath jalebi, ab toh mela ghoomne ki energy aa jaayegi.",
    ],
    mehta_gift: [
      "Mehta uncle",
      "Happy Diwali! Chai piyoge? Achha, doston ke paas jaana hai? Jao, maze karo.",
    ],
    verma_gift: [
      "Verma ji",
      "Aao aao! Patakhon ki awaaz yahin tak aa rahi hai. Tumne shuru kar diye kya?",
    ],
    back_away: [
      "Bunty bhaiya",
      "Thoda door ho jao! Peeche hatkar poora nazaara dekho.",
    ],
  },
  Q = (e) => (Aa[e] ? `${Aa[e][0]}: ${Aa[e][1]}` : e),
  Bi = [
    ["gupta_greet", "gupta_reply"],
    ["roshni_greet", "roshni_reply"],
    ["bunty_greet", "bunty_reply"],
    ["madhav_greet", "madhav_reply"],
    ["neha_greet", "neha_reply"],
    ["sweets_greet", "sweets_reply"],
    ["chai_greet", "chai_reply"],
    ["seema_greet", "seema_reply"],
  ];
function Hi(e) {
  return Object.entries($t).find(
    ([t, a]) => e === Q(t) || e === `${a[0]}: ${a[1]}`,
  )?.[0];
}
function Fi(e, t) {
  return Math.atan2(Math.sin(t - e), Math.cos(t - e));
}
function Wi(e, t) {
  if (!Number.isFinite(t) || Math.abs(t) > 1.2)
    return { progress: e, turn: !1 };
  const a = e + t;
  return Math.abs(a) >= Math.PI * 2
    ? { progress: a - Math.sign(a) * Math.PI * 2, turn: !0 }
    : { progress: a, turn: !1 };
}
const Gi = ["Deep aarti", "Ganesh aarti", "Lakshmi aarti"];
function Ui({
  state: e,
  act: t,
  audio: a,
  thali: o,
  release: n,
  onPhase: r = () => {},
  onStop: b = () => {},
}) {
  const i = (P) => document.getElementById(P);
  let l = !1,
    d = null,
    s = 0,
    f = 0,
    p = !1,
    g = "festival",
    w = !0,
    u = !1,
    c = 0,
    h = [0, 0, 0];
  const S = () => (u ? c : e.pooja.length),
    N = () => (u ? h[c] : e.poojaTurns[S()]);
  function T() {
    const P = S();
    ((i("aarti-title").textContent = Gi[P] || "Aarti poori"),
      (i("aarti-count").textContent = `${N() || 0} / 5 chakkar`));
  }
  function R() {
    l &&
      ((l = !1),
      document.body.classList.remove("ritual-active"),
      (p = !1),
      (d = null),
      (s = 0),
      (o.visible = !1),
      (i("aarti-controls").hidden = !0),
      a.stopRitual(),
      a.setTheme(g),
      a.setMusic(w),
      b(),
      n());
  }
  function B(P) {
    if (!l) return;
    f += P;
    const A = Wi(s, P);
    if (((s = A.progress), A.turn)) {
      if ((u ? h[c]++ : t({ type: "poojaTurn" }), N() >= 5)) {
        if (
          (u
            ? c++
            : t({ type: "pooja", id: ["diya", "ganesh", "lakshmi"][S()] }),
          (s = 0),
          (d = null),
          S() === 3)
        ) {
          (u || t({ type: "pooja", id: "prasad" }), R());
          return;
        }
        (a.setTheme(["diya", "ganesh", "lakshmi"][S()]),
          r(["diya", "ganesh", "lakshmi"][S()]));
      }
      T();
    }
  }
  const G = i("aarti-ring");
  function H(P) {
    const A = G.getBoundingClientRect(),
      O = (P.clientX - A.left - A.width / 2) / (A.width / 2),
      v = (P.clientY - A.top - A.height / 2) / (A.height / 2),
      m = Math.hypot(O, v);
    if (m < 0.25 || m > 1.3) {
      d = null;
      return;
    }
    const M = Math.atan2(v, O);
    (d !== null && B(Fi(d, M)), (d = M));
  }
  ((G.onpointerdown = (P) => {
    (G.setPointerCapture(P.pointerId), (d = null), H(P));
  }),
    (G.onpointermove = (P) => {
      G.hasPointerCapture(P.pointerId) && H(P);
    }));
  for (const P of ["pointerup", "pointercancel", "lostpointercapture"])
    G.addEventListener(P, () => (d = null));
  const $ = i("aarti-hold");
  $.onpointerdown = (P) => {
    ($.setPointerCapture(P.pointerId), (p = !0));
  };
  for (const P of ["pointerup", "pointercancel", "lostpointercapture"])
    $.addEventListener(P, () => (p = !1));
  return (
    ($.onkeydown = (P) => {
      [" ", "Enter"].includes(P.key) && (P.preventDefault(), (p = !0));
    }),
    ($.onkeyup = () => (p = !1)),
    ($.onblur = () => (p = !1)),
    (i("aarti-stop").onclick = R),
    document.addEventListener("visibilitychange", () => {
      document.hidden && (p = !1);
    }),
    {
      get active() {
        return l;
      },
      start() {
        if (
          ((u = e.pooja.length === 4),
          (c = 0),
          (h = [0, 0, 0]),
          e.pooja.length === 3)
        ) {
          t({ type: "pooja", id: "prasad" });
          return;
        }
        ((l = !0),
          document.body.classList.add("ritual-active"),
          (g = a.theme),
          (w = a.music),
          a.start(),
          a.setMusic(!0),
          a.setTheme(["diya", "ganesh", "lakshmi"][S()]),
          r(["diya", "ganesh", "lakshmi"][S()]),
          (o.visible = !0),
          (i("aarti-controls").hidden = !1),
          n(),
          T());
      },
      stop: R,
      update(P) {
        l &&
          (p && B(P * 2.5),
          o.position.set(Math.cos(f) * 0.14, -0.2 + Math.sin(f) * 0.05, -0.7),
          (o.rotation.x = 0.16),
          (o.rotation.z = Math.cos(f) * 0.08));
      },
    }
  );
}
function Vi(e, t, a = 1, o = !1) {
  const n = o;
  return {
    mobile: n,
    portrait: n && t > e,
    pixelRatio: Math.min(a, n ? 1 : 1.5),
    shadowSize: n ? 512 : 1024,
    frameInterval: n ? 1e3 / 30 : 0,
  };
}
function Ki({ prompt: e, getSettings: t, release: a }) {
  const o = () => {
    a();
    const n = t();
    (document.body.classList.toggle("touch-ui", n.mobile),
      document.body.classList.toggle("touch-portrait", n.portrait),
      e?.open && e.close());
  };
  (window.addEventListener("resize", o), o());
}
function Yi({ id: e, state: t, showPanel: a, act: o, say: n }) {
  if (!["diyas", "lights"].includes(e)) return;
  if (!t.lights || !(t.inventory[e] || t.decorations.includes(e))) {
    n("Pehle bazaar se diye aur lights le aao, aur lights suljha lo.");
    return;
  }
  let r = (t.homeDesign?.[e] || []).map((u) => ({ ...u })),
    b = "gold",
    i = 1,
    l = 0,
    d = { x: 0, y: 0 };
  a(
    `<span class="eyebrow">APNA GHAR, APNI SAJAWAT</span><h2>${e === "diyas" ? "Aangan mein diye sajao" : "Ghar ki roshni sajao"}</h2><p>${e === "diyas" ? "Aangan ka upar se view. Gate ke paas apna diya design banao." : "Ghar ka saamne se view. Deewar par apni fairy lights sajao."} Tap karke lagao; arrows aur Enter bhi use kar sakte ho.</p><div class="swatches">${Object.entries(
      cn,
    )
      .map(
        ([u, c]) =>
          `<button data-decor-colour="${u}" style="--swatch:${c}" aria-label="${u}">${u}</button>`,
      )
      .join(
        "",
      )}</div><label>Size <input id="decor-size" type="range" min="70" max="150" value="100"></label><label>Ghumaao <input id="decor-angle" type="range" min="0" max="360" value="0"></label><canvas id="decor-canvas" width="600" height="260" tabindex="0" aria-label="Sajawat placement canvas" style="width:100%;max-height:260px;touch-action:none;border-radius:16px"></canvas><p id="decor-count" aria-live="polite"></p><div class="action-row"><button id="decor-row" class="secondary">Seedhi line</button><button id="decor-arch" class="secondary">Mehraab</button><button id="decor-undo" class="secondary">Undo</button><button id="decor-clear" class="secondary">Saaf karo</button><button id="decor-save" class="primary">Sajawat save karo</button></div>`,
  );
  const s = (u) => document.getElementById(u),
    f = s("decor-canvas"),
    p = f.getContext("2d");
  function g() {
    ((p.fillStyle = e === "diyas" ? "#79513d" : "#344c51"),
      p.fillRect(0, 0, 600, 260),
      (p.strokeStyle = "#ffffff20"));
    for (let u = 0; u <= 600; u += 30)
      (p.beginPath(), p.moveTo(u, 0), p.lineTo(u, 260), p.stroke());
    for (let u = 0; u <= 260; u += 26)
      (p.beginPath(), p.moveTo(0, u), p.lineTo(600, u), p.stroke());
    for (const u of r)
      (p.save(),
        p.translate(300 + u.x * 275, 130 + u.y * 105),
        p.rotate((u.angle * Math.PI) / 180),
        (p.fillStyle = cn[u.colour]),
        (p.shadowColor = p.fillStyle),
        (p.shadowBlur = 12),
        p.beginPath(),
        p.ellipse(0, 0, 11 * u.size, 7 * u.size, 0, 0, Math.PI * 2),
        p.fill(),
        e === "diyas" &&
          ((p.fillStyle = "#fff7ce"),
          p.beginPath(),
          p.ellipse(0, -7 * u.size, 3 * u.size, 6 * u.size, 0, 0, Math.PI * 2),
          p.fill()),
        p.restore());
    ((p.strokeStyle = "#fff"),
      p.strokeRect(296 + d.x * 275, 126 + d.y * 105, 8, 8),
      (s("decor-count").textContent =
        `${r.length}/${ya} ${e === "diyas" ? "diye" : "lights"} · Save ke baad ghar mein dikhenge`),
      document
        .querySelectorAll("[data-decor-colour]")
        .forEach((u) =>
          u.setAttribute("aria-pressed", String(u.dataset.decorColour === b)),
        ));
  }
  function w() {
    (r.length < ya && r.push({ ...d, colour: b, size: i, angle: l }), g());
  }
  ((f.onpointerdown = (u) => {
    const c = f.getBoundingClientRect();
    ((d = {
      x: Math.max(
        -1,
        Math.min(1, (((u.clientX - c.left) / c.width) * 600 - 300) / 275),
      ),
      y: Math.max(
        -1,
        Math.min(1, (((u.clientY - c.top) / c.height) * 260 - 130) / 105),
      ),
    }),
      w());
  }),
    (f.onkeydown = (u) => {
      [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Enter",
        " ",
      ].includes(u.key) &&
        (u.preventDefault(),
        ["Enter", " "].includes(u.key)
          ? w()
          : ((d.x = Math.max(
              -1,
              Math.min(
                1,
                d.x +
                  (u.key === "ArrowLeft"
                    ? -0.1
                    : u.key === "ArrowRight"
                      ? 0.1
                      : 0),
              ),
            )),
            (d.y = Math.max(
              -1,
              Math.min(
                1,
                d.y +
                  (u.key === "ArrowUp"
                    ? -0.1
                    : u.key === "ArrowDown"
                      ? 0.1
                      : 0),
              ),
            )),
            g()));
    }),
    document.querySelectorAll("[data-decor-colour]").forEach(
      (u) =>
        (u.onclick = () => {
          ((b = u.dataset.decorColour), g());
        }),
    ),
    (s("decor-size").oninput = (u) => (i = Number(u.target.value) / 100)),
    (s("decor-angle").oninput = (u) => (l = Number(u.target.value))));
  for (const u of ["row", "arch"])
    s("decor-" + u).onclick = () => {
      const c = Yo(u, b, i, l);
      (r.length + c.length <= ya
        ? r.push(...c)
        : (s("decor-count").textContent =
            "Pehle kuch diye/lights hatao; 40 ki jagah hai."),
        g());
    };
  ((s("decor-undo").onclick = () => {
    (r.pop(), g());
  }),
    (s("decor-clear").onclick = () => {
      ((r = []), g());
    }),
    (s("decor-save").onclick = () => {
      if (!r.length) {
        s("decor-count").textContent = "Kam se kam ek diya ya light lagao.";
        return;
      }
      o({ type: "decorationDesign", id: e, items: r }).changed &&
        s("panel").close();
    }),
    g());
}
function qi(e) {
  const t = ke[e]
      ? "#" + ke[e].colour.toString(16).padStart(6, "0")
      : gt[e.replace("colour_", "")]?.hex ||
        (e === "soanpapdi"
          ? "#d786a3"
          : e === "laddoo"
            ? "#ecad3a"
            : e === "jalebi"
              ? "#ef7a28"
              : e === "chai"
                ? "#b77d50"
                : ze[e]
                  ? "#d85865"
                  : "#4a9e93"),
    a = ke[e]
      ? '<path d="M5 3h6l3 3v3h-3v5H5V9H2V6z"/>'
      : e === "chai"
        ? '<path d="M4 5h7v9H4zM11 6h3v5h-3z"/>'
        : ze[e]
          ? '<path d="M7 1h2v2h2v11H5V3h2z"/>'
          : ["laddoo", "jalebi"].includes(e)
            ? '<path d="M5 3h6v2h2v6h-2v2H5v-2H3V5h2z"/>'
            : '<path d="M3 5h10v9H3zM5 2h6v3H5z"/>';
  return `<svg viewBox="0 0 16 16" aria-hidden="true" shape-rendering="crispEdges" fill="${t}">${a}<path d="M6 5h3v2H6z" fill="#ffe1a4"/></svg>`;
}
function Zi({ state: e, container: t, onUse: a }) {
  const o = Object.entries(e.inventory).filter(([, b]) => b > 0);
  let n = o[0]?.[0];
  t.innerHTML = `<div class="inventory-grid" role="group" aria-label="Tumhara inventory">${Array.from(
    { length: Math.max(27, Math.ceil(o.length / 9) * 9) },
    (b, i) => {
      const l = o[i];
      return l
        ? `<button class="inventory-slot" data-item="${l[0]}" aria-label="${Z.products[l[0]].name}, ${l[1]}">${qi(l[0])}<span>${l[1]}</span></button>`
        : '<span class="inventory-slot empty" aria-hidden="true"></span>';
    },
  ).join(
    "",
  )}</div><div class="inventory-selection" aria-live="polite"><strong id="selected-item"></strong><button id="inventory-use" class="primary"></button></div>`;
  function r() {
    (t.querySelectorAll("[data-item]").forEach((i) => {
      (i.classList.toggle("selected", i.dataset.item === n),
        i.setAttribute("aria-pressed", String(i.dataset.item === n)));
    }),
      (t.querySelector("#selected-item").textContent = n
        ? Z.products[n].name
        : "Bag khaali hai. Bazaar se kuch le aao!"));
    const b = t.querySelector("#inventory-use");
    ((b.hidden = !n),
      (b.disabled =
        !!n && !ze[n] && !ke[n] && !["laddoo", "jalebi", "chai"].includes(n)),
      (b.textContent = ze[n]
        ? "Haath mein lo"
        : n === "chai"
          ? "Chai piyo"
          : ["laddoo", "jalebi"].includes(n)
            ? "Khao"
            : ke[n]
              ? "Pehno / badlo"
              : "Ghar par istemaal karo"),
      (b.onclick = () => n && a(n)));
  }
  (t.querySelectorAll("[data-item]").forEach(
    (b) =>
      (b.onclick = () => {
        ((n = b.dataset.item), r());
      }),
  ),
    r());
}
const oa = () => {
  const initRole =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("couple_player_role")) ||
    "boy";
  const initOutfit = initRole === "girl" ? "pink_lehenga" : "kurta_royal";
  return {
    version: 4,
    mode: "explore",
    guestId: globalThis.crypto?.randomUUID?.() || `guest-${Date.now()}`,
    zone: "home",
    position: { x: 0, z: 12 },
    yaw: Math.PI,
    started: !0,
    cleaned: [],
    found: [],
    searched: [],
    papa: !1,
    papaStarted: !1,
    lights: !1,
    knots: [!1, !1, !1, !1],
    rewarded: !1,
    wallet: 0,
    donated: 0,
    beggarGiven: 0,
    fireworksSeconds: 0,
    fireworksWatched: !1,
    wishes: [],
    movie: null,
    movieChosen: !1,
    inventory: {},
    decorations: [],
    homeDesign: { diyas: null, lights: null },
    night: !1,
    fired: 0,
    crackerLesson: { started: !1, done: !1, uid: null },
    colours: [],
    rangoli: [],
    soanStarted: !1,
    delivered: [],
    soanReturned: !1,
    pooja: [],
    crackerUsed: [],
    snacks: [],
    outfit: !0,
    avatar: { gender: initRole, outfit: initOutfit },
    unlockedEffects: [],
    rides: [],
    poojaTurns: [0, 0, 0],
    placedCrackers: [],
    placementSerial: 0,
    anshikaSeen: !1,
    anshikaStarted: !1,
    anshikaDone: !1,
    anshikaRangoli: [],
  };
};
function tt(e) {
  return e.cleaned.length < 4
    ? 0
    : e.rewarded
      ? e.papa
        ? e.lights
          ? ["diyas", "lights", "rangoli"].every(
              (t) =>
                e.inventory[t] ||
                e.decorations.includes(t) ||
                (t === "fountain" && e.fired),
            )
            ? e.decorations.length < 3
              ? 5
              : e.pooja.length === 4
                ? e.fireworksWatched
                  ? 9
                  : 8
                : 7
            : 4
          : 3
        : 2
      : 1;
}
function ia(e, t) {
  return Object.hasOwn(re, t);
}
function _t(e, t) {
  return fe(e) || !e.rewarded
    ? 0
    : ["diyas", "lights", "rangoli"].reduce(
        (a, o) =>
          a +
          (o === t || e.inventory[o] || e.decorations.includes(o)
            ? 0
            : Z.products[o].price),
        0,
      );
}
function Xi(e, t) {
  let a = 2166136261;
  for (const o of `${e}/${t}`) a = Math.imul(a ^ o.charCodeAt(0), 16777619);
  return (a >>> 0) / 4294967296;
}
function io(e, t) {
  let a = "",
    o = !1;
  if (
    (t.type === "setAvatar" &&
      la(t.avatar) &&
      (t.avatar.outfit === "everyday" || e.inventory[t.avatar.outfit] > 0) &&
      ((e.avatar = { gender: t.avatar.gender, outfit: t.avatar.outfit }),
      (e.outfit = e.avatar.outfit !== "everyday"),
      (o = !0),
      (a = "Diwali look ready! Bag se kabhi bhi badal sakte ho.")),
    t.type === "unlockEffect" &&
      Object.hasOwn(Z.effectPrices, t.id) &&
      !e.unlockedEffects.includes(t.id))
  ) {
    const n = xt(e, Z.effectPrices[t.id]),
      r = _t(e);
    e.wallet - n >= r
      ? ((e.wallet -= n),
        e.unlockedEffects.push(t.id),
        (o = !0),
        (a = "Game item unlock ho gaya! Ab jitni baar chaaho chalao."))
      : (a = `Game paise kam hain. Missions karo; ghar ki shopping ke liye ₹${r} bhi bachane hain.`);
  }
  if (
    (t.type === "setMovie" &&
      e.zone === "market" &&
      tn(t.movie) &&
      ((e.movie = {
        videoId: t.movie.videoId,
        playlistId: t.movie.playlistId,
        start: t.movie.start,
      }),
      (e.movieChosen = !0),
      (o = !0)),
    t.type === "helpNeighbor" && e.zone === "market")
  ) {
    const n = t.amount;
    Z.temple.donations.includes(n) &&
    e.wallet - xt(e, n) >= _t(e) &&
    e.beggarGiven + n <= 1e6
      ? ((e.wallet -= xt(e, n)),
        (e.beggarGiven += n),
        (o = !0),
        (a = "Bhaiya: Madad ke liye shukriya."))
      : (a =
          "Abhi zaroori shopping ke paise bacha kar rakho. Baad mein madad kar sakte ho.");
  }
  if (
    (t.type === "watchFireworks" &&
      e.zone === "neighborhood" &&
      (fe(e) || e.pooja.length === 4) &&
      !e.fireworksWatched &&
      t.seconds === 1 &&
      ((e.fireworksSeconds = Math.min(De, e.fireworksSeconds + 1)),
      (o = !0),
      e.fireworksSeconds === De &&
        ((e.fireworksWatched = !0),
        (a = "Ghar roshan. Sab saath. Happy Diwali!"))),
    t.type === "donate" && e.zone === "market")
  ) {
    const n = t.amount;
    Z.temple.donations.includes(n) &&
    e.donated + n <= 1e6 &&
    e.wallet - xt(e, n) >= _t(e)
      ? ((e.wallet -= xt(e, n)),
        (e.donated += n),
        (o = !0),
        (a = `Daanpatra mein ₹${n} daale. Shubh Diwali!`))
      : (a =
          "Abhi daan ke liye paise kam hain. Ghar ki zaroori shopping ke paise bacha kar rakho.");
  }
  if (t.type === "wish" && e.zone === "market") {
    const n = typeof t.text == "string" ? t.text.trim() : "";
    n &&
    n.length <= Z.temple.wishLength &&
    e.wishes.length < Z.temple.maxWishes &&
    !/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(n)
      ? (e.wishes.push(n),
        (o = !0),
        (a =
          "Tumhari wish box mein rakh di. Mann ki baat, dil se. Shubh Diwali!"))
      : (a =
          "Chhoti si wish likho; box mein is Diwali ke 20 notes ki jagah hai.");
  }
  if (
    (t.type === "start" &&
      !e.started &&
      ((e.started = !0), (o = !0), (a = Q("mother_start"))),
    t.type === "clean" &&
      e.started &&
      Z.chores.some((n) => n.id === t.id) &&
      !e.cleaned.includes(t.id))
  ) {
    const n =
      Z.discoveries[
        Math.min(
          Z.discoveries.length - 1,
          Math.floor(
            Math.max(0, t.random ?? Xi(e.guestId, t.id)) * Z.discoveries.length,
          ),
        )
      ];
    (e.cleaned.push(t.id),
      e.found.push(n[0]),
      (e.wallet += n[1]),
      (o = !0),
      (a = `Mila: ${$n[n[0]] || n[0]}! Arre, ye yahan kaise aaya?`));
  }
  if (
    (t.type === "papaStart" &&
      e.rewarded &&
      !e.papaStarted &&
      ((e.papaStarted = !0), (o = !0), (a = Q("papa_start"))),
    t.type === "search" &&
      e.papaStarted &&
      !e.papa &&
      !e.searched.includes(t.id))
  ) {
    const n = Z.searches.find((r) => r.id === t.id);
    n &&
      (e.searched.push(t.id),
      (e.papa = t.id === "tools"),
      (o = !0),
      (a = n.reply));
  }
  if (
    (t.type === "knot" &&
      e.papa &&
      Number.isInteger(t.index) &&
      t.index >= 0 &&
      t.index < 4 &&
      !e.knots[t.index] &&
      ((e.knots[t.index] = !0),
      (e.lights = e.knots.every(Boolean)),
      (o = !0),
      (a = e.lights
        ? "Light Engineer! Do bulbs kharab hain. Bazaar se le aana."
        : "Ek loop sulajh gaya. Lage raho!")),
    t.type === "reward" &&
      e.cleaned.length === 4 &&
      !e.rewarded &&
      ((e.wallet += Z.reward),
      (e.rewarded = !0),
      (o = !0),
      (a = Q("mother_reward"))),
    t.type === "buy")
  ) {
    const n = Z.products[t.id];
    if (n) {
      const r = xt(e, n.price);
      (e.inventory[t.id] || 0) >= n.max
        ? (a = "Ye tumhare paas kaafi hain.")
        : e.wallet < r
          ? (a = "Itne paise nahi hain. Apna wallet dekho.")
          : e.wallet - r < _t(e, t.id)
            ? (a = `Pehle Mummy ki list ke liye ₹${_t(e, t.id)} bacha lo. Diye, bulbs aur rangoli abhi laane hain.`)
            : ((e.wallet -= r),
              (e.inventory[t.id] = (e.inventory[t.id] || 0) + 1),
              t.id === "rangoli" &&
                (e.colours = [
                  ...new Set([...e.colours, "rose", "gold", "white"]),
                ]),
              t.id.startsWith("colour_") &&
                (e.colours = [...new Set([...e.colours, t.id.slice(7)])]),
              (o = !0),
              (a = `${n.name} ${fe(e) ? "le liya · FREE" : "khareed liya · ₹" + r}`));
    }
  }
  if (t.type === "travel")
    if (ia(e, t.zone)) {
      const n = e.zone;
      ((e.zone = t.zone),
        (e.position = { ...(re[t.zone].arrivals?.[n] || re[t.zone].spawn) }),
        (e.yaw = 0),
        (o = !0),
        (a = ""));
    } else
      a =
        "Pehle ghar ke missions complete karo. Papa aur lights wala kaam abhi baaki hai.";
  if (
    (t.type === "decorate" &&
      e.lights &&
      !e.decorations.includes(t.id) &&
      ["diyas", "lights", "rangoli"].includes(t.id) &&
      (e.inventory[t.id]
        ? (e.decorations.push(t.id),
          e.inventory[t.id]--,
          (e.night = e.decorations.length === 3),
          (o = !0),
          (a = e.night
            ? "Ghar roshan ho gaya! Ab Mummy se Sona Papdi ka box le lo."
            : "Ab toh Diwali wali feeling aa rahi hai!"))
        : (a = "Pehle ye bazaar se le aao.")),
    t.type === "decorationDesign" &&
      e.zone === "home" &&
      e.lights &&
      ["diyas", "lights"].includes(t.id) &&
      qn(t.items) &&
      t.items.length)
  ) {
    const n = e.decorations.includes(t.id);
    (n || e.inventory[t.id] > 0) &&
      ((e.homeDesign ||= { diyas: null, lights: null }),
      (e.homeDesign[t.id] = t.items.map((r) => ({ ...r }))),
      n || (e.decorations.push(t.id), e.inventory[t.id]--),
      (e.night = e.decorations.length === 3),
      (o = !0),
      (a = "Apni pasand se ghar saja diya! Design dobara bhi badal sakte ho."));
  }
  if (
    (t.type === "rangoli" &&
      (e.lights &&
      (e.inventory.rangoli || e.decorations.includes("rangoli")) &&
      ra(t.circles, e.colours) &&
      t.circles.length
        ? ((e.rangoli = t.circles.map((n) => ({ ...n }))),
          e.decorations.includes("rangoli") ||
            (e.decorations.push("rangoli"), e.inventory.rangoli--),
          (e.night = e.decorations.length === 3),
          (o = !0),
          (a = Q("mother_rangoli")))
        : (a = "Colours bazaar se lao. Phir apni rangoli banao.")),
    t.type === "soanStart" &&
      e.decorations.length === 3 &&
      !e.soanStarted &&
      ((e.soanStarted = !0), (o = !0), (a = Q("mother_soan"))),
    t.type === "deliver" &&
      e.soanStarted &&
      Zn.includes(t.id) &&
      !e.delivered.includes(t.id) &&
      (e.delivered.push(t.id),
      (e.wallet = Math.min(1e6, e.wallet + 100)),
      (o = !0),
      (a =
        t.id === "sharma"
          ? Q("sharma_gift")
          : t.id === "mehta"
            ? Q("mehta_gift")
            : Q("verma_gift"))),
    t.type === "soanReturn" &&
      e.zone === "home" &&
      e.delivered.length === 3 &&
      !e.soanReturned &&
      ((e.soanReturned = !0), (o = !0), (a = Q("sharma_return"))),
    t.type === "pooja" && tt(e) === 7)
  ) {
    const n = ["diya", "ganesh", "lakshmi", "prasad"];
    t.id === n[e.pooja.length] &&
      (e.pooja.length === 3 || e.poojaTurns[e.pooja.length] >= 5) &&
      (e.pooja.push(t.id),
      (o = !0),
      (a =
        e.pooja.length === 4
          ? Q("mother_end")
          : "Parivaar ke saath, sukoon ke do pal."));
  }
  if (t.type === "poojaTurn" && tt(e) === 7 && e.pooja.length < 3) {
    const n = e.pooja.length;
    e.poojaTurns[n] < 5 && (e.poojaTurns[n]++, (o = !0));
  }
  if (
    (t.type === "anshikaStart" &&
      !e.anshikaStarted &&
      ((e.anshikaSeen = !0),
      (e.anshikaStarted = !0),
      (o = !0),
      (a = Q("anshika_start"))),
    t.type === "anshikaRangoli" &&
      e.anshikaStarted &&
      ra(t.circles, [...new Set([...e.colours, "rose", "gold", "white"])]) &&
      t.circles.length >= 5 &&
      (e.anshikaDone || (e.wallet = Math.min(1e6, e.wallet + 250)),
      (e.anshikaRangoli = t.circles.map((n) => ({ ...n }))),
      (e.anshikaDone = !0),
      (o = !0),
      (a = Q("anshika_done"))),
    t.type === "startCrackerLesson" &&
      e.zone === "neighborhood" &&
      !e.crackerLesson.started &&
      ((e.crackerLesson.started = !0),
      Object.keys(ze).some((n) => e.inventory[n] > 0) ||
        (e.inventory.fountain = 1),
      (o = !0),
      (a =
        "Mohalle ka pehla patakha! Bag kholo, patakha chuno, phir khuli jagah mein rakho.")),
    t.type === "placeCracker")
  ) {
    const { id: n, x: r, z: b } = t,
      i = re[e.zone].bounds;
    e.zone !== "home" &&
    ze[n] &&
    e.inventory[n] > 0 &&
    e.placedCrackers.length < 8 &&
    Number.isFinite(r) &&
    Number.isFinite(b) &&
    r > i.minX + 0.5 &&
    r < i.maxX - 0.5 &&
    b > i.minZ + 0.5 &&
    b < i.maxZ - 0.5
      ? (e.inventory[n]--,
        e.placedCrackers.push({
          uid: ++e.placementSerial,
          id: n,
          x: r,
          z: b,
          zone: e.zone,
          litAt: 0,
        }),
        e.zone === "neighborhood" &&
          e.crackerLesson.started &&
          !e.crackerLesson.done &&
          e.crackerLesson.uid === null &&
          (e.crackerLesson.uid = e.placementSerial),
        (o = !0),
        (a = "Patakha rakh diya. Ab paas jaakar jalao."))
      : (a = "Khuli jagah chuno. Patakha bag mein hona chahiye.");
  }
  if (t.type === "lightCracker") {
    const n = e.placedCrackers.find(
      (r) => r.uid === t.uid && r.zone === e.zone && !r.litAt,
    );
    n && ((n.litAt = Date.now()), (o = !0), (a = Q("back_away")));
  }
  if (t.type === "collectCracker") {
    const n = e.placedCrackers.findIndex(
      (r) => r.uid === t.uid && r.zone === e.zone && !r.litAt,
    );
    if (n >= 0) {
      const r = e.placedCrackers[n];
      (e.inventory[r.id] || 0) < Z.products[r.id].max &&
        ((e.inventory[r.id] = (e.inventory[r.id] || 0) + 1),
        e.placedCrackers.splice(n, 1),
        e.crackerLesson.uid === r.uid && (e.crackerLesson.uid = null),
        (o = !0));
    }
  }
  if (t.type === "detonateCracker") {
    const n = e.placedCrackers.findIndex(
      (r) => r.uid === t.uid && r.zone === e.zone && r.litAt,
    );
    if (n >= 0) {
      const r = e.placedCrackers[n];
      Date.now() - r.litAt >= 2e3 &&
        Number.isFinite(t.x) &&
        Number.isFinite(t.z) &&
        Math.hypot(t.x - r.x, t.z - r.z) >= 3.5 &&
        (e.placedCrackers.splice(n, 1),
        e.crackerLesson.started &&
          e.crackerLesson.uid === r.uid &&
          ((e.crackerLesson.done = !0), (e.crackerLesson.uid = null)),
        e.fired++,
        (e.crackerUsed = [...new Set([...e.crackerUsed, r.id])]),
        (o = !0),
        (a = ze[r.id].title + " · Happy Diwali!"));
    }
  }
  return (
    t.type === "snack" &&
      ["laddoo", "jalebi", "chai"].includes(t.id) &&
      e.inventory[t.id] &&
      (e.inventory[t.id]--,
      e.snacks.push(t.id),
      (e.snacks = e.snacks.slice(-20)),
      (o = !0),
      (a = "Wah! Mela wala swaad.")),
    t.type === "outfit" &&
      e.inventory.kurta &&
      ((e.outfit = !e.outfit),
      (e.avatar = {
        gender: e.avatar?.gender || "boy",
        outfit: e.outfit ? "kurta" : "everyday",
      }),
      (o = !0),
      (a = "Diwali look ready! Close view mein dekho.")),
    t.type === "ride" &&
      ja.includes(t.id) &&
      !e.rides.includes(t.id) &&
      (e.rides.push(t.id),
      (o = !0),
      (a = "Ek aur chakkar? Mela toh abhi shuru hua hai!")),
    { changed: o, message: a }
  );
}
function Ji(e) {
  try {
    const t = JSON.parse(e);
    if (
      ![1, 2, 3, 4].includes(t?.version) ||
      ((t.mode ??= "story"), !Object.hasOwn(Za, t.mode)) ||
      (t.version === 1 &&
        ((t.version = 2),
        (t.zone = "home"),
        (t.position = { ...re.home.spawn }),
        (t.papaStarted = t.papa || t.searched?.length > 0)),
      t.version === 2 &&
        Object.assign(t, {
          version: 3,
          colours:
            t.inventory?.rangoli || t.decorations?.includes("rangoli")
              ? ["rose", "gold", "white"]
              : [],
          rangoli: t.decorations?.includes("rangoli")
            ? [
                ...Array.from({ length: 8 }, (n, r) => ({
                  x: Math.cos((r * Math.PI) / 4) * 0.48,
                  y: Math.sin((r * Math.PI) / 4) * 0.48,
                  r: 0.19,
                  colour: "rose",
                })),
                { x: 0, y: 0, r: 0.2, colour: "gold" },
              ]
            : [],
          soanStarted: !1,
          delivered: [],
          soanReturned: !1,
          pooja: [],
          crackerUsed: t.fired ? ["fountain"] : [],
          snacks: [],
          outfit: !1,
          rides: [],
        }),
      t.version === 3 &&
        Object.assign(t, {
          version: 4,
          poojaTurns: [0, 1, 2].map((n) => (t.pooja?.length > n ? 5 : 0)),
          placedCrackers: [],
          placementSerial: 0,
          anshikaSeen: !1,
          anshikaStarted: !1,
          anshikaDone: !1,
          anshikaRangoli: [],
        }),
      (t.crackerLesson ??= { started: !1, done: !1, uid: null }),
      (t.avatar ??= null),
      (t.unlockedEffects ??= []),
      t.avatar !== null && !la(t.avatar)) ||
      !Array.isArray(t.unlockedEffects) ||
      t.unlockedEffects.length > 4 ||
      new Set(t.unlockedEffects).size !== t.unlockedEffects.length ||
      t.unlockedEffects.some((n) => !Object.hasOwn(Z.effectPrices, n)) ||
      typeof t.crackerLesson.started != "boolean" ||
      typeof t.crackerLesson.done != "boolean" ||
      (t.crackerLesson.done && !t.crackerLesson.started) ||
      (t.crackerLesson.uid !== null &&
        (!Number.isSafeInteger(t.crackerLesson.uid) ||
          t.crackerLesson.uid < 1)) ||
      !Object.hasOwn(re, t.zone) ||
      typeof t.papaStarted != "boolean"
    )
      return null;
    const a = oa();
    if (
      ((t.movie ??= null),
      t.movieChosen === void 0 &&
        (t.movie?.videoId === "CZhFd65FAYY" && (t.movie = null),
        (t.movieChosen = !!t.movie)),
      typeof t.movieChosen != "boolean" ||
        (t.movie !== null && !tn(t.movie)) ||
        ((t.beggarGiven ??= 0),
        (t.fireworksSeconds ??= 0),
        (t.fireworksWatched ??= !1),
        Number.isInteger(t.fireworksSeconds) &&
          t.fireworksSeconds >= De &&
          t.fireworksSeconds <= 36 &&
          ((t.fireworksSeconds = De), (t.fireworksWatched = !0)),
        !Number.isSafeInteger(t.beggarGiven) ||
          t.beggarGiven < 0 ||
          t.beggarGiven > 1e6 ||
          !Number.isInteger(t.fireworksSeconds) ||
          t.fireworksSeconds < 0 ||
          t.fireworksSeconds > De ||
          typeof t.fireworksWatched != "boolean" ||
          t.fireworksWatched !== (t.fireworksSeconds === De)) ||
        ((t.donated ??= 0),
        (t.wishes ??= []),
        !Number.isSafeInteger(t.donated) ||
          t.donated < 0 ||
          t.donated > 1e6 ||
          !Array.isArray(t.wishes) ||
          t.wishes.length > Z.temple.maxWishes ||
          t.wishes.some(
            (n) =>
              typeof n != "string" ||
              !n.trim() ||
              n.length > Z.temple.wishLength ||
              /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(n),
          )) ||
        (t.homeDesign === void 0 &&
          (t.homeDesign = { diyas: null, lights: null }),
        !t.homeDesign ||
          ["diyas", "lights"].some(
            (n) => t.homeDesign[n] !== null && !qn(t.homeDesign[n]),
          )) ||
        !Number.isSafeInteger(t.wallet) ||
        t.wallet < 0 ||
        t.wallet > 1e6)
    )
      return null;
    for (const n of ["started", "papa", "lights", "rewarded", "night"])
      if (typeof t[n] != "boolean") return null;
    for (const [n, r] of [
      ["cleaned", Z.chores.map((b) => b.id)],
      ["searched", Z.searches.map((b) => b.id)],
      ["decorations", ["diyas", "lights", "rangoli"]],
    ])
      if (
        !Array.isArray(t[n]) ||
        new Set(t[n]).size !== t[n].length ||
        t[n].some((b) => !r.includes(b))
      )
        return null;
    if (
      !Array.isArray(t.knots) ||
      t.knots.length !== 4 ||
      t.knots.some((n) => typeof n != "boolean") ||
      !Array.isArray(t.found) ||
      t.found.length > 4 ||
      t.found.some((n) => !Z.discoveries.some((r) => r[0] === n)) ||
      !t.inventory ||
      typeof t.inventory != "object" ||
      Object.entries(t.inventory).some(
        ([n, r]) =>
          !Z.products[n] ||
          !Number.isInteger(r) ||
          r < 0 ||
          r > Z.products[n].max,
      ) ||
      !Number.isInteger(t.fired) ||
      t.fired < 0 ||
      t.fired > 1e5 ||
      (t.avatar &&
        t.avatar.outfit !== "everyday" &&
        !t.inventory[t.avatar.outfit] &&
        (t.avatar = { ...Ft, gender: t.avatar.gender }),
      !Array.isArray(t.colours) ||
        t.colours.some((n) => !Object.hasOwn(gt, n)) ||
        new Set(t.colours).size !== t.colours.length ||
        !ra(t.rangoli, t.colours))
    )
      return null;
    for (const n of ["soanStarted", "soanReturned", "outfit"])
      if (typeof t[n] != "boolean") return null;
    for (const [n, r, b] of [
      ["delivered", Zn, 3],
      ["crackerUsed", Object.keys(ze), Object.keys(ze).length],
      ["rides", ja, ja.length],
    ])
      if (
        !Array.isArray(t[n]) ||
        t[n].length > b ||
        new Set(t[n]).size !== t[n].length ||
        t[n].some((i) => !r.includes(i))
      )
        return null;
    if (
      !Array.isArray(t.snacks) ||
      t.snacks.length > 20 ||
      t.snacks.some((n) => !["laddoo", "jalebi", "chai"].includes(n)) ||
      !Array.isArray(t.pooja) ||
      t.pooja.length > 4 ||
      t.pooja.some(
        (n, r) => n !== ["diya", "ganesh", "lakshmi", "prasad"][r],
      ) ||
      !Array.isArray(t.poojaTurns) ||
      t.poojaTurns.length !== 3 ||
      t.poojaTurns.some((n) => !Number.isInteger(n) || n < 0 || n > 5)
    )
      return null;
    for (const n of ["anshikaSeen", "anshikaStarted", "anshikaDone"])
      if (typeof t[n] != "boolean") return null;
    if (
      !ra(t.anshikaRangoli, [
        ...new Set([...t.colours, "rose", "gold", "white"]),
      ]) ||
      !Number.isSafeInteger(t.placementSerial) ||
      t.placementSerial < 0 ||
      !Array.isArray(t.placedCrackers) ||
      t.placedCrackers.length > 8 ||
      new Set(t.placedCrackers.map((n) => n.uid)).size !==
        t.placedCrackers.length ||
      t.placedCrackers.some(
        (n) =>
          !n ||
          !Number.isSafeInteger(n.uid) ||
          n.uid < 1 ||
          n.uid > t.placementSerial ||
          !Object.hasOwn(ze, n.id) ||
          !["neighborhood", "market"].includes(n.zone) ||
          !Number.isFinite(n.x) ||
          !Number.isFinite(n.z) ||
          n.x < re[n.zone].bounds.minX ||
          n.x > re[n.zone].bounds.maxX ||
          n.z < re[n.zone].bounds.minZ ||
          n.z > re[n.zone].bounds.maxZ ||
          !Number.isFinite(n.litAt) ||
          n.litAt < 0,
      )
    )
      return null;
    const o = re[t.zone].bounds;
    return {
      ...a,
      ...t,
      position: {
        x: Number.isFinite(t.position?.x)
          ? Math.max(o.minX, Math.min(o.maxX, t.position.x))
          : re[t.zone].spawn.x,
        z: Number.isFinite(t.position?.z)
          ? Math.max(o.minZ, Math.min(o.maxZ, t.position.z))
          : re[t.zone].spawn.z,
      },
      yaw: Number.isFinite(t.yaw) ? t.yaw : 0,
    };
  } catch {
    return null;
  }
}
function Qi(e) {
  try {
    return Ji(e.getItem(Z.saveKey)) || oa();
  } catch {
    return oa();
  }
}
function er(e, t) {
  try {
    return (e.setItem(Z.saveKey, JSON.stringify(t)), !0);
  } catch {
    return !1;
  }
}
function tr(e, t) {
  const a = oa();
  a.guestId = t.guestId;
  try {
    (e.setItem(Z.saveKey + "-before-restart", JSON.stringify(t)),
      e.setItem(Z.saveKey, JSON.stringify(a)));
  } catch {
    return !1;
  }
  return (Object.assign(t, a), !0);
}
function ra(e, t) {
  return (
    Array.isArray(e) &&
    e.length <= 80 &&
    e.every(
      (a) =>
        a &&
        t.includes(a.colour) &&
        Number.isFinite(a.x) &&
        Math.abs(a.x) <= 1 &&
        Number.isFinite(a.y) &&
        Math.abs(a.y) <= 1 &&
        Number.isFinite(a.r) &&
        a.r >= 0.025 &&
        a.r <= 0.4,
    )
  );
}
function ar({
  state: e,
  showPanel: t,
  act: a,
  say: o,
  startAarti: n,
  photo: r,
  fire: b,
  eat: i,
  ride: l,
  wardrobe: d,
  gameItem: s,
  modes: f,
}) {
  const p = (c) => document.getElementById(c);
  function g(c = "home") {
    const h = c === "anshika",
      S = h ? [...new Set([...e.colours, "rose", "gold", "white"])] : e.colours;
    if (
      (h && !e.anshikaStarted && a({ type: "anshikaStart" }),
      !h &&
        (!e.lights ||
          (!e.inventory.rangoli && !e.decorations.includes("rangoli"))))
    ) {
      o(
        "Roshni didi se rangoli starter colours le aao. Ghar ki lights bhi suljha lo.",
      );
      return;
    }
    let N = (h ? e.anshikaRangoli : e.rangoli).map((A) => ({ ...A })),
      T = S[0],
      R = 0.19;
    t(
      `<span class="eyebrow">APNE RANG. APNI RANGOLI.</span><h2>${h ? "Suhani ki rangoli" : "Aangan ki rangoli"}</h2><p>Rang chuno, phir circles banane ke liye canvas par tap karo. Roshni didi ki shop par aur rang milenge.</p><div class="swatches">${S.map((A) => `<button data-colour="${A}" style="--swatch:${gt[A].hex}" aria-label="${gt[A].name}">${gt[A].name}</button>`).join("")}</div><label>Circle ka size <input id="circle-size" aria-label="Circle ka size" type="range" min="3" max="32" value="19"></label><canvas id="rangoli-canvas" width="500" height="500" aria-label="Rangoli banane ka canvas" tabindex="0"></canvas><p id="rangoli-hint">Circle lagane ke liye tap karo · Arrow keys se cursor ghumao · Enter se circle lagao</p><div class="action-row rangoli-actions"><button id="rangoli-undo" class="secondary">Pichhla circle hatao</button><button id="rangoli-flower" class="secondary">Phool ke circles jodo</button><button id="rangoli-save" class="primary">Rangoli save karo</button></div>`,
    );
    const B = p("rangoli-canvas"),
      G = B.getContext("2d");
    let H = { x: 0, y: 0 };
    function $() {
      ((G.fillStyle = "#bc8a67"),
        G.fillRect(0, 0, 500, 500),
        (G.strokeStyle = "#f2d5a655"),
        (G.lineWidth = 1));
      for (let A = 0; A <= 500; A += 50)
        (G.beginPath(),
          G.moveTo(A, 0),
          G.lineTo(A, 500),
          G.moveTo(0, A),
          G.lineTo(500, A),
          G.stroke());
      for (const A of N)
        ((G.fillStyle = gt[A.colour].hex),
          G.beginPath(),
          G.arc(250 + A.x * 250, 250 + A.y * 250, A.r * 250, 0, Math.PI * 2),
          G.fill());
      ((G.strokeStyle = "#fff"),
        G.strokeRect(246 + H.x * 250, 246 + H.y * 250, 8, 8),
        (p("rangoli-hint").textContent =
          `${N.length}/80 circles · ${gt[T].name} · Tap to place, arrows + Enter also work`),
        document
          .querySelectorAll("[data-colour]")
          .forEach((A) =>
            A.setAttribute("aria-pressed", String(A.dataset.colour === T)),
          ));
    }
    function P(A, O) {
      N.length >= 80 ||
        (N.push({
          x: Math.max(-1, Math.min(1, A)),
          y: Math.max(-1, Math.min(1, O)),
          r: R,
          colour: T,
        }),
        $());
    }
    ((B.onpointerdown = (A) => {
      const O = B.getBoundingClientRect();
      ((H = {
        x: ((A.clientX - O.left) / O.width) * 2 - 1,
        y: ((A.clientY - O.top) / O.height) * 2 - 1,
      }),
        P(H.x, H.y));
    }),
      (B.onkeydown = (A) => {
        [
          "ArrowLeft",
          "ArrowRight",
          "ArrowUp",
          "ArrowDown",
          "Enter",
          " ",
        ].includes(A.key) &&
          (A.preventDefault(),
          A.key === "Enter" || A.key === " "
            ? P(H.x, H.y)
            : ((H.x = Math.max(
                -1,
                Math.min(
                  1,
                  H.x +
                    (A.key === "ArrowLeft"
                      ? -0.05
                      : A.key === "ArrowRight"
                        ? 0.05
                        : 0),
                ),
              )),
              (H.y = Math.max(
                -1,
                Math.min(
                  1,
                  H.y +
                    (A.key === "ArrowUp"
                      ? -0.05
                      : A.key === "ArrowDown"
                        ? 0.05
                        : 0),
                ),
              )),
              $()));
      }),
      document.querySelectorAll("[data-colour]").forEach(
        (A) =>
          (A.onclick = () => {
            ((T = A.dataset.colour), $());
          }),
      ),
      (p("circle-size").oninput = (A) => (R = Number(A.target.value) / 100)),
      (p("rangoli-undo").onclick = () => {
        (N.pop(), $());
      }),
      (p("rangoli-flower").onclick = () => {
        if (!(N.length > 71)) {
          for (let A = 0; A < 8; A++) {
            const O = (A * Math.PI) / 4;
            P(Math.cos(O) * 0.48, Math.sin(O) * 0.48);
          }
          P(0, 0);
        }
      }),
      (p("rangoli-save").onclick = () => {
        if (h && N.length < 5) {
          p("rangoli-hint").textContent =
            "Suhani ki rangoli mein kam se kam 5 circles lagao.";
          return;
        }
        if (!N.length) {
          p("rangoli-hint").textContent = "Add at least one circle first.";
          return;
        }
        a({ type: h ? "anshikaRangoli" : "rangoli", circles: N }).changed &&
          p("panel").close();
      }),
      $());
  }
  function w() {
    if (tt(e) < 7) {
      o(Q("mother_pooja"));
      return;
    }
    (t(
      `<span class="eyebrow">PARIVAAR KI DIWALI</span><h2>Haathon mein aarti ki thali</h2><p>Deep aarti, Ganesh aarti, phir Lakshmi aarti. Har step mein thali 5 baar ghumao. Screen ke circle par ungli ghumao, ya button dabakar rakho.</p><p>Aarti poori hone par uska music band hoga aur tumhara normal music wapas aayega.</p><button id="start-aarti" class="primary">${e.pooja.length === 4 ? "Phir se aarti karo" : "Thali uthao · Aarti shuru karo"}</button>`,
    ),
      (p("start-aarti").onclick = () => {
        (p("panel").close(), n());
      }));
  }
  function u() {
    t(
      `<span class="eyebrow">MELA WALI DIWALI</span><h2>Apna bag</h2><p>${fe(e) ? "FREE PLAY · Kapde, patakhe aur saare play items free hain. Game paise nahi lagte." : "₹" + e.wallet + " · Patakhe outdoors use karo. Missions se game paise kamao."}</p><div id="inventory-mount"></div><details><summary>Activities aur side missions</summary><h3>Patakha mini missions</h3>${qo.map((N) => `<div class="found"><strong>${N.needs.every((T) => e.crackerUsed.includes(T)) ? "✓ " : ""}${N.title}</strong><small>${N.text} · ${N.needs.filter((T) => e.crackerUsed.includes(T)).length}/${N.needs.length}</small></div>`).join("")}<h3>Sona Papdi · gulabi box, sunehra dhakkan, neeli ribbon</h3><p>${e.soanStarted ? (e.soanReturned ? "Wahi box ghar laut aaya. Poora chakkar!" : `Padosiyon ko Diwali bola: ${e.delivered.length}/3. ${e.delivered.length === 3 ? "Ghar ki doorbell baj rahi hai!" : ""}`) : "Mummy ke paas box hai."}</p><h3>Suhani ki rangoli</h3><p>${e.anshikaDone ? "✓ Suhani ke saath rangoli poori hui!" : "Sharma Colony mein Suhani ke ghar jao aur rangoli banane mein help karo."}</p><h3>Safai discoveries</h3>${e.found.map((N) => `<p>${$n[N] || N}</p>`).join("")}</details>${Rn}`,
    );
    const c = document.createElement("button");
    ((c.className = "secondary"),
      (c.textContent = "Kapde aur character"),
      (c.onclick = d),
      p("inventory-mount").before(c));
    const h = document.createElement("button");
    ((h.className = "secondary"),
      (h.textContent = "Mode badlo"),
      (h.onclick = f),
      c.after(h));
    const S = document.createElement("div");
    S.className = "game-item-links";
    for (const [N, T] of Object.entries({
      laddoo: "Laddoo gun",
      sky: "Sky Blast",
      name: "Name in the Sky",
      ravan: "Ravan show",
    })) {
      const R = document.createElement("button");
      ((R.className = "secondary"),
        (R.textContent = `${T} · ${fe(e) || e.unlockedEffects.includes(N) ? "Chalao" : "Game ₹" + Z.effectPrices[N]}`),
        (R.onclick = () => s(N)),
        S.append(R));
    }
    if ((p("inventory-mount").after(S), r)) {
      const N = document.createElement("button");
      ((N.className = "secondary"),
        (N.textContent = "Diwali ki photo banao"),
        (N.onclick = r),
        p("panel-content").append(N));
    }
    Zi({
      state: e,
      container: p("inventory-mount"),
      onUse(N) {
        if (ke[N]) {
          (a({
            type: "setAvatar",
            avatar: { gender: e.avatar?.gender || "boy", outfit: N },
          }),
            d());
          return;
        }
        if (ze[N] && e.zone === "home") {
          o("Patakhe bahar khuli jagah mein chalao.");
          return;
        }
        (p("panel").close(), ze[N] ? b(N) : i(N));
      },
    });
  }
  return {
    rangoli: g,
    pooja: w,
    activities: u,
    decorate: (c) => Yi({ id: c, state: e, showPanel: t, act: a, say: o }),
  };
}
const An = (e) =>
  e.gender ||
  (/Swara|Kalpana|Heera|Neerja|Aditi|female/i.test(e.name)
    ? "female"
    : /Madhur|Hemant|Prabhat|Ravi|Kabir|male/i.test(e.name)
      ? "male"
      : null);
function zn(e, t) {
  let a = e.filter((o) => /^hi(?:-|_|$)/i.test(o.lang));
  return (
    t === "male" && (a = a.filter((o) => An(o) === "male")),
    t === "female" && (a = a.filter((o) => An(o) !== "male")),
    a.sort((o, n) => Cn(n) - Cn(o))[0]
  );
}
function Cn(e) {
  return (
    (/^hi[-_]IN$/i.test(e.lang) ? 10 : 0) +
    (/Google|Swara|Madhur|Hemant|Kalpana|Neerja|Prabhat/i.test(e.name)
      ? 6
      : 0) +
    (e.localService ? 1 : 0)
  );
}
const za = (e, t) => e * (t ? 0.16 : 1),
  nr = (e, t = Math.random()) => (e ? 2.8 + t * 3.2 : 5 + t * 5),
  En = (e, t) => (e === "home" ? 0 : t ? 0.18 : 0.11);
function or() {
  let e,
    t = !1,
    a = 1,
    o = "home",
    n = 1,
    r = 1,
    b = 0.85,
    i,
    l,
    d,
    s,
    f,
    p = !1,
    g = !1,
    w = !0,
    u = !1,
    c = !0,
    h = !0,
    S = 0.18,
    N = 0,
    T = "festival",
    R = !1,
    B = 0,
    G,
    H = !1,
    $ = 0;
  const P = new Audio(),
    A = new Audio(),
    O = new Audio(),
    v = Array.from({ length: 4 }, () => {
      const k = new Audio();
      return ((k.preload = "none"), (k.mixLevel = 0), k);
    });
  (P.setAttribute?.("data-audio-bus", "dialogue"),
    A.setAttribute?.("data-audio-bus", "ritual"),
    v.forEach((k) => k.setAttribute?.("data-audio-bus", "effects")),
    document.body?.append(P, A, O, ...v));
  let m = 0;
  for (const k of [P, A, O]) k.preload = "none";
  function M(k, V = 0.7) {
    if (!p || !h || document.hidden) return !1;
    const X = v[m++ % v.length];
    return (
      X.pause(),
      (X.src = `/sounds/${k}.mp3`),
      (X.mixLevel = V),
      (X.volume = Math.min(1, V * r * (R ? 0.25 : 1))),
      X.play().catch(() => {
        E(V * 0.25, 0.12, 3e3);
      }),
      !0
    );
  }
  ((P.volume = 0.85), (A.loop = !0), (A.volume = 0.5), (O.volume = S));
  const I = {
    festival: [261.63, 293.66, 329.63, 392, 329.63, 293.66, 261.63, 220],
    mela: [293.66, 329.63, 392, 440, 392, 329.63, 293.66, 261.63],
    anshika: [329.63, 392, 440, 493.88, 440, 392, 329.63, 293.66],
    diya: [261.63, 329.63, 392, 329.63],
    ganesh: [293.66, 329.63, 392, 440, 392, 329.63],
    lakshmi: [261.63, 329.63, 349.23, 392, 349.23, 329.63],
    haunt: [55, 58.27, 65.4, 61.74],
  };
  function D() {
    i ||
      ((i = new AudioContext()),
      (l = i.createGain()),
      (d = i.createGain()),
      (s = i.createGain()),
      (l.gain.value = 0.7),
      (s.gain.value = 0.3),
      d.connect(l),
      s.connect(l),
      l.connect(i.destination),
      W());
  }
  function W() {
    (i && s.gain.setTargetAtTime((R ? 0.08 : 0.3) * r, i.currentTime, 0.15),
      i &&
        d.gain.setTargetAtTime(
          p && w && !u ? za(S, R) : 0,
          i.currentTime,
          0.18,
        ),
      (O.volume = p && w && !u ? za(S, R) : 0),
      (A.volume = p ? za(0.5, R) : 0),
      (P.volume = 0.85 * n));
    for (const k of v)
      k.volume = p && h ? Math.min(1, k.mixLevel * r * (R ? 0.25 : 1)) : 0;
    e?.sync({ enabled: p, music: w && !u, volume: S, speaking: R, theme: T });
  }
  function _(k) {
    ((R = k), !k && p && w && e?.recover?.(), W());
  }
  function x() {
    ((H = !1), B++, P.pause(), window.speechSynthesis?.cancel(), _(!1));
  }
  P.onended = P.onerror = () => {
    ((H = !1), _(!1), C(T));
  };
  async function L() {
    return (G ||= fetch("/voices/catalog.json")
      .then((k) => (k.ok ? k.json() : {}))
      .catch(() => ({})));
  }
  function F(k, V = 1.6, X = 0.025, J = 0, _e = !1) {
    if (!p || (!_e && !h)) return;
    D();
    const qe = i.currentTime + J,
      Le = i.createOscillator(),
      we = i.createGain();
    ((Le.type = "sine"),
      (Le.frequency.value = k),
      we.gain.setValueAtTime(1e-4, qe),
      we.gain.exponentialRampToValueAtTime(X, qe + 0.06),
      we.gain.exponentialRampToValueAtTime(1e-4, qe + V),
      Le.connect(we).connect(_e ? d : s),
      Le.start(qe),
      Le.stop(qe + V + 0.03));
  }
  function Y() {
    if (!p || !w || t || document.hidden || O.getAttribute("src")) return;
    const k = I[T] || I.festival;
    (F(k[N % k.length], 2.5, 0.025, 0, !0),
      N % 4 === 0 && F(k[0] / 2, 4, 0.015, 0, !0),
      N++,
      N % 64 === 0 &&
        ["festival", "mela"].includes(T) &&
        (T = T === "festival" ? "mela" : "festival"));
  }
  function U() {
    return g
      ? !1
      : (D(),
        (p = !0),
        i.resume(),
        l.gain.setTargetAtTime(0.7, i.currentTime, 0.1),
        W(),
        f || ((f = setInterval(Y, 1050)), Y()),
        !0);
  }
  function te() {
    ($++,
      H || window.speechSynthesis?.cancel(),
      A.pause(),
      A.removeAttribute("src"),
      A.load());
  }
  async function j(k) {
    if (((T = k), W(), te(), !["ganesh", "lakshmi"].includes(k))) return;
    const V = k,
      X = await L();
    if (T !== V || !p) return;
    const J = X[k + "_chant"];
    J && !t ? ((A.src = J), A.play().catch(() => {}), W()) : t || C(k);
  }
  function C(k) {
    if (
      !p ||
      t ||
      A.getAttribute("src") ||
      H ||
      document.hidden ||
      !["ganesh", "lakshmi"].includes(k) ||
      !window.speechSynthesis
    )
      return;
    const V = zn(window.speechSynthesis.getVoices(), $t[id]?.[2]);
    if (!V) return;
    const X = ++$,
      J = new SpeechSynthesisUtterance($t[k + "_chant"][1]);
    ((J.voice = V),
      (J.lang = "hi-IN"),
      (J.rate = 0.85),
      (J.volume = 0.65 * n),
      (J.onend = () => {
        X === $ &&
          T === k &&
          !H &&
          setTimeout(() => {
            X === $ && C(k);
          }, 700);
      }),
      window.speechSynthesis.speak(J));
  }
  window.speechSynthesis?.getVoices();
  function E(k = 0.13, V = 0.35, X = 1800) {
    if (!p || !h || document.hidden) return;
    D();
    const J = Math.ceil(i.sampleRate * V),
      _e = i.createBuffer(1, J, i.sampleRate),
      qe = _e.getChannelData(0);
    for (let Ut = 0; Ut < J; Ut++)
      qe[Ut] = (Math.random() * 2 - 1) * Math.pow(1 - Ut / J, 2);
    const Le = i.createBufferSource(),
      we = i.createGain(),
      vt = i.createBiquadFilter();
    ((vt.type = "lowpass"),
      (vt.frequency.value = X),
      (we.gain.value = k),
      (Le.buffer = _e),
      Le.connect(vt).connect(we).connect(s),
      Le.start());
  }
  return (
    document.addEventListener("visibilitychange", () => {
      document.hidden
        ? (x(), A.pause(), O.pause(), v.forEach((k) => k.pause()), i?.suspend())
        : p &&
          (i?.resume(),
          A.getAttribute("src") && A.play().catch(() => {}),
          O.getAttribute("src") && w && O.play().catch(() => {}));
    }),
    {
      get enabled() {
        return p;
      },
      get music() {
        return w;
      },
      get voices() {
        return c;
      },
      get effects() {
        return h;
      },
      get volume() {
        return S;
      },
      get speaking() {
        return R || H;
      },
      stopSpeech: x,
      get theme() {
        return T;
      },
      start: U,
      connectRadio(k) {
        ((e = k), W());
      },
      setRadioActive(k) {
        t !== k &&
          ((t = k), ["ganesh", "lakshmi"].includes(T) && (k ? te() : j(T)));
      },
      ambience(k, V, X) {
        if (
          (V !== o && ((o = V), (a = 0.8)),
          !p || !h || document.hidden || !En(V, X) || ((a -= k), a > 0))
        )
          return;
        a = nr(X);
        const J = En(V, X) * b;
        M("burst", J * 0.5) ||
          (E(J, 0.1, 3200),
          E(J * 0.65, 0.7, 950),
          F(64 + Math.random() * 36, 0.5, J * 0.22));
      },
      setTheme: j,
      toggle() {
        return (
          p
            ? ((p = !1),
              (g = !0),
              x(),
              v.forEach((k) => k.pause()),
              A.pause(),
              O.pause(),
              l?.gain.setTargetAtTime(0, i.currentTime, 0.08),
              W())
            : ((g = !1),
              U(),
              A.getAttribute("src") && A.play().catch(() => {}),
              O.getAttribute("src") && w && O.play().catch(() => {})),
          p
        );
      },
      setMusicSuppressed(k) {
        ((u = !!k),
          u
            ? O.pause()
            : p && w && O.getAttribute("src") && O.play().catch(() => {}),
          W());
      },
      setMusic(k) {
        ((w = k),
          k
            ? O.getAttribute("src") && p && !u && O.play().catch(() => {})
            : O.pause(),
          W());
      },
      setVolume(k) {
        ((S = Math.max(0, Math.min(0.6, k))), W());
      },
      setEffects(k) {
        ((h = k), k || v.forEach((V) => V.pause()), W());
      },
      get levels() {
        return { dialogue: n, effects: r, ambience: b };
      },
      setLevel(k, V) {
        const X = Math.max(0, Math.min(1, V));
        (k === "dialogue" && (n = X),
          k === "effects" && (r = X),
          k === "ambience" && (b = X),
          W());
      },
      setVoices(k) {
        ((c = k), k || x());
      },
      setZone(k) {
        ((o = k), (a = 0.8));
      },
      async speak(k, V) {
        if (!p || !c) return;
        (x(), (H = !0));
        const X = Hi(k),
          J = $t[X]?.[1] || k,
          _e = B,
          qe = await L();
        if (_e !== B || !p || !c) return;
        const Le =
          V ||
          qe[X] ||
          (X === "mother_start"
            ? "/voices/mummy.mp3"
            : X === "papa_start"
              ? "/voices/papa.mp3"
              : null);
        if (!Le && X?.startsWith("anshika_")) {
          H = !1;
          return;
        }
        if (!Le) {
          if (window.speechSynthesis && /[\u0900-\u097f]/.test(J)) {
            const we = new SpeechSynthesisUtterance(J.replace(/^[^:]+:/, "")),
              vt = zn(window.speechSynthesis.getVoices(), $t[X]?.[2]);
            if (!vt) {
              H = !1;
              return;
            }
            ((we.voice = vt),
              (we.lang = "hi-IN"),
              (we.rate = 0.9),
              (we.volume = 0.95 * n),
              (we.onstart = () => {
                _e === B && _(!0);
              }),
              (we.onend = we.onerror =
                () => {
                  _e === B && ((H = !1), _(!1), C(T));
                }),
              window.speechSynthesis.speak(we));
          } else H = !1;
          return;
        }
        ((P.src = Le),
          _(!0),
          P.play().catch(() => {
            _e === B && ((H = !1), _(!1), C(T));
          }));
      },
      async playSource(k, V = 0) {
        /^\/(?!\/)|^https:\/\//.test(k) &&
          ((O.src = k),
          (O.onloadedmetadata = () => {
            O.currentTime = V;
          }),
          (O.loop = !0),
          W(),
          p && w && !u && O.play().catch(() => {}));
      },
      stopSource() {
        (O.pause(), O.removeAttribute("src"), O.load());
      },
      chime() {
        (F(523, 0.6, 0.014), F(659, 0.8, 0.008, 0.16));
      },
      mission() {
        (F(392, 1, 0.018), F(523, 1.2, 0.012, 0.2));
      },
      step() {},
      action(k, V = 1) {
        if (
          ((V = Number.isFinite(V) ? Math.max(0, Math.min(1, V)) : 0),
          k === "haunt-footstep")
        ) {
          (E(0.12 * V, 0.09, 750), F(78, 0.13, 0.07 * V));
          return;
        }
        if (k === "haunt-door") {
          (E(0.06, 0.7, 240), F(62, 0.8, 0.06));
          return;
        }
        if (k === "haunt-heart") {
          (F(58, 0.18, 0.055), F(52, 0.2, 0.035, 0.23));
          return;
        }
        if (k === "haunt-caught") {
          (E(0.34, 0.045, 6500), E(0.13, 0.28, 1400), F(62, 0.22, 0.13));
          return;
        }
        if (k === "brush") {
          E(0.09, 0.2, 1900);
          return;
        }
        if (k === "drawer") {
          (E(0.13, 0.25, 900), F(180, 0.18, 0.03));
          return;
        }
        if (k === "eat") {
          E(0.045, 0.055, 1400);
          return;
        }
        if (k === "sip") {
          E(0.025, 0.13, 600);
          return;
        }
        if (k === "place") {
          (E(0.06, 0.08, 850), F(480, 0.15, 0.035));
          return;
        }
      },
      fuse() {
        E(0.025, 0.45, 900);
      },
      fire(k = "fountain", V = !1) {
        if (!V && k === "mirchi") {
          for (let X = 0; X < 5; X++)
            setTimeout(() => M("burst", 0.3), X * 180);
          return;
        }
        if (!V && ["fountain", "sparkler"].includes(k)) {
          E(0.17, 1.6, 2900);
          return;
        }
        if (
          !M(
            ["rocket", "comet"].includes(k) ? "whistle" : "burst",
            V ? 0.1 : ["fountain", "sparkler"].includes(k) ? 0.35 : 0.7,
          )
        ) {
          if (V) {
            (E(0.12, 0.12, 2800), E(0.06, 0.65, 900));
            return;
          }
          if (k === "rocket" || k === "comet")
            (F(900, 0.7, 0.06),
              setTimeout(() => {
                (E(0.32, 0.09, 4200), E(0.2, 0.8, 1100));
              }, 900));
          else if (k === "mirchi")
            for (let X = 0; X < 5; X++)
              setTimeout(() => E(0.1, 0.11, 2600), X * 180);
          else
            k === "sutli" || k === "murga"
              ? (E(0.5, 0.08, 5e3), E(0.3, 0.7, 950), F(72, 0.45, 0.15))
              : (E(0.22, 0.12, 4e3), E(0.12, 0.9, 2200));
        }
      },
      stopRitual() {
        te();
      },
    }
  );
}
const ir = (e, t, a) => (((e + t) % a) + a) % a,
  In = (e) => {
    const t = Math.max(0, Math.floor(Number.isFinite(e) ? e : 0));
    return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, "0")}`;
  };
function rr({
  tracks: e,
  friend: t,
  aartis: a,
  haunt: o,
  onActive: n,
  onPlay: r = () => {},
  onVolume: b = () => {},
}) {
  const i = (x) => document.getElementById(x);
  let l,
    d = !1,
    s = !1,
    f = !1,
    p = !1,
    g = 0,
    w = "festival",
    u = "festival",
    c = !1,
    h = !0,
    S = 0.18,
    N = !1,
    T = !1,
    R,
    B = e[0],
    G = new Set(),
    H = !1,
    $ = !1,
    P;
  const A = (x) => (i("radio-status").textContent = x),
    O = () => {
      const activeSongTitle = (typeof ROMANTIC_PLAYLIST !== "undefined" && ROMANTIC_PLAYLIST[currentSongIndex]) ? ROMANTIC_PLAYLIST[currentSongIndex].title : B.title;
      ((i("radio-title").textContent = activeSongTitle),
        i("radio-drag") &&
          ((i("radio-drag").textContent = "⠿ " + B.title),
          (i("radio-drag").title =
            B.title + " · Drag to move · Arrow keys move · Home resets")),
        (i("radio-play").textContent = f ? "Ⅱ" : "▶"),
        i("radio-play").setAttribute?.(
          "aria-label",
          f ? "Gaana roko" : "Gaana chalao",
        ),
        i("radio-dock").classList?.toggle("radio-playing", f),
        n(s && !H && (f || !d)));
    };
  function v() {
    (l?.setVolume?.(
      Math.round(S * (N ? 0.16 : 1) * (w === "haunt" ? 0.55 : 1) * 100),
    ),
      (!s || !c || !h || document.hidden || T || H) && l?.pauseVideo?.());
  }
  function m() {
    s && p && c && h && !document.hidden && !T && !H && l?.playVideo?.();
  }
  function M(x, L = x.start || 0) {
    ((B = x),
      (f = !1),
      O(),
      !(!d || !s) &&
        (A("Gaana load ho raha hai…"),
        l.loadVideoById({ videoId: x.id, startSeconds: L }),
        v(),
        m()));
  }
  function I(x = 1) {
    if (w === "haunt") {
      M(B);
      return;
    }
    ((w = "festival"), (R = null), (g = ir(g, x, e.length)), M(e[g]));
  }
  async function D() {
    if (((i("radio-dock").hidden = !1), !s)) {
      ((s = !0), (p = !0), G.clear(), O(), A("YouTube radio jud raha hai…"));
      try {
        (await oo(),
          (l = new window.YT.Player("youtube-player", {
            width: "100%",
            height: "200",
            videoId: B.id,
            playerVars: {
              playsinline: 1,
              controls: 1,
              origin: location.origin,
              start: B.start || 0,
            },
            events: {
              onReady() {
                ((d = !0),
                  M(B),
                  (P ||= setInterval(() => {
                    if (!s || document.hidden) return;
                    const x = l?.getCurrentTime?.() || 0,
                      L = l?.getDuration?.() || 0;
                    ((i("radio-time").textContent = In(x)),
                      (i("radio-duration").textContent = In(L)),
                      (i("radio-seek").max = Math.max(1, L)),
                      (i("radio-seek").value = x));
                  }, 750)),
                  P.unref?.());
              },
              onStateChange(x) {
                if (!s) {
                  x.data === 1 && l?.pauseVideo?.();
                  return;
                }
                ((f = x.data === 1),
                  f
                    ? (G.clear(), v(), A("Ab baj raha hai"))
                    : x.data === 0
                      ? ["diya", "ganesh", "lakshmi", "haunt"].includes(w)
                        ? M(B)
                        : w === "anshika"
                          ? ((f = !1), A("Gaana poora · Agla gaana chuno"))
                          : I()
                      : x.data === 2 && A("Radio ruka hai · Chalao dabao"),
                  O());
              },
              onAutoplayBlocked() {
                A("Gaane ke liye Chalao dabao");
              },
              onError(x) {
                if (
                  (console.warn("YouTube radio playback error", x?.data, B.id),
                  G.add(B.id),
                  B.fallback && !G.has(B.fallback.id))
                ) {
                  M(B.fallback);
                  return;
                }
                !["anshika", "diya", "ganesh", "lakshmi", "haunt"].includes(
                  w,
                ) && G.size < e.length
                  ? I()
                  : ((f = !1),
                    (s = !1),
                    n(!1),
                    A(
                      "Ye gaana yahan nahi chal saka. Agla try karo ya original dhun chuno.",
                    ));
              },
            },
          })));
      } catch {
        ((s = !1),
          n(!1),
          A(
            "YouTube nahi jud paaya. Radio par dobara tap karo; original dhun chalti rahegi.",
          ));
      }
    }
  }
  const W = () => {
    ((p = !0), r(), s || D());
  };
  ((i("radio-prev").onclick = (e) => {
    e?.stopPropagation?.();
    if (typeof window.playRomanticSongPrev === "function") {
      window.playRomanticSongPrev();
    } else {
      (W(), I(-1));
    }
  }),
    (i("radio-next").onclick = (e) => {
      e?.stopPropagation?.();
      if (typeof window.playRomanticSongNext === "function") {
        window.playRomanticSongNext();
      } else {
        (W(), I(1));
      }
    }),
    (i("radio-play").onclick = (e) => {
      e?.stopPropagation?.();
      if (typeof window.toggleRomanticSong === "function") {
        window.toggleRomanticSong();
      } else {
        if ((r(), !s)) {
          D();
          return;
        }
        f ? ((p = !1), l?.pauseVideo?.()) : ((p = !0), l?.playVideo?.(), v());
      }
    }));
  const _ = () => {
    ((s = !1),
      (f = !1),
      l?.pauseVideo?.(),
      (i("radio-dock").hidden = !0),
      n(!1));
  };
  return (
    (i("radio-close").onclick = _),
    (i("radio-seek").oninput = (x) => l?.seekTo?.(Number(x.target.value), !0)),
    (i("radio-list-toggle").onclick = () => {
      ((i("radio-track-list").hidden = !i("radio-track-list").hidden),
        i("radio-list-toggle").setAttribute?.(
          "aria-expanded",
          String(!i("radio-track-list").hidden),
        ));
    }),
    (i("radio-track-list").innerHTML = e
      .map(
        (x, L) =>
          `<button data-radio-track="${L}">${L + 1}. ${x.title}</button>`,
      )
      .join("")),
    (i("radio-track-list").onclick = (x) => {
      const L = x.target.closest("[data-radio-track]");
      L &&
        (W(),
        (w = "festival"),
        (R = null),
        (g = Number(L.dataset.radioTrack)),
        M(e[g]),
        (i("radio-track-list").hidden = !0),
        i("radio-list-toggle").setAttribute?.("aria-expanded", "false"));
    }),
    (i("radio-volume").oninput = (x) =>
      b(Math.max(0, Math.min(60, Number(x.target.value))) / 100)),
    document.addEventListener("visibilitychange", () => {
      document.hidden
        ? (($ = f), l?.pauseVideo?.())
        : $ && s && c && h && !T && !H && l?.playVideo?.();
    }),
    {
      recover: m,
      start() {
        ((p = !0),
          H && ($ = !0),
          d && !s
            ? ((s = !0), (i("radio-dock").hidden = !1), M(B), v())
            : d && s
              ? (l.playVideo(), v())
              : D());
      },
      close: _,
      block(x) {
        x !== H &&
          (x && ($ = f),
          (H = x),
          H ? l?.pauseVideo?.() : $ && s && c && h && !T && l?.playVideo?.(),
          O());
      },
      sync(x) {
        const L = c && h && !T && !H;
        if (
          (({ enabled: c, music: h, volume: S, speaking: N } = x),
          (i("radio-volume").value = Math.round(S * 100)),
          u !== x.theme)
        ) {
          u = x.theme;
          const F = {
            anshika: t,
            diya: a.ganesh,
            ganesh: a.ganesh,
            lakshmi: a.lakshmi,
            haunt: o,
          };
          if (F[x.theme])
            (R || (R = { track: e[g], time: l?.getCurrentTime?.() || 0 }),
              (w = x.theme),
              (T = !1),
              M(F[x.theme]));
          else if (((w = x.theme), (T = !1), R)) {
            const Y = R;
            ((R = null), M(Y.track, Y.time));
          }
        }
        (v(), !L && c && h && !T && !H && s && p && l?.playVideo?.());
      },
    }
  );
}
async function sr({ share: e, clipboard: t, url: a }) {
  const o = {
    title: "Diwali Mela",
    text: "Safai se mela tak — apni Diwali ki kahani khelo!",
    url: a,
  };
  if (e)
    try {
      return (await e(o), "Share menu khul gaya.");
    } catch (n) {
      if (n.name === "AbortError") return "";
    }
  return t
    ? (await t.writeText(a), "Link copy ho gaya. Preview abhi private hai.")
    : "Link copy nahi hua. Browser ke address bar se link copy karo.";
}
const lr = {
  bed: { title: "Bed ke neeche jhaadu lagao", duration: 2.4, broom: !0 },
  boxes: { title: "Purane boxes ki dhool hatao", duration: 2.1, broom: !0 },
  wardrobe: { title: "Almirah ka samaan jamao", duration: 2, broom: !1 },
  desk: { title: "Table ko kapde se saaf karo", duration: 2.2, broom: !1 },
};
function cr(e, t) {
  const a = (w) => document.getElementById(w),
    o = new Se(),
    n = en(o);
  (e.add(o), (o.visible = !1));
  const r = n.sphere(0.3, -0.35, -0.6, 0.075, 12024661),
    b = new Se();
  (o.add(b),
    (n.cylinder(0.28, -0.47, -0.75, 0.018, 0.018, 0.8, 9988933, b).rotation.z =
      -0.3));
  for (let w = 0; w < 11; w++)
    n.cylinder(0.2 + w * 0.018, -0.85, -0.78, 0.008, 0.02, 0.3, 12886115, b);
  const i = n.box(0.3, -0.4, -0.72, 0.32, 0.055, 0.27, 6986641);
  i.rotation.z = 0.2;
  let l = !1,
    d = 0,
    s = 0,
    f,
    p,
    g = 0;
  return {
    get active() {
      return l;
    },
    start(w) {
      return l || ((f = lr[w]), !f)
        ? Promise.resolve(!1)
        : ((l = !0),
          (d = s = g = 0),
          (o.visible = !0),
          (b.visible = f.broom),
          (i.visible = !f.broom),
          (a("chore-title").textContent = f.title),
          (a("chore-controls").hidden = !1),
          document.body.classList.add("chore-active"),
          new Promise((u) => (p = u)));
    },
    update(w) {
      if (!l) return;
      ((d += w),
        (s = Math.min(1, s + w / f.duration)),
        (g -= w),
        g <= 0 && (t.action("brush"), (g = 0.42)));
      const u = Math.sin(d * 11);
      ((o.position.x = u * 0.13),
        (o.rotation.z = u * 0.12),
        (r.position.y = -0.35 + Math.abs(u) * 0.025),
        (a("chore-progress").value = s),
        s >= 1 &&
          ((l = !1),
          (o.visible = !1),
          (a("chore-controls").hidden = !0),
          document.body.classList.remove("chore-active"),
          p(!0)));
    },
  };
}
function ur(e) {
  let t = 0;
  const a = new Map();
  return {
    dispatch(o, n = `${e.guestId}:${++t}`) {
      if (a.has(n))
        return { ...a.get(n), duplicate: !0, changed: !1, message: "" };
      const r = { ...io(e, o), requestId: n, actorId: e.guestId };
      return (a.set(n, r), a.size > 256 && a.delete(a.keys().next().value), r);
    },
    reset() {
      a.clear();
    },
  };
}
const z = (e) => document.getElementById(e),
  ie = z("panel");
let Ye;
try {
  Ye = localStorage;
} catch {}
const y = Ao(Qi(Ye), Z.playMode || "story"),
  q = or(),
  ce = new Bn(),
  ro = ur(y),
  at = rr({
    tracks: Z.music,
    friend: Z.friendMusic,
    aartis: Z.aartis,
    haunt: Ko.music,
    onVolume: xo,
    onActive: (e) => q.setRadioActive(e),
    onPlay: () => {
      (q.enabled || q.toggle(),
        q.setMusic(!0),
        (z("sound").textContent = "♫ Sound on"));
    },
  });
q.connectRadio(at);
let Bt = !1,
  an = !1;
const nn = () =>
    Vi(
      innerWidth,
      innerHeight,
      devicePixelRatio,
      matchMedia("(pointer: coarse) and (hover: none)").matches,
    ),
  He = nn();
document.body.classList.toggle("touch-ui", He.mobile);
let me;
try {
  me = new jo({
    antialias: !He.mobile,
    powerPreference: He.mobile ? "default" : "high-performance",
  });
} catch {
  throw (
    (z("loading").innerHTML =
      "<span>Sharma Colony ghoomne ke liye WebGL chahiye.</span><small>Graphics on karke browser mein kholo.</small>"),
    Error("WebGL unavailable")
  );
}
me.setPixelRatio(He.pixelRatio);
me.setSize(innerWidth, innerHeight);
me.outputColorSpace = ca;
me.toneMapping = Do;
me.toneMappingExposure = 1.1;
me.shadowMap.enabled = !0;
me.shadowMap.type = No;
z("game").append(me.domElement);
ce.fog = new Oo(14272418, 32, 80);
const ae = new Kn(68, innerWidth / innerHeight, 0.06, 100);
ce.add(ae);
const Wa = cr(ae, q),
  wt = new Se();
ae.add(wt);
wt.visible = !1;
const so = en(wt);
so.sphere(0.34, -0.26, -0.6, 0.07, 11368021);
const lo = so.cylinder(0.39, -0.38, -0.52, 0.055, 0.065, 0.27, 11368021);
lo.rotation.x = -0.6;
lo.rotation.z = -0.25;
const on = Go();
ae.add(on);
on.visible = !1;
const Wt = Uo();
ae.add(Wt);
Wt.position.set(0.33, -0.37, -0.85);
Wt.rotation.y = -0.15;
Wt.visible = !1;
let pt = null,
  dt = null;
const Zt = new Map(),
  Ga = new Bo(16773333, 8293754, 2);
ce.add(Ga);
const nt = new Ho(16769457, 3.1);
nt.position.set(-14, 23, 10);
nt.castShadow = !0;
nt.shadow.mapSize.setScalar(He.shadowSize);
Object.assign(nt.shadow.camera, {
  left: -25,
  right: 25,
  top: 25,
  bottom: -25,
  near: 1,
  far: 65,
});
nt.shadow.normalBias = 0.04;
nt.shadow.bias = -2e-4;
ce.add(nt);
const rn = new Fo(16758364, 0, 24, 1);
rn.position.set(0, 3, 10);
ce.add(rn);
const co = new Se();
ce.add(co);
const je = en(co).person(y.position.x, y.position.z, 3768182),
  K = je.group.position;
function uo() {
  Xn(
    je,
    y.avatar ||
      (y.outfit && y.inventory.kurta ? { gender: "boy", outfit: "kurta" } : Ft),
  );
}
uo();
const At = new Qe(
  new Dn(0.49, 0.57, 40),
  new Ot({ color: 15842657, side: ta, transparent: !0 }),
);
At.rotation.x = -Math.PI / 2;
ce.add(At);
const dr = ei(ce),
  Xt = new Map(),
  hr = {
    home: () =>
      Ne(
        () => import("./home-hWfNhUWk.js"),
        __vite__mapDeps([5, 6, 7, 2, 1, 3, 8, 4]),
      ),
    neighborhood: () =>
      Ne(
        () => import("./neighborhood-CAU_uSHL.js"),
        __vite__mapDeps([9, 3, 8, 2]),
      ),
    market: () =>
      Ne(
        () => import("./market-Dm7FxW9c.js"),
        __vite__mapDeps([10, 2, 11, 4, 3, 12, 7, 8, 13]),
      ),
  };
let pe,
  he = y.yaw,
  le = !0,
  Ve = -0.05,
  zt = 0.8,
  Ca = 20,
  Ae,
  Ct = null,
  Jt = performance.now(),
  ve = 0,
  Ea = 0,
  Ze = y.night ? 1 : 0,
  Ge = !1,
  kt = !1,
  Ua = 0,
  Ie = [],
  Me,
  Ee = null,
  Va = !1,
  Tn,
  jt = !1,
  Ka = -60;
const ne = new Set(),
  ye = { x: 0, y: 0 },
  xe = { id: null, x: 0, y: 0 },
  sa = new se(),
  Ia = new se(),
  Ta = new et(),
  pr = new et(13162964),
  fr = new et(1518403),
  mr = new et(16773333),
  yr = new et(9679842),
  gr = new et(16769457),
  br = new et(9549029);
let Pn = !0,
  Te = null;
const _n = new se(ge.x, ge.y, ge.z),
  Lt = new se(),
  Rt = new Kn(),
  $e = Ni({
    state: y,
    act: ee,
    audio: q,
    camera: ae,
    beginView() {
      (Pe(),
        Ke(),
        it.cancel(),
        (Pn = le),
        (le = !0),
        Re(),
        (ae.fov = 45),
        ae.updateProjectionMatrix(),
        K.set(ge.x, 0, ge.seatZ),
        Lt.set(ge.x, 1.55, ge.seatZ),
        Rt.position.copy(Lt),
        Rt.lookAt(_n));
    },
    updateView(e) {
      ((Lt.z =
        ge.z +
        Math.max(
          ge.seatZ - ge.z,
          ge.width / (2 * Math.tan(Math.PI / 8) * ae.aspect * 0.85),
        )),
        Rt.position.copy(Lt),
        Rt.lookAt(_n));
      const t = 1 - Math.exp(-e * 5);
      (ae.position.lerp(Lt, t), ae.quaternion.slerp(Rt.quaternion, t));
    },
    endView() {
      (Pe(),
        K.set(ge.x, 0, ge.seatZ + 1.5),
        (he = 0),
        (Ve = -0.05),
        (le = Pn),
        Re(),
        Fe());
    },
  }),
  Je = Oi({
    state: y,
    act: ee,
    audio: q,
    beginView() {
      (Pe(),
        Ke(),
        K.set(0, 0, 7),
        (he = 0),
        (Ve = 0.65),
        (le = !0),
        (je.group.visible = !1));
    },
    onStop() {
      (Pe(), Re(), Fe());
    },
    spawn(e) {
      if (Me) {
        const t = Ie.filter((o) => o.show);
        if (t.length >= (He.mobile ? 5 : 8)) {
          const o = t[0];
          (o.dispose(), (Ie = Ie.filter((n) => n !== o)));
        }
        const a = Me.createShowBurst(ce, e, He.mobile);
        ((a.show = !0), Ie.push(a));
      }
    },
  }),
  ho = {
    laddoo: "laddoo_cannon",
    sky: "sky_blast",
    name: "name_sky",
    ravan: "ravan_ultimate",
  },
  kr = Object.fromEntries(Object.entries(ho).map(([e, t]) => [t, e]));
function ot(e) {
  const t = z("party-show-notice");
  ((t.textContent = e),
    (t.hidden = !1),
    clearTimeout(ot.timer),
    (ot.timer = setTimeout(() => (t.hidden = !0), 4500)));
}
let Oe,
  po = !0,
  ht = null;
const wr = new se(),
  Ce = Ri({
    scene: ce,
    camera: ae,
    audio: q,
    getPosition: () => ({ x: K.x, z: K.z, zone: y.zone }),
    getYaw: () => he,
    getAim: () => ({
      origin: ae.position,
      direction: ae.getWorldDirection(wr),
    }),
    mobile: He.mobile,
    onCaption: ot,
    onStatus: (e) => Oe?.updateStatus(e),
    onShot: (e) => {
      ue.connected &&
        ue.sendSpectacle("laddoo_cannon", { action: "shot", pitch: e.pitch });
    },
  });
function fo() {
  const e = Ce.focus;
  ((he = Math.atan2(K.x - e.x, K.z - e.z)),
    (Ve = Math.atan2(e.y - 1.65, Math.hypot(K.x - e.x, K.z - e.z))));
}
function mo(e) {
  if (
    !fe(y) &&
    !y.unlockedEffects.includes(e.productId) &&
    !sn.owns(e.productId)
  ) {
    ot("Pehle game paise se item unlock karo.");
    return;
  }
  ((po = le),
    (le = !0),
    Re(),
    Ce.begin(e) &&
      (Oe.open(e.productId, e),
      Oe.updateStatus(Ce.status),
      document.body.classList.add("premium-active"),
      fo()));
}
let Ln = null,
  yt = 0,
  Qt = 0,
  bt = !1,
  Ht;
const ue = wi({
  scene: ce,
  getPlayer: () => ({
    zone: y.zone,
    x: K.x,
    z: K.z,
    yaw: he,
    avatar: y.avatar || Ft,
  }),
  showPanel: de,
  onStatus(e) {
    (e.status !== "joined" && Ht?.clear(),
      (z("friends").textContent =
        e.status === "joined" ? `Friends ${e.count}/8` : "Multiplayer"),
      z("friends").setAttribute(
        "aria-label",
        e.status === "joined"
          ? `Multiplayer room: ${e.count} of 8 players`
          : "Open multiplayer rooms",
      ));
  },
  onEvent(e) {
    if (e.kind === "team_cracker") {
      Ht.add(e);
      return;
    }
    if (e.kind === "finale") {
      Ne(
        () => import("./night-Drgva5Cr.js"),
        __vite__mapDeps([0, 1, 2, 3, 4]),
      ).then((o) => (Me = o));
      return;
    }
    const t = kr[e.kind],
      a = ue.room?.players.find((o) => o.id === e.actorId);
    t &&
      e.actorId !== ue.selfId &&
      e.zone === y.zone &&
      !kt &&
      Ce.play({
        productId: t,
        name: e.text || "",
        preview: !0,
        remote: !0,
        action: e.action,
        pitch: e.pitch,
        colour: e.colour,
        pattern: e.pattern,
        height: e.height,
        size: e.size,
        position: { x: e.x, z: e.z, zone: e.zone },
        yaw: Number.isFinite(e.yaw) ? e.yaw : a?.yaw || 0,
      });
  },
});
Ht = vi({
  scene: ce,
  audio: q,
  getZone: () => y.zone,
  getNow: () => ue.getShow().serverNow,
  getPosition: () => K,
});
Oe = $i({
  onChange: (e) => Ce.configure(e),
  onFire: () => Ce.fire(),
  onLaunch(e) {
    if ((Ce.configure(e), !Ce.launch())) return;
    (fo(), Oe.updateStatus(Ce.status));
    const t = ho[Oe.product];
    t &&
      t !== "laddoo_cannon" &&
      ue.connected &&
      ue.sendSpectacle(t, { text: e.name, ...e });
  },
  onCapture: ma,
  onStop() {
    (Ce.clear(),
      document.body.classList.remove("premium-active"),
      (le = po),
      Re(),
      Pe());
  },
});
const sn = oi({
  showPanel: de,
  storage: Ye,
  notify: ot,
  onUnlock: () => ot("Purchase verified · Mela Market mein apna item kholo"),
});
sn.init();
const rt = document.createElement("a");
rt.id = "shagun-link";
rt.href = "#";
rt.innerHTML =
  "<span class='shagun-latest' style='display:inline-flex; align-items:center; gap:4px; font-weight:700;'>Created by uglubuglu ❤️💖</span>";
rt.setAttribute("aria-label", "Created by uglubuglu ❤️💖");
rt.onclick = (e) => {
  e.preventDefault();
  oe("Created by uglubuglu ❤️💖 with love!");
};
document.body.append(rt);

// --- Romantic Couple Bedroom System ---
let coupleActionState = null; // null | "lie" | "kiss" | "hug"
let coupleActionTimer = 0;
const coupleParticles = [];
let heartTex = null;
let sparkleTex = null;

function getHeartTex() {
  if (!heartTex) {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d");
    ctx.font = "46px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("💖", 32, 32);
    heartTex = new Qa(c);
    heartTex.colorSpace = ca;
  }
  return heartTex;
}

function getSparkleTex() {
  if (!sparkleTex) {
    const c = document.createElement("canvas");
    c.width = 64;
    c.height = 64;
    const ctx = c.getContext("2d");
    ctx.font = "46px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✨", 32, 32);
    sparkleTex = new Qa(c);
    sparkleTex.colorSpace = ca;
  }
  return sparkleTex;
}

function spawnFloatingParticles(x, y, z, type = "heart") {
  const tex = type === "heart" ? getHeartTex() : getSparkleTex();
  for (let pIdx = 0; pIdx < 14; pIdx++) {
    const mat = new Ot({
      map: tex,
      transparent: true,
      opacity: 1,
      side: 0,
      depthWrite: false,
    });
    const geom = new Co(0.32, 0.32);
    const sprite = new Qe(geom, mat);
    sprite.position.set(
      x + (Math.random() - 0.5) * 0.45,
      y + (Math.random() - 0.5) * 0.25,
      z + (Math.random() - 0.5) * 0.45,
    );
    sprite.userData = {
      vy: 0.7 + Math.random() * 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vz: (Math.random() - 0.5) * 0.35,
      rotSpeed: (Math.random() - 0.5) * 2,
      age: 0,
      life: 2.2 + Math.random() * 0.8,
    };
    ce.add(sprite);
    coupleParticles.push(sprite);
  }
}

function getBedroomCompanion() {
  if (typeof i !== "undefined" && i && i.size > 0) {
    return Array.from(i.values())[0];
  }
  return pe?.companion || null;
}

const coupleDock = document.createElement("aside");
coupleDock.id = "couple-actions-dock";
coupleDock.hidden = true;
coupleDock.setAttribute("aria-label", "Romantic Couple Actions");
coupleDock.style.cssText =
  "position:fixed;bottom:82px;left:50%;transform:translateX(-50%);z-index:90;display:none !important;gap:10px;background:rgba(255,240,245,0.92);backdrop-filter:blur(10px);padding:8px 16px;border-radius:40px;border:2px solid #ff80ab;box-shadow:0 8px 30px rgba(233,30,99,0.35);";
coupleDock.innerHTML = `
  <button id="act-bed" style="background:linear-gradient(135deg,#ff80ab,#ff4081);color:#fff;border:none;padding:10px 16px;border-radius:30px;font-weight:700;font-size:0.92rem;cursor:pointer;display:flex;align-items:center;gap:6px;box-shadow:0 4px 12px rgba(255,64,129,0.3);transition:transform 0.15s;">🛏️ Sath me letna</button>
  <button id="act-kiss" style="background:linear-gradient(135deg,#ff4081,#e91e63);color:#fff;border:none;padding:10px 16px;border-radius:30px;font-weight:700;font-size:0.92rem;cursor:pointer;display:flex;align-items:center;gap:6px;box-shadow:0 4px 12px rgba(233,30,99,0.3);transition:transform 0.15s;">💋 Kiss</button>
  <button id="act-hug" style="background:linear-gradient(135deg,#e91e63,#c2185b);color:#fff;border:none;padding:10px 16px;border-radius:30px;font-weight:700;font-size:0.92rem;cursor:pointer;display:flex;align-items:center;gap:6px;box-shadow:0 4px 12px rgba(194,24,91,0.3);transition:transform 0.15s;">🫂 Hug</button>
`;
document.body.append(coupleDock);

// Action 1: Sath me letna (Lie Down Together)
document.getElementById("act-bed").onclick = () => {
  const btn = document.getElementById("act-bed");
  if (coupleActionState === "lie") {
    // Stand up
    coupleActionState = null;
    je.pose.position.set(0, 0, 0);
    je.pose.rotation.set(0, 0, 0);
    K.set(-7.5, 0, -4.8);
    je.group.position.copy(K);
    const comp = getBedroomCompanion();
    if (comp) {
      comp.pose.position.set(0, 0, 0);
      comp.pose.rotation.set(0, 0, 0);
      comp.group.position.set(-5.2, 0, -5.8);
      comp.group.rotation.y = -Math.PI / 3;
    }
    btn.textContent = "🛏️ Sath me letna";
    oe("Wapas khade ho gaye! ✨", null, 2000);
  } else {
    coupleActionState = "lie";
    K.set(-8.1, 0.45, -6.5);
    je.group.position.copy(K);
    je.group.rotation.y = 0;
    je.pose.position.set(0, 0.42, 0);
    je.pose.rotation.set(-Math.PI / 2, 0, 0);
    const comp = getBedroomCompanion();
    if (comp) {
      comp.group.position.set(-6.9, 0.45, -6.5);
      comp.group.rotation.y = 0;
      comp.pose.position.set(0, 0.42, 0);
      comp.pose.rotation.set(-Math.PI / 2, 0, -0.15);
    }
    btn.textContent = "🛏️ Uth jao (Stand Up)";
    oe("Pyar se sath me lete hue... 🛏️💖", null, 3000);
  }
};

// Action 2: Kiss
document.getElementById("act-kiss").onclick = () => {
  coupleActionState = "kiss";
  coupleActionTimer = ve + 3.5;
  const comp = getBedroomCompanion();
  if (comp) {
    const dirX = Math.sin(je.group.rotation.y);
    const dirZ = Math.cos(je.group.rotation.y);
    comp.group.position.set(K.x + dirX * 0.55, 0, K.z + dirZ * 0.55);
    comp.group.rotation.y = je.group.rotation.y + Math.PI;
    je.pose.rotation.x = 0.22;
    comp.pose.rotation.x = 0.22;
    if (je.arms?.[0]) je.arms[0].rotation.set(0.4, 0.3, -0.2);
    if (je.arms?.[1]) je.arms[1].rotation.set(0.4, -0.3, 0.2);
    if (comp.arms?.[0]) comp.arms[0].rotation.set(0.4, 0.3, -0.2);
    if (comp.arms?.[1]) comp.arms[1].rotation.set(0.4, -0.3, 0.2);
  }
  spawnFloatingParticles(K.x, 1.5, K.z, "heart");
  oe("Ek pyara sa kiss! 💋💖✨", null, 3000);
};

// Action 3: Hug
document.getElementById("act-hug").onclick = () => {
  coupleActionState = "hug";
  coupleActionTimer = ve + 4.0;
  const comp = getBedroomCompanion();
  if (comp) {
    const dirX = Math.sin(je.group.rotation.y);
    const dirZ = Math.cos(je.group.rotation.y);
    comp.group.position.set(K.x + dirX * 0.48, 0, K.z + dirZ * 0.48);
    comp.group.rotation.y = je.group.rotation.y + Math.PI;
    je.pose.rotation.x = 0.12;
    comp.pose.rotation.x = 0.12;
    if (je.arms?.[0]) je.arms[0].rotation.set(0.7, 0.9, -0.5);
    if (je.arms?.[1]) je.arms[1].rotation.set(0.7, -0.9, 0.5);
    if (comp.arms?.[0]) comp.arms[0].rotation.set(0.7, 0.9, -0.5);
    if (comp.arms?.[1]) comp.arms[1].rotation.set(0.7, -0.9, 0.5);
  }
  spawnFloatingParticles(K.x, 1.3, K.z, "sparkle");
  oe("Warm & cozy hug... 🫂❤️", null, 3000);
};
const It = document.createElement("span");
It.className = "shagun-latest";
It.hidden = !0;
It.setAttribute("aria-live", "polite");
It.innerHTML = "<small>Latest shagun</small><strong></strong>";
rt.append(It);
const vr = "/support-feed.js";
import(vr).then(({ watchSupport: e }) => e(It)).catch(() => {});
ai({ dock: z("radio-dock"), avoid: rt });
const xr = () =>
    window.open("/support?from=diwali", "_blank", "noopener,noreferrer"),
  Ya = Vo({
    showPanel: de,
    storage: Ye,
    commerce: sn,
    getState: () => y,
    act: ee,
    onSupport: xr,
    notify: ot,
    onShare: ma,
    onPreview(e) {
      if ((ft(), Oe.close(), Ke(), it.cancel(), Pe(), y.zone === "market")) {
        const t = new se(0, 0, 24);
        ((ht = {
          from: K.clone(),
          end: t,
          elapsed: 0,
          duration: Math.max(0.2, K.distanceTo(t) / 9),
          preview: e,
        }),
          ot("Khuli gali mein chalte hain · phir apna show control karo"));
      } else mo(e);
    },
  });
function Mr() {
  const { show: e, serverNow: t } = ue.getShow();
  if (
    ((bt =
      ue.connected &&
      y.zone === "neighborhood" &&
      !!e &&
      t >= e.startAt - 2e3 &&
      t < e.endsAt),
    (z("party-show-banner").hidden = !bt),
    !bt)
  )
    return;
  const a = (t - e.startAt) / 1e3;
  if (
    (e.id !== Ln &&
      ((Ln = e.id),
      (yt = be.findIndex((o) => o.at >= a - 0.4)),
      yt < 0 && (yt = be.length),
      (Qt = yt)),
    (z("party-show-progress").textContent =
      a < 0
        ? "Starting together…"
        : `${Math.max(0, Math.ceil((e.endsAt - t) / 1e3))}s · Explore freely`),
    !Me)
  ) {
    Ne(
      () => import("./night-Drgva5Cr.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
    ).then((o) => (Me = o));
    return;
  }
  for (; yt < be.length && be[yt].at <= a;) {
    const o = be[yt++];
    if (a - o.at > 0.8) continue;
    const n = Ie.filter((b) => b.party);
    n.length >= (He.mobile ? 5 : 8) &&
      (n[0].dispose(), (Ie = Ie.filter((b) => b !== n[0])));
    const r = Me.createShowBurst(ce, o, He.mobile);
    ((r.party = !0), Ie.push(r));
  }
  for (; Qt < be.length && be[Qt].at + 1.05 <= a;) {
    const o = be[Qt++];
    a - o.at < 1.8 && q.fire("sky", !0);
  }
}
const da = Xo({
  stop: () => q.stopSpeech(),
  onLeave: () => {
    (clearTimeout(oe.timer), z("dialogue").classList.remove("visible"));
  },
});
function oe(e, t, a) {
  if ((da.set(a), !e)) return;
  const o = e.indexOf(":");
  ((z("speaker").textContent =
    o > 0 && o < 30 ? e.slice(0, o).toUpperCase() : "SHARMA COLONY"),
    (z("dialogue-text").textContent =
      o > 0 && o < 30 ? e.slice(o + 1).trim() : e),
    (z("dialogue-avatar").hidden = !e.startsWith("Suhani:")),
    z("dialogue").classList.add("visible"),
    q.speak(e, t),
    clearTimeout(oe.timer),
    (oe.timer = setTimeout(
      () => z("dialogue").classList.remove("visible"),
      Math.min(16e3, Math.max(6500, e.length * 65)),
    )));
}
function Dt(e, t, a = "") {
  ((Ua = performance.now() + 2600),
    (z("splash-label").textContent = e),
    (z("splash-title").textContent = t),
    (z("splash-detail").textContent = a),
    z("mission-splash").classList.add("visible"),
    document.body.classList.add("cinematic"),
    q.mission());
}
function Fe() {
  kt ||
    ((y.position = { x: K.x, z: K.z }),
    (y.yaw = he),
    (z("save-status").textContent = er(Ye, y)
      ? "Progress isi device par save hua"
      : "Save nahi ho paaya · Progress abhi temporary hai"));
}
function ee(e, t) {
  const a = y.wallet,
    o = y.crackerLesson.done,
    n = tt(y),
    r = ro.dispatch(e);
  if ((r.message && oe(r.message, void 0, t), r.changed)) {
    const b = tt(y);
    (e.type !== "watchFireworks" && q.chime(),
      b > n
        ? Dt(
            "MISSION POORA",
            Z.missions[n][0],
            e.type === "reward"
              ? "+ ₹2000 · Mummy ka favourite"
              : "Sharma Colony ko yaad rahega.",
          )
        : e.type === "start"
          ? Dt(
              "MISSION SHURU",
              "Diwali ki safai",
              "Mummy ka order. Koi shortcut nahi.",
            )
          : e.type === "papaStart" &&
            Dt(
              "MISSION SHURU",
              "Papa ka important samaan",
              "Operation: Papa ka gayab screwdriver.",
            ),
      !o &&
        y.crackerLesson.done &&
        (Dt(
          "MISSION POORA",
          "Mohalle ka pehla patakha",
          "Ab Bag se apne patakhe chala sakte ho!",
        ),
        oe(aa.done)),
      uo(),
      Fe(),
      ha(),
      !fe(y) &&
        y.wallet > a &&
        ot(`+₹${y.wallet - a} game paise · Mission reward`),
      !fe(y) && b === 9 && n < 9 && queueMicrotask(fa));
  }
  return r;
}
function ha() {
  const e = tt(y);
  if (
    ((z("chapter").textContent =
      `APNI MARZI KI KAHANI / CHAPTER ${String(e + 1).padStart(2, "0")}`),
    (z("mission-title").textContent = Z.missions[e][0]),
    (z("mission-text").textContent =
      e === 0 && y.started
        ? "Apna bedroom: bed, almirah, table aur boxes saaf karo. Laal circles follow karo."
        : e === 2 && y.papaStarted
          ? "Cable drawer, biscuit tin aur kitchen storage mein dhoondho. Papa ko unka screwdriver chahiye."
          : Z.missions[e][1]),
    (z("progress").style.width =
      `${e === 0 ? y.cleaned.length * 25 : e === 2 ? (y.searched.length / 3) * 100 : e === 3 ? y.knots.filter(Boolean).length * 25 : e === 5 ? (y.decorations.length / 3) * 100 : e === 9 ? 100 : e === 8 ? (y.fireworksSeconds / De) * 100 : 12}%`),
    (z("mission-count").textContent =
      e === 0
        ? `${y.cleaned.length}/4 · Laal circle ke paas jao · Safai par ek tap`
        : e === 1
          ? "Mummy · Living room"
          : e === 2
            ? y.papaStarted
              ? "Nishaan wali jagahon par dhoondho"
              : "Papa · Parents’ room"
            : e === 3
              ? `${y.knots.filter(Boolean).length}/4 loops sulajh gaye`
              : e === 9
                ? "AB DIWALI TUMHARI HAI."
                : e === 8
                  ? `${y.fireworksSeconds}/${De} · Mohalle mein aasmaan ka show dekho`
                  : "Laal mission circles follow karo"),
    y.zone === "neighborhood" &&
      y.crackerLesson.started &&
      !y.crackerLesson.done)
  ) {
    const t = Jn(y, !!pt);
    ((z("chapter").textContent = "MOHALLE KA PEHLA PATAKHA"),
      (z("mission-title").textContent = {
        bag: "Bag se patakha chuno",
        place: "Patakha zameen par rakho",
        light: "Ab patakha jalao",
        distance: "Thoda door ho jao",
      }[t]),
      (z("mission-text").textContent = aa[t]),
      (z("mission-count").textContent =
        "Bag → Haath mein lo → Rakho → Jalao → Peeche hato"));
  }
  ((z("wallet").textContent = fe(y)
    ? "FREE"
    : `₹${y.wallet.toLocaleString("en-IN")}`),
    fe(y) &&
      ((z("chapter").textContent = "APNI MARZI SE GHOOMO"),
      (z("mission-title").textContent = Za[y.mode].title),
      (z("mission-text").textContent =
        "Bazaar, jhoole, movies, kapde aur patakhe—sab free. Story ki progress alag save hai."),
      (z("mission-count").textContent =
        "Sab free · Game paise bhi nahi chahiye")),
    (z("bag-count").textContent = Object.values(y.inventory).reduce(
      (t, a) => t + a,
      0,
    )),
    (z("finish").hidden = fe(y) || e !== 9),
    (z("clock").textContent = y.night
      ? "☾ DIWALI KI RAAT"
      : "☀ SHAAM HONE WALI HAI"),
    (z("place").innerHTML =
      `${re[y.zone].name}<small>${re[y.zone].subtitle}</small>`),
    (z("roof").hidden = !1),
    document.body.classList.toggle("night", y.night),
    document.querySelectorAll("[data-zone]").forEach((t) => {
      (t.classList.toggle("active", t.dataset.zone === y.zone),
        (t.disabled = !ia(y, t.dataset.zone)),
        t.querySelector("i") &&
          (t.querySelector("i").textContent = ia(y, t.dataset.zone)
            ? t.dataset.zone === y.zone
              ? "●"
              : "↗"
            : "⌁"));
    }));
}
function qa(e, t) {
  const a = re[y.zone].bounds;
  return (
    e < a.minX ||
    e > a.maxX ||
    t < a.minZ ||
    t > a.maxZ ||
    pe.colliders.some(
      (o) => Math.abs(e - o.x) < o.w / 2 && Math.abs(t - o.z) < o.d / 2,
    ) ||
    pe.actors.some(
      (o) => Math.hypot(e - o.group.position.x, t - o.group.position.z) < 0.75,
    )
  );
}
async function Gt(e, t = !1) {
  if (
    (Te?.close(),
    (ht = null),
    da.clear(),
    q.stopSpeech(),
    Je.active && Je.stop(),
    $e.active && $e.close(),
    it.cancel(),
    !kt)
  ) {
    if (!t && !ia(y, e)) {
      oe("Yahan abhi nahi jaa sakte.");
      return;
    }
    (Ee && vo(),
      (kt = !0),
      Ce.clear(),
      Oe?.close(),
      Ht.clear(),
      Ie.forEach((a) => a.update(100)),
      (Ie = []),
      ne.clear(),
      (ye.x = ye.y = 0),
      z("fade").classList.add("visible"));
    try {
      if (!Xt.has(e)) {
        const a = await hr[e](),
          o = new Se();
        (ce.add(o), Xt.set(e, a.build(o)));
      }
      for (const [a, o] of Xt) o.root.visible = a === e;
      ((pe = Xt.get(e)),
        pe.setPlayer?.(K),
        Be?.stop(),
        q.setTheme("festival"),
        pt && Ke(),
        t ? (y.zone = e) : io(y, { type: "travel", zone: e }),
        K.set(y.position.x, 0, y.position.z),
        qa(K.x, K.z) && K.set(re[e].spawn.x, 0, re[e].spawn.z),
        (he = t ? y.yaw : pe.camera.yaw),
        (zt = pe.camera.pitch),
        (Ca = pe.camera.radius),
        sa.set(K.x + Math.sin(he) * Ca, 16, K.z + Math.cos(he) * Ca),
        ae.position.copy(sa),
        (Ve = -0.05),
        (Ae = null),
        (Ct = null),
        (At.visible = !1),
        q.setZone(e),
        Re(),
        e === "neighborhood" &&
          !y.crackerLesson.started &&
          ee({ type: "startCrackerLesson" }),
        ha(),
        t || Dt("SHARMA COLONY", re[e].name, re[e].subtitle));
    } catch (a) {
      (console.error(a), oe("Map load nahi hua. Dobara try karo."));
    } finally {
      ((kt = !1), z("fade").classList.remove("visible"), Fe());
    }
  }
}
function yo(e) {
  return e.type === "crackerLesson"
    ? !y.crackerLesson.done &&
        !y.placedCrackers.some((t) => t.uid === y.crackerLesson.uid)
    : e.type === "finale"
      ? fe(y) || y.pooja.length === 4
      : e.type === "delivery"
        ? !y.soanStarted || !y.delivered.includes(e.id)
        : e.type === "clean"
          ? y.started && !y.cleaned.includes(e.id)
          : e.type === "search"
            ? y.papaStarted && !y.papa && !y.searched.includes(e.id)
            : e.id === "untangle"
              ? y.papa && !y.lights
              : e.type === "doorbell"
                ? y.delivered.length === 3 && !y.soanReturned
                : e.type === "decorate"
                  ? y.lights
                  : !0;
}
function de(e) {
  ((ht = null),
    Oe?.close(),
    ne.clear(),
    (ye.x = ye.y = 0),
    (z("panel-content").innerHTML = e),
    ie.showModal());
}
function go() {
  (Fe(), ue.leave());
  const e = new URL(location.href);
  (e.searchParams.delete("play"),
    e.searchParams.delete("room"),
    location.assign(e));
}
function bo(e = !1) {
  (Jo({
    state: y,
    showPanel: de,
    act: ee,
    first: e,
    onPreview() {
      ((le = !1), (Ve = 0.15), Re());
    },
  }),
    e &&
      ie.addEventListener(
        "close",
        () => {
          (y.avatar ||
            ee({
              type: "setAvatar",
              avatar:
                y.outfit && y.inventory.kurta
                  ? { gender: "boy", outfit: "kurta" }
                  : Ft,
            }),
            !fe(y) &&
              !y.started &&
              y.cleaned.length < 4 &&
              ee({ type: "start" }),
            (() => {
              const cRoom = new URL(location.href).searchParams.get("room");
              if (cRoom) {
                const cName =
                  (typeof localStorage !== "undefined" &&
                    localStorage.getItem("couple_player_name")) ||
                  "Iglu";
                try {
                  ue.join(cRoom, cName);
                } catch {}
              }
            })());
        },
        { once: !0 },
      ));
}
function ko(e = "temple") {
  if (e === "wish") {
    (de(
      `<span class="eyebrow">DIWALI MELA · WISH BOX</span><h2>Mann ki baat</h2><p>Apni wish likho, phir note box mein daal do.</p><label for="temple-wish">Tumhari wish</label><textarea id="temple-wish" maxlength="${Z.temple.wishLength}" rows="4" placeholder="Is Diwali meri wish hai…" style="width:100%;box-sizing:border-box;padding:12px;margin:10px 0;font:inherit"></textarea><p><span id="wish-count">0</span>/${Z.temple.wishLength} · Notes: ${y.wishes.length}/${Z.temple.maxWishes}</p><button id="wish-submit" class="primary">Note fold karke box mein daalo</button><p id="temple-status" role="status">Wish sirf is device ke game save mein rahegi.</p>`,
    ),
      (z("temple-wish").oninput = (t) =>
        (z("wish-count").textContent = t.target.value.length)),
      (z("wish-submit").onclick = () => {
        const t = ee({ type: "wish", text: z("temple-wish").value });
        ((z("temple-status").textContent = t.message),
          t.changed &&
            (q.action("place"),
            (z("temple-wish").value = ""),
            (z("wish-count").textContent = "0"),
            (z("wish-submit").disabled = !0),
            (z("wish-submit").textContent =
              "✓ Tumhara note box mein rakh diya"),
            ie.close()));
      }));
    return;
  }
  if (e === "donation") {
    (de(
      `<span class="eyebrow">SHREE GANESH MANDIR · APNI MARZI SE</span><h2>🪔 Daanpatra · Diwali Shagun</h2><p>Mele ki roshni pasand aayi? Ek chhota sa shagun chhod jao — hosting chalti rahegi, aur developer ki mithai bhi aa jayegi.</p><p>Is daanpatra ka real-money shagun game creator ko jaata hai, hosting aur naye experiences ke liye. Bilkul optional.</p><a class="shagun-panel-link" href="/support?from=temple" target="_blank" rel="noopener noreferrer">Apni marzi ka shagun · ₹21 / ₹51 / ₹101 ya UPI QR ↗</a><p class="shagun-small">Completely optional creator support. All games and rides stay free. No physical goods or special access included.</p><details><summary>Game wallet se virtual daan</summary><p>Sirf game ke paise. Koi real payment nahi.</p><div class="action-row">${Z.temple.donations.map((t) => `<button class="secondary" data-donate="${t}">Game ₹${t}</button>`).join("")}</div><p id="temple-status" role="status">Ab tak virtual daan: ₹${y.donated}.</p></details>`,
    ),
      document.querySelectorAll("[data-donate]").forEach(
        (t) =>
          (t.onclick = () => {
            const a = ee({ type: "donate", amount: Number(t.dataset.donate) });
            z("temple-status").textContent =
              `${a.message} Ab tak daan: ₹${y.donated}.`;
          }),
      ));
    return;
  }
  (de(
    '<span class="eyebrow">DIWALI MELA · SHREE GANESH MANDIR</span><h2>Do pal sukoon ke</h2><p>Diye jala rahe hain, aur sabki Diwali ki taiyaari chal rahi hai. Darshan karo, phir bahar wish box mein apne mann ki baat rakh do.</p><button id="temple-darshan" class="primary">Darshan karke wapas</button><button id="temple-go-wish" class="secondary">Wish likho</button>',
  ),
    (z("temple-darshan").onclick = () => {
      (ie.close(),
        q.chime(),
        oe("Shubh Diwali! Sabke ghar khushiyaan aur sukoon rahe."));
    }),
    (z("temple-go-wish").onclick = () => ko("wish")));
}
function Sr(e) {
  const t = Z.stalls[e],
    a = Bi[e],
    o = pe.targets.find((i) => i.type === "shop" && i.shop === e),
    n = { zone: y.zone, x: o.x, z: o.z, radius: 4 },
    r = (i) => oe(i, void 0, n);
  (r(Q(a[0])),
    de(
      `<span class="eyebrow">${t.person.toUpperCase()} · Diwali mela</span><h2>${t.name}</h2><p id="vendor-reply">${Q(a[0])}</p><button id="vendor-chat" class="secondary">Thodi baat karo</button><div id="products"></div><p id="shop-reply" role="status">Apni pasand chuno.</p>`,
    ),
    (z("vendor-chat").onclick = () => {
      const i = Q(a[1]);
      ((z("vendor-reply").textContent = i), r(i));
    }));
  const b = () => {
    ((z("products").innerHTML = Object.entries(Z.products)
      .filter(([, i]) => i.stall === e)
      .map(
        ([i, l]) =>
          `<div class="product"><div>${ke[i] ? `<span class="outfit-thumb">${ea("#" + ke[i].colour.toString(16).padStart(6, "0"), ke[i].style === "lehenga")}</span>` : ""}<strong>${l.name}</strong><small>${fe(y) && ke[i] ? "Is mode mein saare kapde free hain." : l.description}<br>${ke[i] ? (y.avatar?.outfit === i ? "Abhi pehna hua" : y.inventory[i] ? "Tumhare kapde" : "Game paise · Khareedte hi pehno") : "Bag mein: " + (y.inventory[i] || 0)}</small></div><button data-buy="${i}">${ke[i] && y.inventory[i] ? "Pehno" : fe(y) ? "FREE · Le lo" : `₹${l.price} · Kharido`}</button></div>`,
      )
      .join("")),
      document.querySelectorAll("[data-buy]").forEach(
        (i) =>
          (i.onclick = () => {
            const l = i.dataset.buy,
              d = ke[l] && y.inventory[l],
              s = ee(
                d
                  ? {
                      type: "setAvatar",
                      avatar: { gender: y.avatar?.gender || "boy", outfit: l },
                    }
                  : { type: "buy", id: l },
              );
            (s.changed &&
              ke[l] &&
              !d &&
              ee({
                type: "setAvatar",
                avatar: { gender: y.avatar?.gender || "boy", outfit: l },
              }),
              b(),
              (z("shop-reply").textContent = s.message),
              s.changed && r(Q(a[1])));
          }),
      ));
  };
  b();
}
function Ar() {
  (de(
    '<span class="eyebrow">PAPA KA ELECTRICIAN</span><h2>Ek aur knot?!</h2><p>Khule sire se shuru karo. Numbers ke order mein loops suljhao.</p><div class="knot-board"><div class="wire"></div><div class="wire"></div>' +
      y.knots
        .map(
          (e, t) =>
            `<button class="knot ${e ? "done" : ""}" style="left:${12 + t * 21}%;top:${t % 2 ? 100 : 55}px" data-knot="${t}" aria-label="Loop suljhao ${t + 1}">${e ? "✓" : t + 1}</button>`,
        )
        .join("") +
      '</div><p id="light-result">Pichle saal ka patience bhi nikaal lo.</p>',
  ),
    document.querySelectorAll("[data-knot]").forEach(
      (e) =>
        (e.onclick = () => {
          const t = +e.dataset.knot;
          if (t !== y.knots.indexOf(!1)) {
            z("light-result").textContent =
              "Khule sire se numbers ke order mein chalo.";
            return;
          }
          (ee({ type: "knot", index: t }),
            e.classList.add("done"),
            (e.textContent = "✓"),
            (z("light-result").textContent = y.lights
              ? "Light Engineer! Do bulbs kharab hain. Bazaar se le aao."
              : "Bas thoda aur. Ho jayega."));
        }),
    ));
}
function ft() {
  q.start() &&
    ((z("sound").textContent = "♫ Sound on"), Bt || ((Bt = !0), at.start()));
}
document.addEventListener(
  "pointerdown",
  (e) => {
    e.target.closest("#sound, #radio-close") || ft();
  },
  { once: !0 },
);
function zr() {
  (de(
    '<span class="eyebrow">MUMMY KI CHHOTI SI REQUEST</span><h2>Bahar jaa rahe ho?</h2><p>"Sharma aunty ko mithai de aaoge? Baaki padosiyon ko bhi Diwali bol dena."</p><p>Ye side mission hai. Pooja ke baad bhi kar sakte ho.</p><button id="gift-accept" class="primary">Haan, box do</button><button id="gift-later" class="secondary">Abhi pooja, baad mein jaaunga</button>',
  ),
    (z("gift-accept").onclick = () => {
      (ie.close(), ee({ type: "soanStart" }));
    }),
    (z("gift-later").onclick = () => ie.close()));
}
async function wo() {
  if (Te?.active) {
    Te.interact();
    return;
  }
  if (
    (ft(),
    ie.open ||
      !Ae ||
      Ge ||
      kt ||
      Ee ||
      Be.active ||
      it.active ||
      $e.active ||
      Je.active ||
      ht)
  )
    return;
  const e = Ae;
  if (e?.id === "mela-market-stall" || e?.type === "mela-market-stall" || e?.type === "premium-store" || e?.type === "premium") {
    window.openMelaMarketModal();
    return;
  }
  if ((Oe?.close(), e.type === "wardrobe" || e.id === "wardrobe")) {
    bo();
    return;
  }
  if (e.type === "crackerLesson") {
    y.crackerLesson.started || ee({ type: "startCrackerLesson" });
    const t = Jn(y, !!pt);
    (de(
      `<span class="eyebrow">MOHALLE KA PEHLA PATAKHA</span><h2>Bag kholo. Patakha chuno.</h2><p>${aa[t] || aa.bag}</p><p>Bag → patakha → Haath mein lo → Yahan rakho → Jalao → 3.5 metre peeche.</p><button id="lesson-bag" class="primary">Bag kholo</button>`,
    ),
      (z("lesson-bag").onclick = () => Mt.activities()));
    return;
  }
  if (e.type === "party-task") {
    ue.interact(e);
    return;
  }
  if (e.type === "premium") {
    Ya.open(e.product);
    return;
  }
  if (e.type === "premium-store") {
    Ya.welcome();
    return;
  }
  if (e.type === "cinema") {
    $e.open();
    return;
  }
  if (e.type === "haunted") {
    ((Ge = !0),
      Pe(),
      Ke(),
      it.cancel(),
      da.clear(),
      q.stopSpeech(),
      Ce.clear());
    try {
      const { createHauntedHouse: t } = await Ne(
        async () => {
          const { createHauntedHouse: a } =
            await import("./haunted-house-CyySmTRI.js");
          return { createHauntedHouse: a };
        },
        __vite__mapDeps([14, 13, 15, 2, 16]),
      );
      ((Te ||= t({
        audio: q,
        radio: at,
        release: Pe,
        onClose: () => {
          ((Ct = null),
            Fe(),
            oe("Bhoot Bangla se bahar! Mela abhi baaki hai."));
        },
      })),
        Te.open());
    } catch (t) {
      (console.error(t), oe("Bhoot Bangla load nahi hua. Dobara try karo."));
    } finally {
      Ge = !1;
    }
    return;
  }
  if (e.type === "finale") {
    ((Me ||= await Ne(
      () => import("./night-Drgva5Cr.js"),
      __vite__mapDeps([0, 1, 2, 3, 4]),
    )),
      Je.start());
    return;
  }
  if (e.type === "charity") {
    (de(
      `<span class="eyebrow">MANDIR KE PAAS</span><h2>Thodi si madad?</h2><p>Bhaiya yahin baithe hain. Apni marzi se game ke wallet se madad kar sakte ho.</p><button id="help-neighbor" class="primary">${fe(y) ? "Madad karo · FREE" : "₹11 ki madad karo"}</button><button id="help-later" class="secondary">Abhi nahi</button><p id="help-status" role="status">Ab tak madad: ₹${y.beggarGiven}. Ye sirf game ka paisa hai.</p>`,
    ),
      (z("help-later").onclick = () => ie.close()),
      (z("help-neighbor").onclick = () => {
        const t = ee({ type: "helpNeighbor", amount: 11 });
        t.changed
          ? (ie.close(),
            oe("Bhaiya: Madad ke liye shukriya.", "/voices/mandir-thanks.mp3"))
          : (z("help-status").textContent = t.message);
      }));
    return;
  }
  if (e.type === "cracker") {
    (ee({ type: "lightCracker", uid: e.uid }), q.fuse(), (Ct = null));
    return;
  }
  if (e.type === "anshika") {
    const t = { zone: y.zone, x: e.x, z: e.z, radius: 3 };
    (y.anshikaStarted
      ? oe(Q(y.anshikaDone ? "anshika_done" : "anshika_hint"), void 0, t)
      : ee({ type: "anshikaStart" }, t),
      Mt.rangoli("anshika"));
    return;
  }
  if (e.type === "portal") {
    await Gt(e.destination);
    return;
  }
  if (e.type === "shop") {
    Sr(e.shop);
    return;
  }
  if (["temple", "donation", "wish"].includes(e.type)) {
    ko(e.type);
    return;
  }
  if (e.type === "ride") {
    Er(e.id);
    return;
  }
  if (e.type === "delivery") {
    y.soanStarted
      ? y.delivered.includes(e.id)
        ? oe("Padosi: Happy Diwali! Dabba toh ab poori colony ghoom raha hai.")
        : ee({ type: "deliver", id: e.id })
      : oe(Q("sharma_hello"));
    return;
  }
  if (e.type === "doorbell") {
    ee({ type: "soanReturn" });
    return;
  }
  if (e.type === "pooja") {
    Mt.pooja();
    return;
  }
  if (e.type === "inspect") {
    oe(e.line);
    return;
  }
  if (e.type === "clean") {
    ((Ge = !0),
      Ke(),
      (le = !0),
      (he = Math.atan2(K.x - e.x, K.z - e.z)),
      (Ve = -0.35),
      Re(),
      Pe(),
      (z("interact").textContent = "Safai chal rahi hai…"),
      await Wa.start(e.id),
      ee({ type: "clean", id: e.id }),
      (Ge = !1),
      (Ct = null));
    return;
  }
  if (e.type === "search") {
    (q.action("drawer"), ee({ type: "search", id: e.id }));
    return;
  }
  if (e.type === "decorate") {
    if (e.id === "rangoli") {
      Mt.rangoli();
      return;
    }
    Mt.decorate(e.id);
    return;
  }
  if (e.id === "untangle") {
    Ar();
    return;
  }
  if (e.id === "mother") {
    y.decorations.length === 3 && !y.soanStarted
      ? zr()
      : y.started
        ? y.cleaned.length === 4 && !y.rewarded
          ? ee({ type: "reward" })
          : oe(
              y.night
                ? Q("mother_happy")
                : y.rewarded
                  ? y.papa
                    ? Q("mother_list")
                    : Q("mother_papa")
                  : Q("mother_remind"),
            )
        : ee({ type: "start" });
    return;
  }
  if (e.id === "papa") {
    y.rewarded && !y.papaStarted
      ? ee({ type: "papaStart" })
      : oe(
          y.rewarded
            ? y.papa
              ? Q("papa_done")
              : Q("papa_hint")
            : Q("papa_wait"),
        );
    return;
  }
}
function Ke() {
  ((wt.visible = !1),
    (pt = null),
    dt && (wt.remove(dt), dt.userData.dispose?.(), (dt = null)),
    (z("cracker-controls").hidden = !0),
    pe && ha());
}
async function Cr(e) {
  if (!it.active && !(!ze[e] || !y.inventory[e])) {
    if (y.zone === "home") {
      oe("Patakhe bahar khuli jagah mein rakho.");
      return;
    }
    (Ke(),
      (wt.visible = !0),
      (pt = e),
      (dt = ua(e)),
      dt.scale.setScalar(0.37),
      dt.position.set(0.32, -0.35, -0.7),
      wt.add(dt),
      (z("cracker-controls").hidden = !1),
      (z("cracker-name").textContent = ze[e].title),
      ha(),
      (Me ||= await Ne(
        () => import("./night-Drgva5Cr.js"),
        __vite__mapDeps([0, 1, 2, 3, 4]),
      )));
  }
}
z("cancel-cracker").onclick = Ke;
z("place-cracker").onclick = () => {
  if (!pt || Be.active || Ee) return;
  const e = K.x - Math.sin(he) * 1.8,
    t = K.z - Math.cos(he) * 1.8;
  if (
    !Wo(e, t, pe.colliders, re[y.zone].bounds, 0.5) ||
    pe.actors.some(
      (a) => Math.hypot(a.group.position.x - e, a.group.position.z - t) < 1,
    ) ||
    y.placedCrackers.some(
      (a) => a.zone === y.zone && Math.hypot(e - a.x, t - a.z) < 1,
    )
  ) {
    oe("Yahan jagah nahi hai. Thoda aage khuli jagah mein rakho.");
    return;
  }
  ee({ type: "placeCracker", id: pt, x: e, z: t }).changed && Ke();
};
// --- 3D Seated Poses for Jhoolas ---
function applySittingPose(avatar) {
  if (!avatar) return;
  avatar.pose.position.y = -0.32;
  if (avatar.legs?.[0]) avatar.legs[0].rotation.set(-Math.PI / 2, 0, 0);
  if (avatar.legs?.[1]) avatar.legs[1].rotation.set(-Math.PI / 2, 0, 0);
  if (avatar.arms?.[0]) avatar.arms[0].rotation.set(0.45, 0.1, 0);
  if (avatar.arms?.[1]) avatar.arms[1].rotation.set(0.45, -0.1, 0);
}

function resetStandingPose(avatar) {
  if (!avatar) return;
  avatar.pose.position.set(0, 0, 0);
  if (avatar.legs?.[0]) avatar.legs[0].rotation.set(0, 0, 0);
  if (avatar.legs?.[1]) avatar.legs[1].rotation.set(0, 0, 0);
  if (avatar.arms?.[0]) avatar.arms[0].rotation.set(0, 0, 0);
  if (avatar.arms?.[1]) avatar.arms[1].rotation.set(0, 0, 0);
}

async function mountRideTogether(rideId, isRemote = false) {
  if (!pe?.rides?.[rideId]) {
    await Gt("market", true);
  }
  if (!pe?.rides?.[rideId]) return;
  if (!isRemote) {
    sendPeerData({ type: "jhoola_mount", rideId });
  }

  ne.clear();
  ye.x = ye.y = 0;
  Ee = { id: rideId, start: ve, previousView: le };
  document.body.classList.add("on-ride");

  const rTitle = z("ride-title");
  if (rTitle) {
    rTitle.textContent = {
      wheel: "Chaand wala jhoola",
      carousel: "Ghode wala jhoola",
      boat: "Naav wala jhoola",
      cups: "Ghoomte pyaale",
    }[rideId] || "Jhoola Ride";
  }
  const rControls = z("ride-controls");
  if (rControls) { rControls.hidden = false; rControls.querySelectorAll("button").forEach(b => { b.disabled = false; b.removeAttribute("disabled"); b.style.pointerEvents = "auto"; b.style.cursor = "pointer"; }); }

  const rideObj = pe.rides[rideId];
  const seatObj = rideObj.seat;
  const seatParent = seatObj.parent;

  const partner = getOrCreateCouplePartner();
  const isGirl = (y.avatar?.gender === "girl");
  const boyMesh = isGirl ? partner.group : je.group;
  const girlMesh = isGirl ? je.group : partner.group;

  // Apply 3D seated pose to both avatars
  applySittingPose(je);
  applySittingPose(partner);

  // Position side-by-side directly inside moving seat group
  const sx = seatObj.position.x;
  const sy = seatObj.position.y;
  const sz = seatObj.position.z;

  if (rideId === "boat") {
    boyMesh.position.set(sx, sy - 0.25, sz - 0.45);
    girlMesh.position.set(sx, sy - 0.25, sz + 0.45);
    boyMesh.rotation.set(0, -Math.PI / 2, 0);
    girlMesh.rotation.set(0, -Math.PI / 2, 0);
  } else if (rideId === "carousel") {
    boyMesh.position.set(sx - 0.35, sy - 0.25, sz);
    girlMesh.position.set(sx + 0.35, sy - 0.25, sz);
    boyMesh.rotation.set(0, 0, 0);
    girlMesh.rotation.set(0, 0, 0);
  } else {
    boyMesh.position.set(sx - 0.45, sy - 0.25, sz);
    girlMesh.position.set(sx + 0.45, sy - 0.25, sz);
    boyMesh.rotation.set(0, 0, 0);
    girlMesh.rotation.set(0, 0, 0);
  }

  seatParent.add(boyMesh);
  seatParent.add(girlMesh);
  window.couplePhase3.onRideMovingParent = seatParent;

  // Default to 3rd-Person POV to see both sitting together
  le = false;
  Re();
}

function dismountRideTogether(isRemote = false) {
  if (!isRemote) {
    sendPeerData({ type: "jhoola_dismount" });
  }
  const currentRideId = Ee?.id;
  if (Ee) {
    ee({ type: "ride", id: Ee.id });
    le = Ee.previousView;
    Re();
  }
  Ee = null;
  document.body.classList.remove("on-ride");
  const rControls = z("ride-controls");
  if (rControls) rControls.hidden = true;

  if (window.couplePhase3.onRideMovingParent) {
    ce.add(je.group);
    const partner = window.couplePhase3.partnerMesh;
    if (partner) ce.add(partner.group);
    window.couplePhase3.onRideMovingParent = null;
  }

  resetStandingPose(je);
  resetStandingPose(window.couplePhase3.partnerMesh);

  const rideTgt = pe.targets?.find(t => t.id === currentRideId);
  const gx = rideTgt ? rideTgt.x : K.x;
  const gz = rideTgt ? rideTgt.z : K.z;
  K.set(gx, 0, gz);
  je.group.position.set(gx, 0, gz);
  const partner = window.couplePhase3.partnerMesh;
  if (partner) partner.group.position.set(gx + 0.65, 0, gz);
}

function Er(e, isRemote = false) {
  mountRideTogether(e, isRemote);
}
function vo(isRemote = false) {
  dismountRideTogether(isRemote);
}
const it = ui({ camera: ae, state: y, act: ee, audio: q }),
  Be = Ui({
    state: y,
    act: ee,
    audio: q,
    thali: on,
    release: Pe,
    onPhase() {
      q.enabled && (at.start(), (Bt = !0));
    },
    onStop() {
      q.enabled && q.music && at.recover();
    },
  }),
  Mt = ar({
    state: y,
    showPanel: de,
    act: ee,
    say: oe,
    startAarti: () => {
      ((le = !0), Re(), Be.start());
    },
    fire: Cr,
    eat(e) {
      Ee || Be.active || Je.active || (Ke(), (le = !0), Re(), it.start(e));
    },
    photo: ma,
    modes: go,
    wardrobe: () => bo(),
    gameItem: (e) => Ya.open(e),
  });
z("leave-ride").onclick = vo;
z("interact").onclick = wo;
z("close").onclick = () => ie.close();
ie.addEventListener("close", () => {
  ((an = !1), at.block(!1));
});
z("sound").onclick = () => {
  ((z("sound").textContent = q.toggle() ? "♫ Sound on" : "♫ Sound off"),
    q.enabled && !Bt && ((Bt = !0), at.start()));
};
function Re() {
  ((je.group.visible = !le),
    pe?.setPOV?.(le),
    (ae.fov = le ? 68 : 48),
    ae.updateProjectionMatrix(),
    (z("roof").textContent = le ? "Camera: POV" : "Camera: Close view"),
    document.body.classList.toggle("pov", le));
}
z("roof").onclick = () => {
  ((le = !le), Re());
};
z("bag").onclick = () => Mt.activities();
z("friends").onclick = () => ue.open();
function ln() {
  (de(
    '<span class="eyebrow">TEEN JAGAH. EK DIWALI.</span><h2>Apna Sharma Colony</h2><div class="travel-illustration"><span>⌂<small>APNA GHAR</small></span><i>····</i><span>♧<small>APNA MOHALLA</small></span><i>····</i><span>▥<small>DIWALI BAZAAR</small></span></div><p>Kabhi bhi, kahin bhi ghoomo. Missions apni marzi se karo; kahani wahi rahegi jahan chhodi thi.</p>' +
      Object.entries(re)
        .map(
          ([e, t]) =>
            `<button class="map-destination" data-destination="${e}"><strong>${t.name}</strong><small>${e === y.zone ? "TUM YAHAN HO" : t.subtitle}</small><span>↗</span></button>`,
        )
        .join(""),
  ),
    document.querySelectorAll("[data-destination]").forEach(
      (e) =>
        (e.onclick = () => {
          (ie.close(), Gt(e.dataset.destination));
        }),
    ));
}
z("map-open").onclick = ln;
z("mobile-map").onclick = ln;
document
  .querySelectorAll("#travel [data-zone]")
  .forEach((e) => (e.onclick = () => Gt(e.dataset.zone)));
let Xe = 18;
try {
  const e = Ye?.getItem("apni-diwali-music-volume");
  e !== null && Number(e) >= 0 && Number(e) <= 60 && (Xe = Number(e));
} catch {}
function xo(e) {
  ((Xe = Math.max(0, Math.min(60, Math.round(e * 100)))),
    q.setVolume(Xe / 100),
    z("music-volume") && (z("music-volume").value = Xe),
    z("music-level") && (z("music-level").textContent = Xe + "%"));
  try {
    Ye?.setItem("apni-diwali-music-volume", String(Xe));
  } catch {}
}
q.setVolume(Xe / 100);
try {
  const e = JSON.parse(Ye?.getItem("diwali-mela-mix") || "null");
  if (e)
    for (const [t, a] of Object.entries(e))
      Number.isFinite(a) && q.setLevel(t, a);
} catch {}
z("music").onclick = (e) => {
  e?.stopPropagation?.();
  const rd = document.getElementById("radio-dock");
  if (rd) {
    rd.hidden = !rd.hidden;
    if (!rd.hidden) playSong(currentSongIndex);
  }
};
const __oldMusicHandler = () => {
  (de(
    `<span class="eyebrow">DIWALI MELA · RADIO</span><h2>Diwali radio</h2><button id="playlist-start" class="primary">Apni songs playlist chalao</button><p>YouTube radio mein Pichhla / Agla se gaane badlo. Custom music controls se playlist chalao.</p><p>Baatcheet ke waqt music apne aap dheema hoga. Dialogue khatam hote hi tumhare volume par wapas aayega.</p><label class="audio-option">Music volume <output id="music-level">${Xe}%</output><input id="music-volume" aria-label="Music volume" type="range" min="0" max="60" value="${Xe}"></label><button class="secondary" data-theme="festival">Sukoon wali Diwali</button><button class="secondary" data-theme="mela">Mele ki dhun</button><button class="secondary" data-theme="anshika">Doston wali rangoli</button><button class="secondary" id="music-pause">Music ${q.music ? "pause" : "resume"}</button><label class="audio-option"><input id="effects-toggle" type="checkbox" ${q.effects ? "checked" : ""}>Patakhon aur mahaul ki halki awaaz</label><label class="audio-option"><input id="voice-toggle" type="checkbox" ${q.voices ? "checked" : ""}>Hindi mein awaazein</label><details><summary>Tumhare chune gaanon ke links</summary><p>Playlist ke gaane radio mein chalenge. Jo gaana YouTube embed mein available nahi hoga, uske baad agla try hoga. Ye links YouTube par khulenge.</p>${[...Z.music, Z.friendMusic, ...Object.values(Z.aartis)].map((a) => `<p><a href="https://www.youtube.com/watch?v=${a.id}&t=${a.start || 0}" target="_blank" rel="noopener noreferrer">${a.title}${a.start ? " · " + a.start + " second se" : ""} ↗</a></p>`).join("")}</details>`,
  ),
    (z("playlist-start").onclick = () => {
      (ft(), q.setMusic(!0), at.start(), ie.close());
    }),
    (z("music-volume").oninput = (a) => xo(Number(a.target.value) / 100)));
  const e = document.createElement("details");
  ((e.innerHTML =
    '<summary>Sound credits</summary><p>“Fireworks #4” — bmlake, <a href="https://freesound.org/people/bmlake/sounds/251614/" target="_blank" rel="noopener noreferrer">Freesound</a>. “Fireworks, Crackle and Whistle, A.wav” — InspectorJ, <a href="https://freesound.org/people/InspectorJ/sounds/328863/" target="_blank" rel="noopener noreferrer">Freesound</a>. Both <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">CC BY 4.0</a>. Trimmed, mono and loudness normalized for the game.</p>'),
    z("panel-content").append(e));
  const t = document.createElement("div");
  ((t.innerHTML = Object.entries(q.levels)
    .map(
      ([a, o]) =>
        `<label class="audio-option">${{ dialogue: "Dialogue ki awaaz", effects: "Paas ke effects", ambience: "Bahar ka mahaul" }[a]}<input data-mix="${a}" type="range" min="0" max="100" value="${Math.round(o * 100)}"></label>`,
    )
    .join("")),
    z("voice-toggle").closest("label").after(t),
    t.querySelectorAll("[data-mix]").forEach(
      (a) =>
        (a.oninput = () => {
          q.setLevel(a.dataset.mix, Number(a.value) / 100);
          try {
            Ye?.setItem("diwali-mela-mix", JSON.stringify(q.levels));
          } catch {}
        }),
    ),
    (z("effects-toggle").onchange = (a) => q.setEffects(a.target.checked)),
    (z("voice-toggle").onchange = (a) => q.setVoices(a.target.checked)),
    (z("music-pause").onclick = () => {
      (q.setMusic(!q.music),
        (z("music-pause").textContent =
          "Music " + (q.music ? "pause" : "resume")));
    }),
    document.querySelectorAll("[data-theme]").forEach(
      (a) =>
        (a.onclick = () => {
          (ft(),
            at.close(),
            q.stopSource(),
            q.setMusic(!0),
            q.setTheme(a.dataset.theme),
            ie.close());
        }),
    ));
};
window.addEventListener("keydown", (e) => {
  if (e.target?.closest?.("input, textarea") || e.target?.isContentEditable) return;
  if (Te?.active) {
    if (e.code === "Escape") {
      (e.preventDefault(), Te.close());
      return;
    }
    ([
      "KeyW",
      "KeyA",
      "KeyS",
      "KeyD",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ShiftLeft",
    ].includes(e.code) && (e.preventDefault(), ne.add(e.code)),
      e.code === "KeyE" && !e.repeat && (e.preventDefault(), Te.interact()));
    return;
  }
  if (!e.target?.closest?.("#premium-controls") && !$e.active) {
    if (e.code === "Escape" && !ie.open && !Be.active && !Ge) {
      (de(
        '<span class="eyebrow">DIWALI MELA</span><h2>Thoda break?</h2><p>WASD se chalo · Drag se dekho · E se baat/kaam · Shift se daudo · M se map · I se bag.</p><button id="pause-back" class="primary">Wapas game mein</button><button id="pause-audio" class="secondary">Music aur awaaz</button>',
      ),
        (an = !0),
        (z("pause-back").onclick = () => ie.close()),
        (z("pause-audio").onclick = () => z("music").click()));
      return;
    }
    ie.open ||
      Be.active ||
      ([
        "KeyW",
        "KeyA",
        "KeyS",
        "KeyD",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
      ].includes(e.code) && e.preventDefault(),
      [
        "KeyW",
        "KeyA",
        "KeyS",
        "KeyD",
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
      ].includes(e.code) && ft(),
      ne.add(e.code),
      !e.repeat &&
        (e.code === "KeyE" && wo(),
        e.code === "KeyI" && z("bag").click(),
        e.code === "KeyM" && ln()));
  }
});
window.addEventListener("keyup", (e) => {
  if (e.target?.closest?.("input, textarea") || e.target?.isContentEditable) return;
  ne.delete(e.code);
});
function Pe() {
  (ne.clear(), (ye.x = ye.y = 0));
}
window.addEventListener("blur", () => {
  (Pe(), Fe());
});
me.domElement.onpointerdown = (e) => {
  (ft(),
    !(Ge || $e.active) &&
      ((xe.id = e.pointerId),
      (xe.x = e.clientX),
      (xe.y = e.clientY),
      me.domElement.setPointerCapture(e.pointerId)));
};
me.domElement.onpointermove = (e) => {
  if (!(xe.id !== e.pointerId || ie.open || Be.active || $e.active)) {
    if (Te?.active) {
      (Te.look(e.clientX - xe.x, e.clientY - xe.y),
        (xe.x = e.clientX),
        (xe.y = e.clientY));
      return;
    }
    ((he -= (e.clientX - xe.x) * 0.005),
      le
        ? (Ve = Et.clamp(Ve - (e.clientY - xe.y) * 0.003, -1.05, 1.05))
        : (zt = Et.clamp(zt + (e.clientY - xe.y) * 0.003, 0.48, 1.15)),
      (xe.x = e.clientX),
      (xe.y = e.clientY));
  }
};
for (const e of ["pointerup", "pointercancel"])
  me.domElement.addEventListener(e, () => (xe.id = null));
const mt = z("joystick");
let pa;
function Mo(e) {
  const t = mt.getBoundingClientRect(),
    a = (e.clientX - t.left - t.width / 2) / 36,
    o = (e.clientY - t.top - t.height / 2) / 36,
    n = Math.max(1, Math.hypot(a, o));
  ((ye.x = a / n),
    (ye.y = o / n),
    (mt.firstElementChild.style.transform = `translate(${ye.x * 29}px,${ye.y * 29}px)`));
}
mt.onpointerdown = (e) => {
  (ft(), (pa = e.pointerId), mt.setPointerCapture(e.pointerId), Mo(e));
};
mt.onpointermove = (e) => {
  e.pointerId === pa && Mo(e);
};
for (const e of ["pointerup", "pointercancel", "lostpointercapture"])
  mt.addEventListener(e, () => {
    ((pa = null),
      (ye.x = ye.y = 0),
      (mt.firstElementChild.style.transform = ""));
  });
z("sprint").onpointerdown = (e) => {
  (ne.add("ShiftLeft"), e.currentTarget.setPointerCapture(e.pointerId));
};
for (const e of ["pointerup", "pointercancel", "lostpointercapture"])
  z("sprint").addEventListener(e, () => ne.delete("ShiftLeft"));
const Ir = z("minimap"),
  Tr = Ir.getContext("2d");
let Pa = 0;
function Pr() {
  const e = Tr,
    t = re[y.zone].bounds,
    a = 160,
    o = 130,
    n = Math.min((a - 12) / (t.maxX - t.minX), (o - 12) / (t.maxZ - t.minZ)),
    r = (i) => 80 + i * n,
    b = (i) => 65 + (i - (t.minZ + t.maxZ) / 2) * n;
  if (
    ((e.fillStyle = "#293c36"),
    e.fillRect(0, 0, a, o),
    (e.fillStyle = "#72806c"),
    y.zone === "home")
  )
    for (const [i, l, d, s] of [
      [-6, -5, 8, 9],
      [6, -5, 8, 9],
      [-6, 5, 8, 9],
      [6, 5, 8, 9],
    ])
      e.fillRect(r(i - d / 2), b(l - s / 2), d * n, s * n);
  else
    ((e.fillStyle = "#baaa88"),
      e.fillRect(r(-3), b(t.minZ), 6 * n, (t.maxZ - t.minZ) * n));
  e.fillStyle = "#9c9477";
  for (const i of pe.colliders)
    e.fillRect(r(i.x - i.w / 2), b(i.z - i.d / 2), i.w * n, i.d * n);
  for (const i of pe.targets)
    yo(i) &&
      ((e.fillStyle =
        i.type === "portal"
          ? "#c9ddd5"
          : i.type === "inspect"
            ? "#6f997f"
            : "#f5bd66"),
      e.beginPath(),
      e.arc(r(i.x), b(i.z), i.type === "portal" ? 3 : 2, 0, 7),
      e.fill());
  for (const i of ue.getTargets(y.zone))
    ((e.fillStyle = "#8ee8cf"),
      e.beginPath(),
      e.arc(r(i.x), b(i.z), 2.3, 0, 7),
      e.fill());
  for (const i of ue.connected ? ue.room.players : [])
    i.id === ue.selfId ||
      i.zone !== y.zone ||
      ((e.fillStyle = i.colour),
      e.beginPath(),
      e.arc(r(i.x), b(i.z), 3, 0, 7),
      e.fill());
  (e.save(),
    e.translate(r(K.x), b(K.z)),
    e.rotate(-je.group.rotation.y + Math.PI),
    (e.fillStyle = "#fff4d8"),
    e.beginPath(),
    e.moveTo(0, -5),
    e.lineTo(3, 4),
    e.lineTo(0, 2),
    e.lineTo(-3, 4),
    e.fill(),
    e.restore());
}
function So(e) {
  if ((requestAnimationFrame(So), document.hidden || an)) {
    Jt = e;
    return;
  }
  if (e - Jt < He.frameInterval - 1) return;
  const t = Math.min((e - Jt) / 1e3, 0.04);
  if (((Jt = e), (ve += t), !pe)) return;
  if (Te?.active) {
    (Te.update(t, {
      x:
        (ne.has("KeyD") || ne.has("ArrowRight") ? 1 : 0) -
        (ne.has("KeyA") || ne.has("ArrowLeft") ? 1 : 0) +
        ye.x,
      z:
        (ne.has("KeyS") || ne.has("ArrowDown") ? 1 : 0) -
        (ne.has("KeyW") || ne.has("ArrowUp") ? 1 : 0) +
        ye.y,
      run: ne.has("ShiftLeft"),
    }),
      ue.update(t, ve),
      me.render(Te.scene, Te.camera));
    return;
  }
  if (ht) {
    const o = ht;
    ((o.elapsed += t),
      K.lerpVectors(o.from, o.end, Math.min(1, o.elapsed / o.duration)),
      o.elapsed >= o.duration && ((ht = null), mo(o.preview)));
  }
  if (
    (e > Ua &&
      (z("mission-splash").classList.remove("visible"),
      document.body.classList.remove("cinematic")),
    !ie.open &&
      !Ge &&
      !kt &&
      !Ee &&
      !ht &&
      !Be.active &&
      !Je.active &&
      !$e.active &&
      e > Ua)
  ) {
    let o =
        (ne.has("KeyD") || ne.has("ArrowRight") ? 1 : 0) -
        (ne.has("KeyA") || ne.has("ArrowLeft") ? 1 : 0) +
        ye.x,
      n =
        (ne.has("KeyS") || ne.has("ArrowDown") ? 1 : 0) -
        (ne.has("KeyW") || ne.has("ArrowUp") ? 1 : 0) +
        ye.y,
      r = Math.max(1, Math.hypot(o, n));
    ((o /= r), (n /= r));
    const b = o * Math.cos(he) + n * Math.sin(he),
      i = -o * Math.sin(he) + n * Math.cos(he),
      l = Z.speed * t * (ne.has("ShiftLeft") ? 1.65 : 1);
    o || n
      ? (qa(K.x + b * l, K.z) || (K.x += b * l),
        qa(K.x, K.z + i * l) || (K.z += i * l),
        (je.group.rotation.y = Math.atan2(b, i)),
        je.legs.forEach(
          (d, s) => (d.rotation.x = Math.sin(ve * 11 + s * Math.PI) * 0.48),
        ),
        je.arms.forEach(
          (d, s) => (d.rotation.x = Math.sin(ve * 11 + s * Math.PI) * 0.3),
        ),
        q.step(ve))
      : (je.legs.forEach((d) => (d.rotation.x = 0)),
        je.arms.forEach((d) => (d.rotation.x = 0)));
  }

  // --- Couple Bedroom POV Auto-Switch & Animation Tick ---
  const inCoupleBedroom =
    y.zone === "home" &&
    K.x >= -11.0 &&
    K.x <= -1.8 &&
    K.z >= -9.8 &&
    K.z <= -0.7;

  const isAnyModalActive = Boolean(
    document.getElementById("panel")?.open ||
    document.getElementById("proposal-modal")?.classList.contains("show") ||
    document.getElementById("mela-market-modal")?.style.display === "block" ||
    document.getElementById("dialogue")?.classList.contains("visible")
  );

  const cDockElem = document.getElementById("couple-actions-dock");
  if (cDockElem) {
    if (inCoupleBedroom && !isAnyModalActive) {
      cDockElem.classList.add("bedroom-visible");
      cDockElem.style.setProperty("display", "flex", "important");
      cDockElem.hidden = false;
      if (le) {
        le = false;
        Re();
        oe("🌸 Couple Bedroom (Camera: 3rd-Person POV)", null, 2500);
      }
    } else {
      cDockElem.classList.remove("bedroom-visible");
      cDockElem.style.setProperty("display", "none", "important");
      cDockElem.hidden = true;
    }
  }

  if (!inCoupleBedroom && coupleActionState === "lie") {
    coupleActionState = null;
    je.pose.position.set(0, 0, 0);
    je.pose.rotation.set(0, 0, 0);
    const bBed = document.getElementById("act-bed");
    if (bBed) bBed.textContent = "🛏️ Sath me letna";
    const comp = getBedroomCompanion();
    if (comp) {
      comp.pose.position.set(0, 0, 0);
      comp.pose.rotation.set(0, 0, 0);
      comp.group.position.set(-5.2, 0, -5.8);
      comp.group.rotation.y = -Math.PI / 3;
    }
  }

  // If player moves while lying down, stand back up
  if (
    coupleActionState === "lie" &&
    (ne.size > 0 || Math.abs(ye.x) > 0.1 || Math.abs(ye.y) > 0.1)
  ) {
    coupleActionState = null;
    je.pose.position.set(0, 0, 0);
    je.pose.rotation.set(0, 0, 0);
    const bBed = document.getElementById("act-bed");
    if (bBed) bBed.textContent = "🛏️ Sath me letna";
    const comp = getBedroomCompanion();
    if (comp) {
      comp.pose.position.set(0, 0, 0);
      comp.pose.rotation.set(0, 0, 0);
      comp.group.position.set(-5.2, 0, -5.8);
      comp.group.rotation.y = -Math.PI / 3;
    }
  }

  // --- Phase 3: Hand-Holding & Auto-Follow Frame Sync ---
  if (window.couplePhase3?.isHoldingHands) {
    const isGirl = (y.avatar?.gender === "girl");
    const partner = getOrCreateCouplePartner();
    const heading = je.group.rotation.y;
    const sideX = Math.cos(heading) * 0.65;
    const sideZ = -Math.sin(heading) * 0.65;
    const isMoving = ne.size > 0 || Math.abs(ye.x) > 0.05 || Math.abs(ye.y) > 0.05;

    if (!isGirl) {
      // Male leads; Female partner placed smoothly on his right hand-in-hand
      partner.group.position.set(K.x + sideX, K.y, K.z + sideZ);
      partner.group.rotation.y = heading;
      // Visibly joined inner arms touching together in 3rd-POV and 1st-POV
      if (je.arms?.[1]) je.arms[1].rotation.set(0.32, -0.18, -0.58);
      if (partner.arms?.[0]) partner.arms[0].rotation.set(0.32, 0.18, 0.58);

      if (isMoving) {
        const wCycle = Math.sin(ve * 10) * 0.45;
        if (partner.legs?.[0]) partner.legs[0].rotation.x = wCycle;
        if (partner.legs?.[1]) partner.legs[1].rotation.x = -wCycle;
      } else {
        if (partner.legs?.[0]) partner.legs[0].rotation.x = 0;
        if (partner.legs?.[1]) partner.legs[1].rotation.x = 0;
      }

      // Auto-follow sync across multiplayer WebRTC channel
      if (activePeerConn && activePeerConn.open) {
        sendPeerData({
          type: "hand_hold_pos",
          x: K.x,
          y: K.y,
          z: K.z,
          heading,
          isMoving
        });
      }
    } else {
      // Female player playing solo; Male partner walks on her left hand-in-hand
      partner.group.position.set(K.x - sideX, K.y, K.z - sideZ);
      partner.group.rotation.y = heading;
      if (je.arms?.[0]) je.arms[0].rotation.set(0.32, 0.18, 0.58);
      if (partner.arms?.[1]) partner.arms[1].rotation.set(0.32, -0.18, -0.58);
      if (isMoving) {
        const wCycle = Math.sin(ve * 10) * 0.45;
        if (partner.legs?.[0]) partner.legs[0].rotation.x = wCycle;
        if (partner.legs?.[1]) partner.legs[1].rotation.x = -wCycle;
      } else {
        if (partner.legs?.[0]) partner.legs[0].rotation.x = 0;
        if (partner.legs?.[1]) partner.legs[1].rotation.x = 0;
      }
    }
  }

  // --- Phase 3: Animate Clapping NPCs if proposal accepted ---
  if (window.couplePhase3?.proposalAccepted && window.couplePhase3.clappingNpcs?.length > 0) {
    const clapCycle = Math.sin(ve * 14) * 0.45;
    window.couplePhase3.clappingNpcs.forEach((npc, i) => {
      const offsetClap = Math.sin(ve * 14 + i * 0.7) * 0.45;
      if (npc.arms?.[0]) npc.arms[0].rotation.set(0.65 + offsetClap, 0.25, -0.2);
      if (npc.arms?.[1]) npc.arms[1].rotation.set(0.65 + offsetClap, -0.25, 0.2);
    });
  }

  // Handle kiss & hug timer reset
  if (
    (coupleActionState === "kiss" || coupleActionState === "hug") &&
    ve >= coupleActionTimer
  ) {
    coupleActionState = null;
    je.pose.rotation.set(0, 0, 0);
    je.arms.forEach((d) => d.rotation.set(0, 0, 0));
    const comp = getBedroomCompanion();
    if (comp) {
      comp.pose.rotation.set(0, 0, 0);
      comp.arms.forEach((d) => d.rotation.set(0, 0, 0));
      comp.group.position.set(-5.2, 0, -5.8);
      comp.group.rotation.y = -Math.PI / 3;
    }
  }

  // Update floating couple particles
  for (let pI = coupleParticles.length - 1; pI >= 0; pI--) {
    const sp = coupleParticles[pI];
    sp.position.y += sp.userData.vy * t;
    sp.position.x += sp.userData.vx * t;
    sp.position.z += sp.userData.vz * t;
    sp.rotation.y = he; // billboard towards camera
    sp.userData.age += t;
    sp.material.opacity = Math.max(0, 1 - sp.userData.age / sp.userData.life);
    if (sp.userData.age >= sp.userData.life) {
      ce.remove(sp);
      sp.geometry.dispose();
      sp.material.dispose();
      coupleParticles.splice(pI, 1);
    }
  }
  (Ge &&
    je.arms.forEach((o, n) => (o.rotation.x = Math.sin(ve * 15 + n) * 0.6)),
    (Ae = null));
  let a = 1 / 0;
  for (const o of [...pe.targets, ...ue.getTargets(y.zone)]) {
    if (!yo(o)) continue;
    const n = Math.hypot(o.x - K.x, o.z - K.z);
    n < (o.reach || Z.reach) && n < a && ((Ae = o), (a = n));
  }
  for (const o of y.placedCrackers)
    o.zone === y.zone &&
      !o.litAt &&
      Math.hypot(o.x - K.x, o.z - K.z) < Math.min(a, Z.reach) &&
      ((Ae = {
        id: "placed-" + o.uid,
        type: "cracker",
        uid: o.uid,
        x: o.x,
        z: o.z,
        name: "Jalao · " + ze[o.id].title,
      }),
      (a = Math.hypot(o.x - K.x, o.z - K.z)));
  if (y.zone === "market" && Math.hypot(K.x - 11.5, K.z - 22.5) < 5.2 && !Ae) {
    Ae = { id: "mela-market-stall", type: "mela-market-stall", name: "Open Mela Market", x: 11.5, z: 22.5 };
  }
  (!Ge &&
    Ct !== Ae?.id &&
    ((Ct = Ae?.id),
    (z("interact").disabled = !Ae),
    (z("interact").innerHTML = Ae
      ? `<kbd>E</kbd> ${Ae.name}`
      : "Sharma Colony ghoomo")),
    (At.visible = !!Ae),
    Ae && At.position.set(Ae.x, 0.16, Ae.z),
    dr.update(y, tt(y), pe, ve),
    da.update({ zone: y.zone, x: K.x, z: K.z }),
    (At.material.opacity = 0.65 + Math.sin(ve * 3) * 0.2),
    Be.update(t),
    Wa.update(t));
  for (const [o, n] of Zt)
    y.placedCrackers.some((r) => r.uid === o) ||
      (ce.remove(n), n.userData.dispose?.(), Zt.delete(o));
  for (const o of [...y.placedCrackers]) {
    let n = Zt.get(o.uid);
    if (
      (n ||
        ((n = ua(o.id)),
        n.position.set(o.x, 0, o.z),
        ce.add(n),
        Zt.set(o.uid, n)),
      (n.visible = o.zone === y.zone),
      (n.userData.ember.visible = !!o.litAt),
      n.userData.ember.scale.setScalar(0.8 + Math.sin(ve * 15) * 0.2),
      o.zone === y.zone &&
        o.litAt &&
        Math.hypot(K.x - o.x, K.z - o.z) >= 3.5 &&
        Date.now() - o.litAt >= 2e3)
    ) {
      if (!Me) {
        Ne(
          () => import("./night-Drgva5Cr.js"),
          __vite__mapDeps([0, 1, 2, 3, 4]),
        ).then((r) => (Me = r));
        continue;
      }
      ee({ type: "detonateCracker", uid: o.uid, x: K.x, z: K.z }).changed &&
        (Ie.push(Me.createCracker(ce, { x: o.x, z: o.z }, o.id)), q.fire(o.id));
    }
  }
  if (y.zone === "market") {
    const o = Math.hypot(K.x + 4.9, K.z + 43.2) < 3;
    (o &&
      q.enabled &&
      !jt &&
      ve - Ka > 35 &&
      !ie.open &&
      !q.speaking &&
      ((jt = !0),
      (Ka = ve),
      oe(
        "Bhaiya: Madad ke liye bula rahe hain…",
        "/voices/mandir-request.mp3",
      )),
      o || (jt = !1));
  } else jt = !1;
  if (
    (Je.update(t, !ie.open),
    ue.update(t, ve),
    Mr(),
    pe.update(bt ? { ...y, night: !0 } : y, ve),
    y.zone === "home" &&
      y.delivered.length === 3 &&
      !y.soanReturned &&
      !Va &&
      ((Va = !0), q.mission(), oe(Q("doorbell"))),
    y.night &&
      !Je.active &&
      !bt &&
      (y.zone !== "home" || K.z > 10) &&
      Math.floor(ve / 4) !== Math.floor((ve - t) / 4) &&
      (Me
        ? Ie.push(
            Me.createSkyBurst(ce, {
              x: (Math.random() - 0.5) * 45,
              y: 12 + Math.random() * 6,
              z: K.z - 35,
            }),
          )
        : Ne(
            () => import("./night-Drgva5Cr.js"),
            __vite__mapDeps([0, 1, 2, 3, 4]),
          ).then((o) => (Me = o))),
    pe.targets
      .filter((o) => o.mesh && o.type === "clean")
      .forEach((o) => (o.mesh.visible = !y.cleaned.includes(o.id))),
    it.update(ie.open ? 0 : t),
    q.ambience(t, y.zone, y.night || bt),
    (Wt.visible =
      y.soanStarted &&
      !y.soanReturned &&
      y.delivered.length < 3 &&
      !pt &&
      !Be.active &&
      !Wa.active &&
      !it.active &&
      !Oe.active),
    (Ze = Et.damp(Ze, y.night || bt ? 1 : 0, 0.65, t)),
    Ta.copy(pr).lerp(fr, Ze),
    me.setClearColor(Ta),
    ce.fog.color.copy(Ta),
    Ga.color.copy(mr).lerp(yr, Ze),
    nt.color.copy(gr).lerp(br, Ze),
    (Ga.intensity = 1.45 - Ze * 0.55),
    (nt.intensity = 2.6 - Ze * 2.25),
    (rn.intensity = Ze * (y.zone === "home" ? 4 : 1.3)),
    Me && ((Tn ||= Me.createNightSky(ce)), Tn.update(Ze)),
    (Ie = Ie.filter((o) => o.update(t))),
    !$e.active && le)
  )
    Zo(ae, K, he, Ve);
  else if (!$e.active) {
    const o = innerWidth < 700 ? 13 : 15;
    (sa.set(
      K.x + Math.sin(he) * o * Math.cos(zt),
      1 + Math.sin(zt) * o,
      K.z + Math.cos(he) * o * Math.cos(zt),
    ),
      ae.position.lerp(sa, 1 - Math.exp(-t * 5)),
      Ia.set(K.x, 0.55, K.z),
      ae.lookAt(Ia));
  }
  if (Ee) {
    const o = pe.rides[Ee.id];
    if (le) {
      o.seat.getWorldPosition(ae.position);
      ae.lookAt(o.look.getWorldPosition(Ia));
    } else {
      const seatWorld = new se();
      o.seat.getWorldPosition(seatWorld);
      const lookWorld = new se();
      o.look.getWorldPosition(lookWorld);
      const viewDir = new se().subVectors(lookWorld, seatWorld).normalize();
      if (Ee.id === "boat") {
        ae.position.set(seatWorld.x - 4.2, seatWorld.y + 2.0, seatWorld.z);
      } else {
        ae.position.copy(seatWorld).addScaledVector(viewDir, 3.4).add(new se(0, 1.4, 0));
      }
      ae.lookAt(seatWorld.x, seatWorld.y + 0.3, seatWorld.z);
    }
  }
  if (window.couplePhase3?.clappingNpcs?.length > 0) {
    const clapSpeed = window.couplePhase3.proposalAccepted ? 16 : 10;
    const clapAmp = window.couplePhase3.proposalAccepted ? 0.45 : 0.32;
    window.couplePhase3.clappingNpcs.forEach((npc, idx) => {
      const phase = Math.sin(ve * clapSpeed + idx * 0.4);
      if (npc.arms?.[0]) npc.arms[0].rotation.set(0.7, 0.4 + phase * clapAmp, -0.2);
      if (npc.arms?.[1]) npc.arms[1].rotation.set(0.7, -0.4 - phase * clapAmp, 0.2);
    });
  }
  ($e.update(t),
    Ce.update(t),
    Ht.update(t),
    !$e.active && !Ee && !Je.active && ae.position.add(Ce.cameraOffset),
    me.render(ce, ae),
    (Ea += t),
    (Pa += t),
    Ea > 2 && ((Ea = 0), Fe()),
    Pa > 0.12 && ((Pa = 0), Pr()));
}
window.addEventListener("resize", () => {
  ((ae.aspect = innerWidth / innerHeight),
    ae.updateProjectionMatrix(),
    me.setPixelRatio(nn().pixelRatio),
    me.setSize(innerWidth, innerHeight),
    Pe(),
    (xe.id = null));
});
window.addEventListener("pagehide", () => {
  (Fe(), ue.leave());
});
document.addEventListener("visibilitychange", () => {
  document.hidden && (Pe(), Fe());
});
await Gt(y.zone, !0);
z("loading").remove();
(() => {
  const cRoom = new URL(location.href).searchParams.get("room");
  if (cRoom) {
    const cName =
      (typeof localStorage !== "undefined" &&
        localStorage.getItem("couple_player_name")) ||
      "Iglu";
    try {
      ue.join(cRoom, cName);
    } catch {}
  }
})();
Ki({
  getSettings: nn,
  release: () => {
    (Pe(),
      (xe.id = null),
      (pa = null),
      (mt.firstElementChild.style.transform = ""));
  },
});
function fa() {
  (de(
    '<span class="eyebrow">DIWALI MELA · KAHANI POORI</span><h2>Happy Diwali!</h2><p>Ghar roshan, pooja poori aur mohalla fireworks show bhi dekh liya. Ab mela ghoomo, ya ek nayi Diwali shuru karo.</p><div class="action-row"><button id="keep-playing" class="primary">Ghoomte raho</button><button id="share-game" class="secondary">Doston ke saath share karo</button><button id="restart-game" class="secondary">Game restart karo</button></div><p id="finish-status" role="status">Preview abhi private hai; link milne se access nahi badlega.</p>',
  ),
    (z("keep-playing").onclick = () => ie.close()));
  const e = document.createElement("button");
  ((e.className = "secondary"),
    (e.textContent = "Diwali ki photo banao"),
    (e.onclick = ma),
    z("finish-status").before(e),
    (z("share-game").onclick = async () => {
      try {
        z("finish-status").textContent = await sr({
          share: navigator.share?.bind(navigator),
          clipboard: navigator.clipboard,
          url: "https://apni-diwali-shanti-nagar.jazzyrhino32.chatgpt.site/",
        });
      } catch {
        z("finish-status").textContent =
          "Link copy nahi hua. Browser se link copy karo.";
      }
    }),
    (z("restart-game").onclick = () => {
      (de(
        '<h2>Nayi Diwali shuru karein?</h2><p>Wallet aur missions shuru se honge. Pichhle game ka backup isi device par rahega.</p><button id="restart-confirm" class="primary">Haan, restart karo</button><button id="restart-cancel" class="secondary">Abhi nahi</button><p id="restart-status" role="status"></p>',
      ),
        (z("restart-cancel").onclick = fa),
        (z("restart-confirm").onclick = async () => {
          if (!tr(Ye, y)) {
            z("restart-status").textContent =
              "Save nahi hua. Restart roka gaya; purana game safe hai.";
            return;
          }
          (ro.reset(),
            ie.close(),
            (Va = !1),
            (jt = !1),
            (Ka = -60),
            await Gt("home", !0),
            Fe(),
            oe(Q("mother_start")));
        }));
    }));
}
function ma() {
  me.render(ce, ae);
  const e = document.createElement("canvas");
  ((e.width = 1e3), (e.height = 680));
  const t = e.getContext("2d");
  ((t.fillStyle = "#173e35"),
    t.fillRect(0, 0, 1e3, 680),
    t.drawImage(me.domElement, 20, 85, 960, 510),
    (t.fillStyle = "#f4d598"),
    (t.font = "bold 36px Georgia"),
    t.fillText("DIWALI MELA", 30, 53),
    (t.font = "18px sans-serif"),
    t.fillText("Ghar roshan. Sab saath. Happy Diwali!", 30, 640));
  const a = e.toDataURL("image/png");
  (de(
    '<span class="eyebrow">APNI DIWALI KI YAAD</span><h2>Ek photo toh banti hai!</h2><img id="memory-photo" alt="Tumhari Diwali Mela ki photo" style="width:100%;border-radius:10px"><p>Photo tumhare device par save hogi.</p><a id="memory-download" class="primary" download="diwali-mela-yaad.png">Photo save karo</a>',
  ),
    (z("memory-photo").src = a),
    (z("memory-download").href = a));
}
z("finish").onclick = fa;
z("mission").onclick = () => {
  if (fe(y)) {
    (de(
      `<span class="eyebrow">${Za[y.mode].title}</span><h2>Sab free. Bas enjoy karo!</h2><p>Kapde pehno, rides lo, movies dekho aur Bag se patakhe ya laddoo gun chalao. Koi game paise nahi lagte.</p><button id="free-mode-change" class="primary">Mode badlo</button>`,
    ),
      (z("free-mode-change").onclick = go));
    return;
  }
  if (
    tt(y) === 9 &&
    !(
      y.zone === "neighborhood" &&
      y.crackerLesson.started &&
      !y.crackerLesson.done
    )
  ) {
    fa();
    return;
  }
  if (tt(y) === 0 && y.zone === "home") {
    (de(
      `<span class="eyebrow">SAFAI · 4 AASAAN KAAM</span><h2>Laal circle. Bas ek tap!</h2><p>Bedroom ki laal jagah ke paas jao. Neeche jo safai ka button aaye, us par ek baar tap karo. Jhaadu ya kapda apne aap chalega.</p><ul class="safai-checklist">${Z.chores.map((e) => `<li>${y.cleaned.includes(e.id) ? "✓" : "○"} ${e.name}</li>`).join("")}</ul><button id="safai-guide" class="primary">Agli safai ki jagah dikhao</button>`,
    ),
      (z("safai-guide").onclick = () => {
        (ie.close(), y.started || ee({ type: "start" }));
        const e = Z.chores
          .filter((t) => !y.cleaned.includes(t.id))
          .sort(
            (t, a) =>
              Math.hypot(t.x - K.x, t.z - K.z) -
              Math.hypot(a.x - K.x, a.z - K.z),
          )[0];
        e &&
          ((he = Math.atan2(K.x - e.x, K.z - e.z)),
          (Ve = -0.25),
          oe(`${e.name}. Laal circle ke paas jaakar safai par ek tap karo.`));
      }));
    return;
  }
  de(
    `<span class="eyebrow">DIWALI MELA · APNI MARZI KI KAHANI</span><h2>${z("mission-title").textContent}</h2><p>${z("mission-text").textContent}</p><p>${z("mission-count").textContent}</p>`,
  );
};
z("mission").onkeydown = (e) => {
  (e.key === "Enter" || e.key === " ") &&
    (e.preventDefault(), z("mission").click());
};
requestAnimationFrame(So);
oe(
  fe(y)
    ? "Diwali ki raat shuru! Bazaar, kapde, patakhe aur jhoole—sab free. Bas enjoy karo."
    : y.zone !== "home"
      ? "Sharma Colony: Ghoomo, bazaar dekho. Ghar ki kahani jab mann kare continue karna."
      : y.started
        ? "Wapas aa gaye! Tumhari Diwali wahi se shuru."
        : Q("mother_start"),
);
if (!y.avatar) {
  const initRole =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem("couple_player_role")) ||
    "boy";
  y.avatar = {
    gender: initRole,
    outfit: initRole === "girl" ? "pink_lehenga" : "kurta_royal",
  };
}


// ==========================================
// PHASE 3: HEART FIREWORKS, PROPOSAL, AUTO-FOLLOW HAND HOLDING, LIVE CHAT & VOICE CALL
// ==========================================

document.querySelectorAll(".couple-tool-btn, #couple-chat-widget button, #couple-chat-widget input, #proposal-modal button").forEach(b => b.disabled = false);
window.couplePhase3 = {
  isHoldingHands: false,
  inVoiceCall: false,
  micMuted: false,
  proposalAccepted: false,
  partnerMesh: null,
  skyMessageMesh: null,
  ringMesh: null,
  clappingNpcs: []
};

// --- Web Audio Celebratory Cheering & Fanfare ---
function playCelebrationFanfare() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === "suspended") ctx.resume();

    // 1. Synthesize cheering crowd & rhythmic applause (pink noise bursts)
    const dur = 3.6;
    const bufSize = Math.floor(ctx.sampleRate * dur);
    const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufSize; i++) {
      const t = i / ctx.sampleRate;
      const clap = Math.sin(t * 60) * Math.sin(t * 120) * ((Math.random() - 0.5) * 1.8);
      const envelope = Math.min(1, t * 3.5) * Math.max(0, 1 - (t - 1.8) / 1.8);
      data[i] = ((Math.random() * 2 - 1) * 0.45 + clap * 0.55) * envelope;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1350;
    filter.Q.value = 1.3;
    const gain = ctx.createGain();
    gain.gain.value = 0.55;
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();

    // 2. Celebratory chime fanfare (C5, E5, G5, C6)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.value = freq;
      const startT = ctx.currentTime + 0.35 + idx * 0.22;
      noteGain.gain.setValueAtTime(0, startT);
      noteGain.gain.linearRampToValueAtTime(0.38, startT + 0.05);
      noteGain.gain.exponentialRampToValueAtTime(0.001, startT + 1.25);
      osc.connect(noteGain);
      noteGain.connect(ctx.destination);
      osc.start(startT);
      osc.stop(startT + 1.35);
    });
  } catch (err) {
    console.warn("Celebration audio error:", err);
  }
}

// --- Persistent Couple Partner Avatar ---
function getOrCreateCouplePartner() {
  if (window.couplePhase3.partnerMesh) return window.couplePhase3.partnerMesh;
  const isGirlPlayer = (y.avatar?.gender === "girl");
  const partnerRole = isGirlPlayer ? "boy" : "girl";
  const partnerOutfit = isGirlPlayer ? "kurta_royal" : "pink_lehenga";
  const partnerMesh = en(co).person(K.x + 0.65, K.z, 16756941, isGirlPlayer ? "man" : "girl");
  Xn(partnerMesh, { gender: partnerRole, outfit: partnerOutfit });
  window.couplePhase3.partnerMesh = partnerMesh;
  return partnerMesh;
}

// --- 3D Speech Bubble for Live Text Chat ---
function showAvatarSpeechBubble(personMesh, text, senderName) {
  try {
    const bubbleCvs = document.createElement("canvas");
    bubbleCvs.width = 512;
    bubbleCvs.height = 160;
    const bCtx = bubbleCvs.getContext("2d");
    bCtx.fillStyle = "rgba(28, 10, 38, 0.92)";
    bCtx.strokeStyle = "#ff80ab";
    bCtx.lineWidth = 4;
    // Bubble shape
    bCtx.beginPath();
    bCtx.roundRect(10, 10, 492, 115, 20);
    bCtx.fill();
    bCtx.stroke();
    // Tail
    bCtx.beginPath();
    bCtx.moveTo(240, 125);
    bCtx.lineTo(256, 148);
    bCtx.lineTo(272, 125);
    bCtx.closePath();
    bCtx.fillStyle = "rgba(28, 10, 38, 0.92)";
    bCtx.fill();
    bCtx.stroke();

    bCtx.font = "bold 26px system-ui, sans-serif";
    bCtx.fillStyle = "#ff80ab";
    bCtx.fillText((senderName || "Partner") + ":", 24, 45);

    bCtx.font = "28px system-ui, sans-serif";
    bCtx.fillStyle = "#ffffff";
    bCtx.fillText(String(text).slice(0, 30), 24, 88);

    const bTex = new Qa(bubbleCvs);
    bTex.colorSpace = ca;
    const bSprite = new Wn(new Fn({ map: bTex, transparent: true, depthTest: false }));
    bSprite.scale.set(3.0, 0.95, 1);
    bSprite.position.set(0, 2.25, 0);
    personMesh.group.add(bSprite);

    setTimeout(() => {
      personMesh.group.remove(bSprite);
      bSprite.material.dispose();
      bTex.dispose();
    }, 4500);
  } catch (e) {
    console.warn("Speech bubble error:", e);
  }
}

// --- Huge Crystal-Clear Glowing Sky Message ("I love you trapti ❤️💖") ---
function createRomanticSkyMessage() {
  if (window.couplePhase3.skyMessageMesh) {
    window.couplePhase3.skyMessageMesh.visible = true;
    return window.couplePhase3.skyMessageMesh;
  }
  const cvs = document.createElement("canvas");
  cvs.width = 1536;
  cvs.height = 384;
  const ctx = cvs.getContext("2d");
  ctx.clearRect(0, 0, 1536, 384);

  // Soft glowing aura
  const grad = ctx.createRadialGradient(768, 192, 60, 768, 192, 650);
  grad.addColorStop(0, "rgba(233, 30, 99, 0.45)");
  grad.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1536, 384);

  // Main text: I love you trapti ❤️💖
  ctx.font = "bold 96px 'Segoe UI', Arial, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "#ff4081";
  ctx.shadowBlur = 36;
  ctx.fillStyle = "#fff0f5";
  ctx.fillText("I love you trapti ❤️💖", 768, 155);

  // Subtitle
  ctx.font = "bold 44px 'Segoe UI', Arial, sans-serif";
  ctx.shadowColor = "#ffd700";
  ctx.shadowBlur = 18;
  ctx.fillStyle = "#ffd54f";
  ctx.fillText("✨ Ek Raat, Hamesha Ke Liye Sath 💑💍", 768, 265);

  const tex = new Qa(cvs);
  tex.colorSpace = ca;
  const sprite = new Wn(new Fn({ map: tex, transparent: true, depthTest: false, toneMapped: false }));
  sprite.scale.set(24, 6, 1);
  sprite.position.set(0, 25, -24);
  ce.add(sprite);
  window.couplePhase3.skyMessageMesh = sprite;
  return sprite;
}

// --- 3D Sparkling Proposal Ring Mesh ---
function create3DProposalRing() {
  if (window.couplePhase3.ringMesh) return window.couplePhase3.ringMesh;
  const ringGroup = new Se();
  // Golden band
  const bandGeom = new _a(0.065, 0.016, 8, 24);
  const bandMat = new Ot({ color: 16766720, transparent: false });
  const band = new Qe(bandGeom, bandMat);
  band.rotation.x = Math.PI / 2;
  ringGroup.add(band);

  // Brilliant diamond gem
  const gemGeom = new Vn(0.038, 8, 6);
  const gemMat = new Ot({ color: 14745599 });
  const gem = new Qe(gemGeom, gemMat);
  gem.position.set(0, 0.065, 0);
  ringGroup.add(gem);

  window.couplePhase3.ringMesh = ringGroup;
  return ringGroup;
}

// --- NPCs Clapping Crowd for Proposal Celebration ---
function spawnProposalClappingCrowd() {
  if (window.couplePhase3.clappingNpcs.length > 0) return;
  const npcOffsets = [
    { x: -2.2, z: 5.6, color: 11963239, role: "mother" },
    { x: -1.2, z: 4.8, color: 14926734, role: "man" },
    { x: 0.0, z: 4.5, color: 11685218, role: "mother" },
    { x: 1.2, z: 4.8, color: 3768182, role: "man" },
    { x: 2.2, z: 5.6, color: 15248448, role: "girl" }
  ];
  npcOffsets.forEach(pos => {
    const npc = en(co).person(pos.x, pos.z, pos.color, pos.role);
    // Face towards couple at (0, 7)
    npc.group.rotation.y = Math.atan2(-pos.x, 7 - pos.z);
    window.couplePhase3.clappingNpcs.push(npc);
  });
}

// --- Helper: Crystal-Clear Glowing "I love you Trapti ❤️" Text Sprite ---
function createHeartTextSprite(text = "I love you Trapti ❤️") {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 256);

  ctx.font = "bold 72px 'Poppins', system-ui, sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "#ff1493";
  ctx.shadowBlur = 25;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(text, 512, 128);

  const tex = new Qa(canvas);
  tex.colorSpace = ca;
  const mat = new Fn({
    map: tex,
    transparent: true,
    depthTest: false,
    toneMapped: false
  });
  const sprite = new Wn(mat);
  sprite.scale.set(0.5, 0.125, 1);
  return { sprite, mat, tex };
}

// --- 5 Distinct Spaced Sky Positions for Heart Fireworks ---
const heartSlots = [
  { dx: -42, dy: 28 },
  { dx: -21, dy: 38 },
  { dx: 0, dy: 32 },
  { dx: 21, dy: 38 },
  { dx: 42, dy: 28 }
];

// --- Large Parametric 3D Heart Firework with "I love you Trapti ❤️" ---
function launchSpacedHeartFirework(slot, skyZ = -45) {
  const worldX = K.x + slot.dx;
  const worldY = slot.dy;
  const worldZ = K.z + skyZ;

  const steps = 360;
  const positions = new Float32Array(steps * 3);
  const colors = new Float32Array(steps * 3);

  // Neon Pink (#ff2a85), Ruby Red (#ff1744), Gold (#ffd700)
  const palette = [
    new et(0xff2a85),
    new et(0xff1744),
    new et(0xffd700)
  ];

  const heartOffsets = [];
  const radiusFactor = (2.4 / 16) * 5.2; // scale = 2.4
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const hx = 16 * Math.pow(Math.sin(t), 3);
    const hy = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    const hz = Math.sin(t * 3) * 2.0 + (Math.random() - 0.5) * 1.4;

    const layer = 0.88 + Math.random() * 0.24;
    const px = hx * radiusFactor * layer;
    const py = hy * radiusFactor * layer;
    const pz = hz;
    heartOffsets.push({ x: px, y: py, z: pz });

    positions[i * 3] = worldX;
    positions[i * 3 + 1] = worldY;
    positions[i * 3 + 2] = worldZ;

    const col = palette[i % palette.length];
    colors[i * 3] = col.r;
    colors[i * 3 + 1] = col.g;
    colors[i * 3 + 2] = col.b;
  }

  const geom = new St();
  geom.setAttribute("position", new ct(positions, 3));
  geom.setAttribute("color", new ct(colors, 3));

  const pMat = new Io({
    size: 0.95,
    vertexColors: true,
    transparent: true,
    opacity: 1,
    blending: Vt,
    depthWrite: false
  });
  const points = new Ra(geom, pMat);
  ce.add(points);

  // Spawn guaranteed readable "I love you Trapti ❤️" text sprite inside heart center
  const { sprite, mat: sMat, tex: sTex } = createHeartTextSprite("I love you Trapti ❤️");
  sprite.position.set(worldX, worldY + 1.2, worldZ);
  ce.add(sprite);

  try { q.fire("sky", true); } catch {}

  let age = 0;
  const lifetime = 4.4;

  const burstObj = {
    update(dt) {
      age += dt;

      // Expansion phase (0 to 0.85s)
      if (age < 0.85) {
        const p = Math.min(1, age / 0.85);
        const ease = 1 - Math.pow(1 - p, 3);
        const posAttr = geom.attributes.position;
        for (let i = 0; i < steps; i++) {
          const off = heartOffsets[i];
          posAttr.array[i * 3] = worldX + off.x * ease;
          posAttr.array[i * 3 + 1] = worldY + off.y * ease;
          posAttr.array[i * 3 + 2] = worldZ + off.z * ease;
        }
        posAttr.needsUpdate = true;

        const curScale = 0.5 + ease * 17.5;
        sprite.scale.set(curScale, curScale * 0.25, 1);
        sMat.opacity = Math.min(1, age / 0.2);
      } else {
        const posAttr = geom.attributes.position;
        const drift = dt * 0.45;
        for (let i = 0; i < steps; i++) {
          posAttr.array[i * 3 + 1] -= drift;
        }
        posAttr.needsUpdate = true;
        sprite.position.y -= drift * 0.5;

        // Fade out phase (age > 2.8s)
        if (age > 2.8) {
          const fade = Math.max(0, 1 - (age - 2.8) / (lifetime - 2.8));
          pMat.opacity = fade;
          sMat.opacity = fade;
        }
      }

      if (age >= lifetime) {
        ce.remove(points);
        ce.remove(sprite);
        geom.dispose();
        pMat.dispose();
        sTex.dispose();
        sMat.dispose();
        return false;
      }
      return true;
    }
  };

  Ie.push(burstObj);
}

let heartFireworkLoopTimer = null;
function startSpacedHeartFireworksShow(loop = true) {
  heartSlots.forEach((slot, idx) => {
    setTimeout(() => {
      launchSpacedHeartFirework(slot);
    }, idx * 450);
  });
  if (loop) {
    if (heartFireworkLoopTimer) clearInterval(heartFireworkLoopTimer);
    heartFireworkLoopTimer = setInterval(() => {
      heartSlots.forEach((slot, idx) => {
        setTimeout(() => {
          launchSpacedHeartFirework(slot);
        }, idx * 450);
      });
    }, 2800);
  }
}

function stopSpacedHeartFireworksShow() {
  if (heartFireworkLoopTimer) {
    clearInterval(heartFireworkLoopTimer);
    heartFireworkLoopTimer = null;
  }
}

// --- 3D Red Velvet Ring Box with Sparkling Diamond Ring ---
function createRedVelvetRingBox() {
  const boxGroup = new Se();

  // Velvet box base
  const baseGeom = new lt(0.14, 0.08, 0.14);
  const velvetMat = new Ot({ color: 0x88001b });
  const base = new Qe(baseGeom, velvetMat);
  base.position.set(0, 0, 0);
  boxGroup.add(base);

  // Velvet box open lid (tilted back)
  const lidGeom = new lt(0.14, 0.03, 0.14);
  const lid = new Qe(lidGeom, velvetMat);
  lid.position.set(0, 0.06, -0.06);
  lid.rotation.x = -Math.PI / 3;
  boxGroup.add(lid);

  // Golden Ring inside box
  const ringBand = new _a(0.045, 0.012, 8, 20);
  const goldMat = new Ot({ color: 0xffd700 });
  const band = new Qe(ringBand, goldMat);
  band.rotation.x = Math.PI / 2;
  band.position.set(0, 0.04, 0);
  boxGroup.add(band);

  // Sparkling Diamond Gem
  const gemGeom = new Vn(0.028, 8, 8);
  const diamondMat = new Ot({ color: 0xe0f7fa });
  const gem = new Qe(gemGeom, diamondMat);
  gem.position.set(0, 0.085, 0);
  boxGroup.add(gem);

  const ringLight = new Fo(0xffebee, 1.5, 2.5);
  ringLight.position.set(0, 0.1, 0);
  boxGroup.add(ringLight);

  return boxGroup;
}

// --- Proposal Button Visibility: Boy ONLY ---
function updateProposalButtonVisibility() {
  const pBtn = document.getElementById("btn-fireworks-proposal");
  if (!pBtn) return;
  if (window.playerRole === "girl") {
    pBtn.style.setProperty("display", "none", "important");
  } else {
    pBtn.style.setProperty("display", "inline-flex", "important");
  }
}

// --- Full Proposal Cutscene Flow ---
function startProposalCutscene(isRemote = false) {
  if (!isRemote) {
    sendPeerData({ type: "proposal_start" });
  }

  // Ensure couple is in neighborhood square
  if (y.zone !== "neighborhood") {
    K.set(0, 0, 7);
    je.group.rotation.y = 0;
    try { q.setZone("neighborhood"); } catch {}
  }
  y.night = true;

  // 3rd-Person Cinematic View framing both partners
  le = false;
  Ve = -0.12;
  Re();

  const partner = getOrCreateCouplePartner();
  const isGirl = (y.avatar?.gender === "girl");
  const maleAvatar = isGirl ? partner : je;
  const femaleAvatar = isGirl ? je : partner;

  maleAvatar.group.position.set(-0.25, 0, 7);
  maleAvatar.group.rotation.y = Math.PI / 6;
  femaleAvatar.group.position.set(0.45, 0, 7);
  femaleAvatar.group.rotation.y = -Math.PI / 6;

  // Start spaced heart fireworks
  startSpacedHeartFireworksShow(true);
  createRomanticSkyMessage();
  oe("🎆 Aasmaan mein dekho... 'I love you Trapti ❤️' Heart Fireworks burst ho rahe hain! 💖✨", null, 4000);

  // Animate Boy dropping to one knee holding Red Velvet Ring Box
  setTimeout(() => {
    maleAvatar.pose.position.y = -0.32;
    if (maleAvatar.legs?.[1]) maleAvatar.legs[1].rotation.set(1.4, 0, 0);
    if (maleAvatar.legs?.[0]) maleAvatar.legs[0].rotation.set(0.6, 0, 0);
    if (maleAvatar.arms?.[1]) maleAvatar.arms[1].rotation.set(0.85, -0.2, -0.25);

    if (window.couplePhase3.ringBoxMesh) {
      try { maleAvatar.arms[1]?.remove(window.couplePhase3.ringBoxMesh); } catch {}
    }
    const ringBox = createRedVelvetRingBox();
    window.couplePhase3.ringBoxMesh = ringBox;
    window.couplePhase3.isKneeling = true;
    ringBox.position.set(0, -0.22, 0.15);
    if (maleAvatar.arms?.[1]) maleAvatar.arms[1].add(ringBox);

    // 6 Mohalla NPCs gather in semi-circle and clap continuously
    spawnProposalClappingCrowd();
    playCelebrationFanfare();
  }, 1000);

  // Peak of cutscene (~4 seconds): show prompt for Girl
  setTimeout(() => {
    const pModal = document.getElementById("proposal-modal");
    if (pModal) {
      pModal.classList.add("show");
    }
  }, 4000);
}

function onProposalAccepted(isRemote = false) {
  if (!isRemote) {
    sendPeerData({ type: "proposal_accepted" });
  }
  const pModal = document.getElementById("proposal-modal");
  if (pModal) pModal.classList.remove("show");
  window.couplePhase3.proposalAccepted = true;

  const isGirl = (y.avatar?.gender === "girl");
  const maleAvatar = isGirl ? window.couplePhase3.partnerMesh : je;
  const femaleAvatar = isGirl ? je : window.couplePhase3.partnerMesh;

  // Stand up & remove box
  if (maleAvatar) {
    maleAvatar.pose.position.set(0, 0, 0);
    if (maleAvatar.legs?.[0]) maleAvatar.legs[0].rotation.set(0, 0, 0);
    if (maleAvatar.legs?.[1]) maleAvatar.legs[1].rotation.set(0, 0, 0);
    if (window.couplePhase3.ringBoxMesh && maleAvatar.arms?.[1]) {
      maleAvatar.arms[1].remove(window.couplePhase3.ringBoxMesh);
      window.couplePhase3.ringBoxMesh = null;
    }
  }

  // Slide glowing ring onto Girl's hand
  const ring = create3DProposalRing();
  if (femaleAvatar && femaleAvatar.arms?.[0]) {
    femaleAvatar.arms[0].add(ring);
    ring.position.set(0, -0.22, 0.05);
  }

  // Warm romantic embrace / hug
  setTimeout(() => {
    if (maleAvatar) {
      if (maleAvatar.arms?.[0]) maleAvatar.arms[0].rotation.set(0.65, 0.75, -0.4);
      if (maleAvatar.arms?.[1]) maleAvatar.arms[1].rotation.set(0.65, -0.75, 0.4);
    }
    if (femaleAvatar) {
      if (femaleAvatar.arms?.[0]) femaleAvatar.arms[0].rotation.set(0.65, 0.75, -0.4);
      if (femaleAvatar.arms?.[1]) femaleAvatar.arms[1].rotation.set(0.65, -0.75, 0.4);
      femaleAvatar.group.position.set(maleAvatar.group.position.x + 0.38, 0, maleAvatar.group.position.z);
    }
  }, 400);

  // Clapping crowd claps louder & cheering fanfare
  playCelebrationFanfare();

  // Burst celebratory fireworks
  startSpacedHeartFireworksShow(false);

  const banner = document.getElementById("celebration-banner");
  if (banner) {
    banner.style.display = "block";
    setTimeout(() => { banner.style.display = "none"; }, 8000);
  }

  oe("💍 PROPOSAL ACCEPTED! She said YES! Happy Diwali my love! 💖✨", null, 6000);
}

// Wire Proposal Acceptance button
const acceptBtn = document.getElementById("btn-accept-proposal");
if (acceptBtn) {
  acceptBtn.onclick = () => {
    onProposalAccepted(false);
  };
}

// Wire Proposal HUD button
const propHudBtn = document.getElementById("btn-fireworks-proposal");
if (propHudBtn) {
  propHudBtn.onclick = () => {
    startProposalCutscene(false);
  };
}
window.changeZone = Gt;
window.mountRideTogether = mountRideTogether;
window.dismountRideTogether = dismountRideTogether;
window.startProposalCutscene = startProposalCutscene;
window.onProposalAccepted = onProposalAccepted;
window.startSpacedHeartFireworksShow = startSpacedHeartFireworksShow;
window.stopSpacedHeartFireworksShow = stopSpacedHeartFireworksShow;
if (window.couplePhase3) {
  window.couplePhase3.activeBursts = Ie;
}

// --- Hold Hands (Haath Pakdo) HUD Button ---
const holdHandsBtn = document.getElementById("btn-hold-hands");
if (holdHandsBtn) {
  holdHandsBtn.onclick = () => {
    window.couplePhase3.isHoldingHands = !window.couplePhase3.isHoldingHands;
    if (window.couplePhase3.isHoldingHands) {
      holdHandsBtn.classList.add("active");
      holdHandsBtn.textContent = "💔 Release Hands";
      oe("🤝 Haath pakad liya! Ab sath sath chalenge 💖", null, 3000);
    } else {
      holdHandsBtn.classList.remove("active");
      holdHandsBtn.textContent = "🤝 Hold Hands";
      // Reset arm rotations
      je.arms?.forEach(a => a.rotation.set(0, 0, 0));
      const partner = window.couplePhase3.partnerMesh;
      if (partner) partner.arms?.forEach(a => a.rotation.set(0, 0, 0));
      oe("Haath chhod diya ✨", null, 2500);
    }
    sendPeerData({ type: "hand_hold", active: window.couplePhase3.isHoldingHands });
  };
}

// --- WebRTC (PeerJS) & Live Chat & Voice Call ---
let couplePeerInstance = null;
let activePeerConn = null;
let activeMediaCall = null;
let localVoiceStream = null;

function sendPeerData(data) {
  try {
    if (activePeerConn && activePeerConn.open) {
      activePeerConn.send(data);
    }
  } catch (e) {
    console.warn("Peer send error:", e);
  }
}

function initPeerJSMultiplayer() {
  if (typeof Peer === "undefined") {
    setTimeout(initPeerJSMultiplayer, 400);
    return;
  }
  const urlRoom = new URL(location.href).searchParams.get("room") || localStorage.getItem("couple_room_code") || "mela";
  const normRoom = urlRoom.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 14);
  const myRole = (localStorage.getItem("couple_player_role") || "boy").toLowerCase();
  const myPeerId = "diwali-" + normRoom + "-" + myRole;
  const targetPeerId = "diwali-" + normRoom + "-" + (myRole === "boy" ? "girl" : "boy");

  try {
    couplePeerInstance = new Peer(myPeerId, {
      config: {
        iceServers: [
          { urls: "stun:stun.l.google.com:19302" },
          { urls: "stun:global.stun.twilio.com:3478" }
        ]
      }
    });

    couplePeerInstance.on("open", (id) => {
      console.log("✔ WebRTC Peer connected:", id);
      // Attempt connect to partner
      connectToPartnerPeer(targetPeerId);
    });

    couplePeerInstance.on("connection", (conn) => {
      console.log("✔ Connected with partner peer!");
      activePeerConn = conn;
      setupPeerDataHandlers(conn);
    });

    couplePeerInstance.on("call", (mCall) => {
      console.log("✔ Incoming voice call from partner!");
      if (localVoiceStream) {
        mCall.answer(localVoiceStream);
        hookVoiceAudioStream(mCall);
      } else {
        navigator.mediaDevices?.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
        }).then(stream => {
          localVoiceStream = stream;
          mCall.answer(stream);
          hookVoiceAudioStream(mCall);
          updateVoiceButtonState(true);
        }).catch(() => {
          mCall.answer();
          hookVoiceAudioStream(mCall);
        });
      }
    });

    couplePeerInstance.on("error", (err) => {
      if (err.type === "unavailable-id") {
        // Fallback ID if reloading in same browser tab
        const altId = myPeerId + "-" + Math.floor(Math.random() * 1000);
        couplePeerInstance = new Peer(altId);
      }
    });
  } catch (e) {
    console.warn("PeerJS initialization error:", e);
  }
}

function connectToPartnerPeer(targetId) {
  if (!couplePeerInstance) return;
  try {
    const conn = couplePeerInstance.connect(targetId);
    activePeerConn = conn;
    setupPeerDataHandlers(conn);
  } catch (e) {}
}

function setupPeerDataHandlers(conn) {
  conn.on("data", (data) => {
    if (!data) return;
    if (data.type === "chat") {
      appendChatMessage(data.sender, data.text, false);
      const partner = getOrCreateCouplePartner();
      showAvatarSpeechBubble(partner, data.text, data.sender);
    } else if (data.type === "hand_hold") {
      window.couplePhase3.isHoldingHands = !!data.active;
      const bBtn = document.getElementById("btn-hold-hands");
      if (bBtn) {
        bBtn.classList.toggle("active", window.couplePhase3.isHoldingHands);
        bBtn.textContent = window.couplePhase3.isHoldingHands ? "💔 Release Hands" : "🤝 Hold Hands";
      }
    } else if (data.type === "proposal_start") {
      startProposalCutscene(true);
    } else if (data.type === "proposal_accepted") {
      onProposalAccepted(true);
    } else if (data.type === "jhoola_mount") {
      if (!Ee || Ee.id !== data.rideId) {
        mountRideTogether(data.rideId, true);
      }
    } else if (data.type === "jhoola_dismount") {
      if (Ee) {
        dismountRideTogether(true);
      }
    } else if (data.type === "hand_hold_pos") {
      // Female automatic partner follow without keyboard!
      if (window.couplePhase3.isHoldingHands && window.playerRole === "girl") {
        const sideX = Math.cos(data.heading) * 0.65;
        const sideZ = -Math.sin(data.heading) * 0.65;
        K.set(data.x + sideX, data.y, data.z + sideZ);
        je.group.position.set(K.x, K.y, K.z);
        je.group.rotation.y = data.heading;

        if (data.isMoving) {
          const wCycle = Math.sin(ve * 10) * 0.45;
          if (je.legs?.[0]) je.legs[0].rotation.x = wCycle;
          if (je.legs?.[1]) je.legs[1].rotation.x = -wCycle;
        } else {
          if (je.legs?.[0]) je.legs[0].rotation.x = 0;
          if (je.legs?.[1]) je.legs[1].rotation.x = 0;
        }
      }
    }
  });
}

function hookVoiceAudioStream(mediaCall) {
  activeMediaCall = mediaCall;
  mediaCall.on("stream", (remoteStream) => {
    const audioEl = document.getElementById("peer-voice-audio");
    if (audioEl) {
      audioEl.srcObject = remoteStream;
      audioEl.play().catch(e => console.warn("Audio autoplay blocked:", e));
    }
  });
}

function updateVoiceButtonState(active) {
  window.couplePhase3.inVoiceCall = active;
  const vBtn = document.getElementById("btn-voice-call");
  const mBtn = document.getElementById("btn-mic-mute");
  if (vBtn) {
    vBtn.classList.toggle("active", active);
    vBtn.textContent = active ? "🟢 Voice Live (End)" : "🎙️ Voice Call";
  }
  if (mBtn) {
    mBtn.hidden = !active;
  }
}

// Wire Voice Call Button
const voiceBtn = document.getElementById("btn-voice-call");
if (voiceBtn) {
  voiceBtn.onclick = async () => {
    if (window.couplePhase3.inVoiceCall) {
      // End call
      if (localVoiceStream) {
        localVoiceStream.getTracks().forEach(t => t.stop());
        localVoiceStream = null;
      }
      if (activeMediaCall) {
        activeMediaCall.close();
        activeMediaCall = null;
      }
      updateVoiceButtonState(false);
      oe("Voice call disconnected 📞", null, 2500);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
      });
      localVoiceStream = stream;
      updateVoiceButtonState(true);
      oe("🎙️ Voice call connected! Partner se baat karo 💖", null, 3000);

      const urlRoom = new URL(location.href).searchParams.get("room") || localStorage.getItem("couple_room_code") || "mela";
      const normRoom = urlRoom.toLowerCase().replace(/[^a-z0-9]/g, "").slice(0, 14);
      const myRole = (localStorage.getItem("couple_player_role") || "boy").toLowerCase();
      const targetPeerId = "diwali-" + normRoom + "-" + (myRole === "boy" ? "girl" : "boy");

      if (couplePeerInstance) {
        const call = couplePeerInstance.call(targetPeerId, stream);
        hookVoiceAudioStream(call);
      }
    } catch (err) {
      oe("Microphone access permission chahiye voice call ke liye.", null, 3000);
      console.warn("Microphone error:", err);
    }
  };
}

// Wire Mic Mute Button
const muteBtn = document.getElementById("btn-mic-mute");
if (muteBtn) {
  muteBtn.onclick = () => {
    if (!localVoiceStream) return;
    window.couplePhase3.micMuted = !window.couplePhase3.micMuted;
    localVoiceStream.getAudioTracks().forEach(track => {
      track.enabled = !window.couplePhase3.micMuted;
    });
    muteBtn.textContent = window.couplePhase3.micMuted ? "🎙️ Unmute Mic" : "🔇 Mute Mic";
    muteBtn.style.borderColor = window.couplePhase3.micMuted ? "#f44336" : "#81c784";
  };
}

// --- Live Chat UI Logic ---
const chatToggleBtn = document.getElementById("chat-toggle-btn");
const chatPanel = document.getElementById("chat-panel");
const chatCloseBtn = document.getElementById("chat-close-btn");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

if (chatToggleBtn && chatPanel) {
  chatToggleBtn.onclick = () => {
    chatPanel.classList.toggle("open");
    if (chatPanel.classList.contains("open")) {
      chatInput?.focus();
    }
  };
}
if (chatCloseBtn && chatPanel) {
  chatCloseBtn.onclick = () => {
    chatPanel.classList.remove("open");
  };
}

function appendChatMessage(sender, text, isSelf = false) {
  if (!chatMessages) return;
  const msgEl = document.createElement("div");
  msgEl.className = "chat-msg " + (isSelf ? "self" : "partner");
  msgEl.innerHTML = `<span class="sender-tag">${sender}</span>${text}`;
  chatMessages.appendChild(msgEl);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

if (chatInput) {
  const onFocusChat = () => {
    try { document.exitPointerLock?.(); } catch {}
    if (typeof ne !== 'undefined' && ne.clear) ne.clear();
    ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].forEach(code => {
      window.dispatchEvent(new KeyboardEvent('keyup', { code, bubbles: true }));
    });
  };
  chatInput.addEventListener('focus', onFocusChat);
  chatInput.addEventListener('click', onFocusChat);

  ['keydown', 'keyup', 'keypress'].forEach(evt => {
    chatInput.addEventListener(evt, (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const sendBtn = document.getElementById('chat-send-btn');
        if (sendBtn) sendBtn.click();
      } else {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    });
  });
}

if (chatForm && chatInput) {
  chatForm.onsubmit = (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    const myName = localStorage.getItem("couple_player_name") || (localStorage.getItem("couple_player_role") === "girl" ? "Trapti 💖" : "Partner 💙");
    appendChatMessage(myName, text, true);
    chatInput.value = "";

    // Show floating speech bubble above self avatar
    showAvatarSpeechBubble(je, text, myName);

    // Send over WebRTC peer data channel
    sendPeerData({ type: "chat", sender: myName, text });
  };
}

// Quick emoji reaction buttons
document.querySelectorAll(".chat-quick-emojis button").forEach(btn => {
  btn.onclick = () => {
    const emoji = btn.dataset.emoji;
    if (chatInput) {
      chatInput.value += emoji;
      chatInput.focus();
    }
  };
});

// Initialize PeerJS WebRTC
initPeerJSMultiplayer();


// ==============================================================
// TECHNICAL FIX: TOP BAR CONTROLS, CAMERA POV & MULTI-TRACK PLAYER
// ==============================================================

window.toggleRadioDock = function(forceOpen) {
  const rd = document.getElementById("radio-dock");
  if (!rd) return;
  const isCurrentlyOpen = rd.classList.contains("open") && rd.style.display !== "none" && !rd.hasAttribute("hidden");
  const willOpen = forceOpen !== undefined ? forceOpen : !isCurrentlyOpen;
  if (willOpen) {
    rd.hidden = false;
    rd.removeAttribute("hidden");
    rd.classList.add("open");
    rd.style.setProperty("display", "block", "important");
    rd.style.visibility = "visible";
    rd.style.zIndex = "120";
    playSong(currentSongIndex);
  } else {
    rd.hidden = true;
    rd.setAttribute("hidden", "");
    rd.classList.remove("open");
    rd.style.setProperty("display", "none", "important");
  }
};

function setupTopToolsAndControls() {
  window.localAvatar = je;
  window.ne = ne;
  updateProposalButtonVisibility();
  updateProposalButtonVisibility();
  const topButtons = document.querySelectorAll(".top-tools button, #radio-dock button, #couple-actions-dock button, #mela-market-modal button, #ride-controls button, #proposal-modal button");
  topButtons.forEach(btn => {
    btn.disabled = false;
    btn.removeAttribute("disabled");
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    ['pointerdown', 'mousedown', 'touchstart'].forEach(evt => {
      btn.addEventListener(evt, e => e.stopPropagation(), { passive: true });
    });
  });

  const roofBtn = document.getElementById("roof");
  if (roofBtn) {
    roofBtn.onclick = (e) => {
      e.stopPropagation();
      le = !le;
      Re();
      roofBtn.textContent = le ? "Camera: POV" : "Camera: 3rd POV";
      oe(le ? "Camera: 1st-Person Eye POV" : "Camera: 3rd-Person Follow POV", null, 2000);
    };
  }

  const mBtn = document.getElementById("music");
  if (mBtn) {
    mBtn.onclick = (e) => {
      e.stopPropagation();
      window.toggleRadioDock();
    };
  }
}
setInterval(setupTopToolsAndControls, 1500);
setupTopToolsAndControls();

// --- Multi-Track Playlist Controller ---
const ROMANTIC_PLAYLIST = [
  { id: "b5WF7yZcc1w", title: "1. Ghar More Pardesiya", duration: "4:32", baseFreq: 330 },
  { id: "P8PWN1OmZOA", title: "2. Aaj Phir Tum Pe Pyar Aaya Hai", duration: "4:18", baseFreq: 261.63 },
  { id: "BddP6PYo2gs", title: "3. Mohabbat Barsa Dena Tu - Sawan Aaya Hai", duration: "4:05", baseFreq: 293.66 },
  { id: "dsWWU5eBwQ8", title: "4. Sanam Re", duration: "4:28", baseFreq: 220 },
  { id: "H5tJ1zB4n2E", title: "5. Kangna Tera Ni", duration: "3:45", baseFreq: 349.23 }
];
let currentSongIndex = 0;
let isRadioPlaying = false;
let synthAudioCtx = null;
let synthGain = null;
let synthNoteTimer = null;

function initSynthAudio() {
  if (!synthAudioCtx) {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) synthAudioCtx = new AudioCtx();
  }
  if (synthAudioCtx && synthAudioCtx.state === "suspended") {
    synthAudioCtx.resume();
  }
}

function startMelodyForSong(index) {
  stopMelody();
  initSynthAudio();
  if (!synthAudioCtx) return;

  const track = ROMANTIC_PLAYLIST[index];
  const scale = [1, 1.125, 1.25, 1.333, 1.5, 1.667, 1.875, 2.0];
  let step = 0;

  synthGain = synthAudioCtx.createGain();
  synthGain.gain.setValueAtTime(0.06, synthAudioCtx.currentTime);
  synthGain.connect(synthAudioCtx.destination);

  synthNoteTimer = setInterval(() => {
    if (!isRadioPlaying || !synthAudioCtx) return;
    try {
      const osc = synthAudioCtx.createOscillator();
      const noteGain = synthAudioCtx.createGain();
      osc.type = "sine";
      const freq = track.baseFreq * scale[step % scale.length];
      osc.frequency.setValueAtTime(freq, synthAudioCtx.currentTime);
      noteGain.gain.setValueAtTime(0.05, synthAudioCtx.currentTime);
      noteGain.gain.exponentialRampToValueAtTime(0.001, synthAudioCtx.currentTime + 0.42);
      osc.connect(noteGain);
      noteGain.connect(synthGain);
      osc.start();
      osc.stop(synthAudioCtx.currentTime + 0.42);
      step++;
    } catch (e) {}
  }, 450);
}

function stopMelody() {
  if (synthNoteTimer) {
    clearInterval(synthNoteTimer);
    synthNoteTimer = null;
  }
}

function updateMusicPlayerUI() {
  const track = ROMANTIC_PLAYLIST[currentSongIndex];
  const rTitle = document.getElementById("radio-title");
  const rDur = document.getElementById("radio-duration");
  const rTime = document.getElementById("radio-time");
  const rPlay = document.getElementById("radio-play");
  const rStatus = document.getElementById("radio-status");

  if (rTitle) rTitle.textContent = track.title;
  if (rDur) rDur.textContent = track.duration;
  if (rTime) rTime.textContent = isRadioPlaying ? "0:15" : "0:00";
  if (rPlay) rPlay.textContent = isRadioPlaying ? "⏸" : "▶";
  if (rStatus) {
    rStatus.textContent = isRadioPlaying
      ? "♫ Ab baj raha hai: " + track.title
      : "Radio ruka hai · Chalao dabao";
  }
}

window.playRomanticSongNext = function() {
  playSong(currentSongIndex + 1);
};
window.playRomanticSongPrev = function() {
  playSong(currentSongIndex - 1);
};
window.toggleRomanticSong = function() {
  toggleSong();
};
function playSong(index) {
  currentSongIndex = (index + ROMANTIC_PLAYLIST.length) % ROMANTIC_PLAYLIST.length;
  isRadioPlaying = true;
  updateMusicPlayerUI();
  startMelodyForSong(currentSongIndex);

  try {
    const ytElem = document.getElementById("youtube-player");
    if (ytElem && window.YT && window.YT.get) {
      const p = window.YT.get("youtube-player");
      if (p && p.loadVideoById) {
        p.loadVideoById({ videoId: ROMANTIC_PLAYLIST[currentSongIndex].id, startSeconds: 0 });
        p.playVideo();
      }
    }
  } catch (err) {}
}

function pauseSong() {
  isRadioPlaying = false;
  stopMelody();
  updateMusicPlayerUI();
  try {
    const ytElem = document.getElementById("youtube-player");
    if (ytElem && window.YT && window.YT.get) {
      const p = window.YT.get("youtube-player");
      if (p && p.pauseVideo) p.pauseVideo();
    }
  } catch (err) {}
}

function toggleSong() {
  if (isRadioPlaying) {
    pauseSong();
  } else {
    playSong(currentSongIndex);
  }
}

// Wire Music top-bar button to toggle radio dock
const musicTopBtn = document.getElementById("music");
if (musicTopBtn) {
  musicTopBtn.onclick = (e) => {
    e.stopPropagation();
    window.toggleRadioDock();
  };
}

// Wire Prev, Play, Next buttons
const btnRadioPrev = document.getElementById("radio-prev");
const btnRadioPlay = document.getElementById("radio-play");
const btnRadioNext = document.getElementById("radio-next");
const btnRadioClose = document.getElementById("radio-close");
const radioTrackList = document.getElementById("radio-track-list");
const radioListToggle = document.getElementById("radio-list-toggle");

if (btnRadioPrev) {
  btnRadioPrev.onclick = (e) => {
    e.stopPropagation();
    playSong(currentSongIndex - 1);
  };
}
if (false && btnRadioPrev) {
  btnRadioPrev.onclick = (e) => {
    e.stopPropagation();
    playSong(currentSongIndex - 1);
  };
}
if (btnRadioNext) {
  btnRadioNext.onclick = (e) => {
    e.stopPropagation();
    playSong(currentSongIndex + 1);
  };
}
if (false && btnRadioNext) {
  btnRadioNext.onclick = (e) => {
    e.stopPropagation();
    playSong(currentSongIndex + 1);
  };
}
if (btnRadioPlay) {
  btnRadioPlay.onclick = (e) => {
    e.stopPropagation();
    toggleSong();
  };
}
if (false && btnRadioPlay) {
  btnRadioPlay.onclick = (e) => {
    e.stopPropagation();
    toggleSong();
  };
}
if (btnRadioClose) {
  btnRadioClose.onclick = (e) => {
    e.stopPropagation();
    window.toggleRadioDock(false);
  };
}
if (radioListToggle && radioTrackList) {
  radioListToggle.onclick = (e) => {
    e.stopPropagation();
    radioTrackList.hidden = !radioTrackList.hidden;
    if (!radioTrackList.hidden) {
      radioTrackList.innerHTML = ROMANTIC_PLAYLIST.map((t, idx) => `
        <button type="button" class="radio-track-opt" data-idx="${idx}" style="display:block;width:100%;text-align:left;padding:8px 10px;margin:2px 0;background:${idx === currentSongIndex ? '#e91e63' : 'rgba(255,255,255,0.08)'};border:none;border-radius:6px;color:#fff;font-size:0.83rem;cursor:pointer;">
          ${t.title} <small style="opacity:0.8;">(${t.duration})</small>
        </button>
      `).join("");
      radioTrackList.querySelectorAll(".radio-track-opt").forEach(b => {
        b.onclick = (ev) => {
          ev.stopPropagation();
          playSong(Number(b.dataset.idx));
          radioTrackList.hidden = true;
        };
      });
    }
  };
}
updateMusicPlayerUI();

// ==============================================================
// TECHNICAL FIX: MELA MARKET STALL & HAND EQUIPMENT
// ==============================================================
let currentHandMesh = null;

function equipHandItem(itemType) {
  if (currentHandMesh && je.arms?.[1]) {
    je.arms[1].remove(currentHandMesh);
    currentHandMesh = null;
  }
  if (!je.arms?.[1]) return;

  const itemGroup = new Se(); // Three.Group

  if (itemType === "sparkler") {
    const rodGeo = new Nt(0.012, 0.012, 0.45, 8); // Cylinder
    const rodMat = new Ot({ color: 0xdddddd });
    const rod = new Qe(rodGeo, rodMat);
    rod.position.set(0, -0.2, 0.1);
    rod.rotation.x = Math.PI / 4;
    itemGroup.add(rod);

    const tipGeo = new Vn(0.05, 8, 8); // Sphere
    const tipMat = new Ot({ color: 0xffd700 });
    const tip = new Qe(tipGeo, tipMat);
    tip.position.set(0, -0.04, 0.25);
    itemGroup.add(tip);

    const light = new Fo(0xffcc00, 2, 4); // PointLight
    light.position.copy(tip.position);
    itemGroup.add(light);
  } else if (itemType === "laddoo") {
    const boxGeo = new lt(0.24, 0.09, 0.24); // Box
    const boxMat = new Ot({ color: 0xd4af37 });
    const box = new Qe(boxGeo, boxMat);
    box.position.set(0, -0.15, 0.18);
    itemGroup.add(box);

    const ladGeo = new Vn(0.042, 8, 8);
    const ladMat = new Ot({ color: 0xff9900 });
    [[-0.05, -0.05], [-0.05, 0.05], [0.05, -0.05], [0.05, 0.05]].forEach(([lx, lz]) => {
      const lad = new Qe(ladGeo, ladMat);
      lad.position.set(lx, -0.08, 0.18 + lz);
      itemGroup.add(lad);
    });
  } else if (itemType === "bouquet") {
    const wrapGeo = new Nt(0.03, 0.14, 0.3, 8);
    const wrapMat = new Ot({ color: 0xffffff });
    const wrap = new Qe(wrapGeo, wrapMat);
    wrap.position.set(0, -0.16, 0.18);
    wrap.rotation.x = Math.PI / 5;
    itemGroup.add(wrap);

    const roseGeo = new Vn(0.055, 8, 8);
    const roseMat = new Ot({ color: 0xe91e63 });
    for (let i = 0; i < 5; i++) {
      const ang = (i / 5) * Math.PI * 2;
      const rose = new Qe(roseGeo, roseMat);
      rose.position.set(Math.cos(ang) * 0.07, -0.02, 0.24 + Math.sin(ang) * 0.07);
      itemGroup.add(rose);
    }

    const balloonGeo = new Vn(0.18, 12, 12);
    const balloonMat = new Ot({ color: 0xff4081 });
    const balloon = new Qe(balloonGeo, balloonMat);
    balloon.scale.set(1, 1.15, 0.8);
    balloon.position.set(0.12, 0.55, 0.22);
    itemGroup.add(balloon);

    const strGeo = new Nt(0.005, 0.005, 0.65, 4);
    const strMat = new Ot({ color: 0xeeeeee });
    const str = new Qe(strGeo, strMat);
    str.position.set(0.06, 0.22, 0.2);
    itemGroup.add(str);
  }

  je.arms[1].add(itemGroup);
  currentHandMesh = itemGroup;
}

window.openMelaMarketModal = function() {
  const modal = document.getElementById("mela-market-modal");
  if (modal) {
    modal.querySelectorAll("button").forEach(b => {
      b.disabled = false;
      b.removeAttribute("disabled");
      b.style.pointerEvents = "auto";
      b.style.cursor = "pointer";
    });
    modal.style.display = "block";
    const dock = document.getElementById("couple-actions-dock");
    if (dock) dock.style.setProperty("display", "none", "important");
  }
};

window.closeMelaMarketModal = function() {
  const modal = document.getElementById("mela-market-modal");
  if (modal) modal.style.display = "none";
};

// Wire Mela Market Modal buttons
const mCloseBtn = document.getElementById("mela-market-close");
if (mCloseBtn) mCloseBtn.onclick = window.closeMelaMarketModal;

const btnMRavan = document.getElementById("btn-market-ravan");
if (btnMRavan) {
  btnMRavan.onclick = () => {
    window.closeMelaMarketModal();
    q.fire("ground", true);
    q.fire("sky", true);
    if (Me?.createShowBurst) {
      for (let i = 0; i < 6; i++) {
        setTimeout(() => {
          Ie.push(Me.createShowBurst(ce, { x: K.x + (Math.random() - 0.5) * 12, y: 20 + Math.random() * 6, z: K.z - 16 + (Math.random() - 0.5) * 8, pattern: "heart", colour: [16716947, 16728224, 16737975, 16757688, 16766012, 15277699][i % 6], multi: true }, He.mobile));
          q.fire("sky", true);
        }, i * 350);
      }
    }
    equipHandItem("sparkler");
    oe("💥 Ravan Dahan! Mini show shuru hua aur Phuljhari haath mein aa gayi! ✨", null, 4000);
  };
}

const btnMName = document.getElementById("btn-market-name");
if (btnMName) {
  btnMName.onclick = () => {
    window.closeMelaMarketModal();
    const customName = prompt("Aasmaan mein kya likhein?", "Trapti ❤️ Iglu") || "Trapti ❤️ Iglu";
    createCustomSkyNameBanner(customName);
    oe("✨ Aasmaan mein '" + customName + "' roshan ho gaya! 🎆", null, 4000);
  };
}

function createCustomSkyNameBanner(text) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 256;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 256);
  ctx.fillStyle = "rgba(20, 8, 30, 0.78)";
  ctx.roundRect ? ctx.roundRect(10, 10, 1004, 236, 30) : ctx.rect(10, 10, 1004, 236);
  ctx.fill();
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#ffd700";
  ctx.stroke();

  ctx.shadowColor = "#ff4081";
  ctx.shadowBlur = 24;
  ctx.font = "bold 64px system-ui, sans-serif";
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("✨ " + text + " ✨", 512, 128);

  const texture = new Qa(canvas);
  const sprMat = new Fn({ map: texture, transparent: true });
  const sprite = new Wn(sprMat);
  sprite.scale.set(16, 4, 1);
  sprite.position.set(K.x, 26, K.z - 12);
  ce.add(sprite);

  q.fire("sky", true);
  if (Me?.createShowBurst) {
    for (let k = 0; k < 6; k++) {
      setTimeout(() => {
        Ie.push(Me.createShowBurst(ce, { x: K.x + (Math.random() - 0.5) * 14, y: 22 + Math.random() * 6, z: K.z - 14 + (Math.random() - 0.5) * 8, pattern: "heart", colour: [16716947, 16728224, 16737975, 16757688, 16766012, 15277699][k % 6], multi: true }, He.mobile));
        q.fire("sky", true);
      }, k * 400);
    }
  }

  setTimeout(() => {
    ce.remove(sprite);
  }, 12000);
}

const btnMSky = document.getElementById("btn-market-sky");
if (btnMSky) {
  btnMSky.onclick = () => {
    window.closeMelaMarketModal();
    y.inventory.sky_blast = (y.inventory.sky_blast || 0) + 10;
    if (!y.crackerUsed.includes("sky")) y.crackerUsed.push("sky");

    if (Me?.createShowBurst) {
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          Ie.push(Me.createShowBurst(ce, { x: K.x + (Math.random() - 0.5) * 20, y: 20 + (i % 5) * 2, z: K.z - 18 + (Math.random() - 0.5) * 10, pattern: "heart", colour: [16716947, 16728224, 16737975, 16757688, 16766012, 15277699][i % 6], multi: true }, He.mobile));
          q.fire("sky", true);
        }, i * 250);
      }
    }
    oe("🎆 20-Shot Sky Blast show shuru! 10 patakhe bag mein jud gaye! 🎒", null, 4000);
  };
}

const btnMLaddoo = document.getElementById("btn-market-laddoo");
if (btnMLaddoo) {
  btnMLaddoo.onclick = () => {
    window.closeMelaMarketModal();
    equipHandItem("laddoo");
    oe("🍬 Motichoor Laddoo haath mein le liya! Happy Diwali! 💖", null, 3500);
  };
}

const btnMBouquet = document.getElementById("btn-market-bouquet");
if (btnMBouquet) {
  btnMBouquet.onclick = () => {
    window.closeMelaMarketModal();
    equipHandItem("bouquet");
    oe("🌹 Romantic Rose Bouquet aur Heart Balloon haath mein aa gaya! Partner ko gift do 💖", null, 4000);
  };
}

// 3D Screen Click on Mela Market Counter
window.addEventListener("click", (evt) => {
  if (evt.target.closest(".top-tools, #radio-dock, #couple-actions-dock, #couple-chat-widget, #mela-market-modal, #proposal-modal, dialog, footer, aside, header")) return;
  if (y.zone !== "market") return;

  try {
    const counterPos = new se(11.5, 1.8, 20.0).project(ae);
    if (counterPos.z < 1) {
      const screenX = ((counterPos.x + 1) * window.innerWidth) / 2;
      const screenY = ((-counterPos.y + 1) * window.innerHeight) / 2;
      const dist = Math.hypot(evt.clientX - screenX, evt.clientY - screenY);
      if (dist < 180) {
        window.openMelaMarketModal();
      }
    }
  } catch (err) {}
});
