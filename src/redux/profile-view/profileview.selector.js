import { createSelector } from "reselect";

const selectProfile = state => state.profile;

export const selectProfileView = createSelector(
  [selectProfile],
  profile => profile.hidden
)
