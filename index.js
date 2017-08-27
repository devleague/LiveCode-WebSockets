const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');
const PORT = process.env.PORT || 3000;
const app = express();

// app.use(express.static('./public'));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const users = [];

wss.on('connection', function connection(ws, req) {
  // const location = url.parse(req.url, true);

  // ws is current user
  users.push(ws);
  // initialize username as null
  ws.username = null; // will be set later in SET_USERNAME

  ws.on('close', function (){
    users.splice( users.indexOf(ws), 1 );
    // also broadcast to all other users
    users.forEach(user => {
      user.send(
        JSON.stringify({
          OP: 'USER_DISCONNECTED', // all users not in room
          username: ws.username // could be undefined
        })
      );
    });
  });

  ws.on('message', function incoming(message) {
    const payload = JSON.parse(message);
    console.log('received: %s', payload);

    switch (payload.OP) {
      case 'CREATE_ROOM':
        rooms.createRoom(payload.roomName);
        ws.send(
          JSON.stringify({
            OP: 'CREATE_ROOM_SUCCESS'
          })
        );
        break;
      case 'CHAT': // broadcast
        users.forEach(user => {
          user.send(
            JSON.stringify({
              OP: 'CHAT',
              message: payload.message,
              username: payload.username
            })
          );
        });
        break;
      case 'SET_USERNAME': // doing too much!?!?
        ws.username = payload.username;

        // confirm username is set
        ws.send(
          JSON.stringify({
            OP: 'USERNAME_SET',
            username: payload.username
          })
        );

        // also, broadcast that a new user joined the lobby
        // send current list of users
        //   each user joining will send a new OP seperately
        users.forEach(user => {
          user.send(
            JSON.stringify({
              OP: 'LOBBY_USERS', // all users not in room
              users: users.filter(user => user.username !== null).map(user => user.username) // only the names
            })
          );
        });
        break;
      case 'CONNECTED':
        console.log('a user has connected');
        break;
    }
  });

  ws.send(
    JSON.stringify({
      OP: 'SUCCESSFUL_CONNECTION'
    })
  );
});

server.listen(PORT, function listening() {
  console.log('Listening on %d', server.address().port);
});
