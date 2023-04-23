import { combineReducers } from "redux";
import profileReducer from './profile-view/profileReducer';

export default combineReducers({
           profile: profileReducer
})