import { combineReducers } from "redux";
import profileReducer from './profile-view/profileReducer';
import UserReducer from "./user/userReducer";
import chatReducer from "./chats/chatReducer";

export default combineReducers({
           profile: profileReducer,
           user: UserReducer,
           friend: chatReducer
})