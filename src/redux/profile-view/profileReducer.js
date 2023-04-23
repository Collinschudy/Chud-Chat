import ProfileActionTypes from './profileview.action.types';

const INITIAL_STATE = {
    hidden: true
}
const profileReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ProfileActionTypes.TOGGLE_PROFILE_VIEW:
            return {
               ...state,
               hidden: !state.hidden 
            };
        default:
            return state;
    }
}

export default profileReducer