// 🔹 1. What is WebSocket?
// ➤ Definition:
// WebSocket is a communication protocol that provides full-duplex, bidirectional,
// persistent communication between client and server over a single TCP connection.

// 🔹 2. Why WebSocket (vs HTTP)?
// | Feature       | HTTP                             | WebSocket                                  |
// | ------------- | -------------------------------- | ------------------------------------------ |
// | Communication | Unidirectional (Client → Server) | Bidirectional                              |
// | Connection    | Opens & closes per request       | Persistent after handshake                 |
// | Use Cases     | Simple APIs, websites            | Real-time apps: chat, games, stock updates |
// | Latency       | Higher due to headers            | Lower, minimal overhead                    |

// 🔹 3. How WebSocket Works?
// Step-by-step:
// - Client initiates a handshake via HTTP.
// - Server responds and upgrades the protocol to WebSocket.
// - After upgrade, both can send messages independently and continuously.
// - WebSocket stays open until one side closes it.

// 🔹 4. Native WebSocket Example (No Socket.io)
// Backend (Node.js using ws package):

// server.js
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (msg) => {
    console.log("Received:", msg);
    ws.send(`Echo: ${msg}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

// 🔹 5. What is Socket.IO?
// ➤ Definition:
// Socket.IO is a library that uses WebSockets and falls back to other protocols (polling) if needed.
// It adds:

// - Auto reconnection
// - Rooms, namespaces
// - Broadcasting
// - Event-based communication

//  7. Socket.IO Example (Full-Duplex Chat Example)

// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
  res.send("Socket.IO Server Running");
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", (data) => {
    console.log("Message from client:", data);
    socket.emit("message", `Echo: ${data}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// | Feature            | WebSocket          | Socket.IO              |
// | ------------------ | ------------------ | ---------------------- |
// | Protocol           | WebSocket only     | WebSocket + fallbacks  |
// | Built-in Reconnect | ❌ No               | ✅ Yes                  |
// | Rooms/Namespaces   | ❌ No               | ✅ Yes                  |
// | Simplicity         | ✅ Simple           | ⚠️ More Setup          |
// | Message format     | Raw Strings/Binary | Custom events/messages |

// 🔹 9. Real Use Cases of Socket.IO
// Real-time chat applications (WhatsApp clone)

// - Multiplayer games
// - Live notifications (e.g., Facebook)
// - Collaborative editing (like Google Docs)
// - Stock price updates or live scores
