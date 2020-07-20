
import { ActionTypes } from "../../utils/message";
import photoReducer from './photoReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedPhotoDetails: photoReducer,
});

export default rootReducer;
