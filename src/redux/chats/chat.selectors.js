import { createSelector } from "reselect";

const selectFriend = state => state.friend;

export const selectFriendChat = createSelector(
  [selectFriend],
  (friend )=> friend.friendToChat
)
