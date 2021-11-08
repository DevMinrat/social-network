import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      All posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
