import { G as n, y as i, I as f } from "./world-opFD36TP.js";
function u(t) {
  const e = new Map();
  for (const o of [...t.root.children]) {
    if (
      !o.isMesh ||
      o.children.length ||
      o.userData.dynamic ||
      Array.isArray(o.material)
    )
      continue;
    const a = o.geometry.uuid + "/" + o.material.uuid;
    (e.has(a) || e.set(a, []), e.get(a).push(o));
  }
  for (const o of e.values()) {
    if (o.length < 3) continue;
    const a = o[0],
      s = new f(a.geometry, a.material, o.length);
    (o.forEach((c, r) => {
      (c.updateMatrix(), s.setMatrixAt(r, c.matrix), t.root.remove(c));
    }),
      (s.castShadow = a.castShadow),
      (s.receiveShadow = !0),
      t.root.add(s));
  }
}
function h(t, { width: e = 44, length: o = 70 } = {}) {
  const a = new n();
  (t.root.add(a), (t = i(a)), t.box(0, -0.48, -6, 180, 0.2, 180, 11709835));
  const s = [13148294, 9677472, 13417877, 11051172, 13675649];
  for (const c of [-e, e])
    for (let r = -o; r <= o; r += 9)
      (t.houseFront(
        c,
        r,
        s[((Math.abs(r) + Math.abs(c)) % 5) | 0],
        "SHARMA COLONY",
      ),
        t.box(c, -0.06, r, 9, 0.12, 9, 13285788));
  for (const c of [-o, o])
    for (let r = -e + 8; r < e; r += 8)
      t.houseFront(r, c, s[((Math.abs(r) * 3) % 5) | 0], "HAPPY DIWALI");
  u(t);
}
function x(t, e, o) {
  for (const a of [-2.8, -1.4, 0, 1.4, 2.8])
    for (let s = 0.7; s < 3.7; s += 0.6) t.light(e + a, s, o + 2.85, 16761961);
  for (let a = 0; a < 8; a++)
    (t.cylinder(e - 2.8 + a * 0.8, 0.19, o + 3.5, 0.15, 0.1, 0.12, 11826506),
      t.light(e - 2.8 + a * 0.8, 0.33, o + 3.5));
  t.rug(e, o + 3.8, 1.7, 1, 4361865);
}
export { u as b, x as f, h as s };
