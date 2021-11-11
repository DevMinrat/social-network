import React from "react";
import {
  addPostActionCreater,
  updateNewPostValueActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
  };

  let onPostChange = (text) => {
    let action = updateNewPostValueActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostValue={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostValue={state.profilePage.newPostValue}
    />
  );
};

export default MyPostsContainer;
