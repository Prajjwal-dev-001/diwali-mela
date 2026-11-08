function o(t, e, a, s) {
  (t.position.set(e.x, 1.68, e.z),
    t.lookAt(
      e.x - Math.sin(a) * Math.cos(s),
      1.68 + Math.sin(s),
      e.z - Math.cos(a) * Math.cos(s),
    ));
}
export { o as a };
