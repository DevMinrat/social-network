import { BrowserRouter, NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newDialogMessage = React.createRef();

  let sendMessage = () => {
    let text = newDialogMessage.current.value;
    alert(text);
  };

  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div>
          <div className={s.messagess}>{messagesElements}</div>
          <textarea ref={newDialogMessage}></textarea>
          <button onClick={sendMessage}>Send Message</button>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dialogs;
