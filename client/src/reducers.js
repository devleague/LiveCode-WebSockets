import {
  USERNAME_SET,
  LOBBY_USERS,
  USER_DISCONNECTED
} from './op';

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

    case USER_DISCONNECTED: // OP
      if( action.username !== null ){
        return {
          ...state,
          users : state.users.filter( user => user !== action.username )
        };
      } else {
        return state;
      }

    case LOBBY_USERS: // OP
      return {
        ...state,
        users : action.users
      };

    default: return state;

  }

}

export default reducers;
