import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  return (
    <div>
      All posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      {props.posts}
    </div>
  );
};

export default MyPosts;
