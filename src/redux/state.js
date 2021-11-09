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

  getState() {
    return this._state;
  },

  updateNewPostValue(newText) {
    this._state.profilePage.newPostValue = newText;
    this._callSubscriber(this._state);
  },

  addPost() {
    debugger;
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostValue,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostValue = "";
    this._callSubscriber(this._state);
  },

  updateNewMessageValue(newText) {
    this._state.dialogsPage.newMessageValue = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 6,
      message: this._state.dialogsPage.newMessageValue,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageValue = "";
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {},
};

window.store = store;

export default store;
