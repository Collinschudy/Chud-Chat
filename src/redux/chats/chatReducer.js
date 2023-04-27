import { ChatActionTypes } from "./chat.action.types";

const INITIAL_STATE = {
    friendToChat: {}
}

const chatReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ChatActionTypes.FRIEND_TO_CHAT:
            return {
                ...state,
                friendToChat: action.payload

            }
    
        default:
            return state;
    }
}

export default chatReducer;