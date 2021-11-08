let rerenderEntireTree = () => {};

const state = {
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
  },
};

export const updateNewPostValue = (newText) => {
  state.profilePage.newPostValue = newText;
  rerenderEntireTree(state);
};

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostValue,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostValue = "";
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
