import socketIOClient from "socket.io-client";
import {getMultiplay  } from "../helpers/storage/storage";

let socket: any;
const ENDPOINT = "http://127.0.0.1:3000";

getMultiplay() && (socket = socketIOClient(ENDPOINT));

export const newUserSocket = (ip: string, type: "X" | "O" | "Any") => {
  socket.emit("userConnect", ip, type);
};

export const run = (ip: string, jsonArr: string) => {
  socket.emit("run", ip, jsonArr);
};

export const check = (ip: string, foo: (result: string) => void) => {
  socket.on(ip, (data: any) => foo(data));
};

export const disconnectSocket = () => {
  socket.emit("disconnect user");
};
