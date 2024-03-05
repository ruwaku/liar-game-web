"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { io, type Socket } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URI!, {
  autoConnect: false,
  addTrailingSlash: false,
});

const SocketContext = createContext<Socket>(socket);
/*
interface IUseSocketProps {
  socketOptions: Parameters<typeof io>[1];
}
export function useSocket({ socketOptions }: IUseSocketProps) {
  const socket = useContext(SocketContext);
  useEffect(() => {
    if (socket) {
      socket.connect();
    }
    return () => {
      socket?.disconnect();
    };
  }, [socket]);
}
 */
export const useSocket = (): Socket => {
  const socket = useContext(SocketContext);
  if (!socket.connected) {
    socket.connect();
  }
  return socket;
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
