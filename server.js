const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);
// Set Static Folder

app.use(express.static(path.join(__dirname, "public")));

// run when client connects

io.on("connection", (socket) => {
  console.log("New Web Socket Connection.......");
  socket.emit("message", "Welcome to Texter !");
});

const PORT = 3000 || process.env.PORT;

server.listen(PORT, () => console.log(`Server running on PORT $PORT}`));
