const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_VALUE = "UPDATE-NEW-POST-VALUE";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostValue,
      };
      state.posts.push(newPost);
      state.newPostValue = "";
      return state;

    case UPDATE_NEW_POST_VALUE:
      state.newPostValue = action.newText;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostValueActionCreator = (text) => ({
  type: UPDATE_NEW_POST_VALUE,
  newText: text,
});

export default profileReducer;
