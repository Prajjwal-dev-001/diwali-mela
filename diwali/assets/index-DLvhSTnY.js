const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/main-CSF1MO2S.js",
      "assets/game-modes-qJzg1Wyo.js",
      "assets/config-CTwGFHgE.js",
      "assets/festival-config-DMHGmm_6.js",
      "assets/world-opFD36TP.js",
      "assets/props-CZn3-sgP.js",
      "assets/market-premium-DD7UHeMR.js",
      "assets/night-Drgva5Cr.js",
      "assets/haunted-maze-Cj4eYpRq.js",
      "assets/decoration-design-CXH-cYhj.js",
      "assets/camera-BrVRG0n_.js",
      "assets/main-DWZbjBPg.css",
    ]),
) => i.map((i) => d[i]);
import { C as w, a as p } from "./config-CTwGFHgE.js";
import { G as h, m as S } from "./game-modes-qJzg1Wyo.js";
import "./festival-config-DMHGmm_6.js";
(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const t of document.querySelectorAll('link[rel="modulepreload"]')) m(t);
  new MutationObserver((t) => {
    for (const o of t)
      if (o.type === "childList")
        for (const n of o.addedNodes)
          n.tagName === "LINK" && n.rel === "modulepreload" && m(n);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(t) {
    const o = {};
    return (
      t.integrity && (o.integrity = t.integrity),
      t.referrerPolicy && (o.referrerPolicy = t.referrerPolicy),
      t.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : t.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function m(t) {
    if (t.ep) return;
    t.ep = !0;
    const o = a(t);
    fetch(t.href, o);
  }
})();
const k = "modulepreload",
  A = function (e) {
    return "/diwali/" + e;
  },
  y = {},
  O = function (r, a, m) {
    let t = Promise.resolve();
    if (a && a.length > 0) {
      let n = function (s) {
        return Promise.all(
          s.map((c) =>
            Promise.resolve(c).then(
              (d) => ({ status: "fulfilled", value: d }),
              (d) => ({ status: "rejected", reason: d }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        f = i?.nonce || i?.getAttribute("nonce");
      t = n(
        a.map((s) => {
          if (((s = A(s)), s in y)) return;
          y[s] = !0;
          const c = s.endsWith(".css"),
            d = c ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${s}"]${d}`)) return;
          const l = document.createElement("link");
          if (
            ((l.rel = c ? "stylesheet" : k),
            c || (l.as = "script"),
            (l.crossOrigin = ""),
            (l.href = s),
            f && l.setAttribute("nonce", f),
            document.head.appendChild(l),
            c)
          )
            return new Promise((v, P) => {
              (l.addEventListener("load", v),
                l.addEventListener("error", () =>
                  P(new Error(`Unable to preload CSS for ${s}`)),
                ));
            });
        }),
      );
    }
    function o(n) {
      const i = new Event("vite:preloadError", { cancelable: !0 });
      if (((i.payload = n), window.dispatchEvent(i), !i.defaultPrevented))
        throw n;
    }
    return t.then((n) => {
      for (const i of n || []) i.status === "rejected" && o(i.reason);
      return r().catch(o);
    });
  },
  u = new URL(location.href),
  L = p.saveKey,
  b = [
    ...document.querySelectorAll(
      "header,footer,#mission,#map-dock,#joystick,#interact,#sprint,#mobile-map,#panel",
    ),
  ];
b.forEach((e) => (e.inert = !0));

async function E(e) {
  ((p.playMode = e),
    (p.saveKey = S(L, e)),
    u.searchParams.set("play", e),
    history.replaceState(null, "", u),
    document
      .querySelectorAll("button, input")
      .forEach((a) => (a.disabled = !0)));
  const r = document.getElementById("mode-status");
  r && (r.textContent = "Iglu & Uglu ka mela khul raha hai… 💖");
  try {
    (await O(
      () => import("./main-CSF1MO2S.js"),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
    ),
      b.forEach((a) => (a.inert = !1)),
      document.getElementById("mode-picker")?.remove());
  } catch (err) {
    console.error(err);
    r &&
      (r.textContent =
        "Game load nahi hua. Page refresh karke dobara try karo.");
  }
}

// Romantic Couple Entry Card
const initialRoom = u.searchParams.get("room") || "";
const savedName = localStorage.getItem("couple_player_name") || "";
let selectedGender = localStorage.getItem("couple_player_role") || "boy";
window.playerRole = selectedGender;

const e = document.createElement("main");
e.id = "mode-picker";
e.innerHTML = `
<section class="mode-card couple-entry-card" style="max-width:440px; text-align:center; padding: 28px 24px; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.4); border: 2px solid rgba(255, 182, 193, 0.45); background: rgba(28, 36, 32, 0.95); backdrop-filter: blur(12px);">
  <img src="/art/diwali-mela-logo.webp" width="190" height="64" alt="Diwali Mela" style="margin: 0 auto 10px; display:block;" />
  <span class="mode-eyebrow" style="color: #ff80ab; font-weight: 700; letter-spacing: 1.5px; font-size: 0.8rem; text-transform: uppercase;">🌸 IGLU & UGLU KI DIWALI 🌸</span>
  <h1 style="font-size: 1.5rem; margin: 8px 0 16px; color: #fff;">Romantic Couple Entry</h1>
  
  <div class="couple-form" style="display: flex; flex-direction: column; gap: 14px; text-align: left;">
    <div>
      <label for="couple-name-input" style="font-weight: 600; font-size: 0.85rem; color: #ffccd7; display: block; margin-bottom: 4px;">Apna Naam (Your Name):</label>
      <input id="couple-name-input" type="text" maxlength="24" value="${savedName || (selectedGender === "boy" ? "Iglu" : "Uglu")}" placeholder="Naam likho..." style="width: 100%; box-sizing: border-box; padding: 10px 14px; border-radius: 10px; border: 1.5px solid #ffb6c1; background: rgba(255,255,255,0.95); font-size: 1rem; color: #222;" />
    </div>

    <div>
      <span style="font-weight: 600; font-size: 0.85rem; color: #ffccd7; display: block; margin-bottom: 6px;">Apna Role Chuno (Role):</span>
      <div style="display: flex; gap: 10px;">
        <button type="button" id="role-btn-boy" class="role-btn ${selectedGender === "boy" ? "active" : ""}" style="flex: 1; padding: 10px; border-radius: 10px; border: 2px solid #398f85; background: ${selectedGender === "boy" ? "#398f85" : "rgba(255,255,255,0.12)"}; color: #fff; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s;">👦 Boy</button>
        <button type="button" id="role-btn-girl" class="role-btn ${selectedGender === "girl" ? "active" : ""}" style="flex: 1; padding: 10px; border-radius: 10px; border: 2px solid #ff4081; background: ${selectedGender === "girl" ? "#ff4081" : "rgba(255,255,255,0.12)"}; color: #fff; font-weight: 700; font-size: 0.95rem; cursor: pointer; transition: all 0.2s;">👧 Girl</button>
      </div>
    </div>

    <div>
      <label for="couple-room-input" style="font-weight: 600; font-size: 0.85rem; color: #ffccd7; display: block; margin-bottom: 4px;">Couple Room Code:</label>
      <input id="couple-room-input" type="text" maxlength="32" value="${initialRoom || "IGLU-UGLU"}" placeholder="Room code (e.g. IGLU-UGLU)" style="width: 100%; box-sizing: border-box; padding: 10px 14px; border-radius: 10px; border: 1.5px solid #ffb6c1; background: rgba(255,255,255,0.95); font-size: 1rem; color: #222;" />
    </div>

    <button type="button" id="couple-share-btn" style="padding: 10px 14px; border-radius: 10px; background: rgba(255, 105, 180, 0.18); border: 1.5px dashed #ff80ab; color: #ff80ab; font-weight: 700; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s;">
      💌 Bulao Partner Ko (Copy Invite Link)
    </button>
    <div id="couple-share-toast" style="display: none; color: #69f0ae; font-weight: 600; font-size: 0.85rem; text-align: center;">✔ Link copied! Partner ko bhejo 💌</div>

    <button type="button" id="couple-enter-btn" style="padding: 13px; border-radius: 12px; background: linear-gradient(135deg, #ff4081, #e91e63); color: #fff; border: none; font-size: 1.1rem; font-weight: 700; cursor: pointer; box-shadow: 0 4px 18px rgba(233,30,99,0.45); margin-top: 6px; transition: transform 0.1s;">
      Mela Chalein (Enter Mela) 💖
    </button>
  </div>

  <p class="mode-note" style="margin-top: 14px; font-size: 0.8rem; color: #ffccd7; opacity: 0.9;">
    iglu~uglu house se shuru. Romantic couple bedroom, 3D outfits aur patakhe — sab 100% unlocked hain!
  </p>
  <p id="mode-status" role="status" aria-live="polite" style="font-weight: 600; color: #ff80ab; margin-top: 6px;"></p>
  <p class="creator-credit" style="margin-top: 10px; font-size: 0.85rem; color: #ffe4e1;">Created by uglubuglu ❤️💖</p>
</section>`;

document.body.append(e);

// Wire up Role buttons
const btnBoy = document.getElementById("role-btn-boy");
const btnGirl = document.getElementById("role-btn-girl");
const nameInput = document.getElementById("couple-name-input");
const roomInput = document.getElementById("couple-room-input");

btnBoy.onclick = () => {
  selectedGender = "boy";
  window.playerRole = "boy";
  btnBoy.style.background = "#398f85";
  btnGirl.style.background = "rgba(255,255,255,0.12)";
  if (!nameInput.value || nameInput.value === "Uglu") nameInput.value = "Iglu";
};

btnGirl.onclick = () => {
  selectedGender = "girl";
  window.playerRole = "girl";
  btnGirl.style.background = "#ff4081";
  btnBoy.style.background = "rgba(255,255,255,0.12)";
  if (!nameInput.value || nameInput.value === "Iglu") nameInput.value = "Uglu";
};

// Wire up Invite Share Button
document.getElementById("couple-share-btn").onclick = () => {
  const roomVal = roomInput.value.trim() || "IGLU-UGLU";
  const inviteUrl = new URL(location.href);
  inviteUrl.searchParams.set("room", roomVal);
  inviteUrl.searchParams.delete("play");
  const fullLink = inviteUrl.toString();

  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(fullLink)
      .then(() => {
        const toast = document.getElementById("couple-share-toast");
        if (toast) {
          toast.style.display = "block";
          setTimeout(() => {
            toast.style.display = "none";
          }, 3500);
        }
      })
      .catch(() => {
        prompt("Partner ko yeh invite link bhejo:", fullLink);
      });
  } else {
    prompt("Partner ko yeh invite link bhejo:", fullLink);
  }
};

// Wire up Enter Mela Button
document.getElementById("couple-enter-btn").onclick = () => {
  const nameVal =
    nameInput.value.trim() || (selectedGender === "boy" ? "Iglu" : "Uglu");
  const roomVal = roomInput.value.trim();

  window.playerRole = selectedGender;
  window.playerName = nameVal;
  localStorage.setItem("couple_player_name", nameVal);
  localStorage.setItem("couple_player_role", selectedGender);
  localStorage.setItem("diwali-party:name", nameVal);

  const outfit = selectedGender === "girl" ? "pink_lehenga" : "kurta_royal";
  const saveKey = S(L, "explore");
  try {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(saveKey) || "{}");
    } catch {}
    saved.version = 4;
    saved.avatar = { gender: selectedGender, outfit: outfit };
    saved.mode = "explore";
    saved.zone = "home";
    saved.position = { x: 0, z: 12 };
    saved.yaw = Math.PI;
    saved.cleaned = [];
    saved.inventory = saved.inventory || {};
    saved.inventory[outfit] = 1;
    saved.inventory["pink_lehenga"] = 1;
    saved.inventory["festive_saree"] = 1;
    saved.inventory["jeans_kurti"] = 1;
    saved.inventory["kurta_royal"] = 1;
    saved.inventory["casual_jeans"] = 1;
    localStorage.setItem(saveKey, JSON.stringify(saved));
  } catch (err) {
    console.warn("Storage error:", err);
  }

  if (roomVal) {
    u.searchParams.set("room", roomVal);
  }
  E("explore");
};

export { O as _ };
