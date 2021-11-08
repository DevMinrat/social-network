import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state, {
  updateNewPostValue,
  addPost,
  subscribe,
  addMessage,
  updateNewMessageValue,
} from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostValue={updateNewPostValue}
        addMessage={addMessage}
        updateNewMessageValue={updateNewMessageValue}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
