"use client";

import { SocketProvider, useSocket } from "@/components/socket/socketProvider";
import { useRef, useEffect } from "react";
import Button from "@/components/ui/button";
import type { Socket } from "socket.io-client";

function Tester() {
  const socket: Socket = useSocket()
    .on("connect", () =>
      log(`연결됨. (active: ${socket.active} | id: ${socket.id} | recovered: ${socket.recovered})`)
    )
    .on("disconnect", () => log(`연결 해제됨 ${socket.recovered}`));
  const ref = useRef<HTMLTextAreaElement>(null);
  const log = (message: string) => {
    if (ref.current) {
      ref.current.value += `[${new Date().toISOString()}] ${message}\n`;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).__socket = socket;
    }
  });
  return (
    <div>
      <p>Socket Test Page</p>
      <textarea
        ref={ref}
        readOnly
        style={{ height: 400, width: "100%", maxWidth: 1200, fontSize: "0.6rem" }}
      ></textarea>
      <div>
        <Button onClick={socket.disconnect.bind(socket)}>연결 해제</Button>
        <Button onClick={socket.connect.bind(socket)}>연결</Button>
      </div>
      <div>window.__socket</div>
    </div>
  );
}

export default function Page() {
  return (
    <SocketProvider>
      <Tester />
    </SocketProvider>
  );
}
