const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          } else {
            return u;
          }
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };

    default:
      return state;
  }
};

export const followUserAC = (userID) => ({ type: FOLLOW_USER, userID });
export const unfollowUserAC = (userID) => ({ type: UNFOLLOW_USER, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
