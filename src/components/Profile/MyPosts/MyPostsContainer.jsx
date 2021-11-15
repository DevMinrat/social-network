import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreater,
  updateNewPostValueActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostValue: state.profilePage.newPostValue,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreater());
    },
    updateNewPostValue: (text) => {
      let action = updateNewPostValueActionCreator(text);
      dispatch(action);
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
