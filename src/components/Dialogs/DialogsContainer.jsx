import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageCreater,
  updateNewMessageValueCreator,
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageValue: state.dialogsPage.newMessageValue,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageValue: (text) => {
      let action = updateNewMessageValueCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageCreater());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
