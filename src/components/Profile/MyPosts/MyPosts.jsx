import s from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      All posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <Post message="Hiiii" />
      <Post message="Hellowww" />
    </div>
  );
};

export default MyPosts;
