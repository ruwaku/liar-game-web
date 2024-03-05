import { type Socket, type Server as SocketIoServer } from "socket.io";

function initializeSocket(socket: Socket) {
  console.debug(
    `Socket initialized: ${socket.handshake.address} ${new Date(socket.handshake.time).toISOString()}`
  );
}

function initializeSocketServer<T extends SocketIoServer>(io: T): T {
  io.on("connection", (socket) => initializeSocket(socket));
  console.log("Socket server initialized");
  return io;
}

export default initializeSocketServer;
