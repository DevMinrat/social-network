import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className="profileInfo">
      <div>
        <img
          className={s.imgHeader}
          src="https://mebel-go.ru/mebelgoer/88741402242435-oboi-1920h1080.-davaj-ne-videt-melkogo-v-zerkalnom-otrazhenii-20.jpg"
        ></img>
      </div>
      <div>ava+descr</div>
    </div>
  );
};

export default ProfileInfo;
