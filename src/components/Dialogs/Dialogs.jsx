import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Max</div>
        <div className={s.dialog}>Ted</div>
        <div className={s.dialog}>Tom</div>
        <div className={s.dialog}>Sam</div>
      </div>
      <div className={s.messagess}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>Yo</div>
        <div className={s.message}>Yes</div>
      </div>
    </div>
  );
};

export default Dialogs;
