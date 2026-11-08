const u = {
    size: 15,
    cell: 2.6,
    seed: 731,
    facade: { x: -22, z: -42 },
    entrance: { x: -22, z: -37.5 },
    music: { id: "POvlCp2QR6M", title: "Bhoot Bangla · Aahat", start: 0 },
  },
  M = (e) => (Number.isFinite(e) ? Math.max(0, 1 - e / 11) ** 1.5 : 0),
  z = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ],
  f = ([e, t]) => ({ x: (e + 0.5) * u.cell, z: (t + 0.5) * u.cell }),
  x = (e) => [Math.floor(e.x / u.cell), Math.floor(e.z / u.cell)];
function g(e, t, a) {
  const n = (o) => o.join(","),
    l = [t],
    r = new Map([[n(t), null]]);
  for (let o = 0; o < l.length; o++) {
    const c = l[o];
    if (n(c) === n(a)) {
      const h = [];
      for (let i = c; i; i = r.get(n(i))) h.unshift(i);
      return h;
    }
    for (const [h, i] of z) {
      const p = [c[0] + h, c[1] + i];
      e[p[1]]?.[p[0]] === 0 && !r.has(n(p)) && (r.set(n(p), c), l.push(p));
    }
  }
  return [];
}
function d(e = u.seed) {
  const t = Array.from({ length: u.size }, () => Array(u.size).fill(1)),
    a = [[1, 1]],
    n = () => (
      (e = (Math.imul(e, 1664525) + 1013904223) >>> 0),
      e / 4294967296
    );
  for (t[1][1] = 0; a.length;) {
    const [r, o] = a.at(-1),
      c = z.filter(
        ([p, y]) =>
          r + p * 2 > 0 &&
          r + p * 2 < u.size - 1 &&
          o + y * 2 > 0 &&
          o + y * 2 < u.size - 1 &&
          t[o + y * 2][r + p * 2],
      );
    if (!c.length) {
      a.pop();
      continue;
    }
    const [h, i] = c[Math.floor(n() * c.length)];
    ((t[o + i][r + h] = t[o + i * 2][r + h * 2] = 0),
      a.push([r + h * 2, o + i * 2]));
  }
  const l = [];
  for (let r = 1; r < u.size - 1; r++)
    for (let o = 1; o < u.size - 1; o++)
      !t[r][o] &&
        z.filter(([c, h]) => t[r + h][o + c] === 0).length === 1 &&
        (o !== 1 || r !== 1) &&
        l.push([o, r]);
  return (
    l.sort((r, o) => g(t, [1, 1], o).length - g(t, [1, 1], r).length),
    { grid: t, start: [1, 1], exit: l[0], runes: l.slice(1, 4) }
  );
}
function w() {
  const e = d();
  return {
    ...e,
    player: f(e.start),
    ghost: f(e.exit),
    collected: [],
    elapsed: 0,
    grace: 12,
    caught: 0,
    mode: "patrol",
    patrol: 0,
    waypoint: null,
    won: !1,
  };
}
function s(e, t, a, n = 0.25) {
  for (const l of [-n, n])
    for (const r of [-n, n])
      if (e[Math.floor((a + r) / u.cell)]?.[Math.floor((t + l) / u.cell)] !== 0)
        return !0;
  return !1;
}
function H(e, t, a, n) {
  e.won ||
    (s(e.grid, e.player.x + t * n, e.player.z) || (e.player.x += t * n),
    s(e.grid, e.player.x, e.player.z + a * n) || (e.player.z += a * n));
}
function m(e) {
  const t = (n) => Math.hypot(e.player.x - f(n).x, e.player.z - f(n).z),
    a = e.runes.findIndex((n, l) => !e.collected.includes(l) && t(n) < 1.8);
  return a >= 0
    ? { type: "rune", index: a }
    : t(e.exit) < 1.8
      ? { type: "exit" }
      : null;
}
function k(e) {
  if (e.won) return null;
  const t = m(e);
  return t
    ? t.type === "rune"
      ? (e.collected.push(t.index), (e.grace = Math.max(e.grace, 2)), "rune")
      : e.collected.length === e.runes.length
        ? ((e.won = !0), "win")
        : "locked"
    : null;
}
function A(e, t) {
  if (e.won) return null;
  if (
    ((t = Math.min(Math.max(t, 0), 0.05)),
    (e.elapsed += t),
    (e.grace = Math.max(0, e.grace - t)),
    !e.waypoint)
  ) {
    const o = x(e.ghost),
      c = g(e.grid, o, x(e.player));
    e.mode = e.grace <= 0 && c.length <= 9 ? "chase" : "patrol";
    const h =
      e.mode === "chase" ? x(e.player) : e.runes[e.patrol % e.runes.length];
    let i = g(e.grid, o, h);
    (i.length < 2 &&
      e.mode === "patrol" &&
      (e.patrol++, (i = g(e.grid, o, e.runes[e.patrol % e.runes.length]))),
      (e.waypoint = i.length > 1 ? f(i[1]) : { ...e.player }));
  }
  const a = e.waypoint.x - e.ghost.x,
    n = e.waypoint.z - e.ghost.z,
    l = Math.hypot(a, n),
    r = e.mode === "chase" ? 2.45 : 1.45;
  return (
    l <= r * t
      ? ((e.ghost = { ...e.waypoint }), (e.waypoint = null))
      : ((e.ghost.x += (a / l) * r * t), (e.ghost.z += (n / l) * r * t)),
    e.grace <= 0 &&
    Math.hypot(e.player.x - e.ghost.x, e.player.z - e.ghost.z) < 0.85
      ? (e.caught++,
        (e.player = f(e.start)),
        (e.ghost = f(e.exit)),
        (e.waypoint = null),
        (e.grace = 9),
        (e.mode = "patrol"),
        "caught")
      : null
  );
}
export {
  u as H,
  g as a,
  x as b,
  w as c,
  H as d,
  M as g,
  m as h,
  f as m,
  A as s,
  k as u,
};
