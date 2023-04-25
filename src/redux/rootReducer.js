import { combineReducers } from "redux";
import profileReducer from './profile-view/profileReducer';
import UserReducer from "./user/userReducer";

export default combineReducers({
           profile: profileReducer,
           user: UserReducer
})