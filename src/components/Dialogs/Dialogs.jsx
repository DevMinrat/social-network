import { BrowserRouter, NavLink } from "react-router-dom";

import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{props.dialogs}</div>
        <div className={s.messagess}>{props.messages}</div>
      </div>
    </BrowserRouter>
  );
};

export default Dialogs;
