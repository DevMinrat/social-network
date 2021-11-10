import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
