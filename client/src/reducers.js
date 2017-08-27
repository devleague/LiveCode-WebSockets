import { USERNAME_SET } from './actions';

const initialState = {
  username : ''
};

const reducers = (state = initialState, action) => {

  switch(action.type){

    case USERNAME_SET: // OP
      return {
        ...state,
        username : action.username
      };

  }

  return state;
}

export default reducers;
