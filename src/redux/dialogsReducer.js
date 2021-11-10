const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_VALUE = "UPDATE-NEW-MESSAGE-VALUE";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageValue,
      };
      state.messages.push(newMessage);
      state.newMessageValue = "";
      return state;

    case UPDATE_NEW_MESSAGE_VALUE:
      state.newMessageValue = action.newText;
    default:
      return state;
  }
};

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updateNewMessageValueActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_VALUE,
  newText: text,
});

export default dialogsReducer;
