import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.get("/", (req, res) => {
  res.send("API working!");
});

io.on("connection", (socket) => {
  console.log("User connected", socket.id);

  socket.on("message", (data) => {
    socket.broadcast.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
