import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  let messagesElements = props.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));

  let newDialogMessage = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = () => {
    let text = newDialogMessage.current.value;
    props.updateNewMessageValue(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div>
        <div className={s.messagess}>{messagesElements}</div>
        <div>
          <textarea
            ref={newDialogMessage}
            value={props.newMessageValue}
            onChange={onMessageChange}
          />
          <button onClick={onAddMessage}>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
