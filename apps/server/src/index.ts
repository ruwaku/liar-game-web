import Express from "express";
import { createServer } from "http";
import { Server as SocketIoServer } from "socket.io";
import initializeExpressApp from "./modules/express";
import initializeSocketServer from "./modules/socket";
// import modules from "./modules";
const expressApp = initializeExpressApp(Express());
const httpServer = createServer(expressApp);
const io = initializeSocketServer(
  new SocketIoServer(
    httpServer,
    Object.assign(
      { addTrailingSlash: false },
      process.env.ALLOW_ALL_ORIGIN == "true" && { cors: { origin: "*" } }
    )
  )
);
let port = process.env.APP_MAIN_PORT ?? 8080;

httpServer.listen(port, () => {
  console.log(`http server opened at port ${port}`);
});
