import io from 'socket.io-client';

const ws = io('ws://127.0.0.1:5000', { transports: ['websocket'] });

ws.on('newMessage', message => {
  console.log(message);
  // setFrankieMessages(oldArray => [...oldArray, messageObj]);
});

ws.on('connect', () => {
  console.log('WS Conectado');
});

export default ws;