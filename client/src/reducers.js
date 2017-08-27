import { SET_USERNAME } from './actions';

const initialState = {
  username : ''
};

const reducers = (state = initialState, action) => {

  switch(action.type){
    case SET_USERNAME:
      return {
        ...state,
        username : action.username
      };
  }

  return state;
}

export default reducers;
