import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className="profile">
      <div>
        <img
          className={s.imgHeader}
          src="https://mebel-go.ru/mebelgoer/88741402242435-oboi-1920h1080.-davaj-ne-videt-melkogo-v-zerkalnom-otrazhenii-20.jpg"
        ></img>
      </div>
      <div>ava+descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
