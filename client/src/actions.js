
// maybe move out later
const socket = new WebSocket('ws://127.0.0.1:4000');

// bind ws OP to dispatch

// Connection opened
socket.addEventListener('open', (event) => {
  socket.send(
    JSON.stringify({
      OP: 'CONNECTED'
    })
  );
});


// initialize the socket onMessage listener
export const setUsername = (username) => dispatch => {

  // Listen for messages
  //   sends ALL OP codes and payloads to reducer
  socket.addEventListener('message', (event) => {
    const payload = JSON.parse(event.data);
    dispatch({
      type : payload.OP,
      ...payload
    });
  });

  socket.send(
    JSON.stringify({
      OP: 'SET_USERNAME',
      username : username
    })
  );

};

export const inviteUser = (selectedUser) => dispatch => {

  socket.send(
    JSON.stringify({
      OP: 'INVITE_USER',
      username : selectedUser
    })
  );

};

export const acceptInvite = (invitesFrom) => dispatch => {

  socket.send(
    JSON.stringify({
      OP: 'ACCEPT_INVITE',
      username : invitesFrom
    })
  );

};

export const declineInvite = (invitesFrom) => dispatch => {

  socket.send(
    JSON.stringify({
      OP: 'DECLINE_INVITE',
      username : invitesFrom
    })
  );

};
