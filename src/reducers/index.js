import {
  combineReducers
} from 'redux';
import {
  routerReducer as routing
} from 'react-router-redux'
import {
  AUTH_DISCARD_TOKEN
} from '../constants/actionsType';
import auth from './auth';

const appReducer = combineReducers({
  routing,
  auth
});

const rootReducer = (state, action) => {
  if (action.type === AUTH_DISCARD_TOKEN) {
    const {
      routing
    } = state;
    state = {
      routing
    };
  }

  return appReducer(state, action);
}

export default rootReducer;
