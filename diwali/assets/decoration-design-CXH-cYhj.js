const o = {
    gold: "#ffd078",
    rose: "#ff83aa",
    teal: "#72e4cf",
    violet: "#b39aff",
    orange: "#ff9955",
  },
  s = 40;
function f(a) {
  return (
    Array.isArray(a) &&
    a.length <= s &&
    a.every(
      (e) =>
        e &&
        Object.hasOwn(o, e.colour) &&
        Number.isFinite(e.x) &&
        Math.abs(e.x) <= 1 &&
        Number.isFinite(e.y) &&
        Math.abs(e.y) <= 1 &&
        Number.isFinite(e.size) &&
        e.size >= 0.7 &&
        e.size <= 1.5 &&
        Number.isFinite(e.angle) &&
        e.angle >= 0 &&
        e.angle <= 360,
    )
  );
}
function l(a, e, n, t) {
  return Array.from({ length: a === "arch" ? 15 : 12 }, (c, i) => {
    const r = -0.9 + (i * 1.8) / (a === "arch" ? 14 : 11);
    return {
      x: r,
      y: a === "arch" ? -0.7 + r * r : 0.45,
      colour: e,
      size: n,
      angle: t,
    };
  });
}
export { o as D, s as a, l as d, f as v };
