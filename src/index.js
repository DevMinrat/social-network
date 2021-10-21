import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";
import Post from "./components/Profile/MyPosts/Posts/Post";

let dialogs = [
  { id: 1, name: "Max" },
  { id: 2, name: "Ted" },
  { id: 3, name: "Tom" },
  { id: 4, name: "Sam" },
  { id: 5, name: "Mia" },
];

let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Hello" },
  { id: 3, message: "Yo" },
  { id: 4, message: "How a you" },
  { id: 5, message: "Yes" },
];

let posts = [
  { id: 1, message: "Hiiii" },
  { id: 2, message: "Hellowww" },
  { id: 3, message: "tssss" },
];

let postsElements = posts.map((post) => <Post message={post.message} />);

let dialogsElements = dialogs.map((dialog) => (
  <DialogItem name={dialog.name} id={dialog.id} />
));

let messagesElements = messages.map((message) => (
  <Message message={message.message} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      dialogs={dialogsElements}
      messages={messagesElements}
      posts={postsElements}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
