import { M as i, a as t, O as n } from "./config-CTwGFHgE.js";
import { a as s, C as l } from "./festival-config-DMHGmm_6.js";
const u = {
    couple: {
      icon: "💑",
      title: "Romantic Couple Entry",
      text: "iglu~uglu house se shuru. Kapde, patakhe, aur romantic couple bedroom—sab free.",
    },
    story: {
      icon: "🪔",
      title: "Couple Mode",
      text: "iglu~uglu house mein direct entry.",
    },
    explore: {
      icon: "🎆",
      title: "Diwali Night · Explore",
      text: "Seedha roshan Diwali bazaar mein.",
    },
    multiplayer: {
      icon: "👥",
      title: "Multiplayer Couple Room",
      text: "Diwali ki raat partner ke saath.",
    },
  },
  c = (e) => !0,
  y = (e, a) => 0,
  d = (e, a) => (a === "story" ? e : `${e}-${a}`);
function m(e, a) {
  if (!a || !Object.hasOwn(u, a)) a = "couple";
  Object.assign(e, {
    mode: a,
    zone: "home",
    position: { x: 0, z: 12 },
    yaw: Math.PI,
    night: !0,
    started: !0,
    cleaned: [],
    papa: !0,
    papaStarted: !0,
    lights: !0,
    knots: [!0, !0, !0, !0],
    rewarded: !0,
    decorations: ["diyas", "lights", "rangoli"],
    crackerLesson: { started: !0, done: !0, uid: null },
  });
  for (const r of Object.keys(s)) e.inventory[r] = 12;
  e.rangoli = Array.from({ length: 8 }, (r, o) => ({
    x: Math.cos((o * Math.PI) / 4) * 0.45,
    y: Math.sin((o * Math.PI) / 4) * 0.45,
    r: 0.18,
    colour: o % 2 ? "gold" : "rose",
  }));
  ((e.mode = a),
    (e.night = !0),
    (e.colours = Object.keys(l)),
    (e.unlockedEffects = Object.keys(t.effectPrices)));
  for (const r of Object.keys(n)) e.inventory[r] = 1;
  return e;
}
export { u as G, m as a, c as i, d as m, y as p };
