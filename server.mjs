import http from 'http';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;
const PORT = process.env.PORT || 8080;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.pdf': 'application/pdf',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle API mock for market config
  if (pathname === '/api/market') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ready: true, keyId: 'rzp_live_TqA6fNk02O7kkr', mode: 'live' }));
    return;
  }

  if (pathname === '/api/support') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: true, latest: null }));
    return;
  }

  // Handle diwali prefix or root
  if (pathname === '/' || pathname === '/diwali' || pathname === '/diwali/') {
    pathname = '/index.html';
  }

  // Try direct file first
  let filePath = path.join(rootDir, pathname);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    // If path starts with /diwali/, try stripping /diwali/
    if (pathname.startsWith('/diwali/')) {
      const stripped = pathname.replace(/^\/diwali\//, '/');
      const fallbackPath = path.join(rootDir, stripped);
      if (fs.existsSync(fallbackPath) && !fs.statSync(fallbackPath).isDirectory()) {
        filePath = fallbackPath;
      }
    }
  }

  // If still not found, check if it's index.html fallback
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(rootDir, 'index.html');
  }

  if (!fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': contentType,
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache'
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

// Native WebSocket server for /api/support and PartyKit rooms
server.on('upgrade', (req, socket, head) => {
  const key = req.headers['sec-websocket-key'];
  if (!key) {
    socket.destroy();
    return;
  }

  const digest = crypto
    .createHash('sha1')
    .update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
    .digest('base64');

  const responseHeaders = [
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${digest}`
  ];

  socket.write(responseHeaders.join('\r\n') + '\r\n\r\n');

  // Handle WebSocket frame sending
  function sendText(text) {
    const payload = Buffer.from(text);
    const len = payload.length;
    let header;
    if (len < 126) {
      header = Buffer.from([0x81, len]);
    } else if (len < 65536) {
      header = Buffer.from([0x81, 126, (len >> 8) & 0xff, len & 0xff]);
    } else {
      header = Buffer.alloc(10);
      header[0] = 0x81;
      header[1] = 127;
      header.writeBigUInt64BE(BigInt(len), 2);
    }
    socket.write(Buffer.concat([header, payload]));
  }

  // Send initial state message
  sendText(JSON.stringify({ latest: null }));

  socket.on('error', () => {
    socket.destroy();
  });
});

server.listen(PORT, () => {
  console.log(`Diwali Mela server running at http://localhost:${PORT}`);
  console.log(`Explore mode: http://localhost:${PORT}/?play=explore`);
  console.log(`Diwali path: http://localhost:${PORT}/diwali/?play=explore`);
});
