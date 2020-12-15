import express, { Application } from "express";
import http from "http";
import socketIo, { Socket } from "socket.io";

interface NewSocket extends Socket{
    userIp:string
    type:Type
}

interface User{
    ip:string
    type:Type
}

interface Type{
    type:"X" | "O"| "Any"
}

export const app: Application = express();
export const server = http.createServer(app);
const io = socketIo(server)
let activeUsers:Array<User> = new Array();

io.on("connect", (socket: NewSocket) => {
    socket.on("userConnect", (ip: string, type:Type) => {
        socket.join(ip);
        socket.userIp = ip;
        socket.type = type
        
        const result = filterArr(ip)
        
        result.length === 0 &&  activeUsers.push({ip, type})

        activeUsers.map((item:User)=>{if(item.ip === ip && item.type !== type)item.type = type })
       
        console.log(activeUsers)
    });

    socket.on("check", (ip: string, arr:Array<User>) => {
        filterArr(ip).length !==0 && sendMsg(ip, arr);
    });

    socket.on("disconnect user", () => {
        filterArr(socket.userIp).length !== 0 && disconectUser(socket);
    });
});

const sendMsg = (ip: string, arr:Array<User>) => {
    io.to(ip).emit(JSON.stringify(arr), true);
};

const disconectUser = (socket: NewSocket) => {
    socket.leave(socket.userIp);
    const newUserActivate = activeUsers.filter((item:User)=> item.ip !==socket.userIp)
    activeUsers = newUserActivate
};

const filterArr =(ip:string)=> activeUsers.filter((item:User)=>item.ip === ip)
