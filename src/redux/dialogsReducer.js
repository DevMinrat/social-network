const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_VALUE = "UPDATE-NEW-MESSAGE-VALUE";

let initialState = {
  dialogs: [
    { id: 1, name: "Max" },
    { id: 2, name: "Ted" },
    { id: 3, name: "Tom" },
    { id: 4, name: "Sam" },
    { id: 5, name: "Mia" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Yo" },
    { id: 4, message: "How a you" },
    { id: 5, message: "Yes" },
  ],
  newMessageValue: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageValue,
      };

      return {
        ...state,
        newMessageValue: "",
        messages: [...state.messages, newMessage],
      };

    case UPDATE_NEW_MESSAGE_VALUE:
      return { ...state, newMessageValue: action.newText };

    default:
      return state;
  }
};

export const addMessageCreater = () => ({ type: ADD_MESSAGE });
export const updateNewMessageValueCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_VALUE,
  newText: text,
});

export default dialogsReducer;
