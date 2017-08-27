import { USERNAME_SET, LOBBY_USERS } from './op';

const initialState = {
  username : '',
  users : [], // in lobby
};

const reducers = (state = initialState, action) => {

  switch(action.type){

    case USERNAME_SET: // OP
      return {
        ...state,
        username : action.username
      };

    case LOBBY_USERS: // OP
      return {
        ...state,
        users : action.users
      };

  }

  return state;
}

export default reducers;
