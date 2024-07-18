import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
console.log("server running at 8080");

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});