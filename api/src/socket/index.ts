import express, { Application } from "express";
import http from "http";
import socketIo, { Socket } from "socket.io";

interface NewSocket extends Socket{
    userIp:string
    type:Type
}

interface User{
    [key:string]:{
        oponent:string | null
        field:string
        type:Type
    }
}

interface Type{
    type:"X" | "O"
}

export const app: Application = express();
export const server = http.createServer(app);
const io = socketIo(server)
const activeUsers = new Set();
const userGameParams:User = {}

io.on("connect", (socket: NewSocket) => {
    socket.on("userConnect", (ip: string, type:Type) => {
        socket.join(ip);
        socket.userIp = ip;
        socket.type = type
        // activeUsers.add(ip);
        
        userGameParams[ip] = {
            oponent:null,
            type:type,
            field:null
        }
        
        console.log(userGameParams)

        for(let key in userGameParams){
            if(userGameParams[key].oponent === null && userGameParams[key].type !== type){
                userGameParams[key].oponent = ip
                userGameParams[ip].oponent = key
                break
            }
            console.log(userGameParams[key])
        }

        console.log(userGameParams)

    });

    socket.on("run", (ip: string, field:string) => {
        activeUsers.has(ip) && sendMsg(ip, field);
    });

    socket.on("disconnect user", () => {
        activeUsers.has(socket.userIp) && disconectUser(socket);
    });
});

const sendMsg = (ip: string, field:string) => {
    let oponentIp
    
    for(let key in userGameParams){
        if(key === ip ){
           oponentIp =  userGameParams[key].oponent 
            break
        }
    }

    io.to(oponentIp).emit(field, true);
};

const disconectUser = (socket: NewSocket) => {
    socket.leave(socket.userIp);
    delete userGameParams[socket.userIp]
    activeUsers.delete(socket.userIp);
};

