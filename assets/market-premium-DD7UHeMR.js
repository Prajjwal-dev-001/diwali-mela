import { a as M } from "./config-CTwGFHgE.js";
import { i as L } from "./game-modes-qJzg1Wyo.js";
import { U as N, G } from "./world-opFD36TP.js";
const A = {
    x: 11.5,
    z: 20,
    tagline: "Things you definitely don't need… but probably want.",
    products: {
      guide: {
        title: "Game Creator Guide",
        short: "GUIDE FREE",
        price: 0,
        kind: "download",
        icon: "🎮",
        badge: "CREATOR SPECIAL",
        colour: "#48b9b0",
        headline: "Ever wondered how this entire Mela was built?",
        description:
          "The practical journey from an idea to a playable browser world: planning, AI-assisted coding, environments, characters, missions, UI, animation, deployment and monetization. 19 practical pages, with workflows from Diwali Mela and Dussehra Mela.",
        bonus: "AI Game & Website Prompt Pack included FREE",
        previewPath: "/downloads/creator-guide-sample.pdf",
        checkoutUrl: null,
      },
      ravan: {
        title: "Ravan Ultimate Destruction",
        short: "RAVAN",
        price: 199,
        kind: "effect",
        icon: "💥",
        badge: "THE BIG SPECTACLE",
        colour: "#edb94f",
        headline: "Normal Ravan Dahan wasn't enough?",
        description:
          "Game ka bada Ravan, rangon ka dhamaka aur aasmaan mein aatishbaazi. Khuli jagah mein apna fictional show chalao.",
        checkoutUrl: null,
      },
      name: {
        title: "Name in the Sky",
        short: "YOUR NAME",
        price: 79,
        kind: "effect",
        icon: "✨",
        badge: "YOUR MOMENT",
        colour: "#dca4dd",
        headline: "Give the sky your signature.",
        description:
          "Apna naam ya chhota message aasmaan mein likho. Rang, unchai aur size chuno, phir fireworks ke saath launch karo.",
        checkoutUrl: null,
      },
      sky: {
        title: "Sky Blast Fireworks",
        short: "SKY BLAST",
        price: 49,
        kind: "effect",
        icon: "🎆",
        badge: "FULL COLOUR SKY",
        colour: "#77baf0",
        headline: "Change the sky's wallpaper.",
        description:
          "Apne rang aur patakhon ka pattern chuno. Launch dabao aur aasmaan ko roshan karo. Naya show kabhi bhi chala sakte ho.",
        checkoutUrl: null,
      },
      laddoo: {
        title: "Laddoo Cannon",
        short: "LADDOO",
        price: 39,
        kind: "effect",
        icon: "🍬",
        badge: "DELICIOUSLY SILLY",
        colour: "#f5af64",
        headline: "Nobody needed a laddoo cannon.",
        description:
          "Mithai ke targets par nishana lagao. Fire dabao, laddoo chalao aur 60 seconds mein score banao. Naya round kabhi bhi shuru kar sakte ho.",
        checkoutUrl: null,
      },
      prompts: {
        title: "AI Game & Website Prompt Pack",
        short: "PROMPTS FREE",
        price: 0,
        kind: "download",
        icon: "🤖",
        badge: "CREATOR CORNER",
        colour: "#c69ee8",
        headline: "Steal my prompts 👀",
        description:
          "32 reusable prompts for browser games, websites, AI coding, UI, game mechanics, graphics, deployment and monetization. Includes practical checkpoints so you can build, review and improve each step.",
        bonus:
          "BEST VALUE · This pack is included FREE with the ₹999 Creator Guide.",
        previewPath: "/downloads/prompt-pack-sample.md",
        checkoutUrl: null,
      },
    },
    support: {
      amounts: [10, 29, 49, 99, 199],
      labels: [
        "Chai ☕",
        "Samosa 🥟",
        "Fireworks Fund 🎆",
        "Mela Supporter ❤️",
        "Legend 👑",
      ],
      checkoutUrl: null,
    },
  },
  I = ["guide", "ravan", "name", "sky", "laddoo", "prompts"],
  O = [
    "Arre welcome welcome! Dekho free hai… khareedna optional hai.",
    "Missions ke game paise se apna show chuno. Asli paise sirf Creator Kit aur Prompt Pack ke liye hain.",
    "Game banana seekhna hai? Creator corner udhar hai.",
    "Laddoo cannon ka koi logical reason nahi hai. Bilkul nahi.",
  ],
  w = (i) =>
    String(i).replace(
      /[&<>"']/g,
      (n) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[n],
    );
function T(i) {
  if (typeof i != "string" || i.length > 2048) return null;
  try {
    const n = new URL(i);
    return n.protocol === "https:" && !n.username && !n.password
      ? n.href
      : null;
  } catch {
    return null;
  }
}
function U(i) {
  return [
    ...String(i || "")
      .normalize("NFC")
      .replace(/[\u0000-\u001f\u007f<>]/g, "")
      .trim(),
  ]
    .slice(0, 20)
    .join("");
}
function j(i) {
  const n = "diwali-mela-market-counts-v1",
    k = new Set([
      "store_entered",
      "product_viewed",
      "preview_clicked",
      "checkout_clicked",
      "donation_clicked",
    ]);
  let l = {};
  try {
    const u = JSON.parse(i?.getItem(n) || "{}");
    for (const [t, e] of Object.entries(u))
      Number.isSafeInteger(e) &&
        e >= 0 &&
        t.length < 70 &&
        Object.keys(l).length < 60 &&
        (l[t] = Math.min(e, 1e5));
  } catch {}
  return {
    record(u, t = "store", e = 0) {
      if (
        !k.has(u) ||
        !["store", "support", ...I].includes(t) ||
        !Number.isSafeInteger(e) ||
        e < 0 ||
        e > 1e5
      )
        return !1;
      const c = `${u}:${t}:${e}`;
      if (!(c in l) && Object.keys(l).length >= 60) return !1;
      l[c] = Math.min(1e5, (l[c] || 0) + 1);
      try {
        i?.setItem(n, JSON.stringify(l));
      } catch {}
      return !0;
    },
    snapshot: () => ({ ...l }),
  };
}
function _(i, n, k) {
  const l = (...e) => i.box(...e, !1, null, k),
    u = (...e) => i.cylinder(...e, k),
    t = (...e) => i.sphere(...e, k);
  if (n === "guide" || n === "prompts") {
    l(0, 0.02, 0, 0.95, 0.07, 0.62, 4214103);
    const e = l(0, 0.46, -0.25, 0.94, 0.8, 0.06, 3360593);
    ((e.rotation.x = -0.08),
      l(0, 0.47, -0.21, 0.79, 0.64, 0.025, n === "guide" ? 6535594 : 11240656));
    for (let c = 0; c < 3; c++)
      l(-0.18, 0.3 + c * 0.13, -0.19, 0.42 - c * 0.08, 0.035, 0.02, 16768928);
    n === "guide" &&
      (l(0.57, 0.22, 0.05, 0.15, 0.45, 0.5, 14133854),
      l(0.57, 0.22, 0.32, 0.12, 0.4, 0.04, 5218196));
  } else if (n === "laddoo") {
    const e = u(0, 0.35, 0.03, 0.25, 0.3, 1, 6528148);
    e.rotation.x = -1.05;
    for (const c of [-0.4, 0.4]) {
      const E = u(c, 0.12, 0.05, 0.25, 0.25, 0.13, 12946499);
      E.rotation.z = Math.PI / 2;
    }
    for (let c = 0; c < 4; c++)
      t(Math.sin(c * 2) * 0.18, 0.72 + c * 0.08, 0.38, 0.14, 15313977);
  } else if (n === "ravan") {
    l(0, 0.25, 0, 0.56, 0.55, 0.24, 9917056);
    for (const e of [-0.44, -0.22, 0, 0.22, 0.44])
      (t(e, 0.69, 0, 0.145, 14396533), u(e, 0.89, 0, 0, 0.15, 0.2, 14989643));
    l(0, 0.49, 0.15, 0.8, 0.08, 0.06, 14333787);
  } else {
    u(0, 0.12, 0, 0.43, 0.43, 0.16, 12885077);
    for (let e = 0; e < 3; e++) {
      const c = (e - 1) * 0.28;
      (u(c, 0.5, 0, 0.09, 0.09, 0.65, [12215175, 5942696, 13871440][e]),
        u(c, 0.91, 0, 0, 0.14, 0.2, 15781240));
    }
    n === "name" && t(0, 1.17, 0, 0.13, 15709915);
  }
}
function Y(i) {
  const { box: n, cylinder: k, sphere: l, sign: u } = i,
    t = A.x,
    e = A.z,
    c = [],
    E = [],
    b = [],
    r = new N(16766370, 5, 16, 2);
  (r.position.set(t, 2.8, e + 1.1),
    i.root.add(r),
    n(t, 0.12, e, 13.5, 0.2, 5.4, 9659715),
    n(t, 2.15, e - 1.7, 13.3, 4.2, 0.18, 5002091, !0),
    n(t, 0.71, e, 12.8, 1.05, 1.5, 9787508, !0),
    n(t, 1.28, e, 13, 0.12, 1.65, 15124368),
    n(t, 3.98, e, 14, 0.18, 4.4, 12085363));
  for (let s = 0; s < 16; s++)
    n(
      t - 6.7 + s * 0.9,
      3.68,
      e + 2.1,
      0.46,
      0.55,
      0.08,
      s % 2 ? 14001488 : 7245211,
    );
  for (const s of [-6.8, 6.8]) {
    k(t + s, 2.2, e + 0.4, 0.1, 0.13, 4.4, 12817746);
    for (let p = 0; p < 10; p++)
      (l(t + s, 0.45 + p * 0.4, e + 0.55, 0.13, p % 2 ? 15774782 : 14648885),
        i.light(t + s, 0.65 + p * 0.38, e + 0.7));
  }
  ((u("MELA MARKET", t, 4.45, e + 2.25, 11.8, "#4a3754", "#ffdda0").scale.y =
    0.35),
    (u(A.tagline, t, 3.29, e + 1.8, 10.3, "#294e4e", "#ffe7b4").scale.y = 0.27),
    (u(
      "CREATOR SPECIAL · PROMPT PACK FREE",
      t - 4,
      2.85,
      e - 1.48,
      4.9,
      "#2d665f",
    ).scale.y = 0.4),
    (u(
      "Apni Diwali ka khaas show chuno",
      t + 2.7,
      2.85,
      e - 1.48,
      5.8,
      "#6f4b6c",
    ).scale.y = 0.4));
  for (const s of [1.25, 2.08]) n(t, s, e - 1.2, 12.7, 0.08, 0.75, 13016153);
  I.forEach((s, p) => {
    const d = t - 5.75 + p * 2.3,
      m = A.products[s],
      f = new G();
    (f.position.set(d, 1.39, e + 0.22),
      s === "guide" && f.scale.setScalar(1.3),
      i.root.add(f),
      k(d, 1.37, e + 0.22, s === "guide" ? 0.82 : 0.6, 0.66, 0.1, 15845229),
      _(i, s, f),
      E.push(f));
    const $ = u(
      `${m.short.replace(/ FREE/g, "")} FREE`,
      d,
      0.75,
      e + 0.86,
      2.06,
      s === "ravan" ? "#302f28" : "#354851",
      s === "ravan" ? "#ffe66a" : "#fbe5b0",
    );
    (b.push($),
      c.push({
        id: `premium-${s}`,
        type: "premium",
        product: s,
        name: `${m.title} · details dekho`,
        x: d,
        z: e + 2.2,
        reach: 3.5,
      }));
    for (const R of [-0.65, 0, 0.65])
      i.light(d + R, 1.9, e - 0.55, s === "ravan" ? 16753765 : 16768163);
  });
  for (let s = 0; s < 6; s++) {
    const p = n(
      t - 3.7 + s * 0.18,
      1.03,
      e + 0.83,
      0.12,
      0.58,
      0.03,
      s % 2 ? 3354923 : 15254352,
    );
    p.rotation.z = -0.35;
  }
  const y = i.person(t, e - 1.02, 13145938, "man");
  i.bunting(t - 6.7, e + 1.9, t + 6.7, e + 1.9, 5.5, 22);
  const v = t + 5.75;
  return (
    n(v, 0.7, e + 5.9, 1, 1.4, 0.8, 4815474, !0),
    n(v, 1.45, e + 5.9, 1.12, 0.1, 0.9, 14859370),
    n(v, 1.52, e + 5.9, 0.55, 0.025, 0.06, 3157290),
    u("SUPPORT THE MELA", v, 1.05, e + 6.34, 1.38),
    c.push({
      id: "premium-support",
      type: "premium",
      product: "support",
      name: "Enjoyed the mela? · Support dekho",
      x: v - 1.2,
      z: e + 5.8,
      reach: 1.05,
    }),
    c.push({
      id: "mela-market-stall",
      type: "mela-market-stall",
      name: "Press E — Open Mela Market",
      x: t,
      z: e + 2.2,
      reach: 4.8,
    }),
    i.targets.push(...c),
    {
      targets: c,
      vendor: y,
      update(s, p) {
        (E.forEach((d, m) => {
          ((d.rotation.y = Math.sin(p * 0.55 + m) * 0.3),
            (d.position.y = 1.39 + Math.sin(p * 1.6 + m) * 0.045));
        }),
          b.forEach((d, m) => {
            d.rotation.z = Math.sin(p * 1.7 + m) * (m === 1 ? 0.026 : 0.009);
          }));
      },
    }
  );
}
for (const [i, n] of Object.entries(M.effectPrices)) A.products[i].price = n;
A.products.guide.title = "Game Creator Kit";
const z = [],
  F = (i, n = !1) => Object.hasOwn(M.effectPrices, i) && n;
function H({
  showPanel: i,
  onPreview: n = () => {},
  onShare: k = () => {},
  notify: l = () => {},
  storage: u,
  commerce: t,
  getState: e = () => ({ wallet: 0, unlockedEffects: [] }),
  act: c = () => ({ changed: !1 }),
  onSupport: E,
  config: b = A,
}) {
  const r = (a) => document.getElementById(a),
    y = j(u);
  let v = 0,
    s = 0;
  const p = () => r("panel").close(),
    d = (a) => L(e()) || e().unlockedEffects.includes(a) || t?.owns(a);
  function m(a, o = "") {
    if (!F(a, d(a))) {
      l("Pehle game paise se item unlock karo. Asli payment nahi lagti.");
      return;
    }
    const h = Date.now();
    h - s < 2e3 ||
      ((s = h),
      y.record("preview_clicked", a, b.products[a].price),
      p(),
      n({ productId: a, name: U(o), preview: !0 }));
  }
  function f(a) {
    if (a === "support") {
      R();
      return;
    }
    const o = b.products[a];
    if (!o) return;
    if ((y.record("product_viewed", a, o.price), o.kind === "effect")) {
      const g = d(a),
        x = e(),
        C = L(x);
      (i(
        `<section class="premium-product premium-${a}" style="--premium-accent:${o.colour}"><span class="eyebrow">MELA MARKET · GAME PAISE</span><div class="premium-preview" aria-hidden="true"><span class="premium-product-icon">${o.icon}</span></div><h2>${o.title}</h2><div class="premium-price">${C ? "FREE" : g ? "Unlock ho chuka hai" : "Game ₹" + o.price}<small>${C ? "Game paise bhi nahi lagte. Bas enjoy karo." : "Tumhara game wallet: ₹" + x.wallet + " · Asli paise nahi lagte"}</small></div><p>${o.description}</p><p>${C ? "Free night mein jitni baar chaaho chalao." : "Missions se game paise kamao. Ek baar unlock karo, phir jitni baar chaaho chalao."}</p>${a === "name" ? '<label for="premium-sky-name">Aasmaan mein kya likhein?</label><input id="premium-sky-name" maxlength="20" placeholder="Apna naam" autocomplete="off">' : ""}<div class="premium-actions"><button id="game-effect-use" class="primary">${g ? "CHALAO" : "GAME ₹" + o.price + " · UNLOCK KARO"}</button></div><p id="game-effect-status" role="status"></p><button id="premium-back" class="secondary">Wapas mela ghoomo</button></section>`,
      ),
        (r("game-effect-use").onclick = () => {
          if (g) {
            if (e().zone === "home") {
              r("game-effect-status").textContent =
                "Mohalle ya bazaar ki khuli jagah mein chalao.";
              return;
            }
            m(a, r("premium-sky-name")?.value);
          } else {
            const P = c({ type: "unlockEffect", id: a });
            P.changed
              ? f(a)
              : (r("game-effect-status").textContent =
                  P.message || "Missions se game paise kamao.");
          }
        }),
        (r("premium-back").onclick = p));
      return;
    }
    const h = T(o.checkoutUrl),
      S =
        o.kind === "download" &&
        /^\/downloads\/[\w.-]+$/.test(o.previewPath || "")
          ? o.previewPath
          : null;
    if (
      (i(
        `<section class="premium-product premium-${a}" style="--premium-accent:${w(o.colour)}"><span class="eyebrow">MELA MARKET · ${w(o.badge)}</span><div class="premium-preview" aria-hidden="true"><span class="premium-product-icon">${o.icon}</span><i></i><i></i><i></i><small>${a === "ravan" ? "FICTIONAL GAME SPECTACLE" : "A LITTLE MELA MAGIC"}</small></div><div class="premium-price">₹${o.price}<small>Real-money product · separate from your game wallet</small></div><h2>${w(o.title)}</h2><h3>${w(o.headline)}</h3><p>${w(o.description)}</p>${o.bonus ? `<p class="premium-bonus">🎁 ${w(o.bonus)}</p>` : ""}${a === "guide" ? '<div class="premium-topics">Planning · AI coding · Environments · Characters · Missions · UI · Animation · Deployment · Monetization · Tools</div>' : ""}${a === "name" ? '<label for="premium-sky-name">Your name in the sky</label><input id="premium-sky-name" maxlength="40" placeholder="Your name" autocomplete="off"><p class="premium-name-preview" id="premium-name-preview">✨ YOUR NAME ✨</p>' : ""}<div class="premium-actions">${o.kind === "effect" && !z.includes(a) ? '<button id="premium-preview" class="primary">TRY FREE PREVIEW</button>' : S ? `<a class="primary premium-link" href="${S}" target="_blank" rel="noopener noreferrer" id="premium-sample">Read the free sample ↗</a>` : ""}${h ? `<a class="primary premium-link" id="premium-checkout" href="${w(h)}" target="_blank" rel="noopener noreferrer">${o.kind === "effect" ? "BUY & UNLOCK" : "GET NOW"} — ₹${o.price} ↗</a>` : '<button disabled class="secondary">Checkout coming soon</button>'}</div><p class="premium-small">${h ? "Checkout opens in a new tab. Ownership requires verified payment." : "Secure checkout available hone par item unlock kar sakte ho."}</p>${o.kind === "effect" ? '<button id="premium-share" class="secondary">📸 Share this moment</button>' : ""}${a === "prompts" ? '<button id="premium-guide" class="premium-upgrade">BEST VALUE · ₹999 Creator Kit + Prompt Pack FREE →</button>' : ""}<button id="premium-back" class="secondary">Back to exploring</button></section>`,
      ),
      t)
    ) {
      const g = document.querySelector(".premium-actions");
      g.querySelector("button[disabled]")?.remove();
      const x = document.createElement("button");
      x.className = "primary";
      const C = t.owns(a);
      ((x.textContent = C
        ? o.kind === "download"
          ? "DOWNLOAD PURCHASE"
          : "PLAY YOUR ITEM"
        : `BUY — ₹${o.price}`),
        (x.onclick = () => {
          C
            ? o.kind === "download"
              ? t.download(a)
              : m(a, r("premium-sky-name")?.value)
            : t.buy(a);
        }),
        g.append(x),
        (document.querySelector(".premium-small").textContent =
          "Secure Razorpay checkout · Unlocks follow verified payment. QR support is separate."));
    }
    (r("premium-preview") &&
      (r("premium-preview").onclick = () => m(a, r("premium-sky-name")?.value)),
      r("premium-sample") &&
        (r("premium-sample").onclick = () =>
          y.record("preview_clicked", a, o.price)),
      r("premium-checkout") &&
        (r("premium-checkout").onclick = () =>
          y.record("checkout_clicked", a, o.price)),
      r("premium-sky-name") &&
        (r("premium-sky-name").oninput = (g) => {
          r("premium-name-preview").textContent =
            `✨ ${U(g.target.value) || "YOUR NAME"} ✨`;
        }),
      r("premium-share") &&
        (r("premium-share").onclick = () => {
          (p(), k());
        }),
      r("premium-guide") && (r("premium-guide").onclick = () => f("guide")),
      (r("premium-back").onclick = p));
  }
  function $() {
    (y.record("store_entered"),
      l(`Shopkeeper: ${O[v++ % O.length]}`),
      i(
        `<section class="premium-welcome"><span class="eyebrow">MELA MARKET</span><h2>Arre welcome welcome!</h2><p>${w(b.tagline)}</p><button id="market-featured" class="premium-featured"><span>🎮 CREATOR SPECIAL</span><strong>Build games like this</strong><small>Game Creator Kit · ₹999<br>Prompt Pack included FREE</small></button><p>Every item has its own display. Walk over and choose your item. Laddoo gun, Name in the Sky, Sky Blast aur Ravan missions ke game paise se unlock hote hain. Sirf Creator Kit aur Prompt Pack real-money downloads hain.</p><div class="premium-counter-links"><button data-premium="ravan">💥 Ravan Ultimate</button><button data-premium="name">✨ Name in the Sky</button><button data-premium="sky">🎆 Sky Blast</button><button data-premium="laddoo">🍬 Laddoo Cannon</button><button data-premium="prompts">🤖 Creator Corner</button><button data-premium="support">❤️ Support the mela</button></div><button id="market-return" class="secondary">Explore the counter</button></section>`,
      ),
      (r("market-featured").onclick = () => f("guide")),
      (r("market-return").onclick = p),
      document.querySelectorAll("[data-premium]").forEach((a) => {
        a.onclick = () => f(a.dataset.premium);
      }));
  }
  function R() {
    if (E) {
      E();
      return;
    }
    if (t) {
      t.support();
      return;
    }
    (i(
      `<section class="premium-support"><span class="eyebrow">SUPPORT THE MELA · OPTIONAL</span><h2>Enjoyed the mela? ❤️</h2><p>Help us build even crazier stuff.</p><div class="premium-support-options">${b.support.amounts.map((a, o) => `<button data-support="${a}">₹${a}<small>${b.support.labels[o]}</small></button>`).join("")}</div><label for="support-amount">Choose your own amount</label><input id="support-amount" type="number" min="10" max="100000" step="1" value="49"><button id="support-send" class="primary">View support options</button><p id="support-status" class="premium-small">Real payments are not configured. Temple donations use a separate fictional game wallet.</p><button id="support-back" class="secondary">Back to exploring</button></section>`,
    ),
      document.querySelectorAll("[data-support]").forEach((a) => {
        a.onclick = () => {
          r("support-amount").value = a.dataset.support;
        };
      }),
      (r("support-send").onclick = () => {
        const a = Number(r("support-amount").value);
        if (!Number.isSafeInteger(a) || a < 10 || a > 1e5) {
          r("support-status").textContent =
            "Choose a whole amount between ₹10 and ₹100,000.";
          return;
        }
        y.record("donation_clicked", "support", a);
        const o = T(b.support.checkoutUrl);
        if (!o) {
          r("support-status").textContent =
            "Thank you! Support will be available when a payment link is configured. No payment has been made.";
          return;
        }
        const h = document.createElement("a");
        ((h.href = o),
          (h.target = "_blank"),
          (h.rel = "noopener noreferrer"),
          (h.textContent = `Choose ₹${a} at the payment provider ↗`),
          r("support-status").replaceChildren(h));
      }),
      (r("support-back").onclick = p));
  }
  return { open: f, welcome: $, support: R, analytics: y };
}
export { Y as b, H as c };
