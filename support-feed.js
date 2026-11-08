export function supportLine(event) {
  if (
    !event ||
    typeof event.name !== "string" ||
    event.name.length > 32 ||
    !Number.isSafeInteger(event.amount) ||
    event.amount <= 0 ||
    event.currency !== "INR"
  )
    return null;
  return `${event.name} · ${new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(event.amount / 100)}`;
}
export function watchSupport(node) {
  let timer,
    last,
    at = 0,
    socket,
    stopped = false,
    delay = 5000;
  function connect() {
    clearTimeout(timer);
    if (stopped || document.hidden) return;
    const url = new URL("/api/support?action=watch", location.href);
    url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
    socket = new WebSocket(url);
    socket.onmessage = (message) => {
      try {
        const { latest } = JSON.parse(message.data),
          line = supportLine(latest);
        if (line && latest.at >= at) {
          node.querySelector("strong").textContent = line;
          node.hidden = false;
          if (last && last !== latest.id) {
            node.classList.remove("new-shagun");
            void node.offsetWidth;
            node.classList.add("new-shagun");
          }
          last = latest.id;
          at = latest.at;
          delay = 5000;
        } else if (!latest) node.hidden = true;
      } catch {}
    };
    socket.onclose = () => {
      if (!stopped && !document.hidden) {
        timer = setTimeout(connect, delay);
        delay = Math.min(delay * 2, 300000);
      }
    };
    socket.onerror = () => socket.close();
  }
  const visibility = () => {
    clearTimeout(timer);
    if (socket) {
      socket.onclose = null;
      socket.close();
      socket = null;
    }
    if (!document.hidden) connect();
  };
  document.addEventListener("visibilitychange", visibility);
  connect();
  return () => {
    stopped = true;
    clearTimeout(timer);
    if (socket) {
      socket.onclose = null;
      socket.close();
    }
    document.removeEventListener("visibilitychange", visibility);
  };
}
if (typeof document !== "undefined") {
  const card = document.getElementById("latest-shagun");
  if (card) watchSupport(card);
}
