import { BrowserRouter, NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";
import {
  addMessageActionCreater,
  updateNewMessageValueActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newDialogMessage = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreater());
  };

  let updateNewMessageValue = () => {
    let text = newDialogMessage.current.value;
    let action = updateNewMessageValueActionCreator(text);
    props.dispatch(action);
  };

  return (
    <BrowserRouter>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div>
          <div className={s.messagess}>{messagesElements}</div>
          <div>
            <textarea
              ref={newDialogMessage}
              value={props.dialogsPage.newMessageValue}
              onChange={updateNewMessageValue}
            />
            <button onClick={addMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Dialogs;
