import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        addPost={props.addPost}
        updateNewPostValue={props.updateNewPostValue}
        newPostValue={props.profilePage.newPostValue}
      />
    </div>
  );
};

export default Profile;