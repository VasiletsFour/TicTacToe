import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3000";

const socket = socketIOClient(ENDPOINT);

export const newUserSocket = (ip: string, type:"X"| "O"|"Any") => {
    socket.emit("userConnect", ip, type);
};

export const check = (ip: string) => {
    socket.emit(ip);
};

export const disconnectSocket = () => {
    socket.emit("disconnect");
};