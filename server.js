import { Server } from "socket.io";

const io = new Server(3000, {
    cors: {
        origin: ['http://localhost:5173']
    }
});

io.on('connection', (socket) => {
    console.log(`Client connected ${socket.id}`);
    socket.on('send-morse', (data) => {
        console.log('Received Morse: ', data.morse);

        io.emit('morse-reply', {morse: data.morse})
    })
    // console.log(`You connected with ${socket.id}`);
    // socket.on('send-morse', data => {
    //     console.log(data.morse);
    //     socket.emit('morse-reply', {morse: data.morse})
    // })
    
})