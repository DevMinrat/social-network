const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_VALUE = "UPDATE-NEW-POST-VALUE";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_VALUE = "UPDATE-NEW-MESSAGE-VALUE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hiiii" },
        { id: 2, message: "Hellowww" },
        { id: 3, message: "tssss" },
      ],
      newPostValue: "",
    },
    dialogsPage: {
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
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostValue,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostValue = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_VALUE) {
      this._state.profilePage.newPostValue = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageValue,
      };
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageValue = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_VALUE) {
      this._state.dialogsPage.newMessageValue = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreater = () => ({ type: ADD_POST });
export const updateNewPostValueActionCreator = (text) => ({
  type: UPDATE_NEW_POST_VALUE,
  newText: text,
});

export const addMessageActionCreater = () => ({ type: ADD_MESSAGE });
export const updateNewMessageValueActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_VALUE,
  newText: text,
});

window.store = store;

export default store;
