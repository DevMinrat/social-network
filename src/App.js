import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Aside />
        <div className="content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateNewMessageValue={props.updateNewMessageValue}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostValue={props.updateNewPostValue}
              />
            )}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
