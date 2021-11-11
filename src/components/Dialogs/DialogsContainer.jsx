import React from "react";
import Dialogs from ".//Dialogs";
import {
  addMessageActionCreater,
  updateNewMessageValueActionCreator,
} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreater());
  };

  let updateNewMessageValue = (text) => {
    let action = updateNewMessageValueActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Dialogs
      updateNewMessageValue={updateNewMessageValue}
      addMessage={addMessage}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      newMessageValue={state.dialogsPage.newMessageValue}
    />
  );
};

export default DialogsContainer;
