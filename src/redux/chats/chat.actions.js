import { ChatActionTypes } from "./chat.action.types";


export const setFriendToChat = (friend) => ({
    type: ChatActionTypes.FRIEND_TO_CHAT,
    payload: friend
})