import { NavLink } from "react-router-dom";
import s from "./Aside.module.css";

const Aside = () => {
  return (
    <aside className={s.aside}>
      <nav className={s.asideNav}>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/dialogs">Messages</NavLink>
        <NavLink to="#">News</NavLink>
        <NavLink to="#">Music</NavLink>
        <NavLink to="#">Settings</NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
