import { createApp } from 'vue'
import App from './App.vue'
import {io} from 'socket.io-client'

const socket = io('http://localhost:3000');
// socket.on('connect', console.log("Connected"))
// socket.emit('custom-event', {message: 'This is a custom message'});

socket.on('connect', () => {
    socket.emit('custom-event', {message: "this is a random message"});
})



createApp(App).mount('#app')
