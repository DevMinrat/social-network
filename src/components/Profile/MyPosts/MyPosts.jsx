import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostValue(text);
  };

  return (
    <div>
      All posts
      <div>
        <textarea
          ref={newPostElement}
          value={props.newPostValue}
          onChange={onPostChange}
        />
        <button onClick={onAddPost}>Add Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
