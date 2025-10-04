import { Server } from "socket.io";

const io = new Server(3000, {
    cors: {
        origin: ['http://localhost:5173']
    }
});

io.on('connection', (socket) => {
    console.log(`You connected with ${socket.id}`);
    socket.on('custom-event', (object) => {
        console.log(object)
    })
    
})