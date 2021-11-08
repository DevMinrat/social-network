import { rerenderEntireTree } from "../render";

const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hiiii" },
      { id: 2, message: "Hellowww" },
      { id: 3, message: "tssss" },
    ],
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export default state;
