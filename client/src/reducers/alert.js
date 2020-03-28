import { SET_ALERT, REMOVE_ALERT } from '../actions/types'; // eslint-disable-line no-unused-vars

const intialState = [];

export default function(state = intialState, action) {
  
  const { type, payload } = action;  // eslint-disable-line no-unused-vars

    switch(type){
      
        case 'SET_ALERT':
          return[...state, action.payload];
        case REMOVE_ALERT:
          return state.filter(alert => alert.id !== action.payload);
        default:
            return state;
    }
}